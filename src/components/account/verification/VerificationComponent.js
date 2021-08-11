import React, { Component } from "react";

import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import * as VerificationAccountAction from "../../../actions/AccountActions";
import { getAlerColorByMessageCode } from "../../../helpers/AppHelper";
import { VerificationStyles } from "./VerificationStyles";

class VerificationAccountComponent extends Component {
	async componentDidMount() {
		const { verificationAccount, token } = this.props;
		await verificationAccount(token);
	}

	render() {
		const { message, messageCode, classes } = this.props;
		return (
			<Grid container>
				{messageCode
					? (
						<Alert className={classes.alert} color={getAlerColorByMessageCode(messageCode)}>
							{message}
						</Alert>
					) : null
				}
			</Grid>
		);
	}
}

VerificationAccountComponent.propTypes = {
	verificationAccount: PropTypes.func,
	messageCode: PropTypes.number,
	classes: PropTypes.object
};

const mapStateToProps = state => ({
	isLoading: state.verification.isLoading,
	message: state.verification.message,
	messageCode: state.verification.messageCode
});

const mapDispatchToProps = dispatch => ({
	verificationAccount: bindActionCreators(VerificationAccountAction.verificationAccountAction, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(VerificationStyles)(VerificationAccountComponent));
