import swal from 'sweetalert2';
import { action } from 'webextension-polyfill';
import { levenshtein } from 'edit-distance';
import data from './data.js';

import optionsStorage from './options-storage.js';


async function init() {
	const panik = "https://raw.githubusercontent.com/yoyoismee/PanicRabbit/main/source/panikrabbit.png"
	const calm = "https://raw.githubusercontent.com/yoyoismee/PanicRabbit/main/source/kalmRabbit.png"
	const options = await optionsStorage.getAll();
	console.log(options)

	let x = window.location.toString();
	x = x.replace('http://', '').replace('https://', '').split('/')[0].split('.').slice(-2);
	x = x[0] + '.' + x[1];
	console.log(x);

	var alertImg = ""
	var msg = ""

	/* eslint object-curly-spacing: ["error", "always"] */
	if (options.highRiskSite === 'Panik') {
		for (let s = 0; s < data.highRiskSite.length; s++) {
			if (x.toLocaleLowerCase().includes(data.highRiskSite[s])) {
				alertImg = panik
				msg = 'Elder rabbit have a tale about ' + data.highRiskSite[s] + "(really high risk)"
				break;
			}
		}
	}

	if (options.Reported === 'Panik') {
		for (let r = 0; r < data.reportedSite.length; r++) {
			if (x.toLocaleLowerCase().includes(data.reportedSite[r])) {
				alertImg = calm
				msg = 'Some rabbit talk about the danger of ' + data.reportedSite[r] + "(reported but not confirm)"
				break;
			}
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
	if (options.KindaLookAlike === 'Panik') {
		for (let i = 0; i < data.knownSite.length; i++) {
			temporary = levenshtein(x, data.knownSite[i], insert, remove, update);
			if (temporary.distance <= minDistance) {
				minDistance = temporary.distance;
				similarSite = data.knownSite[i];
			}
		}

		if (minDistance > 0 && minDistance <= 3) {
			alertImg = panik
			msg = 'This sound like another famous place!'
		}
	}

	if (options.Keyword === 'Panik') {
		const elements = document.querySelectorAll('*');
		/* eslint no-labels: ["error", { "allowLoop": true }] */
		/* eslint max-depth: ["error", 6] */
		loop1:
		for (const element of elements) {
			for (let n = 0; n < element.childNodes.length; n++) {
				const node = element.childNodes[n];
				if (node.nodeType === 3) {
					const text = node.nodeValue;
					for (let k = 0; k < data.highRiskKeyword.length; k++) {
						if (text.toLowerCase().includes(data.highRiskKeyword[k].toLowerCase())) {
							alertImg = calm
							msg = 'no!!! how can you say the word - ' + data.highRiskKeyword[k]
							break loop1;
						}
					}
				}
			}
		}
	}
	if (alertImg) {
		swal.fire({
			backdrop: 'rgba(200,100,100,0.4)',
			title: 'Panik!',
			text: msg,
			imageUrl: alertImg,
			imageWidth: 420,
			imageHeight: 420,
			html: '<h3>' + msg + '</h3></><a href="https://forms.gle/WMbf9qAoyvZ2VFMG8/" target="_blank" rel="noopener noreferrer"><h3>Panik!!! - tell the elder rabbit</h3></a>'
		})
	}
}

init();
