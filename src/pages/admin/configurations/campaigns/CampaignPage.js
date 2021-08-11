import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../../RootPage";
import CampaignComponent from "../../../../components/admin/configurations/campaigns/CampaignComponent";

class CampaignPage extends Component {
	render() {
		const {
			isLoading, message, messageCode
		} = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode}>
				<CampaignComponent />
			</RootPage>
		);
	}
}

CampaignPage.propTypes = {
	isLoading: PropTypes.bool,
	message: PropTypes.string,
	messageCode: PropTypes.number,
};

const mapStateToProps = state => ({
	isLoading: state.campaign.isLoading,
	message: state.campaign.message,
	messageCode: state.campaign.messageCode
});

export default connect(mapStateToProps)(CampaignPage);
