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
}));
