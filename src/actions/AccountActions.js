import * as actionTypes from "../constants/actionTypes";

// Login
export function userLoggingIn(userEmail, userPassword, history) {
	return {
		type: actionTypes.ACTION_LOGGING_IN_REQUEST,
		payload: {
			userEmail,
			userPassword,
			history
		}
	};
}

export function userLoggingInSuccess(data) {
	return {
		type: actionTypes.ACTION_LOGGING_IN_REQUEST_SUCCESS,
		payload: {
			data
		}
	};
}

export function userLoggingInFailure(errorMessage) {
	return {
		type: actionTypes.ACTION_LOGGING_IN_REQUEST_FAILURE,
		error: true,
		payload: {
			errorMessage
		}
	};
}

// Reset password
export function resetPasswordAction(password, token) {
	return {
		type: actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST,
		payload: {
			password,
			token
		}
	};
}

export function resetPasswordActionSuccess(data) {
	return {
		type: actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST_SUCCESS,
		payload: {
			data
		}
	};
}

export function resetPasswordActionFailure(data) {
	return {
		type: actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST_FAILURE,
		payload: {
			data
		}
	};
}

// Verification account
export function verificationAccountAction(token) {
	return {
		type: actionTypes.ACTION_ACCOUNT_VERIFICATION_IN_REQUEST,
		payload: {
			token
		}
	};
}

export function verificationAccountActionSuccess(data) {
	return {
		type: actionTypes.ACTION_ACCOUNT_VERIFICATION_SUCCESS,
		payload: {
			data
		}
	};
}

export function verificationAccountActionFailure(data) {
	return {
		type: actionTypes.ACTION_ACCOUNT_VERIFICATION_FAILURE,
		payload: {
			data
		}
	};
}
