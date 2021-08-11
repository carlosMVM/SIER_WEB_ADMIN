export async function getClientConfig(httpClient, clientId) {
	return httpClient.get(`/v1/client/${clientId}`);
}

export async function updateClientConfig(httpClient, clientId, configInfo) {
	return httpClient.put(`/v1/client/${clientId}`, configInfo);
}
