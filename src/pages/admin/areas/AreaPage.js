import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import AreaComponent from "../../../components/admin/areas/AreaComponent";

class AreaPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<AreaComponent />
			</RootPage>
		);
	}
}

AreaPage.propTypes = {
	isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
	isLoading: state.area.isLoading
});


export default connect(mapStateToProps)(AreaPage);
