/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";

import {
	Grid, TextField, Button, InputAdornment, IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

class ResetPasswordFormComponent extends Component {
	constructor() {
		super();
		this.state = {
			showPassword: false
		};
	}

    handleClickShowPassword = () => {
    	const { showPassword } = this.state;
    	this.setState({ showPassword: !showPassword });
    };

    render() {
    	const {
    		handleSubmit, handleChange, handleBlur, errors, touched, isValid, isSubmitting
    	} = this.props;
    	const { showPassword } = this.state;
    	return (
    		<form className="login-form" action="">
    			<Grid container spacing={2} direction="row">
    				<Grid item xs={12}>
    					<TextField
    						id="standard-full-width"
    						label="Nueva contraseña"
    						placeholder="Escribe tu nueva contraseña"
    						fullWidth
    						error={errors.password && touched.password}
    						helperText={errors.password}
    						onChange={handleChange}
    						onBlur={handleBlur}
    						type={showPassword ? "text" : "password"}
    						margin="normal"
    						name="password"
    						InputProps={{
    							endAdornment: (
    								<InputAdornment position="end">
    									<IconButton edge="end" aria-label="Toggle password visibility" onClick={this.handleClickShowPassword}>
    										{showPassword ? <Visibility /> : <VisibilityOff />}
    									</IconButton>
    								</InputAdornment>
    							)
    						}}
    					/>
    				</Grid>
    				<Grid item xs={12}>
    					<TextField
    						id="standard-full-width"
    						label="Confirmar contraseña"
    						placeholder="Confirma tu contraseña"
    						fullWidth
    						type="password"
    						margin="normal"
    						error={errors.confirmPassword && touched.confirmPassword}
    						helperText={errors.confirmPassword}
    						onChange={handleChange}
    						onBlur={handleBlur}
    						name="confirmPassword"
    					/>
    				</Grid>
    				<Grid item xs={12}>
    					<Button className="submit" size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={!isValid || isSubmitting}>
    						{"Enviar"}
    					</Button>
    				</Grid>
    				<Grid item xs={12}>
    					<div className="login-info">
    						<div className="full-item text-center">
    							<span>{`Gracias por usar Appimotion © ${new Date().getFullYear()}`}</span>
    						</div>
    					</div>
    				</Grid>
    			</Grid>
    		</form>
    	);
    }
}

export default ResetPasswordFormComponent;
