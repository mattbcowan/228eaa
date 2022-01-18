import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { register } from "./store/utils/thunkCreators";
import LoginFormImage from "./components/LoginFormImage";

const useStyles = makeStyles((theme) =>
  createStyles({
    navigationContainer: {
      padding: "2em",
      justifyContent: "flex-end",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        flexDirection: "row",
      },
    },
    navigationButton: {
      fontSize: "1em",
      fontWeight: "bold",
      marginLeft: "2em",
      padding: "0.75em 3em",
      backgroundColor: "#ffffff",
      color: "#3A8DFF",
      "&:hover": {
        backgroundColor: "#d9d9d9",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0.5em 1em",
      },
    },
    formHeader: {
      fontWeight: "bold",
      fontSize: "1.75em",
      marginBottom: "1em",
    },
    submitForm: {
      textAlign: "center",
    },
    submitButton: {
      fontSize: "1em",
      fontWeight: "bold",
      padding: "0.75em 3em",
      marginTop: "2em",
    },
  })
);

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const { user, register } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }

    await register({ username, email, password });
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
          <Typography color="secondary">Already have an account?</Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => history.push("/login")}
            className={classes.navigationButton}
          >
            Login
          </Button>
        </Grid>
        <Box mx="auto" width="75%">
          <Typography className={classes.formHeader}>
            Create an account.
          </Typography>
          <form onSubmit={handleRegister} className={classes.submitForm}>
            <Grid container spacing={4} direction="column">
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  fullWidth
                >
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  error={!!formErrorMessage.confirmPassword}
                  fullWidth
                >
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Create
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
