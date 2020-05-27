import React, { Component } from 'react'
import MenuItem from './MenuItem';
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
export class MenuCategory extends Component {
  render() {
    console.log(typeof(this.props.menuCategory))
    return this.props.menuCategory.map((menuItem) => ( 
      <Grid container item
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      xs={6} sm = {4} md = {2} lg = {1}
      >
        <MenuItem key = {menuItem.english} menuItem = {menuItem}/>
      </Grid>
    ));
  }
}

// PropTypes
MenuCategory.propTypes = {
  menuCategory: PropTypes.array.isRequired
}

export default MenuCategory
