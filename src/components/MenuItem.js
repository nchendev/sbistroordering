import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ItemDialog from './ItemDialog'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuItem (props) {
  const classes = useStyles();

  const [showDialog, setShowDialog] = React.useState(false);
  const [amount, setAmount] = React.useState(1);
  const [note, setNote] = React.useState('');

  const handleClick = (e) => {
    // if dialog currently open (closing), reset state
    if (showDialog) {
      setAmount(1);
      setNote('');
    }
    setShowDialog(! showDialog);
  } 
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    console.log(amount);
  }
  const handleChangeNote = (e) => {
    setNote(e.target.value);
    console.log(note);
  }
  const handleAddToOrder = (e) => {
    // output to console
    console.log("added to order!");
    // create item
    // and pass object to app state
    props.addToOrder({
      id : props.menuItem.id,
      english : props.menuItem.english,
      chinese : props.menuItem.chinese,
      spicy : props.menuItem.spicy,
      price : props.menuItem.price,
      amount : amount,
      note : note
    });
    // close dialog
    handleClick();
  }
  return (
    <div>
        <Grid 
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Paper elevation={1} onClick={handleClick}>
          <img src={require('../images/food_blue.jpg')} />
          <div className="itemcentered">{props.menuItem.english}</div>
        </Paper>
      </Grid>

      <Dialog open={showDialog} onClose={handleClick} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          {props.menuItem.id + " "}
          {props.menuItem.english + " "} 
          {[...Array(parseInt(props.menuItem.spicy))].map((e, i) => <FontAwesomeIcon icon={faPepperHot} style={{color:"red"}}/>)
        }</DialogTitle>
        <DialogContent dividers>

          <DialogContentText>
            id: {props.menuItem.id} <br/>
            spicy: {props.menuItem.spicy} <br/>
            english: {props.menuItem.english} <br/>
            chinese: {props.menuItem.chinese} <br/>
            price: {props.menuItem.price} <br/>
          </DialogContentText>
          <DialogContentText>
            Amount to order:
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="order-amount"
            label="Number to Order"
            type="number"
            select
            SelectProps={{
              native: true,
            }}
            value={amount}
            onChange={handleChangeAmount}
            //type="email"
            fullWidth
          >
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={4}>Four</option>
            <option value={5}>Five</option>
            <option value={6}>Six</option>
            <option value={7}>Seven</option>
            <option value={8}>Eight</option>
            <option value={9}>Nine</option>
            <option value={10}>Ten</option>
          </TextField>
          
          <TextField
            autoFocus
            margin="dense"
            id="customer-note"
            label="Note/Modifications"
            text="test"
            value={note}
            onChange={handleChangeNote}
            fullWidth
          />
          <DialogContentText>
            Any changes may be subject to extra charges.
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddToOrder} color="primary">
            Add to Order
          </Button>
        </DialogActions>
        
      </Dialog>
    </div>
  )
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default MenuItem
