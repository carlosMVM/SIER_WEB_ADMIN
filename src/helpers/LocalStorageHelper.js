/* eslint-disable class-methods-use-this */

class LocalStorageHelper {
	add(key, item) {
		localStorage.setItem(key, JSON.stringify(item));
	}

	get(key) {
		return JSON.parse(localStorage.getItem(key));
	}

	remove(key) {
		localStorage.removeItem(key);
	}

	removeAll() {
		localStorage.clear();
	}
}

export default new LocalStorageHelper();
