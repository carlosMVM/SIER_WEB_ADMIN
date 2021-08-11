/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import React, { Component } from "react";
import {
	Grid, Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getIn } from "formik";
import TextFieldCommon from "../../../common/TexfieldCommon";
import CheckboxCommon from "../../../common/CheckboxCommon";

class GeneralConfigurationsFormComponent extends Component {
	render() {
		const {
			handleSubmit, isValid, isSubmitting, values, setFieldValue, handleChange, handleBlur
		} = this.props;
		console.log(values);
		return (
			<ExpansionPanel defaultExpanded>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>General</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<form>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<TextFieldCommon
									name="tripConfigurationInfo.scoreNumberOfTimePerDay"
									value={getIn(values, "tripConfigurationInfo.scoreNumberOfTimePerDay")}
									label="Cantidad de puntos que se otorga por día"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextFieldCommon
									name="tripConfigurationInfo.distance"
									value={getIn(values, "tripConfigurationInfo.distance")}
									label="Distancia mínima requerida para otorgar puntos por viaje"
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</Grid>
							<Grid item xs={6}>
								<CheckboxCommon
									label="Teletrabajo"
									name="configInfo.hasTeleworking"
									value={getIn(values, "configInfo.hasTeleworking")}
									handleChange={v => setFieldValue("configInfo.hasTeleworking", !v)}
								/>
							</Grid>
							<Grid item xs={6}>
								<CheckboxCommon
									label="Redenciones"
									name="configInfo.isRedeemActive"
									value={getIn(values, "configInfo.isRedeemActive")}
									handleChange={v => setFieldValue("configInfo.isRedeemActive", !v)}
								/>
							</Grid>
							<Grid item xs={6}>
								<CheckboxCommon
									label="Bicicletas eléctricas"
									name="configInfo.hasElectricBicycle"
									value={getIn(values, "configInfo.hasElectricBicycle")}
									handleChange={v => setFieldValue("configInfo.hasElectricBicycle", !v)}
								/>
							</Grid>
							<Grid item xs={6}>
								<CheckboxCommon
									label="Bicicletas eléctricas - cosmic"
									name="configInfo.hasElectricBicycleCosmic"
									value={getIn(values, "configInfo.hasElectricBicycleCosmic")}
									handleChange={v => setFieldValue("configInfo.hasElectricBicycleCosmic", !v)}
								/>
							</Grid>
							<Grid item xs={6}>
								<CheckboxCommon
									label="Puntos por otras acciones"
									name="configInfo.hasScoreBy"
									value={getIn(values, "configInfo.hasScoreBy")}
									handleChange={v => setFieldValue("configInfo.hasScoreBy", !v)}
								/>
							</Grid>
						</Grid>
					</form>
				</ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>
					<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>Guardar</Button>
				</ExpansionPanelActions>
			</ExpansionPanel>
		);
	}
}

export default GeneralConfigurationsFormComponent;
