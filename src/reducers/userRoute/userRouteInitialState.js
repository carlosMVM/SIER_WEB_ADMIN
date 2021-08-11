import initialState from "../../store/initialState";

const paginationData = {
	totalItems: 0,
	currentPage: 0,
	take: 10,
	items: []
};

const userInitialState = {
	...initialState,
	paginationData
};

export default userInitialState;
