/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import {
	Drawer, CssBaseline, Divider, withStyles, List, ListItem, ListItemText, ListItemIcon
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { DrawerStyles } from "./CommonStyles";
import MenuCollapsedComponent from "./MenuCollapsedComponent";

class AppSiderBarComponent extends Component {
	constructor() {
		super();
		this.state = {
			openChildren: false
		};
	}

    handleClickChildren = () => {
    	this.setState(state => ({
    		...state,
    		openChildren: !state.openChildren
    	}));
    }


    renderStandarMenu = (value) => {
    	const { match } = this.props;
    	return (
    		<ListItem button component={Link} to={value.url} selected={match.path.includes(value.url)}>
    			<ListItemIcon>
    				<i className="material-icons">
    					{value.icon}
    				</i>
    			</ListItemIcon>
    			<ListItemText primary={value.label} />
    		</ListItem>
    	);
    }

    renderCollapsedMenu = value => (
    	<MenuCollapsedComponent value={value} />
    	)

    render() {
    	const { classes, menu } = this.props;

    	return (
    		<Drawer
    			variant="permanent"
    			className={classes.root}
    			classes={{
    				paper: classes.drawerPaper
    			}}
    		>
    			<CssBaseline />
    			<div className={classes.drawerHeader}>
    				<img src="/images/appimotion-logo.png" alt="logo" className={classes.logo} />
    			</div>
    			<Divider />
    			<List>
    				{menu.map(value => (
    					<div key={value.menuId}>
    						{
    							value.subMenus && value.subMenus.length > 0
    								? this.renderCollapsedMenu(value)
    								: this.renderStandarMenu(value)
    						}
    					</div>
    				))}
    			</List>
    		</Drawer>
    	);
    }
}

AppSiderBarComponent.propTypes = {
	classes: PropTypes.object.isRequired,
	menu: PropTypes.array
};

const mapStateToProps = state => ({
	isLoading: state.menu.isLoading,
	menu: state.menu.menu
});

export default withRouter(connect(
	mapStateToProps
)(withStyles(DrawerStyles)(AppSiderBarComponent)));
