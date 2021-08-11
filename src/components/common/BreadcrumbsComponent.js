/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from "react";
import { MemoryRouter, Route } from "react-router";
import { Breadcrumbs, Typography } from "@material-ui/core";

class BreadcrumbsComponent extends Component {
    breadcrumbNameMap = {
    	"/admin/configs/awards": "Premios",
    	"/admin/offices": "Oficinas",
    	"/admin/configs/scores": "Puntos",
    	"/admin/business-routes": "Ruta empresarial",
    	"/admin/reports/involvement": "Participación",
    	"/admin/reports/travels": "Viajes",
    	"/admin/reports/indicators": "Indicadores",
    };

    render() {
    	return (
    		<MemoryRouter>
    			<Route>
    				{({ location }) => {
    					const pathnames = location.pathname.split("/").filter(x => x);
    					return (
    						<Breadcrumbs aria-label="breadcrumb">
    							{pathnames.map((value, index) => {
    								const last = index === pathnames.length - 1;
    								const to = `/${pathnames.slice(0, index + 1).join("/")}`;

    								return last ? (
    									<Typography color="textPrimary" key={to}>
    										{this.breadcrumbNameMap[to]}
    									</Typography>
    								) : (
    									<div color="inherit" to={to} key={to}>
    										{this.breadcrumbNameMap[to]}
    									</div>
    								);
    							})}
    						</Breadcrumbs>
    					);
    				}}
    			</Route>
    		</MemoryRouter>
    	);
    }
}

export default BreadcrumbsComponent;
