import React from 'react';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';

function Order(props) {
  return (
    <div>
      <h1> Order </h1>
      <OrderList order={props.order} removeFromOrder={props.removeFromOrder} editOrder={props.editOrder}/>
      <OrderDetails order={props.order}/>
    </div>
  );
}

export default Order;
