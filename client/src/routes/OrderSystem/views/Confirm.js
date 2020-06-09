import React from "react";
import {
  makeStyles,
  Paper,
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
  Fab,
  AddIcon,
  Grid,
} from "../../components/MaterialUI";
import {
  Menu,
  Order,
  Information,
  Confirmation,
  OrderDetails,
  OrderOptions,
} from "../../components/index";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "80vw",
  },
  fab2: {
    margin: 0,
    bottom: theme.spacing(1),
    left: "auto",
    position: "fixed",
    minWidth: "40vw",
  },
  fabSpace: {
    margin: theme.spacing(1),
    height: "40px",
  },
}));
export default function Confirm() {
  return (
    <div>
      <div className={classes.root}>
        {/** Header**/}
        <AppBar position='fixed'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Confirm Order
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {/* Confirm Order */}
        <Typography variant='h6' className={(classes.title, classes.margin)}>
          Are you sure you're ready to place your order? This is your last
          chance to make any changes!
        </Typography>

        {/* Fab Space */}
        <Paper elevation={0} className={classes.fabSpace} />

        {/** Navigation **/}
        <Grid container justify='center'>
          <Paper className={classes.fab}>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab2)}
              onClick={prevStep}
            >
              Make Changes
            </Fab>
          </Paper>
          <Paper>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab2)}
              onClick={nextStep}
            >
              Send Order!
            </Fab>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
