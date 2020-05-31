import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import Menu from './components/Menu.js';
import Order from './components/Order.js';
import Information from './components/Information.js';
import Confirmation from './components/Confirmation.js';
import './App.css';

import 'typeface-roboto';

function App() {

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
        <div>
          <Menu menu={menu} addToOrder={addToOrder}/>
          <Order order={order} removeFromOrder={removeFromOrder} editOrder={editOrder}/>
          <Button onClick={nextStep}>Continue</Button>
        </div>
      );
    case 2:
      return (
        // information step
        <div>
          second step!!
          <Information information={information} handleInfoChange={handleInfoChange}/>
          <Button onClick={nextStep}>Continue</Button>
          <Button onClick={prevStep}>Edit/View Order</Button>
        </div>
      )
    case 3:
      return (
        // confirmation step
        <div>
          third step!!
          <Confirmation information={information}/>
          <Button onClick={nextStep}>Confirm</Button>
          <Button onClick={prevStep}>Edit Details</Button>
        </div>
      )
    case 4:
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