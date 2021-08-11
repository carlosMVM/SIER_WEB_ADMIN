import React, { Component } from "react";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import OfficesEditComponent from "../../../components/admin/offices/OfficesEditComponent";

class OfficeEditPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<OfficesEditComponent />
			</RootPage>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.office.isLoading
});

export default connect(mapStateToProps)(OfficeEditPage);
