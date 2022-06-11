(() => {
	function $parcel$export(e, n, v, s) {
		Object.defineProperty(e, n, {
			get: v,
			set: s,
			enumerable: !0,
			configurable: !0,
		});
	}

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
	}, $parcel$global.parcelRequire94c2 = parcelRequire), parcelRequire.register('dBVaG', ((module, exports) => {
		let factory;
		typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' && self,
		factory = function (module) {
			'use strict';
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
														resolve: resolve,
														reject: reject,
                        }, metadata));
												} catch (cbError) {
													console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback:`, cbError),
													target[name](...args), metadata.fallbackToNoCallback = !1, metadata.noCallback = !0,
													resolve();
												}
} else {
metadata.noCallback ? (target[name](...args), resolve()) : target[name](...args, makeCallback({
													resolve: resolve,
													reject: reject,
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
	})), parcelRequire.register('VXiGZ', ((module, exports) => {
		let $0ae352d3e92b5044$var$Mapping; let $0ae352d3e92b5044$var$postOrderWalk; let $0ae352d3e92b5044$var$ted; let $0ae352d3e92b5044$var$tedBt; let $0ae352d3e92b5044$var$trackedMin; let $0ae352d3e92b5044$var$zero;
		({Mapping: $0ae352d3e92b5044$var$Mapping, zero: $0ae352d3e92b5044$var$zero, trackedMin: $0ae352d3e92b5044$var$trackedMin} = parcelRequire('6uB6o')),
		$0ae352d3e92b5044$var$postOrderWalk = function (root, childrenCb, visitCb) {
			let child; let children; let firstChild; let index; let k; let length_; let node; let ref; let ref1; let stack1; let stack2;
			for (stack2 = [], (stack1 = []).push([void 0, root]); stack1.length > 0;) {
				for ([index, node] = stack1.pop(),
				firstChild = (ref = (children = childrenCb(node)) != null ? children[0] : void 0) != null ? ref : null,
				stack2.push([index, node, firstChild]), index = k = 0, length_ = (ref1 = children != null ? children : []).length; k < length_; index = ++k) {
					child = ref1[index],
					stack1.push([index, child]);
				}
			}

			for (;stack2.length > 0;) {
				[index, node, firstChild] = stack2.pop(), visitCb(index, node, firstChild);
			}
		}, $0ae352d3e92b5044$var$ted = function (rootA, rootB, childrenCb, insertCb, removeCb, updateCb) {
			let fdist; let i1; let k1; let l1; let length_; let length1; let preprocess; let ref4; let ref11; let tA; let tB; let tdist; let tdistance; let treeDistance; let ttrack;
			for (treeDistance = function (i, j) {
				let a; let aL; let aN; let b; let bL; let bN; let iOff; let jOff; let k; let l; let m; let min; let n; let o; let p; let q; let r; let ref; let ref1; let ref2; let ref3;
				for (aL = tA.llds, bL = tB.llds, aN = tA.nodes, bN = tB.nodes, iOff = aL[i] - 1,
				jOff = bL[j] - 1, m = i - aL[i] + 2, n = j - bL[j] + 2, a = k = 1, ref = m; k < ref; a = k += 1) {
					fdist[a][0] = fdist[a - 1][0] + removeCb(aN[a + iOff]);
				}

				for (b = l = 1, ref1 = n; l < ref1; b = l += 1) {
					fdist[0][b] = fdist[0][b - 1] + insertCb(bN[b + jOff]);
				}

				for (a = o = 1, ref2 = m; o < ref2; a = o += 1) {
					for (b = r = 1, ref3 = n; r < ref3; b = r += 1) {
						aL[i] === aL[a + iOff] && bL[j] === bL[b + jOff] ? (min = $0ae352d3e92b5044$var$trackedMin(fdist[a - 1][b] + removeCb(aN[a + iOff]), fdist[a][b - 1] + insertCb(bN[b + jOff]), fdist[a - 1][b - 1] + updateCb(aN[a + iOff], bN[b + jOff])),
						ttrack[a + iOff][b + jOff] = min.index, tdist[a + iOff][b + jOff] = fdist[a][b] = min.value) : (p = aL[a + iOff] - 1 - iOff,
						q = bL[b + jOff] - 1 - jOff, fdist[a][b] = Math.min(fdist[a - 1][b] + removeCb(aN[a + iOff]), fdist[a][b - 1] + insertCb(bN[b + jOff]), fdist[p][q] + tdist[a + iOff][b + jOff]));
					}
				}
			}, tA = (preprocess = function (root) {
				let t;
				return t = {
					nodes: [],
					llds: [],
					keyroots: [],
				}, $0ae352d3e92b5044$var$postOrderWalk(root, childrenCb, ((index, node, firstChild) => {
					let childIndex; let lldIndex; let nIndex;
					nIndex = t.nodes.length, t.nodes.push(node), firstChild == null ? lldIndex = nIndex : (childIndex = t.nodes.indexOf(firstChild),
					lldIndex = t.llds[childIndex]), t.llds.push(lldIndex), index !== 0 && t.keyroots.push(nIndex);
				})), t;
			})(rootA), tB = preprocess(rootB), ttrack = $0ae352d3e92b5044$var$zero(tA.nodes.length, tB.nodes.length),
			tdist = $0ae352d3e92b5044$var$zero(tA.nodes.length, tB.nodes.length), fdist = $0ae352d3e92b5044$var$zero(tA.nodes.length + 1, tB.nodes.length + 1),
			k1 = 0, length_ = (ref4 = tA.keyroots).length; k1 < length_; k1++) {
				for (i1 = ref4[k1], l1 = 0,
				length1 = (ref11 = tB.keyroots).length; l1 < length1; l1++) {
					treeDistance(i1, ref11[l1]);
				}
			}

			return tdistance = tdist[tA.nodes.length - 1][tB.nodes.length - 1], new $0ae352d3e92b5044$var$Mapping(tA, tB, tdistance, ttrack, $0ae352d3e92b5044$var$tedBt);
		}, $0ae352d3e92b5044$var$tedBt = function (tA, tB, ttrack) {
			let i; let j; let mapping;
			for (mapping = [], i = tA.nodes.length - 1, j = tB.nodes.length - 1; i >= 0 && j >= 0;) {
				switch (ttrack[i][j]) {
					case 0:
						mapping.push([tA.nodes[i], null]), --i;
						break;

					case 1:
						mapping.push([null, tB.nodes[j]]), --j;
						break;

					case 2:
						mapping.push([tA.nodes[i], tB.nodes[j]]), --i, --j;
						break;

					default:
						throw new Error(`Invalid operation ${ttrack[i][j]} at (${i}, ${j})`);
				}
			}

			if (i === -1 && j !== -1) {
				for (;j >= 0;) {
					mapping.push([null, tB.nodes[j]]), --j;
				}
			}

			if (i !== -1 && j === -1) {
				for (;i >= 0;) {
					mapping.push([tA.nodes[i], null]), --i;
				}
			}

			return mapping;
		}, module.exports = $0ae352d3e92b5044$var$ted;
	})), parcelRequire.register('6uB6o', ((module, exports) => {
		let $4ba25321653e83c0$export$f5f785078011b62; let $4ba25321653e83c0$export$7f9972325ebfd559; let $4ba25321653e83c0$export$5ccdeb46ef1ffb88;
		$parcel$export(module.exports, 'Mapping', (() => $4ba25321653e83c0$export$f5f785078011b62), (v => $4ba25321653e83c0$export$f5f785078011b62 = v)),
		$parcel$export(module.exports, 'zero', (() => $4ba25321653e83c0$export$7f9972325ebfd559), (v => $4ba25321653e83c0$export$7f9972325ebfd559 = v)),
		$parcel$export(module.exports, 'trackedMin', (() => $4ba25321653e83c0$export$5ccdeb46ef1ffb88), (v => $4ba25321653e83c0$export$5ccdeb46ef1ffb88 = v)),
		$4ba25321653e83c0$export$f5f785078011b62 = class {
			constructor(a1, b1, distance, track, backtrackFn) {
				this.pairs = this.pairs.bind(this), this.alignment = this.alignment.bind(this),
				this.a = a1, this.b = b1, this.distance = distance, this.track = track, this.backtrackFn = backtrackFn,
				this.pairCache = null;
			}

			pairs() {
				return this.pairCache == null && (this.pairCache = this.backtrackFn(this.a, this.b, this.track)),
				this.pairCache;
			}

			alignment() {
				let alignmentA; let alignmentB; let k; let length_; let pair; let ref;
				for (alignmentA = [], alignmentB = [], k = 0, length_ = (ref = this.pairs().reverse()).length; k < length_; k++) {
					pair = ref[k],
					alignmentA.push(pair[0]), alignmentB.push(pair[1]);
				}

				return {
					alignmentA,
					alignmentB,
				};
			}
		}, $4ba25321653e83c0$export$7f9972325ebfd559 = function (width, height) {
			let i; let j; let k; let l; let ref; let ref1; let x; let y;
			for (x = new Array(width), i = k = 0, ref = width; k < ref; i = k += 1) {
				for (y = x[i] = new Array(height),
				j = l = 0, ref1 = height; l < ref1; j = l += 1) {
					y[j] = 0;
				}
			}

			return x;
		}, $4ba25321653e83c0$export$5ccdeb46ef1ffb88 = function (a, b, c) {
			let min;
			return b < (min = {
				value: a,
				index: 0,
			}).value && (min.value = b, min.index = 1), c < min.value && (min.value = c, min.index = 2),
			min;
		};
	})), parcelRequire.register('Vpo7S', ((module, exports) => {
		let $0ac9048a0f13f7ea$var$Mapping; let $0ac9048a0f13f7ea$var$levenshtein; let $0ac9048a0f13f7ea$var$levenshteinBt; let $0ac9048a0f13f7ea$var$trackedMin; let $0ac9048a0f13f7ea$var$zero;
		({Mapping: $0ac9048a0f13f7ea$var$Mapping, zero: $0ac9048a0f13f7ea$var$zero, trackedMin: $0ac9048a0f13f7ea$var$trackedMin} = parcelRequire('6uB6o')),
		$0ac9048a0f13f7ea$var$levenshtein = function (stringA, stringB, insertCb, removeCb, updateCb) {
			let a; let aC; let b; let bC; let dist; let distance; let i; let j; let k; let l; let m; let min; let n; let ref; let ref1; let ref2; let ref3; let track;
			for (b = stringB, track = $0ac9048a0f13f7ea$var$zero((a = stringA).length + 1, b.length + 1),
			dist = $0ac9048a0f13f7ea$var$zero(a.length + 1, b.length + 1), i = k = 1, ref = a.length; k <= ref; i = k += 1) {
				dist[i][0] = i;
			}

			for (j = l = 1, ref1 = b.length; l <= ref1; j = l += 1) {
				dist[0][j] = j;
			}

			for (i = m = 1, ref2 = a.length; m <= ref2; i = m += 1) {
				for (j = n = 1, ref3 = b.length; n <= ref3; j = n += 1) {
					aC = a[i - 1],
					bC = b[j - 1], min = $0ac9048a0f13f7ea$var$trackedMin(dist[i - 1][j] + removeCb(aC), dist[i][j - 1] + insertCb(bC), dist[i - 1][j - 1] + updateCb(aC, bC)),
					track[i][j] = min.index, dist[i][j] = min.value;
				}
			}

			return distance = dist[a.length][b.length], new $0ac9048a0f13f7ea$var$Mapping(a, b, distance, track, $0ac9048a0f13f7ea$var$levenshteinBt);
		}, $0ac9048a0f13f7ea$var$levenshteinBt = function (a, b, track) {
			let i; let j; let mapping;
			for (i = a.length, j = b.length, mapping = []; i > 0 && j > 0;) {
				switch (track[i][j]) {
					case 0:
						mapping.push([a[i - 1], null]), --i;
						break;

					case 1:
						mapping.push([null, b[j - 1]]), --j;
						break;

					case 2:
						mapping.push([a[i - 1], b[j - 1]]), --i, --j;
						break;

					default:
						throw new Error(`Invalid operation ${track[i][j]} at (${i}, ${j})`);
				}
			}

			if (i === 0 && j !== 0) {
				for (;j > 0;) {
					mapping.push([null, b[j - 1]]), --j;
				}
			}

			if (i !== 0 && j === 0) {
				for (;i > 0;) {
					mapping.push([a[i - 1], null]), --i;
				}
			}

			return mapping;
		}, module.exports = $0ac9048a0f13f7ea$var$levenshtein;
	}));
	let $a1ea0e2fc9dc80ac$exports = {};
	/*!
* sweetalert2 v11.4.17
* Released under the MIT License.
*/ void 0 !== ($a1ea0e2fc9dc80ac$exports = (function () {
		'use strict';
		const consolePrefix = 'SweetAlert2:';
		const uniqueArray = array => {
			const result = [];
			for (let i = 0; i < array.length; i++) {!result.includes(array[i]) && result.push(array[i]);}
			return result;
		};

		const capitalizeFirstLetter = string_ => string_.charAt(0).toUpperCase() + string_.slice(1);
		const toArray = nodeList => Array.prototype.slice.call(nodeList);
		const warn = message => {
			console.warn(''.concat(consolePrefix, ' ').concat(typeof message === 'object' ? message.join(' ') : message));
		};

		const error1 = message => {
			console.error(''.concat(consolePrefix, ' ').concat(message));
		};

		const previousWarnOnceMessages = [];
		const warnOnce = message => {
			previousWarnOnceMessages.includes(message) || (previousWarnOnceMessages.push(message),
			warn(message));
		};

		const warnAboutDeprecation = (deprecatedParameter, useInstead) => {
			warnOnce('"'.concat(deprecatedParameter, '" is deprecated and will be removed in the next major release. Please use "').concat(useInstead, '" instead.'));
		};

		const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
		const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
		const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
		const isPromise = arg => arg && Promise.resolve(arg) === arg;
		const getRandomElement = array => array[Math.floor(Math.random() * array.length)];
		const defaultParameters = {
			title: '',
			titleText: '',
			text: '',
			html: '',
			footer: '',
			icon: void 0,
			iconColor: void 0,
			iconHtml: void 0,
			template: void 0,
			toast: !1,
			showClass: {
				popup: 'swal2-show',
				backdrop: 'swal2-backdrop-show',
				icon: 'swal2-icon-show',
			},
			hideClass: {
				popup: 'swal2-hide',
				backdrop: 'swal2-backdrop-hide',
				icon: 'swal2-icon-hide',
			},
			customClass: {},
			target: 'body',
			color: void 0,
			backdrop: !0,
			heightAuto: !0,
			allowOutsideClick: !0,
			allowEscapeKey: !0,
			allowEnterKey: !0,
			stopKeydownPropagation: !0,
			keydownListenerCapture: !1,
			showConfirmButton: !0,
			showDenyButton: !1,
			showCancelButton: !1,
			preConfirm: void 0,
			preDeny: void 0,
			confirmButtonText: 'OK',
			confirmButtonAriaLabel: '',
			confirmButtonColor: void 0,
			denyButtonText: 'No',
			denyButtonAriaLabel: '',
			denyButtonColor: void 0,
			cancelButtonText: 'Cancel',
			cancelButtonAriaLabel: '',
			cancelButtonColor: void 0,
			buttonsStyling: !0,
			reverseButtons: !1,
			focusConfirm: !0,
			focusDeny: !1,
			focusCancel: !1,
			returnFocus: !0,
			showCloseButton: !1,
			closeButtonHtml: '&times;',
			closeButtonAriaLabel: 'Close this dialog',
			loaderHtml: '',
			showLoaderOnConfirm: !1,
			showLoaderOnDeny: !1,
			imageUrl: void 0,
			imageWidth: void 0,
			imageHeight: void 0,
			imageAlt: '',
			timer: void 0,
			timerProgressBar: !1,
			width: void 0,
			padding: void 0,
			background: void 0,
			input: void 0,
			inputPlaceholder: '',
			inputLabel: '',
			inputValue: '',
			inputOptions: {},
			inputAutoTrim: !0,
			inputAttributes: {},
			inputValidator: void 0,
			returnInputValueOnDeny: !1,
			validationMessage: void 0,
			grow: !1,
			position: 'center',
			progressSteps: [],
			currentProgressStep: void 0,
			progressStepsDistance: void 0,
			willOpen: void 0,
			didOpen: void 0,
			didRender: void 0,
			willClose: void 0,
			didClose: void 0,
			didDestroy: void 0,
			scrollbarPadding: !0,
		};
		const updatableParameters = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
		const deprecatedParameters = {}; 
const toastIncompatibleParams = new Set([ "allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture" ]); const isValidParameter = paramName => Object.prototype.hasOwnProperty.call(defaultParameters, paramName); const isUpdatableParameter = paramName => -1 !== updatableParameters.indexOf(paramName); const isDeprecatedParameter = parameterName => deprecatedParameters[parameterName]; const checkIfParameterIsValid = parameter => {
      isValidParameter(parameter) || warn('Unknown parameter "'.concat(parameter, '"'));
		};

 const checkIfToastParameterIsValid = param => {
      toastIncompatibleParams.has(param) && warn('The parameter "'.concat(param, '" is incompatible with toasts'));
			}; 
const checkIfParamIsDeprecated = parameter => {
      isDeprecatedParameter(parameter) && warnAboutDeprecation(parameter, isDeprecatedParameter(parameter));
			}; 
const showWarningsForParams = parameters => {
      !parameters.backdrop && parameters.allowOutsideClick && warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      for (const param in parameters) checkIfParameterIsValid(param), parameters.toast && checkIfToastParameterIsValid(param),
			checkIfParamIsDeprecated(param);
		};

		const swalPrefix = 'swal2-';
		const prefix = items => {
			const result = {};
			for (const i in items) {
				result[items[i]] = swalPrefix + items[i];
			}

			return result;
		};

		const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'no-war']);
		const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
		const getContainer = () => document.body.querySelector('.'.concat(swalClasses.container));
		const elementBySelector = selectorString => {
			const container = getContainer();
			return container ? container.querySelector(selectorString) : null;
		};

		const elementByClass = className => elementBySelector('.'.concat(className));
		const getPopup = () => elementByClass(swalClasses.popup);
		const getIcon = () => elementByClass(swalClasses.icon);
		const getTitle = () => elementByClass(swalClasses.title);
		const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
		const getImage = () => elementByClass(swalClasses.image);
		const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
		const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
		const getConfirmButton = () => elementBySelector('.'.concat(swalClasses.actions, ' .').concat(swalClasses.confirm));
		const getDenyButton = () => elementBySelector('.'.concat(swalClasses.actions, ' .').concat(swalClasses.deny));
		const getInputLabel = () => elementByClass(swalClasses['input-label']);
		const getLoader = () => elementBySelector('.'.concat(swalClasses.loader));
		const getCancelButton = () => elementBySelector('.'.concat(swalClasses.actions, ' .').concat(swalClasses.cancel));
		const getActions = () => elementByClass(swalClasses.actions);
		const getFooter = () => elementByClass(swalClasses.footer);
		const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
		const getCloseButton = () => elementByClass(swalClasses.close);
		const focusable = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
		const getFocusableElements = () => {
			const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(((a, b) => {
				const tabindexA = Number.parseInt(a.getAttribute('tabindex')); const
					tabindexB = Number.parseInt(b.getAttribute('tabindex'));
				return tabindexA > tabindexB ? 1 : (tabindexA < tabindexB ? -1 : 0);
			})); const
				otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter((element => element.getAttribute('tabindex') !== '-1'));
			return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((element => isVisible(element)));
		};

		const isModal = () => hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
		const isToast = () => getPopup() && hasClass(getPopup(), swalClasses.toast);
		const isLoading = () => Object.hasOwn(getPopup().dataset, 'loading');
		const states = {
			previousBodyPadding: null,
		};
		const setInnerHtml = (element, html) => {
			if (element.textContent = '', html) {
				const parsed = (new DOMParser()).parseFromString(html, 'text/html');
				toArray(parsed.querySelector('head').childNodes).forEach((child => {
					element.append(child);
				})), toArray(parsed.querySelector('body').childNodes).forEach((child => {
					element.append(child);
				}));
			}
		};

		const hasClass = (element, className) => {
			if (!className) {
return !1;
}
			const classList = className.split(/\s+/);
			for (const element_ of classList) {if (!element.classList.contains(element_)) {
return !1;
}
}
			return !0;
		};

		const removeCustomClasses = (element, parameters) => {
			toArray(element.classList).forEach((className => {
				Object.values(swalClasses).includes(className) || Object.values(iconTypes).includes(className) || Object.values(parameters.showClass).includes(className) || element.classList.remove(className);
			}));
		};

		const applyCustomClass = (element, parameters, className) => {
			if (removeCustomClasses(element, parameters), parameters.customClass && parameters.customClass[className]) {
				if ('string' !== typeof parameters.customClass[className] && !parameters.customClass[className].forEach) {return warn("Invalid type of customClass.".concat(className, '! Expected string or iterable object, got "').concat(typeof parameters.customClass[className], '"'));}
				addClass(element, parameters.customClass[className]);
			}
		};

		const getInput = (popup, inputClass) => {
			if (!inputClass) {
				return null;
			}

			switch (inputClass) {
				case 'select':
				case 'textarea':
				case 'file':
					return popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses[inputClass]));

				case 'checkbox':
					return popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses.checkbox, ' input'));

				case 'radio':
					return popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses.radio, ' input:checked')) || popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses.radio, ' input:first-child'));

				case 'range':
					return popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses.range, ' input'));

				default:
					return popup.querySelector('.'.concat(swalClasses.popup, ' > .').concat(swalClasses.input));
			}
		};

		const focusInput = input => {
			if (input.focus(), input.type !== 'file') {
				const value = input.value;
				input.value = '', input.value = value;
			}
		};

		const toggleClass = (target, classList, condition) => {
			target && classList && (typeof classList === 'string' && (classList = classList.split(/\s+/).filter(Boolean)),
			classList.forEach((className => {
				Array.isArray(target) ? target.forEach((element => {
					condition ? element.classList.add(className) : element.classList.remove(className);
				})) : (condition ? target.classList.add(className) : target.classList.remove(className));
			})));
		};

		const addClass = (target, classList) => {
			toggleClass(target, classList, !0);
		};

		const removeClass = (target, classList) => {
			toggleClass(target, classList, !1);
		};

		const getDirectChildByClass = (element, className) => {
			const childNodes = toArray(element.childNodes);
			for (const childNode of childNodes) {
if (hasClass(childNode, className)) {return childNode;}
			}
		};

		const applyNumericalStyle = (element, property, value) => {
			value === ''.concat(Number.parseInt(value)) && (value = Number.parseInt(value)), value || Number.parseInt(value) === 0 ? element.style[property] = typeof value === 'number' ? ''.concat(value, 'px') : value : element.style.removeProperty(property);
		};

		const show = function (element) {
			const display = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'flex';
			element.style.display = display;
		};

		const hide = element => {
			element.style.display = 'none';
		};

		const setStyle = (parent, selector, property, value) => {
			const element = parent.querySelector(selector);
			element && (element.style[property] = value);
		};

		const toggle = function (element, condition) {
			condition ? show(element, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'flex') : hide(element);
		};

		const isVisible = element => !(!element || !(element.offsetWidth || element.offsetHeight || element.getClientRects().length > 0));
		const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
		const isScrollable = element => Boolean(element.scrollHeight > element.clientHeight);
		const hasCssAnimation = element => {
			const style = window.getComputedStyle(element); const animDuration = Number.parseFloat(style.getPropertyValue('animation-duration') || '0'); const
				transDuration = Number.parseFloat(style.getPropertyValue('transition-duration') || '0');
			return animDuration > 0 || transDuration > 0;
		};

		const animateTimerProgressBar = function (timer) {
			const reset = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			const timerProgressBar = getTimerProgressBar();
			isVisible(timerProgressBar) && (reset && (timerProgressBar.style.transition = 'none',
			timerProgressBar.style.width = '100%'), setTimeout((() => {
				timerProgressBar.style.transition = 'width '.concat(timer / 1e3, 's linear'), timerProgressBar.style.width = '0%';
			}), 10));
		};

		const stopTimerProgressBar = () => {
			const timerProgressBar = getTimerProgressBar(); const
				timerProgressBarWidth = Number.parseInt(window.getComputedStyle(timerProgressBar).width);
			timerProgressBar.style.removeProperty('transition'), timerProgressBar.style.width = '100%';
			const timerProgressBarPercent = timerProgressBarWidth / Number.parseInt(window.getComputedStyle(timerProgressBar).width) * 100;
			timerProgressBar.style.removeProperty('transition'), timerProgressBar.style.width = ''.concat(timerProgressBarPercent, '%');
		};

		const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';
		const RESTORE_FOCUS_TIMEOUT = 100;
		const globalState1 = {};
		const focusPreviousActiveElement = () => {
			globalState1.previousActiveElement instanceof HTMLElement ? (globalState1.previousActiveElement.focus(),
			globalState1.previousActiveElement = null) : document.body && document.body.focus();
		};

		const restoreActiveElement = returnFocus => new Promise((resolve => {
			if (!returnFocus) {
				return resolve();
			}

			const x = window.scrollX; const
				y = window.scrollY;
			globalState1.restoreFocusTimeout = setTimeout((() => {
				focusPreviousActiveElement(), resolve();
			}), RESTORE_FOCUS_TIMEOUT), window.scrollTo(x, y);
		}));
		const sweetHTML = '\n <div aria-labelledby="'.concat(swalClasses.title, '" aria-describedby="').concat(swalClasses['html-container'], '" class="').concat(swalClasses.popup, '" tabindex="-1">\n   <button type="button" class="').concat(swalClasses.close, '"></button>\n   <ul class="').concat(swalClasses['progress-steps'], '"></ul>\n   <div class="').concat(swalClasses.icon, '"></div>\n   <img class="').concat(swalClasses.image, '" />\n   <h2 class="').concat(swalClasses.title, '" id="').concat(swalClasses.title, '"></h2>\n   <div class="').concat(swalClasses['html-container'], '" id="').concat(swalClasses['html-container'], '"></div>\n   <input class="').concat(swalClasses.input, '" />\n   <input type="file" class="').concat(swalClasses.file, '" />\n   <div class="').concat(swalClasses.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(swalClasses.select, '"></select>\n   <div class="').concat(swalClasses.radio, '"></div>\n   <label for="').concat(swalClasses.checkbox, '" class="').concat(swalClasses.checkbox, '">\n     <input type="checkbox" />\n     <span class="').concat(swalClasses.label, '"></span>\n   </label>\n   <textarea class="').concat(swalClasses.textarea, '"></textarea>\n   <div class="').concat(swalClasses['validation-message'], '" id="').concat(swalClasses['validation-message'], '"></div>\n   <div class="').concat(swalClasses.actions, '">\n     <div class="').concat(swalClasses.loader, '"></div>\n     <button type="button" class="').concat(swalClasses.confirm, '"></button>\n     <button type="button" class="').concat(swalClasses.deny, '"></button>\n     <button type="button" class="').concat(swalClasses.cancel, '"></button>\n   </div>\n   <div class="').concat(swalClasses.footer, '"></div>\n   <div class="').concat(swalClasses['timer-progress-bar-container'], '">\n     <div class="').concat(swalClasses['timer-progress-bar'], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, '');
		const resetOldContainer = () => {
			const oldContainer = getContainer();
			return Boolean(oldContainer) && (oldContainer.remove(), removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]),
			!0);
		};

		const resetValidationMessage = () => {
			globalState1.currentInstance.resetValidationMessage();
		};

		const addInputChangeListeners = () => {
			const popup = getPopup(); const input = getDirectChildByClass(popup, swalClasses.input); const file = getDirectChildByClass(popup, swalClasses.file); const range = popup.querySelector('.'.concat(swalClasses.range, ' input')); const rangeOutput = popup.querySelector('.'.concat(swalClasses.range, ' output')); const select = getDirectChildByClass(popup, swalClasses.select); const checkbox = popup.querySelector('.'.concat(swalClasses.checkbox, ' input')); const
				textarea = getDirectChildByClass(popup, swalClasses.textarea);
			input.addEventListener('input', resetValidationMessage), file.addEventListener('change', resetValidationMessage),
			select.addEventListener('change', resetValidationMessage), checkbox.addEventListener('change', resetValidationMessage),
			textarea.addEventListener('input', resetValidationMessage), range.addEventListener('input', () => {
				resetValidationMessage(), rangeOutput.value = range.value;
			}), range.addEventListener('change', () => {
				resetValidationMessage(), rangeOutput.value = range.value;
			});
		};

		const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;
		const setupAccessibility = parameters => {
			const popup = getPopup();
			popup.setAttribute('role', parameters.toast ? 'alert' : 'dialog'), popup.setAttribute('aria-live', parameters.toast ? 'polite' : 'assertive'),
			parameters.toast || popup.setAttribute('aria-modal', 'true');
		};

		const setupRTL = targetElement => {
			'rtl' === window.getComputedStyle(targetElement).direction && addClass(getContainer(), swalClasses.rtl);
		};

		const init = parameters => {
			const oldContainerExisted = resetOldContainer();
			if (isNodeEnv()) {
return void error1('SweetAlert2 requires document to initialize');
}
			const container = document.createElement('div');
			container.className = swalClasses.container, oldContainerExisted && addClass(container, swalClasses['no-transition']),
			setInnerHtml(container, sweetHTML);
			const targetElement = getTarget(parameters.target);
			targetElement.appendChild(container), setupAccessibility(parameters), setupRTL(targetElement),
			addInputChangeListeners(), noWarMessageForRussians(container, parameters);
		};

		const noWarMessageForRussians = (container, parameters) => {
			if (parameters.toast) {
				return;
			}

			const message = getRandomElement([{
				text: 'ШВАРЦЕНЕГГЕР обратился <br> к РУССКОМУ НАРОДУ о войне',
				youtubeId: 'fWClXZd9c78',
			}, {
				text: 'РУССКИЙ ПАТРИОТ <br> открыл главную тайну спецоперации',
				youtubeId: '_RjBNkn88yA',
			}, {
				text: 'ГЕРОЙ НОВОРОССИИ СТРЕЛКОВ <br> дал оценку ходу спецоперации',
				youtubeId: 'yUmzQT4C8JY',
			}, {
				text: 'ФИНСКИЙ ДРУГ РОССИИ <br> говорит ПО-РУССКИ о спецоперации',
				youtubeId: 'hkCYb6edUrQ',
			}, {
				text: 'ЮРИЙ ПОДОЛЯКА честно <br> о генералах РУССКОЙ АРМИИ',
				youtubeId: 'w4-_8BJKfpk',
			}, {
				text: 'Полковник ФСБ СТРЕЛКОВ <br> об успехах РОССИИ в спецоперации',
				youtubeId: 'saK5UTKroDA',
			}]);
			if (navigator.language === 'ru' && /\.(ru|su|xn--p1ai)$/.test(location.host)) {
				const noWar = document.createElement('div');
				noWar.className = swalClasses['no-war'], setInnerHtml(noWar, '<a href="https://www.youtube.com/watch?v='.concat(message.youtubeId, '" target="_blank">').concat(message.text, '</a>')),
				container.appendChild(noWar), container.style.paddingTop = '4em';
			}
		};

		const parseHtmlToContainer = (parameter, target) => {
			parameter instanceof HTMLElement ? target.appendChild(parameter) : typeof parameter === 'object' ? handleObject(parameter, target) : parameter && setInnerHtml(target, parameter);
		};

		const handleObject = (parameter, target) => {
			parameter.jquery ? handleJqueryElement(target, parameter) : setInnerHtml(target, parameter.toString());
		};
 
		const handleJqueryElement = (target, element) => {
			if (target.textContent = '', 0 in element) {
for (let i = 0; i in element; i++) {target.appendChild(element[i].cloneNode(!0));}} else {
target.append(element.cloneNode(!0));
}
		};

		const animationEndEvent = (() => {
			if (isNodeEnv()) {
				return !1;
			}

			const testElement = document.createElement('div'); const
				transEndEventNames = {
					WebkitAnimation: 'webkitAnimationEnd',
					animation: 'animationend',
			};
			for (const i in transEndEventNames) {
if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && void 0 !== testElement.style[i]) {
return transEndEventNames[i];
}
}
			return !1;
		})();
		const measureScrollbar = () => {
			const scrollDiv = document.createElement('div');
			scrollDiv.className = swalClasses['scrollbar-measure'], document.body.appendChild(scrollDiv);
			const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
			return document.body.removeChild(scrollDiv), scrollbarWidth;
		};

		const renderActions = (instance, parameters) => {
			const actions = getActions(); const
				loader = getLoader();
			parameters.showConfirmButton || parameters.showDenyButton || parameters.showCancelButton ? show(actions) : hide(actions),
			applyCustomClass(actions, parameters, 'actions'), renderButtons(actions, loader, parameters),
			setInnerHtml(loader, parameters.loaderHtml), applyCustomClass(loader, parameters, 'loader');
		};

		function renderButtons(actions, loader, parameters) {
			const confirmButton = getConfirmButton(); const denyButton = getDenyButton(); const
				cancelButton = getCancelButton();
			renderButton(confirmButton, 'confirm', parameters), renderButton(denyButton, 'deny', parameters),
			renderButton(cancelButton, 'cancel', parameters), handleButtonsStyling(confirmButton, denyButton, cancelButton, parameters),
			parameters.reverseButtons && (parameters.toast ? (actions.insertBefore(cancelButton, confirmButton),
			actions.insertBefore(denyButton, confirmButton)) : (actions.insertBefore(cancelButton, loader),
			actions.insertBefore(denyButton, loader), actions.insertBefore(confirmButton, loader)));
		}

		function handleButtonsStyling(confirmButton, denyButton, cancelButton, parameters) {
			if (!parameters.buttonsStyling) {
				return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
			}

			addClass([confirmButton, denyButton, cancelButton], swalClasses.styled), parameters.confirmButtonColor && (confirmButton.style.backgroundColor = parameters.confirmButtonColor,
			addClass(confirmButton, swalClasses['default-outline'])), parameters.denyButtonColor && (denyButton.style.backgroundColor = parameters.denyButtonColor,
			addClass(denyButton, swalClasses['default-outline'])), parameters.cancelButtonColor && (cancelButton.style.backgroundColor = parameters.cancelButtonColor,
			addClass(cancelButton, swalClasses['default-outline']));
		}

		function renderButton(button, buttonType, parameters) {
			toggle(button, parameters['show'.concat(capitalizeFirstLetter(buttonType), 'Button')], 'inline-block'),
			setInnerHtml(button, parameters[''.concat(buttonType, 'ButtonText')]), button.setAttribute('aria-label', parameters[''.concat(buttonType, 'ButtonAriaLabel')]),
			button.className = swalClasses[buttonType], applyCustomClass(button, parameters, ''.concat(buttonType, 'Button')),
			addClass(button, parameters[''.concat(buttonType, 'ButtonClass')]);
		}

		const renderContainer = (instance, parameters) => {
			const container = getContainer();
			container && (handleBackdropParameter(container, parameters.backdrop), handlePositionParameter(container, parameters.position),
			handleGrowParam(container, parameters.grow), applyCustomClass(container, parameters, 'container'));
		};

		function handleBackdropParameter(container, backdrop) {
			typeof backdrop === 'string' ? container.style.background = backdrop : backdrop || addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
		}

		function handlePositionParameter(container, position) {
			position in swalClasses ? addClass(container, swalClasses[position]) : (warn('The "position" parameter is not valid, defaulting to "center"'),
			addClass(container, swalClasses.center));
		}

		function handleGrowParam(container, grow) {
			if (grow && typeof grow === 'string') {
				const growClass = 'grow-'.concat(grow);
				growClass in swalClasses && addClass(container, swalClasses[growClass]);
			}
		}

		const privateProps = {
			awaitingPromise: new WeakMap(),
			promise: new WeakMap(),
			innerParams: new WeakMap(),
			domCache: new WeakMap(),
		};
		const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']; const renderInput = (instance, parameters) => {
			const popup = getPopup(); const innerParameters = privateProps.innerParams.get(instance); const 
rerender = !innerParameters || parameters.input !== innerParameters.input;
			inputClasses.forEach((inputClass => {
				const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
				setAttributes(inputClass, parameters.inputAttributes), inputContainer.className = swalClasses[inputClass],
				rerender && hide(inputContainer);
			})), parameters.input && (rerender && showInput(parameters), setCustomClass(parameters));
		};

		const showInput = parameters => {
			if (!renderInputType[parameters.input]) {
return error1('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(parameters.input, '"'));
}
			const inputContainer = getInputContainer(parameters.input); const
				input = renderInputType[parameters.input](inputContainer, parameters);
			show(inputContainer), setTimeout((() => {
				focusInput(input);
			}));
		};

		const removeAttributes = input => {
			for (let i = 0; i < input.attributes.length; i++) {
				const attrName = input.attributes[i].name;
				['type', 'value', 'style'].includes(attrName) || input.removeAttribute(attrName);
			}
		};

		const setAttributes = (inputClass, inputAttributes) => {
			const input = getInput(getPopup(), inputClass);
			if (input) {
				removeAttributes(input);
				for (const attr in inputAttributes) {
					input.setAttribute(attr, inputAttributes[attr]);
				}
			}
		};

		const setCustomClass = parameters => {
			const inputContainer = getInputContainer(parameters.input);
			'object' === typeof parameters.customClass && addClass(inputContainer, parameters.customClass.input);
		};

		const setInputPlaceholder = (input, parameters) => {
			input.placeholder && !parameters.inputPlaceholder || (input.placeholder = parameters.inputPlaceholder);
		};

		const setInputLabel = (input, prependTo, parameters) => {
			if (parameters.inputLabel) {
				input.id = swalClasses.input;
				const label = document.createElement('label'); const
					labelClass = swalClasses['input-label'];
				label.setAttribute('for', input.id), label.className = labelClass, typeof parameters.customClass === 'object' && addClass(label, parameters.customClass.inputLabel),
				label.innerText = parameters.inputLabel, prependTo.insertAdjacentElement('beforebegin', label);
			}
		};

		const getInputContainer = inputType => getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input); const checkAndSetInputValue = (input, inputValue) => {
			['string', 'number'].includes(typeof inputValue) ? input.value = ''.concat(inputValue) : isPromise(inputValue) || warn('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof inputValue, '"'));
		};

		const
			renderInputType = {};
		renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, parameters) => (checkAndSetInputValue(input, parameters.inputValue),
		setInputLabel(input, input, parameters), setInputPlaceholder(input, parameters), input.type = parameters.input,
		input), renderInputType.file = (input, parameters) => (setInputLabel(input, input, parameters),
		setInputPlaceholder(input, parameters), input), renderInputType.range = (range, parameters) => {
			const rangeInput = range.querySelector('input'); const
				rangeOutput = range.querySelector('output');
			return checkAndSetInputValue(rangeInput, parameters.inputValue), rangeInput.type = parameters.input,
			checkAndSetInputValue(rangeOutput, parameters.inputValue), setInputLabel(rangeInput, range, parameters),
			range;
		}, renderInputType.select = (select, parameters) => {
			if (select.textContent = '', parameters.inputPlaceholder) {
				const placeholder = document.createElement('option');
				setInnerHtml(placeholder, parameters.inputPlaceholder), placeholder.value = '', placeholder.disabled = !0,
				placeholder.selected = !0, select.appendChild(placeholder);
			}

			return setInputLabel(select, select, parameters), select;
		}, renderInputType.radio = radio => (radio.textContent = '', radio), renderInputType.checkbox = (checkboxContainer, parameters) => {
			const checkbox = getInput(getPopup(), 'checkbox');
			checkbox.value = '1', checkbox.id = swalClasses.checkbox, checkbox.checked = Boolean(parameters.inputValue);
			const label = checkboxContainer.querySelector('span');
			return setInnerHtml(label, parameters.inputPlaceholder), checkbox;
		}, renderInputType.textarea = (textarea, parameters) => {
			checkAndSetInputValue(textarea, parameters.inputValue), setInputPlaceholder(textarea, parameters),
			setInputLabel(textarea, textarea, parameters);
			const getMargin = element => Number.parseInt(window.getComputedStyle(element).marginLeft) + Number.parseInt(window.getComputedStyle(element).marginRight);
			return setTimeout((() => {
				if ('MutationObserver' in window) {
					const initialPopupWidth = Number.parseInt(window.getComputedStyle(getPopup()).width);
					new MutationObserver((() => {
						const textareaWidth = textarea.offsetWidth + getMargin(textarea);
						getPopup().style.width = textareaWidth > initialPopupWidth ? ''.concat(textareaWidth, 'px') : null;
					})).observe(textarea, {
						attributes: !0,
						attributeFilter: ['style'],
					});
				}
			})), textarea;
		};

		const renderContent = (instance, parameters) => {
			const htmlContainer = getHtmlContainer();
			applyCustomClass(htmlContainer, parameters, 'htmlContainer'), parameters.html ? (parseHtmlToContainer(parameters.html, htmlContainer),
			show(htmlContainer, 'block')) : (parameters.text ? (htmlContainer.textContent = parameters.text,
			show(htmlContainer, 'block')) : hide(htmlContainer)), renderInput(instance, parameters);
		};

		const renderFooter = (instance, parameters) => {
			const footer = getFooter();
			toggle(footer, parameters.footer), parameters.footer && parseHtmlToContainer(parameters.footer, footer),
			applyCustomClass(footer, parameters, 'footer');
		};

		const renderCloseButton = (instance, parameters) => {
			const closeButton = getCloseButton();
			setInnerHtml(closeButton, parameters.closeButtonHtml), applyCustomClass(closeButton, parameters, 'closeButton'),
			toggle(closeButton, parameters.showCloseButton), closeButton.setAttribute('aria-label', parameters.closeButtonAriaLabel);
		};

		const renderIcon = (instance, parameters) => {
			const innerParameters = privateProps.innerParams.get(instance); const 
icon = getIcon();
			if (innerParameters && parameters.icon === innerParameters.icon) {
return setContent(icon, parameters),
			void applyStyles(icon, parameters);
}

			if (parameters.icon || parameters.iconHtml) {
				if (parameters.icon && !Object.keys(iconTypes).includes(parameters.icon)) {
return error1('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(parameters.icon, '"')),
				void hide(icon);
}

				show(icon), setContent(icon, parameters), applyStyles(icon, parameters), addClass(icon, parameters.showClass.icon);
			} else {
				hide(icon);
			}
		};

		const applyStyles = (icon, parameters) => {
			for (const iconType in iconTypes) {
parameters.icon !== iconType && removeClass(icon, iconTypes[iconType]);
}
			addClass(icon, iconTypes[parameters.icon]), setColor(icon, parameters), adjustSuccessIconBackgroundColor(),
			applyCustomClass(icon, parameters, 'icon');
		};

		const adjustSuccessIconBackgroundColor = () => {
			const popup = getPopup(); const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color'); const
				successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
			for (const successIconPart of successIconParts) {
successIconPart.style.backgroundColor = popupBackgroundColor;
			}
		};

		const successIconHtml = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'; const errorIconHtml = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n'; const setContent = (icon, parameters) => {
			let newContent; let
				oldContent = icon.innerHTML;
			parameters.iconHtml ? newContent = iconContent(parameters.iconHtml) : parameters.icon === 'success' ? (newContent = successIconHtml,
			oldContent = oldContent.replace(/ style=".*?"/g, '')) : newContent = parameters.icon === 'error' ? errorIconHtml : iconContent({
				question: '?',
				warning: '!',
				info: 'i',
			}[parameters.icon]), oldContent.trim() !== newContent.trim() && setInnerHtml(icon, newContent);
		};

		const setColor = (icon, parameters) => {
			if (parameters.iconColor) {
				icon.style.color = parameters.iconColor, icon.style.borderColor = parameters.iconColor;
				for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
setStyle(icon, sel, 'backgroundColor', parameters.iconColor);
}
				setStyle(icon, '.swal2-success-ring', 'borderColor', parameters.iconColor);
			}
		};

		const iconContent = content => '<div class="'.concat(swalClasses['icon-content'], '">').concat(content, '</div>'); const renderImage = (instance, parameters) => {
			const image = getImage();
			if (!parameters.imageUrl) {
return hide(image);
}
			show(image, ''), image.setAttribute('src', parameters.imageUrl), image.setAttribute('alt', parameters.imageAlt),
			applyNumericalStyle(image, 'width', parameters.imageWidth), applyNumericalStyle(image, 'height', parameters.imageHeight),
			image.className = swalClasses.image, applyCustomClass(image, parameters, 'image');
		};

		const renderProgressSteps = (instance, parameters) => {
			const progressStepsContainer = getProgressSteps();
			if (!parameters.progressSteps || parameters.progressSteps.length === 0) {
return hide(progressStepsContainer);
}
			show(progressStepsContainer), progressStepsContainer.textContent = '', parameters.currentProgressStep >= parameters.progressSteps.length && warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'),
			parameters.progressSteps.forEach(((step, index) => {
				const stepElement = createStepElement(step);
				if (progressStepsContainer.appendChild(stepElement), index === parameters.currentProgressStep && addClass(stepElement, swalClasses['active-progress-step']),
				index !== parameters.progressSteps.length - 1) {
					const lineElement = createLineElement(parameters);
					progressStepsContainer.append(lineElement);
				}
			}));
		};

		const createStepElement = step => {
			const stepElement = document.createElement('li');
			return addClass(stepElement, swalClasses['progress-step']), setInnerHtml(stepElement, step),
			stepElement;
		};

		const createLineElement = parameters => {
			const lineElement = document.createElement('li');
			return addClass(lineElement, swalClasses['progress-step-line']), parameters.progressStepsDistance && applyNumericalStyle(lineElement, 'width', parameters.progressStepsDistance),
			lineElement;
		};

		const renderTitle = (instance, parameters) => {
			const title = getTitle();
			toggle(title, parameters.title || parameters.titleText, 'block'), parameters.title && parseHtmlToContainer(parameters.title, title),
			parameters.titleText && (title.innerText = parameters.titleText), applyCustomClass(title, parameters, 'title');
		};

		const renderPopup = (instance, parameters) => {
			const container = getContainer(); const
				popup = getPopup();
			parameters.toast ? (applyNumericalStyle(container, 'width', parameters.width), popup.style.width = '100%',
			popup.insertBefore(getLoader(), getIcon())) : applyNumericalStyle(popup, 'width', parameters.width),
			applyNumericalStyle(popup, 'padding', parameters.padding), parameters.color && (popup.style.color = parameters.color),
			parameters.background && (popup.style.background = parameters.background), hide(getValidationMessage()),
			addClasses(popup, parameters);
		};

		const addClasses = (popup, parameters) => {
			popup.className = ''.concat(swalClasses.popup, ' ').concat(isVisible(popup) ? parameters.showClass.popup : ''),
			parameters.toast ? (addClass([document.documentElement, document.body], swalClasses['toast-shown']),
			addClass(popup, swalClasses.toast)) : addClass(popup, swalClasses.modal), applyCustomClass(popup, parameters, 'popup'),
			'string' === typeof parameters.customClass && addClass(popup, parameters.customClass), parameters.icon && addClass(popup, swalClasses['icon-'.concat(parameters.icon)]);
		};

		const render = (instance, parameters) => {
			renderPopup(instance, parameters), renderContainer(instance, parameters), renderProgressSteps(instance, parameters),
			renderIcon(instance, parameters), renderImage(instance, parameters), renderTitle(instance, parameters),
			renderCloseButton(instance, parameters), renderContent(instance, parameters), renderActions(instance, parameters),
			renderFooter(instance, parameters), typeof parameters.didRender === 'function' && parameters.didRender(getPopup());
		};

		const DismissReason = Object.freeze({
			cancel: 'cancel',
			backdrop: 'backdrop',
			close: 'close',
			esc: 'esc',
			timer: 'timer',
		}); const setAriaHidden = () => {
			for (const element of toArray(document.body.children)) {
				element === getContainer() || element.contains(getContainer()) || (element.hasAttribute('aria-hidden') && element.dataset.previousAriaHidden = element.getAttribute("aria-hidden"),
				element.setAttribute('aria-hidden', 'true'));
			}
		};

		const unsetAriaHidden = () => {
			for (const element of toArray(document.body.children)) {
				element.hasAttribute('data-previous-aria-hidden') ? (element.setAttribute('aria-hidden', element.dataset.previousAriaHidden),
				element.removeAttribute('data-previous-aria-hidden')) : element.removeAttribute('aria-hidden');
			}
		};

		const swalStringParameters = ['swal-title', 'swal-html', 'swal-footer']; const getTemplateParameters = parameters => {
      const template = "string" == typeof parameters.template ? document.querySelector(parameters.template) : parameters.template;
			if (!template) {return {};}
			const templateContent = template.content;
			return showWarningsForElements(templateContent), Object.assign(getSwalParameters(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParameters));
    }; const getSwalParameters = templateContent => {
			const result = {};
			return toArray(templateContent.querySelectorAll('swal-param')).forEach((parameter => {
        showWarningsForAttributes(parameter, [ "name", "value" ]);
        const paramName = parameter.getAttribute("name"), value = parameter.getAttribute('value');
				"boolean" === typeof defaultParameters[paramName] && 'false' === value && (result[paramName] = !1),
				"object" === typeof defaultParameters[paramName] && (result[paramName] = JSON.parse(value));
			})), result;
		};

 const getSwalButtons = templateContent => {
			const result = {};
			return toArray(templateContent.querySelectorAll('swal-button')).forEach((button => {
				showWarningsForAttributes(button, ["type", 'color', 'aria-label' ]);
				const type = button.getAttribute('type');
				result[''.concat(type, 'ButtonText')] = button.innerHTML, result['show'.concat(capitalizeFirstLetter(type), 'Button')] = !0,
				button.hasAttribute('color') && (result[''.concat(type, 'ButtonColor')] = button.getAttribute('color')),
				button.hasAttribute('aria-label') && (result[''.concat(type, 'ButtonAriaLabel')] = button.getAttribute('aria-label'));
			})), result;
		};

 const getSwalImage = templateContent => {
			const result = {}; const 
image = templateContent.querySelector('swal-image');
			return image && (showWarningsForAttributes(image, ["src", 'width', 'height', 'alt' ]),
			image.hasAttribute('src') && (result.imageUrl = image.getAttribute('src')), image.hasAttribute('width') && (result.imageWidth = image.getAttribute('width')),
			image.hasAttribute('height') && (result.imageHeight = image.getAttribute('height')),
			image.hasAttribute('alt') && (result.imageAlt = image.getAttribute('alt'))), result;
		};

 const getSwalIcon = templateContent => {
			const result = {}; const 
icon = templateContent.querySelector('swal-icon');
			return icon && (showWarningsForAttributes(icon, ["type", 'color' ]), icon.hasAttribute('type') && (result.icon = icon.getAttribute('type')),
			icon.hasAttribute('color') && (result.iconColor = icon.getAttribute('color')), result.iconHtml = icon.innerHTML),
			result;
		};

 const getSwalInput = templateContent => {
			const result = {}; const 
input = templateContent.querySelector('swal-input');
			input && (showWarningsForAttributes(input, ["type", 'label', 'placeholder', 'value' ]),
			result.input = input.getAttribute('type') || 'text', input.hasAttribute('label') && (result.inputLabel = input.getAttribute('label')),
			input.hasAttribute('placeholder') && (result.inputPlaceholder = input.getAttribute('placeholder')),
			input.hasAttribute('value') && (result.inputValue = input.getAttribute('value')));
			const inputOptions = templateContent.querySelectorAll('swal-input-option');
			return inputOptions.length && (result.inputOptions = {}, toArray(inputOptions).forEach((option => {
				showWarningsForAttributes(option, ["value"]);
				const optionValue = option.getAttribute('value'); const 
optionName = option.innerHTML;
				result.inputOptions[optionValue] = optionName;
			}))), result;
		};

 const getSwalStringParams = (templateContent, parameterNames) => {
      const result = {};
      for (const i in parameterNames) {
        const paramName = parameterNames[i]; const 
tag = templateContent.querySelector(paramName);
				tag && (showWarningsForAttributes(tag, []), result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim());
			}

			return result;
		};

 const showWarningsForElements = templateContent => {
			const allowedElements = swalStringParameters.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
			for (const element of toArray(templateContent.children)) {
        const tagName = element.tagName.toLowerCase();
				-1 === allowedElements.indexOf(tagName) && warn('Unrecognized element <'.concat(tagName, '>'));
			}
		};

		const
			showWarningsForAttributes = (element, allowedAttributes) => {
				for (const attribute of toArray(element.attributes)) {
					-1 === allowedAttributes.indexOf(attribute.name) && warn(['Unrecognized attribute "'.concat(attribute.name, '" on <').concat(element.tagName.toLowerCase(), '>.'), ''.concat(allowedAttributes.length > 0 ? 'Allowed attributes are: '.concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
				}
			};

		const defaultInputValidators = {
			email: (string, validationMessage) => /^[\w.+-]+@[a-zA-Z\d.-]+\.[a-zA-Z\d-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address'),
			url: (string, validationMessage) => /^https?:\/\/(www\.)?[-\w@:%.+~#=]{1,256}\.[a-z]{2,63}\b([-\w@:%+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL'),
		};
		function setDefaultInputValidators(parameters) {
			parameters.inputValidator || Object.keys(defaultInputValidators).forEach((key => {
				parameters.input === key && (parameters.inputValidator = defaultInputValidators[key]);
			}));
		}

		function validateCustomTargetElement(parameters) {
			(!parameters.target || typeof parameters.target === 'string' && !document.querySelector(parameters.target) || typeof parameters.target !== 'string' && !parameters.target.appendChild) && (warn('Target parameter is not valid, defaulting to "body"'),
			parameters.target = 'body');
		}

		function setParameters(parameters) {
			setDefaultInputValidators(parameters), parameters.showLoaderOnConfirm && !parameters.preConfirm && warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'),
			validateCustomTargetElement(parameters), typeof parameters.title === 'string' && (parameters.title = parameters.title.split('\n').join('<br />')),
			init(parameters);
		}

		class Timer {
			constructor(callback, delay) {
				this.callback = callback, this.remaining = delay, this.running = !1, this.start();
			}

			start() {
				return this.running || (this.running = !0, this.started = new Date(), this.id = setTimeout(this.callback, this.remaining)),
				this.remaining;
			}

			stop() {
				return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= Date.now() - this.started.getTime()),
				this.remaining;
			}

			increase(n) {
				const running = this.running;
				return running && this.stop(), this.remaining += n, running && this.start(), this.remaining;
			}

			getTimerLeft() {
				return this.running && (this.stop(), this.start()), this.remaining;
			}

			isRunning() {
				return this.running;
			}
		}
		const fixScrollbar = () => {
			states.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (states.previousBodyPadding = Number.parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right')),
			document.body.style.paddingRight = ''.concat(states.previousBodyPadding + measureScrollbar(), 'px'));
		};

		const undoScrollbar = () => {
			states.previousBodyPadding !== null && (document.body.style.paddingRight = ''.concat(states.previousBodyPadding, 'px'),
			states.previousBodyPadding = null);
		};

		const iOSfix = () => {
			if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !hasClass(document.body, swalClasses.iosfix)) {
				const offset = document.body.scrollTop;
				document.body.style.top = ''.concat(-1 * offset, 'px'), addClass(document.body, swalClasses.iosfix),
				lockBodyScroll(), addBottomPaddingForTallPopups();
			}
		};

		const addBottomPaddingForTallPopups = () => {
			const ua = navigator.userAgent; const iOS = Boolean(ua.match(/iPad/i)) || Boolean(ua.match(/iPhone/i)); const
				webkit = Boolean(/WebKit/i.test(ua));
			if (iOS && webkit && !/crios/i.test(ua)) {
				const bottomPanelHeight = 44;
				getPopup().scrollHeight > window.innerHeight - bottomPanelHeight && (getContainer().style.paddingBottom = ''.concat(bottomPanelHeight, 'px'));
			}
		};

		const lockBodyScroll = () => {
			const container = getContainer();
			let preventTouchMove;
			container.addEventListener('touchstart', e => {
				preventTouchMove = shouldPreventTouchMove(e);
			}), container.addEventListener('touchmove', e => {
				preventTouchMove && (e.preventDefault(), e.stopPropagation());
			});
		};

		const shouldPreventTouchMove = event => {
			const target = event.target; const
				container = getContainer();
			return !(isStylus(event) || isZoom(event) || target !== container && (isScrollable(container) || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || isScrollable(getHtmlContainer()) && getHtmlContainer().contains(target)));
		};

		const isStylus = event => event.touches && event.touches.length && event.touches[0].touchType === 'stylus'; const isZoom = event => event.touches && event.touches.length > 1; const undoIOSfix = () => {
			if (hasClass(document.body, swalClasses.iosfix)) {
				const offset = Number.parseInt(document.body.style.top, 10);
				removeClass(document.body, swalClasses.iosfix), document.body.style.top = '', document.body.scrollTop = -1 * offset;
			}
		};

		const SHOW_CLASS_TIMEOUT = 10; const openPopup = parameters => {
			const container = getContainer(); const 
popup = getPopup();
			"function" === typeof parameters.willOpen && parameters.willOpen(popup);
			const initialBodyOverflow = window.getComputedStyle(document.body).overflowY;
			addClasses$1(container, popup, parameters), setTimeout((() => {
				setScrollingVisibility(container, popup);
			}), SHOW_CLASS_TIMEOUT), isModal() && (fixScrollContainer(container, parameters.scrollbarPadding, initialBodyOverflow),
			setAriaHidden()), isToast() || globalState1.previousActiveElement || (globalState1.previousActiveElement = document.activeElement),
			"function" === typeof parameters.didOpen && setTimeout((() => parameters.didOpen(popup))),
			removeClass(container, swalClasses['no-transition']);
		};

		const swalOpenAnimationFinished = event => {
			const popup = getPopup();
			if (event.target !== popup) {
return;
}
			const container = getContainer();
			popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished), container.style.overflowY = 'auto';
		};

		const setScrollingVisibility = (container, popup) => {
			animationEndEvent && hasCssAnimation(popup) ? (container.style.overflowY = 'hidden',
			popup.addEventListener(animationEndEvent, swalOpenAnimationFinished)) : container.style.overflowY = 'auto';
		};

		const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
			iOSfix(), scrollbarPadding && initialBodyOverflow !== 'hidden' && fixScrollbar(),
			setTimeout((() => {
				container.scrollTop = 0;
			}));
		};

		const addClasses$1 = (container, popup, parameters) => {
			addClass(container, parameters.showClass.backdrop), popup.style.setProperty('opacity', '0', 'important'),
			show(popup, 'grid'), setTimeout((() => {
				addClass(popup, parameters.showClass.popup), popup.style.removeProperty('opacity');
			}), SHOW_CLASS_TIMEOUT), addClass([document.documentElement, document.body], swalClasses.shown),
			parameters.heightAuto && parameters.backdrop && !parameters.toast && addClass([document.documentElement, document.body], swalClasses['height-auto']);
		};

		const showLoading = buttonToReplace => {
			let popup = getPopup();
			popup || new Swal1(), popup = getPopup();
			const loader = getLoader();
			isToast() ? hide(getIcon()) : replaceButton(popup, buttonToReplace), show(loader),
			popup.dataset.loading = 'true', popup.setAttribute('aria-busy', 'true'),
			popup.focus();
		};

		const replaceButton = (popup, buttonToReplace) => {
			const actions = getActions(); const
				loader = getLoader();
			!buttonToReplace && isVisible(getConfirmButton()) && (buttonToReplace = getConfirmButton()),
			show(actions), buttonToReplace && (hide(buttonToReplace), loader.dataset.buttonToReplace = buttonToReplace.className),
			loader.parentNode.insertBefore(loader, buttonToReplace), addClass([popup, actions], swalClasses.loading);
		};

		const handleInputOptionsAndValue = (instance, parameters) => {
			"select" === parameters.input || 'radio' === parameters.input ? handleInputOptions(instance, parameters) : ["text", 'email', 'number', 'tel', 'textarea' ].includes(parameters.input) && (hasToPromiseFn(parameters.inputValue) || isPromise(parameters.inputValue)) && (showLoading(getConfirmButton()),
			handleInputValue(instance, parameters));
		};

		const getInputValue = (instance, innerParameters) => {
			const input = instance.getInput();
			if (!input) {return null;}
			switch (innerParameters.input) {
				case 'checkbox':
					return getCheckboxValue(input);

				case 'radio':
					return getRadioValue(input);

				case 'file':
					return getFileValue(input);

				default:
					return innerParameters.inputAutoTrim ? input.value.trim() : input.value;
			}
		};

		const getCheckboxValue = input => input.checked ? 1 : 0; const getRadioValue = input => input.checked ? input.value : null; const getFileValue = input => input.files.length > 0 ? (input.getAttribute("multiple") !== null ? input.files : input.files[0]) : null; const handleInputOptions = (instance, parameters) => {
			const popup = getPopup(); const 
processInputOptions = inputOptions => populateInputOptions[parameters.input](popup, formatInputOptions(inputOptions), parameters);
			hasToPromiseFn(parameters.inputOptions) || isPromise(parameters.inputOptions) ? (showLoading(getConfirmButton()),
			asPromise(parameters.inputOptions).then((inputOptions => {
				instance.hideLoading(), processInputOptions(inputOptions);
			}))) : 'object' === typeof parameters.inputOptions ? processInputOptions(parameters.inputOptions) : error1('Unexpected type of inputOptions! Expected object, Map or Promise, got '.concat(typeof parameters.inputOptions));
		};

		const handleInputValue = (instance, parameters) => {
			const input = instance.getInput();
			hide(input), asPromise(parameters.inputValue).then((inputValue => {
				input.value = 'number' === parameters.input ? Number.parseFloat(inputValue) || 0 : ''.concat(inputValue),
				show(input), input.focus(), instance.hideLoading();
			})).catch((error => {
				error1('Error in inputValue promise: '.concat(error)), input.value = '', show(input),
				input.focus(), instance.hideLoading();
			}));
		};

		const populateInputOptions = {
			select(popup, inputOptions, parameters) {
        const select = getDirectChildByClass(popup, swalClasses.select), renderOption = (parent, optionLabel, optionValue) => {
          const option = document.createElement("option");
          option.value = optionValue, setInnerHtml(option, optionLabel), option.selected = isSelected(optionValue, parameters.inputValue),
					parent.appendChild(option);
				};

				inputOptions.forEach((inputOption => {
					const optionValue = inputOption[0]; const 
optionLabel = inputOption[1];
					if (Array.isArray(optionLabel)) {
						const optgroup = document.createElement('optgroup');
						optgroup.label = optionValue, optgroup.disabled = !1, select.appendChild(optgroup),
						optionLabel.forEach((o => renderOption(optgroup, o[1], o[0])));
					} else {renderOption(select, optionLabel, optionValue);}
				})), select.focus();
			},
			radio(popup, inputOptions, parameters) {
        const radio = getDirectChildByClass(popup, swalClasses.radio);
        inputOptions.forEach((inputOption => {
          const radioValue = inputOption[0], radioLabel = inputOption[1], radioInput = document.createElement("input"), radioLabelElement = document.createElement("label");
          radioInput.type = "radio", radioInput.name = swalClasses.radio, radioInput.value = radioValue, 
          isSelected(radioValue, parameters.inputValue) && (radioInput.checked = !0);
					const label = document.createElement('span');
					setInnerHtml(label, radioLabel), label.className = swalClasses.label, radioLabelElement.appendChild(radioInput),
					radioLabelElement.appendChild(label), radio.appendChild(radioLabelElement);
				}));
				const radios = radio.querySelectorAll('input');
				radios.length && radios[0].focus();
			}
		}; const formatInputOptions = inputOptions => {
			const result = [];
			return typeof Map !== 'undefined' && inputOptions instanceof Map ? inputOptions.forEach(((value, key) => {
				let valueFormatted = value;
				'object' === typeof valueFormatted && (valueFormatted = formatInputOptions(valueFormatted)),
				result.push([key, valueFormatted]);
			})) : Object.keys(inputOptions).forEach((key => {
				let valueFormatted = inputOptions[key];
				'object' === typeof valueFormatted && (valueFormatted = formatInputOptions(valueFormatted)),
				result.push([key, valueFormatted]);
			})), result;
		};

		const
			isSelected = (optionValue, inputValue) => inputValue && inputValue.toString() === optionValue.toString();
		function hideLoading() {
			const innerParameters = privateProps.innerParams.get(this);
			if (!innerParameters) {
return;
}
			const domCache = privateProps.domCache.get(this);
			hide(domCache.loader), isToast() ? innerParameters.icon && show(getIcon()) : showRelatedButton(domCache),
			removeClass([domCache.popup, domCache.actions], swalClasses.loading), domCache.popup.removeAttribute('aria-busy'),
			delete domCache.popup.dataset.loading, domCache.confirmButton.disabled = !1,
			domCache.denyButton.disabled = !1, domCache.cancelButton.disabled = !1;
		}

		const showRelatedButton = domCache => {
			const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.dataset.buttonToReplace);
			buttonToReplace.length > 0 ? show(buttonToReplace[0], 'inline-block') : allButtonsAreHidden() && hide(domCache.actions);
		};

		function getInput$1(instance) {
			const innerParameters = privateProps.innerParams.get(instance || this); const
				domCache = privateProps.domCache.get(instance || this);
			return domCache ? getInput(domCache.popup, innerParameters.input) : null;
		}

		const privateMethods = {
			swalPromiseResolve: new WeakMap(),
			swalPromiseReject: new WeakMap(),
		};
		const isVisible$1 = () => isVisible(getPopup()); const clickConfirm = () => getConfirmButton() && getConfirmButton().click(); const clickDeny = () => getDenyButton() && getDenyButton().click(); const clickCancel = () => getCancelButton() && getCancelButton().click(); const removeKeydownHandler = globalState => {
			globalState.keydownTarget && globalState.keydownHandlerAdded && (globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
				capture: globalState.keydownListenerCapture,
			}), globalState.keydownHandlerAdded = !1);
		};

		const addKeydownHandler = (instance, globalState, innerParameters, dismissWith) => {
			removeKeydownHandler(globalState), innerParameters.toast || (globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith),
			globalState.keydownTarget = innerParameters.keydownListenerCapture ? window : getPopup(),
			globalState.keydownListenerCapture = innerParameters.keydownListenerCapture, globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
				capture: globalState.keydownListenerCapture,
			}), globalState.keydownHandlerAdded = !0);
		};

		const setFocus = (innerParameters, index, increment) => {
			const focusableElements = getFocusableElements();
			if (focusableElements.length > 0) {
return (index += increment) === focusableElements.length ? index = 0 : index === -1 && (index = focusableElements.length - 1),
			focusableElements[index].focus();
}

			getPopup().focus();
		};

		const arrowKeysNextButton = ['ArrowRight', 'ArrowDown']; const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp']; const keydownHandler = (instance, e, dismissWith) => {
			const innerParameters = privateProps.innerParams.get(instance);
			innerParameters && (e.isComposing || e.keyCode === 229 || (innerParameters.stopKeydownPropagation && e.stopPropagation(),
			"Enter" === e.key ? handleEnter(instance, e, innerParameters) : 'Tab' === e.key ? handleTab(e, innerParameters) : [...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key) ? handleArrows(e.key) : 'Escape' === e.key && handleEsc(e, innerParameters, dismissWith)));
		};

		const handleEnter = (instance, e, innerParameters) => {
			if (callIfFunction(innerParameters.allowEnterKey) && e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
				if (["textarea", 'file' ].includes(innerParameters.input)) {
return;
}
				clickConfirm(), e.preventDefault();
			}
		};

		const handleTab = (e, innerParameters) => {
			const targetElement = e.target; const 
focusableElements = getFocusableElements();
			let btnIndex = -1;
			for (let i = 0; i < focusableElements.length; i++) {if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }}
			e.shiftKey ? setFocus(innerParameters, btnIndex, -1) : setFocus(innerParameters, btnIndex, 1),
			e.stopPropagation(), e.preventDefault();
		};

		const handleArrows = key => {
			const confirmButton = getConfirmButton(); const denyButton = getDenyButton(); const
				cancelButton = getCancelButton();
			if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
return;
}
			const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
			let buttonToFocus = document.activeElement;
			for (let i = 0; i < getActions().children.length; i++) {
				if (buttonToFocus = buttonToFocus[sibling], !buttonToFocus) {
return;
}
				if (buttonToFocus instanceof HTMLButtonElement && isVisible(buttonToFocus)) {
break;
}
			}

			buttonToFocus instanceof HTMLButtonElement && buttonToFocus.focus();
		};

		const
			handleEsc = (e, innerParameters, dismissWith) => {
				callIfFunction(innerParameters.allowEscapeKey) && (e.preventDefault(), dismissWith(DismissReason.esc));
			};

		function removePopupAndResetState(instance, container, returnFocus, didClose) {
			isToast() ? triggerDidCloseAndDispose(instance, didClose) : (restoreActiveElement(returnFocus).then((() => triggerDidCloseAndDispose(instance, didClose))),
			removeKeydownHandler(globalState1)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (container.setAttribute('style', 'display:none !important'),
			container.removeAttribute('class'), container.innerHTML = '') : container.remove(),
			isModal() && (undoScrollbar(), undoIOSfix(), unsetAriaHidden()), removeBodyClasses();
		}

		function removeBodyClasses() {
			removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
		}

		function close(resolveValue) {
			resolveValue = prepareResolveValue(resolveValue);
			const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this); const
				didClose = triggerClosePopup(this);
			this.isAwaitingPromise() ? resolveValue.isDismissed || (handleAwaitingPromise(this),
			swalPromiseResolve(resolveValue)) : didClose && swalPromiseResolve(resolveValue);
		}

		function isAwaitingPromise() {
			return Boolean(privateProps.awaitingPromise.get(this));
		}

		const triggerClosePopup = instance => {
			const popup = getPopup();
			if (!popup) {
				return !1;
			}

			const innerParameters = privateProps.innerParams.get(instance);
			if (!innerParameters || hasClass(popup, innerParameters.hideClass.popup)) {
return !1;
}
			removeClass(popup, innerParameters.showClass.popup), addClass(popup, innerParameters.hideClass.popup);
			const backdrop = getContainer();
			return removeClass(backdrop, innerParameters.showClass.backdrop), addClass(backdrop, innerParameters.hideClass.backdrop),
			handlePopupAnimation(instance, popup, innerParameters), !0;
		};

		function rejectPromise1(error) {
			const rejectPromise = privateMethods.swalPromiseReject.get(this);
			handleAwaitingPromise(this), rejectPromise && rejectPromise(error);
		}

		const handleAwaitingPromise = instance => {
			instance.isAwaitingPromise() && (privateProps.awaitingPromise.delete(instance),
			privateProps.innerParams.get(instance) || instance._destroy());
		};

		const prepareResolveValue = resolveValue => void 0 === resolveValue ? {
			isConfirmed: !1,
			isDenied: !1,
			isDismissed: !0,
		} : Object.assign({
			isConfirmed: !1,
			isDenied: !1,
			isDismissed: !1,
		}, resolveValue); const handlePopupAnimation = (instance, popup, innerParameters) => {
			const container = getContainer(); const 
animationIsSupported = animationEndEvent && hasCssAnimation(popup);
			"function" === typeof innerParameters.willClose && innerParameters.willClose(popup), animationIsSupported ? animatePopup(instance, popup, container, innerParameters.returnFocus, innerParameters.didClose) : removePopupAndResetState(instance, container, innerParameters.returnFocus, innerParameters.didClose);
		};

		const animatePopup = (instance, popup, container, returnFocus, didClose) => {
			globalState1.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose),
			popup.addEventListener(animationEndEvent, (e => {
				e.target === popup && (globalState1.swalCloseEventFinishedCallback(), delete globalState1.swalCloseEventFinishedCallback);
			}));
		};

		const
			triggerDidCloseAndDispose = (instance, didClose) => {
				setTimeout((() => {
					typeof didClose === 'function' && didClose.bind(instance.params)(), instance._destroy();
				}));
			};

		function setButtonsDisabled(instance, buttons, disabled) {
			const domCache = privateProps.domCache.get(instance);
			for (const button of buttons) {
				domCache[button].disabled = disabled;
			}
		}

		function setInputDisabled(input, disabled) {
			if (!input) {
				return !1;
			}

			if (input.type === 'radio') {
				const radios = input.parentNode.parentNode.querySelectorAll('input');
				for (const radio of radios) {
radio.disabled = disabled;
				}
			} else {
				input.disabled = disabled;
			}
		}

		function enableButtons() {
			setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
		}

		function disableButtons() {
			setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
		}

		function enableInput() {
			return setInputDisabled(this.getInput(), !1);
		}

		function disableInput() {
			return setInputDisabled(this.getInput(), !0);
		}

		function showValidationMessage(error) {
			const domCache = privateProps.domCache.get(this); const
				parameters = privateProps.innerParams.get(this);
			setInnerHtml(domCache.validationMessage, error), domCache.validationMessage.className = swalClasses['validation-message'],
			parameters.customClass && parameters.customClass.validationMessage && addClass(domCache.validationMessage, parameters.customClass.validationMessage),
			show(domCache.validationMessage);
			const input = this.getInput();
			input && (input.setAttribute('aria-invalid', !0), input.setAttribute('aria-describedby', swalClasses['validation-message']),
			focusInput(input), addClass(input, swalClasses.inputerror));
		}

		function resetValidationMessage$1() {
			const domCache = privateProps.domCache.get(this);
			domCache.validationMessage && hide(domCache.validationMessage);
			const input = this.getInput();
			input && (input.removeAttribute('aria-invalid'), input.removeAttribute('aria-describedby'),
			removeClass(input, swalClasses.inputerror));
		}

		function getProgressSteps$1() {
			return privateProps.domCache.get(this).progressSteps;
		}

		function update(parameters) {
			const popup = getPopup(); const
				innerParams = privateProps.innerParams.get(this);
			if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
return warn('You\'re trying to update the closed or closing popup, that won\'t work. Use the update() method in preConfirm parameter or show a new popup.');
}
			const validUpdatableParameters = filterValidParameters(parameters), updatedParams = Object.assign({}, innerParams, validUpdatableParameters);
			render(this, updatedParams), privateProps.innerParams.set(this, updatedParams),
			Object.defineProperties(this, {
				params: {
					value: Object.assign({}, this.params, parameters),
					writable: !1,
					enumerable: !0,
				}
			});
		}

		const filterValidParameters = parameters => {
			const validUpdatableParameters = {};
			return Object.keys(parameters).forEach((parameter => {
        isUpdatableParameter(parameter) ? validUpdatableParameters[parameter] = parameters[parameter] : warn('Invalid parameter to update: '.concat(parameter));
			})), validUpdatableParameters;
		};

		function _destroy() {
			const domCache = privateProps.domCache.get(this); const
				innerParameters = privateProps.innerParams.get(this);
			innerParameters ? (domCache.popup && globalState1.swalCloseEventFinishedCallback && (globalState1.swalCloseEventFinishedCallback(),
			delete globalState1.swalCloseEventFinishedCallback), typeof innerParameters.didDestroy === 'function' && innerParameters.didDestroy(),
			disposeSwal(this)) : disposeWeakMaps(this);
		}

		const disposeSwal = instance => {
			disposeWeakMaps(instance), delete instance.params, delete globalState1.keydownHandler,
			delete globalState1.keydownTarget, delete globalState1.currentInstance;
		};

		const disposeWeakMaps = instance => {
			instance.isAwaitingPromise() ? (unsetWeakMaps(privateProps, instance), privateProps.awaitingPromise.set(instance, !0)) : (unsetWeakMaps(privateMethods, instance),
			unsetWeakMaps(privateProps, instance));
		};

		const
			unsetWeakMaps = (object, instance) => {
				for (const i in object) {
object[i].delete(instance);
}
			};

		const instanceMethods = Object.freeze({
			hideLoading,
			disableLoading: hideLoading,
			getInput: getInput$1,
			close,
			isAwaitingPromise,
			rejectPromise: rejectPromise1,
			handleAwaitingPromise,
			closePopup: close,
			closeModal: close,
			closeToast: close,
			enableButtons,
			disableButtons,
			enableInput,
			disableInput,
			showValidationMessage,
			resetValidationMessage: resetValidationMessage$1,
			getProgressSteps: getProgressSteps$1,
			update,
			_destroy,
		});
		const handleConfirmButtonClick = instance => {
			const innerParameters = privateProps.innerParams.get(instance);
			instance.disableButtons(), innerParameters.input ? handleConfirmOrDenyWithInput(instance, 'confirm') : confirm(instance, !0);
		};

		const handleDenyButtonClick = instance => {
			const innerParameters = privateProps.innerParams.get(instance);
			instance.disableButtons(), innerParameters.returnInputValueOnDeny ? handleConfirmOrDenyWithInput(instance, 'deny') : deny(instance, !1);
		};

		const handleCancelButtonClick = (instance, dismissWith) => {
			instance.disableButtons(), dismissWith(DismissReason.cancel);
		};

		const handleConfirmOrDenyWithInput = (instance, type) => {
			const innerParameters = privateProps.innerParams.get(instance);
			if (!innerParameters.input) {return error1('The "input" parameter is needed to be set when using returnInputValueOn'.concat(capitalizeFirstLetter(type)));}
			const inputValue = getInputValue(instance, innerParameters);
			innerParameters.inputValidator ? handleInputValidator(instance, inputValue, type) : (instance.getInput().checkValidity() ? "deny" === type ? deny(instance, inputValue) : confirm(instance, inputValue) : (instance.enableButtons(), 
      instance.showValidationMessage(innerParameters.validationMessage)));
		};

		const handleInputValidator = (instance, inputValue, type) => {
			const innerParameters = privateProps.innerParams.get(instance);
			instance.disableInput(), Promise.resolve().then((() => asPromise(innerParameters.inputValidator(inputValue, innerParameters.validationMessage)))).then((validationMessage => {
				instance.enableButtons(), instance.enableInput(), validationMessage ? instance.showValidationMessage(validationMessage) : type === 'deny' ? deny(instance, inputValue) : confirm(instance, inputValue);
			}));
		};

		const deny = (instance, value) => {
			const innerParameters = privateProps.innerParams.get(instance || void 0);
			innerParameters.showLoaderOnDeny && showLoading(getDenyButton()), innerParameters.preDeny ? (privateProps.awaitingPromise.set(instance || void 0, !0),
			Promise.resolve().then((() => asPromise(innerParameters.preDeny(value, innerParameters.validationMessage)))).then((preDenyValue => {
				!1 === preDenyValue ? (instance.hideLoading(), handleAwaitingPromise(instance)) : instance.closePopup({
					isDenied: !0,
					value: void 0 === preDenyValue ? value : preDenyValue,
				});
			})).catch((error => rejectWith(instance || void 0, error)))) : instance.closePopup({
				isDenied: !0,
				value,
			});
		};

		const succeedWith = (instance, value) => {
			instance.closePopup({
				isConfirmed: !0,
				value,
			});
		};

		const rejectWith = (instance, error$$1) => {
			instance.rejectPromise(error$$1);
		};

		const confirm = (instance, value) => {
			const innerParameters = privateProps.innerParams.get(instance || void 0);
			innerParameters.showLoaderOnConfirm && showLoading(), innerParameters.preConfirm ? (instance.resetValidationMessage(),
			privateProps.awaitingPromise.set(instance || void 0, !0), Promise.resolve().then((() => asPromise(innerParameters.preConfirm(value, innerParameters.validationMessage)))).then((preConfirmValue => {
				isVisible(getValidationMessage()) || !1 === preConfirmValue ? (instance.hideLoading(),
				handleAwaitingPromise(instance)) : succeedWith(instance, void 0 === preConfirmValue ? value : preConfirmValue);
			})).catch((error => rejectWith(instance || void 0, error)))) : succeedWith(instance, value);
		};

		const handlePopupClick = (instance, domCache, dismissWith) => {
			privateProps.innerParams.get(instance).toast ? handleToastClick(instance, domCache, dismissWith) : (handleModalMousedown(domCache),
			handleContainerMousedown(domCache), handleModalClick(instance, domCache, dismissWith));
		};

		const handleToastClick = (instance, domCache, dismissWith) => {
			domCache.popup.addEventListener('click', () => {
				const innerParameters = privateProps.innerParams.get(instance);
        innerParameters && (isAnyButtonShown(innerParameters) || innerParameters.timer || innerParameters.input) || dismissWith(DismissReason.close);
			});
		};

		const
			isAnyButtonShown = innerParameters => innerParameters.showConfirmButton || innerParameters.showDenyButton || innerParameters.showCancelButton || innerParameters.showCloseButton;
		let ignoreOutsideClick = !1;
		const handleModalMousedown = domCache => {
			domCache.popup.addEventListener('mousedown', () => {
				domCache.container.onmouseup = function (e) {
					domCache.container.onmouseup = void 0, e.target === domCache.container && (ignoreOutsideClick = !0);
				};
			});
		};

		const handleContainerMousedown = domCache => {
			domCache.container.addEventListener('mousedown', () => {
				domCache.popup.onmouseup = function (e) {
					domCache.popup.onmouseup = void 0, (e.target === domCache.popup || domCache.popup.contains(e.target)) && (ignoreOutsideClick = !0);
				};
			});
		};

		const handleModalClick = (instance, domCache, dismissWith) => {
			domCache.container.addEventListener('click', e => {
				const innerParameters = privateProps.innerParams.get(instance);
        ignoreOutsideClick ? ignoreOutsideClick = !1 : e.target === domCache.container && callIfFunction(innerParameters.allowOutsideClick) && dismissWith(DismissReason.backdrop);
			});
		};

		const isJqueryElement = element => 'object' === typeof element && element.jquery; const isElement = element => element instanceof Element || isJqueryElement(element); const
			argsToParameters = args => {
				const parameters = {};
				return 'object' !== typeof args[0] || isElement(args[0]) ? ["title", 'html', 'icon' ].forEach(((name, index) => {
					const arg = args[index];
					"string" === typeof arg || isElement(arg) ? parameters[name] = arg : void 0 !== arg && error1('Unexpected type of '.concat(name, '! Expected "string" or "Element", got ').concat(typeof arg));
				})) : Object.assign(parameters, args[0]), parameters;
			};

		function fire() {
			const Swal = this;
			for (var _length = arguments.length, args = new Array(_length), _key = 0; _key < _length; _key++) {
args[_key] = arguments[_key];
}
			return new Swal(...args);
		}

		function mixin(mixinParameters) {
			class MixinSwal extends (this) {
				_main(parameters, priorityMixinParams) {
          return super._main(parameters, Object.assign({}, mixinParameters, priorityMixinParams));
				}
			}
			return MixinSwal;
		}

		const getTimerLeft = () => globalState1.timeout && globalState1.timeout.getTimerLeft(); const stopTimer = () => {
			if (globalState1.timeout) {return stopTimerProgressBar(), globalState1.timeout.stop();}
		};

 const resumeTimer = () => {
			if (globalState1.timeout) {
				const remaining = globalState1.timeout.start();
				return animateTimerProgressBar(remaining), remaining;
			}
		};

 const toggleTimer = () => {
			const timer = globalState1.timeout;
			return timer && (timer.running ? stopTimer() : resumeTimer());
		};

 const increaseTimer = n => {
			if (globalState1.timeout) {
				const remaining = globalState1.timeout.increase(n);
				return animateTimerProgressBar(remaining, !0), remaining;
			}
		};

 const
			isTimerRunning = () => globalState1.timeout && globalState1.timeout.isRunning();
		let bodyClickListenerAdded = !1;
		const clickHandlers = {};
		function bindClickHandler() {
			clickHandlers[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'data-swal-template'] = this,
			bodyClickListenerAdded || (document.body.addEventListener('click', bodyClickListener),
			bodyClickListenerAdded = !0);
		}

		const bodyClickListener = event => {
			for (let element = event.target; element && element !== document; element = element.parentNode) {for (const attr in clickHandlers) {
        const template = element.getAttribute(attr);
				if (template) {return void clickHandlers[attr].fire({
          template: template
        });}
			}}
		};

		let staticMethods = Object.freeze({
			isValidParameter,
			isUpdatableParameter,
			isDeprecatedParameter,
			argsToParams: argsToParameters,
			isVisible: isVisible$1,
			clickConfirm,
			clickDeny,
			clickCancel,
			getContainer,
			getPopup,
			getTitle,
			getHtmlContainer,
			getImage,
			getIcon,
			getInputLabel,
			getCloseButton,
			getActions,
			getConfirmButton,
			getDenyButton,
			getCancelButton,
			getLoader,
			getFooter,
			getTimerProgressBar,
			getFocusableElements,
			getValidationMessage,
			isLoading,
			fire,
			mixin,
			showLoading,
			enableLoading: showLoading,
			getTimerLeft,
			stopTimer,
			resumeTimer,
			toggleTimer,
			increaseTimer,
			isTimerRunning,
			bindClickHandler,
		});
		let currentInstance;
		class SweetAlert {
			constructor() {
				if (typeof window === 'undefined') {
					return;
				}

				currentInstance = this;
				for (var _length = arguments.length, args = new Array(_length), _key = 0; _key < _length; _key++) {
					args[_key] = arguments[_key];
				}

				const outerParameters = Object.freeze(this.constructor.argsToParams(args));
				Object.defineProperties(this, {
					params: {
						value: outerParameters,
						writable: !1,
						enumerable: !0,
						configurable: !0,
					},
				});
				const promise = currentInstance._main(currentInstance.params);
				privateProps.promise.set(this, promise);
			}

			_main(userParameters) {
				const mixinParameters = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				showWarningsForParams(Object.assign({}, mixinParameters, userParameters)), globalState1.currentInstance && (globalState1.currentInstance._destroy(),
				isModal() && unsetAriaHidden()), globalState1.currentInstance = currentInstance;
				const innerParameters = prepareParams(userParameters, mixinParameters);
				setParameters(innerParameters), Object.freeze(innerParameters), globalState1.timeout && (globalState1.timeout.stop(),
				delete globalState1.timeout), clearTimeout(globalState1.restoreFocusTimeout);
				const domCache = populateDomCache(currentInstance);
				return render(currentInstance, innerParameters), privateProps.innerParams.set(currentInstance, innerParameters),
				swalPromise(currentInstance, domCache, innerParameters);
			}

			then(onFulfilled) {
				return privateProps.promise.get(this).then(onFulfilled);
			}

			finally(onFinally) {
				return privateProps.promise.get(this).finally(onFinally);
			}
		}
		const swalPromise = (instance, domCache, innerParameters) => new Promise(((resolve, reject) => {
			const dismissWith = dismiss => {
				instance.closePopup({
					isDismissed: !0,
					dismiss,
				});
			};

			privateMethods.swalPromiseResolve.set(instance, resolve), privateMethods.swalPromiseReject.set(instance, reject),
			domCache.confirmButton.addEventListener('click', () => handleConfirmButtonClick(instance)), domCache.denyButton.addEventListener('click', () => handleDenyButtonClick(instance)),
			domCache.cancelButton.addEventListener('click', () => handleCancelButtonClick(instance, dismissWith)),
			domCache.closeButton.addEventListener('click', () => dismissWith(DismissReason.close)), handlePopupClick(instance, domCache, dismissWith),
			addKeydownHandler(instance, globalState1, innerParameters, dismissWith), handleInputOptionsAndValue(instance, innerParameters),
			openPopup(innerParameters), setupTimer(globalState1, innerParameters, dismissWith), initFocus(domCache, innerParameters),
			setTimeout((() => {
				domCache.container.scrollTop = 0;
			}));
		})); const prepareParams = (userParameters, mixinParameters) => {
      const templateParams = getTemplateParameters(userParameters); const 
params = Object.assign({}, defaultParameters, mixinParameters, templateParams, userParameters);
			return params.showClass = Object.assign({}, defaultParameters.showClass, params.showClass),
			params.hideClass = Object.assign({}, defaultParameters.hideClass, params.hideClass),
			params;
		};

		const populateDomCache = instance => {
			const domCache = {
				popup: getPopup(),
				container: getContainer(),
				actions: getActions(),
				confirmButton: getConfirmButton(),
				denyButton: getDenyButton(),
				cancelButton: getCancelButton(),
				loader: getLoader(),
				closeButton: getCloseButton(),
				validationMessage: getValidationMessage(),
				progressSteps: getProgressSteps(),
			};
			return privateProps.domCache.set(instance, domCache), domCache;
		};

		const setupTimer = (globalState$$1, innerParameters, dismissWith) => {
			const timerProgressBar = getTimerProgressBar();
			hide(timerProgressBar), innerParameters.timer && (globalState$$1.timeout = new Timer((() => {
				dismissWith('timer'), delete globalState$$1.timeout;
			}), innerParameters.timer), innerParameters.timerProgressBar && (show(timerProgressBar),
			applyCustomClass(timerProgressBar, innerParameters, 'timerProgressBar'), setTimeout((() => {
				globalState$$1.timeout && globalState$$1.timeout.running && animateTimerProgressBar(innerParameters.timer);
			}))));
		};

		const initFocus = (domCache, innerParameters) => {
			if (!innerParameters.toast) {
				return callIfFunction(innerParameters.allowEnterKey) ? void (focusButton(domCache, innerParameters) || setFocus(innerParameters, -1, 1)) : blurActiveElement();
			}
		};

		const focusButton = (domCache, innerParameters) => innerParameters.focusDeny && isVisible(domCache.denyButton) ? (domCache.denyButton.focus(),
		!0) : (innerParameters.focusCancel && isVisible(domCache.cancelButton) ? (domCache.cancelButton.focus(),
		!0) : !(!innerParameters.focusConfirm || !isVisible(domCache.confirmButton) || (domCache.confirmButton.focus(),
		0))); const
			blurActiveElement = () => {
				document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function' && document.activeElement.blur();
			};

		Object.assign(SweetAlert.prototype, instanceMethods), Object.assign(SweetAlert, staticMethods),
		Object.keys(instanceMethods).forEach((key => {
			SweetAlert[key] = function () {
				if (currentInstance) {
					return currentInstance[key](...arguments);
				}
			};
		})), SweetAlert.DismissReason = DismissReason, SweetAlert.version = '11.4.17';
		const Swal1 = SweetAlert;
		return Swal1.default = Swal1, Swal1;
	})()) && $a1ea0e2fc9dc80ac$exports.Sweetalert2 && ($a1ea0e2fc9dc80ac$exports.swal = $a1ea0e2fc9dc80ac$exports.sweetAlert = $a1ea0e2fc9dc80ac$exports.Swal = $a1ea0e2fc9dc80ac$exports.SweetAlert = $a1ea0e2fc9dc80ac$exports.Sweetalert2),
	typeof document !== 'undefined' && (function (e, t) {
		const n = e.createElement('style');
		if (e.querySelectorAll('head')[0].appendChild(n), n.styleSheet) {
			n.styleSheet.disabled || (n.styleSheet.cssText = t);
		} else {
			try {
				n.innerHTML = t;
			} catch {
				n.innerText = t;
			}
		}
	})(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-no-war{display:flex;position:fixed;z-index:1061;top:0;left:0;align-items:center;justify-content:center;width:100%;height:3.375em;background:#20232a;color:#fff;text-align:center}.swal2-no-war a{color:#61dafb;text-decoration:none}.swal2-no-war a:hover{text-decoration:underline}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'),
	parcelRequire('dBVaG');
	let $de30a94495b7bc7c$exports = {};
	$de30a94495b7bc7c$exports = {
		ted: parcelRequire('VXiGZ'),
		levenshtein: parcelRequire('Vpo7S'),
	};
	const $20ca411e7579f9ef$export$2e2bcd8739ae039 = {
		knownSite: ['walletconnect.com', 'opensea.io', 'cfinex.com', 'getbux.com', 'rudex.org', '55.com', 'bitvavo.com', 'sewerratsocial.club', 'coiny.io', 'bitpin.ir', 'envelop.is', 'catalyx.io', 'lovely.finance', 'ergodex.io', 'bitex.com', 'yieldyak.com', 'coinhouse.eu', 'exbitron.com', 'bitrue.com', 'promodio.io', 'blackmoon.net', 'qrkita.exchange', 'paycml.com', 'naughtydoge.io', 'fcoin.com', 'coinmetro.com', 'xposeprotocol.com', 'horizonplatform.io', 'marspanda.world', 'valkyrieprotocol.com', 'relictum.pro', 'felixo.com', 'coinexmarket.io', 'roguetokens.com', 'cheqd.io', 'poloniex.com', 'elonsrabbit.com', 'islandswap.com', 'caliente.finance', 'overlord.world', 'cryptopialand.com', 'currency.com', 'zoomex.com', 'alkemi.network', 'metaexchange.info', 'bankcex.com', 'wigoswap.io', 'pulsepad.io', 'skex.cc', 'tokenbetter.com', 'solbank.app', 'tokenlon.im', 'treasureseeds.io', 'ethermatrix.org', 'lupbit.com', 'solatoken.net', 'wagyuswap.app', 'cakeup.finance', 'venus.io', 'almond.so', 'bijieex.com', 'aidiverse.com', 'goldminer.games', 'bitbtc.money', 'hello.global', 'nfraction.com', 'vera.financial', 'pinksale.finance', 'doughpad.com', 'btcex.com', 'probit.kr', 'digifinex.com', 'projectlarix.com', 'dcs.cash', 'escrowprotocol.app', 'bitstar.com', 'mbaex.com', 'my-lith.com', 'colodax.com', 'seachaintoken.com', 'chainrift.com', 'arzpaya.com', 'bitebtc.com', 'oodlebit.com', 'greenmoontoken.com', 'gatehub.net', 'mandala.exchange', 'da.sg', 'bqtx.com', 'lovelace.world', 'sovryn.app', 'tethys.finance', 'coinzest.com', 'iceslush.finance', 'kawaiiswap.finance', 'coinegg.com', 'abucoins.com', 'zam.io', 'mercurity.finance', 'projectserum.com', 'lpdi.io', 'brexily.com', 'cex.io', 'xena.exchange', 'coin163.org', 'payrue.finance', 'idexo.com', 'gibxswap.io', 'firestarter.fi', 'guldentrader.com', 'coxi.io', 'tryhards.io', 'xetareality.com', 'ttnex.io', 't1.app', 'holdermoon.com', 'tauros.io', 'phoswap.com', 'upex.io', 'saber.so', 'vetter.ai', 'zbg.com', 'fcoinjp.com', 'gate.io', 'clevercoin.com', 'legionnetwork.io', 'wesavemoon.com', 'ubiex.co', 'quadrigacx.com', 'taraplatform.com', 'sip.space', 'hetbi.com', 'btc-x.is', 'atomictoken.net', 'opium.network', 'triunits.com', 'polkasocial.org', 'bitpreco.com', 'lightdefi.org', 'oneworldcoin.io', 'dinngo.co', 'dem.exchange', 'magicbirds.network', 'bantufoundation.org', 'bitsdaq.com', 'bitorbit.com', 'lunachow.com', 'bcoin.sg', 'petworldgame.com', 'radioshack.org', 'brtoken.org', 'livecoin.net', 'eth.link', 'klickl.com', 'coinhe.io', 'bytedex.io', 'sauna.finance', 'pagedao.org', 'coinzoom.com', 'evdc.network', 'pitchfinance.app', 'virtacoinworld.com', 'liqui.io', 'heroverse.io', 'bitrota.com', 'dc-ex.com', 'ccedk.com', 'puzzleswap.org', 'nut.money', 'frenchconnection.finance', 'fesbnb.io', 'lucent.exchange', 'crema.finance', 'cointrader.net', 'safe.trade', 'inubis.io', 'gleec.com', 'minerva.digital', 'dogedash.com', 'anyswap.exchange', 'crodex.app', 'galacticarena.io', 'bidesk.com', 'octane.finance', 'chaincreator.exchange', 'autobitco.com', 'continuum.world', 'moonbeans.io', 'vaultofsatoshi.com', 'shibanova.io', 'zombierising.games', 'kubitx.com', 'accesslauncher.finance', 'bakeryswap.org', 'ysl.io', 'chopperinu.io', 'himegamiprotocol.org', 'btcshark.com', 'xenonpay.org', 'littleangrybunnyv2.com', 'sexp.exchange', 'haildraconis.com', 'birake.com', 'deathtoken.net', 'solbergtoken.com', 'catex.io', 'allcrypt.com', 'rdax.io', 'golconda.co', 'acsi.finance', 'hanbitco.com', 'clamisland.fi', 'pegasys.finance', 'soupsswap.io', 'zhaobi.site', 'calypso.market', 'infinitup.io', 'jewex.io', 'babyegg.finance', 'dsgmetaverse.com', 'babyfeg.io', 'fegex.com', 'kafe.finance', 'vinex.network', 'bjs.ai', 'bithash.net', 'onebutton.trade', 'vindax.com', 'opendex.market', 'acala.network', 'artisturba.com', 'blockfarm.club', 'yunbi.com', 'cryptopolisgame.com', 'bitunions.com', 'covicoin.org', 'pulsemarkets.org', 'coinpark.com', 'bittok.io', 'decimalchain.com', 'coinstore.com', 'independentreserve.com', 'tsar.network', 'mcxnow.com', 'k-root.co', 'elonsmarvin.com', 'moonxbsc.com', 'yorocket.wtf', 'criptoro.com', 'excambiorex.com', 'xbtce.com', 'btctrade.com', 'huobi.com', 'maskexchange.com', 'safetrip.finance', 'mistyinuwaifu.com', 'hikenex.com', 'becoswap.info', 'kyswap.org', 'instars.com', 'myswap.vip', 'firebird.finance', 'xyt.com', 'cavirtex.com', 'cdax.io', 'tokendooit.com', 'pickcoin.pro', 'dexsport.io', 'ethosproject.io', 'topbtc.one', 'therocktrading.com', 'qbtc.ink', 'upbit.com', 'xcoex.com', 'nyanhub.one', 'kumex.com', 'coinviva.com', 'bitubu.com', 'co.il', 'bitexfin.com', 'bcex.ca', 'blocktrade.com', 'partyswap.io', 'pointpay.io', 'defibox.io', 'flatqube.io', 'barterdex.com', 'coinw.com', 'fexpro.net', 'armoney.in', 'bibox.cc', 'xceldefi.com', 'greenhousedex.com', 'vauld.com', 'osmosis.zone', 'cryptonarium.com', 'thundereth.app', 'oneart.digital', 'gotem.io', 'swapzone.io', 'bepswap.com', 'defidotoken.com', 'moonstarevenge.io', 'coinbase.com', 'bitstrades.com', 'aladiex.com', 'subdao.network', 'btctrade.im', 'kccgo.com', 'szzc.com', 'paybito.com', 'mdex.co', 'blizzard.network', 'shoefy.io', 'ntcrypto.net', 'ecxx.com', '1BCH.com', 'dobiexchange.com', 'celt.game', 'shakitainu.com', 'timechain.com', 'lituni.social', 'bex.global', 'doxxed.org', 'slicex.cc', 'apesofempires.com', 'zeedex.io', 'bi.cc', 'coinopts.com', 'balancer.finance', 'aetheruniverse.com', 'zipswap.fi', 'vircurex.com', 'fmfw.io', 'bit.ly', 'ascendex.com', 'chellitcoin.com', 'moniwar.io', 'bscmemepad.com', 'moona.finance', 'RadioShack.org', 'halfpizza.com', 'vcc.exchange', 'polarity.exchange', 'stronghold.co', 'stellaswap.com', 'turtlenetwork.eu', 'usd-x.com', 'mooncake.io', 'cryptovelox.com', 'cacticlub.io', 'altindex.org', 'secondbtc.com', 'bitget.com', 'swisscex.com', 'simex.global', 'zappy.finance', 'smartlink.so', 'bitsol.finance', 'pontoon.fi', 'alium.finance', 'theos.finance', 'mexc.com', 'yoobtc.com', 'milkyswap.exchange', 'hydax.com', 'burency.com', 'cryptsy.com', 'glidefinance.io', 'swapmeet.live', 'exco.in', 'buda.com', 'matcha.xyz', 'aquafi.io', 'switchdex.ag', 'fandomchain.io', 'empoex.com', 'coinmate.io', 'exnce.com', 'proofofhumanity.id', 'bitlish.com', 'bitker.com', 'bispex.com', 'fruitfightersgame.com', 'bitcoin.com', 'x-protocol.com', 'game1network.com', 'nowswap.org', 'arthbit.com', 'movenetwork.io', 'chaoex.com', 'sundaeswap.finance', 'astronaut.to', 'goko.com', 'royal.exchange', 'aesthetes.art', 'rune.game', 'tatmas.vip', 'burnx.live', 'worldpayex.com', 'luckyunicorn.io', 'btcckorea.com', 'dfsocial.com', 'primebit.com', 'heroesempires.com', 'duelistking.com', 'bituan.cc', 'shibavax.io', 'fintropy.io', 'evergrowcoin.com', 'bitwired.com', 'uplift.io', 'genesisproject.xyz', 'dogecoin.cc', 'demole.io', 'bithashex.com', 'hebeswap.com', 'loxcoin.io', 'revuto.com', 'officialspacemonkey.com', 'eprotoken.com', 'almeedex.com', 'btcsquare.net', 'erax.io', 'woth.io', 'seeddex.com', 'bitholic.com', 'triall.io', 'jedstar.app', 'myce.io', 'orion.money', 'crypto-trade.net', 'folgory.com', 'nexchange.io', 'tomb.com', 'dsdaq.com', 'gooreo.com', 'buffswap.io', 'avakus.io', 'ovex.io', 'ikipara.com', 'btc-exchange.com', 'swisexchange.com', 'mainston.com', 'cryptoplanes.me', 'kuswap.finance', 'liquifi.org', 'tennten.com', 'verisafe.io', 'zzex.me', 'binahunter.com', '6x.com', 'cag3.io', 'marsecosystem.com', 'crirmsh.com', 'defiplaza.net', 'ripbit.trade', 'meshswap.fi', 'anxpro.com', 'bitrump.com', 'rimauswap.finance', 'exenpay.com', 'humandataincome.com', 'bexplus.com', 'btcnext.io', 'nbtc.network', 'kaco.finance', 'biss.com', 'moontography.com', 'babyflokicoin.org', 'cybertime.finance', 'paroexchange.com', 'alvare.net', 'amaterasu.fi', 'unitycol.net', 'okcoin.jp', 'palmex.ae', 'binance.us', 'eutaria.com', 'planetfinance.io', 'fargobase.com', 'bitoffer.com', 'free2ex.com', 'cropper.finance', 'fanaticoscriptos.exchange', 'omniexplorer.info', 'heartk.co', 'boostswap.co', 'swashapp.io', 'exu.com', 'uniarts.network', 'mymasterwar.com', 'lunaland.io', 'greenzone.eco', 'bitflip.li', 'newchancecoin.com', 'abelo.finance', 'daddyusdt.finance', 'thoreexchange.com', 'coinchase.com', 'icncde.com', 'gokuex.com', 'wazirx.com', 'bemil.io', 'moonlift.capital', 'aex.com', 'leobit.net', 'elk.finance', 'billtoken.org', 'liquidus.finance', 'paraswap.io', 'b.top', 'soldate.org', 'centurioninu.com', 'uunicorns.io', 'mvp-coin.com', 'betasharex.com', 'inx.co', 'sushi.com', 'bhex.com', 'rekeningku.com', 'solidly.exchange', 'prelax.io', 'xdoge.space', 'btex.me', 'ore.bz', 'mexbt.com', 'coinbook.com', 'optimus.exchange', 'namebase.io', 'socialswap.io', 'crosstower.com', 'ethexindia.com', 'barginex.com', 'vexchange.io', 'virtex.com', 'bybit.com', 'mirror.finance', 'anycoindirect.eu', 'zenlink.pro', 'dcip.finance', 'c-patex.com', 'hakunamatatatoken.com', 'safecex.com', 'polydragon.gold', 'cryptomic.com', 'bosstoken.com', 'paramountdax.com', 'ethermium.com', 'exnomy.com', 'smartcoin.farm', 'coinsbit.io', 'emx.com', 'nasadoge.finance', 'drift.trade', 'binance.org', 'bitfront.me', 'mmacoin.io', 'ostable.org', 'robinhood.com', 'zbx.one', 'tokenize.exchange', 'cryptaldash.com', 'dstoq.com', 'scoremilk.com', 'crystl.finance', 'lcx.com', 'plugdefi.io', 'mydicewallet.com', 'oceanex.pro', 'bfexchange.net', 'beavisandbutthead.club', 'futurafinance.io', 'biswap.org', 'co.id', 'zgtop.io', 'crown-ex.com', 'tradeogre.com', 'nominex.io', 'graviex.net', 'bitcoingrowthfund.com', 'sky.io', 'sinverse.com', 'zapple.com', 'nitroex.io', 'mintpal.com', 'bitforex.com', 'spinada.cash', 'jetprotocol.io', 'exmo.me', 'narkasa.com', 'ardana.org', 'bitconnect.co', 'unicornx.exchange', 'uzyth.com', 'raptoreum.com', 'kuroshiba.one', 'harmonypad.io', 'coinroom.com', 'sunswap.com', 'sakeperp.fi', 'caribmars.finance', 'theflashcurrency.com', 'apedaoremix.com', 'coredax.com', 'gcox.com', 'padd.finance', 'monox.finance', 'defil.org', 'coinsetter.com', 'iobanker.com', 'bitgatti.com', 'coss.io', 'fameex.com', 'luxtrade.online', 'blockchain.com', 'qryptos.com', 'melotic.com', 'dfx.finance', 'lykke.com', 'boofinance.io', 'lhang.com', 'btw18.com', 'digitexfutures.com', 'gamestar.exchange', 'geco.one', 'luckypigtoken.com', 'bloombit.net', 'nevbit.com', 'yape.exchange', 'instaraise.io', 'needyex.net', 'sirex.exchange', 'deip.world', 'abwang.com', 'bitup.finance', 'indodax.com', 'tetherblack.com', 'etoro.com', 'kingcoinexchange.com', 'mononoke-i.nu', 'tokeneco.co', 'sparkswap.finance', 'letskrypto.com', 'voltswap.finance', 'polysage.finance', 'bimix.com', 'gatecoin.com', 'tuxexchange.com', 'stakecube.net', 'ztb.im', 'coincasso.com', 'wanswap.finance', 'bitlocus.com', 'dogex.net', 'geist.finance', 'lfw.finance', 'ccnex.com', 'arthswap.org', 'zg.com', 'babysafemoon.io', 'solv.finance', 'devikins.com', 'nanex.co', 'rainbowtoken.finance', 'bbkx.com', 'julswap.com', 'dcexe.com', 'prelude.io', 'Https:', 'coinhako.com', 'bw.com', 'revivaldefi.com', 'gibxchange.io', 'wault.finance', 'unocoin.com', 'xtime.world', 'btcmax.com', 'vitex.net', 'digiassetindo.com', 'coinweb.io', 'puddingswap.finance', 'hollaex.com', 'digitalworldexchange.com', 'nlexch.com', 'defikingdoms.com', 'paddycoin.net', 'coincola.com', 'kodicoin.com', 'foblgate.com', 'my1ex.com', 'dogeuniverse.org', 'vatican.finance', 'fair.game', 'bitibu.com', 'ttk.gg', 'figtoken.com', 'bitmesh.com', 'wedex.io', 'shirtum.com', 'bitspark.io', 'ybex.co', 'orca.so', 'litebit.eu', 'doren.io', 'rfinex.com', 'z.com', 'compound.finance', 'tsf-network.com', '2chainlinks.com', 'portto.com', 'oasis.app', 'kickex.com', 'toydoge.net', 'smlnft.com', 'rabbitfinance.io', 'nftmall.io', 'budacoin.org', 'tollfreeswap.org', 'gyro.money', 'reflextrader.com', 'cashtelex.com', 'kex.com', 'coolcoin.com', 'etoptraders.com', 'horncryptoexchange.com', 'bloxmove.com', 'nimera.exchange', 'coinsbank.com', 'robinos.finance', 'gari.network', 'supducks.com', 'gro.xyz', 'gummybeans.io', 'bitsane.com', 'foreverfomo.finance', 'abcc.com', 'baibit.io', 'halodex.io', 'bamboorelay.com', 'kswap.finance', 'adamantcoin.com', 'coincorner.com', 'istox.com', 'pizza-bucks.com', 'wearenasty.io', 'novaexchange.com', 'allbridge.io', 'woo.org', 'alts.trade', 'etherdelta.com', 'kollect.cards', 'lasthorde.com', 'torii.finance', 'safemoonspace.net', 'tidebit.com', 'traderone.exchange', 'cryptorex.com', 'crypxie.com', 'satoexchange.com', 'bibo.gold', 'polypup.finance', 'virtuse.com', 'kyrrex.com', 'cryptoniterelief.com', 'bitcoke.com', 'thexhunter.com', 'prodax.io', 'globedx.com', 'bitbase.io', 'xevenue.com', 'qmall.io', 'carboneco.trade', 'colawork.com', 'billance.com', 'probitex.com', 'ceoex.com', 'freeriver.exchange', 'vegaswap.io', 'bitspay.io', 'solhamster.space', 'onederx.com', 'tokocrypto.com', 'dogebonk.com', 'nulagoon.com', 'aave.com', 'hodlada.one', 'solster.finance', 'bitparax.com', 'globalcryptox.com', 'eidoo.exchange', 'ex-crypto.com', 'btrlexchange.com', 'x-bt.com', 'cryptohub.online', 'mochiswap.io', 'bullishapes.com', 'coinbig.org', 'cobinhood.com', 'blocsport.one', 'evmoswap.org', 'tryvium.io', 'meowswap.net', 'bitfare.io', 'wemp.world', 'matry.io', 'duedex.com', 'urgaming.io', 'sypool.io', 'alcor.exchange', 'zbtcex.com', 'blockchain.io', 'stellarterm.com', 'allbit.com', 'hashkey.com', 'c2cx.com', 'mycoinstory.com', 'aofex.com', 'pinkswap.finance', 'zaif.jp', 'balkari.io', 'pionex.com', 'diginu.io', 'galaxyadventure.io', 'dgex.com', 'kitesync.io', 'purrnelopescountryclub.com', 'nxt-e.com', 'waves.exchange', 'jiamix.com', 'deficonnect.tech', 'rubic.exchange', 'zedxion.com', 'dogeracing.net', 'taibi.io', 'uex.com', 'coinut.com', 'altsbit.com', 'crypto-bridge.org', 'deepcoin.com', 'playermon.com', 'karatbit.com', 'dogira.net', 'squirrex.com', 'subsquid.io', 'eldex.finance', '1inch.exchange', 'frakt.art', 'forkdelta.app', 'bnbpay.io', 'bqex.vip', 'dbzcoin.com', 'fairyswap.finance', 'archangeltoken.com', '9ex.com', 'blade.exchange', 'binance.je', 'vaultdefi.com', 'bhexchain.com', 'nicehash.com', 'dxbxchange.io', 'eqonex.com', 'e-dinar.io', 'ftx.us', 'boozedoge.finance', 'lelouchlamperouge.org', 'elitheum.co', 'adaboytoken.com', 'com.au', 'ankerswap.com', 'coinplace.pro', 'tomochain.com', 'ontrade.com', 'siki.io', 'synchrobit.io', 'kuangex.com', 'autocrypto.ai', 'civilixation.com', 'metalx.com', 'grapes.network', 'bksbex.biz', 'good-exchange.com', 'dfbtc.org', 'minersdefi.com', 'retrocadep2e.com', 'unidex.market', 'hpt.com', 'thinkium.net', 'knucklestoken.co', 'bcnex.net', 'taxa.network', 'digitex.io', '1inch.io', 'bitfex.trade', 'dgtmarket.com', 'cointradecx.com', 'latoken.com', 'bitex.la', 'ertha.io', 'toucan.earth', 'thorchain.org', 'egoras.com', 'happyfans.club', 'isx.is', 'dex-trade.com', 'latteswap.com', 'easycoin.pl', 'cbx.one', 'hotbit.io', 'stormgain.com', 'fcntoken.com', 'winwinwintoken.com', 'cremepieswap.finance', 'pokedx.app', 'co.jp', 'nanu.exchange', 'princeflokiinu.com', 'starrynift.art', 'cryptomkt.com', 'roningamez.io', 'poloniex.org', 'minswap.org', 'mahaswap.com', 'benswap.cash', 'roseflower.finance', 'daikokuten.finance', 'lcp.exchange', 'getwhackd.org', 'hb-wallet.com', 'fides-ex.com', 'gogetainu.io', 'daosquare.io', 'co.ug', 'trustkeys.network', 'farmersonly.fi', 'derived.fi', 'dosetoken.com', 'cryptoderivatives.market', 'cryptoplanet.game', 'thebullishtoken.com', 'tipinu.io', 'tapme.pet', 'monstainfinite.com', 'ledgerx.com', 'hoo.com', 'domitai.com', 'cryptex.biz', 'bitturex.com', 'coinquista.com', 'bittrex.com', 'avanyan.io', 'iex.net', 'ethfinex.com', 'mrpicklesnft.com', 'com.tr', 'binance.com', 'nagax.com', 'moonswap.fi', 'polyalpha.finance', '4swap.org', 'bibull.com', 'dexfinance.com', 'hifigamingsociety.com', 'crypterum.com', 'oolongswap.com', 'arata.io', 'perp.exchange', 'tgdao.io', 'origamimoon.io', 'sombra.app', 'sans.finance', 'coindcx.com', 'bitbays.com', 'zebitex.com', 'oex.com', 'doufex.com', 'github.com', 'zks.app', 'bakkt.com', 'biteeu.com', 'thesphynx.co', 'fodl.finance', 'netswap.io', 'emiswap.com', 'klaygames.io', 'coremultichain.com', 'vpex.io', 'micropets.io', 'youswap.com', 'nftrade.com', 'localcoin.is', 'coinbuy.cash', 'tarmex.io', 'bitcoinbing.io', 'ddex.io', 'indomex.com', 'ninjaprotocol.io', 'joyso.io', 'mimo.finance', 'bitz.com', 'b8wang.com', 'rugzombie.io', 'beibt.com', 'pangolin.exchange', 'flamingo.finance', 'infbundle.io', 'dekuinu.com', 'coinuma.com', 'sasukeinu.net', 'bitexbook.com', 'huckleberry.finance', 'moonswap.in', 'centralex.com', 'ref.finance', 'coinhub.io', 'chainx.kr', 'coinjar.com', 'protonswap.com', 'rewardscointoken.com', 'coinall.com', 'hzmcoin.com', 'coinano.com', 'cheeseswap.app', 'flata.exchange', 'luckylion.io', 'cpdax.com', 'ripplefox.com', '365.stream', 'nethernft.io', 'clearpool.finance', 'jelurida.com', 'ribbon.finance', 'memegames.studio', 'beets.fi', 'bitsprox.pro', 'mento.finance', 'coinex.com', 'beeex.com', 'growthdefi.com', 'bitchein.com', 'opendao.io', 'c-trade.com', 'picostocks.com', 'hubi.com', 'swiftfinance.farm', 'aryana.io', 'coineal.com', 'strike.org', 'flowbtc.com', 'bluehorizon.art', 'karusstarter.com', 'pappay.net', 'equilibrium-games.com', 'staderlabs.com', 'koinbazar.com', '58ex.com', 'panda.co', 'valueliquid.io', 'hotcoin.com', 'anondax.com', 'sokuswap.finance', 'bitgrail.com', 'kapytal.io', 'riot.fun', 'terraswap.io', 'yuppex.com', 'polyx.net', 'solyard.finance', 'gokuinu.io', 'neblidex.xyz', 'terrafloki.io', 'hoodrat.finance', 'dendomains.com', 'tradebytrade.com', 'infinitypad.com', 'bitsails.com', 'hydradex.org', 'silvertoken.com', 'namiinu.com', 'bitblue.com', 'dexfin.com', 'xfinite.io', 'dogeback.finance', 'pikachuinu.com', 'gokumarket.com', 'picipo.io', 'mooniswap.exchange', 'mprogame.com', 'monatr.jp', 'trade.io', 'senbit.com', 'next.exchange', 'unifiprotocol.com', 'uzumakitoken.com', 'obroktoken.com', 'cpos.cloud', 'huax.com', 'nicorobininu.com', 'interlude.gg', 'deus.finance', 'bitway.cc', 'acdx.io', 'wanda.exchange', 'sashimi.cool', 'bundle.africa', 'swapx.org', 'asunatoken.com', 'jup.ag', 'secretswap.io', 'vvs.finance', 'tokok.com', 'arken.finance', 'dogsofelon.io', 'bulldogswap.com', 'raydium.io', 'binance8.finance', 'altilly.com', 'idax.pro', 'btxpro.com', 'cryptoliontoken.org', 'aquagoat.finance', 'iswap.com', 'quickswap.exchange', 'koinim.com', 'amy.finance', 'affinitybsc.com', 'rmrk.app', 'ecotechcoin.io', 'etherflyer.com', 'trickle.cloud', 'bitkub.com', '867crypto.com', 'ninjaswap.app', 'bitcornproject.com', 'beldex.io', 'memeflate.io', 'mtggold.com', 'biduobao.com', 'dynamix.finance', 'minter.network', 'bitkonan.com', 'realtrumptoken.com', '19800.com', 'cotrader.com', 'chainge.finance', 'thunderswap.finance', 'nftynetwork.io', 'okcoin.com', 'playvalkyr.io', 'astrogold.finance', 'gatsbyinueth.com', 'co.kr', 'infinitycoin.exchange', 'matrixetf.finance', 'platypus.finance', 'bitok.com', 'polyient.games', 'bitmex.com', 'defira.com', 'nowex.io', 'freiexchange.com', 'kwenta.io', 'shibacorgi.dog', 'mine.network', 'qtrade.io', 'pstake.finance', 'swipe.org', 'megacrypton.com', 'bcmhunt.com', 'balanced.network', 'autoshark.finance', 'oasislaunch.me', 'undergroundwarriors.io', 'bfx.nu', 'ezbtc.ca', 'huobiar.com', 'dassetx.com', 'coinbene.com', 'mars4.me', 'localtrade.cc', 'mintme.com', 'hpdex.org', 'moondex.io', 'fexpro.io', 'mojitoswap.finance', 'adadex.tools', '2-gather.com', 'bitseven.com', 'tastenfts.com', 'coinswap.com', 'vsex.pro', 'spaceport.to', 'blockius.io', 'walkex.com', 'surgeinu.com', 'prizmbit.com', 'virtualworldland.com', 'wallstreetbets.com', 'bitfish.io', 'jbex.com', 'shortex.net', 'instinct.game', 'btcmex.com', 'bitkop.com', 'anchorswap.finance', 'metaspatial.io', 'paritex.com', 'kokomoswap.io', 'starsharks.com', 'rickmorty.io', 'citex.io', 'trdctoken.com', 'magicdoge.net', 'polybeta.finance', 'zondaglobal.com', 'coingi.com', '51szzc.com', 'persona.exchange', 'bgogo.com', 'streetrunner.io', 'dogesbowl.com', 'biconomy.com', 'nexuscrypto.com', 'injective.exchange', 'saturn.network', 'coinxpad.io', 'getbtc.org', 'coinalpha.app', 'spookyswap.finance', 'naijacrypto.com', 'doraemoninueth.com', 'nexex.io', 'hashfort.exchange', 'sheesh.finance', 'decredit.io', 'chiliz.net', 'tracer.finance', 'morpheusswap.finance', 'bitay.com', 'cuep.io', 'lub.exchange', 'caash.io', 'dogecola.finance', 'intercore.trade', 'chimpyswap.com', 'dank-protocol.com', 'sinegy.com', 'lokivariants.com', 'bho.network', 'dfistarter.io', 'imperialobelisk.net', 'ocx.com', 'probit.com', 'pavecoins.com', 'poof.cash', 'coinfield.com', 'granc-chain.com', 'aldrin.com', 'trxgold.org', 'tokens.net', 'weld.money', 'metamorph.pro', 'bithumb.com', 'flokipup.com', 'zebpay.com', 'xcalibra.com', 'thorswap.finance', 'spacexfloki.io', 'asiax.live', 'voltage.finance', 'in.th', 'bitglobal.com', 'treasureland.market', 'tetra-hedra.com', 'xfutures.io', 'tradefighter.io', 'cryptodao.com', 'mechmaster.io', 'ix.com', 'bitcointoyou.com', 'babyharmony.app', 'bitclover.io', 'cryptal.com', 'cybex.io', 'hpx.com', 'bithesap.com', 'xhashtag.io', 'flokifrunkpuppyx.com', 'unitedemiratedecentralizedcoin.com', 'prixbit.com', 'shibance.info', 'babyarmy.io', 'galaxer.io', 'multi.io', 'onblock.me', 'delta.exchange', 'shibapuppytoken.com', 'divinedao.com', 'revest.finance', 'revault.network', 'token.store', 'bkex.com', 'moonbird.finance', 'bbx.com', 'ubeswap.org', 'vertbase.com', 'mexo.io', 'dogecoindark.net', 'lnncoin.com', 'bitstamp.net', 'heatwallet.com', 'demeter.xyz', 'parrotdefi.com', 'traderjoexyz.com', 'kingcoiny.com', 'xsigma.fi', 'poswallet.com', 'orionx.com', 'burgerswap.org', 'coindiscovery.app', 'buyucoin.com', 'dsx.uk', 'mtobit.com', 'infinitx.io', 'minikishu.net', 'londex.io', 'mindmusic.finance', 'monetago.com', 'co.za', 'klend.finance', 'muda.exchange', 'eunex.co', 'exolix.com', 'jex.com', 'bione.info', 'coinrate.net', 'giottus.com', 'lydia.finance', 'wiggly.finance', 'dent.exchange', 'openocean.finance', 'babyethv2.com', 'strongnode.io', 'gdex.io', 'loex.io', 'daddyyorkie.finance', 'crypto.com', 'switchbit.org', 'rcexchanger.com', 'btcdo.com', 'rinnegan.games', 'dogegf.com', 'nix-e.com', 'bitsten.com', 'ws.exchange', 'b4uwallet.com', 'kyberswap.com', 'xbts.io', 'btcnia.com', 'exenium.net', 'powerada.net', 'zipmex.com', 'finexbox.com', 'monsterisland.online', 'luno.com', 'azbit.com', 'paybswap.finance', 'mm.finance', 'futureswap.com', 'billiontoken.com', 'mynxt.info', 'infernopay.io', 'bex.io', 'blockben.com', 'londefy.com', 'plentydefi.com', 'globitex.com', 'greenexcrypto.com', 'knightswap.financial', 'exx.com', 'bithumbsg.com', 'nftgallery.fund', 'sob.finance', 'czodiac.com', 'octaplex.io', 'ijascoin.net', 'indoex.io', 'doge-drinks.com', 'wallfair.io', 'txbit.io', 'oasisexc.com', 's-one.finance', 'bytepowerx.com', 'nezukoinu.com', 'crossexchange.io', 'cryptonex.org', 'valuex.cc', 'amasa.io', 'spacebtc.com', 'tokyojpy.com', 'moneydefiswap.net', 'vee.finance', 'ecn.global', 'mobydicktoken.net', 'starex.ceo', 'kraken.com', 'blowupbsc.com', 'paintswap.finance', 'thetanarena.com', 'crbcoin.org', 'cilkroad.com', 'eswap.tube', 'burstnation.com', 'sigen.pro', 'hakuswap.com', 'bitbns.com', 'inrtoken.io', 'potluckprotocol.com', 'atomicdex.io', 'scarecrow.fi', 'f9launch.com', 'cryptoine.com', 'coindeal.com', 'honeyswap.org', 'dach.exchange', 'welnance.finance', 'bitnomial.com', 'btcturk.com', 'dogehousecapital.com', 'spookyinu.com', 'bitcoinvn.io', 'kucoin.com', 'zigzag.exchange', 'decoin.io', 'klimadao.finance', 'sabiii.com', 'yo-ex.com', 'kinta.world', 'occam-x.fi', 'kwikswap.org', 'bitrus.com', 'lotusbsc.com', 'bit520.com', 'blockdx.net', 'delosdefi.com', 'hundred.finance', 'lakebtc.com', 'buffdogecoin.io', 'digitalexchange.id', 'Jumbo.exchange', 'dogepepsi.com', 'coinedup.com', 'morcrypto-exchange.com', 'incognito.org', 'synapseprotocol.com', 'alephzero.org', 'bitasset.pro', 'zercados.com', 'okex.com', 'bxlend.com', 'galaxyheroescoin.com', 'ccxcanada.com', 'carbon-neutral.earth', 'fmall.io', 'uwufufu.com', 'duckydefi.com', 'mavax.network', 'qb.com', 'twotwoart.com', 'ukex.io', 'cdz.exchange', 'masterxchange.com', 'spartanprotocol.org', 'simar.gl', 'bittylicious.com', 'taobizu.com', 'piggy.fi', 'chbtc.com', 'loop.markets', 'dashcurex.com', 'bittop.com', 'altmarkets.io', 'inft.io', 'eaglevisionada.io', 'thepinkinu.com', 'polyzap.finance', 'ysoychain.farm', 'integral.link', 'robiniaswap.com', 'babyyorkie.finance', 'satangcorp.com', 'yellowcard.io', 'resfinex.com', 'deversifi.com', 'koinal.io', 'chimeras.io', 'darkmatterdefi.com', 'mdex.com', 'cexland.com', 'playroyal.com', 'kalata.io', 'tuminium.com', 'xxxanime.app', 'melotoken.com', 'kaidex.io', 'spectrocoin.com', 'beamswap.io', 'defina.finance', 'greenbeli.io', 'bityard.com', 'bitfari.org', 'thalesmarket.io', 'creekex.com', 'jax.network', 'gaiaworld.com', 'ssv.network', 'o3swap.com', 'genieprotocol.net', 'swappi.io', 'coinidc.com', 'bingus.io', 'bitfineon.com', '5iqt.org', 'mrhb.network', 'stex.com', 'muesliswap.com', 'uniswap.org', 'nami.exchange', 'nxt-token.com', 'upxide.com', 'yfx.com', 'biki.cc', 'daoinvest.org', 'xuebi.io', 'thorecash.app', 'virgox.com', 'tyslin.com', 'buffaloswap.org', 'wingswap.io', 'aegislaunchpad.com', 'kawaii.global', 'thedragonslair.farm', 'fivestarexchange.in', 'koinex.in', 'caliente.fun', 'koindex.io', 'kickstarter.space', 'vb.co', 'bit.com', 'bitroom.io', 'spiritswap.finance', 'bitci.com', 'infinitygame.io', 'bean.money', 'claimswap.org', 'ice3.com', 'parabolictoken.com', 'oculusvision.io', 'planetsandbox.io', 'worthwhilecoin.io', 'guarda.com', 'babycare.to', 'bitcoinsnorway.com', 'swanlana.com', 'dafribank.com', 'nexusmutual.io', 'ubex.one', 'pokmonsters.com', 'astroswap.app', 'swop.fi', 'thorus.fi', 'centrifuge.io', 'coinlim.com', 'gdac.com', 'ownix.com', 'altex.io', 'bytex.io', 'youclout.com', 'fegnomics.live', 'cryowar.com', 'com.ua', 'afrodexlabs.com', 'phemex.com', 'mondo-coin.com', 'chipstars.bet', 'quipuswap.com', 'incx.trade', 'waterfalldefi.org', 'nomiswap.io', 'crix.io', 'polydex.org', 'socialnft.market', 'flowerpatch.app', 'knightwar.io', 'onecash.asia', 'forwardprotocol.io', 'bitcoinupbit.com', 'coingather.com', 'oxbull.tech', 'btlux.co', 'odapp.io', 'collartoken.com', 'changeinvest.com', 'mr-ripple.com', 'wbfex.com', 'atomars.com', 'loopring.io', 'bitozz.com', 'bb.exchange', 'bitai.io', 'cryptobuyer.io', 'petkingdom.io', 'okx.com', 'ganza.trade', 'dynx.io', 'belt.fi', 'ezexchange.com', 'polkaex.io', 'bitpanda.com', 'ssbtoken.com', 'Utopia.cc', 'google.com', 'chameleonbit.trade', 'cherryswap.net', 'bitbuy.ca', 'ibg.finance', 'yacuna.com', 'hitbtc.com', 'viper.exchange', 'openswap.one', 'emirex.com', 'flatswap.exchange', 'warena.io', 'buffer.finance', 'yobtc.com', 'piexgo.com', 'com.co', 'magicland.fi', 'smilecoin.us', 'kuna.io', 'cryptowheelers.com', 'waco-token.com', 'flare.xyz', 'safemoonavax.com', 'secretanalytics.xyz', 'tinyman.org', 'klascoin.com', 'karura.network', 'amanpuri.io', 'ripio.com', 'solum.finance', 'autoshark.info', 'indexcoop.com', 'dbx.so', 'eosex.com', 'dragonex.io', 'liquid.com', 'mintyswap.com', 'trustdex.io', 'binance.uk', 'ccryptoex.com', 'parrot.fi', 'owldao.io', 'chatex.com', 'beatbind.io', 'yuzu-swap.com', 'bithance.com', 'label.foundation', 'oct.network', 'coincheck.com', 'fatbtc.com', 'squidgameprotocol.io', 'scandefi.net', 'ichi.org', 'aquarius.fi', 'rijentcoin.com', 'rocketglobal.io', 'transientnetwork.io', 'retrofarms.net', 'prcoin.io', 'paymium.com', 'decentraweb.org', 'colonylab.io', 'haobtc.com', 'cex.plus', 'antares.exchange', 'fruitsc.org', 'cointiger.com', 'wrappednyc.com', 'fishytank.io', 'decentra-ecosystem.com', 'bullish.com', 'xceltoken.com', 'btcc.com', 'aax.com', 'leoxchange.com', 'dagx.live', 'blocto.app', 'atomic-trade.com', 'exchangily.com', 'twcx.io', 'flokinomics.com', 'elpis.game', 'blocktane.io', 'abit.com', 'bitexen.com', 'pandaex.org', 'zenithchain.co', 'dfex.com', 'dodoex.io', 'subme.cash', 'instantbitex.com', 'tokenmom.com', 'cybercat.world', 'woj.finance', 'investin.pro', 'symmetric.finance', 'answerly.app', 'umex.co', 'bitribe.com', 'fdex.com', 'kamiland.games', 'bitladon.com', 'carbonswap.exchange', 'bter.com', 'crypter.io', 'wardenswap.finance', 'bitzure.com', 'projectdogex.com', 'spectre.exchange', 'nextcardano.com', 'goosefx.io', 'idex.io', 'einax.com', 'bitball-dex.com', 'bitsblockchain.com', 'btctrader.com', 'zktube.io', 'gbx.gi', 'mistswap.fi', 'askcoin.net', 'cashierest.com', 'roninchain.com', 'cryptocarsworld.com', 'marketexchange.io', 'blacklemon.wtf', 'beaxy.com', 'xt.com', 'whaleex.com', 'merkle.network', 'pollchain.co', 'defyswap.finance', 'jubi.com', 'bitmaszyna.pl', 'zilswap.io', 'stronghands.exchange', 'khalifa.finance', 'bit4.sale', 'satowallet.com', 'kinesis.money', 'kubecoin.org', 'parallel.fi', 'dangermoon.io', 'stellarport.io', 'flybit.com', 'jokercoin.live', 'bitvast.com', 'astroport.fi', 'aurafi.org', 'maicoin.com', 'kine.io', 'cashpayz.exchange', 'scallopx.com', 'farstcoin.co', 'folkwarriors.org', 'bololex.com', 'bitexlive.com', 'coffin.finance', 'roco.finance', 'darenft.com', 'ctcswap.com', 'coin.mx', 'midas.investments', 'merchanttoken.org', 'bitstorage.finance', 'richamster.com', 'surfacexchanges.com', 'cafeswap.finance', 'sentre.io', 'evrt.app', 'falconx.io', 'woofsolana.io', '1szb.com', 'gunthy.org', 'b2bx.exchange', 'bayebit.com', 'gincoin.co', 'wisebitcoin.com', 'abbex.top', 'bullionfx.com', 'luckyfungames.com', 'bitejiu.com', 'lofi-defi.com', 'kanga.exchange', 'lunarcrush.com', 'bitopro.com', 'marscompany.co', 'alt.market', 'satos.nl', 'astar.network', 'yuanbao.com', 'dotmatrix.finance', 'memenopoly.finance', 'pocmons.com', 'bitcoiva.com', 'equalizer.fi', 'coin-swap.net', 'cryptotrade.exchange', 'stackswap.org', 'gcoxin.com', 'metafish.io', 'rippex.net', 'btcmarkets.net', 'jswap.finance', 'concave.lol', 'dogenomics.net', 'piyasa.net', 'koinomo.finance', 'wildfiretoken.xyz', 'coinrui.com', 'nazadax.com', 'tetu.io', 'bit2me.com', 'thdax.com', 'cronaswap.org', 'bizz.exchange', 'coinexchange.io', 'luaswap.org', 'artofwar.land', 'nftsolpad.com', 'bitnordex.com', 'btse.com', 'yoshi.exchange', 'nakamoto.games', 'bitmart.com', 'pantherprotocol.io', 'sslazio.it', 'paradex.io', 'zb.com', 'decus.io', 'gravityfinance.io', 'spacevikingsllc.com', 'metasoldier.org', 'sifchain.finance', 'bymov.io', 'kava.io', 'alligator.exchange', 'farmersonly.farm', 'trisolaris.io', 'lycaisland.com', 'mcafeedex.com', 'wolfdencrypto.com', 'airswap.io', 'infibtc.com', 'solareum.app', 'daybit.com', 'bl3p.eu', 'zyxswap.com', 'metauniversetoken.com', 'virgo.net', 'furukuru.io', 'bscswap.com', 'capitaldex.exchange', 'sheepdex.org', 'babyfloki.info', 'jetswap.finance', 'ccfox.com', 'flokifrunkpuppy.live', 'tokenplace.com', 'kurobi.io', 'birich.com', 'bitrabbit.com', 'kishimototoken.com', 'infr.kr', 'dragonkart.com', 'quarashi.network', 'vitblock.com', 'basefex.com', 'rawx.io', 'bitport.net', 'bancor.network', 'coinsuper.com', 'exir.io', 'polkabridge.org', 'openswap.xyz', 'bankerdoge.com', 'lbank.info', 'ibitt.co', 'everestcoin.io', 'swaysocial.org', 'thesquidgames.app', 'lukki.io', 'gemini.com', 'hologo.io', 'wonderhero.io', 'mitefx.com', 'babyfortknox.com', 'tokenomica.com', 'cocktailbar.finance', 'pangolinswap.org', 'BALLSWAPPER.COM', 'erisx.com', 'dexalot.com', 'redot.com', 'retreeb.io', 'solanadino.com', 'hopex.com', 'remitano.com', 'gj.com', 'itbit.com', 'tokenomy.com', 'coin-galaxy.com', 'loudnft.co', 'tailstoken.co', 'ucrypt.io', 'otcbtc.com', 'bitclude.com', 'shibxbsc.com', 'babydefido.finance', 'apeswap.finance', 'wbbexchange.pro', 'verofarm.com', 'upcake.net', 'beachtoken.io', 'protofi.app', 'arbifarm.fi', 'tagz.com', 'iotaexchange.com', 'binanomics.com', 'koinde.com', 'darbfinance.com', 'alt5pro.com', 'kainet.world', 'org.in', 'cryptosx.io', 'cryptia.io', 'freebitcoins.com', 'radixdlt.com', 'anscryptocoin.com', 'comkort.com', 'blade.game', 'kryptono.exchange', 'axiebch.com', 'btcxindia.com', 'cryptoisland.com', 'acknoledger.com', 'coinsecure.in', 'cyberbank.me', 'yetiswap.app', 'xmex.co', 'nifty-league.com', 'gojicrypto.com', 'ridotto.io', 'ojamu.com', 'co.nz', 'bvnex.com', 'octaex.com', 'asbazar.com', 'bihodl.com', 'avai.finance', 'bitospher.com', 'ichigoinu.com', 'coinfinit.com', 'marvininueth.com', 'crypto-markets.com', 'saddle.exchange', 'quidika.com', 'openledger.io', 'mcdex.io', 'deri.io', 'fcce.jp', 'synfutures.com', 'battlehero.io', '8bitdoge.com', 'deribit.com', 'mycryptoexbank.com', '888infinity.io', 'bisq.network', 'tokensets.com', 'skybridge.info', 'crex24.com', 'ace.io', 'smartvalor.com', 'scopuly.com', 'altocenter.com', 'envoy.art', 'risq.capital', 'kriptoarena.com', 'btc38.com', 'nestswap.app', 'koopal.com', 'otfi.one', 'pynths.com', 'bitflyer.com', 'fuma.finance', 'dragonwarrior.io', 'acx.io', 'fdmblock.com', 'nash.io', 'dnft.world', 'bunnyrockettoken.com', 'nanoshibainu.io', 'kryza.io', 'coinbe.net', 'polydefi.io', 'solarflare.io', 'bingoex.pro', '5roi.com', 'ageofcryptology.com', 'terra-bit.io', 'lightcoin.io', 'phatdogegivings.com', 'inuanon.com', 'bitcratic.com', 'kick.io', 'nasdex.xyz', 'fit-beat.io', 'solidinstapay.com', 'bilaxy.com', 'escodex.com', 'kangaroocake.com', 'trontrade.io', 'dogmoon.xyz', 'hcoin.com', 'dogeswap.global', 'starchi.gg', 'southxchange.com', 'oswap.io', 'linkswap.app', 'ftx.com', 'apollox.com', 'algebra.finance', 'pancakelock.finance', 'lendconnect.io', 'portify.app', 'fota.com', 'fmex.com', 'solcubator.io', 'bitorado.com', 'arowana.finance', 'bitesax.com', 'conjure.finance', 'bitsmo.io', 'themonopolist.io', 'fastswap.exchange', 'dcoin.com', 'lilfloki.com', 'beaglecake.io', 'daexs.com', 'magiccake.app', 'enterdao.xyz', 'coinbroker.io', 'umi.digital', 'wex.nz', 'chfry.finance', 'tradesatoshi.com', 'steem.io', 'coinmex.com', 'soulswap.finance', 'zeptagram.com', 'co.uk', 'eterbase.com', 'yoco.finance', 'ecoball.org', 'frostedcaketoken.com', 'rumito.org', 'tokencan.com', 'pancakeswap.finance', 'polkaswap.io', 'maison.capital', 'morphie.network', 'legendfantasywar.com', 'aprobit.com', 'cryptobec.com', 'zaigar.finance', 'oak.tech', 'oneswap.net', 'electricarena.io', 'dfyn.network', 'boxch.net', 'avaxtars.com', 'ooobtc.com', 'rokes.exchange', 'lmax.com', 'unnamed.exchange', 'binaryx.com', 'sistemkoin.com', 'localcryptos.club', 'paribu.com', 'exrates.me', 'cryptox.pl', 'shibawallet.cc', 'revolvegames.io', 'libredefi.io', 'btcwinex.com', 'bistox.com', 'polycat.finance', 'communifty.org', 'gsae.com', 'primexbt.com', 'cryptology.com', 'ndax.io', 'gravitx.space', 'pink-nft.com', 'bitonic.nl', 'minisoccertoken.net', 'dassi.finance', 'zooomex.com', 'rightbtc.com', 'cryptobulls.exchange', 'meebmaster.com', 'ttcoin.info', 'p2pb2b.com', 'gamezilla.studio', 'solarbeam.io', 'dex.blue', 'tinyhero.io', 'savitar.io', 'conv.finance', 'bitcoinsb.org', 'blockfinex.com', 'com qiswap.info', 'stephero.io', 'steamexchange.ca', 'coinzo.com', 'angle.money', 'mudguild.com', 'maiar.exchange', 'socean.fi', 'bitskrix.com', 'iqfinex.com', 'justmoney.exchange', 'btc-alpha.com', 'decentrex.com', 'pixelverse.ai', 'hikocoin.com', 'exonium.one', 'fintechonex.com', 'klever.io', 'superlaunch.online', 'exmarkets.com', 'thxchain.com', 'xbond.io', 'pawthereum.com', 'safeswap.online', 'cryptorush.in', 'pollyfinance.com', 'nacdaq.pro', 'wenxpro.com', 'digidinar.com', 'premiumblock.org', 'dex.top', 'tiedaitoken.com', 'hashbit.org', 'euphoria.games', 'iripplechina.com', 'aspo.world', 'btcset.com', 'big.one', 'medabots.game', '247exchange.com', 'shibafantom.finance', 'longbit.com', 'mariotoken.io', 'yarloo.io', 'bitblinx.com', 'eo.trade', 'ceo.bi', 'orionprotocol.io', 'unic.ly', 'openleverage.finance', 'btcbit.net', 'bitwellex.com', 'wannaswap.finance', 'coinflex.com', 'shibaverse.io', 'gamefishiba.io', 'crypcore.com', 'mkr.market', 'projectoasis.io', 'fidex.market', 'momento.art', 'unitedexchange.io', 'btc100.com', 'lido.fi', 'beurop.com', 'klayswap.com', 'serenity.exchange', 'dubiex.com', 'opolis.co', 'hadax.com', 'smartdex.app', 'stockpoint.io', 'towerfinance.io', 'ttswap.space', 'excalibur.exchange', 'ducatuscoins.com', 'btc018.com', 'timex.io', 'gamexchange.app', 'shibaswap.com', 'tfm.com', 'bnbfintech.com', 'btcpro.com', 'energiswap.exchange', 'binance.kr', 'bequant.io', 'xtblock.io', 'cryptobladeskingdoms.io', 'counterwallet.io', 'zeropayfinance.io', 'c-cex.com', 'moonpoly.io', 'galabet.farm', 'cryptopunt.com', 'omgfin.com', 'getgraphene.io', 'bitocto.com', 'kyber.network', 'aenxchange.com', 'dabtc.com', 'omicrex.com', 'sperocoin.org', 'rangersprotocol.com', 'roguewest.io', 'binance.sg', 'codex.one', 'manta.network', 'inanomo.com', 'xixochain.com', 'busta.gg', 'justcoin.com', 'cryptxc.com', 'coins-e.com', 'btb.io', 'holdex.finance', 'csprochain.net', 'brightid.org', 'power.trade', 'hype.it', 'co.th', 'ccbtc.com', 'swiftex.co', 'ore.network', 'armadacrypto.com', 'allcoin.com', 'vires.finance', 'nexybit.com', 'beex.one', 'dsfr.net', 'reverseclimatechange.io', 'babyflokibillionaire.com', 'lizard.exchange', 'tomitoken.org', 'cryptophyl.com', 'solberry.tech', 'winstex.com', 'deathroad.io', 'labrotix.com', 'uswap.me', 'redfloki.com', 'script.tv', 'cosmicmusic.io', 'bitso.com', 'fomochronicles.com', 'changelly.com', 'bit4you.io', 'photonswap.finance', 'binopoly.co', 'radar.tech', 'canary.exchange', 'aroundnetwork.io', 'balancer.fi', 'cratostoken.com', 'littlebunnyrocket.com', 'scalpex.com', 'rocketlaunchpad.io', 'tokenswap.info', 'baby-dogex.com', 'homiex.com', 'Lucky1Token.com', 'treatdao.com', 'defiscan.live', 'virgocx.ca', 'mybitexa.com', 'dydx.exchange', 'trbinance.com', 'rockstar-doge.com', 'bodatoken.org', 'sunrisetokens.com', 'cg.net', 'counos.world', 'neraex.pro', 'vebitcoin.com', 'babydogemoneymaker.com', 'alphaex.net', 'amorswap.farm', 'aqarchain.io', 'cryptosoccergames.com', 'bitzon.com', 'apollox.finance', 'divs.io', 'ok-bit.com', 'darkfrontiers.com', 'pokmi.com', 'canbit.com', 'mercatox.com', 'bitvo.com', 'streetswap.vip', 'bibox.com', 'coinfalcon.com', 'unitedfarmers.finance', 'nocks.com', 'alpaca.baby', 'coinhub.mn', 'bitexblock.com', 'cryptofresh.com', 'bitsoda.com', 'osl.com', 'quantaex.com', 'sparrowexchange.com', 'gemguardian.io', 'cgcx.io', 'touzibi.com', 'exbito.com', 'babyswap.finance', 'savecardano.com', 'bitxmi.com', 'bombcrypto.io', 'artworknft.finance', 'burningmoon.xyz', 'fomobaby.app', 'sunflowerfi.org', 'usecryptos.com', 'coinsbit.in', 'loyalbit.com', 'bleutrade.com', 'nftsocial.app', 'cryptlodex.com', 'falconswaps.com', 'binaryx.pro', 'aphelion.org', 'socialsend.net', 'lukutex.com', 'hb.top', 'depth.fi', 'defixbet.com', 'olympusdao.finance', 'rugseekers.online', 'cointofish.io', 'gamefox.io', 'aidosmarket.com', 'yunex.io', 'silverstonks.io', 'timebit.sg', 'coinvc.com', 'top1.one', 'goodgamesguild.com', 'dollaremon.fi', 'sologenic.org', 'timekoin.com', 'lpi.finance', 'shibabch.com', 'cryptonit.net', 'cpufinex.com', 'getsafle.com', 'arbis.finance', 'lovesswap.farm', 'plasma.finance', 'eurekax.io', 'btc9.com', 'credoex.com', 'marsrise.net', 'localbitcoins.com', 'com.br', 'thodex.com', 'tokpie.io', 'btcexa.com', 'criptoloja.io', 'bitebi9.com', 'yobit.net', 'minifloki.io', 'ore-system.com', 'xcrypt.pro', 'ajubit.com', 'extstock.com', 'newdex.io', 'boboo.com', 'timeleap.finance', 'solrazr.com', 'bityes.com', 'ideanet.nz', 'coinswap.space', 'coinone.fi', 'polkastarter.com', 'inutoken.io', 'ioen.tech', 'yourtoken.app', 'crxzone.com', 'valr.com', 'xmoon.exchange', 'nxt.org', 'unidax.com', 'dopex.io', 'bitturk.com', 'halo.land', 'beyond.link', 'elegro.eu', 'okcoin.cn', 'angelheart.io', 'tidex.com', 'igt-crypto.net', 'ezb.com', 'bitfxt.com', 'drgx.io', '50x.com', 'adonis.exchange', 'dystopia.exchange', 'zubr.io', 'bunicorn.exchange', 'vglobalex.com', 'way2happiness.info', 'bifrost.finance', 'bitbank.cc', 'braziliex.com', 'xminefinance.com', 'luto.xyz', 'x3swap.com', 'velic.io', 'altexchanger.com', 'bernard.finance', 'betaex.com', 'leverj.io', 'betconix.com', 'hswap.com', 'new.capital', 'ixx.com', 'bitfinex.com', 'losnft.io', 'moneytreecoin.io', 'quidax.com', 'ataix.com', 'chainfi.tech', 'alterdice.com', 'asproex.com', 'whitebit.com', 'swft.pro', 'bxh.com', 'clipper.exchange', 'ex-sports.io', 'bitmarket.net', 'coinlist.co', 'saylorverse.com', 'makiswap.com', 'borsadex.com', 'dimitra.io', 'amplifyexchange.com', 'jinniu.pro', 'squeezetoken.finance', 'babybonfire.io', 'revolotto.net', 'odee.com', 'boaexchange.com', 'conductiveresearch.com', 'fubt.co', 'baguswallet.net', 'goswap.exchange', 'livetrade.io', 'ionomy.com', 'jetcrypto.com', 'bitazza.com', 'superwhale.com', 'letsbit.io', 'wenwen.money', 'multigateway.org', 'coinsmarkets.com', 'nexdax.com', 'tradekax.com', 'gamefi.ai', 'viabtc.com', 'curve.fi', 'alpha5.io', 'kingshibaofficial.com', 'raisex.io', 'garantex.io', '5150.win', 'exchangeist.com', 'curetoken.net', 'socios.com', 'agrinoble.finance', 'bcex.kr', 'ggbtc.com', 'imoex.top', 'soakmont.com', 'bingx.com', 'rocketventure.io', 'kulap.io', 'heroarena.app', 'coexstar.ph', 'switcheo.network', 'astrodoggy.io', 'xgoldcoins.io', 'xbullion.io', 'successinu.online', 'letsallsimp.com', 'astrofarms.finance'],
		highRiskSite: [],
		reportedSite: [],
		highRiskKeyword: ['seed phrase'],
	};
	const $1a91521960f0ed9e$var$cache = !0;
	function $1a91521960f0ed9e$var$isCurrentPathname(path) {
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

	function $1a91521960f0ed9e$var$getManifest(_version) {
		return globalThis.chrome?.runtime?.getManifest?.();
	}

	function $1a91521960f0ed9e$var$once(function_) {
		let result;
		return () => ($1a91521960f0ed9e$var$cache && void 0 !== result || (result = function_()),
		result);
	}

	const $1a91521960f0ed9e$export$e7c4a1c4ed7f09ac = $1a91521960f0ed9e$var$once((() => globalThis.location?.protocol.startsWith('http'))); const $1a91521960f0ed9e$export$1291dbea3b2eb4e1 = $1a91521960f0ed9e$var$once((() => typeof globalThis.chrome?.extension === 'object')); const $1a91521960f0ed9e$export$d0790c2ac1fc6894 = ($1a91521960f0ed9e$var$once((() => $1a91521960f0ed9e$export$1291dbea3b2eb4e1() && $1a91521960f0ed9e$export$e7c4a1c4ed7f09ac())),
	() => $1a91521960f0ed9e$export$ede7a9f5470a0118() || $1a91521960f0ed9e$export$933c8adc355f9a14()); const $1a91521960f0ed9e$export$ede7a9f5470a0118 = $1a91521960f0ed9e$var$once((() => {
		const manifest = $1a91521960f0ed9e$var$getManifest();
		return !(!manifest || !$1a91521960f0ed9e$var$isCurrentPathname(manifest.background_page || manifest.background?.page)) || Boolean(manifest?.background?.scripts && $1a91521960f0ed9e$var$isCurrentPathname('/_generated_background_page.html'));
	})); const
		$1a91521960f0ed9e$export$933c8adc355f9a14 = $1a91521960f0ed9e$var$once((() => $1a91521960f0ed9e$var$isCurrentPathname($1a91521960f0ed9e$var$getManifest()?.background?.service_worker)));
	$1a91521960f0ed9e$var$once((() => {
		if (!$1a91521960f0ed9e$export$1291dbea3b2eb4e1() || !chrome.runtime.getManifest) {
			return !1;
		}

		const {options_ui: optionsUi} = chrome.runtime.getManifest();
		if (typeof optionsUi?.page !== 'string') {
			return !1;
		}

		return new URL(optionsUi.page, location.origin).pathname === location.pathname;
	})), $1a91521960f0ed9e$var$once((() => {
		if (!$1a91521960f0ed9e$export$1291dbea3b2eb4e1() || !chrome.devtools) {
			return !1;
		}

		const {devtools_page: devtoolsPage} = chrome.runtime.getManifest();
		if (typeof devtoolsPage !== 'string') {
			return !1;
		}

		return new URL(devtoolsPage, location.origin).pathname === location.pathname;
	}));
	function $fdd0aaa2d9b88141$var$throttle(delay, noTrailing, callback, debounceMode) {
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

	class $fdd0aaa2d9b88141$var$TypeRegistry {
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
	class $fdd0aaa2d9b88141$var$KeyExtractors extends $fdd0aaa2d9b88141$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault((element => element.getAttribute('name') || ''));
		}
	}
	class $fdd0aaa2d9b88141$var$InputReaders extends $fdd0aaa2d9b88141$var$TypeRegistry {
		constructor(options1) {
			super(options1), this.registerDefault((element => element.value)), this.register('checkbox', (element => element.getAttribute('value') !== null ? (element.checked ? element.getAttribute('value') : null) : element.checked)),
			this.register('select', (element => (function (element_) {
				let value; let option; let i; const options = element_.options; const index = element_.selectedIndex; const one = 'select-one' === element_.type;
				let values = one ? null : [];
				let max = one ? index + 1 : options.length;
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
	class $fdd0aaa2d9b88141$var$KeyAssignmentValidators extends $fdd0aaa2d9b88141$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault((() => !0)), this.register('radio', (element => element.checked));
		}
	}
	function $fdd0aaa2d9b88141$var$keySplitter(key) {
		let lastKey; const
			matches = key.match(/[^[\]]+/g);
		return key.length > 1 && key.indexOf('[]') === key.length - 2 && (lastKey = matches.pop(),
		matches.push([lastKey])), matches;
	}

	function $fdd0aaa2d9b88141$var$getElementType(element) {
		let typeAttr; const tagName = element.tagName; let
			type = tagName;
		return tagName.toLowerCase() === 'input' && (typeAttr = element.getAttribute('type'),
		type = typeAttr || 'text'), type.toLowerCase();
	}

	function $fdd0aaa2d9b88141$var$getInputElements(element, options) {
		return Array.prototype.filter.call(element.querySelectorAll('input,select,textarea'), (element_ => {
			if (element_.tagName.toLowerCase() === 'input' && (element_.type === 'submit' || element_.type === 'reset')) {
				return !1;
			}

			const myType = $fdd0aaa2d9b88141$var$getElementType(element_); const identifier = options.keyExtractors.get(myType)(element_); const foundInInclude = (options.include || []).includes(identifier); const foundInExclude = (options.exclude || []).includes(identifier); let foundInIgnored = !1; let
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

	function $fdd0aaa2d9b88141$var$assignKeyValue(object, keychain, value) {
		if (!keychain) {
			return object;
		}

		const key = keychain.shift();
		return object[key] || (object[key] = Array.isArray(key) ? [] : {}), keychain.length === 0 && (Array.isArray(object[key]) ? value !== null && object[key].push(value) : object[key] = value),
		keychain.length > 0 && $fdd0aaa2d9b88141$var$assignKeyValue(object[key], keychain, value),
		object;
	}

	function $fdd0aaa2d9b88141$var$serialize(element, options = {}) {
		let data = {};
		return options.keySplitter = options.keySplitter || $fdd0aaa2d9b88141$var$keySplitter,
		options.keyExtractors = new $fdd0aaa2d9b88141$var$KeyExtractors(options.keyExtractors || {}),
		options.inputReaders = new $fdd0aaa2d9b88141$var$InputReaders(options.inputReaders || {}),
		options.keyAssignmentValidators = new $fdd0aaa2d9b88141$var$KeyAssignmentValidators(options.keyAssignmentValidators || {}),
		Array.prototype.forEach.call($fdd0aaa2d9b88141$var$getInputElements(element, options), (element_ => {
			const type = $fdd0aaa2d9b88141$var$getElementType(element_); const key = options.keyExtractors.get(type)(element_); const
				value = options.inputReaders.get(type)(element_);
			if (options.keyAssignmentValidators.get(type)(element_, key, value)) {
				const keychain = options.keySplitter(key);
				data = $fdd0aaa2d9b88141$var$assignKeyValue(data, keychain, value);
			}
		})), data;
	}

	class $fdd0aaa2d9b88141$var$InputWriters extends $fdd0aaa2d9b88141$var$TypeRegistry {
		constructor(options) {
			super(options), this.registerDefault(((element, value) => {
				element.value = value;
			})), this.register('checkbox', ((element, value) => {
				value === null ? element.indeterminate = !0 : element.checked = Array.isArray(value) ? value.includes(element.value) : value;
			})), this.register('radio', ((element, value) => {
				void 0 !== value && (element.checked = element.value === value.toString());
			})), this.register('select', $fdd0aaa2d9b88141$var$setSelectValue);
		}
	}
	function $fdd0aaa2d9b88141$var$setSelectValue(element, value) {
		for (var optionSet, option, array, returnValue, options = element.options, values = (returnValue = [],
			(array = value) !== null && (Array.isArray(array) ? returnValue.push.apply(returnValue, array) : returnValue.push(array)),
			returnValue), i = options.length; i--;) {
			option = options[i], values.includes(option.value) && (option.setAttribute('selected', !0),
			optionSet = !0);
		}

		optionSet || (element.selectedIndex = -1);
	}

	function $fdd0aaa2d9b88141$var$keyJoiner(parentKey, childKey) {
		return parentKey + '[' + childKey + ']';
	}

	function $fdd0aaa2d9b88141$var$flattenData(data, parentKey, options = {}) {
		const flatData = {}; const
			keyJoiner$1 = options.keyJoiner || $fdd0aaa2d9b88141$var$keyJoiner;
		for (let keyName in data) {
			if (!data.hasOwnProperty(keyName)) {
				continue;
			}

			const value = data[keyName]; let
				hash = {};
			parentKey && (keyName = keyJoiner$1(parentKey, keyName)), Array.isArray(value) ? (hash[keyName + '[]'] = value,
			hash[keyName] = value) : (typeof value === 'object' ? hash = $fdd0aaa2d9b88141$var$flattenData(value, keyName, options) : hash[keyName] = value),
			Object.assign(flatData, hash);
		}

		return flatData;
	}

	function $fdd0aaa2d9b88141$var$deserialize(form, data, options = {}) {
		const flattenedData = $fdd0aaa2d9b88141$var$flattenData(data, null, options);
		options.keyExtractors = new $fdd0aaa2d9b88141$var$KeyExtractors(options.keyExtractors || {}),
		options.inputWriters = new $fdd0aaa2d9b88141$var$InputWriters(options.inputWriters || {}),
		Array.prototype.forEach.call($fdd0aaa2d9b88141$var$getInputElements(form, options), (element => {
			const type = $fdd0aaa2d9b88141$var$getElementType(element); const
				key = options.keyExtractors.get(type)(element);
			options.inputWriters.get(type)(element, flattenedData[key]);
		}));
	}

	let $fdd0aaa2d9b88141$var$module; let $fdd0aaa2d9b88141$var$LZString; const
		$fdd0aaa2d9b88141$var$lzString = {
			exports: {},
		};
	$fdd0aaa2d9b88141$var$module = $fdd0aaa2d9b88141$var$lzString, $fdd0aaa2d9b88141$var$LZString = (function () {
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
				let res = LZString._compress(input, 6, (a => keyStringBase64.charAt(a)));
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
				return input == null ? '' : input == '' ? null : LZString._decompress(input.length, 32, (index => getBaseValue(keyStringBase64, input.charAt(index))));
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
				Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {context_w = context_wc;} else {
					if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
						if (context_w.charCodeAt(0) < 256) {
							for (i = 0; i < context_numberBits; i++) {context_data_value <<= 1, context_data_position == bitsPerChar - 1 ? (context_data_position = 0, 
              context_data.push(getCharFromInt(context_data_value)), context_data_value = 0) : context_data_position++;}
							for (value = context_w.charCodeAt(0), i = 0; i < 8; i++) {context_data_value = context_data_value << 1 | 1 & value, 
              context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)), 
              context_data_value = 0) : context_data_position++, value >>= 1;}
						} else {
							for (value = 1, i = 0; i < context_numberBits; i++) {context_data_value = context_data_value << 1 | value, 
              context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)), 
              context_data_value = 0) : context_data_position++, value = 0;}
							for (value = context_w.charCodeAt(0), i = 0; i < 16; i++) {context_data_value = context_data_value << 1 | 1 & value, 
              context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)), 
              context_data_value = 0) : context_data_position++, value >>= 1;}
						}

						0 == --context_enlargeIn && (context_enlargeIn = 2**context_numberBits, context_numberBits++),
						delete context_dictionaryToCreate[context_w];
					} else {for (value = context_dictionary[context_w], i = 0; i < context_numberBits; i++) context_data_value = context_data_value << 1 | 1 & value, 
          context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)), 
          context_data_value = 0) : context_data_position++, value >>= 1;}
					0 == --context_enlargeIn && (context_enlargeIn = 2**context_numberBits, context_numberBits++),
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
for (value = context_dictionary[context_w], i = 0; i < context_numberBits; i++) {context_data_value = context_data_value << 1 | 1 & value, 
          context_data_position == bitsPerChar - 1 ? (context_data_position = 0, context_data.push(getCharFromInt(context_data_value)), 
          context_data_value = 0) : context_data_position++, value >>= 1;}}

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
	})(), $fdd0aaa2d9b88141$var$module != null && ($fdd0aaa2d9b88141$var$module.exports = $fdd0aaa2d9b88141$var$LZString);
	class $fdd0aaa2d9b88141$export$2e2bcd8739ae039 {
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
			$fdd0aaa2d9b88141$var$throttle(300, this._handleFormInput.bind(this), !1)), this._handleStorageChangeOnForm = this._handleStorageChangeOnForm.bind(this),
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

			return this._log('log', 'Without the default values', thinnedOptions), $fdd0aaa2d9b88141$var$lzString.exports.compressToEncodedURIComponent(JSON.stringify(thinnedOptions));
		}

		_decode(options) {
			let decompressed = options;
			return typeof options === 'string' && (decompressed = JSON.parse($fdd0aaa2d9b88141$var$lzString.exports.decompressFromEncodedURIComponent(options))),
			{
				...this.defaults,
				...decompressed,
			};
		}

		async _runMigrations(migrations) {
			if (migrations.length === 0 || !$1a91521960f0ed9e$export$d0790c2ac1fc6894() || !await (async function () {
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
			include.length > 0 && $fdd0aaa2d9b88141$var$deserialize(form, options, {
				include,
			});
		}

		_parseForm(form) {
			const include = [];
			for (const field of form.querySelectorAll('[name]')) {
				field.validity.valid && !field.disabled && include.push(field.name.replace(/\[.*]/, ''));
			}

			return $fdd0aaa2d9b88141$var$serialize(form, {
				include,
			});
		}

		_handleStorageChangeOnForm(changes, areaName) {
			areaName !== 'sync' || !changes[this.storageName] || document.hasFocus() && this._form.contains(document.activeElement) || this._updateForm(this._form, this._decode(changes[this.storageName].newValue));
		}
	}
	Object.defineProperty($fdd0aaa2d9b88141$export$2e2bcd8739ae039, 'migrations', {
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
	const $92781491c2a6b037$export$2e2bcd8739ae039 = new $fdd0aaa2d9b88141$export$2e2bcd8739ae039({
		defaults: {
			Keyword: 'nope',
			highRiskSite: 'nope',
			Reported: 'nope',
			KindaLookAlike: 'nope',
		},
		migrations: [$fdd0aaa2d9b88141$export$2e2bcd8739ae039.migrations.removeUnused],
		logging: !0,
	});
	!(async function () {
		const panik = 'https://raw.githubusercontent.com/yoyoismee/PanicRabbit/main/source/panikrabbit.png';
		const calm = 'https://raw.githubusercontent.com/yoyoismee/PanicRabbit/main/source/kalmRabbit.png';
		const options = await $92781491c2a6b037$export$2e2bcd8739ae039.getAll();
		console.log(options);
		let x = window.location.toString();
		x = x.replace('http://', '').replace('https://', '').split('/')[0].split('.').slice(-2),
		x = x[0] + '.' + x[1], console.log(x);
		let alertImg = '';
		let message = '';
		if (options.highRiskSite === 'Panik') {
			for (let s = 0; s < $20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskSite.length; s++) {
				if (x.toLocaleLowerCase().includes($20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskSite[s])) {
					alertImg = panik, message = 'Elder rabbit have a tale about ' + $20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskSite[s] + '(really high risk)';
					break;
				}
			}
		}

		if (options.Reported === 'Panik') {
			for (let r = 0; r < $20ca411e7579f9ef$export$2e2bcd8739ae039.reportedSite.length; r++) {
				if (x.toLocaleLowerCase().includes($20ca411e7579f9ef$export$2e2bcd8739ae039.reportedSite[r])) {
					alertImg = calm, message = 'Some rabbit talk about the danger of ' + $20ca411e7579f9ef$export$2e2bcd8739ae039.reportedSite[r] + '(reported but not confirm)';
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

		const
			update = function (stringA, stringB) {
				return stringA === stringB ? 0 : 1;
			};

		let temporary = 999; let minDistance = 999; let similarSite = ''; let foundRoot = !1; let
			foundTLD = !1;
		if (options.KindaLookAlike === 'Panik') {
			for (let i = 0; i < $20ca411e7579f9ef$export$2e2bcd8739ae039.knownSite.length; i++) {
				temporary = $de30a94495b7bc7c$exports.levenshtein(x, $20ca411e7579f9ef$export$2e2bcd8739ae039.knownSite[i], insert, remove, update),
				temporary.distance <= minDistance && (minDistance = temporary.distance, similarSite = $20ca411e7579f9ef$export$2e2bcd8739ae039.knownSite[i]),
				x.split('.')[0] == $20ca411e7579f9ef$export$2e2bcd8739ae039.knownSite[i].split('.')[0] && (foundRoot = !0,
				x.split('.')[1] == $20ca411e7579f9ef$export$2e2bcd8739ae039.knownSite[i].split('.')[1] && (foundTLD = !0));
			}

			minDistance > 0 && minDistance <= 2 && (alertImg = panik, message = 'This sound like another famous place!'),
			foundRoot && !foundTLD && (alertImg = panik, message = 'This sound like another famous place!');
		}

		if (options.Keyword === 'Panik') {
			const elements = document.querySelectorAll('*');
			loop1: for (const element of elements) {
				for (let n = 0; n < element.childNodes.length; n++) {
					const node = element.childNodes[n];
					if (node.nodeType === 3) {
						const text = node.nodeValue;
						for (let k = 0; k < $20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskKeyword.length; k++) {
							if (text.toLowerCase().includes($20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskKeyword[k].toLowerCase())) {
								alertImg = calm, message = 'no!!! how can you say the word - ' + $20ca411e7579f9ef$export$2e2bcd8739ae039.highRiskKeyword[k];
								break loop1;
							}
						}
					}
				}
			}
		}

		alertImg && $parcel$interopDefault($a1ea0e2fc9dc80ac$exports).fire({
			backdrop: 'rgba(200,100,100,0.4)',
			title: 'Panik!',
			text: message,
			imageUrl: alertImg,
			imageWidth: 420,
			imageHeight: 420,
			html: '<h3>' + message + '</h3></><a href="https://forms.gle/WMbf9qAoyvZ2VFMG8/" target="_blank" rel="noopener noreferrer"><h3>Panik!!! - tell the elder rabbit</h3></a>',
		});
	})();
})();
