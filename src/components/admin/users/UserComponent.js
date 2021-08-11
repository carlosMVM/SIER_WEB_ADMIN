/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Pagination from "material-ui-flat-pagination";
import {
	CssBaseline, withStyles
} from "@material-ui/core";
import { SearchStyles } from "./UserStyles";
import { getTokenPayload } from "../../../helpers/AppHelper";
import * as UserActions from "../../../actions/UserActions";
import UserExpansionComponent from "./UserExpansionComponent";
import SearchInputComponent from "../../common/SearchInputComponent";

class UserComponent extends Component {
	constructor() {
		super();
		this.state = { skip: 0, take: 10 };
	}

	componentDidMount = async () => {
		const { getUsers } = this.props;
		const { clientId } = getTokenPayload();
		const { skip, take } = this.state;
		await getUsers(clientId, skip, take);
	}

	handleChangeOffset = async (offset) => {
		this.setState(state => ({
			...state,
			skip: offset
		}));
		const { take } = this.state;
		const { getUsers } = this.props;
		const { clientId } = getTokenPayload();
		await getUsers(clientId, offset, take);
	}

	filterByName = async (e) => {
		const { target } = e;
		const { getUsers } = this.props;
		const { clientId } = getTokenPayload();
		const { take } = this.state;
		await getUsers(clientId, 0, take, target.value);
	}

	render() {
		const { paginationData } = this.props;
		const { skip, take } = this.state;

		return (
			<div>
				<CssBaseline />
				<SearchInputComponent filterBy={this.filterByName} />
				{
					paginationData.items && paginationData.items.length > 0 ? paginationData.items.map(user => (
						<UserExpansionComponent user={user} key={user.userId} />
					)) : null
				}
				<Pagination
					limit={take}
					offset={skip}
					total={paginationData.totalItems}
					onClick={(_, off) => this.handleChangeOffset(off)}
				/>
			</div>
		);
	}
}

UserComponent.propTypes = {
	getUsers: PropTypes.func,
	paginationData: PropTypes.object,
};

const mapStateToProps = state => ({
	paginationData: state.user.paginationData
});

const mapDispatchToProps = dispatch => ({
	getUsers: bindActionCreators(UserActions.getUsersByClient, dispatch)
});

export default withStyles(SearchStyles)(connect(mapStateToProps, mapDispatchToProps)(UserComponent));
