import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from "uuid";

const CreateTodo = () => {
  const { CATEGORY, addCard } = useContext(TodoContext);

  const newCard = {
    title: "",
    id: uuidv4(),
    category: CATEGORY.WORK,
    todos: [
      {
        text: "Example Todo",
        id: uuidv4(),
        isComplete: false,
      },
    ],
  };

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: "auto 10px",
      minHeight: 244,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    createButton: {
      margin: "auto",
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} key={uuidv4()}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          You can create a new card on here:
        </Typography>
      </CardContent>
      <Button
        size="large"
        className={classes.createButton}
        onClick={() => addCard(newCard)}
      >
        Create New
      </Button>
      <CardActions></CardActions>
    </Card>
  );
};

export default CreateTodo;
