import React from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/logo.png';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://szechuanbistro.com'>
				Szechuan Bistro
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Login(props) {
	const classes = useStyles();
	const [ans, setAns] = React.useState({
		email: '',
		password: '',
	});
	const [loginError, setLoginError] = React.useState('');
	const handleLoginSubmit = (e) => {
		var loginJSON = ans;
		// call API
		console.log('calling api');
		axios
			//.post('https://sbordering.herokuapp.com/api/register', registerJSON)
			.post('/api/user/login', loginJSON)
			.then((res) => {
				// if logged in
				setLoginError('');
				if (res.status == 200) {
					console.log(res.data);
				}
				// redirect
			})
			// if not logged in
			.catch((err) => {
				console.error('error:' + err);
				console.log(err.response.data);
				setLoginError(err.response.data.message);
			});

		// log
		console.log(loginJSON);
	};
	const handleInfoChange = (input) => (e) => {
		ans[input] = e.target.value;
		setAns(ans);
		console.log(ans);
	};
	const handleRedirectToOrderingSystem = (e) => {
		props.history.push('/ordersystem');
		//return <Redirect to='/OrderingSystem' />;
	};

	const handleRedirectToRegister = (e) => {
		props.history.push('/register');
	};

	const handleLogIn = (e) => {
		return <Redirect to='/OrderingSystem' />;
	};

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<img src={Logo} style={{ height: '15vh' }} />

					<Typography component='h1' variant='h5'>
						Szechuan Bistro
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={handleInfoChange('email')}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={handleInfoChange('password')}
						/>
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='Remember me'
						/>
						<Grid container>
							<Grid item xs>
								<Typography variant='body2' color='error'>
									{loginError}
								</Typography>
							</Grid>
						</Grid>

						<Button
							type='button'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={handleLoginSubmit}
						>
							Log In
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link
									onClick={(e) => handleRedirectToRegister()}
									variant='body2'
								>
									{"Don't have an account? Register"}
								</Link>
							</Grid>
						</Grid>
					</form>
					<Typography component='h1' variant='h6'>
						Or
					</Typography>
					<Button
						type='button'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						onClick={(e) => handleRedirectToOrderingSystem()}
					>
						Make Guest Order
					</Button>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</Grid>
		</Grid>
	);
}
