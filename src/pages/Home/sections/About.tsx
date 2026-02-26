import SectionTitle from "../../../components/ui/SectionTitle";
import AboutCard from "../../../components/ui/AboutCard";
import styles from "./About.module.css";
import userIcon from "../../../assets/icons/profileIcon.png";
import adderssIcon from "../../../assets/icons/addressIcon.png";
import calendarIcon from "../../../assets/icons/calendarIcon.png";
import callIcon from "../../../assets/icons/callIcon.png";
import githubIcon from "../../../assets/icons/github.svg";
import emailIcon from "../../../assets/icons/emailIcon.png";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className={styles.section}>
        <SectionTitle title="About Me" />
        <div className={styles.grid}>
          <AboutCard iconSrc={userIcon} label="이름" value="김태형" />
          <AboutCard
            iconSrc={calendarIcon}
            label="생년월일"
            value="1997.04.08"
          />
          <AboutCard iconSrc={adderssIcon} label="주소" value="서울시 성동구" />
          <AboutCard iconSrc={callIcon} label="연락처" value="010-5067-5271" />
          <AboutCard
            iconSrc={emailIcon}
            label="이메일"
            value="kth14200@gmail.com"
          />
          <AboutCard
            iconSrc={githubIcon}
            label="깃허브 프로필"
            value="github.com/taehyung5271"
            href="https://github.com/taehyung5271"
          />
        </div>
      </div>
    </Element>
  );
};

export default About;
