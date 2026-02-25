import About from "./sections/About";
import Archiving from "./sections/Archiving";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";

const Home = () => {

    return (
        <div>
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