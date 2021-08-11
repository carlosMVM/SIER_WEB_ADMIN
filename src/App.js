/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { Provider } from "react-redux";

import { es } from "moment/locale/es";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Moment from "react-moment";
import Root from "./Root";
import store from "./store";

import theme from "./theme";
import { FORMAT_MMMM_D_YYYY } from "./constants/dateFormats";

// Set react moment settings
Moment.globalFormat = FORMAT_MMMM_D_YYYY;
Moment.globalElement = "span";
Moment.globalLocale = "es";

// Set local moment language
moment.locale("es");

class App extends Component {
	render() {
		return (
			<MuiPickersUtilsProvider utils={MomentUtils} locale={es}>
				<MuiThemeProvider theme={theme}>
					<Provider store={store}>
						<Root />
					</Provider>
				</MuiThemeProvider>
			</MuiPickersUtilsProvider>
		);
	}
}

export default App;
