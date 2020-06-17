import React, { useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  ContactForm,
  PaymentForm,
  Review,
  Header,
} from "../../../components/index";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://www.nchen.dev/'>
        Nick Chen | Szechuan Bistro
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "fill",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "80vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  fab: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "80vw",
  },
  fab2: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "40vw",
  },
  fabSpace: {
    margin: theme.spacing(1),
    height: "40px",
  },
}));

// constants
const steps = ["Contact", "Payment", "Review your order"];

export default function ConfirmedView(props) {
  const classes = useStyles();
  const [content, setContent] = React.useState(
    <div>
      <Typography variant='h5' gutterBottom>
        Processing Order...
      </Typography>
    </div>
  );

  /*
   * @desc calls twilio API on the backend
   * @params
   * @return bool - order sent in successfully or not
   */
  const callAPI = async () => {
    // json object to send to backend
    let orderJSON = {
      options: props.options,
      order: props.order,
      information: props.information,
      payment: props.payment,
      price: props.price,
    };
    // call API
    console.log("sending in order: ");
    console.log(orderJSON);
    axios
      .post("/api/twilio", orderJSON)
      .then((res) => {
        console.log("api reply: " + res.data.msg);
        if (res.data.msg === "success") {
          setContent(
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Thank you for ordering from Szechuan Bistro!
              </Typography>
              <Typography variant='subtitle1'>
                We will be in contact shortly through phone by 405-752-8889 to
                confirm your order! Deliveries should be made within the hour,
                and pickup orders should be ready in 15 minutes. <br /> Thank
                you for your patronage, we hope to serve you again soon.
              </Typography>
            </React.Fragment>
          );
        } else {
          setContent("something unexpected");
        }
      })
      .catch((err) => {
        console.error(err);
        setContent(
          <div>
            <Typography variant='h5' gutterBottom>
              Sorry, but something went wrong and your order wasn't placed!
              Please try again, or give us a call at 405 752 8889.
            </Typography>
          </div>
        );
      });

    // log
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        title='Szechuan Bistro'
        resetInformationState={props.resetInformationState}
      />
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>
            <Stepper activeStep={2} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {content}
          </Paper>
          <Copyright />
        </main>
      </div>
    </React.Fragment>
  );
}
