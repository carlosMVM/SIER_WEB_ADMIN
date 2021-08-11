import * as actionTypes from "../constants/actionTypes";

// Menu
export function getClientMenu(clientId) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_MENU,
		payload: {
			clientId
		}
	};
}

export function getClientMenuSuccess(menu) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_MENU_SUCCESS,
		payload: {
			menu
		}
	};
}

export function getClientMenuFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_GET_CLIENT_MENU_FAILURE,
		payload: {
			errorMessage
		}
	};
}
