import styles from "./CareerCard.module.css";
import SkillTag from "../ui/SkillTag";

type Skill = {
  id: number;
  name: string;
  background_color: string;
  text_color: string;
};

type CareerDescription = {
  id: number;
  title: string;
  detail: string;
};

interface CareerCardProps {
  companyName: string;
  companyIntro?: string;
  logoUrl?: string;
  position?: string;
  startDate: string;
  endDate?: string | null;
  skills: Skill[];
  descriptions: CareerDescription[];
}

const CareerCard = ({
  companyName,
  companyIntro,
  logoUrl,
  position,
  startDate,
  endDate,
  skills,
  descriptions,
}: CareerCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.left}>
        <div className={styles.logoWrap}>
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${companyName} 로고`}
              className={styles.logoImg}
            />
          ) : (
            <div className={styles.logoFallback}>기업로고</div>
          )}
        </div>
      </div>

      <div className={styles.vline} />

      <div className={styles.right}>
        <h3 className={styles.company}>
          {companyName}
          {position && (
            <span className={styles.position}> ({position})</span>
          )}
        </h3>

        <p className={styles.period}>
          {startDate} - {endDate ? endDate : "재직중"}
        </p>

        {companyIntro && (
          <p className={styles.companyIntro}>{companyIntro}</p>
        )}

        {skills?.length > 0 && (
          <div className={styles.skillRow}>
            {skills.map((skill) => (
              <SkillTag
                key={skill.id}
                text={skill.name}
                bgColor={skill.background_color}
                txtColor={skill.text_color}
              />
            ))}
          </div>
        )}

        <div className={styles.descList}>
          {descriptions.map((desc) => (
            <section key={desc.id} className={styles.descItem}>
              <h4 className={styles.descTitle}>
                | {desc.title}
              </h4>
              <p className={styles.descDetail}>
                {desc.detail}
              </p>
              <div className={styles.hr} />
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CareerCard;