import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const taxRate = 0.045;

const useStyles = makeStyles((theme) => ({
	details: {
		padding: 5,
	},
	tableCell: {
		maxWidth: '25vw',
	},
}));

export default function OrderDetails(props) {
	const classes = useStyles();

	const calcSubtotal = () => {
		var subtotal = 0;
		props.order.forEach((orderItem) => {
			subtotal += parseInt(orderItem.amount) * parseInt(orderItem.price);
		});
		return subtotal;
	};

	const calcTax = () => {
		var tax = calcSubtotal() * taxRate;
		return tax;
	};

	const calcDeliveryFee = () => {
		if (props.pd == 2) {
			return 3;
		} else {
			return 0;
		}
	};
	const calcTotal = () => {
		var subtotal = calcSubtotal();
		var tax = calcTax();
		var fee = calcDeliveryFee();
		var total = subtotal + tax + fee;
		props.handlePriceChange('subtotal', subtotal.toFixed(2));
		props.handlePriceChange('tax', tax.toFixed(2));
		props.handlePriceChange('fee', fee.toFixed(2));
		props.handlePriceChange('total', total.toFixed(2));

		return total;
	};

	return (
		<div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='simple table'>
					<TableBody>
						<TableRow key='subtotal'>
							<TableCell
								component='th'
								scope='row'
								className={classes.tableCell}
							>
								<Typography variant='subtitle1' className={classes.details}>
									Estimated Subtotal:&nbsp;&nbsp;${calcSubtotal()}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow key='tax'>
							<TableCell
								component='th'
								scope='row'
								className={classes.tableCell}
							>
								<Typography variant='subtitle1' className={classes.details}>
									Estimated
									Tax:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
									{calcTax().toFixed(2)}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow key='delivery'>
							<TableCell
								component='th'
								scope='row'
								className={classes.tableCell}
							>
								<Typography variant='subtitle1' className={classes.details}>
									Delivery
									Fee:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
									{calcDeliveryFee().toFixed(2)}
								</Typography>
							</TableCell>
						</TableRow>
						<TableRow key='total'>
							<TableCell
								component='th'
								scope='row'
								className={classes.tableCell}
							>
								<Typography variant='subtitle1' className={classes.details}>
									Estimated
									Total:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
									{calcTotal().toFixed(2)}
								</Typography>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
