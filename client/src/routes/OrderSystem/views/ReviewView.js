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
import { Order, OrderDetails, Header } from "../../../components/index";
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
export default function ReviewView(props) {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <div className={classes.root}>
        {/** Header**/}
        <Header
          title='Review your Order'
          resetInformationState={props.resetInformationState}
        />

        {/* Order */}
        <Paper elevation={2} className={classes.paper}>
          <Typography variant='h6' className={(classes.title, classes.margin)}>
            Your Order
          </Typography>
          <Order
            order={props.order}
            removeFromOrder={props.removeFromOrder}
            editInOrder={props.editInOrder}
          />
        </Paper>
        <Paper>
          <OrderDetails
            order={props.order}
            price={props.price}
            handlePriceChange={props.handlePriceChange}
            pd={props.pd}
          />
        </Paper>

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
