export async function getClientMenu(httpClient, clientId) {
	return httpClient.get(`/v1/menu/client/${clientId}`);
};