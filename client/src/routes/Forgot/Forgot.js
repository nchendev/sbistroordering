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

export default function Forgot(props) {
  const classes = useStyles();
  const [sent, setSent] = useState(false);
  const [ans, setAns] = useState({
    email: "",
  });

  const handleForgotSubmit = (e) => {
    setSent(true);
    var forgotJSON = ans;
    // call API
    console.log("calling api");
    axios
      .post("/api/user/forgot", forgotJSON)
      .then((res) => {
        console.log(res.data);
      })
      // if not reset
      .catch((err) => {
        console.error("error:" + err);
        console.log(err.response.data);
      });
    handleSuccessfulForgot();

    // log
    console.log(forgotJSON);
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
  const handleRedirectToLogin = (e) => {
    props.history.push("/login");
  };
  const handleSuccessfulForgot = () => {
    setSent(true);
    setTimeout(function () {
      handleRedirectToLogin();
    }, 3000);
  };
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {sent ? (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={Logo} style={{ height: "15vh" }} />

            <Typography component='h1' variant='h5'>
              Szechuan Bistro
            </Typography>
            <Typography component='h3' variant='subtitle1'>
              If an account exists with that email, then it has been deleted and
              reset. You may now register with that email again.
            </Typography>
          </div>
        </Grid>
      ) : (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <img src={Logo} style={{ height: "15vh" }} />

            <Typography component='h1' variant='h5'>
              Szechuan Bistro
            </Typography>
            <Typography component='h3' variant='subtitle1'>
              If you've forgotten your password, please input your email so we
              can delete and reset your account. Then, you would have to
              register again. Sorry for the inconvenience, but this is for
              security reasons.
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
                autoFocus
                onChange={handleInfoChange("email")}
              />
              <Button
                type='button'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={handleForgotSubmit}
              >
                Delete and Reset Account
              </Button>
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
      )}
    </Grid>
  );
}
