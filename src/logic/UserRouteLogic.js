import { createLogic } from "redux-logic";

import * as userRouteActions from "../actions/UserRouteActions";
import * as userRouteApi from "../api/v1/UserRouteApi";
import * as actionTypes from "../constants/actionTypes";

const getUserRoutesByClient = createLogic({
	type: actionTypes.ACTION_GET_USER_ROUTES_BY_CLIENT,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const {
				clientId, take, skip, transportId, username
			} = action.payload;
			const response = await userRouteApi.getUserRoutesByClient(httpClient, clientId, take, skip, transportId, username);

			if (response.data.valid) {
				await dispatch(userRouteActions.getUserRoutesByClientSuccess(response.data.item));
			} else {
				await dispatch(userRouteActions.getUserRoutesByClientFailure(response.messageText));
			}
		} catch (err) {
			await dispatch(userRouteActions.getUserRoutesByClientFailure(err.messageText));
		}
		done();
	}
});

export default [
	getUserRoutesByClient
];
