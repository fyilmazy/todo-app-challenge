import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Backdrop,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const TodoCard = ({ data }) => {
  console.log("datagelen: ", data[0]);
  const [localCard, setLocalCard] = useState(data[0]);
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState(localCard.todos);
  const [titleHolder, setTitleHolder] = useState("");
  const [newTodoText, setNewTodoText] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isBackDropOpen, setIsBackDropOpen] = useState(false);
  console.log("heytodos", todos);
  // const [localList, setLocalList] = useState(localCard[0].todos);

  useEffect(() => {
    setLocalCard({ ...localCard, todos: todos });
  }, [todos]);

  const removeListItemHandler = (id) => {
    console.log("CAARRD: ", localCard);
    console.log("TODOS :", todos);
    const newList = localCard.todos.filter((item) => id !== item.id);
    console.log("newList", newList);

    setTodos([...newList]);
  };
  console.log("TODOS 2:", todos);
  console.log("CAARRD: 2", localCard);

  const editTodo = (id, newText) => {
    todos.map((todo) => {
      todo.filter(id === todo.id);
    });
  };

  const addNewTodoToCard = () => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text: newTodoText,
        isCompleted: false,
      },
    ]);
    setNewTodoText("");
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: "auto 10px",
      minHeight: 200,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 17,
      display: "flex",
      marginLeft: 7,
      marginBottom: 15,
      marginRight: 70,
    },
    addTodo: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    createButton: {
      margin: "auto",
    },
    category: {
      fontSize: 10,
    },
    listItem: {
      display: "flex",
    },
    todoRemove: {
      marginLeft: 10,
    },
    addTodoButton: {
      background: "rgb(184, 248, 168)",
      maxWidth: 5,
    },
    todoInput: {
      border: "none",
    },
  });

  const classes = useStyles();
  console.log("data inside new card: ", data[0].todos);

  return (
    <>
      {console.log("DATA", data)}
      <Card
        className={classes.root}
        key={localCard.id}
        onMouseEnter={() => setIsBackDropOpen(true)}
        onMouseLeave={() => setIsBackDropOpen(false)}
      >
        {!isSaved ? (
          <Button size="small" className={classes.deleteButton}>
            Delete Card
          </Button>
        ) : (
          ""
        )}

        <CardContent>
          <TextField
            className={classes.title}
            placeholder="Title"
            onChange={(e) => setTitleHolder(e.target.value)}
            value={titleHolder}
          />

          <ul>
            {localCard.todos.map((todo) => {
              return (
                <li key={todo.id} className={classes.listItem}>
                  <input type="checkbox" />
                  <input
                    className={classes.todoInput}
                    value={todo.text}
                    onChange={(e) => editTodo(todo.id, e.target.value)}
                  />
                  <button
                    className={classes.todoRemove}
                    onClick={() => removeListItemHandler(todo.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>

          {!isSaved ? (
            <TextField
              className={classes.addTodo}
              placeholder="Add new todo..."
              onChange={(e) => setNewTodoText(e.target.value)}
              value={newTodoText}
            />
          ) : (
            ""
          )}
          {!isSaved ? (
            <Button
              size="small"
              onClick={addNewTodoToCard}
              className={classes.addTodoButton}
            >
              +
            </Button>
          ) : (
            ""
          )}
          <div className={classes.category}>{data[0].category}</div>
        </CardContent>
        {!isSaved ? (
          <Button size="small" onClick={() => setIsSaved(!isSaved)}>
            SAVE
          </Button>
        ) : (
          ""
        )}
        {isSaved ? (
          <Backdrop open={isBackDropOpen}>
            <div>Testt</div>
          </Backdrop>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default TodoCard;
