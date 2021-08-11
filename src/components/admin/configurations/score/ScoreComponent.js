/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import ScoreFormComponent from "./ScoreFormComponent";
import * as ScoreActions from "../../../../actions/ScoreActions";
import ErrorMessages from "../../../../constants/messages";
import { getTokenPayload } from "../../../../helpers/AppHelper";

class ScoreComponent extends Component {
	scoreSchema = Yup.object().shape({
		walk: Yup.number().required(ErrorMessages.general.fieldRequired),
		bicycle: Yup.number().required(ErrorMessages.general.fieldRequired),
		car: Yup.number().required(ErrorMessages.general.fieldRequired),
		businessRoute: Yup.number().required(ErrorMessages.general.fieldRequired),
		publicTransport: Yup.number().required(ErrorMessages.general.fieldRequired),
		carpooling: Yup.number().required(ErrorMessages.general.fieldRequired),
		bike: Yup.number().required(ErrorMessages.general.fieldRequired),
		sitva: Yup.number().required(ErrorMessages.general.fieldRequired),
		teleworking: Yup.number().required(ErrorMessages.general.fieldRequired),
		passenger: Yup.number().required(ErrorMessages.general.fieldRequired),
		gasCar: Yup.number().required(ErrorMessages.general.fieldRequired),
		electricCar: Yup.number().required(ErrorMessages.general.fieldRequired)
	});

	componentDidMount = async () => {
		const { getScore } = this.props;
		const { clientId } = getTokenPayload();
		await getScore(clientId);
	}

	handleSetScore = async (values) => {
		const { addScore, updateScore } = this.props;
		if (values.scoreId) {
			await updateScore(values.scoreId, values);
		} else {
			await addScore(values);
		}
	}

	render() {
		const { scoreData } = this.props;
		return (<Formik initialValues={{ ...scoreData }} validationSchema={this.scoreSchema} onSubmit={this.handleSetScore} component={ScoreFormComponent} enableReinitialize />);
	}
}

ScoreComponent.propTypes = {
	scoreData: PropTypes.object,
	addScore: PropTypes.func,
	getScore: PropTypes.func
};

const mapStateToProps = state => ({
	isLoading: state.score.isLoading,
	scoreData: state.score.scoreData,
});

const mapDispatchToProps = dispatch => ({
	addScore: bindActionCreators(ScoreActions.addClientScore, dispatch),
	getScore: bindActionCreators(ScoreActions.getClientScore, dispatch),
	updateScore: bindActionCreators(ScoreActions.updateClientScore, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScoreComponent));
