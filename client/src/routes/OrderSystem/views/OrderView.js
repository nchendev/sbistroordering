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
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  // react hooks
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleNext = () => {
    if (props.order.length == 0) {
      setOpen(true);
    } else {
      props.nextStep();
    }
  };
  return (
    <div>
      <div className={classes.layout}>
        {/** Header**/}
        <Header
          title='Szechuan Bistro'
          resetInformationState={props.resetInformationState}
          history={props.history}
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
              onClick={handleNext}
            >
              Review Order
            </Fab>
          </Paper>
        </Grid>
        {/* dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            {"You haven't ordered anything yet!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              To order items, choose a category then select the item you want to
              order.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
