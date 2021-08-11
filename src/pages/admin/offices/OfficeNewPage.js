import React, { Component } from "react";
import { connect } from "react-redux";
import RootPage from "../RootPage";
import OfficesNewComponent from "../../../components/admin/offices/OfficesNewComponent";

class OfficeNewPage extends Component {
	render() {
		const { isLoading } = this.props;
		return (
			<RootPage isLoading={isLoading}>
				<OfficesNewComponent />
			</RootPage>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.office.isLoading
});

export default connect(mapStateToProps)(OfficeNewPage);
