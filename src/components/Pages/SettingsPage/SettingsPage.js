import React, { useState, useContext } from "react";
import { MainContext } from "../../../context/MainContext";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SettingsPage = () => {
  const [formValues, setFormValues] = useState({ name: "", surname: "" });
  const [isFormValid, setIsFormValid] = useState(null);
  const { userData, setUserData, changeName } = useContext(MainContext);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "aqua",
      height: "100vh",
    },
    backgroundWrapper: {
      background: "rgba(0,0,0,0.4)",
      inset: "0px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      marginTop: 50,
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    form: {
      background: "yellow",
    },
    formWrapper: {
      display: "flex",
    },
    inputWrapper: {
      display: "block",
    },
    textField: {
      display: "flex",
      width: 200,
      alignItems: "center",
      margin: "20px auto",
    },
    pageTitle: {
      margin: "0 auto",
      textAlign: "center",
      padding: "20px auto",
      fontFamily: `"Roboto", sans-serif`,
      fontWeight: 500,
      fontSize: 20,
    },
    pageHeader: {
      padding: "20px 0",
    },
  }));

  const classes = useStyles();
  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  return (
    <div className={classes.container}>
      <header className={classes.pageHeader}>
        <div className={classes.pageTitle}>Settings</div>
      </header>
      <div className={classes.paper}>
        <h4 className={classes.title}>
          You can change your name and surname here:
        </h4>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            if (formValues.name !== "" && formValues.surname !== "") {
              setIsFormValid(true);
            } else {
              setIsFormValid(false);
            }
            console.log(formValues);
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
            value={formValues.name}
            className={classes.textField}
          />
          <TextField
            id="outlined-basic"
            label="Surname"
            variant="outlined"
            onChange={(e) =>
              setFormValues({ ...formValues, surname: e.target.value })
            }
            value={formValues.surname}
            className={classes.textField}
          />

          <Button variant="outlined" color="primary">
            Submit
          </Button>
          {isFormValid === false && (
            <div className={classes.formWarning}>
              <p>Please fill the form correctly.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
