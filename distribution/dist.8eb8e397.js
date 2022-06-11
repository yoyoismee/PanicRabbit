(() => {
	function $parcel$export(e, n, v, s) {
		Object.defineProperty(e, n, {
			get: v,
			set: s,
			enumerable: !0,
			configurable: !0,
		});
	}

	const parcelRequire = (typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {})).parcelRequire94c2;
	parcelRequire.register('j4Ibd', ((module, exports) => {
		module.exports = {
			ted: parcelRequire('VXiGZ'),
			levenshtein: parcelRequire('Vpo7S'),
		};
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
})();
