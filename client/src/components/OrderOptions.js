import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function OrderOptions(props) {
  const classes = useStyles();

  return (
    <div>
      {/* View in English or Chinese */}
      <Typography variant='h6'>
        Would you like to view the menu in English, 中文, or Both?
        <TextField
          required
          margin='dense'
          id='language'
          label='English or 中文'
          type='text'
          select
          SelectProps={{
            native: true,
          }}
          onChange={props.handleOrderOptionsChange("language")}
          defaultValue={props.orderOptions.language}
          //type="email"
          fullWidth
        >
          <option value={1}>English</option>
          <option value={2}>中文</option>
          <option value={3}>Both</option>
        </TextField>
      </Typography>

      {/* Delivery or Pickup */}
      <Typography variant='h6'>
        Will this order be for pickup or delivery?
        <TextField
          required
          margin='dense'
          id='pd'
          label='Pickup or Delivery'
          type='text'
          select
          SelectProps={{
            native: true,
          }}
          onChange={props.handleOrderOptionsChange("pd")}
          defaultValue={props.orderOptions.pd}
          //type="email"
          fullWidth
        >
          <option value={1}>Pickup</option>
          <option value={2}>Delivery</option>
        </TextField>
      </Typography>
    </div>
  );
}
