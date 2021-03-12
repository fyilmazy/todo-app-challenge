import React, { useContext } from "react";
import styles from "./Categories.module.scss";
import { TodoContext, CATEGORY } from "../../context/TodoContext";

const Categories = () => {
  const { selectedCategory, setSelectedCategory } = useContext(TodoContext);
  const categories = Object.values(CATEGORY);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Categories</p>
      </div>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category} className={styles.categoryItem}>
            <label htmlFor={category}>
              <input
                name={category}
                type="checkbox"
                checked={category === selectedCategory}
                onChange={() => setSelectedCategory(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
