import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuItemDialog from './MenuItemDialog';

function MenuItem (props) {
  const classes = useStyles();
  const [showDialog, setShowDialog] = React.useState(false);
  const handleClick = (e) => {
    setShowDialog(! showDialog);
  } 
  return (
    <div className={classes.root}>
      <Grid 
        item
        onClick={handleClick}
        direction="column"
        justify="flex-start"
      >
        <Paper square className={classes.paper}>
          {
            props.menuItem.id + ". " +
            props.menuItem.english +" "
          }
          {
            [...Array(parseInt(props.menuItem.spicy))].map((e, i) => <FontAwesomeIcon icon={faPepperHot} style={{color:"red"}}/>)
          }
        </Paper>
      </Grid>
      
      <MenuItemDialog 
        menuItem={props.menuItem} 
        addToOrder={props.addToOrder} 
        showDialog={showDialog} 
        setShowDialog={setShowDialog}
        amount={1}
        note={''}
      />
    </div>
  )
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default MenuItem
