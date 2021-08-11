export async function getClientSchedule(httpClient, clientId) {
	return httpClient.get(`/v1/schedule/clients/${clientId}`);
}

export async function updateClientSchedule(httpClient, clientId, scheduleInfo) {
	return httpClient.put(`/v1/schedule/clients/${clientId}`, scheduleInfo);
}
