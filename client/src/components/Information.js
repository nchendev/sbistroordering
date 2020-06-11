import React from "react";

import TextField from "@material-ui/core/TextField";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function Information(props) {
  const classes = useStyles();

  return (
    <div>
      <React.Fragment>
        <Paper className={classes.paper}>
          <Typography>Contact Information</Typography>
          <TextField
            required
            placeholder='Enter Your Name'
            label='Name'
            onChange={props.handleInfoChange("name")}
            defaultValue={props.information.name}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            required
            placeholder='Enter Your Address'
            label='Address'
            onChange={props.handleInfoChange("address")}
            defaultValue={props.information.address}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            required
            placeholder='Enter Your Phone Number'
            label='Phone Number'
            onChange={props.handleInfoChange("phone")}
            defaultValue={props.information.phone}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            placeholder='Enter Any Note for Driver'
            label='Driver Note'
            onChange={props.handleInfoChange("driverNote")}
            defaultValue={props.information.driverNote}
            margin='normal'
            fullWidth
          />
          <br />
        </Paper>
        <Paper className={classes.paper}>
          <Typography>Payment Details</Typography>
          <TextField
            required
            placeholder='Enter Your Credit Card Number'
            label='Credit Card'
            onChange={props.handleInfoChange("cc")}
            defaultValue={props.information.cc}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            required
            placeholder="Enter Your Credit Card's Expiration Date"
            label='Exp'
            onChange={props.handleInfoChange("exp")}
            defaultValue={props.information.exp}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            required
            placeholder="Enter Your Credit Card's CVV"
            label='CVV'
            onChange={props.handleInfoChange("cvv")}
            defaultValue={props.information.cvv}
            margin='normal'
            fullWidth
          />
          <br />
        </Paper>
      </React.Fragment>
    </div>
  );
}
