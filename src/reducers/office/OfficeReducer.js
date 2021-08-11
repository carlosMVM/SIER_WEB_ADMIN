import officeInitialState from "./OfficeInitialState";
import * as actionTypes from "../../constants/actionTypes";

const scoreReducer = (state = officeInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_ADD_CLIENT_OFFICE: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_OFFICE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_OFFICE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_OFFICES: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_GET_CLIENT_OFFICES_SUCCESS: {
			return {
				...state,
				isLoading: false,
				offices: action.payload.offices
			};
		}
		case actionTypes.ACTION_GET_CLIENT_OFFICES_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID_SUCCESS: {
			return {
				...state,
				isLoading: false,
				office: action.payload.office
			};
		}
		case actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_OFFICE: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_UPDATE_CLIENT_OFFICE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_OFFICE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_OFFICE: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_DELETE_CLIENT_OFFICE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_OFFICE_FAILURE: {
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

export default scoreReducer;
