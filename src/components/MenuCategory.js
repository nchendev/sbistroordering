import React, { Component } from 'react'

export class MenuCategory extends Component {
  render() {
    console.log(typeof(this.props.menuCategory))
    return this.props.menuCategory.map((menuItems) => ( 
      <div>
        {menuItems.english}
      </div>
    ));
  }
}

export default MenuCategory
