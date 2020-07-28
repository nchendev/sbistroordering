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
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
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
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
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

export default function Checkout(props) {
  const classes = useStyles();

  // react hooks
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleNext = () => {
    if (activeStep == 0 && props.dfeeCalced) setActiveStep(activeStep + 1);
    else if (activeStep == 0 && props.options.pickup)
      setActiveStep(activeStep + 1);
    else setOpen(true);
  };
  const handleBack = () => {
    if (activeStep === 0) props.prevStep();
    else setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <ContactForm
            information={props.information}
            handleInfoChange={props.handleInfoChange}
            handlePickupDeliveryToggle={props.handlePickupDeliveryToggle}
            options={props.options}
            price={props.price}
            setDeliveryFee={props.setDeliveryFee}
            dfeeCalced={props.dfeeCalced}
            setDfeeCalced={props.setDfeeCalced}
          />
        );
      case 1:
        return (
          <PaymentForm
            handlePaymentChange={props.handlePaymentChange}
            payment={props.payment}
            handleCardCashToggle={props.handleCardCashToggle}
            options={props.options}
          />
        );
      case 2:
        return (
          <Review
            information={props.information}
            payment={props.payment}
            callAPI={props.callAPI}
            order={props.order}
            removeFromOrder={props.removeFromOrder}
            editInOrder={props.editInOrder}
            price={props.price}
            handlePriceChange={props.handlePriceChange}
            options={props.options}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }
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
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                props.callAPI() === "success" ? (
                  <React.Fragment>
                    <Typography variant='h5' gutterBottom>
                      Thank you for ordering from Szechuan Bistro!
                    </Typography>
                    <Typography variant='subtitle1'>
                      We will be in contact shortly through phone by
                      405-752-8889 to confirm your order! Deliveries should be
                      made within the hour, and pickup orders should be ready in
                      15 minutes. <br /> Thank you for your patronage, we hope
                      to serve you again soon.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <div>
                    <Typography variant='h5' gutterBottom>
                      Sorry, but something went wrong and your order wasn't
                      placed! Please try again, or give us a call at 405 752
                      8889.
                    </Typography>
                  </div>
                )
              ) : (
                <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </div>
      {/* Fab Space */}
      <div elevation={0} className={classes.fabSpace} />
      {/** Navigation **/}
      {activeStep != steps.length && (
        <Grid container justify='center'>
          <Paper className={classes.fab}>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab2)}
              onClick={handleBack}
            >
              {activeStep === 0 ? "Edit Order" : "Back"}
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
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Fab>
          </Paper>
        </Grid>
      )}
      {/* dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {"Delivery Fee not yet calculated!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Once you've filled our your address, please click the button so we
            can calculate the delivery fee.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
