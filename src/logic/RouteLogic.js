import { createLogic } from "redux-logic";

import * as routeActions from "../actions/RouteActions";
import * as snackActions from "../actions/SnackActions";
import * as routeApi from "../api/v1/RouteApi";
import * as actionTypes from "../constants/actionTypes";
import * as routes from "../constants/routes";
import { getTokenPayload } from "../helpers/AppHelper";
import MessageCode from "../constants/messageCode";

const getBusinessRoutesByClientLogic = createLogic({
	type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await routeApi.getBusinessRouteByClient(httpClient, clientId);
			await dispatch(routeActions.getBusinessRoutesClientSuccess(response.data.list));
		} catch (err) {
			await dispatch(routeActions.getBusinessRoutesClientFailure(err.messageText));
		}
		done();
	}
});

const addBusinessRoutesByClientLogic = createLogic({
	type: actionTypes.ACTION_ADD_BUSINESS_ROUTE_BY_CLIENT,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { businessInfo, history } = action.payload;
			const response = await routeApi.addBusinessRouteByClient(httpClient, businessInfo);

			if (response.data.valid) {
				await dispatch(routeActions.addBusinessRoutesClientSuccess(response.data.messageCode));
				history.push(routes.PATH_CLIENT_BUSINESS);
			} else {
				dispatch(snackActions.openSnack(true));
				await dispatch(routeActions.getBusinessRoutesClientFailure(response.data.messageText));
			}
		} catch (err) {
			dispatch(snackActions.openSnack(true));
			await dispatch(routeActions.getBusinessRoutesClientFailure(err.messageText));
		}
		done();
	}
});

const getBusinessRoutesByByIdLogic = createLogic({
	type: actionTypes.ACTION_GET_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { businessId } = action.payload;
			const response = await routeApi.getBusinessRouteById(httpClient, businessId);

			if (response.data.valid) {
				await dispatch(routeActions.getBusinessRouteByIdSuccess(response.data.item));
			} else {
				dispatch(snackActions.openSnack(true));
				await dispatch(routeActions.getBusinessRouteByIdFailure(response.data.messageText));
			}
		} catch (err) {
			dispatch(snackActions.openSnack(true));
			await dispatch(routeActions.getBusinessRoutesClientFailure(err.messageText));
		}
		done();
	}
});

const deleteBusinessRoutesByByIdLogic = createLogic({
	type: actionTypes.ACTION_DELETE_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { businessId } = action.payload;
			const response = await routeApi.deleteBusinessRouteById(httpClient, businessId);

			if (response.data.valid) {
				await dispatch(routeActions.deleteBusinessRouteByIdSuccess(response.data.messageCode));

				const { clientId } = getTokenPayload();
				const resGet = await routeApi.getBusinessRouteByClient(httpClient, clientId);

				if (resGet.data.valid) {
					await dispatch(routeActions.getBusinessRoutesClientSuccess(resGet.data.list));
				} else {
					await dispatch(routeActions.getBusinessRoutesClientFailure(resGet.data.messageText));
				}
			} else {
				await dispatch(routeActions.deleteBusinessRouteByIdFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(routeActions.getBusinessRoutesClientFailure(err.messageText));
		}
		dispatch(snackActions.openSnack(true));
		done();
	}
});

const removeBusinessReservesLogic = createLogic({
	type: actionTypes.ACTION_REMOVE_BUSINESS_RESERVES,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { businessId } = action.payload;
			const response = await routeApi.removeBusinessReserves(httpClient, businessId);

			if (response.data.valid) {
				await dispatch(routeActions.removeBusinessReservesSuccess(response.data.messageText, response.data.messageCode));
			} else {
				await dispatch(routeActions.deleteBusinessRouteByIdFailure(response.data.messageText, MessageCode.general.warning));
			}
		} catch (err) {
			await dispatch(routeActions.removeBusinessReservesFailure(err.messageText, MessageCode.general.error));
		}
		dispatch(snackActions.openSnack(true));
		done();
	}
});

const updateBusinessRoutesByByIdLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_BUSINESS_ROUTE_BY_CLIENT_BY_ID,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { businessId, businessInfo, history } = action.payload;
			const response = await routeApi.updateBusinessRouteById(httpClient, businessId, businessInfo);

			if (response.data.valid) {
				await dispatch(routeActions.updateBusinessRouteByIdSuccess(response.data.messageText));
				history.push(routes.PATH_CLIENT_BUSINESS);
			} else {
				dispatch(snackActions.openSnack(true));
				await dispatch(routeActions.updateBusinessRouteByIdFailure(response.data.messageText));
			}
		} catch (err) {
			dispatch(snackActions.openSnack(true));
			await dispatch(routeActions.updateBusinessRouteByIdFailure(err.messageText));
		}
		done();
	}
});

export default [
	getBusinessRoutesByClientLogic,
	addBusinessRoutesByClientLogic,
	getBusinessRoutesByByIdLogic,
	deleteBusinessRoutesByByIdLogic,
	updateBusinessRoutesByByIdLogic,
	removeBusinessReservesLogic
];
