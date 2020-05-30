import React from 'react'


const taxRate = 0.045;
export default function OrderDetails(props) {
  const calcSubtotal = () => {
    let subtotal = 0;
    props.order.forEach(orderItem => {
      subtotal += (parseInt(orderItem.amount) * parseInt(orderItem.price));
    });
    return subtotal;
  }

  const calcTax = () => {
    return calcSubtotal() * taxRate;
  }

  const calcTotal = () => {
    return calcSubtotal() + calcTax();
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>estimated subtotal: {calcSubtotal()}</p>
      <p>estimated tax: {calcTax()}</p>
      <p>estimated total: {calcTotal()}</p>
    </div>
  )
}
