import swal from 'sweetalert';
import {action} from 'webextension-polyfill';
import {levenshtein} from 'edit-distance';
import data from './data.js';

// Import optionsStorage from './options-storage.js';

async function init() {
	console.log(action);
	// Const options = await optionsStorage.getAll();
	const pending = [];

	let x = window.location.toString();

	for (let s = 0; s < data.scamSite.length; s++) {
		if (x.toLocaleLowerCase().includes(data.scamSite[s])) {
			pending.push(swal({
				title: 'Panik!',
				text: data.scamSite[s] + ' is probably a scam',
				icon: 'error',
				dangerMode: true,
				buttons: ['let\'s GTFO', 'YOLO'],
			}));
			break;
		}
	}

	for (let r = 0; r < data.reportedSite.length; r++) {
		if (x.toLocaleLowerCase().includes(data.reportedSite[r])) {
			pending.push(swal({
				title: 'Panik!',
				text: data.reportedSite[r] + ' is reported',
				icon: 'warning',
				dangerMode: true,
				buttons: ['let\'s GTFO', 'YOLO'],
			}));
			break;
		}
	}

	const insert = function () {
		return 1;
	};

	const remove = function () {
		return 1;
	};

	const update = function (stringA, stringB) {
		return stringA === stringB ? 0 : 1;
	};

	let temporary = 999;
	let minDistance = 999;
	let similarSite = '';
	x = x.replace('http://', '').replace('https://', '').split('/')[0].split('.').slice(-2);
	x = x[0] + '.' + x[1];
	console.log(x);
	console.log('---');
	for (let i = 0; i < data.knownSite.length; i++) {
		temporary = levenshtein(x, data.knownSite[i], insert, remove, update);
		console.log(temporary);
		if (temporary.distance <= minDistance) {
			minDistance = temporary.distance;
			similarSite = data.knownSite[i];
		}
	}

	if (minDistance > 0 && minDistance <= 3) {
		pending.push(swal({
			title: 'Panik!',
			text: 'are you looking for ' + similarSite,
			icon: 'info',
			dangerMode: true,
			buttons: ['let\'s GTFO', 'YOLO'],
		}));
	}

	const elements = document.querySelectorAll('*');
	/* eslint no-labels: ["error", { "allowLoop": true }] */
	/* eslint max-depth: ["error", 5] */
	loop1:
	for (const element of elements) {
		for (let n = 0; n < element.childNodes.length; n++) {
			const node = element.childNodes[n];
			if (node.nodeType === 3) {
				const text = node.nodeValue;
				for (let k = 0; k < data.highRiskKeyword.length; k++) {
					if (text.toLowerCase().includes(data.highRiskKeyword[k].toLowerCase())) {
						pending.push(swal({
							title: 'Panik!',
							text: data.highRiskKeyword[k] + ' is scary',
							icon: 'warning',
							dangerMode: true,
							buttons: ['let\'s GTFO', 'YOLO'],
						}));
						break loop1;
					}
				}
			}
		}
	}

	await Promise.all(pending);
}

init();
