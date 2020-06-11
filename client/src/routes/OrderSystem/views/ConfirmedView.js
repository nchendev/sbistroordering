import React from "react";
import {
  makeStyles,
  Paper,
  AppBar,
  Toolbar,
  Typography,
} from "../../../components/mui_index";
import { Header } from "../../../components/index";

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
export default function ConfirmedView(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {/** Header**/}
        <Header
          title='Confirmed'
          resetInformationState={props.resetInformationState}
        />

        {/* Confirm Order */}
        <Typography variant='h6' className={(classes.title, classes.margin)}>
          Thank you for ordering from Szechuan Bistro! We will be in contact
          shortly through phone by 405-752-8889 to confirm your order!
          Deliveries should be made within the hour, and pickup orders should be
          ready in 15 minutes. <br /> Thank you for your patronage, we hope to
          serve you again soon.
        </Typography>

        {/* call API */}
        {props.callAPI()}

        {/* Fab Space */}
        <Paper elevation={0} className={classes.fabSpace} />

        {/** Navigation **/}
        {/**</div><Grid container justify='center'>
						<Paper className={classes.fab}>
							<Fab
								variant='extended'
								color='primary'
								aria-label='add'
								className={(classes.margin, classes.fab)}
								onClick=!!!
							>
								Return to Website
							</Fab>
						</Paper>
					</Grid>
					**/}
      </div>
    </div>
  );
}
