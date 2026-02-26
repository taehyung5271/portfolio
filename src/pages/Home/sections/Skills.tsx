import SectionTitle from "../../../components/ui/SectionTitle";
import SkillTag from "../../../components/ui/SkillTag";
import styles from "./Skills.module.css";
import { Element } from "react-scroll";
import languageIcon from "../../../assets/icons/languageIcon.png";
import frontendIcon from "../../../assets/icons/frontendIcon.png";
import backendIcon from "../../../assets/icons/backend.png";
import devopsIcon from "../../../assets/icons/devOps.png";

const Skills = () => {
  return (
    <Element name="skills">
      <div>
        <div className={styles.section}>
          <SectionTitle title="Skills" />

          <div className={styles.container}>
            <div className={styles.skills_set}>
              <img src={languageIcon} alt="language"/>
              <div className={styles.skills_category}>
                language
              </div>
              <div className={styles.skills_list}>
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" />  
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={frontendIcon} alt="frontend"/>
              <div className={styles.skills_category}>
                frontend
              </div>
              <div className={styles.skills_list}>
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" />  
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={backendIcon} alt="backend"/>
              <div className={styles.skills_category}>
                backend
              </div>
              <div className={styles.skills_list}>
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" />  
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={devopsIcon} alt="devOps"/>
              <div className={styles.skills_category}>
                devOps
              </div>
              <div className={styles.skills_list}>
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 
                <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF" /> 

                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
