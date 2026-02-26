import About from "./sections/About";
import Archiving from "./sections/Archiving";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";
import styles from "./Home.module.css";
import Intro from "./sections/Intro";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Intro />
        <About />
        <Skills />
        <Archiving />
        <Projects />
        <Career />
        <Footer />
      </div>
    </>
  );
};

export default Home;
