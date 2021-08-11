import initialState from "../../store/initialState";

export const officeData = {
	officeId: null,
	name: "",
	latitude: 0,
	longitude: 0,
	distance: 0
};

const officeInitialState = {
	...initialState,
	openAlert: false,
	offices: [],
	office: null
};

export default officeInitialState;
