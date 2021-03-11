import React from "react";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Categories</p>
      </div>
      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" unchecked />
            Everything
          </label>
        </li>
        <li className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" unchecked />
            Work
          </label>
        </li>
        <li className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" unchecked />
            Personal
          </label>
        </li>
        <li className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" unchecked />
            School
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
