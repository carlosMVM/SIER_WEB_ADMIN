import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import BusinessListComponent from "../../../components/admin/business/BusinessListComponent";

class BusinessListPage extends Component {
	render() {
		const { isLoading, message, messageCode, open } = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode} open={open}>
				<BusinessListComponent />
			</RootPage>
		);
	}
}

BusinessListPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.route.isLoading,
	message: state.route.message,
	messageCode: state.route.messageCode
});

export default connect(mapStateToProps)(BusinessListPage);
