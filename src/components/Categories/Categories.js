import React, { useState, useContext } from "react";
import styles from "./Categories.module.scss";
import { TodoContext } from "../../context/TodoContext";
import { MainContext } from "../../context/MainContext";
import { Button, TextField } from "@material-ui/core";

const Categories = () => {
  const [addCategoryText, setAddCategoryText] = useState("");
  const {
    selectedCategory,
    setSelectedCategory,
    categories,
    setCategories,
  } = useContext(TodoContext);
  const { updateCategories } = useContext(MainContext);
  const categoriesArr = Object.values(categories);

  const addNewCategory = (categoryText) => {
    let newCategories = { ...categories, [categoryText]: categoryText };
    console.log(newCategories);
    setCategories(newCategories);
    updateCategories(newCategories);
    setAddCategoryText("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Categories</p>
      </div>
      <ul className={styles.categoryList}>
        {categoriesArr.map((category) => (
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
      <div>
        <TextField
          className={styles.addTodo}
          placeholder="Add new..."
          onChange={(e) => setAddCategoryText(e.target.value)}
          value={addCategoryText}
        />
        <Button
          size="small"
          onClick={() => addNewCategory(addCategoryText.toString())}
          className={styles.addTodoButton}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default Categories;
