import { createLogic } from "redux-logic";

import * as campaignActions from "../actions/CampaignActions";
import * as campaignApi from "../api/v1/CampaingApi";
import * as actionTypes from "../constants/actionTypes";

const getClientCampaingLogic = createLogic({
	type: actionTypes.ACTION_GET_CLIENT_CAMPAIGN,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { clientId } = action.payload;
			const response = await campaignApi.getClientCampaign(httpClient, clientId);
			await dispatch(campaignActions.getClientCampaignSuccess(response.data.item));
		} catch (err) {
			await dispatch(campaignActions.getClientCampaignFailure(err.messageText));
		}
		done();
	}
});

const addClientCampaingLogic = createLogic({
	type: actionTypes.ACTION_ADD_CLIENT_CAMPAIGN,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { campaignInfo } = action.payload;
			const response = await campaignApi.addClientCampaign(httpClient, campaignInfo);
			if (response.data.valid) {
				await dispatch(campaignActions.addClientCampaignSuccess(response.data));
			} else {
				await dispatch(campaignActions.addClientCampaignFailure(response.data.messageText));
			}
		} catch (err) {
			await dispatch(campaignActions.addClientCampaignFailure(err.messageText));
		}
		done();
	}
});

const updateClientCampaingLogic = createLogic({
	type: actionTypes.ACTION_UPDATE_CLIENT_CAMPAIGN,
	latest: true,
	async process({ httpClient, action }, dispatch, done) {
		try {
			const { campaignId, campaignInfo } = action.payload;
			const response = await campaignApi.updateClientCampaign(httpClient, campaignId, campaignInfo);
			await dispatch(campaignActions.updateClientCampaignSuccess(response.data));
		} catch (err) {
			await dispatch(campaignActions.updateClientCampaignFailure(err.messageText));
		}
		done();
	}
});

export default [
	getClientCampaingLogic,
	addClientCampaingLogic,
	updateClientCampaingLogic
];
