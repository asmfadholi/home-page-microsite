// components
import ContactLazy from "../../components/Contact/Lazy";

// styles
import styles from "./index.module.css";

function Contact() {
  return (
    <div className={styles.styContainerHome}>
      <h2 className={styles.styTitleHome}>This is Contact Page</h2>

      <br />

      <ContactLazy />
    </div>
  );
}

export default Contact;
