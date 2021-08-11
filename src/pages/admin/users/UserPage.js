import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RootPage from "../RootPage";
import UserComponent from "../../../components/admin/users/UserComponent";

class UserPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<UserComponent />
			</RootPage>
		);
	}
}

UserPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.user.isLoading
});

export default connect(mapStateToProps)(UserPage);
