import initialState from "../../../store/initialState";

const resetPasswordData = {
	password: "",
	confirmPassword: ""
};

const resetPasswordInitialState = {
	...initialState,
	resetPasswordData
};

export default resetPasswordInitialState;
