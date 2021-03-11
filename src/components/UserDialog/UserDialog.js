/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
// import { Modal, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Button, Backdrop, Fade, TextField } from "@material-ui/core";

const UserDialog = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [open, setOpen] = useState(true);
  const [modalStyle] = useState(getModalStyle);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const { handleLogin, isLoggedIn } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(name, surname);
  };

  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  useEffect(() => {
    isLoggedIn ? handleClose() : handleOpen();
  }, []);

  const useStyles = makeStyles((theme) => ({
    backgroundWrapper: {
      background: "rgba(0,0,0,0.4)",
      position: "fixed",
      "z-index": "1300",
      inset: "0px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },

    paper: {
      position: "absolute",
      width: 400,
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
      diplay: "block",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    isLoggedIn ? handleClose() : handleOpen();
  }, [isLoggedIn]);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="transition-modal-title">Please enter your name and surname</h3>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  return (
    <div className={classes.backgroundWrapper}>
      <Modal
        className={classes.modal}
        hideBackdrop={true}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default UserDialog;
