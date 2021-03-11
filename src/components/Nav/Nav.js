import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link to="/settings">
          <div className={styles.links}>
            <li>Settings</li>
          </div>
        </Link>
        <Link to="/" exact>
          <div className={styles.links}>
            <li>Dashboard</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
