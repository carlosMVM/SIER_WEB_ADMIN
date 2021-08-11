/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { getTokenPayload } from "../../../helpers/AppHelper";
import * as RouteActions from "../../../actions/RouteActions";
import { BusinessListStyles } from "./BusinessStyles";
import * as routes from "../../../constants/routes";
import TableCommon from "../../common/TableCommon";
import DialogComponent from "../../common/DialogComponent";
import Handlebars from "handlebars";
import LocalStorageHelper from "../../../helpers/LocalStorageHelper";
import { TOKEN_KEY } from "../../../constants/general";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


class BusinessListComponent extends Component {
  constructor() {
    super();
    this.state = {
      openDialog: false,
      businessId: null,
      businessRouteClient: [],
    };
  }

  async componentDidMount() {
    const { getBusinessRoutes } = this.props;
    const { clientId } = getTokenPayload();
    await getBusinessRoutes(clientId);
  }

  newBusinessRoute = () => {
    document.getElementById('clickClose').click();
    const { history } = this.props;
    history.push(routes.PATH_CLIENT_BUSINESS_NEW);
  };

  deleteBusinessRoute = async (rowData) => {
    const { deleteBusinessRoute } = this.props;
    await deleteBusinessRoute(rowData.businessRouteId);
  };

  editBusinessRoute = (_, rowData) => {
    const { history } = this.props;
    history.push(
      `${routes.PATH_CLIENT_BUSINESS_EDIT}/${rowData.businessRouteId}`
    );
  };

  removeReservesBusinessRoute = (_, rowData) => {
    const { history } = this.props;
    history.push(
      `${routes.PATH_CLIENT_BUSINESS_EDIT}/${rowData.businessRouteId}`
    );
  };

  handleAccept = async (businessId) => {
    const { removeBusinessReserves } = this.props;
    await removeBusinessReserves(businessId);
    this.handleClose();
  };

  handleClose = () => {
    this.setState({
      openDialog: false,
      businessId: null,
    });
  };

  confirmRemoveReserves = (_, rowData) => {
    this.setState({
      openDialog: true,
      businessId: rowData.businessRouteId,
    });
  };

  renderDialog() {
    const { openDialog, businessId } = this.state;
    return (
      <DialogComponent
        open={openDialog}
        handleClose={() => this.handleClose()}
        title="Liberar los cupos de la ruta empresarial"
        handleAccept={() => this.handleAccept(businessId)}
      >
        <div>
          Esta acción permite liberar todos los cupos de la ruta empresarial
          ¿está seguro qué desea continuar con la operación?
        </div>
      </DialogComponent>
    );
  }

  clearModal = () => {

    document.getElementById("textoModal").classList.remove("d-none");
    document.getElementById("selectClient").classList.add("d-none");
    document.getElementById('routeListClient').innerHTML = "";
    document.getElementById('selectClient').innerHTML = "";
    var x, i;
    x = document.querySelectorAll(".AppSiderBarComponent-drawerPaper-9");
    for (i = 0; i < x.length; i++) {
      x[i].style.zIndex = "1";
    }
    document.getElementById('buttonRoute').classList.remove('d-none');
    document.getElementById('selectRoute').classList.add('d-none');
  }

  alerta = () =>
  {
    var x, i;
    x = document.querySelectorAll(".appi-radio");
    var businessRouteId;
    for (i = 0; i < x.length; i++) {
      if(x[i].checked)
        businessRouteId = x[i].value;
    }
    var opcion = window.confirm("¿Desea agregar la ruta seleccionada?");
    if (opcion === true) {
      this.saveBusinessRouteClient(businessRouteId);
    }
  }

  listBusinessRouteByClient = () => {
    let clientId = document.getElementById('selectClient').value;
    let businessRoutes = this.businessRouteClient.list.find(o => o.clientId === clientId);
    if(businessRoutes)
    {
      const table = "<table class=\"table \">" +
      "<thead>" +
      "<tr>"+
      "<th scope=\"col\">&nbsp;</th>" +
      "<th scope=\"col\">Nombre</th>" +
      "<th scope=\"col\">Capacidad</th>" +
      "<th scope=\"col\">Hora de inicio</th>" +
      "<th scope=\"col\">Hora de fin</th>" +
      "</tr>" +
      "</thead>" +
      "<tbody>" +
      "{{#each businessRoute}}" +
      "<tr>" +
      "<th scope=\"row\"><input type='radio' class='form-check-input appi-radio' style='cursor: pointer' id='businessRouteSelected-{{businessRouteId}}' name='businessRouteSelected' value='{{businessRouteId}}'></th>" +
      "<td>{{name}}</td>" +
      "<td>{{capacity}}</td>" +
      "<td>{{startHour}}</td>" +
      "<td>{{endHour}}</td>" +
      "</tr>" +
      "{{/each}}" +
      "</tbody>" +
      "</table>";
      const template = Handlebars.compile(table);
      document.getElementById('routeListClient').innerHTML = template(businessRoutes);
      document.getElementById('buttonRoute').classList.add('d-none');
      document.getElementById('selectRoute').classList.remove('d-none');

    }
  }

