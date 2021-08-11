import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import BusinessNewComponent from "../../../components/admin/business/BusinessNewComponent";

class BusinessNewPage extends Component {
	render() {
		const {
			isLoading, message, messageCode, open
		} = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode} open={open}>
				<BusinessNewComponent />
			</RootPage>
		);
	}
}

BusinessNewPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.route.isLoading,
	message: state.route.message,
	messageCode: state.route.messageCode
});

export default connect(mapStateToProps)(BusinessNewPage);
