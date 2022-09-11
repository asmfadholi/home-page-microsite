// components
import AboutLazy from "../../components/About/Lazy";

// styles
import styles from "./index.module.css";

function Home() {
  return (
    <div>
      <h2 className={styles.styTitleHome}>This is Homepage</h2>
      <br />
      <AboutLazy />
    </div>
  );
}

export default Home;
