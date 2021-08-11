/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	Grid, TextField, Button, InputAdornment, IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

class LoginFormComponent extends Component {
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
    		handleSubmit, errors, touched, handleChange, handleBlur, isValid, isSubmitting, isLoading
    	} = this.props;
    	const { showPassword } = this.state;
    	return (
    		<form className="login-form" action="">
    			<Grid container spacing={2} direction="row" justify="center">
    				<Grid item xs={12}>
    					<TextField
    						label="Correo electrónico"
    						placeholder="Escribe tu correo"
    						variant="outlined"
    						fullWidth
    						shrink="true"
    						error={errors.email && touched.email}
    						helperText={errors.email}
    						onChange={handleChange}
    						onBlur={handleBlur}
    						margin="normal"
    						name="email"
    					/>
    				</Grid>
    				<Grid item xs={12}>
    					<TextField
    						label="Contraseña"
    						placeholder="Escribe tu contraseña"
    						variant="outlined"
    						fullWidth
    						shrink="true"
    						error={errors.password && touched.password}
    						type={showPassword ? "text" : "password"}
    						helperText={errors.password}
    						margin="normal"
    						onChange={handleChange}
    						onBlur={handleBlur}
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
    					<Button className="submit" size="large" color="primary" variant="contained" onClick={handleSubmit} disabled={isLoading || !isValid || isSubmitting}>Iniciar sesión</Button>
    				</Grid>
    				<Grid item xs={12}>
    					<div className="login-info">
    						<div className="full-item text-center">
    							<span>
                                    Gracias por usar Appimotion ©
    								{new Date().getFullYear()}
    							</span>
    						</div>
    					</div>
    				</Grid>
    			</Grid>
    		</form>
    	);
    }
}

export default LoginFormComponent;
