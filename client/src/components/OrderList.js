import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import OrderItem from './OrderItem';

const useStyles = makeStyles((theme) => ({
	title: {},
	orderItem: {
		minWidth: '100%',
		flexGrow: 1,
	},
}));

function OrderList(props) {
	console.log(props.order);
	const classes = useStyles();

	return (
		//<Paper elevation={2} className={classes.paper}>
		<div>
			{props.order.map((orderItem, itemIndex) => (
				<Grid
					divider
					container
					direction='column'
					justify='flex-start'
					alignItems='stretch'
					//xs={4} sm = {2} md = {2} lg = {1}
					// implement editing orders and prettier display and shit here in future, get rid of table
				>
					<OrderItem
						className={classes.orderItem}
						itemIndex={itemIndex}
						orderItem={orderItem}
						removeFromOrder={props.removeFromOrder}
						editInOrder={props.editInOrder}
					/>
				</Grid>
			))}
		</div>
		//</Paper>
	);
}

export default OrderList;
