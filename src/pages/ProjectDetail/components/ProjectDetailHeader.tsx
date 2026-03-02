import styles from "./ProjectDetailHeader.module.css";

interface ProjectDetailHeaderProps {
  title: string;
  subtitle?: string;
  logoUrl?: string;
  repoLink?: string;
  onBack: () => void;
}

const ProjectDetailHeader = ({ title, subtitle, logoUrl, repoLink, onBack }: ProjectDetailHeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          {logoUrl ? (
            <img src={logoUrl} alt={`${title} logo`} className={styles.logoImg} />
          ) : (
            "LOGO"
          )}
        </div>

        <div className={styles.texts}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.actions}>
        {repoLink && (
          <a
            className={styles.iconLink}
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 레포지토리"
            title="GitHub 레포지토리"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
              <path
                fill="currentColor"
                d="M12 .5C5.73.5.75 5.63.75 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.26.79-.58 0-.29-.01-1.05-.02-2.06-3.2.7-3.88-1.58-3.88-1.58-.53-1.37-1.29-1.74-1.29-1.74-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.22 1.77 1.22 1.03 1.78 2.7 1.27 3.36.97.1-.76.4-1.27.73-1.56-2.55-.3-5.24-1.3-5.24-5.78 0-1.28.45-2.33 1.19-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.32 3.2 1.2.93-.26 1.92-.39 2.9-.39.98 0 1.97.13 2.9.39 2.22-1.52 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.74.82 1.19 1.87 1.19 3.15 0 4.49-2.69 5.48-5.25 5.77.41.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .32.21.7.8.58 4.56-1.53 7.85-5.84 7.85-10.94C23.25 5.63 18.27.5 12 .5z"
              />
            </svg>
          </a>
        )}
        <button className={styles.backBtn} type="button" onClick={onBack} aria-label="뒤로가기">
          ←
        </button>
      </div>
    </header>
  );
};

export default ProjectDetailHeader;
