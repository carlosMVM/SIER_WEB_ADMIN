/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import OfficesFormComponent from "./OfficesFormComponent";
import * as OfficeActions from "../../../actions/OfficeActions";
import ErrorMessages from "../../../constants/messages";
import { officeData } from "../../../reducers/office/OfficeInitialState";
import { getTokenPayload } from "../../../helpers/AppHelper";

class OfficesNewComponent extends Component {
	officeSchema = Yup.object().shape({
		name: Yup.string().required(ErrorMessages.general.fieldRequired),
		latitude: Yup.number().required(ErrorMessages.general.fieldRequired),
		longitude: Yup.number().required(ErrorMessages.general.fieldRequired),
		distance: Yup.number().required(ErrorMessages.general.fieldRequired)
	});

	handleAddOffice = async (values) => {
		const { clientId } = getTokenPayload();
		const { addOffice } = this.props;
		const { history } = this.props;
		const newOffice = {
			...values,
			clientId
		};
		await addOffice(newOffice, history);
	}

	render() {
		return (<Formik initialValues={{ ...officeData }} validationSchema={this.officeSchema} onSubmit={this.handleAddOffice} component={OfficesFormComponent} enableReinitialize />);
	}
}

const mapStateToProps = state => ({
	isLoading: state.campaign.isLoading,
});

const mapDispatchToProps = dispatch => ({
	addOffice: bindActionCreators(OfficeActions.addClientOffice, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfficesNewComponent));
