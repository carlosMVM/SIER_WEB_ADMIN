/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BusinessFormComponent from "./BusinessFormComponent";
import { businessRouteInital } from "../../../reducers/route/RouteInitialState";
import * as RouteActions from "../../../actions/RouteActions";
import { getTokenPayload } from "../../../helpers/AppHelper";

class BusinessNewComponent extends Component {
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

	addBusinessRoute = async (values) => {
		const { addBusinessRoute, history } = this.props;
		const { clientId } = getTokenPayload();
		const newBusinessRoute = {
			...values,
			clientId
		};
		await addBusinessRoute(newBusinessRoute, history);
	}

	render() {
    	return (<Formik initialValues={{ ...businessRouteInital }} validationSchema={this.businessSchema} onSubmit={this.addBusinessRoute} component={BusinessFormComponent} />);
	}
}

const mapDispatchToProps = dispatch => ({
	addBusinessRoute: bindActionCreators(RouteActions.addBusinessRoutesClient, dispatch)
});

export default connect(null, mapDispatchToProps)(withRouter(BusinessNewComponent));
