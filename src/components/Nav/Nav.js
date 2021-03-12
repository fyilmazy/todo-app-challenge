import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { v4 as uuidv4 } from "uuid";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul>
        <Link to="/settings" key={uuidv4()}>
          <div className={styles.links}>
            <li key={uuidv4()}>Settings</li>
          </div>
        </Link>
        <Link to="/" key={uuidv4()}>
          <div className={styles.links}>
            <li key={uuidv4()}>Dashboard</li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
