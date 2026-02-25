import styles from './SectionTitle.module.css';
import clipIcon from '../../assets/images/Clip.svg';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className={styles.container}>
      <img src={clipIcon} alt="section icon" className={styles.icon} />
      <h2 className={styles.title}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;