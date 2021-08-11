import React, { Component } from "react";
import qs from "qs";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import VerificationAccountComponent from "../../components/account/verification/VerificationComponent";
import AccountPage from "./AccountPage";

class VerificationPage extends Component {
	render() {
		const { location, isLoading } = this.props;
		const values = qs.parse(location.search, { ignoreQueryPrefix: true });
		return (
			<AccountPage isLoading={isLoading}>
				<VerificationAccountComponent token={values.token} />
			</AccountPage>
		);
	}
}

VerificationPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.verification.isLoading
});

export default connect(mapStateToProps)(VerificationPage);
