// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function compose(f) {
      return function (g) {
        return function (x) {
          return f(g(x));
        };
      };
    }
  };
  var compose = function compose(dict) {
    return dict.compose;
  };

  // output/Control.Category/index.js
  var identity = function identity(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function identity(x) {
      return x;
    },
    Semigroupoid0: function Semigroupoid0() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function flip(f) {
    return function (b2) {
      return function (a2) {
        return f(a2)(b2);
      };
    };
  };
  var $$const = function $$const(a2) {
    return function (v) {
      return a2;
    };
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function arrayMap(f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i2 = 0; i2 < l; i2++) {
        result[i2] = f(arr[i2]);
      }
      return result;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */function () {
    function $$Proxy2() {}
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function map(dict) {
    return dict.map;
  };
  var mapFlipped = function mapFlipped(dictFunctor) {
    var map110 = map(dictFunctor);
    return function (fa) {
      return function (f) {
        return map110(f)(fa);
      };
    };
  };
  var $$void = function $$void(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var voidLeft = function voidLeft(dictFunctor) {
    var map110 = map(dictFunctor);
    return function (f) {
      return function (x) {
        return map110($$const(x))(f);
      };
    };
  };
  var functorFn = {
    map: /* @__PURE__ */compose(semigroupoidFn)
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */identity(categoryFn);
  var apply = function apply(dict) {
    return dict.apply;
  };
  var applySecond = function applySecond(dictApply) {
    var apply1 = apply(dictApply);
    var map20 = map(dictApply.Functor0());
    return function (a2) {
      return function (b2) {
        return apply1(map20($$const(identity2))(a2))(b2);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function pure(dict) {
    return dict.pure;
  };
  var unless = function unless(dictApplicative) {
    var pure14 = pure(dictApplicative);
    return function (v) {
      return function (v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure14(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var when = function when(dictApplicative) {
    var pure14 = pure(dictApplicative);
    return function (v) {
      return function (v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure14(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function liftA1(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure14 = pure(dictApplicative);
    return function (f) {
      return function (a2) {
        return apply2(pure14(f))(a2);
      };
    };
  };

  // output/Control.Bind/index.js
  var discard = function discard(dict) {
    return dict.discard;
  };
  var bind = function bind(dict) {
    return dict.bind;
  };
  var bindFlipped = function bindFlipped(dictBind) {
    return flip(bind(dictBind));
  };
  var composeKleisliFlipped = function composeKleisliFlipped(dictBind) {
    var bindFlipped12 = bindFlipped(dictBind);
    return function (f) {
      return function (g) {
        return function (a2) {
          return bindFlipped12(f)(g(a2));
        };
      };
    };
  };
  var discardUnit = {
    discard: function discard(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Data.Array/foreign.js
  var rangeImpl = function rangeImpl(start2, end) {
    var step4 = start2 > end ? -1 : 1;
    var result = new Array(step4 * (end - start2) + 1);
    var i2 = start2,
      n = 0;
    while (i2 !== end) {
      result[n++] = i2;
      i2 += step4;
    }
    result[n] = i2;
    return result;
  };
  var replicateFill = function replicateFill(count, value12) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value12);
  };
  var replicatePolyfill = function replicatePolyfill(count, value12) {
    var result = [];
    var n = 0;
    for (var i2 = 0; i2 < count; i2++) {
      result[n++] = value12;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var fromFoldableImpl = function () {
    function Cons3(head5, tail2) {
      this.head = head5;
      this.tail = tail2;
    }
    var emptyList = {};
    function curryCons(head5) {
      return function (tail2) {
        return new Cons3(head5, tail2);
      };
    }
    function listToArray(list) {
      var result = [];
      var count = 0;
      var xs = list;
      while (xs !== emptyList) {
        result[count++] = xs.head;
        xs = xs.tail;
      }
      return result;
    }
    return function (foldr4, xs) {
      return listToArray(foldr4(curryCons)(emptyList)(xs));
    };
  }();
  var length = function length(xs) {
    return xs.length;
  };
  var indexImpl = function indexImpl(just, nothing, xs, i2) {
    return i2 < 0 || i2 >= xs.length ? nothing : just(xs[i2]);
  };
  var findIndexImpl = function findIndexImpl(just, nothing, f, xs) {
    for (var i2 = 0, l = xs.length; i2 < l; i2++) {
      if (f(xs[i2])) return just(i2);
    }
    return nothing;
  };
  var _deleteAt = function _deleteAt(just, nothing, i2, l) {
    if (i2 < 0 || i2 >= l.length) return nothing;
    var l1 = l.slice();
    l1.splice(i2, 1);
    return just(l1);
  };
  var _updateAt = function _updateAt(just, nothing, i2, a2, l) {
    if (i2 < 0 || i2 >= l.length) return nothing;
    var l1 = l.slice();
    l1[i2] = a2;
    return just(l1);
  };
  var concat = function concat(xss) {
    if (xss.length <= 1e4) {
      return Array.prototype.concat.apply([], xss);
    }
    var result = [];
    for (var i2 = 0, l = xss.length; i2 < l; i2++) {
      var xs = xss[i2];
      for (var j = 0, m = xs.length; j < m; j++) {
        result.push(xs[j]);
      }
    }
    return result;
  };
  var sortByImpl = function () {
    function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to) {
      var mid;
      var i2;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from3 + (to - from3 >> 1);
      if (mid - from3 > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
      if (to - mid > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to);
      i2 = from3;
      j = mid;
      k = from3;
      while (i2 < mid && j < to) {
        x = xs2[i2];
        y = xs2[j];
        c = fromOrdering(compare3(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i2;
        }
      }
      while (i2 < mid) {
        xs1[k++] = xs2[i2++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function (compare3, fromOrdering, xs) {
      var out;
      if (xs.length < 2) return xs;
      out = xs.slice(0);
      mergeFromTo(compare3, fromOrdering, out, xs.slice(0), 0, xs.length);
      return out;
    };
  }();
  var allImpl = function allImpl(p2, xs) {
    var len = xs.length;
    for (var i2 = 0; i2 < len; i2++) {
      if (!p2(xs[i2])) return false;
    }
    return true;
  };
  var unsafeIndexImpl = function unsafeIndexImpl(xs, n) {
    return xs[n];
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function concatArray(xs) {
    return function (ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Symbol/index.js
  var reflectSymbol = function reflectSymbol(dict) {
    return dict.reflectSymbol;
  };

  // output/Data.Void/index.js
  var absurd = function absurd(a2) {
    var spin = function spin($copy_v) {
      var $tco_result;
      function $tco_loop(v) {
        $copy_v = v;
        return;
      }
      ;
      while (true) {
        $tco_result = $tco_loop($copy_v);
      }
      ;
      return $tco_result;
    };
    return spin(a2);
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function append(dict) {
    return dict.append;
  };

  // output/Control.Alt/index.js
  var alt = function alt(dict) {
    return dict.alt;
  };

  // output/Control.Monad/index.js
  var unlessM = function unlessM(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    var unless3 = unless(dictMonad.Applicative0());
    return function (mb) {
      return function (m) {
        return bind10(mb)(function (b2) {
          return unless3(b2)(m);
        });
      };
    };
  };
  var ap = function ap(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    var pure14 = pure(dictMonad.Applicative0());
    return function (f) {
      return function (a2) {
        return bind10(f)(function (f$prime) {
          return bind10(a2)(function (a$prime) {
            return pure14(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function unsafeCompareImpl(lt) {
    return function (eq5) {
      return function (gt) {
        return function (x) {
          return function (y) {
            return x < y ? lt : x === y ? eq5 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordStringImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function refEq(r1) {
    return function (r2) {
      return r1 === r2;
    };
  };
  var eqIntImpl = refEq;
  var eqStringImpl = refEq;

  // output/Data.Eq/index.js
  var eqUnit = {
    eq: function eq(v) {
      return function (v1) {
        return true;
      };
    }
  };
  var eqString = {
    eq: eqStringImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eq = function eq(dict) {
    return dict.eq;
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */function () {
    function LT2() {}
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */function () {
    function GT2() {}
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */function () {
    function EQ2() {}
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();

  // output/Data.Ord/index.js
  var ordUnit = {
    compare: function compare(v) {
      return function (v1) {
        return EQ.value;
      };
    },
    Eq0: function Eq0() {
      return eqUnit;
    }
  };
  var ordString = /* @__PURE__ */function () {
    return {
      compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function Eq0() {
        return eqString;
      }
    };
  }();
  var ordInt = /* @__PURE__ */function () {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function Eq0() {
        return eqInt;
      }
    };
  }();
  var compare = function compare(dict) {
    return dict.compare;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function showIntImpl(n) {
    return n.toString();
  };

  // output/Data.Show/index.js
  var showInt = {
    show: showIntImpl
  };
  var show = function show(dict) {
    return dict.show;
  };

  // output/Data.Generic.Rep/index.js
  var Inl = /* @__PURE__ */function () {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function (value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = /* @__PURE__ */function () {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function (value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var NoArguments = /* @__PURE__ */function () {
    function NoArguments2() {}
    ;
    NoArguments2.value = new NoArguments2();
    return NoArguments2;
  }();
  var from = function from(dict) {
    return dict.from;
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */identity(categoryFn);
  var Nothing = /* @__PURE__ */function () {
    function Nothing2() {}
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */function () {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function (value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe = function maybe(v) {
    return function (v1) {
      return function (v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = /* @__PURE__ */maybe(true)( /* @__PURE__ */$$const(false));
  var isJust = /* @__PURE__ */maybe(false)( /* @__PURE__ */$$const(true));
  var functorMaybe = {
    map: function map(v) {
      return function (v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */map(functorMaybe);
  var fromMaybe = function fromMaybe(a2) {
    return maybe(a2)(identity3);
  };
  var fromJust = function fromJust() {
    return function (v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var eqMaybe = function eqMaybe(dictEq) {
    var eq5 = eq(dictEq);
    return {
      eq: function eq(x) {
        return function (y) {
          if (x instanceof Nothing && y instanceof Nothing) {
            return true;
          }
          ;
          if (x instanceof Just && y instanceof Just) {
            return eq5(x.value0)(y.value0);
          }
          ;
          return false;
        };
      }
    };
  };
  var applyMaybe = {
    apply: function apply(v) {
      return function (v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function Functor0() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function bind(v) {
      return function (v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function Apply0() {
      return applyMaybe;
    }
  };
  var altMaybe = {
    alt: function alt(v) {
      return function (v1) {
        if (v instanceof Nothing) {
          return v1;
        }
        ;
        return v;
      };
    },
    Functor0: function Functor0() {
      return functorMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */function () {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function (value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */function () {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function (value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var either = function either(v) {
    return function (v1) {
      return function (v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };

  // output/Data.Monoid/index.js
  var mempty = function mempty(dict) {
    return dict.mempty;
  };

  // output/Effect/foreign.js
  var pureE = function pureE(a2) {
    return function () {
      return a2;
    };
  };
  var bindE = function bindE(a2) {
    return function (f) {
      return function () {
        return f(a2())();
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function $runtime_lazy(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function Applicative0() {
      return applicativeEffect;
    },
    Bind1: function Bind1() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function Apply0() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function Apply0() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */$runtime_lazy("functorEffect", "Effect", function () {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */$runtime_lazy("applyEffect", "Effect", function () {
    return {
      apply: ap(monadEffect),
      Functor0: function Functor0() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */$lazy_functorEffect(20);

  // output/Effect.Ref/foreign.js
  var _new = function _new(val) {
    return function () {
      return {
        value: val
      };
    };
  };
  var read = function read(ref2) {
    return function () {
      return ref2.value;
    };
  };
  var modifyImpl = function modifyImpl(f) {
    return function (ref2) {
      return function () {
        var t = f(ref2.value);
        ref2.value = t.state;
        return t.value;
      };
    };
  };
  var write = function write(val) {
    return function (ref2) {
      return function () {
        ref2.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$void2 = /* @__PURE__ */$$void(functorEffect);
  var $$new = _new;
  var modify$prime = modifyImpl;
  var modify = function modify(f) {
    return modify$prime(function (s) {
      var s$prime = f(s);
      return {
        state: s$prime,
        value: s$prime
      };
    });
  };
  var modify_ = function modify_(f) {
    return function (s) {
      return $$void2(modify(f)(s));
    };
  };

  // output/Control.Monad.Rec.Class/index.js
  var bindFlipped2 = /* @__PURE__ */bindFlipped(bindEffect);
  var map3 = /* @__PURE__ */map(functorEffect);
  var Loop = /* @__PURE__ */function () {
    function Loop2(value0) {
      this.value0 = value0;
    }
    ;
    Loop2.create = function (value0) {
      return new Loop2(value0);
    };
    return Loop2;
  }();
  var Done = /* @__PURE__ */function () {
    function Done2(value0) {
      this.value0 = value0;
    }
    ;
    Done2.create = function (value0) {
      return new Done2(value0);
    };
    return Done2;
  }();
  var tailRecM = function tailRecM(dict) {
    return dict.tailRecM;
  };
  var monadRecEffect = {
    tailRecM: function tailRecM(f) {
      return function (a2) {
        var fromDone = function fromDone(v) {
          if (v instanceof Done) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 137, column 30 - line 137, column 44): " + [v.constructor.name]);
        };
        return function __do2() {
          var r = bindFlipped2($$new)(f(a2))();
          (function () {
            while (!function __do3() {
              var v = read(r)();
              if (v instanceof Loop) {
                var e = f(v.value0)();
                write(e)(r)();
                return false;
              }
              ;
              if (v instanceof Done) {
                return true;
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 128, column 22 - line 133, column 28): " + [v.constructor.name]);
            }()) {}
            ;
            return {};
          })();
          return map3(fromDone)(read(r))();
        };
      };
    },
    Monad0: function Monad0() {
      return monadEffect;
    }
  };

  // output/Data.Array.ST/foreign.js
  var pushAllImpl = function pushAllImpl(as, xs) {
    return xs.push.apply(xs, as);
  };
  function unsafeFreezeThawImpl(xs) {
    return xs;
  }
  var unsafeFreezeImpl = unsafeFreezeThawImpl;
  function copyImpl(xs) {
    return xs.slice();
  }
  var thawImpl = copyImpl;
  var sortByImpl2 = function () {
    function mergeFromTo(compare3, fromOrdering, xs1, xs2, from3, to) {
      var mid;
      var i2;
      var j;
      var k;
      var x;
      var y;
      var c;
      mid = from3 + (to - from3 >> 1);
      if (mid - from3 > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, from3, mid);
      if (to - mid > 1) mergeFromTo(compare3, fromOrdering, xs2, xs1, mid, to);
      i2 = from3;
      j = mid;
      k = from3;
      while (i2 < mid && j < to) {
        x = xs2[i2];
        y = xs2[j];
        c = fromOrdering(compare3(x)(y));
        if (c > 0) {
          xs1[k++] = y;
          ++j;
        } else {
          xs1[k++] = x;
          ++i2;
        }
      }
      while (i2 < mid) {
        xs1[k++] = xs2[i2++];
      }
      while (j < to) {
        xs1[k++] = xs2[j++];
      }
    }
    return function (compare3, fromOrdering, xs) {
      if (xs.length < 2) return xs;
      mergeFromTo(compare3, fromOrdering, xs, xs.slice(0), 0, xs.length);
      return xs;
    };
  }();

  // output/Control.Monad.ST.Uncurried/foreign.js
  var runSTFn1 = function runSTFn12(fn) {
    return function (a2) {
      return function () {
        return fn(a2);
      };
    };
  };
  var runSTFn2 = function runSTFn22(fn) {
    return function (a2) {
      return function (b2) {
        return function () {
          return fn(a2, b2);
        };
      };
    };
  };

  // output/Data.Array.ST/index.js
  var unsafeFreeze = /* @__PURE__ */runSTFn1(unsafeFreezeImpl);
  var thaw = /* @__PURE__ */runSTFn1(thawImpl);
  var withArray = function withArray(f) {
    return function (xs) {
      return function __do2() {
        var result = thaw(xs)();
        f(result)();
        return unsafeFreeze(result)();
      };
    };
  };
  var push = function push(a2) {
    return runSTFn2(pushAllImpl)([a2]);
  };

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function boolConj(b1) {
    return function (b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function boolDisj(b1) {
    return function (b2) {
      return b1 || b2;
    };
  };
  var boolNot = function boolNot(b2) {
    return !b2;
  };

  // output/Data.HeytingAlgebra/index.js
  var tt = function tt(dict) {
    return dict.tt;
  };
  var not = function not(dict) {
    return dict.not;
  };
  var implies = function implies(dict) {
    return dict.implies;
  };
  var ff = function ff(dict) {
    return dict.ff;
  };
  var disj = function disj(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function implies(a2) {
      return function (b2) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a2))(b2);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
  };
  var conj = function conj(dict) {
    return dict.conj;
  };
  var heytingAlgebraFunction = function heytingAlgebraFunction(dictHeytingAlgebra) {
    var ff1 = ff(dictHeytingAlgebra);
    var tt1 = tt(dictHeytingAlgebra);
    var implies1 = implies(dictHeytingAlgebra);
    var conj1 = conj(dictHeytingAlgebra);
    var disj1 = disj(dictHeytingAlgebra);
    var not12 = not(dictHeytingAlgebra);
    return {
      ff: function ff(v) {
        return ff1;
      },
      tt: function tt(v) {
        return tt1;
      },
      implies: function implies(f) {
        return function (g) {
          return function (a2) {
            return implies1(f(a2))(g(a2));
          };
        };
      },
      conj: function conj(f) {
        return function (g) {
          return function (a2) {
            return conj1(f(a2))(g(a2));
          };
        };
      },
      disj: function disj(f) {
        return function (g) {
          return function (a2) {
            return disj1(f(a2))(g(a2));
          };
        };
      },
      not: function not(f) {
        return function (a2) {
          return not12(f(a2));
        };
      }
    };
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function foldrArray(f) {
    return function (init3) {
      return function (xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = len - 1; i2 >= 0; i2--) {
          acc = f(xs[i2])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function foldlArray(f) {
    return function (init3) {
      return function (xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = 0; i2 < len; i2++) {
          acc = f(acc)(xs[i2]);
        }
        return acc;
      };
    };
  };

  // output/Control.Plus/index.js
  var empty = function empty(dict) {
    return dict.empty;
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */function () {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function (value0) {
      return function (value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var snd = function snd(v) {
    return v.value1;
  };
  var functorTuple = {
    map: function map(f) {
      return function (m) {
        return new Tuple(m.value0, f(m.value1));
      };
    }
  };
  var fst = function fst(v) {
    return v.value0;
  };
  var eqTuple = function eqTuple(dictEq) {
    var eq5 = eq(dictEq);
    return function (dictEq1) {
      var eq12 = eq(dictEq1);
      return {
        eq: function eq(x) {
          return function (y) {
            return eq5(x.value0)(y.value0) && eq12(x.value1)(y.value1);
          };
        }
      };
    };
  };
  var ordTuple = function ordTuple(dictOrd) {
    var compare3 = compare(dictOrd);
    var eqTuple1 = eqTuple(dictOrd.Eq0());
    return function (dictOrd1) {
      var compare12 = compare(dictOrd1);
      var eqTuple2 = eqTuple1(dictOrd1.Eq0());
      return {
        compare: function compare(x) {
          return function (y) {
            var v = compare3(x.value0)(y.value0);
            if (v instanceof LT) {
              return LT.value;
            }
            ;
            if (v instanceof GT) {
              return GT.value;
            }
            ;
            return compare12(x.value1)(y.value1);
          };
        },
        Eq0: function Eq0() {
          return eqTuple2;
        }
      };
    };
  };

  // output/Data.Bifunctor/index.js
  var bimap = function bimap(dict) {
    return dict.bimap;
  };
  var bifunctorTuple = {
    bimap: function bimap(f) {
      return function (g) {
        return function (v) {
          return new Tuple(f(v.value0), g(v.value1));
        };
      };
    }
  };

  // output/Data.Monoid.Disj/index.js
  var Disj = function Disj(x) {
    return x;
  };
  var semigroupDisj = function semigroupDisj(dictHeytingAlgebra) {
    var disj2 = disj(dictHeytingAlgebra);
    return {
      append: function append(v) {
        return function (v1) {
          return disj2(v)(v1);
        };
      }
    };
  };
  var monoidDisj = function monoidDisj(dictHeytingAlgebra) {
    var semigroupDisj1 = semigroupDisj(dictHeytingAlgebra);
    return {
      mempty: ff(dictHeytingAlgebra),
      Semigroup0: function Semigroup0() {
        return semigroupDisj1;
      }
    };
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function unsafeCoerce2(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function coerce() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */coerce();
  var unwrap = function unwrap() {
    return coerce2;
  };
  var over = function over() {
    return function () {
      return function (v) {
        return coerce2;
      };
    };
  };
  var alaF = function alaF() {
    return function () {
      return function () {
        return function () {
          return function (v) {
            return coerce2;
          };
        };
      };
    };
  };

  // output/Data.Foldable/index.js
  var identity4 = /* @__PURE__ */identity(categoryFn);
  var alaF2 = /* @__PURE__ */alaF()()()();
  var _foldr = function foldr(dict) {
    return dict.foldr;
  };
  var traverse_ = function traverse_(dictApplicative) {
    var applySecond3 = applySecond(dictApplicative.Apply0());
    var pure14 = pure(dictApplicative);
    return function (dictFoldable) {
      var foldr22 = _foldr(dictFoldable);
      return function (f) {
        return foldr22(function ($454) {
          return applySecond3(f($454));
        })(pure14(unit));
      };
    };
  };
  var for_ = function for_(dictApplicative) {
    var traverse_14 = traverse_(dictApplicative);
    return function (dictFoldable) {
      return flip(traverse_14(dictFoldable));
    };
  };
  var sequence_ = function sequence_(dictApplicative) {
    var traverse_14 = traverse_(dictApplicative);
    return function (dictFoldable) {
      return traverse_14(dictFoldable)(identity4);
    };
  };
  var _foldl = function foldl(dict) {
    return dict.foldl;
  };
  var foldableMaybe = {
    foldr: function foldr(v) {
      return function (v1) {
        return function (v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v2.value0)(v1);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldl: function foldl(v) {
      return function (v1) {
        return function (v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v1)(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldMap: function foldMap(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      return function (v) {
        return function (v1) {
          if (v1 instanceof Nothing) {
            return mempty2;
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function foldMapDefaultR(dictFoldable) {
    var foldr22 = _foldr(dictFoldable);
    return function (dictMonoid) {
      var append7 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function (f) {
        return foldr22(function (x) {
          return function (acc) {
            return append7(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function foldMap(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };
  var _foldMap = function foldMap(dict) {
    return dict.foldMap;
  };
  var any = function any(dictFoldable) {
    var foldMap2 = _foldMap(dictFoldable);
    return function (dictHeytingAlgebra) {
      return alaF2(Disj)(foldMap2(monoidDisj(dictHeytingAlgebra)));
    };
  };
  var or = function or(dictFoldable) {
    var any1 = any(dictFoldable);
    return function (dictHeytingAlgebra) {
      return any1(dictHeytingAlgebra)(identity4);
    };
  };

  // output/Data.Function.Uncurried/foreign.js
  var runFn2 = function runFn2(fn) {
    return function (a2) {
      return function (b2) {
        return fn(a2, b2);
      };
    };
  };
  var runFn4 = function runFn4(fn) {
    return function (a2) {
      return function (b2) {
        return function (c) {
          return function (d) {
            return fn(a2, b2, c, d);
          };
        };
      };
    };
  };
  var runFn5 = function runFn5(fn) {
    return function (a2) {
      return function (b2) {
        return function (c) {
          return function (d) {
            return function (e) {
              return fn(a2, b2, c, d, e);
            };
          };
        };
      };
    };
  };

  // output/Data.FunctorWithIndex/foreign.js
  var mapWithIndexArray = function mapWithIndexArray(f) {
    return function (xs) {
      var l = xs.length;
      var result = Array(l);
      for (var i2 = 0; i2 < l; i2++) {
        result[i2] = f(i2)(xs[i2]);
      }
      return result;
    };
  };

  // output/Data.FunctorWithIndex/index.js
  var mapWithIndex = function mapWithIndex(dict) {
    return dict.mapWithIndex;
  };
  var functorWithIndexArray = {
    mapWithIndex: mapWithIndexArray,
    Functor0: function Functor0() {
      return functorArray;
    }
  };

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function () {
    function array1(a2) {
      return [a2];
    }
    function array2(a2) {
      return function (b2) {
        return [a2, b2];
      };
    }
    function array3(a2) {
      return function (b2) {
        return function (c) {
          return [a2, b2, c];
        };
      };
    }
    function concat2(xs) {
      return function (ys) {
        return xs.concat(ys);
      };
    }
    return function (apply2) {
      return function (map20) {
        return function (pure14) {
          return function (f) {
            return function (array) {
              function go2(bot, top2) {
                switch (top2 - bot) {
                  case 0:
                    return pure14([]);
                  case 1:
                    return map20(array1)(f(array[bot]));
                  case 2:
                    return apply2(map20(array2)(f(array[bot])))(f(array[bot + 1]));
                  case 3:
                    return apply2(apply2(map20(array3)(f(array[bot])))(f(array[bot + 1])))(f(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                    return apply2(map20(concat2)(go2(bot, pivot)))(go2(pivot, top2));
                }
              }
              return go2(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function unfoldr1ArrayImpl(isNothing2) {
    return function (fromJust6) {
      return function (fst2) {
        return function (snd2) {
          return function (f) {
            return function (b2) {
              var result = [];
              var value12 = b2;
              while (true) {
                var tuple = f(value12);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2)) return result;
                value12 = fromJust6(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Semigroup.Foldable/index.js
  var foldr1 = function foldr1(dict) {
    return dict.foldr1;
  };
  var foldl1 = function foldl1(dict) {
    return dict.foldl1;
  };
  var foldMap1DefaultL = function foldMap1DefaultL(dictFoldable1) {
    var foldl11 = foldl1(dictFoldable1);
    return function (dictFunctor) {
      var map20 = map(dictFunctor);
      return function (dictSemigroup) {
        var append7 = append(dictSemigroup);
        return function (f) {
          var $162 = foldl11(append7);
          var $163 = map20(f);
          return function ($164) {
            return $162($163($164));
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var fromJust2 = /* @__PURE__ */fromJust();
  var unfoldr1 = function unfoldr1(dict) {
    return dict.unfoldr1;
  };
  var unfoldable1Array = {
    unfoldr1: /* @__PURE__ */unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
  };

  // output/Data.Array/index.js
  var fromJust3 = /* @__PURE__ */fromJust();
  var append2 = /* @__PURE__ */append(semigroupArray);
  var updateAt = /* @__PURE__ */function () {
    return runFn5(_updateAt)(Just.create)(Nothing.value);
  }();
  var unsafeIndex = function unsafeIndex() {
    return runFn2(unsafeIndexImpl);
  };
  var snoc = function snoc(xs) {
    return function (x) {
      return withArray(push(x))(xs)();
    };
  };
  var singleton2 = function singleton2(a2) {
    return [a2];
  };
  var range2 = /* @__PURE__ */runFn2(rangeImpl);
  var $$null = function $$null(xs) {
    return length(xs) === 0;
  };
  var mapWithIndex2 = /* @__PURE__ */mapWithIndex(functorWithIndexArray);
  var index = /* @__PURE__ */function () {
    return runFn4(indexImpl)(Just.create)(Nothing.value);
  }();
  var modifyAt = function modifyAt(i2) {
    return function (f) {
      return function (xs) {
        var go2 = function go2(x) {
          return updateAt(i2)(f(x))(xs);
        };
        return maybe(Nothing.value)(go2)(index(xs)(i2));
      };
    };
  };
  var head = function head(xs) {
    return index(xs)(0);
  };
  var fromFoldable = function fromFoldable(dictFoldable) {
    return runFn2(fromFoldableImpl)(_foldr(dictFoldable));
  };
  var findIndex = /* @__PURE__ */function () {
    return runFn4(findIndexImpl)(Just.create)(Nothing.value);
  }();
  var elemIndex = function elemIndex(dictEq) {
    var eq22 = eq(dictEq);
    return function (x) {
      return findIndex(function (v) {
        return eq22(v)(x);
      });
    };
  };
  var elem2 = function elem2(dictEq) {
    var elemIndex1 = elemIndex(dictEq);
    return function (a2) {
      return function (arr) {
        return isJust(elemIndex1(a2)(arr));
      };
    };
  };
  var deleteAt = /* @__PURE__ */function () {
    return runFn4(_deleteAt)(Just.create)(Nothing.value);
  }();
  var deleteBy = function deleteBy(v) {
    return function (v1) {
      return function (v2) {
        if (v2.length === 0) {
          return [];
        }
        ;
        return maybe(v2)(function (i2) {
          return fromJust3(deleteAt(i2)(v2));
        })(findIndex(v(v1))(v2));
      };
    };
  };
  var cons = function cons(x) {
    return function (xs) {
      return append2([x])(xs);
    };
  };
  var all2 = /* @__PURE__ */runFn2(allImpl);

  // output/Data.Array.NonEmpty.Internal/foreign.js
  var foldr1Impl = function foldr1Impl(f, xs) {
    var acc = xs[xs.length - 1];
    for (var i2 = xs.length - 2; i2 >= 0; i2--) {
      acc = f(xs[i2])(acc);
    }
    return acc;
  };
  var foldl1Impl = function foldl1Impl(f, xs) {
    var acc = xs[0];
    var len = xs.length;
    for (var i2 = 1; i2 < len; i2++) {
      acc = f(acc)(xs[i2]);
    }
    return acc;
  };
  var traverse1Impl = function () {
    function Cont(fn) {
      this.fn = fn;
    }
    var emptyList = {};
    var ConsCell = function ConsCell(head5, tail2) {
      this.head = head5;
      this.tail = tail2;
    };
    function finalCell(head5) {
      return new ConsCell(head5, emptyList);
    }
    function consList(x) {
      return function (xs) {
        return new ConsCell(x, xs);
      };
    }
    function listToArray(list) {
      var arr = [];
      var xs = list;
      while (xs !== emptyList) {
        arr.push(xs.head);
        xs = xs.tail;
      }
      return arr;
    }
    return function (apply2, map20, f) {
      var buildFrom = function buildFrom(x, ys) {
        return apply2(map20(consList)(f(x)))(ys);
      };
      var go2 = function go2(acc, currentLen, xs) {
        if (currentLen === 0) {
          return acc;
        } else {
          var last3 = xs[currentLen - 1];
          return new Cont(function () {
            var built = go2(buildFrom(last3, acc), currentLen - 1, xs);
            return built;
          });
        }
      };
      return function (array) {
        var acc = map20(finalCell)(f(array[array.length - 1]));
        var result = go2(acc, array.length - 1, array);
        while (result instanceof Cont) {
          result = result.fn();
        }
        return map20(listToArray)(result);
      };
    };
  }();

  // output/Data.Array.NonEmpty.Internal/index.js
  var NonEmptyArray = function NonEmptyArray(x) {
    return x;
  };
  var unfoldable1NonEmptyArray = unfoldable1Array;
  var functorNonEmptyArray = functorArray;
  var foldableNonEmptyArray = foldableArray;
  var foldable1NonEmptyArray = {
    foldMap1: function foldMap1(dictSemigroup) {
      return foldMap1DefaultL(foldable1NonEmptyArray)(functorNonEmptyArray)(dictSemigroup);
    },
    foldr1: /* @__PURE__ */runFn2(foldr1Impl),
    foldl1: /* @__PURE__ */runFn2(foldl1Impl),
    Foldable0: function Foldable0() {
      return foldableNonEmptyArray;
    }
  };

  // output/Data.NonEmpty/index.js
  var NonEmpty = /* @__PURE__ */function () {
    function NonEmpty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NonEmpty2.create = function (value0) {
      return function (value1) {
        return new NonEmpty2(value0, value1);
      };
    };
    return NonEmpty2;
  }();
  var singleton3 = function singleton3(dictPlus) {
    var empty7 = empty(dictPlus);
    return function (a2) {
      return new NonEmpty(a2, empty7);
    };
  };

  // output/Data.Array.NonEmpty/index.js
  var fromJust4 = /* @__PURE__ */fromJust();
  var unsafeFromArray = NonEmptyArray;
  var toArray = function toArray(v) {
    return v;
  };
  var singleton4 = function singleton4($110) {
    return unsafeFromArray(singleton2($110));
  };
  var range3 = function range3(x) {
    return function (y) {
      return unsafeFromArray(range2(x)(y));
    };
  };
  var foldr12 = /* @__PURE__ */foldr1(foldable1NonEmptyArray);
  var adaptMaybe = function adaptMaybe(f) {
    return function ($126) {
      return fromJust4(f(toArray($126)));
    };
  };
  var head2 = /* @__PURE__ */adaptMaybe(head);
  var adaptAny = function adaptAny(f) {
    return function ($128) {
      return f(toArray($128));
    };
  };
  var elem3 = function elem3(dictEq) {
    var elem1 = elem2(dictEq);
    return function (x) {
      return adaptAny(elem1(x));
    };
  };
  var unsafeAdapt = function unsafeAdapt(f) {
    var $129 = adaptAny(f);
    return function ($130) {
      return unsafeFromArray($129($130));
    };
  };
  var cons2 = function cons2(x) {
    return unsafeAdapt(cons(x));
  };
  var mapWithIndex3 = function mapWithIndex3(f) {
    return unsafeAdapt(mapWithIndex2(f));
  };

  // output/Data.Eq.Generic/index.js
  var genericEqNoArguments = {
    "genericEq'": function genericEq(v) {
      return function (v1) {
        return true;
      };
    }
  };
  var genericEq$prime = function genericEq$prime(dict) {
    return dict["genericEq'"];
  };
  var genericEqConstructor = function genericEqConstructor(dictGenericEq) {
    var genericEq$prime1 = genericEq$prime(dictGenericEq);
    return {
      "genericEq'": function genericEq(v) {
        return function (v1) {
          return genericEq$prime1(v)(v1);
        };
      }
    };
  };
  var genericEqSum = function genericEqSum(dictGenericEq) {
    var genericEq$prime1 = genericEq$prime(dictGenericEq);
    return function (dictGenericEq1) {
      var genericEq$prime2 = genericEq$prime(dictGenericEq1);
      return {
        "genericEq'": function genericEq(v) {
          return function (v1) {
            if (v instanceof Inl && v1 instanceof Inl) {
              return genericEq$prime1(v.value0)(v1.value0);
            }
            ;
            if (v instanceof Inr && v1 instanceof Inr) {
              return genericEq$prime2(v.value0)(v1.value0);
            }
            ;
            return false;
          };
        }
      };
    };
  };
  var genericEq = function genericEq(dictGeneric) {
    var from3 = from(dictGeneric);
    return function (dictGenericEq) {
      var genericEq$prime1 = genericEq$prime(dictGenericEq);
      return function (x) {
        return function (y) {
          return genericEq$prime1(from3(x))(from3(y));
        };
      };
    };
  };

  // output/Data.Show.Generic/foreign.js
  var intercalate3 = function intercalate3(separator) {
    return function (xs) {
      return xs.join(separator);
    };
  };

  // output/Data.Show.Generic/index.js
  var append3 = /* @__PURE__ */append(semigroupArray);
  var genericShowArgsNoArguments = {
    genericShowArgs: function genericShowArgs(v) {
      return [];
    }
  };
  var genericShowArgs = function genericShowArgs(dict) {
    return dict.genericShowArgs;
  };
  var genericShowConstructor = function genericShowConstructor(dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function (dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return {
        "genericShow'": function genericShow(v) {
          var ctor = reflectSymbol2($$Proxy.value);
          var v1 = genericShowArgs1(v);
          if (v1.length === 0) {
            return ctor;
          }
          ;
          return "(" + (intercalate3(" ")(append3([ctor])(v1)) + ")");
        }
      };
    };
  };
  var genericShow$prime = function genericShow$prime(dict) {
    return dict["genericShow'"];
  };
  var genericShowSum = function genericShowSum(dictGenericShow) {
    var genericShow$prime1 = genericShow$prime(dictGenericShow);
    return function (dictGenericShow1) {
      var genericShow$prime2 = genericShow$prime(dictGenericShow1);
      return {
        "genericShow'": function genericShow(v) {
          if (v instanceof Inl) {
            return genericShow$prime1(v.value0);
          }
          ;
          if (v instanceof Inr) {
            return genericShow$prime2(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): " + [v.constructor.name]);
        }
      };
    };
  };
  var genericShow = function genericShow(dictGeneric) {
    var from3 = from(dictGeneric);
    return function (dictGenericShow) {
      var genericShow$prime1 = genericShow$prime(dictGenericShow);
      return function (x) {
        return genericShow$prime1(from3(x));
      };
    };
  };

  // output/Halogen.Query.Input/index.js
  var RefUpdate = /* @__PURE__ */function () {
    function RefUpdate2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    RefUpdate2.create = function (value0) {
      return function (value1) {
        return new RefUpdate2(value0, value1);
      };
    };
    return RefUpdate2;
  }();
  var Action = /* @__PURE__ */function () {
    function Action3(value0) {
      this.value0 = value0;
    }
    ;
    Action3.create = function (value0) {
      return new Action3(value0);
    };
    return Action3;
  }();

  // output/Data.Nullable/foreign.js
  var nullImpl = null;
  function nullable(a2, r, f) {
    return a2 == null ? r : f(a2);
  }
  function notNull(x) {
    return x;
  }

  // output/Data.Nullable/index.js
  var toNullable = /* @__PURE__ */maybe(nullImpl)(notNull);
  var toMaybe = function toMaybe(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Halogen.VDom.Machine/index.js
  var Step = /* @__PURE__ */function () {
    function Step4(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Step4.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return new Step4(value0, value1, value22, value32);
          };
        };
      };
    };
    return Step4;
  }();
  var unStep = unsafeCoerce2;
  var step = function step(v, a2) {
    return v.value2(v.value1, a2);
  };
  var mkStep = unsafeCoerce2;
  var halt = function halt(v) {
    return v.value3(v.value1);
  };
  var extract2 = /* @__PURE__ */unStep(function (v) {
    return v.value0;
  });

  // output/Halogen.VDom.Types/index.js
  var map4 = /* @__PURE__ */map(functorArray);
  var map1 = /* @__PURE__ */map(functorTuple);
  var Text = /* @__PURE__ */function () {
    function Text2(value0) {
      this.value0 = value0;
    }
    ;
    Text2.create = function (value0) {
      return new Text2(value0);
    };
    return Text2;
  }();
  var Elem = /* @__PURE__ */function () {
    function Elem2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Elem2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return new Elem2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Elem2;
  }();
  var Keyed = /* @__PURE__ */function () {
    function Keyed2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Keyed2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return new Keyed2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Keyed2;
  }();
  var Widget = /* @__PURE__ */function () {
    function Widget2(value0) {
      this.value0 = value0;
    }
    ;
    Widget2.create = function (value0) {
      return new Widget2(value0);
    };
    return Widget2;
  }();
  var Grafted = /* @__PURE__ */function () {
    function Grafted2(value0) {
      this.value0 = value0;
    }
    ;
    Grafted2.create = function (value0) {
      return new Grafted2(value0);
    };
    return Grafted2;
  }();
  var Graft = /* @__PURE__ */function () {
    function Graft2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Graft2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new Graft2(value0, value1, value22);
        };
      };
    };
    return Graft2;
  }();
  var unGraft = function unGraft(f) {
    return function ($61) {
      return f($61);
    };
  };
  var graft = unsafeCoerce2;
  var bifunctorGraft = {
    bimap: function bimap(f) {
      return function (g) {
        return unGraft(function (v) {
          return graft(new Graft(function ($63) {
            return f(v.value0($63));
          }, function ($64) {
            return g(v.value1($64));
          }, v.value2));
        });
      };
    }
  };
  var bimap2 = /* @__PURE__ */bimap(bifunctorGraft);
  var runGraft = /* @__PURE__ */unGraft(function (v) {
    var go2 = function go2(v2) {
      if (v2 instanceof Text) {
        return new Text(v2.value0);
      }
      ;
      if (v2 instanceof Elem) {
        return new Elem(v2.value0, v2.value1, v.value0(v2.value2), map4(go2)(v2.value3));
      }
      ;
      if (v2 instanceof Keyed) {
        return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), map4(map1(go2))(v2.value3));
      }
      ;
      if (v2 instanceof Widget) {
        return new Widget(v.value1(v2.value0));
      }
      ;
      if (v2 instanceof Grafted) {
        return new Grafted(bimap2(v.value0)(v.value1)(v2.value0));
      }
      ;
      throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [v2.constructor.name]);
    };
    return go2(v.value2);
  });

  // output/Halogen.VDom.Util/foreign.js
  function unsafeGetAny(key, obj) {
    return obj[key];
  }
  function unsafeHasAny(key, obj) {
    return obj.hasOwnProperty(key);
  }
  function unsafeSetAny(key, val, obj) {
    obj[key] = val;
  }
  function forE2(a2, f) {
    var b2 = [];
    for (var i2 = 0; i2 < a2.length; i2++) {
      b2.push(f(i2, a2[i2]));
    }
    return b2;
  }
  function forEachE(a2, f) {
    for (var i2 = 0; i2 < a2.length; i2++) {
      f(a2[i2]);
    }
  }
  function forInE(o, f) {
    var ks = Object.keys(o);
    for (var i2 = 0; i2 < ks.length; i2++) {
      var k = ks[i2];
      f(k, o[k]);
    }
  }
  function diffWithIxE(a1, a2, f1, f2, f3) {
    var a3 = [];
    var l1 = a1.length;
    var l2 = a2.length;
    var i2 = 0;
    while (1) {
      if (i2 < l1) {
        if (i2 < l2) {
          a3.push(f1(i2, a1[i2], a2[i2]));
        } else {
          f2(i2, a1[i2]);
        }
      } else if (i2 < l2) {
        a3.push(f3(i2, a2[i2]));
      } else {
        break;
      }
      i2++;
    }
    return a3;
  }
  function strMapWithIxE(as, fk, f) {
    var o = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      o[k] = f(k, i2, a2);
    }
    return o;
  }
  function diffWithKeyAndIxE(o1, as, fk, f1, f2, f3) {
    var o2 = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      if (o1.hasOwnProperty(k)) {
        o2[k] = f1(k, i2, o1[k], a2);
      } else {
        o2[k] = f3(k, i2, a2);
      }
    }
    for (var k in o1) {
      if (k in o2) {
        continue;
      }
      f2(k, o1[k]);
    }
    return o2;
  }
  function refEq2(a2, b2) {
    return a2 === b2;
  }
  function createTextNode(s, doc) {
    return doc.createTextNode(s);
  }
  function setTextContent(s, n) {
    n.textContent = s;
  }
  function createElement(ns, name15, doc) {
    if (ns != null) {
      return doc.createElementNS(ns, name15);
    } else {
      return doc.createElement(name15);
    }
  }
  function insertChildIx(i2, a2, b2) {
    var n = b2.childNodes.item(i2) || null;
    if (n !== a2) {
      b2.insertBefore(a2, n);
    }
  }
  function removeChild(a2, b2) {
    if (b2 && a2.parentNode === b2) {
      b2.removeChild(a2);
    }
  }
  function parentNode(a2) {
    return a2.parentNode;
  }
  function setAttribute(ns, attr3, val, el) {
    if (ns != null) {
      el.setAttributeNS(ns, attr3, val);
    } else {
      el.setAttribute(attr3, val);
    }
  }
  function removeAttribute(ns, attr3, el) {
    if (ns != null) {
      el.removeAttributeNS(ns, attr3);
    } else {
      el.removeAttribute(attr3);
    }
  }
  function hasAttribute(ns, attr3, el) {
    if (ns != null) {
      return el.hasAttributeNS(ns, attr3);
    } else {
      return el.hasAttribute(attr3);
    }
  }
  function addEventListener(ev, listener, el) {
    el.addEventListener(ev, listener, false);
  }
  function removeEventListener(ev, listener, el) {
    el.removeEventListener(ev, listener, false);
  }
  var jsUndefined = void 0;

  // output/Foreign.Object.ST/foreign.js
  var newImpl = function newImpl() {
    return {};
  };

  // output/Halogen.VDom.Util/index.js
  var unsafeLookup = unsafeGetAny;
  var unsafeFreeze2 = unsafeCoerce2;
  var pokeMutMap = unsafeSetAny;
  var newMutMap = newImpl;

  // output/Web.DOM.Element/foreign.js
  var getProp = function getProp(name15) {
    return function (doctype) {
      return doctype[name15];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function getEffProp(name15) {
    return function (node) {
      return function () {
        return node[name15];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");
  function _querySelector(selector) {
    return function (node) {
      return function () {
        return node.querySelector(selector);
      };
    };
  }

  // output/Web.DOM.ParentNode/index.js
  var map5 = /* @__PURE__ */map(functorEffect);
  var querySelector = function querySelector(qs) {
    var $2 = map5(toMaybe);
    var $3 = _querySelector(qs);
    return function ($4) {
      return $2($3($4));
    };
  };

  // output/Web.DOM.Element/index.js
  var toNode = unsafeCoerce2;

  // output/Halogen.VDom.DOM/index.js
  var $runtime_lazy2 = function $runtime_lazy2(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var haltWidget = function haltWidget(v) {
    return halt(v.widget);
  };
  var $lazy_patchWidget = /* @__PURE__ */$runtime_lazy2("patchWidget", "Halogen.VDom.DOM", function () {
    return function (state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchWidget(291)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Widget) {
        var res = step(state3.widget, vdom.value0);
        var res$prime = unStep(function (v) {
          return mkStep(new Step(v.value0, {
            build: state3.build,
            widget: res
          }, $lazy_patchWidget(296), haltWidget));
        })(res);
        return res$prime;
      }
      ;
      haltWidget(state3);
      return state3.build(vdom);
    };
  });
  var patchWidget = /* @__PURE__ */$lazy_patchWidget(286);
  var haltText = function haltText(v) {
    var parent2 = parentNode(v.node);
    return removeChild(v.node, parent2);
  };
  var $lazy_patchText = /* @__PURE__ */$runtime_lazy2("patchText", "Halogen.VDom.DOM", function () {
    return function (state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchText(82)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Text) {
        if (state3.value === vdom.value0) {
          return mkStep(new Step(state3.node, state3, $lazy_patchText(85), haltText));
        }
        ;
        if (otherwise) {
          var nextState = {
            build: state3.build,
            node: state3.node,
            value: vdom.value0
          };
          setTextContent(vdom.value0, state3.node);
          return mkStep(new Step(state3.node, nextState, $lazy_patchText(89), haltText));
        }
        ;
      }
      ;
      haltText(state3);
      return state3.build(vdom);
    };
  });
  var patchText = /* @__PURE__ */$lazy_patchText(77);
  var haltKeyed = function haltKeyed(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forInE(v.children, function (v1, s) {
      return halt(s);
    });
    return halt(v.attrs);
  };
  var haltElem = function haltElem(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forEachE(v.children, halt);
    return halt(v.attrs);
  };
  var eqElemSpec = function eqElemSpec(ns1, v, ns2, v1) {
    var $63 = v === v1;
    if ($63) {
      if (ns1 instanceof Just && ns2 instanceof Just && ns1.value0 === ns2.value0) {
        return true;
      }
      ;
      if (ns1 instanceof Nothing && ns2 instanceof Nothing) {
        return true;
      }
      ;
      return false;
    }
    ;
    return false;
  };
  var $lazy_patchElem = /* @__PURE__ */$runtime_lazy2("patchElem", "Halogen.VDom.DOM", function () {
    return function (state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchElem(135)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Elem && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
        var v = length(vdom.value3);
        var v1 = length(state3.children);
        if (v1 === 0 && v === 0) {
          var attrs2 = step(state3.attrs, vdom.value2);
          var nextState = {
            build: state3.build,
            node: state3.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state3.children
          };
          return mkStep(new Step(state3.node, nextState, $lazy_patchElem(149), haltElem));
        }
        ;
        var onThis = function onThis(v2, s) {
          return halt(s);
        };
        var onThese = function onThese(ix, s, v2) {
          var res = step(s, v2);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var onThat = function onThat(ix, v2) {
          var res = state3.build(v2);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var children2 = diffWithIxE(state3.children, vdom.value3, onThese, onThis, onThat);
        var attrs2 = step(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2
        };
        return mkStep(new Step(state3.node, nextState, $lazy_patchElem(172), haltElem));
      }
      ;
      haltElem(state3);
      return state3.build(vdom);
    };
  });
  var patchElem = /* @__PURE__ */$lazy_patchElem(130);
  var $lazy_patchKeyed = /* @__PURE__ */$runtime_lazy2("patchKeyed", "Halogen.VDom.DOM", function () {
    return function (state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchKeyed(222)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Keyed && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
        var v = length(vdom.value3);
        if (state3.length === 0 && v === 0) {
          var attrs2 = step(state3.attrs, vdom.value2);
          var nextState = {
            build: state3.build,
            node: state3.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state3.children,
            length: 0
          };
          return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(237), haltKeyed));
        }
        ;
        var onThis = function onThis(v2, s) {
          return halt(s);
        };
        var onThese = function onThese(v2, ix$prime, s, v3) {
          var res = step(s, v3.value1);
          insertChildIx(ix$prime, extract2(res), state3.node);
          return res;
        };
        var onThat = function onThat(v2, ix, v3) {
          var res = state3.build(v3.value1);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var children2 = diffWithKeyAndIxE(state3.children, vdom.value3, fst, onThese, onThis, onThat);
        var attrs2 = step(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2,
          length: v
        };
        return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(261), haltKeyed));
      }
      ;
      haltKeyed(state3);
      return state3.build(vdom);
    };
  });
  var patchKeyed = /* @__PURE__ */$lazy_patchKeyed(217);
  var buildWidget = function buildWidget(v, build, w) {
    var res = v.buildWidget(v)(w);
    var res$prime = unStep(function (v1) {
      return mkStep(new Step(v1.value0, {
        build: build,
        widget: res
      }, patchWidget, haltWidget));
    })(res);
    return res$prime;
  };
  var buildText = function buildText(v, build, s) {
    var node = createTextNode(s, v.document);
    var state3 = {
      build: build,
      node: node,
      value: s
    };
    return mkStep(new Step(node, state3, patchText, haltText));
  };
  var buildKeyed = function buildKeyed(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode(el);
    var onChild = function onChild(v1, ix, v2) {
      var res = build(v2.value1);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = strMapWithIxE(ch1, fst, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build: build,
      node: node,
      attrs: attrs,
      ns: ns1,
      name: name1,
      children: children2,
      length: length(ch1)
    };
    return mkStep(new Step(node, state3, patchKeyed, haltKeyed));
  };
  var buildElem = function buildElem(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode(el);
    var onChild = function onChild(ix, child) {
      var res = build(child);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = forE2(ch1, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build: build,
      node: node,
      attrs: attrs,
      ns: ns1,
      name: name1,
      children: children2
    };
    return mkStep(new Step(node, state3, patchElem, haltElem));
  };
  var buildVDom = function buildVDom(spec) {
    var $lazy_build = $runtime_lazy2("build", "Halogen.VDom.DOM", function () {
      return function (v) {
        if (v instanceof Text) {
          return buildText(spec, $lazy_build(59), v.value0);
        }
        ;
        if (v instanceof Elem) {
          return buildElem(spec, $lazy_build(60), v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Keyed) {
          return buildKeyed(spec, $lazy_build(61), v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Widget) {
          return buildWidget(spec, $lazy_build(62), v.value0);
        }
        ;
        if (v instanceof Grafted) {
          return $lazy_build(63)(runGraft(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [v.constructor.name]);
      };
    });
    var build = $lazy_build(58);
    return build;
  };

  // output/Foreign/foreign.js
  function typeOf(value12) {
    return _typeof(value12);
  }
  var isArray = Array.isArray || function (value12) {
    return Object.prototype.toString.call(value12) === "[object Array]";
  };

  // output/Effect.Exception/foreign.js
  function error(msg) {
    return new Error(msg);
  }
  function throwException(e) {
    return function () {
      throw e;
    };
  }

  // output/Effect.Exception/index.js
  var $$throw = function $$throw($4) {
    return throwException(error($4));
  };

  // output/Control.Monad.Error.Class/index.js
  var throwError = function throwError(dict) {
    return dict.throwError;
  };
  var catchError = function catchError(dict) {
    return dict.catchError;
  };
  var $$try = function $$try(dictMonadError) {
    var catchError1 = catchError(dictMonadError);
    var Monad0 = dictMonadError.MonadThrow0().Monad0();
    var map20 = map(Monad0.Bind1().Apply0().Functor0());
    var pure14 = pure(Monad0.Applicative0());
    return function (a2) {
      return catchError1(map20(Right.create)(a2))(function ($52) {
        return pure14(Left.create($52));
      });
    };
  };

  // output/Control.Monad.State.Class/index.js
  var state = function state(dict) {
    return dict.state;
  };
  var modify_2 = function modify_2(dictMonadState) {
    var state1 = state(dictMonadState);
    return function (f) {
      return state1(function (s) {
        return new Tuple(unit, f(s));
      });
    };
  };
  var gets = function gets(dictMonadState) {
    var state1 = state(dictMonadState);
    return function (f) {
      return state1(function (s) {
        return new Tuple(f(s), s);
      });
    };
  };
  var get = function get(dictMonadState) {
    return state(dictMonadState)(function (s) {
      return new Tuple(s, s);
    });
  };

  // output/Effect.Class/index.js
  var monadEffectEffect = {
    liftEffect: /* @__PURE__ */identity(categoryFn),
    Monad0: function Monad0() {
      return monadEffect;
    }
  };
  var liftEffect = function liftEffect(dict) {
    return dict.liftEffect;
  };

  // output/Data.List.Types/index.js
  var Nil = /* @__PURE__ */function () {
    function Nil3() {}
    ;
    Nil3.value = new Nil3();
    return Nil3;
  }();
  var Cons = /* @__PURE__ */function () {
    function Cons3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons3.create = function (value0) {
      return function (value1) {
        return new Cons3(value0, value1);
      };
    };
    return Cons3;
  }();
  var NonEmptyList = function NonEmptyList(x) {
    return x;
  };
  var listMap = function listMap(f) {
    var chunkedRevMap = function chunkedRevMap($copy_v) {
      return function ($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function unrolledMap(v2) {
            if (v2 instanceof Cons && v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function reverseUnrolledMap($copy_v2) {
            return function ($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && v2.value0 instanceof Cons && v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function foldr(f) {
      return function (b2) {
        var rev3 = function () {
          var go2 = function go2($copy_v) {
            return function ($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go2(Nil.value);
        }();
        var $284 = _foldl(foldableList)(flip(f))(b2);
        return function ($285) {
          return $284(rev3($285));
        };
      };
    },
    foldl: function foldl(f) {
      var go2 = function go2($copy_b) {
        return function ($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b2, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b2;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b2)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    },
    foldMap: function foldMap(dictMonoid) {
      var append22 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function (f) {
        return _foldl(foldableList)(function (acc) {
          var $286 = append22(acc);
          return function ($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };
  var foldr2 = /* @__PURE__ */_foldr(foldableList);
  var semigroupList = {
    append: function append(xs) {
      return function (ys) {
        return foldr2(Cons.create)(ys)(xs);
      };
    }
  };
  var append1 = /* @__PURE__ */append(semigroupList);
  var altList = {
    alt: append1,
    Functor0: function Functor0() {
      return functorList;
    }
  };
  var plusList = /* @__PURE__ */function () {
    return {
      empty: Nil.value,
      Alt0: function Alt0() {
        return altList;
      }
    };
  }();

  // output/Data.List/index.js
  var reverse2 = /* @__PURE__ */function () {
    var go2 = function go2($copy_v) {
      return function ($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Cons) {
            $tco_var_v = new Cons(v1.value0, v);
            $copy_v1 = v1.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  }();
  var $$null2 = function $$null2(v) {
    if (v instanceof Nil) {
      return true;
    }
    ;
    return false;
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function _unsafePartial(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function _crashWith(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function crashWith() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function unsafeCrashWith(msg) {
    return unsafePartial(function () {
      return crashWith2(msg);
    });
  };

  // output/Data.List.NonEmpty/index.js
  var singleton5 = /* @__PURE__ */function () {
    var $200 = singleton3(plusList);
    return function ($201) {
      return NonEmptyList($200($201));
    };
  }();
  var cons3 = function cons3(y) {
    return function (v) {
      return new NonEmpty(y, new Cons(v.value0, v.value1));
    };
  };

  // output/Foreign.Object/foreign.js
  function all3(f) {
    return function (m) {
      for (var k in m) {
        if (hasOwnProperty.call(m, k) && !f(k)(m[k])) return false;
      }
      return true;
    };
  }
  function _lookup(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  }
  function toArrayWithKey(f) {
    return function (m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var keys = Object.keys || toArrayWithKey(function (k) {
    return function () {
      return k;
    };
  });

  // output/Foreign.Object/index.js
  var lookup = /* @__PURE__ */function () {
    return runFn4(_lookup)(Nothing.value)(Just.create);
  }();
  var isEmpty = /* @__PURE__ */all3(function (v) {
    return function (v1) {
      return false;
    };
  });

  // output/Web.Event.EventTarget/foreign.js
  function eventListener(fn) {
    return function () {
      return function (event) {
        return fn(event)();
      };
    };
  }
  function addEventListener2(type) {
    return function (listener) {
      return function (useCapture) {
        return function (target6) {
          return function () {
            return target6.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }
  function removeEventListener2(type) {
    return function (listener) {
      return function (useCapture) {
        return function (target6) {
          return function () {
            return target6.removeEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }

  // output/Halogen.VDom.DOM.Prop/index.js
  var $runtime_lazy3 = function $runtime_lazy3(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var Created = /* @__PURE__ */function () {
    function Created2(value0) {
      this.value0 = value0;
    }
    ;
    Created2.create = function (value0) {
      return new Created2(value0);
    };
    return Created2;
  }();
  var Removed = /* @__PURE__ */function () {
    function Removed2(value0) {
      this.value0 = value0;
    }
    ;
    Removed2.create = function (value0) {
      return new Removed2(value0);
    };
    return Removed2;
  }();
  var Attribute = /* @__PURE__ */function () {
    function Attribute2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Attribute2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new Attribute2(value0, value1, value22);
        };
      };
    };
    return Attribute2;
  }();
  var Property = /* @__PURE__ */function () {
    function Property2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Property2.create = function (value0) {
      return function (value1) {
        return new Property2(value0, value1);
      };
    };
    return Property2;
  }();
  var Handler = /* @__PURE__ */function () {
    function Handler2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Handler2.create = function (value0) {
      return function (value1) {
        return new Handler2(value0, value1);
      };
    };
    return Handler2;
  }();
  var Ref = /* @__PURE__ */function () {
    function Ref2(value0) {
      this.value0 = value0;
    }
    ;
    Ref2.create = function (value0) {
      return new Ref2(value0);
    };
    return Ref2;
  }();
  var unsafeGetProperty = unsafeGetAny;
  var setProperty = unsafeSetAny;
  var removeProperty = function removeProperty(key, el) {
    var v = hasAttribute(nullImpl, key, el);
    if (v) {
      return removeAttribute(nullImpl, key, el);
    }
    ;
    var v1 = typeOf(unsafeGetAny(key, el));
    if (v1 === "string") {
      return unsafeSetAny(key, "", el);
    }
    ;
    if (key === "rowSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    if (key === "colSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    return unsafeSetAny(key, jsUndefined, el);
  };
  var propToStrKey = function propToStrKey(v) {
    if (v instanceof Attribute && v.value0 instanceof Just) {
      return "attr/" + (v.value0.value0 + (":" + v.value1));
    }
    ;
    if (v instanceof Attribute) {
      return "attr/:" + v.value1;
    }
    ;
    if (v instanceof Property) {
      return "prop/" + v.value0;
    }
    ;
    if (v instanceof Handler) {
      return "handler/" + v.value0;
    }
    ;
    if (v instanceof Ref) {
      return "ref";
    }
    ;
    throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): " + [v.constructor.name]);
  };
  var propFromString = unsafeCoerce2;
  var propFromBoolean = unsafeCoerce2;
  var buildProp = function buildProp(emit) {
    return function (el) {
      var removeProp = function removeProp(prevEvents) {
        return function (v, v1) {
          if (v1 instanceof Attribute) {
            return removeAttribute(toNullable(v1.value0), v1.value1, el);
          }
          ;
          if (v1 instanceof Property) {
            return removeProperty(v1.value0, el);
          }
          ;
          if (v1 instanceof Handler) {
            var handler3 = unsafeLookup(v1.value0, prevEvents);
            return removeEventListener(v1.value0, fst(handler3), el);
          }
          ;
          if (v1 instanceof Ref) {
            return unit;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [v1.constructor.name]);
        };
      };
      var mbEmit = function mbEmit(v) {
        if (v instanceof Just) {
          return emit(v.value0)();
        }
        ;
        return unit;
      };
      var haltProp = function haltProp(state3) {
        var v = lookup("ref")(state3.props);
        if (v instanceof Just && v.value0 instanceof Ref) {
          return mbEmit(v.value0.value0(new Removed(el)));
        }
        ;
        return unit;
      };
      var diffProp = function diffProp(prevEvents, events) {
        return function (v, v1, v11, v2) {
          if (v11 instanceof Attribute && v2 instanceof Attribute) {
            var $66 = v11.value2 === v2.value2;
            if ($66) {
              return v2;
            }
            ;
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v11 instanceof Property && v2 instanceof Property) {
            var v4 = refEq2(v11.value1, v2.value1);
            if (v4) {
              return v2;
            }
            ;
            if (v2.value0 === "value") {
              var elVal = unsafeGetProperty("value", el);
              var $75 = refEq2(elVal, v2.value1);
              if ($75) {
                return v2;
              }
              ;
              setProperty(v2.value0, v2.value1, el);
              return v2;
            }
            ;
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v11 instanceof Handler && v2 instanceof Handler) {
            var handler3 = unsafeLookup(v2.value0, prevEvents);
            write(v2.value1)(snd(handler3))();
            pokeMutMap(v2.value0, handler3, events);
            return v2;
          }
          ;
          return v2;
        };
      };
      var applyProp = function applyProp(events) {
        return function (v, v1, v2) {
          if (v2 instanceof Attribute) {
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v2 instanceof Property) {
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v2 instanceof Handler) {
            var v3 = unsafeGetAny(v2.value0, events);
            if (unsafeHasAny(v2.value0, events)) {
              write(v2.value1)(snd(v3))();
              return v2;
            }
            ;
            var ref2 = $$new(v2.value1)();
            var listener = eventListener(function (ev) {
              return function __do2() {
                var f$prime = read(ref2)();
                return mbEmit(f$prime(ev));
              };
            })();
            pokeMutMap(v2.value0, new Tuple(listener, ref2), events);
            addEventListener(v2.value0, listener, el);
            return v2;
          }
          ;
          if (v2 instanceof Ref) {
            mbEmit(v2.value0(new Created(el)));
            return v2;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [v2.constructor.name]);
        };
      };
      var $lazy_patchProp = $runtime_lazy3("patchProp", "Halogen.VDom.DOM.Prop", function () {
        return function (state3, ps2) {
          var events = newMutMap();
          var onThis = removeProp(state3.events);
          var onThese = diffProp(state3.events, events);
          var onThat = applyProp(events);
          var props = diffWithKeyAndIxE(state3.props, ps2, propToStrKey, onThese, onThis, onThat);
          var nextState = {
            events: unsafeFreeze2(events),
            props: props
          };
          return mkStep(new Step(unit, nextState, $lazy_patchProp(100), haltProp));
        };
      });
      var patchProp = $lazy_patchProp(87);
      var renderProp = function renderProp(ps1) {
        var events = newMutMap();
        var ps1$prime = strMapWithIxE(ps1, propToStrKey, applyProp(events));
        var state3 = {
          events: unsafeFreeze2(events),
          props: ps1$prime
        };
        return mkStep(new Step(unit, state3, patchProp, haltProp));
      };
      return renderProp;
    };
  };

  // output/Halogen.HTML.Core/index.js
  var HTML = function HTML(x) {
    return x;
  };
  var widget = function widget($28) {
    return HTML(Widget.create($28));
  };
  var toPropValue = function toPropValue(dict) {
    return dict.toPropValue;
  };
  var text = function text($29) {
    return HTML(Text.create($29));
  };
  var prop = function prop(dictIsProp) {
    var toPropValue1 = toPropValue(dictIsProp);
    return function (v) {
      var $31 = Property.create(v);
      return function ($32) {
        return $31(toPropValue1($32));
      };
    };
  };
  var isPropString = {
    toPropValue: propFromString
  };
  var isPropBoolean = {
    toPropValue: propFromBoolean
  };
  var handler = /* @__PURE__ */function () {
    return Handler.create;
  }();
  var element = function element(ns) {
    return function (name15) {
      return function (props) {
        return function (children2) {
          return new Elem(ns, name15, props, children2);
        };
      };
    };
  };

  // output/Halogen.HTML.Elements/index.js
  var element2 = /* @__PURE__ */function () {
    return element(Nothing.value);
  }();
  var div2 = /* @__PURE__ */element2("div");
  var div_ = /* @__PURE__ */div2([]);
  var button = /* @__PURE__ */element2("button");

  // output/Effect.Unsafe/foreign.js
  var unsafePerformEffect = function unsafePerformEffect(f) {
    return f();
  };

  // output/Web.HTML.Event.EventTypes/index.js
  var domcontentloaded = "DOMContentLoaded";

  // output/Web.UIEvent.MouseEvent.EventTypes/index.js
  var click = "click";

  // output/Halogen.HTML.Events/index.js
  var mouseHandler = unsafeCoerce2;
  var handler2 = function handler2(et) {
    return function (f) {
      return handler(et)(function (ev) {
        return new Just(new Action(f(ev)));
      });
    };
  };
  var onClick = /* @__PURE__ */function () {
    var $15 = handler2(click);
    return function ($16) {
      return $15(mouseHandler($16));
    };
  }();

  // output/Halogen.HTML.Properties/index.js
  var unwrap2 = /* @__PURE__ */unwrap();
  var prop2 = function prop2(dictIsProp) {
    return prop(dictIsProp);
  };
  var prop1 = /* @__PURE__ */prop2(isPropBoolean);
  var prop22 = /* @__PURE__ */prop2(isPropString);
  var title = /* @__PURE__ */prop22("title");
  var disabled2 = /* @__PURE__ */prop1("disabled");
  var class_ = /* @__PURE__ */function () {
    var $36 = prop22("className");
    return function ($37) {
      return $36(unwrap2($37));
    };
  }();

  // output/Data.CatQueue/index.js
  var CatQueue = /* @__PURE__ */function () {
    function CatQueue2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatQueue2.create = function (value0) {
      return function (value1) {
        return new CatQueue2(value0, value1);
      };
    };
    return CatQueue2;
  }();
  var uncons3 = function uncons3($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
        $tco_done = true;
        return Nothing.value;
      }
      ;
      if (v.value0 instanceof Nil) {
        $copy_v = new CatQueue(reverse2(v.value1), Nil.value);
        return;
      }
      ;
      if (v.value0 instanceof Cons) {
        $tco_done = true;
        return new Just(new Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
      }
      ;
      throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [v.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var snoc3 = function snoc3(v) {
    return function (a2) {
      return new CatQueue(v.value0, new Cons(a2, v.value1));
    };
  };
  var $$null3 = function $$null3(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var empty3 = /* @__PURE__ */function () {
    return new CatQueue(Nil.value, Nil.value);
  }();

  // output/Data.CatList/index.js
  var CatNil = /* @__PURE__ */function () {
    function CatNil2() {}
    ;
    CatNil2.value = new CatNil2();
    return CatNil2;
  }();
  var CatCons = /* @__PURE__ */function () {
    function CatCons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatCons2.create = function (value0) {
      return function (value1) {
        return new CatCons2(value0, value1);
      };
    };
    return CatCons2;
  }();
  var link = function link(v) {
    return function (v1) {
      if (v instanceof CatNil) {
        return v1;
      }
      ;
      if (v1 instanceof CatNil) {
        return v;
      }
      ;
      if (v instanceof CatCons) {
        return new CatCons(v.value0, snoc3(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr3 = function foldr3(k) {
    return function (b2) {
      return function (q2) {
        var foldl2 = function foldl2($copy_v) {
          return function ($copy_v1) {
            return function ($copy_v2) {
              var $tco_var_v = $copy_v;
              var $tco_var_v1 = $copy_v1;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1, v2) {
                if (v2 instanceof Nil) {
                  $tco_done = true;
                  return v1;
                }
                ;
                if (v2 instanceof Cons) {
                  $tco_var_v = v;
                  $tco_var_v1 = v(v1)(v2.value0);
                  $copy_v2 = v2.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
              }
              ;
              return $tco_result;
            };
          };
        };
        var go2 = function go2($copy_xs) {
          return function ($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
              var v = uncons3(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl2(function (x) {
                  return function (i2) {
                    return i2(x);
                  };
                })(b2)(ys);
              }
              ;
              if (v instanceof Just) {
                $tco_var_xs = v.value0.value1;
                $copy_ys = new Cons(k(v.value0.value0), ys);
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            }
            ;
            return $tco_result;
          };
        };
        return go2(q2)(Nil.value);
      };
    };
  };
  var uncons4 = function uncons4(v) {
    if (v instanceof CatNil) {
      return Nothing.value;
    }
    ;
    if (v instanceof CatCons) {
      return new Just(new Tuple(v.value0, function () {
        var $66 = $$null3(v.value1);
        if ($66) {
          return CatNil.value;
        }
        ;
        return foldr3(link)(CatNil.value)(v.value1);
      }()));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
  };
  var empty4 = /* @__PURE__ */function () {
    return CatNil.value;
  }();
  var append4 = link;
  var semigroupCatList = {
    append: append4
  };
  var snoc4 = function snoc4(cat) {
    return function (a2) {
      return append4(cat)(new CatCons(a2, empty3));
    };
  };

  // output/Control.Monad.Free/index.js
  var $runtime_lazy4 = function $runtime_lazy4(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var append5 = /* @__PURE__ */append(semigroupCatList);
  var map6 = /* @__PURE__ */map(functorFn);
  var Free = /* @__PURE__ */function () {
    function Free2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Free2.create = function (value0) {
      return function (value1) {
        return new Free2(value0, value1);
      };
    };
    return Free2;
  }();
  var Return = /* @__PURE__ */function () {
    function Return2(value0) {
      this.value0 = value0;
    }
    ;
    Return2.create = function (value0) {
      return new Return2(value0);
    };
    return Return2;
  }();
  var Bind = /* @__PURE__ */function () {
    function Bind2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Bind2.create = function (value0) {
      return function (value1) {
        return new Bind2(value0, value1);
      };
    };
    return Bind2;
  }();
  var toView = function toView($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      var runExpF = function runExpF(v22) {
        return v22;
      };
      var concatF = function concatF(v22) {
        return function (r) {
          return new Free(v22.value0, append5(v22.value1)(r));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons4(v.value1);
        if (v2 instanceof Nothing) {
          $tco_done = true;
          return new Return(v.value0.value0);
        }
        ;
        if (v2 instanceof Just) {
          $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
          return;
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
      }
      ;
      if (v.value0 instanceof Bind) {
        $tco_done = true;
        return new Bind(v.value0.value0, function (a2) {
          return concatF(v.value0.value1(a2))(v.value1);
        });
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var fromView = function fromView(f) {
    return new Free(f, empty4);
  };
  var freeMonad = {
    Applicative0: function Applicative0() {
      return freeApplicative;
    },
    Bind1: function Bind1() {
      return freeBind;
    }
  };
  var freeFunctor = {
    map: function map(k) {
      return function (f) {
        return bindFlipped(freeBind)(function () {
          var $189 = pure(freeApplicative);
          return function ($190) {
            return $189(k($190));
          };
        }())(f);
      };
    }
  };
  var freeBind = {
    bind: function bind(v) {
      return function (k) {
        return new Free(v.value0, snoc4(v.value1)(k));
      };
    },
    Apply0: function Apply0() {
      return $lazy_freeApply(0);
    }
  };
  var freeApplicative = {
    pure: function pure($191) {
      return fromView(Return.create($191));
    },
    Apply0: function Apply0() {
      return $lazy_freeApply(0);
    }
  };
  var $lazy_freeApply = /* @__PURE__ */$runtime_lazy4("freeApply", "Control.Monad.Free", function () {
    return {
      apply: ap(freeMonad),
      Functor0: function Functor0() {
        return freeFunctor;
      }
    };
  });
  var freeApply = /* @__PURE__ */$lazy_freeApply(77);
  var bind2 = /* @__PURE__ */bind(freeBind);
  var pure2 = /* @__PURE__ */pure(freeApplicative);
  var liftF = function liftF(f) {
    return fromView(new Bind(f, function ($192) {
      return pure2($192);
    }));
  };
  var substFree = function substFree(k) {
    var go2 = function go2(f) {
      var v = toView(f);
      if (v instanceof Return) {
        return pure2(v.value0);
      }
      ;
      if (v instanceof Bind) {
        return bind2(k(v.value0))(map6(go2)(v.value1));
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 168, column 10 - line 170, column 33): " + [v.constructor.name]);
    };
    return go2;
  };
  var foldFree = function foldFree(dictMonadRec) {
    var Monad0 = dictMonadRec.Monad0();
    var map110 = map(Monad0.Bind1().Apply0().Functor0());
    var pure14 = pure(Monad0.Applicative0());
    var tailRecM4 = tailRecM(dictMonadRec);
    return function (k) {
      var go2 = function go2(f) {
        var v = toView(f);
        if (v instanceof Return) {
          return map110(Done.create)(pure14(v.value0));
        }
        ;
        if (v instanceof Bind) {
          return map110(function ($199) {
            return Loop.create(v.value1($199));
          })(k(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): " + [v.constructor.name]);
      };
      return tailRecM4(go2);
    };
  };

  // output/Data.Exists/index.js
  var runExists = unsafeCoerce2;
  var mkExists = unsafeCoerce2;

  // output/Data.Coyoneda/index.js
  var CoyonedaF = /* @__PURE__ */function () {
    function CoyonedaF2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CoyonedaF2.create = function (value0) {
      return function (value1) {
        return new CoyonedaF2(value0, value1);
      };
    };
    return CoyonedaF2;
  }();
  var unCoyoneda = function unCoyoneda(f) {
    return function (v) {
      return runExists(function (v1) {
        return f(v1.value0)(v1.value1);
      })(v);
    };
  };
  var coyoneda = function coyoneda(k) {
    return function (fi) {
      return mkExists(new CoyonedaF(k, fi));
    };
  };
  var functorCoyoneda = {
    map: function map(f) {
      return function (v) {
        return runExists(function (v1) {
          return coyoneda(function ($180) {
            return f(v1.value0($180));
          })(v1.value1);
        })(v);
      };
    }
  };
  var liftCoyoneda = /* @__PURE__ */coyoneda( /* @__PURE__ */identity(categoryFn));

  // output/Data.Map.Internal/index.js
  var Leaf = /* @__PURE__ */function () {
    function Leaf2() {}
    ;
    Leaf2.value = new Leaf2();
    return Leaf2;
  }();
  var Two = /* @__PURE__ */function () {
    function Two2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Two2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return new Two2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Two2;
  }();
  var Three = /* @__PURE__ */function () {
    function Three2(value0, value1, value22, value32, value42, value52, value62) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
      this.value6 = value62;
    }
    ;
    Three2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return function (value42) {
              return function (value52) {
                return function (value62) {
                  return new Three2(value0, value1, value22, value32, value42, value52, value62);
                };
              };
            };
          };
        };
      };
    };
    return Three2;
  }();
  var TwoLeft = /* @__PURE__ */function () {
    function TwoLeft2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoLeft2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new TwoLeft2(value0, value1, value22);
        };
      };
    };
    return TwoLeft2;
  }();
  var TwoRight = /* @__PURE__ */function () {
    function TwoRight2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    TwoRight2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new TwoRight2(value0, value1, value22);
        };
      };
    };
    return TwoRight2;
  }();
  var ThreeLeft = /* @__PURE__ */function () {
    function ThreeLeft2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeLeft2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return function (value42) {
              return function (value52) {
                return new ThreeLeft2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeLeft2;
  }();
  var ThreeMiddle = /* @__PURE__ */function () {
    function ThreeMiddle2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeMiddle2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return function (value42) {
              return function (value52) {
                return new ThreeMiddle2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeMiddle2;
  }();
  var ThreeRight = /* @__PURE__ */function () {
    function ThreeRight2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    ThreeRight2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return function (value42) {
              return function (value52) {
                return new ThreeRight2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return ThreeRight2;
  }();
  var KickUp = /* @__PURE__ */function () {
    function KickUp2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    KickUp2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return function (value32) {
            return new KickUp2(value0, value1, value22, value32);
          };
        };
      };
    };
    return KickUp2;
  }();
  var lookup2 = function lookup2(dictOrd) {
    var compare3 = compare(dictOrd);
    return function (k) {
      var go2 = function go2($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Two) {
            var v2 = compare3(k)(v.value1);
            if (v2 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value2);
            }
            ;
            if (v2 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          if (v instanceof Three) {
            var v3 = compare3(k)(v.value1);
            if (v3 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value2);
            }
            ;
            var v4 = compare3(k)(v.value4);
            if (v4 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value5);
            }
            ;
            if (v3 instanceof LT) {
              $copy_v = v.value0;
              return;
            }
            ;
            if (v4 instanceof GT) {
              $copy_v = v.value6;
              return;
            }
            ;
            $copy_v = v.value3;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 241, column 5 - line 241, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go2;
    };
  };
  var fromZipper = function fromZipper($copy_dictOrd) {
    return function ($copy_v) {
      return function ($copy_v1) {
        var $tco_var_dictOrd = $copy_dictOrd;
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(dictOrd, v, v1) {
          if (v instanceof Nil) {
            $tco_done = true;
            return v1;
          }
          ;
          if (v instanceof Cons) {
            if (v.value0 instanceof TwoLeft) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Two(v1, v.value0.value0, v.value0.value1, v.value0.value2);
              return;
            }
            ;
            if (v.value0 instanceof TwoRight) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Two(v.value0.value0, v.value0.value1, v.value0.value2, v1);
              return;
            }
            ;
            if (v.value0 instanceof ThreeLeft) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v1, v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeMiddle) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v1, v.value0.value3, v.value0.value4, v.value0.value5);
              return;
            }
            ;
            if (v.value0 instanceof ThreeRight) {
              $tco_var_dictOrd = dictOrd;
              $tco_var_v = v.value1;
              $copy_v1 = new Three(v.value0.value0, v.value0.value1, v.value0.value2, v.value0.value3, v.value0.value4, v.value0.value5, v1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 462, column 3 - line 467, column 88): " + [v.value0.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 459, column 1 - line 459, column 80): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_dictOrd, $tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
  };
  var insert2 = function insert2(dictOrd) {
    var fromZipper1 = fromZipper(dictOrd);
    var compare3 = compare(dictOrd);
    return function (k) {
      return function (v) {
        var up = function up($copy_v1) {
          return function ($copy_v2) {
            var $tco_var_v1 = $copy_v1;
            var $tco_done = false;
            var $tco_result;
            function $tco_loop(v1, v2) {
              if (v1 instanceof Nil) {
                $tco_done = true;
                return new Two(v2.value0, v2.value1, v2.value2, v2.value3);
              }
              ;
              if (v1 instanceof Cons) {
                if (v1.value0 instanceof TwoLeft) {
                  $tco_done = true;
                  return fromZipper1(v1.value1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, v1.value0.value0, v1.value0.value1, v1.value0.value2));
                }
                ;
                if (v1.value0 instanceof TwoRight) {
                  $tco_done = true;
                  return fromZipper1(v1.value1)(new Three(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0, v2.value1, v2.value2, v2.value3));
                }
                ;
                if (v1.value0 instanceof ThreeLeft) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v2.value0, v2.value1, v2.value2, v2.value3), v1.value0.value0, v1.value0.value1, new Two(v1.value0.value2, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeMiddle) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v2.value0), v2.value1, v2.value2, new Two(v2.value3, v1.value0.value3, v1.value0.value4, v1.value0.value5));
                  return;
                }
                ;
                if (v1.value0 instanceof ThreeRight) {
                  $tco_var_v1 = v1.value1;
                  $copy_v2 = new KickUp(new Two(v1.value0.value0, v1.value0.value1, v1.value0.value2, v1.value0.value3), v1.value0.value4, v1.value0.value5, new Two(v2.value0, v2.value1, v2.value2, v2.value3));
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.Map.Internal (line 498, column 5 - line 503, column 108): " + [v1.value0.constructor.name, v2.constructor.name]);
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 3 - line 495, column 56): " + [v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done) {
              $tco_result = $tco_loop($tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
        var down = function down($copy_v1) {
          return function ($copy_v2) {
            var $tco_var_v1 = $copy_v1;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(v1, v2) {
              if (v2 instanceof Leaf) {
                $tco_done1 = true;
                return up(v1)(new KickUp(Leaf.value, k, v, Leaf.value));
              }
              ;
              if (v2 instanceof Two) {
                var v3 = compare3(k)(v2.value1);
                if (v3 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Two(v2.value0, k, v, v2.value3));
                }
                ;
                if (v3 instanceof LT) {
                  $tco_var_v1 = new Cons(new TwoLeft(v2.value1, v2.value2, v2.value3), v1);
                  $copy_v2 = v2.value0;
                  return;
                }
                ;
                $tco_var_v1 = new Cons(new TwoRight(v2.value0, v2.value1, v2.value2), v1);
                $copy_v2 = v2.value3;
                return;
              }
              ;
              if (v2 instanceof Three) {
                var v3 = compare3(k)(v2.value1);
                if (v3 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Three(v2.value0, k, v, v2.value3, v2.value4, v2.value5, v2.value6));
                }
                ;
                var v4 = compare3(k)(v2.value4);
                if (v4 instanceof EQ) {
                  $tco_done1 = true;
                  return fromZipper1(v1)(new Three(v2.value0, v2.value1, v2.value2, v2.value3, k, v, v2.value6));
                }
                ;
                if (v3 instanceof LT) {
                  $tco_var_v1 = new Cons(new ThreeLeft(v2.value1, v2.value2, v2.value3, v2.value4, v2.value5, v2.value6), v1);
                  $copy_v2 = v2.value0;
                  return;
                }
                ;
                if (v3 instanceof GT && v4 instanceof LT) {
                  $tco_var_v1 = new Cons(new ThreeMiddle(v2.value0, v2.value1, v2.value2, v2.value4, v2.value5, v2.value6), v1);
                  $copy_v2 = v2.value3;
                  return;
                }
                ;
                $tco_var_v1 = new Cons(new ThreeRight(v2.value0, v2.value1, v2.value2, v2.value3, v2.value4, v2.value5), v1);
                $copy_v2 = v2.value6;
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.Map.Internal (line 478, column 3 - line 478, column 55): " + [v1.constructor.name, v2.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_v1, $copy_v2);
            }
            ;
            return $tco_result;
          };
        };
        return down(Nil.value);
      };
    };
  };
  var pop = function pop(dictOrd) {
    var fromZipper1 = fromZipper(dictOrd);
    var compare3 = compare(dictOrd);
    return function (k) {
      var up = function up($copy_ctxs) {
        return function ($copy_tree) {
          var $tco_var_ctxs = $copy_ctxs;
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(ctxs, tree) {
            if (ctxs instanceof Nil) {
              $tco_done = true;
              return tree;
            }
            ;
            if (ctxs instanceof Cons) {
              if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Leaf && tree instanceof Leaf) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value));
              }
              ;
              if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Leaf && tree instanceof Leaf) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value));
              }
              ;
              if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Two) {
                $tco_var_ctxs = ctxs.value1;
                $copy_tree = new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3);
                return;
              }
              ;
              if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Two) {
                $tco_var_ctxs = ctxs.value1;
                $copy_tree = new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree);
                return;
              }
              ;
              if (ctxs.value0 instanceof TwoLeft && ctxs.value0.value2 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6)));
              }
              ;
              if (ctxs.value0 instanceof TwoRight && ctxs.value0.value0 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree)));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Leaf && ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value0, ctxs.value0.value1, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Leaf && ctxs.value0.value5 instanceof Leaf && tree instanceof Leaf) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value3, ctxs.value0.value4, Leaf.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value0 instanceof Leaf && ctxs.value0.value3 instanceof Leaf && tree instanceof Leaf) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(Leaf.value, ctxs.value0.value1, ctxs.value0.value2, Leaf.value, ctxs.value0.value4, ctxs.value0.value5, Leaf.value));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Two) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(new Three(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0, ctxs.value0.value2.value1, ctxs.value0.value2.value2, ctxs.value0.value2.value3), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Two) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(new Three(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Two) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0, ctxs.value0.value5.value1, ctxs.value0.value5.value2, ctxs.value0.value5.value3)));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Two) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Two(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Three(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3, ctxs.value0.value4, ctxs.value0.value5, tree)));
              }
              ;
              if (ctxs.value0 instanceof ThreeLeft && ctxs.value0.value2 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(new Two(tree, ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2.value0), ctxs.value0.value2.value1, ctxs.value0.value2.value2, new Two(ctxs.value0.value2.value3, ctxs.value0.value2.value4, ctxs.value0.value2.value5, ctxs.value0.value2.value6), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value0 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(new Two(ctxs.value0.value0.value0, ctxs.value0.value0.value1, ctxs.value0.value0.value2, ctxs.value0.value0.value3), ctxs.value0.value0.value4, ctxs.value0.value0.value5, new Two(ctxs.value0.value0.value6, ctxs.value0.value1, ctxs.value0.value2, tree), ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5));
              }
              ;
              if (ctxs.value0 instanceof ThreeMiddle && ctxs.value0.value5 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(tree, ctxs.value0.value3, ctxs.value0.value4, ctxs.value0.value5.value0), ctxs.value0.value5.value1, ctxs.value0.value5.value2, new Two(ctxs.value0.value5.value3, ctxs.value0.value5.value4, ctxs.value0.value5.value5, ctxs.value0.value5.value6)));
              }
              ;
              if (ctxs.value0 instanceof ThreeRight && ctxs.value0.value3 instanceof Three) {
                $tco_done = true;
                return fromZipper1(ctxs.value1)(new Three(ctxs.value0.value0, ctxs.value0.value1, ctxs.value0.value2, new Two(ctxs.value0.value3.value0, ctxs.value0.value3.value1, ctxs.value0.value3.value2, ctxs.value0.value3.value3), ctxs.value0.value3.value4, ctxs.value0.value3.value5, new Two(ctxs.value0.value3.value6, ctxs.value0.value4, ctxs.value0.value5, tree)));
              }
              ;
              $tco_done = true;
              return unsafeCrashWith("The impossible happened in partial function `up`.");
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 552, column 5 - line 573, column 86): " + [ctxs.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($tco_var_ctxs, $copy_tree);
          }
          ;
          return $tco_result;
        };
      };
      var removeMaxNode = function removeMaxNode($copy_ctx) {
        return function ($copy_m) {
          var $tco_var_ctx = $copy_ctx;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(ctx, m) {
            if (m instanceof Two && m.value0 instanceof Leaf && m.value3 instanceof Leaf) {
              $tco_done1 = true;
              return up(ctx)(Leaf.value);
            }
            ;
            if (m instanceof Two) {
              $tco_var_ctx = new Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
              $copy_m = m.value3;
              return;
            }
            ;
            if (m instanceof Three && m.value0 instanceof Leaf && m.value3 instanceof Leaf && m.value6 instanceof Leaf) {
              $tco_done1 = true;
              return up(new Cons(new TwoRight(Leaf.value, m.value1, m.value2), ctx))(Leaf.value);
            }
            ;
            if (m instanceof Three) {
              $tco_var_ctx = new Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
              $copy_m = m.value6;
              return;
            }
            ;
            $tco_done1 = true;
            return unsafeCrashWith("The impossible happened in partial function `removeMaxNode`.");
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_ctx, $copy_m);
          }
          ;
          return $tco_result;
        };
      };
      var maxNode = function maxNode($copy_m) {
        var $tco_done2 = false;
        var $tco_result;
        function $tco_loop(m) {
          if (m instanceof Two && m.value3 instanceof Leaf) {
            $tco_done2 = true;
            return {
              key: m.value1,
              value: m.value2
            };
          }
          ;
          if (m instanceof Two) {
            $copy_m = m.value3;
            return;
          }
          ;
          if (m instanceof Three && m.value6 instanceof Leaf) {
            $tco_done2 = true;
            return {
              key: m.value4,
              value: m.value5
            };
          }
          ;
          if (m instanceof Three) {
            $copy_m = m.value6;
            return;
          }
          ;
          $tco_done2 = true;
          return unsafeCrashWith("The impossible happened in partial function `maxNode`.");
        }
        ;
        while (!$tco_done2) {
          $tco_result = $tco_loop($copy_m);
        }
        ;
        return $tco_result;
      };
      var down = function down($copy_ctx) {
        return function ($copy_m) {
          var $tco_var_ctx = $copy_ctx;
          var $tco_done3 = false;
          var $tco_result;
          function $tco_loop(ctx, m) {
            if (m instanceof Leaf) {
              $tco_done3 = true;
              return Nothing.value;
            }
            ;
            if (m instanceof Two) {
              var v = compare3(k)(m.value1);
              if (m.value3 instanceof Leaf && v instanceof EQ) {
                $tco_done3 = true;
                return new Just(new Tuple(m.value2, up(ctx)(Leaf.value)));
              }
              ;
              if (v instanceof EQ) {
                var max6 = maxNode(m.value0);
                $tco_done3 = true;
                return new Just(new Tuple(m.value2, removeMaxNode(new Cons(new TwoLeft(max6.key, max6.value, m.value3), ctx))(m.value0)));
              }
              ;
              if (v instanceof LT) {
                $tco_var_ctx = new Cons(new TwoLeft(m.value1, m.value2, m.value3), ctx);
                $copy_m = m.value0;
                return;
              }
              ;
              $tco_var_ctx = new Cons(new TwoRight(m.value0, m.value1, m.value2), ctx);
              $copy_m = m.value3;
              return;
            }
            ;
            if (m instanceof Three) {
              var leaves = function () {
                if (m.value0 instanceof Leaf && m.value3 instanceof Leaf && m.value6 instanceof Leaf) {
                  return true;
                }
                ;
                return false;
              }();
              var v = compare3(k)(m.value4);
              var v3 = compare3(k)(m.value1);
              if (leaves && v3 instanceof EQ) {
                $tco_done3 = true;
                return new Just(new Tuple(m.value2, fromZipper1(ctx)(new Two(Leaf.value, m.value4, m.value5, Leaf.value))));
              }
              ;
              if (leaves && v instanceof EQ) {
                $tco_done3 = true;
                return new Just(new Tuple(m.value5, fromZipper1(ctx)(new Two(Leaf.value, m.value1, m.value2, Leaf.value))));
              }
              ;
              if (v3 instanceof EQ) {
                var max6 = maxNode(m.value0);
                $tco_done3 = true;
                return new Just(new Tuple(m.value2, removeMaxNode(new Cons(new ThreeLeft(max6.key, max6.value, m.value3, m.value4, m.value5, m.value6), ctx))(m.value0)));
              }
              ;
              if (v instanceof EQ) {
                var max6 = maxNode(m.value3);
                $tco_done3 = true;
                return new Just(new Tuple(m.value5, removeMaxNode(new Cons(new ThreeMiddle(m.value0, m.value1, m.value2, max6.key, max6.value, m.value6), ctx))(m.value3)));
              }
              ;
              if (v3 instanceof LT) {
                $tco_var_ctx = new Cons(new ThreeLeft(m.value1, m.value2, m.value3, m.value4, m.value5, m.value6), ctx);
                $copy_m = m.value0;
                return;
              }
              ;
              if (v3 instanceof GT && v instanceof LT) {
                $tco_var_ctx = new Cons(new ThreeMiddle(m.value0, m.value1, m.value2, m.value4, m.value5, m.value6), ctx);
                $copy_m = m.value3;
                return;
              }
              ;
              $tco_var_ctx = new Cons(new ThreeRight(m.value0, m.value1, m.value2, m.value3, m.value4, m.value5), ctx);
              $copy_m = m.value6;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 525, column 16 - line 548, column 80): " + [m.constructor.name]);
          }
          ;
          while (!$tco_done3) {
            $tco_result = $tco_loop($tco_var_ctx, $copy_m);
          }
          ;
          return $tco_result;
        };
      };
      return down(Nil.value);
    };
  };
  var foldableMap = {
    foldr: function foldr(f) {
      return function (z) {
        return function (m) {
          if (m instanceof Leaf) {
            return z;
          }
          ;
          if (m instanceof Two) {
            return _foldr(foldableMap)(f)(f(m.value2)(_foldr(foldableMap)(f)(z)(m.value3)))(m.value0);
          }
          ;
          if (m instanceof Three) {
            return _foldr(foldableMap)(f)(f(m.value2)(_foldr(foldableMap)(f)(f(m.value5)(_foldr(foldableMap)(f)(z)(m.value6)))(m.value3)))(m.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 133, column 17 - line 136, column 85): " + [m.constructor.name]);
        };
      };
    },
    foldl: function foldl(f) {
      return function (z) {
        return function (m) {
          if (m instanceof Leaf) {
            return z;
          }
          ;
          if (m instanceof Two) {
            return _foldl(foldableMap)(f)(f(_foldl(foldableMap)(f)(z)(m.value0))(m.value2))(m.value3);
          }
          ;
          if (m instanceof Three) {
            return _foldl(foldableMap)(f)(f(_foldl(foldableMap)(f)(f(_foldl(foldableMap)(f)(z)(m.value0))(m.value2))(m.value3))(m.value5))(m.value6);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 137, column 17 - line 140, column 85): " + [m.constructor.name]);
        };
      };
    },
    foldMap: function foldMap(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      var append22 = append(dictMonoid.Semigroup0());
      return function (f) {
        return function (m) {
          if (m instanceof Leaf) {
            return mempty2;
          }
          ;
          if (m instanceof Two) {
            return append22(_foldMap(foldableMap)(dictMonoid)(f)(m.value0))(append22(f(m.value2))(_foldMap(foldableMap)(dictMonoid)(f)(m.value3)));
          }
          ;
          if (m instanceof Three) {
            return append22(_foldMap(foldableMap)(dictMonoid)(f)(m.value0))(append22(f(m.value2))(append22(_foldMap(foldableMap)(dictMonoid)(f)(m.value3))(append22(f(m.value5))(_foldMap(foldableMap)(dictMonoid)(f)(m.value6)))));
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 141, column 17 - line 144, column 93): " + [m.constructor.name]);
        };
      };
    }
  };
  var empty5 = /* @__PURE__ */function () {
    return Leaf.value;
  }();
  var $$delete2 = function $$delete2(dictOrd) {
    var pop12 = pop(dictOrd);
    return function (k) {
      return function (m) {
        return maybe(m)(snd)(pop12(k)(m));
      };
    };
  };
  var alter = function alter(dictOrd) {
    var lookup13 = lookup2(dictOrd);
    var delete1 = $$delete2(dictOrd);
    var insert13 = insert2(dictOrd);
    return function (f) {
      return function (k) {
        return function (m) {
          var v = f(lookup13(k)(m));
          if (v instanceof Nothing) {
            return delete1(k)(m);
          }
          ;
          if (v instanceof Just) {
            return insert13(k)(v.value0)(m);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 596, column 15 - line 598, column 25): " + [v.constructor.name]);
        };
      };
    };
  };

  // output/Halogen.Data.OrdBox/index.js
  var OrdBox = /* @__PURE__ */function () {
    function OrdBox2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    OrdBox2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new OrdBox2(value0, value1, value22);
        };
      };
    };
    return OrdBox2;
  }();
  var mkOrdBox = function mkOrdBox(dictOrd) {
    return OrdBox.create(eq(dictOrd.Eq0()))(compare(dictOrd));
  };
  var eqOrdBox = {
    eq: function eq(v) {
      return function (v1) {
        return v.value0(v.value2)(v1.value2);
      };
    }
  };
  var ordOrdBox = {
    compare: function compare(v) {
      return function (v1) {
        return v.value1(v.value2)(v1.value2);
      };
    },
    Eq0: function Eq0() {
      return eqOrdBox;
    }
  };

  // output/Halogen.Data.Slot/index.js
  var ordTuple2 = /* @__PURE__ */ordTuple(ordString)(ordOrdBox);
  var pop1 = /* @__PURE__ */pop(ordTuple2);
  var lookup1 = /* @__PURE__ */lookup2(ordTuple2);
  var insert1 = /* @__PURE__ */insert2(ordTuple2);
  var pop2 = function pop2() {
    return function (dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function (dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function (sym) {
          return function (key) {
            return function (v) {
              return pop1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
            };
          };
        };
      };
    };
  };
  var lookup3 = function lookup3() {
    return function (dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function (dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function (sym) {
          return function (key) {
            return function (v) {
              return lookup1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
            };
          };
        };
      };
    };
  };
  var insert3 = function insert3() {
    return function (dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function (dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function (sym) {
          return function (key) {
            return function (val) {
              return function (v) {
                return insert1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(val)(v);
              };
            };
          };
        };
      };
    };
  };
  var foreachSlot = function foreachSlot(dictApplicative) {
    var traverse_6 = traverse_(dictApplicative)(foldableMap);
    return function (v) {
      return function (k) {
        return traverse_6(function ($54) {
          return k($54);
        })(v);
      };
    };
  };
  var empty6 = empty5;

  // output/Control.Applicative.Free/index.js
  var identity5 = /* @__PURE__ */identity(categoryFn);
  var Pure = /* @__PURE__ */function () {
    function Pure2(value0) {
      this.value0 = value0;
    }
    ;
    Pure2.create = function (value0) {
      return new Pure2(value0);
    };
    return Pure2;
  }();
  var Lift = /* @__PURE__ */function () {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function (value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var Ap = /* @__PURE__ */function () {
    function Ap2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Ap2.create = function (value0) {
      return function (value1) {
        return new Ap2(value0, value1);
      };
    };
    return Ap2;
  }();
  var mkAp = function mkAp(fba) {
    return function (fb) {
      return new Ap(fba, fb);
    };
  };
  var liftFreeAp = /* @__PURE__ */function () {
    return Lift.create;
  }();
  var goLeft = function goLeft(dictApplicative) {
    var pure14 = pure(dictApplicative);
    return function (fStack) {
      return function (valStack) {
        return function (nat) {
          return function (func) {
            return function (count) {
              if (func instanceof Pure) {
                return new Tuple(new Cons({
                  func: pure14(func.value0),
                  count: count
                }, fStack), valStack);
              }
              ;
              if (func instanceof Lift) {
                return new Tuple(new Cons({
                  func: nat(func.value0),
                  count: count
                }, fStack), valStack);
              }
              ;
              if (func instanceof Ap) {
                return goLeft(dictApplicative)(fStack)(cons3(func.value1)(valStack))(nat)(func.value0)(count + 1 | 0);
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): " + [func.constructor.name]);
            };
          };
        };
      };
    };
  };
  var goApply = function goApply(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    return function (fStack) {
      return function (vals) {
        return function (gVal) {
          if (fStack instanceof Nil) {
            return new Left(gVal);
          }
          ;
          if (fStack instanceof Cons) {
            var gRes = apply2(fStack.value0.func)(gVal);
            var $31 = fStack.value0.count === 1;
            if ($31) {
              if (fStack.value1 instanceof Nil) {
                return new Left(gRes);
              }
              ;
              return goApply(dictApplicative)(fStack.value1)(vals)(gRes);
            }
            ;
            if (vals instanceof Nil) {
              return new Left(gRes);
            }
            ;
            if (vals instanceof Cons) {
              return new Right(new Tuple(new Cons({
                func: gRes,
                count: fStack.value0.count - 1 | 0
              }, fStack.value1), new NonEmpty(vals.value0, vals.value1)));
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): " + [vals.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): " + [fStack.constructor.name]);
        };
      };
    };
  };
  var functorFreeAp = {
    map: function map(f) {
      return function (x) {
        return mkAp(new Pure(f))(x);
      };
    }
  };
  var foldFreeAp = function foldFreeAp(dictApplicative) {
    var goApply1 = goApply(dictApplicative);
    var pure14 = pure(dictApplicative);
    var goLeft1 = goLeft(dictApplicative);
    return function (nat) {
      return function (z) {
        var go2 = function go2($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
            if (v.value1.value0 instanceof Pure) {
              var v1 = goApply1(v.value0)(v.value1.value1)(pure14(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Lift) {
              var v1 = goApply1(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Ap) {
              var nextVals = new NonEmpty(v.value1.value0.value1, v.value1.value1);
              $copy_v = goLeft1(v.value0)(nextVals)(nat)(v.value1.value0.value0)(1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): " + [v.value1.value0.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
          }
          ;
          return $tco_result;
        };
        return go2(new Tuple(Nil.value, singleton5(z)));
      };
    };
  };
  var retractFreeAp = function retractFreeAp(dictApplicative) {
    return foldFreeAp(dictApplicative)(identity5);
  };
  var applyFreeAp = {
    apply: function apply(fba) {
      return function (fb) {
        return mkAp(fba)(fb);
      };
    },
    Functor0: function Functor0() {
      return functorFreeAp;
    }
  };
  var applicativeFreeAp = /* @__PURE__ */function () {
    return {
      pure: Pure.create,
      Apply0: function Apply0() {
        return applyFreeAp;
      }
    };
  }();
  var foldFreeAp1 = /* @__PURE__ */foldFreeAp(applicativeFreeAp);
  var hoistFreeAp = function hoistFreeAp(f) {
    return foldFreeAp1(function ($54) {
      return liftFreeAp(f($54));
    });
  };

  // output/Effect.Aff/foreign.js
  var Aff = function () {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function fn(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler2(error4) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error4) {
        setTimeout(function () {
          throw error4;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error4) {
        return left(error4);
      }
    }
    function runAsync(left, eff, k) {
      try {
        return eff(k)();
      } catch (error4) {
        k(left(error4))();
        return nonCanceler2;
      }
    }
    var Scheduler = function () {
      var limit = 1024;
      var size4 = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size4 !== 0) {
          size4--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function isDraining() {
          return draining;
        },
        enqueue: function enqueue(cb) {
          var i2, tmp;
          if (size4 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size4) % limit] = cb;
          size4++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function register(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function handler(result) {
              return function () {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function isEmpty() {
          return count === 0;
        },
        killAll: function killAll(killError, cb) {
          return function () {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill3(fid) {
              kills[fid] = fibers[fid].kill(killError, function (result) {
                return function () {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function () {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill3(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function (error4) {
              return new Aff2(SYNC, function () {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step4 = aff;
      var fail2 = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step4 = bhead(step4);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail2 = util.left(e);
                step4 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step4)) {
                status = RETURN;
                fail2 = step4;
                step4 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step4 = util.fromRight(step4);
              }
              break;
            case CONTINUE:
              switch (step4.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step4._2;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step4 = util.right(step4._1);
                  } else {
                    status = STEP_BIND;
                    step4 = step4._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step4 = runSync(util.left, util.right, step4._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step4 = runAsync(util.left, step4._1, function (result2) {
                    return function () {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function () {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step4 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail2 = util.left(step4._1);
                  step4 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step4._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step4._1) {
                    tmp.run();
                  }
                  step4 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step4 = sequential3(util, supervisor, step4._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step4 = interrupt || fail2 || step4;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail2) {
                      status = CONTINUE;
                      step4 = attempt._2(util.fromLeft(fail2));
                      fail2 = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail2) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step4 = util.fromRight(step4);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail2 === null) {
                      result = util.fromRight(step4);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step4 = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail2), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step4 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail2) {
                      step4 = attempt._1.failed(util.fromLeft(fail2))(attempt._2);
                    } else {
                      step4 = attempt._1.completed(util.fromRight(step4))(attempt._2);
                    }
                    fail2 = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail2), attempts, interrupt);
                    status = CONTINUE;
                    step4 = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step4 = attempt._1;
                    fail2 = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step4));
                }
              }
              joins = null;
              if (interrupt && fail2) {
                setTimeout(function () {
                  throw util.fromLeft(fail2);
                }, 0);
              } else if (util.isLeft(step4) && rethrow) {
                setTimeout(function () {
                  if (rethrow) {
                    throw util.fromLeft(step4);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join4) {
        return function () {
          if (status === COMPLETED) {
            rethrow = rethrow && join4.rethrow;
            join4.handler(step4)();
            return function () {};
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join4;
          return function () {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill3(error4, cb) {
        return function () {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function () {};
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function handler() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error4);
              status = COMPLETED;
              step4 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step4(error4)), attempts, interrupt);
                }
                status = RETURN;
                step4 = null;
                fail2 = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step4 = null;
                fail2 = null;
              }
          }
          return canceler;
        };
      }
      function join3(cb) {
        return function () {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill: kill3,
        join: join3,
        onComplete: onComplete,
        isSuspended: function isSuspended() {
          return status === SUSPENDED;
        },
        run: function run() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function () {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill3(error4, par2, cb2) {
        var step4 = par2;
        var head5 = null;
        var tail2 = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop: while (true) {
          tmp = null;
          switch (step4.tag) {
            case FORKED:
              if (step4._3 === EMPTY) {
                tmp = fibers[step4._1];
                kills2[count++] = tmp.kill(error4, function (result) {
                  return function () {
                    count--;
                    if (count === 0) {
                      cb2(result)();
                    }
                  };
                });
              }
              if (head5 === null) {
                break loop;
              }
              step4 = head5._2;
              if (tail2 === null) {
                head5 = null;
              } else {
                head5 = tail2._1;
                tail2 = tail2._2;
              }
              break;
            case MAP:
              step4 = step4._2;
              break;
            case APPLY:
            case ALT:
              if (head5) {
                tail2 = new Aff2(CONS, head5, tail2);
              }
              head5 = step4;
              step4 = step4._1;
              break;
          }
        }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join3(result, head5, tail2) {
        var fail2, step4, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail2 = result;
          step4 = null;
        } else {
          step4 = result;
          fail2 = null;
        }
        loop: while (true) {
          lhs = null;
          rhs = null;
          tmp = null;
          kid = null;
          if (interrupt !== null) {
            return;
          }
          if (head5 === null) {
            cb(fail2 || step4)();
            return;
          }
          if (head5._3 !== EMPTY) {
            return;
          }
          switch (head5.tag) {
            case MAP:
              if (fail2 === null) {
                head5._3 = util.right(head5._1(util.fromRight(step4)));
                step4 = head5._3;
              } else {
                head5._3 = fail2;
              }
              break;
            case APPLY:
              lhs = head5._1._3;
              rhs = head5._2._3;
              if (fail2) {
                head5._3 = fail2;
                tmp = true;
                kid = killId++;
                kills[kid] = kill3(early, fail2 === lhs ? head5._2 : head5._1, function () {
                  return function () {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(fail2, null, null);
                    } else {
                      join3(fail2, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              } else if (lhs === EMPTY || rhs === EMPTY) {
                return;
              } else {
                step4 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                head5._3 = step4;
              }
              break;
            case ALT:
              lhs = head5._1._3;
              rhs = head5._2._3;
              if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                return;
              }
              if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                fail2 = step4 === lhs ? rhs : lhs;
                step4 = null;
                head5._3 = fail2;
              } else {
                head5._3 = step4;
                tmp = true;
                kid = killId++;
                kills[kid] = kill3(early, step4 === lhs ? head5._2 : head5._1, function () {
                  return function () {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(step4, null, null);
                    } else {
                      join3(step4, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              }
              break;
          }
          if (tail2 === null) {
            head5 = null;
          } else {
            head5 = tail2._1;
            tail2 = tail2._2;
          }
        }
      }
      function resolve(fiber) {
        return function (result) {
          return function () {
            delete fibers[fiber._1];
            fiber._3 = result;
            join3(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step4 = par;
        var head5 = null;
        var tail2 = null;
        var tmp, fid;
        loop: while (true) {
          tmp = null;
          fid = null;
          switch (status) {
            case CONTINUE:
              switch (step4.tag) {
                case MAP:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(MAP, step4._1, EMPTY, EMPTY);
                  step4 = step4._2;
                  break;
                case APPLY:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(APPLY, EMPTY, step4._2, EMPTY);
                  step4 = step4._1;
                  break;
                case ALT:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(ALT, EMPTY, step4._2, EMPTY);
                  step4 = step4._1;
                  break;
                default:
                  fid = fiberId++;
                  status = RETURN;
                  tmp = step4;
                  step4 = new Aff2(FORKED, fid, new Aff2(CONS, head5, tail2), EMPTY);
                  tmp = Fiber(util, supervisor, tmp);
                  tmp.onComplete({
                    rethrow: false,
                    handler: resolve(step4)
                  })();
                  fibers[fid] = tmp;
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
              }
              break;
            case RETURN:
              if (head5 === null) {
                break loop;
              }
              if (head5._1 === EMPTY) {
                head5._1 = step4;
                status = CONTINUE;
                step4 = head5._2;
                head5._2 = EMPTY;
              } else {
                head5._2 = step4;
                step4 = head5;
                if (tail2 === null) {
                  head5 = null;
                } else {
                  head5 = tail2._1;
                  tail2 = tail2._2;
                }
              }
          }
        }
        root = step4;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error4, cb2) {
        interrupt = util.left(error4);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill3(error4, root, cb2);
        return function (killError) {
          return new Aff2(ASYNC, function (killCb) {
            return function () {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler2;
            };
          });
        };
      }
      run3();
      return function (killError) {
        return new Aff2(ASYNC, function (killCb) {
          return function () {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential3(util, supervisor, par) {
      return new Aff2(ASYNC, function (cb) {
        return function () {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler2;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _catchError(aff) {
    return function (k) {
      return Aff.Catch(aff, k);
    };
  }
  function _map(f) {
    return function (aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function (value12) {
          return Aff.Pure(f(value12));
        });
      }
    };
  }
  function _bind(aff) {
    return function (k) {
      return Aff.Bind(aff, k);
    };
  }
  function _fork(immediate) {
    return function (aff) {
      return Aff.Fork(immediate, aff);
    };
  }
  var _liftEffect = Aff.Sync;
  function _parAffMap(f) {
    return function (aff) {
      return Aff.ParMap(f, aff);
    };
  }
  function _parAffApply(aff1) {
    return function (aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  }
  var makeAff = Aff.Async;
  function generalBracket(acquire) {
    return function (options2) {
      return function (k) {
        return Aff.Bracket(acquire, options2, k);
      };
    };
  }
  function _makeFiber(util, aff) {
    return function () {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _delay = function () {
    function setDelay(n, k) {
      if (n === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k);
      } else {
        return setTimeout(k, n);
      }
    }
    function clearDelay(n, t) {
      if (n === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t);
      } else {
        return clearTimeout(t);
      }
    }
    return function (right, ms) {
      return Aff.Async(function (cb) {
        return function () {
          var timer = setDelay(ms, cb(right()));
          return function () {
            return Aff.Sync(function () {
              return right(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Control.Parallel.Class/index.js
  var sequential = function sequential(dict) {
    return dict.sequential;
  };
  var parallel = function parallel(dict) {
    return dict.parallel;
  };

  // output/Control.Parallel/index.js
  var identity6 = /* @__PURE__ */identity(categoryFn);
  var parTraverse_ = function parTraverse_(dictParallel) {
    var sequential3 = sequential(dictParallel);
    var traverse_6 = traverse_(dictParallel.Applicative1());
    var parallel3 = parallel(dictParallel);
    return function (dictFoldable) {
      var traverse_14 = traverse_6(dictFoldable);
      return function (f) {
        var $48 = traverse_14(function ($50) {
          return parallel3(f($50));
        });
        return function ($49) {
          return sequential3($48($49));
        };
      };
    };
  };
  var parSequence_ = function parSequence_(dictParallel) {
    var parTraverse_1 = parTraverse_(dictParallel);
    return function (dictFoldable) {
      return parTraverse_1(dictFoldable)(identity6);
    };
  };

  // output/Effect.Aff/index.js
  var $runtime_lazy5 = function $runtime_lazy5(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var pure3 = /* @__PURE__ */pure(applicativeEffect);
  var $$void3 = /* @__PURE__ */$$void(functorEffect);
  var map7 = /* @__PURE__ */map(functorEffect);
  var Canceler = function Canceler(x) {
    return x;
  };
  var suspendAff = /* @__PURE__ */_fork(false);
  var functorParAff = {
    map: _parAffMap
  };
  var functorAff = {
    map: _map
  };
  var map12 = /* @__PURE__ */map(functorAff);
  var forkAff = /* @__PURE__ */_fork(true);
  var ffiUtil = /* @__PURE__ */function () {
    var unsafeFromRight = function unsafeFromRight(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function unsafeFromLeft(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function isLeft(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft: isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function makeFiber(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function launchAff(aff) {
    return function __do2() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var bracket = function bracket(acquire) {
    return function (completed) {
      return generalBracket(acquire)({
        killed: $$const(completed),
        failed: $$const(completed),
        completed: $$const(completed)
      });
    };
  };
  var applyParAff = {
    apply: _parAffApply,
    Functor0: function Functor0() {
      return functorParAff;
    }
  };
  var monadAff = {
    Applicative0: function Applicative0() {
      return applicativeAff;
    },
    Bind1: function Bind1() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function Apply0() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function Apply0() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */$runtime_lazy5("applyAff", "Effect.Aff", function () {
    return {
      apply: ap(monadAff),
      Functor0: function Functor0() {
        return functorAff;
      }
    };
  });
  var pure22 = /* @__PURE__ */pure(applicativeAff);
  var bind1 = /* @__PURE__ */bind(bindAff);
  var bindFlipped3 = /* @__PURE__ */bindFlipped(bindAff);
  var $$finally = function $$finally(fin) {
    return function (a2) {
      return bracket(pure22(unit))($$const(fin))($$const(a2));
    };
  };
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function Monad0() {
      return monadAff;
    }
  };
  var liftEffect2 = /* @__PURE__ */liftEffect(monadEffectAff);
  var effectCanceler = function effectCanceler($75) {
    return Canceler($$const(liftEffect2($75)));
  };
  var joinFiber = function joinFiber(v) {
    return makeAff(function (k) {
      return map7(effectCanceler)(v.join(k));
    });
  };
  var functorFiber = {
    map: function map(f) {
      return function (t) {
        return unsafePerformEffect(makeFiber(map12(f)(joinFiber(t))));
      };
    }
  };
  var killFiber = function killFiber(e) {
    return function (v) {
      return bind1(liftEffect2(v.isSuspended))(function (suspended) {
        if (suspended) {
          return liftEffect2($$void3(v.kill(e, $$const(pure3(unit)))));
        }
        ;
        return makeAff(function (k) {
          return map7(effectCanceler)(v.kill(e, k));
        });
      });
    };
  };
  var monadThrowAff = {
    throwError: _throwError,
    Monad0: function Monad0() {
      return monadAff;
    }
  };
  var monadErrorAff = {
    catchError: _catchError,
    MonadThrow0: function MonadThrow0() {
      return monadThrowAff;
    }
  };
  var $$try2 = /* @__PURE__ */$$try(monadErrorAff);
  var runAff = function runAff(k) {
    return function (aff) {
      return launchAff(bindFlipped3(function ($80) {
        return liftEffect2(k($80));
      })($$try2(aff)));
    };
  };
  var runAff_ = function runAff_(k) {
    return function (aff) {
      return $$void3(runAff(k)(aff));
    };
  };
  var parallelAff = {
    parallel: unsafeCoerce2,
    sequential: _sequential,
    Monad0: function Monad0() {
      return monadAff;
    },
    Applicative1: function Applicative1() {
      return $lazy_applicativeParAff(0);
    }
  };
  var $lazy_applicativeParAff = /* @__PURE__ */$runtime_lazy5("applicativeParAff", "Effect.Aff", function () {
    return {
      pure: function () {
        var $82 = parallel(parallelAff);
        return function ($83) {
          return $82(pure22($83));
        };
      }(),
      Apply0: function Apply0() {
        return applyParAff;
      }
    };
  });
  var applicativeParAff = /* @__PURE__ */$lazy_applicativeParAff(136);
  var monadRecAff = {
    tailRecM: function tailRecM(k) {
      var go2 = function go2(a2) {
        return bind1(k(a2))(function (res) {
          if (res instanceof Done) {
            return pure22(res.value0);
          }
          ;
          if (res instanceof Loop) {
            return go2(res.value0);
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 104, column 7 - line 106, column 23): " + [res.constructor.name]);
        });
      };
      return go2;
    },
    Monad0: function Monad0() {
      return monadAff;
    }
  };
  var nonCanceler = /* @__PURE__ */$$const( /* @__PURE__ */pure22(unit));

  // output/Halogen.Query.ChildQuery/index.js
  var unChildQueryBox = unsafeCoerce2;

  // output/Unsafe.Reference/foreign.js
  function reallyUnsafeRefEq(a2) {
    return function (b2) {
      return a2 === b2;
    };
  }

  // output/Unsafe.Reference/index.js
  var unsafeRefEq = reallyUnsafeRefEq;

  // output/Halogen.Subscription/index.js
  var $$void4 = /* @__PURE__ */$$void(functorEffect);
  var bind3 = /* @__PURE__ */bind(bindEffect);
  var append6 = /* @__PURE__ */append(semigroupArray);
  var traverse_2 = /* @__PURE__ */traverse_(applicativeEffect);
  var traverse_1 = /* @__PURE__ */traverse_2(foldableArray);
  var unsubscribe = function unsubscribe(v) {
    return v;
  };
  var subscribe = function subscribe(v) {
    return function (k) {
      return v(function ($76) {
        return $$void4(k($76));
      });
    };
  };
  var notify = function notify(v) {
    return function (a2) {
      return v(a2);
    };
  };
  var create = function __do() {
    var subscribers = $$new([])();
    return {
      emitter: function emitter(k) {
        return function __do2() {
          modify_(function (v) {
            return append6(v)([k]);
          })(subscribers)();
          return modify_(deleteBy(unsafeRefEq)(k))(subscribers);
        };
      },
      listener: function listener(a2) {
        return bind3(read(subscribers))(traverse_1(function (k) {
          return k(a2);
        }));
      }
    };
  };

  // output/Halogen.Query.HalogenM/index.js
  var SubscriptionId = function SubscriptionId(x) {
    return x;
  };
  var ForkId = function ForkId(x) {
    return x;
  };
  var State = /* @__PURE__ */function () {
    function State2(value0) {
      this.value0 = value0;
    }
    ;
    State2.create = function (value0) {
      return new State2(value0);
    };
    return State2;
  }();
  var Subscribe = /* @__PURE__ */function () {
    function Subscribe3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Subscribe3.create = function (value0) {
      return function (value1) {
        return new Subscribe3(value0, value1);
      };
    };
    return Subscribe3;
  }();
  var Unsubscribe = /* @__PURE__ */function () {
    function Unsubscribe3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Unsubscribe3.create = function (value0) {
      return function (value1) {
        return new Unsubscribe3(value0, value1);
      };
    };
    return Unsubscribe3;
  }();
  var Lift2 = /* @__PURE__ */function () {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function (value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var ChildQuery2 = /* @__PURE__ */function () {
    function ChildQuery4(value0) {
      this.value0 = value0;
    }
    ;
    ChildQuery4.create = function (value0) {
      return new ChildQuery4(value0);
    };
    return ChildQuery4;
  }();
  var Raise = /* @__PURE__ */function () {
    function Raise3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Raise3.create = function (value0) {
      return function (value1) {
        return new Raise3(value0, value1);
      };
    };
    return Raise3;
  }();
  var Par = /* @__PURE__ */function () {
    function Par3(value0) {
      this.value0 = value0;
    }
    ;
    Par3.create = function (value0) {
      return new Par3(value0);
    };
    return Par3;
  }();
  var Fork = /* @__PURE__ */function () {
    function Fork3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Fork3.create = function (value0) {
      return function (value1) {
        return new Fork3(value0, value1);
      };
    };
    return Fork3;
  }();
  var Join = /* @__PURE__ */function () {
    function Join2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Join2.create = function (value0) {
      return function (value1) {
        return new Join2(value0, value1);
      };
    };
    return Join2;
  }();
  var Kill = /* @__PURE__ */function () {
    function Kill3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Kill3.create = function (value0) {
      return function (value1) {
        return new Kill3(value0, value1);
      };
    };
    return Kill3;
  }();
  var GetRef = /* @__PURE__ */function () {
    function GetRef3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    GetRef3.create = function (value0) {
      return function (value1) {
        return new GetRef3(value0, value1);
      };
    };
    return GetRef3;
  }();
  var HalogenAp = function HalogenAp(x) {
    return x;
  };
  var HalogenM = function HalogenM(x) {
    return x;
  };
  var ordSubscriptionId = ordInt;
  var ordForkId = ordInt;
  var monadHalogenM = freeMonad;
  var monadStateHalogenM = {
    state: function state($181) {
      return HalogenM(liftF(State.create($181)));
    },
    Monad0: function Monad0() {
      return monadHalogenM;
    }
  };
  var functorHalogenM = freeFunctor;
  var bindHalogenM = freeBind;
  var applicativeHalogenM = freeApplicative;
  var applicativeHalogenAp = applicativeFreeAp;

  // output/Halogen.Query.HalogenQ/index.js
  var Initialize = /* @__PURE__ */function () {
    function Initialize3(value0) {
      this.value0 = value0;
    }
    ;
    Initialize3.create = function (value0) {
      return new Initialize3(value0);
    };
    return Initialize3;
  }();
  var Finalize = /* @__PURE__ */function () {
    function Finalize3(value0) {
      this.value0 = value0;
    }
    ;
    Finalize3.create = function (value0) {
      return new Finalize3(value0);
    };
    return Finalize3;
  }();
  var Receive = /* @__PURE__ */function () {
    function Receive2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Receive2.create = function (value0) {
      return function (value1) {
        return new Receive2(value0, value1);
      };
    };
    return Receive2;
  }();
  var Action2 = /* @__PURE__ */function () {
    function Action3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Action3.create = function (value0) {
      return function (value1) {
        return new Action3(value0, value1);
      };
    };
    return Action3;
  }();
  var Query = /* @__PURE__ */function () {
    function Query2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Query2.create = function (value0) {
      return function (value1) {
        return new Query2(value0, value1);
      };
    };
    return Query2;
  }();

  // output/Halogen.VDom.Thunk/index.js
  var $runtime_lazy6 = function $runtime_lazy6(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var unsafeEqThunk = function unsafeEqThunk(v, v1) {
    return refEq2(v.value0, v1.value0) && refEq2(v.value1, v1.value1) && v.value1(v.value3, v1.value3);
  };
  var runThunk = function runThunk(v) {
    return v.value2(v.value3);
  };
  var buildThunk = function buildThunk(toVDom) {
    var haltThunk = function haltThunk(state3) {
      return halt(state3.vdom);
    };
    var $lazy_patchThunk = $runtime_lazy6("patchThunk", "Halogen.VDom.Thunk", function () {
      return function (state3, t2) {
        var $48 = unsafeEqThunk(state3.thunk, t2);
        if ($48) {
          return mkStep(new Step(extract2(state3.vdom), state3, $lazy_patchThunk(112), haltThunk));
        }
        ;
        var vdom = step(state3.vdom, toVDom(runThunk(t2)));
        return mkStep(new Step(extract2(vdom), {
          vdom: vdom,
          thunk: t2
        }, $lazy_patchThunk(115), haltThunk));
      };
    });
    var patchThunk = $lazy_patchThunk(108);
    var renderThunk = function renderThunk(spec) {
      return function (t) {
        var vdom = buildVDom(spec)(toVDom(runThunk(t)));
        return mkStep(new Step(extract2(vdom), {
          thunk: t,
          vdom: vdom
        }, patchThunk, haltThunk));
      };
    };
    return renderThunk;
  };

  // output/Halogen.Component/index.js
  var lookup4 = /* @__PURE__ */lookup3();
  var pop3 = /* @__PURE__ */pop2();
  var insert4 = /* @__PURE__ */insert3();
  var ComponentSlot = /* @__PURE__ */function () {
    function ComponentSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ComponentSlot2.create = function (value0) {
      return new ComponentSlot2(value0);
    };
    return ComponentSlot2;
  }();
  var ThunkSlot = /* @__PURE__ */function () {
    function ThunkSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ThunkSlot2.create = function (value0) {
      return new ThunkSlot2(value0);
    };
    return ThunkSlot2;
  }();
  var unComponentSlot = unsafeCoerce2;
  var unComponent = unsafeCoerce2;
  var mkComponentSlot = unsafeCoerce2;
  var mkComponent = unsafeCoerce2;
  var componentSlot = function componentSlot() {
    return function (dictIsSymbol) {
      var lookup13 = lookup4(dictIsSymbol);
      var pop12 = pop3(dictIsSymbol);
      var insert13 = insert4(dictIsSymbol);
      return function (dictOrd) {
        var lookup23 = lookup13(dictOrd);
        var pop22 = pop12(dictOrd);
        var insert22 = insert13(dictOrd);
        return function (label5) {
          return function (p2) {
            return function (comp) {
              return function (input3) {
                return function (output2) {
                  return mkComponentSlot({
                    get: lookup23(label5)(p2),
                    pop: pop22(label5)(p2),
                    set: insert22(label5)(p2),
                    component: comp,
                    input: input3,
                    output: output2
                  });
                };
              };
            };
          };
        };
      };
    };
  };

  // output/Halogen.Hooks.Hook/index.js
  var bind12 = /* @__PURE__ */bind(freeBind);
  var Hook = function Hook(x) {
    return x;
  };
  var unsafeToHook = function unsafeToHook($16) {
    return Hook(liftF($16));
  };
  var unsafeFromHook = function unsafeFromHook(v) {
    return v;
  };
  var pure4 = /* @__PURE__ */function () {
    var $17 = pure(freeApplicative);
    return function ($18) {
      return Hook($17($18));
    };
  }();
  var bind4 = function bind4(v) {
    return function (f) {
      return bind12(v)(function (a2) {
        var v1 = f(a2);
        return v1;
      });
    };
  };

  // output/Effect.Exception.Unsafe/index.js
  var unsafeThrowException = function unsafeThrowException($1) {
    return unsafePerformEffect(throwException($1));
  };
  var unsafeThrow = function unsafeThrow($2) {
    return unsafeThrowException(error($2));
  };

  // output/Halogen.Hooks.Internal.Types/index.js
  var toStateValue = unsafeCoerce2;
  var toQueryValue = unsafeCoerce2;
  var toOutputValue = unsafeCoerce2;
  var fromStateValue = unsafeCoerce2;
  var fromMemoValues = unsafeCoerce2;
  var fromMemoValue = unsafeCoerce2;

  // output/Web.HTML.HTMLElement/foreign.js
  function _read(nothing, just, value12) {
    var tag = Object.prototype.toString.call(value12);
    if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
      return just(value12);
    } else {
      return nothing;
    }
  }

  // output/Web.HTML.HTMLElement/index.js
  var toNode2 = unsafeCoerce2;
  var fromElement = function fromElement(x) {
    return _read(Nothing.value, Just.create, x);
  };

  // output/Halogen.Hooks.HookM/index.js
  var identity7 = /* @__PURE__ */identity(categoryFn);
  var Modify = /* @__PURE__ */function () {
    function Modify2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Modify2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new Modify2(value0, value1, value22);
        };
      };
    };
    return Modify2;
  }();
  var Subscribe2 = /* @__PURE__ */function () {
    function Subscribe3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Subscribe3.create = function (value0) {
      return function (value1) {
        return new Subscribe3(value0, value1);
      };
    };
    return Subscribe3;
  }();
  var Unsubscribe2 = /* @__PURE__ */function () {
    function Unsubscribe3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Unsubscribe3.create = function (value0) {
      return function (value1) {
        return new Unsubscribe3(value0, value1);
      };
    };
    return Unsubscribe3;
  }();
  var Lift3 = /* @__PURE__ */function () {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function (value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var ChildQuery3 = /* @__PURE__ */function () {
    function ChildQuery4(value0) {
      this.value0 = value0;
    }
    ;
    ChildQuery4.create = function (value0) {
      return new ChildQuery4(value0);
    };
    return ChildQuery4;
  }();
  var Raise2 = /* @__PURE__ */function () {
    function Raise3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Raise3.create = function (value0) {
      return function (value1) {
        return new Raise3(value0, value1);
      };
    };
    return Raise3;
  }();
  var Par2 = /* @__PURE__ */function () {
    function Par3(value0) {
      this.value0 = value0;
    }
    ;
    Par3.create = function (value0) {
      return new Par3(value0);
    };
    return Par3;
  }();
  var Fork2 = /* @__PURE__ */function () {
    function Fork3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Fork3.create = function (value0) {
      return function (value1) {
        return new Fork3(value0, value1);
      };
    };
    return Fork3;
  }();
  var Kill2 = /* @__PURE__ */function () {
    function Kill3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Kill3.create = function (value0) {
      return function (value1) {
        return new Kill3(value0, value1);
      };
    };
    return Kill3;
  }();
  var GetRef2 = /* @__PURE__ */function () {
    function GetRef3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    GetRef3.create = function (value0) {
      return function (value1) {
        return new GetRef3(value0, value1);
      };
    };
    return GetRef3;
  }();
  var functorHookM = freeFunctor;
  var map22 = /* @__PURE__ */map(functorHookM);
  var bindHookM = freeBind;
  var applyHookM = freeApply;
  var applicativeHookM = freeApplicative;
  var raise2 = function raise2(v) {
    return function (o) {
      return liftF(new Raise2(toOutputValue(o), unit));
    };
  };
  var modify5 = function modify5(identifier) {
    return function (f) {
      var f$prime = function f$prime($147) {
        return toStateValue(f(fromStateValue($147)));
      };
      return liftF(new Modify(identifier, f$prime, fromStateValue));
    };
  };
  var modify_3 = function modify_3(identifier) {
    var $148 = map22($$const(unit));
    var $149 = modify5(identifier);
    return function ($150) {
      return $148($149($150));
    };
  };
  var get2 = function get2(identifier) {
    return modify5(identifier)(identity7);
  };

  // output/Halogen.Hooks.Internal.Eval.Types/index.js
  var Initialize2 = /* @__PURE__ */function () {
    function Initialize3() {}
    ;
    Initialize3.value = new Initialize3();
    return Initialize3;
  }();
  var Queued = /* @__PURE__ */function () {
    function Queued2() {}
    ;
    Queued2.value = new Queued2();
    return Queued2;
  }();
  var Step3 = /* @__PURE__ */function () {
    function Step4() {}
    ;
    Step4.value = new Step4();
    return Step4;
  }();
  var Finalize2 = /* @__PURE__ */function () {
    function Finalize3() {}
    ;
    Finalize3.value = new Finalize3();
    return Finalize3;
  }();
  var HookState = function HookState(x) {
    return x;
  };
  var eqInterpretHookReason = {
    eq: function eq(x) {
      return function (y) {
        if (x instanceof Initialize2 && y instanceof Initialize2) {
          return true;
        }
        ;
        if (x instanceof Queued && y instanceof Queued) {
          return true;
        }
        ;
        if (x instanceof Step3 && y instanceof Step3) {
          return true;
        }
        ;
        if (x instanceof Finalize2 && y instanceof Finalize2) {
          return true;
        }
        ;
        return false;
      };
    }
  };
  var toQueryFn = unsafeCoerce2;
  var toHalogenM = function toHalogenM(v) {
    return function (v1) {
      return function (hm) {
        return hm;
      };
    };
  };
  var fromQueryFn = unsafeCoerce2;

  // output/Halogen.Hooks.Internal.UseHookF/index.js
  var UseState = /* @__PURE__ */function () {
    function UseState2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    UseState2.create = function (value0) {
      return function (value1) {
        return new UseState2(value0, value1);
      };
    };
    return UseState2;
  }();
  var UseEffect = /* @__PURE__ */function () {
    function UseEffect2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    UseEffect2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new UseEffect2(value0, value1, value22);
        };
      };
    };
    return UseEffect2;
  }();
  var UseQuery = /* @__PURE__ */function () {
    function UseQuery2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    UseQuery2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new UseQuery2(value0, value1, value22);
        };
      };
    };
    return UseQuery2;
  }();
  var UseMemo = /* @__PURE__ */function () {
    function UseMemo2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    UseMemo2.create = function (value0) {
      return function (value1) {
        return function (value22) {
          return new UseMemo2(value0, value1, value22);
        };
      };
    };
    return UseMemo2;
  }();
  var UseRef = /* @__PURE__ */function () {
    function UseRef2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    UseRef2.create = function (value0) {
      return function (value1) {
        return new UseRef2(value0, value1);
      };
    };
    return UseRef2;
  }();

  // output/Halogen.Hooks.Internal.Eval/index.js
  var fromJust5 = /* @__PURE__ */fromJust();
  var unsafeIndex2 = /* @__PURE__ */unsafeIndex();
  var bind5 = /* @__PURE__ */bind(bindHalogenM);
  var discard2 = /* @__PURE__ */discard(discardUnit);
  var discard1 = /* @__PURE__ */discard2(bindHalogenM);
  var when2 = /* @__PURE__ */when(applicativeHalogenM);
  var sequence_2 = /* @__PURE__ */sequence_(applicativeHalogenM)(foldableArray);
  var eq2 = /* @__PURE__ */eq(eqInterpretHookReason);
  var $$void5 = /* @__PURE__ */$$void(functorHalogenM);
  var gets2 = /* @__PURE__ */gets(monadStateHalogenM);
  var unwrap3 = /* @__PURE__ */unwrap();
  var get3 = /* @__PURE__ */get(monadStateHalogenM);
  var pure1 = /* @__PURE__ */pure(applicativeHalogenM);
  var map8 = /* @__PURE__ */map(functorHookM);
  var unless2 = /* @__PURE__ */unless(applicativeHalogenM);
  var bind13 = /* @__PURE__ */bind(freeBind);
  var discard3 = /* @__PURE__ */discard2(freeBind);
  var pure23 = /* @__PURE__ */pure(freeApplicative);
  var void1 = /* @__PURE__ */$$void(freeFunctor);
  var retractFreeAp2 = /* @__PURE__ */retractFreeAp(applicativeHalogenAp);
  var pure32 = /* @__PURE__ */pure(applicativeHookM);
  var not1 = /* @__PURE__ */not( /* @__PURE__ */heytingAlgebraFunction( /* @__PURE__ */heytingAlgebraFunction(heytingAlgebraBoolean)));
  var applySecond2 = /* @__PURE__ */applySecond(applyHookM);
  var bimap3 = /* @__PURE__ */bimap(bifunctorTuple);
  var unsafeSetCell = function unsafeSetCell(index4) {
    return function (a2) {
      return function (array) {
        return fromJust5(modifyAt(index4)($$const(a2))(array));
      };
    };
  };
  var unsafeGetCell = function unsafeGetCell(index4) {
    return function (array) {
      return unsafeIndex2(array)(index4);
    };
  };
  var stepIndex = function stepIndex(index4) {
    return function (array) {
      var $88 = (index4 + 1 | 0) < length(array);
      if ($88) {
        return index4 + 1 | 0;
      }
      ;
      return 0;
    };
  };
  var mkEval = function mkEval(inputEq) {
    return function (_evalHookM) {
      return function (_evalHook) {
        var executeHooksAndEffects = function executeHooksAndEffects(stateRef) {
          return function (reason) {
            return bind5(_evalHook(reason))(function () {
              var v = unsafePerformEffect(read(stateRef));
              return discard1(when2(!$$null(v.evalQueue))(function () {
                var runQueue = unsafePerformEffect(function __do2() {
                  modify_(function (v1) {
                    return {
                      evalQueue: [],
                      stateDirty: false,
                      componentRef: v1.componentRef,
                      effectCells: v1.effectCells,
                      input: v1.input,
                      memoCells: v1.memoCells,
                      queryFn: v1.queryFn,
                      refCells: v1.refCells,
                      stateCells: v1.stateCells
                    };
                  })(stateRef)();
                  return sequence_2(v.evalQueue);
                });
                return discard1(runQueue)(function () {
                  var v1 = unsafePerformEffect(read(stateRef));
                  var initializeOrStepReason = eq2(reason)(Initialize2.value) || eq2(reason)(Step3.value);
                  return when2(v1.stateDirty && initializeOrStepReason)($$void5(executeHooksAndEffects(stateRef)(Step3.value)));
                });
              }()))(function () {
                return gets2(function ($217) {
                  return function (v1) {
                    return v1.result;
                  }(unwrap3($217));
                });
              });
            });
          };
        };
        return function (v) {
          if (v instanceof Initialize) {
            return bind5(get3)(function (v1) {
              return bind5(executeHooksAndEffects(v1.stateRef)(Initialize2.value))(function () {
                return pure1(v.value0);
              });
            });
          }
          ;
          if (v instanceof Query) {
            return bind5(get3)(function (v1) {
              var v2 = unsafePerformEffect(read(v1.stateRef));
              if (v2.queryFn instanceof Nothing) {
                return pure1(v.value1(unit));
              }
              ;
              if (v2.queryFn instanceof Just) {
                return _evalHookM(executeHooksAndEffects(v1.stateRef)(Step3.value))(unCoyoneda(function (g) {
                  var $218 = map8(maybe(v.value1(unit))(g));
                  var $219 = fromQueryFn(v2.queryFn.value0);
                  return function ($220) {
                    return $218($219($220));
                  };
                })(v.value0));
              }
              ;
              throw new Error("Failed pattern match at Halogen.Hooks.Internal.Eval (line 46, column 5 - line 51, column 81): " + [v2.queryFn.constructor.name]);
            });
          }
          ;
          if (v instanceof Action2) {
            return bind5(get3)(function (v1) {
              return discard1(_evalHookM(executeHooksAndEffects(v1.stateRef)(Step3.value))(v.value0))(function () {
                return pure1(v.value1);
              });
            });
          }
          ;
          if (v instanceof Receive) {
            return bind5(get3)(function (v1) {
              var v2 = unsafePerformEffect(read(v1.stateRef));
              return discard1(unless2(inputEq(v2.input)(v.value0))(function () {
                var execute = unsafePerformEffect(function __do2() {
                  modify_(function (v3) {
                    return {
                      input: v.value0,
                      componentRef: v3.componentRef,
                      effectCells: v3.effectCells,
                      evalQueue: v3.evalQueue,
                      memoCells: v3.memoCells,
                      queryFn: v3.queryFn,
                      refCells: v3.refCells,
                      stateCells: v3.stateCells,
                      stateDirty: v3.stateDirty
                    };
                  })(v1.stateRef)();
                  return executeHooksAndEffects(v1.stateRef)(Step3.value);
                });
                return $$void5(execute);
              }()))(function () {
                return pure1(v.value1);
              });
            });
          }
          ;
          if (v instanceof Finalize) {
            return bind5(get3)(function (v1) {
              return bind5(executeHooksAndEffects(v1.stateRef)(Finalize2.value))(function () {
                return pure1(v.value0);
              });
            });
          }
          ;
          throw new Error("Failed pattern match at Halogen.Hooks.Internal.Eval (line 37, column 39 - line 74, column 11): " + [v.constructor.name]);
        };
      };
    };
  };
  var evalHookM = function evalHookM(v) {
    return function (v1) {
      var interpretHalogenHook = function interpretHalogenHook(v2) {
        if (v2 instanceof Modify) {
          return bind13(liftF(new State(function (state3) {
            return new Tuple(state3, state3);
          })))(function (v3) {
            var v4 = unsafePerformEffect(read(v3.stateRef));
            return discard3(function () {
              var v5 = unsafeRefEq(v4.componentRef)(v2.value0.value0);
              if (v5) {
                return pure23(unit);
              }
              ;
              return unsafeThrow("Attempted to use state-modifying `HookM` code outside the component where it was defined.");
            }())(function () {
              var current = unsafeGetCell(v2.value0.value1)(v4.stateCells.queue);
              var next = v2.value1(current);
              return discard3(function () {
                var v5 = unsafeRefEq(current)(next);
                if (v5) {
                  return pure23(unit);
                }
                ;
                var newQueue = unsafeSetCell(v2.value0.value1)(next);
                var runHooks$prime = unsafePerformEffect(function __do2() {
                  modify_(function (s) {
                    return {
                      stateCells: {
                        queue: newQueue(s.stateCells.queue),
                        index: s.stateCells.index
                      },
                      stateDirty: true,
                      componentRef: s.componentRef,
                      effectCells: s.effectCells,
                      evalQueue: s.evalQueue,
                      input: s.input,
                      memoCells: s.memoCells,
                      queryFn: s.queryFn,
                      refCells: s.refCells
                    };
                  })(v3.stateRef)();
                  return v;
                });
                return void1(runHooks$prime);
              }())(function () {
                return pure23(v2.value2(next));
              });
            });
          });
        }
        ;
        if (v2 instanceof Subscribe2) {
          return liftF(new Subscribe(v2.value0, v2.value1));
        }
        ;
        if (v2 instanceof Unsubscribe2) {
          return liftF(new Unsubscribe(v2.value0, v2.value1));
        }
        ;
        if (v2 instanceof Lift3) {
          return liftF(new Lift2(v2.value0));
        }
        ;
        if (v2 instanceof ChildQuery3) {
          return liftF(new ChildQuery2(v2.value0));
        }
        ;
        if (v2 instanceof Raise2) {
          return liftF(new Raise(v2.value0, v2.value1));
        }
        ;
        if (v2 instanceof Par2) {
          return liftF(new Par(retractFreeAp2(hoistFreeAp(function () {
            var $221 = evalHookM(v);
            return function ($222) {
              return HalogenAp(liftFreeAp($221($222)));
            };
          }())(v2.value0))));
        }
        ;
        if (v2 instanceof Fork2) {
          return liftF(new Fork(evalHookM(v)(v2.value0), v2.value1));
        }
        ;
        if (v2 instanceof Kill2) {
          return liftF(new Kill(v2.value0, v2.value1));
        }
        ;
        if (v2 instanceof GetRef2) {
          return liftF(new GetRef(v2.value0, v2.value1));
        }
        ;
        throw new Error("Failed pattern match at Halogen.Hooks.Internal.Eval (line 237, column 26 - line 302, column 31): " + [v2.constructor.name]);
      };
      return substFree(interpretHalogenHook)(v1);
    };
  };
  var evalHook = function evalHook(_evalHookM) {
    return function (_evalHook) {
      return function (reason) {
        return function (stateRef) {
          return function (v) {
            if (v instanceof UseState) {
              if (reason instanceof Initialize2) {
                var identifier = unsafePerformEffect(function __do2() {
                  var v12 = modify(function (s) {
                    return {
                      stateCells: {
                        queue: snoc(s.stateCells.queue)(v.value0),
                        index: s.stateCells.index
                      },
                      componentRef: s.componentRef,
                      effectCells: s.effectCells,
                      evalQueue: s.evalQueue,
                      input: s.input,
                      memoCells: s.memoCells,
                      queryFn: s.queryFn,
                      refCells: s.refCells,
                      stateDirty: s.stateDirty
                    };
                  })(stateRef)();
                  return new Tuple(v12.componentRef, length(v12.stateCells.queue) - 1 | 0);
                });
                return pure23(v.value1(new Tuple(v.value0, identifier)));
              }
              ;
              var v1 = unsafePerformEffect(function __do2() {
                var v2 = read(stateRef)();
                modify_(function (v3) {
                  return {
                    stateCells: {
                      index: stepIndex(v2.stateCells.index)(v2.stateCells.queue),
                      queue: v3.stateCells.queue
                    },
                    componentRef: v3.componentRef,
                    effectCells: v3.effectCells,
                    evalQueue: v3.evalQueue,
                    input: v3.input,
                    memoCells: v3.memoCells,
                    queryFn: v3.queryFn,
                    refCells: v3.refCells,
                    stateDirty: v3.stateDirty
                  };
                })(stateRef)();
                return {
                  value: unsafeGetCell(v2.stateCells.index)(v2.stateCells.queue),
                  identifier: new Tuple(v2.componentRef, v2.stateCells.index)
                };
              });
              return pure23(v.value1(new Tuple(v1.value, v1.identifier)));
            }
            ;
            if (v instanceof UseQuery) {
              var handler$prime = function handler$prime($223) {
                return v.value1(toQueryValue($223));
              };
              return pure23(unsafePerformEffect(function __do2() {
                modify_(function (v12) {
                  return {
                    queryFn: new Just(toQueryFn(handler$prime)),
                    componentRef: v12.componentRef,
                    effectCells: v12.effectCells,
                    evalQueue: v12.evalQueue,
                    input: v12.input,
                    memoCells: v12.memoCells,
                    refCells: v12.refCells,
                    stateCells: v12.stateCells,
                    stateDirty: v12.stateDirty
                  };
                })(stateRef)();
                return v.value2;
              }));
            }
            ;
            if (v instanceof UseEffect) {
              if (reason instanceof Initialize2) {
                return pure23(unsafePerformEffect(function () {
                  var $$eval = function $$eval(index4) {
                    return bind5(_evalHookM(_evalHook(Queued.value))(v.value1))(function (mbFinalizer) {
                      var finalizer = fromMaybe(pure32(unit))(mbFinalizer);
                      var updateQueue = function updateQueue(st) {
                        return unsafeSetCell(index4)(new Tuple(v.value0, finalizer))(st);
                      };
                      return pure1(unsafePerformEffect(modify_(function (s) {
                        return {
                          effectCells: {
                            queue: updateQueue(s.effectCells.queue),
                            index: s.effectCells.index
                          },
                          componentRef: s.componentRef,
                          evalQueue: s.evalQueue,
                          input: s.input,
                          memoCells: s.memoCells,
                          queryFn: s.queryFn,
                          refCells: s.refCells,
                          stateCells: s.stateCells,
                          stateDirty: s.stateDirty
                        };
                      })(stateRef)));
                    });
                  };
                  var initializeState = function initializeState(st) {
                    return {
                      input: st.input,
                      componentRef: st.componentRef,
                      queryFn: st.queryFn,
                      evalQueue: snoc(st.evalQueue)($$eval(length(st.effectCells.queue))),
                      stateCells: st.stateCells,
                      effectCells: {
                        queue: snoc(st.effectCells.queue)(new Tuple(v.value0, pure32(unit))),
                        index: st.effectCells.index
                      },
                      memoCells: st.memoCells,
                      refCells: st.refCells,
                      stateDirty: st.stateDirty
                    };
                  };
                  return function __do2() {
                    modify_(initializeState)(stateRef)();
                    return v.value2;
                  };
                }()));
              }
              ;
              if (reason instanceof Queued) {
                return pure23(v.value2);
              }
              ;
              if (reason instanceof Step3) {
                return pure23(unsafePerformEffect(function __do2() {
                  var v12 = read(stateRef)();
                  var nextIndex = stepIndex(v12.effectCells.index)(v12.effectCells.queue);
                  var v2 = unsafeGetCell(v12.effectCells.index)(v12.effectCells.queue);
                  if (v.value0 instanceof Just && v2.value0 instanceof Just) {
                    var memos$prime = {
                      old: fromMemoValues(v2.value0.value0),
                      "new": fromMemoValues(v.value0.value0)
                    };
                    var $171 = isEmpty(memos$prime["new"].memos) || not1(memos$prime["new"].eq)(memos$prime.old.memos)(memos$prime["new"].memos);
                    if ($171) {
                      var $$eval = bind5(_evalHookM(_evalHook(Queued.value))(applySecond2(v2.value1)(v.value1)))(function (mbFinalizer) {
                        var v3 = unsafePerformEffect(read(stateRef));
                        var newFinalizer = fromMaybe(pure32(unit))(mbFinalizer);
                        var newValue = new Tuple(v.value0, newFinalizer);
                        var newQueue = unsafeSetCell(v12.effectCells.index)(newValue)(v3.effectCells.queue);
                        return pure1(unsafePerformEffect(modify_(function (v4) {
                          return {
                            effectCells: {
                              queue: newQueue,
                              index: v4.effectCells.index
                            },
                            componentRef: v4.componentRef,
                            evalQueue: v4.evalQueue,
                            input: v4.input,
                            memoCells: v4.memoCells,
                            queryFn: v4.queryFn,
                            refCells: v4.refCells,
                            stateCells: v4.stateCells,
                            stateDirty: v4.stateDirty
                          };
                        })(stateRef)));
                      });
                      modify_(function (s) {
                        return {
                          evalQueue: snoc(s.evalQueue)($$eval),
                          effectCells: {
                            index: nextIndex,
                            queue: s.effectCells.queue
                          },
                          componentRef: s.componentRef,
                          input: s.input,
                          memoCells: s.memoCells,
                          queryFn: s.queryFn,
                          refCells: s.refCells,
                          stateCells: s.stateCells,
                          stateDirty: s.stateDirty
                        };
                      })(stateRef)();
                      return v.value2;
                    }
                    ;
                    modify_(function (v3) {
                      return {
                        effectCells: {
                          index: nextIndex,
                          queue: v3.effectCells.queue
                        },
                        componentRef: v3.componentRef,
                        evalQueue: v3.evalQueue,
                        input: v3.input,
                        memoCells: v3.memoCells,
                        queryFn: v3.queryFn,
                        refCells: v3.refCells,
                        stateCells: v3.stateCells,
                        stateDirty: v3.stateDirty
                      };
                    })(stateRef)();
                    return v.value2;
                  }
                  ;
                  modify_(function (v3) {
                    return {
                      effectCells: {
                        index: nextIndex,
                        queue: v3.effectCells.queue
                      },
                      componentRef: v3.componentRef,
                      evalQueue: v3.evalQueue,
                      input: v3.input,
                      memoCells: v3.memoCells,
                      queryFn: v3.queryFn,
                      refCells: v3.refCells,
                      stateCells: v3.stateCells,
                      stateDirty: v3.stateDirty
                    };
                  })(stateRef)();
                  return v.value2;
                }));
              }
              ;
              if (reason instanceof Finalize2) {
                return pure23(unsafePerformEffect(function __do2() {
                  var v12 = read(stateRef)();
                  var v2 = unsafeGetCell(v12.effectCells.index)(v12.effectCells.queue);
                  var finalizeHook = _evalHookM(_evalHook(Queued.value))(v2.value1);
                  modify_(function (s) {
                    return {
                      evalQueue: snoc(s.evalQueue)(finalizeHook),
                      effectCells: {
                        index: stepIndex(v12.effectCells.index)(v12.effectCells.queue),
                        queue: s.effectCells.queue
                      },
                      componentRef: s.componentRef,
                      input: s.input,
                      memoCells: s.memoCells,
                      queryFn: s.queryFn,
                      refCells: s.refCells,
                      stateCells: s.stateCells,
                      stateDirty: s.stateDirty
                    };
                  })(stateRef)();
                  return v.value2;
                }));
              }
              ;
              throw new Error("Failed pattern match at Halogen.Hooks.Internal.Eval (line 131, column 5 - line 190, column 15): " + [reason.constructor.name]);
            }
            ;
            if (v instanceof UseMemo) {
              if (reason instanceof Initialize2) {
                return pure23(unsafePerformEffect(function __do2() {
                  var v12 = read(stateRef)();
                  var newValue = v.value1(unit);
                  modify_(function (v2) {
                    return {
                      memoCells: {
                        queue: snoc(v12.memoCells.queue)(new Tuple(v.value0, newValue)),
                        index: v2.memoCells.index
                      },
                      componentRef: v2.componentRef,
                      effectCells: v2.effectCells,
                      evalQueue: v2.evalQueue,
                      input: v2.input,
                      queryFn: v2.queryFn,
                      refCells: v2.refCells,
                      stateCells: v2.stateCells,
                      stateDirty: v2.stateDirty
                    };
                  })(stateRef)();
                  return v.value2(newValue);
                }));
              }
              ;
              return pure23(unsafePerformEffect(function __do2() {
                var v12 = read(stateRef)();
                var v2 = bimap3(fromMemoValues)(fromMemoValue)(unsafeGetCell(v12.memoCells.index)(v12.memoCells.queue));
                var newMemos = fromMemoValues(v.value0);
                var m = {
                  eq: newMemos.eq,
                  old: v2.value0.memos,
                  "new": newMemos.memos,
                  value: v2.value1
                };
                var nextIndex = stepIndex(v12.memoCells.index)(v12.memoCells.queue);
                var $198 = isEmpty(m["new"]) || !m.eq(m["new"])(m.old);
                if ($198) {
                  var newValue = v.value1(unit);
                  var newQueue = unsafeSetCell(v12.memoCells.index)(new Tuple(v.value0, newValue))(v12.memoCells.queue);
                  modify_(function (v3) {
                    return {
                      memoCells: {
                        index: nextIndex,
                        queue: newQueue
                      },
                      componentRef: v3.componentRef,
                      effectCells: v3.effectCells,
                      evalQueue: v3.evalQueue,
                      input: v3.input,
                      queryFn: v3.queryFn,
                      refCells: v3.refCells,
                      stateCells: v3.stateCells,
                      stateDirty: v3.stateDirty
                    };
                  })(stateRef)();
                  return v.value2(newValue);
                }
                ;
                modify_(function (v3) {
                  return {
                    memoCells: {
                      index: nextIndex,
                      queue: v3.memoCells.queue
                    },
                    componentRef: v3.componentRef,
                    effectCells: v3.effectCells,
                    evalQueue: v3.evalQueue,
                    input: v3.input,
                    queryFn: v3.queryFn,
                    refCells: v3.refCells,
                    stateCells: v3.stateCells,
                    stateDirty: v3.stateDirty
                  };
                })(stateRef)();
                return v.value2(m.value);
              }));
            }
            ;
            if (v instanceof UseRef) {
              if (reason instanceof Initialize2) {
                return pure23(unsafePerformEffect(function __do2() {
                  var v12 = read(stateRef)();
                  var ref2 = $$new(v.value0)();
                  modify_(function (v2) {
                    return {
                      refCells: {
                        queue: snoc(v12.refCells.queue)(ref2),
                        index: v2.refCells.index
                      },
                      componentRef: v2.componentRef,
                      effectCells: v2.effectCells,
                      evalQueue: v2.evalQueue,
                      input: v2.input,
                      memoCells: v2.memoCells,
                      queryFn: v2.queryFn,
                      stateCells: v2.stateCells,
                      stateDirty: v2.stateDirty
                    };
                  })(stateRef)();
                  return v.value1(new Tuple(v.value0, ref2));
                }));
              }
              ;
              return pure23(unsafePerformEffect(function __do2() {
                var v12 = read(stateRef)();
                var ref2 = unsafeGetCell(v12.refCells.index)(v12.refCells.queue);
                var value12 = read(ref2)();
                modify_(function (v2) {
                  return {
                    refCells: {
                      index: stepIndex(v12.refCells.index)(v12.refCells.queue),
                      queue: v2.refCells.queue
                    },
                    componentRef: v2.componentRef,
                    effectCells: v2.effectCells,
                    evalQueue: v2.evalQueue,
                    input: v2.input,
                    memoCells: v2.memoCells,
                    queryFn: v2.queryFn,
                    stateCells: v2.stateCells,
                    stateDirty: v2.stateDirty
                  };
                })(stateRef)();
                return v.value1(new Tuple(value12, ref2));
              }));
            }
            ;
            throw new Error("Failed pattern match at Halogen.Hooks.Internal.Eval (line 103, column 49 - line 230, column 39): " + [v.constructor.name]);
          };
        };
      };
    };
  };

  // output/Halogen.Hooks.Component/index.js
  var bind6 = /* @__PURE__ */bind(bindHalogenM);
  var get4 = /* @__PURE__ */get(monadStateHalogenM);
  var discard4 = /* @__PURE__ */discard(discardUnit)(bindHalogenM);
  var modify_4 = /* @__PURE__ */modify_2(monadStateHalogenM);
  var over2 = /* @__PURE__ */over()();
  var pure5 = /* @__PURE__ */pure(applicativeHalogenM);
  var memoComponent = function memoComponent(eqInput) {
    return function (inputHookFn) {
      var initialState = function initialState(input3) {
        return {
          result: text(""),
          stateRef: unsafePerformEffect($$new({
            input: input3,
            componentRef: {},
            queryFn: Nothing.value,
            stateCells: {
              queue: [],
              index: 0
            },
            effectCells: {
              queue: [],
              index: 0
            },
            memoCells: {
              queue: [],
              index: 0
            },
            refCells: {
              queue: [],
              index: 0
            },
            evalQueue: [],
            stateDirty: false
          }))
        };
      };
      var slotToken = {};
      var queryToken = {};
      var outputToken = {};
      var hookFn = inputHookFn({
        queryToken: queryToken,
        slotToken: slotToken,
        outputToken: outputToken
      });
      var evalHook2 = function evalHook2(reason) {
        return bind6(get4)(function (v) {
          var $$eval = evalHook(evalHookM)(evalHook2)(reason)(v.stateRef);
          var v1 = unsafePerformEffect(read(v.stateRef));
          var hookF = unsafeFromHook(hookFn(v1.input));
          return bind6(substFree($$eval)(hookF))(function (a2) {
            return discard4(modify_4(over2(HookState)(function (v2) {
              return {
                result: a2,
                stateRef: v2.stateRef
              };
            })))(function () {
              return pure5(a2);
            });
          });
        });
      };
      return mkComponent({
        initialState: initialState,
        render: function render(v) {
          return v.result;
        },
        "eval": function () {
          var $21 = toHalogenM(slotToken)(outputToken);
          var $22 = mkEval(eqInput)(evalHookM)(evalHook2);
          return function ($23) {
            return $21($22($23));
          };
        }()
      });
    };
  };
  var component = /* @__PURE__ */memoComponent(function (v) {
    return function (v1) {
      return false;
    };
  });

  // output/Halogen.Hooks/index.js
  var useState = function useState(initialState) {
    var $$interface = function $$interface(v) {
      return new Tuple(fromStateValue(v.value0), v.value1);
    };
    var initialState$prime = toStateValue(initialState);
    return unsafeToHook(new UseState(initialState$prime, $$interface));
  };

  // output/Components.Square/index.js
  var compare2 = /* @__PURE__ */compare(ordInt);
  var elem4 = /* @__PURE__ */elem3(eqInt);
  var genericShowConstructor2 = /* @__PURE__ */genericShowConstructor(genericShowArgsNoArguments);
  var genericEqConstructor2 = /* @__PURE__ */genericEqConstructor(genericEqNoArguments);
  var when3 = /* @__PURE__ */when(applicativeHookM);
  var not2 = /* @__PURE__ */not( /* @__PURE__ */heytingAlgebraFunction(heytingAlgebraBoolean));
  var bind7 = /* @__PURE__ */bind(bindHookM);
  var X = /* @__PURE__ */function () {
    function X2() {}
    ;
    X2.value = new X2();
    return X2;
  }();
  var O = /* @__PURE__ */function () {
    function O2() {}
    ;
    O2.value = new O2();
    return O2;
  }();
  var IsClicked = /* @__PURE__ */function () {
    function IsClicked2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    IsClicked2.create = function (value0) {
      return function (value1) {
        return new IsClicked2(value0, value1);
      };
    };
    return IsClicked2;
  }();
  var IsReturned = /* @__PURE__ */function () {
    function IsReturned2(value0) {
      this.value0 = value0;
    }
    ;
    IsReturned2.create = function (value0) {
      return new IsReturned2(value0);
    };
    return IsReturned2;
  }();
  var eqPosition = {
    eq: function eq(v) {
      return function (v1) {
        return v.row === v1.row && v.col === v1.col;
      };
    }
  };
  var ordPosition = {
    compare: function compare(v) {
      return function (v1) {
        var v2 = compare2(v.row)(v1.row);
        if (v2 instanceof EQ) {
          return compare2(v.col)(v1.col);
        }
        ;
        if (v2 instanceof LT) {
          return LT.value;
        }
        ;
        if (v2 instanceof GT) {
          return GT.value;
        }
        ;
        throw new Error("Failed pattern match at Components.Square (line 64, column 7 - line 67, column 19): " + [v2.constructor.name]);
      };
    },
    Eq0: function Eq0() {
      return eqPosition;
    }
  };
  var sizeArray = /* @__PURE__ */range3(0)(2);
  var mkPosition = function mkPosition($copy_r) {
    return function ($copy_i) {
      var $tco_var_r = $copy_r;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(r, i2) {
        if (elem4(r)(sizeArray) && elem4(i2)(sizeArray)) {
          $tco_done = true;
          return {
            row: r,
            col: i2
          };
        }
        ;
        if (otherwise) {
          var frsRow = head2(sizeArray);
          var frsCol = head2(sizeArray);
          $tco_var_r = frsRow;
          $copy_i = frsCol;
          return;
        }
        ;
        throw new Error("Failed pattern match at Components.Square (line 94, column 1 - line 94, column 37): " + [r.constructor.name, i2.constructor.name]);
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_r, $copy_i);
      }
      ;
      return $tco_result;
    };
  };
  var genericPlayer = {
    to: function to(x) {
      if (x instanceof Inl) {
        return X.value;
      }
      ;
      if (x instanceof Inr) {
        return O.value;
      }
      ;
      throw new Error("Failed pattern match at Components.Square (line 42, column 1 - line 42, column 50): " + [x.constructor.name]);
    },
    from: function from(x) {
      if (x instanceof X) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof O) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at Components.Square (line 42, column 1 - line 42, column 50): " + [x.constructor.name]);
    }
  };
  var showPlayer = {
    show: /* @__PURE__ */genericShow(genericPlayer)( /* @__PURE__ */genericShowSum( /* @__PURE__ */genericShowConstructor2({
      reflectSymbol: function reflectSymbol() {
        return "X";
      }
    }))( /* @__PURE__ */genericShowConstructor2({
      reflectSymbol: function reflectSymbol() {
        return "O";
      }
    })))
  };
  var show2 = /* @__PURE__ */show(showPlayer);
  var eqPlayer = {
    eq: /* @__PURE__ */genericEq(genericPlayer)( /* @__PURE__ */genericEqSum(genericEqConstructor2)(genericEqConstructor2))
  };
  var emptyStateElem = function emptyStateElem(v) {
    return Nothing.value;
  };
  var mkSquareComponent = function mkSquareComponent(dictMonadEffect) {
    return function (pos) {
      return function (v) {
        var isDisabled = function isDisabled(p2) {
          if (p2 === "") {
            return false;
          }
          ;
          if (otherwise) {
            return true;
          }
          ;
          throw new Error("Failed pattern match at Components.Square (line 126, column 3 - line 128, column 23): " + [p2.constructor.name]);
        };
        return component(function (rec) {
          return function (v1) {
            return bind4(useState(emptyStateElem))(function (v2) {
              var player = maybe("")(show2)(v2.value0(pos));
              return pure4(button([title(player), class_("square"), disabled2(isDisabled(player)), onClick(function (v3) {
                return when3(not2(isDisabled)(player))(bind7(get2(v.value1))(function (gameState) {
                  return bind7(modify5(v2.value1)($$const($$const(new Just(gameState.nextTurn)))))(function (newSt) {
                    return raise2(rec.outputToken)(new IsClicked(pos, newSt));
                  });
                }));
              })])([text(player)]));
            });
          };
        });
      };
    };
  };

  // output/Halogen.HTML/index.js
  var componentSlot2 = /* @__PURE__ */componentSlot();
  var slot = function slot() {
    return function (dictIsSymbol) {
      var componentSlot1 = componentSlot2(dictIsSymbol);
      return function (dictOrd) {
        var componentSlot22 = componentSlot1(dictOrd);
        return function (label5) {
          return function (p2) {
            return function (component2) {
              return function (input3) {
                return function (outputQuery) {
                  return widget(new ComponentSlot(componentSlot22(label5)(p2)(component2)(input3)(function ($11) {
                    return Just.create(outputQuery($11));
                  })));
                };
              };
            };
          };
        };
      };
    };
  };

  // output/Components.Board/index.js
  var when4 = /* @__PURE__ */when(applicativeHookM);
  var eq3 = /* @__PURE__ */eq(eqPosition);
  var pure6 = /* @__PURE__ */pure(applicativeHookM);
  var slot2 = /* @__PURE__ */slot()({
    reflectSymbol: function reflectSymbol() {
      return "square";
    }
  })(ordPosition);
  var map10 = /* @__PURE__ */map(functorNonEmptyArray);
  var nextPlayer = function nextPlayer(v) {
    if (v instanceof X) {
      return O.value;
    }
    ;
    return X.value;
  };
  var updateState = function updateState(se) {
    return function (st) {
      var nextMove = function nextMove(v) {
        return v + 1 | 0;
      };
      return {
        history: cons2(se)(st.history),
        currentMove: nextMove(st.currentMove),
        nextTurn: nextPlayer(st.nextTurn)
      };
    };
  };
  var _square = /* @__PURE__ */function () {
    return $$Proxy.value;
  }();
  var mkBoardComponent = function mkBoardComponent(dictMonadEffect) {
    var mkSquareComponent2 = mkSquareComponent(dictMonadEffect);
    return function (v) {
      return component(function (v1) {
        return function (v2) {
          var handleCell = function handleCell(v3) {
            return function (v4) {
              if (v4 instanceof IsClicked) {
                return when4(eq3(v3)(v4.value0))(modify_3(v.value1)(updateState(v4.value1)));
              }
              ;
              return pure6(unit);
            };
          };
          var handleCellWithPosition = function handleCellWithPosition(row) {
            var $28 = mkPosition(row);
            return function ($29) {
              return handleCell($28($29));
            };
          };
          var mkSquareSlot = function mkSquareSlot(row) {
            return function (colIdx) {
              return slot2(_square)(mkPosition(row)(colIdx))(mkSquareComponent2(mkPosition(row)(colIdx))(v))(unit)(handleCellWithPosition(row)(colIdx));
            };
          };
          var mkRow = function mkRow(idx) {
            return div2([class_("boardRow")])(toArray(map10(mkSquareSlot(idx))(sizeArray)));
          };
          return pure4(div_(toArray(map10(mkRow)(sizeArray))));
        };
      });
    };
  };

  // output/Components.Game/index.js
  var map11 = /* @__PURE__ */map(functorArray);
  var eq4 = /* @__PURE__ */eq( /* @__PURE__ */eqMaybe(eqPlayer));
  var or2 = /* @__PURE__ */or(foldableArray)(heytingAlgebraBoolean);
  var mapFlipped2 = /* @__PURE__ */mapFlipped(functorArray);
  var alt3 = /* @__PURE__ */alt(altMaybe);
  var compose2 = /* @__PURE__ */compose(semigroupoidFn);
  var unfoldr12 = /* @__PURE__ */unfoldr1(unfoldable1NonEmptyArray);
  var pure7 = /* @__PURE__ */pure(applicativeHookM);
  var slot3 = /* @__PURE__ */slot();
  var slot1 = /* @__PURE__ */slot3({
    reflectSymbol: function reflectSymbol() {
      return "history";
    }
  })(ordInt);
  var show3 = /* @__PURE__ */show(showInt);
  var fromFoldable3 = /* @__PURE__ */fromFoldable(foldableNonEmptyArray);
  var show1 = /* @__PURE__ */show(showPlayer);
  var slot22 = /* @__PURE__ */slot3({
    reflectSymbol: function reflectSymbol() {
      return "board";
    }
  })(ordUnit);
  var mkHistoryButton = function mkHistoryButton(dictMonadEffect) {
    return function (txt) {
      return function (ix) {
        return component(function (rec) {
          return function (v) {
            return pure4(button([title(txt), onClick(function (v1) {
              return raise2(rec.outputToken)(new IsReturned(ix));
            })])([text(txt)]));
          };
        });
      };
    };
  };
  var calculateWinner = function calculateWinner(f) {
    var winByPlayer = function winByPlayer(p2) {
      var $37 = function () {
        var $46 = map11(all2(function (v) {
          return eq4(v)(new Just(p2));
        }));
        return function ($47) {
          return or2($46($47));
        };
      }()(concat([mapFlipped2([0, 1, 2])(function (i2) {
        return mapFlipped2([0, 1, 2])(function (j) {
          return f(mkPosition(i2)(j));
        });
      }), mapFlipped2([0, 1, 2])(function (j) {
        return mapFlipped2([0, 1, 2])(function (i2) {
          return f(mkPosition(i2)(j));
        });
      }), [mapFlipped2([0, 1, 2])(function (k) {
        return f(mkPosition(k)(k));
      })], [mapFlipped2([0, 1, 2])(function (k) {
        return f(mkPosition(k)(2 - k | 0));
      })]]));
      if ($37) {
        return new Just(p2);
      }
      ;
      return Nothing.value;
    };
    return alt3(winByPlayer(X.value))(winByPlayer(O.value));
  };
  var mkGameComponent = function mkGameComponent(dictMonadEffect) {
    var mkHistoryButton1 = mkHistoryButton(dictMonadEffect);
    var mkBoardComponent2 = mkBoardComponent(dictMonadEffect);
    var skipTurnsBy = function skipTurnsBy(p2) {
      return function (i2) {
        var go2 = function go2(i$prime) {
          if (i$prime <= 0) {
            return new Tuple(nextPlayer, Nothing.value);
          }
          ;
          if (otherwise) {
            return new Tuple(nextPlayer, new Just(i$prime - 1 | 0));
          }
          ;
          throw new Error("Failed pattern match at Components.Game (line 91, column 5 - line 93, column 53): " + [i$prime.constructor.name]);
        };
        var formPipe = foldr12(compose2)(unfoldr12(go2)(i2));
        return formPipe(p2);
      };
    };
    var initState = {
      history: singleton4(emptyStateElem),
      currentMove: 0,
      nextTurn: X.value
    };
    return component(function (rec) {
      return function (v) {
        return bind4(useState(initState))(function (v1) {
          var handleHistory = function handleHistory(v2) {
            if (v2 instanceof IsReturned) {
              return modify_3(v1.value1)(function (st) {
                return {
                  history: st.history,
                  currentMove: v2.value0,
                  nextTurn: skipTurnsBy(st.nextTurn)(v2.value0)
                };
              });
            }
            ;
            return pure7(unit);
          };
          var moves = function () {
            var setSlot = function setSlot(ix) {
              return slot1($$Proxy.value)(ix)(mkHistoryButton1("Move # " + show3(ix))(ix))(unit)(handleHistory);
            };
            return fromFoldable3(mapWithIndex3(function (ix) {
              return function (v2) {
                return setSlot(ix);
              };
            })(v1.value0.history));
          }();
          var currentMove = head2(v1.value0.history);
          var status = function () {
            var v2 = calculateWinner(currentMove);
            if (v2 instanceof Just) {
              return "Winner is : " + show1(v2.value0);
            }
            ;
            if (v2 instanceof Nothing) {
              return "Next move is: " + show1(v1.value0.nextTurn);
            }
            ;
            throw new Error("Failed pattern match at Components.Game (line 65, column 14 - line 67, column 61): " + [v2.constructor.name]);
          }();
          return pure4(div2([class_("game")])([slot22($$Proxy.value)(unit)(mkBoardComponent2(v1))(unit)(absurd), div2([class_("gameInfo")])([div_([text(status)]), div_(moves)])]));
        });
      };
    });
  };

  // output/Web.HTML/foreign.js
  var windowImpl = function windowImpl() {
    return window;
  };

  // output/Web.HTML.HTMLDocument/foreign.js
  function _readyState(doc) {
    return doc.readyState;
  }

  // output/Web.HTML.HTMLDocument.ReadyState/index.js
  var Loading = /* @__PURE__ */function () {
    function Loading2() {}
    ;
    Loading2.value = new Loading2();
    return Loading2;
  }();
  var Interactive = /* @__PURE__ */function () {
    function Interactive2() {}
    ;
    Interactive2.value = new Interactive2();
    return Interactive2;
  }();
  var Complete = /* @__PURE__ */function () {
    function Complete2() {}
    ;
    Complete2.value = new Complete2();
    return Complete2;
  }();
  var parse = function parse(v) {
    if (v === "loading") {
      return new Just(Loading.value);
    }
    ;
    if (v === "interactive") {
      return new Just(Interactive.value);
    }
    ;
    if (v === "complete") {
      return new Just(Complete.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var map13 = /* @__PURE__ */map(functorEffect);
  var toParentNode = unsafeCoerce2;
  var toDocument = unsafeCoerce2;
  var readyState = function readyState(doc) {
    return map13(function () {
      var $4 = fromMaybe(Loading.value);
      return function ($5) {
        return $4(parse($5));
      };
    }())(function () {
      return _readyState(doc);
    });
  };

  // output/Web.HTML.Window/foreign.js
  function document(window2) {
    return function () {
      return window2.document;
    };
  }

  // output/Web.HTML.Window/index.js
  var toEventTarget = unsafeCoerce2;

  // output/Halogen.Aff.Util/index.js
  var bind8 = /* @__PURE__ */bind(bindAff);
  var liftEffect3 = /* @__PURE__ */liftEffect(monadEffectAff);
  var bindFlipped4 = /* @__PURE__ */bindFlipped(bindEffect);
  var composeKleisliFlipped2 = /* @__PURE__ */composeKleisliFlipped(bindEffect);
  var pure8 = /* @__PURE__ */pure(applicativeAff);
  var bindFlipped1 = /* @__PURE__ */bindFlipped(bindMaybe);
  var pure12 = /* @__PURE__ */pure(applicativeEffect);
  var map14 = /* @__PURE__ */map(functorEffect);
  var discard6 = /* @__PURE__ */discard(discardUnit);
  var throwError2 = /* @__PURE__ */throwError(monadThrowAff);
  var selectElement = function selectElement(query3) {
    return bind8(liftEffect3(bindFlipped4(composeKleisliFlipped2(function () {
      var $16 = querySelector(query3);
      return function ($17) {
        return $16(toParentNode($17));
      };
    }())(document))(windowImpl)))(function (mel) {
      return pure8(bindFlipped1(fromElement)(mel));
    });
  };
  var runHalogenAff = /* @__PURE__ */runAff_( /* @__PURE__ */either(throwException)( /* @__PURE__ */$$const( /* @__PURE__ */pure12(unit))));
  var awaitLoad = /* @__PURE__ */makeAff(function (callback) {
    return function __do2() {
      var rs = bindFlipped4(readyState)(bindFlipped4(document)(windowImpl))();
      if (rs instanceof Loading) {
        var et = map14(toEventTarget)(windowImpl)();
        var listener = eventListener(function (v) {
          return callback(new Right(unit));
        })();
        addEventListener2(domcontentloaded)(listener)(false)(et)();
        return effectCanceler(removeEventListener2(domcontentloaded)(listener)(false)(et));
      }
      ;
      callback(new Right(unit))();
      return nonCanceler;
    };
  });
  var awaitBody = /* @__PURE__ */discard6(bindAff)(awaitLoad)(function () {
    return bind8(selectElement("body"))(function (body2) {
      return maybe(throwError2(error("Could not find body")))(pure8)(body2);
    });
  });

  // output/Control.Monad.Fork.Class/index.js
  var monadForkAff = {
    suspend: suspendAff,
    fork: forkAff,
    join: joinFiber,
    Monad0: function Monad0() {
      return monadAff;
    },
    Functor1: function Functor1() {
      return functorFiber;
    }
  };
  var fork3 = function fork3(dict) {
    return dict.fork;
  };

  // output/Effect.Console/foreign.js
  var warn = function warn(s) {
    return function () {
      console.warn(s);
    };
  };

  // output/Halogen.Aff.Driver.State/index.js
  var unRenderStateX = unsafeCoerce2;
  var unDriverStateX = unsafeCoerce2;
  var renderStateX_ = function renderStateX_(dictApplicative) {
    var traverse_6 = traverse_(dictApplicative)(foldableMaybe);
    return function (f) {
      return unDriverStateX(function (st) {
        return traverse_6(f)(st.rendering);
      });
    };
  };
  var mkRenderStateX = unsafeCoerce2;
  var renderStateX = function renderStateX(dictFunctor) {
    return function (f) {
      return unDriverStateX(function (st) {
        return mkRenderStateX(f(st.rendering));
      });
    };
  };
  var mkDriverStateXRef = unsafeCoerce2;
  var mapDriverState = function mapDriverState(f) {
    return function (v) {
      return f(v);
    };
  };
  var initDriverState = function initDriverState(component2) {
    return function (input3) {
      return function (handler3) {
        return function (lchs) {
          return function __do2() {
            var selfRef = $$new({})();
            var childrenIn = $$new(empty6)();
            var childrenOut = $$new(empty6)();
            var handlerRef = $$new(handler3)();
            var pendingQueries = $$new(new Just(Nil.value))();
            var pendingOuts = $$new(new Just(Nil.value))();
            var pendingHandlers = $$new(Nothing.value)();
            var fresh2 = $$new(1)();
            var subscriptions = $$new(new Just(empty5))();
            var forks = $$new(empty5)();
            var ds = {
              component: component2,
              state: component2.initialState(input3),
              refs: empty5,
              children: empty6,
              childrenIn: childrenIn,
              childrenOut: childrenOut,
              selfRef: selfRef,
              handlerRef: handlerRef,
              pendingQueries: pendingQueries,
              pendingOuts: pendingOuts,
              pendingHandlers: pendingHandlers,
              rendering: Nothing.value,
              fresh: fresh2,
              subscriptions: subscriptions,
              forks: forks,
              lifecycleHandlers: lchs
            };
            write(ds)(selfRef)();
            return mkDriverStateXRef(selfRef);
          };
        };
      };
    };
  };

  // output/Halogen.Aff.Driver.Eval/index.js
  var traverse_3 = /* @__PURE__ */traverse_(applicativeEffect)(foldableMaybe);
  var bindFlipped5 = /* @__PURE__ */bindFlipped(bindMaybe);
  var lookup5 = /* @__PURE__ */lookup2(ordSubscriptionId);
  var bind14 = /* @__PURE__ */bind(bindAff);
  var liftEffect4 = /* @__PURE__ */liftEffect(monadEffectAff);
  var discard7 = /* @__PURE__ */discard(discardUnit);
  var discard12 = /* @__PURE__ */discard7(bindAff);
  var traverse_12 = /* @__PURE__ */traverse_(applicativeAff);
  var traverse_22 = /* @__PURE__ */traverse_12(foldableList);
  var fork4 = /* @__PURE__ */fork3(monadForkAff);
  var parSequence_2 = /* @__PURE__ */parSequence_(parallelAff)(foldableList);
  var pure9 = /* @__PURE__ */pure(applicativeAff);
  var map15 = /* @__PURE__ */map(functorCoyoneda);
  var parallel2 = /* @__PURE__ */parallel(parallelAff);
  var map16 = /* @__PURE__ */map(functorAff);
  var sequential2 = /* @__PURE__ */sequential(parallelAff);
  var map23 = /* @__PURE__ */map(functorMaybe);
  var insert5 = /* @__PURE__ */insert2(ordSubscriptionId);
  var retractFreeAp3 = /* @__PURE__ */retractFreeAp(applicativeParAff);
  var $$delete3 = /* @__PURE__ */$$delete2(ordForkId);
  var unlessM2 = /* @__PURE__ */unlessM(monadEffect);
  var insert12 = /* @__PURE__ */insert2(ordForkId);
  var traverse_32 = /* @__PURE__ */traverse_12(foldableMaybe);
  var lookup12 = /* @__PURE__ */lookup2(ordForkId);
  var lookup22 = /* @__PURE__ */lookup2(ordString);
  var foldFree2 = /* @__PURE__ */foldFree(monadRecAff);
  var alter2 = /* @__PURE__ */alter(ordString);
  var unsubscribe4 = function unsubscribe4(sid) {
    return function (ref2) {
      return function __do2() {
        var v = read(ref2)();
        var subs = read(v.subscriptions)();
        return traverse_3(unsubscribe)(bindFlipped5(lookup5(sid))(subs))();
      };
    };
  };
  var queueOrRun = function queueOrRun(ref2) {
    return function (au) {
      return bind14(liftEffect4(read(ref2)))(function (v) {
        if (v instanceof Nothing) {
          return au;
        }
        ;
        if (v instanceof Just) {
          return liftEffect4(write(new Just(new Cons(au, v.value0)))(ref2));
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 188, column 33 - line 190, column 57): " + [v.constructor.name]);
      });
    };
  };
  var handleLifecycle = function handleLifecycle(lchs) {
    return function (f) {
      return discard12(liftEffect4(write({
        initializers: Nil.value,
        finalizers: Nil.value
      })(lchs)))(function () {
        return bind14(liftEffect4(f))(function (result) {
          return bind14(liftEffect4(read(lchs)))(function (v) {
            return discard12(traverse_22(fork4)(v.finalizers))(function () {
              return discard12(parSequence_2(v.initializers))(function () {
                return pure9(result);
              });
            });
          });
        });
      });
    };
  };
  var handleAff = /* @__PURE__ */runAff_( /* @__PURE__ */either(throwException)( /* @__PURE__ */$$const( /* @__PURE__ */pure(applicativeEffect)(unit))));
  var fresh = function fresh(f) {
    return function (ref2) {
      return bind14(liftEffect4(read(ref2)))(function (v) {
        return liftEffect4(modify$prime(function (i2) {
          return {
            state: i2 + 1 | 0,
            value: f(i2)
          };
        })(v.fresh));
      });
    };
  };
  var evalQ = function evalQ(render) {
    return function (ref2) {
      return function (q2) {
        return bind14(liftEffect4(read(ref2)))(function (v) {
          return evalM(render)(ref2)(v["component"]["eval"](new Query(map15(Just.create)(liftCoyoneda(q2)), $$const(Nothing.value))));
        });
      };
    };
  };
  var evalM = function evalM(render) {
    return function (initRef) {
      return function (v) {
        var evalChildQuery = function evalChildQuery(ref2) {
          return function (cqb) {
            return bind14(liftEffect4(read(ref2)))(function (v1) {
              return unChildQueryBox(function (v2) {
                var evalChild = function evalChild(v3) {
                  return parallel2(bind14(liftEffect4(read(v3)))(function (dsx) {
                    return unDriverStateX(function (ds) {
                      return evalQ(render)(ds.selfRef)(v2.value1);
                    })(dsx);
                  }));
                };
                return map16(v2.value2)(sequential2(v2.value0(applicativeParAff)(evalChild)(v1.children)));
              })(cqb);
            });
          };
        };
        var go2 = function go2(ref2) {
          return function (v1) {
            if (v1 instanceof State) {
              return bind14(liftEffect4(read(ref2)))(function (v2) {
                var v3 = v1.value0(v2.state);
                if (unsafeRefEq(v2.state)(v3.value1)) {
                  return pure9(v3.value0);
                }
                ;
                if (otherwise) {
                  return discard12(liftEffect4(write({
                    component: v2.component,
                    state: v3.value1,
                    refs: v2.refs,
                    children: v2.children,
                    childrenIn: v2.childrenIn,
                    childrenOut: v2.childrenOut,
                    selfRef: v2.selfRef,
                    handlerRef: v2.handlerRef,
                    pendingQueries: v2.pendingQueries,
                    pendingOuts: v2.pendingOuts,
                    pendingHandlers: v2.pendingHandlers,
                    rendering: v2.rendering,
                    fresh: v2.fresh,
                    subscriptions: v2.subscriptions,
                    forks: v2.forks,
                    lifecycleHandlers: v2.lifecycleHandlers
                  })(ref2)))(function () {
                    return discard12(handleLifecycle(v2.lifecycleHandlers)(render(v2.lifecycleHandlers)(ref2)))(function () {
                      return pure9(v3.value0);
                    });
                  });
                }
                ;
                throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [v3.constructor.name]);
              });
            }
            ;
            if (v1 instanceof Subscribe) {
              return bind14(fresh(SubscriptionId)(ref2))(function (sid) {
                return bind14(liftEffect4(subscribe(v1.value0(sid))(function (act) {
                  return handleAff(evalF(render)(ref2)(new Action(act)));
                })))(function (finalize) {
                  return bind14(liftEffect4(read(ref2)))(function (v2) {
                    return discard12(liftEffect4(modify_(map23(insert5(sid)(finalize)))(v2.subscriptions)))(function () {
                      return pure9(v1.value1(sid));
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Unsubscribe) {
              return discard12(liftEffect4(unsubscribe4(v1.value0)(ref2)))(function () {
                return pure9(v1.value1);
              });
            }
            ;
            if (v1 instanceof Lift2) {
              return v1.value0;
            }
            ;
            if (v1 instanceof ChildQuery2) {
              return evalChildQuery(ref2)(v1.value0);
            }
            ;
            if (v1 instanceof Raise) {
              return bind14(liftEffect4(read(ref2)))(function (v2) {
                return bind14(liftEffect4(read(v2.handlerRef)))(function (handler3) {
                  return discard12(queueOrRun(v2.pendingOuts)(handler3(v1.value0)))(function () {
                    return pure9(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof Par) {
              return sequential2(retractFreeAp3(hoistFreeAp(function () {
                var $118 = evalM(render)(ref2);
                return function ($119) {
                  return parallel2($118($119));
                };
              }())(v1.value0)));
            }
            ;
            if (v1 instanceof Fork) {
              return bind14(fresh(ForkId)(ref2))(function (fid) {
                return bind14(liftEffect4(read(ref2)))(function (v2) {
                  return bind14(liftEffect4($$new(false)))(function (doneRef) {
                    return bind14(fork4($$finally(liftEffect4(function __do2() {
                      modify_($$delete3(fid))(v2.forks)();
                      return write(true)(doneRef)();
                    }))(evalM(render)(ref2)(v1.value0))))(function (fiber) {
                      return discard12(liftEffect4(unlessM2(read(doneRef))(modify_(insert12(fid)(fiber))(v2.forks))))(function () {
                        return pure9(v1.value1(fid));
                      });
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Join) {
              return bind14(liftEffect4(read(ref2)))(function (v2) {
                return bind14(liftEffect4(read(v2.forks)))(function (forkMap) {
                  return discard12(traverse_32(joinFiber)(lookup12(v1.value0)(forkMap)))(function () {
                    return pure9(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof Kill) {
              return bind14(liftEffect4(read(ref2)))(function (v2) {
                return bind14(liftEffect4(read(v2.forks)))(function (forkMap) {
                  return discard12(traverse_32(killFiber(error("Cancelled")))(lookup12(v1.value0)(forkMap)))(function () {
                    return pure9(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof GetRef) {
              return bind14(liftEffect4(read(ref2)))(function (v2) {
                return pure9(v1.value1(lookup22(v1.value0)(v2.refs)));
              });
            }
            ;
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 139, column 33): " + [v1.constructor.name]);
          };
        };
        return foldFree2(go2(initRef))(v);
      };
    };
  };
  var evalF = function evalF(render) {
    return function (ref2) {
      return function (v) {
        if (v instanceof RefUpdate) {
          return liftEffect4(flip(modify_)(ref2)(mapDriverState(function (st) {
            return {
              component: st.component,
              state: st.state,
              refs: alter2($$const(v.value1))(v.value0)(st.refs),
              children: st.children,
              childrenIn: st.childrenIn,
              childrenOut: st.childrenOut,
              selfRef: st.selfRef,
              handlerRef: st.handlerRef,
              pendingQueries: st.pendingQueries,
              pendingOuts: st.pendingOuts,
              pendingHandlers: st.pendingHandlers,
              rendering: st.rendering,
              fresh: st.fresh,
              subscriptions: st.subscriptions,
              forks: st.forks,
              lifecycleHandlers: st.lifecycleHandlers
            };
          })));
        }
        ;
        if (v instanceof Action) {
          return bind14(liftEffect4(read(ref2)))(function (v1) {
            return evalM(render)(ref2)(v1["component"]["eval"](new Action2(v.value0, unit)));
          });
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [v.constructor.name]);
      };
    };
  };

  // output/Halogen.Aff.Driver/index.js
  var bind9 = /* @__PURE__ */bind(bindEffect);
  var discard8 = /* @__PURE__ */discard(discardUnit);
  var for_2 = /* @__PURE__ */for_(applicativeEffect)(foldableMaybe);
  var traverse_4 = /* @__PURE__ */traverse_(applicativeAff)(foldableList);
  var fork5 = /* @__PURE__ */fork3(monadForkAff);
  var bindFlipped6 = /* @__PURE__ */bindFlipped(bindEffect);
  var traverse_13 = /* @__PURE__ */traverse_(applicativeEffect);
  var traverse_23 = /* @__PURE__ */traverse_13(foldableMaybe);
  var traverse_33 = /* @__PURE__ */traverse_13(foldableMap);
  var discard22 = /* @__PURE__ */discard8(bindAff);
  var parSequence_3 = /* @__PURE__ */parSequence_(parallelAff)(foldableList);
  var liftEffect5 = /* @__PURE__ */liftEffect(monadEffectAff);
  var pure10 = /* @__PURE__ */pure(applicativeEffect);
  var map17 = /* @__PURE__ */map(functorEffect);
  var pure13 = /* @__PURE__ */pure(applicativeAff);
  var when5 = /* @__PURE__ */when(applicativeEffect);
  var renderStateX2 = /* @__PURE__ */renderStateX(functorEffect);
  var $$void6 = /* @__PURE__ */$$void(functorAff);
  var foreachSlot2 = /* @__PURE__ */foreachSlot(applicativeEffect);
  var renderStateX_2 = /* @__PURE__ */renderStateX_(applicativeEffect);
  var tailRecM3 = /* @__PURE__ */tailRecM(monadRecEffect);
  var voidLeft2 = /* @__PURE__ */voidLeft(functorEffect);
  var bind15 = /* @__PURE__ */bind(bindAff);
  var liftEffect1 = /* @__PURE__ */liftEffect(monadEffectEffect);
  var newLifecycleHandlers = /* @__PURE__ */function () {
    return $$new({
      initializers: Nil.value,
      finalizers: Nil.value
    });
  }();
  var handlePending = function handlePending(ref2) {
    return function __do2() {
      var queue = read(ref2)();
      write(Nothing.value)(ref2)();
      return for_2(queue)(function () {
        var $58 = traverse_4(fork5);
        return function ($59) {
          return handleAff($58(reverse2($59)));
        };
      }())();
    };
  };
  var cleanupSubscriptionsAndForks = function cleanupSubscriptionsAndForks(v) {
    return function __do2() {
      bindFlipped6(traverse_23(traverse_33(unsubscribe)))(read(v.subscriptions))();
      write(Nothing.value)(v.subscriptions)();
      bindFlipped6(traverse_33(function () {
        var $60 = killFiber(error("finalized"));
        return function ($61) {
          return handleAff($60($61));
        };
      }()))(read(v.forks))();
      return write(empty5)(v.forks)();
    };
  };
  var runUI = function runUI(renderSpec2) {
    return function (component2) {
      return function (i2) {
        var squashChildInitializers = function squashChildInitializers(lchs) {
          return function (preInits) {
            return unDriverStateX(function (st) {
              var parentInitializer = evalM(render)(st.selfRef)(st["component"]["eval"](new Initialize(unit)));
              return modify_(function (handlers) {
                return {
                  initializers: new Cons(discard22(parSequence_3(reverse2(handlers.initializers)))(function () {
                    return discard22(parentInitializer)(function () {
                      return liftEffect5(function __do2() {
                        handlePending(st.pendingQueries)();
                        return handlePending(st.pendingOuts)();
                      });
                    });
                  }), preInits),
                  finalizers: handlers.finalizers
                };
              })(lchs);
            });
          };
        };
        var runComponent = function runComponent(lchs) {
          return function (handler3) {
            return function (j) {
              return unComponent(function (c) {
                return function __do2() {
                  var lchs$prime = newLifecycleHandlers();
                  var $$var2 = initDriverState(c)(j)(handler3)(lchs$prime)();
                  var pre2 = read(lchs)();
                  write({
                    initializers: Nil.value,
                    finalizers: pre2.finalizers
                  })(lchs)();
                  bindFlipped6(unDriverStateX(function () {
                    var $62 = render(lchs);
                    return function ($63) {
                      return $62(function (v) {
                        return v.selfRef;
                      }($63));
                    };
                  }()))(read($$var2))();
                  bindFlipped6(squashChildInitializers(lchs)(pre2.initializers))(read($$var2))();
                  return $$var2;
                };
              });
            };
          };
        };
        var renderChild = function renderChild(lchs) {
          return function (handler3) {
            return function (childrenInRef) {
              return function (childrenOutRef) {
                return unComponentSlot(function (slot4) {
                  return function __do2() {
                    var childrenIn = map17(slot4.pop)(read(childrenInRef))();
                    var $$var2 = function () {
                      if (childrenIn instanceof Just) {
                        write(childrenIn.value0.value1)(childrenInRef)();
                        var dsx = read(childrenIn.value0.value0)();
                        unDriverStateX(function (st) {
                          return function __do3() {
                            flip(write)(st.handlerRef)(function () {
                              var $64 = maybe(pure13(unit))(handler3);
                              return function ($65) {
                                return $64(slot4.output($65));
                              };
                            }())();
                            return handleAff(evalM(render)(st.selfRef)(st["component"]["eval"](new Receive(slot4.input, unit))))();
                          };
                        })(dsx)();
                        return childrenIn.value0.value0;
                      }
                      ;
                      if (childrenIn instanceof Nothing) {
                        return runComponent(lchs)(function () {
                          var $66 = maybe(pure13(unit))(handler3);
                          return function ($67) {
                            return $66(slot4.output($67));
                          };
                        }())(slot4.input)(slot4.component)();
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 213, column 14 - line 222, column 98): " + [childrenIn.constructor.name]);
                    }();
                    var isDuplicate = map17(function ($68) {
                      return isJust(slot4.get($68));
                    })(read(childrenOutRef))();
                    when5(isDuplicate)(warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                    modify_(slot4.set($$var2))(childrenOutRef)();
                    return bind9(read($$var2))(renderStateX2(function (v) {
                      if (v instanceof Nothing) {
                        return $$throw("Halogen internal error: child was not initialized in renderChild");
                      }
                      ;
                      if (v instanceof Just) {
                        return pure10(renderSpec2.renderChild(v.value0));
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 227, column 37 - line 229, column 50): " + [v.constructor.name]);
                    }))();
                  };
                });
              };
            };
          };
        };
        var render = function render(lchs) {
          return function ($$var2) {
            return function __do2() {
              var v = read($$var2)();
              var shouldProcessHandlers = map17(isNothing)(read(v.pendingHandlers))();
              when5(shouldProcessHandlers)(write(new Just(Nil.value))(v.pendingHandlers))();
              write(empty6)(v.childrenOut)();
              write(v.children)(v.childrenIn)();
              var handler3 = function () {
                var $69 = queueOrRun(v.pendingHandlers);
                var $70 = evalF(render)(v.selfRef);
                return function ($71) {
                  return $69($$void6($70($71)));
                };
              }();
              var childHandler = function () {
                var $72 = queueOrRun(v.pendingQueries);
                return function ($73) {
                  return $72(handler3(Action.create($73)));
                };
              }();
              var rendering = renderSpec2.render(function ($74) {
                return handleAff(handler3($74));
              })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
              var children2 = read(v.childrenOut)();
              var childrenIn = read(v.childrenIn)();
              foreachSlot2(childrenIn)(function (v1) {
                return function __do3() {
                  var childDS = read(v1)();
                  renderStateX_2(renderSpec2.removeChild)(childDS)();
                  return finalize(lchs)(childDS)();
                };
              })();
              flip(modify_)(v.selfRef)(mapDriverState(function (ds$prime) {
                return {
                  component: ds$prime.component,
                  state: ds$prime.state,
                  refs: ds$prime.refs,
                  children: children2,
                  childrenIn: ds$prime.childrenIn,
                  childrenOut: ds$prime.childrenOut,
                  selfRef: ds$prime.selfRef,
                  handlerRef: ds$prime.handlerRef,
                  pendingQueries: ds$prime.pendingQueries,
                  pendingOuts: ds$prime.pendingOuts,
                  pendingHandlers: ds$prime.pendingHandlers,
                  rendering: new Just(rendering),
                  fresh: ds$prime.fresh,
                  subscriptions: ds$prime.subscriptions,
                  forks: ds$prime.forks,
                  lifecycleHandlers: ds$prime.lifecycleHandlers
                };
              }))();
              return when5(shouldProcessHandlers)(flip(tailRecM3)(unit)(function (v1) {
                return function __do3() {
                  var handlers = read(v.pendingHandlers)();
                  write(new Just(Nil.value))(v.pendingHandlers)();
                  traverse_23(function () {
                    var $75 = traverse_4(fork5);
                    return function ($76) {
                      return handleAff($75(reverse2($76)));
                    };
                  }())(handlers)();
                  var mmore = read(v.pendingHandlers)();
                  var $51 = maybe(false)($$null2)(mmore);
                  if ($51) {
                    return voidLeft2(write(Nothing.value)(v.pendingHandlers))(new Done(unit))();
                  }
                  ;
                  return new Loop(unit);
                };
              }))();
            };
          };
        };
        var finalize = function finalize(lchs) {
          return unDriverStateX(function (st) {
            return function __do2() {
              cleanupSubscriptionsAndForks(st)();
              var f = evalM(render)(st.selfRef)(st["component"]["eval"](new Finalize(unit)));
              modify_(function (handlers) {
                return {
                  initializers: handlers.initializers,
                  finalizers: new Cons(f, handlers.finalizers)
                };
              })(lchs)();
              return foreachSlot2(st.children)(function (v) {
                return function __do3() {
                  var dsx = read(v)();
                  return finalize(lchs)(dsx)();
                };
              })();
            };
          });
        };
        var evalDriver = function evalDriver(disposed) {
          return function (ref2) {
            return function (q2) {
              return bind15(liftEffect5(read(disposed)))(function (v) {
                if (v) {
                  return pure13(Nothing.value);
                }
                ;
                return evalQ(render)(ref2)(q2);
              });
            };
          };
        };
        var dispose = function dispose(disposed) {
          return function (lchs) {
            return function (dsx) {
              return handleLifecycle(lchs)(function __do2() {
                var v = read(disposed)();
                if (v) {
                  return unit;
                }
                ;
                write(true)(disposed)();
                finalize(lchs)(dsx)();
                return unDriverStateX(function (v1) {
                  return function __do3() {
                    var v2 = liftEffect1(read(v1.selfRef))();
                    return for_2(v2.rendering)(renderSpec2.dispose)();
                  };
                })(dsx)();
              });
            };
          };
        };
        return bind15(liftEffect5(newLifecycleHandlers))(function (lchs) {
          return bind15(liftEffect5($$new(false)))(function (disposed) {
            return handleLifecycle(lchs)(function __do2() {
              var sio = create();
              var dsx = bindFlipped6(read)(runComponent(lchs)(function () {
                var $77 = notify(sio.listener);
                return function ($78) {
                  return liftEffect5($77($78));
                };
              }())(i2)(component2))();
              return unDriverStateX(function (st) {
                return pure10({
                  query: evalDriver(disposed)(st.selfRef),
                  messages: sio.emitter,
                  dispose: dispose(disposed)(lchs)(dsx)
                });
              })(dsx)();
            });
          });
        });
      };
    };
  };

  // output/Web.DOM.Node/foreign.js
  var getEffProp2 = function getEffProp2(name15) {
    return function (node) {
      return function () {
        return node[name15];
      };
    };
  };
  var baseURI = getEffProp2("baseURI");
  var _ownerDocument = getEffProp2("ownerDocument");
  var _parentNode = getEffProp2("parentNode");
  var _parentElement = getEffProp2("parentElement");
  var childNodes = getEffProp2("childNodes");
  var _firstChild = getEffProp2("firstChild");
  var _lastChild = getEffProp2("lastChild");
  var _previousSibling = getEffProp2("previousSibling");
  var _nextSibling = getEffProp2("nextSibling");
  var _nodeValue = getEffProp2("nodeValue");
  var textContent = getEffProp2("textContent");
  function insertBefore(node1) {
    return function (node2) {
      return function (parent2) {
        return function () {
          parent2.insertBefore(node1, node2);
        };
      };
    };
  }
  function appendChild(node) {
    return function (parent2) {
      return function () {
        parent2.appendChild(node);
      };
    };
  }
  function removeChild2(node) {
    return function (parent2) {
      return function () {
        parent2.removeChild(node);
      };
    };
  }

  // output/Web.DOM.Node/index.js
  var map18 = /* @__PURE__ */map(functorEffect);
  var parentNode2 = /* @__PURE__ */function () {
    var $6 = map18(toMaybe);
    return function ($7) {
      return $6(_parentNode($7));
    };
  }();
  var nextSibling = /* @__PURE__ */function () {
    var $15 = map18(toMaybe);
    return function ($16) {
      return $15(_nextSibling($16));
    };
  }();

  // output/Halogen.VDom.Driver/index.js
  var $runtime_lazy7 = function $runtime_lazy7(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function (lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var $$void7 = /* @__PURE__ */$$void(functorEffect);
  var pure11 = /* @__PURE__ */pure(applicativeEffect);
  var traverse_5 = /* @__PURE__ */traverse_(applicativeEffect)(foldableMaybe);
  var unwrap4 = /* @__PURE__ */unwrap();
  var when6 = /* @__PURE__ */when(applicativeEffect);
  var not3 = /* @__PURE__ */not( /* @__PURE__ */heytingAlgebraFunction( /* @__PURE__ */heytingAlgebraFunction(heytingAlgebraBoolean)));
  var identity8 = /* @__PURE__ */identity(categoryFn);
  var bind16 = /* @__PURE__ */bind(bindAff);
  var liftEffect6 = /* @__PURE__ */liftEffect(monadEffectAff);
  var map19 = /* @__PURE__ */map(functorEffect);
  var bindFlipped7 = /* @__PURE__ */bindFlipped(bindEffect);
  var substInParent = function substInParent(v) {
    return function (v1) {
      return function (v2) {
        if (v1 instanceof Just && v2 instanceof Just) {
          return $$void7(insertBefore(v)(v1.value0)(v2.value0));
        }
        ;
        if (v1 instanceof Nothing && v2 instanceof Just) {
          return $$void7(appendChild(v)(v2.value0));
        }
        ;
        return pure11(unit);
      };
    };
  };
  var removeChild3 = function removeChild3(v) {
    return function __do2() {
      var npn = parentNode2(v.node)();
      return traverse_5(function (pn) {
        return removeChild2(v.node)(pn);
      })(npn)();
    };
  };
  var mkSpec = function mkSpec(handler3) {
    return function (renderChildRef) {
      return function (document2) {
        var getNode = unRenderStateX(function (v) {
          return v.node;
        });
        var done = function done(st) {
          if (st instanceof Just) {
            return halt(st.value0);
          }
          ;
          return unit;
        };
        var buildWidget2 = function buildWidget2(spec) {
          var buildThunk2 = buildThunk(unwrap4)(spec);
          var $lazy_patch = $runtime_lazy7("patch", "Halogen.VDom.Driver", function () {
            return function (st, slot4) {
              if (st instanceof Just) {
                if (slot4 instanceof ComponentSlot) {
                  halt(st.value0);
                  return $lazy_renderComponentSlot(100)(slot4.value0);
                }
                ;
                if (slot4 instanceof ThunkSlot) {
                  var step$prime = step(st.value0, slot4.value0);
                  return mkStep(new Step(extract2(step$prime), new Just(step$prime), $lazy_patch(103), done));
                }
                ;
                throw new Error("Failed pattern match at Halogen.VDom.Driver (line 97, column 22 - line 103, column 79): " + [slot4.constructor.name]);
              }
              ;
              return $lazy_render(104)(slot4);
            };
          });
          var $lazy_render = $runtime_lazy7("render", "Halogen.VDom.Driver", function () {
            return function (slot4) {
              if (slot4 instanceof ComponentSlot) {
                return $lazy_renderComponentSlot(86)(slot4.value0);
              }
              ;
              if (slot4 instanceof ThunkSlot) {
                var step4 = buildThunk2(slot4.value0);
                return mkStep(new Step(extract2(step4), new Just(step4), $lazy_patch(89), done));
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 84, column 7 - line 89, column 75): " + [slot4.constructor.name]);
            };
          });
          var $lazy_renderComponentSlot = $runtime_lazy7("renderComponentSlot", "Halogen.VDom.Driver", function () {
            return function (cs) {
              var renderChild = read(renderChildRef)();
              var rsx = renderChild(cs)();
              var node = getNode(rsx);
              return mkStep(new Step(node, Nothing.value, $lazy_patch(117), done));
            };
          });
          var patch = $lazy_patch(91);
          var render = $lazy_render(82);
          var renderComponentSlot = $lazy_renderComponentSlot(109);
          return render;
        };
        var buildAttributes = buildProp(handler3);
        return {
          buildWidget: buildWidget2,
          buildAttributes: buildAttributes,
          document: document2
        };
      };
    };
  };
  var renderSpec = function renderSpec(document2) {
    return function (container) {
      var render = function render(handler3) {
        return function (child) {
          return function (v) {
            return function (v1) {
              if (v1 instanceof Nothing) {
                return function __do2() {
                  var renderChildRef = $$new(child)();
                  var spec = mkSpec(handler3)(renderChildRef)(document2);
                  var machine = buildVDom(spec)(v);
                  var node = extract2(machine);
                  $$void7(appendChild(node)(toNode2(container)))();
                  return {
                    machine: machine,
                    node: node,
                    renderChildRef: renderChildRef
                  };
                };
              }
              ;
              if (v1 instanceof Just) {
                return function __do2() {
                  write(child)(v1.value0.renderChildRef)();
                  var parent2 = parentNode2(v1.value0.node)();
                  var nextSib = nextSibling(v1.value0.node)();
                  var machine$prime = step(v1.value0.machine, v);
                  var newNode = extract2(machine$prime);
                  when6(not3(unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent2))();
                  return {
                    machine: machine$prime,
                    node: newNode,
                    renderChildRef: v1.value0.renderChildRef
                  };
                };
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 157, column 5 - line 173, column 80): " + [v1.constructor.name]);
            };
          };
        };
      };
      return {
        render: render,
        renderChild: identity8,
        removeChild: removeChild3,
        dispose: removeChild3
      };
    };
  };
  var runUI2 = function runUI2(component2) {
    return function (i2) {
      return function (element3) {
        return bind16(liftEffect6(map19(toDocument)(bindFlipped7(document)(windowImpl))))(function (document2) {
          return runUI(renderSpec(document2)(element3))(component2)(i2);
        });
      };
    };
  };

  // output/Main/index.js
  var $$void8 = /* @__PURE__ */$$void(functorAff);
  var mkGameComponent2 = /* @__PURE__ */mkGameComponent(monadEffectAff);
  var main2 = /* @__PURE__ */runHalogenAff( /* @__PURE__ */bind(bindAff)(awaitBody)(function (body2) {
    return $$void8(runUI2(mkGameComponent2)(unit)(body2));
  }));

  // <stdin>
  main2();
})();
},{}],"../../../../../nix/store/1m2qwchkmsygb6z72mxvf9yflshmb85g-parcel-bundler-1.12.5/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41103" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../../nix/store/1m2qwchkmsygb6z72mxvf9yflshmb85g-parcel-bundler-1.12.5/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/web.e31bb0bc.js.map