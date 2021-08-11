import menuInitialState from "./MenuInitialState";
import * as actionTypes from "../../constants/actionTypes";

const menuReducer = (state = menuInitialState, action) => {
	switch (action.type) {
		case actionTypes.ACTION_GET_CLIENT_MENU: {
			return {
				...state,
				isLoading: true,
			};
		}
		case actionTypes.ACTION_GET_CLIENT_MENU_SUCCESS: {
			return {
				...state,
				isLoading: false,
				menu: action.payload.menu
			};
		}
		case actionTypes.ACTION_GET_CLIENT_MENU_FAILURE: {
			return {
				...state,
				isLoading: false,
				error: action.error,
				message: action.payload.errorMessage,
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default menuReducer;
