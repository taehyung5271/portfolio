import { forwardRef } from "react";
import SectionTitle from "../../../components/ui/SectionTitle";
import styles from "./Intro.module.css";
import { Element } from "react-scroll";

type IntroProps = {}; 

const Intro = forwardRef<HTMLElement, IntroProps>(function Intro(_props, ref) {
  return (
    <Element name="intro">
      <section ref={ref}>
        <div className={styles.section}>
          <SectionTitle title="- 김태형 - " />
          <SectionTitle title="PORTFOLIO"/>
        </div>
      </section>
    </Element>
  )
});

export default Intro;
