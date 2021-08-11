import React, { Component } from "react";
import PropTypes from "prop-types";
import { TimePicker } from "@material-ui/pickers";
import { FORMAT_HH_MM } from "../../constants/dateFormats";

class TimePickerCommon extends Component {
	render() {
		const { label, format, disabled } = this.props;
		return (
			<TimePicker
				{...this.props}
				variant="inline"
				label={label}
				fullWidth
				format={format || FORMAT_HH_MM}
				disabled={disabled || false}
				shrink="true"
				inputVariant="outlined"
			/>
		);
	}
}

TimePickerCommon.propTypes = {
	label: PropTypes.string.isRequired,
	format: PropTypes.string,
	disabled: PropTypes.bool
};

export default TimePickerCommon;
