import SectionTitle from "../../../components/ui/SectionTitle";
import ProjectCard from "../../../components/ui/ProjectCard";
import styles from "./Projects.module.css";
import { Element } from "react-scroll";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "IT 엘도라도 (블로그)",
      member_count: 1,
      start_date: "2026-02-24",
      end_date: "2026-03-04",
      service_link: "https://example.com",
      descriptions: [
        "티스토리 플랫폼에서의 불편함을 해소하고자 직접 개발",
        "React와 Supabase를 활용한 풀스택 프로젝트",
        "SEO 최적화를 통한 구글 검색 노출 구현",
      ],
      skills: [
        { name: "java", bgColor: "#000000", txtColor: "#FFFFFF" },
        { name: "javaScript", bgColor: "#F7DF1E", txtColor: "#000000" },
        { name: "postgresql", bgColor: "#336791", txtColor: "#FFFFFF" },
      ],
    },
  ];

  return (
    <Element name="projects">
      <section className={styles.section}>
        <SectionTitle title="Projects" />

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              member_count={project.member_count}
              start_date={project.start_date}
              end_date={project.end_date}
              service_link={project.service_link}
              skills={project.skills}
              descriptions={project.descriptions}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
