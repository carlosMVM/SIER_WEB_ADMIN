import * as actionTypes from "../constants/actionTypes";

// Add area
export function addClientArea(newClientArea) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AREA,
		payload: {
			newClientArea
		}
	};
}

export function addClientAreaSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AREA_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function addClientAreaFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_AREA_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Get client area
export function getClientAreas(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AREA,
		payload: {
			clientId
		}
	};
}

export function getClientAreasSuccess(areas) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AREA_SUCCESS,
		payload: {
			areas
		}
	};
}

export function getClientAreasFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_AREA_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Delete client area
export function deleteClientArea(areaToDelete) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AREA,
		payload: {
			areaToDelete
		}
	};
}

export function deleteClientAreaSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AREA_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function deleteClientAreaFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_AREA_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update client area
export function updateClientArea(areaId, areaInfo) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AREA,
		payload: {
			areaId,
			areaInfo
		}
	};
}

export function updateClientAreaSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AREA_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function updateClientAreaFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_AREA_FAILURE,
		payload: {
			errorMessage
		}
	};
}
