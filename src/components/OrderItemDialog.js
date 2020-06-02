import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { faPepperHot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OrderItemDialog(props) {
	const classes = useStyles();

	const [amount, setAmount] = React.useState(props.amount);
	const [note, setNote] = React.useState(props.note);

	const handleClose = (e) => {
		// if dialog currently open (closing), reset state
		setAmount(props.orderItem.amount);
		setNote(props.orderItem.note);
		props.setShowDialog(false);
	};
	const handleChangeAmount = (e) => {
		setAmount(e.target.value);
		console.log(amount);
	};
	const handleChangeNote = (e) => {
		setNote(e.target.value);
		console.log(note);
	};
	const handleEditInOrder = (e) => {
		props.editInOrder(props.itemIndex, amount, note);
		handleClose();
	};
	const handleRemoveFromOrder = (e) => {
		// output to console
		console.log('removing from order!');
		// create item
		// and pass object to app state
		props.removeFromOrder(props.itemIndex);
		// close dialog
		handleClose();
	};
	const getPrice = () => {
		console.log(props.orderItem.price);
		console.log(amount);
		return (parseFloat(props.orderItem.price) * amount).toFixed(2);
	};

	return (
		<Dialog
			open={props.showDialog}
			onClose={handleClose}
			aria-labelledby='form-dialog-title'
		>
			<Card className={classes.root}>
				<DialogTitle id='form-dialog-title'>
					{props.orderItem.id + '. '}
					{props.orderItem.english + ' '}
					{[...Array(parseInt(props.orderItem.spicy))].map((e, i) => (
						<FontAwesomeIcon icon={faPepperHot} style={{ color: 'red' }} />
					))}
				</DialogTitle>
				<DialogContent dividers>
					<CardMedia
						className={classes.media}
						image={require('../images/food_blue.jpg')}
						title={props.orderItem.english}
					/>
					<TextField
						margin='dense'
						id='order-amount'
						label='Number to Order'
						type='number'
						select
						SelectProps={{
							native: true,
						}}
						value={amount}
						onChange={handleChangeAmount}
						//type="email"
						fullWidth
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
						<option value={6}>6</option>
						<option value={7}>7</option>
						<option value={8}>8</option>
						<option value={9}>9</option>
						<option value={10}>10</option>
					</TextField>

					<TextField
						margin='dense'
						id='customer-note'
						label='Note/Modifications'
						text='test'
						placeholder=' '
						value={note}
						onChange={handleChangeNote}
						fullWidth
					/>
					<DialogContentText>
						Any changes may be subject to extra charges.
					</DialogContentText>
					<DialogContentText align='right'>${getPrice()}</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={handleRemoveFromOrder} color='primary'>
						Remove Item
					</Button>
					<Button onClick={handleEditInOrder} color='primary'>
						Confirm Change
					</Button>
				</DialogActions>
			</Card>
		</Dialog>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
}));
