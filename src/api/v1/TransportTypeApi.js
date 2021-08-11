export async function getTransports(httpClient) {
	return httpClient.get(`/v1/transport`);
}
