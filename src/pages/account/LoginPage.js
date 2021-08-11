import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginComponent from "../../components/account/login/LoginComponent";
import AccountPage from "./AccountPage";

class LoginPage extends Component {
	render() {
		const { message, messageCode, isLoading } = this.props;
		return (
			<AccountPage message={message} messageCode={messageCode} isLoading={isLoading}>
				<LoginComponent />
			</AccountPage>
		);
	}
}


LoginPage.propTypes = {
	messageCode: PropTypes.number,
	message: PropTypes.string,
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	message: state.login.message,
	messageCode: state.login.messageCode,
	isLoading: state.login.isLoading
});

export default connect(mapStateToProps)(LoginPage);
