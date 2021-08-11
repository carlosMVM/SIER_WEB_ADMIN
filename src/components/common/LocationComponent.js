/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	Paper, TextField, Grid, IconButton
} from "@material-ui/core";
import { RemoveCircle } from "@material-ui/icons";
import * as Yup from "yup";
import { getIn } from "formik";

class LocationComponent extends Component {
    locationSchema = Yup.object().shape({
    	latitude: Yup.number().required(),
    	longitude: Yup.number().required()
    });

    render() {
    	const {
    		handleRemove, values, handleChange, handleBlur
    	} = this.props;
    	return (
    		<Paper elevation={0}>
    			<Grid container spacing={2}>
    				<Grid item xs={5}>
    					<TextField
    						name="latitude"
    						placeholder="Latitud"
    						label="Latitude"
    						value={getIn(values, "latitude")}
    						onChange={handleChange}
    						onBlur={handleBlur}
    					/>
    				</Grid>
    				<Grid item xs={5}>
    					<TextField
    						name="longitude"
    						placeholder="Longitud"
    						label="Longitude"
    						value={getIn(values, "longitude")}
    						onChange={handleChange}
    						onBlur={handleBlur}
    					/>
    				</Grid>
    				<Grid item xs={2}>
    					<IconButton onClick={() => handleRemove(values)}>
    						<RemoveCircle />
    					</IconButton>
    				</Grid>
    			</Grid>
    		</Paper>
    	);
    }
}

export default LocationComponent;
