import React from "react";
import {
  makeStyles,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Fab,
  Grid,
  Divider,
} from "../../../components/mui_index";
import { Header, OrderList } from "../../../components/index";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// mui styles
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
  text: {
    padding: theme.spacing(1),
  },
}));
export default function ReviewView(props) {
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
      {/** Header**/}
      <Header
        title='Szechuan Bistro'
        resetInformationState={props.resetInformationState}
      />

      {/* Order */}
      <div>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography
              component='h1'
              variant='h4'
              align='center'
              className={classes.text}
            >
              Review Order
            </Typography>
            <Typography
              disablePadding
              component='h4'
              variant='subtitle1'
              align='center'
              className={classes.text}
            >
              To make changes to or remove an item, click on it
            </Typography>
            <Divider />
            <OrderList
              order={props.order}
              price={props.price}
              removeFromOrder={props.removeFromOrder}
              editInOrder={props.editInOrder}
              handlePriceChange={props.handlePriceChange}
            />
          </Paper>
        </main>
      </div>

      {/* Fab Space */}
      <div elevation={0} className={classes.fabSpace} />

      {/** Navigation **/}
      <Grid container justify='center'>
        <Paper className={classes.fab}>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={(classes.margin, classes.fab2)}
            onClick={props.prevStep}
          >
            Add Items
          </Fab>
        </Paper>
        <Paper>
          <Fab
            variant='extended'
            color='primary'
            aria-label='add'
            className={(classes.margin, classes.fab2)}
            onClick={handleNext}
          >
            Continue
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
            To order items, go back to the previous page and add items.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
