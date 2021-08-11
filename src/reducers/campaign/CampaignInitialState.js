import moment from "moment";
import initialState from "../../store/initialState";

const campaign = {
	campaignId: null,
	initRedeemDate: moment(),
	endRedeemDate: moment(),
	initCampaignRedeemDate: moment(),
	endCampaignRedeemDate: moment(),
	initDate: moment(),
	endDate: moment()
};

const campaingInitialState = {
	...initialState,
	campaign
};

export default campaingInitialState;
