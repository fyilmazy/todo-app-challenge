import React, { useState, useEffect, createContext, useContext } from "react";
import { MainContext } from "./MainContext";
export const TodoContext = createContext();

export const CATEGORY = {
  ALL: "ALL",
  WORK: "WORK",
  PERSONAL: "PERSONAL",
  SCHOOL: "SCHOOL",
};

// change name to CardProvider veya DataProvider
export const TodoProvider = ({ children }) => {
  const { updateCards, userData } = useContext(MainContext);
  const [cards, setCards] = useState(userData?.cards || []);
  const [categories, setCategories] = useState(
    userData?.categories || { ...CATEGORY },
  );
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL);

  useEffect(() => {
    updateCards(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  const updateCard = (newCard) => {
    const newCardIndex = cards.findIndex((card) => card.id === newCard.id);
    let newCards = [...cards];
    newCards[newCardIndex] = newCard;
    setCards(newCards);
  };

  const deleteCard = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  const values = {
    cards,
    CATEGORY,
    setCards,
    addCard,
    updateCard,
    deleteCard,
    selectedCategory,
    setSelectedCategory,
    categories,
    setCategories,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
