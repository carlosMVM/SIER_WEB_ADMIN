import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

class TextFieldCommon extends Component {
	render() {
		const { label } = this.props;
		return (
			<TextField
				label={label}
				fullWidth
				variant="outlined"
				InputLabelProps={{ shrink: true }}
				margin="normal"
				{...this.props}
			/>
		);
	}
}

TextFieldCommon.propTypes = {
	label: PropTypes.string.isRequired,
};

export default TextFieldCommon;
