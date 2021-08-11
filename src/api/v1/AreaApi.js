export async function addClientArea(httpClient, newClientScore) {
	return httpClient.post("/v1/area", newClientScore);
}

export async function getClientArea(httpClient, clientId) {
	return httpClient.get(`/v1/area/${clientId}`);
}

export async function deleteClientArea(httpClient, areaId) {
	return httpClient.delete(`/v1/area/${areaId}`);
}

export async function updateClientArea(httpClient, areaId, areaInfo) {
	return httpClient.put(`/v1/area/${areaId}`, areaInfo);
}
