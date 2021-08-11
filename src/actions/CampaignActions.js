import * as actionTypes from "../constants/actionTypes";

// Get campaing
export function getClientCampaing(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CAMPAIGN,
		payload: {
			clientId
		}
	};
}

export function getClientCampaignSuccess(campaign) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CAMPAIGN_SUCCESS,
		payload: {
			campaign
		}
	};
}

export function getClientCampaignFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CAMPAIGN_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Add camping

export function addClientCampaign(campaignInfo) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_CAMPAIGN,
		payload: {
			campaignInfo
		}
	};
}

export function addClientCampaignSuccess(response) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_CAMPAIGN_SUCCESS,
		payload: {
			response
		}
	};
}

export function addClientCampaignFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_CAMPAIGN_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update camping

export function updateClientCampaign(campaignId, campaignInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN,
		payload: {
			campaignId,
			campaignInfo
		}
	};
}

export function updateClientCampaignSuccess(response) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN_SUCCESS,
		payload: {
			response
		}
	};
}

export function updateClientCampaignFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN_FAILURE,
		payload: {
			errorMessage
		}
	};
}
