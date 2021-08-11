/* eslint-disable no-shadow */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { Fade } from "@material-ui/core";
import { isAuthenticated } from "../../helpers/AppHelper";
import * as routes from "../../constants/routes";

class AuthComponent extends Component {
	constructor() {
		super();
		const hasTokenExpired = isAuthenticated();
		this.state = {
			isAuth: hasTokenExpired
		};
	}

	render() {
		const { isAuth } = this.state;
		const { path } = this.props;

		let componentReturn = (<Redirect to={routes.PATH_LOGIN} />);

		if (isAuth !== null && isAuth === true) {
			const { component: Component } = this.props;
			componentReturn = (<Route path={path} render={prop => (<Fade><Component {...prop} /></Fade>)} />);
		}

		return componentReturn;
	}
}

const mapStateToProps = state => ({
	auth: state.login.auth,
});

export default connect(mapStateToProps)(AuthComponent);
