/**
 * @jest-environment jsdom
 */
import { useResultAsset } from './useResultAsset.js';

test('inserted image has corresponding url', () => {
    const element = document.createElement('img');
    element.classList.add('test');
    document.querySelector('body').append(element);
    useResultAsset('img.test', 'img', 'testUrl', 0);
    setTimeout(() => {
        expect(document.querySelector('img.test').getAttribute('src')).toBe('testUrl');
    },500);
});

test('background image has corresponding url', () => {
    const divElement = document.createElement('div');
    divElement.classList.add('bgTest');
    document.querySelector('body').append(divElement);
    useResultAsset('div.bgTest', 'bgImg', 'testBgUrl', 0);
    setTimeout(() => {
        expect(document.querySelector('div.bgTest').style.backgroundImage).toBe('testBgUrl');
    },500);
});

test('test included is present in element', () => {
    const textElement = document.createElement('p');
    textElement.classList.add('test');
    document.querySelector('body').append(textElement);
    useResultAsset('p.test', 'text', 'this is a test text', 0);
    setTimeout(() => {
        expect(document.querySelector('p.test').textContent).toBe('this is a test text');
    },500);
});