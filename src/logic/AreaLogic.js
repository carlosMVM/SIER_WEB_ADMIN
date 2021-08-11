import { createLogic } from "redux-logic";

import * as areaActions from "../actions/AreaActions";
import * as areaApi from "../api/v1/AreaApi";
import * as actionTypes from "../constants/actionTypes";

const addClientAreaLogic = createLogic({
	type: actionTypes.ACTION_ADD_CLIENT_AREA,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { newClientArea } = action.payload;
			const responsePost = await areaApi.addClientArea(httpClient, newClientArea);

			if (responsePost.data.valid) {
				await dispatch(areaActions.addClientAreaSuccess(responsePost.data.messageCode));

				const responseGet = await areaApi.getClientArea(httpClient, newClientArea.clientId);

				if (responseGet.data.valid) {
					await dispatch(areaActions.getClientAreasSuccess(responseGet.data.list));
				} else {
					await dispatch(areaActions.getClientAreasFailure(responseGet.data.messageText));
				}
			}
		} catch (err) {
			await dispatch(areaActions.addClientAreaFailure(err.messageText));
		}
		done();
	}
});

const deleteClientAreaLogic = createLogic({
	type: actionTypes.ACTION_DELETE_CLIENT_AREA,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { areaToDelete } = action.payload;
			const responsePost = await areaApi.deleteClientArea(httpClient, areaToDelete.areaId);

			if (responsePost.data.valid) {
				await dispatch(areaActions.deleteClientAreaSuccess(responsePost.data.messageCode));

				const responseGet = await areaApi.getClientArea(httpClient, areaToDelete.clientId);

				if (responseGet.data.valid) {
					await dispatch(areaActions.getClientAreasSuccess(responseGet.data.list));
				} else {
					await dispatch(areaActions.getClientAreasFailure(responseGet.data.messageText));
				}
			}
		} catch (err) {
			await dispatch(areaActions.deleteClientAreaFailure(err.messageText));
		}
		done();
	}
});

const updateClientAreaLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_AREA,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { areaId, areaInfo } = action.payload;
			const responsePost = await areaApi.updateClientArea(httpClient, areaId, areaInfo);

			if (responsePost.data.valid) {
				await dispatch(areaActions.updateClientAreaSuccess(responsePost.data.messageCode));

				const responseGet = await areaApi.getClientArea(httpClient, areaInfo.clientId);

				if (responseGet.data.valid) {
					await dispatch(areaActions.getClientAreasSuccess(responseGet.data.list));
				} else {
					await dispatch(areaActions.getClientAreasFailure(responseGet.data.messageText));
				}
			}
		} catch (err) {
			await dispatch(areaActions.updateClientAreaFailure(err.messageText));
		}
		done();
	}
});

const getClientAreaLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_AREA,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await areaApi.getClientArea(httpClient, clientId);
			if (response.data.valid) {
				await dispatch(areaActions.getClientAreasSuccess(response.data.list));
			} else {
				await dispatch(areaActions.getClientAreasFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(areaActions.getClientAreasFailure(err.messageText));
		}
		done();
	}
});

export default [
	addClientAreaLogic,
	getClientAreaLogic,
	deleteClientAreaLogic,
	updateClientAreaLogic
];
