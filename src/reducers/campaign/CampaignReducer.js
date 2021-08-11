import campaignInitialState from "./CampaignInitialState";
import * as actionTypes from "../../constants/actionTypes";

const campaignReducer = (state = campaignInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_ADD_CLIENT_CAMPAIGN: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_CAMPAIGN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
				openAlert: true
			};
		}
		case actionTypes.ACTION_ADD_CLIENT_CAMPAIGN_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
				openAlert: true
			};
		}
		case actionTypes.ACTION_GET_CLIENT_CAMPAIGN: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_CAMPAIGN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				campaign: action.payload.campaign
			};
		}
		case actionTypes.ACTION_GET_CLIENT_CAMPAIGN_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN_SUCCESS: {
			return {
				...state,
				isLoading: false,
				messageCode: action.payload.response.messageCode,
				message: action.payload.response.messageText,
				openAlert: true
			};
		}
		case actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
				openAlert: true
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default campaignReducer;
