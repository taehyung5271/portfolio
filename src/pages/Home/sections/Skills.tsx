import SectionTitle from "../../../components/ui/SectionTitle";
import SkillTag from "../../../components/ui/SkillTag";
import styles from "./Skills.module.css";
import { Element } from "react-scroll";
import languageIcon from "../../../assets/icons/languageIcon.png";
import frontendIcon from "../../../assets/icons/frontendIcon.png";
import backendIcon from "../../../assets/icons/backend.png";
import devopsIcon from "../../../assets/icons/devOps.png";
import { useQuery } from "@tanstack/react-query";
import { fetchSkills } from "../../../api/skills";
import { normalizeSkill } from "../../../Utils/normalizeSkill";
import type { SkillRow } from "../../../types/SkillRow";
import type { SkillUI } from "../../../types/SkillUI";

const Skills = () => {
  const { data: skills = [] } = useQuery<SkillRow[], Error, SkillUI[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
    select: (raw) => raw.map(normalizeSkill),
    staleTime: 1000 * 60 * 10,
  });

  const languageSkills = skills.filter((s) => s.category === "LANGUAGE");
  const frontendSkills = skills.filter((s) => s.category === "FRONTEND");
  const backendSkills = skills.filter((s) => s.category === "BACKEND");
  const devopsSkills = skills.filter((s) => s.category === "DEV_OPS");

  return (
    <Element name="skills">
      <div>
        <div className={styles.section}>
          <SectionTitle title="Skills" />

          <div className={styles.container}>
            <div className={styles.skills_set}>
              <img src={languageIcon} alt="language" />
              <div className={styles.skills_category}>language</div>
              <div className={styles.skills_list}>
                {languageSkills.map((skill) => (
                  <SkillTag
                    key={skill.id}
                    text={skill.name}
                    bgColor={skill.bgColor}
                    txtColor={skill.txtColor}
                  />
                ))}
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={frontendIcon} alt="frontend" />
              <div className={styles.skills_category}>frontend</div>
              <div className={styles.skills_list}>
                {frontendSkills.map((skill) => (
                  <SkillTag
                    key={skill.id}
                    text={skill.name}
                    bgColor={skill.bgColor}
                    txtColor={skill.txtColor}
                  />
                ))}
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={backendIcon} alt="backend" />
              <div className={styles.skills_category}>backend</div>
              <div className={styles.skills_list}>
                {backendSkills.map((skill) => (
                  <SkillTag
                    key={skill.id}
                    text={skill.name}
                    bgColor={skill.bgColor}
                    txtColor={skill.txtColor}
                  />
                ))}
              </div>
            </div>

            <div className={styles.skills_set}>
              <img src={devopsIcon} alt="devOps" />
              <div className={styles.skills_category}>devOps</div>
              <div className={styles.skills_list}>
                {devopsSkills.map((skill) => (
                  <SkillTag
                    key={skill.id}
                    text={skill.name}
                    bgColor={skill.bgColor}
                    txtColor={skill.txtColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
