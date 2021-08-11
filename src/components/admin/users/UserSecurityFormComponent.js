import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import DatePickerCommon from "../../common/DatepickerCommon";
import CheckboxCommon from "../../common/CheckboxCommon";

class UserSecurityFormComponent extends Component {
	render() {
		const { formProps } = this.props;
		const { values } = formProps;

		return (
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<CheckboxCommon
						label="Deshabilitado"
						name="settingInfo.isDeleted"
						value={values.settingInfo.isDeleted || false}
						handleChange={v => formProps.setFieldValue("settingInfo.isDeleted", !v)}
					/>
				</Grid>
				<Grid item xs={4}>
					<CheckboxCommon
						label="Verificado"
						name="settingInfo.isAuthorized"
						value={values.settingInfo.isAuthorized || false}
						handleChange={v => formProps.setFieldValue("settingInfo.isAuthorized", !v)}
					/>
				</Grid>
				<Grid item xs={4}>
					<CheckboxCommon
						label="Operador"
						name="settingInfo.isOperator"
						value={values.settingInfo.isOperator || false}
						handleChange={v => formProps.setFieldValue("settingInfo.isOperator", !v)}
					/>
				</Grid>
				<Grid item xs={6}>
					<DatePickerCommon
						label="Fecha de creación"
						disabled
						value={values.settingInfo.createdDate}
						name="settingInfo.createdDate"
					/>
				</Grid>
			</Grid>
		);
	}
}

export default UserSecurityFormComponent;
