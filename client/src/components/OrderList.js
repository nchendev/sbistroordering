import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import { OrderItem } from "./index";

// constants
const TAXRATE = 0.09;

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
}));

export default function OrderList(props) {
  const classes = useStyles();

  /*
   * @desc calculate estimated subtotal
   * @params
   * @return
   */
  const calcSubtotal = () => {
    let subtotal = 0;
    props.order.forEach((orderItem) => {
      subtotal += parseInt(orderItem.amount) * parseInt(orderItem.price);
    });
    return subtotal;
  };
  /*
   * @desc calculate estimated tax
   * @params
   * @return
   */
  const calcTax = () => {
    let tax = calcSubtotal() * TAXRATE;
    return tax;
  };
  /*
   * @desc calculate estimated delivery fee
   * @params
   * @return
   */
  const calcDeliveryFee = () => {
    if (props.pd == 2) {
      return 3;
    } else {
      return 0;
    }
  };
  /*
   * @desc calculated estimated total
   * @params
   * @return
   */
  const calcTotal = () => {
    let subtotal = calcSubtotal();
    let tax = calcTax();
    let fee = calcDeliveryFee();
    let total = subtotal + tax + fee;
    props.handlePriceChange("subtotal", subtotal.toFixed(2));
    props.handlePriceChange("tax", tax.toFixed(2));
    props.handlePriceChange("fee", fee.toFixed(2));
    props.handlePriceChange("total", total.toFixed(2));

    return total;
  };

  return (
    <div>
      <List disablePadding>
        {
          // order items
          props.order.map((orderItem, itemIndex) => (
            <OrderItem
              itemIndex={itemIndex}
              orderItem={orderItem}
              removeFromOrder={props.removeFromOrder}
              editInOrder={props.editInOrder}
            />
          ))
        }
        <Divider />
        {/* order pricing information */}
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Subtotal' />
          <Typography variant='subtitle1' className={classes.total}>
            ${calcSubtotal()}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Tax' />
          <Typography variant='subtitle1' className={classes.total}>
            ${calcTax()}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Delivery Fee' />
          <Typography variant='subtitle1' className={classes.total}>
            ${calcDeliveryFee()}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Total' />
          <Typography variant='subtitle1' className={classes.total}>
            ${calcTotal()}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}
