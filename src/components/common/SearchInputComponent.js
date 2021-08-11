import React, { Component } from "react";
import {
	Paper, InputBase, IconButton, withStyles
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import PropTypes from "prop-types";
import { SearchStyles } from "./CommonStyles";

class SearchInputComponent extends Component {
	render() {
		const { classes, filterBy } = this.props;
		return (
			<Paper className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder="Buscar..."
					inputProps={{ "aria-label": "search" }}
					onChange={filterBy}
				/>
				<IconButton className={classes.iconButton} aria-label="search">
					<Search />
				</IconButton>
			</Paper>
		);
	}
}

SearchInputComponent.propType = {
	classes: PropTypes.object,
	filterBy: PropTypes.func.isRequired
};

export default withStyles(SearchStyles)(SearchInputComponent);
