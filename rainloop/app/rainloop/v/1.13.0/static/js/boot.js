/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "rainloop/v/0.0.0/static/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 486);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 124)))

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var shared = __webpack_require__(/*! ../internals/shared */ 74);
var uid = __webpack_require__(/*! ../internals/uid */ 128);
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ 180);

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 44);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 90).f;
var hide = __webpack_require__(/*! ../internals/hide */ 45);
var redefine = __webpack_require__(/*! ../internals/redefine */ 54);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 92);
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ 176);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 129);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 44 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 45 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 59);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 91);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 46 */,
/* 47 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 48 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 43);
var exec = __webpack_require__(/*! ../internals/regexp-exec */ 112);

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 49 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 50 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 39);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 52 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 59).f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),
/* 53 */,
/* 54 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var shared = __webpack_require__(/*! ../internals/shared */ 74);
var hide = __webpack_require__(/*! ../internals/hide */ 45);
var has = __webpack_require__(/*! ../internals/has */ 47);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 92);
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ 127);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 93);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),
/* 55 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 54);
var toString = __webpack_require__(/*! ../internals/object-to-string */ 181);

var ObjectPrototype = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (toString !== ObjectPrototype.toString) {
  redefine(ObjectPrototype, 'toString', toString, { unsafe: true });
}


/***/ }),
/* 56 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ 132);
var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var toObject = __webpack_require__(/*! ../internals/to-object */ 120);
var toLength = __webpack_require__(/*! ../internals/to-length */ 72);
var toInteger = __webpack_require__(/*! ../internals/to-integer */ 80);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 51);
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ 150);
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ 133);

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 126);
var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 125);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ 109);
var global = __webpack_require__(/*! ../internals/global */ 28);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 66 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 67 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 43);
var global = __webpack_require__(/*! ../internals/global */ 28);
var userAgent = __webpack_require__(/*! ../internals/user-agent */ 105);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ 119);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 51);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 72 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 80);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 73 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 74 */
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var setGlobal = __webpack_require__(/*! ../internals/set-global */ 92);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 83);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 75 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 54);

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ 161);
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ 91);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 71);
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ 125);
var has = __webpack_require__(/*! ../internals/has */ 47);
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ 126);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 91 */
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 92 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var hide = __webpack_require__(/*! ../internals/hide */ 45);

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 93 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ 175);
var global = __webpack_require__(/*! ../internals/global */ 28);
var isObject = __webpack_require__(/*! ../internals/is-object */ 44);
var hide = __webpack_require__(/*! ../internals/hide */ 45);
var objectHas = __webpack_require__(/*! ../internals/has */ 47);
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ 108);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 103);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 94 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ 54);
var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var fails = __webpack_require__(/*! ../internals/fails */ 39);
var flags = __webpack_require__(/*! ../internals/regexp-flags */ 166);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/*!************************************!*\
  !*** external "window.progressJs" ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = window.progressJs;

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var isObject = __webpack_require__(/*! ../internals/is-object */ 44);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 103 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 104 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ 66);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 105 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 65);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 106 */
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ 66);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 107 */
/*!*****************************!*\
  !*** ./dev/Common/Jassl.js ***!
  \*****************************/
/*! exports provided: jassl */
/*! exports used: jassl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return jassl; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ 55);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ 121);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_2__);


 // let rainloopCaches = window.caches && window.caches.open ? window.caches : null;

/**
 * @param {src} src
 * @param {boolean} async = false
 * @returns {Promise}
 */

function jassl(src, async) {
  if (async === void 0) {
    async = false;
  }

  if (!window__WEBPACK_IMPORTED_MODULE_2___default.a.Promise || !window__WEBPACK_IMPORTED_MODULE_2___default.a.Promise.all) {
    throw new Error('Promises are not available your environment.');
  }

  if (!src) {
    throw new Error('src should not be empty.');
  }

  return new window__WEBPACK_IMPORTED_MODULE_2___default.a.Promise(function (resolve, reject) {
    var element = window__WEBPACK_IMPORTED_MODULE_2___default.a.document.createElement('script');

    element.onload = function () {
      resolve(src);
    };

    element.onerror = function () {
      reject(new Error(src));
    };

    element.async = true === async;
    element.src = src;
    window__WEBPACK_IMPORTED_MODULE_2___default.a.document.body.appendChild(element);
  })
  /* .then((s) => {
  const found = s && rainloopCaches ? s.match(/rainloop\/v\/([^\/]+)\/static\//) : null;
  if (found && found[1])
  {
  rainloopCaches.open('rainloop-offline-' + found[1]).then(
  (cache) => cache.add(s)
  ).catch(() => {
  rainloopCaches = null;
  });
  }
  return s;
  })*/
  ;
}

/***/ }),
/* 108 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 74);
var uid = __webpack_require__(/*! ../internals/uid */ 128);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 109 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ 28);


/***/ }),
/* 110 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 111 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ 59).f;
var has = __webpack_require__(/*! ../internals/has */ 47);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),
/* 112 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ 166);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 39);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 49);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 120 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 51);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 121 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ 43);
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 83);
var global = __webpack_require__(/*! ../internals/global */ 28);
var path = __webpack_require__(/*! ../internals/path */ 109);
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ 184);
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ 111);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ 185);
var isObject = __webpack_require__(/*! ../internals/is-object */ 44);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 66);
var anInstance = __webpack_require__(/*! ../internals/an-instance */ 186);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 49);
var iterate = __webpack_require__(/*! ../internals/iterate */ 141);
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ 190);
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ 142);
var task = __webpack_require__(/*! ../internals/task */ 131).set;
var microtask = __webpack_require__(/*! ../internals/microtask */ 191);
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ 165);
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ 192);
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ 106);
var perform = __webpack_require__(/*! ../internals/perform */ 143);
var userAgent = __webpack_require__(/*! ../internals/user-agent */ 105);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ 93);
var isForced = __webpack_require__(/*! ../internals/is-forced */ 129);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = global[PROMISE];
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = global.fetch;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper;

var FORCED = isForced(PROMISE, function () {
  // correct subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var empty = function () { /* empty */ };
  var FakePromise = (promise.constructor = {})[SPECIES] = function (exec) {
    exec(empty, empty);
  };
  // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !((IS_NODE || typeof PromiseRejectionEvent == 'function')
    && (!IS_PURE || promise['finally'])
    && promise.then(empty) instanceof FakePromise
    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0
    && userAgent.indexOf('Chrome/66') === -1);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  // wrap fetch result
  if (!IS_PURE && typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
    // eslint-disable-next-line no-unused-vars
    fetch: function fetch(input) {
      return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
    }
  });
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = path[PROMISE];

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 122 */,
/* 123 */,
/* 124 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 125 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ 44);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 126 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);
var fails = __webpack_require__(/*! ../internals/fails */ 39);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 102);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 127 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ 74);

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),
/* 128 */
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 129 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 39);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 130 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ 49);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 131 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var fails = __webpack_require__(/*! ../internals/fails */ 39);
var classof = __webpack_require__(/*! ../internals/classof-raw */ 49);
var bind = __webpack_require__(/*! ../internals/bind-context */ 104);
var html = __webpack_require__(/*! ../internals/html */ 140);
var createElement = __webpack_require__(/*! ../internals/document-create-element */ 102);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 132 */
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ../internals/hide */ 45);
var redefine = __webpack_require__(/*! ../internals/redefine */ 54);
var fails = __webpack_require__(/*! ../internals/fails */ 39);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ 112);

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),
/* 133 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ 49);
var regexpExec = __webpack_require__(/*! ./regexp-exec */ 112);

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 47);
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 71);
var indexOf = __webpack_require__(/*! ../internals/array-includes */ 162).indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ 103);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 140 */
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 65);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 141 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ 187);
var toLength = __webpack_require__(/*! ../internals/to-length */ 72);
var bind = __webpack_require__(/*! ../internals/bind-context */ 104);
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ 188);
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ 189);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  while (!(step = iterator.next()).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),
/* 142 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var aFunction = __webpack_require__(/*! ../internals/a-function */ 66);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 143 */
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 144 */
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ 43);
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ 229);

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),
/* 145 */,
/* 146 */
/*!*********************************!*\
  !*** ./dev/Storage/RainLoop.js ***!
  \*********************************/
/*! exports provided: isStorageSupported, getHash, setHash, clearHash, checkTimestamp */
/*! exports used: checkTimestamp, clearHash, getHash, isStorageSupported, setHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isStorageSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkTimestamp; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ 75);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ 52);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ 55);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int */ 144);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ 94);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers */ 67);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_6__);







var STORAGE_KEY = '__rlA';
var TIME_KEY = '__rlT';
/**
 * @param {string} storageName
 * @returns {boolean}
 */

function isStorageSupported(storageName) {
  var storageIsAvailable = false;

  try {
    // at: window[storageName] firefox throws SecurityError: The operation is insecure. when in iframe
    storageIsAvailable = storageName in window__WEBPACK_IMPORTED_MODULE_6___default.a && window__WEBPACK_IMPORTED_MODULE_6___default.a[storageName] && window__WEBPACK_IMPORTED_MODULE_6___default.a[storageName].setItem;
  } catch (e) {} // eslint-disable-line no-empty


  if (storageIsAvailable) {
    var s = window__WEBPACK_IMPORTED_MODULE_6___default.a[storageName],
        key = 'testLocalStorage_' + window__WEBPACK_IMPORTED_MODULE_6___default.a.Math.random();

    try {
      s.setItem(key, key);

      if (key === s.getItem(key)) {
        s.removeItem(key);
        return true;
      }
    } catch (e) {} // eslint-disable-line no-empty

  }

  return false;
}
var SESS_STORAGE = isStorageSupported('sessionStorage') ? window__WEBPACK_IMPORTED_MODULE_6___default.a.sessionStorage || null : null;
var WIN_STORAGE = window__WEBPACK_IMPORTED_MODULE_6___default.a.top || window__WEBPACK_IMPORTED_MODULE_6___default.a || null;

var __get = function __get(key) {
  var result = null;

  if (SESS_STORAGE) {
    result = SESS_STORAGE.getItem(key) || null;
  } else if (WIN_STORAGE && window__WEBPACK_IMPORTED_MODULE_6___default.a.JSON) {
    var data = WIN_STORAGE.name && '{' === WIN_STORAGE.name.toString().substr(0, 1) ? window__WEBPACK_IMPORTED_MODULE_6___default.a.JSON.parse(WIN_STORAGE.name.toString()) : null;
    result = data ? data[key] || null : null;
  }

  return result;
};

var __set = function __set(key, value) {
  if (SESS_STORAGE) {
    SESS_STORAGE.setItem(key, value);
  } else if (WIN_STORAGE && window__WEBPACK_IMPORTED_MODULE_6___default.a.JSON) {
    var data = WIN_STORAGE.name && '{' === WIN_STORAGE.name.toString().substr(0, 1) ? window__WEBPACK_IMPORTED_MODULE_6___default.a.JSON.parse(WIN_STORAGE.name.toString()) : null;
    data = data || {};
    data[key] = value;
    WIN_STORAGE.name = window__WEBPACK_IMPORTED_MODULE_6___default.a.JSON.stringify(data);
  }
};

var timestamp = function timestamp() {
  return window__WEBPACK_IMPORTED_MODULE_6___default.a.Math.round(new window__WEBPACK_IMPORTED_MODULE_6___default.a.Date().getTime() / 1000);
};

var setTimestamp = function setTimestamp() {
  return __set(TIME_KEY, timestamp());
};

var getTimestamp = function getTimestamp() {
  var time = __get(TIME_KEY, 0);

  return time ? window__WEBPACK_IMPORTED_MODULE_6___default.a.parseInt(time, 10) || 0 : 0;
};
/**
 * @returns {string}
 */


function getHash() {
  return __get(STORAGE_KEY);
}
/**
 * @returns {void}
 */

function setHash() {
  var key = 'AuthAccountHash',
      appData = window__WEBPACK_IMPORTED_MODULE_6___default.a.__rlah_data();

  __set(STORAGE_KEY, appData && appData[key] ? appData[key] : '');

  setTimestamp();
}
/**
 * @returns {void}
 */

function clearHash() {
  __set(STORAGE_KEY, '');

  setTimestamp();
}
/**
 * @returns {boolean}
 */

function checkTimestamp() {
  if (timestamp() > getTimestamp() + 1000 * 60 * 60) {
    // 60m
    clearHash();
    return true;
  }

  return false;
} // init section

window__WEBPACK_IMPORTED_MODULE_6___default.a.setInterval(setTimestamp, 1000 * 60); // 1m

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ 182).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 162 */
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ 71);
var toLength = __webpack_require__(/*! ../internals/to-length */ 72);
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ 179);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 163 */
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 164 */,
/* 165 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 36);
var isObject = __webpack_require__(/*! ../internals/is-object */ 44);
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ 106);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 166 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ 36);

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 167 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ 127);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),
/* 176 */
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ 47);
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ 177);
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 90);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 59);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 177 */
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 65);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ 178);
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ 163);
var anObject = __webpack_require__(/*! ../internals/an-object */ 36);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 178 */
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ 139);
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ 110);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 179 */
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 80);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 180 */
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ 39);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 181 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(/*! ../internals/classof */ 130);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;


/***/ }),
/* 182 */
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ 80);
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 51);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 183 */,
/* 184 */
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ 54);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),
/* 185 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ 65);
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ 59);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ 50);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 186 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 187 */
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 73);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 188 */
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ 130);
var Iterators = __webpack_require__(/*! ../internals/iterators */ 73);
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 189 */
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ 36);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),
/* 190 */
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ 32);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 191 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ 90).f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ 49);
var macrotask = __webpack_require__(/*! ../internals/task */ 131).set;
var userAgent = __webpack_require__(/*! ../internals/user-agent */ 105);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 192 */
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 274)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 229 */
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ 28);
var trim = __webpack_require__(/*! ../internals/string-trim */ 230).trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ 167);

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),
/* 230 */
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ 51);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ 167);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 274 */
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 494), __esModule: true };

/***/ }),
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 396);
var core = __webpack_require__(/*! ./_core */ 264);
var ctx = __webpack_require__(/*! ./_ctx */ 489);
var hide = __webpack_require__(/*! ./_hide */ 491);
var has = __webpack_require__(/*! ./_has */ 401);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 396 */
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 397 */
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 492);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 398);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 399);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 228) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 398 */
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 228) && !__webpack_require__(/*! ./_fails */ 274)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 493)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 399 */
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 273);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 400 */
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 401 */
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 402 */
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 496);
var defined = __webpack_require__(/*! ./_defined */ 498);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */
/*!**************************************************************!*\
  !*** ./node_modules/element-dataset/lib/browser/index.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 411);
/* harmony import */ var babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 388);
/* harmony import */ var babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1__);

//
// element-dataset 2.2.6
//
// element-dataset is released under the terms of the BSD-3-Clause license.
// (c) 2015 - 2017 Mark Milstein <mark@epiloque.com> 
//
// For all details and documentation: https://github.com/epiloque/element-dataset
//
  



/* eslint-env browser */

function elementDatasetPolyfill() {
  if (!document.documentElement.dataset && (!babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(HTMLElement.prototype, 'dataset') || !babel_runtime_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_1___default()(HTMLElement.prototype, 'dataset').get)) {
    var descriptor = {};

    descriptor.enumerable = true;

    descriptor.get = function get() {
      var element = this;
      var map = {};
      var attributes = this.attributes;

      function toUpperCase(n0) {
        return n0.charAt(1).toUpperCase();
      }

      function getter() {
        return this.value;
      }

      function setter(name, value) {
        if (typeof value !== 'undefined') {
          this.setAttribute(name, value);
        } else {
          this.removeAttribute(name);
        }
      }

      for (var i = 0; i < attributes.length; i += 1) {
        var attribute = attributes[i];

        // This test really should allow any XML Name without
        // colons (and non-uppercase for XHTML)

        if (attribute && attribute.name && /^data-\w[\w-]*$/.test(attribute.name)) {
          var name = attribute.name;
          var value = attribute.value;

          // Change to CamelCase

          var propName = name.substr(5).replace(/-./g, toUpperCase);

          babel_runtime_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(map, propName, {
            enumerable: descriptor.enumerable,
            get: getter.bind({ value: value || '' }),
            set: setter.bind(element, name)
          });
        }
      }
      return map;
    };

    Object.defineProperty(HTMLElement.prototype, 'dataset', descriptor);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (elementDatasetPolyfill);


/***/ }),
/* 411 */
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 487), __esModule: true };

/***/ }),
/* 412 */
/*!*********************************************!*\
  !*** ./vendors/Progress.js/src/progress.js ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: progressJs */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Progress.js v0.1.0
 * https://github.com/usablica/progress.js
 * MIT licensed
 *
 * Copyright (C) 2013 usabli.ca - Afshin Mehrabani (@afshinmeh)
 */

(function (root, factory) {
  if (true) {
    // CommonJS
    factory(exports);
  } else {}
} (this, function (exports) {
  //Default config/variables
  var VERSION = '0.1.0';

  /**
   * ProgressJs main class
   *
   * @class ProgressJs
   */
  function ProgressJs(obj) {

    if (typeof obj.length != 'undefined') {
      this._targetElement = obj; 
    } else {
      this._targetElement = [obj];
    }

    if (typeof window._progressjsId === 'undefined')
      window._progressjsId = 1;

    if (typeof window._progressjsIntervals === 'undefined') 
      window._progressjsIntervals = {};

    this._options = {
      //progress bar theme
      theme: 'blue',
      //overlay mode makes an overlay layer in the target element
      overlayMode: false,
      //to consider CSS3 transitions in events
      considerTransition: true
    };
  }

  /**
   * Start progress for specific element(s)
   *
   * @api private
   * @method _createContainer 
   */
  function _startProgress() {

    //call onBeforeStart callback
    if (typeof this._onBeforeStartCallback != 'undefined') {
      this._onBeforeStartCallback.call(this);
    }

    //create the container for progress bar
    _createContainer.call(this);

    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      _setProgress.call(this, this._targetElement[i]);
    }
  }

  /**
   * Set progress bar for specific element
   *
   * @api private
   * @method _setProgress
   * @param {Object} targetElement
   */
  function _setProgress(targetElement) {
    
    //if the target element already as `data-progressjs`, ignore the init
    if (targetElement.hasAttribute("data-progressjs"))
      return;

    //get target element position
    var targetElementOffset = _getOffset.call(this, targetElement);

    targetElement.setAttribute("data-progressjs", window._progressjsId);
    
    var progressElementContainer = document.createElement('div');
    progressElementContainer.className = 'progressjs-progress progressjs-theme-' + this._options.theme;


    //set the position percent elements, it depends on targetElement tag
    if (targetElement.tagName.toLowerCase() === 'body') {
      progressElementContainer.style.position = 'fixed';
    } else {
      progressElementContainer.style.position = 'absolute';
    }

    progressElementContainer.setAttribute("data-progressjs", window._progressjsId);
    var progressElement = document.createElement("div");
    progressElement.className = "progressjs-inner";

    //create an element for current percent of progress bar
    var progressPercentElement = document.createElement('div');
    progressPercentElement.className = "progressjs-percent";
    progressPercentElement.innerHTML = "1%";

    progressElement.appendChild(progressPercentElement);
    
    if (this._options.overlayMode && targetElement.tagName.toLowerCase() === 'body') {
      //if we have `body` for target element and also overlay mode is enable, we should use a different
      //position for progress bar container element
      progressElementContainer.style.left   = 0;
      progressElementContainer.style.right  = 0;
      progressElementContainer.style.top    = 0;
      progressElementContainer.style.bottom = 0;
    } else {
      //set progress bar container size and offset
      progressElementContainer.style.left  = targetElementOffset.left + 'px';
      progressElementContainer.style.top   = targetElementOffset.top + 'px';
      progressElementContainer.style.width = targetElementOffset.width + 'px';

      if (this._options.overlayMode) {
        progressElementContainer.style.height = targetElementOffset.height + 'px';
      }
    }

    progressElementContainer.appendChild(progressElement);

    //append the element to container
    var container = document.querySelector('.progressjs-container');
    container.appendChild(progressElementContainer);

    _setPercentFor(targetElement, 1);

    //and increase the progressId
    ++window._progressjsId;
  }

  /**
   * Set percent for all elements
   *
   * @api private
   * @method _setPercent
   * @param {Number} percent
   */
  function _setPercent(percent) {
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      _setPercentFor.call(this, this._targetElement[i], percent);
    }
  }

  /**
   * Set percent for specific element
   *
   * @api private
   * @method _setPercentFor
   * @param {Object} targetElement
   * @param {Number} percent
   */
  function _setPercentFor(targetElement, percent) {
    var self = this;
    
    //prevent overflow!
    if (percent >= 100)
      percent = 100;

    if (targetElement.hasAttribute("data-progressjs")) {
      //setTimeout for better CSS3 animation applying in some cases
      setTimeout(function() {

        //call the onprogress callback
        if (typeof self._onProgressCallback != 'undefined') {
          self._onProgressCallback.call(self, targetElement, percent);
        }

        var percentElement = _getPercentElement(targetElement);
        percentElement.style.width = parseInt(percent) + '%';

        var percentElement  = percentElement.querySelector(".progressjs-percent");
        var existingPercent = parseInt(percentElement.innerHTML.replace('%', ''));

        //start increase/decrease the percent element with animation
        (function(percentElement, existingPercent, currentPercent) {

          var increasement = true;
          if (existingPercent > currentPercent) {
            increasement = false;
          }
          
          var intervalIn = 10;
          function changePercentTimer(percentElement, existingPercent, currentPercent) {
            //calculate the distance between two percents
            var distance = Math.abs(existingPercent - currentPercent);
            if (distance < 3) {
              intervalIn = 30;
            } else if (distance < 20) {
              intervalIn = 20;
            } else {
              intervanIn = 1;
            }

            if ((existingPercent - currentPercent) != 0) {
              //set the percent
              percentElement.innerHTML = (increasement ? (++existingPercent) : (--existingPercent)) + '%';
              setTimeout(function() { changePercentTimer(percentElement, existingPercent, currentPercent); }, intervalIn);
            }
          }
          
          changePercentTimer(percentElement, existingPercent, currentPercent);
          
        })(percentElement, existingPercent, parseInt(percent));
        
      }, 50);
    }
  }

  /**
   * Get the progress bar element 
   *
   * @api private
   * @method _getPercentElement
   * @param {Object} targetElement
   */
  function _getPercentElement(targetElement) {
    var progressjsId = parseInt(targetElement.getAttribute('data-progressjs'));
    return document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="' + progressjsId + '"] > .progressjs-inner');  
  }

  /**
   * Auto increase the progress bar every X milliseconds
   *
   * @api private
   * @method _autoIncrease
   * @param {Number} size
   * @param {Number} millisecond
   */
  function _autoIncrease(size, millisecond) {
    var self = this;
    
    var progressjsId = parseInt(this._targetElement[0].getAttribute('data-progressjs'));
    
    if (typeof window._progressjsIntervals[progressjsId] != 'undefined') {
      clearInterval(window._progressjsIntervals[progressjsId]);
    }
    window._progressjsIntervals[progressjsId] = setInterval(function() {
      _increasePercent.call(self, size);
    }, millisecond);
  }

  /**
   * Increase the size of progress bar
   *
   * @api private
   * @method _increasePercent
   * @param {Number} size
   */
  function _increasePercent(size) {
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];
      if (currentElement.hasAttribute('data-progressjs')) {
        var percentElement  = _getPercentElement(currentElement);
        var existingPercent = parseInt(percentElement.style.width.replace('%', ''));
        if (existingPercent) {
          _setPercentFor.call(this, currentElement, existingPercent + (size || 1));
        }
      }
    }
  }

  /**
   * Close and remove progress bar 
   *
   * @api private
   * @method _end
   */
  function _end() {

    //call onBeforeEnd callback
    if (typeof this._onBeforeEndCallback != 'undefined') {
      if (this._options.considerTransition === true) {
        //we can safety assume that all layers would be the same, so `this._targetElement[0]` is the same as `this._targetElement[1]`
        _getPercentElement(this._targetElement[0]).addEventListener(whichTransitionEvent(), this._onBeforeEndCallback, false);
      } else {
        this._onBeforeEndCallback.call(this);
      }
    } 

    var progressjsId = parseInt(this._targetElement[0].getAttribute('data-progressjs'));
    
    for (var i = 0, elmsLength = this._targetElement.length; i < elmsLength; i++) {
      var currentElement = this._targetElement[i];
      var percentElement = _getPercentElement(currentElement);

      if (!percentElement)
        return;

      var existingPercent = parseInt(percentElement.style.width.replace('%', ''));
      
      var timeoutSec = 1;
      if (existingPercent < 100) {
        _setPercentFor.call(this, currentElement, 100);
        timeoutSec = 500;
      }

      //I believe I should handle this situation with eventListener and `transitionend` event but I'm not sure
      //about compatibility with IEs. Should be fixed in further versions.
      (function(percentElement, currentElement) {
        setTimeout(function() {
          percentElement.parentNode.className += " progressjs-end";

          setTimeout(function() {
            //remove the percent element from page
            percentElement.parentNode.parentNode.removeChild(percentElement.parentNode);
            //and remove the attribute
            currentElement.removeAttribute("data-progressjs");
          }, 1000);
        }, timeoutSec);
      })(percentElement, currentElement);
    }

    //clean the setInterval for autoIncrease function
    if (window._progressjsIntervals[progressjsId]) {
      //`delete` keyword has some problems in IE
      try {
        clearInterval(window._progressjsIntervals[progressjsId]);
        window._progressjsIntervals[progressjsId] = null;
        delete window._progressjsIntervals[progressjsId];
      } catch(ex) { }
    }
  }

  /**
   * Create the progress bar container
   *
   * @api private
   * @method _createContainer
   */
  function _createContainer() {
    //first check if we have an container already, we don't need to create it again
    if (!document.querySelector(".progressjs-container")) {
      var containerElement = document.createElement("div");
      containerElement.className = "progressjs-container";
      document.body.appendChild(containerElement);
    }
  }

  /**
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns Element's position info
   */
  function _getOffset(element) {
    var elementPosition = {};

    if (element.tagName.toLowerCase() === 'body') {
      //set width
      elementPosition.width = element.clientWidth;
      //set height
      elementPosition.height = element.clientHeight;
    } else {
      //set width
      elementPosition.width = element.offsetWidth;
      //set height
      elementPosition.height = element.offsetHeight;
    }

    //calculate element top and left
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft;
      _y += element.offsetTop;
      element = element.offsetParent;
    }
    //set top
    elementPosition.top = _y;
    //set left
    elementPosition.left = _x;

    return elementPosition;
  }

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * via: http://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
   *
   * @param obj1
   * @param obj2
   * @returns obj3 a new object based on obj1 and obj2
   */
  function _mergeOptions(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
  }

  var progressJs = function (targetElm) {
    if (typeof (targetElm) === 'object') {
      //Ok, create a new instance
      return new ProgressJs(targetElm);

    } else if (typeof (targetElm) === 'string') {
      //select the target element with query selector
      var targetElement = document.querySelectorAll(targetElm);
       
      if (targetElement) {
        return new ProgressJs(targetElement);
      } else {
        throw new Error('There is no element with given selector.');
      }
    } else {
      return new ProgressJs(document.body);
    }
  };

  /**
   * Get correct transition callback
   * Thanks @webinista: http://stackoverflow.com/a/9090128/375966
   *
   * @returns transition name
   */
  function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    }

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  /**
   * Current ProgressJs version
   *
   * @property version
   * @type String
   */
  progressJs.version = VERSION;

  //Prototype
  progressJs.fn = ProgressJs.prototype = {
    clone: function () {
      return new ProgressJs(this);
    },
    setOption: function(option, value) {
      this._options[option] = value;
      return this;
    },
    setOptions: function(options) {
      this._options = _mergeOptions(this._options, options);
      return this;
    },
    start: function() {
      _startProgress.call(this);
      return this;
    },
    set: function(percent) {
      _setPercent.call(this, percent);
      return this;
    },
    increase: function(size) {
      _increasePercent.call(this, size);
      return this;
    },
    autoIncrease: function(size, millisecond) {
      _autoIncrease.call(this, size, millisecond);
      return this;
    },
    end: function() {
      _end.call(this);
      return this;
    },
    onbeforeend: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._onBeforeEndCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforeend was not a function');
      }
      return this;
    },
    onbeforestart: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._onBeforeStartCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onbeforestart was not a function');
      }
      return this;
    },
    onprogress: function(providedCallback) {
      if (typeof (providedCallback) === 'function') {
        this._onProgressCallback = providedCallback;
      } else {
        throw new Error('Provided callback for onprogress was not a function');
      }
      return this;
    }
  };

  exports.progressJs = progressJs;
  return progressJs;
}));


/***/ }),
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */
/*!*********************!*\
  !*** ./dev/boot.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ 67);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var element_dataset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-dataset */ 410);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vendors_Progress_js_src_progress_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendors/Progress.js/src/progress.js */ 412);
/* harmony import */ var _vendors_Progress_js_src_progress_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendors_Progress_js_src_progress_js__WEBPACK_IMPORTED_MODULE_3__);


Object(element_dataset__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();

__webpack_require__(/*! json3 */ 502);

__webpack_require__(/*! intersection-observer */ 505);



window__WEBPACK_IMPORTED_MODULE_2___default.a.progressJs = window__WEBPACK_IMPORTED_MODULE_2___default.a.progressJs || Object(_vendors_Progress_js_src_progress_js__WEBPACK_IMPORTED_MODULE_3__["progressJs"])();
window__WEBPACK_IMPORTED_MODULE_2___default.a.progressJs.onbeforeend(function () {
  var _$ = window__WEBPACK_IMPORTED_MODULE_2___default.a.$;

  if (_$) {
    try {
      _$('.progressjs-container').hide();

      window__WEBPACK_IMPORTED_MODULE_2___default.a.setTimeout(function () {
        _$('.progressjs-container').remove();
      }, 200); // eslint-disable-line no-magic-numbers
    } catch (e) {} // eslint-disable-line no-empty

  }
});

__webpack_require__(/*! ../vendors/modernizr/modernizr-custom.js */ 506);

__webpack_require__(/*! Common/Booter */ 507);

if (window__WEBPACK_IMPORTED_MODULE_2___default.a.__runBoot) {
  window__WEBPACK_IMPORTED_MODULE_2___default.a.__runBoot();
}

/***/ }),
/* 487 */
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ 488);
var $Object = __webpack_require__(/*! ../../modules/_core */ 264).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 488 */
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 395);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ 228), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ 397).f });


/***/ }),
/* 489 */
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 490);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 490 */
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 491 */
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 397);
var createDesc = __webpack_require__(/*! ./_property-desc */ 400);
module.exports = __webpack_require__(/*! ./_descriptors */ 228) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 492 */
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 273);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 493 */
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 273);
var document = __webpack_require__(/*! ./_global */ 396).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 494 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 495);
var $Object = __webpack_require__(/*! ../../modules/_core */ 264).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 495 */
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ 402);
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 499).f;

__webpack_require__(/*! ./_object-sap */ 501)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 496 */
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 497);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 497 */
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 498 */
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 499 */
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 500);
var createDesc = __webpack_require__(/*! ./_property-desc */ 400);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 402);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 399);
var has = __webpack_require__(/*! ./_has */ 401);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 398);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 228) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 500 */
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 501 */
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 395);
var core = __webpack_require__(/*! ./_core */ 264);
var fails = __webpack_require__(/*! ./_fails */ 274);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 502 */
/*!*****************************************!*\
  !*** ./node_modules/json3/lib/json3.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */
;(function () {
  // Detect the `define` function exposed by asynchronous module loaders. The
  // strict `define` check is necessary for compatibility with `r.js`.
  var isLoader =  true && __webpack_require__(/*! !webpack amd options */ 504);

  // A set of types used to distinguish objects from primitives.
  var objectTypes = {
    "function": true,
    "object": true
  };

  // Detect the `exports` object exposed by CommonJS implementations.
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  // Use the `global` object exposed by Node (including Browserify via
  // `insert-module-globals`), Narwhal, and Ringo as the default context,
  // and the `window` object in browsers. Rhino exports a `global` function
  // instead.
  var root = objectTypes[typeof window] && window || this,
      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;

  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  // Public: Initializes JSON 3 using the given `context` object, attaching the
  // `stringify` and `parse` functions to the specified `exports` object.
  function runInContext(context, exports) {
    context || (context = root.Object());
    exports || (exports = root.Object());

    // Native constructor aliases.
    var Number = context.Number || root.Number,
        String = context.String || root.String,
        Object = context.Object || root.Object,
        Date = context.Date || root.Date,
        SyntaxError = context.SyntaxError || root.SyntaxError,
        TypeError = context.TypeError || root.TypeError,
        Math = context.Math || root.Math,
        nativeJSON = context.JSON || root.JSON;

    // Delegate to the native `stringify` and `parse` implementations.
    if (typeof nativeJSON == "object" && nativeJSON) {
      exports.stringify = nativeJSON.stringify;
      exports.parse = nativeJSON.parse;
    }

    // Convenience aliases.
    var objectProto = Object.prototype,
        getClass = objectProto.toString,
        isProperty = objectProto.hasOwnProperty,
        undefined;

    // Internal: Contains `try...catch` logic used by other functions.
    // This prevents other functions from being deoptimized.
    function attempt(func, errorFunc) {
      try {
        func();
      } catch (exception) {
        if (errorFunc) {
          errorFunc();
        }
      }
    }

    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
    var isExtended = new Date(-3509827334573292);
    attempt(function () {
      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
      // results for certain dates in Opera >= 10.53.
      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
    });

    // Internal: Determines whether the native `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    function has(name) {
      if (has[name] != null) {
        // Return cached feature test result.
        return has[name];
      }
      var isSupported;
      if (name == "bug-string-char-index") {
        // IE <= 7 doesn't support accessing string characters using square
        // bracket notation. IE 8 only supports this for primitives.
        isSupported = "a"[0] != "a";
      } else if (name == "json") {
        // Indicates whether both `JSON.stringify` and `JSON.parse` are
        // supported.
        isSupported = has("json-stringify") && has("date-serialization") && has("json-parse");
      } else if (name == "date-serialization") {
        // Indicates whether `Date`s can be serialized accurately by `JSON.stringify`.
        isSupported = has("json-stringify") && isExtended;
        if (isSupported) {
          var stringify = exports.stringify;
          attempt(function () {
            isSupported =
              // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
              // serialize extended years.
              stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
              // The milliseconds are optional in ES 5, but required in 5.1.
              stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
              // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
              // four-digit years instead of six-digit years. Credits: @Yaffle.
              stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
              // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
              // values less than 1000. Credits: @Yaffle.
              stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
          });
        }
      } else {
        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
        // Test `JSON.stringify`.
        if (name == "json-stringify") {
          var stringify = exports.stringify, stringifySupported = typeof stringify == "function";
          if (stringifySupported) {
            // A test function object with a custom `toJSON` method.
            (value = function () {
              return 1;
            }).toJSON = value;
            attempt(function () {
              stringifySupported =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                stringify(0) === "0" &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                stringify(new Number()) === "0" &&
                stringify(new String()) == '""' &&
                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                stringify(getClass) === undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
                // FF 3.1b3 pass this test.
                stringify(undefined) === undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the value is omitted entirely.
                stringify() === undefined &&
                // FF 3.1b1, 2 throw an error if the given value is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                stringify(value) === "1" &&
                stringify([value]) == "[1]" &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                stringify([undefined]) == "[null]" &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                stringify(null) == "null" &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
                // elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                stringify([undefined, getClass, null]) == "[null,null,null]" &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                stringify(null, value) === "1" &&
                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]";
            }, function () {
              stringifySupported = false;
            });
          }
          isSupported = stringifySupported;
        }
        // Test `JSON.parse`.
        if (name == "json-parse") {
          var parse = exports.parse, parseSupported;
          if (typeof parse == "function") {
            attempt(function () {
              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
              // Conforming implementations should also coerce the initial argument to
              // a string prior to parsing.
              if (parse("0") === 0 && !parse(false)) {
                // Simple parsing test.
                value = parse(serialized);
                parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                if (parseSupported) {
                  attempt(function () {
                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                    parseSupported = !parse('"\t"');
                  });
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
                      // certain octal literals.
                      parseSupported = parse("01") !== 1;
                    });
                  }
                  if (parseSupported) {
                    attempt(function () {
                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
                      // points. These environments, along with FF 3.1b1 and 2,
                      // also allow trailing commas in JSON objects and arrays.
                      parseSupported = parse("1.") !== 1;
                    });
                  }
                }
              }
            }, function () {
              parseSupported = false;
            });
          }
          isSupported = parseSupported;
        }
      }
      return has[name] = !!isSupported;
    }
    has["bug-string-char-index"] = has["date-serialization"] = has["json"] = has["json-stringify"] = has["json-parse"] = null;

    if (!has("json")) {
      // Common `[[Class]]` name aliases.
      var functionClass = "[object Function]",
          dateClass = "[object Date]",
          numberClass = "[object Number]",
          stringClass = "[object String]",
          arrayClass = "[object Array]",
          booleanClass = "[object Boolean]";

      // Detect incomplete support for accessing string characters by index.
      var charIndexBuggy = has("bug-string-char-index");

      // Internal: Normalizes the `for...in` iteration algorithm across
      // environments. Each enumerated key is yielded to a `callback` function.
      var forOwn = function (object, callback) {
        var size = 0, Properties, dontEnums, property;

        // Tests for bugs in the current environment's `for...in` algorithm. The
        // `valueOf` property inherits the non-enumerable flag from
        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
        (Properties = function () {
          this.valueOf = 0;
        }).prototype.valueOf = 0;

        // Iterate over a new instance of the `Properties` class.
        dontEnums = new Properties();
        for (property in dontEnums) {
          // Ignore all properties inherited from `Object.prototype`.
          if (isProperty.call(dontEnums, property)) {
            size++;
          }
        }
        Properties = dontEnums = null;

        // Normalize the iteration algorithm.
        if (!size) {
          // A list of non-enumerable properties inherited from `Object.prototype`.
          dontEnums = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
          // properties.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, length;
            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
            for (property in object) {
              // Gecko <= 1.0 enumerates the `prototype` property of functions under
              // certain conditions; IE does not.
              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                callback(property);
              }
            }
            // Manually invoke the callback for each non-enumerable property.
            for (length = dontEnums.length; property = dontEnums[--length];) {
              if (hasProperty.call(object, property)) {
                callback(property);
              }
            }
          };
        } else {
          // No bugs detected; use the standard `for...in` algorithm.
          forOwn = function (object, callback) {
            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
            for (property in object) {
              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                callback(property);
              }
            }
            // Manually invoke the callback for the `constructor` property due to
            // cross-environment inconsistencies.
            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
              callback(property);
            }
          };
        }
        return forOwn(object, callback);
      };

      // Public: Serializes a JavaScript `value` as a JSON string. The optional
      // `filter` argument may specify either a function that alters how object and
      // array members are serialized, or an array of strings and numbers that
      // indicates which properties should be serialized. The optional `width`
      // argument may be either a string or number that specifies the indentation
      // level of the output.
      if (!has("json-stringify") && !has("date-serialization")) {
        // Internal: A map of control characters and their escaped equivalents.
        var Escapes = {
          92: "\\\\",
          34: '\\"',
          8: "\\b",
          12: "\\f",
          10: "\\n",
          13: "\\r",
          9: "\\t"
        };

        // Internal: Converts `value` into a zero-padded string such that its
        // length is at least equal to `width`. The `width` must be <= 6.
        var leadingZeroes = "000000";
        var toPaddedString = function (width, value) {
          // The `|| 0` expression is necessary to work around a bug in
          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
          return (leadingZeroes + (value || 0)).slice(-width);
        };

        // Internal: Serializes a date object.
        var serializeDate = function (value) {
          var getData, year, month, date, time, hours, minutes, seconds, milliseconds;
          // Define additional utility methods if the `Date` methods are buggy.
          if (!isExtended) {
            var floor = Math.floor;
            // A mapping between the months of the year and the number of days between
            // January 1st and the first of the respective month.
            var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            // Internal: Calculates the number of days between the Unix epoch and the
            // first day of the given month.
            var getDay = function (year, month) {
              return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
            };
            getData = function (value) {
              // Manually compute the year, month, date, hours, minutes,
              // seconds, and milliseconds if the `getUTC*` methods are
              // buggy. Adapted from @Yaffle's `date-shim` project.
              date = floor(value / 864e5);
              for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
              for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
              date = 1 + date - getDay(year, month);
              // The `time` value specifies the time within the day (see ES
              // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
              // to compute `A modulo B`, as the `%` operator does not
              // correspond to the `modulo` operation for negative numbers.
              time = (value % 864e5 + 864e5) % 864e5;
              // The hours, minutes, seconds, and milliseconds are obtained by
              // decomposing the time within the day. See section 15.9.1.10.
              hours = floor(time / 36e5) % 24;
              minutes = floor(time / 6e4) % 60;
              seconds = floor(time / 1e3) % 60;
              milliseconds = time % 1e3;
            };
          } else {
            getData = function (value) {
              year = value.getUTCFullYear();
              month = value.getUTCMonth();
              date = value.getUTCDate();
              hours = value.getUTCHours();
              minutes = value.getUTCMinutes();
              seconds = value.getUTCSeconds();
              milliseconds = value.getUTCMilliseconds();
            };
          }
          serializeDate = function (value) {
            if (value > -1 / 0 && value < 1 / 0) {
              // Dates are serialized according to the `Date#toJSON` method
              // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
              // for the ISO 8601 date time string format.
              getData(value);
              // Serialize extended years correctly.
              value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
              "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
              // Months, dates, hours, minutes, and seconds should have two
              // digits; milliseconds should have three.
              "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
              // Milliseconds are optional in ES 5.0, but required in 5.1.
              "." + toPaddedString(3, milliseconds) + "Z";
              year = month = date = hours = minutes = seconds = milliseconds = null;
            } else {
              value = null;
            }
            return value;
          };
          return serializeDate(value);
        };

        // For environments with `JSON.stringify` but buggy date serialization,
        // we override the native `Date#toJSON` implementation with a
        // spec-compliant one.
        if (has("json-stringify") && !has("date-serialization")) {
          // Internal: the `Date#toJSON` implementation used to override the native one.
          function dateToJSON (key) {
            return serializeDate(this);
          }

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          var nativeStringify = exports.stringify;
          exports.stringify = function (source, filter, width) {
            var nativeToJSON = Date.prototype.toJSON;
            Date.prototype.toJSON = dateToJSON;
            var result = nativeStringify(source, filter, width);
            Date.prototype.toJSON = nativeToJSON;
            return result;
          }
        } else {
          // Internal: Double-quotes a string `value`, replacing all ASCII control
          // characters (characters with code unit values between 0 and 31) with
          // their escaped equivalents. This is an implementation of the
          // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
          var unicodePrefix = "\\u00";
          var escapeChar = function (character) {
            var charCode = character.charCodeAt(0), escaped = Escapes[charCode];
            if (escaped) {
              return escaped;
            }
            return unicodePrefix + toPaddedString(2, charCode.toString(16));
          };
          var reEscape = /[\x00-\x1f\x22\x5c]/g;
          var quote = function (value) {
            reEscape.lastIndex = 0;
            return '"' +
              (
                reEscape.test(value)
                  ? value.replace(reEscape, escapeChar)
                  : value
              ) +
              '"';
          };

          // Internal: Recursively serializes an object. Implements the
          // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
          var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
            var value, type, className, results, element, index, length, prefix, result;
            attempt(function () {
              // Necessary for host object support.
              value = object[property];
            });
            if (typeof value == "object" && value) {
              if (value.getUTCFullYear && getClass.call(value) == dateClass && value.toJSON === Date.prototype.toJSON) {
                value = serializeDate(value);
              } else if (typeof value.toJSON == "function") {
                value = value.toJSON(property);
              }
            }
            if (callback) {
              // If a replacement function was provided, call it to obtain the value
              // for serialization.
              value = callback.call(object, property, value);
            }
            // Exit early if value is `undefined` or `null`.
            if (value == undefined) {
              return value === undefined ? value : "null";
            }
            type = typeof value;
            // Only call `getClass` if the value is an object.
            if (type == "object") {
              className = getClass.call(value);
            }
            switch (className || type) {
              case "boolean":
              case booleanClass:
                // Booleans are represented literally.
                return "" + value;
              case "number":
              case numberClass:
                // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
                // `"null"`.
                return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
              case "string":
              case stringClass:
                // Strings are double-quoted and escaped.
                return quote("" + value);
            }
            // Recursively serialize objects and arrays.
            if (typeof value == "object") {
              // Check for cyclic structures. This is a linear search; performance
              // is inversely proportional to the number of unique nested objects.
              for (length = stack.length; length--;) {
                if (stack[length] === value) {
                  // Cyclic structures cannot be serialized by `JSON.stringify`.
                  throw TypeError();
                }
              }
              // Add the object to the stack of traversed objects.
              stack.push(value);
              results = [];
              // Save the current indentation level and indent one additional level.
              prefix = indentation;
              indentation += whitespace;
              if (className == arrayClass) {
                // Recursively serialize array elements.
                for (index = 0, length = value.length; index < length; index++) {
                  element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                  results.push(element === undefined ? "null" : element);
                }
                result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
              } else {
                // Recursively serialize object members. Members are selected from
                // either a user-specified list of property names, or the object
                // itself.
                forOwn(properties || value, function (property) {
                  var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                  if (element !== undefined) {
                    // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
                    // is not the empty string, let `member` {quote(property) + ":"}
                    // be the concatenation of `member` and the `space` character."
                    // The "`space` character" refers to the literal space
                    // character, not the `space` {width} argument provided to
                    // `JSON.stringify`.
                    results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                  }
                });
                result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
              }
              // Remove the object from the traversed object stack.
              stack.pop();
              return result;
            }
          };

          // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
          exports.stringify = function (source, filter, width) {
            var whitespace, callback, properties, className;
            if (objectTypes[typeof filter] && filter) {
              className = getClass.call(filter);
              if (className == functionClass) {
                callback = filter;
              } else if (className == arrayClass) {
                // Convert the property names array into a makeshift set.
                properties = {};
                for (var index = 0, length = filter.length, value; index < length;) {
                  value = filter[index++];
                  className = getClass.call(value);
                  if (className == "[object String]" || className == "[object Number]") {
                    properties[value] = 1;
                  }
                }
              }
            }
            if (width) {
              className = getClass.call(width);
              if (className == numberClass) {
                // Convert the `width` to an integer and create a string containing
                // `width` number of space characters.
                if ((width -= width % 1) > 0) {
                  if (width > 10) {
                    width = 10;
                  }
                  for (whitespace = ""; whitespace.length < width;) {
                    whitespace += " ";
                  }
                }
              } else if (className == stringClass) {
                whitespace = width.length <= 10 ? width : width.slice(0, 10);
              }
            }
            // Opera <= 7.54u2 discards the values associated with empty string keys
            // (`""`) only if they are used directly within an object member list
            // (e.g., `!("" in { "": 1})`).
            return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
          };
        }
      }

      // Public: Parses a JSON source string.
      if (!has("json-parse")) {
        var fromCharCode = String.fromCharCode;

        // Internal: A map of escaped control characters and their unescaped
        // equivalents.
        var Unescapes = {
          92: "\\",
          34: '"',
          47: "/",
          98: "\b",
          116: "\t",
          110: "\n",
          102: "\f",
          114: "\r"
        };

        // Internal: Stores the parser state.
        var Index, Source;

        // Internal: Resets the parser state and throws a `SyntaxError`.
        var abort = function () {
          Index = Source = null;
          throw SyntaxError();
        };

        // Internal: Returns the next token, or `"$"` if the parser has reached
        // the end of the source string. A token may be a string, number, `null`
        // literal, or Boolean literal.
        var lex = function () {
          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
          while (Index < length) {
            charCode = source.charCodeAt(Index);
            switch (charCode) {
              case 9: case 10: case 13: case 32:
                // Skip whitespace tokens, including tabs, carriage returns, line
                // feeds, and space characters.
                Index++;
                break;
              case 123: case 125: case 91: case 93: case 58: case 44:
                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
                // the current position.
                value = charIndexBuggy ? source.charAt(Index) : source[Index];
                Index++;
                return value;
              case 34:
                // `"` delimits a JSON string; advance to the next character and
                // begin parsing the string. String tokens are prefixed with the
                // sentinel `@` character to distinguish them from punctuators and
                // end-of-string tokens.
                for (value = "@", Index++; Index < length;) {
                  charCode = source.charCodeAt(Index);
                  if (charCode < 32) {
                    // Unescaped ASCII control characters (those with a code unit
                    // less than the space character) are not permitted.
                    abort();
                  } else if (charCode == 92) {
                    // A reverse solidus (`\`) marks the beginning of an escaped
                    // control character (including `"`, `\`, and `/`) or Unicode
                    // escape sequence.
                    charCode = source.charCodeAt(++Index);
                    switch (charCode) {
                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
                        // Revive escaped control characters.
                        value += Unescapes[charCode];
                        Index++;
                        break;
                      case 117:
                        // `\u` marks the beginning of a Unicode escape sequence.
                        // Advance to the first character and validate the
                        // four-digit code point.
                        begin = ++Index;
                        for (position = Index + 4; Index < position; Index++) {
                          charCode = source.charCodeAt(Index);
                          // A valid sequence comprises four hexdigits (case-
                          // insensitive) that form a single hexadecimal value.
                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                            // Invalid Unicode escape sequence.
                            abort();
                          }
                        }
                        // Revive the escaped character.
                        value += fromCharCode("0x" + source.slice(begin, Index));
                        break;
                      default:
                        // Invalid escape sequence.
                        abort();
                    }
                  } else {
                    if (charCode == 34) {
                      // An unescaped double-quote character marks the end of the
                      // string.
                      break;
                    }
                    charCode = source.charCodeAt(Index);
                    begin = Index;
                    // Optimize for the common case where a string is valid.
                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
                      charCode = source.charCodeAt(++Index);
                    }
                    // Append the string as-is.
                    value += source.slice(begin, Index);
                  }
                }
                if (source.charCodeAt(Index) == 34) {
                  // Advance to the next character and return the revived string.
                  Index++;
                  return value;
                }
                // Unterminated string.
                abort();
              default:
                // Parse numbers and literals.
                begin = Index;
                // Advance past the negative sign, if one is specified.
                if (charCode == 45) {
                  isSigned = true;
                  charCode = source.charCodeAt(++Index);
                }
                // Parse an integer or floating-point value.
                if (charCode >= 48 && charCode <= 57) {
                  // Leading zeroes are interpreted as octal literals.
                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                    // Illegal octal literal.
                    abort();
                  }
                  isSigned = false;
                  // Parse the integer component.
                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
                  // Floats cannot contain a leading decimal point; however, this
                  // case is already accounted for by the parser.
                  if (source.charCodeAt(Index) == 46) {
                    position = ++Index;
                    // Parse the decimal component.
                    for (; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal trailing decimal.
                      abort();
                    }
                    Index = position;
                  }
                  // Parse exponents. The `e` denoting the exponent is
                  // case-insensitive.
                  charCode = source.charCodeAt(Index);
                  if (charCode == 101 || charCode == 69) {
                    charCode = source.charCodeAt(++Index);
                    // Skip past the sign following the exponent, if one is
                    // specified.
                    if (charCode == 43 || charCode == 45) {
                      Index++;
                    }
                    // Parse the exponential component.
                    for (position = Index; position < length; position++) {
                      charCode = source.charCodeAt(position);
                      if (charCode < 48 || charCode > 57) {
                        break;
                      }
                    }
                    if (position == Index) {
                      // Illegal empty exponent.
                      abort();
                    }
                    Index = position;
                  }
                  // Coerce the parsed value to a JavaScript number.
                  return +source.slice(begin, Index);
                }
                // A negative sign may only precede numbers.
                if (isSigned) {
                  abort();
                }
                // `true`, `false`, and `null` literals.
                var temp = source.slice(Index, Index + 4);
                if (temp == "true") {
                  Index += 4;
                  return true;
                } else if (temp == "fals" && source.charCodeAt(Index + 4 ) == 101) {
                  Index += 5;
                  return false;
                } else if (temp == "null") {
                  Index += 4;
                  return null;
                }
                // Unrecognized token.
                abort();
            }
          }
          // Return the sentinel `$` character if the parser has reached the end
          // of the source string.
          return "$";
        };

        // Internal: Parses a JSON `value` token.
        var get = function (value) {
          var results, hasMembers;
          if (value == "$") {
            // Unexpected end of input.
            abort();
          }
          if (typeof value == "string") {
            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
              // Remove the sentinel `@` character.
              return value.slice(1);
            }
            // Parse object and array literals.
            if (value == "[") {
              // Parses a JSON array, returning a new JavaScript array.
              results = [];
              for (;;) {
                value = lex();
                // A closing square bracket marks the end of the array literal.
                if (value == "]") {
                  break;
                }
                // If the array literal contains elements, the current token
                // should be a comma separating the previous element from the
                // next.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "]") {
                      // Unexpected trailing `,` in array literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each array element.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Elisions and leading commas are not permitted.
                if (value == ",") {
                  abort();
                }
                results.push(get(value));
              }
              return results;
            } else if (value == "{") {
              // Parses a JSON object, returning a new JavaScript object.
              results = {};
              for (;;) {
                value = lex();
                // A closing curly brace marks the end of the object literal.
                if (value == "}") {
                  break;
                }
                // If the object literal contains members, the current token
                // should be a comma separator.
                if (hasMembers) {
                  if (value == ",") {
                    value = lex();
                    if (value == "}") {
                      // Unexpected trailing `,` in object literal.
                      abort();
                    }
                  } else {
                    // A `,` must separate each object member.
                    abort();
                  }
                } else {
                  hasMembers = true;
                }
                // Leading commas are not permitted, object property names must be
                // double-quoted strings, and a `:` must separate each property
                // name and value.
                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                  abort();
                }
                results[value.slice(1)] = get(lex());
              }
              return results;
            }
            // Unexpected token encountered.
            abort();
          }
          return value;
        };

        // Internal: Updates a traversed object member.
        var update = function (source, property, callback) {
          var element = walk(source, property, callback);
          if (element === undefined) {
            delete source[property];
          } else {
            source[property] = element;
          }
        };

        // Internal: Recursively traverses a parsed JSON object, invoking the
        // `callback` function for each value. This is an implementation of the
        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
        var walk = function (source, property, callback) {
          var value = source[property], length;
          if (typeof value == "object" && value) {
            // `forOwn` can't be used to traverse an array in Opera <= 8.54
            // because its `Object#hasOwnProperty` implementation returns `false`
            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
            if (getClass.call(value) == arrayClass) {
              for (length = value.length; length--;) {
                update(getClass, forOwn, value, length, callback);
              }
            } else {
              forOwn(value, function (property) {
                update(value, property, callback);
              });
            }
          }
          return callback.call(source, property, value);
        };

        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
        exports.parse = function (source, callback) {
          var result, value;
          Index = 0;
          Source = "" + source;
          result = get(lex());
          // If a JSON string contains multiple tokens, it is invalid.
          if (lex() != "$") {
            abort();
          }
          // Reset the parser state.
          Index = Source = null;
          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
        };
      }
    }

    exports.runInContext = runInContext;
    return exports;
  }

  if (freeExports && !isLoader) {
    // Export for CommonJS environments.
    runInContext(root, freeExports);
  } else {
    // Export for web browsers and JavaScript engines.
    var nativeJSON = root.JSON,
        previousJSON = root.JSON3,
        isRestored = false;

    var JSON3 = runInContext(root, (root.JSON3 = {
      // Public: Restores the original value of the global `JSON` object and
      // returns a reference to the `JSON3` object.
      "noConflict": function () {
        if (!isRestored) {
          isRestored = true;
          root.JSON = nativeJSON;
          root.JSON3 = previousJSON;
          nativeJSON = previousJSON = null;
        }
        return JSON3;
      }
    }));

    root.JSON = {
      "parse": JSON3.parse,
      "stringify": JSON3.stringify
    };
  }

  // Export for asynchronous module loaders.
  if (isLoader) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return JSON3;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ 503)(module), __webpack_require__(/*! ./../../webpack/buildin/global.js */ 124)))

/***/ }),
/* 503 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 504 */
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 505 */
/*!*********************************************************************!*\
  !*** ./node_modules/intersection-observer/intersection-observer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {
'use strict';

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */
var registry = [];


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
  if (registry.indexOf(this) < 0) {
    registry.push(this);
  }
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
  var index = registry.indexOf(this);
  if (index != -1) registry.splice(index, 1);
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());


/***/ }),
/* 506 */
/*!***********************************************!*\
  !*** ./vendors/modernizr/modernizr-custom.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-backgroundsize-boxshadow-cssanimations-csstransitions-rgba-textshadow-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var classes = [];


  var tests = [];


  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };



  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();



  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;


  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';


  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "CSS rgba",
  "caniuse": "css3-colors",
  "property": "rgba",
  "tags": ["css"],
  "notes": [{
    "name": "CSSTricks Tutorial",
    "href": "https://css-tricks.com/rgba-browser-support/"
  }]
}
!*/

  Modernizr.addTest('rgba', function() {
    var style = createElement('a').style;
    style.cssText = 'background-color:rgba(150,255,150,.5)';

    return ('' + style.backgroundColor).indexOf('rgba') > -1;
  });



  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';


  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;


  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;


  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });



  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });



  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    var elems = ['modernizr', 'tspan'];
    while (!mStyle.style) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * testProp() investigates whether a given style property is recognized
   * Property names can be provided in either camelCase or kebab-case.
   *
   * @memberof Modernizr
   * @name Modernizr.testProp
   * @access public
   * @optionName Modernizr.testProp()
   * @optionProp testProp
   * @function testProp
   * @param {string} prop - Name of the CSS property to check
   * @param {string} [value] - Name of the CSS value to check
   * @param {boolean} [useValue] - Whether or not to check the value if @supports isn't supported
   * @returns {boolean}
   * @example
   *
   * Just like [testAllProps](#modernizr-testallprops), only it does not check any vendor prefixed
   * version of the string.
   *
   * Note that the property name must be provided in camelCase (e.g. boxSizing not box-sizing)
   *
   * ```js
   * Modernizr.testProp('pointerEvents')  // true
   * ```
   *
   * You can also provide a value as an optional second argument to check if a
   * specific value is supported
   *
   * ```js
   * Modernizr.testProp('pointerEvents', 'none') // true
   * Modernizr.testProp('pointerEvents', 'penguin') // false
   * ```
   */

  var testProp = ModernizrProto.testProp = function(prop, value, useValue) {
    return testProps([prop], undefined, value, useValue);
  };

/*!
{
  "name": "CSS textshadow",
  "property": "textshadow",
  "caniuse": "css-textshadow",
  "tags": ["css"],
  "knownBugs": ["FF3.0 will false positive on this test"]
}
!*/

  Modernizr.addTest('textshadow', testProp('textShadow', '1px 1px'));


  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;



  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));

/*!
{
  "name": "Background Size",
  "property": "backgroundsize",
  "tags": ["css"],
  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
  "notes": [{
    "name": "Related Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/396"
  }]
}
!*/

  Modernizr.addTest('backgroundsize', testAllProps('backgroundSize', '100%', true));

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Box Shadow",
  "property": "boxshadow",
  "caniuse": "css-boxshadow",
  "tags": ["css"],
  "knownBugs": [
    "WebOS false positives on this test.",
    "The Kindle Silk browser false positives"
  ]
}
!*/

  Modernizr.addTest('boxshadow', testAllProps('boxShadow', '1px 1px', true));


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);

/***/ }),
/* 507 */
/*!******************************!*\
  !*** ./dev/Common/Booter.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ 75);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ 55);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ 121);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ 48);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ 94);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace */ 56);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers */ 67);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! window */ 4);
/* harmony import */ var window__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(window__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var progressJs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! progressJs */ 99);
/* harmony import */ var progressJs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(progressJs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Common_Jassl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Common/Jassl */ 107);
/* harmony import */ var Storage_RainLoop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Storage/RainLoop */ 146);











var RL_APP_DATA_STORAGE = null;
/* eslint-disable camelcase,spaced-comment  */

window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah = function () {
  return Object(Storage_RainLoop__WEBPACK_IMPORTED_MODULE_10__[/* getHash */ "c"])();
};

window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah_set = function () {
  return Object(Storage_RainLoop__WEBPACK_IMPORTED_MODULE_10__[/* setHash */ "e"])();
};

window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah_clear = function () {
  return Object(Storage_RainLoop__WEBPACK_IMPORTED_MODULE_10__[/* clearHash */ "b"])();
};

window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah_data = function () {
  return RL_APP_DATA_STORAGE;
};

var useJsNextBundle = function () {
  //	try {
  //
  //		(function() {
  //			eval(`
  // // let + const
  //const x = 5; let y = 4; var z = 4;
  //
  // // Arrow Function
  //const f = () => 'rainloop';
  //
  // // Default + Rest + Spread
  //const d = (test = 1, ...t) => 'rainloop';
  //d(...[1, 2, 3]);
  //
  //// Destructuring
  //let [a, b] = [1, 2];
  //({a, b} = {a: 1, b: 2});
  //
  //// Class
  //class Q1 { constructor() {} }
  //
  //// Class extends + super
  //class Q2 extends Q1 { constructor() { super() } }
  //
  //`);
  //		}());
  //
  //		return true;
  //	}
  //	catch (e) {}
  return false;
}();
/* eslint-enable */

/**
 * @param {string} id
 * @param {string} name
 * @returns {string}
 */


function getComputedStyle(id, name) {
  var element = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById(id);
  return element && element.currentStyle ? element.currentStyle[name] : window__WEBPACK_IMPORTED_MODULE_7___default.a.getComputedStyle ? window__WEBPACK_IMPORTED_MODULE_7___default.a.getComputedStyle(element, null).getPropertyValue(name) : null;
}
/**
 * @param {string} styles
 * @returns {void}
 */


function includeStyle(styles) {
  window__WEBPACK_IMPORTED_MODULE_7___default.a.document.write(unescape('%3Csty' + 'le%3E' + styles + '"%3E%3C/' + 'sty' + 'le%3E')); // eslint-disable-line no-useless-concat
}
/**
 * @param {string} src
 * @returns {void}
 */


function includeScr(src) {
  window__WEBPACK_IMPORTED_MODULE_7___default.a.document.write(unescape('%3Csc' + 'ript type="text/jav' + 'ascr' + 'ipt" data-cfasync="false" sr' + 'c="' + src + '"%3E%3C/' + 'scr' + 'ipt%3E')); // eslint-disable-line no-useless-concat
}
/**
 * @returns {boolean}
 */


function includeLayout() {
  var app = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-app');

  __webpack_require__(/*! Styles/@Boot.css */ 508);

  if (app) {
    var layout = __webpack_require__(/*! Html/Layout.html */ 513);

    app.innerHTML = ((layout && layout.default ? layout.default : layout) || '').replace(/[\r\n\t]+/g, '');
    return true;
  }

  return false;
}
/**
 * @param {boolean} admin = false
 * @param {boolean} mobile = false
 * @param {boolean} mobileDevice = false
 * @returns {void}
 */


function includeAppScr(_ref) {
  var _ref$admin = _ref.admin,
      admin = _ref$admin === void 0 ? false : _ref$admin,
      _ref$mobile = _ref.mobile,
      mobile = _ref$mobile === void 0 ? false : _ref$mobile,
      _ref$mobileDevice = _ref.mobileDevice,
      mobileDevice = _ref$mobileDevice === void 0 ? false : _ref$mobileDevice;
  var src = './?/';
  src += admin ? 'Admin' : '';
  src += 'AppData@';
  src += mobile ? 'mobile' : 'no-mobile';
  src += mobileDevice ? '-1' : '-0';
  src += '/';
  includeScr(src + (window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah ? window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah() || '0' : '0') + '/' + window__WEBPACK_IMPORTED_MODULE_7___default.a.Math.random().toString().substr(2) + '/');
}
/**
 * @returns {object}
 */


function getRainloopBootData() {
  var result = {};
  var meta = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('app-boot-data');

  if (meta && meta.getAttribute) {
    result = JSON.parse(meta.getAttribute('content')) || {};
  }

  return result;
}
/**
 * @param {string} additionalError
 * @returns {void}
 */


function showError(additionalError) {
  var oR = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-loading'),
      oL = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-loading-error'),
      oLA = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-loading-error-additional');

  if (oR) {
    oR.style.display = 'none';
  }

  if (oL) {
    oL.style.display = 'block';
  }

  if (oLA && additionalError) {
    oLA.style.display = 'block';
    oLA.innerHTML = additionalError;
  }

  if (progressJs__WEBPACK_IMPORTED_MODULE_8___default.a) {
    progressJs__WEBPACK_IMPORTED_MODULE_8___default.a.set(100).end();
  }
}
/**
 * @param {string} description
 * @returns {void}
 */


function showDescriptionAndLoading(description) {
  var oE = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-loading'),
      oElDesc = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('rl-loading-desc');

  if (oElDesc && description) {
    oElDesc.innerHTML = description;
  }

  if (oE && oE.style) {
    oE.style.opacity = 0;
    window__WEBPACK_IMPORTED_MODULE_7___default.a.setTimeout(function () {
      oE.style.opacity = 1;
    }, 300);
  }
}
/**
 * @param {boolean} withError
 * @param {string} additionalError
 * @returns {void}
 */


function runMainBoot(withError, additionalError) {
  if (window__WEBPACK_IMPORTED_MODULE_7___default.a.__APP_BOOT && !withError) {
    window__WEBPACK_IMPORTED_MODULE_7___default.a.__APP_BOOT(function () {
      showError(additionalError);
    });
  } else {
    showError(additionalError);
  }
}
/**
 * @returns {void}
 */


function runApp() {
  var appData = window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah_data();

  if (Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"] && progressJs__WEBPACK_IMPORTED_MODULE_8___default.a && appData && appData.TemplatesLink && appData.LangLink && appData.StaticLibJsLink && appData.StaticAppJsLink && appData.StaticAppJsNextLink && appData.StaticEditorJsLink) {
    var p = progressJs__WEBPACK_IMPORTED_MODULE_8___default.a;
    p.setOptions({
      theme: 'rainloop'
    });
    p.start().set(5);

    var libs = function libs() {
      return Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(appData.StaticLibJsLink).then(function () {
        if (window__WEBPACK_IMPORTED_MODULE_7___default.a.$) {
          window__WEBPACK_IMPORTED_MODULE_7___default.a.$('#rl-check').remove();

          if (appData.IncludeBackground) {
            window__WEBPACK_IMPORTED_MODULE_7___default.a.$('#rl-bg').attr('style', 'background-image: none !important;').backstretch(appData.IncludeBackground.replace('{{USER}}', window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah ? window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah() || '0' : '0'), {
              fade: 100,
              centeredX: true,
              centeredY: true
            }).removeAttr('style');
          }
        }
      });
    };

    libs().then(function () {
      p.set(20);
      return window__WEBPACK_IMPORTED_MODULE_7___default.a.Promise.all([Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(appData.TemplatesLink), Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(appData.LangLink)]);
    }).then(function () {
      p.set(30);
      return Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(useJsNextBundle ? appData.StaticAppJsNextLink : appData.StaticAppJsLink);
    }).then(function () {
      p.set(50);
      return appData.PluginsLink ? Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(appData.PluginsLink) : window__WEBPACK_IMPORTED_MODULE_7___default.a.Promise.resolve();
    }).then(function () {
      p.set(70);
      runMainBoot(false);
    }).catch(function (e) {
      runMainBoot(true);
      throw e;
    }).then(function () {
      return Object(Common_Jassl__WEBPACK_IMPORTED_MODULE_9__[/* jassl */ "a"])(appData.StaticEditorJsLink);
    }).then(function () {
      if (window__WEBPACK_IMPORTED_MODULE_7___default.a.CKEDITOR && window__WEBPACK_IMPORTED_MODULE_7___default.a.__initEditor) {
        window__WEBPACK_IMPORTED_MODULE_7___default.a.__initEditor();

        window__WEBPACK_IMPORTED_MODULE_7___default.a.__initEditor = null;
      }
    });
  } else {
    runMainBoot(true);
  }
}
/**
 * @param {mixed} data
 * @returns {void}
 */


window__WEBPACK_IMPORTED_MODULE_7___default.a.__initAppData = function (data) {
  RL_APP_DATA_STORAGE = data;

  window__WEBPACK_IMPORTED_MODULE_7___default.a.__rlah_set();

  if (RL_APP_DATA_STORAGE) {
    if (RL_APP_DATA_STORAGE.NewThemeLink) {
      (window__WEBPACK_IMPORTED_MODULE_7___default.a.document.getElementById('app-theme-link') || {}).href = RL_APP_DATA_STORAGE.NewThemeLink;
    }

    if (RL_APP_DATA_STORAGE.IncludeCss) {
      includeStyle(RL_APP_DATA_STORAGE.IncludeCss);
    }

    showDescriptionAndLoading(RL_APP_DATA_STORAGE.LoadingDescriptionEsc || '');
  }

  runApp();
};
/**
 * @returns {void}
 */


window__WEBPACK_IMPORTED_MODULE_7___default.a.__runBoot = function () {
  if (!window__WEBPACK_IMPORTED_MODULE_7___default.a.navigator || !window__WEBPACK_IMPORTED_MODULE_7___default.a.navigator.cookieEnabled) {
    window__WEBPACK_IMPORTED_MODULE_7___default.a.document.location.replace('./?/NoCookie');
  }

  var root = window__WEBPACK_IMPORTED_MODULE_7___default.a.document.documentElement;

  if ('none' !== getComputedStyle('rl-check', 'display')) {
    root.className += ' no-css';
  }

  if (useJsNextBundle) {
    root.className += ' js-next';
  }

  if (includeLayout()) {
    includeAppScr(getRainloopBootData());
  }
};

/***/ }),
/* 508 */
/*!******************************!*\
  !*** ./dev/Styles/@Boot.css ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./@Boot.css */ 509);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 511)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 509 */
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dev/Styles/@Boot.css ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 510)(false);
// Module
exports.push([module.i, "\n#rl-content{\n\tdisplay: none;\n}\n\n.internal-hiddden{\n\tdisplay: none !important;\n}\n\nhtml.no-css, html.no-css body {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: Arial, Verdana, Geneva, sans-serif;\n\tbackground-color: #eee;\n}\n\nhtml.no-css #rl-content, html.no-css #rl-loading{\n\tdisplay: none;\n}\n\nhtml.no-css #rl-loading-error {\n\tposition: absolute;\n\tfont-size: 30px;\n\tline-height: 130%;\n\ttop: 50%;\n\twidth: 100%;\n\theight: 65px;\n\tmargin: 0;\n\tmargin-top: -60px;\n\tbackground-color: transparent;\n\ttext-align: center;\n\tcolor: #333;\n}\n\nhtml.no-css .progressjs-container {\n\tdisplay: none;\n}\n\nhtml.no-css .thm-body {\n\tcolor: #333;\n\tbackground-color: #aaa;\n\tbackground-image: none;\n}\n\nhtml.no-css .thm-loading {\n\tcolor: #333 !important;\n\ttext-shadow: none !important;\n}\n\nhtml.no-css .thm-loading .e-spinner .e-bounce {\n\tdisplay: none !important;\n}\n\nhtml.no-css .thm-login-desc .desc {\n\tcolor: #333 !important;\n\ttext-shadow: none !important;\n}\n", ""]);


/***/ }),
/* 510 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 511 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 512);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 512 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 513 */
/*!******************************!*\
  !*** ./dev/Html/Layout.html ***!
  \******************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"rl-bg\" class=\"thm-body\"></div>\n<div id=\"rl-loading\" class=\"thm-loading\" style=\"opacity:0\">\n\t<div id=\"rl-loading-desc\"></div>\n\t<div class=\"e-spinner\">\n\t\t<div class=\"e-bounce bounce1\"></div>\n\t\t<div class=\"e-bounce bounce2\"></div>\n\t\t<div class=\"e-bounce bounce3\"></div>\n\t</div>\n</div>\n<div id=\"rl-loading-error\" class=\"thm-loading\">\n\tAn error occurred. <br /> Please refresh the page and try again.\n\t<div id=\"rl-loading-error-additional\"></div>\n</div>\n<div id=\"rl-content\">\n\t<div id=\"rl-popups\"></div>\n\t<div id=\"rl-center\">\n\t\t<div id=\"rl-top\"></div>\n\t\t<div id=\"rl-left\"></div>\n\t\t<div id=\"rl-right\"></div>\n\t\t<div id=\"rl-bottom\"></div>\n\t</div>\n</div>\n<div id=\"rl-templates\"></div>\n<div id=\"rl-hidden\"></div>");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cucHJvZ3Jlc3NKc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2JpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvQ29tbW9uL0phc3NsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvU3RvcmFnZS9SYWluTG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LWRhdGFzZXQvbGliL2Jyb3dzZXIvaW5kZXguZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3ZlbmRvcnMvUHJvZ3Jlc3MuanMvc3JjL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uL2Rldi9ib290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbjMvbGliL2pzb24zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIvaW50ZXJzZWN0aW9uLW9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3ZlbmRvcnMvbW9kZXJuaXpyL21vZGVybml6ci1jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L0NvbW1vbi9Cb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGV2L1N0eWxlcy9AQm9vdC5jc3M/ZjE0ZSIsIndlYnBhY2s6Ly8vLi9kZXYvU3R5bGVzL0BCb290LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2Rldi9IdG1sL0xheW91dC5odG1sIl0sIm5hbWVzIjpbImphc3NsIiwic3JjIiwiYXN5bmMiLCJ3aW5kb3ciLCJQcm9taXNlIiwiYWxsIiwiRXJyb3IiLCJyZXNvbHZlIiwicmVqZWN0IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJTVE9SQUdFX0tFWSIsIlRJTUVfS0VZIiwiaXNTdG9yYWdlU3VwcG9ydGVkIiwic3RvcmFnZU5hbWUiLCJzdG9yYWdlSXNBdmFpbGFibGUiLCJzZXRJdGVtIiwiZSIsInMiLCJrZXkiLCJNYXRoIiwicmFuZG9tIiwiZ2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJTRVNTX1NUT1JBR0UiLCJzZXNzaW9uU3RvcmFnZSIsIldJTl9TVE9SQUdFIiwidG9wIiwiX19nZXQiLCJyZXN1bHQiLCJKU09OIiwiZGF0YSIsIm5hbWUiLCJ0b1N0cmluZyIsInN1YnN0ciIsInBhcnNlIiwiX19zZXQiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsInRpbWVzdGFtcCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJzZXRUaW1lc3RhbXAiLCJnZXRUaW1lc3RhbXAiLCJ0aW1lIiwicGFyc2VJbnQiLCJnZXRIYXNoIiwic2V0SGFzaCIsImFwcERhdGEiLCJfX3JsYWhfZGF0YSIsImNsZWFySGFzaCIsImNoZWNrVGltZXN0YW1wIiwic2V0SW50ZXJ2YWwiLCJlbGVtZW50RGF0YXNldFBvbHlmaWxsIiwicmVxdWlyZSIsInByb2dyZXNzSnMiLCJvbmJlZm9yZWVuZCIsIl8kIiwiJCIsImhpZGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiX19ydW5Cb290IiwiUkxfQVBQX0RBVEFfU1RPUkFHRSIsIl9fcmxhaCIsIl9fcmxhaF9zZXQiLCJfX3JsYWhfY2xlYXIiLCJ1c2VKc05leHRCdW5kbGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiaWQiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJpbmNsdWRlU3R5bGUiLCJzdHlsZXMiLCJ3cml0ZSIsInVuZXNjYXBlIiwiaW5jbHVkZVNjciIsImluY2x1ZGVMYXlvdXQiLCJhcHAiLCJsYXlvdXQiLCJpbm5lckhUTUwiLCJkZWZhdWx0IiwicmVwbGFjZSIsImluY2x1ZGVBcHBTY3IiLCJhZG1pbiIsIm1vYmlsZSIsIm1vYmlsZURldmljZSIsImdldFJhaW5sb29wQm9vdERhdGEiLCJtZXRhIiwiZ2V0QXR0cmlidXRlIiwic2hvd0Vycm9yIiwiYWRkaXRpb25hbEVycm9yIiwib1IiLCJvTCIsIm9MQSIsInN0eWxlIiwiZGlzcGxheSIsInNldCIsImVuZCIsInNob3dEZXNjcmlwdGlvbkFuZExvYWRpbmciLCJkZXNjcmlwdGlvbiIsIm9FIiwib0VsRGVzYyIsIm9wYWNpdHkiLCJydW5NYWluQm9vdCIsIndpdGhFcnJvciIsIl9fQVBQX0JPT1QiLCJydW5BcHAiLCJUZW1wbGF0ZXNMaW5rIiwiTGFuZ0xpbmsiLCJTdGF0aWNMaWJKc0xpbmsiLCJTdGF0aWNBcHBKc0xpbmsiLCJTdGF0aWNBcHBKc05leHRMaW5rIiwiU3RhdGljRWRpdG9ySnNMaW5rIiwicCIsInNldE9wdGlvbnMiLCJ0aGVtZSIsInN0YXJ0IiwibGlicyIsInRoZW4iLCJJbmNsdWRlQmFja2dyb3VuZCIsImF0dHIiLCJiYWNrc3RyZXRjaCIsImZhZGUiLCJjZW50ZXJlZFgiLCJjZW50ZXJlZFkiLCJyZW1vdmVBdHRyIiwiUGx1Z2luc0xpbmsiLCJjYXRjaCIsIkNLRURJVE9SIiwiX19pbml0RWRpdG9yIiwiX19pbml0QXBwRGF0YSIsIk5ld1RoZW1lTGluayIsImhyZWYiLCJJbmNsdWRlQ3NzIiwiTG9hZGluZ0Rlc2NyaXB0aW9uRXNjIiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsImxvY2F0aW9uIiwicm9vdCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsYUFBYSxtQkFBTyxDQUFDLDZCQUFxQjtBQUMxQyxVQUFVLG1CQUFPLENBQUMsMkJBQWtCO0FBQ3BDLG9CQUFvQixtQkFBTyxDQUFDLHFDQUE0Qjs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsZUFBZSxtQkFBTyxDQUFDLGdDQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsK0JBQStCLG1CQUFPLENBQUMseURBQWlEO0FBQ3hGLFdBQVcsbUJBQU8sQ0FBQywyQkFBbUI7QUFDdEMsZUFBZSxtQkFBTyxDQUFDLCtCQUF1QjtBQUM5QyxnQkFBZ0IsbUJBQU8sQ0FBQyxpQ0FBeUI7QUFDakQsZ0NBQWdDLG1CQUFPLENBQUMsbURBQTBDO0FBQ2xGLGVBQWUsbUJBQU8sQ0FBQyxpQ0FBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtREFBbUQ7QUFDbkQsR0FBRztBQUNILGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkEsa0JBQWtCLG1CQUFPLENBQUMsa0NBQTBCO0FBQ3BELDJCQUEyQixtQkFBTyxDQUFDLDZDQUFxQztBQUN4RSwrQkFBK0IsbUJBQU8sQ0FBQyxpREFBeUM7O0FBRWhGO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEEsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0phO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLDZCQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsbUNBQTBCOztBQUU3QyxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ05ELGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxZQUFZLG1CQUFPLENBQUMsNEJBQW9COztBQUV4QztBQUNBO0FBQ0EsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQSxrQkFBa0IsbUJBQU8sQ0FBQyxrQ0FBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsNkNBQXFDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3JCQSxhQUFhLG1CQUFPLENBQUMsNkJBQXFCO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsV0FBVyxtQkFBTyxDQUFDLDJCQUFtQjtBQUN0QyxVQUFVLG1CQUFPLENBQUMsMEJBQWtCO0FBQ3BDLGdCQUFnQixtQkFBTyxDQUFDLGlDQUF5QjtBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQywwQ0FBaUM7QUFDdEUsMEJBQTBCLG1CQUFPLENBQUMscUNBQTZCOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN0Q0QsZUFBZSxtQkFBTyxDQUFDLCtCQUF1QjtBQUM5QyxlQUFlLG1CQUFPLENBQUMsd0NBQStCOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRTs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixvQ0FBb0MsbUJBQU8sQ0FBQywwREFBaUQ7QUFDN0YsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsaUNBQXdCO0FBQy9DLGVBQWUsbUJBQU8sQ0FBQyxnQ0FBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsaUNBQXlCO0FBQ2pELDZCQUE2QixtQkFBTyxDQUFDLCtDQUF1QztBQUM1RSx5QkFBeUIsbUJBQU8sQ0FBQyw0Q0FBbUM7QUFDcEUsaUJBQWlCLG1CQUFPLENBQUMsNENBQW1DOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM3SEQsa0JBQWtCLG1CQUFPLENBQUMsa0NBQTBCO0FBQ3BELHFCQUFxQixtQkFBTyxDQUFDLHNDQUE2QjtBQUMxRCxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLG9DQUEyQjs7QUFFckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxXQUFXLG1CQUFPLENBQUMsNEJBQW1CO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7OztBQ0pBLFFBQVEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLDZCQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyxrQ0FBeUI7O0FBRWpEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkQ7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyxzQ0FBNkI7QUFDekQsNkJBQTZCLG1CQUFPLENBQUMsK0NBQXVDOztBQUU1RTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLGdCQUFnQixtQkFBTyxDQUFDLGlDQUF5Qjs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFOzs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxtQkFBTyxDQUFDLDZCQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyxpQ0FBeUI7QUFDakQsY0FBYyxtQkFBTyxDQUFDLDhCQUFzQjs7QUFFNUM7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0EscUVBQXFFO0FBQ3JFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ2JELGVBQWUsbUJBQU8sQ0FBQywrQkFBdUI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxrQkFBa0IsbUJBQU8sQ0FBQyxrQ0FBMEI7QUFDcEQsaUNBQWlDLG1CQUFPLENBQUMscURBQTRDO0FBQ3JGLCtCQUErQixtQkFBTyxDQUFDLGlEQUF5QztBQUNoRixzQkFBc0IsbUJBQU8sQ0FBQyx3Q0FBZ0M7QUFDOUQsa0JBQWtCLG1CQUFPLENBQUMsb0NBQTJCO0FBQ3JELFVBQVUsbUJBQU8sQ0FBQywwQkFBa0I7QUFDcEMscUJBQXFCLG1CQUFPLENBQUMsc0NBQTZCOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxhQUFhLG1CQUFPLENBQUMsNkJBQXFCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQywyQkFBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVEEsc0JBQXNCLG1CQUFPLENBQUMsdUNBQThCO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyxXQUFXLG1CQUFPLENBQUMsMkJBQW1CO0FBQ3RDLGdCQUFnQixtQkFBTyxDQUFDLDBCQUFrQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyxrQ0FBeUI7QUFDakQsaUJBQWlCLG1CQUFPLENBQUMsbUNBQTBCOztBQUVuRDtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVEYTtBQUNiLGVBQWUsbUJBQU8sQ0FBQywrQkFBdUI7QUFDOUMsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyxZQUFZLG1CQUFPLENBQUMsNEJBQW9CO0FBQ3hDLFlBQVksbUJBQU8sQ0FBQyxvQ0FBMkI7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsNkJBQTZCLDBCQUEwQixZQUFZLEVBQUU7QUFDMUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsZUFBZTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQSxtQzs7Ozs7Ozs7Ozs7OztBQ0FBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsZUFBZSxtQkFBTyxDQUFDLGdDQUF3Qjs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7OztBQ0FBLGdCQUFnQixtQkFBTyxDQUFDLGlDQUF5Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQSxpQkFBaUIsbUJBQU8sQ0FBQyxtQ0FBMkI7O0FBRXBEOzs7Ozs7Ozs7Ozs7O0FDRmE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQyxpQ0FBeUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NmQTs7QUFFQTs7Ozs7O0FBS08sU0FBU0EsS0FBVCxDQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUFtQztBQUFBLE1BQWZBLEtBQWU7QUFBZkEsU0FBZSxHQUFQLEtBQU87QUFBQTs7QUFDekMsTUFBSSxDQUFDQyw2Q0FBTSxDQUFDQyxPQUFSLElBQW1CLENBQUNELDZDQUFNLENBQUNDLE9BQVAsQ0FBZUMsR0FBdkMsRUFBNEM7QUFDM0MsVUFBTSxJQUFJQyxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUNBOztBQUVELE1BQUksQ0FBQ0wsR0FBTCxFQUFVO0FBQ1QsVUFBTSxJQUFJSyxLQUFKLENBQVUsMEJBQVYsQ0FBTjtBQUNBOztBQUVELFNBQU8sSUFBSUgsNkNBQU0sQ0FBQ0MsT0FBWCxDQUFtQixVQUFDRyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDOUMsUUFBTUMsT0FBTyxHQUFHTiw2Q0FBTSxDQUFDTyxRQUFQLENBQWdCQyxhQUFoQixDQUE4QixRQUE5QixDQUFoQjs7QUFFQUYsV0FBTyxDQUFDRyxNQUFSLEdBQWlCLFlBQU07QUFDdEJMLGFBQU8sQ0FBQ04sR0FBRCxDQUFQO0FBQ0EsS0FGRDs7QUFJQVEsV0FBTyxDQUFDSSxPQUFSLEdBQWtCLFlBQU07QUFDdkJMLFlBQU0sQ0FBQyxJQUFJRixLQUFKLENBQVVMLEdBQVYsQ0FBRCxDQUFOO0FBQ0EsS0FGRDs7QUFJQVEsV0FBTyxDQUFDUCxLQUFSLEdBQWdCLFNBQVNBLEtBQXpCO0FBQ0FPLFdBQU8sQ0FBQ1IsR0FBUixHQUFjQSxHQUFkO0FBRUFFLGlEQUFNLENBQUNPLFFBQVAsQ0FBZ0JJLElBQWhCLENBQXFCQyxXQUFyQixDQUFpQ04sT0FBakM7QUFDQSxHQWZNO0FBZUo7Ozs7Ozs7Ozs7OztBQWZIO0FBNkJBLEM7Ozs7Ozs7Ozs7O0FDL0NELGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsVUFBVSxtQkFBTyxDQUFDLDJCQUFrQjs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxpQkFBaUIsbUJBQU8sQ0FBQyw2QkFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEscUJBQXFCLG1CQUFPLENBQUMsNkNBQXFDO0FBQ2xFLFVBQVUsbUJBQU8sQ0FBQywwQkFBa0I7QUFDcEMsc0JBQXNCLG1CQUFPLENBQUMsd0NBQWdDOztBQUU5RDs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLGlDQUFpQztBQUN4RTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyx5QkFBZ0I7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBLFlBQVksbUJBQU8sQ0FBQyw0QkFBb0I7QUFDeEMsY0FBYyxtQkFBTyxDQUFDLGtDQUEwQjs7QUFFaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1pELDZCQUE2QixtQkFBTyxDQUFDLCtDQUF1Qzs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05hO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLDZCQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsOEJBQXNCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsV0FBVyxtQkFBTyxDQUFDLDRCQUFtQjtBQUN0QyxrQkFBa0IsbUJBQU8sQ0FBQyxvQ0FBMkI7QUFDckQscUJBQXFCLG1CQUFPLENBQUMseUNBQWdDO0FBQzdELGlCQUFpQixtQkFBTyxDQUFDLG1DQUEwQjtBQUNuRCxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCO0FBQy9DLGdCQUFnQixtQkFBTyxDQUFDLGlDQUF5QjtBQUNqRCxpQkFBaUIsbUJBQU8sQ0FBQyxtQ0FBMEI7QUFDbkQsY0FBYyxtQkFBTyxDQUFDLGtDQUEwQjtBQUNoRCxjQUFjLG1CQUFPLENBQUMsK0JBQXNCO0FBQzVDLGtDQUFrQyxtQkFBTyxDQUFDLHNEQUE2QztBQUN2Rix5QkFBeUIsbUJBQU8sQ0FBQywyQ0FBa0M7QUFDbkUsV0FBVyxtQkFBTyxDQUFDLDRCQUFtQjtBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQyxpQ0FBd0I7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsdUNBQThCO0FBQzNELHVCQUF1QixtQkFBTyxDQUFDLDBDQUFpQztBQUNoRSxpQ0FBaUMsbUJBQU8sQ0FBQyw4Q0FBcUM7QUFDOUUsY0FBYyxtQkFBTyxDQUFDLCtCQUFzQjtBQUM1QyxnQkFBZ0IsbUJBQU8sQ0FBQyxrQ0FBeUI7QUFDakQsMEJBQTBCLG1CQUFPLENBQUMscUNBQTZCO0FBQy9ELGVBQWUsbUJBQU8sQ0FBQyxpQ0FBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsd0NBQWdDOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGVBQWU7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsK0NBQStDO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLEdBQUcsMkNBQTJDO0FBQzlDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRyw4Q0FBOEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELEdBQUcseURBQXlEO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BXRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQSxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBLGtCQUFrQixtQkFBTyxDQUFDLGtDQUEwQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMsNEJBQW9CO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLCtDQUFzQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEMsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ1RELGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7O0FBRTFDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsWUFBWSxtQkFBTyxDQUFDLDRCQUFvQjs7QUFFeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcEJBLGlCQUFpQixtQkFBTyxDQUFDLGtDQUEwQjtBQUNuRCxzQkFBc0IsbUJBQU8sQ0FBQyx3Q0FBZ0M7O0FBRTlEO0FBQ0E7QUFDQSxnREFBZ0Qsa0JBQWtCLEVBQUU7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxnQkFBZ0I7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEJBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLDRCQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsa0NBQTBCO0FBQ2hELFdBQVcsbUJBQU8sQ0FBQyxvQ0FBMkI7QUFDOUMsV0FBVyxtQkFBTyxDQUFDLDRCQUFtQjtBQUN0QyxvQkFBb0IsbUJBQU8sQ0FBQywrQ0FBc0M7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEdhO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLDJCQUFtQjtBQUN0QyxlQUFlLG1CQUFPLENBQUMsK0JBQXVCO0FBQzlDLFlBQVksbUJBQU8sQ0FBQyw0QkFBb0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsd0NBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLG1DQUEwQjs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUIsYUFBYTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsV0FBVztBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyw0Q0FBNEM7QUFDNUU7QUFDQTtBQUNBLDJCQUEyQix1Q0FBdUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVGQSxjQUFjLG1CQUFPLENBQUMsdUJBQWU7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsd0JBQWU7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxVQUFVLG1CQUFPLENBQUMsMEJBQWtCO0FBQ3BDLHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQztBQUM5RCxjQUFjLG1CQUFPLENBQUMsc0NBQTZCO0FBQ25ELGlCQUFpQixtQkFBTyxDQUFDLG1DQUEwQjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkEsaUJBQWlCLG1CQUFPLENBQUMsbUNBQTJCOztBQUVwRDs7Ozs7Ozs7Ozs7O0FDRkEsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyw0QkFBNEIsbUJBQU8sQ0FBQyxnREFBdUM7QUFDM0UsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyxXQUFXLG1CQUFPLENBQUMsb0NBQTJCO0FBQzlDLHdCQUF3QixtQkFBTyxDQUFDLDJDQUFrQztBQUNsRSxtQ0FBbUMsbUJBQU8sQ0FBQyx3REFBK0M7O0FBRTFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGdCQUFnQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekNBLGVBQWUsbUJBQU8sQ0FBQyxnQ0FBd0I7QUFDL0MsZ0JBQWdCLG1CQUFPLENBQUMsaUNBQXlCO0FBQ2pELHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQzs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7OztBQ05BLFFBQVEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsaUNBQXdCOztBQUU3RDtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUVBLElBQU1PLFdBQVcsR0FBRyxPQUFwQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxPQUFqQjtBQUVBOzs7OztBQUlPLFNBQVNDLGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUMvQyxNQUFJQyxrQkFBa0IsR0FBRyxLQUF6Qjs7QUFDQSxNQUFJO0FBQ0g7QUFDQUEsc0JBQWtCLEdBQUdELFdBQVcsSUFBSWhCLDZDQUFmLElBQXlCQSw2Q0FBTSxDQUFDZ0IsV0FBRCxDQUEvQixJQUFnRGhCLDZDQUFNLENBQUNnQixXQUFELENBQU4sQ0FBb0JFLE9BQXpGO0FBQ0EsR0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVSxDQUFFLENBTGlDLENBS2hDOzs7QUFFZixNQUFJRixrQkFBSixFQUF3QjtBQUN2QixRQUFNRyxDQUFDLEdBQUdwQiw2Q0FBTSxDQUFDZ0IsV0FBRCxDQUFoQjtBQUFBLFFBQ0NLLEdBQUcsR0FBRyxzQkFBc0JyQiw2Q0FBTSxDQUFDc0IsSUFBUCxDQUFZQyxNQUFaLEVBRDdCOztBQUdBLFFBQUk7QUFDSEgsT0FBQyxDQUFDRixPQUFGLENBQVVHLEdBQVYsRUFBZUEsR0FBZjs7QUFDQSxVQUFJQSxHQUFHLEtBQUtELENBQUMsQ0FBQ0ksT0FBRixDQUFVSCxHQUFWLENBQVosRUFBNEI7QUFDM0JELFNBQUMsQ0FBQ0ssVUFBRixDQUFhSixHQUFiO0FBQ0EsZUFBTyxJQUFQO0FBQ0E7QUFDRCxLQU5ELENBTUUsT0FBT0YsQ0FBUCxFQUFVLENBQUUsQ0FWUyxDQVVSOztBQUNmOztBQUVELFNBQU8sS0FBUDtBQUNBO0FBRUQsSUFBTU8sWUFBWSxHQUFHWCxrQkFBa0IsQ0FBQyxnQkFBRCxDQUFsQixHQUF1Q2YsNkNBQU0sQ0FBQzJCLGNBQVAsSUFBeUIsSUFBaEUsR0FBdUUsSUFBNUY7QUFDQSxJQUFNQyxXQUFXLEdBQUc1Qiw2Q0FBTSxDQUFDNkIsR0FBUCxJQUFjN0IsNkNBQWQsSUFBd0IsSUFBNUM7O0FBRUEsSUFBTThCLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNULEdBQUQsRUFBUztBQUN0QixNQUFJVSxNQUFNLEdBQUcsSUFBYjs7QUFDQSxNQUFJTCxZQUFKLEVBQWtCO0FBQ2pCSyxVQUFNLEdBQUdMLFlBQVksQ0FBQ0YsT0FBYixDQUFxQkgsR0FBckIsS0FBNkIsSUFBdEM7QUFDQSxHQUZELE1BRU8sSUFBSU8sV0FBVyxJQUFJNUIsNkNBQU0sQ0FBQ2dDLElBQTFCLEVBQWdDO0FBQ3RDLFFBQU1DLElBQUksR0FDVEwsV0FBVyxDQUFDTSxJQUFaLElBQW9CLFFBQVFOLFdBQVcsQ0FBQ00sSUFBWixDQUFpQkMsUUFBakIsR0FBNEJDLE1BQTVCLENBQW1DLENBQW5DLEVBQXNDLENBQXRDLENBQTVCLEdBQ0dwQyw2Q0FBTSxDQUFDZ0MsSUFBUCxDQUFZSyxLQUFaLENBQWtCVCxXQUFXLENBQUNNLElBQVosQ0FBaUJDLFFBQWpCLEVBQWxCLENBREgsR0FFRyxJQUhKO0FBSUFKLFVBQU0sR0FBR0UsSUFBSSxHQUFHQSxJQUFJLENBQUNaLEdBQUQsQ0FBSixJQUFhLElBQWhCLEdBQXVCLElBQXBDO0FBQ0E7O0FBRUQsU0FBT1UsTUFBUDtBQUNBLENBYkQ7O0FBZUEsSUFBTU8sS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ2pCLEdBQUQsRUFBTWtCLEtBQU4sRUFBZ0I7QUFDN0IsTUFBSWIsWUFBSixFQUFrQjtBQUNqQkEsZ0JBQVksQ0FBQ1IsT0FBYixDQUFxQkcsR0FBckIsRUFBMEJrQixLQUExQjtBQUNBLEdBRkQsTUFFTyxJQUFJWCxXQUFXLElBQUk1Qiw2Q0FBTSxDQUFDZ0MsSUFBMUIsRUFBZ0M7QUFDdEMsUUFBSUMsSUFBSSxHQUNQTCxXQUFXLENBQUNNLElBQVosSUFBb0IsUUFBUU4sV0FBVyxDQUFDTSxJQUFaLENBQWlCQyxRQUFqQixHQUE0QkMsTUFBNUIsQ0FBbUMsQ0FBbkMsRUFBc0MsQ0FBdEMsQ0FBNUIsR0FDR3BDLDZDQUFNLENBQUNnQyxJQUFQLENBQVlLLEtBQVosQ0FBa0JULFdBQVcsQ0FBQ00sSUFBWixDQUFpQkMsUUFBakIsRUFBbEIsQ0FESCxHQUVHLElBSEo7QUFJQUYsUUFBSSxHQUFHQSxJQUFJLElBQUksRUFBZjtBQUNBQSxRQUFJLENBQUNaLEdBQUQsQ0FBSixHQUFZa0IsS0FBWjtBQUVBWCxlQUFXLENBQUNNLElBQVosR0FBbUJsQyw2Q0FBTSxDQUFDZ0MsSUFBUCxDQUFZUSxTQUFaLENBQXNCUCxJQUF0QixDQUFuQjtBQUNBO0FBQ0QsQ0FiRDs7QUFlQSxJQUFNUSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU16Qyw2Q0FBTSxDQUFDc0IsSUFBUCxDQUFZb0IsS0FBWixDQUFrQixJQUFJMUMsNkNBQU0sQ0FBQzJDLElBQVgsR0FBa0JDLE9BQWxCLEtBQThCLElBQWhELENBQU47QUFBQSxDQUFsQjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU1QLEtBQUssQ0FBQ3hCLFFBQUQsRUFBVzJCLFNBQVMsRUFBcEIsQ0FBWDtBQUFBLENBQXJCOztBQUVBLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDMUIsTUFBTUMsSUFBSSxHQUFHakIsS0FBSyxDQUFDaEIsUUFBRCxFQUFXLENBQVgsQ0FBbEI7O0FBQ0EsU0FBT2lDLElBQUksR0FBRy9DLDZDQUFNLENBQUNnRCxRQUFQLENBQWdCRCxJQUFoQixFQUFzQixFQUF0QixLQUE2QixDQUFoQyxHQUFvQyxDQUEvQztBQUNBLENBSEQ7QUFLQTs7Ozs7QUFHTyxTQUFTRSxPQUFULEdBQW1CO0FBQ3pCLFNBQU9uQixLQUFLLENBQUNqQixXQUFELENBQVo7QUFDQTtBQUVEOzs7O0FBR08sU0FBU3FDLE9BQVQsR0FBbUI7QUFDekIsTUFBTTdCLEdBQUcsR0FBRyxpQkFBWjtBQUFBLE1BQ0M4QixPQUFPLEdBQUduRCw2Q0FBTSxDQUFDb0QsV0FBUCxFQURYOztBQUdBZCxPQUFLLENBQUN6QixXQUFELEVBQWNzQyxPQUFPLElBQUlBLE9BQU8sQ0FBQzlCLEdBQUQsQ0FBbEIsR0FBMEI4QixPQUFPLENBQUM5QixHQUFELENBQWpDLEdBQXlDLEVBQXZELENBQUw7O0FBQ0F3QixjQUFZO0FBQ1o7QUFFRDs7OztBQUdPLFNBQVNRLFNBQVQsR0FBcUI7QUFDM0JmLE9BQUssQ0FBQ3pCLFdBQUQsRUFBYyxFQUFkLENBQUw7O0FBQ0FnQyxjQUFZO0FBQ1o7QUFFRDs7OztBQUdPLFNBQVNTLGNBQVQsR0FBMEI7QUFDaEMsTUFBSWIsU0FBUyxLQUFLSyxZQUFZLEtBQUssT0FBTyxFQUFQLEdBQVksRUFBL0MsRUFBbUQ7QUFDbEQ7QUFDQU8sYUFBUztBQUNULFdBQU8sSUFBUDtBQUNBOztBQUNELFNBQU8sS0FBUDtBQUNBLEMsQ0FFRDs7QUFDQXJELDZDQUFNLENBQUN1RCxXQUFQLENBQW1CVixZQUFuQixFQUFpQyxPQUFPLEVBQXhDLEUsQ0FBNkMsSzs7Ozs7Ozs7Ozs7Ozs7O0FDakhoQztBQUNiLGFBQWEsbUJBQU8sQ0FBQyx3Q0FBK0I7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYixtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxnRkFBZ0YsT0FBTzs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1pELHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLHlDQUFnQzs7QUFFOUQscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWSxlQUFlO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBOzs7Ozs7Ozs7Ozs7O0FDQUEsZUFBZSxtQkFBTyxDQUFDLGdDQUF3QjtBQUMvQyxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCO0FBQy9DLDJCQUEyQixtQkFBTyxDQUFDLDhDQUFxQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hhO0FBQ2IsZUFBZSxtQkFBTyxDQUFDLGdDQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsNkJBQTZCLG1CQUFPLENBQUMsMENBQWlDOztBQUV0RTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTEEsVUFBVSxtQkFBTyxDQUFDLDBCQUFrQjtBQUNwQyxjQUFjLG1CQUFPLENBQUMsZ0NBQXVCO0FBQzdDLHFDQUFxQyxtQkFBTyxDQUFDLHlEQUFpRDtBQUM5RiwyQkFBMkIsbUJBQU8sQ0FBQyw2Q0FBcUM7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYkEsaUJBQWlCLG1CQUFPLENBQUMsbUNBQTJCO0FBQ3BELGdDQUFnQyxtQkFBTyxDQUFDLHFEQUE0QztBQUNwRixrQ0FBa0MsbUJBQU8sQ0FBQyx1REFBOEM7QUFDeEYsZUFBZSxtQkFBTyxDQUFDLGdDQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSx5QkFBeUIsbUJBQU8sQ0FBQyw0Q0FBbUM7QUFDcEUsa0JBQWtCLG1CQUFPLENBQUMscUNBQTRCOztBQUV0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSxnQkFBZ0IsbUJBQU8sQ0FBQyxpQ0FBeUI7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLDRCQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDTlk7QUFDYixjQUFjLG1CQUFPLENBQUMsK0JBQXNCO0FBQzVDLHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQzs7QUFFOUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELGdCQUFnQixtQkFBTyxDQUFDLGlDQUF5QjtBQUNqRCw2QkFBNkIsbUJBQU8sQ0FBQywrQ0FBdUM7O0FBRTVFLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJBLGVBQWUsbUJBQU8sQ0FBQywrQkFBdUI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTGE7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQyxtQ0FBMkI7QUFDcEQsMkJBQTJCLG1CQUFPLENBQUMsNkNBQXFDO0FBQ3hFLHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQztBQUM5RCxrQkFBa0IsbUJBQU8sQ0FBQyxrQ0FBMEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQyxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDSkEsc0JBQXNCLG1CQUFPLENBQUMsd0NBQWdDO0FBQzlELGdCQUFnQixtQkFBTyxDQUFDLGdDQUF3Qjs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEsY0FBYyxtQkFBTyxDQUFDLCtCQUFzQjtBQUM1QyxnQkFBZ0IsbUJBQU8sQ0FBQyxnQ0FBd0I7QUFDaEQsc0JBQXNCLG1CQUFPLENBQUMsd0NBQWdDOztBQUU5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSxlQUFlLG1CQUFPLENBQUMsZ0NBQXdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBLHNCQUFzQixtQkFBTyxDQUFDLHdDQUFnQzs7QUFFOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxTQUFTLEVBQUU7QUFDekQsQ0FBQyxnQkFBZ0I7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQ0EsYUFBYSxtQkFBTyxDQUFDLDZCQUFxQjtBQUMxQywrQkFBK0IsbUJBQU8sQ0FBQyx5REFBaUQ7QUFDeEYsY0FBYyxtQkFBTyxDQUFDLGtDQUEwQjtBQUNoRCxnQkFBZ0IsbUJBQU8sQ0FBQyw0QkFBbUI7QUFDM0MsZ0JBQWdCLG1CQUFPLENBQUMsa0NBQXlCOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQixFQUFFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUM1RUEsYUFBYSxtQkFBTyxDQUFDLDZCQUFxQjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsbUJBQVU7QUFDcEMsaUNBQWlDLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0hELGFBQWEsbUJBQU8sQ0FBQyw2QkFBcUI7QUFDMUMsV0FBVyxtQkFBTyxDQUFDLG1DQUEwQjtBQUM3QyxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBMEI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDYkQsNkJBQTZCLG1CQUFPLENBQUMsK0NBQXVDO0FBQzVFLGtCQUFrQixtQkFBTyxDQUFDLG1DQUEwQjs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixnREFBZ0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEdkM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGtCQUFrQixZQUFZLG1CQUFPLENBQUMsZ0VBQXVELHNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3RixhQUFhLG1CQUFPLENBQUMsb0JBQVc7QUFDaEMsV0FBVyxtQkFBTyxDQUFDLGtCQUFTO0FBQzVCLFVBQVUsbUJBQU8sQ0FBQyxpQkFBUTtBQUMxQixXQUFXLG1CQUFPLENBQUMsa0JBQVM7QUFDNUIsVUFBVSxtQkFBTyxDQUFDLGlCQUFRO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7Ozs7OztBQ0x6QyxlQUFlLG1CQUFPLENBQUMsdUJBQWM7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsNEJBQW1CO0FBQ2hELGtCQUFrQixtQkFBTyxDQUFDLDBCQUFpQjtBQUMzQzs7QUFFQSxZQUFZLG1CQUFPLENBQUMseUJBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkEsa0JBQWtCLG1CQUFPLENBQUMseUJBQWdCLE1BQU0sbUJBQU8sQ0FBQyxtQkFBVTtBQUNsRSwrQkFBK0IsbUJBQU8sQ0FBQyx3QkFBZSxnQkFBZ0IsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQ3ZHLENBQUM7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLHVCQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxxQkFBWTtBQUNsQyxjQUFjLG1CQUFPLENBQUMscUJBQVk7QUFDbEM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0Y7QUFDc0I7O0FBRXhHOztBQUVBO0FBQ0EsNkNBQTZDLCtGQUFnQyx1Q0FBdUMsK0ZBQWdDO0FBQ3BKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsdUJBQXVCO0FBQzVDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFVBQVUsbUZBQXNCO0FBQ2hDO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsK0VBQXNCLEVBQUM7Ozs7Ozs7Ozs7OztBQ3RFdEMsa0JBQWtCLFlBQVksbUJBQU8sQ0FBQyxvREFBMkMsc0I7Ozs7Ozs7Ozs7O0FDQWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUEyQjtBQUNqQztBQUNBO0FBQ0EsR0FBRyxNQUFNLEVBTU47QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0REFBNEQsZ0JBQWdCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsNERBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUFxRSxFQUFFO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDhJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsNERBQTRELGdCQUFnQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLOztBQUVBOztBQUVBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVk7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFLGdDQUFnQyxpQ0FBaUM7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyZ0JEO0FBQ0FXLHVFQUFzQjs7QUFFdEJDLG1CQUFPLENBQUMsZ0JBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnQ0FBRCxDQUFQOztBQUVBO0FBQ0E7QUFFQXpELDZDQUFNLENBQUMwRCxVQUFQLEdBQW9CMUQsNkNBQU0sQ0FBQzBELFVBQVAsSUFBcUJBLHVGQUFVLEVBQW5EO0FBRUExRCw2Q0FBTSxDQUFDMEQsVUFBUCxDQUFrQkMsV0FBbEIsQ0FBOEIsWUFBTTtBQUNuQyxNQUFNQyxFQUFFLEdBQUc1RCw2Q0FBTSxDQUFDNkQsQ0FBbEI7O0FBQ0EsTUFBSUQsRUFBSixFQUFRO0FBQ1AsUUFBSTtBQUNIQSxRQUFFLENBQUMsdUJBQUQsQ0FBRixDQUE0QkUsSUFBNUI7O0FBQ0E5RCxtREFBTSxDQUFDK0QsVUFBUCxDQUFrQixZQUFNO0FBQ3ZCSCxVQUFFLENBQUMsdUJBQUQsQ0FBRixDQUE0QkksTUFBNUI7QUFDQSxPQUZELEVBRUcsR0FGSCxFQUZHLENBSU07QUFDVCxLQUxELENBS0UsT0FBTzdDLENBQVAsRUFBVSxDQUFFLENBTlAsQ0FNUTs7QUFDZjtBQUNELENBVkQ7O0FBWUFzQyxtQkFBTyxDQUFDLG1EQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsd0JBQUQsQ0FBUDs7QUFFQSxJQUFJekQsNkNBQU0sQ0FBQ2lFLFNBQVgsRUFBc0I7QUFDckJqRSwrQ0FBTSxDQUFDaUUsU0FBUDtBQUNBLEM7Ozs7Ozs7Ozs7O0FDNUJELG1CQUFPLENBQUMsbURBQTBDO0FBQ2xELGNBQWMsbUJBQU8sQ0FBQyw4QkFBcUI7QUFDM0M7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSxjQUFjLG1CQUFPLENBQUMsb0JBQVc7QUFDakM7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyx5QkFBZ0IsY0FBYyxpQkFBaUIsbUJBQU8sQ0FBQyx1QkFBYyxLQUFLOzs7Ozs7Ozs7Ozs7QUNGbkg7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsU0FBUyxtQkFBTyxDQUFDLHVCQUFjO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLDJCQUFrQjtBQUMzQyxpQkFBaUIsbUJBQU8sQ0FBQyx5QkFBZ0I7QUFDekM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxlQUFlLG1CQUFPLENBQUMsdUJBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLGVBQWUsbUJBQU8sQ0FBQyx1QkFBYztBQUNyQyxlQUFlLG1CQUFPLENBQUMsb0JBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkEsbUJBQU8sQ0FBQywrREFBc0Q7QUFDOUQsY0FBYyxtQkFBTyxDQUFDLDhCQUFxQjtBQUMzQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsd0JBQWU7QUFDdkMsZ0NBQWdDLG1CQUFPLENBQUMseUJBQWdCOztBQUV4RCxtQkFBTyxDQUFDLHdCQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JEO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGlCQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkEsVUFBVSxtQkFBTyxDQUFDLHdCQUFlO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLDJCQUFrQjtBQUMzQyxnQkFBZ0IsbUJBQU8sQ0FBQyx3QkFBZTtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQywwQkFBaUI7QUFDM0MsVUFBVSxtQkFBTyxDQUFDLGlCQUFRO0FBQzFCLHFCQUFxQixtQkFBTyxDQUFDLDRCQUFtQjtBQUNoRDs7QUFFQSxZQUFZLG1CQUFPLENBQUMseUJBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkEsY0FBYzs7Ozs7Ozs7Ozs7O0FDQWQ7QUFDQSxjQUFjLG1CQUFPLENBQUMsb0JBQVc7QUFDakMsV0FBVyxtQkFBTyxDQUFDLGtCQUFTO0FBQzVCLFlBQVksbUJBQU8sQ0FBQyxtQkFBVTtBQUM5QjtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscURBQXFELE9BQU8sRUFBRTtBQUM5RDs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlCQUFpQixLQUE0QixJQUFJLG9EQUFVOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1Asa0NBQWtDLGlEQUFpRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQW9EO0FBQy9FO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdDQUFnQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsNkJBQTZCO0FBQ3pGLG1FQUFtRSxpQ0FBaUM7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQSx5Q0FBeUMsVUFBVTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnQkFBZ0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLDBEQUEwRCwwRUFBMEUsT0FBTywwQkFBMEIsU0FBUztBQUM5SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtFQUFrRSxnQkFBZ0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QywyQkFBMkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2Qyw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnQkFBZ0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsa0JBQWtCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkZBQTZGO0FBQ3JILG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsbUJBQW1CO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1DQUFPO0FBQ1g7QUFDQSxLQUFLO0FBQUEsb0dBQUM7QUFDTjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6NkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDZCQUE2QjtBQUM5RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEI7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFlLGkyQiIsImZpbGUiOiJqcy9ib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJyYWlubG9vcC92LzAuMC4wL3N0YXRpYy9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ4Nik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdzsiLCJ2YXIgTyA9ICdvYmplY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gTyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09IE8gJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSBPICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gTyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBzdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdXG4gICAgfHwgKE5BVElWRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGhpZGUoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBuYXRpdmVGdW5jdGlvblRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXRvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhuYXRpdmVGdW5jdGlvblRvU3RyaW5nKS5zcGxpdCgndG9TdHJpbmcnKTtcblxuc2hhcmVkKCdpbnNwZWN0U291cmNlJywgZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xufSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgaGlkZSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBoaWRlKE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBuYXRpdmVGdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbmlmICh0b1N0cmluZyAhPT0gT2JqZWN0UHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4xLjMnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTkgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgbmF0aXZlRGF0ZVRvU3RyaW5nID0gRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG90eXBlLmdldFRpbWU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgaGlkZShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBoaWRlKGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBmbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcCA9IFN0cmluZyhSLnNvdXJjZSk7XG4gICAgdmFyIHJmID0gUi5mbGFncztcbiAgICB2YXIgZiA9IFN0cmluZyhyZiA9PT0gdW5kZWZpbmVkICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBmbGFncy5jYWxsKFIpIDogcmYpO1xuICAgIHJldHVybiAnLycgKyBwICsgJy8nICsgZjtcbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5wcm9ncmVzc0pzOyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiaW1wb3J0IHdpbmRvdyBmcm9tICd3aW5kb3cnO1xuXG4vLyBsZXQgcmFpbmxvb3BDYWNoZXMgPSB3aW5kb3cuY2FjaGVzICYmIHdpbmRvdy5jYWNoZXMub3BlbiA/IHdpbmRvdy5jYWNoZXMgOiBudWxsO1xuXG4vKipcbiAqIEBwYXJhbSB7c3JjfSBzcmNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYXN5bmMgPSBmYWxzZVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqYXNzbChzcmMsIGFzeW5jID0gZmFsc2UpIHtcblx0aWYgKCF3aW5kb3cuUHJvbWlzZSB8fCAhd2luZG93LlByb21pc2UuYWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdQcm9taXNlcyBhcmUgbm90IGF2YWlsYWJsZSB5b3VyIGVudmlyb25tZW50LicpO1xuXHR9XG5cblx0aWYgKCFzcmMpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3NyYyBzaG91bGQgbm90IGJlIGVtcHR5LicpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyB3aW5kb3cuUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdGVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0cmVzb2x2ZShzcmMpO1xuXHRcdH07XG5cblx0XHRlbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHRyZWplY3QobmV3IEVycm9yKHNyYykpO1xuXHRcdH07XG5cblx0XHRlbGVtZW50LmFzeW5jID0gdHJ1ZSA9PT0gYXN5bmM7XG5cdFx0ZWxlbWVudC5zcmMgPSBzcmM7XG5cblx0XHR3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0fSkgLyogLnRoZW4oKHMpID0+IHtcblxuXHRcdGNvbnN0IGZvdW5kID0gcyAmJiByYWlubG9vcENhY2hlcyA/IHMubWF0Y2goL3JhaW5sb29wXFwvdlxcLyhbXlxcL10rKVxcL3N0YXRpY1xcLy8pIDogbnVsbDtcblx0XHRpZiAoZm91bmQgJiYgZm91bmRbMV0pXG5cdFx0e1xuXHRcdFx0cmFpbmxvb3BDYWNoZXMub3BlbigncmFpbmxvb3Atb2ZmbGluZS0nICsgZm91bmRbMV0pLnRoZW4oXG5cdFx0XHRcdChjYWNoZSkgPT4gY2FjaGUuYWRkKHMpXG5cdFx0XHQpLmNhdGNoKCgpID0+IHtcblx0XHRcdFx0cmFpbmxvb3BDYWNoZXMgPSBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHM7XG5cdH0pKi87XG59XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCByZWdleHBGbGFncy5jYWxsKHJlKSk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21pY3JvdGFzaycpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2VyLWFnZW50Jyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFByb21pc2VTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFBST01JU0UpO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvciA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnbG9iYWwuZmV0Y2g7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52OCB8fCAnJztcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG52YXIgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHk7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXI7XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IFByb21pc2VDb25zdHJ1Y3Rvci5yZXNvbHZlKDEpO1xuICB2YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4gIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW1NQRUNJRVNdID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gIH07XG4gIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgcmV0dXJuICEoKElTX05PREUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKVxuICAgICYmICghSVNfUFVSRSB8fCBwcm9taXNlWydmaW5hbGx5J10pXG4gICAgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlXG4gICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIHdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAmJiB1c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lLzY2JykgPT09IC0xKTtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IGNoYWluW2luZGV4KytdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UsIHN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQocHJvbWlzZSwgc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmIChoYW5kbGVyID0gZ2xvYmFsWydvbicgKyBuYW1lXSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBJU19VTkhBTkRMRUQgPSBpc1VuaGFuZGxlZChzdGF0ZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKElTX05PREUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoVU5IQU5ETEVEX1JFSkVDVElPTiwgcHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgc3RhdGUucmVqZWN0aW9uID0gSVNfTk9ERSB8fCBpc1VuaGFuZGxlZChzdGF0ZSkgPyBVTkhBTkRMRUQgOiBIQU5ETEVEO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJlamVjdGlvbiAhPT0gSEFORExFRCAmJiAhc3RhdGUucGFyZW50O1xufTtcblxudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcbiAgfSk7XG59O1xuXG52YXIgYmluZCA9IGZ1bmN0aW9uIChmbiwgcHJvbWlzZSwgc3RhdGUsIHVud3JhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm4ocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApO1xuICB9O1xufTtcblxudmFyIGludGVybmFsUmVqZWN0ID0gZnVuY3Rpb24gKHByb21pc2UsIHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgbm90aWZ5KHByb21pc2UsIHN0YXRlLCB0cnVlKTtcbn07XG5cbnZhciBpbnRlcm5hbFJlc29sdmUgPSBmdW5jdGlvbiAocHJvbWlzZSwgc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgdmFyIHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKTtcbiAgICBpZiAodGhlbikge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlc29sdmUsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZWplY3QsIHByb21pc2UsIHdyYXBwZXIsIHN0YXRlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWplY3QocHJvbWlzZSwgd3JhcHBlciwgZXJyb3IsIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnZhbHVlID0gdmFsdWU7XG4gICAgICBzdGF0ZS5zdGF0ZSA9IEZVTEZJTExFRDtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpbnRlcm5hbFJlamVjdChwcm9taXNlLCB7IGRvbmU6IGZhbHNlIH0sIGVycm9yLCBzdGF0ZSk7XG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoRk9SQ0VEKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFByb21pc2VDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB0aGlzLCBzdGF0ZSksIGJpbmQoaW50ZXJuYWxSZWplY3QsIHRoaXMsIHN0YXRlKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGludGVybmFsUmVqZWN0KHRoaXMsIHN0YXRlLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB0eXBlOiBQUk9NSVNFLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBub3RpZmllZDogZmFsc2UsXG4gICAgICBwYXJlbnQ6IGZhbHNlLFxuICAgICAgcmVhY3Rpb25zOiBbXSxcbiAgICAgIHJlamVjdGlvbjogZmFsc2UsXG4gICAgICBzdGF0ZTogUEVORElORyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZSwge1xuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS50aGVuYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnByb3RvdHlwZS50aGVuXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUodGhpcyk7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IElTX05PREUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHN0YXRlLnBhcmVudCA9IHRydWU7XG4gICAgICBzdGF0ZS5yZWFjdGlvbnMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAoc3RhdGUuc3RhdGUgIT0gUEVORElORykgbm90aWZ5KHRoaXMsIHN0YXRlLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIGBQcm9taXNlLnByb3RvdHlwZS5jYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBwcm9taXNlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBwcm9taXNlLCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIC8vIHdyYXAgZmV0Y2ggcmVzdWx0XG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgJGZldGNoID09ICdmdW5jdGlvbicpICQoeyBnbG9iYWw6IHRydWUsIGVudW1lcmFibGU6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgZmV0Y2g6IGZ1bmN0aW9uIGZldGNoKGlucHV0KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoUHJvbWlzZUNvbnN0cnVjdG9yLCAkZmV0Y2guYXBwbHkoZ2xvYmFsLCBhcmd1bWVudHMpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIFByb21pc2U6IFByb21pc2VDb25zdHJ1Y3RvclxufSk7XG5cbnNldFRvU3RyaW5nVGFnKFByb21pc2VDb25zdHJ1Y3RvciwgUFJPTUlTRSwgZmFsc2UsIHRydWUpO1xuc2V0U3BlY2llcyhQUk9NSVNFKTtcblxuUHJvbWlzZVdyYXBwZXIgPSBwYXRoW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kKHsgdGFyZ2V0OiBQUk9NSVNFLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlamVjdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UucmVqZWN0XG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIGNhcGFiaWxpdHkucmVqZWN0LmNhbGwodW5kZWZpbmVkLCByKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuJCh7IHRhcmdldDogUFJPTUlTRSwgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIHx8IEZPUkNFRCB9LCB7XG4gIC8vIGBQcm9taXNlLnJlc29sdmVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXByb21pc2UuYWxsXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyBgUHJvbWlzZS5yYWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcHJvbWlzZS5yYWNlXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgaXRlcmF0ZShpdGVyYWJsZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgJHByb21pc2VSZXNvbHZlLmNhbGwoQywgcHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmVycm9yKSByZWplY3QocmVzdWx0LnZhbHVlKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2socnVubmVyKGlkKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGJpbmQocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyAmJiAhZmFpbHMocG9zdCkpIHtcbiAgICBkZWZlciA9IHBvc3Q7XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bihpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQocnVubmVyKGlkKSwgMCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGNsZWFyOiBjbGVhclxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgIH1cblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICFSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUykgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICAgIGlmIChzaGFtKSBoaWRlKFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbiAgfVxufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9iaW5kLWNvbnRleHQnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBpdGVyYXRlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGZuLCB0aGF0LCBBU19FTlRSSUVTLCBJU19JVEVSQVRPUikge1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoZm4sIHRoYXQsIEFTX0VOVFJJRVMgPyAyIDogMSk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIHN0ZXA7XG5cbiAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBBU19FTlRSSUVTXG4gICAgICAgICAgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKVxuICAgICAgICAgIDogYm91bmRGdW5jdGlvbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQgPSBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBib3VuZEZ1bmN0aW9uLCBzdGVwLnZhbHVlLCBBU19FTlRSSUVTKTtcbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG5pdGVyYXRlLnN0b3AgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG4gIH1cbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJpbXBvcnQgd2luZG93IGZyb20gJ3dpbmRvdyc7XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ19fcmxBJztcbmNvbnN0IFRJTUVfS0VZID0gJ19fcmxUJztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RvcmFnZU5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdG9yYWdlU3VwcG9ydGVkKHN0b3JhZ2VOYW1lKSB7XG5cdGxldCBzdG9yYWdlSXNBdmFpbGFibGUgPSBmYWxzZTtcblx0dHJ5IHtcblx0XHQvLyBhdDogd2luZG93W3N0b3JhZ2VOYW1lXSBmaXJlZm94IHRocm93cyBTZWN1cml0eUVycm9yOiBUaGUgb3BlcmF0aW9uIGlzIGluc2VjdXJlLiB3aGVuIGluIGlmcmFtZVxuXHRcdHN0b3JhZ2VJc0F2YWlsYWJsZSA9IHN0b3JhZ2VOYW1lIGluIHdpbmRvdyAmJiB3aW5kb3dbc3RvcmFnZU5hbWVdICYmIHdpbmRvd1tzdG9yYWdlTmFtZV0uc2V0SXRlbTtcblx0fSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG5cdGlmIChzdG9yYWdlSXNBdmFpbGFibGUpIHtcblx0XHRjb25zdCBzID0gd2luZG93W3N0b3JhZ2VOYW1lXSxcblx0XHRcdGtleSA9ICd0ZXN0TG9jYWxTdG9yYWdlXycgKyB3aW5kb3cuTWF0aC5yYW5kb20oKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRzLnNldEl0ZW0oa2V5LCBrZXkpO1xuXHRcdFx0aWYgKGtleSA9PT0gcy5nZXRJdGVtKGtleSkpIHtcblx0XHRcdFx0cy5yZW1vdmVJdGVtKGtleSk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgU0VTU19TVE9SQUdFID0gaXNTdG9yYWdlU3VwcG9ydGVkKCdzZXNzaW9uU3RvcmFnZScpID8gd2luZG93LnNlc3Npb25TdG9yYWdlIHx8IG51bGwgOiBudWxsO1xuY29uc3QgV0lOX1NUT1JBR0UgPSB3aW5kb3cudG9wIHx8IHdpbmRvdyB8fCBudWxsO1xuXG5jb25zdCBfX2dldCA9IChrZXkpID0+IHtcblx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdGlmIChTRVNTX1NUT1JBR0UpIHtcblx0XHRyZXN1bHQgPSBTRVNTX1NUT1JBR0UuZ2V0SXRlbShrZXkpIHx8IG51bGw7XG5cdH0gZWxzZSBpZiAoV0lOX1NUT1JBR0UgJiYgd2luZG93LkpTT04pIHtcblx0XHRjb25zdCBkYXRhID1cblx0XHRcdFdJTl9TVE9SQUdFLm5hbWUgJiYgJ3snID09PSBXSU5fU1RPUkFHRS5uYW1lLnRvU3RyaW5nKCkuc3Vic3RyKDAsIDEpXG5cdFx0XHRcdD8gd2luZG93LkpTT04ucGFyc2UoV0lOX1NUT1JBR0UubmFtZS50b1N0cmluZygpKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0cmVzdWx0ID0gZGF0YSA/IGRhdGFba2V5XSB8fCBudWxsIDogbnVsbDtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBfX3NldCA9IChrZXksIHZhbHVlKSA9PiB7XG5cdGlmIChTRVNTX1NUT1JBR0UpIHtcblx0XHRTRVNTX1NUT1JBR0Uuc2V0SXRlbShrZXksIHZhbHVlKTtcblx0fSBlbHNlIGlmIChXSU5fU1RPUkFHRSAmJiB3aW5kb3cuSlNPTikge1xuXHRcdGxldCBkYXRhID1cblx0XHRcdFdJTl9TVE9SQUdFLm5hbWUgJiYgJ3snID09PSBXSU5fU1RPUkFHRS5uYW1lLnRvU3RyaW5nKCkuc3Vic3RyKDAsIDEpXG5cdFx0XHRcdD8gd2luZG93LkpTT04ucGFyc2UoV0lOX1NUT1JBR0UubmFtZS50b1N0cmluZygpKVxuXHRcdFx0XHQ6IG51bGw7XG5cdFx0ZGF0YSA9IGRhdGEgfHwge307XG5cdFx0ZGF0YVtrZXldID0gdmFsdWU7XG5cblx0XHRXSU5fU1RPUkFHRS5uYW1lID0gd2luZG93LkpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG59O1xuXG5jb25zdCB0aW1lc3RhbXAgPSAoKSA9PiB3aW5kb3cuTWF0aC5yb3VuZChuZXcgd2luZG93LkRhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcblxuY29uc3Qgc2V0VGltZXN0YW1wID0gKCkgPT4gX19zZXQoVElNRV9LRVksIHRpbWVzdGFtcCgpKTtcblxuY29uc3QgZ2V0VGltZXN0YW1wID0gKCkgPT4ge1xuXHRjb25zdCB0aW1lID0gX19nZXQoVElNRV9LRVksIDApO1xuXHRyZXR1cm4gdGltZSA/IHdpbmRvdy5wYXJzZUludCh0aW1lLCAxMCkgfHwgMCA6IDA7XG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRIYXNoKCkge1xuXHRyZXR1cm4gX19nZXQoU1RPUkFHRV9LRVkpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0SGFzaCgpIHtcblx0Y29uc3Qga2V5ID0gJ0F1dGhBY2NvdW50SGFzaCcsXG5cdFx0YXBwRGF0YSA9IHdpbmRvdy5fX3JsYWhfZGF0YSgpO1xuXG5cdF9fc2V0KFNUT1JBR0VfS0VZLCBhcHBEYXRhICYmIGFwcERhdGFba2V5XSA/IGFwcERhdGFba2V5XSA6ICcnKTtcblx0c2V0VGltZXN0YW1wKCk7XG59XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckhhc2goKSB7XG5cdF9fc2V0KFNUT1JBR0VfS0VZLCAnJyk7XG5cdHNldFRpbWVzdGFtcCgpO1xufVxuXG4vKipcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tUaW1lc3RhbXAoKSB7XG5cdGlmICh0aW1lc3RhbXAoKSA+IGdldFRpbWVzdGFtcCgpICsgMTAwMCAqIDYwICogNjApIHtcblx0XHQvLyA2MG1cblx0XHRjbGVhckhhc2goKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIGluaXQgc2VjdGlvblxud2luZG93LnNldEludGVydmFsKHNldFRpbWVzdGFtcCwgMTAwMCAqIDYwKTsgLy8gMW1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgbmF0aXZlRnVuY3Rpb25Ub1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi10by1zdHJpbmcnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QobmF0aXZlRnVuY3Rpb25Ub1N0cmluZy5jYWxsKFdlYWtNYXApKTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihsZW5ndGgsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSAhPT0gJ1tvYmplY3Qgel0nID8gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn0gOiB0ZXN0LnRvU3RyaW5nO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlci1hZ2VudCcpO1xuXG52YXIgTXV0YXRpb25PYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgSVNfTk9ERSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnksIHRvZ2dsZSwgbm9kZSwgcHJvbWlzZTtcblxuLy8gbW9kZXJuIGVuZ2luZXMgaGF2ZSBxdWV1ZU1pY3JvdGFzayBtZXRob2RcbmlmICghcXVldWVNaWNyb3Rhc2spIHtcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKElTX05PREUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoTXV0YXRpb25PYnNlcnZlciAmJiAhLyhpcGhvbmV8aXBvZHxpcGFkKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICB0b2dnbGUgPSB0cnVlO1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIC8vIFByb21pc2UucmVzb2x2ZSB3aXRob3V0IGFuIGFyZ3VtZW50IHRocm93cyBhbiBlcnJvciBpbiBMRyBXZWJPUyAyXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBxdWV1ZU1pY3JvdGFzayB8fCBmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICBpZiAoIWhlYWQpIHtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGU7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY29uc29sZS5lcnJvcihhKSA6IGNvbnNvbGUuZXJyb3IoYSwgYik7XG4gIH1cbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIG5hdGl2ZVBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gbmF0aXZlUGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCBuYXRpdmVQYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuIG5hdGl2ZVBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6IG5hdGl2ZVBhcnNlSW50O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYgaGFzKGV4cG9ydHMsIGtleSkpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiXG4vL1xuLy8gZWxlbWVudC1kYXRhc2V0IDIuMi42XG4vL1xuLy8gZWxlbWVudC1kYXRhc2V0IGlzIHJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgQlNELTMtQ2xhdXNlIGxpY2Vuc2UuXG4vLyAoYykgMjAxNSAtIDIwMTcgTWFyayBNaWxzdGVpbiA8bWFya0BlcGlsb3F1ZS5jb20+IFxuLy9cbi8vIEZvciBhbGwgZGV0YWlscyBhbmQgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL2VwaWxvcXVlL2VsZW1lbnQtZGF0YXNldFxuLy9cbiAgXG5pbXBvcnQgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eSc7XG5pbXBvcnQgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuZnVuY3Rpb24gZWxlbWVudERhdGFzZXRQb2x5ZmlsbCgpIHtcbiAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldCAmJiAoIV9PYmplY3QkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnKSB8fCAhX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnZGF0YXNldCcpLmdldCkpIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHt9O1xuXG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcblxuICAgIGRlc2NyaXB0b3IuZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXM7XG5cbiAgICAgIGZ1bmN0aW9uIHRvVXBwZXJDYXNlKG4wKSB7XG4gICAgICAgIHJldHVybiBuMC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0dGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0dGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcblxuICAgICAgICAvLyBUaGlzIHRlc3QgcmVhbGx5IHNob3VsZCBhbGxvdyBhbnkgWE1MIE5hbWUgd2l0aG91dFxuICAgICAgICAvLyBjb2xvbnMgKGFuZCBub24tdXBwZXJjYXNlIGZvciBYSFRNTClcblxuICAgICAgICBpZiAoYXR0cmlidXRlICYmIGF0dHJpYnV0ZS5uYW1lICYmIC9eZGF0YS1cXHdbXFx3LV0qJC8udGVzdChhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZTtcblxuICAgICAgICAgIC8vIENoYW5nZSB0byBDYW1lbENhc2VcblxuICAgICAgICAgIHZhciBwcm9wTmFtZSA9IG5hbWUuc3Vic3RyKDUpLnJlcGxhY2UoLy0uL2csIHRvVXBwZXJDYXNlKTtcblxuICAgICAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkobWFwLCBwcm9wTmFtZSwge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogZGVzY3JpcHRvci5lbnVtZXJhYmxlLFxuICAgICAgICAgICAgZ2V0OiBnZXR0ZXIuYmluZCh7IHZhbHVlOiB2YWx1ZSB8fCAnJyB9KSxcbiAgICAgICAgICAgIHNldDogc2V0dGVyLmJpbmQoZWxlbWVudCwgbmFtZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50RGF0YXNldFBvbHlmaWxsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCIvKipcbiAqIFByb2dyZXNzLmpzIHYwLjEuMFxuICogaHR0cHM6Ly9naXRodWIuY29tL3VzYWJsaWNhL3Byb2dyZXNzLmpzXG4gKiBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTMgdXNhYmxpLmNhIC0gQWZzaGluIE1laHJhYmFuaSAoQGFmc2hpbm1laClcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIENvbW1vbkpTXG4gICAgZmFjdG9yeShleHBvcnRzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KHJvb3QpO1xuICB9XG59ICh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykge1xuICAvL0RlZmF1bHQgY29uZmlnL3ZhcmlhYmxlc1xuICB2YXIgVkVSU0lPTiA9ICcwLjEuMCc7XG5cbiAgLyoqXG4gICAqIFByb2dyZXNzSnMgbWFpbiBjbGFzc1xuICAgKlxuICAgKiBAY2xhc3MgUHJvZ3Jlc3NKc1xuICAgKi9cbiAgZnVuY3Rpb24gUHJvZ3Jlc3NKcyhvYmopIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdGFyZ2V0RWxlbWVudCA9IG9iajsgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RhcmdldEVsZW1lbnQgPSBbb2JqXTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5fcHJvZ3Jlc3Nqc0lkID09PSAndW5kZWZpbmVkJylcbiAgICAgIHdpbmRvdy5fcHJvZ3Jlc3Nqc0lkID0gMTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzID09PSAndW5kZWZpbmVkJykgXG4gICAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHMgPSB7fTtcblxuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICAvL3Byb2dyZXNzIGJhciB0aGVtZVxuICAgICAgdGhlbWU6ICdibHVlJyxcbiAgICAgIC8vb3ZlcmxheSBtb2RlIG1ha2VzIGFuIG92ZXJsYXkgbGF5ZXIgaW4gdGhlIHRhcmdldCBlbGVtZW50XG4gICAgICBvdmVybGF5TW9kZTogZmFsc2UsXG4gICAgICAvL3RvIGNvbnNpZGVyIENTUzMgdHJhbnNpdGlvbnMgaW4gZXZlbnRzXG4gICAgICBjb25zaWRlclRyYW5zaXRpb246IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHByb2dyZXNzIGZvciBzcGVjaWZpYyBlbGVtZW50KHMpXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9jcmVhdGVDb250YWluZXIgXG4gICAqL1xuICBmdW5jdGlvbiBfc3RhcnRQcm9ncmVzcygpIHtcblxuICAgIC8vY2FsbCBvbkJlZm9yZVN0YXJ0IGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9vbkJlZm9yZVN0YXJ0Q2FsbGJhY2sgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX29uQmVmb3JlU3RhcnRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIHRoZSBjb250YWluZXIgZm9yIHByb2dyZXNzIGJhclxuICAgIF9jcmVhdGVDb250YWluZXIuY2FsbCh0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBlbG1zTGVuZ3RoID0gdGhpcy5fdGFyZ2V0RWxlbWVudC5sZW5ndGg7IGkgPCBlbG1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIF9zZXRQcm9ncmVzcy5jYWxsKHRoaXMsIHRoaXMuX3RhcmdldEVsZW1lbnRbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJvZ3Jlc3MgYmFyIGZvciBzcGVjaWZpYyBlbGVtZW50XG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9zZXRQcm9ncmVzc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0RWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gX3NldFByb2dyZXNzKHRhcmdldEVsZW1lbnQpIHtcbiAgICBcbiAgICAvL2lmIHRoZSB0YXJnZXQgZWxlbWVudCBhbHJlYWR5IGFzIGBkYXRhLXByb2dyZXNzanNgLCBpZ25vcmUgdGhlIGluaXRcbiAgICBpZiAodGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIikpXG4gICAgICByZXR1cm47XG5cbiAgICAvL2dldCB0YXJnZXQgZWxlbWVudCBwb3NpdGlvblxuICAgIHZhciB0YXJnZXRFbGVtZW50T2Zmc2V0ID0gX2dldE9mZnNldC5jYWxsKHRoaXMsIHRhcmdldEVsZW1lbnQpO1xuXG4gICAgdGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzanNcIiwgd2luZG93Ll9wcm9ncmVzc2pzSWQpO1xuICAgIFxuICAgIHZhciBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2dyZXNzanMtcHJvZ3Jlc3MgcHJvZ3Jlc3Nqcy10aGVtZS0nICsgdGhpcy5fb3B0aW9ucy50aGVtZTtcblxuXG4gICAgLy9zZXQgdGhlIHBvc2l0aW9uIHBlcmNlbnQgZWxlbWVudHMsIGl0IGRlcGVuZHMgb24gdGFyZ2V0RWxlbWVudCB0YWdcbiAgICBpZiAodGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdib2R5Jykge1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB9XG5cbiAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIsIHdpbmRvdy5fcHJvZ3Jlc3Nqc0lkKTtcbiAgICB2YXIgcHJvZ3Jlc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9ncmVzc0VsZW1lbnQuY2xhc3NOYW1lID0gXCJwcm9ncmVzc2pzLWlubmVyXCI7XG5cbiAgICAvL2NyZWF0ZSBhbiBlbGVtZW50IGZvciBjdXJyZW50IHBlcmNlbnQgb2YgcHJvZ3Jlc3MgYmFyXG4gICAgdmFyIHByb2dyZXNzUGVyY2VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9ncmVzc1BlcmNlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwicHJvZ3Jlc3Nqcy1wZXJjZW50XCI7XG4gICAgcHJvZ3Jlc3NQZXJjZW50RWxlbWVudC5pbm5lckhUTUwgPSBcIjElXCI7XG5cbiAgICBwcm9ncmVzc0VsZW1lbnQuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NQZXJjZW50RWxlbWVudCk7XG4gICAgXG4gICAgaWYgKHRoaXMuX29wdGlvbnMub3ZlcmxheU1vZGUgJiYgdGFyZ2V0RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdib2R5Jykge1xuICAgICAgLy9pZiB3ZSBoYXZlIGBib2R5YCBmb3IgdGFyZ2V0IGVsZW1lbnQgYW5kIGFsc28gb3ZlcmxheSBtb2RlIGlzIGVuYWJsZSwgd2Ugc2hvdWxkIHVzZSBhIGRpZmZlcmVudFxuICAgICAgLy9wb3NpdGlvbiBmb3IgcHJvZ3Jlc3MgYmFyIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUubGVmdCAgID0gMDtcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5yaWdodCAgPSAwO1xuICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLnRvcCAgICA9IDA7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUuYm90dG9tID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9zZXQgcHJvZ3Jlc3MgYmFyIGNvbnRhaW5lciBzaXplIGFuZCBvZmZzZXRcbiAgICAgIHByb2dyZXNzRWxlbWVudENvbnRhaW5lci5zdHlsZS5sZWZ0ICA9IHRhcmdldEVsZW1lbnRPZmZzZXQubGVmdCArICdweCc7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUudG9wICAgPSB0YXJnZXRFbGVtZW50T2Zmc2V0LnRvcCArICdweCc7XG4gICAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuc3R5bGUud2lkdGggPSB0YXJnZXRFbGVtZW50T2Zmc2V0LndpZHRoICsgJ3B4JztcblxuICAgICAgaWYgKHRoaXMuX29wdGlvbnMub3ZlcmxheU1vZGUpIHtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRhcmdldEVsZW1lbnRPZmZzZXQuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9ncmVzc0VsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NFbGVtZW50KTtcblxuICAgIC8vYXBwZW5kIHRoZSBlbGVtZW50IHRvIGNvbnRhaW5lclxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3Nqcy1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NFbGVtZW50Q29udGFpbmVyKTtcblxuICAgIF9zZXRQZXJjZW50Rm9yKHRhcmdldEVsZW1lbnQsIDEpO1xuXG4gICAgLy9hbmQgaW5jcmVhc2UgdGhlIHByb2dyZXNzSWRcbiAgICArK3dpbmRvdy5fcHJvZ3Jlc3Nqc0lkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwZXJjZW50IGZvciBhbGwgZWxlbWVudHNcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX3NldFBlcmNlbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHBlcmNlbnRcbiAgICovXG4gIGZ1bmN0aW9uIF9zZXRQZXJjZW50KHBlcmNlbnQpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZWxtc0xlbmd0aCA9IHRoaXMuX3RhcmdldEVsZW1lbnQubGVuZ3RoOyBpIDwgZWxtc0xlbmd0aDsgaSsrKSB7XG4gICAgICBfc2V0UGVyY2VudEZvci5jYWxsKHRoaXMsIHRoaXMuX3RhcmdldEVsZW1lbnRbaV0sIHBlcmNlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGVyY2VudCBmb3Igc3BlY2lmaWMgZWxlbWVudFxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfc2V0UGVyY2VudEZvclxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0RWxlbWVudFxuICAgKiBAcGFyYW0ge051bWJlcn0gcGVyY2VudFxuICAgKi9cbiAgZnVuY3Rpb24gX3NldFBlcmNlbnRGb3IodGFyZ2V0RWxlbWVudCwgcGVyY2VudCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBcbiAgICAvL3ByZXZlbnQgb3ZlcmZsb3chXG4gICAgaWYgKHBlcmNlbnQgPj0gMTAwKVxuICAgICAgcGVyY2VudCA9IDEwMDtcblxuICAgIGlmICh0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3Nqc1wiKSkge1xuICAgICAgLy9zZXRUaW1lb3V0IGZvciBiZXR0ZXIgQ1NTMyBhbmltYXRpb24gYXBwbHlpbmcgaW4gc29tZSBjYXNlc1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAvL2NhbGwgdGhlIG9ucHJvZ3Jlc3MgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLl9vblByb2dyZXNzQ2FsbGJhY2sgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBzZWxmLl9vblByb2dyZXNzQ2FsbGJhY2suY2FsbChzZWxmLCB0YXJnZXRFbGVtZW50LCBwZXJjZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwZXJjZW50RWxlbWVudCA9IF9nZXRQZXJjZW50RWxlbWVudCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgcGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGggPSBwYXJzZUludChwZXJjZW50KSArICclJztcblxuICAgICAgICB2YXIgcGVyY2VudEVsZW1lbnQgID0gcGVyY2VudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc2pzLXBlcmNlbnRcIik7XG4gICAgICAgIHZhciBleGlzdGluZ1BlcmNlbnQgPSBwYXJzZUludChwZXJjZW50RWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSgnJScsICcnKSk7XG5cbiAgICAgICAgLy9zdGFydCBpbmNyZWFzZS9kZWNyZWFzZSB0aGUgcGVyY2VudCBlbGVtZW50IHdpdGggYW5pbWF0aW9uXG4gICAgICAgIChmdW5jdGlvbihwZXJjZW50RWxlbWVudCwgZXhpc3RpbmdQZXJjZW50LCBjdXJyZW50UGVyY2VudCkge1xuXG4gICAgICAgICAgdmFyIGluY3JlYXNlbWVudCA9IHRydWU7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nUGVyY2VudCA+IGN1cnJlbnRQZXJjZW50KSB7XG4gICAgICAgICAgICBpbmNyZWFzZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgdmFyIGludGVydmFsSW4gPSAxMDtcbiAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VQZXJjZW50VGltZXIocGVyY2VudEVsZW1lbnQsIGV4aXN0aW5nUGVyY2VudCwgY3VycmVudFBlcmNlbnQpIHtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBwZXJjZW50c1xuICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoZXhpc3RpbmdQZXJjZW50IC0gY3VycmVudFBlcmNlbnQpO1xuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMykge1xuICAgICAgICAgICAgICBpbnRlcnZhbEluID0gMzA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlIDwgMjApIHtcbiAgICAgICAgICAgICAgaW50ZXJ2YWxJbiA9IDIwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW50ZXJ2YW5JbiA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoZXhpc3RpbmdQZXJjZW50IC0gY3VycmVudFBlcmNlbnQpICE9IDApIHtcbiAgICAgICAgICAgICAgLy9zZXQgdGhlIHBlcmNlbnRcbiAgICAgICAgICAgICAgcGVyY2VudEVsZW1lbnQuaW5uZXJIVE1MID0gKGluY3JlYXNlbWVudCA/ICgrK2V4aXN0aW5nUGVyY2VudCkgOiAoLS1leGlzdGluZ1BlcmNlbnQpKSArICclJztcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2hhbmdlUGVyY2VudFRpbWVyKHBlcmNlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQsIGN1cnJlbnRQZXJjZW50KTsgfSwgaW50ZXJ2YWxJbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGNoYW5nZVBlcmNlbnRUaW1lcihwZXJjZW50RWxlbWVudCwgZXhpc3RpbmdQZXJjZW50LCBjdXJyZW50UGVyY2VudCk7XG4gICAgICAgICAgXG4gICAgICAgIH0pKHBlcmNlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQsIHBhcnNlSW50KHBlcmNlbnQpKTtcbiAgICAgICAgXG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcHJvZ3Jlc3MgYmFyIGVsZW1lbnQgXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9nZXRQZXJjZW50RWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0RWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gX2dldFBlcmNlbnRFbGVtZW50KHRhcmdldEVsZW1lbnQpIHtcbiAgICB2YXIgcHJvZ3Jlc3Nqc0lkID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3NqcycpKTtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzanMtY29udGFpbmVyID4gLnByb2dyZXNzanMtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzc2pzPVwiJyArIHByb2dyZXNzanNJZCArICdcIl0gPiAucHJvZ3Jlc3Nqcy1pbm5lcicpOyAgXG4gIH1cblxuICAvKipcbiAgICogQXV0byBpbmNyZWFzZSB0aGUgcHJvZ3Jlc3MgYmFyIGV2ZXJ5IFggbWlsbGlzZWNvbmRzXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9hdXRvSW5jcmVhc2VcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNpemVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbGxpc2Vjb25kXG4gICAqL1xuICBmdW5jdGlvbiBfYXV0b0luY3JlYXNlKHNpemUsIG1pbGxpc2Vjb25kKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIFxuICAgIHZhciBwcm9ncmVzc2pzSWQgPSBwYXJzZUludCh0aGlzLl90YXJnZXRFbGVtZW50WzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzc2pzJykpO1xuICAgIFxuICAgIGlmICh0eXBlb2Ygd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwod2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0pO1xuICAgIH1cbiAgICB3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgX2luY3JlYXNlUGVyY2VudC5jYWxsKHNlbGYsIHNpemUpO1xuICAgIH0sIG1pbGxpc2Vjb25kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aGUgc2l6ZSBvZiBwcm9ncmVzcyBiYXJcbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqIEBtZXRob2QgX2luY3JlYXNlUGVyY2VudFxuICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZVxuICAgKi9cbiAgZnVuY3Rpb24gX2luY3JlYXNlUGVyY2VudChzaXplKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGVsbXNMZW5ndGggPSB0aGlzLl90YXJnZXRFbGVtZW50Lmxlbmd0aDsgaSA8IGVsbXNMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gdGhpcy5fdGFyZ2V0RWxlbWVudFtpXTtcbiAgICAgIGlmIChjdXJyZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvZ3Jlc3NqcycpKSB7XG4gICAgICAgIHZhciBwZXJjZW50RWxlbWVudCAgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICB2YXIgZXhpc3RpbmdQZXJjZW50ID0gcGFyc2VJbnQocGVyY2VudEVsZW1lbnQuc3R5bGUud2lkdGgucmVwbGFjZSgnJScsICcnKSk7XG4gICAgICAgIGlmIChleGlzdGluZ1BlcmNlbnQpIHtcbiAgICAgICAgICBfc2V0UGVyY2VudEZvci5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50LCBleGlzdGluZ1BlcmNlbnQgKyAoc2l6ZSB8fCAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgYW5kIHJlbW92ZSBwcm9ncmVzcyBiYXIgXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9lbmRcbiAgICovXG4gIGZ1bmN0aW9uIF9lbmQoKSB7XG5cbiAgICAvL2NhbGwgb25CZWZvcmVFbmQgY2FsbGJhY2tcbiAgICBpZiAodHlwZW9mIHRoaXMuX29uQmVmb3JlRW5kQ2FsbGJhY2sgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLl9vcHRpb25zLmNvbnNpZGVyVHJhbnNpdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAvL3dlIGNhbiBzYWZldHkgYXNzdW1lIHRoYXQgYWxsIGxheWVycyB3b3VsZCBiZSB0aGUgc2FtZSwgc28gYHRoaXMuX3RhcmdldEVsZW1lbnRbMF1gIGlzIHRoZSBzYW1lIGFzIGB0aGlzLl90YXJnZXRFbGVtZW50WzFdYFxuICAgICAgICBfZ2V0UGVyY2VudEVsZW1lbnQodGhpcy5fdGFyZ2V0RWxlbWVudFswXSkuYWRkRXZlbnRMaXN0ZW5lcih3aGljaFRyYW5zaXRpb25FdmVudCgpLCB0aGlzLl9vbkJlZm9yZUVuZENhbGxiYWNrLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkJlZm9yZUVuZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSBcblxuICAgIHZhciBwcm9ncmVzc2pzSWQgPSBwYXJzZUludCh0aGlzLl90YXJnZXRFbGVtZW50WzBdLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzc2pzJykpO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAwLCBlbG1zTGVuZ3RoID0gdGhpcy5fdGFyZ2V0RWxlbWVudC5sZW5ndGg7IGkgPCBlbG1zTGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IHRoaXMuX3RhcmdldEVsZW1lbnRbaV07XG4gICAgICB2YXIgcGVyY2VudEVsZW1lbnQgPSBfZ2V0UGVyY2VudEVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuXG4gICAgICBpZiAoIXBlcmNlbnRFbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBleGlzdGluZ1BlcmNlbnQgPSBwYXJzZUludChwZXJjZW50RWxlbWVudC5zdHlsZS53aWR0aC5yZXBsYWNlKCclJywgJycpKTtcbiAgICAgIFxuICAgICAgdmFyIHRpbWVvdXRTZWMgPSAxO1xuICAgICAgaWYgKGV4aXN0aW5nUGVyY2VudCA8IDEwMCkge1xuICAgICAgICBfc2V0UGVyY2VudEZvci5jYWxsKHRoaXMsIGN1cnJlbnRFbGVtZW50LCAxMDApO1xuICAgICAgICB0aW1lb3V0U2VjID0gNTAwO1xuICAgICAgfVxuXG4gICAgICAvL0kgYmVsaWV2ZSBJIHNob3VsZCBoYW5kbGUgdGhpcyBzaXR1YXRpb24gd2l0aCBldmVudExpc3RlbmVyIGFuZCBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgYnV0IEknbSBub3Qgc3VyZVxuICAgICAgLy9hYm91dCBjb21wYXRpYmlsaXR5IHdpdGggSUVzLiBTaG91bGQgYmUgZml4ZWQgaW4gZnVydGhlciB2ZXJzaW9ucy5cbiAgICAgIChmdW5jdGlvbihwZXJjZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSBcIiBwcm9ncmVzc2pzLWVuZFwiO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vcmVtb3ZlIHRoZSBwZXJjZW50IGVsZW1lbnQgZnJvbSBwYWdlXG4gICAgICAgICAgICBwZXJjZW50RWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocGVyY2VudEVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAvL2FuZCByZW1vdmUgdGhlIGF0dHJpYnV0ZVxuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1wcm9ncmVzc2pzXCIpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9LCB0aW1lb3V0U2VjKTtcbiAgICAgIH0pKHBlcmNlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy9jbGVhbiB0aGUgc2V0SW50ZXJ2YWwgZm9yIGF1dG9JbmNyZWFzZSBmdW5jdGlvblxuICAgIGlmICh3aW5kb3cuX3Byb2dyZXNzanNJbnRlcnZhbHNbcHJvZ3Jlc3Nqc0lkXSkge1xuICAgICAgLy9gZGVsZXRlYCBrZXl3b3JkIGhhcyBzb21lIHByb2JsZW1zIGluIElFXG4gICAgICB0cnkge1xuICAgICAgICBjbGVhckludGVydmFsKHdpbmRvdy5fcHJvZ3Jlc3Nqc0ludGVydmFsc1twcm9ncmVzc2pzSWRdKTtcbiAgICAgICAgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgd2luZG93Ll9wcm9ncmVzc2pzSW50ZXJ2YWxzW3Byb2dyZXNzanNJZF07XG4gICAgICB9IGNhdGNoKGV4KSB7IH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBwcm9ncmVzcyBiYXIgY29udGFpbmVyXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKiBAbWV0aG9kIF9jcmVhdGVDb250YWluZXJcbiAgICovXG4gIGZ1bmN0aW9uIF9jcmVhdGVDb250YWluZXIoKSB7XG4gICAgLy9maXJzdCBjaGVjayBpZiB3ZSBoYXZlIGFuIGNvbnRhaW5lciBhbHJlYWR5LCB3ZSBkb24ndCBuZWVkIHRvIGNyZWF0ZSBpdCBhZ2FpblxuICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzc2pzLWNvbnRhaW5lclwiKSkge1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSBcInByb2dyZXNzanMtY29udGFpbmVyXCI7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZWxlbWVudCBwb3NpdGlvbiBvbiB0aGUgcGFnZVxuICAgKiBUaGFua3MgdG8gYG1lb3V3YDogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDQyNDc0LzM3NTk2NlxuICAgKlxuICAgKiBAYXBpIHByaXZhdGVcbiAgICogQG1ldGhvZCBfZ2V0T2Zmc2V0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAqIEByZXR1cm5zIEVsZW1lbnQncyBwb3NpdGlvbiBpbmZvXG4gICAqL1xuICBmdW5jdGlvbiBfZ2V0T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudFBvc2l0aW9uID0ge307XG5cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdib2R5Jykge1xuICAgICAgLy9zZXQgd2lkdGhcbiAgICAgIGVsZW1lbnRQb3NpdGlvbi53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAvL3NldCBoZWlnaHRcbiAgICAgIGVsZW1lbnRQb3NpdGlvbi5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9zZXQgd2lkdGhcbiAgICAgIGVsZW1lbnRQb3NpdGlvbi53aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAvL3NldCBoZWlnaHRcbiAgICAgIGVsZW1lbnRQb3NpdGlvbi5oZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICAvL2NhbGN1bGF0ZSBlbGVtZW50IHRvcCBhbmQgbGVmdFxuICAgIHZhciBfeCA9IDA7XG4gICAgdmFyIF95ID0gMDtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiAhaXNOYU4oZWxlbWVudC5vZmZzZXRMZWZ0KSAmJiAhaXNOYU4oZWxlbWVudC5vZmZzZXRUb3ApKSB7XG4gICAgICBfeCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBfeSArPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgLy9zZXQgdG9wXG4gICAgZWxlbWVudFBvc2l0aW9uLnRvcCA9IF95O1xuICAgIC8vc2V0IGxlZnRcbiAgICBlbGVtZW50UG9zaXRpb24ubGVmdCA9IF94O1xuXG4gICAgcmV0dXJuIGVsZW1lbnRQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVyd3JpdGVzIG9iajEncyB2YWx1ZXMgd2l0aCBvYmoyJ3MgYW5kIGFkZHMgb2JqMidzIGlmIG5vbiBleGlzdGVudCBpbiBvYmoxXG4gICAqIHZpYTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzEyNTEvaG93LWNhbi1pLW1lcmdlLXByb3BlcnRpZXMtb2YtdHdvLWphdmFzY3JpcHQtb2JqZWN0cy1keW5hbWljYWxseVxuICAgKlxuICAgKiBAcGFyYW0gb2JqMVxuICAgKiBAcGFyYW0gb2JqMlxuICAgKiBAcmV0dXJucyBvYmozIGEgbmV3IG9iamVjdCBiYXNlZCBvbiBvYmoxIGFuZCBvYmoyXG4gICAqL1xuICBmdW5jdGlvbiBfbWVyZ2VPcHRpb25zKG9iajEsIG9iajIpIHtcbiAgICB2YXIgb2JqMyA9IHt9O1xuICAgIGZvciAodmFyIGF0dHJuYW1lIGluIG9iajEpIHsgb2JqM1thdHRybmFtZV0gPSBvYmoxW2F0dHJuYW1lXTsgfVxuICAgIGZvciAodmFyIGF0dHJuYW1lIGluIG9iajIpIHsgb2JqM1thdHRybmFtZV0gPSBvYmoyW2F0dHJuYW1lXTsgfVxuICAgIHJldHVybiBvYmozO1xuICB9XG5cbiAgdmFyIHByb2dyZXNzSnMgPSBmdW5jdGlvbiAodGFyZ2V0RWxtKSB7XG4gICAgaWYgKHR5cGVvZiAodGFyZ2V0RWxtKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vT2ssIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZVxuICAgICAgcmV0dXJuIG5ldyBQcm9ncmVzc0pzKHRhcmdldEVsbSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAodGFyZ2V0RWxtKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vc2VsZWN0IHRoZSB0YXJnZXQgZWxlbWVudCB3aXRoIHF1ZXJ5IHNlbGVjdG9yXG4gICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RWxtKTtcbiAgICAgICBcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvZ3Jlc3NKcyh0YXJnZXRFbGVtZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gZWxlbWVudCB3aXRoIGdpdmVuIHNlbGVjdG9yLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFByb2dyZXNzSnMoZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY29ycmVjdCB0cmFuc2l0aW9uIGNhbGxiYWNrXG4gICAqIFRoYW5rcyBAd2ViaW5pc3RhOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDkwMTI4LzM3NTk2NlxuICAgKlxuICAgKiBAcmV0dXJucyB0cmFuc2l0aW9uIG5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIHdoaWNoVHJhbnNpdGlvbkV2ZW50KCkge1xuICAgIHZhciB0O1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG4gICAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgJ01velRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAnV2Via2l0VHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH1cblxuICAgIGZvciAodCBpbiB0cmFuc2l0aW9ucykge1xuICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDdXJyZW50IFByb2dyZXNzSnMgdmVyc2lvblxuICAgKlxuICAgKiBAcHJvcGVydHkgdmVyc2lvblxuICAgKiBAdHlwZSBTdHJpbmdcbiAgICovXG4gIHByb2dyZXNzSnMudmVyc2lvbiA9IFZFUlNJT047XG5cbiAgLy9Qcm90b3R5cGVcbiAgcHJvZ3Jlc3NKcy5mbiA9IFByb2dyZXNzSnMucHJvdG90eXBlID0ge1xuICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb2dyZXNzSnModGhpcyk7XG4gICAgfSxcbiAgICBzZXRPcHRpb246IGZ1bmN0aW9uKG9wdGlvbiwgdmFsdWUpIHtcbiAgICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gX21lcmdlT3B0aW9ucyh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgX3N0YXJ0UHJvZ3Jlc3MuY2FsbCh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihwZXJjZW50KSB7XG4gICAgICBfc2V0UGVyY2VudC5jYWxsKHRoaXMsIHBlcmNlbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBpbmNyZWFzZTogZnVuY3Rpb24oc2l6ZSkge1xuICAgICAgX2luY3JlYXNlUGVyY2VudC5jYWxsKHRoaXMsIHNpemUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBhdXRvSW5jcmVhc2U6IGZ1bmN0aW9uKHNpemUsIG1pbGxpc2Vjb25kKSB7XG4gICAgICBfYXV0b0luY3JlYXNlLmNhbGwodGhpcywgc2l6ZSwgbWlsbGlzZWNvbmQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgX2VuZC5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBvbmJlZm9yZWVuZDogZnVuY3Rpb24ocHJvdmlkZWRDYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiAocHJvdmlkZWRDYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fb25CZWZvcmVFbmRDYWxsYmFjayA9IHByb3ZpZGVkQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGVkIGNhbGxiYWNrIGZvciBvbmJlZm9yZWVuZCB3YXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb25iZWZvcmVzdGFydDogZnVuY3Rpb24ocHJvdmlkZWRDYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiAocHJvdmlkZWRDYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fb25CZWZvcmVTdGFydENhbGxiYWNrID0gcHJvdmlkZWRDYWxsYmFjaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvdmlkZWQgY2FsbGJhY2sgZm9yIG9uYmVmb3Jlc3RhcnQgd2FzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIG9ucHJvZ3Jlc3M6IGZ1bmN0aW9uKHByb3ZpZGVkQ2FsbGJhY2spIHtcbiAgICAgIGlmICh0eXBlb2YgKHByb3ZpZGVkQ2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMuX29uUHJvZ3Jlc3NDYWxsYmFjayA9IHByb3ZpZGVkQ2FsbGJhY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGVkIGNhbGxiYWNrIGZvciBvbnByb2dyZXNzIHdhcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydHMucHJvZ3Jlc3NKcyA9IHByb2dyZXNzSnM7XG4gIHJldHVybiBwcm9ncmVzc0pzO1xufSkpO1xuIiwiaW1wb3J0IGVsZW1lbnREYXRhc2V0UG9seWZpbGwgZnJvbSAnZWxlbWVudC1kYXRhc2V0JztcbmVsZW1lbnREYXRhc2V0UG9seWZpbGwoKTtcblxucmVxdWlyZSgnanNvbjMnKTtcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xuXG5pbXBvcnQgd2luZG93IGZyb20gJ3dpbmRvdyc7XG5pbXBvcnQgeyBwcm9ncmVzc0pzIH0gZnJvbSAnLi4vdmVuZG9ycy9Qcm9ncmVzcy5qcy9zcmMvcHJvZ3Jlc3MuanMnO1xuXG53aW5kb3cucHJvZ3Jlc3NKcyA9IHdpbmRvdy5wcm9ncmVzc0pzIHx8IHByb2dyZXNzSnMoKTtcblxud2luZG93LnByb2dyZXNzSnMub25iZWZvcmVlbmQoKCkgPT4ge1xuXHRjb25zdCBfJCA9IHdpbmRvdy4kO1xuXHRpZiAoXyQpIHtcblx0XHR0cnkge1xuXHRcdFx0XyQoJy5wcm9ncmVzc2pzLWNvbnRhaW5lcicpLmhpZGUoKTtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XyQoJy5wcm9ncmVzc2pzLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuXHRcdFx0fSwgMjAwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1tYWdpYy1udW1iZXJzXG5cdFx0fSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXHR9XG59KTtcblxucmVxdWlyZSgnLi4vdmVuZG9ycy9tb2Rlcm5penIvbW9kZXJuaXpyLWN1c3RvbS5qcycpO1xucmVxdWlyZSgnQ29tbW9uL0Jvb3RlcicpO1xuXG5pZiAod2luZG93Ll9fcnVuQm9vdCkge1xuXHR3aW5kb3cuX19ydW5Cb290KCk7XG59XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCIvKiEgSlNPTiB2My4zLjIgfCBodHRwczovL2Jlc3RpZWpzLmdpdGh1Yi5pby9qc29uMyB8IENvcHlyaWdodCAyMDEyLTIwMTUsIEtpdCBDYW1icmlkZ2UsIEJlbmphbWluIFRhbiB8IGh0dHA6Ly9raXQubWl0LWxpY2Vuc2Uub3JnICovXG47KGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IHRoZSBgZGVmaW5lYCBmdW5jdGlvbiBleHBvc2VkIGJ5IGFzeW5jaHJvbm91cyBtb2R1bGUgbG9hZGVycy4gVGhlXG4gIC8vIHN0cmljdCBgZGVmaW5lYCBjaGVjayBpcyBuZWNlc3NhcnkgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBgci5qc2AuXG4gIHZhciBpc0xvYWRlciA9IHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kO1xuXG4gIC8vIEEgc2V0IG9mIHR5cGVzIHVzZWQgdG8gZGlzdGluZ3Vpc2ggb2JqZWN0cyBmcm9tIHByaW1pdGl2ZXMuXG4gIHZhciBvYmplY3RUeXBlcyA9IHtcbiAgICBcImZ1bmN0aW9uXCI6IHRydWUsXG4gICAgXCJvYmplY3RcIjogdHJ1ZVxuICB9O1xuXG4gIC8vIERldGVjdCB0aGUgYGV4cG9ydHNgIG9iamVjdCBleHBvc2VkIGJ5IENvbW1vbkpTIGltcGxlbWVudGF0aW9ucy5cbiAgdmFyIGZyZWVFeHBvcnRzID0gb2JqZWN0VHlwZXNbdHlwZW9mIGV4cG9ydHNdICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuICAvLyBVc2UgdGhlIGBnbG9iYWxgIG9iamVjdCBleHBvc2VkIGJ5IE5vZGUgKGluY2x1ZGluZyBCcm93c2VyaWZ5IHZpYVxuICAvLyBgaW5zZXJ0LW1vZHVsZS1nbG9iYWxzYCksIE5hcndoYWwsIGFuZCBSaW5nbyBhcyB0aGUgZGVmYXVsdCBjb250ZXh0LFxuICAvLyBhbmQgdGhlIGB3aW5kb3dgIG9iamVjdCBpbiBicm93c2Vycy4gUmhpbm8gZXhwb3J0cyBhIGBnbG9iYWxgIGZ1bmN0aW9uXG4gIC8vIGluc3RlYWQuXG4gIHZhciByb290ID0gb2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93IHx8IHRoaXMsXG4gICAgICBmcmVlR2xvYmFsID0gZnJlZUV4cG9ydHMgJiYgb2JqZWN0VHlwZXNbdHlwZW9mIG1vZHVsZV0gJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgdHlwZW9mIGdsb2JhbCA9PSBcIm9iamVjdFwiICYmIGdsb2JhbDtcblxuICBpZiAoZnJlZUdsb2JhbCAmJiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsKSkge1xuICAgIHJvb3QgPSBmcmVlR2xvYmFsO1xuICB9XG5cbiAgLy8gUHVibGljOiBJbml0aWFsaXplcyBKU09OIDMgdXNpbmcgdGhlIGdpdmVuIGBjb250ZXh0YCBvYmplY3QsIGF0dGFjaGluZyB0aGVcbiAgLy8gYHN0cmluZ2lmeWAgYW5kIGBwYXJzZWAgZnVuY3Rpb25zIHRvIHRoZSBzcGVjaWZpZWQgYGV4cG9ydHNgIG9iamVjdC5cbiAgZnVuY3Rpb24gcnVuSW5Db250ZXh0KGNvbnRleHQsIGV4cG9ydHMpIHtcbiAgICBjb250ZXh0IHx8IChjb250ZXh0ID0gcm9vdC5PYmplY3QoKSk7XG4gICAgZXhwb3J0cyB8fCAoZXhwb3J0cyA9IHJvb3QuT2JqZWN0KCkpO1xuXG4gICAgLy8gTmF0aXZlIGNvbnN0cnVjdG9yIGFsaWFzZXMuXG4gICAgdmFyIE51bWJlciA9IGNvbnRleHQuTnVtYmVyIHx8IHJvb3QuTnVtYmVyLFxuICAgICAgICBTdHJpbmcgPSBjb250ZXh0LlN0cmluZyB8fCByb290LlN0cmluZyxcbiAgICAgICAgT2JqZWN0ID0gY29udGV4dC5PYmplY3QgfHwgcm9vdC5PYmplY3QsXG4gICAgICAgIERhdGUgPSBjb250ZXh0LkRhdGUgfHwgcm9vdC5EYXRlLFxuICAgICAgICBTeW50YXhFcnJvciA9IGNvbnRleHQuU3ludGF4RXJyb3IgfHwgcm9vdC5TeW50YXhFcnJvcixcbiAgICAgICAgVHlwZUVycm9yID0gY29udGV4dC5UeXBlRXJyb3IgfHwgcm9vdC5UeXBlRXJyb3IsXG4gICAgICAgIE1hdGggPSBjb250ZXh0Lk1hdGggfHwgcm9vdC5NYXRoLFxuICAgICAgICBuYXRpdmVKU09OID0gY29udGV4dC5KU09OIHx8IHJvb3QuSlNPTjtcblxuICAgIC8vIERlbGVnYXRlIHRvIHRoZSBuYXRpdmUgYHN0cmluZ2lmeWAgYW5kIGBwYXJzZWAgaW1wbGVtZW50YXRpb25zLlxuICAgIGlmICh0eXBlb2YgbmF0aXZlSlNPTiA9PSBcIm9iamVjdFwiICYmIG5hdGl2ZUpTT04pIHtcbiAgICAgIGV4cG9ydHMuc3RyaW5naWZ5ID0gbmF0aXZlSlNPTi5zdHJpbmdpZnk7XG4gICAgICBleHBvcnRzLnBhcnNlID0gbmF0aXZlSlNPTi5wYXJzZTtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBhbGlhc2VzLlxuICAgIHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgIGdldENsYXNzID0gb2JqZWN0UHJvdG8udG9TdHJpbmcsXG4gICAgICAgIGlzUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgLy8gSW50ZXJuYWw6IENvbnRhaW5zIGB0cnkuLi5jYXRjaGAgbG9naWMgdXNlZCBieSBvdGhlciBmdW5jdGlvbnMuXG4gICAgLy8gVGhpcyBwcmV2ZW50cyBvdGhlciBmdW5jdGlvbnMgZnJvbSBiZWluZyBkZW9wdGltaXplZC5cbiAgICBmdW5jdGlvbiBhdHRlbXB0KGZ1bmMsIGVycm9yRnVuYykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgIGlmIChlcnJvckZ1bmMpIHtcbiAgICAgICAgICBlcnJvckZ1bmMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRlc3QgdGhlIGBEYXRlI2dldFVUQypgIG1ldGhvZHMuIEJhc2VkIG9uIHdvcmsgYnkgQFlhZmZsZS5cbiAgICB2YXIgaXNFeHRlbmRlZCA9IG5ldyBEYXRlKC0zNTA5ODI3MzM0NTczMjkyKTtcbiAgICBhdHRlbXB0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFRoZSBgZ2V0VVRDRnVsbFllYXJgLCBgTW9udGhgLCBhbmQgYERhdGVgIG1ldGhvZHMgcmV0dXJuIG5vbnNlbnNpY2FsXG4gICAgICAvLyByZXN1bHRzIGZvciBjZXJ0YWluIGRhdGVzIGluIE9wZXJhID49IDEwLjUzLlxuICAgICAgaXNFeHRlbmRlZCA9IGlzRXh0ZW5kZWQuZ2V0VVRDRnVsbFllYXIoKSA9PSAtMTA5MjUyICYmIGlzRXh0ZW5kZWQuZ2V0VVRDTW9udGgoKSA9PT0gMCAmJiBpc0V4dGVuZGVkLmdldFVUQ0RhdGUoKSA9PT0gMSAmJlxuICAgICAgICBpc0V4dGVuZGVkLmdldFVUQ0hvdXJzKCkgPT0gMTAgJiYgaXNFeHRlbmRlZC5nZXRVVENNaW51dGVzKCkgPT0gMzcgJiYgaXNFeHRlbmRlZC5nZXRVVENTZWNvbmRzKCkgPT0gNiAmJiBpc0V4dGVuZGVkLmdldFVUQ01pbGxpc2Vjb25kcygpID09IDcwODtcbiAgICB9KTtcblxuICAgIC8vIEludGVybmFsOiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5hdGl2ZSBgSlNPTi5zdHJpbmdpZnlgIGFuZCBgcGFyc2VgXG4gICAgLy8gaW1wbGVtZW50YXRpb25zIGFyZSBzcGVjLWNvbXBsaWFudC4gQmFzZWQgb24gd29yayBieSBLZW4gU255ZGVyLlxuICAgIGZ1bmN0aW9uIGhhcyhuYW1lKSB7XG4gICAgICBpZiAoaGFzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgLy8gUmV0dXJuIGNhY2hlZCBmZWF0dXJlIHRlc3QgcmVzdWx0LlxuICAgICAgICByZXR1cm4gaGFzW25hbWVdO1xuICAgICAgfVxuICAgICAgdmFyIGlzU3VwcG9ydGVkO1xuICAgICAgaWYgKG5hbWUgPT0gXCJidWctc3RyaW5nLWNoYXItaW5kZXhcIikge1xuICAgICAgICAvLyBJRSA8PSA3IGRvZXNuJ3Qgc3VwcG9ydCBhY2Nlc3Npbmcgc3RyaW5nIGNoYXJhY3RlcnMgdXNpbmcgc3F1YXJlXG4gICAgICAgIC8vIGJyYWNrZXQgbm90YXRpb24uIElFIDggb25seSBzdXBwb3J0cyB0aGlzIGZvciBwcmltaXRpdmVzLlxuICAgICAgICBpc1N1cHBvcnRlZCA9IFwiYVwiWzBdICE9IFwiYVwiO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwianNvblwiKSB7XG4gICAgICAgIC8vIEluZGljYXRlcyB3aGV0aGVyIGJvdGggYEpTT04uc3RyaW5naWZ5YCBhbmQgYEpTT04ucGFyc2VgIGFyZVxuICAgICAgICAvLyBzdXBwb3J0ZWQuXG4gICAgICAgIGlzU3VwcG9ydGVkID0gaGFzKFwianNvbi1zdHJpbmdpZnlcIikgJiYgaGFzKFwiZGF0ZS1zZXJpYWxpemF0aW9uXCIpICYmIGhhcyhcImpzb24tcGFyc2VcIik7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJkYXRlLXNlcmlhbGl6YXRpb25cIikge1xuICAgICAgICAvLyBJbmRpY2F0ZXMgd2hldGhlciBgRGF0ZWBzIGNhbiBiZSBzZXJpYWxpemVkIGFjY3VyYXRlbHkgYnkgYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgaXNTdXBwb3J0ZWQgPSBoYXMoXCJqc29uLXN0cmluZ2lmeVwiKSAmJiBpc0V4dGVuZGVkO1xuICAgICAgICBpZiAoaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgICB2YXIgc3RyaW5naWZ5ID0gZXhwb3J0cy5zdHJpbmdpZnk7XG4gICAgICAgICAgYXR0ZW1wdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpc1N1cHBvcnRlZCA9XG4gICAgICAgICAgICAgIC8vIEpTT04gMiwgUHJvdG90eXBlIDw9IDEuNywgYW5kIG9sZGVyIFdlYktpdCBidWlsZHMgaW5jb3JyZWN0bHlcbiAgICAgICAgICAgICAgLy8gc2VyaWFsaXplIGV4dGVuZGVkIHllYXJzLlxuICAgICAgICAgICAgICBzdHJpbmdpZnkobmV3IERhdGUoLTguNjRlMTUpKSA9PSAnXCItMjcxODIxLTA0LTIwVDAwOjAwOjAwLjAwMFpcIicgJiZcbiAgICAgICAgICAgICAgLy8gVGhlIG1pbGxpc2Vjb25kcyBhcmUgb3B0aW9uYWwgaW4gRVMgNSwgYnV0IHJlcXVpcmVkIGluIDUuMS5cbiAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKDguNjRlMTUpKSA9PSAnXCIrMjc1NzYwLTA5LTEzVDAwOjAwOjAwLjAwMFpcIicgJiZcbiAgICAgICAgICAgICAgLy8gRmlyZWZveCA8PSAxMS4wIGluY29ycmVjdGx5IHNlcmlhbGl6ZXMgeWVhcnMgcHJpb3IgdG8gMCBhcyBuZWdhdGl2ZVxuICAgICAgICAgICAgICAvLyBmb3VyLWRpZ2l0IHllYXJzIGluc3RlYWQgb2Ygc2l4LWRpZ2l0IHllYXJzLiBDcmVkaXRzOiBAWWFmZmxlLlxuICAgICAgICAgICAgICBzdHJpbmdpZnkobmV3IERhdGUoLTYyMTk4NzU1MmU1KSkgPT0gJ1wiLTAwMDAwMS0wMS0wMVQwMDowMDowMC4wMDBaXCInICYmXG4gICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuNSBhbmQgT3BlcmEgPj0gMTAuNTMgaW5jb3JyZWN0bHkgc2VyaWFsaXplIG1pbGxpc2Vjb25kXG4gICAgICAgICAgICAgIC8vIHZhbHVlcyBsZXNzIHRoYW4gMTAwMC4gQ3JlZGl0czogQFlhZmZsZS5cbiAgICAgICAgICAgICAgc3RyaW5naWZ5KG5ldyBEYXRlKC0xKSkgPT0gJ1wiMTk2OS0xMi0zMVQyMzo1OTo1OS45OTlaXCInO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUsIHNlcmlhbGl6ZWQgPSAne1wiYVwiOlsxLHRydWUsZmFsc2UsbnVsbCxcIlxcXFx1MDAwMFxcXFxiXFxcXG5cXFxcZlxcXFxyXFxcXHRcIl19JztcbiAgICAgICAgLy8gVGVzdCBgSlNPTi5zdHJpbmdpZnlgLlxuICAgICAgICBpZiAobmFtZSA9PSBcImpzb24tc3RyaW5naWZ5XCIpIHtcbiAgICAgICAgICB2YXIgc3RyaW5naWZ5ID0gZXhwb3J0cy5zdHJpbmdpZnksIHN0cmluZ2lmeVN1cHBvcnRlZCA9IHR5cGVvZiBzdHJpbmdpZnkgPT0gXCJmdW5jdGlvblwiO1xuICAgICAgICAgIGlmIChzdHJpbmdpZnlTdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgIC8vIEEgdGVzdCBmdW5jdGlvbiBvYmplY3Qgd2l0aCBhIGN1c3RvbSBgdG9KU09OYCBtZXRob2QuXG4gICAgICAgICAgICAodmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSkudG9KU09OID0gdmFsdWU7XG4gICAgICAgICAgICBhdHRlbXB0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID1cbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDMuMWIxIGFuZCBiMiBzZXJpYWxpemUgc3RyaW5nLCBudW1iZXIsIGFuZCBib29sZWFuXG4gICAgICAgICAgICAgICAgLy8gcHJpbWl0aXZlcyBhcyBvYmplY3QgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KDApID09PSBcIjBcIiAmJlxuICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCBiMiwgYW5kIEpTT04gMiBzZXJpYWxpemUgd3JhcHBlZCBwcmltaXRpdmVzIGFzIG9iamVjdFxuICAgICAgICAgICAgICAgIC8vIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgTnVtYmVyKCkpID09PSBcIjBcIiAmJlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeShuZXcgU3RyaW5nKCkpID09ICdcIlwiJyAmJlxuICAgICAgICAgICAgICAgIC8vIEZGIDMuMWIxLCAyIHRocm93IGFuIGVycm9yIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAsIGB1bmRlZmluZWRgLCBvclxuICAgICAgICAgICAgICAgIC8vIGRvZXMgbm90IGRlZmluZSBhIGNhbm9uaWNhbCBKU09OIHJlcHJlc2VudGF0aW9uICh0aGlzIGFwcGxpZXMgdG9cbiAgICAgICAgICAgICAgICAvLyBvYmplY3RzIHdpdGggYHRvSlNPTmAgcHJvcGVydGllcyBhcyB3ZWxsLCAqdW5sZXNzKiB0aGV5IGFyZSBuZXN0ZWRcbiAgICAgICAgICAgICAgICAvLyB3aXRoaW4gYW4gb2JqZWN0IG9yIGFycmF5KS5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoZ2V0Q2xhc3MpID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAvLyBJRSA4IHNlcmlhbGl6ZXMgYHVuZGVmaW5lZGAgYXMgYFwidW5kZWZpbmVkXCJgLiBTYWZhcmkgPD0gNS4xLjcgYW5kXG4gICAgICAgICAgICAgICAgLy8gRkYgMy4xYjMgcGFzcyB0aGlzIHRlc3QuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KHVuZGVmaW5lZCkgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuNyBhbmQgRkYgMy4xYjMgdGhyb3cgYEVycm9yYHMgYW5kIGBUeXBlRXJyb3JgcyxcbiAgICAgICAgICAgICAgICAvLyByZXNwZWN0aXZlbHksIGlmIHRoZSB2YWx1ZSBpcyBvbWl0dGVkIGVudGlyZWx5LlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeSgpID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgMiB0aHJvdyBhbiBlcnJvciBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgbm90IGEgbnVtYmVyLFxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgYXJyYXksIG9iamVjdCwgQm9vbGVhbiwgb3IgYG51bGxgIGxpdGVyYWwuIFRoaXMgYXBwbGllcyB0b1xuICAgICAgICAgICAgICAgIC8vIG9iamVjdHMgd2l0aCBjdXN0b20gYHRvSlNPTmAgbWV0aG9kcyBhcyB3ZWxsLCB1bmxlc3MgdGhleSBhcmUgbmVzdGVkXG4gICAgICAgICAgICAgICAgLy8gaW5zaWRlIG9iamVjdCBvciBhcnJheSBsaXRlcmFscy4gWVVJIDMuMC4wYjEgaWdub3JlcyBjdXN0b20gYHRvSlNPTmBcbiAgICAgICAgICAgICAgICAvLyBtZXRob2RzIGVudGlyZWx5LlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeSh2YWx1ZSkgPT09IFwiMVwiICYmXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KFt2YWx1ZV0pID09IFwiWzFdXCIgJiZcbiAgICAgICAgICAgICAgICAvLyBQcm90b3R5cGUgPD0gMS42LjEgc2VyaWFsaXplcyBgW3VuZGVmaW5lZF1gIGFzIGBcIltdXCJgIGluc3RlYWQgb2ZcbiAgICAgICAgICAgICAgICAvLyBgXCJbbnVsbF1cImAuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KFt1bmRlZmluZWRdKSA9PSBcIltudWxsXVwiICYmXG4gICAgICAgICAgICAgICAgLy8gWVVJIDMuMC4wYjEgZmFpbHMgdG8gc2VyaWFsaXplIGBudWxsYCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkobnVsbCkgPT0gXCJudWxsXCIgJiZcbiAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgMiBoYWx0cyBzZXJpYWxpemF0aW9uIGlmIGFuIGFycmF5IGNvbnRhaW5zIGEgZnVuY3Rpb246XG4gICAgICAgICAgICAgICAgLy8gYFsxLCB0cnVlLCBnZXRDbGFzcywgMV1gIHNlcmlhbGl6ZXMgYXMgXCJbMSx0cnVlLF0sXCIuIEZGIDMuMWIzXG4gICAgICAgICAgICAgICAgLy8gZWxpZGVzIG5vbi1KU09OIHZhbHVlcyBmcm9tIG9iamVjdHMgYW5kIGFycmF5cywgdW5sZXNzIHRoZXlcbiAgICAgICAgICAgICAgICAvLyBkZWZpbmUgY3VzdG9tIGB0b0pTT05gIG1ldGhvZHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KFt1bmRlZmluZWQsIGdldENsYXNzLCBudWxsXSkgPT0gXCJbbnVsbCxudWxsLG51bGxdXCIgJiZcbiAgICAgICAgICAgICAgICAvLyBTaW1wbGUgc2VyaWFsaXphdGlvbiB0ZXN0LiBGRiAzLjFiMSB1c2VzIFVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIHdoZXJlIGNoYXJhY3RlciBlc2NhcGUgY29kZXMgYXJlIGV4cGVjdGVkIChlLmcuLCBgXFxiYCA9PiBgXFx1MDAwOGApLlxuICAgICAgICAgICAgICAgIHN0cmluZ2lmeSh7IFwiYVwiOiBbdmFsdWUsIHRydWUsIGZhbHNlLCBudWxsLCBcIlxceDAwXFxiXFxuXFxmXFxyXFx0XCJdIH0pID09IHNlcmlhbGl6ZWQgJiZcbiAgICAgICAgICAgICAgICAvLyBGRiAzLjFiMSBhbmQgYjIgaWdub3JlIHRoZSBgZmlsdGVyYCBhbmQgYHdpZHRoYCBhcmd1bWVudHMuXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5KG51bGwsIHZhbHVlKSA9PT0gXCIxXCIgJiZcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnkoWzEsIDJdLCBudWxsLCAxKSA9PSBcIltcXG4gMSxcXG4gMlxcbl1cIjtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc3RyaW5naWZ5U3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSBzdHJpbmdpZnlTdXBwb3J0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGVzdCBgSlNPTi5wYXJzZWAuXG4gICAgICAgIGlmIChuYW1lID09IFwianNvbi1wYXJzZVwiKSB7XG4gICAgICAgICAgdmFyIHBhcnNlID0gZXhwb3J0cy5wYXJzZSwgcGFyc2VTdXBwb3J0ZWQ7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGF0dGVtcHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvLyBGRiAzLjFiMSwgYjIgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYSBiYXJlIGxpdGVyYWwgaXMgcHJvdmlkZWQuXG4gICAgICAgICAgICAgIC8vIENvbmZvcm1pbmcgaW1wbGVtZW50YXRpb25zIHNob3VsZCBhbHNvIGNvZXJjZSB0aGUgaW5pdGlhbCBhcmd1bWVudCB0b1xuICAgICAgICAgICAgICAvLyBhIHN0cmluZyBwcmlvciB0byBwYXJzaW5nLlxuICAgICAgICAgICAgICBpZiAocGFyc2UoXCIwXCIpID09PSAwICYmICFwYXJzZShmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBTaW1wbGUgcGFyc2luZyB0ZXN0LlxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2Uoc2VyaWFsaXplZCk7XG4gICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSB2YWx1ZVtcImFcIl0ubGVuZ3RoID09IDUgJiYgdmFsdWVbXCJhXCJdWzBdID09PSAxO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgYXR0ZW1wdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmFyaSA8PSA1LjEuMiBhbmQgRkYgMy4xYjEgYWxsb3cgdW5lc2NhcGVkIHRhYnMgaW4gc3RyaW5ncy5cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSAhcGFyc2UoJ1wiXFx0XCInKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGVtcHQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDQuMCBhbmQgNC4wLjEgYWxsb3cgbGVhZGluZyBgK2Agc2lnbnMgYW5kIGxlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAvLyBkZWNpbWFsIHBvaW50cy4gRkYgNC4wLCA0LjAuMSwgYW5kIElFIDktMTAgYWxzbyBhbGxvd1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNlcnRhaW4gb2N0YWwgbGl0ZXJhbHMuXG4gICAgICAgICAgICAgICAgICAgICAgcGFyc2VTdXBwb3J0ZWQgPSBwYXJzZShcIjAxXCIpICE9PSAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChwYXJzZVN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRlbXB0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBGRiA0LjAsIDQuMC4xLCBhbmQgUmhpbm8gMS43UjMtUjQgYWxsb3cgdHJhaWxpbmcgZGVjaW1hbFxuICAgICAgICAgICAgICAgICAgICAgIC8vIHBvaW50cy4gVGhlc2UgZW52aXJvbm1lbnRzLCBhbG9uZyB3aXRoIEZGIDMuMWIxIGFuZCAyLFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gYWxsb3cgdHJhaWxpbmcgY29tbWFzIGluIEpTT04gb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgICAgICAgICAgICAgICAgICAgIHBhcnNlU3VwcG9ydGVkID0gcGFyc2UoXCIxLlwiKSAhPT0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBhcnNlU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXNTdXBwb3J0ZWQgPSBwYXJzZVN1cHBvcnRlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc1tuYW1lXSA9ICEhaXNTdXBwb3J0ZWQ7XG4gICAgfVxuICAgIGhhc1tcImJ1Zy1zdHJpbmctY2hhci1pbmRleFwiXSA9IGhhc1tcImRhdGUtc2VyaWFsaXphdGlvblwiXSA9IGhhc1tcImpzb25cIl0gPSBoYXNbXCJqc29uLXN0cmluZ2lmeVwiXSA9IGhhc1tcImpzb24tcGFyc2VcIl0gPSBudWxsO1xuXG4gICAgaWYgKCFoYXMoXCJqc29uXCIpKSB7XG4gICAgICAvLyBDb21tb24gYFtbQ2xhc3NdXWAgbmFtZSBhbGlhc2VzLlxuICAgICAgdmFyIGZ1bmN0aW9uQ2xhc3MgPSBcIltvYmplY3QgRnVuY3Rpb25dXCIsXG4gICAgICAgICAgZGF0ZUNsYXNzID0gXCJbb2JqZWN0IERhdGVdXCIsXG4gICAgICAgICAgbnVtYmVyQ2xhc3MgPSBcIltvYmplY3QgTnVtYmVyXVwiLFxuICAgICAgICAgIHN0cmluZ0NsYXNzID0gXCJbb2JqZWN0IFN0cmluZ11cIixcbiAgICAgICAgICBhcnJheUNsYXNzID0gXCJbb2JqZWN0IEFycmF5XVwiLFxuICAgICAgICAgIGJvb2xlYW5DbGFzcyA9IFwiW29iamVjdCBCb29sZWFuXVwiO1xuXG4gICAgICAvLyBEZXRlY3QgaW5jb21wbGV0ZSBzdXBwb3J0IGZvciBhY2Nlc3Npbmcgc3RyaW5nIGNoYXJhY3RlcnMgYnkgaW5kZXguXG4gICAgICB2YXIgY2hhckluZGV4QnVnZ3kgPSBoYXMoXCJidWctc3RyaW5nLWNoYXItaW5kZXhcIik7XG5cbiAgICAgIC8vIEludGVybmFsOiBOb3JtYWxpemVzIHRoZSBgZm9yLi4uaW5gIGl0ZXJhdGlvbiBhbGdvcml0aG0gYWNyb3NzXG4gICAgICAvLyBlbnZpcm9ubWVudHMuIEVhY2ggZW51bWVyYXRlZCBrZXkgaXMgeWllbGRlZCB0byBhIGBjYWxsYmFja2AgZnVuY3Rpb24uXG4gICAgICB2YXIgZm9yT3duID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNpemUgPSAwLCBQcm9wZXJ0aWVzLCBkb250RW51bXMsIHByb3BlcnR5O1xuXG4gICAgICAgIC8vIFRlc3RzIGZvciBidWdzIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50J3MgYGZvci4uLmluYCBhbGdvcml0aG0uIFRoZVxuICAgICAgICAvLyBgdmFsdWVPZmAgcHJvcGVydHkgaW5oZXJpdHMgdGhlIG5vbi1lbnVtZXJhYmxlIGZsYWcgZnJvbVxuICAgICAgICAvLyBgT2JqZWN0LnByb3RvdHlwZWAgaW4gb2xkZXIgdmVyc2lvbnMgb2YgSUUsIE5ldHNjYXBlLCBhbmQgTW96aWxsYS5cbiAgICAgICAgKFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZU9mID0gMDtcbiAgICAgICAgfSkucHJvdG90eXBlLnZhbHVlT2YgPSAwO1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYFByb3BlcnRpZXNgIGNsYXNzLlxuICAgICAgICBkb250RW51bXMgPSBuZXcgUHJvcGVydGllcygpO1xuICAgICAgICBmb3IgKHByb3BlcnR5IGluIGRvbnRFbnVtcykge1xuICAgICAgICAgIC8vIElnbm9yZSBhbGwgcHJvcGVydGllcyBpbmhlcml0ZWQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuXG4gICAgICAgICAgaWYgKGlzUHJvcGVydHkuY2FsbChkb250RW51bXMsIHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBQcm9wZXJ0aWVzID0gZG9udEVudW1zID0gbnVsbDtcblxuICAgICAgICAvLyBOb3JtYWxpemUgdGhlIGl0ZXJhdGlvbiBhbGdvcml0aG0uXG4gICAgICAgIGlmICghc2l6ZSkge1xuICAgICAgICAgIC8vIEEgbGlzdCBvZiBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC5cbiAgICAgICAgICBkb250RW51bXMgPSBbXCJ2YWx1ZU9mXCIsIFwidG9TdHJpbmdcIiwgXCJ0b0xvY2FsZVN0cmluZ1wiLCBcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsIFwiaXNQcm90b3R5cGVPZlwiLCBcImhhc093blByb3BlcnR5XCIsIFwiY29uc3RydWN0b3JcIl07XG4gICAgICAgICAgLy8gSUUgPD0gOCwgTW96aWxsYSAxLjAsIGFuZCBOZXRzY2FwZSA2LjIgaWdub3JlIHNoYWRvd2VkIG5vbi1lbnVtZXJhYmxlXG4gICAgICAgICAgLy8gcHJvcGVydGllcy5cbiAgICAgICAgICBmb3JPd24gPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGlzRnVuY3Rpb24gPSBnZXRDbGFzcy5jYWxsKG9iamVjdCkgPT0gZnVuY3Rpb25DbGFzcywgcHJvcGVydHksIGxlbmd0aDtcbiAgICAgICAgICAgIHZhciBoYXNQcm9wZXJ0eSA9ICFpc0Z1bmN0aW9uICYmIHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgIT0gXCJmdW5jdGlvblwiICYmIG9iamVjdFR5cGVzW3R5cGVvZiBvYmplY3QuaGFzT3duUHJvcGVydHldICYmIG9iamVjdC5oYXNPd25Qcm9wZXJ0eSB8fCBpc1Byb3BlcnR5O1xuICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgLy8gR2Vja28gPD0gMS4wIGVudW1lcmF0ZXMgdGhlIGBwcm90b3R5cGVgIHByb3BlcnR5IG9mIGZ1bmN0aW9ucyB1bmRlclxuICAgICAgICAgICAgICAvLyBjZXJ0YWluIGNvbmRpdGlvbnM7IElFIGRvZXMgbm90LlxuICAgICAgICAgICAgICBpZiAoIShpc0Z1bmN0aW9uICYmIHByb3BlcnR5ID09IFwicHJvdG90eXBlXCIpICYmIGhhc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggbm9uLWVudW1lcmFibGUgcHJvcGVydHkuXG4gICAgICAgICAgICBmb3IgKGxlbmd0aCA9IGRvbnRFbnVtcy5sZW5ndGg7IHByb3BlcnR5ID0gZG9udEVudW1zWy0tbGVuZ3RoXTspIHtcbiAgICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGJ1Z3MgZGV0ZWN0ZWQ7IHVzZSB0aGUgc3RhbmRhcmQgYGZvci4uLmluYCBhbGdvcml0aG0uXG4gICAgICAgICAgZm9yT3duID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBpc0Z1bmN0aW9uID0gZ2V0Q2xhc3MuY2FsbChvYmplY3QpID09IGZ1bmN0aW9uQ2xhc3MsIHByb3BlcnR5LCBpc0NvbnN0cnVjdG9yO1xuICAgICAgICAgICAgZm9yIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgaWYgKCEoaXNGdW5jdGlvbiAmJiBwcm9wZXJ0eSA9PSBcInByb3RvdHlwZVwiKSAmJiBpc1Byb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkgJiYgIShpc0NvbnN0cnVjdG9yID0gcHJvcGVydHkgPT09IFwiY29uc3RydWN0b3JcIikpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IGludm9rZSB0aGUgY2FsbGJhY2sgZm9yIHRoZSBgY29uc3RydWN0b3JgIHByb3BlcnR5IGR1ZSB0b1xuICAgICAgICAgICAgLy8gY3Jvc3MtZW52aXJvbm1lbnQgaW5jb25zaXN0ZW5jaWVzLlxuICAgICAgICAgICAgaWYgKGlzQ29uc3RydWN0b3IgfHwgaXNQcm9wZXJ0eS5jYWxsKG9iamVjdCwgKHByb3BlcnR5ID0gXCJjb25zdHJ1Y3RvclwiKSkpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2socHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvck93bihvYmplY3QsIGNhbGxiYWNrKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIFB1YmxpYzogU2VyaWFsaXplcyBhIEphdmFTY3JpcHQgYHZhbHVlYCBhcyBhIEpTT04gc3RyaW5nLiBUaGUgb3B0aW9uYWxcbiAgICAgIC8vIGBmaWx0ZXJgIGFyZ3VtZW50IG1heSBzcGVjaWZ5IGVpdGhlciBhIGZ1bmN0aW9uIHRoYXQgYWx0ZXJzIGhvdyBvYmplY3QgYW5kXG4gICAgICAvLyBhcnJheSBtZW1iZXJzIGFyZSBzZXJpYWxpemVkLCBvciBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCBudW1iZXJzIHRoYXRcbiAgICAgIC8vIGluZGljYXRlcyB3aGljaCBwcm9wZXJ0aWVzIHNob3VsZCBiZSBzZXJpYWxpemVkLiBUaGUgb3B0aW9uYWwgYHdpZHRoYFxuICAgICAgLy8gYXJndW1lbnQgbWF5IGJlIGVpdGhlciBhIHN0cmluZyBvciBudW1iZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGluZGVudGF0aW9uXG4gICAgICAvLyBsZXZlbCBvZiB0aGUgb3V0cHV0LlxuICAgICAgaWYgKCFoYXMoXCJqc29uLXN0cmluZ2lmeVwiKSAmJiAhaGFzKFwiZGF0ZS1zZXJpYWxpemF0aW9uXCIpKSB7XG4gICAgICAgIC8vIEludGVybmFsOiBBIG1hcCBvZiBjb250cm9sIGNoYXJhY3RlcnMgYW5kIHRoZWlyIGVzY2FwZWQgZXF1aXZhbGVudHMuXG4gICAgICAgIHZhciBFc2NhcGVzID0ge1xuICAgICAgICAgIDkyOiBcIlxcXFxcXFxcXCIsXG4gICAgICAgICAgMzQ6ICdcXFxcXCInLFxuICAgICAgICAgIDg6IFwiXFxcXGJcIixcbiAgICAgICAgICAxMjogXCJcXFxcZlwiLFxuICAgICAgICAgIDEwOiBcIlxcXFxuXCIsXG4gICAgICAgICAgMTM6IFwiXFxcXHJcIixcbiAgICAgICAgICA5OiBcIlxcXFx0XCJcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogQ29udmVydHMgYHZhbHVlYCBpbnRvIGEgemVyby1wYWRkZWQgc3RyaW5nIHN1Y2ggdGhhdCBpdHNcbiAgICAgICAgLy8gbGVuZ3RoIGlzIGF0IGxlYXN0IGVxdWFsIHRvIGB3aWR0aGAuIFRoZSBgd2lkdGhgIG11c3QgYmUgPD0gNi5cbiAgICAgICAgdmFyIGxlYWRpbmdaZXJvZXMgPSBcIjAwMDAwMFwiO1xuICAgICAgICB2YXIgdG9QYWRkZWRTdHJpbmcgPSBmdW5jdGlvbiAod2lkdGgsIHZhbHVlKSB7XG4gICAgICAgICAgLy8gVGhlIGB8fCAwYCBleHByZXNzaW9uIGlzIG5lY2Vzc2FyeSB0byB3b3JrIGFyb3VuZCBhIGJ1ZyBpblxuICAgICAgICAgIC8vIE9wZXJhIDw9IDcuNTR1MiB3aGVyZSBgMCA9PSAtMGAsIGJ1dCBgU3RyaW5nKC0wKSAhPT0gXCIwXCJgLlxuICAgICAgICAgIHJldHVybiAobGVhZGluZ1plcm9lcyArICh2YWx1ZSB8fCAwKSkuc2xpY2UoLXdpZHRoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogU2VyaWFsaXplcyBhIGRhdGUgb2JqZWN0LlxuICAgICAgICB2YXIgc2VyaWFsaXplRGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHZhciBnZXREYXRhLCB5ZWFyLCBtb250aCwgZGF0ZSwgdGltZSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcztcbiAgICAgICAgICAvLyBEZWZpbmUgYWRkaXRpb25hbCB1dGlsaXR5IG1ldGhvZHMgaWYgdGhlIGBEYXRlYCBtZXRob2RzIGFyZSBidWdneS5cbiAgICAgICAgICBpZiAoIWlzRXh0ZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgICAgICAgICAvLyBBIG1hcHBpbmcgYmV0d2VlbiB0aGUgbW9udGhzIG9mIHRoZSB5ZWFyIGFuZCB0aGUgbnVtYmVyIG9mIGRheXMgYmV0d2VlblxuICAgICAgICAgICAgLy8gSmFudWFyeSAxc3QgYW5kIHRoZSBmaXJzdCBvZiB0aGUgcmVzcGVjdGl2ZSBtb250aC5cbiAgICAgICAgICAgIHZhciBNb250aHMgPSBbMCwgMzEsIDU5LCA5MCwgMTIwLCAxNTEsIDE4MSwgMjEyLCAyNDMsIDI3MywgMzA0LCAzMzRdO1xuICAgICAgICAgICAgLy8gSW50ZXJuYWw6IENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBkYXlzIGJldHdlZW4gdGhlIFVuaXggZXBvY2ggYW5kIHRoZVxuICAgICAgICAgICAgLy8gZmlyc3QgZGF5IG9mIHRoZSBnaXZlbiBtb250aC5cbiAgICAgICAgICAgIHZhciBnZXREYXkgPSBmdW5jdGlvbiAoeWVhciwgbW9udGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIE1vbnRoc1ttb250aF0gKyAzNjUgKiAoeWVhciAtIDE5NzApICsgZmxvb3IoKHllYXIgLSAxOTY5ICsgKG1vbnRoID0gKyhtb250aCA+IDEpKSkgLyA0KSAtIGZsb29yKCh5ZWFyIC0gMTkwMSArIG1vbnRoKSAvIDEwMCkgKyBmbG9vcigoeWVhciAtIDE2MDEgKyBtb250aCkgLyA0MDApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdldERhdGEgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgLy8gTWFudWFsbHkgY29tcHV0ZSB0aGUgeWVhciwgbW9udGgsIGRhdGUsIGhvdXJzLCBtaW51dGVzLFxuICAgICAgICAgICAgICAvLyBzZWNvbmRzLCBhbmQgbWlsbGlzZWNvbmRzIGlmIHRoZSBgZ2V0VVRDKmAgbWV0aG9kcyBhcmVcbiAgICAgICAgICAgICAgLy8gYnVnZ3kuIEFkYXB0ZWQgZnJvbSBAWWFmZmxlJ3MgYGRhdGUtc2hpbWAgcHJvamVjdC5cbiAgICAgICAgICAgICAgZGF0ZSA9IGZsb29yKHZhbHVlIC8gODY0ZTUpO1xuICAgICAgICAgICAgICBmb3IgKHllYXIgPSBmbG9vcihkYXRlIC8gMzY1LjI0MjUpICsgMTk3MCAtIDE7IGdldERheSh5ZWFyICsgMSwgMCkgPD0gZGF0ZTsgeWVhcisrKTtcbiAgICAgICAgICAgICAgZm9yIChtb250aCA9IGZsb29yKChkYXRlIC0gZ2V0RGF5KHllYXIsIDApKSAvIDMwLjQyKTsgZ2V0RGF5KHllYXIsIG1vbnRoICsgMSkgPD0gZGF0ZTsgbW9udGgrKyk7XG4gICAgICAgICAgICAgIGRhdGUgPSAxICsgZGF0ZSAtIGdldERheSh5ZWFyLCBtb250aCk7XG4gICAgICAgICAgICAgIC8vIFRoZSBgdGltZWAgdmFsdWUgc3BlY2lmaWVzIHRoZSB0aW1lIHdpdGhpbiB0aGUgZGF5IChzZWUgRVNcbiAgICAgICAgICAgICAgLy8gNS4xIHNlY3Rpb24gMTUuOS4xLjIpLiBUaGUgZm9ybXVsYSBgKEEgJSBCICsgQikgJSBCYCBpcyB1c2VkXG4gICAgICAgICAgICAgIC8vIHRvIGNvbXB1dGUgYEEgbW9kdWxvIEJgLCBhcyB0aGUgYCVgIG9wZXJhdG9yIGRvZXMgbm90XG4gICAgICAgICAgICAgIC8vIGNvcnJlc3BvbmQgdG8gdGhlIGBtb2R1bG9gIG9wZXJhdGlvbiBmb3IgbmVnYXRpdmUgbnVtYmVycy5cbiAgICAgICAgICAgICAgdGltZSA9ICh2YWx1ZSAlIDg2NGU1ICsgODY0ZTUpICUgODY0ZTU7XG4gICAgICAgICAgICAgIC8vIFRoZSBob3VycywgbWludXRlcywgc2Vjb25kcywgYW5kIG1pbGxpc2Vjb25kcyBhcmUgb2J0YWluZWQgYnlcbiAgICAgICAgICAgICAgLy8gZGVjb21wb3NpbmcgdGhlIHRpbWUgd2l0aGluIHRoZSBkYXkuIFNlZSBzZWN0aW9uIDE1LjkuMS4xMC5cbiAgICAgICAgICAgICAgaG91cnMgPSBmbG9vcih0aW1lIC8gMzZlNSkgJSAyNDtcbiAgICAgICAgICAgICAgbWludXRlcyA9IGZsb29yKHRpbWUgLyA2ZTQpICUgNjA7XG4gICAgICAgICAgICAgIHNlY29uZHMgPSBmbG9vcih0aW1lIC8gMWUzKSAlIDYwO1xuICAgICAgICAgICAgICBtaWxsaXNlY29uZHMgPSB0aW1lICUgMWUzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2V0RGF0YSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICB5ZWFyID0gdmFsdWUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgbW9udGggPSB2YWx1ZS5nZXRVVENNb250aCgpO1xuICAgICAgICAgICAgICBkYXRlID0gdmFsdWUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICAgICAgICBob3VycyA9IHZhbHVlLmdldFVUQ0hvdXJzKCk7XG4gICAgICAgICAgICAgIG1pbnV0ZXMgPSB2YWx1ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgICAgICAgICAgIHNlY29uZHMgPSB2YWx1ZS5nZXRVVENTZWNvbmRzKCk7XG4gICAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IHZhbHVlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VyaWFsaXplRGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gLTEgLyAwICYmIHZhbHVlIDwgMSAvIDApIHtcbiAgICAgICAgICAgICAgLy8gRGF0ZXMgYXJlIHNlcmlhbGl6ZWQgYWNjb3JkaW5nIHRvIHRoZSBgRGF0ZSN0b0pTT05gIG1ldGhvZFxuICAgICAgICAgICAgICAvLyBzcGVjaWZpZWQgaW4gRVMgNS4xIHNlY3Rpb24gMTUuOS41LjQ0LiBTZWUgc2VjdGlvbiAxNS45LjEuMTVcbiAgICAgICAgICAgICAgLy8gZm9yIHRoZSBJU08gODYwMSBkYXRlIHRpbWUgc3RyaW5nIGZvcm1hdC5cbiAgICAgICAgICAgICAgZ2V0RGF0YSh2YWx1ZSk7XG4gICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBleHRlbmRlZCB5ZWFycyBjb3JyZWN0bHkuXG4gICAgICAgICAgICAgIHZhbHVlID0gKHllYXIgPD0gMCB8fCB5ZWFyID49IDFlNCA/ICh5ZWFyIDwgMCA/IFwiLVwiIDogXCIrXCIpICsgdG9QYWRkZWRTdHJpbmcoNiwgeWVhciA8IDAgPyAteWVhciA6IHllYXIpIDogdG9QYWRkZWRTdHJpbmcoNCwgeWVhcikpICtcbiAgICAgICAgICAgICAgXCItXCIgKyB0b1BhZGRlZFN0cmluZygyLCBtb250aCArIDEpICsgXCItXCIgKyB0b1BhZGRlZFN0cmluZygyLCBkYXRlKSArXG4gICAgICAgICAgICAgIC8vIE1vbnRocywgZGF0ZXMsIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kcyBzaG91bGQgaGF2ZSB0d29cbiAgICAgICAgICAgICAgLy8gZGlnaXRzOyBtaWxsaXNlY29uZHMgc2hvdWxkIGhhdmUgdGhyZWUuXG4gICAgICAgICAgICAgIFwiVFwiICsgdG9QYWRkZWRTdHJpbmcoMiwgaG91cnMpICsgXCI6XCIgKyB0b1BhZGRlZFN0cmluZygyLCBtaW51dGVzKSArIFwiOlwiICsgdG9QYWRkZWRTdHJpbmcoMiwgc2Vjb25kcykgK1xuICAgICAgICAgICAgICAvLyBNaWxsaXNlY29uZHMgYXJlIG9wdGlvbmFsIGluIEVTIDUuMCwgYnV0IHJlcXVpcmVkIGluIDUuMS5cbiAgICAgICAgICAgICAgXCIuXCIgKyB0b1BhZGRlZFN0cmluZygzLCBtaWxsaXNlY29uZHMpICsgXCJaXCI7XG4gICAgICAgICAgICAgIHllYXIgPSBtb250aCA9IGRhdGUgPSBob3VycyA9IG1pbnV0ZXMgPSBzZWNvbmRzID0gbWlsbGlzZWNvbmRzID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBzZXJpYWxpemVEYXRlKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGb3IgZW52aXJvbm1lbnRzIHdpdGggYEpTT04uc3RyaW5naWZ5YCBidXQgYnVnZ3kgZGF0ZSBzZXJpYWxpemF0aW9uLFxuICAgICAgICAvLyB3ZSBvdmVycmlkZSB0aGUgbmF0aXZlIGBEYXRlI3RvSlNPTmAgaW1wbGVtZW50YXRpb24gd2l0aCBhXG4gICAgICAgIC8vIHNwZWMtY29tcGxpYW50IG9uZS5cbiAgICAgICAgaWYgKGhhcyhcImpzb24tc3RyaW5naWZ5XCIpICYmICFoYXMoXCJkYXRlLXNlcmlhbGl6YXRpb25cIikpIHtcbiAgICAgICAgICAvLyBJbnRlcm5hbDogdGhlIGBEYXRlI3RvSlNPTmAgaW1wbGVtZW50YXRpb24gdXNlZCB0byBvdmVycmlkZSB0aGUgbmF0aXZlIG9uZS5cbiAgICAgICAgICBmdW5jdGlvbiBkYXRlVG9KU09OIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVEYXRlKHRoaXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFB1YmxpYzogYEpTT04uc3RyaW5naWZ5YC4gU2VlIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMuXG4gICAgICAgICAgdmFyIG5hdGl2ZVN0cmluZ2lmeSA9IGV4cG9ydHMuc3RyaW5naWZ5O1xuICAgICAgICAgIGV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHNvdXJjZSwgZmlsdGVyLCB3aWR0aCkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVRvSlNPTiA9IERhdGUucHJvdG90eXBlLnRvSlNPTjtcbiAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGRhdGVUb0pTT047XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbmF0aXZlU3RyaW5naWZ5KHNvdXJjZSwgZmlsdGVyLCB3aWR0aCk7XG4gICAgICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBuYXRpdmVUb0pTT047XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJbnRlcm5hbDogRG91YmxlLXF1b3RlcyBhIHN0cmluZyBgdmFsdWVgLCByZXBsYWNpbmcgYWxsIEFTQ0lJIGNvbnRyb2xcbiAgICAgICAgICAvLyBjaGFyYWN0ZXJzIChjaGFyYWN0ZXJzIHdpdGggY29kZSB1bml0IHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDMxKSB3aXRoXG4gICAgICAgICAgLy8gdGhlaXIgZXNjYXBlZCBlcXVpdmFsZW50cy4gVGhpcyBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiB0aGVcbiAgICAgICAgICAvLyBgUXVvdGUodmFsdWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4zLlxuICAgICAgICAgIHZhciB1bmljb2RlUHJlZml4ID0gXCJcXFxcdTAwXCI7XG4gICAgICAgICAgdmFyIGVzY2FwZUNoYXIgPSBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhckNvZGUgPSBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSwgZXNjYXBlZCA9IEVzY2FwZXNbY2hhckNvZGVdO1xuICAgICAgICAgICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVzY2FwZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdW5pY29kZVByZWZpeCArIHRvUGFkZGVkU3RyaW5nKDIsIGNoYXJDb2RlLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB2YXIgcmVFc2NhcGUgPSAvW1xceDAwLVxceDFmXFx4MjJcXHg1Y10vZztcbiAgICAgICAgICB2YXIgcXVvdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJlRXNjYXBlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gJ1wiJyArXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICByZUVzY2FwZS50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgICAgICAgPyB2YWx1ZS5yZXBsYWNlKHJlRXNjYXBlLCBlc2NhcGVDaGFyKVxuICAgICAgICAgICAgICAgICAgOiB2YWx1ZVxuICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgJ1wiJztcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSW50ZXJuYWw6IFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZXMgYW4gb2JqZWN0LiBJbXBsZW1lbnRzIHRoZVxuICAgICAgICAgIC8vIGBTdHIoa2V5LCBob2xkZXIpYCwgYEpPKHZhbHVlKWAsIGFuZCBgSkEodmFsdWUpYCBvcGVyYXRpb25zLlxuICAgICAgICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiAocHJvcGVydHksIG9iamVjdCwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIGluZGVudGF0aW9uLCBzdGFjaykge1xuICAgICAgICAgICAgdmFyIHZhbHVlLCB0eXBlLCBjbGFzc05hbWUsIHJlc3VsdHMsIGVsZW1lbnQsIGluZGV4LCBsZW5ndGgsIHByZWZpeCwgcmVzdWx0O1xuICAgICAgICAgICAgYXR0ZW1wdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIE5lY2Vzc2FyeSBmb3IgaG9zdCBvYmplY3Qgc3VwcG9ydC5cbiAgICAgICAgICAgICAgdmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlLmdldFVUQ0Z1bGxZZWFyICYmIGdldENsYXNzLmNhbGwodmFsdWUpID09IGRhdGVDbGFzcyAmJiB2YWx1ZS50b0pTT04gPT09IERhdGUucHJvdG90eXBlLnRvSlNPTikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gc2VyaWFsaXplRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRvSlNPTiA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBJZiBhIHJlcGxhY2VtZW50IGZ1bmN0aW9uIHdhcyBwcm92aWRlZCwgY2FsbCBpdCB0byBvYnRhaW4gdGhlIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrLmNhbGwob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRXhpdCBlYXJseSBpZiB2YWx1ZSBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdmFsdWUgOiBcIm51bGxcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAvLyBPbmx5IGNhbGwgYGdldENsYXNzYCBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY2xhc3NOYW1lIHx8IHR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgY2FzZSBib29sZWFuQ2xhc3M6XG4gICAgICAgICAgICAgICAgLy8gQm9vbGVhbnMgYXJlIHJlcHJlc2VudGVkIGxpdGVyYWxseS5cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIHZhbHVlO1xuICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgIGNhc2UgbnVtYmVyQ2xhc3M6XG4gICAgICAgICAgICAgICAgLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBgSW5maW5pdHlgIGFuZCBgTmFOYCBhcmUgc2VyaWFsaXplZCBhc1xuICAgICAgICAgICAgICAgIC8vIGBcIm51bGxcImAuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gLTEgLyAwICYmIHZhbHVlIDwgMSAvIDAgPyBcIlwiICsgdmFsdWUgOiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICBjYXNlIHN0cmluZ0NsYXNzOlxuICAgICAgICAgICAgICAgIC8vIFN0cmluZ3MgYXJlIGRvdWJsZS1xdW90ZWQgYW5kIGVzY2FwZWQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1b3RlKFwiXCIgKyB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBzZXJpYWxpemUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGZvciBjeWNsaWMgc3RydWN0dXJlcy4gVGhpcyBpcyBhIGxpbmVhciBzZWFyY2g7IHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgIC8vIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZiB1bmlxdWUgbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICAgIGZvciAobGVuZ3RoID0gc3RhY2subGVuZ3RoOyBsZW5ndGgtLTspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhY2tbbGVuZ3RoXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEN5Y2xpYyBzdHJ1Y3R1cmVzIGNhbm5vdCBiZSBzZXJpYWxpemVkIGJ5IGBKU09OLnN0cmluZ2lmeWAuXG4gICAgICAgICAgICAgICAgICB0aHJvdyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gQWRkIHRoZSBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IGluZGVudGF0aW9uIGxldmVsIGFuZCBpbmRlbnQgb25lIGFkZGl0aW9uYWwgbGV2ZWwuXG4gICAgICAgICAgICAgIHByZWZpeCA9IGluZGVudGF0aW9uO1xuICAgICAgICAgICAgICBpbmRlbnRhdGlvbiArPSB3aGl0ZXNwYWNlO1xuICAgICAgICAgICAgICBpZiAoY2xhc3NOYW1lID09IGFycmF5Q2xhc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBzZXJpYWxpemUgYXJyYXkgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBzZXJpYWxpemUoaW5kZXgsIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtZW50ID09PSB1bmRlZmluZWQgPyBcIm51bGxcIiA6IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRzLmxlbmd0aCA/ICh3aGl0ZXNwYWNlID8gXCJbXFxuXCIgKyBpbmRlbnRhdGlvbiArIHJlc3VsdHMuam9pbihcIixcXG5cIiArIGluZGVudGF0aW9uKSArIFwiXFxuXCIgKyBwcmVmaXggKyBcIl1cIiA6IChcIltcIiArIHJlc3VsdHMuam9pbihcIixcIikgKyBcIl1cIikpIDogXCJbXVwiO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlcmlhbGl6ZSBvYmplY3QgbWVtYmVycy4gTWVtYmVycyBhcmUgc2VsZWN0ZWQgZnJvbVxuICAgICAgICAgICAgICAgIC8vIGVpdGhlciBhIHVzZXItc3BlY2lmaWVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMsIG9yIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICAvLyBpdHNlbGYuXG4gICAgICAgICAgICAgICAgZm9yT3duKHByb3BlcnRpZXMgfHwgdmFsdWUsIGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzZXJpYWxpemUocHJvcGVydHksIHZhbHVlLCBjYWxsYmFjaywgcHJvcGVydGllcywgd2hpdGVzcGFjZSwgaW5kZW50YXRpb24sIHN0YWNrKTtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3JkaW5nIHRvIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjM6IFwiSWYgYGdhcGAge3doaXRlc3BhY2V9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIG5vdCB0aGUgZW1wdHkgc3RyaW5nLCBsZXQgYG1lbWJlcmAge3F1b3RlKHByb3BlcnR5KSArIFwiOlwifVxuICAgICAgICAgICAgICAgICAgICAvLyBiZSB0aGUgY29uY2F0ZW5hdGlvbiBvZiBgbWVtYmVyYCBhbmQgdGhlIGBzcGFjZWAgY2hhcmFjdGVyLlwiXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBcImBzcGFjZWAgY2hhcmFjdGVyXCIgcmVmZXJzIHRvIHRoZSBsaXRlcmFsIHNwYWNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYXJhY3Rlciwgbm90IHRoZSBgc3BhY2VgIHt3aWR0aH0gYXJndW1lbnQgcHJvdmlkZWQgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYEpTT04uc3RyaW5naWZ5YC5cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHF1b3RlKHByb3BlcnR5KSArIFwiOlwiICsgKHdoaXRlc3BhY2UgPyBcIiBcIiA6IFwiXCIpICsgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0cy5sZW5ndGggPyAod2hpdGVzcGFjZSA/IFwie1xcblwiICsgaW5kZW50YXRpb24gKyByZXN1bHRzLmpvaW4oXCIsXFxuXCIgKyBpbmRlbnRhdGlvbikgKyBcIlxcblwiICsgcHJlZml4ICsgXCJ9XCIgOiAoXCJ7XCIgKyByZXN1bHRzLmpvaW4oXCIsXCIpICsgXCJ9XCIpKSA6IFwie31cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iamVjdCBmcm9tIHRoZSB0cmF2ZXJzZWQgb2JqZWN0IHN0YWNrLlxuICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gUHVibGljOiBgSlNPTi5zdHJpbmdpZnlgLiBTZWUgRVMgNS4xIHNlY3Rpb24gMTUuMTIuMy5cbiAgICAgICAgICBleHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChzb3VyY2UsIGZpbHRlciwgd2lkdGgpIHtcbiAgICAgICAgICAgIHZhciB3aGl0ZXNwYWNlLCBjYWxsYmFjaywgcHJvcGVydGllcywgY2xhc3NOYW1lO1xuICAgICAgICAgICAgaWYgKG9iamVjdFR5cGVzW3R5cGVvZiBmaWx0ZXJdICYmIGZpbHRlcikge1xuICAgICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKGZpbHRlcik7XG4gICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gZnVuY3Rpb25DbGFzcykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZmlsdGVyO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNsYXNzTmFtZSA9PSBhcnJheUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgcHJvcGVydHkgbmFtZXMgYXJyYXkgaW50byBhIG1ha2VzaGlmdCBzZXQuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gZmlsdGVyLmxlbmd0aCwgdmFsdWU7IGluZGV4IDwgbGVuZ3RoOykge1xuICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmaWx0ZXJbaW5kZXgrK107XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBnZXRDbGFzcy5jYWxsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gXCJbb2JqZWN0IFN0cmluZ11cIiB8fCBjbGFzc05hbWUgPT0gXCJbb2JqZWN0IE51bWJlcl1cIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW3ZhbHVlXSA9IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2V0Q2xhc3MuY2FsbCh3aWR0aCk7XG4gICAgICAgICAgICAgIGlmIChjbGFzc05hbWUgPT0gbnVtYmVyQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRoZSBgd2lkdGhgIHRvIGFuIGludGVnZXIgYW5kIGNyZWF0ZSBhIHN0cmluZyBjb250YWluaW5nXG4gICAgICAgICAgICAgICAgLy8gYHdpZHRoYCBudW1iZXIgb2Ygc3BhY2UgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICBpZiAoKHdpZHRoIC09IHdpZHRoICUgMSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAod2lkdGggPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IDEwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZm9yICh3aGl0ZXNwYWNlID0gXCJcIjsgd2hpdGVzcGFjZS5sZW5ndGggPCB3aWR0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVzcGFjZSArPSBcIiBcIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xhc3NOYW1lID09IHN0cmluZ0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgd2hpdGVzcGFjZSA9IHdpZHRoLmxlbmd0aCA8PSAxMCA/IHdpZHRoIDogd2lkdGguc2xpY2UoMCwgMTApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPcGVyYSA8PSA3LjU0dTIgZGlzY2FyZHMgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggZW1wdHkgc3RyaW5nIGtleXNcbiAgICAgICAgICAgIC8vIChgXCJcImApIG9ubHkgaWYgdGhleSBhcmUgdXNlZCBkaXJlY3RseSB3aXRoaW4gYW4gb2JqZWN0IG1lbWJlciBsaXN0XG4gICAgICAgICAgICAvLyAoZS5nLiwgYCEoXCJcIiBpbiB7IFwiXCI6IDF9KWApLlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShcIlwiLCAodmFsdWUgPSB7fSwgdmFsdWVbXCJcIl0gPSBzb3VyY2UsIHZhbHVlKSwgY2FsbGJhY2ssIHByb3BlcnRpZXMsIHdoaXRlc3BhY2UsIFwiXCIsIFtdKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFB1YmxpYzogUGFyc2VzIGEgSlNPTiBzb3VyY2Ugc3RyaW5nLlxuICAgICAgaWYgKCFoYXMoXCJqc29uLXBhcnNlXCIpKSB7XG4gICAgICAgIHZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuXG4gICAgICAgIC8vIEludGVybmFsOiBBIG1hcCBvZiBlc2NhcGVkIGNvbnRyb2wgY2hhcmFjdGVycyBhbmQgdGhlaXIgdW5lc2NhcGVkXG4gICAgICAgIC8vIGVxdWl2YWxlbnRzLlxuICAgICAgICB2YXIgVW5lc2NhcGVzID0ge1xuICAgICAgICAgIDkyOiBcIlxcXFxcIixcbiAgICAgICAgICAzNDogJ1wiJyxcbiAgICAgICAgICA0NzogXCIvXCIsXG4gICAgICAgICAgOTg6IFwiXFxiXCIsXG4gICAgICAgICAgMTE2OiBcIlxcdFwiLFxuICAgICAgICAgIDExMDogXCJcXG5cIixcbiAgICAgICAgICAxMDI6IFwiXFxmXCIsXG4gICAgICAgICAgMTE0OiBcIlxcclwiXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW50ZXJuYWw6IFN0b3JlcyB0aGUgcGFyc2VyIHN0YXRlLlxuICAgICAgICB2YXIgSW5kZXgsIFNvdXJjZTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogUmVzZXRzIHRoZSBwYXJzZXIgc3RhdGUgYW5kIHRocm93cyBhIGBTeW50YXhFcnJvcmAuXG4gICAgICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBJbmRleCA9IFNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgdGhyb3cgU3ludGF4RXJyb3IoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogUmV0dXJucyB0aGUgbmV4dCB0b2tlbiwgb3IgYFwiJFwiYCBpZiB0aGUgcGFyc2VyIGhhcyByZWFjaGVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgdGhlIHNvdXJjZSBzdHJpbmcuIEEgdG9rZW4gbWF5IGJlIGEgc3RyaW5nLCBudW1iZXIsIGBudWxsYFxuICAgICAgICAvLyBsaXRlcmFsLCBvciBCb29sZWFuIGxpdGVyYWwuXG4gICAgICAgIHZhciBsZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHNvdXJjZSA9IFNvdXJjZSwgbGVuZ3RoID0gc291cmNlLmxlbmd0aCwgdmFsdWUsIGJlZ2luLCBwb3NpdGlvbiwgaXNTaWduZWQsIGNoYXJDb2RlO1xuICAgICAgICAgIHdoaWxlIChJbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNoYXJDb2RlKSB7XG4gICAgICAgICAgICAgIGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UgdG9rZW5zLCBpbmNsdWRpbmcgdGFicywgY2FycmlhZ2UgcmV0dXJucywgbGluZVxuICAgICAgICAgICAgICAgIC8vIGZlZWRzLCBhbmQgc3BhY2UgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDEyMzogY2FzZSAxMjU6IGNhc2UgOTE6IGNhc2UgOTM6IGNhc2UgNTg6IGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgYSBwdW5jdHVhdG9yIHRva2VuIChge2AsIGB9YCwgYFtgLCBgXWAsIGA6YCwgb3IgYCxgKSBhdFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gY2hhckluZGV4QnVnZ3kgPyBzb3VyY2UuY2hhckF0KEluZGV4KSA6IHNvdXJjZVtJbmRleF07XG4gICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgLy8gYFwiYCBkZWxpbWl0cyBhIEpTT04gc3RyaW5nOyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNoYXJhY3RlciBhbmRcbiAgICAgICAgICAgICAgICAvLyBiZWdpbiBwYXJzaW5nIHRoZSBzdHJpbmcuIFN0cmluZyB0b2tlbnMgYXJlIHByZWZpeGVkIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gc2VudGluZWwgYEBgIGNoYXJhY3RlciB0byBkaXN0aW5ndWlzaCB0aGVtIGZyb20gcHVuY3R1YXRvcnMgYW5kXG4gICAgICAgICAgICAgICAgLy8gZW5kLW9mLXN0cmluZyB0b2tlbnMuXG4gICAgICAgICAgICAgICAgZm9yICh2YWx1ZSA9IFwiQFwiLCBJbmRleCsrOyBJbmRleCA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDwgMzIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5lc2NhcGVkIEFTQ0lJIGNvbnRyb2wgY2hhcmFjdGVycyAodGhvc2Ugd2l0aCBhIGNvZGUgdW5pdFxuICAgICAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHNwYWNlIGNoYXJhY3RlcikgYXJlIG5vdCBwZXJtaXR0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoYXJDb2RlID09IDkyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgcmV2ZXJzZSBzb2xpZHVzIChgXFxgKSBtYXJrcyB0aGUgYmVnaW5uaW5nIG9mIGFuIGVzY2FwZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udHJvbCBjaGFyYWN0ZXIgKGluY2x1ZGluZyBgXCJgLCBgXFxgLCBhbmQgYC9gKSBvciBVbmljb2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdCgrK0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjaGFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTI6IGNhc2UgMzQ6IGNhc2UgNDc6IGNhc2UgOTg6IGNhc2UgMTE2OiBjYXNlIDExMDogY2FzZSAxMDI6IGNhc2UgMTE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV2aXZlIGVzY2FwZWQgY29udHJvbCBjaGFyYWN0ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gVW5lc2NhcGVzW2NoYXJDb2RlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBcXHVgIG1hcmtzIHRoZSBiZWdpbm5pbmcgb2YgYSBVbmljb2RlIGVzY2FwZSBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkdmFuY2UgdG8gdGhlIGZpcnN0IGNoYXJhY3RlciBhbmQgdmFsaWRhdGUgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3VyLWRpZ2l0IGNvZGUgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbiA9ICsrSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHBvc2l0aW9uID0gSW5kZXggKyA0OyBJbmRleCA8IHBvc2l0aW9uOyBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBIHZhbGlkIHNlcXVlbmNlIGNvbXByaXNlcyBmb3VyIGhleGRpZ2l0cyAoY2FzZS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zZW5zaXRpdmUpIHRoYXQgZm9ybSBhIHNpbmdsZSBoZXhhZGVjaW1hbCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcgfHwgY2hhckNvZGUgPj0gOTcgJiYgY2hhckNvZGUgPD0gMTAyIHx8IGNoYXJDb2RlID49IDY1ICYmIGNoYXJDb2RlIDw9IDcwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgVW5pY29kZSBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV2aXZlIHRoZSBlc2NhcGVkIGNoYXJhY3Rlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IGZyb21DaGFyQ29kZShcIjB4XCIgKyBzb3VyY2Uuc2xpY2UoYmVnaW4sIEluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBlc2NhcGUgc2VxdWVuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBBbiB1bmVzY2FwZWQgZG91YmxlLXF1b3RlIGNoYXJhY3RlciBtYXJrcyB0aGUgZW5kIG9mIHRoZVxuICAgICAgICAgICAgICAgICAgICAgIC8vIHN0cmluZy5cbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSBJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW1pemUgZm9yIHRoZSBjb21tb24gY2FzZSB3aGVyZSBhIHN0cmluZyBpcyB2YWxpZC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGNoYXJDb2RlID49IDMyICYmIGNoYXJDb2RlICE9IDkyICYmIGNoYXJDb2RlICE9IDM0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdCgrK0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHN0cmluZyBhcy1pcy5cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gc291cmNlLnNsaWNlKGJlZ2luLCBJbmRleCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuY2hhckNvZGVBdChJbmRleCkgPT0gMzQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIEFkdmFuY2UgdG8gdGhlIG5leHQgY2hhcmFjdGVyIGFuZCByZXR1cm4gdGhlIHJldml2ZWQgc3RyaW5nLlxuICAgICAgICAgICAgICAgICAgSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVW50ZXJtaW5hdGVkIHN0cmluZy5cbiAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIG51bWJlcnMgYW5kIGxpdGVyYWxzLlxuICAgICAgICAgICAgICAgIGJlZ2luID0gSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gQWR2YW5jZSBwYXN0IHRoZSBuZWdhdGl2ZSBzaWduLCBpZiBvbmUgaXMgc3BlY2lmaWVkLlxuICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSA0NSkge1xuICAgICAgICAgICAgICAgICAgaXNTaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdCgrK0luZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgYW4gaW50ZWdlciBvciBmbG9hdGluZy1wb2ludCB2YWx1ZS5cbiAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIExlYWRpbmcgemVyb2VzIGFyZSBpbnRlcnByZXRlZCBhcyBvY3RhbCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICAgIGlmIChjaGFyQ29kZSA9PSA0OCAmJiAoKGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoSW5kZXggKyAxKSksIGNoYXJDb2RlID49IDQ4ICYmIGNoYXJDb2RlIDw9IDU3KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbGxlZ2FsIG9jdGFsIGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpc1NpZ25lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgLy8gUGFyc2UgdGhlIGludGVnZXIgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgZm9yICg7IEluZGV4IDwgbGVuZ3RoICYmICgoY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCkpLCBjaGFyQ29kZSA+PSA0OCAmJiBjaGFyQ29kZSA8PSA1Nyk7IEluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgLy8gRmxvYXRzIGNhbm5vdCBjb250YWluIGEgbGVhZGluZyBkZWNpbWFsIHBvaW50OyBob3dldmVyLCB0aGlzXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlIGlzIGFscmVhZHkgYWNjb3VudGVkIGZvciBieSB0aGUgcGFyc2VyLlxuICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZS5jaGFyQ29kZUF0KEluZGV4KSA9PSA0Nikge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICsrSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBkZWNpbWFsIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IHBvc2l0aW9uIDwgbGVuZ3RoOyBwb3NpdGlvbisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXJDb2RlIDwgNDggfHwgY2hhckNvZGUgPiA1Nykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PSBJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIElsbGVnYWwgdHJhaWxpbmcgZGVjaW1hbC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEluZGV4ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBQYXJzZSBleHBvbmVudHMuIFRoZSBgZWAgZGVub3RpbmcgdGhlIGV4cG9uZW50IGlzXG4gICAgICAgICAgICAgICAgICAvLyBjYXNlLWluc2Vuc2l0aXZlLlxuICAgICAgICAgICAgICAgICAgY2hhckNvZGUgPSBzb3VyY2UuY2hhckNvZGVBdChJbmRleCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gMTAxIHx8IGNoYXJDb2RlID09IDY5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJDb2RlID0gc291cmNlLmNoYXJDb2RlQXQoKytJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgcGFzdCB0aGUgc2lnbiBmb2xsb3dpbmcgdGhlIGV4cG9uZW50LCBpZiBvbmUgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BlY2lmaWVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPT0gNDMgfHwgY2hhckNvZGUgPT0gNDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBleHBvbmVudGlhbCBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgIGZvciAocG9zaXRpb24gPSBJbmRleDsgcG9zaXRpb24gPCBsZW5ndGg7IHBvc2l0aW9uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFyQ29kZSA9IHNvdXJjZS5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhckNvZGUgPCA0OCB8fCBjaGFyQ29kZSA+IDU3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09IEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gSWxsZWdhbCBlbXB0eSBleHBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEluZGV4ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBDb2VyY2UgdGhlIHBhcnNlZCB2YWx1ZSB0byBhIEphdmFTY3JpcHQgbnVtYmVyLlxuICAgICAgICAgICAgICAgICAgcmV0dXJuICtzb3VyY2Uuc2xpY2UoYmVnaW4sIEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQSBuZWdhdGl2ZSBzaWduIG1heSBvbmx5IHByZWNlZGUgbnVtYmVycy5cbiAgICAgICAgICAgICAgICBpZiAoaXNTaWduZWQpIHtcbiAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGB0cnVlYCwgYGZhbHNlYCwgYW5kIGBudWxsYCBsaXRlcmFscy5cbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IHNvdXJjZS5zbGljZShJbmRleCwgSW5kZXggKyA0KTtcbiAgICAgICAgICAgICAgICBpZiAodGVtcCA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgSW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGVtcCA9PSBcImZhbHNcIiAmJiBzb3VyY2UuY2hhckNvZGVBdChJbmRleCArIDQgKSA9PSAxMDEpIHtcbiAgICAgICAgICAgICAgICAgIEluZGV4ICs9IDU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0ZW1wID09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICAgICAgICBJbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFVucmVjb2duaXplZCB0b2tlbi5cbiAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBSZXR1cm4gdGhlIHNlbnRpbmVsIGAkYCBjaGFyYWN0ZXIgaWYgdGhlIHBhcnNlciBoYXMgcmVhY2hlZCB0aGUgZW5kXG4gICAgICAgICAgLy8gb2YgdGhlIHNvdXJjZSBzdHJpbmcuXG4gICAgICAgICAgcmV0dXJuIFwiJFwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEludGVybmFsOiBQYXJzZXMgYSBKU09OIGB2YWx1ZWAgdG9rZW4uXG4gICAgICAgIHZhciBnZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0cywgaGFzTWVtYmVycztcbiAgICAgICAgICBpZiAodmFsdWUgPT0gXCIkXCIpIHtcbiAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgZW5kIG9mIGlucHV0LlxuICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBpZiAoKGNoYXJJbmRleEJ1Z2d5ID8gdmFsdWUuY2hhckF0KDApIDogdmFsdWVbMF0pID09IFwiQFwiKSB7XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2VudGluZWwgYEBgIGNoYXJhY3Rlci5cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGFyc2Ugb2JqZWN0IGFuZCBhcnJheSBsaXRlcmFscy5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIltcIikge1xuICAgICAgICAgICAgICAvLyBQYXJzZXMgYSBKU09OIGFycmF5LCByZXR1cm5pbmcgYSBuZXcgSmF2YVNjcmlwdCBhcnJheS5cbiAgICAgICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBsZXgoKTtcbiAgICAgICAgICAgICAgICAvLyBBIGNsb3Npbmcgc3F1YXJlIGJyYWNrZXQgbWFya3MgdGhlIGVuZCBvZiB0aGUgYXJyYXkgbGl0ZXJhbC5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gXCJdXCIpIHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYXJyYXkgbGl0ZXJhbCBjb250YWlucyBlbGVtZW50cywgdGhlIGN1cnJlbnQgdG9rZW5cbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgYSBjb21tYSBzZXBhcmF0aW5nIHRoZSBwcmV2aW91cyBlbGVtZW50IGZyb20gdGhlXG4gICAgICAgICAgICAgICAgLy8gbmV4dC5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIl1cIikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgdHJhaWxpbmcgYCxgIGluIGFycmF5IGxpdGVyYWwuXG4gICAgICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQSBgLGAgbXVzdCBzZXBhcmF0ZSBlYWNoIGFycmF5IGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGhhc01lbWJlcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFbGlzaW9ucyBhbmQgbGVhZGluZyBjb21tYXMgYXJlIG5vdCBwZXJtaXR0ZWQuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZ2V0KHZhbHVlKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IFwie1wiKSB7XG4gICAgICAgICAgICAgIC8vIFBhcnNlcyBhIEpTT04gb2JqZWN0LCByZXR1cm5pbmcgYSBuZXcgSmF2YVNjcmlwdCBvYmplY3QuXG4gICAgICAgICAgICAgIHJlc3VsdHMgPSB7fTtcbiAgICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbGV4KCk7XG4gICAgICAgICAgICAgICAgLy8gQSBjbG9zaW5nIGN1cmx5IGJyYWNlIG1hcmtzIHRoZSBlbmQgb2YgdGhlIG9iamVjdCBsaXRlcmFsLlxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIn1cIikge1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBvYmplY3QgbGl0ZXJhbCBjb250YWlucyBtZW1iZXJzLCB0aGUgY3VycmVudCB0b2tlblxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSBhIGNvbW1hIHNlcGFyYXRvci5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTWVtYmVycykge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBcIn1cIikge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIFVuZXhwZWN0ZWQgdHJhaWxpbmcgYCxgIGluIG9iamVjdCBsaXRlcmFsLlxuICAgICAgICAgICAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEEgYCxgIG11c3Qgc2VwYXJhdGUgZWFjaCBvYmplY3QgbWVtYmVyLlxuICAgICAgICAgICAgICAgICAgICBhYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBoYXNNZW1iZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTGVhZGluZyBjb21tYXMgYXJlIG5vdCBwZXJtaXR0ZWQsIG9iamVjdCBwcm9wZXJ0eSBuYW1lcyBtdXN0IGJlXG4gICAgICAgICAgICAgICAgLy8gZG91YmxlLXF1b3RlZCBzdHJpbmdzLCBhbmQgYSBgOmAgbXVzdCBzZXBhcmF0ZSBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgLy8gbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IFwiLFwiIHx8IHR5cGVvZiB2YWx1ZSAhPSBcInN0cmluZ1wiIHx8IChjaGFySW5kZXhCdWdneSA/IHZhbHVlLmNoYXJBdCgwKSA6IHZhbHVlWzBdKSAhPSBcIkBcIiB8fCBsZXgoKSAhPSBcIjpcIikge1xuICAgICAgICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0c1t2YWx1ZS5zbGljZSgxKV0gPSBnZXQobGV4KCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVW5leHBlY3RlZCB0b2tlbiBlbmNvdW50ZXJlZC5cbiAgICAgICAgICAgIGFib3J0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbnRlcm5hbDogVXBkYXRlcyBhIHRyYXZlcnNlZCBvYmplY3QgbWVtYmVyLlxuICAgICAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gKHNvdXJjZSwgcHJvcGVydHksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSB3YWxrKHNvdXJjZSwgcHJvcGVydHksIGNhbGxiYWNrKTtcbiAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkZWxldGUgc291cmNlW3Byb3BlcnR5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc291cmNlW3Byb3BlcnR5XSA9IGVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEludGVybmFsOiBSZWN1cnNpdmVseSB0cmF2ZXJzZXMgYSBwYXJzZWQgSlNPTiBvYmplY3QsIGludm9raW5nIHRoZVxuICAgICAgICAvLyBgY2FsbGJhY2tgIGZ1bmN0aW9uIGZvciBlYWNoIHZhbHVlLiBUaGlzIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIHRoZVxuICAgICAgICAvLyBgV2Fsayhob2xkZXIsIG5hbWUpYCBvcGVyYXRpb24gZGVmaW5lZCBpbiBFUyA1LjEgc2VjdGlvbiAxNS4xMi4yLlxuICAgICAgICB2YXIgd2FsayA9IGZ1bmN0aW9uIChzb3VyY2UsIHByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHNvdXJjZVtwcm9wZXJ0eV0sIGxlbmd0aDtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIGBmb3JPd25gIGNhbid0IGJlIHVzZWQgdG8gdHJhdmVyc2UgYW4gYXJyYXkgaW4gT3BlcmEgPD0gOC41NFxuICAgICAgICAgICAgLy8gYmVjYXVzZSBpdHMgYE9iamVjdCNoYXNPd25Qcm9wZXJ0eWAgaW1wbGVtZW50YXRpb24gcmV0dXJucyBgZmFsc2VgXG4gICAgICAgICAgICAvLyBmb3IgYXJyYXkgaW5kaWNlcyAoZS5nLiwgYCFbMSwgMiwgM10uaGFzT3duUHJvcGVydHkoXCIwXCIpYCkuXG4gICAgICAgICAgICBpZiAoZ2V0Q2xhc3MuY2FsbCh2YWx1ZSkgPT0gYXJyYXlDbGFzcykge1xuICAgICAgICAgICAgICBmb3IgKGxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgbGVuZ3RoLS07KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlKGdldENsYXNzLCBmb3JPd24sIHZhbHVlLCBsZW5ndGgsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9yT3duKHZhbHVlLCBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGUodmFsdWUsIHByb3BlcnR5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbChzb3VyY2UsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHVibGljOiBgSlNPTi5wYXJzZWAuIFNlZSBFUyA1LjEgc2VjdGlvbiAxNS4xMi4yLlxuICAgICAgICBleHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICB2YXIgcmVzdWx0LCB2YWx1ZTtcbiAgICAgICAgICBJbmRleCA9IDA7XG4gICAgICAgICAgU291cmNlID0gXCJcIiArIHNvdXJjZTtcbiAgICAgICAgICByZXN1bHQgPSBnZXQobGV4KCkpO1xuICAgICAgICAgIC8vIElmIGEgSlNPTiBzdHJpbmcgY29udGFpbnMgbXVsdGlwbGUgdG9rZW5zLCBpdCBpcyBpbnZhbGlkLlxuICAgICAgICAgIGlmIChsZXgoKSAhPSBcIiRcIikge1xuICAgICAgICAgICAgYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gUmVzZXQgdGhlIHBhcnNlciBzdGF0ZS5cbiAgICAgICAgICBJbmRleCA9IFNvdXJjZSA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrICYmIGdldENsYXNzLmNhbGwoY2FsbGJhY2spID09IGZ1bmN0aW9uQ2xhc3MgPyB3YWxrKCh2YWx1ZSA9IHt9LCB2YWx1ZVtcIlwiXSA9IHJlc3VsdCwgdmFsdWUpLCBcIlwiLCBjYWxsYmFjaykgOiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0cy5ydW5JbkNvbnRleHQgPSBydW5JbkNvbnRleHQ7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH1cblxuICBpZiAoZnJlZUV4cG9ydHMgJiYgIWlzTG9hZGVyKSB7XG4gICAgLy8gRXhwb3J0IGZvciBDb21tb25KUyBlbnZpcm9ubWVudHMuXG4gICAgcnVuSW5Db250ZXh0KHJvb3QsIGZyZWVFeHBvcnRzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBFeHBvcnQgZm9yIHdlYiBicm93c2VycyBhbmQgSmF2YVNjcmlwdCBlbmdpbmVzLlxuICAgIHZhciBuYXRpdmVKU09OID0gcm9vdC5KU09OLFxuICAgICAgICBwcmV2aW91c0pTT04gPSByb290LkpTT04zLFxuICAgICAgICBpc1Jlc3RvcmVkID0gZmFsc2U7XG5cbiAgICB2YXIgSlNPTjMgPSBydW5JbkNvbnRleHQocm9vdCwgKHJvb3QuSlNPTjMgPSB7XG4gICAgICAvLyBQdWJsaWM6IFJlc3RvcmVzIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgZ2xvYmFsIGBKU09OYCBvYmplY3QgYW5kXG4gICAgICAvLyByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBgSlNPTjNgIG9iamVjdC5cbiAgICAgIFwibm9Db25mbGljdFwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSZXN0b3JlZCkge1xuICAgICAgICAgIGlzUmVzdG9yZWQgPSB0cnVlO1xuICAgICAgICAgIHJvb3QuSlNPTiA9IG5hdGl2ZUpTT047XG4gICAgICAgICAgcm9vdC5KU09OMyA9IHByZXZpb3VzSlNPTjtcbiAgICAgICAgICBuYXRpdmVKU09OID0gcHJldmlvdXNKU09OID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTjM7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgcm9vdC5KU09OID0ge1xuICAgICAgXCJwYXJzZVwiOiBKU09OMy5wYXJzZSxcbiAgICAgIFwic3RyaW5naWZ5XCI6IEpTT04zLnN0cmluZ2lmeVxuICAgIH07XG4gIH1cblxuICAvLyBFeHBvcnQgZm9yIGFzeW5jaHJvbm91cyBtb2R1bGUgbG9hZGVycy5cbiAgaWYgKGlzTG9hZGVyKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBKU09OMztcbiAgICB9KTtcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qIGdsb2JhbHMgX193ZWJwYWNrX2FtZF9vcHRpb25zX18gKi9cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cbihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gRXhpdCBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbiBhIGJyb3dzZXIuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcpIHtcbiAgcmV0dXJuO1xufVxuXG4vLyBFeGl0IGVhcmx5IGlmIGFsbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBhbmQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVxuLy8gZmVhdHVyZXMgYXJlIG5hdGl2ZWx5IHN1cHBvcnRlZC5cbmlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbiAgICAnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkge1xuXG4gIC8vIE1pbmltYWwgcG9seWZpbGwgZm9yIEVkZ2UgMTUncyBsYWNrIG9mIGBpc0ludGVyc2VjdGluZ2BcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8yMTFcbiAgaWYgKCEoJ2lzSW50ZXJzZWN0aW5nJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSxcbiAgICAgICdpc0ludGVyc2VjdGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5cbi8qKlxuICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50LlxuICovXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblxuLyoqXG4gKiBBbiBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS4gVGhpcyByZWdpc3RyeSBleGlzdHMgdG8gaG9sZCBhIHN0cm9uZ1xuICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICogZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gKi9cbnZhciByZWdpc3RyeSA9IFtdO1xuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1lbnRyeVxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcbiAgdGhpcy50aW1lID0gZW50cnkudGltZTtcbiAgdGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG4gIHRoaXMucm9vdEJvdW5kcyA9IGVudHJ5LnJvb3RCb3VuZHM7XG4gIHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0O1xuICB0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnRyeS5pbnRlcnNlY3Rpb25SZWN0IHx8IGdldEVtcHR5UmVjdCgpO1xuICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gISFlbnRyeS5pbnRlcnNlY3Rpb25SZWN0O1xuXG4gIC8vIENhbGN1bGF0ZXMgdGhlIGludGVyc2VjdGlvbiByYXRpby5cbiAgdmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgdmFyIHRhcmdldEFyZWEgPSB0YXJnZXRSZWN0LndpZHRoICogdGFyZ2V0UmVjdC5oZWlnaHQ7XG4gIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0O1xuICB2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodDtcblxuICAvLyBTZXRzIGludGVyc2VjdGlvbiByYXRpby5cbiAgaWYgKHRhcmdldEFyZWEpIHtcbiAgICAvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzMyNFxuICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoKGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhKS50b0ZpeGVkKDQpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuICAgIHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDA7XG4gIH1cbn1cblxuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gKiAgICAgY2hhbmdlcyBoYXZlIHF1ZXVlZC4gVGhlIGZ1bmN0aW9uIGlzIG5vdCBpbnZva2VkIGlmIHRoZSBxdWV1ZSBoYXNcbiAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcblxuICB2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5yb290ICYmIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuICB9XG5cbiAgLy8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cbiAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gdGhyb3R0bGUoXG4gICAgICB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMuYmluZCh0aGlzKSwgdGhpcy5USFJPVFRMRV9USU1FT1VUKTtcblxuICAvLyBQcml2YXRlIHByb3BlcnRpZXMuXG4gIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICB0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG4gIHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKTtcblxuICAvLyBQdWJsaWMgcHJvcGVydGllcy5cbiAgdGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpO1xuICB0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbDtcbiAgdGhpcy5yb290TWFyZ2luID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG4gICAgcmV0dXJuIG1hcmdpbi52YWx1ZSArIG1hcmdpbi51bml0O1xuICB9KS5qb2luKCcgJyk7XG59XG5cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMDtcblxuXG4vKipcbiAqIFRoZSBmcmVxdWVuY3kgaW4gd2hpY2ggdGhlIHBvbHlmaWxsIHBvbGxzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGw7XG5cbi8qKlxuICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZTtcblxuXG4vKipcbiAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICB2YXIgaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXQ7XG4gIH0pO1xuXG4gIGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghKHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcbiAgfVxuXG4gIHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKTtcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnB1c2goe2VsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGx9KTtcbiAgdGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoKTtcbiAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKCk7XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID1cbiAgICAgIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXG4gICAgcmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXQ7XG4gIH0pO1xuICBpZiAoIXRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGgpIHtcbiAgICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG4gICAgdGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuICB0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG4gIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gKiBjYWxsYmFjayB0byBvYnRhaW4gdGhlIGFic29sdXRlIG1vc3QgdXAtdG8tZGF0ZSBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnRha2VSZWNvcmRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpO1xuICB0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG4gIHJldHVybiByZWNvcmRzO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHRocmVzaG9sZCB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZFxuICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBzb3J0ZWQgbGlzdCBvZiB1bmlxdWUgYW5kIHZhbGlkIHRocmVzaG9sZCB2YWx1ZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG4gIHZhciB0aHJlc2hvbGQgPSBvcHRfdGhyZXNob2xkIHx8IFswXTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdO1xuXG4gIHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG4gICAgaWYgKHR5cGVvZiB0ICE9ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseScpO1xuICAgIH1cbiAgICByZXR1cm4gdCAhPT0gYVtpIC0gMV07XG4gIH0pO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIHZhbHVlIGFuZCB1bml0IHByb3BlcnRpZXMuIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBub3QgcHJvcGVybHlcbiAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yb290TWFyZ2luIEFuIG9wdGlvbmFsIHJvb3RNYXJnaW4gdmFsdWUsXG4gKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAqICAgICB2YWx1ZSBhbmQgdW5pdC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuICB2YXIgbWFyZ2luU3RyaW5nID0gb3B0X3Jvb3RNYXJnaW4gfHwgJzBweCc7XG4gIHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgIHZhciBwYXJ0cyA9IC9eKC0/XFxkKlxcLj9cXGQrKShweHwlKSQvLmV4ZWMobWFyZ2luKTtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNYXJnaW4gbXVzdCBiZSBzcGVjaWZpZWQgaW4gcGl4ZWxzIG9yIHBlcmNlbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHt2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdfTtcbiAgfSk7XG5cbiAgLy8gSGFuZGxlcyBzaG9ydGhhbmQuXG4gIG1hcmdpbnNbMV0gPSBtYXJnaW5zWzFdIHx8IG1hcmdpbnNbMF07XG4gIG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF07XG4gIG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV07XG5cbiAgcmV0dXJuIG1hcmdpbnM7XG59O1xuXG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fbW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuICAgIHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcblxuICAgIC8vIElmIGEgcG9sbCBpbnRlcnZhbCBpcyBzZXQsIHVzZSBwb2xsaW5nIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvXG4gICAgLy8gcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzIG9yIERPTSBtdXRhdGlvbnMuXG4gICAgaWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuICAgICAgdGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0aGlzLlBPTExfSU5URVJWQUwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGFkZEV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG4gICAgICBhZGRFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgIHRoaXMuX2RvbU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwpO1xuICAgIHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IG51bGw7XG5cbiAgICByZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuICAgIHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuICAgIGlmICh0aGlzLl9kb21PYnNlcnZlcikge1xuICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxufTtcblxuXG4vKipcbiAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICogc2NoZWR1bGVzIHRoZSBjYWxsYmFjayB0byBiZSBpbnZva2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKTtcbiAgdmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KCk7XG5cbiAgdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgIHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnQ7XG4gICAgdmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcbiAgICB2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldCk7XG4gICAgdmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeTtcbiAgICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCAmJlxuICAgICAgICB0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbih0YXJnZXQsIHJvb3RSZWN0KTtcblxuICAgIHZhciBuZXdFbnRyeSA9IGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG4gICAgICB0aW1lOiBub3coKSxcbiAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgYm91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuICAgICAgcm9vdEJvdW5kczogcm9vdFJlY3QsXG4gICAgICBpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG4gICAgfSk7XG5cbiAgICBpZiAoIW9sZEVudHJ5KSB7XG4gICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuICAgIH0gZWxzZSBpZiAocm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0KSB7XG4gICAgICAvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG4gICAgICAvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG4gICAgICBpZiAodGhpcy5faGFzQ3Jvc3NlZFRocmVzaG9sZChvbGRFbnRyeSwgbmV3RW50cnkpKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuICAgICAgLy8gcm9vdCBidXQgdGhlIHByZXZpb3VzIGVudHJ5IGZvciB0aGlzIHRhcmdldCBoYWQgYW4gaW50ZXJzZWN0aW9uLFxuICAgICAgLy8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG4gICAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRoaXMpO1xuXG4gIGlmICh0aGlzLl9xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCByb290IHJlY3QgY29tcHV0ZXMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHRoZW5cbiAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNjYWxjdWxhdGUtaW50ZXJzZWN0aW9uLXJlY3QtYWxnb1xuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gKiAgICAgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPVxuICAgIGZ1bmN0aW9uKHRhcmdldCwgcm9vdFJlY3QpIHtcblxuICAvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cbiAgdmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcbiAgdmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0O1xuICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpO1xuICB2YXIgYXRSb290ID0gZmFsc2U7XG5cbiAgd2hpbGUgKCFhdFJvb3QpIHtcbiAgICB2YXIgcGFyZW50UmVjdCA9IG51bGw7XG4gICAgdmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPSBwYXJlbnQubm9kZVR5cGUgPT0gMSA/XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fTtcblxuICAgIC8vIElmIHRoZSBwYXJlbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuICAgIGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cbiAgICBpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcbiAgICAgIGF0Um9vdCA9IHRydWU7XG4gICAgICBwYXJlbnRSZWN0ID0gcm9vdFJlY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIG5vbi12aXNpYmxlIG92ZXJmbG93LCBhbmQgaXQncyBub3QgdGhlIDxib2R5PlxuICAgICAgLy8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG4gICAgICAvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG4gICAgICAvLyB0aGUgZG9jdW1lbnQgcmVjdCwgc28gbm8gbmVlZCB0byBjb21wdXRlIGEgbmV3IGludGVyc2VjdGlvbi5cbiAgICAgIGlmIChwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAgIHBhcmVudCAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgICBwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJykge1xuICAgICAgICBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG4gICAgLy8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cbiAgICBpZiAocGFyZW50UmVjdCkge1xuICAgICAgaW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpO1xuXG4gICAgICBpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrO1xuICAgIH1cbiAgICBwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG4gIH1cbiAgcmV0dXJuIGludGVyc2VjdGlvblJlY3Q7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdFJlY3Q7XG4gIGlmICh0aGlzLnJvb3QpIHtcbiAgICByb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICByb290UmVjdCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuICAgICAgd2lkdGg6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIGJvdHRvbTogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICBoZWlnaHQ6IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbihyb290UmVjdCk7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHJlY3QgYW5kIGV4cGFuZHMgaXQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCBUaGUgcmVjdCBvYmplY3QgdG8gZXhwYW5kLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZXhwYW5kUmVjdEJ5Um9vdE1hcmdpbiA9IGZ1bmN0aW9uKHJlY3QpIHtcbiAgdmFyIG1hcmdpbnMgPSB0aGlzLl9yb290TWFyZ2luVmFsdWVzLm1hcChmdW5jdGlvbihtYXJnaW4sIGkpIHtcbiAgICByZXR1cm4gbWFyZ2luLnVuaXQgPT0gJ3B4JyA/IG1hcmdpbi52YWx1ZSA6XG4gICAgICAgIG1hcmdpbi52YWx1ZSAqIChpICUgMiA/IHJlY3Qud2lkdGggOiByZWN0LmhlaWdodCkgLyAxMDA7XG4gIH0pO1xuICB2YXIgbmV3UmVjdCA9IHtcbiAgICB0b3A6IHJlY3QudG9wIC0gbWFyZ2luc1swXSxcbiAgICByaWdodDogcmVjdC5yaWdodCArIG1hcmdpbnNbMV0sXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSArIG1hcmdpbnNbMl0sXG4gICAgbGVmdDogcmVjdC5sZWZ0IC0gbWFyZ2luc1szXVxuICB9O1xuICBuZXdSZWN0LndpZHRoID0gbmV3UmVjdC5yaWdodCAtIG5ld1JlY3QubGVmdDtcbiAgbmV3UmVjdC5oZWlnaHQgPSBuZXdSZWN0LmJvdHRvbSAtIG5ld1JlY3QudG9wO1xuXG4gIHJldHVybiBuZXdSZWN0O1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYW4gb2xkIGFuZCBuZXcgZW50cnkgYW5kIHJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlXG4gKiB0aHJlc2hvbGQgdmFsdWVzIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcGFyYW0gez9JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBvbGRFbnRyeSBUaGUgcHJldmlvdXMgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQgb3IgbnVsbCBpZiBubyBwcmV2aW91cyBlbnRyeSBleGlzdHMuXG4gKiBAcGFyYW0ge0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG5ld0VudHJ5IFRoZSBjdXJyZW50IGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGEgYW55IHRocmVzaG9sZCBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9oYXNDcm9zc2VkVGhyZXNob2xkID1cbiAgICBmdW5jdGlvbihvbGRFbnRyeSwgbmV3RW50cnkpIHtcblxuICAvLyBUbyBtYWtlIGNvbXBhcmluZyBlYXNpZXIsIGFuIGVudHJ5IHRoYXQgaGFzIGEgcmF0aW8gb2YgMFxuICAvLyBidXQgZG9lcyBub3QgYWN0dWFsbHkgaW50ZXJzZWN0IGlzIGdpdmVuIGEgdmFsdWUgb2YgLTFcbiAgdmFyIG9sZFJhdGlvID0gb2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuICAgICAgb2xkRW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuICB2YXIgbmV3UmF0aW8gPSBuZXdFbnRyeS5pc0ludGVyc2VjdGluZyA/XG4gICAgICBuZXdFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cbiAgLy8gSWdub3JlIHVuY2hhbmdlZCByYXRpb3NcbiAgaWYgKG9sZFJhdGlvID09PSBuZXdSYXRpbykgcmV0dXJuO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50aHJlc2hvbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRocmVzaG9sZCA9IHRoaXMudGhyZXNob2xkc1tpXTtcblxuICAgIC8vIFJldHVybiB0cnVlIGlmIGFuIGVudHJ5IG1hdGNoZXMgYSB0aHJlc2hvbGQgb3IgaWYgdGhlIG5ldyByYXRpb1xuICAgIC8vIGFuZCB0aGUgb2xkIHJhdGlvIGFyZSBvbiB0aGUgb3Bwb3NpdGUgc2lkZXMgb2YgYSB0aHJlc2hvbGQuXG4gICAgaWYgKHRocmVzaG9sZCA9PSBvbGRSYXRpbyB8fCB0aHJlc2hvbGQgPT0gbmV3UmF0aW8gfHxcbiAgICAgICAgdGhyZXNob2xkIDwgb2xkUmF0aW8gIT09IHRocmVzaG9sZCA8IG5ld1JhdGlvKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290SXNJbkRvbSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMucm9vdCB8fCBjb250YWluc0RlZXAoZG9jdW1lbnQsIHRoaXMucm9vdCk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGNoZWNrLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBjaGlsZCBvZiByb290LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yb290Q29udGFpbnNUYXJnZXQgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgcmV0dXJuIGNvbnRhaW5zRGVlcCh0aGlzLnJvb3QgfHwgZG9jdW1lbnQsIHRhcmdldCk7XG59O1xuXG5cbi8qKlxuICogQWRkcyB0aGUgaW5zdGFuY2UgdG8gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeSBpZiBpdCBpc24ndFxuICogYWxyZWFkeSBwcmVzZW50LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChyZWdpc3RyeS5pbmRleE9mKHRoaXMpIDwgMCkge1xuICAgIHJlZ2lzdHJ5LnB1c2godGhpcyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBpbnN0YW5jZSBmcm9tIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VucmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5kZXggPSByZWdpc3RyeS5pbmRleE9mKHRoaXMpO1xuICBpZiAoaW5kZXggIT0gLTEpIHJlZ2lzdHJ5LnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSBwZXJmb3JtYW5jZS5ub3coKSBtZXRob2Qgb3IgbnVsbCBpbiBicm93c2Vyc1xuICogdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBBUEkuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBlbGFwc2VkIHRpbWUgc2luY2UgdGhlIHBhZ2Ugd2FzIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlICYmIHBlcmZvcm1hbmNlLm5vdyAmJiBwZXJmb3JtYW5jZS5ub3coKTtcbn1cblxuXG4vKipcbiAqIFRocm90dGxlcyBhIGZ1bmN0aW9uIGFuZCBkZWxheXMgaXRzIGV4ZWN1dGlvbiwgc28gaXQncyBvbmx5IGNhbGxlZCBhdCBtb3N0XG4gKiBvbmNlIHdpdGhpbiBhIGdpdmVuIHRpbWUgcGVyaW9kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVvdXQgVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgbXVzdCBwYXNzIGJlZm9yZSB0aGVcbiAqICAgICBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIGFnYWluLlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB0aW1lb3V0KSB7XG4gIHZhciB0aW1lciA9IG51bGw7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aW1lcikge1xuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBmbigpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG4gIH07XG59XG5cblxuLyoqXG4gKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gbm9kZSBlbnN1cmluZyBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIGFkZCB0aGUgZXZlbnQgaGFuZGxlciB0by5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIGFkZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgT3B0aW9uYWxseSBhZGRzIHRoZSBldmVuIHRvIHRoZSBjYXB0dXJlXG4gKiAgICAgcGhhc2UuIE5vdGU6IHRoaXMgb25seSB3b3JrcyBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gKi9cbmZ1bmN0aW9uIGFkZEV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcbiAgaWYgKHR5cGVvZiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygbm9kZS5hdHRhY2hFdmVudCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcbiAgfVxufVxuXG5cbi8qKlxuICogUmVtb3ZlcyBhIHByZXZpb3VzbHkgYWRkZWQgZXZlbnQgaGFuZGxlciBmcm9tIGEgRE9NIG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIERPTSBub2RlIHRvIHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlciBmcm9tLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gcmVtb3ZlLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBJZiB0aGUgZXZlbnQgaGFuZGxlciB3YXMgYWRkZWQgd2l0aCB0aGlzXG4gKiAgICAgZmxhZyBzZXQgdG8gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byB0cnVlIGhlcmUgaW4gb3JkZXIgdG8gcmVtb3ZlIGl0LlxuICovXG5mdW5jdGlvbiByZW1vdmVFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIG5vZGUuZGV0YXRjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLmRldGF0Y2hFdmVudCgnb24nICsgZXZlbnQsIGZuKTtcbiAgfVxufVxuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gdHdvIHJlY3Qgb2JqZWN0cy5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MSBUaGUgZmlyc3QgcmVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0MiBUaGUgc2Vjb25kIHJlY3QuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgaW50ZXJzZWN0aW9uIHJlY3Qgb3IgdW5kZWZpbmVkIGlmIG5vIGludGVyc2VjdGlvblxuICogICAgIGlzIGZvdW5kLlxuICovXG5mdW5jdGlvbiBjb21wdXRlUmVjdEludGVyc2VjdGlvbihyZWN0MSwgcmVjdDIpIHtcbiAgdmFyIHRvcCA9IE1hdGgubWF4KHJlY3QxLnRvcCwgcmVjdDIudG9wKTtcbiAgdmFyIGJvdHRvbSA9IE1hdGgubWluKHJlY3QxLmJvdHRvbSwgcmVjdDIuYm90dG9tKTtcbiAgdmFyIGxlZnQgPSBNYXRoLm1heChyZWN0MS5sZWZ0LCByZWN0Mi5sZWZ0KTtcbiAgdmFyIHJpZ2h0ID0gTWF0aC5taW4ocmVjdDEucmlnaHQsIHJlY3QyLnJpZ2h0KTtcbiAgdmFyIHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICB2YXIgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gIHJldHVybiAod2lkdGggPj0gMCAmJiBoZWlnaHQgPj0gMCkgJiYge1xuICAgIHRvcDogdG9wLFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5cbi8qKlxuICogU2hpbXMgdGhlIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGRlciBJRS5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgd2hvc2UgYm91bmRpbmcgcmVjdCB0byBnZXQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSAocG9zc2libHkgc2hpbW1lZCkgcmVjdCBvZiB0aGUgZWxlbWVudC5cbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsKSB7XG4gIHZhciByZWN0O1xuXG4gIHRyeSB7XG4gICAgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJZ25vcmUgV2luZG93cyA3IElFMTEgXCJVbnNwZWNpZmllZCBlcnJvclwiXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3czYy9JbnRlcnNlY3Rpb25PYnNlcnZlci9wdWxsLzIwNVxuICB9XG5cbiAgaWYgKCFyZWN0KSByZXR1cm4gZ2V0RW1wdHlSZWN0KCk7XG5cbiAgLy8gT2xkZXIgSUVcbiAgaWYgKCEocmVjdC53aWR0aCAmJiByZWN0LmhlaWdodCkpIHtcbiAgICByZWN0ID0ge1xuICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVjdDtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gKiBpcyBub3QgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGVtcHR5IHJlY3QuXG4gKi9cbmZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwXG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIHRvIHNlZSBpZiBhIHBhcmVudCBlbGVtZW50IGNvbnRhaW5zIGEgY2hpbGQgZWxlbWVudCAoaW5jbHVkaW5nIGluc2lkZVxuICogc2hhZG93IERPTSkuXG4gKiBAcGFyYW0ge05vZGV9IHBhcmVudCBUaGUgcGFyZW50IGVsZW1lbnQuXG4gKiBAcGFyYW0ge05vZGV9IGNoaWxkIFRoZSBjaGlsZCBlbGVtZW50LlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFyZW50IG5vZGUgY29udGFpbnMgdGhlIGNoaWxkIG5vZGUuXG4gKi9cbmZ1bmN0aW9uIGNvbnRhaW5zRGVlcChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQ7XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gcGFyZW50KSByZXR1cm4gdHJ1ZTtcblxuICAgIG5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuXG4vKipcbiAqIEdldHMgdGhlIHBhcmVudCBub2RlIG9mIGFuIGVsZW1lbnQgb3IgaXRzIGhvc3QgZWxlbWVudCBpZiB0aGUgcGFyZW50IG5vZGVcbiAqIGlzIGEgc2hhZG93IHJvb3QuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgd2hvc2UgcGFyZW50IHRvIGdldC5cbiAqIEByZXR1cm4ge05vZGV8bnVsbH0gVGhlIHBhcmVudCBub2RlIG9yIG51bGwgaWYgbm8gcGFyZW50IGV4aXN0cy5cbiAqL1xuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIHZhciBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cbiAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT0gMTEgJiYgcGFyZW50Lmhvc3QpIHtcbiAgICAvLyBJZiB0aGUgcGFyZW50IGlzIGEgc2hhZG93IHJvb3QsIHJldHVybiB0aGUgaG9zdCBlbGVtZW50LlxuICAgIHJldHVybiBwYXJlbnQuaG9zdDtcbiAgfVxuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgIC8vIElmIHRoZSBwYXJlbnQgaXMgZGlzdHJpYnV0ZWQgaW4gYSA8c2xvdD4sIHJldHVybiB0aGUgcGFyZW50IG9mIGEgc2xvdC5cbiAgICByZXR1cm4gcGFyZW50LmFzc2lnbmVkU2xvdC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuXG4vLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeTtcblxufSgpKTtcbiIsIi8qIVxuICogbW9kZXJuaXpyIHYzLjMuMVxuICogQnVpbGQgaHR0cDovL21vZGVybml6ci5jb20vZG93bmxvYWQ/LWJhY2tncm91bmRzaXplLWJveHNoYWRvdy1jc3NhbmltYXRpb25zLWNzc3RyYW5zaXRpb25zLXJnYmEtdGV4dHNoYWRvdy1zZXRjbGFzc2VzLWRvbnRtaW5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpXG4gKiAgRmFydWsgQXRlc1xuICogIFBhdWwgSXJpc2hcbiAqICBBbGV4IFNleHRvblxuICogIFJ5YW4gU2VkZG9uXG4gKiAgUGF0cmljayBLZXR0bmVyXG4gKiAgU3R1IENveFxuICogIFJpY2hhcmQgSGVycmVyYVxuXG4gKiBNSVQgTGljZW5zZVxuICovXG5cbi8qXG4gKiBNb2Rlcm5penIgdGVzdHMgd2hpY2ggbmF0aXZlIENTUzMgYW5kIEhUTUw1IGZlYXR1cmVzIGFyZSBhdmFpbGFibGUgaW4gdGhlXG4gKiBjdXJyZW50IFVBIGFuZCBtYWtlcyB0aGUgcmVzdWx0cyBhdmFpbGFibGUgdG8geW91IGluIHR3byB3YXlzOiBhcyBwcm9wZXJ0aWVzIG9uXG4gKiBhIGdsb2JhbCBgTW9kZXJuaXpyYCBvYmplY3QsIGFuZCBhcyBjbGFzc2VzIG9uIHRoZSBgPGh0bWw+YCBlbGVtZW50LiBUaGlzXG4gKiBpbmZvcm1hdGlvbiBhbGxvd3MgeW91IHRvIHByb2dyZXNzaXZlbHkgZW5oYW5jZSB5b3VyIHBhZ2VzIHdpdGggYSBncmFudWxhciBsZXZlbFxuICogb2YgY29udHJvbCBvdmVyIHRoZSBleHBlcmllbmNlLlxuKi9cblxuOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpe1xuICB2YXIgY2xhc3NlcyA9IFtdO1xuXG5cbiAgdmFyIHRlc3RzID0gW107XG5cblxuICAvKipcbiAgICpcbiAgICogTW9kZXJuaXpyUHJvdG8gaXMgdGhlIGNvbnN0cnVjdG9yIGZvciBNb2Rlcm5penJcbiAgICpcbiAgICogQGNsYXNzXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuXG4gIHZhciBNb2Rlcm5penJQcm90byA9IHtcbiAgICAvLyBUaGUgY3VycmVudCB2ZXJzaW9uLCBkdW1teVxuICAgIF92ZXJzaW9uOiAnMy4zLjEnLFxuXG4gICAgLy8gQW55IHNldHRpbmdzIHRoYXQgZG9uJ3Qgd29yayBhcyBzZXBhcmF0ZSBtb2R1bGVzXG4gICAgLy8gY2FuIGdvIGluIGhlcmUgYXMgY29uZmlndXJhdGlvbi5cbiAgICBfY29uZmlnOiB7XG4gICAgICAnY2xhc3NQcmVmaXgnOiAnJyxcbiAgICAgICdlbmFibGVDbGFzc2VzJzogdHJ1ZSxcbiAgICAgICdlbmFibGVKU0NsYXNzJzogdHJ1ZSxcbiAgICAgICd1c2VQcmVmaXhlcyc6IHRydWVcbiAgICB9LFxuXG4gICAgLy8gUXVldWUgb2YgdGVzdHNcbiAgICBfcTogW10sXG5cbiAgICAvLyBTdHViIHRoZXNlIGZvciBwZW9wbGUgd2hvIGFyZSBsaXN0ZW5pbmdcbiAgICBvbjogZnVuY3Rpb24odGVzdCwgY2IpIHtcbiAgICAgIC8vIEkgZG9uJ3QgcmVhbGx5IHRoaW5rIHBlb3BsZSBzaG91bGQgZG8gdGhpcywgYnV0IHdlIGNhblxuICAgICAgLy8gc2FmZSBndWFyZCBpdCBhIGJpdC5cbiAgICAgIC8vIC0tIE5PVEU6OiB0aGlzIGdldHMgV0FZIG92ZXJyaWRkZW4gaW4gc3JjL2FkZFRlc3QgZm9yIGFjdHVhbCBhc3luYyB0ZXN0cy5cbiAgICAgIC8vIFRoaXMgaXMgaW4gY2FzZSBwZW9wbGUgbGlzdGVuIHRvIHN5bmNocm9ub3VzIHRlc3RzLiBJIHdvdWxkIGxlYXZlIGl0IG91dCxcbiAgICAgIC8vIGJ1dCB0aGUgY29kZSB0byAqZGlzYWxsb3cqIHN5bmMgdGVzdHMgaW4gdGhlIHJlYWwgdmVyc2lvbiBvZiB0aGlzXG4gICAgICAvLyBmdW5jdGlvbiBpcyBhY3R1YWxseSBsYXJnZXIgdGhhbiB0aGlzLlxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioc2VsZlt0ZXN0XSk7XG4gICAgICB9LCAwKTtcbiAgICB9LFxuXG4gICAgYWRkVGVzdDogZnVuY3Rpb24obmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgICAgIHRlc3RzLnB1c2goe25hbWU6IG5hbWUsIGZuOiBmbiwgb3B0aW9uczogb3B0aW9uc30pO1xuICAgIH0sXG5cbiAgICBhZGRBc3luY1Rlc3Q6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0ZXN0cy5wdXNoKHtuYW1lOiBudWxsLCBmbjogZm59KTtcbiAgICB9XG4gIH07XG5cblxuXG4gIC8vIEZha2Ugc29tZSBvZiBPYmplY3QuY3JlYXRlIHNvIHdlIGNhbiBmb3JjZSBub24gdGVzdCByZXN1bHRzIHRvIGJlIG5vbiBcIm93blwiIHByb3BlcnRpZXMuXG4gIHZhciBNb2Rlcm5penIgPSBmdW5jdGlvbigpIHt9O1xuICBNb2Rlcm5penIucHJvdG90eXBlID0gTW9kZXJuaXpyUHJvdG87XG5cbiAgLy8gTGVhayBtb2Rlcm5penIgZ2xvYmFsbHkgd2hlbiB5b3UgYHJlcXVpcmVgIGl0IHJhdGhlciB0aGFuIGZvcmNlIGl0IGhlcmUuXG4gIC8vIE92ZXJ3cml0ZSBuYW1lIHNvIGNvbnN0cnVjdG9yIG5hbWUgaXMgbmljZXIgOkRcbiAgTW9kZXJuaXpyID0gbmV3IE1vZGVybml6cigpO1xuXG5cblxuICAvKipcbiAgICogaXMgcmV0dXJucyBhIGJvb2xlYW4gaWYgdGhlIHR5cGVvZiBhbiBvYmogaXMgZXhhY3RseSB0eXBlLlxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGlzXG4gICAqIEBwYXJhbSB7Kn0gb2JqIC0gQSB0aGluZyB3ZSB3YW50IHRvIGNoZWNrIHRoZSB0eXBlIG9mXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gQSBzdHJpbmcgdG8gY29tcGFyZSB0aGUgdHlwZW9mIGFnYWluc3RcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzKG9iaiwgdHlwZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSB0eXBlO1xuICB9XG4gIDtcblxuICAvKipcbiAgICogUnVuIHRocm91Z2ggYWxsIHRlc3RzIGFuZCBkZXRlY3QgdGhlaXIgc3VwcG9ydCBpbiB0aGUgY3VycmVudCBVQS5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRlc3RSdW5uZXIoKSB7XG4gICAgdmFyIGZlYXR1cmVOYW1lcztcbiAgICB2YXIgZmVhdHVyZTtcbiAgICB2YXIgYWxpYXNJZHg7XG4gICAgdmFyIHJlc3VsdDtcbiAgICB2YXIgbmFtZUlkeDtcbiAgICB2YXIgZmVhdHVyZU5hbWU7XG4gICAgdmFyIGZlYXR1cmVOYW1lU3BsaXQ7XG5cbiAgICBmb3IgKHZhciBmZWF0dXJlSWR4IGluIHRlc3RzKSB7XG4gICAgICBpZiAodGVzdHMuaGFzT3duUHJvcGVydHkoZmVhdHVyZUlkeCkpIHtcbiAgICAgICAgZmVhdHVyZU5hbWVzID0gW107XG4gICAgICAgIGZlYXR1cmUgPSB0ZXN0c1tmZWF0dXJlSWR4XTtcbiAgICAgICAgLy8gcnVuIHRoZSB0ZXN0LCB0aHJvdyB0aGUgcmV0dXJuIHZhbHVlIGludG8gdGhlIE1vZGVybml6cixcbiAgICAgICAgLy8gdGhlbiBiYXNlZCBvbiB0aGF0IGJvb2xlYW4sIGRlZmluZSBhbiBhcHByb3ByaWF0ZSBjbGFzc05hbWVcbiAgICAgICAgLy8gYW5kIHB1c2ggaXQgaW50byBhbiBhcnJheSBvZiBjbGFzc2VzIHdlJ2xsIGpvaW4gbGF0ZXIuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIG5hbWUsIGl0J3MgYW4gJ2FzeW5jJyB0ZXN0IHRoYXQgaXMgcnVuLFxuICAgICAgICAvLyBidXQgbm90IGRpcmVjdGx5IGFkZGVkIHRvIHRoZSBvYmplY3QuIFRoYXQgc2hvdWxkXG4gICAgICAgIC8vIGJlIGRvbmUgd2l0aCBhIHBvc3QtcnVuIGFkZFRlc3QgY2FsbC5cbiAgICAgICAgaWYgKGZlYXR1cmUubmFtZSkge1xuICAgICAgICAgIGZlYXR1cmVOYW1lcy5wdXNoKGZlYXR1cmUubmFtZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICAgIGlmIChmZWF0dXJlLm9wdGlvbnMgJiYgZmVhdHVyZS5vcHRpb25zLmFsaWFzZXMgJiYgZmVhdHVyZS5vcHRpb25zLmFsaWFzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBBZGQgYWxsIHRoZSBhbGlhc2VzIGludG8gdGhlIG5hbWVzIGxpc3RcbiAgICAgICAgICAgIGZvciAoYWxpYXNJZHggPSAwOyBhbGlhc0lkeCA8IGZlYXR1cmUub3B0aW9ucy5hbGlhc2VzLmxlbmd0aDsgYWxpYXNJZHgrKykge1xuICAgICAgICAgICAgICBmZWF0dXJlTmFtZXMucHVzaChmZWF0dXJlLm9wdGlvbnMuYWxpYXNlc1thbGlhc0lkeF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIHRoZSB0ZXN0LCBvciB1c2UgdGhlIHJhdyB2YWx1ZSBpZiBpdCdzIG5vdCBhIGZ1bmN0aW9uXG4gICAgICAgIHJlc3VsdCA9IGlzKGZlYXR1cmUuZm4sICdmdW5jdGlvbicpID8gZmVhdHVyZS5mbigpIDogZmVhdHVyZS5mbjtcblxuXG4gICAgICAgIC8vIFNldCBlYWNoIG9mIHRoZSBuYW1lcyBvbiB0aGUgTW9kZXJuaXpyIG9iamVjdFxuICAgICAgICBmb3IgKG5hbWVJZHggPSAwOyBuYW1lSWR4IDwgZmVhdHVyZU5hbWVzLmxlbmd0aDsgbmFtZUlkeCsrKSB7XG4gICAgICAgICAgZmVhdHVyZU5hbWUgPSBmZWF0dXJlTmFtZXNbbmFtZUlkeF07XG4gICAgICAgICAgLy8gU3VwcG9ydCBkb3QgcHJvcGVydGllcyBhcyBzdWIgdGVzdHMuIFdlIGRvbid0IGRvIGNoZWNraW5nIHRvIG1ha2Ugc3VyZVxuICAgICAgICAgIC8vIHRoYXQgdGhlIGltcGxpZWQgcGFyZW50IHRlc3RzIGhhdmUgYmVlbiBhZGRlZC4gWW91IG11c3QgY2FsbCB0aGVtIGluXG4gICAgICAgICAgLy8gb3JkZXIgKGVpdGhlciBpbiB0aGUgdGVzdCwgb3IgbWFrZSB0aGUgcGFyZW50IHRlc3QgYSBkZXBlbmRlbmN5KS5cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIENhcCBpdCB0byBUV08gdG8gbWFrZSB0aGUgbG9naWMgc2ltcGxlIGFuZCBiZWNhdXNlIHdobyBuZWVkcyB0aGF0IGtpbmQgb2Ygc3VidGVzdGluZ1xuICAgICAgICAgIC8vIGhhc2h0YWcgZmFtb3VzIGxhc3Qgd29yZHNcbiAgICAgICAgICBmZWF0dXJlTmFtZVNwbGl0ID0gZmVhdHVyZU5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgICAgIGlmIChmZWF0dXJlTmFtZVNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgTW9kZXJuaXpyW2ZlYXR1cmVOYW1lU3BsaXRbMF1dID0gcmVzdWx0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjYXN0IHRvIGEgQm9vbGVhbiwgaWYgbm90IG9uZSBhbHJlYWR5XG4gICAgICAgICAgICAvKiBqc2hpbnQgLVcwNTMgKi9cbiAgICAgICAgICAgIGlmIChNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gJiYgIShNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gaW5zdGFuY2VvZiBCb29sZWFuKSkge1xuICAgICAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0gPSBuZXcgQm9vbGVhbihNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBNb2Rlcm5penJbZmVhdHVyZU5hbWVTcGxpdFswXV1bZmVhdHVyZU5hbWVTcGxpdFsxXV0gPSByZXN1bHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKChyZXN1bHQgPyAnJyA6ICduby0nKSArIGZlYXR1cmVOYW1lU3BsaXQuam9pbignLScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICA7XG5cbiAgLyoqXG4gICAqIGRvY0VsZW1lbnQgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIHRvIGdyYWIgdGhlIHJvb3QgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnRcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBUaGUgcm9vdCBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICAgKi9cblxuICB2YXIgZG9jRWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIGhlbHBlciB0byBjaGVjayBpZiB0aGUgZG9jdW1lbnQgd2UgYXJlIHJ1bm5pbmcgaW4gaXMgYW4gU1ZHIGRvY3VtZW50XG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG5cbiAgdmFyIGlzU1ZHID0gZG9jRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJztcblxuXG4gIC8qKlxuICAgKiBzZXRDbGFzc2VzIHRha2VzIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHJvb3QgZWxlbWVudFxuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIHNldENsYXNzZXNcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NlcyAtIEFycmF5IG9mIGNsYXNzIG5hbWVzXG4gICAqL1xuXG4gIC8vIFBhc3MgaW4gYW4gYW5kIGFycmF5IG9mIGNsYXNzIG5hbWVzLCBlLmcuOlxuICAvLyAgWyduby13ZWJwJywgJ2JvcmRlcnJhZGl1cycsIC4uLl1cbiAgZnVuY3Rpb24gc2V0Q2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGRvY0VsZW1lbnQuY2xhc3NOYW1lO1xuICAgIHZhciBjbGFzc1ByZWZpeCA9IE1vZGVybml6ci5fY29uZmlnLmNsYXNzUHJlZml4IHx8ICcnO1xuXG4gICAgaWYgKGlzU1ZHKSB7XG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUuYmFzZVZhbDtcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgYG5vLWpzYCB0byBganNgIChpbmRlcGVuZGVudGx5IG9mIHRoZSBgZW5hYmxlQ2xhc3Nlc2Agb3B0aW9uKVxuICAgIC8vIEhhbmRsZSBjbGFzc1ByZWZpeCBvbiB0aGlzIHRvb1xuICAgIGlmIChNb2Rlcm5penIuX2NvbmZpZy5lbmFibGVKU0NsYXNzKSB7XG4gICAgICB2YXIgcmVKUyA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBjbGFzc1ByZWZpeCArICduby1qcyhcXFxcc3wkKScpO1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UocmVKUywgJyQxJyArIGNsYXNzUHJlZml4ICsgJ2pzJDInKTtcbiAgICB9XG5cbiAgICBpZiAoTW9kZXJuaXpyLl9jb25maWcuZW5hYmxlQ2xhc3Nlcykge1xuICAgICAgLy8gQWRkIHRoZSBuZXcgY2xhc3Nlc1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzUHJlZml4ICsgY2xhc3Nlcy5qb2luKCcgJyArIGNsYXNzUHJlZml4KTtcbiAgICAgIGlzU1ZHID8gZG9jRWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCA9IGNsYXNzTmFtZSA6IGRvY0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH1cblxuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGVtZW50IGlzIGEgY29udmVuaWVuY2Ugd3JhcHBlciBhcm91bmQgZG9jdW1lbnQuY3JlYXRlRWxlbWVudC4gU2luY2Ugd2VcbiAgICogdXNlIGNyZWF0ZUVsZW1lbnQgYWxsIG92ZXIgdGhlIHBsYWNlLCB0aGlzIGFsbG93cyBmb3IgKHNsaWdodGx5KSBzbWFsbGVyIGNvZGVcbiAgICogYXMgd2VsbCBhcyBhYnN0cmFjdGluZyBhd2F5IGlzc3VlcyB3aXRoIGNyZWF0aW5nIGVsZW1lbnRzIGluIGNvbnRleHRzIG90aGVyIHRoYW5cbiAgICogSFRNTCBkb2N1bWVudHMgKGUuZy4gU1ZHIGRvY3VtZW50cykuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gY3JlYXRlRWxlbWVudFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gQW4gSFRNTCBvciBTVkcgZWxlbWVudFxuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KCkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgY2FzZSBpbiBJRTcsIHdoZXJlIHRoZSB0eXBlIG9mIGNyZWF0ZUVsZW1lbnQgaXMgXCJvYmplY3RcIi5cbiAgICAgIC8vIEZvciB0aGlzIHJlYXNvbiwgd2UgY2Fubm90IGNhbGwgYXBwbHkoKSBhcyBPYmplY3QgaXMgbm90IGEgRnVuY3Rpb24uXG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmd1bWVudHNbMF0pO1xuICAgIH0gZWxzZSBpZiAoaXNTVkcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMuY2FsbChkb2N1bWVudCwgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgYXJndW1lbnRzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQuYXBwbHkoZG9jdW1lbnQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgO1xuLyohXG57XG4gIFwibmFtZVwiOiBcIkNTUyByZ2JhXCIsXG4gIFwiY2FuaXVzZVwiOiBcImNzczMtY29sb3JzXCIsXG4gIFwicHJvcGVydHlcIjogXCJyZ2JhXCIsXG4gIFwidGFnc1wiOiBbXCJjc3NcIl0sXG4gIFwibm90ZXNcIjogW3tcbiAgICBcIm5hbWVcIjogXCJDU1NUcmlja3MgVHV0b3JpYWxcIixcbiAgICBcImhyZWZcIjogXCJodHRwczovL2Nzcy10cmlja3MuY29tL3JnYmEtYnJvd3Nlci1zdXBwb3J0L1wiXG4gIH1dXG59XG4hKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgncmdiYScsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZSA9IGNyZWF0ZUVsZW1lbnQoJ2EnKS5zdHlsZTtcbiAgICBzdHlsZS5jc3NUZXh0ID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgxNTAsMjU1LDE1MCwuNSknO1xuXG4gICAgcmV0dXJuICgnJyArIHN0eWxlLmJhY2tncm91bmRDb2xvcikuaW5kZXhPZigncmdiYScpID4gLTE7XG4gIH0pO1xuXG5cblxuICAvKipcbiAgICogY29udGFpbnMgY2hlY2tzIHRvIHNlZSBpZiBhIHN0cmluZyBjb250YWlucyBhbm90aGVyIHN0cmluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNvbnRhaW5zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBUaGUgc3RyaW5nIHdlIHdhbnQgdG8gY2hlY2sgZm9yIHN1YnN0cmluZ3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1YnN0ciAtIFRoZSBzdWJzdHJpbmcgd2Ugd2FudCB0byBzZWFyY2ggdGhlIGZpcnN0IHN0cmluZyBmb3JcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zKHN0ciwgc3Vic3RyKSB7XG4gICAgcmV0dXJuICEhfignJyArIHN0cikuaW5kZXhPZihzdWJzdHIpO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBjc3NUb0RPTSB0YWtlcyBhIGtlYmFiLWNhc2Ugc3RyaW5nIGFuZCBjb252ZXJ0cyBpdCB0byBjYW1lbENhc2VcbiAgICogZS5nLiBib3gtc2l6aW5nIC0+IGJveFNpemluZ1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGNzc1RvRE9NXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gU3RyaW5nIG5hbWUgb2Yga2ViYWItY2FzZSBwcm9wIHdlIHdhbnQgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY2FtZWxDYXNlIHZlcnNpb24gb2YgdGhlIHN1cHBsaWVkIG5hbWVcbiAgICovXG5cbiAgZnVuY3Rpb24gY3NzVG9ET00obmFtZSkge1xuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoLyhbYS16XSktKFthLXpdKS9nLCBmdW5jdGlvbihzdHIsIG0xLCBtMikge1xuICAgICAgcmV0dXJuIG0xICsgbTIudG9VcHBlckNhc2UoKTtcbiAgICB9KS5yZXBsYWNlKC9eLS8sICcnKTtcbiAgfVxuICA7XG5cbiAgLyoqXG4gICAqIElmIHRoZSBicm93c2VycyBmb2xsb3cgdGhlIHNwZWMsIHRoZW4gdGhleSB3b3VsZCBleHBvc2UgdmVuZG9yLXNwZWNpZmljIHN0eWxlIGFzOlxuICAgKiAgIGVsZW0uc3R5bGUuV2Via2l0Qm9yZGVyUmFkaXVzXG4gICAqIGluc3RlYWQgb2Ygc29tZXRoaW5nIGxpa2UgdGhlIGZvbGxvd2luZywgd2hpY2ggd291bGQgYmUgdGVjaG5pY2FsbHkgaW5jb3JyZWN0OlxuICAgKiAgIGVsZW0uc3R5bGUud2Via2l0Qm9yZGVyUmFkaXVzXG5cbiAgICogV2Via2l0IGdob3N0cyB0aGVpciBwcm9wZXJ0aWVzIGluIGxvd2VyY2FzZSBidXQgT3BlcmEgJiBNb3ogZG8gbm90LlxuICAgKiBNaWNyb3NvZnQgdXNlcyBhIGxvd2VyY2FzZSBgbXNgIGluc3RlYWQgb2YgdGhlIGNvcnJlY3QgYE1zYCBpbiBJRTgrXG4gICAqICAgZXJpay5lYWUubmV0L2FyY2hpdmVzLzIwMDgvMDMvMTAvMjEuNDguMTAvXG5cbiAgICogTW9yZSBoZXJlOiBnaXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvaXNzdWVzL2lzc3VlLzIxXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdmVuZG9yLXNwZWNpZmljIHN0eWxlIHByb3BlcnRpZXNcbiAgICovXG5cbiAgdmFyIG9tUHJlZml4ZXMgPSAnTW96IE8gbXMgV2Via2l0JztcblxuXG4gIHZhciBjc3NvbVByZWZpeGVzID0gKE1vZGVybml6clByb3RvLl9jb25maWcudXNlUHJlZml4ZXMgPyBvbVByZWZpeGVzLnNwbGl0KCcgJykgOiBbXSk7XG4gIE1vZGVybml6clByb3RvLl9jc3NvbVByZWZpeGVzID0gY3Nzb21QcmVmaXhlcztcblxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIEphdmFTY3JpcHQgRE9NIHZhbHVlcyB1c2VkIGZvciB0ZXN0c1xuICAgKlxuICAgKiBAbWVtYmVyb2YgTW9kZXJuaXpyXG4gICAqIEBuYW1lIE1vZGVybml6ci5fZG9tUHJlZml4ZXNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLl9kb21QcmVmaXhlc1xuICAgKiBAb3B0aW9uUHJvcCBkb21QcmVmaXhlc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBNb2Rlcm5penIuX2RvbVByZWZpeGVzIGlzIGV4YWN0bHkgdGhlIHNhbWUgYXMgW19wcmVmaXhlc10oI21vZGVybml6ci1fcHJlZml4ZXMpLCBidXQgcmF0aGVyXG4gICAqIHRoYW4ga2ViYWItY2FzZSBwcm9wZXJ0aWVzLCBhbGwgcHJvcGVydGllcyBhcmUgdGhlaXIgQ2FwaXRhbGl6ZWQgdmFyaWFudFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBNb2Rlcm5penIuX2RvbVByZWZpeGVzID09PSBbIFwiTW96XCIsIFwiT1wiLCBcIm1zXCIsIFwiV2Via2l0XCIgXTtcbiAgICogYGBgXG4gICAqL1xuXG4gIHZhciBkb21QcmVmaXhlcyA9IChNb2Rlcm5penJQcm90by5fY29uZmlnLnVzZVByZWZpeGVzID8gb21QcmVmaXhlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykgOiBbXSk7XG4gIE1vZGVybml6clByb3RvLl9kb21QcmVmaXhlcyA9IGRvbVByZWZpeGVzO1xuXG5cbiAgLyoqXG4gICAqIGZuQmluZCBpcyBhIHN1cGVyIHNtYWxsIFtiaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKSBwb2x5ZmlsbC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBmbkJpbmRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBhIGZ1bmN0aW9uIHlvdSB3YW50IHRvIGNoYW5nZSBgdGhpc2AgcmVmZXJlbmNlIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0aGF0IC0gdGhlIGB0aGlzYCB5b3Ugd2FudCB0byBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gVGhlIHdyYXBwZWQgdmVyc2lvbiBvZiB0aGUgc3VwcGxpZWQgZnVuY3Rpb25cbiAgICovXG5cbiAgZnVuY3Rpb24gZm5CaW5kKGZuLCB0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIDtcblxuICAvKipcbiAgICogdGVzdERPTVByb3BzIGlzIGEgZ2VuZXJpYyBET00gcHJvcGVydHkgdGVzdDsgaWYgYSBicm93c2VyIHN1cHBvcnRzXG4gICAqICAgYSBjZXJ0YWluIHByb3BlcnR5LCBpdCB3b24ndCByZXR1cm4gdW5kZWZpbmVkIGZvciBpdC5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiB0ZXN0RE9NUHJvcHNcbiAgICogQHBhcmFtIHthcnJheS48c3RyaW5nPn0gcHJvcHMgLSBBbiBhcnJheSBvZiBwcm9wZXJ0aWVzIHRvIHRlc3QgZm9yXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBBbiBvYmplY3Qgb3IgRWxlbWVudCB5b3Ugd2FudCB0byB1c2UgdG8gdGVzdCB0aGUgcGFyYW1ldGVycyBhZ2FpblxuICAgKiBAcGFyYW0ge2Jvb2xlYW58b2JqZWN0fSBlbGVtIC0gQW4gRWxlbWVudCB0byBiaW5kIHRoZSBwcm9wZXJ0eSBsb29rdXAgYWdhaW4uIFVzZSBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIGNoZWNrXG4gICAqL1xuICBmdW5jdGlvbiB0ZXN0RE9NUHJvcHMocHJvcHMsIG9iaiwgZWxlbSkge1xuICAgIHZhciBpdGVtO1xuXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzW2ldIGluIG9iaikge1xuXG4gICAgICAgIC8vIHJldHVybiB0aGUgcHJvcGVydHkgbmFtZSBhcyBhIHN0cmluZ1xuICAgICAgICBpZiAoZWxlbSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHNbaV07XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtID0gb2JqW3Byb3BzW2ldXTtcblxuICAgICAgICAvLyBsZXQncyBiaW5kIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlzKGl0ZW0sICdmdW5jdGlvbicpKSB7XG4gICAgICAgICAgLy8gYmluZCB0byBvYmogdW5sZXNzIG92ZXJyaWRlblxuICAgICAgICAgIHJldHVybiBmbkJpbmQoaXRlbSwgZWxlbSB8fCBvYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV0dXJuIHRoZSB1bmJvdW5kIGZ1bmN0aW9uIG9yIG9iaiBvciB2YWx1ZVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgb3VyIFwibW9kZXJuaXpyXCIgZWxlbWVudCB0aGF0IHdlIGRvIG1vc3QgZmVhdHVyZSB0ZXN0cyBvbi5cbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqL1xuXG4gIHZhciBtb2RFbGVtID0ge1xuICAgIGVsZW06IGNyZWF0ZUVsZW1lbnQoJ21vZGVybml6cicpXG4gIH07XG5cbiAgLy8gQ2xlYW4gdXAgdGhpcyBlbGVtZW50XG4gIE1vZGVybml6ci5fcS5wdXNoKGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSBtb2RFbGVtLmVsZW07XG4gIH0pO1xuXG5cblxuICB2YXIgbVN0eWxlID0ge1xuICAgIHN0eWxlOiBtb2RFbGVtLmVsZW0uc3R5bGVcbiAgfTtcblxuICAvLyBraWxsIHJlZiBmb3IgZ2MsIG11c3QgaGFwcGVuIGJlZm9yZSBtb2QuZWxlbSBpcyByZW1vdmVkLCBzbyB3ZSB1bnNoaWZ0IG9uIHRvXG4gIC8vIHRoZSBmcm9udCBvZiB0aGUgcXVldWUuXG4gIE1vZGVybml6ci5fcS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSBtU3R5bGUuc3R5bGU7XG4gIH0pO1xuXG5cblxuICAvKipcbiAgICogZG9tVG9DU1MgdGFrZXMgYSBjYW1lbENhc2Ugc3RyaW5nIGFuZCBjb252ZXJ0cyBpdCB0byBrZWJhYi1jYXNlXG4gICAqIGUuZy4gYm94U2l6aW5nIC0+IGJveC1zaXppbmdcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBkb21Ub0NTU1xuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIFN0cmluZyBuYW1lIG9mIGNhbWVsQ2FzZSBwcm9wIHdlIHdhbnQgdG8gY29udmVydFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUga2ViYWItY2FzZSB2ZXJzaW9uIG9mIHRoZSBzdXBwbGllZCBuYW1lXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRvbVRvQ1NTKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uKHN0ciwgbTEpIHtcbiAgICAgIHJldHVybiAnLScgKyBtMS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLnJlcGxhY2UoL15tcy0vLCAnLW1zLScpO1xuICB9XG4gIDtcblxuICAvKipcbiAgICogZ2V0Qm9keSByZXR1cm5zIHRoZSBib2R5IG9mIGEgZG9jdW1lbnQsIG9yIGFuIGVsZW1lbnQgdGhhdCBjYW4gc3RhbmQgaW4gZm9yXG4gICAqIHRoZSBib2R5IGlmIGEgcmVhbCBib2R5IGRvZXMgbm90IGV4aXN0XG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gZ2V0Qm9keVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8U1ZHRWxlbWVudH0gUmV0dXJucyB0aGUgcmVhbCBib2R5IG9mIGEgZG9jdW1lbnQsIG9yIGFuXG4gICAqIGFydGlmaWNpYWxseSBjcmVhdGVkIGVsZW1lbnQgdGhhdCBzdGFuZHMgaW4gZm9yIHRoZSBib2R5XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgLy8gQWZ0ZXIgcGFnZSBsb2FkIGluamVjdGluZyBhIGZha2UgYm9keSBkb2Vzbid0IHdvcmsgc28gY2hlY2sgaWYgYm9keSBleGlzdHNcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIC8vIENhbid0IHVzZSB0aGUgcmVhbCBib2R5IGNyZWF0ZSBhIGZha2Ugb25lLlxuICAgICAgYm9keSA9IGNyZWF0ZUVsZW1lbnQoaXNTVkcgPyAnc3ZnJyA6ICdib2R5Jyk7XG4gICAgICBib2R5LmZha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgO1xuXG4gIC8qKlxuICAgKiBpbmplY3RFbGVtZW50V2l0aFN0eWxlcyBpbmplY3RzIGFuIGVsZW1lbnQgd2l0aCBzdHlsZSBlbGVtZW50IGFuZCBzb21lIENTUyBydWxlc1xuICAgKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICogQGZ1bmN0aW9uIGluamVjdEVsZW1lbnRXaXRoU3R5bGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlIC0gU3RyaW5nIHJlcHJlc2VudGluZyBhIGNzcyBydWxlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gdGVzdCB0aGUgaW5qZWN0ZWQgZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gW25vZGVzXSAtIEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgYWRkaXRpb25hbCBub2RlcyB5b3Ugd2FudCBpbmplY3RlZFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbdGVzdG5hbWVzXSAtIEFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBhcmUgdXNlZCBhcyBpZHMgZm9yIHRoZSBhZGRpdGlvbmFsIG5vZGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cblxuICBmdW5jdGlvbiBpbmplY3RFbGVtZW50V2l0aFN0eWxlcyhydWxlLCBjYWxsYmFjaywgbm9kZXMsIHRlc3RuYW1lcykge1xuICAgIHZhciBtb2QgPSAnbW9kZXJuaXpyJztcbiAgICB2YXIgc3R5bGU7XG4gICAgdmFyIHJldDtcbiAgICB2YXIgbm9kZTtcbiAgICB2YXIgZG9jT3ZlcmZsb3c7XG4gICAgdmFyIGRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBib2R5ID0gZ2V0Qm9keSgpO1xuXG4gICAgaWYgKHBhcnNlSW50KG5vZGVzLCAxMCkpIHtcbiAgICAgIC8vIEluIG9yZGVyIG5vdCB0byBnaXZlIGZhbHNlIHBvc2l0aXZlcyB3ZSBjcmVhdGUgYSBub2RlIGZvciBlYWNoIHRlc3RcbiAgICAgIC8vIFRoaXMgYWxzbyBhbGxvd3MgdGhlIG1ldGhvZCB0byBzY2FsZSBmb3IgdW5zcGVjaWZpZWQgdXNlc1xuICAgICAgd2hpbGUgKG5vZGVzLS0pIHtcbiAgICAgICAgbm9kZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBub2RlLmlkID0gdGVzdG5hbWVzID8gdGVzdG5hbWVzW25vZGVzXSA6IG1vZCArIChub2RlcyArIDEpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3R5bGUgPSBjcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkID0gJ3MnICsgbW9kO1xuXG4gICAgLy8gSUU2IHdpbGwgZmFsc2UgcG9zaXRpdmUgb24gc29tZSB0ZXN0cyBkdWUgdG8gdGhlIHN0eWxlIGVsZW1lbnQgaW5zaWRlIHRoZSB0ZXN0IGRpdiBzb21laG93IGludGVyZmVyaW5nIG9mZnNldEhlaWdodCwgc28gaW5zZXJ0IGl0IGludG8gYm9keSBvciBmYWtlYm9keS5cbiAgICAvLyBPcGVyYSB3aWxsIGFjdCBhbGwgcXVpcmt5IHdoZW4gaW5qZWN0aW5nIGVsZW1lbnRzIGluIGRvY3VtZW50RWxlbWVudCB3aGVuIHBhZ2UgaXMgc2VydmVkIGFzIHhtbCwgbmVlZHMgZmFrZWJvZHkgdG9vLiAjMjcwXG4gICAgKCFib2R5LmZha2UgPyBkaXYgOiBib2R5KS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJ1bGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG4gICAgZGl2LmlkID0gbW9kO1xuXG4gICAgaWYgKGJvZHkuZmFrZSkge1xuICAgICAgLy9hdm9pZCBjcmFzaGluZyBJRTgsIGlmIGJhY2tncm91bmQgaW1hZ2UgaXMgdXNlZFxuICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAvL1NhZmFyaSA1LjEzLzUuMS40IE9TWCBzdG9wcyBsb2FkaW5nIGlmIDo6LXdlYmtpdC1zY3JvbGxiYXIgaXMgdXNlZCBhbmQgc2Nyb2xsYmFycyBhcmUgdmlzaWJsZVxuICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jT3ZlcmZsb3cgPSBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93O1xuICAgICAgZG9jRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgZG9jRWxlbWVudC5hcHBlbmRDaGlsZChib2R5KTtcbiAgICB9XG5cbiAgICByZXQgPSBjYWxsYmFjayhkaXYsIHJ1bGUpO1xuICAgIC8vIElmIHRoaXMgaXMgZG9uZSBhZnRlciBwYWdlIGxvYWQgd2UgZG9uJ3Qgd2FudCB0byByZW1vdmUgdGhlIGJvZHkgc28gY2hlY2sgaWYgYm9keSBleGlzdHNcbiAgICBpZiAoYm9keS5mYWtlKSB7XG4gICAgICBib2R5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYm9keSk7XG4gICAgICBkb2NFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gZG9jT3ZlcmZsb3c7XG4gICAgICAvLyBUcmlnZ2VyIGxheW91dCBzbyBraW5ldGljIHNjcm9sbGluZyBpc24ndCBkaXNhYmxlZCBpbiBpT1M2K1xuICAgICAgZG9jRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhcmV0O1xuXG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIG5hdGl2ZVRlc3RQcm9wcyBhbGxvd3MgZm9yIHVzIHRvIHVzZSBuYXRpdmUgZmVhdHVyZSBkZXRlY3Rpb24gZnVuY3Rpb25hbGl0eSBpZiBhdmFpbGFibGUuXG4gICAqIHNvbWUgcHJlZml4ZWQgZm9ybSwgb3IgZmFsc2UsIGluIHRoZSBjYXNlIG9mIGFuIHVuc3VwcG9ydGVkIHJ1bGVcbiAgICpcbiAgICogQGFjY2VzcyBwcml2YXRlXG4gICAqIEBmdW5jdGlvbiBuYXRpdmVUZXN0UHJvcHNcbiAgICogQHBhcmFtIHthcnJheX0gcHJvcHMgLSBBbiBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHZhbHVlIHdlIHdhbnQgdG8gY2hlY2sgdmlhIEBzdXBwb3J0c1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbnx1bmRlZmluZWR9IEEgYm9vbGVhbiB3aGVuIEBzdXBwb3J0cyBleGlzdHMsIHVuZGVmaW5lZCBvdGhlcndpc2VcbiAgICovXG5cbiAgLy8gQWNjZXB0cyBhIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXMgYW5kIGEgc2luZ2xlIHZhbHVlXG4gIC8vIFJldHVybnMgYHVuZGVmaW5lZGAgaWYgbmF0aXZlIGRldGVjdGlvbiBub3QgYXZhaWxhYmxlXG4gIGZ1bmN0aW9uIG5hdGl2ZVRlc3RQcm9wcyhwcm9wcywgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHByb3BzLmxlbmd0aDtcbiAgICAvLyBTdGFydCB3aXRoIHRoZSBKUyBBUEk6IGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29uZGl0aW9uYWwvI3RoZS1jc3MtaW50ZXJmYWNlXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIC8vIFRyeSBldmVyeSBwcmVmaXhlZCB2YXJpYW50IG9mIHRoZSBwcm9wZXJ0eVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZiAod2luZG93LkNTUy5zdXBwb3J0cyhkb21Ub0NTUyhwcm9wc1tpXSksIHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSBmYWxsIGJhY2sgdG8gYXQtcnVsZSAoZm9yIE9wZXJhIDEyLngpXG4gICAgZWxzZSBpZiAoJ0NTU1N1cHBvcnRzUnVsZScgaW4gd2luZG93KSB7XG4gICAgICAvLyBCdWlsZCBhIGNvbmRpdGlvbiBzdHJpbmcgZm9yIGV2ZXJ5IHByZWZpeGVkIHZhcmlhbnRcbiAgICAgIHZhciBjb25kaXRpb25UZXh0ID0gW107XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbmRpdGlvblRleHQucHVzaCgnKCcgKyBkb21Ub0NTUyhwcm9wc1tpXSkgKyAnOicgKyB2YWx1ZSArICcpJyk7XG4gICAgICB9XG4gICAgICBjb25kaXRpb25UZXh0ID0gY29uZGl0aW9uVGV4dC5qb2luKCcgb3IgJyk7XG4gICAgICByZXR1cm4gaW5qZWN0RWxlbWVudFdpdGhTdHlsZXMoJ0BzdXBwb3J0cyAoJyArIGNvbmRpdGlvblRleHQgKyAnKSB7ICNtb2Rlcm5penIgeyBwb3NpdGlvbjogYWJzb2x1dGU7IH0gfScsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCkucG9zaXRpb24gPT0gJ2Fic29sdXRlJztcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIDtcblxuICAvLyB0ZXN0UHJvcHMgaXMgYSBnZW5lcmljIENTUyAvIERPTSBwcm9wZXJ0eSB0ZXN0LlxuXG4gIC8vIEluIHRlc3Rpbmcgc3VwcG9ydCBmb3IgYSBnaXZlbiBDU1MgcHJvcGVydHksIGl0J3MgbGVnaXQgdG8gdGVzdDpcbiAgLy8gICAgYGVsZW0uc3R5bGVbc3R5bGVOYW1lXSAhPT0gdW5kZWZpbmVkYFxuICAvLyBJZiB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGl0IHdpbGwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZyxcbiAgLy8gaWYgdW5zdXBwb3J0ZWQgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuXG4gIC8vIFdlJ2xsIHRha2UgYWR2YW50YWdlIG9mIHRoaXMgcXVpY2sgdGVzdCBhbmQgc2tpcCBzZXR0aW5nIGEgc3R5bGVcbiAgLy8gb24gb3VyIG1vZGVybml6ciBlbGVtZW50LCBidXQgaW5zdGVhZCBqdXN0IHRlc3RpbmcgdW5kZWZpbmVkIHZzXG4gIC8vIGVtcHR5IHN0cmluZy5cblxuICAvLyBQcm9wZXJ0eSBuYW1lcyBjYW4gYmUgcHJvdmlkZWQgaW4gZWl0aGVyIGNhbWVsQ2FzZSBvciBrZWJhYi1jYXNlLlxuXG4gIGZ1bmN0aW9uIHRlc3RQcm9wcyhwcm9wcywgcHJlZml4ZWQsIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG4gICAgc2tpcFZhbHVlVGVzdCA9IGlzKHNraXBWYWx1ZVRlc3QsICd1bmRlZmluZWQnKSA/IGZhbHNlIDogc2tpcFZhbHVlVGVzdDtcblxuICAgIC8vIFRyeSBuYXRpdmUgZGV0ZWN0IGZpcnN0XG4gICAgaWYgKCFpcyh2YWx1ZSwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gbmF0aXZlVGVzdFByb3BzKHByb3BzLCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzKHJlc3VsdCwgJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIGRvIGl0IHByb3Blcmx5XG4gICAgdmFyIGFmdGVySW5pdCwgaSwgcHJvcHNMZW5ndGgsIHByb3AsIGJlZm9yZTtcblxuICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBzdHlsZSBlbGVtZW50LCB0aGF0IG1lYW5zIHdlJ3JlIHJ1bm5pbmcgYXN5bmMgb3IgYWZ0ZXJcbiAgICAvLyB0aGUgY29yZSB0ZXN0cywgc28gd2UnbGwgbmVlZCB0byBjcmVhdGUgb3VyIG93biBlbGVtZW50cyB0byB1c2VcblxuICAgIC8vIGluc2lkZSBvZiBhbiBTVkcgZWxlbWVudCwgaW4gY2VydGFpbiBicm93c2VycywgdGhlIGBzdHlsZWAgZWxlbWVudCBpcyBvbmx5XG4gICAgLy8gZGVmaW5lZCBmb3IgdmFsaWQgdGFncy4gVGhlcmVmb3JlLCBpZiBgbW9kZXJuaXpyYCBkb2VzIG5vdCBoYXZlIG9uZSwgd2VcbiAgICAvLyBmYWxsIGJhY2sgdG8gYSBsZXNzIHVzZWQgZWxlbWVudCBhbmQgaG9wZSBmb3IgdGhlIGJlc3QuXG4gICAgdmFyIGVsZW1zID0gWydtb2Rlcm5penInLCAndHNwYW4nXTtcbiAgICB3aGlsZSAoIW1TdHlsZS5zdHlsZSkge1xuICAgICAgYWZ0ZXJJbml0ID0gdHJ1ZTtcbiAgICAgIG1TdHlsZS5tb2RFbGVtID0gY3JlYXRlRWxlbWVudChlbGVtcy5zaGlmdCgpKTtcbiAgICAgIG1TdHlsZS5zdHlsZSA9IG1TdHlsZS5tb2RFbGVtLnN0eWxlO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSB0aGUgb2JqZWN0cyBpZiB3ZSBjcmVhdGVkIHRoZW0uXG4gICAgZnVuY3Rpb24gY2xlYW5FbGVtcygpIHtcbiAgICAgIGlmIChhZnRlckluaXQpIHtcbiAgICAgICAgZGVsZXRlIG1TdHlsZS5zdHlsZTtcbiAgICAgICAgZGVsZXRlIG1TdHlsZS5tb2RFbGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzTGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBwcm9wc0xlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9wID0gcHJvcHNbaV07XG4gICAgICBiZWZvcmUgPSBtU3R5bGUuc3R5bGVbcHJvcF07XG5cbiAgICAgIGlmIChjb250YWlucyhwcm9wLCAnLScpKSB7XG4gICAgICAgIHByb3AgPSBjc3NUb0RPTShwcm9wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1TdHlsZS5zdHlsZVtwcm9wXSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgdG8gdGVzdCBoYXMgYmVlbiBwYXNzZWQgaW4sIGRvIGEgc2V0LWFuZC1jaGVjayB0ZXN0LlxuICAgICAgICAvLyAwIChpbnRlZ2VyKSBpcyBhIHZhbGlkIHByb3BlcnR5IHZhbHVlLCBzbyBjaGVjayB0aGF0IGB2YWx1ZWAgaXNuJ3RcbiAgICAgICAgLy8gdW5kZWZpbmVkLCByYXRoZXIgdGhhbiBqdXN0IGNoZWNraW5nIGl0J3MgdHJ1dGh5LlxuICAgICAgICBpZiAoIXNraXBWYWx1ZVRlc3QgJiYgIWlzKHZhbHVlLCAndW5kZWZpbmVkJykpIHtcblxuICAgICAgICAgIC8vIE5lZWRzIGEgdHJ5IGNhdGNoIGJsb2NrIGJlY2F1c2Ugb2Ygb2xkIElFLiBUaGlzIGlzIHNsb3csIGJ1dCB3aWxsXG4gICAgICAgICAgLy8gYmUgYXZvaWRlZCBpbiBtb3N0IGNhc2VzIGJlY2F1c2UgYHNraXBWYWx1ZVRlc3RgIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbVN0eWxlLnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBoYXMgY2hhbmdlZCwgd2UgYXNzdW1lIHRoZSB2YWx1ZSB1c2VkIGlzXG4gICAgICAgICAgLy8gc3VwcG9ydGVkLiBJZiBgdmFsdWVgIGlzIGVtcHR5IHN0cmluZywgaXQnbGwgZmFpbCBoZXJlIChiZWNhdXNlXG4gICAgICAgICAgLy8gaXQgaGFzbid0IGNoYW5nZWQpLCB3aGljaCBtYXRjaGVzIGhvdyBicm93c2VycyBoYXZlIGltcGxlbWVudGVkXG4gICAgICAgICAgLy8gQ1NTLnN1cHBvcnRzKClcbiAgICAgICAgICBpZiAobVN0eWxlLnN0eWxlW3Byb3BdICE9IGJlZm9yZSkge1xuICAgICAgICAgICAgY2xlYW5FbGVtcygpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVkID09ICdwZngnID8gcHJvcCA6IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBqdXN0IHJldHVybiB0cnVlLCBvciB0aGUgcHJvcGVydHkgbmFtZSBpZiB0aGlzIGlzIGFcbiAgICAgICAgLy8gYHByZWZpeGVkKClgIGNhbGxcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYW5FbGVtcygpO1xuICAgICAgICAgIHJldHVybiBwcmVmaXhlZCA9PSAncGZ4JyA/IHByb3AgOiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFuRWxlbXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICA7XG5cbiAgLyoqXG4gICAqIHRlc3RQcm9wKCkgaW52ZXN0aWdhdGVzIHdoZXRoZXIgYSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSBpcyByZWNvZ25pemVkXG4gICAqIFByb3BlcnR5IG5hbWVzIGNhbiBiZSBwcm92aWRlZCBpbiBlaXRoZXIgY2FtZWxDYXNlIG9yIGtlYmFiLWNhc2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBNb2Rlcm5penJcbiAgICogQG5hbWUgTW9kZXJuaXpyLnRlc3RQcm9wXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqIEBvcHRpb25OYW1lIE1vZGVybml6ci50ZXN0UHJvcCgpXG4gICAqIEBvcHRpb25Qcm9wIHRlc3RQcm9wXG4gICAqIEBmdW5jdGlvbiB0ZXN0UHJvcFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eSB0byBjaGVja1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIE5hbWUgb2YgdGhlIENTUyB2YWx1ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1c2VWYWx1ZV0gLSBXaGV0aGVyIG9yIG5vdCB0byBjaGVjayB0aGUgdmFsdWUgaWYgQHN1cHBvcnRzIGlzbid0IHN1cHBvcnRlZFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogSnVzdCBsaWtlIFt0ZXN0QWxsUHJvcHNdKCNtb2Rlcm5penItdGVzdGFsbHByb3BzKSwgb25seSBpdCBkb2VzIG5vdCBjaGVjayBhbnkgdmVuZG9yIHByZWZpeGVkXG4gICAqIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBwcm9wZXJ0eSBuYW1lIG11c3QgYmUgcHJvdmlkZWQgaW4gY2FtZWxDYXNlIChlLmcuIGJveFNpemluZyBub3QgYm94LXNpemluZylcbiAgICpcbiAgICogYGBganNcbiAgICogTW9kZXJuaXpyLnRlc3RQcm9wKCdwb2ludGVyRXZlbnRzJykgIC8vIHRydWVcbiAgICogYGBgXG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyBwcm92aWRlIGEgdmFsdWUgYXMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGNoZWNrIGlmIGFcbiAgICogc3BlY2lmaWMgdmFsdWUgaXMgc3VwcG9ydGVkXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIE1vZGVybml6ci50ZXN0UHJvcCgncG9pbnRlckV2ZW50cycsICdub25lJykgLy8gdHJ1ZVxuICAgKiBNb2Rlcm5penIudGVzdFByb3AoJ3BvaW50ZXJFdmVudHMnLCAncGVuZ3VpbicpIC8vIGZhbHNlXG4gICAqIGBgYFxuICAgKi9cblxuICB2YXIgdGVzdFByb3AgPSBNb2Rlcm5penJQcm90by50ZXN0UHJvcCA9IGZ1bmN0aW9uKHByb3AsIHZhbHVlLCB1c2VWYWx1ZSkge1xuICAgIHJldHVybiB0ZXN0UHJvcHMoW3Byb3BdLCB1bmRlZmluZWQsIHZhbHVlLCB1c2VWYWx1ZSk7XG4gIH07XG5cbi8qIVxue1xuICBcIm5hbWVcIjogXCJDU1MgdGV4dHNoYWRvd1wiLFxuICBcInByb3BlcnR5XCI6IFwidGV4dHNoYWRvd1wiLFxuICBcImNhbml1c2VcIjogXCJjc3MtdGV4dHNoYWRvd1wiLFxuICBcInRhZ3NcIjogW1wiY3NzXCJdLFxuICBcImtub3duQnVnc1wiOiBbXCJGRjMuMCB3aWxsIGZhbHNlIHBvc2l0aXZlIG9uIHRoaXMgdGVzdFwiXVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ3RleHRzaGFkb3cnLCB0ZXN0UHJvcCgndGV4dFNoYWRvdycsICcxcHggMXB4JykpO1xuXG5cbiAgLyoqXG4gICAqIHRlc3RQcm9wc0FsbCB0ZXN0cyBhIGxpc3Qgb2YgRE9NIHByb3BlcnRpZXMgd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0LlxuICAgKiBXZSBzcGVjaWZ5IGxpdGVyYWxseSBBTEwgcG9zc2libGUgKGtub3duIGFuZC9vciBsaWtlbHkpIHByb3BlcnRpZXMgb25cbiAgICogdGhlIGVsZW1lbnQgaW5jbHVkaW5nIHRoZSBub24tdmVuZG9yIHByZWZpeGVkIG9uZSwgZm9yIGZvcndhcmQtXG4gICAqIGNvbXBhdGliaWxpdHkuXG4gICAqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKiBAZnVuY3Rpb24gdGVzdFByb3BzQWxsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gQSBzdHJpbmcgb2YgdGhlIHByb3BlcnR5IHRvIHRlc3QgZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gW3ByZWZpeGVkXSAtIEFuIG9iamVjdCB0byBjaGVjayB0aGUgcHJlZml4ZWQgcHJvcGVydGllcyBvbi4gVXNlIGEgc3RyaW5nIHRvIHNraXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudHxTVkdFbGVtZW50fSBbZWxlbV0gLSBBbiBlbGVtZW50IHVzZWQgdG8gdGVzdCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlIGFnYWluc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZV0gLSBBIHN0cmluZyBvZiBhIGNzcyB2YWx1ZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVmFsdWVUZXN0XSAtIEFuIGJvb2xlYW4gcmVwcmVzZW50aW5nIGlmIHlvdSB3YW50IHRvIHRlc3QgaWYgdmFsdWUgc3RpY2tzIHdoZW4gc2V0XG4gICAqL1xuICBmdW5jdGlvbiB0ZXN0UHJvcHNBbGwocHJvcCwgcHJlZml4ZWQsIGVsZW0sIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG5cbiAgICB2YXIgdWNQcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgcHJvcHMgPSAocHJvcCArICcgJyArIGNzc29tUHJlZml4ZXMuam9pbih1Y1Byb3AgKyAnICcpICsgdWNQcm9wKS5zcGxpdCgnICcpO1xuXG4gICAgLy8gZGlkIHRoZXkgY2FsbCAucHJlZml4ZWQoJ2JveFNpemluZycpIG9yIGFyZSB3ZSBqdXN0IHRlc3RpbmcgYSBwcm9wP1xuICAgIGlmIChpcyhwcmVmaXhlZCwgJ3N0cmluZycpIHx8IGlzKHByZWZpeGVkLCAndW5kZWZpbmVkJykpIHtcbiAgICAgIHJldHVybiB0ZXN0UHJvcHMocHJvcHMsIHByZWZpeGVkLCB2YWx1ZSwgc2tpcFZhbHVlVGVzdCk7XG5cbiAgICAgIC8vIG90aGVyd2lzZSwgdGhleSBjYWxsZWQgLnByZWZpeGVkKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnLCB3aW5kb3dbLCBlbGVtXSlcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSAocHJvcCArICcgJyArIChkb21QcmVmaXhlcykuam9pbih1Y1Byb3AgKyAnICcpICsgdWNQcm9wKS5zcGxpdCgnICcpO1xuICAgICAgcmV0dXJuIHRlc3RET01Qcm9wcyhwcm9wcywgcHJlZml4ZWQsIGVsZW0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1vZGVybml6ci50ZXN0QWxsUHJvcHMoKSBpbnZlc3RpZ2F0ZXMgd2hldGhlciBhIGdpdmVuIHN0eWxlIHByb3BlcnR5LFxuICAvLyBvciBhbnkgb2YgaXRzIHZlbmRvci1wcmVmaXhlZCB2YXJpYW50cywgaXMgcmVjb2duaXplZFxuICAvL1xuICAvLyBOb3RlIHRoYXQgdGhlIHByb3BlcnR5IG5hbWVzIG11c3QgYmUgcHJvdmlkZWQgaW4gdGhlIGNhbWVsQ2FzZSB2YXJpYW50LlxuICAvLyBNb2Rlcm5penIudGVzdEFsbFByb3BzKCdib3hTaXppbmcnKVxuICBNb2Rlcm5penJQcm90by50ZXN0QWxsUHJvcHMgPSB0ZXN0UHJvcHNBbGw7XG5cblxuXG4gIC8qKlxuICAgKiB0ZXN0QWxsUHJvcHMgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBpbiB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAbWVtYmVyb2YgTW9kZXJuaXpyXG4gICAqIEBuYW1lIE1vZGVybml6ci50ZXN0QWxsUHJvcHNcbiAgICogQG9wdGlvbk5hbWUgTW9kZXJuaXpyLnRlc3RBbGxQcm9wcygpXG4gICAqIEBvcHRpb25Qcm9wIHRlc3RBbGxQcm9wc1xuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKiBAZnVuY3Rpb24gdGVzdEFsbFByb3BzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wIC0gU3RyaW5nIG5hbWluZyB0aGUgcHJvcGVydHkgdG8gdGVzdCAoZWl0aGVyIGNhbWVsQ2FzZSBvciBrZWJhYi1jYXNlKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIFN0cmluZyBvZiB0aGUgdmFsdWUgdG8gdGVzdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwVmFsdWVUZXN0PWZhbHNlXSAtIFdoZXRoZXIgdG8gc2tpcCB0ZXN0aW5nIHRoYXQgdGhlIHZhbHVlIGlzIHN1cHBvcnRlZCB3aGVuIHVzaW5nIG5vbi1uYXRpdmUgZGV0ZWN0aW9uXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHRlc3RBbGxQcm9wcyBkZXRlcm1pbmVzIHdoZXRoZXIgYSBnaXZlbiBDU1MgcHJvcGVydHksIGluIHNvbWUgcHJlZml4ZWQgZm9ybSxcbiAgICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ2JveFNpemluZycpICAvLyB0cnVlXG4gICAqIGBgYFxuICAgKlxuICAgKiBJdCBjYW4gb3B0aW9uYWxseSBiZSBnaXZlbiBhIENTUyB2YWx1ZSBpbiBzdHJpbmcgZm9ybSB0byB0ZXN0IGlmIGEgcHJvcGVydHlcbiAgICogdmFsdWUgaXMgdmFsaWRcbiAgICpcbiAgICogYGBganNcbiAgICogdGVzdEFsbFByb3BzKCdkaXNwbGF5JywgJ2Jsb2NrJykgLy8gdHJ1ZVxuICAgKiB0ZXN0QWxsUHJvcHMoJ2Rpc3BsYXknLCAncGVuZ3VpbicpIC8vIGZhbHNlXG4gICAqIGBgYFxuICAgKlxuICAgKiBBIGJvb2xlYW4gY2FuIGJlIHBhc3NlZCBhcyBhIHRoaXJkIHBhcmFtZXRlciB0byBza2lwIHRoZSB2YWx1ZSBjaGVjayB3aGVuXG4gICAqIG5hdGl2ZSBkZXRlY3Rpb24gKEBzdXBwb3J0cykgaXNuJ3QgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiB0ZXN0QWxsUHJvcHMoJ3NoYXBlT3V0c2lkZScsICdjb250ZW50LWJveCcsIHRydWUpO1xuICAgKiBgYGBcbiAgICovXG5cbiAgZnVuY3Rpb24gdGVzdEFsbFByb3BzKHByb3AsIHZhbHVlLCBza2lwVmFsdWVUZXN0KSB7XG4gICAgcmV0dXJuIHRlc3RQcm9wc0FsbChwcm9wLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdmFsdWUsIHNraXBWYWx1ZVRlc3QpO1xuICB9XG4gIE1vZGVybml6clByb3RvLnRlc3RBbGxQcm9wcyA9IHRlc3RBbGxQcm9wcztcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkNTUyBBbmltYXRpb25zXCIsXG4gIFwicHJvcGVydHlcIjogXCJjc3NhbmltYXRpb25zXCIsXG4gIFwiY2FuaXVzZVwiOiBcImNzcy1hbmltYXRpb25cIixcbiAgXCJwb2x5ZmlsbHNcIjogW1widHJhbnNmb3JtaWVcIiwgXCJjc3NzYW5kcGFwZXJcIl0sXG4gIFwidGFnc1wiOiBbXCJjc3NcIl0sXG4gIFwid2FybmluZ3NcIjogW1wiQW5kcm9pZCA8IDQgd2lsbCBwYXNzIHRoaXMgdGVzdCwgYnV0IGNhbiBvbmx5IGFuaW1hdGUgYSBzaW5nbGUgcHJvcGVydHkgYXQgYSB0aW1lXCJdLFxuICBcIm5vdGVzXCI6IFt7XG4gICAgXCJuYW1lXCIgOiBcIkFydGljbGU6ICdEaXNwZWxsaW5nIHRoZSBBbmRyb2lkIENTUyBhbmltYXRpb24gbXl0aHMnXCIsXG4gICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9nb28uZ2wvT0d3NUdtXCJcbiAgfV1cbn1cbiEqL1xuLyogRE9DXG5EZXRlY3RzIHdoZXRoZXIgb3Igbm90IGVsZW1lbnRzIGNhbiBiZSBhbmltYXRlZCB1c2luZyBDU1NcbiovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2Nzc2FuaW1hdGlvbnMnLCB0ZXN0QWxsUHJvcHMoJ2FuaW1hdGlvbk5hbWUnLCAnYScsIHRydWUpKTtcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkJhY2tncm91bmQgU2l6ZVwiLFxuICBcInByb3BlcnR5XCI6IFwiYmFja2dyb3VuZHNpemVcIixcbiAgXCJ0YWdzXCI6IFtcImNzc1wiXSxcbiAgXCJrbm93bkJ1Z3NcIjogW1wiVGhpcyB3aWxsIGZhbHNlIHBvc2l0aXZlIGluIE9wZXJhIE1pbmkgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9pc3N1ZXMvMzk2XCJdLFxuICBcIm5vdGVzXCI6IFt7XG4gICAgXCJuYW1lXCI6IFwiUmVsYXRlZCBJc3N1ZVwiLFxuICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2lzc3Vlcy8zOTZcIlxuICB9XVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2JhY2tncm91bmRzaXplJywgdGVzdEFsbFByb3BzKCdiYWNrZ3JvdW5kU2l6ZScsICcxMDAlJywgdHJ1ZSkpO1xuXG4vKiFcbntcbiAgXCJuYW1lXCI6IFwiQ1NTIFRyYW5zaXRpb25zXCIsXG4gIFwicHJvcGVydHlcIjogXCJjc3N0cmFuc2l0aW9uc1wiLFxuICBcImNhbml1c2VcIjogXCJjc3MtdHJhbnNpdGlvbnNcIixcbiAgXCJ0YWdzXCI6IFtcImNzc1wiXVxufVxuISovXG5cbiAgTW9kZXJuaXpyLmFkZFRlc3QoJ2Nzc3RyYW5zaXRpb25zJywgdGVzdEFsbFByb3BzKCd0cmFuc2l0aW9uJywgJ2FsbCcsIHRydWUpKTtcblxuLyohXG57XG4gIFwibmFtZVwiOiBcIkJveCBTaGFkb3dcIixcbiAgXCJwcm9wZXJ0eVwiOiBcImJveHNoYWRvd1wiLFxuICBcImNhbml1c2VcIjogXCJjc3MtYm94c2hhZG93XCIsXG4gIFwidGFnc1wiOiBbXCJjc3NcIl0sXG4gIFwia25vd25CdWdzXCI6IFtcbiAgICBcIldlYk9TIGZhbHNlIHBvc2l0aXZlcyBvbiB0aGlzIHRlc3QuXCIsXG4gICAgXCJUaGUgS2luZGxlIFNpbGsgYnJvd3NlciBmYWxzZSBwb3NpdGl2ZXNcIlxuICBdXG59XG4hKi9cblxuICBNb2Rlcm5penIuYWRkVGVzdCgnYm94c2hhZG93JywgdGVzdEFsbFByb3BzKCdib3hTaGFkb3cnLCAnMXB4IDFweCcsIHRydWUpKTtcblxuXG4gIC8vIFJ1biBlYWNoIHRlc3RcbiAgdGVzdFJ1bm5lcigpO1xuXG4gIC8vIFJlbW92ZSB0aGUgXCJuby1qc1wiIGNsYXNzIGlmIGl0IGV4aXN0c1xuICBzZXRDbGFzc2VzKGNsYXNzZXMpO1xuXG4gIGRlbGV0ZSBNb2Rlcm5penJQcm90by5hZGRUZXN0O1xuICBkZWxldGUgTW9kZXJuaXpyUHJvdG8uYWRkQXN5bmNUZXN0O1xuXG4gIC8vIFJ1biB0aGUgdGhpbmdzIHRoYXQgYXJlIHN1cHBvc2VkIHRvIHJ1biBhZnRlciB0aGUgdGVzdHNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBNb2Rlcm5penIuX3EubGVuZ3RoOyBpKyspIHtcbiAgICBNb2Rlcm5penIuX3FbaV0oKTtcbiAgfVxuXG4gIC8vIExlYWsgTW9kZXJuaXpyIG5hbWVzcGFjZVxuICB3aW5kb3cuTW9kZXJuaXpyID0gTW9kZXJuaXpyO1xuXG5cbjtcblxufSkod2luZG93LCBkb2N1bWVudCk7IiwiaW1wb3J0IHdpbmRvdyBmcm9tICd3aW5kb3cnO1xuaW1wb3J0IHByb2dyZXNzSnMgZnJvbSAncHJvZ3Jlc3NKcyc7XG5cbmltcG9ydCB7IGphc3NsIH0gZnJvbSAnQ29tbW9uL0phc3NsJztcbmltcG9ydCB7IGdldEhhc2gsIHNldEhhc2gsIGNsZWFySGFzaCB9IGZyb20gJ1N0b3JhZ2UvUmFpbkxvb3AnO1xuXG5sZXQgUkxfQVBQX0RBVEFfU1RPUkFHRSA9IG51bGw7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSxzcGFjZWQtY29tbWVudCAgKi9cbndpbmRvdy5fX3JsYWggPSAoKSA9PiBnZXRIYXNoKCk7XG53aW5kb3cuX19ybGFoX3NldCA9ICgpID0+IHNldEhhc2goKTtcbndpbmRvdy5fX3JsYWhfY2xlYXIgPSAoKSA9PiBjbGVhckhhc2goKTtcbndpbmRvdy5fX3JsYWhfZGF0YSA9ICgpID0+IFJMX0FQUF9EQVRBX1NUT1JBR0U7XG5cbmNvbnN0IHVzZUpzTmV4dEJ1bmRsZSA9IChmdW5jdGlvbigpIHtcblx0Ly9cdHRyeSB7XG5cdC8vXG5cdC8vXHRcdChmdW5jdGlvbigpIHtcblx0Ly9cdFx0XHRldmFsKGBcblx0Ly8gLy8gbGV0ICsgY29uc3Rcblx0Ly9jb25zdCB4ID0gNTsgbGV0IHkgPSA0OyB2YXIgeiA9IDQ7XG5cdC8vXG5cdC8vIC8vIEFycm93IEZ1bmN0aW9uXG5cdC8vY29uc3QgZiA9ICgpID0+ICdyYWlubG9vcCc7XG5cdC8vXG5cdC8vIC8vIERlZmF1bHQgKyBSZXN0ICsgU3ByZWFkXG5cdC8vY29uc3QgZCA9ICh0ZXN0ID0gMSwgLi4udCkgPT4gJ3JhaW5sb29wJztcblx0Ly9kKC4uLlsxLCAyLCAzXSk7XG5cdC8vXG5cdC8vLy8gRGVzdHJ1Y3R1cmluZ1xuXHQvL2xldCBbYSwgYl0gPSBbMSwgMl07XG5cdC8vKHthLCBifSA9IHthOiAxLCBiOiAyfSk7XG5cdC8vXG5cdC8vLy8gQ2xhc3Ncblx0Ly9jbGFzcyBRMSB7IGNvbnN0cnVjdG9yKCkge30gfVxuXHQvL1xuXHQvLy8vIENsYXNzIGV4dGVuZHMgKyBzdXBlclxuXHQvL2NsYXNzIFEyIGV4dGVuZHMgUTEgeyBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKSB9IH1cblx0Ly9cblx0Ly9gKTtcblx0Ly9cdFx0fSgpKTtcblx0Ly9cblx0Ly9cdFx0cmV0dXJuIHRydWU7XG5cdC8vXHR9XG5cdC8vXHRjYXRjaCAoZSkge31cblx0cmV0dXJuIGZhbHNlO1xufSkoKTtcbi8qIGVzbGludC1lbmFibGUgKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGlkLCBuYW1lKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRyZXR1cm4gZWxlbWVudCAmJiBlbGVtZW50LmN1cnJlbnRTdHlsZVxuXHRcdD8gZWxlbWVudC5jdXJyZW50U3R5bGVbbmFtZV1cblx0XHQ6IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlXG5cdFx0PyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG5cdFx0OiBudWxsO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZXNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbmNsdWRlU3R5bGUoc3R5bGVzKSB7XG5cdHdpbmRvdy5kb2N1bWVudC53cml0ZSh1bmVzY2FwZSgnJTNDc3R5JyArICdsZSUzRScgKyBzdHlsZXMgKyAnXCIlM0UlM0MvJyArICdzdHknICsgJ2xlJTNFJykpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVTY3Ioc3JjKSB7XG5cdHdpbmRvdy5kb2N1bWVudC53cml0ZShcblx0XHR1bmVzY2FwZShcblx0XHRcdCclM0NzYycgK1xuXHRcdFx0XHQncmlwdCB0eXBlPVwidGV4dC9qYXYnICtcblx0XHRcdFx0J2FzY3InICtcblx0XHRcdFx0J2lwdFwiIGRhdGEtY2Zhc3luYz1cImZhbHNlXCIgc3InICtcblx0XHRcdFx0J2M9XCInICtcblx0XHRcdFx0c3JjICtcblx0XHRcdFx0J1wiJTNFJTNDLycgK1xuXHRcdFx0XHQnc2NyJyArXG5cdFx0XHRcdCdpcHQlM0UnXG5cdFx0KVxuXHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVzZWxlc3MtY29uY2F0XG59XG5cbi8qKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVMYXlvdXQoKSB7XG5cdGNvbnN0IGFwcCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmwtYXBwJyk7XG5cblx0cmVxdWlyZSgnU3R5bGVzL0BCb290LmNzcycpO1xuXG5cdGlmIChhcHApIHtcblx0XHRjb25zdCBsYXlvdXQgPSByZXF1aXJlKCdIdG1sL0xheW91dC5odG1sJyk7XG5cdFx0YXBwLmlubmVySFRNTCA9ICgobGF5b3V0ICYmIGxheW91dC5kZWZhdWx0ID8gbGF5b3V0LmRlZmF1bHQgOiBsYXlvdXQpIHx8ICcnKS5yZXBsYWNlKC9bXFxyXFxuXFx0XSsvZywgJycpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRtaW4gPSBmYWxzZVxuICogQHBhcmFtIHtib29sZWFufSBtb2JpbGUgPSBmYWxzZVxuICogQHBhcmFtIHtib29sZWFufSBtb2JpbGVEZXZpY2UgPSBmYWxzZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVBcHBTY3IoeyBhZG1pbiA9IGZhbHNlLCBtb2JpbGUgPSBmYWxzZSwgbW9iaWxlRGV2aWNlID0gZmFsc2UgfSkge1xuXHRsZXQgc3JjID0gJy4vPy8nO1xuXHRzcmMgKz0gYWRtaW4gPyAnQWRtaW4nIDogJyc7XG5cdHNyYyArPSAnQXBwRGF0YUAnO1xuXHRzcmMgKz0gbW9iaWxlID8gJ21vYmlsZScgOiAnbm8tbW9iaWxlJztcblx0c3JjICs9IG1vYmlsZURldmljZSA/ICctMScgOiAnLTAnO1xuXHRzcmMgKz0gJy8nO1xuXG5cdGluY2x1ZGVTY3IoXG5cdFx0c3JjICtcblx0XHRcdCh3aW5kb3cuX19ybGFoID8gd2luZG93Ll9fcmxhaCgpIHx8ICcwJyA6ICcwJykgK1xuXHRcdFx0Jy8nICtcblx0XHRcdHdpbmRvdy5NYXRoLnJhbmRvbSgpXG5cdFx0XHRcdC50b1N0cmluZygpXG5cdFx0XHRcdC5zdWJzdHIoMikgK1xuXHRcdFx0Jy8nXG5cdCk7XG59XG5cbi8qKlxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0UmFpbmxvb3BCb290RGF0YSgpIHtcblx0bGV0IHJlc3VsdCA9IHt9O1xuXHRjb25zdCBtZXRhID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtYm9vdC1kYXRhJyk7XG5cblx0aWYgKG1ldGEgJiYgbWV0YS5nZXRBdHRyaWJ1dGUpIHtcblx0XHRyZXN1bHQgPSBKU09OLnBhcnNlKG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpIHx8IHt9O1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRkaXRpb25hbEVycm9yXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2hvd0Vycm9yKGFkZGl0aW9uYWxFcnJvcikge1xuXHRjb25zdCBvUiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmwtbG9hZGluZycpLFxuXHRcdG9MID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdybC1sb2FkaW5nLWVycm9yJyksXG5cdFx0b0xBID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdybC1sb2FkaW5nLWVycm9yLWFkZGl0aW9uYWwnKTtcblxuXHRpZiAob1IpIHtcblx0XHRvUi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cblx0aWYgKG9MKSB7XG5cdFx0b0wuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdH1cblxuXHRpZiAob0xBICYmIGFkZGl0aW9uYWxFcnJvcikge1xuXHRcdG9MQS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRvTEEuaW5uZXJIVE1MID0gYWRkaXRpb25hbEVycm9yO1xuXHR9XG5cblx0aWYgKHByb2dyZXNzSnMpIHtcblx0XHRwcm9ncmVzc0pzLnNldCgxMDApLmVuZCgpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRlc2NyaXB0aW9uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2hvd0Rlc2NyaXB0aW9uQW5kTG9hZGluZyhkZXNjcmlwdGlvbikge1xuXHRjb25zdCBvRSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmwtbG9hZGluZycpLFxuXHRcdG9FbERlc2MgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JsLWxvYWRpbmctZGVzYycpO1xuXG5cdGlmIChvRWxEZXNjICYmIGRlc2NyaXB0aW9uKSB7XG5cdFx0b0VsRGVzYy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcblx0fVxuXG5cdGlmIChvRSAmJiBvRS5zdHlsZSkge1xuXHRcdG9FLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdG9FLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdH0sIDMwMCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhFcnJvclxuICogQHBhcmFtIHtzdHJpbmd9IGFkZGl0aW9uYWxFcnJvclxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJ1bk1haW5Cb290KHdpdGhFcnJvciwgYWRkaXRpb25hbEVycm9yKSB7XG5cdGlmICh3aW5kb3cuX19BUFBfQk9PVCAmJiAhd2l0aEVycm9yKSB7XG5cdFx0d2luZG93Ll9fQVBQX0JPT1QoKCkgPT4ge1xuXHRcdFx0c2hvd0Vycm9yKGFkZGl0aW9uYWxFcnJvcik7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd0Vycm9yKGFkZGl0aW9uYWxFcnJvcik7XG5cdH1cbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcnVuQXBwKCkge1xuXHRjb25zdCBhcHBEYXRhID0gd2luZG93Ll9fcmxhaF9kYXRhKCk7XG5cblx0aWYgKFxuXHRcdGphc3NsICYmXG5cdFx0cHJvZ3Jlc3NKcyAmJlxuXHRcdGFwcERhdGEgJiZcblx0XHRhcHBEYXRhLlRlbXBsYXRlc0xpbmsgJiZcblx0XHRhcHBEYXRhLkxhbmdMaW5rICYmXG5cdFx0YXBwRGF0YS5TdGF0aWNMaWJKc0xpbmsgJiZcblx0XHRhcHBEYXRhLlN0YXRpY0FwcEpzTGluayAmJlxuXHRcdGFwcERhdGEuU3RhdGljQXBwSnNOZXh0TGluayAmJlxuXHRcdGFwcERhdGEuU3RhdGljRWRpdG9ySnNMaW5rXG5cdCkge1xuXHRcdGNvbnN0IHAgPSBwcm9ncmVzc0pzO1xuXG5cdFx0cC5zZXRPcHRpb25zKHsgdGhlbWU6ICdyYWlubG9vcCcgfSk7XG5cdFx0cC5zdGFydCgpLnNldCg1KTtcblxuXHRcdGNvbnN0IGxpYnMgPSAoKSA9PlxuXHRcdFx0amFzc2woYXBwRGF0YS5TdGF0aWNMaWJKc0xpbmspLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAod2luZG93LiQpIHtcblx0XHRcdFx0XHR3aW5kb3cuJCgnI3JsLWNoZWNrJykucmVtb3ZlKCk7XG5cblx0XHRcdFx0XHRpZiAoYXBwRGF0YS5JbmNsdWRlQmFja2dyb3VuZCkge1xuXHRcdFx0XHRcdFx0d2luZG93XG5cdFx0XHRcdFx0XHRcdC4kKCcjcmwtYmcnKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50OycpXG5cdFx0XHRcdFx0XHRcdC5iYWNrc3RyZXRjaChcblx0XHRcdFx0XHRcdFx0XHRhcHBEYXRhLkluY2x1ZGVCYWNrZ3JvdW5kLnJlcGxhY2UoJ3t7VVNFUn19Jywgd2luZG93Ll9fcmxhaCA/IHdpbmRvdy5fX3JsYWgoKSB8fCAnMCcgOiAnMCcpLFxuXHRcdFx0XHRcdFx0XHRcdHsgZmFkZTogMTAwLCBjZW50ZXJlZFg6IHRydWUsIGNlbnRlcmVkWTogdHJ1ZSB9XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdGxpYnMoKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRwLnNldCgyMCk7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cuUHJvbWlzZS5hbGwoW2phc3NsKGFwcERhdGEuVGVtcGxhdGVzTGluayksIGphc3NsKGFwcERhdGEuTGFuZ0xpbmspXSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRwLnNldCgzMCk7XG5cdFx0XHRcdHJldHVybiBqYXNzbCh1c2VKc05leHRCdW5kbGUgPyBhcHBEYXRhLlN0YXRpY0FwcEpzTmV4dExpbmsgOiBhcHBEYXRhLlN0YXRpY0FwcEpzTGluayk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRwLnNldCg1MCk7XG5cdFx0XHRcdHJldHVybiBhcHBEYXRhLlBsdWdpbnNMaW5rID8gamFzc2woYXBwRGF0YS5QbHVnaW5zTGluaykgOiB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRwLnNldCg3MCk7XG5cdFx0XHRcdHJ1bk1haW5Cb290KGZhbHNlKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGUpID0+IHtcblx0XHRcdFx0cnVuTWFpbkJvb3QodHJ1ZSk7XG5cdFx0XHRcdHRocm93IGU7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKCkgPT4gamFzc2woYXBwRGF0YS5TdGF0aWNFZGl0b3JKc0xpbmspKVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRpZiAod2luZG93LkNLRURJVE9SICYmIHdpbmRvdy5fX2luaXRFZGl0b3IpIHtcblx0XHRcdFx0XHR3aW5kb3cuX19pbml0RWRpdG9yKCk7XG5cdFx0XHRcdFx0d2luZG93Ll9faW5pdEVkaXRvciA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHJ1bk1haW5Cb290KHRydWUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHttaXhlZH0gZGF0YVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbndpbmRvdy5fX2luaXRBcHBEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuXHRSTF9BUFBfREFUQV9TVE9SQUdFID0gZGF0YTtcblxuXHR3aW5kb3cuX19ybGFoX3NldCgpO1xuXG5cdGlmIChSTF9BUFBfREFUQV9TVE9SQUdFKSB7XG5cdFx0aWYgKFJMX0FQUF9EQVRBX1NUT1JBR0UuTmV3VGhlbWVMaW5rKSB7XG5cdFx0XHQod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtdGhlbWUtbGluaycpIHx8IHt9KS5ocmVmID0gUkxfQVBQX0RBVEFfU1RPUkFHRS5OZXdUaGVtZUxpbms7XG5cdFx0fVxuXG5cdFx0aWYgKFJMX0FQUF9EQVRBX1NUT1JBR0UuSW5jbHVkZUNzcykge1xuXHRcdFx0aW5jbHVkZVN0eWxlKFJMX0FQUF9EQVRBX1NUT1JBR0UuSW5jbHVkZUNzcyk7XG5cdFx0fVxuXG5cdFx0c2hvd0Rlc2NyaXB0aW9uQW5kTG9hZGluZyhSTF9BUFBfREFUQV9TVE9SQUdFLkxvYWRpbmdEZXNjcmlwdGlvbkVzYyB8fCAnJyk7XG5cdH1cblxuXHRydW5BcHAoKTtcbn07XG5cbi8qKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbndpbmRvdy5fX3J1bkJvb3QgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF3aW5kb3cubmF2aWdhdG9yIHx8ICF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcblx0XHR3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24ucmVwbGFjZSgnLi8/L05vQ29va2llJyk7XG5cdH1cblxuXHRjb25zdCByb290ID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0aWYgKCdub25lJyAhPT0gZ2V0Q29tcHV0ZWRTdHlsZSgncmwtY2hlY2snLCAnZGlzcGxheScpKSB7XG5cdFx0cm9vdC5jbGFzc05hbWUgKz0gJyBuby1jc3MnO1xuXHR9XG5cblx0aWYgKHVzZUpzTmV4dEJ1bmRsZSkge1xuXHRcdHJvb3QuY2xhc3NOYW1lICs9ICcganMtbmV4dCc7XG5cdH1cblxuXHRpZiAoaW5jbHVkZUxheW91dCgpKSB7XG5cdFx0aW5jbHVkZUFwcFNjcihnZXRSYWlubG9vcEJvb3REYXRhKCkpO1xuXHR9XG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQEJvb3QuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0BCb290LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQEJvb3QuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jcmwtY29udGVudHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaW50ZXJuYWwtaGlkZGRlbntcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmh0bWwubm8tY3NzLCBodG1sLm5vLWNzcyBib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250LWZhbWlseTogQXJpYWwsIFZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG5odG1sLm5vLWNzcyAjcmwtY29udGVudCwgaHRtbC5uby1jc3MgI3JsLWxvYWRpbmd7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaHRtbC5uby1jc3MgI3JsLWxvYWRpbmctZXJyb3Ige1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDEzMCU7XFxuXFx0dG9wOiA1MCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA2NXB4O1xcblxcdG1hcmdpbjogMDtcXG5cXHRtYXJnaW4tdG9wOiAtNjBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Y29sb3I6ICMzMzM7XFxufVxcblxcbmh0bWwubm8tY3NzIC5wcm9ncmVzc2pzLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaHRtbC5uby1jc3MgLnRobS1ib2R5IHtcXG5cXHRjb2xvcjogIzMzMztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbmh0bWwubm8tY3NzIC50aG0tbG9hZGluZyB7XFxuXFx0Y29sb3I6ICMzMzMgIWltcG9ydGFudDtcXG5cXHR0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5odG1sLm5vLWNzcyAudGhtLWxvYWRpbmcgLmUtc3Bpbm5lciAuZS1ib3VuY2Uge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuaHRtbC5uby1jc3MgLnRobS1sb2dpbi1kZXNjIC5kZXNjIHtcXG5cXHRjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xcblxcdHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwicmwtYmdcXFwiIGNsYXNzPVxcXCJ0aG0tYm9keVxcXCI+PC9kaXY+XFxuPGRpdiBpZD1cXFwicmwtbG9hZGluZ1xcXCIgY2xhc3M9XFxcInRobS1sb2FkaW5nXFxcIiBzdHlsZT1cXFwib3BhY2l0eTowXFxcIj5cXG5cXHQ8ZGl2IGlkPVxcXCJybC1sb2FkaW5nLWRlc2NcXFwiPjwvZGl2PlxcblxcdDxkaXYgY2xhc3M9XFxcImUtc3Bpbm5lclxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZS1ib3VuY2UgYm91bmNlMVxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZS1ib3VuY2UgYm91bmNlMlxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwiZS1ib3VuY2UgYm91bmNlM1xcXCI+PC9kaXY+XFxuXFx0PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBpZD1cXFwicmwtbG9hZGluZy1lcnJvclxcXCIgY2xhc3M9XFxcInRobS1sb2FkaW5nXFxcIj5cXG5cXHRBbiBlcnJvciBvY2N1cnJlZC4gPGJyIC8+IFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCB0cnkgYWdhaW4uXFxuXFx0PGRpdiBpZD1cXFwicmwtbG9hZGluZy1lcnJvci1hZGRpdGlvbmFsXFxcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGlkPVxcXCJybC1jb250ZW50XFxcIj5cXG5cXHQ8ZGl2IGlkPVxcXCJybC1wb3B1cHNcXFwiPjwvZGl2PlxcblxcdDxkaXYgaWQ9XFxcInJsLWNlbnRlclxcXCI+XFxuXFx0XFx0PGRpdiBpZD1cXFwicmwtdG9wXFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGlkPVxcXCJybC1sZWZ0XFxcIj48L2Rpdj5cXG5cXHRcXHQ8ZGl2IGlkPVxcXCJybC1yaWdodFxcXCI+PC9kaXY+XFxuXFx0XFx0PGRpdiBpZD1cXFwicmwtYm90dG9tXFxcIj48L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGlkPVxcXCJybC10ZW1wbGF0ZXNcXFwiPjwvZGl2PlxcbjxkaXYgaWQ9XFxcInJsLWhpZGRlblxcXCI+PC9kaXY+XCIiXSwic291cmNlUm9vdCI6IiJ9