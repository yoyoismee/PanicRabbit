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
}, $parcel$global.parcelRequire94c2 = parcelRequire), parcelRequire.register('38yC4', ((module, exports) => {
	let factory;
	typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' && self,
	factory = function (module) {
		if (typeof browser === 'undefined' || Object.getPrototypeOf(browser) !== Object.prototype) {
			const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = 'The message port closed before a response was received.';
			const SEND_RESPONSE_DEPRECATION_WARNING = 'Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)';
			const wrapAPIs = extensionAPIs => {
				const apiMetadata = {
					alarms: {
						clear: {
							minArgs: 0,
							maxArgs: 1,
						},
						clearAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						get: {
							minArgs: 0,
							maxArgs: 1,
						},
						getAll: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					bookmarks: {
						create: {
							minArgs: 1,
							maxArgs: 1,
						},
						get: {
							minArgs: 1,
							maxArgs: 1,
						},
						getChildren: {
							minArgs: 1,
							maxArgs: 1,
						},
						getRecent: {
							minArgs: 1,
							maxArgs: 1,
						},
						getSubTree: {
							minArgs: 1,
							maxArgs: 1,
						},
						getTree: {
							minArgs: 0,
							maxArgs: 0,
						},
						move: {
							minArgs: 2,
							maxArgs: 2,
						},
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeTree: {
							minArgs: 1,
							maxArgs: 1,
						},
						search: {
							minArgs: 1,
							maxArgs: 1,
						},
						update: {
							minArgs: 2,
							maxArgs: 2,
						},
					},
					browserAction: {
						disable: {
							minArgs: 0,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						enable: {
							minArgs: 0,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						getBadgeBackgroundColor: {
							minArgs: 1,
							maxArgs: 1,
						},
						getBadgeText: {
							minArgs: 1,
							maxArgs: 1,
						},
						getPopup: {
							minArgs: 1,
							maxArgs: 1,
						},
						getTitle: {
							minArgs: 1,
							maxArgs: 1,
						},
						openPopup: {
							minArgs: 0,
							maxArgs: 0,
						},
						setBadgeBackgroundColor: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						setBadgeText: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						setIcon: {
							minArgs: 1,
							maxArgs: 1,
						},
						setPopup: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						setTitle: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
					},
					browsingData: {
						remove: {
							minArgs: 2,
							maxArgs: 2,
						},
						removeCache: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeCookies: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeDownloads: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeFormData: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeHistory: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeLocalStorage: {
							minArgs: 1,
							maxArgs: 1,
						},
						removePasswords: {
							minArgs: 1,
							maxArgs: 1,
						},
						removePluginData: {
							minArgs: 1,
							maxArgs: 1,
						},
						settings: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					commands: {
						getAll: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					contextMenus: {
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						update: {
							minArgs: 2,
							maxArgs: 2,
						},
					},
					cookies: {
						get: {
							minArgs: 1,
							maxArgs: 1,
						},
						getAll: {
							minArgs: 1,
							maxArgs: 1,
						},
						getAllCookieStores: {
							minArgs: 0,
							maxArgs: 0,
						},
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						set: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					devtools: {
						inspectedWindow: {
							eval: {
								minArgs: 1,
								maxArgs: 2,
								singleCallbackArg: !1,
							},
						},
						panels: {
							create: {
								minArgs: 3,
								maxArgs: 3,
								singleCallbackArg: !0,
							},
							elements: {
								createSidebarPane: {
									minArgs: 1,
									maxArgs: 1,
								},
							},
						},
					},
					downloads: {
						cancel: {
							minArgs: 1,
							maxArgs: 1,
						},
						download: {
							minArgs: 1,
							maxArgs: 1,
						},
						erase: {
							minArgs: 1,
							maxArgs: 1,
						},
						getFileIcon: {
							minArgs: 1,
							maxArgs: 2,
						},
						open: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						pause: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeFile: {
							minArgs: 1,
							maxArgs: 1,
						},
						resume: {
							minArgs: 1,
							maxArgs: 1,
						},
						search: {
							minArgs: 1,
							maxArgs: 1,
						},
						show: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
					},
					extension: {
						isAllowedFileSchemeAccess: {
							minArgs: 0,
							maxArgs: 0,
						},
						isAllowedIncognitoAccess: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					history: {
						addUrl: {
							minArgs: 1,
							maxArgs: 1,
						},
						deleteAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						deleteRange: {
							minArgs: 1,
							maxArgs: 1,
						},
						deleteUrl: {
							minArgs: 1,
							maxArgs: 1,
						},
						getVisits: {
							minArgs: 1,
							maxArgs: 1,
						},
						search: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					i18n: {
						detectLanguage: {
							minArgs: 1,
							maxArgs: 1,
						},
						getAcceptLanguages: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					identity: {
						launchWebAuthFlow: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					idle: {
						queryState: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					management: {
						get: {
							minArgs: 1,
							maxArgs: 1,
						},
						getAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						getSelf: {
							minArgs: 0,
							maxArgs: 0,
						},
						setEnabled: {
							minArgs: 2,
							maxArgs: 2,
						},
						uninstallSelf: {
							minArgs: 0,
							maxArgs: 1,
						},
					},
					notifications: {
						clear: {
							minArgs: 1,
							maxArgs: 1,
						},
						create: {
							minArgs: 1,
							maxArgs: 2,
						},
						getAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						getPermissionLevel: {
							minArgs: 0,
							maxArgs: 0,
						},
						update: {
							minArgs: 2,
							maxArgs: 2,
						},
					},
					pageAction: {
						getPopup: {
							minArgs: 1,
							maxArgs: 1,
						},
						getTitle: {
							minArgs: 1,
							maxArgs: 1,
						},
						hide: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						setIcon: {
							minArgs: 1,
							maxArgs: 1,
						},
						setPopup: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						setTitle: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
						show: {
							minArgs: 1,
							maxArgs: 1,
							fallbackToNoCallback: !0,
						},
					},
					permissions: {
						contains: {
							minArgs: 1,
							maxArgs: 1,
						},
						getAll: {
							minArgs: 0,
							maxArgs: 0,
						},
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						request: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					runtime: {
						getBackgroundPage: {
							minArgs: 0,
							maxArgs: 0,
						},
						getPlatformInfo: {
							minArgs: 0,
							maxArgs: 0,
						},
						openOptionsPage: {
							minArgs: 0,
							maxArgs: 0,
						},
						requestUpdateCheck: {
							minArgs: 0,
							maxArgs: 0,
						},
						sendMessage: {
							minArgs: 1,
							maxArgs: 3,
						},
						sendNativeMessage: {
							minArgs: 2,
							maxArgs: 2,
						},
						setUninstallURL: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					sessions: {
						getDevices: {
							minArgs: 0,
							maxArgs: 1,
						},
						getRecentlyClosed: {
							minArgs: 0,
							maxArgs: 1,
						},
						restore: {
							minArgs: 0,
							maxArgs: 1,
						},
					},
					storage: {
						local: {
							clear: {
								minArgs: 0,
								maxArgs: 0,
							},
							get: {
								minArgs: 0,
								maxArgs: 1,
							},
							getBytesInUse: {
								minArgs: 0,
								maxArgs: 1,
							},
							remove: {
								minArgs: 1,
								maxArgs: 1,
							},
							set: {
								minArgs: 1,
								maxArgs: 1,
							},
						},
						managed: {
							get: {
								minArgs: 0,
								maxArgs: 1,
							},
							getBytesInUse: {
								minArgs: 0,
								maxArgs: 1,
							},
						},
						sync: {
							clear: {
								minArgs: 0,
								maxArgs: 0,
							},
							get: {
								minArgs: 0,
								maxArgs: 1,
							},
							getBytesInUse: {
								minArgs: 0,
								maxArgs: 1,
							},
							remove: {
								minArgs: 1,
								maxArgs: 1,
							},
							set: {
								minArgs: 1,
								maxArgs: 1,
							},
						},
					},
					tabs: {
						captureVisibleTab: {
							minArgs: 0,
							maxArgs: 2,
						},
						create: {
							minArgs: 1,
							maxArgs: 1,
						},
						detectLanguage: {
							minArgs: 0,
							maxArgs: 1,
						},
						discard: {
							minArgs: 0,
							maxArgs: 1,
						},
						duplicate: {
							minArgs: 1,
							maxArgs: 1,
						},
						executeScript: {
							minArgs: 1,
							maxArgs: 2,
						},
						get: {
							minArgs: 1,
							maxArgs: 1,
						},
						getCurrent: {
							minArgs: 0,
							maxArgs: 0,
						},
						getZoom: {
							minArgs: 0,
							maxArgs: 1,
						},
						getZoomSettings: {
							minArgs: 0,
							maxArgs: 1,
						},
						goBack: {
							minArgs: 0,
							maxArgs: 1,
						},
						goForward: {
							minArgs: 0,
							maxArgs: 1,
						},
						highlight: {
							minArgs: 1,
							maxArgs: 1,
						},
						insertCSS: {
							minArgs: 1,
							maxArgs: 2,
						},
						move: {
							minArgs: 2,
							maxArgs: 2,
						},
						query: {
							minArgs: 1,
							maxArgs: 1,
						},
						reload: {
							minArgs: 0,
							maxArgs: 2,
						},
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						removeCSS: {
							minArgs: 1,
							maxArgs: 2,
						},
						sendMessage: {
							minArgs: 2,
							maxArgs: 3,
						},
						setZoom: {
							minArgs: 1,
							maxArgs: 2,
						},
						setZoomSettings: {
							minArgs: 1,
							maxArgs: 2,
						},
						update: {
							minArgs: 1,
							maxArgs: 2,
						},
					},
					topSites: {
						get: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					webNavigation: {
						getAllFrames: {
							minArgs: 1,
							maxArgs: 1,
						},
						getFrame: {
							minArgs: 1,
							maxArgs: 1,
						},
					},
					webRequest: {
						handlerBehaviorChanged: {
							minArgs: 0,
							maxArgs: 0,
						},
					},
					windows: {
						create: {
							minArgs: 0,
							maxArgs: 1,
						},
						get: {
							minArgs: 1,
							maxArgs: 2,
						},
						getAll: {
							minArgs: 0,
							maxArgs: 1,
						},
						getCurrent: {
							minArgs: 0,
							maxArgs: 1,
						},
						getLastFocused: {
							minArgs: 0,
							maxArgs: 1,
						},
						remove: {
							minArgs: 1,
							maxArgs: 1,
						},
						update: {
							minArgs: 2,
							maxArgs: 2,
						},
					},
				};
				if (Object.keys(apiMetadata).length === 0) {
					throw new Error('api-metadata.json has not been included in browser-polyfill');
				}

				class DefaultWeakMap extends WeakMap {
					constructor(createItem, items) {
						super(items), this.createItem = createItem;
					}

					get(key) {
						return this.has(key) || this.set(key, this.createItem(key)), super.get(key);
					}
				}
				const makeCallback = (promise, metadata) => (...callbackArgs) => {
					extensionAPIs.runtime.lastError ? promise.reject(new Error(extensionAPIs.runtime.lastError.message)) : (metadata.singleCallbackArg || callbackArgs.length <= 1 && !1 !== metadata.singleCallbackArg ? promise.resolve(callbackArgs[0]) : promise.resolve(callbackArgs));
				};

				const pluralizeArguments = numberArgs => numberArgs == 1 ? 'argument' : 'arguments'; const
					wrapMethod = (target, method, wrapper) => new Proxy(method, {
						apply: (targetMethod, thisObject, args) => wrapper.call(thisObject, target, ...args),
					});
				const hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
				const wrapObject = (target, wrappers = {}, metadata = {}) => {
					const cache = Object.create(null); const handlers = {
						has: (proxyTarget, prop) => prop in target || prop in cache,
						get(proxyTarget, prop, receiver) {
							if (prop in cache) {
								return cache[prop];
							}

							if (!(prop in target)) {
								return;
							}

							let value1 = target[prop];
							if (typeof value1 === 'function') {
								if (typeof wrappers[prop] === 'function') {
									value1 = wrapMethod(target, target[prop], wrappers[prop]);
								} else if (hasOwnProperty(metadata, prop)) {
									const wrapper = ((name, metadata) => function (target, ...args) {
										if (args.length < metadata.minArgs) {
											throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
										}

										if (args.length > metadata.maxArgs) {
											throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
										}

										return new Promise(((resolve, reject) => {
											if (metadata.fallbackToNoCallback) {
												try {
													target[name](...args, makeCallback({
														resolve,
														reject,
													}, metadata));
												} catch (cbError) {
													console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback:`, cbError),
													target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0,
													resolve();
												}
											} else {
												metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
													resolve,
													reject,
												}, metadata));
											}
										}));
									})(prop, metadata[prop]);
									value1 = wrapMethod(target, target[prop], wrapper);
								} else {
									value1 = value1.bind(target);
								}
							} else if (typeof value1 === 'object' && value1 !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
								value1 = wrapObject(value1, wrappers[prop], metadata[prop]);
							} else {
								if (!hasOwnProperty(metadata, '*')) {
									return Object.defineProperty(cache, prop, {
										configurable: !0,
										enumerable: !0,
										get: () => target[prop],
										set(value) {
											target[prop] = value;
										},
									}), value1;
								}

								value1 = wrapObject(value1, wrappers[prop], metadata['*']);
							}

							return cache[prop] = value1, value1;
						},
						set: (proxyTarget, prop, value, receiver) => (prop in cache ? cache[prop] = value : target[prop] = value,
						!0),
						defineProperty: (proxyTarget, prop, desc) => Reflect.defineProperty(cache, prop, desc),
						deleteProperty: (proxyTarget, prop) => Reflect.deleteProperty(cache, prop),
					}; const
						proxyTarget = Object.create(target);
					return new Proxy(proxyTarget, handlers);
				};

				const wrapEvent = wrapperMap => ({
					addListener(target, listener, ...args) {
						target.addListener(wrapperMap.get(listener), ...args);
					},
					hasListener: (target, listener) => target.hasListener(wrapperMap.get(listener)),
					removeListener(target, listener) {
						target.removeListener(wrapperMap.get(listener));
					},
				}); const
					onRequestFinishedWrappers = new DefaultWeakMap((listener => typeof listener !== 'function' ? listener : function (request) {
						const wrappedRequest = wrapObject(request, {}, {
							getContent: {
								minArgs: 0,
								maxArgs: 0,
							},
						});
						listener(wrappedRequest);
					}));
				let loggedSendResponseDeprecationWarning = !1;
				const onMessageWrappers = new DefaultWeakMap((listener => typeof listener !== 'function' ? listener : function (message1, sender, sendResponse) {
					let wrappedSendResponse; let result; let didCallSendResponse = !1; const
						sendResponsePromise = new Promise((resolve => {
							wrappedSendResponse = function (response) {
								loggedSendResponseDeprecationWarning || (console.warn(SEND_RESPONSE_DEPRECATION_WARNING, (new Error()).stack),
								loggedSendResponseDeprecationWarning = !0), didCallSendResponse = !0, resolve(response);
							};
						}));
					try {
						result = listener(message1, sender, wrappedSendResponse);
					} catch (error) {
						result = Promise.reject(error);
					}

					const isResultThenable = !0 !== result && (value = result) && typeof value === 'object' && typeof value.then === 'function';
					let value;
					if (!0 !== result && !isResultThenable && !didCallSendResponse) {
						return !1;
					}

					const sendPromisedResult = promise => {
						promise.then((message => {
							sendResponse(message);
						}), (error => {
							let message;
							message = error && (error instanceof Error || typeof error.message === 'string') ? error.message : 'An unexpected error occurred',
							sendResponse({
								__mozWebExtensionPolyfillReject__: !0,
								message,
							});
						})).catch((error => {
							console.error('Failed to send onMessage rejected reply', error);
						}));
					};

					return sendPromisedResult(isResultThenable ? result : sendResponsePromise), !0;
				})); const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
					extensionAPIs.runtime.lastError ? (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE ? resolve() : reject(new Error(extensionAPIs.runtime.lastError.message))) : (reply && reply.__mozWebExtensionPolyfillReject__ ? reject(new Error(reply.message)) : resolve(reply));
				};

				const wrappedSendMessage = (name, metadata, apiNamespaceObject, ...args) => {
					if (args.length < metadata.minArgs) {
						throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
					}

					if (args.length > metadata.maxArgs) {
						throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
					}

					return new Promise(((resolve, reject) => {
						const wrappedCb = wrappedSendMessageCallback.bind(null, {
							resolve,
							reject,
						});
						args.push(wrappedCb), apiNamespaceObject.sendMessage(...args);
					}));
				};

				const staticWrappers = {
					devtools: {
						network: {
							onRequestFinished: wrapEvent(onRequestFinishedWrappers),
						},
					},
					runtime: {
						onMessage: wrapEvent(onMessageWrappers),
						onMessageExternal: wrapEvent(onMessageWrappers),
						sendMessage: wrappedSendMessage.bind(null, 'sendMessage', {
							minArgs: 1,
							maxArgs: 3,
						}),
					},
					tabs: {
						sendMessage: wrappedSendMessage.bind(null, 'sendMessage', {
							minArgs: 2,
							maxArgs: 3,
						}),
					},
				}; const
					settingMetadata = {
						clear: {
							minArgs: 1,
							maxArgs: 1,
						},
						get: {
							minArgs: 1,
							maxArgs: 1,
						},
						set: {
							minArgs: 1,
							maxArgs: 1,
						},
					};
				return apiMetadata.privacy = {
					network: {
						'*': settingMetadata,
					},
					services: {
						'*': settingMetadata,
					},
					websites: {
						'*': settingMetadata,
					},
				}, wrapObject(extensionAPIs, staticWrappers, apiMetadata);
			};

			if (typeof chrome !== 'object' || !chrome || !chrome.runtime || !chrome.runtime.id) {
				throw new Error('This script should only be loaded in a browser extension.');
			}

			module.exports = wrapAPIs(chrome);
		} else {
			module.exports = browser;
		}
	}, typeof define === 'function' && define.amd ? define('webextension-polyfill', ['module'], factory) : factory(module);
})), parcelRequire('38yC4');

const $56fca9218aa06700$var$cache = !0;

function $56fca9218aa06700$var$isCurrentPathname(path) {
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

function $56fca9218aa06700$var$getManifest(_version) {
	return globalThis.chrome?.runtime?.getManifest?.();
}

function $56fca9218aa06700$var$once(function_) {
	let result;
	return () => ($56fca9218aa06700$var$cache && void 0 !== result || (result = function_()),
	result);
}

const $56fca9218aa06700$export$e7c4a1c4ed7f09ac = $56fca9218aa06700$var$once((() => globalThis.location?.protocol.startsWith('http'))); const $56fca9218aa06700$export$1291dbea3b2eb4e1 = $56fca9218aa06700$var$once((() => typeof globalThis.chrome?.extension === 'object')); const $56fca9218aa06700$export$d0790c2ac1fc6894 = ($56fca9218aa06700$var$once((() => $56fca9218aa06700$export$1291dbea3b2eb4e1() && $56fca9218aa06700$export$e7c4a1c4ed7f09ac())),
() => $56fca9218aa06700$export$ede7a9f5470a0118() || $56fca9218aa06700$export$933c8adc355f9a14()); const $56fca9218aa06700$export$ede7a9f5470a0118 = $56fca9218aa06700$var$once((() => {
	const manifest = $56fca9218aa06700$var$getManifest();
	return !(!manifest || !$56fca9218aa06700$var$isCurrentPathname(manifest.background_page || manifest.background?.page)) || Boolean(manifest?.background?.scripts && $56fca9218aa06700$var$isCurrentPathname('/_generated_background_page.html'));
})); const
	$56fca9218aa06700$export$933c8adc355f9a14 = $56fca9218aa06700$var$once((() => $56fca9218aa06700$var$isCurrentPathname($56fca9218aa06700$var$getManifest()?.background?.service_worker)));

$56fca9218aa06700$var$once((() => {
	if (!$56fca9218aa06700$export$1291dbea3b2eb4e1() || !chrome.runtime.getManifest) {
		return !1;
	}

	const {options_ui: optionsUi} = chrome.runtime.getManifest();
	if (typeof optionsUi?.page !== 'string') {
		return !1;
	}

	return new URL(optionsUi.page, location.origin).pathname === location.pathname;
})), $56fca9218aa06700$var$once((() => {
	if (!$56fca9218aa06700$export$1291dbea3b2eb4e1() || !chrome.devtools) {
		return !1;
	}

	const {devtools_page: devtoolsPage} = chrome.runtime.getManifest();
	if (typeof devtoolsPage !== 'string') {
		return !1;
	}

	return new URL(devtoolsPage, location.origin).pathname === location.pathname;
}));

function $9749222ac2c29308$var$throttle(delay, noTrailing, callback, debounceMode) {
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

class $9749222ac2c29308$var$TypeRegistry {
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

class $9749222ac2c29308$var$KeyExtractors extends $9749222ac2c29308$var$TypeRegistry {
	constructor(options) {
		super(options), this.registerDefault((element => element.getAttribute('name') || ''));
	}
}

class $9749222ac2c29308$var$InputReaders extends $9749222ac2c29308$var$TypeRegistry {
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

class $9749222ac2c29308$var$KeyAssignmentValidators extends $9749222ac2c29308$var$TypeRegistry {
	constructor(options) {
		super(options), this.registerDefault((() => !0)), this.register('radio', (element => element.checked));
	}
}

function $9749222ac2c29308$var$keySplitter(key) {
	let lastKey; const
		matches = key.match(/[^[\]]+/g);
	return key.length > 1 && key.indexOf('[]') === key.length - 2 && (lastKey = matches.pop(),
	matches.push([lastKey])), matches;
}

function $9749222ac2c29308$var$getElementType(element) {
	let typeAttr; const tagName = element.tagName; let
		type = tagName;
	return tagName.toLowerCase() === 'input' && (typeAttr = element.getAttribute('type'),
	type = typeAttr || 'text'), type.toLowerCase();
}

function $9749222ac2c29308$var$getInputElements(element, options) {
	return Array.prototype.filter.call(element.querySelectorAll('input,select,textarea'), (element_ => {
		if (element_.tagName.toLowerCase() === 'input' && (element_.type === 'submit' || element_.type === 'reset')) {
			return !1;
		}

		const myType = $9749222ac2c29308$var$getElementType(element_); const identifier = options.keyExtractors.get(myType)(element_); const foundInInclude = (options.include || []).includes(identifier); const foundInExclude = (options.exclude || []).includes(identifier); let foundInIgnored = !1; let
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

function $9749222ac2c29308$var$assignKeyValue(object, keychain, value) {
	if (!keychain) {
		return object;
	}

	const key = keychain.shift();
	return object[key] || (object[key] = Array.isArray(key) ? [] : {}), keychain.length === 0 && (Array.isArray(object[key]) ? value !== null && object[key].push(value) : object[key] = value),
	keychain.length > 0 && $9749222ac2c29308$var$assignKeyValue(object[key], keychain, value),
	object;
}

function $9749222ac2c29308$var$serialize(element, options = {}) {
	let data = {};
	return options.keySplitter = options.keySplitter || $9749222ac2c29308$var$keySplitter,
	options.keyExtractors = new $9749222ac2c29308$var$KeyExtractors(options.keyExtractors || {}),
	options.inputReaders = new $9749222ac2c29308$var$InputReaders(options.inputReaders || {}),
	options.keyAssignmentValidators = new $9749222ac2c29308$var$KeyAssignmentValidators(options.keyAssignmentValidators || {}),
	Array.prototype.forEach.call($9749222ac2c29308$var$getInputElements(element, options), (element_ => {
		const type = $9749222ac2c29308$var$getElementType(element_); const key = options.keyExtractors.get(type)(element_); const
			value = options.inputReaders.get(type)(element_);
		if (options.keyAssignmentValidators.get(type)(element_, key, value)) {
			const keychain = options.keySplitter(key);
			data = $9749222ac2c29308$var$assignKeyValue(data, keychain, value);
		}
	})), data;
}

class $9749222ac2c29308$var$InputWriters extends $9749222ac2c29308$var$TypeRegistry {
	constructor(options) {
		super(options), this.registerDefault(((element, value) => {
			element.value = value;
		})), this.register('checkbox', ((element, value) => {
			value === null ? element.indeterminate = !0 : element.checked = Array.isArray(value) ? value.includes(element.value) : value;
		})), this.register('radio', ((element, value) => {
			void 0 !== value && (element.checked = element.value === value.toString());
		})), this.register('select', $9749222ac2c29308$var$setSelectValue);
	}
}

function $9749222ac2c29308$var$setSelectValue(element, value) {
	for (var optionSet, option, array, returnValue, options = element.options, values = (returnValue = [],
		(array = value) !== null && (Array.isArray(array) ? returnValue.push.apply(returnValue, array) : returnValue.push(array)),
		returnValue), i = options.length; i--;) {
		option = options[i], values.includes(option.value) && (option.setAttribute('selected', !0),
		optionSet = !0);
	}

	optionSet || (element.selectedIndex = -1);
}

function $9749222ac2c29308$var$keyJoiner(parentKey, childKey) {
	return parentKey + '[' + childKey + ']';
}

function $9749222ac2c29308$var$flattenData(data, parentKey, options = {}) {
	const flatData = {}; const
		keyJoiner$1 = options.keyJoiner || $9749222ac2c29308$var$keyJoiner;
	for (let keyName in data) {
		if (!data.hasOwnProperty(keyName)) {
			continue;
		}

		const value = data[keyName]; let
			hash = {};
		parentKey && (keyName = keyJoiner$1(parentKey, keyName)), Array.isArray(value) ? (hash[keyName + '[]'] = value,
		hash[keyName] = value) : (typeof value === 'object' ? hash = $9749222ac2c29308$var$flattenData(value, keyName, options) : hash[keyName] = value),
		Object.assign(flatData, hash);
	}

	return flatData;
}

function $9749222ac2c29308$var$deserialize(form, data, options = {}) {
	const flattenedData = $9749222ac2c29308$var$flattenData(data, null, options);
	options.keyExtractors = new $9749222ac2c29308$var$KeyExtractors(options.keyExtractors || {}),
	options.inputWriters = new $9749222ac2c29308$var$InputWriters(options.inputWriters || {}),
	Array.prototype.forEach.call($9749222ac2c29308$var$getInputElements(form, options), (element => {
		const type = $9749222ac2c29308$var$getElementType(element); const
			key = options.keyExtractors.get(type)(element);
		options.inputWriters.get(type)(element, flattenedData[key]);
	}));
}

let $9749222ac2c29308$var$module; let $9749222ac2c29308$var$LZString; const
	$9749222ac2c29308$var$lzString = {
		exports: {},
	};

$9749222ac2c29308$var$module = $9749222ac2c29308$var$lzString, $9749222ac2c29308$var$LZString = (function () {
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
})(), $9749222ac2c29308$var$module != null && ($9749222ac2c29308$var$module.exports = $9749222ac2c29308$var$LZString);

class $9749222ac2c29308$export$2e2bcd8739ae039 {
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
		$9749222ac2c29308$var$throttle(300, this._handleFormInput.bind(this), !1)), this._handleStorageChangeOnForm = this._handleStorageChangeOnForm.bind(this),
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

		return this._log('log', 'Without the default values', thinnedOptions), $9749222ac2c29308$var$lzString.exports.compressToEncodedURIComponent(JSON.stringify(thinnedOptions));
	}

	_decode(options) {
		let decompressed = options;
		return typeof options === 'string' && (decompressed = JSON.parse($9749222ac2c29308$var$lzString.exports.decompressFromEncodedURIComponent(options))),
		{
			...this.defaults,
			...decompressed,
		};
	}

	async _runMigrations(migrations) {
		if (migrations.length === 0 || !$56fca9218aa06700$export$d0790c2ac1fc6894() || !await (async function () {
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
		include.length > 0 && $9749222ac2c29308$var$deserialize(form, options, {
			include,
		});
	}

	_parseForm(form) {
		const include = [];
		for (const field of form.querySelectorAll('[name]')) {
			field.validity.valid && !field.disabled && include.push(field.name.replace(/\[.*]/, ''));
		}

		return $9749222ac2c29308$var$serialize(form, {
			include,
		});
	}

	_handleStorageChangeOnForm(changes, areaName) {
		areaName !== 'sync' || !changes[this.storageName] || document.hasFocus() && this._form.contains(document.activeElement) || this._updateForm(this._form, this._decode(changes[this.storageName].newValue));
	}
}

Object.defineProperty($9749222ac2c29308$export$2e2bcd8739ae039, 'migrations', {
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

const $04dad1c1de767c9c$export$2e2bcd8739ae039 = new $9749222ac2c29308$export$2e2bcd8739ae039({
	defaults: {
		Keyword: 'nope',
		highRiskSite: 'nope',
		Reported: 'nope',
		KindaLookAlike: 'nope',
	},
	migrations: [$9749222ac2c29308$export$2e2bcd8739ae039.migrations.removeUnused],
	logging: !0,
});

!(async function () {
	await $04dad1c1de767c9c$export$2e2bcd8739ae039.syncForm('#options-form');
})();
