import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Archiving.module.css";
import { Element } from "react-scroll";

const Archiving = () => {
  return (
    <Element name="archiving">
      <div className={styles.section}>
        <SectionTitle title="Archiving" />
      </div>
    </Element>
  );
};

export default Archiving;
