import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Box, Button, FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "./store/utils/thunkCreators";
import LoginFormImage from "./components/Authentication/LoginFormImage";
import FormHeader from "./components/Authentication/FormHeader";
import Navigation from "./components/Authentication/Navigation";
import SubmitForm from "./components/Authentication/SubmitForm";

const useStyles = makeStyles(() => ({
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
}));

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
        <Navigation
          onClick={() => history.push("/register")}
          navText="Don't have an account?"
          btnText="Create account"
        />
        <Box mx="auto" width="75%">
          <FormHeader>Welcome back!</FormHeader>
          <SubmitForm onSubmit={handleLogin} btnText="Login">
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
          </SubmitForm>
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
