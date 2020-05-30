import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import OrderItem from './OrderItem';

import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function OrderList(props) {
  console.log(props.order)
  const classes = useStyles();

  const handleEditOrder = (e) => {
    console.log("editing order");
  }

  return (
    <div>
      <h2>Order List</h2>
      {
        props.order.map((orderItem, itemIndex) =>(
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            //xs={4} sm = {2} md = {2} lg = {1}
            // implement editing orders and prettier display and shit here in future, get rid of table
          >
            
            <OrderItem orderItem={orderItem}/>
          </Grid>
        ))
      }

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Modify</TableCell>
            <TableCell>Name of Dish</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Cost Per</TableCell>
            <TableCell align="right">Cost For Qty</TableCell>
            <TableCell align="right">Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { 
          props.order.map((orderItem, itemIndex) =>(
            <TableRow key={orderItem.id}>
              <TableCell>
                <Button onClick={() => props.removeFromOrder(itemIndex)}>remove</Button>
                <Button onClick={() => handleEditOrder(itemIndex)}>edit</Button>
              </TableCell>
              <TableCell alight="left" component="th" scope="row">
                  {orderItem.english} &nbsp;
                  {[...Array(parseInt(orderItem.spicy))].map((e, i) => 
                    <FontAwesomeIcon icon={faPepperHot} style={{color:"red"}}/>
                  )}
              </TableCell>
              <TableCell align="right">{orderItem.amount}</TableCell>
              <TableCell align="right">{parseInt(orderItem.price)}</TableCell>
              <TableCell align="right">{parseInt(orderItem.amount) * parseInt(orderItem.price)}</TableCell>
              <TableCell align="right">{orderItem.note}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    </div>  
  );
}

export default OrderList;
