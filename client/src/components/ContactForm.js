import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

export default function ContactForm(props) {
  // react hooks
  const [showAlert, setShowAlert] = React.useState(false);
  const [pickupSelected, setPickupSelected] = React.useState(
    props.options.pickup
  );
  React.useState(pickupSelected ? "primary" : "default");
  const [pickupButtonColor, setPickupButtonColor] = React.useState(
    pickupSelected ? "primary" : "default"
  );
  const [deliveryButtonColor, setDeliveryButtonColor] = React.useState(
    !pickupSelected ? "primary" : "default"
  );
  const [deliveryMessage, setDeliveryMessage] = React.useState("");
  const togglePickupDelivery = (e) => {
    setPickupSelected(!pickupSelected);
    if (pickupButtonColor === "default") setPickupButtonColor("primary");
    else setPickupButtonColor("default");
    if (deliveryButtonColor === "default") setDeliveryButtonColor("primary");
    else setDeliveryButtonColor("default");
    props.handlePickupDeliveryToggle();
  };

  const calcDfee = () => {
    setShowAlert(false);
    setDeliveryMessage("");
    // if all inputs valid, calculate delivery fee
    // query backend for delivery fee
    let parametersJSON = {
      address: props.information.address,
      city: props.information.city,
      state: props.information.state,
      zip: props.information.zip,
    };
    // check to make sure all fields are filled in
    if (
      (parametersJSON.address === "" ||
        parametersJSON.city === "" ||
        parametersJSON.state == "",
      parametersJSON.zip == "")
    ) {
      setShowAlert(true);
      return;
    }
    let success = false;
    // make call to the backend to validate address and calculate distance
    axios
      .post("/api/distance", parametersJSON)
      .then((res) => {
        console.log("api reply: ");
        console.log(res.data);
        if (res.data.status === "OK") {
          props.setDeliveryFee(res.data.dfee);
          setDeliveryMessage(
            "The estimated delivery fee is $" +
              res.data.dfee +
              " for a delivery distance of " +
              res.data.dist
          );
        } else if (res.data.status === "FAILURE") {
          props.setDeliveryFee(3);
          setDeliveryMessage(
            "Something went wrong and we couldn't verify your address. The estimated delivery fee has been set to $3.00"
          );
        } else if (res.data.status === "INVALID") {
          setShowAlert(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    // set delivery fee on first load
    props.handlePickupDeliveryToggle();
    props.handlePickupDeliveryToggle();
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={6} md={4}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='given-name'
            onChange={props.handleInfoChange("fname")}
            defaultValue={props.information.fname}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='family-name'
            onChange={props.handleInfoChange("lname")}
            defaultValue={props.information.lname}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            required
            id='phone'
            name='phone'
            label='Phone Number'
            fullWidth
            autoComplete='phone'
            onChange={props.handleInfoChange("phone")}
            defaultValue={props.information.phone}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={6} md={4}>
          <Typography gutterBottom>
            Would you like to come pick up your order, or have it delivered?
          </Typography>{" "}
        </Grid>
        <Grid item xs={6} md={8}>
          <Button
            variant='contained'
            color={pickupButtonColor}
            onClick={(e) => togglePickupDelivery(e)}
          >
            Pickup
          </Button>
          <Button
            variant='contained'
            color={deliveryButtonColor}
            onClick={(e) => togglePickupDelivery(e)}
          >
            Delivery
          </Button>
        </Grid>
      </Grid>
      {pickupSelected ? (
        <div></div>
      ) : (
        <div>
          <Typography variant='h6' gutterBottom>
            Delivery Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
              <TextField
                required
                id='address'
                name='address'
                label='Address line'
                fullWidth
                autoComplete='shipping address-line1'
                onChange={props.handleInfoChange("address")}
                defaultValue={props.information.address}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                required
                id='city'
                name='city'
                label='City'
                fullWidth
                autoComplete='shipping address-level2'
                onChange={props.handleInfoChange("city")}
                defaultValue={props.information.city}
              />
            </Grid>
            <Grid item xs={6} sm={8} md={1}>
              <TextField
                id='state'
                name='state'
                label='State'
                fullWidth
                onChange={props.handleInfoChange("state")}
                value={"OK"}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                required
                id='zip'
                name='zip'
                label='Zip / Postal code'
                fullWidth
                autoComplete='shipping postal-code'
                onChange={props.handleInfoChange("zip")}
                defaultValue={props.information.zip}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id='driverNotes'
                name='driverNotes'
                label='Note for Driver, Gate Code, etc'
                fullWidth
                onChange={props.handleInfoChange("driverNotes")}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Button variant='contained' color='primary' onClick={calcDfee}>
                Calculate Delivery Fee
              </Button>
            </Grid>
            <Grid item xs={6} md={9}>
              <Typography gutterBottom>{deliveryMessage}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Collapse in={showAlert}>
                <Alert severity='warning'>
                  Invalid Address supplied. Please check your information
                </Alert>
              </Collapse>
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
