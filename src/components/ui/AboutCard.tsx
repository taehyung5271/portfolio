import styles from "./AboutCard.module.css";
interface AboutCardProps {
  iconSrc: string;
  label: string;
  value: string;
  href?: string;
}

const AboutCard = ({ iconSrc, label, value ,href}: AboutCardProps) => {
  return (
    <div className={styles.card}>
      <img src={iconSrc} alt={label} className={styles.icon} />
      <div className={styles.textWrapper}>
        <span className={styles.label}>{label}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {value}
          </a>
        ) : (
          <span className={styles.value}>{value}</span>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
