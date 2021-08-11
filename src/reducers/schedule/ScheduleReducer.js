import scheduleInitialState from "./ScheduleInitialState";
import * as actionTypes from "../../constants/actionTypes";

const periodReducer = (state = scheduleInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_CLIENT_SCHEDULE: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_SCHEDULE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				schedule: action.payload.schedule
			};
		}
		case actionTypes.ACTION_GET_CLIENT_SCHEDULE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.response.messageText,
				messageCode: action.payload.response.messageCode,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_SCHEDULE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default periodReducer;
