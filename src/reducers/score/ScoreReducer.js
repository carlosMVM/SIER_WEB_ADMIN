import scoreInitialState from "./ScoreInitialState";
import * as actionTypes from "../../constants/actionTypes";

const scoreReducer = (state = scoreInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_ADD_CLIENT_SCORE: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_SCORE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.messageCode
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_SCORE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_SCORE: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_GET_CLIENT_SCORE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				scoreData: action.payload.clientScore
			};
		}
		case actionTypes.ACTION_GET_CLIENT_SCORE_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_SCORE: {
			return {
				...state,
				isLoading: true,
			};
		} case actionTypes.ACTION_UPDATE_CLIENT_SCORE_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_SCORE_FAILURE: {
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
