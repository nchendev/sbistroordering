import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";

import MenuItem from "./MenuItem";

// mui styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    position: "sticky",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflowX: "scroll",
  },
  category: {
    marginTop: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(1),
  },
  gridTile: {
    height: "fixed",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

function Menu(props) {
  const classes = useStyles();

  // react hooks
  const [selectedCategory, setSelectedCategory] = React.useState([]);

  /*
   * @desc handle category selection
   * @params
   * @return
   */
  const handleTileClick = (menuCategory) => {
    console.log(menuCategory.menuCategory + " selected");
    setSelectedCategory(props.menu[menuCategory.menuCategory]);
  };

  return (
    <div className={classes.root}>
      <Typography
        disablePadding
        component='h4'
        variant='subtitle1'
        align='center'
        className={classes.text}
      >
        1. Select Category
      </Typography>
      {/* Categories */}
      <GridList cellHeight={180} className={classes.gridList}>
        {Object.keys(props.menu).map((menuCategory, menuIndex) => (
          <GridListTile
            key={menuCategory}
            className={classes.gridTile}
            style={{ height: "auto", width: "fixed" }}
            onClick={() => handleTileClick({ menuCategory })}
          >
            <ListSubheader component='div'>{menuCategory}</ListSubheader>
          </GridListTile>
        ))}
      </GridList>

      {/* Display Items within category */}
      <Typography
        disablePadding
        component='h4'
        variant='subtitle1'
        align='center'
        className={classes.text}
      >
        2. Choose Items
      </Typography>
      {selectedCategory.map((menuItem) => (
        <Grid
          container
          direction='column'
          justify='flex-start'
          alignItems='stretch'
          xs={12}
        >
          <MenuItem
            key={menuItem.english}
            menuItem={menuItem}
            addToOrder={props.addToOrder}
          />
        </Grid>
      ))}
    </div>
  );
}

// PropTypes
Menu.propTypes = {
  menu: PropTypes.object.isRequired,
};

const categorycontainerstyle = {
  display: "flex",
  flexflow: "row wrap",
  padding: "5px 5px 5px 5px",
  margins: "5px 5px 5px 5px",
};
export default Menu;
