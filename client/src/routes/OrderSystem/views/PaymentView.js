import React from "react";
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

export default function PaymentView(props) {
  const classes = useStyles();

  // react hooks
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const validInput = () => {
    // check cc info
    if (
      props.payment.name === "" ||
      props.payment.cc === "" ||
      props.payment.exp === "" ||
      props.payment.cvv == "" ||
      props.payment.cc.length < 16 ||
      props.payment.cvv.length < 3
    )
      return false;
    return true;
  };
  const handleNext = () => {
    if (props.options.cash || validInput()) {
      props.nextStep();
    } else setOpen(true);
  };
  const handleBack = () => {
    props.prevStep();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header
        title='Szechuan Bistro'
        resetInformationState={props.resetInformationState}
        history={props.history}
      />
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h4' align='center'>
              Checkout
            </Typography>
            <Stepper activeStep={1} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              <PaymentForm
                handlePaymentChange={props.handlePaymentChange}
                payment={props.payment}
                handleCardCashToggle={props.handleCardCashToggle}
                options={props.options}
              />
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </div>
      {/* Fab Space */}
      <div elevation={0} className={classes.fabSpace} />
      {/** Navigation **/}
      <Grid container justify='center'>
        <Paper className={classes.fab}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={(classes.margin, classes.fab2)}
            onClick={handleBack}
          >
            Back
          </Fab>
        </Paper>
        <Paper>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={(classes.margin, classes.fab2)}
            onClick={handleNext}
          >
            Next
          </Fab>
        </Paper>
      </Grid>
      {/* dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {"Incomplete/Invalid payment information!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Please fill out your credit card information correctly.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
