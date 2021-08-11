import React, { Component } from "react";
import { SyncLoader } from "react-spinners";
import PropTypes from "prop-types";
import { withStyles, LinearProgress, Fade } from "@material-ui/core";
import { LoadingStyles } from "./CommonStyles";
import { Colors } from "../../constants/variablesStyles";

class LoadingComponent extends Component {
	render() {
		const { isLoading, classes } = this.props;
		if (isLoading) {
			return (
				<Fade in={isLoading}>
					<div>
						{
							(isLoading ? <LinearProgress variant="query" className={classes.linear} /> : null)
						}
						<div className={classes.root}>
							<SyncLoader
								color={Colors.orange2}
								loading={isLoading}
							/>
						</div>
					</div>
				</Fade>
			);
		}
		return null;
	}
}

LoadingComponent.propTypes = {
	classes: PropTypes.object
};

export default withStyles(LoadingStyles)(LoadingComponent);
