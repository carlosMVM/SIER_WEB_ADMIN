import axios from "axios";
import LocalStorageHelper from "../helpers/LocalStorageHelper";
import { TOKEN_KEY } from "../constants/general";

// default values for Axios
axios.interceptors.request.use((config) => {
	const finalConfig = { ...config };
	const token = LocalStorageHelper.get(TOKEN_KEY);
	if (token) {
		finalConfig.headers.common = {
			Authorization: `Bearer ${token}`
		};
	} else {
		finalConfig.headers.common = {
			Authorization: null
		};
	}
	return finalConfig;
});

// Set api url
axios.defaults.baseURL = window.envVariables.apiUrl;

export default axios;
