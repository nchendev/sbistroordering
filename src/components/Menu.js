import React, { Component } from 'react'
import MenuCategory from './MenuCategory';
import PropTypes from 'prop-types'

class Menu extends Component{
  render() {
    console.log(this.props.menu);
    console.log(Object.keys(this.props.menu));
    return (
      <div>
        <h1>Menu</h1>
        {
          Object.keys(this.props.menu).map((menuCategory, menuIndex) => 
          <div>
              <h2>{menuCategory}</h2>
              <div className="categorycontainer" style={categorycontainerstyle}>
              <MenuCategory menuCategory = {this.props.menu[menuCategory]}/>
            </div>
          </div>
          )
        }
      </div>
    );
  }
}

// PropTypes
Menu.propTypes = {
  menu: PropTypes.object.isRequired
}

const categorycontainerstyle = {
  display: "flex",
  flexflow: "row wrap",
  padding: "5px 5px 5px 5px",
  margins: "5px 5px 5px 5px",
}
export default Menu;
