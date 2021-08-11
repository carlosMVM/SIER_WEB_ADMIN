import React, { Component } from "react";
import {
	BrowserRouter as Router, Route, Redirect, Switch
} from "react-router-dom";

import * as routes from "./constants/routes";

// Account
import ResetPasswordPage from "./pages/account/ResetPasswordPage";
import VerificationPage from "./pages/account/VerificationPage";
import LoginPage from "./pages/account/LoginPage";

// Offices
import OfficeListPage from "./pages/admin/offices/OfficeListPage";
import OfficeNewPage from "./pages/admin/offices/OfficeNewPage";
import OfficeEditPage from "./pages/admin/offices/OfficeEditPage";

// Business route
import BusinessListPage from "./pages/admin/business/BusinessListPage";
import BusinessNewPage from "./pages/admin/business/BusinessNewPage";
import BusinessEditPage from "./pages/admin/business/BusinessEditPage";

// Areas
import AreaPage from "./pages/admin/areas/AreaPage";

// Dashboard
import DashboardPage from "./pages/admin/dashboard/DashboardPage";

// Reports
import InvolvementPage from "./pages/admin/reports/InvolvementPage";
import IndicatorPage from "./pages/admin/reports/IndicatorPage";
import ReportsTravelPage from "./pages/admin/reports/TravelPage";

// Travels
import TravelPage from "./pages/admin/travels/TravelPage";

// Client configurations

// Awards
import AwardPage from "./pages/admin/configurations/awards/AwardPage";

// Users
import UserPage from "./pages/admin/users/UserPage";

// Scores
import ScorePage from "./pages/admin/configurations/score/ScorePage";

// Campaigns
import CampaignPage from "./pages/admin/configurations/campaigns/CampaignPage";

// Schedule
import SchedulePage from "./pages/admin/configurations/schedule/SchedulePage";

// General
import GeneralConfigurationsPage from "./pages/admin/configurations/general/GeneralConfigurationsPage";
import AuthComponent from "./components/common/AuthComponent";

class Root extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path={routes.PATH_RESET_PASSWORD} component={ResetPasswordPage} />
					<Route path={routes.PATH_LOGIN} component={LoginPage} />
					<Route path={routes.PATH_VERIFICATION_ACCOUNT} component={VerificationPage} />

					<AuthComponent path={routes.PATH_DASHBOARD} component={DashboardPage} />
					<AuthComponent path={routes.PATH_CLIENT_AWARDS} component={AwardPage} />
					<AuthComponent path={routes.PATH_CLIENT_SCORE} component={ScorePage} />

					<AuthComponent path={routes.PATH_CLIENT_OFFICE_NEW} component={OfficeNewPage} />
					<AuthComponent path={`${routes.PATH_CLIENT_OFFICE_EDIT}/:id`} component={OfficeEditPage} />
					<AuthComponent path={routes.PATH_CLIENT_OFFICE} component={OfficeListPage} />

					<AuthComponent path={routes.PATH_USERS} component={UserPage} />

					<AuthComponent path={`${routes.PATH_CLIENT_BUSINESS_EDIT}/:id`} component={BusinessEditPage} />
					<AuthComponent path={routes.PATH_CLIENT_BUSINESS_NEW} component={BusinessNewPage} />
					<AuthComponent path={routes.PATH_CLIENT_BUSINESS} component={BusinessListPage} />

					<AuthComponent path={routes.PATH_REPORTS_INVOLVEMENT} component={InvolvementPage} />
					<AuthComponent path={routes.PATH_REPORTS_INDICATORS} component={IndicatorPage} />
					<AuthComponent path={routes.PATH_REPORTS_TRAVALES} component={ReportsTravelPage} />

					<AuthComponent path={routes.PATH_TRAVELS} component={TravelPage} />
					<AuthComponent path={routes.PATH_CLIENT_AREAS} component={AreaPage} />
					<AuthComponent path={routes.PATH_CLIENT_CAMPAINGS} component={CampaignPage} />
					<AuthComponent path={routes.PATH_CLIENT_SCHEDULE} component={SchedulePage} />
					<AuthComponent path={routes.PATH_CLIENT_GENERAL} component={GeneralConfigurationsPage} />

					<Redirect to={routes.PATH_LOGIN} />
				</Switch>
			</Router>
		);
	}
}

export default Root;
