import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  submitForm: {
    textAlign: "center",
  },
  submitButton: {
    fontSize: "1em",
    fontWeight: "bold",
    padding: "0.75em 3em",
    marginTop: "4em",
  },
}));

const SubmitForm = ({ children, onSubmit, btnText }) => {
  const classes = useStyles();
  return (
    <form onSubmit={onSubmit} className={classes.submitForm}>
      {children}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        {btnText}
      </Button>
    </form>
  );
};

export default SubmitForm;
