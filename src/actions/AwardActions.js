import * as actionTypes from "../constants/actionTypes";

// Award
export function getClientAwards(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AWARDS,
		payload: {
			clientId
		}
	};
}

export function getClientAwardsSuccess(awards) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AWARDS_SUCCESS,
		payload: {
			awards
		}
	};
}

export function getClientAwardsFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AWARDS_FAILURE,
		payload: {
			errorMessage
		}
	};
}

export function addClientAward(newAward) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AWARD,
		payload: {
			newAward
		}
	};
}

export function addClientAwardSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AWARD_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function addClientAwardFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AWARD_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Delete award
export function deleteClientAward(awardId) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AWARD,
		payload: {
			awardId
		}
	};
}

export function deleteClientAwardSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AWARD_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function deleteClientAwardFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AWARD_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update award
export function updateClientAward(awardId, awardInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AWARD,
		payload: {
			awardId,
			awardInfo
		}
	};
}

export function updateClientAwardSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AWARD_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function updateClientAwardFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AWARD_FAILURE,
		payload: {
			errorMessage
		}
	};
}
