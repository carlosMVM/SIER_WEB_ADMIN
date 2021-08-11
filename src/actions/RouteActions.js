import * as actionTypes from "../constants/actionTypes";

// Business route
export function getBusinessRoutesClient(clientId) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT,
		payload: {
			clientId
		}
	};
}

export function getBusinessRoutesClientSuccess(businessRoutes) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_SUCCESS,
		payload: {
			businessRoutes
		}
	};
}

export function getBusinessRoutesClientFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Business route
export function addBusinessRoutesClient(businessInfo, history) {
	return {
		type: actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT,
		payload: {
			businessInfo,
			history
		}
	};
}

export function addBusinessRoutesClientSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function addBusinessRoutesClientFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT_FAILURE,
		payload: {
			errorMessage
		}
	};
}

export function getBusinessRouteById(businessId) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
		payload: {
			businessId
		}
	};
}

export function getBusinessRouteByIdSuccess(businessRoute) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS,
		payload: {
			businessRoute
		}
	};
}

export function getBusinessRouteByIdFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE,
		payload: {
			errorMessage
		}
	};
}

export function deleteBusinessRouteById(businessId) {
	return {
		type: actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
		payload: {
			businessId
		}
	};
}

export function deleteBusinessRouteByIdSuccess(message) {
	return {
		type: actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS,
		payload: {
			message
		}
	};
}

export function deleteBusinessRouteByIdFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE,
		payload: {
			errorMessage
		}
	};
}

export function updateBusinessRouteById(businessId, businessInfo, history) {
	return {
		type: actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
		payload: {
			businessId,
			businessInfo,
			history
		}
	};
}

export function updateBusinessRouteByIdSuccess(message) {
	return {
		type: actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_SUCCESS,
		payload: {
			message
		}
	};
}

export function updateBusinessRouteByIdFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID_FAILURE,
		payload: {
			errorMessage
		}
	};
}

export function removeBusinessReserves(businessId) {
	return {
		type: actionTypes.ACTION_REMOVE_BUSINESS_RESERVES,
		payload: {
			businessId
		}
	};
}

export function removeBusinessReservesSuccess(message, messageCode) {
	return {
		type: actionTypes.ACTION_REMOVE_BUSINESS_RESERVES_SUCCESS,
		payload: {
			message,
			messageCode
		}
	};
}

export function removeBusinessReservesFailure(errorMessage, messageCode) {
	return {
		type: actionTypes.ACTION_REMOVE_BUSINESS_RESERVES_FAILURE,
		payload: {
			errorMessage,
			messageCode
		}
	};
}
