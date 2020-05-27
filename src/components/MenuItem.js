import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


export class MenuItem extends Component {

  render() {
    const imageClick = (e) => {
      console.log('Click');
    } 
    return (
      <Grid 
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Paper elevation={1}>
          <img src={require('../images/food_blue.jpg')} 
            onClick={(e) => imageClick(e)} 
          />
          <div className="itemcentered">{this.props.menuItem.english}</div>
        </Paper>
      </Grid>
    )
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
}


export default MenuItem
