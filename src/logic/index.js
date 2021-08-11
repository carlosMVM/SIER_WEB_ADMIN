
import accountLogic from "./AccountLogic";
import menuLogic from "./MenuLogic";
import awardLogic from "./AwardLogic";
import userLogic from "./UserLogic";
import routeLogic from "./RouteLogic";
import userRouteLogic from "./UserRouteLogic";
import transportTypeLogic from "./TransportTypeLogic";
import scoreLogic from "./ScoreLogic";
import areaLogic from "./AreaLogic";
import campaingLogic from "./CampaignLogic";
import scheduleLogic from "./ScheduleLogic";
import officeLogic from "./OfficeLogic";
import clientConfigLogic from "./ClientConfigLogic";

export default [
	...accountLogic,
	...menuLogic,
	...awardLogic,
	...userLogic,
	...routeLogic,
	...userRouteLogic,
	...transportTypeLogic,
	...scoreLogic,
	...areaLogic,
	...campaingLogic,
	...scheduleLogic,
	...officeLogic,
	...clientConfigLogic
];
