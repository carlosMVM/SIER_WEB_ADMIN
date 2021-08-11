import { createLogic } from "redux-logic";

import * as menuActions from "../actions/MenuActions";
import * as menuApi from "../api/v1/MenuApi";
import * as actionTypes from "../constants/actionTypes";

const getClientMenuLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_MENU,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await menuApi.getClientMenu(httpClient, clientId);
			await dispatch(menuActions.getClientMenuSuccess(response.data.list));
		} catch (err) {
			await dispatch(menuActions.getClientMenuFailure(err.messageText));
		}
		done();
	}
});

export default [
	getClientMenuLogic,
];
