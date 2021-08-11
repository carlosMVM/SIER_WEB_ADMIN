/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import PeriodFormComponent from "./ScheduleFormComponent";
import * as ScheduleActions from "../../../../actions/ScheduleActions";
import ErrorMessages from "../../../../constants/messages";
import { getTokenPayload } from "../../../../helpers/AppHelper";
import { convertDateToTimeHHmm } from "../../../../helpers/DateHelper";

class ScheduleComponent extends Component {
	periodSchema = Yup.object().shape({
		isAllDay: Yup.bool().required(ErrorMessages.general.fieldRequired),
		periods: Yup.array()
	});

	componentDidMount = async () => {
		const { getScheduleByClient } = this.props;
		const { clientId } = getTokenPayload();
		await getScheduleByClient(clientId);
	}

	handleSetSchedule = async (values) => {
		const { updateScheduleByClient } = this.props;
		const { clientId } = getTokenPayload();
		const newSchedule = {
			isAllDay: values.isAllDay,
			periods: this.convertPeriods(values.periods)
		};
		await updateScheduleByClient(clientId, newSchedule);
	}

	convertPeriods = (periods) => {
		if (periods && periods.length > 0) {
			return periods.map(p => ({
				periodId: p.periodId,
				startHour: convertDateToTimeHHmm(p.startHour),
				endHour: convertDateToTimeHHmm(p.endHour)
			}));
		}
		return [];
	}

	render() {
		const { schedule } = this.props;
		return (<Formik initialValues={{ ...schedule }} validationSchema={this.periodSchema} onSubmit={this.handleSetSchedule} component={PeriodFormComponent} enableReinitialize />);
	}
}

ScheduleComponent.propTypes = {
	getScheduleByClient: PropTypes.func,
	updateScheduleByClient: PropTypes.func,

	schedule: PropTypes.object
};

const mapStateToProps = state => ({
	isLoading: state.schedule.isLoading,
	schedule: state.schedule.schedule
});

const mapDispatchToProps = dispatch => ({
	getScheduleByClient: bindActionCreators(ScheduleActions.getClientSchedule, dispatch),
	updateScheduleByClient: bindActionCreators(ScheduleActions.updateClientSchedule, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ScheduleComponent));
