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
import { OrderOptions, Header } from "../../../components/index";
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
  root: {
    direction: "column",
    flexGrow: 1,
    justifyContent: "space-between",
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
export default function OptionsView(props) {
  const classes = useStyles();
  return (
    <div>
      {/** Header**/}
      <Header
        title='Order Options'
        resetInformationState={props.resetInformationState}
      />

      {/* OrderOptions */}
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <OrderOptions
            orderOptions={props.orderOptions}
            handleOrderOptionsChange={props.handleOrderOptionsChange}
          />
        </Paper>
      </main>

      {/* Fab Space */}
      <Paper elevation={0} className={classes.fabSpace} />

      {/** Navigation **/}
      <Grid container justify='center'>
        <Paper className={classes.fab}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={(classes.margin, classes.fab)}
            onClick={props.nextStep}
          >
            Continue to Order
          </Fab>
        </Paper>
      </Grid>
    </div>
  );
}
