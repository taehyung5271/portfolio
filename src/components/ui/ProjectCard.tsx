import styles from "./ProjectCard.module.css";
import SkillTag from "./SkillTag";

interface ProjectProps {
  title: string;
  member_count: number;
  start_date: string;
  end_date: string;
  service_link: string;
  skills: { name: string; bgColor: string; txtColor: string }[];
  descriptions: string[];
  // (선택) 아이콘 이미지 쓰고 싶으면 추가
  // iconSrc?: string;
}

const ProjectCard = ({
  title,
  member_count,
  start_date,
  end_date,
  service_link,
  skills,
  descriptions,
}: ProjectProps) => {
  return (
    <article className={styles.card}>
      {/* 상단 */}
      <header className={styles.topRow}>
        <div className={styles.projectIcon}>
          {/* 이미지로 바꾸려면 아래처럼
          <img src={iconSrc} alt={`${title} icon`} />
          */}
          프로젝트 아이콘
        </div>

        <span className={styles.memberBadge}>{member_count}인 프로젝트</span>
      </header>

      {/* 제목/링크 */}
      <div className={styles.titleBlock}>
        <h3 className={styles.title}>{title}</h3>
        <a
          className={styles.link}
          href={service_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.linkIcon}>↗</span>
          프로젝트에 연결된 실제링크
        </a>
      </div>

      <div className={styles.hr} />

      {/* 소개/설명 */}
      <section className={styles.body}>
        <h4 className={styles.subTitle}>
          프로젝트 한줄 소개
        </h4>

        {descriptions?.length > 0 && (
          <ul className={styles.descriptionList}>
            {descriptions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </section>

      {/* 기술 스택 */}
      <section className={styles.stackSection}>
        <h4 className={styles.stackTitle}>기술 스택</h4>
        <div className={styles.stackHr} />

        <div className={styles.skillList}>
          {skills.map((skill, idx) => (
            <SkillTag
              key={idx}
              text={skill.name}
              bgColor={skill.bgColor}
              txtColor={skill.txtColor}
            />
          ))}
        </div>

        <p className={styles.date}>
          {start_date} ~ {end_date}
        </p>
      </section>
    </article>
  );
};

export default ProjectCard;