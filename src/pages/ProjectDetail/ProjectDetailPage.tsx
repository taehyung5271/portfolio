import styles from "./ProjectDetailPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import ProjectDetailHeader from "./components/ProjectDetailHeader";
import MarkdownViewer from "./components/MarkdownViewer";
import CommentSection from "./components/CommentSection";

import { fetchProjectBySlug } from "../../api/projects";
import { fetchMarkdownText } from "../../api/markdown";

import type { ProjectRowRaw } from "../../types/ProjectRow"
import type { ProjectUI } from "../../types/ProjectUI";
import { normalizeProject } from "../../Utils/normalizeProject";

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { slug = "" } = useParams<{ slug: string }>();

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
            likeCount={17} // 좋아요 아직 미연동
            commentCount={project!.comments.length}
            comments={project!.comments}
          />
        </section>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
