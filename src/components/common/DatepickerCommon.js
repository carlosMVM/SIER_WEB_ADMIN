import React, { Component } from "react";
import { DatePicker } from "@material-ui/pickers";
import PropTypes from "prop-types";
import { FORMAT_MMMM_D_YYYY } from "../../constants/dateFormats";

class DatePickerCommon extends Component {
	render() {
		const { label, format } = this.props;
		return (
			<DatePicker
				{...this.props}
				animateYearScrolling
				label={label}
				cancelLabel="Cancelar"
				fullWidth
				format={format || FORMAT_MMMM_D_YYYY}
				shrink="true"
				margin="normal"
				inputVariant="outlined"
			/>
		);
	}
}

DatePickerCommon.propTypes = {
	label: PropTypes.string.isRequired,
	format: PropTypes.string
};

export default DatePickerCommon;
