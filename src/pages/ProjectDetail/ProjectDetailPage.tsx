import styles from "./ProjectDetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import ProjectDetailHeader from "./components/ProjectDetailHeader";
import MarkdownViewer from "./components/MarkdownViewer";
import CommentSection from "./components/CommentSection";

import { fetchProjectBySlug } from "../../api/projects";
import { fetchMarkdownText } from "../../api/markdown";
import { fetchProjectLikeStatus, createProjectLike, deleteProjectLike } from "../../api/likes";

import { getOrCreateUserKey } from "../../Utils/userKey";

import type { ProjectRowRaw } from "../../types/ProjectRow"
import type { ProjectUI } from "../../types/ProjectUI";
import { normalizeProject } from "../../Utils/normalizeProject";

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { slug = "" } = useParams<{ slug: string }>();

  const queryClient = useQueryClient();
  const userKey = getOrCreateUserKey();

  // 프로젝트 상세 데이터
  const {
    data: project,
    isLoading: isProjectLoading,
    isError: isProjectError,
    error: projectError,
  } = useQuery<ProjectRowRaw, Error, ProjectUI>({
    queryKey: ["project", slug],
    queryFn: () => fetchProjectBySlug(slug),
    select: (raw) => normalizeProject(raw),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });

  // md 내용 (project.mdUrl 얻은 뒤)
  const {
    data: mdContent = "",
    isLoading: isMdLoading,
    isError: isMdError,
    error: mdError,
  } = useQuery<string, Error>({
    queryKey: ["project-md", project?.mdUrl],
    queryFn: () => fetchMarkdownText(project!.mdUrl!),
    enabled: !!project?.mdUrl,
    staleTime: 1000 * 60 * 10,
  });

  const { data: likedByMe = false, isLoading: isLikeStatusLoading } = useQuery<boolean>({
    queryKey: ["project-like-status", project?.id, userKey],
    queryFn: () =>
      fetchProjectLikeStatus({
        projectId: project!.id,
        userKey: userKey ?? "",
      }),
    enabled: !!project && !!userKey,
    staleTime: 1000 * 30,
  });

  const likeMutation = useMutation({
    mutationFn: () =>
      createProjectLike({
        projectId: project!.id,
        userKey: userKey ?? "",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project", slug] });
      queryClient.invalidateQueries({ queryKey: ["project-like-status", project?.id, userKey] });
    },
  });

  const unlikeMutation = useMutation({
    mutationFn: () =>
      deleteProjectLike({
        projectId: project!.id,
        userKey: userKey ?? "",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project", slug] });
      queryClient.invalidateQueries({ queryKey: ["project-like-status", project?.id, userKey] });
    },
  });

  const isLikePending = likeMutation.isPending || unlikeMutation.isPending;

  const handleLikeToggle = () => {
    if (!project || !userKey) return;
    if (likedByMe) {
      unlikeMutation.mutate();
      return;
    }
    likeMutation.mutate();
  };

  if (isProjectLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p style={{ padding: 20 }}>loading...</p>
        </div>
      </main>
    );
  }

  if (isProjectError) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <p style={{ padding: 20, color: "crimson" }}>
            {projectError.message}
          </p>
        </div>
      </main>
    );
  }


  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <ProjectDetailHeader
          title={project!.title}
          subtitle={project!.projectIntro}
          logoUrl={project!.logoUrl}
          repoLink={project!.repoLink}
          onBack={() => navigate(-1)}
        />

        <section className={styles.contentSection}>
          {isMdLoading && <p>md 불러오는 중...</p>}
          {isMdError && <p style={{ color: "crimson" }}>{mdError.message}</p>}
          {!isMdLoading && !isMdError && (
            <MarkdownViewer content={mdContent || "md_url이 비어있습니다."} />
          )}
        </section>

        <section className={styles.commentSection}>
          <CommentSection
            projectId={project!.id}
            slug={project!.slug}
            likeCount={project!.likeCount}
            commentCount={project!.comments.length}
            comments={project!.comments}
            likedByMe={likedByMe}
            isLikePending={isLikePending || isLikeStatusLoading}
            onToggleLike={handleLikeToggle}
          />
        </section>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
