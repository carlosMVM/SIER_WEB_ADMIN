/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import GeneralConfigurationsFormComponent from "./GeneralConfigurationsFormComponent";
import * as ClientConfigActions from "../../../../actions/ClientConfigActions";
import ErrorMessages from "../../../../constants/messages";
import { getTokenPayload } from "../../../../helpers/AppHelper";

class GeneralConfigurationsComponent extends Component {
    clientSchema = Yup.object().shape({
    	tripConfigurationInfo: Yup.object().shape({
    		scoreNumberOfTimePerDay: Yup.number().moreThan(0).required(ErrorMessages.general.fieldRequired),
    		distance: Yup.number().moreThan(0).required(ErrorMessages.general.fieldRequired),
    	}),
    	configInfo: Yup.object().shape({
    		hasTeleworking: Yup.bool().required(ErrorMessages.general.fieldRequired),
    		isRedeemActive: Yup.bool().required(ErrorMessages.general.fieldRequired),
    		hasElectricBicycle: Yup.bool().required(ErrorMessages.general.fieldRequired),
    		hasElectricBicycleCosmic: Yup.bool().required(ErrorMessages.general.fieldRequired),
    		hasScoreBy: Yup.bool().required(ErrorMessages.general.fieldRequired)
    	})
    });

    componentDidMount = async () => {
    	const { getClientConfig } = this.props;
    	const { clientId } = getTokenPayload();
    	await getClientConfig(clientId);
    }

    handleUpdateClientConfig = async (values) => {
    	const { updateClientConfig } = this.props;
    	const { clientId } = getTokenPayload();
    	await updateClientConfig(clientId, values);
    }

    render() {
    	const { configInfo } = this.props;
    	return (<Formik initialValues={{ ...configInfo }} validationSchema={this.clientSchema} onSubmit={this.handleUpdateClientConfig} component={GeneralConfigurationsFormComponent} enableReinitialize />);
    }
}

GeneralConfigurationsComponent.propTypes = {
	configInfo: PropTypes.object,
	getClientConfig: PropTypes.func,
	updateClientConfig: PropTypes.func,
};

const mapStateToProps = state => ({
	isLoading: state.clientConfig.isLoading,
	configInfo: state.clientConfig.clientConfig,
});

const mapDispatchToProps = dispatch => ({
	getClientConfig: bindActionCreators(ClientConfigActions.getClientConfig, dispatch),
	updateClientConfig: bindActionCreators(ClientConfigActions.updateClient, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GeneralConfigurationsComponent));
