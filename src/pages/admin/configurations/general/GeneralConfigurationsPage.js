import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../../RootPage";
import GeneralConfigurationsComponent from "../../../../components/admin/configurations/general/GeneralConfigurationsComponent";

class GeneralConfigurationsPage extends Component {
	render() {
		const {
			isLoading, message, messageCode
		} = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode}>
				<GeneralConfigurationsComponent />
			</RootPage>
		);
	}
}

GeneralConfigurationsPage.propTypes = {
	isLoading: PropTypes.bool,
	message: PropTypes.string,
	messageCode: PropTypes.number,
};

const mapStateToProps = state => ({
	isLoading: state.campaign.isLoading,
	message: state.campaign.message,
	messageCode: state.campaign.messageCode
});

export default connect(mapStateToProps)(GeneralConfigurationsPage);
