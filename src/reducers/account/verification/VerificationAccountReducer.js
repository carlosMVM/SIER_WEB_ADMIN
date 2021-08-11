import verificationInitialState from "./VerificationAccountInitialState";
import * as actionTypes from "../../../constants/actionTypes";

const verificationAccountReducer = (state = verificationInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_ACCOUNT_VERIFICATION_IN_REQUEST: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ACCOUNT_VERIFICATION_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.data.messageText,
				messageCode: action.payload.data.messageCode
			};
		}
		case actionTypes.ACTION_ACCOUNT_VERIFICATION_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				messageCode: action.payload.data.messageCode,
				message: action.payload.data.messageText,
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default verificationAccountReducer;
