import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../RootPage";
import TravelComponent from "../../../components/admin/travels/TravelComponent";

class TravelPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<TravelComponent />
			</RootPage>
		);
	}
}

TravelPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.userRoute.isLoading
});

export default connect(mapStateToProps)(TravelPage);
