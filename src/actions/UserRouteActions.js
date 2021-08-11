import * as actionTypes from "../constants/actionTypes";

// Get users by client
export function getUserRoutesByClient(clientId, take, skip, transportId, username) {
	return {
		type: actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT,
		payload: {
			clientId,
			take,
			skip,
			transportId,
			username
		}
	};
}

export function getUserRoutesByClientSuccess(paginationData) {
	return {
		type: actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT_SUCCESS,
		payload: {
			paginationData
		}
	};
}

export function getUserRoutesByClientFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT_FAILURE,
		payload: {
			errorMessage
		}
	};
}
