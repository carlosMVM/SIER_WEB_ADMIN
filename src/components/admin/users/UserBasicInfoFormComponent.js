import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { getIn } from "formik";
import DatePickerCommon from "../../common/DatepickerCommon";
import TextFieldCommon from "../../common/TexfieldCommon";

class UserBasicInfoFormComponent extends Component {
	render() {
		const { formProps } = this.props;
		const { handleChange, handleBlur, values } = formProps;
		return (
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<TextFieldCommon
						label="Correo electrónico"
						onChange={handleChange}
						onBlur={handleBlur}
						name="username"
						value={getIn(values, "username")}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextFieldCommon
						label="Nombre"
						onChange={handleChange}
						onBlur={handleBlur}
						name="displayName"
						value={getIn(values, "displayName")}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextFieldCommon
						label="Días trabajados por semana"
						onChange={handleChange}
						onBlur={handleBlur}
						name="workDaysByWeek"
						value={getIn(values, "workDaysByWeek")}
					/>
				</Grid>
				<Grid item xs={4}>
					<DatePickerCommon
						name="birthdate"
						label="Fecha de nacimiento"
						value={getIn(values, "birthdate")}
						onChange={(value) => {
							formProps.setFieldValue("birthdate", value);
						}}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextFieldCommon
						label="Género"
						onChange={handleChange}
						onBlur={handleBlur}
						name="gender"
						value={getIn(values, "gender")}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextFieldCommon
						label="Dirección"
						onChange={handleChange}
						onBlur={handleBlur}
						name="address"
						value={getIn(values, "address")}
					/>
				</Grid>
			</Grid>
		);
	}
}

export default UserBasicInfoFormComponent;
