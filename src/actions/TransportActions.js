import * as actionTypes from "../constants/actionTypes";

// Get transports
export function getTransports() {
	return {
		type: actionTypes.ACTION_GET_TRANSPORTS,
		payload: {
		}
	};
}

export function getTransportsSuccess(transports) {
	return {
		type: actionTypes.ACTION_GET_TRANSPORTS_SUCCESS,
		payload: {
			transports
		}
	};
}

export function getTransportsFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_TRANSPORTS_FAILURE,
		payload: {
			errorMessage
		}
	};
}
