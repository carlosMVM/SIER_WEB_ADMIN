import { createLogic } from "redux-logic";

import * as transportTypeActions from "../actions/TransportActions";
import * as transportTypeApi from "../api/v1/TransportTypeApi";
import * as actionTypes from "../constants/actionTypes";

const getTransports = createLogic({
	type: actionTypes.ACTION_GET_TRANSPORTS,
	latest: true,
	async process({ httpClient }, dispatch, done) {
		try {
			const response = await transportTypeApi.getTransports(httpClient);
			if (response.data.valid) {
				await dispatch(transportTypeActions.getTransportsSuccess(response.data.list));
			} else {
				await dispatch(transportTypeActions.getTransportsFailure(response.messageText));
			}
		} catch (err) {
			await dispatch(transportTypeActions.getTransportsFailure(err.messageText));
		}
		done();
	}
});

export default [
	getTransports
];
