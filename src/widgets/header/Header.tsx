import { Link } from "react-scroll";
import styles from "./Header.module.css";

interface HeaderProps {
  variant: "overlay" | "fixed";
}

const Header = ({ variant }: HeaderProps) => {
  return (
    <header
      className={[
        styles.header,
        variant == "fixed" ? styles.fixed : styles.overlay,
      ].join(" ")}
    >
      <div className={styles.inner}>
        <div className={styles.logo}>KTH`s Portfolio</div>

        <nav className={styles.nav}>
          <Link
            to="about"
            smooth
            duration={500}
            offset={-50}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            About me
          </Link>

          <Link
            to="skills"
            smooth
            duration={500}
            offset={-50}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth
            duration={500}
            offset={-50}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            Projects
          </Link>

          <Link
            to="career"
            smooth
            duration={500}
            offset={-50}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            Career
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
