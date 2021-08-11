import resetPasswordInitialState from "./ResetPasswordInitialState";
import * as actionTypes from "../../../constants/actionTypes";

const resetPassReducer = (state = resetPasswordInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.data.messageText,
				messageCode: action.payload.data.messageCode
			};
		}
		case actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: true,
				message: action.payload.data.messageText,
				messageCode: action.payload.data.messageCode
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default resetPassReducer;
