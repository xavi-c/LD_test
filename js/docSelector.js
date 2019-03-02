export const docSelector = (element, all) => {
	let res;
	if (!all) {
		res = document.querySelector(element);
	} else {
		res = document.querySelectorAll(element);
	}
	if (res == null) {
		throw 'error: 0 elements found for element: ' + element;
	} else {
		return res;
	}
};
