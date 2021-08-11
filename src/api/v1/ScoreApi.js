export async function addClientScore(httpClient, newClientScore) {
	return httpClient.post("/v1/score", newClientScore);
}

export async function getClientScore(httpClient, clientId) {
	return httpClient.get(`/v1/score/${clientId}`);
}

export async function updateClientScore(httpClient, scoreId, scoreInfo) {
	return httpClient.put(`/v1/score/${scoreId}`, scoreInfo);
}
