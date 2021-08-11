/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { getTokenPayload } from "../../../helpers/AppHelper";
import * as OfficeActions from "../../../actions/OfficeActions";
import * as routes from "../../../constants/routes";
import TableCommon from "../../common/TableCommon";
import { OfficesListStyles } from "./OfficesStyles";

class OfficesListComponent extends Component {
	async componentDidMount() {
		const { getOffices } = this.props;
		const { clientId } = getTokenPayload();
		await getOffices(clientId);
	}

	addNewOffice = () => {
		const { history } = this.props;
		history.push(routes.PATH_CLIENT_OFFICE_NEW);
	}

	deleteOffice = async (_, rowData) => {
		const { deleteOffice } = this.props;
		await deleteOffice(rowData.officeId);
	}

	editOffice = (_, rowData) => {
		const { history } = this.props;
		history.push(`${routes.PATH_CLIENT_OFFICE_EDIT}/${rowData.officeId}`);
	}

	render() {
		const { offices, classes } = this.props;
		return (
			<div>
				<TableCommon
					title="Oficinas"
					columns={[
						{ title: "Nombre", field: "name" },
						{ title: "Latitud", field: "latitude" },
						{ title: "Longitud", field: "longitude" },
						{ title: "Distancia (Km)", field: "distance" },
					]}
					items={offices}
					editable={{
						onRowDelete: this.deleteOffice
					}}
					actions={[
						{
							icon: "edit",
							tooltip: "Editar",
							onClick: (event, rowData) => this.editOffice(event, rowData)
						}
					]}
				/>
				<div className={classes.addNew}>
					<Button size="large" color="primary" variant="contained" onClick={() => this.addNewOffice()}>Nuevo</Button>
				</div>
			</div>
		);
	}
}

OfficesListComponent.propTypes = {
	offices: PropTypes.array,
	getOffices: PropTypes.func,
	deleteOffice: PropTypes.func,

	classes: PropTypes.object,
};

const mapStateToProps = state => ({
	offices: state.office.offices
});

const mapDispatchToProps = dispatch => ({
	getOffices: bindActionCreators(OfficeActions.getClientOffices, dispatch),
	deleteOffice: bindActionCreators(OfficeActions.deleteClientOffice, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(OfficesListStyles)(OfficesListComponent)));
