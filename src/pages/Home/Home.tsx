import About from "./Sections/About";
import Archiving from "./Sections/Archiving";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Career from "./Sections/Career";
import Header from "../../Widgets/Header/Header";
import Footer from "../../Widgets/Footer/Footer";
import styles from "./Home.module.css"

const Home = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <About/>
            <Skills/>
            <Archiving/>
            <Projects/>
            <Career/>
            <Footer/>
        </div>
    )
}

export default Home;