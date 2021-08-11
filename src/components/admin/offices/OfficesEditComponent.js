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

class OfficesEditComponent extends Component {
	officeSchema = Yup.object().shape({
		name: Yup.string().required(ErrorMessages.general.fieldRequired),
		latitude: Yup.number().required(ErrorMessages.general.fieldRequired),
		longitude: Yup.number().required(ErrorMessages.general.fieldRequired),
		distance: Yup.number().required(ErrorMessages.general.fieldRequired)
	});

	componentDidMount = async () => {
		const { getOfficeById, match } = this.props;
		const officeId = match.params.id;
		await getOfficeById(officeId);
	}

	handleEditOffice = async (values) => {
		const { updateOffice, match, history } = this.props;
		const officeId = match.params.id;
		const editOffice = {
			...values
		};
		await updateOffice(officeId, editOffice, history);
	}

	render() {
		const { office } = this.props;
		const editOffice = {
			...officeData,
			...office
		};
		return (<Formik initialValues={{ ...editOffice }} validationSchema={this.officeSchema} onSubmit={this.handleEditOffice} component={OfficesFormComponent} enableReinitialize />);
	}
}

const mapStateToProps = state => ({
	isLoading: state.campaign.isLoading,
	office: state.office.office
});

const mapDispatchToProps = dispatch => ({
	addOffice: bindActionCreators(OfficeActions.addClientOffice, dispatch),
	getOfficeById: bindActionCreators(OfficeActions.getClientOfficeById, dispatch),
	updateOffice: bindActionCreators(OfficeActions.updateClientOffice, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfficesEditComponent));
