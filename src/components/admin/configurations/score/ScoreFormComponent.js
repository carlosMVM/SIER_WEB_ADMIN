import React, { Component } from "react";
import {
	Grid, TextField, Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getIn } from "formik";

class ScoreFormComponent extends Component {
	render() {
		const {
			handleSubmit, errors, touched, handleChange, handleBlur, isValid, isSubmitting, values
		} = this.props;
		return (
			<>
				<ExpansionPanel defaultExpanded>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
					>
						<Typography>Puntos por transportes</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<form>
							<Grid container spacing={1}>
								<Grid item xs={3}>
									<TextField
										label="Caminata"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.walk && touched.walk}
										helperText={errors.walk}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="walk"
										value={getIn(values, "walk")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Bicicleta"
										fullWidth
										variant="outlined"
										shrink="true"
										error={errors.bicycle && touched.bicycle}
										helperText={errors.bicycle}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="bicycle"
										value={getIn(values, "bicycle")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Carro"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.car && touched.car}
										helperText={errors.car}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="car"
										value={getIn(values, "car")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Ruta empresarial"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.businessRoute && touched.businessRoute}
										helperText={errors.businessRoute}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="businessRoute"
										value={getIn(values, "businessRoute")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Transporte público"
										fullWidth
										variant="outlined"
										shrink="true"
										error={errors.publicTransport && touched.publicTransport}
										helperText={errors.publicTransport}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="publicTransport"
										value={getIn(values, "publicTransport")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Carpooling"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.carpooling && touched.carpooling}
										helperText={errors.carpooling}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="carpooling"
										value={getIn(values, "carpooling")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Motocicleta"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.bike && touched.bike}
										helperText={errors.bike}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="bike"
										value={getIn(values, "bike")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Sitva"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.sitva && touched.sitva}
										helperText={errors.sitva}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="sitva"
										value={getIn(values, "sitva")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Teletrabajo"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.teleworking && touched.teleworking}
										helperText={errors.teleworking}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="teleworking"
										value={getIn(values, "teleworking")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Pasajero"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.passenger && touched.passenger}
										helperText={errors.passenger}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="passenger"
										value={getIn(values, "passenger")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Carro a gas"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.gasCar && touched.gasCar}
										helperText={errors.gasCar}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="gasCar"
										value={getIn(values, "gasCar")}
									/>
								</Grid>
								<Grid item xs={3}>
									<TextField
										label="Carro eléctrico"
										fullWidth
										shrink="true"
										variant="outlined"
										error={errors.electricCar && touched.electricCar}
										helperText={errors.electricCar}
										onChange={handleChange}
										onBlur={handleBlur}
										margin="normal"
										name="electricCar"
										value={getIn(values, "electricCar")}
									/>
								</Grid>
							</Grid>
						</form>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>
					{"Guardar"}
				</Button>
			</>
		);
	}
}

export default ScoreFormComponent;
