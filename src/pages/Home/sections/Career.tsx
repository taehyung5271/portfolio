import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Career.module.css";
import { Element } from "react-scroll";

const Career = () => {
  return (
    <Element name="career">
      <div className={styles.section}>
        <SectionTitle title="Career" />
        <div className={styles.card}>
            <div className={styles.logo}>
                로고
            </div>
            <div className={styles.container}>
                실데이터
            </div>
        </div>
      </div>
      
    </Element>
  );
};

export default Career;
