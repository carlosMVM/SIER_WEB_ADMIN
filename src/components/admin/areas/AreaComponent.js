import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTokenPayload } from "../../../helpers/AppHelper";
import * as AreaActions from "../../../actions/AreaActions";
import TableCommon from "../../common/TableCommon";

class AreaComponent extends Component {
	componentDidMount = async () => {
		const { getAreas } = this.props;
		const { clientId } = getTokenPayload();
		await getAreas(clientId);
	}

	addNewArea = async (newData) => {
		const { addArea } = this.props;
		const { clientId } = getTokenPayload();
		const newArea = {
			...newData,
			clientId
		};
		await addArea(newArea);
	}

	updateArea = async (newData, oldData) => {
		const { updateArea } = this.props;
		await updateArea(oldData.areaId, newData);
	}

	deleteArea = async (oldData) => {
		const { deleteArea } = this.props;
		await deleteArea(oldData);
	}

	render() {
		const { areas } = this.props;
		return (
			<TableCommon
				title="Áreas empresariales"
				columns={[
					{
						title: "Área",
						field: "area",
						cellStyle: {
							width: "100%"
						}
					}
				]}
				items={areas}
				editable={{
					onRowAdd: this.addNewArea,
					onRowDelete: this.deleteArea,
					onRowUpdate: this.updateArea
				}}
			/>
		);
	}
}

AreaComponent.propTypes = {
	getAreas: PropTypes.func,
	addArea: PropTypes.func,
	deleteArea: PropTypes.func,
	updateArea: PropTypes.func,
	areas: PropTypes.array
};

const mapStateToProps = state => ({
	areas: [...state.area.areas]
});

const mapDispatchToProps = dispatch => ({
	getAreas: bindActionCreators(AreaActions.getClientAreas, dispatch),
	addArea: bindActionCreators(AreaActions.addClientArea, dispatch),
	deleteArea: bindActionCreators(AreaActions.deleteClientArea, dispatch),
	updateArea: bindActionCreators(AreaActions.updateClientArea, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaComponent);
