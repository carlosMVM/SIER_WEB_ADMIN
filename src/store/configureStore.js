import { createStore, compose, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";

// import thunk from "redux-thunk";

// / #if PRODUCTION !== true
import logger from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
// / #endif

import { dispatchProcessMiddleware } from "./configureDispatchMiddleware";
import axios from "./configureAxios";
import rootReducers from "../reducers";
import rootLogics from "../logic";

const isProductionEnvironment = () => process.env.NODE_ENV === "production";

const getLogicMiddleware = () => {
	const logicDependencies = {
		httpClient: axios
	};

	return createLogicMiddleware(rootLogics, logicDependencies);
};

const getMiddleWareConfiguration = (logicMiddleware) => {
	const defaultMiddleWares = [
		logicMiddleware,
		// thunk,
		dispatchProcessMiddleware,
	];

	if (!isProductionEnvironment()) {
		return [
			...defaultMiddleWares,
			// Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
			reduxImmutableStateInvariant(),
			logger,
		];
	}

	return [
		...defaultMiddleWares
	];
};

const getComposeFunction = () => {
	if (!isProductionEnvironment()) {
		return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools;
	}
	return compose;
};

const configureStore = (initialState) => {
	const logicMiddleware = getLogicMiddleware();
	const middlewares = getMiddleWareConfiguration(logicMiddleware);

	const composeFunc = getComposeFunction();

	const store = createStore(
		rootReducers,
		initialState,
		composeFunc(applyMiddleware(...middlewares))
	);

	return store;
};

export default configureStore();
