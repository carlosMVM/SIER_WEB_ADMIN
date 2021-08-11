import * as actionTypes from "../constants/actionTypes";

// Get users by client
export function getUsersByClient(clientId, skip, take, filterByName) {
	return {
		type: actionTypes.ACTION_GET_USERS_BY_CLIENT,
		payload: {
			clientId,
			skip,
			take,
			filterByName
		}
	};
}

export function getUsersByClientSuccess(paginationData) {
	return {
		type: actionTypes.ACTION_GET_USERS_BY_CLIENT_SUCCESS,
		payload: {
			paginationData
		}
	};
}

export function getUsersByClientFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_USERS_BY_CLIENT_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update user
export function updateUser(userId, userInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_USER,
		payload: {
			userId,
			userInfo
		}
	};
}

export function updateUserSuccess(userInfo, message, messageCode) {
	return {
		type: actionTypes.ACTION_UPDATE_USER_SUCCESS,
		payload: {
			userInfo,
			message,
			messageCode
		}
	};
}

export function updateUserFailure(errorMessage, messageCode) {
	return {
		type: actionTypes.ACTION_UPDATE_USER_FAILURE,
		payload: {
			errorMessage,
			messageCode
		}
	};
}
