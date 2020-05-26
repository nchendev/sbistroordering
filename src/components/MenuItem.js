import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MenuItem extends Component {
  render() {
    const imageClick = (e) => {
      console.log('Click');
    } 
    return (
      <div className="itemcontainer">
        <img src={require('../images/food_blue.jpg')} 
        onClick={(e) => imageClick(e)} 
        />
        {//<div className="itemcentered">{this.props.menuItem.spicy}</div>
        }
        <div className="itemcentered">{this.props.menuItem.english}</div>
        {//<div className="itemcentered">{this.props.menuItem.chinese}</div>
        //<div className="itemcentered">{this.props.menuItem.price}</div>
        }
      </div>
    )
  }
}

MenuItem.propTypes = {
  key: PropTypes.string.isRequired,
  menuItem: PropTypes.array.isRequired
}


export default MenuItem
