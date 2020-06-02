import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const taxRate = 0.045;

const useStyles = makeStyles((theme) => ({
	details: {
		padding: 5,
		color: theme.palette.primary.light,
	},
}));

export default function OrderDetails(props) {
	const classes = useStyles();

	const calcSubtotal = () => {
		let subtotal = 0;
		props.order.forEach((orderItem) => {
			subtotal += parseInt(orderItem.amount) * parseInt(orderItem.price);
		});
		return subtotal;
	};

	const calcTax = () => {
		return calcSubtotal() * taxRate;
	};

	const calcTotal = () => {
		return calcSubtotal() + calcTax();
	};

	return (
		<div>
			<Typography variant='subtitle1' className={classes.details}>
				Estimated Subtotal: {calcSubtotal()}
			</Typography>
			<Typography variant='subtitle1' className={classes.details}>
				Estimated Tax: {calcTax()}
			</Typography>
			<Typography variant='subtitle2' className={classes.details}>
				Estimated Total: {calcTotal()}
			</Typography>
		</div>
	);
}
