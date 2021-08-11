import awardInitialState from "./AwardInitialState";
import * as actionTypes from "../../constants/actionTypes";

const awardReducer = (state = awardInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_CLIENT_AWARDS: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_AWARDS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				awards: action.payload.awards
			};
		}
		case actionTypes.ACTION_GET_CLIENT_AWARDS_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_AWARD: {
			return {
				...state,
				isLoading: true
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_AWARD_SUCCESS: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				messageCode: action.payload.messageCode,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_AWARD_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_AWARD: {
			return {
				...state,
				isLoading: true
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_AWARD_SUCCESS: {
			return {
				...state,
				isLoading: false,
			};
		}
		case actionTypes.ACTION_DELETE_CLIENT_AWARD_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_AWARD: {
			return {
				...state,
				isLoading: true
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_AWARD_SUCCESS: {
			return {
				...state,
				isLoading: false,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_AWARD_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default awardReducer;
