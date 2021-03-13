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
  const { categories, addCard } = useContext(TodoContext);

  const newCard = {
    title: "",
    id: uuidv4(),
    category: categories.WORK,
    todos: [
      {
        text: "Example Todo",
        id: uuidv4(),
        isComplete: false,
        isSaved: false,
      },
    ],
  };

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 275,
      margin: "auto 10px",
      minHeight: "100%",
    },
    title: {
      fontSize: 14,
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
