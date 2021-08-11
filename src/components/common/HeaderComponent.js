import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ElevationScrollComponent from "./ElevationScrollComponent";

const classes = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

class HeaderComponent extends Component {
	render() {
		return (
			<div className={classes.root}>
				<ElevationScrollComponent {...this.props}>
					<AppBar position="static" color="default">
						<Toolbar>
							<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" className={classes.title}>
								{"Appimotion"}
							</Typography>
						</Toolbar>
					</AppBar>
				</ElevationScrollComponent>
			</div>
		);
	}
}

export default HeaderComponent;
