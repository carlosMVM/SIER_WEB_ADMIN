export async function addClientOffice(httpClient, newClientOffice) {
	return httpClient.post("/v1/office", newClientOffice);
}

export async function getClientOffices(httpClient, clientId) {
	return httpClient.get(`/v1/office/clients/${clientId}`);
}

export async function getClientOfficeById(httpClient, officeId) {
	return httpClient.get(`/v1/office/${officeId}`);
}

export async function updateClientOffice(httpClient, officeId, officeInfo) {
	return httpClient.put(`/v1/office/${officeId}`, officeInfo);
}

export async function deleteClientOffice(httpClient, officeId) {
	return httpClient.delete(`/v1/office/${officeId}`);
}
