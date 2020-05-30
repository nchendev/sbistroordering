import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Menu from './components/Menu.js';
import Order from './components/Order.js';

//import logo from './logo.svg';
import './App.css';

import 'typeface-roboto';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [menu, setMenu] = React.useState({});
  const [order, setOrder] = React.useState([]);

  const addToOrder = (orderItem) => {
    console.log(JSON.stringify(orderItem));
    setOrder([...order, orderItem]);
    //let menuCopy = this.state.menu;
    //let orderCopy = this.state.order;
    //this.setState({ 
    //  menu: menuCopy,
    //  order: {...orderCopy, orderItem}
    //});
    //this.state.order= {...this.state.order, orderItem};
    console.log(JSON.stringify(order));
  }

  const removeFromOrder = (itemIndex) => {
    console.log(itemIndex);
    let cpy = order.slice(0);
    setOrder([...(cpy.slice(0, itemIndex)),...(cpy.slice(itemIndex+1))]);
    //order.splice(itemIndex, 1);
  }

  const editOrder= () => {
    
  }
  useEffect(() => {
    console.log('trigger use effect hook');
    axios.get('https://www.neckch.in/sbistro/menu.json')
      .then(res => setMenu(res.data,))
    }, []);

  return (
    <Router>
      <div className="App">
        <Menu menu={menu} addToOrder={addToOrder}/>
        <Order order={order} removeFromOrder={removeFromOrder} editOrder={editOrder}/>
      </div>
    </Router>
  );
}

export default App;