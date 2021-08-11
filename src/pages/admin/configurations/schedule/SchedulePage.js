import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../../RootPage";
import ScheduleComponent from "../../../../components/admin/configurations/schedule/ScheduleComponent";

class SchedulePage extends Component {
	render() {
		const {
			isLoading, message, messageCode
		} = this.props;
		return (
			<RootPage isLoading={isLoading} message={message} messageCode={messageCode}>
				<ScheduleComponent />
			</RootPage>
		);
	}
}

SchedulePage.propTypes = {
	isLoading: PropTypes.bool,
	message: PropTypes.string,
	messageCode: PropTypes.number,
};

const mapStateToProps = state => ({
	isLoading: state.schedule.isLoading,
	message: state.schedule.message,
	messageCode: state.schedule.messageCode
});


export default connect(mapStateToProps)(SchedulePage);
