import initialState from "../../store/initialState";

const scoreData = {
	scoreId: null,
	walk: 0,
	bicycle: 0,
	car: 0,
	businessRoute: 0,
	publicTransport: 0,
	carpooling: 0,
	bike: 0,
	sitva: 0,
	teleworking: 0,
	passenger: 0,
	gasCar: 0,
	electricCar: 0
};

const scoreInitialState = {
	...initialState,
	openAlert: false,
	scoreData
};

export default scoreInitialState;
