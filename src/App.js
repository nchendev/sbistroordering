import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import Menu from './components/Menu.js';
import Order from './components/Order.js';
import Information from './components/Information.js';
import Confirmation from './components/Confirmation.js';
import './App.css';

import 'typeface-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    direction: 'column',
    flexGrow: 1,
    justifyContent : 'space-between',
  },
  paper: {
    padding: 5,
    textAlign: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    margin: 0,
    bottom: theme.spacing(1),
    left: 'auto',
    position: 'fixed',
    minWidth: '50vw'
  },
  fabSpace: {
    margin: theme.spacing(1), 
    height:'40px'
  }
}));

function App() {
  const classes = useStyles();

  const [menu, setMenu] = React.useState({});
  const [order, setOrder] = React.useState([]);
  const [information, setInformation] = React.useState(
    {
      name: "",
      address: "",
      driverNotes: "",
      cc: "",
      exp: "",
      cvv: ""
    }
  );
  const[step, setStep] = React.useState(1);
  const addToOrder = (orderItem) => {
    console.log(JSON.stringify(orderItem));
    setOrder([...order, orderItem]);
    console.log(JSON.stringify(order));
  }

   // Proceed to next step
  const nextStep = () => {
    setStep(step+1)
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step-1)
  };

  const removeFromOrder = (itemIndex) => {
    console.log(itemIndex)
    let cpy = order.slice(0)
    setOrder([...(cpy.slice(0, itemIndex)),...(cpy.slice(itemIndex+1))])
    //order.splice(itemIndex, 1);
  }

  const editOrder = () => {
    console.log("editing order")
  }

  const handleContinue = () => {

  }

  const handleInfoChange = input => e => {
    information[input] = e.target.value ;
    setInformation(information);
  }
  useEffect(() => {
    console.log('trigger use effect hook');
    axios.get('https://www.neckch.in/sbistro/menu.json')
      .then(res => setMenu(res.data,))
    }, []);

  switch(step) {
    case 1:
      return (
        // ordering step
        <div className={classes.root}>
          {/** Header**/}
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Menu
              </Typography>
            </Toolbar>
          </AppBar> 
          <Toolbar/>

          {/** Content **/}
          <Paper elevation={2} className={classes.paper}>
            <Menu menu={menu} addToOrder={addToOrder}/>
          </Paper>
          
          {/* Fab Space */}
          <Paper elevation={0} className={classes.fabSpace}/>

          {/** Navigation **/}
          <Grid container justify="center">
            <Paper className={classes.fab}>
              <Fab 
                variant="extended" 
                color="primary" 
                aria-label="add" 
                className={classes.margin, classes.fab}
                onClick={nextStep}
              >
                Review Order
              </Fab>
            </Paper>  
          </Grid>
          
        </div>
        
      );
      case 2:
        return (
          // review order step
          <div>
            <Order order={order} removeFromOrder={removeFromOrder} editOrder={editOrder}/>
            <Button onClick={prevStep}>Edit/View Order</Button>
            <Button onClick={nextStep}>Continue</Button>
          </div>
        )
    case 3:
      return (
        // information step
        <div>
          second step!!
          <Information information={information} handleInfoChange={handleInfoChange}/>
          <Button onClick={nextStep}>Continue</Button>
          <Button onClick={prevStep}>Edit/View Order</Button>
        </div>
      )
    case 4:
      return (
        // confirmation step
        <div>
          third step!!
          <Confirmation information={information}/>
          <Button onClick={nextStep}>Confirm</Button>
          <Button onClick={prevStep}>Edit Details</Button>
        </div>
      )
    case 5:
      return (
        // confirmed step
        <div>
          order confirmed! We will be in contact shortly, blah blah
          <Button onClick={prevStep}>Temp back button for testing</Button>
        </div>
      )
  }
  
}

export default App;