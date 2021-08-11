
export async function UserLogin(httpClient, userEmail, userPassword) {
	return httpClient.post("/v1/Account/login/admin", {
		username: userEmail,
		password: userPassword
	});
}

export async function ResetPasswordAsync(httpClient, password, token) {
	return httpClient.post("/v1/Account/reset-password", {
		token,
		password
	});
}

export async function VerificationAccountAsync(httpClient, token) {
	return httpClient.post("/v1/account/verify", {
		token
	});
}
