import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { OrderList } from "../components/index";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <OrderList
        order={props.order}
        removeFromOrder={props.removeFromOrder}
        editInOrder={props.editInOrder}
        price={props.price}
        handlePriceChange={props.handlePriceChange}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Contact
          </Typography>
          <Typography gutterBottom>
            {props.information.fname + " " + props.information.lname}
          </Typography>
          <Typography gutterBottom>{props.information.phone}</Typography>
          {props.options.pickup ? (
            <div>You will come pick your order up</div>
          ) : (
            <div>
              <Typography variant='h6' gutterBottom className={classes.title}>
                Delivery Address
              </Typography>
              <Typography gutterBottom>{props.information.address}</Typography>
              <Typography gutterBottom>
                {props.information.city +
                  "\n" +
                  props.information.state +
                  "\n" +
                  props.information.zip}
              </Typography>
              <Typography gutterBottom>
                note: {props.information.driverNote}
              </Typography>
            </div>
          )}
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Payment details
          </Typography>
          {props.options.cash ? (
            <div>
              <Typography gutterBottom>
                You will pay for your order with cash
              </Typography>
            </div>
          ) : (
            <div>
              <Grid container>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Holder</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.payment.cc}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.payment.exp}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>CVV</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.payment.cvv}</Typography>
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
