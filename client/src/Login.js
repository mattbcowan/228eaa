import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import LoginFormImage from "./components/LoginFormImage";

const useStyles = makeStyles((theme) =>
  createStyles({
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
    formHeader: {
      fontWeight: "bold",
      fontSize: "1.75em",
      marginBottom: "2em",
    },
    submitForm: {
      textAlign: "center",
    },
    submitButton: {
      fontSize: "1em",
      fontWeight: "bold",
      padding: "0.75em 3em",
      marginTop: "4em",
    },
    passwordContainer: {
      display: "flex",
      flexDirection: "row",
    },
    passwordInput: {
      flex: 1,
    },
    forgotButton: {
      borderBottom: "1px solid #949494",
      borderRadius: 0,
      fontSize: "0.875em",
      alignSelf: "flex-end",
      paddingBottom: "0.2em",
    },
  })
);

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={5}>
        <LoginFormImage />
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container item className={classes.navigationContainer}>
          <Typography color="secondary" className={classes.navigationText}>
            Don't have an account?
          </Typography>
          <Button
            onClick={() => history.push("/register")}
            variant="contained"
            size="large"
            color="primary"
            className={classes.navigationButton}
          >
            Create account
          </Button>
        </Grid>
        <Box mx="auto" width="75%">
          <Typography className={classes.formHeader}>Welcome back!</Typography>
          <form onSubmit={handleLogin} className={classes.submitForm}>
            <Grid container spacing={8} direction="column">
              <Grid item>
                <FormControl
                  fullWidth
                  required
                  className={classes.usernameContainer}
                >
                  <TextField
                    aria-label="username"
                    label="E-mail address"
                    name="username"
                    type="text"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl required className={classes.passwordContainer}>
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    className={classes.passwordInput}
                  />
                  <Button color="primary" className={classes.forgotButton}>
                    Forgot?
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
