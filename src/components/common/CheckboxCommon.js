/* eslint-disable no-extra-boolean-cast */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormControlLabel, Checkbox } from "@material-ui/core";

class CheckboxCommon extends Component {
	render() {
		const {
			label, value, name, handleChange
		} = this.props;
		return (
			<FormControlLabel
				label={label}
				control={(
					<Checkbox
						value={value}
						name={name}
						onChange={(_, v) => handleChange(!Boolean(v))}
						checked={value}
					/>
				)}
			/>
		);
	}
}

CheckboxCommon.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default CheckboxCommon;
