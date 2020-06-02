import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import OrderItemDialog from './OrderItemDialog';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		minWidth: '100%',
	},
	details: {
		display: 'flex',
		flexDirection: 'row',
	},
	content: {
		flex: '1 0 auto',
	},
}));

export default function OrderItem(props) {
	const classes = useStyles();
	const theme = useTheme();

	const [showDialog, setShowDialog] = React.useState(false);

	const getPrice = () => {
		return parseFloat(props.orderItem.price) * props.orderItem.amount;
	};
	const handleClick = (e) => {
		setShowDialog(!showDialog);
	};

	return (
		<div className={classes.root}>
			<Paper square className={classes.root} onClick={handleClick}>
				<div className={classes.details}>
					<CardContent>
						<Typography>
							{props.orderItem.amount}x&nbsp;{props.orderItem.english}
						</Typography>
						<Typography variant='subtitle2' color='textSecondary'>
							${getPrice().toFixed(2)}
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							{props.orderItem.note}
						</Typography>
					</CardContent>
				</div>
			</Paper>
			<OrderItemDialog
				orderItem={props.orderItem}
				showDialog={showDialog}
				setShowDialog={setShowDialog}
				amount={props.orderItem.amount}
				note={props.orderItem.note}
				itemIndex={props.itemIndex}
				removeFromOrder={props.removeFromOrder}
				editInOrder={props.editInOrder}
			/>
		</div>
	);
}
