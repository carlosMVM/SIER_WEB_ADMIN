import loginInitialState from "./LoginInitialState";
import * as actionTypes from "../../../constants/actionTypes";

const loginReducer = (state = loginInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_LOGGING_IN_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_LOGGING_IN_REQUEST_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.data.messageCode,
				message: action.payload.data.messageText
			};
		}
		case actionTypes.ACTION_LOGGING_IN_REQUEST_FAILURE: {
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

export default loginReducer;
