import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as Yup from "yup";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import * as AccountActions from "../../../actions/AccountActions";

import LoginFormComponent from "./LoginFormComponent";

import ErrorMessages from "../../../constants/messages";

class LoginComponent extends Component {
	loginSchema = Yup.object().shape({
		email: Yup.string().email(ErrorMessages.general.invalidEmail).required(ErrorMessages.general.fieldRequired),
		password: Yup.string().required(ErrorMessages.general.fieldRequired)
	});

	handleLoginClick = async (values) => {
		const { loginUser, history } = this.props;
		await loginUser(values.email, values.password, history);
	}

	render() {
		const { loginData, isLoading } = this.props;
		return (
			<Formik isLoading={isLoading} initialValues={loginData} validationSchema={this.loginSchema} onSubmit={this.handleLoginClick} component={LoginFormComponent} enableReinitialize />
		);
	}
}

LoginComponent.propTypes = {
	isLoading: PropTypes.bool,
	loginData: PropTypes.object,

	loginUser: PropTypes.func,
};

const mapStateToProps = state => ({
	isLoading: state.login.isLoading,
	loginData: state.login.loginData,
});

const mapDispatchToProps = dispatch => ({
	loginUser: bindActionCreators(AccountActions.userLoggingIn, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
