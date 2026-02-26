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
      <div>
        <div>KTH`s Portfolio</div>

        <nav className={styles.nav}>
          <Link
            to="about"
            smooth
            duration={500}
            offset={-80}
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
            offset={-80}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            Skills
          </Link>

          <Link
            to="archiving"
            smooth
            duration={500}
            offset={-80}
            spy
            className={styles.link}
            activeClass={styles.active}
          >
            Archiving
          </Link>

          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
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
            offset={-80}
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
