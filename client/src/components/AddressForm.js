import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm(props) {
  const [pickupSelected, setPickupSelected] = React.useState(
    props.information.pickup
  );
  const [pickupButtonColor, setPickupButtonColor] = React.useState("default");
  const [deliveryButtonColor, setDeliveryButtonColor] = React.useState(
    "primary"
  );
  const togglePickupDelivery = () => {
    setPickupSelected(!pickupSelected);
    if (pickupButtonColor === "default") setPickupButtonColor("primary");
    else setPickupButtonColor("default");
    if (deliveryButtonColor === "default") setDeliveryButtonColor("primary");
    else setDeliveryButtonColor("default");
    props.handlePickupDeliveryToggle();
  };
  useEffect(() => {
    if (pickupSelected) {
      setPickupButtonColor("primary");
      setDeliveryButtonColor("default");
    } else {
      setDeliveryButtonColor("primary");
      setPickupButtonColor("default");
    }
  });
  return (
    <React.Fragment>
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
            onClick={togglePickupDelivery}
          >
            Pickup
          </Button>
          <Button
            variant='contained'
            color={deliveryButtonColor}
            onClick={togglePickupDelivery}
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
            Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={12}>
              <TextField
                id='phone'
                name='phone'
                label='Phone Number'
                fullWidth
                autoComplete='phone'
                onChange={props.handleInfoChange("phone")}
                defaultValue={props.information.phone}
              />
            </Grid>
            <Grid item xs={12}>
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

            <Grid item xs={12} sm={6} md={4}>
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
            <Grid item xs={6} sm={8} md={4}>
              <TextField
                id='state'
                name='state'
                label='State'
                fullWidth
                onChange={props.handleInfoChange("state")}
                value={"OK"}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={4}>
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
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
