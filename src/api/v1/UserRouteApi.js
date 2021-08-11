export async function getUserRoutesByClient(httpClient, clientId, take, skip, transportId, username) {
	if (transportId || username) {
		if (transportId && username) {
			return httpClient.get(`/v1/userRoute/clients/${clientId}?take=${take}&skip=${skip}&transportId=${transportId}&username=${username}`);
		}

		if (transportId) {
			return httpClient.get(`/v1/userRoute/clients/${clientId}?take=${take}&skip=${skip}&transportId=${transportId}`);
		}

		if (username) {
			return httpClient.get(`/v1/userRoute/clients/${clientId}?take=${take}&skip=${skip}&username=${username}`);
		}
	}
	return httpClient.get(`/v1/userRoute/clients/${clientId}?take=${take}&skip=${skip}`);
}

export async function getUserRoutesByUserId(httpClient, userId) {
	return httpClient.put(`/v1/userRoute/users/${userId}`);
}
