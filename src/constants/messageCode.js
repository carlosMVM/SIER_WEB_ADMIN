const MessageCode = {
	general: {
		success: 200,
		warning: 1000,
		error: 500
	},
	account: {
		verification: {
			alreadyApproved: 3102,
			tokenExpired: 3103,
			userNotFound: 3004,
			tokenRequired: 600
		},
		login: {
			domainNotFound: 3003
		}
	}
};

export default MessageCode;
