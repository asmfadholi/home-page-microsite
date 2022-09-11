// components
import AboutLazy from "../../components/About/Lazy";
import ContactLazy from "../../components/Contact/Lazy";

// styles
import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.styContainerHome}>
      <h2 className={styles.styTitleHome}>This is Homepage</h2>
      <br />
      <AboutLazy />
      <br />
      <ContactLazy />
    </div>
  );
}

export default Home;
