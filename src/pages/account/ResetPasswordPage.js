import React, { Component } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AccountPage from "./AccountPage";
import ResetPasswordComponent from "../../components/account/reset-password/ResetPasswordComponent";

class ResetPasswordPage extends Component {
	render() {
		const {
			message, messageCode, location, isLoading
		} = this.props;
		const values = queryString.parse(location.search);
		return (
			<AccountPage message={message} messageCode={messageCode} isLoading={isLoading}>
				<ResetPasswordComponent token={values.token} />
			</AccountPage>
		);
	}
}

ResetPasswordPage.propTypes = {
	messageCode: PropTypes.number,
	message: PropTypes.string,
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	message: state.resetPass.message,
	messageCode: state.resetPass.messageCode,
	isLoading: state.resetPass.isLoading
});

export default connect(mapStateToProps)(ResetPasswordPage);
