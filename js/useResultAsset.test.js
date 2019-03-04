/*
 * @jest-environment jsdom
 */
import { useResultAsset } from './useResultAsset.js';

test('inserted image has corresponding url', () => {
	expect.assertions(3);
	const element = document.createElement('img');
	element.classList.add('test');
	document.querySelector('body').append(element);
	return useResultAsset('img.test', 'img', 'testUrl', 200).then(() => {
		expect(element).not.toBe(null);
		expect(document.querySelector('img.test').getAttribute('src')).toBe('testUrl');
		expect(document.querySelector('img.test').style.opacity).toBe('1');
	});
});

test('background image has corresponding url', () => {
	expect.assertions(3);
	const divElement = document.createElement('div');
	divElement.classList.add('bgTest');
	document.querySelector('body').append(divElement);
	return useResultAsset('div.bgTest', 'bgImg', 'testBgUrl', 200).then(() => {
		expect(divElement).not.toBe(null);
		expect(document.querySelector('div.bgTest').style.backgroundImage).toBe('url(/testBgUrl)');
		expect(document.querySelector('div.bgTest').style.opacity).toBe('1');
	});
});

test('text included is present in element', () => {
	expect.assertions(3);
	const textElement = document.createElement('p');
	textElement.classList.add('test');
	document.querySelector('body').append(textElement);
	return useResultAsset('p.test', 'text', 'this is a test text', 200).then(() => {
		expect(textElement).not.toBe(null);
		expect(document.querySelector('p.test').textContent).toBe('this is a test text');
		expect(document.querySelector('p.test').style.opacity).toBe('1');
	});
});
