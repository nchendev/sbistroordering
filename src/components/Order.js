import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import OrderList from './OrderList';
import OrderDetails from './OrderDetails';

const useStyles = makeStyles((theme) => ({
	title: {
		color: theme.palette.primary.light,
	},
}));

function Order(props) {
	const classes = useStyles();

	return (
		<div>
			<OrderList
				order={props.order}
				removeFromOrder={props.removeFromOrder}
				editInOrder={props.editInOrder}
			/>
		</div>
	);
}

export default Order;
