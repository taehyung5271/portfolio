import styles from "./ProjectCard.module.css";
import SkillTag from "./SkillTag";

export interface ProjectCardProps {
  title: string;
  projectIntro: string;
  memberCount: number;
  startDate: string;
  endDate?: string;
  serviceLink?: string;
  skills: { id: number; name: string; bgColor: string; txtColor: string }[];
  descriptions: string[];
  logoUrl?: string;
}

const ProjectCard = ({
  title,
  projectIntro,
  memberCount,
  startDate,
  endDate,
  serviceLink,
  logoUrl,
  skills,
  descriptions,
}: ProjectCardProps) => {
  return (
    <article className={styles.card}>
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

        {serviceLink && (
          <a
            className={styles.link}
            href={serviceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.linkIcon}>↗</span>
            프로젝트에 연결된 실제링크
          </a>
        )}
      </div>

      <div className={styles.hr} />

      <section className={styles.body}>
        <h4 className={styles.subTitle}>프로젝트 한줄 소개</h4>
        {projectIntro && <p className={styles.intro}>{projectIntro}</p>}

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