  HandleShow = () => {

    document.getElementById("textoModal").classList.add("d-none");
    document.getElementById("loading").classList.remove("d-none");
    document.getElementById("loading2").classList.remove("d-none");
    document.getElementById("loading3").classList.remove("d-none");

    fetch(window.envVariables.apiUrl + "/v1/BusinessRoute")
      .then(async (response) => await response.json())
      .then((data) => {
      

        if (data.messageCode === 200 && data.list.length) {
          
          document.getElementById("selectClient").classList.remove("d-none");
          document.getElementById("loading").classList.add("d-none");
          document.getElementById("loading2").classList.add("d-none");
          document.getElementById("loading3").classList.add("d-none");

          this.businessRouteClient = data;
          
          let select = document.getElementById('selectClient');

          let opt = document.createElement('option');
          opt.value = "";
          opt.innerHTML = "Seleccione la empresa";
          select.appendChild(opt);

          data.list.forEach(el => {
            el.selected = false;
            opt = document.createElement('option');
            opt.value = el.clientId;
            opt.innerHTML = el.name;
            select.appendChild(opt);
          });
        }


      });
  }

  saveBusinessRouteClient = (businesssRouteId)=>{
    const token = LocalStorageHelper.get(TOKEN_KEY);
 
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        }
      };
 
    fetch(window.envVariables.apiUrl + "/v1/BusinessRoute/business/"+businesssRouteId, requestOptions)
        .then(response => response.json())
        .then((data)=>{
          console.log(data)

          if(data.messageCode === 200){
            toast.info(data.messageText, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              className: "fw-bold"
              });

              document.getElementById('clickClose').click();   
          }else {
            toast.error(data.messageText, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              className: "fw-bold"
              });
          }

        });
 
  }

  render() {
    const { businessRoutes, classes } = this.props;
    return (
      <div className={classes.root}>
        <TableCommon
          title="Rutas empresariales"
          columns={[
            { title: "Nombre", field: "name" },
            { title: "Cantidad de cupos", field: "capacity" },
            //  { title: "Personas con reserva", field: "passangerQuantity" },
            { title: "Hora de inicio", field: "startHour" },
            { title: "Hora de fin", field: "endHour" },
            { title: "Origen latitud", field: "origin.latitude" },
            { title: "Origen longitud", field: "origin.longitude" },
            { title: "Destion latitud", field: "destination.latitude" },
            { title: "Destion longitud", field: "destination.longitude" },
          ]}
          items={businessRoutes}
          editable={{
            onRowDelete: this.deleteBusinessRoute,
          }}
          actions={[
            {
              icon: "edit",
              tooltip: "Editar",
              onClick: (event, rowData) =>
                this.editBusinessRoute(event, rowData),
            },
            {
              icon: "cleaning_services",
              tooltip: "Liberar reservas",
              onClick: (event, rowData) =>
                this.confirmRemoveReserves(event, rowData),
            },
          ]}
        />
        <div className={classes.addNew}>
          <Button
            color="primary"
            className = "mb-3"
            variant="contained"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={this.clearModal}
          >
            Agregar
          </Button>
          <div
            className="modal fade modal-dialog-scrollable"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-bs-scroll="true"
            data-bs-backdrop="false"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered mt-2" style={{"maxHeight":"80vh;" }}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5>Rutas Empresariales</h5>
                  <button
                    id="clickClose"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <p id="textoModal">Seleccióne nuevo o existente.</p>

                  <div className="d-flex justify-content-center" >
                    <div className="spinner-grow text-primary d-none" id="loading"  role="status" >
                    </div>
                    <div className="spinner-grow text-primary d-none" id="loading2"  role="status" >
                    </div>
                    <div className="spinner-grow text-primary d-none" id="loading3"  role="status" >
                    </div>
                  </div>



                  <select
                    id="selectClient"
                    className="form-select d-none"
                    aria-label="Default select example"
                    onChange={this.listBusinessRouteByClient}
                  >
                  </select>
                  <div id="routeListClient" ></div>
                 
                </div>
                <hr></hr>
                <div id="selectRoute" className="d-none text-center">
                    <Button
                      color="primary"
                      className="m-2"
                      variant="contained"
                      onClick={this.alerta}
                    >
                      Seleccionar
                    </Button>  
                  </div>
                <div id="buttonRoute" className="text-center">
                  <Button
                    color="primary"
                    className="m-2"
                    variant="contained"
                    onClick={this.newBusinessRoute}
                  >
                    Nuevo
                  </Button>
                  <Button
                    color="primary"
                    className="m-2"
                    variant="contained"
                    onClick={this.HandleShow}
                  >
                    Existente
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.renderDialog()}
      </div>
    );
  }
}

BusinessListComponent.propTypes = {
  businessRoutes: PropTypes.array,
  getBusinessRoutes: PropTypes.func,
  deleteBusinessRoute: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  businessRoutes: state.route.businessRoutes,
});

const mapDispatchToProps = (dispatch) => ({
  getBusinessRoutes: bindActionCreators(
    RouteActions.getBusinessRoutesClient,
    dispatch
  ),
  deleteBusinessRoute: bindActionCreators(
    RouteActions.deleteBusinessRouteById,
    dispatch
  ),
  removeBusinessReserves: bindActionCreators(
    RouteActions.removeBusinessReserves,
    dispatch
  ),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(BusinessListStyles)(BusinessListComponent))
);
