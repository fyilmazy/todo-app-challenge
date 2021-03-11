import styles from "./TodoContainer.module.scss";
import React, { useContext } from "react";
import CreateTodo from "../CreateTodo/CreateTodo";
import { TodoContext } from "../../context/TodoContext";

const TodoContainer = () => {
  const { todo } = useContext(TodoContext);
  return (
    <div className={styles.todoContainer}>
      {todo.map((item, index) => {
        <li key={index}>item.text</li>;
      })}
      <CreateTodo />
      <p>{todo}</p>
    </div>
  );
};

export default TodoContainer;
