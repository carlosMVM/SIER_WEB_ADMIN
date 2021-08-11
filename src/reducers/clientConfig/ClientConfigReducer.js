import clientConfigInitialState from "./ClientConfigInitialState";
import * as actionTypes from "../../constants/actionTypes";

const clientConfigReducer = (state = clientConfigInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_CLIENT_CONFIG: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_GET_CLIENT_CONFIG_SUCCESS: {
			return {
				...state,
				isLoading: false,
				clientConfig: action.payload.clientConfig
			};
		}
		case actionTypes.ACTION_GET_CLIENT_CONFIG_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_CONFIG: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_UPDATE_CLIENT_CONFIG_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_CONFIG_FAILURE: {
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

export default clientConfigReducer;
