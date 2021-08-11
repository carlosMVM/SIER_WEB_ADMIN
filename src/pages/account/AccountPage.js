/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { AccountPageStyles } from "./AccountStyles";
import { getAlerColorByMessageCode } from "../../helpers/AppHelper";
import * as SnackActions from "../../actions/SnackActions";
import AccountLoadingComponent from "../../components/common/AccountLoadingComponent";

class AccountPage extends Component {
	handleClose = () => {
		const { handleSnack } = this.props;
		handleSnack(false);
	}

	render() {
		const {
			children, message, messageCode, open, classes, isLoading
		} = this.props;

		return (
			<div>
				<CssBaseline />
				<AccountLoadingComponent isLoading={isLoading} />
				<div className={classes.root}>
					{children}
					{message
						? (
							<Snackbar open={open} autoHideDuration={6000} onClose={this.handleClose}>
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

AccountPage.propTypes = {
	message: PropTypes.string,
	open: PropTypes.bool,
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	open: state.snack.open
});

const mapDispatchToProps = dispatch => ({
	handleSnack: bindActionCreators(SnackActions.openSnack, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(AccountPageStyles)(AccountPage));
