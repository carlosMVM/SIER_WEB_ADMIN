import { createLogic } from "redux-logic";

import * as clientConfigActions from "../actions/ClientConfigActions";
import * as clientConfigApi from "../api/v1/ClientConfigApi";
import * as actionTypes from "../constants/actionTypes";

const getClientConfigLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_CONFIG,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await clientConfigApi.getClientConfig(httpClient, clientId);
			if (response.data.valid) {
				await dispatch(clientConfigActions.getClientConfigSuccess(response.data.item));
			} else {
				await dispatch(clientConfigActions.getClientConfigFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(clientConfigActions.getClientConfigFailure(err.messageText));
		}
		done();
	}
});

const updateClientConfigLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_CONFIG,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId, configInfo } = action.payload;
			const response = await clientConfigApi.updateClientConfig(httpClient, clientId, configInfo);
			await dispatch(clientConfigActions.updateClientSuccess(response.data));
		} catch (err) {
			await dispatch(clientConfigActions.updateClientFailure(err.messageText));
		}
		done();
	}
});

export default [
	getClientConfigLogic,
	updateClientConfigLogic
];
