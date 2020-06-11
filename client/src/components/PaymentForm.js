import React, { useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm() {
  // hooks
  const [cashSelected, setCashSelected] = React.useState(false);
  const [cashButtonColor, setCashButtonColor] = React.useState("default");
  const [cardButtonColor, setCardButtonColor] = React.useState("primary");
  // refs
  const cashButton = useRef();
  const cardButton = useRef();

  const toggleCashCard = () => {
    setCashSelected(!cashSelected);
    if (cashButtonColor === "default") setCashButtonColor("primary");
    else setCashButtonColor("default");
    if (cardButtonColor === "default") setCardButtonColor("primary");
    else setCardButtonColor("default");
  };
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={8} md={4}>
          <Typography gutterBottom>
            Will you pay with Cash or Credit Card?
          </Typography>{" "}
        </Grid>
        <Grid item xs={4} md={8}>
          <Button
            ref={cashButton}
            variant='contained'
            color={cashButtonColor}
            onClick={toggleCashCard}
          >
            Cash
          </Button>
          <Button
            ref={cardButton}
            variant='contained'
            color={cardButtonColor}
            onClick={toggleCashCard}
          >
            Card
          </Button>
        </Grid>
      </Grid>
      {cashSelected ? (
        <div></div>
      ) : (
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='cardName'
                label='Name on card'
                fullWidth
                autoComplete='cc-name'
                disabled={cashSelected}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='cardNumber'
                label='Card number'
                fullWidth
                autoComplete='cc-number'
                disabled={cashSelected}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='expDate'
                label='Expiry date'
                fullWidth
                autoComplete='cc-exp'
                disabled={cashSelected}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id='cvv'
                label='CVV'
                helperText='Last three digits on signature strip'
                fullWidth
                autoComplete='cc-csc'
                disabled={cashSelected}
              />
            </Grid>
            <Grid item xs={12}>
              Your credit card details will not be saved in our system
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
}
