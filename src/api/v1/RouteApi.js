export async function getBusinessRouteByClient(httpClient, clientId) {
	return httpClient.get(`/v1/businessRoute/clients/${clientId}`);
}

export async function addBusinessRouteByClient(httpClient, businessInfo) {
	return httpClient.post("/v1/businessRoute", businessInfo);
}

export async function getBusinessRouteById(httpClient, businessId) {
	return httpClient.get(`/v1/businessRoute/${businessId}`);
}

export async function deleteBusinessRouteById(httpClient, businessId) {
	return httpClient.delete(`/v1/businessRoute/${businessId}`);
}

export async function updateBusinessRouteById(httpClient, businessId, businessInfo) {
	return httpClient.put(`/v1/businessRoute/${businessId}`, businessInfo);
}

export async function removeBusinessReserves(httpClient, businessId) {
	return httpClient.delete(`/v1/businessRoute/${businessId}/reserves`);
}
