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
import { Header, OrderDev } from "../../../components/index";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    flexGrow: 1,
    justifyContent: "space-between",
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
  text: {
    padding: theme.spacing(1),
  },
}));
export default function ReviewView(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {/** Header**/}
        <Header
          title='Review your Order'
          resetInformationState={props.resetInformationState}
        />

        {/* Order */}
        <div>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <Typography
                component='h1'
                variant='h4'
                align='center'
                className={classes.text}
              >
                Review Order
              </Typography>
              <Typography
                component='h4'
                variant='subtitle1'
                align='center'
                className={classes.text}
              >
                To make changes to or remove item, click on it
              </Typography>
              <OrderDev
                order={props.order}
                removeFromOrder={props.removeFromOrder}
                editInOrder={props.editInOrder}
                price={props.price}
                handlePriceChange={props.handlePriceChange}
                pd={props.pd}
                prevStep={props.prevStep}
                nextStep={props.nextStep}
                resetInformationState={props.resetInformationState}
              />
            </Paper>
          </main>
        </div>

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
              onClick={props.prevStep}
            >
              Add Items
            </Fab>
          </Paper>
          <Paper>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab2)}
              onClick={props.nextStep}
            >
              Continue
            </Fab>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
