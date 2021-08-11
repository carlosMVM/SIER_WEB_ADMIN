import routeInitialState from "./RouteInitialState";
import * as actionTypes from "../../constants/actionTypes";

const routeReducer = (state = routeInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_SUCCESS: {
			return {
				...state,
				isLoading: false,
				businessRoutes: action.payload.businessRoutes
			};
		}
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS: {
			return {
				...state,
				isLoading: false,
				businessRoute: action.payload.businessRoute
			};
		}
		case actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.message
			};
		}
		case actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_REMOVE_BUSINESS_RESERVES: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_REMOVE_BUSINESS_RESERVES_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.message,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_REMOVE_BUSINESS_RESERVES_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS: {
			return {
				...state,
				isLoading: false,
				message: action.payload.message
			};
		}
		case actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE: {
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

export default routeReducer;
