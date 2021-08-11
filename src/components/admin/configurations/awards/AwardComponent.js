import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AwardActions from "../../../../actions/AwardActions";
import { getTokenPayload } from "../../../../helpers/AppHelper";
import TableCommon from "../../../common/TableCommon";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
class AwardComponent extends Component {
	async componentDidMount() {
		const { getAllAwards } = this.props;
		const { clientId } = getTokenPayload();
		await getAllAwards(clientId);
	}

	addNewAward = async (newData) => {
		const { clientId } = getTokenPayload();
		const { addAward } = this.props;
		if (!newData.description || !newData.score) {
		  toast.info("¡Debe llenar todos los campos para agregar!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "fw-bold"
		  });
		} else if (isNaN(newData.score)) {
		  toast.info(`¡"${newData.score}" no es un número válido, no se pudo agregar el premio!`, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		  });
		} else {
		  const newAward = {
			...newData,
			clientId,
		  };
		  await addAward(newAward);
		}
	  };
	  updateAward = async (newData, oldData) => {
		const { updateAward } = this.props;
		if (newData.description.length === 0 || newData.score.length === 0) {
		  toast.info("¡Debe llenar todos los campos para actualizar el premio!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		  });
		} else if (isNaN(newData.score)) {
		  toast.info(`¡"${newData.score}" no es un número válido, no se pudo actualizar el premio!`, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		  });
		} else {
		  console.log(isNaN(parseFloat(newData.score)));
		  await updateAward(oldData.awardId, newData);
		}
	  };

	deleteAward = async (oldData) => {
		const { deleteAward } = this.props;
		await deleteAward(oldData.awardId);
	}

	render() {
		const { awards } = this.props;
		return (
			<TableCommon
				title="Premios"
				columns={[
					{ title: "Descripción", field: "description" },
					{ title: "Puntos", field: "score" }
				]}
				items={awards}
				editable={{
					onRowAdd: this.addNewAward,
					onRowUpdate: this.updateAward,
					onRowDelete: this.deleteAward
				}}
			/>
		);
	}
}

AwardComponent.propTypes = {
	getAllAwards: PropTypes.func,
	addAward: PropTypes.func,
	deleteAward: PropTypes.func,
	updateAward: PropTypes.func,
	awards: PropTypes.array
};

const mapStateToProps = state => ({
	awards: [...state.award.awards]
});

const mapDispatchToProps = dispatch => ({
	getAllAwards: bindActionCreators(AwardActions.getClientAwards, dispatch),
	addAward: bindActionCreators(AwardActions.addClientAward, dispatch),
	deleteAward: bindActionCreators(AwardActions.deleteClientAward, dispatch),
	updateAward: bindActionCreators(AwardActions.updateClientAward, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AwardComponent);
