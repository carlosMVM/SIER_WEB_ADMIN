export async function getClientAwards(httpClient, clientId) {
	return httpClient.get(`/v1/client/${clientId}/awards`);
}

export async function addClientAward(httpClient, newAward) {
	return httpClient.post("/v1/award", newAward);
}

export async function deleteClientAward(httpClient, awardId) {
	return httpClient.delete(`/v1/award/${awardId}`);
}

export async function updateClientAward(httpClient, awardId, awardInfo) {
	return httpClient.put(`/v1/award/${awardId}`, awardInfo);
}
