import { createLogic } from "redux-logic";

import * as scheduleActions from "../actions/ScheduleActions";
import * as scheduleApi from "../api/v1/ScheduleApi";
import * as actionTypes from "../constants/actionTypes";

const getClientScheduleLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_SCHEDULE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await scheduleApi.getClientSchedule(httpClient, clientId);
			if (response.data.valid) {
				await dispatch(scheduleActions.getClientScheduleSuccess(response.data.item));
			} else {
				await dispatch(scheduleActions.getClientScheduleFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(scheduleActions.getClientScheduleFailure(err.messageText));
		}
		done();
	}
});

const updateClientScheduleLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId, scheduleInfo } = action.payload;
			const response = await scheduleApi.updateClientSchedule(httpClient, clientId, scheduleInfo);
			await dispatch(scheduleActions.updateClientScheduleSuccess(response.data));
		} catch (err) {
			await dispatch(scheduleActions.updateClientScheduleFailure(err.messageText));
		}
		done();
	}
});

export default [
	getClientScheduleLogic,
	updateClientScheduleLogic
];
