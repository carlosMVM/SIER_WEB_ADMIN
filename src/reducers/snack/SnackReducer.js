import snackInitialState from "./SnackInitialState";
import * as actionTypes from "../../constants/actionTypes";

const snackReducer = (state = snackInitialState, action) => {
	switch (action.type) {
		case actionTypes.HANDLE_SNACK_BAR: {
			return {
				...state,
				open: action.payload.open,
				message: action.payload.message
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};

export default snackReducer;
