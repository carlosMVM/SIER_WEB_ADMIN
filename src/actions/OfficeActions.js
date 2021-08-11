import * as actionTypes from "../constants/actionTypes";

// Add office
export function addClientOffice(newOffice, history) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_OFFICE,
		payload: {
			newOffice,
			history
		}
	};
}

export function addClientOfficeSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_OFFICE_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function addClientOfficeFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_ADD_CLIENT_OFFICE_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Get client office
export function getClientOffices(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICES,
		payload: {
			clientId
		}
	};
}

export function getClientOfficesSuccess(offices) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICES_SUCCESS,
		payload: {
			offices
		}
	};
}

export function getClientOfficesFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICES_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Get client office by id
export function getClientOfficeById(officeId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID,
		payload: {
			officeId
		}
	};
}

export function getClientOfficeByIdSuccess(office) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID_SUCCESS,
		payload: {
			office
		}
	};
}

export function getClientOfficeByIdFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Delete client office
export function deleteClientOffice(officeId) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_OFFICE,
		payload: {
			officeId
		}
	};
}

export function deleteClientOfficeSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_OFFICE_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function deleteClientOfficeFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_DELETE_CLIENT_OFFICE_FAILURE,
		payload: {
			errorMessage
		}
	};
}

// Update client office
export function updateClientOffice(officeId, officeInfo, history) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_OFFICE,
		payload: {
			officeId,
			officeInfo,
			history
		}
	};
}

export function updateClientOfficeSuccess(messageCode) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_OFFICE_SUCCESS,
		payload: {
			messageCode
		}
	};
}

export function updateClientOfficeFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_UPDATE_CLIENT_OFFICE_FAILURE,
		payload: {
			errorMessage
		}
	};
}
