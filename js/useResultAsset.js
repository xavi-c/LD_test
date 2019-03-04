import { docSelector } from './docSelector.js';
export const useResultAsset = (element, typeOfElement, arg, timeout) => {
	if (typeof timeout == 'undefined') {
		timeout = 1000;
	}
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('loading: ' + element);
			if (typeOfElement == 'img') {
				docSelector(element).src = arg;
				if (element == 'img#logo') {
					docSelector(element).style.animation = 'rotation 10s linear infinite';
				} else if (element == 'img#launch') {
					docSelector(element).style.marginTop = 0;
				}
			} else if (typeOfElement == 'bgImg') {
				docSelector(element).style.backgroundImage = 'url(/' + arg + ')';
			} else if (typeOfElement == 'text') {
				let localArg;
				if (timeout <= 1000) {
					localArg = arg;
				} else {
					console.log('using alt system...');
					localArg = arg;
				}
				docSelector(element).textContent = localArg;
				docSelector(element).style.animation = 'flash 2s linear';
			}
			docSelector(element).style.opacity = 1;
			resolve(true);
		}, timeout);
	});
};
