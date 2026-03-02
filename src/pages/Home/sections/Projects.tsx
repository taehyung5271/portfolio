import SectionTitle from "../../../components/ui/SectionTitle";
import ProjectCard from "../../../components/ui/ProjectCard";
import styles from "./Projects.module.css";
import { Element } from "react-scroll";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../../api/projects";
import { normalizeProject } from "../../../Utils/normalizeProject";
import type { ProjectRowRaw } from "../../../types/ProjectRow";
import type { ProjectUI } from "../../../types/ProjectUI";
import { useMemo, useState } from "react";

const Projects = () => {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
  } = useQuery<ProjectRowRaw[], Error, ProjectUI[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    select: (raw) => raw.map(normalizeProject),
    staleTime: 1000 * 60 * 5,
  });

  const allTags = useMemo(() => {
    const map = new Map<string, { bgColor: string; txtColor: string }>();
    projects.forEach((p) =>
      p.skills.forEach((s) => {
        if (!map.has(s.name)) {
          map.set(s.name, { bgColor: s.bgColor, txtColor: s.txtColor });
        }
      }),
    );
    return Array.from(map.entries())
      .map(([name, colors]) => ({ name, ...colors }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const titleHit = p.title.toLowerCase().includes(q);
      const skillHit = p.skills.some((s) => s.name.toLowerCase().includes(q));
      const queryOk = q.length === 0 || titleHit || skillHit;

      if (activeTags.length === 0) return queryOk;
      const projectTagSet = new Set(p.skills.map((s) => s.name));
      const tagOk = activeTags.some((t) => projectTagSet.has(t));
      return queryOk && tagOk;
    });
  }, [projects, query, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setActiveTags([]);
  };

  return (
    <Element name="projects">
      <section className={styles.section}>
        <SectionTitle title="Projects" />

        {isLoading && <p>loading...</p>}
        {isError && <p style={{ color: "crimson" }}>{error.message}</p>}

        {!isLoading && !isError && (
          <>
            <div className={styles.searchWrap}>
              <input
                className={styles.searchInput}
                placeholder="검색어를 입력해 보세요."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className={styles.clearBtn} type="button" onClick={clearFilters}>
                초기화
              </button>
            </div>

            <div className={styles.tagRow}>
              {allTags.map((tag) => (
                <button
                  key={tag.name}
                  type="button"
                  className={[
                    styles.tagChip,
                    activeTags.includes(tag.name) ? styles.tagActive : "",
                  ].join(" ")}
                  style={{ backgroundColor: tag.bgColor, color: tag.txtColor }}
                  onClick={() => toggleTag(tag.name)}
                >
                  {tag.name}
                </button>
              ))}
            </div>

            <div className={styles.container}>
              {filteredProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  title={p.title}
                  slug={p.slug}
                  projectIntro={p.projectIntro}
                  memberCount={p.memberCount}
                  startDate={p.startDate}
                  endDate={p.endDate}
                  serviceLink={p.serviceLink}
                  skills={p.skills}
                  descriptions={p.descriptions}
                  logoUrl={p.logoUrl}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className={styles.empty}>검색 결과가 없습니다.</p>
            )}
          </>
        )}
      </section>
    </Element>
  );
};

export default Projects;
