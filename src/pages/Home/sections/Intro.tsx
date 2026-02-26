import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Intro.module.css";
import { Element } from "react-scroll";

const Intro = () => {
  return (
    <Element name="intro">
      <div className={styles.section}>
        <SectionTitle title="Intro" />
      </div>
    </Element>
  );
};

export default Intro;
