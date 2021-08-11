import moment from "moment";
import initialState from "../../store/initialState";
import { FORMAT_HH_MM_24 } from "../../constants/dateFormats";

export const businessRouteInital = {
	name: "",
	startHour: moment(new Date()).format(FORMAT_HH_MM_24),
	endHour: moment(new Date()).format(FORMAT_HH_MM_24),
	path: "",
	origin: {
		latitude: 0,
		longitude: 0,
		address: ""
	},
	destination: {
		latitude: 0,
		longitude: 0,
		address: ""
	},
	capacity: 0,
	wayPoints: [],
	nearOffices: []
};

const routeInitialState = {
	...initialState,
	businessRoutes: [],
	businessRoute: null
};

export default routeInitialState;
