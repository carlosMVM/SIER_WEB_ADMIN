import areaInitialState from "./AreaInitialState";
import * as actionTypes from "../../constants/actionTypes";

const areaReducer = (state = areaInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_ADD_CLIENT_AREA: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_AREA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_AREA_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_AREA: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_GET_CLIENT_AREA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				areas: action.payload.areas
			};
		}
		case actionTypes.ACTION_GET_CLIENT_AREA_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_AREA: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_DELETE_CLIENT_AREA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_AREA_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_AREA: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_UPDATE_CLIENT_AREA_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_AREA_FAILURE: {
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

export default areaReducer;
