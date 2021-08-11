import transportInitialState from "./transportTypeInitialState";
import * as actionTypes from "../../constants/actionTypes";

const transportRouteReducer = (state = transportInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_TRANSPORTS: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_TRANSPORTS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				transports: action.payload.transports
			};
		}
		case actionTypes.ACTION_GET_TRANSPORTS_FAILURE: {
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

export default transportRouteReducer;
