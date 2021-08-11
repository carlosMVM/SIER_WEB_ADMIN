import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../../RootPage";
import AwardComponent from "../../../../components/admin/configurations/awards/AwardComponent";

class AwardPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<AwardComponent />
			</RootPage>
		);
	}
}

AwardPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.award.isLoading
});

export default connect(mapStateToProps)(AwardPage);
