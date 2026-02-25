import SectionTitle from "../../../components/ui/SectionTitle";
import SkillTag from "../../../components/ui/SkillTag";
import styles from "./Skills.module.css"

const Skills = () => {
    return (
        <div>   
            <div className={styles.Sections}>
                <SectionTitle title="Skills" />
            </div>
            
            test
            <SkillTag text="javaScript" bgColor="#000" txtColor="#FFF"/>
        </div>
    )
}

export default Skills;