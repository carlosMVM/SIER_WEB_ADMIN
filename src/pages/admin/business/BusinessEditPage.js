import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import BusinessEditComponent from "../../../components/admin/business/BusinessEditComponent";

class BusinessEditPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<BusinessEditComponent />
			</RootPage>
		);
	}
}

BusinessEditPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.route.isLoading
});

export default connect(mapStateToProps)(BusinessEditPage);
