import userInitialState from "./userRouteInitialState";
import * as actionTypes from "../../constants/actionTypes";

const userRouteReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT_SUCCESS: {
			return {
				...state,
				isLoading: false,
				paginationData: action.payload.paginationData
			};
		}
		case actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT_FAILURE: {
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

export default userRouteReducer;
