import React, { Component } from "react";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import OfficesListComponent from "../../../components/admin/offices/OfficesListComponent";

class OfficeListPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<OfficesListComponent />
			</RootPage>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.office.isLoading
});

export default connect(mapStateToProps)(OfficeListPage);
