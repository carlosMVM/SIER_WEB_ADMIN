import initialState from "../../store/initialState";

const clientConfig = {
	clientId: null,
	configInfo: {
		hasElectricBicycle: false,
		hasElectricBicycleCosmic: false,
		hasTeleworking: false,
		isRedeemActive: false,
		hasScoreBy: false
	},
	tripConfigurationInfo: {
		scoreNumberOfTimePerDay: 1,
		distance: 0
	}
};

const clientConfigInitialState = {
	...initialState,
	openAlert: false,
	clientConfig
};

export default clientConfigInitialState;
