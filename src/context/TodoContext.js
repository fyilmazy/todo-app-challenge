import React, { useState, useEffect, createContext } from "react";
import { newId } from "../utils/idCreator";
export const TodoContext = createContext();

// Card = {
//   id: uuidv4 string
//   title: string
//   category: enum
//   todos: Todo[]
// }

// Todo = {
//   id: uuidv4 string
//   text: string
//   isComplete: boolean
// }

export const CATEGORY = {
  EVERYTHING: "EVERYTHING",
  WORK: "WORK",
  PERSONAL: "PERSONAL",
  SCHOOL: "SCHOOL",
};

export const TodoProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const values = {
    cards,
    CATEGORY,
    setCards,
    addCard,
    selectedCategory,
    setSelectedCategory,
  };

  useEffect(() => {}, []);

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
