import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Career.module.css";
import { Element } from "react-scroll";

const Career = () => {
  return (
    <Element name="career">
      <div className={styles.section}>
        <SectionTitle title="Career" />
      </div>
    </Element>
  );
};

export default Career;
