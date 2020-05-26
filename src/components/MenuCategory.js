import React, { Component } from 'react'
import MenuItem from './MenuItem';
import PropTypes from 'prop-types'

export class MenuCategory extends Component {
  render() {
    console.log(typeof(this.props.menuCategory))
    return this.props.menuCategory.map((menuItem) => ( 
      <div>
        <MenuItem key = {menuItem.english} menuItem = {menuItem}/>
      </div>
    ));
  }
}

// PropTypes
MenuCategory.propTypes = {
  menuCategory: PropTypes.object.isRequired
}

export default MenuCategory
