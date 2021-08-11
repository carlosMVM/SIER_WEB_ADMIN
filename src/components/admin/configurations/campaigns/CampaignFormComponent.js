/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import React, { Component } from "react";
import {
	Grid, Button, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getIn } from "formik";
import DatePickerCommon from "../../../common/DatepickerCommon";

class CampaignFormComponent extends Component {
	render() {
		const {
			handleSubmit, errors, touched, isValid, isSubmitting, values, setFieldValue
		} = this.props;
		return (
			<ExpansionPanel defaultExpanded>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
				>
					<Typography>Campañas</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<form>
						<Grid container spacing={1}>
							<Grid item xs={6}>
								<DatePickerCommon
									name="initDate"
									value={getIn(values, "initDate")}
									label="Inicio de campaña"
									error={errors.initDate && touched.initDate}
									helperText={errors.initDate}
									onChange={e => setFieldValue("initDate", e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<DatePickerCommon
									name="endDate"
									value={getIn(values, "endDate")}
									label="Inicio de canje"
									error={errors.endDate && touched.endDate}
									helperText={errors.endDate}
									onChange={e => setFieldValue("endDate", e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<DatePickerCommon
									name="initRedeemDate"
									value={getIn(values, "initRedeemDate")}
									label="Inicio de canje"
									error={errors.initRedeemDate && touched.initRedeemDate}
									helperText={errors.initRedeemDate}
									onChange={e => setFieldValue("initRedeemDate", e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<DatePickerCommon
									name="endRedeemDate"
									value={getIn(values, "endRedeemDate")}
									label="Fin de canje"
									error={errors.endRedeemDate && touched.endRedeemDate}
									helperText={errors.endRedeemDate}
									onChange={e => setFieldValue("endRedeemDate", e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<DatePickerCommon
									name="initCampaignRedeemDate"
									value={getIn(values, "initCampaignRedeemDate")}
									label="Inicio de campaña de caje"
									error={errors.initCampaignRedeemDate && touched.initCampaignRedeemDate}
									helperText={errors.initCampaignRedeemDate}
									onChange={e => setFieldValue("initCampaignRedeemDate", e)}
								/>
							</Grid>
							<Grid item xs={6}>
								<DatePickerCommon
									name="endCampaignRedeemDate"
									value={getIn(values, "endCampaignRedeemDate")}
									label="Fin de campaña de canje"
									error={errors.endCampaignRedeemDate && touched.endCampaignRedeemDate}
									helperText={errors.endCampaignRedeemDate}
									onChange={e => setFieldValue("endCampaignRedeemDate", e)}
								/>
							</Grid>
						</Grid>
					</form>
				</ExpansionPanelDetails>
				<Divider />
				<ExpansionPanelActions>
					<Button size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>
						{"Guardar"}
					</Button>
				</ExpansionPanelActions>
			</ExpansionPanel>
		);
	}
}

export default CampaignFormComponent;
