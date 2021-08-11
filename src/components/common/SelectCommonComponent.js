import React, { Component } from "react";
import {
	withStyles, FormControl, InputLabel, Select, MenuItem
} from "@material-ui/core";
import PropTypes from "prop-types";
import { SearchStyles } from "./CommonStyles";

class SelectCommonComponent extends Component {
	render() {
		const {
			handleChange, label, items, value
		} = this.props;
		return (
			<FormControl variant="outlined" fullWidth>
				<InputLabel htmlFor="outlined-select">{label}</InputLabel>
				<Select
					label={label}
					value={value}
					onChange={handleChange}
					inputProps={{
						name: "select-common"
					}}
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					{
						items && items.length > 0 ? (
							items.map(item => (
								<MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>
							))
						) : null
					}
				</Select>
			</FormControl>
		);
	}
}

SelectCommonComponent.propType = {
	classes: PropTypes.object,
	label: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default withStyles(SearchStyles)(SelectCommonComponent);
