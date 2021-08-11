import { createLogic } from "redux-logic";

import * as officeActions from "../actions/OfficeActions";
import * as officeApi from "../api/v1/OfficeApi";
import * as actionTypes from "../constants/actionTypes";
import * as routes from "../constants/routes";
import { getTokenPayload } from "../helpers/AppHelper";


const addClientOfficeLogic = createLogic({
	type: actionTypes.ACTION_ADD_CLIENT_OFFICE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { newOffice, history } = action.payload;
			const response = await officeApi.addClientOffice(httpClient, newOffice);
			if (response.data.valid) {
				await dispatch(officeActions.addClientOfficeSuccess(response.data.messageCode));
				history.push(routes.PATH_CLIENT_OFFICE);
			} else {
				await dispatch(officeActions.addClientOfficeFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(officeActions.addClientOfficeFailure(err.messageText));
		}
		done();
	}
});

const getClientOfficesLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_OFFICES,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await officeApi.getClientOffices(httpClient, clientId);
			if (response.data.valid) {
				await dispatch(officeActions.getClientOfficesSuccess(response.data.list));
			} else {
				await dispatch(officeActions.getClientOfficesFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(officeActions.getClientOfficesFailure(err.messageText));
		}
		done();
	}
});

const getClientOfficeByIdLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_OFFICE_BY_ID,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { officeId } = action.payload;
			const response = await officeApi.getClientOfficeById(httpClient, officeId);
			if (response.data.valid) {
				await dispatch(officeActions.getClientOfficeByIdSuccess(response.data.item));
			} else {
				await dispatch(officeActions.getClientOfficeByIdFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(officeActions.getClientOfficeByIdFailure(err.messageText));
		}
		done();
	}
});

const deleteClientOfficeLogic = createLogic({
	type: actionTypes.ACTION_DELETE_CLIENT_OFFICE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { officeId } = action.payload;
			const response = await officeApi.deleteClientOffice(httpClient, officeId);
			if (response.data.valid) {
				// Load offices
				try {
					const { clientId } = getTokenPayload();
					const resGetOffice = await officeApi.getClientOffices(httpClient, clientId);

					if (resGetOffice.data.valid) {
						await dispatch(officeActions.getClientOfficesSuccess(resGetOffice.data.list));
					} else {
						await dispatch(officeActions.getClientOfficesFailure(resGetOffice.data.errorMessage));
					}
				} catch (err) {
					await dispatch(officeActions.getClientOfficesFailure(err.messageText));
				}
			} else {
				await dispatch(officeActions.deleteClientOfficeFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(officeActions.deleteClientOfficeFailure(err.messageText));
		}
		done();
	}
});

const updateClientOfficeLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_OFFICE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { officeId, officeInfo, history } = action.payload;
			const response = await officeApi.updateClientOffice(httpClient, officeId, officeInfo);

			if (response.data.valid) {
				await dispatch(officeActions.updateClientOfficeSuccess(response.data.messageCode));
				history.push(routes.PATH_CLIENT_OFFICE);
			} else {
				await dispatch(officeActions.updateClientOfficeFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(officeActions.updateClientOfficeFailure(err.messageText));
		}
		done();
	}
});

export default [
	addClientOfficeLogic,
	getClientOfficesLogic,
	updateClientOfficeLogic,
	getClientOfficeByIdLogic,
	deleteClientOfficeLogic
];
