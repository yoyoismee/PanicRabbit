(() => {
  function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
      get: v,
      set: s,
      enumerable: !0,
      configurable: !0
    });
  }
  var parcelRequire = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire94c2;
  parcelRequire.register("j4Ibd", (function(module, exports) {
    module.exports = {
      ted: parcelRequire("VXiGZ"),
      levenshtein: parcelRequire("Vpo7S")
    };
  })), parcelRequire.register("VXiGZ", (function(module, exports) {
    var $0ae352d3e92b5044$var$Mapping, $0ae352d3e92b5044$var$postOrderWalk, $0ae352d3e92b5044$var$ted, $0ae352d3e92b5044$var$tedBt, $0ae352d3e92b5044$var$trackedMin, $0ae352d3e92b5044$var$zero;
    ({Mapping: $0ae352d3e92b5044$var$Mapping, zero: $0ae352d3e92b5044$var$zero, trackedMin: $0ae352d3e92b5044$var$trackedMin} = parcelRequire("6uB6o")), 
    $0ae352d3e92b5044$var$postOrderWalk = function(root, childrenCb, visitCb) {
      var child, children, firstChild, index, k, len, node, ref, ref1, stack1, stack2;
      for (stack2 = [], (stack1 = []).push([ void 0, root ]); stack1.length > 0; ) for ([index, node] = stack1.pop(), 
      firstChild = null != (ref = null != (children = childrenCb(node)) ? children[0] : void 0) ? ref : null, 
      stack2.push([ index, node, firstChild ]), index = k = 0, len = (ref1 = null != children ? children : []).length; k < len; index = ++k) child = ref1[index], 
      stack1.push([ index, child ]);
      for (;stack2.length > 0; ) [index, node, firstChild] = stack2.pop(), visitCb(index, node, firstChild);
    }, $0ae352d3e92b5044$var$ted = function(rootA, rootB, childrenCb, insertCb, removeCb, updateCb) {
      var fdist, i1, k1, l1, len, len1, preprocess, ref4, ref11, tA, tB, tdist, tdistance, treeDistance, ttrack;
      for (treeDistance = function(i, j) {
        var a, aL, aN, b, bL, bN, iOff, jOff, k, l, m, min, n, o, p, q, r, ref, ref1, ref2, ref3;
        for (aL = tA.llds, bL = tB.llds, aN = tA.nodes, bN = tB.nodes, iOff = aL[i] - 1, 
        jOff = bL[j] - 1, m = i - aL[i] + 2, n = j - bL[j] + 2, a = k = 1, ref = m; k < ref; a = k += 1) fdist[a][0] = fdist[a - 1][0] + removeCb(aN[a + iOff]);
        for (b = l = 1, ref1 = n; l < ref1; b = l += 1) fdist[0][b] = fdist[0][b - 1] + insertCb(bN[b + jOff]);
        for (a = o = 1, ref2 = m; o < ref2; a = o += 1) for (b = r = 1, ref3 = n; r < ref3; b = r += 1) aL[i] === aL[a + iOff] && bL[j] === bL[b + jOff] ? (min = $0ae352d3e92b5044$var$trackedMin(fdist[a - 1][b] + removeCb(aN[a + iOff]), fdist[a][b - 1] + insertCb(bN[b + jOff]), fdist[a - 1][b - 1] + updateCb(aN[a + iOff], bN[b + jOff])), 
        ttrack[a + iOff][b + jOff] = min.index, tdist[a + iOff][b + jOff] = fdist[a][b] = min.value) : (p = aL[a + iOff] - 1 - iOff, 
        q = bL[b + jOff] - 1 - jOff, fdist[a][b] = Math.min(fdist[a - 1][b] + removeCb(aN[a + iOff]), fdist[a][b - 1] + insertCb(bN[b + jOff]), fdist[p][q] + tdist[a + iOff][b + jOff]));
      }, tA = (preprocess = function(root) {
        var t;
        return t = {
          nodes: [],
          llds: [],
          keyroots: []
        }, $0ae352d3e92b5044$var$postOrderWalk(root, childrenCb, (function(index, node, firstChild) {
          var childIndex, lldIndex, nIndex;
          nIndex = t.nodes.length, t.nodes.push(node), null == firstChild ? lldIndex = nIndex : (childIndex = t.nodes.indexOf(firstChild), 
          lldIndex = t.llds[childIndex]), t.llds.push(lldIndex), 0 !== index && t.keyroots.push(nIndex);
        })), t;
      })(rootA), tB = preprocess(rootB), ttrack = $0ae352d3e92b5044$var$zero(tA.nodes.length, tB.nodes.length), 
      tdist = $0ae352d3e92b5044$var$zero(tA.nodes.length, tB.nodes.length), fdist = $0ae352d3e92b5044$var$zero(tA.nodes.length + 1, tB.nodes.length + 1), 
      k1 = 0, len = (ref4 = tA.keyroots).length; k1 < len; k1++) for (i1 = ref4[k1], l1 = 0, 
      len1 = (ref11 = tB.keyroots).length; l1 < len1; l1++) treeDistance(i1, ref11[l1]);
      return tdistance = tdist[tA.nodes.length - 1][tB.nodes.length - 1], new $0ae352d3e92b5044$var$Mapping(tA, tB, tdistance, ttrack, $0ae352d3e92b5044$var$tedBt);
    }, $0ae352d3e92b5044$var$tedBt = function(tA, tB, ttrack) {
      var i, j, mapping;
      for (mapping = [], i = tA.nodes.length - 1, j = tB.nodes.length - 1; i >= 0 && j >= 0; ) switch (ttrack[i][j]) {
       case 0:
        mapping.push([ tA.nodes[i], null ]), --i;
        break;

       case 1:
        mapping.push([ null, tB.nodes[j] ]), --j;
        break;

       case 2:
        mapping.push([ tA.nodes[i], tB.nodes[j] ]), --i, --j;
        break;

       default:
        throw new Error(`Invalid operation ${ttrack[i][j]} at (${i}, ${j})`);
      }
      if (-1 === i && -1 !== j) for (;j >= 0; ) mapping.push([ null, tB.nodes[j] ]), --j;
      if (-1 !== i && -1 === j) for (;i >= 0; ) mapping.push([ tA.nodes[i], null ]), --i;
      return mapping;
    }, module.exports = $0ae352d3e92b5044$var$ted;
  })), parcelRequire.register("6uB6o", (function(module, exports) {
    var $4ba25321653e83c0$export$f5f785078011b62, $4ba25321653e83c0$export$7f9972325ebfd559, $4ba25321653e83c0$export$5ccdeb46ef1ffb88;
    $parcel$export(module.exports, "Mapping", (() => $4ba25321653e83c0$export$f5f785078011b62), (v => $4ba25321653e83c0$export$f5f785078011b62 = v)), 
    $parcel$export(module.exports, "zero", (() => $4ba25321653e83c0$export$7f9972325ebfd559), (v => $4ba25321653e83c0$export$7f9972325ebfd559 = v)), 
    $parcel$export(module.exports, "trackedMin", (() => $4ba25321653e83c0$export$5ccdeb46ef1ffb88), (v => $4ba25321653e83c0$export$5ccdeb46ef1ffb88 = v)), 
    $4ba25321653e83c0$export$f5f785078011b62 = class {
      constructor(a1, b1, distance, track, backtrackFn) {
        this.pairs = this.pairs.bind(this), this.alignment = this.alignment.bind(this), 
        this.a = a1, this.b = b1, this.distance = distance, this.track = track, this.backtrackFn = backtrackFn, 
        this.pairCache = null;
      }
      pairs() {
        return null == this.pairCache && (this.pairCache = this.backtrackFn(this.a, this.b, this.track)), 
        this.pairCache;
      }
      alignment() {
        var alignmentA, alignmentB, k, len, pair, ref;
        for (alignmentA = [], alignmentB = [], k = 0, len = (ref = this.pairs().reverse()).length; k < len; k++) pair = ref[k], 
        alignmentA.push(pair[0]), alignmentB.push(pair[1]);
        return {
          alignmentA: alignmentA,
          alignmentB: alignmentB
        };
      }
    }, $4ba25321653e83c0$export$7f9972325ebfd559 = function(width, height) {
      var i, j, k, l, ref, ref1, x, y;
      for (x = new Array(width), i = k = 0, ref = width; k < ref; i = k += 1) for (y = x[i] = new Array(height), 
      j = l = 0, ref1 = height; l < ref1; j = l += 1) y[j] = 0;
      return x;
    }, $4ba25321653e83c0$export$5ccdeb46ef1ffb88 = function(a, b, c) {
      var min;
      return b < (min = {
        value: a,
        index: 0
      }).value && (min.value = b, min.index = 1), c < min.value && (min.value = c, min.index = 2), 
      min;
    };
  })), parcelRequire.register("Vpo7S", (function(module, exports) {
    var $0ac9048a0f13f7ea$var$Mapping, $0ac9048a0f13f7ea$var$levenshtein, $0ac9048a0f13f7ea$var$levenshteinBt, $0ac9048a0f13f7ea$var$trackedMin, $0ac9048a0f13f7ea$var$zero;
    ({Mapping: $0ac9048a0f13f7ea$var$Mapping, zero: $0ac9048a0f13f7ea$var$zero, trackedMin: $0ac9048a0f13f7ea$var$trackedMin} = parcelRequire("6uB6o")), 
    $0ac9048a0f13f7ea$var$levenshtein = function(stringA, stringB, insertCb, removeCb, updateCb) {
      var a, aC, b, bC, dist, distance, i, j, k, l, m, min, n, ref, ref1, ref2, ref3, track;
      for (b = stringB, track = $0ac9048a0f13f7ea$var$zero((a = stringA).length + 1, b.length + 1), 
      dist = $0ac9048a0f13f7ea$var$zero(a.length + 1, b.length + 1), i = k = 1, ref = a.length; k <= ref; i = k += 1) dist[i][0] = i;
      for (j = l = 1, ref1 = b.length; l <= ref1; j = l += 1) dist[0][j] = j;
      for (i = m = 1, ref2 = a.length; m <= ref2; i = m += 1) for (j = n = 1, ref3 = b.length; n <= ref3; j = n += 1) aC = a[i - 1], 
      bC = b[j - 1], min = $0ac9048a0f13f7ea$var$trackedMin(dist[i - 1][j] + removeCb(aC), dist[i][j - 1] + insertCb(bC), dist[i - 1][j - 1] + updateCb(aC, bC)), 
      track[i][j] = min.index, dist[i][j] = min.value;
      return distance = dist[a.length][b.length], new $0ac9048a0f13f7ea$var$Mapping(a, b, distance, track, $0ac9048a0f13f7ea$var$levenshteinBt);
    }, $0ac9048a0f13f7ea$var$levenshteinBt = function(a, b, track) {
      var i, j, mapping;
      for (i = a.length, j = b.length, mapping = []; i > 0 && j > 0; ) switch (track[i][j]) {
       case 0:
        mapping.push([ a[i - 1], null ]), --i;
        break;

       case 1:
        mapping.push([ null, b[j - 1] ]), --j;
        break;

       case 2:
        mapping.push([ a[i - 1], b[j - 1] ]), --i, --j;
        break;

       default:
        throw new Error(`Invalid operation ${track[i][j]} at (${i}, ${j})`);
      }
      if (0 === i && 0 !== j) for (;j > 0; ) mapping.push([ null, b[j - 1] ]), --j;
      if (0 !== i && 0 === j) for (;i > 0; ) mapping.push([ a[i - 1], null ]), --i;
      return mapping;
    }, module.exports = $0ac9048a0f13f7ea$var$levenshtein;
  }));
})();