import * as JwtHelper from "jwt-decode";
import MessageCode from "../constants/messageCode";
import LocalStorageHelper from "./LocalStorageHelper";
import { TOKEN_KEY } from "../constants/general";

export const alertColors = {
	ERROR: "error",
	INFO: "info",
	SUCCESS: "success",
	WARNING: "warning"
};

export function getAlerColorByMessageCode(messageCode) {
	switch (messageCode) {
		case MessageCode.general.success: {
			return alertColors.SUCCESS;
		}
		case MessageCode.account.verification.alreadyApproved: {
			return alertColors.INFO;
		}
		case MessageCode.account.verification.tokenExpired: {
			return alertColors.WARNING;
		}
		case MessageCode.account.verification.userNotFound: {
			return alertColors.WARNING;
		}
		case MessageCode.account.login.domainNotFound: {
			return alertColors.WARNING;
		}
		case MessageCode.account.verification.tokenRequired: {
			return alertColors.WARNING;
		}
		case MessageCode.general.warning: {
			return alertColors.WARNING;
		}
		case MessageCode.general.error: {
			return alertColors.ERROR;
		}
		default: {
			return alertColors.INFO;
		}
	}
}

export function getTokenPayload() {
	const token = LocalStorageHelper.get(TOKEN_KEY);
	if (token) {
		return JwtHelper(token);
	}
	return {};
}

export function isAuthenticated() {
	const token = LocalStorageHelper.get(TOKEN_KEY);
	if (token) {
		const { exp } = JwtHelper(token);
		const expirationTime = new Date(exp * 1000);
		return expirationTime.getTime() >= Date.now();
	}
	return false;
}
