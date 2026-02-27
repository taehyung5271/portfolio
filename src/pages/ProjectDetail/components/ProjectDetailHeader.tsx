import styles from "./ProjectDetailHeader.module.css";

interface ProjectDetailHeaderProps {
  title: string;
  subtitle?: string;
  onBack: () => void;
}

const ProjectDetailHeader = ({ title, subtitle, onBack }: ProjectDetailHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* 로고 자리(나중에 project logoUrl 연결) */}
        <div className={styles.logo}>LOGO</div>

        <div className={styles.texts}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <button className={styles.backBtn} type="button" onClick={onBack} aria-label="뒤로가기">
        ←
      </button>
    </header>
  );
};

export default ProjectDetailHeader;