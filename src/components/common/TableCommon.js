import React, { Component } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";

class TableCommon extends Component {
	render() {
		const { items, columns, title } = this.props;
		return (
			<MaterialTable
				title={title}
				columns={columns}
				data={items ? items.map(t => Object.assign({}, t)) : []}
				{...this.props}
			/>
		);
	}
}

TableCommon.propTypes = {
	items: PropTypes.array.isRequired,
	columns: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired
};

export default TableCommon;
