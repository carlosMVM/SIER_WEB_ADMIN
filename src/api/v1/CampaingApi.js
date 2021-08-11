export async function getClientCampaign(httpClient, clientId) {
	return httpClient.get(`/v1/campaign/clients/${clientId}`);
}

export async function addClientCampaign(httpClient, newCampaign) {
	return httpClient.post("/v1/campaign", newCampaign);
}

export async function updateClientCampaign(httpClient, campaignId, campaignInfo) {
	return httpClient.put(`/v1/campaign/${campaignId}`, campaignInfo);
}
