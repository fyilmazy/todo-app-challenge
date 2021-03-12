import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { Card, CardContent, Button, TextField } from "@material-ui/core";
import { TodoContext } from "../../context/TodoContext";
import { v4 as uuidv4 } from "uuid";

const TodoCard = ({ data, classes }) => {
  const { updateCard, deleteCard } = useContext(TodoContext);
  const [localCard, setLocalCard] = useState(data);
  const [newTodoText, setNewTodoText] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  console.log("localCard:", localCard);

  const updateCardTitle = (title) => {
    setLocalCard((localCard) => {
      return { ...localCard, title };
    });
  };

  const addNewTodoItem = (text) => {
    setLocalCard((localCard) => {
      return {
        ...localCard,
        todos: [
          ...localCard.todos,
          {
            text: text,
            isComplete: false,
            id: uuidv4(),
          },
        ],
      };
    });
  };

  const removeTodoItem = (id) => {
    const newList = localCard.todos.filter((item) => id !== item.id);
    setLocalCard((localCard) => {
      return { ...localCard, todos: newList };
    });
  };

  const editTodoItem = (id, newText) => {
    let newTodos = localCard.todos;
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);
    newTodos[todoItemIndex].text = newText;
    setLocalCard((localCard) => {
      return { ...localCard, todos: newTodos };
    });
  };

  const saveCard = () => {
    setIsSaved(true);
    updateCard(localCard);
  };

  return (
    <Card className={classes.root} key={localCard.id}>
      {!isSaved && (
        <Button
          size="small"
          className={classes.deleteButton}
          onClick={() => deleteCard(localCard.id)}
        >
          Delete Card
        </Button>
      )}

      <CardContent>
        <TextField
          className={classes.title}
          placeholder="Title"
          onChange={(e) => updateCardTitle(e.target.value)}
          value={localCard.title}
        />

        <ul>
          {localCard.todos.map((todo) => {
            return (
              <li key={todo.id} className={classes.listItem}>
                <input type="checkbox" />
                <input
                  className={classes.todoInput}
                  value={todo.text}
                  onChange={(e) => editTodoItem(todo.id, e.target.value)}
                />
                <button
                  className={classes.todoRemove}
                  onClick={() => removeTodoItem(todo.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>

        {!isSaved && (
          <>
            <TextField
              className={classes.addTodo}
              placeholder="Add new todo..."
              onChange={(e) => setNewTodoText(e.target.value)}
              value={newTodoText}
            />
            <Button
              size="small"
              onClick={() => addNewTodoItem(newTodoText)}
              className={classes.addTodoButton}
            >
              +
            </Button>
          </>
        )}
        <div className={classes.category}>{data.category}</div>
      </CardContent>
      {!isSaved ? (
        <Button size="small" onClick={() => saveCard()}>
          SAVE
        </Button>
      ) : (
        <Button size="small" onClick={() => setIsSaved(false)}>
          EDIT
        </Button>
      )}
    </Card>
  );
};

export default withStyles(styles)(TodoCard);
