import About from "./sections/About";
import Archiving from "./sections/Archiving";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Header from "../../widgets/Header/Header";
import Footer from "../../widgets/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <Footer />
    </div>
  );
};

export default Home;
