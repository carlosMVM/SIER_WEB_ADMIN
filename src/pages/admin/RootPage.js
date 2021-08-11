import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, CssBaseline, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppBarComponent from "../../components/common/AppBarComponent";
import SiderBarComponent from "../../components/common/SiderBarComponent";
import { RootStyles } from "../RootStyles";
import LoadingComponent from "../../components/common/LoadingComponent";
import BreadcrumbsComponent from "../../components/common/BreadcrumbsComponent";
import { getAlerColorByMessageCode } from "../../helpers/AppHelper";
import * as SnackActions from "../../actions/SnackActions";

class RootPage extends Component {
	handleClose = () => {
		const { handleSnack } = this.props;
		handleSnack(false);
	}

	render() {
		const {
			children, classes, isLoading, message, open, messageCode
		} = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<LoadingComponent isLoading={isLoading} />
				<AppBarComponent />
				<SiderBarComponent />
				<div className={classes.content}>
					<BreadcrumbsComponent />
					{children}
					{message
						? (
							<Snackbar open={open} autoHideDuration={3000} onClose={this.handleClose}>
								<Alert onClose={this.handleClose} color={getAlerColorByMessageCode(messageCode)}>
									{message}
								</Alert>
							</Snackbar>
						)
						: null}
				</div>
			</div>
		);
	}
}

RootPage.propTypes = {
	classes: PropTypes.object.isRequired,
	open: PropTypes.bool,
	message: PropTypes.string,
	isLoading: PropTypes.bool,
	messageCode: PropTypes.number
};

const mapStateToProps = state => ({
	open: state.snack.open
});

const mapDispatchToProps = dispatch => ({
	handleSnack: bindActionCreators(SnackActions.openSnack, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(RootStyles)(RootPage));
