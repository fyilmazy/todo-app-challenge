import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { v4 as uuidv4 } from "uuid";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link to="/">
          <div className={styles.links}>
            <li>Home</li>
          </div>
        </Link>
        <Link to="/settings">
          <div className={styles.links}>
            <li>Settings</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
