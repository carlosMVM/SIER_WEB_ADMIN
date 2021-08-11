import * as actionTypes from "../constants/actionTypes";


// Get client config
export function getClientConfig(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CONFIG,
		payload: {
			clientId
		}
	};
}

export function getClientConfigSuccess(clientConfig) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CONFIG_SUCCESS,
		payload: {
			clientConfig
		}
	};
}

export function getClientConfigFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_CONFIG_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update client config
export function updateClient(clientId, configInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CONFIG,
		payload: {
			clientId,
			configInfo
		}
	};
}

export function updateClientSuccess(response) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CONFIG_SUCCESS,
		payload: {
			response
		}
	};
}

export function updateClientFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_CONFIG_FAILURE,
		payload: {
			errorMessage
		}
	};
}
