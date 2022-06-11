(() => {
	function $parcel$interopDefault(a) {
		return a && a.__esModule ? a.default : a;
	}

	const $parcel$global = typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {}); const $parcel$modules = {}; const $parcel$inits = {}; let
		parcelRequire = $parcel$global.parcelRequire94c2;
	parcelRequire == null && ((parcelRequire = function (id) {
		if (id in $parcel$modules) {
			return $parcel$modules[id].exports;
		}

		if (id in $parcel$inits) {
			const init = $parcel$inits[id];
			delete $parcel$inits[id];
			const module = {
				id,
				exports: {},
			};
			return $parcel$modules[id] = module, init.call(module.exports, module, module.exports),
			module.exports;
		}

		const error = new Error('Cannot find module \'' + id + '\'');
		throw error.code = 'MODULE_NOT_FOUND', error;
	}).register = function (id, init) {
		$parcel$inits[id] = init;
	}, $parcel$global.parcelRequire94c2 = parcelRequire);
	const $72EZI = parcelRequire('72EZI');
	parcelRequire('2Oxwr'), parcelRequire('czEnW'), (async function () {
		await $parcel$interopDefault($72EZI)({
			title: 'Panik!',
			text: 'are you looking for ' + similarSite,
			icon: 'info',
			dangerMode: !0,
			buttons: ['let\'s GTFO', 'YOLO'],
		});
	})();
})();
