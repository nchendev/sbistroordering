import React from "react";
import {
  makeStyles,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Fab,
  Grid,
} from "../../../components/mui_index";
import { Information, Header } from "../../../components/index";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
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
export default function InformationView(props) {
  const classes = useStyles();

  const evalData = () => {
    // determine if session/local
    let storage = localStorage;
    if (
      storage.getItem("information") === "undefined" ||
      storage.getItem("information") === null
    ) {
      storage = sessionStorage;
    }
    // if session/local storage of information exists
    if (
      storage.getItem("information") !== "undefined" &&
      storage.getItem("information") !== null
    ) {
      // check if info changed
      if (props.information !== JSON.parse(storage.getItem("information"))) {
        // update session/localstorage values
        storage.setItem("information", JSON.stringify(props.information));
        // update database
        // TODO
      }
    }
  };
  const handlePrev = () => {
    evalData();
    props.prevStep();
  };
  const handleNext = () => {
    evalData();
    props.nextStep();
  };
  return (
    <div>
      <div>
        {/** Header**/}
        <Header
          title='Contact and Payment Details'
          resetInformationState={props.resetInformationState}
        />

        {/* Information */}
        <Information
          information={props.information}
          handleInfoChange={props.handleInfoChange}
        />

        {/* Fab Space */}
        <Paper elevation={0} className={classes.fabSpace} />

        {/** Navigation **/}
        <Grid container justify='center'>
          <Paper className={classes.fab}>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab2)}
              onClick={handlePrev}
            >
              Review Order
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
              Continue
            </Fab>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
