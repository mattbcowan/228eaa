import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  formHeader: {
    fontWeight: "bold",
    fontSize: "1.75em",
    marginBottom: "2em",
  },
}));

const FormHeader = ({ children }) => {
  const classes = useStyles();
  return <Typography className={classes.formHeader}>{children}</Typography>;
};

export default FormHeader;
