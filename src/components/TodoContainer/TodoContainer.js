import styles from "./TodoContainer.module.scss";
import React, { useContext } from "react";
import CreateTodo from "../CreateTodo/CreateTodo";
import { TodoContext } from "../../context/TodoContext";
import TodoCard from "../TodoCard/TodoCard";

const TodoContainer = () => {
  const { cards } = useContext(TodoContext);
  console.log("cards", cards);

  return (
    <div className={styles.todoContainer}>
      {cards.map((card, index) => {
        console.log("map içi card:", card);
        return (
          <TodoCard
            data={[
              {
                title: card.title,
                id: card.id,
                todos: card.todos,
                category: card.category,
              },
            ]}
          />
        );
      })}
      <CreateTodo />
    </div>
  );
};

export default TodoContainer;
