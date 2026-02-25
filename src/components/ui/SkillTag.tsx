import styles from "./SkillTag.module.css";

interface TagNameProps {
  text: string;
  bgColor: string;
  txtColor: string;
}

const SkillTag = ({ text, bgColor, txtColor }: TagNameProps) => {
  return (
    <div 
      className={styles.container} 
      style={{ backgroundColor: bgColor }} 
    >
      <p 
        className={styles.name2} 
        style={{ color: txtColor }} 
      >
        {text}
      </p>
    </div>
  );
};

export default SkillTag;