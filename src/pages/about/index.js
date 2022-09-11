// components
import AboutLazyLoader from "../../components/About/Lazy";

// styles
import styles from "./index.module.css";

function About() {
  return (
    <div className={styles.styContainerHome}>
      <h2 className={styles.styTitleHome}>This is About Page</h2>

      <br />

      <AboutLazyLoader />
    </div>
  );
}

export default About;
