import React, { useContext } from "react";
import styles from "./Categories.module.scss";
import { TodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(TodoContext);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Categories</p>
      </div>
      <ul className={styles.categoryList}>
        <li key={uuidv4()} className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" />
            Everything
          </label>
        </li>
        <li key={uuidv4()} className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" />
            Work
          </label>
        </li>
        <li key={uuidv4()} className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" />
            Personal
          </label>
        </li>
        <li key={uuidv4()} className={styles.categoryItem}>
          <label htmlFor="everything">
            <input name="everyting" type="checkbox" />
            School
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
