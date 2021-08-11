/* eslint-disable import/prefer-default-export */
import * as actionTypes from "../constants/actionTypes";

export function openSnack(open) {
	return {
		type: actionTypes.HANDLE_SNACK_BAR,
		payload: {
			open
		}
	};
}
