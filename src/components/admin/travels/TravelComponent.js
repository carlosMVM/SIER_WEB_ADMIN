/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import {
	TableContainer, TableHead, TableRow, TableCell, Table, TableBody, Paper, TablePagination, withStyles, Grid
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { debounce } from "throttle-debounce";
import { getTokenPayload } from "../../../helpers/AppHelper";
import * as UserRouteActions from "../../../actions/UserRouteActions";
import * as TransportActions from "../../../actions/TransportActions";
import SearchInputComponent from "../../common/SearchInputComponent";
import SelectCommonComponent from "../../common/SelectCommonComponent";
import { TravelListStyles } from "./TravelStyles";

class TravelComponent extends Component {
	constructor() {
		super();
		this.state = {
			transport: "",
			username: ""
		};
	}

	componentDidMount = async () => {
		const { getUserRoutesByClient, paginationData, getTransports } = this.props;
		const { clientId } = getTokenPayload();
		await getUserRoutesByClient(clientId, paginationData.take, 0);
		await getTransports();
	}

	handleChangePage = async (e, newPage) => {
		const { getUserRoutesByClient, paginationData } = this.props;
		const { username, transport } = this.state;
		const { clientId } = getTokenPayload();
		await getUserRoutesByClient(clientId, paginationData.take, paginationData.take * newPage, transport, username);
	}

	handleChangeRowsPerPage = async (e) => {
		const { getUserRoutesByClient } = this.props;
		const { value } = e.target;
		const { clientId } = getTokenPayload();
		const { username, transport } = this.state;
		await getUserRoutesByClient(clientId, value, 0, transport, username);
	}

	filterByName = async (e) => {
		e.persist();
		debounce(500, async () => {
			const { target } = e;
			const { getUserRoutesByClient, paginationData } = this.props;
			const { clientId } = getTokenPayload();
			const { transport } = this.state;
			this.setState(state => ({
				...state,
				username: target.value
			}));
			await getUserRoutesByClient(clientId, paginationData.take, 0, transport, target.value);
		})();
	}

	handleTransportChange = async (e) => {
		const { target } = e;
		const { getUserRoutesByClient, paginationData } = this.props;
		const { clientId } = getTokenPayload();
		const { username } = this.state;
		this.setState(state => ({
			...state,
			transport: target.value
		}));
		await getUserRoutesByClient(clientId, paginationData.take, 0, target.value, username);
	}

	render() {
		const { paginationData, transports } = this.props;
		const { transport } = this.state;
		const commonSelectItems = transports.map(t => ({
			value: t.transportId,
			text: t.name
		}));
		return (
			<div>
				<Grid container>
					<Grid item xs={8}>
						<SearchInputComponent filterBy={this.filterByName} />
					</Grid>
					<Grid item xs={4}>
						<SelectCommonComponent label="Filtrar por transporte" items={commonSelectItems} value={transport} handleChange={this.handleTransportChange} />
					</Grid>
				</Grid>
				<TableContainer component={Paper}>
					<Table aria-label="user routes table">
						<TableHead>
							<TableRow>
								<TableCell>Usuario</TableCell>
								<TableCell align="center">Plataforma</TableCell>
								<TableCell align="center">Versión</TableCell>
								<TableCell align="center">Fecha de creación</TableCell>
								<TableCell align="center">Puntos</TableCell>
								<TableCell align="center">Tiempo</TableCell>
								<TableCell align="center">Transporte</TableCell>
								<TableCell align="center">Detalle</TableCell>
								<TableCell align="center">Distancia de Google</TableCell>
								<TableCell align="center">Tiempo de Google</TableCell>
								<TableCell align="center">Dirección de origen</TableCell>
								<TableCell align="center">Latitud de origen</TableCell>
								<TableCell align="center">Longitud de origen</TableCell>
								<TableCell align="center">Dirección de destino</TableCell>
								<TableCell align="center">Latitud de destino</TableCell>
								<TableCell align="center">Longitud de destino</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{paginationData && paginationData.items.length > 0 ? paginationData.items.map(userRoute => (
								<TableRow key={userRoute.userRouteId}>
									<TableCell component="th" scope="row">
										{userRoute.userInfo.username}
									</TableCell>
									<TableCell align="center">{userRoute.platform}</TableCell>
									<TableCell align="center">{userRoute.platformVersion}</TableCell>
									<TableCell align="center">{userRoute.createdDate}</TableCell>
									<TableCell align="center">{userRoute.tripInfo.score}</TableCell>
									<TableCell align="center">{userRoute.tripInfo.time}</TableCell>
									<TableCell align="center">{userRoute.tripInfo.transportTypeInfo.name}</TableCell>
									<TableCell align="center">{userRoute.detail}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.googleTime}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.googleDistance}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.originAddress}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.latitudeOrigin}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.longitudeOrigin}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.destinationAddress}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.latitudeDestination}</TableCell>
									<TableCell align="center">{userRoute.locationInfo.longitudeDestination}</TableCell>
								</TableRow>
							)) : null}
						</TableBody>
						<TablePagination
							count={paginationData.totalItems}
							page={paginationData.currentPage}
							onChangePage={this.handleChangePage}
							rowsPerPage={paginationData.take}
							labelRowsPerPage="Filas por página"
							onChangeRowsPerPage={this.handleChangeRowsPerPage}
						/>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

TravelComponent.propTypes = {
	getUserRoutesByClient: PropTypes.func,
	paginationData: PropTypes.object,
	transports: PropTypes.array,
};

const mapStateToProps = state => ({
	paginationData: state.userRoute.paginationData,
	transports: state.transport.transports
});

const mapDispatchToProps = dispatch => ({
	getUserRoutesByClient: bindActionCreators(UserRouteActions.getUserRoutesByClient, dispatch),
	getTransports: bindActionCreators(TransportActions.getTransports, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(TravelListStyles)(TravelComponent));
