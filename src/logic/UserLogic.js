import { createLogic } from "redux-logic";

import * as snackActions from "../actions/SnackActions";
import * as userActions from "../actions/UserActions";
import * as userApi from "../api/v1/UserApi";
import * as actionTypes from "../constants/actionTypes";

const getUsersByClient = createLogic({
	type: actionTypes.ACTION_GET_USERS_BY_CLIENT,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const {
				clientId, skip, take, filterByName
			} = action.payload;
			const response = await userApi.getUserByClient(httpClient, clientId, skip, take, filterByName);
			if (response.data.valid) {
				await dispatch(userActions.getUsersByClientSuccess(response.data.item));
			} else {
				await dispatch(userActions.getUsersByClientFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(userActions.getUsersByClientFailure(err.messageText));
		}
		done();
	}
});

const updateUser = createLogic({
	type: actionTypes.ACTION_UPDATE_USER,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { userId, userInfo } = action.payload;
			const response = await userApi.updateUser(httpClient, userId, userInfo);
			await dispatch(userActions.updateUserSuccess(response.data.item, response.data.messageText, response.data.messageCode));
		} catch (err) {
			await dispatch(userActions.updateUserFailure(err.messageText, err.messageCode));
		}
		dispatch(snackActions.openSnack(true));
		done();
	}
});

export default [
	getUsersByClient,
	updateUser
];
