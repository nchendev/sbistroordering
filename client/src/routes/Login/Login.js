import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../images/logo.png";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://szechuanbistro.com'>
        Szechuan Bistro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(/api/image/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [ans, setAns] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    // check if user already logged in
    // local storage
    if (
      localStorage.getItem("information") !== "undefined" &&
      localStorage.getItem("information") !== null
    ) {
      handleLoggedInRedirect(localStorage.getItem("information"));
    }
    // session storage
    if (
      sessionStorage.getItem("information") !== "undefined" &&
      sessionStorage.getItem("information") !== null
    ) {
      handleLoggedInRedirect(sessionStorage.getItem("information"));
    }
  });

  const toggleRememberMe = (e) => {
    setRemember(!remember);
  };
  const handleLoginSubmit = (e) => {
    var loginJSON = ans;
    // call API
    console.log("calling api");
    axios
      .post("/api/user/login", loginJSON)
      .then((res) => {
        // if logged in
        setLoginError("");
        console.log(res.data);
        // redirect
        handleSuccessfulLogin(res.data);
      })
      // if not logged in
      .catch((err) => {
        console.error("error:" + err);
        console.log(err.response.data);
        setLoginError(err.response.data.message);
      });

    // log
    console.log(loginJSON);
  };
  const handleInfoChange = (input) => (e) => {
    ans[input] = e.target.value;
    setAns(ans);
    console.log(ans);
  };
  const handleRedirectToOrderingSystem = (e) => {
    props.history.push("/ordersystem");
    //return <Redirect to='/OrderingSystem' />;
  };

  const handleRedirectToRegister = (e) => {
    props.history.push("/register");
  };

  const handleRedirectToForgot = (e) => {
    props.history.push("/forgot");
  };

  const handleSuccessfulLogin = (data) => {
    // set localstorage details and clear any existing session details
    if (remember) {
      localStorage.setItem("information", JSON.stringify(data.information)); // replace with JWT token later
      sessionStorage.removeItem("information");
    }
    // set sessionstorage details and clear any existing localstorage details
    else {
      sessionStorage.setItem("information", JSON.stringify(data.information)); // replace with JWT token later
      localStorage.removeItem("information");
    }
    // redirect to ordering system
    handleLoggedInRedirect();
  };

  const handleLoggedInRedirect = (data) => {
    // redirect to ordering system
    props.history.push({
      pathname: "/ordersystem",
    });
    /**return (
      <Redirect
        to={{
          pathname: "/ordersystem",
          state: { data: data },
        }}
      />
    );**/
  };

  const handleSignOut = () => {
    localStorage.removeItem("information");
    sessionStorage.removeItem("information");
  };
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={Logo} style={{ height: "15vh" }} />

          <Typography component='h1' variant='h5'>
            Szechuan Bistro
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={handleInfoChange("email")}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handleInfoChange("password")}
            />
            <FormControlLabel
              control={
                <Checkbox
                  value='remember'
                  color='primary'
                  checked={remember}
                  onClick={(e) => toggleRememberMe()}
                />
              }
              label='Remember me'
            />
            <Grid container>
              <Grid item xs>
                <Typography variant='body2' color='error'>
                  {loginError}
                </Typography>
              </Grid>
            </Grid>

            <Button
              type='button'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleLoginSubmit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={(e) => handleRedirectToForgot()} variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={(e) => handleRedirectToRegister()}
                  variant='body2'
                >
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Typography component='h1' variant='h6'>
            Or
          </Typography>
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={(e) => handleRedirectToOrderingSystem()}
          >
            Make Guest Order
          </Button>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
