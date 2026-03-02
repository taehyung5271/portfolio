import { forwardRef } from "react";
import styles from "./Intro.module.css";
import { Element, Link } from "react-scroll";
import introImage from "../../../assets/images/introImage.jpg";

type IntroProps = {};

const Intro = forwardRef<HTMLElement, IntroProps>(function Intro(_props, ref) {
  return (
    <Element name="intro">
      <section
        ref={ref}
        className={styles.section}
        style={{
          backgroundImage: `url(${introImage})`,
        }}
      >
        <div className={styles.container}>
          <p className={styles.title}>- 김태형 -</p>
          <p className={styles.title}>풀스택 개발자 포트폴리오</p>
          <hr className={styles.hr}/>
          <p className={styles.content}>안녕하세요.</p>
          <p className={styles.content}>사용자의,사용자에 의한,사용자를 위한</p>
          <p className={styles.content}>풀스택 개발자</p>
          <p className={styles.content}>김태형입니다.</p>

          <Link
            to="about"
            smooth
            duration={500}
            offset={-50}
            spy
            className={styles.scrollHint}
            aria-label="아래로 스크롤"
          >
            <span className={styles.scrollMouse}>
              <span className={styles.scrollWheel} />
            </span>
            <span className={styles.scrollText}>scroll</span>
          </Link>
        </div>
      </section>
    </Element>
  );
});

export default Intro;
