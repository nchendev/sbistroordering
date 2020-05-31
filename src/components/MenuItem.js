import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MenuItemDialog from './MenuItemDialog';

function MenuItem (props) {
  const [showDialog, setShowDialog] = React.useState(false);
  const handleClick = (e) => {
    setShowDialog(! showDialog);
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
      
      <MenuItemDialog 
        menuItem={props.menuItem} 
        addToOrder={props.addToOrder} 
        showDialog={showDialog} 
        setShowDialog={setShowDialog}
        amount={1}
        note={''}
      />
    </div>
  )
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
}

export default MenuItem
