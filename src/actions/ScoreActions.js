import * as actionTypes from "../constants/actionTypes";


// Add score
export function addClientScore(newClientScore) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_SCORE,
		payload: {
			newClientScore
		}
	};
}

export function addClientScoreSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_SCORE_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function addClientScoreFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_SCORE_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Get client score
export function getClientScore(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCORE,
		payload: {
			clientId
		}
	};
}

export function getClientScoreSuccess(clientScore) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCORE_SUCCESS,
		payload: {
			clientScore
		}
	};
}

export function getClientScoreFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_SCORE_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update client score
export function updateClientScore(scoreId, scoreInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCORE,
		payload: {
			scoreId,
			scoreInfo
		}
	};
}

export function updateClientScoreSuccess(response) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCORE_SUCCESS,
		payload: {
			response
		}
	};
}

export function updateClientScoreFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_SCORE_FAILURE,
		payload: {
			errorMessage
		}
	};
}
