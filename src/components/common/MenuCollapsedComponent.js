/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	List, ListItem, ListItemText, ListItemIcon, Collapse, withStyles
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { ListMenuStyles } from "./CommonStyles";

class MenuCollapsedComponent extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}

	componentDidMount() {
		const { value, match } = this.props;

		if (value.subMenus) {
			const isOpen = value.subMenus.some(sb => match.path.includes(sb.url));
			this.setState({
				open: isOpen
			});
		}
	}

    handleClick = () => {
    	const { open } = this.state;
    	this.setState({
    		open: !open
    	});
    }

    render() {
    	const { classes, value, match } = this.props;
    	const { open } = this.state;
    	return (
    		<div>
    			<ListItem button onClick={this.handleClick}>
    				<ListItemIcon>
    					<i className="material-icons">
    						{value.icon}
    					</i>
    				</ListItemIcon>
    				<ListItemText primary={value.label} />
    				{open ? <ExpandLess /> : <ExpandMore />}
    			</ListItem>
    			<Collapse in={open} timeout="auto" unmountOnExit>
    				<List key={`key-list-${value.menuId}`} component="div" disablePadding>
    					{
    						value.subMenus.map(subMenu => (
    							<ListItem key={`key-collapse-${subMenu.menuId}`} button className={classes.nested} component={Link} to={subMenu.url} selected={match.path.includes(subMenu.url)}>
    								<ListItemIcon>
    									<i className="material-icons">
    										{subMenu.icon}
    									</i>
    								</ListItemIcon>
    								<ListItemText primary={subMenu.label} />
    							</ListItem>
    						))
    					}
    				</List>
    			</Collapse>
    		</div>
    	);
    }
}

MenuCollapsedComponent.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(ListMenuStyles)(MenuCollapsedComponent));
