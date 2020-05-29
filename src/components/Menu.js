import React, { Component } from 'react'
import MenuCategory from './MenuCategory';
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Menu(props) {
  return (
    <div>
      <h1>Menu</h1>
      {
        Object.keys(props.menu).map((menuCategory, menuIndex) => 
        <Paper>
          <ExpansionPanel TransitionProps={{ unmountOnExit: true }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p>{menuCategory}</p>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                flexwrap="wrap"
                spacing={2}
              >
                <MenuCategory menuCategory = {props.menu[menuCategory]} addToOrder = {props.addToOrder}/>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Paper>
        )
      }
    </div>
  );
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
