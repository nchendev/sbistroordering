import React from 'react';

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
