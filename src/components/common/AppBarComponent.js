/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	AppBar, Toolbar, IconButton, withStyles, Typography, Menu, MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { AppBarStyles } from "./CommonStyles";
import { getTokenPayload } from "../../helpers/AppHelper";
import LocalStorageHelper from "../../helpers/LocalStorageHelper";
import { TOKEN_KEY } from "../../constants/general";
import * as routes from "../../constants/routes";

class AppBarComponent extends Component {
	constructor() {
		super();
		const { name } = getTokenPayload();
		this.state = {
			fullName: name,
			anchor: null
		};
	}

    menuClick = (event) => {
    	const { currentTarget } = event;
    	this.setState(state => ({
    		...state,
    		anchor: currentTarget
    	}));
    }

    closeMenu = () => {
    	this.setState(state => ({
    		...state,
    		anchor: null
    	}));
    }

    logout = () => {
    	const { history } = this.props;
    	LocalStorageHelper.remove(TOKEN_KEY);
    	history.push(routes.PATH_LOGIN);
    }

    render() {
    	const { classes } = this.props;
    	const { fullName, anchor } = this.state;

    	return (
    		<div className={classes.root}>
    			<AppBar
    				position="static"
    				classes={{
    					root: classes.paper
    				}}
    			>
    				<Toolbar>
    					<IconButton edge="start" color="inherit" aria-label="menu">
    						<MenuIcon />
    					</IconButton>
    					<Typography className={classes.title}>
    						{fullName}
    						<IconButton
    							aria-label="more"
    							aria-controls="long-menu"
    							aria-haspopup="true"
    							onClick={e => this.menuClick(e)}
    						>
    							<MoreVertIcon />
    						</IconButton>
    						<Menu open={Boolean(anchor)} anchorEl={anchor} onClose={e => this.closeMenu(e)} keepMounted>
    							<MenuItem onClick={() => this.logout()}>Cerrar sesión</MenuItem>
    						</Menu>
    					</Typography>
    				</Toolbar>
    			</AppBar>
    		</div>
    	);
    }
}

AppBarComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(AppBarStyles)(AppBarComponent));
