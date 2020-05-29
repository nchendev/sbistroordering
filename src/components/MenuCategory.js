import React, { Component } from 'react'
import MenuItem from './MenuItem';
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

function MenuCategory(props) {
  
  console.log(typeof(props.menuCategory))
  return props.menuCategory.map((menuItem) => ( 
    <Grid container item
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    xs={4} sm = {2} md = {2} lg = {1}
    >
      <MenuItem key = {menuItem.english} menuItem = {menuItem} addToOrder={props.addToOrder}/>
    </Grid>
  ));
}

// PropTypes
MenuCategory.propTypes = {
  menuCategory: PropTypes.array.isRequired
}

export default MenuCategory
