export async function getUserByClient(httpClient, clientId, skip, take, name) {
	if (name) {
		return httpClient.get(`/v1/client/${clientId}/users?take=${take}&skip=${skip}&name=${name}`);
	}
	return httpClient.get(`/v1/client/${clientId}/users?take=${take}&skip=${skip}`);
}

export async function updateUser(httpClient, userId, userInfo) {
	return httpClient.put(`/v1/user/${userId}`, userInfo);
}
