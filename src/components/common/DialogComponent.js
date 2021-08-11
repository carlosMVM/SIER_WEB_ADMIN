import React, { Component } from "react";
import {
	Dialog, DialogTitle, DialogContent, DialogActions, Button
} from "@material-ui/core";
import PropTypes from "prop-types";

class DialogComponent extends Component {
	render() {
		const {
			open, title, children, handleClose, handleAccept
		} = this.props;
		return (
			<Dialog open={open} onClose={handleClose} disableBackdropClick>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					{children}
				</DialogContent>
				<DialogActions>
					<DialogActions>
						<Button onClick={handleClose}>
                            Cancelar
						</Button>
						<Button onClick={handleAccept}>
                            Aceptar
						</Button>
					</DialogActions>
				</DialogActions>
			</Dialog>
		);
	}
}

DialogComponent.propTypes = {
	open: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	handleClose: PropTypes.func.isRequired,
	handleAccept: PropTypes.func.isRequired
};

export default DialogComponent;
