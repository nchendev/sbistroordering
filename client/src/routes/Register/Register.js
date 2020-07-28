import React from "react";
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
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import AlertTitle from "@material-ui/lab/Alert";
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

export default function Register(props) {
  const classes = useStyles();
  const [ans, setAns] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [registerErrors, setRegisterErrors] = React.useState("");
  const [alertDisplay, setAlertDisplay] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertDisplay(false);
  };
  const handleRedirectToLogin = (e) => {
    props.history.push("/");
    //return <Redirect to='/OrderingSystem' />;
  };
  const handleRegisterSubmit = (e) => {
    var registerJSON = ans;
    // call API
    console.log("calling api");
    axios
      //.post('https://sbordering.herokuapp.com/api/register', registerJSON)
      .post("/api/user/register", registerJSON)
      .then((res) => {
        let errors = "";

        // if there are errors
        if (Object.keys(res.data).length > 1) {
          console.log("there was errors!");
          res.data.errors.forEach((error) => {
            // display errors with mui alert
            console.log("error: " + error);
            errors += error + "\n";
          });
          setAlertDisplay(false);
        }
        // if there were no errors
        else {
          // green mui alert successfully registered
          setAlertDisplay(true);
          // clear form
          setAns({
            fname: "",
            lname: "",
            email: "",
            password: "",
            password2: "",
          });
          console.log("there were no errors");
          setTimeout(function () {
            handleRedirectToLogin();
          }, 5000);
        }
        setRegisterErrors(errors);
      })
      .catch((err) => {
        console.error(err);
      });

    // log
    console.log(registerJSON);
  };
  const handleInfoChange = (input) => (e) => {
    ans[input] = e.target.value;
    setAns(ans);
    console.log(ans);
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
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='fname'
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  onChange={handleInfoChange("fname")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='lname'
                  onChange={handleInfoChange("lname")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  onChange={handleInfoChange("email")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={handleInfoChange("password")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password2'
                  label='Confirm Password'
                  type='password'
                  id='password2'
                  autoComplete='current-password'
                  onChange={handleInfoChange("password2")}
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <Typography variant='body2' color='error'>
                  {registerErrors}
                </Typography>
              </Grid>
            </Grid>
            <Button
              type='button'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={() => handleRegisterSubmit()}
            >
              Register
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link onClick={(e) => handleRedirectToLogin()} variant='body2'>
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
            <Snackbar
              open={alertDisplay}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert severity='success'>
                Registration Success. You may now log in
              </Alert>
            </Snackbar>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
