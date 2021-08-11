/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
import {
	Grid, Paper, withStyles
} from "@material-ui/core";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DialogComponent from "../../common/DialogComponent";
import * as OfficeActions from "../../../actions/OfficeActions";
import { BusinessDataStyles } from "./BusinessStyles";
import { getTokenPayload } from "../../../helpers/AppHelper";
import CheckboxCommon from "../../common/CheckboxCommon";

class BusinessNearOfficesDialogComponent extends Component {
	async componentDidMount() {
		const { getOffices } = this.props;
		const { clientId } = getTokenPayload();
		await getOffices(clientId);
	}

    handleChangeOffice = (checked, office) => {
    	const { setFieldValue, values } = this.props;
    	const { nearOffices } = values;
    	let newOffices = [...nearOffices];
    	if (!checked) {
    		newOffices.push(office);
    	} else {
    		newOffices = newOffices.filter(o => o.officeId !== office.officeId);
    	}
    	setFieldValue("nearOffices", newOffices);
    }

    renderDialog() {
    	const {
    		open, handleClose, handleAccept, offices, values
    	} = this.props;
    	return (
    		<DialogComponent
    			open={open}
    			handleClose={handleClose}
    			title="Agregar oficinas cercanas"
    			handleAccept={handleAccept}
    		>
    			{
    				offices && offices.length > 0 ? offices.map((office, index) => (
    					<Paper elevation={0} key={index}>
    						<Grid container>
    							<Grid item xs={12}>
    								<CheckboxCommon
    									name={office.name}
    									label={office.name}
    									value={values.nearOffices.some(o => office.officeId === o.officeId)}
    									handleChange={v => this.handleChangeOffice(v, office)}
    								/>
    							</Grid>
    						</Grid>
    					</Paper>
    				)) : null
    			}
    		</DialogComponent>
    	);
    }

    render() {
    	const { open } = this.props;

    	return open ? this.renderDialog() : null;
    }
}

const mapStateToProps = state => ({
	offices: state.office.offices
});

const mapDispatchToProps = dispatch => ({
	getOffices: bindActionCreators(OfficeActions.getClientOffices, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(BusinessDataStyles)(BusinessNearOfficesDialogComponent));
