import { createLogic } from "redux-logic";

import * as scoreActions from "../actions/ScoreActions";
import * as scoreApi from "../api/v1/ScoreApi";
import * as actionTypes from "../constants/actionTypes";


const addClientScoreLogic = createLogic({
	type: actionTypes.ACTION_ADD_CLIENT_SCORE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { newclientScore } = action.payload;
			const response = await scoreApi.addClientScore(httpClient, newclientScore);
			if (response.data.valid) {
				await dispatch(scoreActions.addClientScoreSuccess(response.data.item));
			} else {
				await dispatch(scoreActions.addClientScoreFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(scoreActions.addClientScoreFailure(err.messageText));
		}
		done();
	}
});

const getClientScoreLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_SCORE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await scoreApi.getClientScore(httpClient, clientId);
			if (response.data.valid) {
				await dispatch(scoreActions.getClientScoreSuccess(response.data.item));
			} else {
				await dispatch(scoreActions.getClientScoreFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(scoreActions.getClientScoreFailure(err.messageText));
		}
		done();
	}
});

const updateClientScoreLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_SCORE,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { scoreId, scoreInfo } = action.payload;
			const response = await scoreApi.updateClientScore(httpClient, scoreId, scoreInfo);
			await dispatch(scoreActions.updateClientScoreSuccess(response.data));
		} catch (err) {
			await dispatch(scoreActions.updateClientScoreFailure(err.messageText));
		}
		done();
	}
});

export default [
	addClientScoreLogic,
	getClientScoreLogic,
	updateClientScoreLogic
];
