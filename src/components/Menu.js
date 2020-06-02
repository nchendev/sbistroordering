import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import MenuCategory from './MenuCategory';

const useStyles = makeStyles((theme) => ({
	exproot: {
		width: '100%',
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		position: 'sticky',
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
		overflowX: 'scroll',
	},
	title: {
		color: theme.palette.primary.light,
		padding: 5,
		margin: 5,
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	fabSpace: {
		height: '160px',
		bottom: 0,
	},
	cat: {
		marginTop: theme.spacing(1),
	},
}));

function Menu(props) {
	console.log(typeof props.menu['Appetizer']);
	const classes = useStyles();
	const [selectedCategory, setSelectedCategory] = React.useState([]);

	const handleTileClick = (menuCategory) => {
		console.log(typeof menuCategory);
		console.log(menuCategory.menuCategory);

		setSelectedCategory(props.menu[menuCategory.menuCategory]);
	};

	return (
		<div>
			{
				<div className={classes.root}>
					<Typography variant='h5' className={classes.title}>
						1. Select Category
					</Typography>
					{/* Categories */}
					<GridList cellHeight={180} className={classes.gridList}>
						{Object.keys(props.menu).map((menuCategory, menuIndex) => (
							<GridListTile
								key={menuCategory}
								style={{ height: 'fixed', width: 'auto' }}
								onClick={() => handleTileClick({ menuCategory })}
							>
								<ListSubheader component='div'>{menuCategory}</ListSubheader>
							</GridListTile>
						))}
					</GridList>

					{/* Items within category */}
					<Typography variant='h5' className={classes.title}>
						2. Choose Items
					</Typography>
					<MenuCategory
						className={classes.cat}
						menuCategory={selectedCategory}
						addToOrder={props.addToOrder}
					/>

					{/* Space for Fab */}
					{/*<Paper className={classes.fabSpace}/>*/}
				</div>
			}
		</div>
	);
}

// PropTypes
Menu.propTypes = {
	menu: PropTypes.object.isRequired,
};

const categorycontainerstyle = {
	display: 'flex',
	flexflow: 'row wrap',
	padding: '5px 5px 5px 5px',
	margins: '5px 5px 5px 5px',
};
export default Menu;
