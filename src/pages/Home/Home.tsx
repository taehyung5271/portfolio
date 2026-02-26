import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import styles from "./Home.module.css";
import Intro from "./sections/Intro";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  //INTRO DOM을 담는 상자
  const introRef = useRef<HTMLElement | null>(null);
  const [isInIntro, setIsInIntro] = useState(true);

  useEffect(() => {
    //현재의 
    const el = introRef.current;
    if (!el) return;

    const handleScroll = () => {
      const introHeight = el.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY >= introHeight / 3) {
        setIsInIntro(false);
      } else {
        setIsInIntro(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header variant={isInIntro ? "overlay" : "fixed"} />
      <div className={styles.container}>
        <Intro ref={introRef} />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Footer />
      </div>
    </>
  );
};

export default Home;
