import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import MenuCategory from './MenuCategory';


function Menu(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h1>Menu</h1>
      {
        Object.keys(props.menu).map((menuCategory, menuIndex) => 
        <Paper square>
          <ExpansionPanel square TransitionProps={{ unmountOnExit: true }}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{menuCategory}</Typography>
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
                <MenuCategory className={classes.heading} menuCategory = {props.menu[menuCategory]} addToOrder = {props.addToOrder}/>
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default Menu;
