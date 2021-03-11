import React, { useState, useEffect, createContext } from "react";
export const TodoContext = createContext();

// Card = {
//   title: string
//   category: enum
//   todos: Todo[]
// }

const CATEGORY = {
  EVERYTHING: "EVERYTHING",
  WORK: "WORK",
  PERSONAL: "PERSONAL",
  SCHOOL: "SCHOOL",
};

// Todo = {
//   text: string
//   isComplete: boolean
// }

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [cards, setCards] = useState([
    {
      title: "Example Card",
      category: CATEGORY.WORK,
      todos: [
        {
          text: 'Example TODO',
          isComplete: false
        }, 
        {
          text: 'Example Complet TODO',
          isComplete: false
        }, 
      ],
    },
  ]);

  const createTodoHandler = () => {
    console.log("CreateTodo Card Created");
  };

  const values = {
    todo,
    setTodo,
    createTodoHandler,
  };

  useEffect(() => {}, []);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
