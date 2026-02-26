import SectionTitle from "../../../components/ui/SectionTitle";
import SkillTag from "../../../components/ui/SkillTag";
import styles from "./Skills.module.css";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="skills">
      <div>
        <div className={styles.section}>
          <SectionTitle title="Skills" />

          <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" />
        </div>
      </div>
    </Element>
  );
};

export default Skills;
