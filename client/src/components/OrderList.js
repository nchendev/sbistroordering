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
            ${props.price.subtotal.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Tax' />
          <Typography variant='subtitle1' className={classes.total}>
            ${props.price.tax.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Delivery Fee' />
          <Typography variant='subtitle1' className={classes.total}>
            {isNaN(props.price.dfee) ? (
              <div>{props.price.dfee}</div>
            ) : (
              <div>${props.price.dfee.toFixed(2)}</div>
            )}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Estimated Total' />
          <Typography variant='subtitle1' className={classes.total}>
            ${props.price.total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}
