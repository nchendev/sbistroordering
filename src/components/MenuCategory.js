import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid';

import MenuItem from './MenuItem';

function MenuCategory(props) {
  console.log(typeof(props.menuCategory))
  return props.menuCategory.map((menuItem) => ( 
    <Grid 
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      xs={12} sm = {12} md = {12} lg = {12}
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
