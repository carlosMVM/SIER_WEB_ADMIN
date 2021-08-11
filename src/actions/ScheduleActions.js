import * as actionTypes from "../constants/actionTypes";


// Get client schedule
export function getClientSchedule(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCHEDULE,
		payload: {
			clientId
		}
	};
}

export function getClientScheduleSuccess(schedule) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCHEDULE_SUCCESS,
		payload: {
			schedule
		}
	};
}

export function getClientScheduleFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCHEDULE_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update client schedule
export function updateClientSchedule(clientId, scheduleInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE,
		payload: {
			clientId,
			scheduleInfo
		}
	};
}

export function updateClientScheduleSuccess(response) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE_SUCCESS,
		payload: {
			response
		}
	};
}

export function updateClientScheduleFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE_FAILURE,
		payload: {
			errorMessage
		}
	};
}
