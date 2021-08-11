import initialState from "../../../store/initialState";

const loginData = {
	email: "",
	password: ""
};

const loginInitialState = {
	...initialState,
	loginData
};

export default loginInitialState;
