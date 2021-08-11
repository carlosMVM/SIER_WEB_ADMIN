import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RootPage from "../../RootPage";
import ScoreComponent from "../../../../components/admin/configurations/score/ScoreComponent";

class ScorePage extends Component {
	render() {
		const {
			isLoading, message, messageCode
		} = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode}>
				<ScoreComponent />
			</RootPage>
		);
	}
}

ScorePage.propTypes = {
	isLoading: PropTypes.bool,
	message: PropTypes.string,
	messageCode: PropTypes.number,
};

const mapStateToProps = state => ({
	isLoading: state.score.isLoading,
	message: state.score.message,
	messageCode: state.score.messageCode
});


export default connect(mapStateToProps)(ScorePage);
