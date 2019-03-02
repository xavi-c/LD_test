/**
 * @jest-environment jsdom
 */
import { docSelector } from './docSelector.js';
const element = document.createElement('div');
element.classList.add('test');
document.querySelector('body').append(element);

test('get correct element using docSelector', () => {
	expect(element).not.toBeNull
});

test('get correct response on check div.test element', () => {
	expect(docSelector('div.test')).toMatchObject(document.querySelector('div.test'));
});

test('throw error if no element is found', () => {
	expect(() => {docSelector('span.test')}).toThrow();
});

const multipleElementOne = document.createElement('p');
multipleElementOne.classList.add('one');
document.querySelector('body').append(multipleElementOne);

const multipleElementTwo = document.createElement('p');
multipleElementTwo.classList.add('two');
document.querySelector('body').append(multipleElementTwo);

test('get correct response on multiple elements', () => {
	expect(docSelector('p', 'all')).toMatchObject(document.querySelectorAll('p'));
});