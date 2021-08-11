/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	Grid, withStyles, Link, Typography, Button, CardContent, Card, CardActions
} from "@material-ui/core";
import PropTypes from "prop-types";
import { getIn } from "formik";
import moment from "moment";
import { withRouter } from "react-router";
import { BusinessDataStyles } from "./BusinessStyles";
import TimePickerCommon from "../../common/TimepickerCommon";
import { FORMAT_HH_MM, FORMAT_HH_MM_24 } from "../../../constants/dateFormats";
import TextFieldCommon from "../../common/TexfieldCommon";
import * as routes from "../../../constants/routes";
import BusinessPointsDialogComponent from "./BusinessPointsDialogComponent";
import BusinessNearOfficesDialogComponent from "./BusinessNearOfficesDialogComponent";

class BusinessDataComponent extends Component {
	constructor() {
		super();
		this.state = {
			openDialog: false,
			openOfficeDialog: false
		};
	}

	handleClose = () => {
		this.setState({
			openDialog: false
		});
	}

	handleOpen = () => {
		this.setState({
			openDialog: true
		});
	}

	handleOfficeDialogClose = () => {
		this.setState({
			openOfficeDialog: false
		});
	}

	handleChangeStartHour = (e) => {
		const { setFieldValue } = this.props;
		const newHour = moment(e);
		setFieldValue("startHour", newHour.format(FORMAT_HH_MM_24));
	}

	handleChangeEndHour = (e) => {
		const { setFieldValue } = this.props;
		const newHour = moment(e);
		setFieldValue("endHour", newHour.format(FORMAT_HH_MM_24));
	}

	handleOfficeOpen = () => {
		this.setState({
			openOfficeDialog: true
		});
	}

	goToBusiness = () => {
		const { history } = this.props;
		history.push(routes.PATH_CLIENT_BUSINESS);
	}

	render() {
		const {
			handleChange, handleBlur, handleSubmit, classes, values, errors, touched, isValid, isSubmitting
		} = this.props;
		const { openDialog, openOfficeDialog } = this.state;
		return (
			<Card className={classes.root}>
				<CardContent>
					<form noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextFieldCommon
									label="Nombre"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									error={errors.name && touched.name}
									helperText={errors.name}
									value={getIn(values, "name")}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextFieldCommon
									label="Cantidad de cupos"
									name="capacity"
									onChange={handleChange}
									onBlur={handleBlur}
									error={errors.capacity && touched.capacity}
									helperText={errors.capacity}
									value={getIn(values, "capacity")}
								/>
							</Grid>
							<Grid item xs={6}>
								<TimePickerCommon
									label="Hora de inicio"
									value={moment((getIn(values, "startHour")), FORMAT_HH_MM)}
									error={errors.startHour && touched.startHour}
									helperText={errors.startHour}
									margin="normal"
									onChange={e => this.handleChangeStartHour(e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<TimePickerCommon
									label="Hora de fin"
									value={moment((getIn(values, "endHour")), FORMAT_HH_MM)}
									error={errors.endHour && touched.endHour}
									helperText={errors.endHour}
									margin="normal"
									onChange={e => this.handleChangeEndHour(e)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextFieldCommon
									label="Path"
									name="path"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values, "path")}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Origen latitud"
									name="origin.latitude"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.origin, "latitude")}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Origen longitud"
									name="origin.longitude"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.origin, "longitude")}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextFieldCommon
									label="Dirección de partida"
									name="origin.address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.origin, "address")}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Destino latitud"
									name="destination.latitude"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.destination, "latitude")}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Destino longitud"
									name="destination.longitude"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.destination, "longitude")}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextFieldCommon
									label="Dirección de destino"
									name="destination.address"
									onChange={handleChange}
									onBlur={handleBlur}
									value={getIn(values.destination, "address")}
								/>
							</Grid>
							<Grid item xs={6}>
								<Typography>
									<Link
										onClick={() => this.handleOpen()}
										className={classes.link}
									>
										Agregar puntos de parada
									</Link>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography>
									<Link
										onClick={() => this.handleOfficeOpen()}
										className={classes.link}
									>
										Agregar oficinas cercanas
									</Link>
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Cantidad de puntos de parada"
									value={getIn(values, "wayPoints").length}
									disabled
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									label="Cantidad de oficinas"
									value={getIn(values, "nearOffices").length}
									disabled
								/>
							</Grid>
						</Grid>
					</form>
				</CardContent>
				<CardActions>
					<Button size="large" color="secondary" variant="contained" onClick={() => this.goToBusiness()}>Cancelar</Button>
					<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>Guardar</Button>
				</CardActions>
				{<BusinessPointsDialogComponent {...this.props} open={openDialog} handleClose={this.handleClose} handleAccept={this.handleClose} />}
				{<BusinessNearOfficesDialogComponent {...this.props} open={openOfficeDialog} handleClose={this.handleOfficeDialogClose} handleAccept={this.handleOfficeDialogClose} />}
			</Card>
		);
	}
}

BusinessDataComponent.propTypes = {
	classes: PropTypes.object,
};

export default withRouter(withStyles(BusinessDataStyles)(BusinessDataComponent));
