/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import CampaignFormComponent from "./CampaignFormComponent";
import * as CampingActions from "../../../../actions/CampaignActions";
import ErrorMessages from "../../../../constants/messages";
import { getTokenPayload } from "../../../../helpers/AppHelper";
import { convertToDate } from "../../../../helpers/DateHelper";

class CampaignComponent extends Component {
	campaingSchema = Yup.object().shape({
		initRedeemDate: Yup.mixed().required(ErrorMessages.general.fieldRequired),
		endRedeemDate: Yup.mixed().required(ErrorMessages.general.fieldRequired),
		initCampaignRedeemDate: Yup.mixed().required(ErrorMessages.general.fieldRequired),
		endCampaignRedeemDate: Yup.mixed().required(ErrorMessages.general.fieldRequired),
		initDate: Yup.mixed().required(ErrorMessages.general.fieldRequired),
		endDate: Yup.mixed().required(ErrorMessages.general.fieldRequired)
	});

	componentDidMount = async () => {
		const { getCampaing } = this.props;
		const { clientId } = getTokenPayload();
		await getCampaing(clientId);
	}

	handleSetScore = async (values) => {
		const { addCampaing, updateCampaing } = this.props;
		if (values.campaignId) {
			await updateCampaing(values.campaignId, values);
		} else {
			await addCampaing(values);
		}
	}

	render() {
		const { campaign } = this.props;
		const campaignValues = {
			campaignId: campaign.campaignId,
			initDate: convertToDate(campaign.initDate),
			endDate: convertToDate(campaign.endDate),
			initCampaignRedeemDate: convertToDate(campaign.initCampaignRedeemDate),
			endCampaignRedeemDate: convertToDate(campaign.endCampaignRedeemDate),
			initRedeemDate: convertToDate(campaign.initRedeemDate),
			endRedeemDate: convertToDate(campaign.endRedeemDate),
		};
		return (<Formik initialValues={{ ...campaignValues }} validationSchema={this.campaingSchema} onSubmit={this.handleSetScore} component={CampaignFormComponent} enableReinitialize />);
	}
}

CampaignComponent.propTypes = {
	campaign: PropTypes.object,
	addCampaing: PropTypes.func,
	getCampaing: PropTypes.func,
	updateCampaing: PropTypes.func,
};

const mapStateToProps = state => ({
	isLoading: state.campaign.isLoading,
	campaign: state.campaign.campaign,
});

const mapDispatchToProps = dispatch => ({
	addCampaing: bindActionCreators(CampingActions.addClientCampaign, dispatch),
	getCampaing: bindActionCreators(CampingActions.getClientCampaing, dispatch),
	updateCampaing: bindActionCreators(CampingActions.updateClientCampaign, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampaignComponent));
