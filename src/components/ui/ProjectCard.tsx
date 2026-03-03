import { useNavigate } from "react-router-dom";
import SkillTag from "./SkillTag";
import styles from "./ProjectCard.module.css";

export interface ProjectCardProps {
  title: string;
  projectIntro: string;
  memberCount: number;
  startDate: string;
  endDate?: string;
  slug: string;
  serviceLink?: string;
  skills: { id: number; name: string; bgColor: string; txtColor: string }[];
  descriptions: string[];
  logoUrl?: string;
}

const ProjectCard = ({
  title,
  slug,
  projectIntro,
  memberCount,
  startDate,
  endDate,
  serviceLink,
  logoUrl,
  skills,
  descriptions,
}: ProjectCardProps) => {
  const navigate = useNavigate();
  if (!slug) return;
  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/projects/${slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate(`/projects/${slug}`);
        }
      }}
    >
      <header className={styles.topRow}>
        <div className={styles.projectIcon}>
          {logoUrl ? (
            <img src={logoUrl} alt={`${title} logo`} />
          ) : (
            "프로젝트 아이콘"
          )}
        </div>

        <span className={styles.memberBadge}>{memberCount}인 프로젝트</span>
      </header>

      <div className={styles.titleBlock}>
        <h3 className={styles.title}>{title}</h3>

        <a
          className={styles.link}
          href={serviceLink || "https://www.example.com"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.linkIcon}>↗</span>
          {serviceLink || "프로젝트에 연결된 실제링크"}
        </a>
      </div>

      <div className={styles.hr} />

      <section className={styles.body}>
        {projectIntro && <p className={styles.subTitle}>{projectIntro}</p>}

        {descriptions.length > 0 && (
          <ul className={styles.descriptionList}>
            {descriptions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </section>

      <section className={styles.stackSection}>
        <h4 className={styles.stackTitle}>기술 스택</h4>
        <div className={styles.stackHr} />

        <div className={styles.skillList}>
          {skills.map((skill) => (
            <SkillTag
              key={skill.id}
              text={skill.name}
              bgColor={skill.bgColor}
              txtColor={skill.txtColor}
            />
          ))}
        </div>

        <p className={styles.date}>
          {startDate} {endDate ? `~ ${endDate}` : ""}
        </p>
      </section>
    </article>
  );
};

export default ProjectCard;
