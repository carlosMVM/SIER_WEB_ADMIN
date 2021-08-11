import { createLogic } from "redux-logic";

import * as awardActions from "../actions/AwardActions";
import * as awardApi from "../api/v1/AwardApi";
import * as actionTypes from "../constants/actionTypes";
import { getTokenPayload } from "../helpers/AppHelper";

const getClientAwardsLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_AWARDS,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await awardApi.getClientAwards(httpClient, clientId);
			await dispatch(awardActions.getClientAwardsSuccess(response.data.item.awards));
		} catch (err) {
			await dispatch(awardActions.getClientAwardsFailure(err.messageText));
		}
		done();
	}
});


const addClientAwardLogic = createLogic({
	type: actionTypes.ACTION_ADD_CLIENT_AWARD,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { newAward } = action.payload;
			const response = await awardApi.addClientAward(httpClient, newAward);

			if (response.data.valid) {
				await dispatch(awardActions.addClientAwardSuccess(response.data.messageCode));

				// Load awards
				try {
					const resGetAward = await awardApi.getClientAwards(httpClient, newAward.clientId);
					if (resGetAward.data.valid) {
						await dispatch(awardActions.getClientAwardsSuccess(resGetAward.data.item.awards));
					} else {
						await dispatch(awardActions.getClientAwardsFailure(resGetAward.data.errorMessage));
					}
				} catch (err) {
					await dispatch(awardActions.getClientAwardsFailure(err.messageText));
				}
			}
		} catch (err) {
			await dispatch(awardActions.addClientAwardFailure(err.messageText));
		}
		done();
	}
});

const deleteClientAwardLogic = createLogic({
	type: actionTypes.ACTION_DELETE_CLIENT_AWARD,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { awardId } = action.payload;
			const response = await awardApi.deleteClientAward(httpClient, awardId);

			if (response.data.valid) {
				await dispatch(awardActions.deleteClientAwardSuccess(response.data.messageCode));

				// Load awards
				try {
					const { clientId } = getTokenPayload();
					const resGetAward = await awardApi.getClientAwards(httpClient, clientId);
					if (resGetAward.data.valid) {
						await dispatch(awardActions.getClientAwardsSuccess(resGetAward.data.item.awards));
					} else {
						await dispatch(awardActions.getClientAwardsFailure(resGetAward.data.messageText));
					}
				} catch (err) {
					await dispatch(awardActions.getClientAwardsFailure(err.messageText));
				}
			}
		} catch (err) {
			await dispatch(awardActions.deleteClientAwardFailure(err.messageText));
		}
		done();
	}
});

const updateClientAwardLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_AWARD,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { awardId, awardInfo } = action.payload;
			const response = await awardApi.updateClientAward(httpClient, awardId, awardInfo);

			if (response.data.valid) {
				await dispatch(awardActions.updateClientAwardSuccess(response.data.messageCode));

				// Load awards
				try {
					const { clientId } = getTokenPayload();
					const resGetAward = await awardApi.getClientAwards(httpClient, clientId);
					if (resGetAward.data.valid) {
						await dispatch(awardActions.getClientAwardsSuccess(resGetAward.data.item.awards));
					} else {
						await dispatch(awardActions.getClientAwardsFailure(resGetAward.data.errorMessage));
					}
				} catch (err) {
					await dispatch(awardActions.getClientAwardsFailure(err.messageText));
				}
			}
		} catch (err) {
			await dispatch(awardActions.updateClientAwardFailure(err.messageText));
		}
		done();
	}
});

export default [
	getClientAwardsLogic,
	addClientAwardLogic,
	deleteClientAwardLogic,
	updateClientAwardLogic
];
