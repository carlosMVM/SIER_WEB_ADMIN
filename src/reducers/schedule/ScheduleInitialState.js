import initialState from "../../store/initialState";

export const periodDataInitial = {
	periodId: "",
	startHour: new Date(),
	endHour: new Date()
};

const periodInitialState = {
	...initialState,
	schedule: {
		isAllDay: false,
		periods: []
	}
};

export default periodInitialState;
