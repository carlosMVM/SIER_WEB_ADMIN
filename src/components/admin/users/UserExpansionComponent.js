/* eslint-disable react/jsx-indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
import React, { Component } from "react";
import {
	ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, ExpansionPanelActions, Button, Divider, Tabs, Tab, withStyles, Avatar
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../../actions/UserActions";
import TabPanel from "../../common/TabPanelComponent";
import { TabsStyles } from "./UserStyles";
import UserSecurityFormComponent from "./UserSecurityFormComponent";
import UserBasicInfoFormComponent from "./UserBasicInfoFormComponent";
import { convertToDate } from "../../../helpers/DateHelper";

class UserExpansionComponent extends Component {
    userSchema = Yup.object().shape({
    	username: Yup.string().email().required(),
    	displayName: Yup.string().required(),
    	userId: Yup.string(),
    	workDaysByWeek: Yup.string().required(),
    	birthdate: Yup.date().required(),
    	phoneNumber: Yup.number().required(),
    	address: Yup.string().required(),
    	isOperator: Yup.bool().required(),
    	gender: Yup.string().required(),
    	settingInfo: Yup.object({
    		settingId: Yup.string(),
    		isDeleted: Yup.bool().required(),
    		isAuthorized: Yup.bool().required(),
    		createdDate: Yup.string()
    	})
    });

    constructor() {
    	super();
    	this.state = {
    		tabValue: 0
    	};
    }

    tabChange = (event, newValue) => {
    	this.setState({
    		tabValue: newValue
    	});
    }

    updateUser = (values) => {
    	const { updateUser } = this.props;
    	const userInfo = {
    		...values
    	};
    	updateUser(values.userId, userInfo);
    }

    render() {
    	const { tabValue } = this.state;
    	const { classes, user } = this.props;
    	const initUserValues = {
    		...user,
    		birthdate: convertToDate(user.birthdate),
    		settingInfo: {
    			...user.settingInfo,
    			createdDate: convertToDate(user.settingInfo.createdDate)
    		}
    	};
    	return (
    		<Formik initialValues={{ ...initUserValues }} validationSchema={this.userSchema} onSubmit={this.updateUser} enableReinitialize>
    			{
    				props => (
    					<ExpansionPanel>
    						<ExpansionPanelSummary
    							expandIcon={<ExpandMore />}
    						>
    							<Avatar>{user.displayName.toUpperCase().charAt(0)}</Avatar>
    							<Typography className={classes.name}>{user.displayName}</Typography>
    						</ExpansionPanelSummary>
    						<ExpansionPanelDetails>
    							<div className={classes.root}>
    								<Tabs
    									indicatorColor="primary"
    									textColor="primary"
    									value={tabValue}
    									onChange={this.tabChange}
    									aria-label="simple tabs example"
    								>
    									<Tab label="Información básica" />
    									<Tab label="Seguridad" />
    								</Tabs>
    								<Form>
    									<TabPanel value={tabValue} index={0}>
    										<UserBasicInfoFormComponent formProps={props} />
    									</TabPanel>
    									<TabPanel value={tabValue} index={1}>
    										<UserSecurityFormComponent formProps={props} />
    									</TabPanel>
    								</Form>
    							</div>
    						</ExpansionPanelDetails>
    						<Divider />
    						<ExpansionPanelActions>
    							<Button onClick={props.handleSubmit}>
                                    Actualizar
    							</Button>
    						</ExpansionPanelActions>
    					</ExpansionPanel>
    				)
    			}
    		</Formik>
    	);
    }
}

UserExpansionComponent.propTypes = {
	classes: PropTypes.object,
	user: PropTypes.object.isRequired,
	updateUser: PropTypes.func
};


const mapStateToProps = state => ({
	isLoading: state.user.isLoading
});

const mapDispatchToProps = dispatch => ({
	updateUser: bindActionCreators(UserActions.updateUser, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(TabsStyles)(UserExpansionComponent));
