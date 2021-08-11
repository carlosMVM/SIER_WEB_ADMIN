import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, LinearProgress, Fade } from "@material-ui/core";
import { AccountAppBarStyles } from "./CommonStyles";

class AccountLoadingComponent extends Component {
	render() {
		const { isLoading, classes } = this.props;
		if (isLoading) {
			return (
				<Fade in={isLoading}>
					<div className={classes.root}>
						{
							(isLoading ? <LinearProgress variant="query" className={classes.linear} /> : null)
						}
					</div>
				</Fade>
			);
		}
		return null;
	}
}

AccountLoadingComponent.propTypes = {
	classes: PropTypes.object
};

export default withStyles(AccountAppBarStyles)(AccountLoadingComponent);
