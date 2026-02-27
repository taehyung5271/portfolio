import SectionTitle from "../../../components/ui/SectionTitle";
import ProjectCard from "../../../components/ui/ProjectCard";
import styles from "./Projects.module.css";
import { Element } from "react-scroll";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../../api/projects";
import { normalizeProject } from "../../../Utils/normalizeProject";
import type { ProjectRowRaw } from "../../../types/ProjectRow";
import type { ProjectUI } from "../../../types/ProjectUI";

const Projects = () => {
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

  return (
    <Element name="projects">
      <section className={styles.section}>
        <SectionTitle title="Projects" />

        {isLoading && <p>loading...</p>}
        {isError && <p style={{ color: "crimson" }}>{error.message}</p>}

        {!isLoading && !isError && (
          <div className={styles.container}>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
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
        )}
      </section>
    </Element>
  );
};

export default Projects;