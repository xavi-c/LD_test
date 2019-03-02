import { docSelector } from './docSelector.js';
import { useResultAsset } from './useResultAsset.js';

document.addEventListener('DOMContentLoaded', () => {
	let elementsToMove = docSelector('div#slider_wrapper, div.both-motos', 'all');
	let sliderIndicator = docSelector('div.slider-indicator');
	let fillElement = docSelector('div.fill');
	let imgLaunch = docSelector('img#launch');
	let buttonNext = docSelector('button.next');
	let buttonPrev = docSelector('button.prev');
	let tripP = docSelector('p.trip');

	buttonNext.addEventListener('click', () => {
		for (let i = 0; i < elementsToMove.length; i++) {
			const element = elementsToMove[i];
			element.style.marginLeft = '-100%';
		}
		fillElement.style.marginLeft = '50%';
		sliderIndicator.classList.add('explore');
		sliderIndicator.classList.remove('visa');
	});
	buttonPrev.addEventListener('click', () => {
		for (let i = 0; i < elementsToMove.length; i++) {
			const element = elementsToMove[i];
			element.style.marginLeft = '0%';
		}
		fillElement.style.marginLeft = '0%';
		sliderIndicator.classList.add('visa');
		sliderIndicator.classList.remove('explore');
	});
	tripP.addEventListener('click', () => {
		imgLaunch.style.marginTop = '-8rem';
	});

	let xhr = new XMLHttpRequest();
	xhr.open('GET', './js/slider.json');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = () => {
		if (xhr.status == 200) {
			let data = JSON.parse(xhr.response);
			let bgImage = String(data.dataImages[0].bgImage);
			let logo = String(data.dataImages[0].logo);
			let iconTrip = String(data.dataImages[0].iconTrip);
			let imageRocket = String(data.dataImages[0].imageRocket);
			let subTitle = String(data.dataImages[0].subtitle);
			let hash = String(data.dataImages[0].hash);
			let linkprev = String(data.dataImages[0].linkprev);
			let linknext = String(data.dataImages[0].linknext);
			let easeView = String(data.dataImages[0].easeView);
			let rocks = String(data.dataImages[0].rocks);

			useResultAsset('img#logo', 'img', logo)
				.then(function() {
					return useResultAsset('p.visa', null, null, 2000);
				})
				.then(function() {
					return useResultAsset('div.visa-to-the-moon', 'bgImg', bgImage, 2000);
				})
				.then(function() {
					return useResultAsset('div.commonSlides div.sub-slide-1', 'bgImg', rocks, 2000);
				})
				.then(function() {
					return useResultAsset('div.faded-green');
				})
				.then(function() {
					return useResultAsset('img#launch', 'img', iconTrip, 800);
				})
				.then(function() {
					return useResultAsset('p.trip', 'text', subTitle);
				})
				.then(function() {
					return useResultAsset('p.hashes', 'text', hash);
				})
				.then(function() {
					return useResultAsset('div.sub-slide-4 div.inner-content', 'bgImg', imageRocket);
				})
				.then(function() {
					return useResultAsset('div.slider-indicator');
				})
				.then(function() {
					return useResultAsset('button.prev', 'text', linkprev, 500);
				})
				.then(function() {
					return useResultAsset('button.view-ease', 'text', easeView, 500);
				})
				.then(function() {
					return useResultAsset('button.next', 'text', linknext, 500);
				})
				.then(function() {
					return useResultAsset('div.startButton', null, null, 2000);
				});
		}
	};
	xhr.send();
});
