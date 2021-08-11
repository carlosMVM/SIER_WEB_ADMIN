const typeResolvers = {};
let currentStore;

export const dispatchProcessMiddleware = (store) => {
	currentStore = store;
	return next => (action) => {
		const resolvers = typeResolvers[action.type];
		if (resolvers && resolvers.length > 0) {
			resolvers.forEach(resolve => resolve());
		}
		next(action);
	};
};

export function dispatchProcess(requestAction, successActionType, failureActionType = undefined) {
	if (!currentStore) {
		throw new Error("dispatchProcess middleware must be registered");
	}

	if (!successActionType) {
		throw new Error("At least one action to resolve process is required");
	}

	const promise = new Promise((resolve, reject) => {
		typeResolvers[successActionType] = typeResolvers[successActionType] || [];
		typeResolvers[successActionType].push(resolve);
		if (failureActionType) {
			typeResolvers[failureActionType] = typeResolvers[failureActionType] || [];
			typeResolvers[failureActionType].push(reject);
		}
	});

	currentStore.dispatch(requestAction);

	return promise;
}
