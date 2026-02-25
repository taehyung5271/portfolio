import styles from "./ProjectCard.module.css";
import SkillTag from "./SkillTag";

interface ProjectProps {
  title: string;
  project_intro: string;
  member_count: number;
  start_date: string;
  end_date: string;
  service_link: string;
  // 기술 스택 데이터 예시 (나중에 DB 조인 결과가 들어올 자리)
  skills: { name: string; bgColor: string; txtColor: string }[];
  descriptions: string[]; // 상세 설명 배열 추가
}


const ProjectCard = ({
  title,
  project_intro,
  member_count,
  start_date,
  end_date,
  service_link,
  skills,
}: ProjectProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.projectIcon}>프로젝트 아이콘</div>
        <div className={styles.memberBadge}>{member_count}인 프로젝트</div>
      </div>

      <div className={styles.titleSection}>
        <h3 className={styles.title}>{title}</h3>
        <a href={service_link} target="_blank" className={styles.link}>
           🔗 프로젝트에 연결된 실제링크
        </a>
      </div>

      <hr className={styles.divider} />

      <div className={styles.content}>
        <p className={styles.intro}>{project_intro}</p>
        <ul className={styles.descriptionList}>
          <li>프로젝트 설명(Ex. 티스토리 플랫폼에서의 불편함을...)</li>
          <li>프로젝트 설명...</li>
        </ul>
      </div>

      <div className={styles.footer}>
        <h4 className={styles.skillTitle}>기술 스택</h4>
        <hr className={styles.dividerSmall} />
        <div className={styles.skillList}>
          {skills.map((skill, index) => (
            <SkillTag 
              key={index} 
              text={skill.name} 
              bgColor={skill.bgColor} 
              txtColor={skill.txtColor} 
            />
          ))}
        </div>
        <p className={styles.date}>
          {start_date} ~ {end_date}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;