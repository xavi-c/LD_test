/*
 * @jest-environment jsdom
 */
//import '../index.html';
import '../js/main.js';
const element = document.createElement('div');
element.classList.add('both-motos');
document.querySelector('body').append(element);

test('check buttonNext is moving', () => {
	expect.assertions(1);
	const buttonNext = document.createElement('button');
	buttonNext.classList.add('next');
	document.querySelector('body').append(buttonNext);
	return buttonNext.click().then(() => {
		expect(document.querySelector('div.both-motos').style.marginLeft).toBe('-100%');
	});
});
