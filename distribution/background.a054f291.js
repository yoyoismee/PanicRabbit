(() => {
	const $f046e78e22aef39d$var$cache = !0;
	function $f046e78e22aef39d$var$isCurrentPathname(path) {
		if (!path) {
			return !1;
		}

		try {
			const {pathname} = new URL(path, location.origin);
			return pathname === location.pathname;
		} catch {
			return !1;
		}
	}

	function $f046e78e22aef39d$var$getManifest(_version) {
		return globalThis.chrome?.runtime?.getManifest?.();
	}

	function $f046e78e22aef39d$var$once(function_) {
		let result;
		return () => ($f046e78e22aef39d$var$cache && void 0 !== result || (result = function_()),
		result);
	}

	const $f046e78e22aef39d$export$e7c4a1c4ed7f09ac = $f046e78e22aef39d$var$once((() => globalThis.location?.protocol.startsWith('http'))); const $f046e78e22aef39d$export$1291dbea3b2eb4e1 = $f046e78e22aef39d$var$once((() => typeof globalThis.chrome?.extension === 'object')); const $f046e78e22aef39d$export$d0790c2ac1fc6894 = ($f046e78e22aef39d$var$once((() => $f046e78e22aef39d$export$1291dbea3b2eb4e1() && $f046e78e22aef39d$export$e7c4a1c4ed7f09ac())),
	() => $f046e78e22aef39d$export$ede7a9f5470a0118() || $f046e78e22aef39d$export$933c8adc355f9a14()); const $f046e78e22aef39d$export$ede7a9f5470a0118 = $f046e78e22aef39d$var$once((() => {
		const manifest = $f046e78e22aef39d$var$getManifest();
		return !(!manifest || !$f046e78e22aef39d$var$isCurrentPathname(manifest.background_page || manifest.background?.page)) || Boolean(manifest?.background?.scripts && $f046e78e22aef39d$var$isCurrentPathname('/_generated_background_page.html'));
	})); const
		$f046e78e22aef39d$export$933c8adc355f9a14 = $f046e78e22aef39d$var$once((() => $f046e78e22aef39d$var$isCurrentPathname($f046e78e22aef39d$var$getManifest()?.background?.service_worker)));
	$f046e78e22aef39d$var$once((() => {
		if (!$f046e78e22aef39d$export$1291dbea3b2eb4e1() || !chrome.runtime.getManifest) {
			return !1;
		}

		const {options_ui: optionsUi} = chrome.runtime.getManifest();
		if (typeof optionsUi?.page !== 'string') {
			return !1;
		}

		return new URL(optionsUi.page, location.origin).pathname === location.pathname;
	})), $f046e78e22aef39d$var$once((() => {
		if (!$f046e78e22aef39d$export$1291dbea3b2eb4e1() || !chrome.devtools) {
			return !1;
		}

		const {devtools_page: devtoolsPage} = chrome.runtime.getManifest();
		if (typeof devtoolsPage !== 'string') {
			return !1;
		}

		return new URL(devtoolsPage, location.origin).pathname === location.pathname;
	}));
	function $b80fd2360d77010c$var$throttle(delay, noTrailing, callback, debounceMode) {
		let timeoutID; let cancelled = !1; let
			lastExec = 0;
		function clearExistingTimeout() {
			timeoutID && clearTimeout(timeoutID);
		}

		function wrapper() {
			for (var _length = arguments.length, arguments_ = new Array(_length), _key = 0; _key < _length; _key++) {
				arguments_[_key] = arguments[_key];
			}

			const self = this; const
				elapsed = Date.now() - lastExec;
			function exec() {
				lastExec = Date.now(), callback.apply(self, arguments_);
			}

			function clear() {
				timeoutID = void 0;
			}

			cancelled || (debounceMode && !timeoutID && exec(), clearExistingTimeout(), void 0 === debounceMode && elapsed > delay ? exec() : !0 !== noTrailing && (timeoutID = setTimeout(debounceMode ? clear : exec, void 0 === debounceMode ? delay - elapsed : delay)));
		}

		return typeof noTrailing !== 'boolean' && (debounceMode = callback, callback = noTrailing,
		noTrailing = void 0), wrapper.cancel = function () {
			clearExistingTimeout(), cancelled = !0;
		}, wrapper;
	}

	class $b80fd2360d77010c$var$TypeRegistry {
		constructor(initial = {}) {
			this.registeredTypes = initial;
		}

		get(type) {
			return void 0 !== this.registeredTypes[type] ? this.registeredTypes[type] : this.registeredTypes.default;
		}

		register(type, item) {
			void 0 === this.registeredTypes[type] && (this.registeredTypes[type] = item);
		}

		registerDefault(item) {
			this.register('default', item);
		}
	}
	class $b80fd2360d77010c$var$KeyExtractors extends $b80fd2360d77010c$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault((element => element.getAttribute('name') || ''));
		}
	}
	class $b80fd2360d77010c$var$InputReaders extends $b80fd2360d77010c$var$TypeRegistry {
		constructor(options1) {
			super(options1), this.registerDefault((element => element.value)), this.register('checkbox', (element => element.getAttribute('value') !== null ? (element.checked ? element.getAttribute('value') : null) : element.checked)),
			this.register('select', (element => (function (element_) {
				let value; let option; let i; const options = element_.options; const index = element_.selectedIndex; const one = element_.type === 'select-one';
				const values = one ? null : [];
				const max = one ? index + 1 : options.length;
				for (i = index < 0 ? max : (one ? index : 0); i < max; i++) {
					if (((option = options[i]).selected || i === index) && !option.disabled && (!option.parentNode.disabled || option.parentNode.tagName.toLowerCase() !== 'optgroup')) {
						if (value = option.value, one) {
							return value;
						}

						values.push(value);
					}
				}

				return values;
			})(element)));
		}
	}
	class $b80fd2360d77010c$var$KeyAssignmentValidators extends $b80fd2360d77010c$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault((() => !0)), this.register('radio', (element => element.checked));
		}
	}
	function $b80fd2360d77010c$var$keySplitter(key) {
		let lastKey; const
			matches = key.match(/[^[\]]+/g);
		return key.length > 1 && key.indexOf('[]') === key.length - 2 && (lastKey = matches.pop(),
		matches.push([lastKey])), matches;
	}

	function $b80fd2360d77010c$var$getElementType(element) {
		let typeAttr; const tagName = element.tagName; let
			type = tagName;
		return tagName.toLowerCase() === 'input' && (typeAttr = element.getAttribute('type'),
		type = typeAttr || 'text'), type.toLowerCase();
	}

	function $b80fd2360d77010c$var$getInputElements(element, options) {
		return Array.prototype.filter.call(element.querySelectorAll('input,select,textarea'), (element_ => {
			if (element_.tagName.toLowerCase() === 'input' && (element_.type === 'submit' || element_.type === 'reset')) {
				return !1;
			}

			const myType = $b80fd2360d77010c$var$getElementType(element_); const identifier = options.keyExtractors.get(myType)(element_); const foundInInclude = (options.include || []).includes(identifier); const foundInExclude = (options.exclude || []).includes(identifier); let foundInIgnored = !1; let
				reject = !1;
			if (options.ignoredTypes) {
				for (const selector of options.ignoredTypes) {
					element_.matches(selector) && (foundInIgnored = !0);
				}
			}

			return reject = !foundInInclude && (Boolean(options.include) || foundInExclude || foundInIgnored),
			!reject;
		}));
	}

	function $b80fd2360d77010c$var$assignKeyValue(object, keychain, value) {
		if (!keychain) {
			return object;
		}

		const key = keychain.shift();
		return object[key] || (object[key] = Array.isArray(key) ? [] : {}), keychain.length === 0 && (Array.isArray(object[key]) ? value !== null && object[key].push(value) : object[key] = value),
		keychain.length > 0 && $b80fd2360d77010c$var$assignKeyValue(object[key], keychain, value),
		object;
	}

	function $b80fd2360d77010c$var$serialize(element, options = {}) {
		let data = {};
		return options.keySplitter = options.keySplitter || $b80fd2360d77010c$var$keySplitter,
		options.keyExtractors = new $b80fd2360d77010c$var$KeyExtractors(options.keyExtractors || {}),
		options.inputReaders = new $b80fd2360d77010c$var$InputReaders(options.inputReaders || {}),
		options.keyAssignmentValidators = new $b80fd2360d77010c$var$KeyAssignmentValidators(options.keyAssignmentValidators || {}),
		Array.prototype.forEach.call($b80fd2360d77010c$var$getInputElements(element, options), (element_ => {
			const type = $b80fd2360d77010c$var$getElementType(element_); const key = options.keyExtractors.get(type)(element_); const
				value = options.inputReaders.get(type)(element_);
			if (options.keyAssignmentValidators.get(type)(element_, key, value)) {
				const keychain = options.keySplitter(key);
				data = $b80fd2360d77010c$var$assignKeyValue(data, keychain, value);
			}
		})), data;
	}

	class $b80fd2360d77010c$var$InputWriters extends $b80fd2360d77010c$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault(((element, value) => {
				element.value = value;
			})), this.register('checkbox', ((element, value) => {
				value === null ? element.indeterminate = !0 : element.checked = Array.isArray(value) ? value.includes(element.value) : value;
			})), this.register('radio', ((element, value) => {
				void 0 !== value && (element.checked = element.value === value.toString());
			})), this.register('select', $b80fd2360d77010c$var$setSelectValue);
		}
	}
	function $b80fd2360d77010c$var$setSelectValue(element, value) {
		for (var optionSet, option, array, returnValue, options = element.options, values = (returnValue = [],
			(array = value) !== null && (Array.isArray(array) ? returnValue.push.apply(returnValue, array) : returnValue.push(array)),
			returnValue), i = options.length; i--;) {
			option = options[i], values.includes(option.value) && (option.setAttribute('selected', !0),
			optionSet = !0);
		}

		optionSet || (element.selectedIndex = -1);
	}

	function $b80fd2360d77010c$var$keyJoiner(parentKey, childKey) {
		return parentKey + '[' + childKey + ']';
	}

	function $b80fd2360d77010c$var$flattenData(data, parentKey, options = {}) {
		const flatData = {}; const
			keyJoiner$1 = options.keyJoiner || $b80fd2360d77010c$var$keyJoiner;
		for (let keyName in data) {
			if (!data.hasOwnProperty(keyName)) {
				continue;
			}

			const value = data[keyName]; let
				hash = {};
			parentKey && (keyName = keyJoiner$1(parentKey, keyName)), Array.isArray(value) ? (hash[keyName + '[]'] = value,
			hash[keyName] = value) : (typeof value === 'object' ? hash = $b80fd2360d77010c$var$flattenData(value, keyName, options) : hash[keyName] = value),
			Object.assign(flatData, hash);
		}

		return flatData;
	}

	function $b80fd2360d77010c$var$deserialize(form, data, options = {}) {
		const flattenedData = $b80fd2360d77010c$var$flattenData(data, null, options);
		options.keyExtractors = new $b80fd2360d77010c$var$KeyExtractors(options.keyExtractors || {}),
		options.inputWriters = new $b80fd2360d77010c$var$InputWriters(options.inputWriters || {}),
		Array.prototype.forEach.call($b80fd2360d77010c$var$getInputElements(form, options), (element => {
			const type = $b80fd2360d77010c$var$getElementType(element); const
				key = options.keyExtractors.get(type)(element);
			options.inputWriters.get(type)(element, flattenedData[key]);
		}));
	}

	let $b80fd2360d77010c$var$module; let $b80fd2360d77010c$var$LZString; const
		$b80fd2360d77010c$var$lzString = {
			exports: {},
		};
	$b80fd2360d77010c$var$module = $b80fd2360d77010c$var$lzString, $b80fd2360d77010c$var$LZString = (function () {
		const f = String.fromCharCode; const keyStringBase64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; const keyStringUriSafe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'; const
			baseReverseDic = {};
		function getBaseValue(alphabet, character) {
			if (!baseReverseDic[alphabet]) {
				baseReverseDic[alphabet] = {};
				for (let i = 0; i < alphabet.length; i++) {
					baseReverseDic[alphabet][alphabet.charAt(i)] = i;
				}
			}

			return baseReverseDic[alphabet][character];
		}

		var LZString = {
			compressToBase64(input) {
				if (input == null) {
					return '';
				}

				const res = LZString._compress(input, 6, (a => keyStringBase64.charAt(a)));
				switch (res.length % 4) {
					default:
					case 0:
						return res;

					case 1:
						return res + '===';

					case 2:
						return res + '==';

					case 3:
						return res + '=';
				}
			},
			decompressFromBase64(input) {
				return input == null ? '' : (input == '' ? null : LZString._decompress(input.length, 32, (index => getBaseValue(keyStringBase64, input.charAt(index)))));
			},
			compressToUTF16(input) {
				return input == null ? '' : LZString._compress(input, 15, (a => f(a + 32))) + ' ';
			},
			decompressFromUTF16(compressed) {
				return compressed == null ? '' : (compressed == '' ? null : LZString._decompress(compressed.length, 16_384, (index => compressed.charCodeAt(index) - 32)));
			},
			compressToUint8Array(uncompressed) {
				for (var compressed = LZString.compress(uncompressed), buf = new Uint8Array(2 * compressed.length), i = 0, TotalLength = compressed.length; i < TotalLength; i++) {
					const current_value = compressed.charCodeAt(i);
					buf[2 * i] = current_value >>> 8, buf[2 * i + 1] = current_value % 256;
				}

				return buf;
			},
			decompressFromUint8Array(compressed) {
				if (compressed == null) {
					return LZString.decompress(compressed);
				}

				for (var buf = Array.from({length: compressed.length / 2}), i = 0, TotalLength = buf.length; i < TotalLength; i++) {
					buf[i] = 256 * compressed[2 * i] + compressed[2 * i + 1];
				}

				const result = [];
				return buf.forEach((c => {
					result.push(f(c));
				})), LZString.decompress(result.join(''));
			},
			compressToEncodedURIComponent(input) {
				return input == null ? '' : LZString._compress(input, 6, (a => keyStringUriSafe.charAt(a)));
			},
			decompressFromEncodedURIComponent(input) {
				return input == null ? '' : (input == '' ? null : (input = input.replace(/ /g, '+'),
				LZString._decompress(input.length, 32, (index => getBaseValue(keyStringUriSafe, input.charAt(index))))));
			},
			compress(uncompressed) {
				return LZString._compress(uncompressed, 16, (a => f(a)));
			},
			_compress(uncompressed, bitsPerChar, getCharFromInt) {
				if (uncompressed == null) {
					return '';
				}

				let i; let value; let ii; const context_dictionary = {}; const context_dictionaryToCreate = {}; let context_c = ''; let context_wc = ''; let context_w = ''; let context_enlargeIn = 2; let context_dictSize = 3; let context_numberBits = 2; const context_data = []; let context_data_value = 0; let
					context_data_position = 0;
				for (ii = 0; ii < uncompressed.length; ii += 1) {
					if (context_c = uncompressed.charAt(ii),
					Object.prototype.hasOwnProperty.call(context_dictionary, context_c) || (context_dictionary[context_c] = context_dictSize++,
					context_dictionaryToCreate[context_c] = !0), context_wc = context_w + context_c,
					Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
						context_w = context_wc;
					} else {
						if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
							if (context_w.charCodeAt(0) < 256) {
								for (i = 0; i < context_numberBits; i++) {
									context_data_value <<= 1, context_data_position == bitsPerChar - 1 ? (context_data_position = 0,
									context_data.push(getCharFromInt(context_data_value)), context_data_value = 0) : context_data_position++;
								}

								for (value = context_w.charCodeAt(0), i = 0; i < 8; i++) {
									context_data_value = context_data_value << 1 | 1 & value,
									context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
									context_data_value = 0) : context_data_position++, value >>= 1;
								}
							} else {
								for (value = 1, i = 0; i < context_numberBits; i++) {
									context_data_value = context_data_value << 1 | value,
									context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
									context_data_value = 0) : context_data_position++, value = 0;
								}

								for (value = context_w.charCodeAt(0), i = 0; i < 16; i++) {
									context_data_value = context_data_value << 1 | 1 & value,
									context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
									context_data_value = 0) : context_data_position++, value >>= 1;
								}
							}

							--context_enlargeIn == 0 && (context_enlargeIn = 2 ** context_numberBits, context_numberBits++),
							delete context_dictionaryToCreate[context_w];
						} else {
							for (value = context_dictionary[context_w], i = 0; i < context_numberBits; i++) {
								context_data_value = context_data_value << 1 | 1 & value,
								context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
								context_data_value = 0) : context_data_position++, value >>= 1;
							}
						}

						--context_enlargeIn == 0 && (context_enlargeIn = 2 ** context_numberBits, context_numberBits++),
						context_dictionary[context_wc] = context_dictSize++, context_w = String(context_c);
					}
				}

				if (context_w !== '') {
					if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
						if (context_w.charCodeAt(0) < 256) {
							for (i = 0; i < context_numberBits; i++) {
								context_data_value <<= 1, context_data_position == bitsPerChar - 1 ? (context_data_position = 0,
								context_data.push(getCharFromInt(context_data_value)), context_data_value = 0) : context_data_position++;
							}

							for (value = context_w.charCodeAt(0), i = 0; i < 8; i++) {
								context_data_value = context_data_value << 1 | 1 & value,
								context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
								context_data_value = 0) : context_data_position++, value >>= 1;
							}
						} else {
							for (value = 1, i = 0; i < context_numberBits; i++) {
								context_data_value = context_data_value << 1 | value,
								context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
								context_data_value = 0) : context_data_position++, value = 0;
							}

							for (value = context_w.charCodeAt(0), i = 0; i < 16; i++) {
								context_data_value = context_data_value << 1 | 1 & value,
								context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
								context_data_value = 0) : context_data_position++, value >>= 1;
							}
						}

						--context_enlargeIn == 0 && (context_enlargeIn = 2 ** context_numberBits, context_numberBits++),
						delete context_dictionaryToCreate[context_w];
					} else {
						for (value = context_dictionary[context_w], i = 0; i < context_numberBits; i++) {
							context_data_value = context_data_value << 1 | 1 & value,
							context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
							context_data_value = 0) : context_data_position++, value >>= 1;
						}
					}

					--context_enlargeIn == 0 && (context_enlargeIn = 2 ** context_numberBits, context_numberBits++);
				}

				for (value = 2, i = 0; i < context_numberBits; i++) {
					context_data_value = context_data_value << 1 | 1 & value,
					context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)),
					context_data_value = 0) : context_data_position++, value >>= 1;
				}

				for (;;) {
					if (context_data_value <<= 1, context_data_position == bitsPerChar - 1) {
						context_data.push(getCharFromInt(context_data_value));
						break;
					}

					context_data_position++;
				}

				return context_data.join('');
			},
			decompress(compressed) {
				return compressed == null ? '' : (compressed == '' ? null : LZString._decompress(compressed.length, 32_768, (index => compressed.charCodeAt(index))));
			},
			_decompress(length, resetValue, getNextValue) {
				let i; let w; let bits; let resb; let maxpower; let power; let c; const dictionary = []; let enlargeIn = 4; let dictSize = 4; let numberBits = 3; let entry = ''; const result = []; const
					data = {
						val: getNextValue(0),
						position: resetValue,
						index: 1,
					};
				for (i = 0; i < 3; i += 1) {
					dictionary[i] = i;
				}

				for (bits = 0, maxpower = 2 ** 2, power = 1; power != maxpower;) {
					resb = data.val & data.position,
					data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
					bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
				}

				switch (bits) {
					case 0:
						for (bits = 0, maxpower = 2 ** 8, power = 1; power != maxpower;) {
							resb = data.val & data.position,
							data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
							bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
						}

						c = f(bits);
						break;

					case 1:
						for (bits = 0, maxpower = 2 ** 16, power = 1; power != maxpower;) {
							resb = data.val & data.position,
							data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
							bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
						}

						c = f(bits);
						break;

					case 2:
						return '';
				}

				for (dictionary[3] = c, w = c, result.push(c); ;) {
					if (data.index > length) {
						return '';
					}

					for (bits = 0, maxpower = 2 ** numberBits, power = 1; power != maxpower;) {
						resb = data.val & data.position,
						data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
						bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
					}

					switch (c = bits) {
						case 0:
							for (bits = 0, maxpower = 2 ** 8, power = 1; power != maxpower;) {
								resb = data.val & data.position,
								data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
								bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
							}

							dictionary[dictSize++] = f(bits), c = dictSize - 1, enlargeIn--;
							break;

						case 1:
							for (bits = 0, maxpower = 2 ** 16, power = 1; power != maxpower;) {
								resb = data.val & data.position,
								data.position >>= 1, data.position == 0 && (data.position = resetValue, data.val = getNextValue(data.index++)),
								bits |= (resb > 0 ? 1 : 0) * power, power <<= 1;
							}

							dictionary[dictSize++] = f(bits), c = dictSize - 1, enlargeIn--;
							break;

						case 2:
							return result.join('');
					}

					if (enlargeIn == 0 && (enlargeIn = 2 ** numberBits, numberBits++), dictionary[c]) {
						entry = dictionary[c];
					} else {
						if (c !== dictSize) {
							return null;
						}

						entry = w + w.charAt(0);
					}

					result.push(entry), dictionary[dictSize++] = w + entry.charAt(0), w = entry, --enlargeIn == 0 && (enlargeIn = 2 ** numberBits,
					numberBits++);
				}
			},
		};
		return LZString;
	})(), $b80fd2360d77010c$var$module != null && ($b80fd2360d77010c$var$module.exports = $b80fd2360d77010c$var$LZString);
	class $b80fd2360d77010c$export$2e2bcd8739ae039 {
		constructor({defaults = {}, storageName = 'options', migrations = [], logging = !0} = {}) {
			Object.defineProperty(this, 'storageName', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}), Object.defineProperty(this, 'defaults', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}), Object.defineProperty(this, '_form', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}), Object.defineProperty(this, '_migrations', {
				enumerable: !0,
				configurable: !0,
				writable: !0,
				value: void 0,
			}), this.storageName = storageName, this.defaults = defaults, this._handleFormInput = (300,
			$b80fd2360d77010c$var$throttle(300, this._handleFormInput.bind(this), !1)), this._handleStorageChangeOnForm = this._handleStorageChangeOnForm.bind(this),
			logging || (this._log = () => {}), this._migrations = this._runMigrations(migrations);
		}

		async getAll() {
			return await this._migrations, this._getAll();
		}

		async setAll(newOptions) {
			return await this._migrations, this._setAll(newOptions);
		}

		async set(newOptions) {
			return this.setAll({
				...await this.getAll(),
				...newOptions,
			});
		}

		async syncForm(form) {
			this._form = form instanceof HTMLFormElement ? form : document.querySelector(form),
			this._form.addEventListener('input', this._handleFormInput), this._form.addEventListener('submit', this._handleFormSubmit),
			chrome.storage.onChanged.addListener(this._handleStorageChangeOnForm), this._updateForm(this._form, await this.getAll());
		}

		async stopSyncForm() {
			this._form && (this._form.removeEventListener('input', this._handleFormInput), this._form.removeEventListener('submit', this._handleFormSubmit),
			chrome.storage.onChanged.removeListener(this._handleStorageChangeOnForm), delete this._form);
		}

		_log(method, ...args) {
			console[method](...args);
		}

		async _getAll() {
			return new Promise(((resolve, reject) => {
				chrome.storage.sync.get(this.storageName, (result => {
					chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve(this._decode(result[this.storageName]));
				}));
			}));
		}

		async _setAll(newOptions) {
			return this._log('log', 'Saving options', newOptions), new Promise(((resolve, reject) => {
				chrome.storage.sync.set({
					[this.storageName]: this._encode(newOptions),
				}, (() => {
					chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
				}));
			}));
		}

		_encode(options) {
			const thinnedOptions = {
				...options,
			};
			for (const [key, value] of Object.entries(thinnedOptions)) {
				this.defaults[key] === value && delete thinnedOptions[key];
			}

			return this._log('log', 'Without the default values', thinnedOptions), $b80fd2360d77010c$var$lzString.exports.compressToEncodedURIComponent(JSON.stringify(thinnedOptions));
		}

		_decode(options) {
			let decompressed = options;
			return typeof options === 'string' && (decompressed = JSON.parse($b80fd2360d77010c$var$lzString.exports.decompressFromEncodedURIComponent(options))),
			{
				...this.defaults,
				...decompressed,
			};
		}

		async _runMigrations(migrations) {
			if (migrations.length === 0 || !$f046e78e22aef39d$export$d0790c2ac1fc6894() || !await (async function () {
				return new Promise((resolve => {
					const callback = installType => {
						installType !== 'development' ? (chrome.runtime.onInstalled.addListener((() => {
							resolve(!0);
						})), setTimeout(resolve, 500, !1)) : resolve(!0);
					};

					chrome.management?.getSelf ? chrome.management.getSelf((({installType}) => {
						callback(installType);
					})) : callback('unknown');
				}));
			})()) {
				return;
			}

			const options = await this._getAll(); const
				initial = JSON.stringify(options);
			this._log('log', 'Found these stored options', {
				...options,
			}), this._log('info', 'Will run', migrations.length, migrations.length === 1 ? 'migration' : ' migrations');
			for (const migrate of migrations) {
				migrate(options, this.defaults);
			}

			initial !== JSON.stringify(options) && await this._setAll(options);
		}

		async _handleFormInput({target}) {
			const field = target;
			field.name && (await this.set(this._parseForm(field.form)), field.form.dispatchEvent(new CustomEvent('options-sync:form-synced', {
				bubbles: !0,
			})));
		}

		_handleFormSubmit(event) {
			event.preventDefault();
		}

		_updateForm(form, options) {
			const currentFormState = this._parseForm(form);
			for (const [key, value] of Object.entries(options)) {
				currentFormState[key] === value && delete options[key];
			}

			const include = Object.keys(options);
			include.length > 0 && $b80fd2360d77010c$var$deserialize(form, options, {
				include,
			});
		}

		_parseForm(form) {
			const include = [];
			for (const field of form.querySelectorAll('[name]')) {
				field.validity.valid && !field.disabled && include.push(field.name.replace(/\[.*]/, ''));
			}

			return $b80fd2360d77010c$var$serialize(form, {
				include,
			});
		}

		_handleStorageChangeOnForm(changes, areaName) {
			areaName !== 'sync' || !changes[this.storageName] || document.hasFocus() && this._form.contains(document.activeElement) || this._updateForm(this._form, this._decode(changes[this.storageName].newValue));
		}
	}
	Object.defineProperty($b80fd2360d77010c$export$2e2bcd8739ae039, 'migrations', {
		enumerable: !0,
		configurable: !0,
		writable: !0,
		value: {
			removeUnused(options, defaults) {
				for (const key of Object.keys(options)) {
					key in defaults || delete options[key];
				}
			},
		},
	});
	new $b80fd2360d77010c$export$2e2bcd8739ae039({
		defaults: {
			Keyword: 'nope',
			highRiskSite: 'nope',
			Reported: 'nope',
			KindaLookAlike: 'nope',
		},
		migrations: [$b80fd2360d77010c$export$2e2bcd8739ae039.migrations.removeUnused],
		logging: !0,
	});
})();
