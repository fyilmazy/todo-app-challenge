import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const TodoCard = ({ data }) => {
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
    <Card className={classes.root}>
      <CardContent>
        <li>
          <input type="checkbox" />
          data.text
        </li>
      </CardContent>
      <Button
        size="big"
        className={classes.createButton}
        onClick={createTodoHandler}
      >
        Create New
      </Button>
      <CardActions></CardActions>
    </Card>
  );
};

export default TodoCard;
