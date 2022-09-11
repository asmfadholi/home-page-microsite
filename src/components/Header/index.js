import React from "react";
import { Link, Outlet } from "react-router-dom";

// styles
import styles from "./index.module.css";

const NAVIGATION = [
  {
    name: "Homepage",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Header() {
  return (
    <div className={styles.styContainer}>
      <header className={styles.styHeader}>
        <div className={styles.styNavigation}>
          <h1>Website Test</h1>
          <nav className={styles.styNav}>
            <ul className={styles.styListNavigation}>
              {NAVIGATION.map((each, idx) => {
                const isLast = NAVIGATION.length === idx + 1;
                return (
                  <React.Fragment key={each.name}>
                    <Link to={each.path} className={styles.styList}>
                      <span>{each.name}</span>
                    </Link>
                    {!isLast && <span className={styles.styDivider} />}
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <br />

      <Outlet />
    </div>
  );
}

export default Header;
