import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navigationContainer: {
    padding: "2em",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "3em",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginBottom: 0,
    },
  },
  navigationButton: {
    fontSize: "1em",
    fontWeight: "bold",
    marginLeft: "2em",
    padding: "0.75em 2em",
    backgroundColor: "#ffffff",
    color: "#3A8DFF",

    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },

    "&:hover": {
      backgroundColor: "#d9d9d9",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
      padding: "0.5em 1em",
    },
  },
  navigationText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
      padding: "0.5em 1em",
    },
  },
}));

const Navigation = ({ navText, btnText, onClick }) => {
  const classes = useStyles();
  return (
    <Grid container item className={classes.navigationContainer}>
      <Typography color="secondary" className={classes.navigationText}>
        {navText}
      </Typography>
      <Button
        onClick={onClick}
        variant="contained"
        size="large"
        color="primary"
        className={classes.navigationButton}
      >
        {btnText}
      </Button>
    </Grid>
  );
};

export default Navigation;
