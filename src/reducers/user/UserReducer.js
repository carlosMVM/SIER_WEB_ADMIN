import userInitialState from "./UserInitialState";
import * as actionTypes from "../../constants/actionTypes";

const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_USERS_BY_CLIENT: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_USERS_BY_CLIENT_SUCCESS: {
			return {
				...state,
				isLoading: false,
				paginationData: action.payload.paginationData
			};
		}
		case actionTypes.ACTION_GET_USERS_BY_CLIENT_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_USER: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_UPDATE_USER_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.message,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_UPDATE_USER_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
				messageCode: action.payload.messageCode
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default userReducer;
