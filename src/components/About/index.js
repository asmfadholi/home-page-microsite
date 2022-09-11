// constants
import { DUMMY_WORDING } from "../../constants/dummyWording";

// styles
import styles from "./index.module.css";

const AboutTwoSection = [...new Array(4)];

function About() {
  return (
    <div className={styles.styContainerAbout}>
      <div className={styles.styAbout1}>
        <div>
          <h3>About 1</h3>

          <p>{DUMMY_WORDING}</p>
        </div>
      </div>

      <div className={styles.styAbout2}>
        <h3>About 2</h3>

        <div>
          <div className={styles.styGridWrapper}>
            {AboutTwoSection.map((_, idx) => {
              return (
                <p
                  key={`${idx + 1}-key-about-2`}
                  className={styles.styGridAbout2}
                >
                  {DUMMY_WORDING}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
