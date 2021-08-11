import { createLogic } from "redux-logic";

import * as accountActions from "../actions/AccountActions";
import * as snackActions from "../actions/SnackActions";
import * as accountApi from "../api/v1/AccountApi";
import * as actionTypes from "../constants/actionTypes";
import * as routes from "../constants/routes";
import * as generalConstants from "../constants/general";
import LocalStorageHelper from "../helpers/LocalStorageHelper";

const userLoggingInLogic = createLogic({
	type: actionTypes.ACTION_LOGGING_IN_REQUEST,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { userEmail, userPassword, history } = action.payload;
			const response = await accountApi.UserLogin(httpClient, userEmail, userPassword);

			if (response.data.valid) {
				await dispatch(accountActions.userLoggingInSuccess(response.data));
				LocalStorageHelper.add(generalConstants.TOKEN_KEY, response.data.item.token);

				history.push(routes.PATH_DASHBOARD);
			} else {
				dispatch(snackActions.openSnack(true));
				await dispatch(accountActions.userLoggingInFailure(response.data.messageText));
			}
		} catch (err) {
			console.log(err);
			dispatch(snackActions.openSnack(true));
			await dispatch(accountActions.userLoggingInFailure(err.message));
		}
		done();
	}
});

const userResetPasswordLogic = createLogic({
	type: actionTypes.ACTION_RESET_PASSWORD_IN_REQUEST,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { password, token } = action.payload;
			const response = await accountApi.ResetPasswordAsync(httpClient, password, token);

			if (response.data.valid) {
				await dispatch(accountActions.resetPasswordActionSuccess(response.data));
			} else {
				dispatch(snackActions.openSnack(true));
				await dispatch(accountActions.resetPasswordActionFailure(response.data));
			}
		} catch (err) {
			dispatch(snackActions.openSnack(true));
			await dispatch(accountActions.resetPasswordActionFailure(err.message));
		}
		done();
	}
});

const verificationAccountLogic = createLogic({
	type: actionTypes.ACTION_ACCOUNT_VERIFICATION_IN_REQUEST,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { token } = action.payload;
			const response = await accountApi.VerificationAccountAsync(httpClient, token);

			if (response.data.valid) {
				await dispatch(accountActions.verificationAccountActionSuccess(response.data));
			} else {
				await dispatch(accountActions.verificationAccountActionFailure(response.data));
			}
		} catch (err) {
			await dispatch(accountActions.verificationAccountActionFailure(err.message));
		}
		done();
	}
});

export default [
	userLoggingInLogic,
	userResetPasswordLogic,
	verificationAccountLogic,
];
