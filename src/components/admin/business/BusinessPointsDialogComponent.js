/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent */
import {
	Grid, IconButton, Paper, TextField, Typography, withStyles
} from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { FieldArray, getIn } from "formik";
import React, { Component } from "react";
import DialogComponent from "../../common/DialogComponent";
import { BusinessDataStyles } from "./BusinessStyles";

class BusinessPointsDialogComponent extends Component {
    addNewLocation = () => {
    	const { values, setFieldValue } = this.props;
    	const { wayPoints } = values;
    	const newLocations = [...wayPoints];
    	newLocations.push({
    		latitude: 0,
    		longitude: 0
    	});
    	setFieldValue("wayPoints", newLocations);
    }

    renderDialog() {
    	const {
    		classes, open, handleClose, handleAccept, values, handleChange, handleBlur
    	} = this.props;

    	return (
    		<DialogComponent
    			open={open}
    			handleClose={handleClose}
    			title="Agregar puntos de parada"
    			handleAccept={handleAccept}
    		>
    			<FieldArray
    				name="wayPoints"
    				render={arrayHelpers => (
    					values.wayPoints && values.wayPoints.length > 0 ? values.wayPoints.map((point, index) => (
    						<Paper elevation={0} key={index}>
    							<Grid container spacing={2}>
    								<Grid item xs={3}>
    									<TextField
    										name={`wayPoints.${index}.latitude`}
    										placeholder="Latitud"
    										label="Latitude"
    										value={getIn(values.wayPoints[index], "latitude")}
    										onChange={handleChange}
    										onBlur={handleBlur}
    									/>
    								</Grid>
    								<Grid item xs={3}>
    									<TextField
    										name={`wayPoints.${index}.longitude`}
    										placeholder="Longitud"
    										label="Longitude"
    										value={getIn(values.wayPoints[index], "longitude")}
    										onChange={handleChange}
    										onBlur={handleBlur}
    									/>
    								</Grid>
    								<Grid item xs={3}>
    									<TextField
    										name={`wayPoints.${index}.address`}
    										placeholder="Dirección"
    										label="Dirección"
    										value={getIn(values.wayPoints[index], "address")}
    										onChange={handleChange}
    										onBlur={handleBlur}
    									/>
    								</Grid>
    								<Grid item xs={3}>
    									<IconButton onClick={() => arrayHelpers.remove(index)}>
    										<RemoveCircle />
    									</IconButton>
    								</Grid>
    							</Grid>
    						</Paper>
    					)) : null
    				)}
    			/>
    			<div className={classes.addNewLocation}>
    				<IconButton onClick={() => this.addNewLocation()}>
    					<AddCircle />
    					<Typography>
                            Añadir punto
    					</Typography>
    				</IconButton>
    			</div>
    		</DialogComponent>
    	);
    }

    render() {
    	const { open } = this.props;

    	return open ? this.renderDialog() : null;
    }
}

export default withStyles(BusinessDataStyles)(BusinessPointsDialogComponent);
