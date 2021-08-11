import { combineReducers } from "redux";

import loginReducer from "./account/login/LoginReducer";
import resetPassReducer from "./account/reset-password/ResetPasswordReducer";
import verificationAccountReducer from "./account/verification/VerificationAccountReducer";
import menuAccountReducer from "./menu/MenuReducer";
import awardReducer from "./award/AwardReducer";
import scoreReducer from "./score/ScoreReducer";
import userReducer from "./user/UserReducer";
import routeReducer from "./route/RouteReducer";
import userRouteReducer from "./userRoute/userRouteReducer";
import transportTypeReducer from "./transportType/transportTypeReducer";
import areaReducer from "./area/AreaReducer";
import campaignReducer from "./campaign/CampaignReducer";
import scheduleReducer from "./schedule/ScheduleReducer";
import officeReducer from "./office/OfficeReducer";
import clientConfigReducer from "./clientConfig/ClientConfigReducer";
import snackReducer from "./snack/SnackReducer";

const reducers = combineReducers({
	login: loginReducer,
	resetPass: resetPassReducer,
	verification: verificationAccountReducer,
	menu: menuAccountReducer,
	award: awardReducer,
	score: scoreReducer,
	user: userReducer,
	route: routeReducer,
	userRoute: userRouteReducer,
	transport: transportTypeReducer,
	area: areaReducer,
	campaign: campaignReducer,
	schedule: scheduleReducer,
	office: officeReducer,
	clientConfig: clientConfigReducer,
	snack: snackReducer
});

export default reducers;
