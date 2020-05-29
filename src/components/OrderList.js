import React from 'react';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function OrderList(props) {
  console.log(props.order)
  console.log(props.order[0].english)
  return (
    <div>
      <h2>Order List</h2>
      {
        props.order.map((orderItem) => (
          <p>{orderItem.english}</p>
        ))
      }
    </div>  
  );
  
  /**return (
    <div>
      <h2> OrderList </h2>
      <Paper>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          flexwrap="wrap"
          spacing={2}
        >
        {
          Object.keys(props.order).map((orderItem, orderIndex) => (
            <div>
              <Grid item> 
                <OrderList/>
              </Grid>
            </div>
                
          ))
        }
        </Grid>
      </Paper>
    </div>
  );**/
}

export default OrderList;
