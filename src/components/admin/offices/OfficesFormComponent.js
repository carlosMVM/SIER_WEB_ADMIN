/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import React, { Component } from "react";
import {
	Grid, Button, Card, CardContent, CardActions
} from "@material-ui/core";
import { getIn } from "formik";
import { withRouter } from "react-router";
import * as routes from "../../../constants/routes";
import TextFieldCommon from "../../common/TexfieldCommon";

class OfficeFormComponent extends Component {
	goToOffices = () => {
		const { history } = this.props;
		history.push(routes.PATH_CLIENT_OFFICE);
	}

	render() {
		const {
			handleSubmit, errors, handleChange, handleBlur, touched, isValid, isSubmitting, values
		} = this.props;
		return (
			<Card>
				<CardContent>
					<form>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<TextFieldCommon
									name="name"
									value={getIn(values, "name")}
									label="Nombre"
									error={errors.name && touched.name}
									helperText={errors.name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									name="latitude"
									value={getIn(values, "latitude")}
									label="Latitud"
									error={errors.latitude && touched.latitude}
									helperText={errors.latitude}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									name="longitude"
									value={getIn(values, "longitude")}
									label="Longitude"
									error={errors.longitude && touched.longitude}
									helperText={errors.longitude}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextFieldCommon
									name="distance"
									value={getIn(values, "distance")}
									label="Distancia"
									error={errors.distance && touched.distance}
									helperText={errors.distance}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
						</Grid>
					</form>
				</CardContent>
				<CardActions>
					<Button size="large" color="secundary" variant="contained" onClick={() => this.goToOffices()}>Cancelar</Button>
					<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>Guardar</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withRouter(OfficeFormComponent);
