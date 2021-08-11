/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Formik } from "formik";
import * as Yup from "yup";
import * as AccountActions from "../../../actions/AccountActions";
import ResetPasswordFormComponent from "./ResetPasswordFormComponent";

import ErrorMessages from "../../../constants/messages";

class ResetPasswordComponent extends Component {
    resetPasswordSchema = Yup.object().shape({
    	password: Yup.string().min(4, value => ErrorMessages.general.minRequired(value.min)).required(ErrorMessages.general.fieldRequired),
    	confirmPassword: Yup.string().required(ErrorMessages.general.fieldRequired).oneOf(
    		[Yup.ref("password"), null], ErrorMessages.account.resetPassword.confirmPassword
    	)
    });

    handleSubmit = async (values) => {
    	const { resetPasswordPost, token } = this.props;
    	await resetPasswordPost(values.password, token);
    }

    render() {
    	const { resetPasswordData } = this.props;

    	return (
    		<Formik initialValues={resetPasswordData} validationSchema={this.resetPasswordSchema} onSubmit={this.handleSubmit} component={ResetPasswordFormComponent} enableReinitialize />
    	);
    }
}

ResetPasswordComponent.propTypes = {
	resetPasswordData: PropTypes.object,
	resetPasswordPost: PropTypes.func
};

const mapStateToProps = state => ({
	isLoading: state.resetPass.isLoading,
	resetPasswordData: state.resetPass.resetPasswordData
});

const mapDispatchToProps = dispatch => ({
	resetPasswordPost: bindActionCreators(AccountActions.resetPasswordAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordComponent);
