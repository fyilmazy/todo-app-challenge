import styles from "./TodoContainer.module.scss";
import React, { useContext } from "react";
import CreateTodo from "../CreateTodo/CreateTodo";
import { TodoContext } from "../../context/TodoContext";
import TodoCard from "../TodoCard/TodoCard";

const TodoContainer = () => {
  const { cards } = useContext(TodoContext);

  return (
    <div className={styles.todoContainer}>
      {cards.map((card, index) => (
        <TodoCard key={card.id} data={card} />
      ))}
      <CreateTodo />
    </div>
  );
};

export default TodoContainer;
