import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import OrderItemDialog from "./OrderItemDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function OrderItem(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [showDialog, setShowDialog] = React.useState(false);

  const getPrice = () => {
    return parseFloat(props.orderItem.price) * props.orderItem.amount;
  };
  const handleClick = (e) => {
    setShowDialog(!showDialog);
  };

  return (
    <div>
      <ListItem
        className={classes.listItem}
        key={props.orderItem.english}
        onClick={handleClick}
      >
        <ListItemText
          primary={props.orderItem.english}
          secondary={props.orderItem.note}
        />
        <Typography variant='body2'>
          {props.orderItem.amount} x ${props.orderItem.price}
        </Typography>
      </ListItem>
      <OrderItemDialog
        orderItem={props.orderItem}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        amount={props.orderItem.amount}
        note={props.orderItem.note}
        itemIndex={props.itemIndex}
        removeFromOrder={props.removeFromOrder}
        editInOrder={props.editInOrder}
      />
    </div>
  );
}
