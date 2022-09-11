// components
import AboutLazy from "../../components/About/Lazy";
import ContactLazy from "../../components/Contact/Lazy";
import TelephoneFormLazyLoader from "../../components/TelephoneForm/Lazy";

// styles
import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.styContainerHome}>
      <h2 className={styles.styTitleHome}>This is Homepage</h2>
      <br />
      <AboutLazy />
      <br />
      <div className={styles.styWrapperInfo}>
        <TelephoneFormLazyLoader />
        <ContactLazy />
      </div>
    </div>
  );
}

export default Home;
