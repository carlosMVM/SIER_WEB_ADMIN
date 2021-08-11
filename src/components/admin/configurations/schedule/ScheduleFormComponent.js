/* eslint-disable react/no-array-index-key */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	Grid, Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, FormControlLabel, Switch, Divider, ExpansionPanelActions
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getIn, FieldArray } from "formik";
import Moment from "react-moment";
import moment from "moment";
import { periodDataInitial } from "../../../../reducers/schedule/ScheduleInitialState";
import { convertTimeToDate } from "../../../../helpers/DateHelper";
import TimePickerCommon from "../../../common/TimepickerCommon";
import { FORMAT_HH_MM } from "../../../../constants/dateFormats";

class ScheduleFormComponent extends Component {
	addNewPeriod = () => {
		const { setFieldValue, values } = this.props;
		const { periods } = values;
		const newPeriods = [...periods];
		newPeriods.push(periodDataInitial);
		setFieldValue("periods", newPeriods);
	}

	removePeriod = (index) => {
		const { setFieldValue, values } = this.props;
		const { periods } = values;

		const periodsList = [...periods];
		periodsList.splice(index, 1);
		setFieldValue("periods", periodsList);
	}

	renderPeriodLabel = (period) => {
		if (period) {
			return (
				<p>
					{"Horario de: "}
					<Moment format={FORMAT_HH_MM} date={convertTimeToDate(period.startHour)} />
					{" - "}
					<Moment format={FORMAT_HH_MM} date={convertTimeToDate(period.endHour)} />
				</p>
			);
		}
		return (<span>Seleccionar horario</span>);
	}

	render() {
		const {
			handleSubmit, errors, touched, handleChange, isValid, isSubmitting, values, setFieldValue
		} = this.props;
		const { isAllDay } = values;
		return (
			<>
				<Grid container>
					<Grid item xs={12}>
						<FormControlLabel control={<Switch checked={isAllDay} onChange={handleChange} name="isAllDay" />} label="Día completo" />
					</Grid>
				</Grid>
				<FieldArray
					name="periods"
					render={() => (
						<div>
							{
								values.periods && values.periods.length > 0 ? (
									values.periods.map((period, index) => (
										<ExpansionPanel defaultExpanded={period.periodId === ""} disabled={isAllDay} key={index}>
											<ExpansionPanelSummary
												expandIcon={<ExpandMoreIcon />}
											>
												<Typography component="span">{this.renderPeriodLabel(period)}</Typography>
											</ExpansionPanelSummary>
											<ExpansionPanelDetails>
												<form>
													<Grid container spacing={1}>
														<Grid item xs={6}>
															<TimePickerCommon
																label="Hora de inicio"
																value={moment((getIn(values, `periods.${index}.startHour`)), FORMAT_HH_MM)}
																error={errors.periods && errors.periods.length > 0 ? errors.periods[index].startHour && touched.periods[index].startHour : null}
																helperText={errors.periods && errors.periods.length > 0 ? errors.periods[index].startHour : null}
																disabled={isAllDay}
																onChange={e => setFieldValue(`periods.${index}.startHour`, e)}
															/>
														</Grid>
														<Grid item xs={6}>
															<TimePickerCommon
																label="Hora de fin"
																value={moment((getIn(values, `periods.${index}.endHour`)), FORMAT_HH_MM)}
																error={errors.periods && errors.periods.length > 0 ? errors.periods[index].endHour && touched.periods[index].endHour : null}
																helperText={errors.periods && errors.periods.length > 0 ? errors.periods[index].endHour : null}
																disabled={isAllDay}
																onChange={e => setFieldValue(`periods.${index}.endHour`, e)}
															/>
														</Grid>
													</Grid>
												</form>
											</ExpansionPanelDetails>
											<Divider />
											<ExpansionPanelActions>
												<Button size="large" color="default" disabled={isAllDay} variant="contained" onClick={() => this.removePeriod(index)}>Eliminar</Button>
											</ExpansionPanelActions>
										</ExpansionPanel>
									))
								) : null
							}
						</div>
					)}
				/>
				<div className="actions">
					<Button size="large" color="secondary" variant="contained" onClick={this.addNewPeriod} disabled={isAllDay}>
						{"Agregar"}
					</Button>
					<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>
						{"Guardar"}
					</Button>
				</div>
			</>
		);
	}
}

export default ScheduleFormComponent;
