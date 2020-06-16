import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Fab,
  Grid,
  Divider,
} from "../../../components/mui_index";
import { Menu, Header } from "../../../components/index";

// mui styling
const useStyles = makeStyles((theme) => ({
  layout: {
    width: "fill",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "80vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  fab: {
    margin: 0,
    bottom: theme.spacing(1),
    position: "fixed",
    minWidth: "80vw",
  },
  fabSpace: {
    margin: theme.spacing(1),
    height: "40px",
  },
  text: {
    padding: theme.spacing(1),
  },
}));

export default function OrderView(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.layout}>
        {/** Header**/}
        <Header
          title='Szechuan Bistro'
          resetInformationState={props.resetInformationState}
        />

        {/** Content **/}
        <Paper elevation={2} className={classes.paper}>
          <Typography
            component='h1'
            variant='h4'
            align='center'
            className={classes.text}
          >
            Menu
          </Typography>
          <Divider />
          <Menu menu={props.menu} addToOrder={props.addToOrder} />
        </Paper>

        {/* Fab Space */}
        <div elevation={0} className={classes.fabSpace} />

        {/** Navigation **/}
        <Grid container>
          <Paper>
            <Fab
              variant='extended'
              color='primary'
              aria-label='add'
              className={(classes.margin, classes.fab)}
              onClick={props.nextStep}
            >
              Review Order
            </Fab>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
