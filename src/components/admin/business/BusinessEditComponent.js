/* eslint-disable no-mixed-spaces-and-tabs */
import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import * as RouteActions from "../../../actions/RouteActions";
import { businessRouteInital } from "../../../reducers/route/RouteInitialState";
import BusinessFormComponent from "./BusinessFormComponent";
import { FORMAT_HH_MM_24, FORMAT_HH_MM } from "../../../constants/dateFormats";

class BusinessEditComponent extends Component {
	businessSchema = Yup.object().shape({
		name: Yup.string().required(),
		startHour: Yup.string().required(),
		endHour: Yup.string().required(),
		path: Yup.string().notRequired(),
		origin: Yup.object({
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			address: Yup.string().required(),
		}),
		destination: Yup.object({
			latitude: Yup.number().required(),
			longitude: Yup.number().required(),
			address: Yup.string().required(),
		}),
		capacity: Yup.number().moreThan(0).required(),
		wayPoints: Yup.array().of(
			Yup.object({
				latitude: Yup.number().required(),
				longitude: Yup.number().required(),
				address: Yup.string().required()
			})
		),
		nearOffices: Yup.array().of(
			Yup.object({
				officeId: Yup.string().required()
			})
		)
	})

	componentDidMount = async () => {
		const { match, getBusinessRouteById } = this.props;
		const businessId = match.params.id;
		await getBusinessRouteById(businessId);
	}

	updateBusinessRoute = async (values) => {
		const { updateBusinessRouteById, history, match } = this.props;
		const businessId = match.params.id;
		const editBusiness = {
			...values
		};
		await updateBusinessRouteById(businessId, editBusiness, history);
	}

	render() {
		const { editBusinessRoute } = this.props;
		const editBusiness = {
			...businessRouteInital,
			...editBusinessRoute,
			startHour: editBusinessRoute ? moment(editBusinessRoute.startHour, FORMAT_HH_MM).format(FORMAT_HH_MM_24) : businessRouteInital.startHour,
			endHour: editBusinessRoute ? moment(editBusinessRoute.endHour, FORMAT_HH_MM).format(FORMAT_HH_MM_24) : businessRouteInital.endHour
		};
		return (<Formik initialValues={{ ...editBusiness }} validationSchema={this.businessSchema} onSubmit={this.updateBusinessRoute} component={BusinessFormComponent} enableReinitialize />);
	}
}

const mapStateToProps = state => ({
	editBusinessRoute: state.route.businessRoute
});

const mapDispatchToProps = dispatch => ({
	updateBusinessRouteById: bindActionCreators(RouteActions.updateBusinessRouteById, dispatch),
	getBusinessRouteById: bindActionCreators(RouteActions.getBusinessRouteById, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BusinessEditComponent));
