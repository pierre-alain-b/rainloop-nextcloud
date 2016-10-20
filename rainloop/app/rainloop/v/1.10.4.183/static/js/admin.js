/* RainLoop Webmail (c) RainLoop Team | Licensed under AGPL v3 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "rainloop/v/0.0.0/static/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 276);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* exports used: default */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
/***/ function(module, exports) {

"use strict";
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ },
/* 1 */
/* exports provided: isArray, isFunc, isUnd, isNull, has, bind, noop, noopTrue, noopFalse, jassl, trim, inArray, isObject, silentTryCatch, isNormal, isPosNumeric, pInt, pString, pBool, boolToAjax, isNonEmptyArray, encodeURIComponent, decodeURIComponent, decodeURI, encodeURI, simpleQueryParser, fakeMd5, encodeHtml, splitPlainText, timeOutActionSecond, timeOutAction, inFocus, removeInFocus, removeSelection, replySubjectAdd, roundNumber, friendlySize, log, delegateRun, killCtrlACtrlS, createCommandLegacy, convertThemeName, quoteName, microtime, timestamp, convertLangName, draggablePlace, defautOptionsAfterRender, clearBqSwitcher, previewMessage, settingsSaveHelperFunction, settingsSaveHelperSimpleFunction, settingsSaveHelperSubscribeFunction, findEmailAndLinks, htmlToPlain, plainToHtml, folderListOptionsBuilder, selectElement, detectDropdownVisibility, triggerAutocompleteInputChange, getConfigurationFromScriptTag, disposeOne, disposeObject, delegateRunOnDestroy, appendStyles, changeTheme, computedPagenatorHelper, getFileExtension, mimeContentType, resizeAndCrop, mailToHelper, domReady, windowResize, windowResizeCallback */
/* all exports used */
/*!*****************************!*\
  !*** ./dev/Common/Utils.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ 55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Autolinker__ = __webpack_require__(/*! Autolinker */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Autolinker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Autolinker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Mime__ = __webpack_require__(/*! Common/Mime */ 103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Jassl__ = __webpack_require__(/*! Common/Jassl */ 77);
/* harmony export (binding) */ __webpack_require__.d(exports, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isFunc", function() { return isFunc; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isUnd", function() { return isUnd; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(exports, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(exports, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(exports, "noopTrue", function() { return noopTrue; });
/* harmony export (binding) */ __webpack_require__.d(exports, "noopFalse", function() { return noopFalse; });
/* harmony export (binding) */ __webpack_require__.d(exports, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(exports, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(exports, "isObject", function() { return isObject; });
/* harmony export (immutable) */ exports["silentTryCatch"] = silentTryCatch;
/* harmony export (immutable) */ exports["isNormal"] = isNormal;
/* harmony export (immutable) */ exports["isPosNumeric"] = isPosNumeric;
/* harmony export (immutable) */ exports["pInt"] = pInt;
/* harmony export (immutable) */ exports["pString"] = pString;
/* harmony export (immutable) */ exports["pBool"] = pBool;
/* harmony export (immutable) */ exports["boolToAjax"] = boolToAjax;
/* harmony export (immutable) */ exports["isNonEmptyArray"] = isNonEmptyArray;
/* harmony export (immutable) */ exports["encodeURIComponent"] = encodeURIComponent;
/* harmony export (immutable) */ exports["decodeURIComponent"] = decodeURIComponent;
/* harmony export (immutable) */ exports["decodeURI"] = decodeURI;
/* harmony export (immutable) */ exports["encodeURI"] = encodeURI;
/* harmony export (immutable) */ exports["simpleQueryParser"] = simpleQueryParser;
/* harmony export (immutable) */ exports["fakeMd5"] = fakeMd5;
/* harmony export (immutable) */ exports["encodeHtml"] = encodeHtml;
/* harmony export (immutable) */ exports["splitPlainText"] = splitPlainText;
/* harmony export (binding) */ __webpack_require__.d(exports, "timeOutActionSecond", function() { return timeOutActionSecond; });
/* harmony export (binding) */ __webpack_require__.d(exports, "timeOutAction", function() { return timeOutAction; });
/* harmony export (immutable) */ exports["inFocus"] = inFocus;
/* harmony export (immutable) */ exports["removeInFocus"] = removeInFocus;
/* harmony export (immutable) */ exports["removeSelection"] = removeSelection;
/* harmony export (immutable) */ exports["replySubjectAdd"] = replySubjectAdd;
/* harmony export (immutable) */ exports["roundNumber"] = roundNumber;
/* harmony export (immutable) */ exports["friendlySize"] = friendlySize;
/* harmony export (immutable) */ exports["log"] = log;
/* harmony export (immutable) */ exports["delegateRun"] = delegateRun;
/* harmony export (immutable) */ exports["killCtrlACtrlS"] = killCtrlACtrlS;
/* harmony export (immutable) */ exports["createCommandLegacy"] = createCommandLegacy;
/* harmony export (binding) */ __webpack_require__.d(exports, "convertThemeName", function() { return convertThemeName; });
/* harmony export (immutable) */ exports["quoteName"] = quoteName;
/* harmony export (immutable) */ exports["microtime"] = microtime;
/* harmony export (immutable) */ exports["timestamp"] = timestamp;
/* harmony export (immutable) */ exports["convertLangName"] = convertLangName;
/* harmony export (immutable) */ exports["draggablePlace"] = draggablePlace;
/* harmony export (immutable) */ exports["defautOptionsAfterRender"] = defautOptionsAfterRender;
/* harmony export (immutable) */ exports["clearBqSwitcher"] = clearBqSwitcher;
/* harmony export (immutable) */ exports["previewMessage"] = previewMessage;
/* harmony export (immutable) */ exports["settingsSaveHelperFunction"] = settingsSaveHelperFunction;
/* harmony export (immutable) */ exports["settingsSaveHelperSimpleFunction"] = settingsSaveHelperSimpleFunction;
/* harmony export (immutable) */ exports["settingsSaveHelperSubscribeFunction"] = settingsSaveHelperSubscribeFunction;
/* harmony export (immutable) */ exports["findEmailAndLinks"] = findEmailAndLinks;
/* harmony export (immutable) */ exports["htmlToPlain"] = htmlToPlain;
/* harmony export (immutable) */ exports["plainToHtml"] = plainToHtml;
/* harmony export (immutable) */ exports["folderListOptionsBuilder"] = folderListOptionsBuilder;
/* harmony export (immutable) */ exports["selectElement"] = selectElement;
/* harmony export (binding) */ __webpack_require__.d(exports, "detectDropdownVisibility", function() { return detectDropdownVisibility; });
/* harmony export (immutable) */ exports["triggerAutocompleteInputChange"] = triggerAutocompleteInputChange;
/* harmony export (immutable) */ exports["getConfigurationFromScriptTag"] = getConfigurationFromScriptTag;
/* harmony export (immutable) */ exports["disposeOne"] = disposeOne;
/* harmony export (immutable) */ exports["disposeObject"] = disposeObject;
/* harmony export (immutable) */ exports["delegateRunOnDestroy"] = delegateRunOnDestroy;
/* harmony export (immutable) */ exports["appendStyles"] = appendStyles;
/* harmony export (immutable) */ exports["changeTheme"] = changeTheme;
/* harmony export (immutable) */ exports["computedPagenatorHelper"] = computedPagenatorHelper;
/* harmony export (immutable) */ exports["getFileExtension"] = getFileExtension;
/* harmony export (immutable) */ exports["mimeContentType"] = mimeContentType;
/* harmony export (immutable) */ exports["resizeAndCrop"] = resizeAndCrop;
/* harmony export (immutable) */ exports["mailToHelper"] = mailToHelper;
/* harmony export (immutable) */ exports["domReady"] = domReady;
/* harmony export (binding) */ __webpack_require__.d(exports, "windowResize", function() { return windowResize; });
/* harmony export (immutable) */ exports["windowResizeCallback"] = windowResizeCallback;













var trim = __WEBPACK_IMPORTED_MODULE_2_____default.a.trim;
var inArray = __WEBPACK_IMPORTED_MODULE_2_____default.a.inArray;
var isArray = __WEBPACK_IMPORTED_MODULE_3_____default.a.isArray;
var isObject = __WEBPACK_IMPORTED_MODULE_3_____default.a.isObject;
var isFunc = __WEBPACK_IMPORTED_MODULE_3_____default.a.isFunction;
var isUnd = __WEBPACK_IMPORTED_MODULE_3_____default.a.isUndefined;
var isNull = __WEBPACK_IMPORTED_MODULE_3_____default.a.isNull;
var has = __WEBPACK_IMPORTED_MODULE_3_____default.a.has;
var bind = __WEBPACK_IMPORTED_MODULE_3_____default.a.bind;
var noop = function noop() {}; // eslint-disable-line no-empty-function
var noopTrue = function noopTrue() {
	return true;
};
var noopFalse = function noopFalse() {
	return false;
};

/* harmony reexport (binding) */ __webpack_require__.d(exports, "jassl", function() { return __WEBPACK_IMPORTED_MODULE_9_Common_Jassl__["a"]; });


/**
 * @param {Function} func
 */
function silentTryCatch(func) {
	try {
		func();
	} catch (e) {} // eslint-disable-line no-empty
}

/**
 * @param {*} value
 * @returns {boolean}
 */
function isNormal(value) {
	return !isUnd(value) && !isNull(value);
}

/**
 * @param {(string|number)} value
 * @param {boolean=} includeZero = true
 * @returns {boolean}
 */
function isPosNumeric(value) {
	var includeZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	return !isNormal(value) ? false : includeZero ? /^[0-9]*$/.test(value.toString()) : /^[1-9]+[0-9]*$/.test(value.toString());
}

/**
 * @param {*} value
 * @param {number=} defaultValur = 0
 * @returns {number}
 */
function pInt(value) {
	var defaultValur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	var result = isNormal(value) && '' !== value ? __WEBPACK_IMPORTED_MODULE_1_window___default.a.parseInt(value, 10) : defaultValur;
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.isNaN(result) ? defaultValur : result;
}

/**
 * @param {*} value
 * @returns {string}
 */
function pString(value) {
	return isNormal(value) ? '' + value : '';
}

/**
 * @param {*} value
 * @returns {boolean}
 */
function pBool(value) {
	return !!value;
}

/**
 * @param {*} value
 * @returns {string}
 */
function boolToAjax(value) {
	return value ? '1' : '0';
}

/**
 * @param {*} values
 * @returns {boolean}
 */
function isNonEmptyArray(values) {
	return isArray(values) && 0 < values.length;
}

/**
 * @param {string} component
 * @returns {string}
 */
function encodeURIComponent(component) {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.encodeURIComponent(component);
}

/**
 * @param {string} component
 * @returns {string}
 */
function decodeURIComponent(component) {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.decodeURIComponent(component);
}

/**
 * @param {string} url
 * @returns {string}
 */
function decodeURI(url) {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.decodeURI(url);
}

/**
 * @param {string} url
 * @returns {string}
 */
function encodeURI(url) {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.encodeURI(url);
}

/**
 * @param {string} queryString
 * @returns {Object}
 */
function simpleQueryParser(queryString) {
	var index = 0,
	    len = 0,
	    temp = null;

	var queries = queryString.split('&'),
	    params = {};

	for (len = queries.length; index < len; index++) {
		temp = queries[index].split('=');
		params[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
	}

	return params;
}

/**
 * @param {number=} len = 32
 * @returns {string}
 */
function fakeMd5() {
	var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;

	var line = '0123456789abcdefghijklmnopqrstuvwxyz',
	    lineLen = line.length;

	len = pInt(len);

	var result = '';
	while (result.length < len) {
		result += line.substr(__WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.round(__WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.random() * lineLen), 1);
	}

	return result;
}

/**
 * @param {string} text
 * @returns {string}
 */
function encodeHtml(text) {
	return isNormal(text) ? __WEBPACK_IMPORTED_MODULE_3_____default.a.escape(text.toString()) : '';
}

/**
 * @param {string} text
 * @param {number=} len = 100
 * @returns {string}
 */
function splitPlainText(text) {
	var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

	var prefix = '',
	    subText = '',
	    result = text,
	    spacePos = 0,
	    newLinePos = 0;

	while (result.length > len) {
		subText = result.substring(0, len);
		spacePos = subText.lastIndexOf(' ');
		newLinePos = subText.lastIndexOf('\n');

		if (-1 !== newLinePos) {
			spacePos = newLinePos;
		}

		if (-1 === spacePos) {
			spacePos = len;
		}

		prefix += subText.substring(0, spacePos) + '\n';
		result = result.substring(spacePos + 1);
	}

	return prefix + result;
}

var timeOutAction = function () {
	var timeOuts = {};
	return function (action, fFunction, timeOut) {
		timeOuts[action] = isUnd(timeOuts[action]) ? 0 : timeOuts[action];
		__WEBPACK_IMPORTED_MODULE_1_window___default.a.clearTimeout(timeOuts[action]);
		timeOuts[action] = __WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(fFunction, timeOut);
	};
}();

var timeOutActionSecond = function () {
	var timeOuts = {};
	return function (action, fFunction, timeOut) {
		if (!timeOuts[action]) {
			timeOuts[action] = __WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(function () {
				fFunction();
				timeOuts[action] = 0;
			}, timeOut);
		}
	};
}();



/**
 * @returns {boolean}
 */
function inFocus() {
	try {
		if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement) {
			if (isUnd(__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.__inFocusCache)) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.__inFocusCache = __WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement).is('input,textarea,iframe,.cke_editable');
			}

			return !!__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.__inFocusCache;
		}
	} catch (e) {} // eslint-disable-line no-empty

	return false;
}

/**
 * @param {boolean} force
 * @returns {void}
 */
function removeInFocus(force) {
	if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.document && __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement && __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.blur) {
		try {
			var activeEl = __WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement);
			if (activeEl && activeEl.is('input,textarea')) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.blur();
			} else if (force) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.activeElement.blur();
			}
		} catch (e) {} // eslint-disable-line no-empty
	}
}

/**
 * @returns {void}
 */
function removeSelection() {
	try {
		if (__WEBPACK_IMPORTED_MODULE_1_window___default.a && __WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection) {
			var sel = __WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection();
			if (sel && sel.removeAllRanges) {
				sel.removeAllRanges();
			}
		} else if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.document && __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection && __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection.empty) {
			__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection.empty();
		}
	} catch (e) {} // eslint-disable-line no-empty
}

/**
 * @param {string} prefix
 * @param {string} subject
 * @returns {string}
 */
function replySubjectAdd(prefix, subject) {
	prefix = trim(prefix.toUpperCase());
	subject = trim(subject.replace(/[\s]+/g, ' '));

	var drop = false,
	    re = 'RE' === prefix,
	    fwd = 'FWD' === prefix;

	var parts = [],
	    prefixIsRe = !fwd;

	if ('' !== subject) {
		__WEBPACK_IMPORTED_MODULE_3_____default.a.each(subject.split(':'), function (part) {
			var trimmedPart = trim(part);
			if (!drop && (/^(RE|FWD)$/i.test(trimmedPart) || /^(RE|FWD)[\[\(][\d]+[\]\)]$/i.test(trimmedPart))) {
				if (!re) {
					re = !!/^RE/i.test(trimmedPart);
				}

				if (!fwd) {
					fwd = !!/^FWD/i.test(trimmedPart);
				}
			} else {
				parts.push(part);
				drop = true;
			}
		});
	}

	if (prefixIsRe) {
		re = false;
	} else {
		fwd = false;
	}

	return trim((prefixIsRe ? 'Re: ' : 'Fwd: ') + (re ? 'Re: ' : '') + (fwd ? 'Fwd: ' : '') + trim(parts.join(':')));
}

/**
 * @param {number} num
 * @param {number} dec
 * @returns {number}
 */
function roundNumber(num, dec) {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.round(num * __WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.pow(10, dec)) / __WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.pow(10, dec);
}

/**
 * @param {(number|string)} sizeInBytes
 * @returns {string}
 */
function friendlySize(sizeInBytes) {
	sizeInBytes = pInt(sizeInBytes);

	switch (true) {
		case 1073741824 <= sizeInBytes:
			return roundNumber(sizeInBytes / 1073741824, 1) + 'GB';
		case 1048576 <= sizeInBytes:
			return roundNumber(sizeInBytes / 1048576, 1) + 'MB';
		case 1024 <= sizeInBytes:
			return roundNumber(sizeInBytes / 1024, 0) + 'KB';
		// no default
	}

	return sizeInBytes + 'B';
}

/**
 * @param {string} desc
 */
function log(desc) {
	if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.console && __WEBPACK_IMPORTED_MODULE_1_window___default.a.console.log) {
		__WEBPACK_IMPORTED_MODULE_1_window___default.a.console.log(desc);
	}
}

/**
 * @param {?} object
 * @param {string} methodName
 * @param {Array=} params
 * @param {number=} delay = 0
 */
function delegateRun(object, methodName, params) {
	var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	if (object && object[methodName]) {
		delay = pInt(delay);
		params = isArray(params) ? params : [];

		if (0 >= delay) {
			object[methodName].apply(object, params);
		} else {
			__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(function () {
				object[methodName].apply(object, params);
			}, delay);
		}
	}
}

/**
 * @param {?} event
 */
function killCtrlACtrlS(event) {
	event = event || __WEBPACK_IMPORTED_MODULE_1_window___default.a.event;
	if (event && event.ctrlKey && !event.shiftKey && !event.altKey) {
		var key = event.keyCode || event.which;
		if (key === __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["EventKeyCode"].S) {
			event.preventDefault();
			return;
		} else if (key === __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["EventKeyCode"].A) {
			var sender = event.target || event.srcElement;
			if (sender && ('true' === '' + sender.contentEditable || sender.tagName && sender.tagName.match(/INPUT|TEXTAREA/i))) {
				return;
			}

			if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection().removeAllRanges();
			} else if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection && __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection.clear) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection.clear();
			}

			event.preventDefault();
		}
	}
}

/**
 * @param {(Object|null|undefined)} context
 * @param {Function} fExecute
 * @param {(Function|boolean|null)=} fCanExecute = true
 * @returns {Function}
 */
function createCommandLegacy(context, fExecute) {
	var fCanExecute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	var fResult = null;
	var fNonEmpty = function fNonEmpty() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		if (fResult && fResult.canExecute && fResult.canExecute()) {
			fExecute.apply(context, args);
		}
		return false;
	};

	fResult = fExecute ? fNonEmpty : noop;
	fResult.enabled = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(true);
	fResult.isCommand = true;

	if (isFunc(fCanExecute)) {
		fResult.canExecute = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed(function () {
			return fResult && fResult.enabled() && fCanExecute.call(context);
		});
	} else {
		fResult.canExecute = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed(function () {
			return fResult && fResult.enabled() && !!fCanExecute;
		});
	}

	return fResult;
}

/**
 * @param {string} theme
 * @returns {string}
 */
var convertThemeName = __WEBPACK_IMPORTED_MODULE_3_____default.a.memoize(function (theme) {

	if ('@custom' === theme.substr(-7)) {
		theme = trim(theme.substring(0, theme.length - 7));
	}

	return trim(theme.replace(/[^a-zA-Z0-9]+/g, ' ').replace(/([A-Z])/g, ' $1').replace(/[\s]+/g, ' '));
});

/**
 * @param {string} name
 * @returns {string}
 */
function quoteName(name) {
	return name.replace(/["]/g, '\\"');
}

/**
 * @returns {number}
 */
function microtime() {
	return new __WEBPACK_IMPORTED_MODULE_1_window___default.a.Date().getTime();
}

/**
 * @returns {number}
 */
function timestamp() {
	return __WEBPACK_IMPORTED_MODULE_1_window___default.a.Math.round(microtime() / 1000);
}

/**
 *
 * @param {string} language
 * @param {boolean=} isEng = false
 * @returns {string}
 */
function convertLangName(language) {
	var isEng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	return __webpack_require__(/*! Common/Translator */ 8).i18n('LANGS_NAMES' + (true === isEng ? '_EN' : '') + '/LANG_' + language.toUpperCase().replace(/[^a-zA-Z0-9]+/g, '_'), null, language);
}

/**
 * @returns {object}
 */
function draggablePlace() {
	return __WEBPACK_IMPORTED_MODULE_2_____default()('<div class="draggablePlace">' + '<span class="text"></span>&nbsp;' + '<i class="icon-copy icon-white visible-on-ctrl"></i>' + '<i class="icon-mail icon-white hidden-on-ctrl"></i>' + '</div>').appendTo('#rl-hidden');
}

/**
 * @param {object} domOption
 * @param {object} item
 * @returns {void}
 */
function defautOptionsAfterRender(domItem, item) {
	if (item && !isUnd(item.disabled) && domItem) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(domItem).toggleClass('disabled', item.disabled).prop('disabled', item.disabled);
	}
}

/**
 * @param {string} title
 * @param {Object} body
 * @param {boolean} isHtml
 * @param {boolean} print
 */
function clearBqSwitcher(body) {
	body.find('blockquote.rl-bq-switcher').removeClass('rl-bq-switcher hidden-bq');
	body.find('.rlBlockquoteSwitcher').off('.rlBlockquoteSwitcher').remove();
	body.find('[data-html-editor-font-wrapper]').removeAttr('data-html-editor-font-wrapper');
}

/**
 * @param {object} messageData
 * @param {Object} body
 * @param {boolean} isHtml
 * @param {boolean} print
 * @returns {void}
 */
function previewMessage(_ref, body, isHtml, print) {
	var title = _ref.title;
	var subject = _ref.subject;
	var date = _ref.date;
	var fromCreds = _ref.fromCreds;
	var toCreds = _ref.toCreds;
	var toLabel = _ref.toLabel;

	var win = __WEBPACK_IMPORTED_MODULE_1_window___default.a.open(''),
	    doc = win.document,
	    bodyClone = body.clone(),
	    bodyClass = isHtml ? 'html' : 'plain';

	clearBqSwitcher(bodyClone);

	var html = bodyClone ? bodyClone.html() : '';

	doc.write(__webpack_require__(/*! Html/PreviewMessage.html */ 171).replace('{{title}}', encodeHtml(title)).replace('{{subject}}', encodeHtml(subject)).replace('{{date}}', encodeHtml(date)).replace('{{fromCreds}}', encodeHtml(fromCreds)).replace('{{toCreds}}', encodeHtml(toCreds)).replace('{{toLabel}}', encodeHtml(toLabel)).replace('{{bodyClass}}', bodyClass).replace('{{html}}', html));

	doc.close();

	if (print) {
		__WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(function () {
			return win.print();
		}, 100);
	}
}

/**
 * @param {Function} fCallback
 * @param {?} koTrigger
 * @param {?} context = null
 * @param {number=} timer = 1000
 * @returns {Function}
 */
function settingsSaveHelperFunction(fCallback, koTrigger) {
	var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	var timer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;

	timer = pInt(timer);
	return function (type, data, cached, requestAction, requestParameters) {
		koTrigger.call(context, data && data.Result ? __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].TrueResult : __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].FalseResult);
		if (fCallback) {
			fCallback.call(context, type, data, cached, requestAction, requestParameters);
		}
		__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(function () {
			koTrigger.call(context, __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].Idle);
		}, timer);
	};
}

/**
 * @param {object} koTrigger
 * @param {mixed} context
 * @returns {mixed}
 */
function settingsSaveHelperSimpleFunction(koTrigger, context) {
	return settingsSaveHelperFunction(null, koTrigger, context, 1000);
}

/**
 * @param {object} remote
 * @param {string} settingName
 * @param {string} type
 * @param {function} fTriggerFunction
 * @returns {function}
 */
function settingsSaveHelperSubscribeFunction(remote, settingName, type, fTriggerFunction) {
	return function (value) {

		if (remote) {
			switch (type) {
				case 'bool':
				case 'boolean':
					value = value ? '1' : '0';
					break;
				case 'int':
				case 'integer':
				case 'number':
					value = pInt(value);
					break;
				case 'trim':
					value = trim(value);
					break;
				default:
					value = pString(value);
					break;
			}

			var data = {};
			data[settingName] = value;

			if (remote.saveAdminConfig) {
				remote.saveAdminConfig(fTriggerFunction || null, data);
			} else if (remote.saveSettings) {
				remote.saveSettings(fTriggerFunction || null, data);
			}
		}
	};
}

/**
 * @param {string} html
 * @returns {string}
 */
function findEmailAndLinks(html) {
	//	return html;
	return __WEBPACK_IMPORTED_MODULE_5_Autolinker___default.a ? __WEBPACK_IMPORTED_MODULE_5_Autolinker___default.a.link(html, {
		newWindow: true,
		stripPrefix: false,
		urls: true,
		email: true,
		mention: false,
		phone: false,
		hashtag: false,
		replaceFn: function replaceFn(match) {
			return !(match && 'url' === match.getType() && match.matchedText && 0 !== match.matchedText.indexOf('http'));
		}
	}) : html;
}

/**
 * @param {string} html
 * @returns {string}
 */
function htmlToPlain(html) {
	var pos = 0,
	    limit = 0,
	    iP1 = 0,
	    iP2 = 0,
	    iP3 = 0,
	    text = '';

	var convertBlockquote = function convertBlockquote(blockquoteText) {
		blockquoteText = '> ' + trim(blockquoteText).replace(/\n/gm, '\n> ');
		return blockquoteText.replace(/(^|\n)([> ]+)/gm, function () {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return args && 2 < args.length ? args[1] + trim(args[2].replace(/[\s]/g, '')) + ' ' : '';
		});
	},
	    convertDivs = function convertDivs() {
		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			args[_key3] = arguments[_key3];
		}

		if (args && 1 < args.length) {
			var divText = trim(args[1]);
			if (0 < divText.length) {
				divText = divText.replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gmi, convertDivs);
				divText = '\n' + trim(divText) + '\n';
			}

			return divText;
		}

		return '';
	},
	    convertPre = function convertPre() {
		for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
			args[_key4] = arguments[_key4];
		}

		return args && 1 < args.length ? args[1].toString().replace(/[\n]/gm, '<br />').replace(/[\r]/gm, '') : '';
	},
	    fixAttibuteValue = function fixAttibuteValue() {
		for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			args[_key5] = arguments[_key5];
		}

		return args && 1 < args.length ? '' + args[1] + __WEBPACK_IMPORTED_MODULE_3_____default.a.escape(args[2]) : '';
	},
	    convertLinks = function convertLinks() {
		for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
			args[_key6] = arguments[_key6];
		}

		return args && 1 < args.length ? trim(args[1]) : '';
	};

	text = html.replace(/<p[^>]*><\/p>/gi, '').replace(/<pre[^>]*>([\s\S\r\n\t]*)<\/pre>/gmi, convertPre).replace(/[\s]+/gm, ' ').replace(/((?:href|data)\s?=\s?)("[^"]+?"|'[^']+?')/gmi, fixAttibuteValue).replace(/<br[^>]*>/gmi, '\n').replace(/<\/h[\d]>/gi, '\n').replace(/<\/p>/gi, '\n\n').replace(/<ul[^>]*>/gmi, '\n').replace(/<\/ul>/gi, '\n').replace(/<li[^>]*>/gmi, ' * ').replace(/<\/li>/gi, '\n').replace(/<\/td>/gi, '\n').replace(/<\/tr>/gi, '\n').replace(/<hr[^>]*>/gmi, '\n_______________________________\n\n').replace(/<div[^>]*>([\s\S\r\n]*)<\/div>/gmi, convertDivs).replace(/<blockquote[^>]*>/gmi, '\n__bq__start__\n').replace(/<\/blockquote>/gmi, '\n__bq__end__\n').replace(/<a [^>]*>([\s\S\r\n]*?)<\/a>/gmi, convertLinks).replace(/<\/div>/gi, '\n').replace(/&nbsp;/gi, ' ').replace(/&quot;/gi, '"').replace(/<[^>]*>/gm, '');

	text = __WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$div"].html(text).text();

	text = text.replace(/\n[ \t]+/gm, '\n').replace(/[\n]{3,}/gm, '\n\n').replace(/&gt;/gi, '>').replace(/&lt;/gi, '<').replace(/&amp;/gi, '&');

	text = splitPlainText(trim(text));

	pos = 0;
	limit = 800;

	while (0 < limit) {
		limit -= 1;
		iP1 = text.indexOf('__bq__start__', pos);
		if (-1 < iP1) {
			iP2 = text.indexOf('__bq__start__', iP1 + 5);
			iP3 = text.indexOf('__bq__end__', iP1 + 5);

			if ((-1 === iP2 || iP3 < iP2) && iP1 < iP3) {
				text = text.substring(0, iP1) + convertBlockquote(text.substring(iP1 + 13, iP3)) + text.substring(iP3 + 11);

				pos = 0;
			} else if (-1 < iP2 && iP2 < iP3) {
				pos = iP2 - 1;
			} else {
				pos = 0;
			}
		} else {
			break;
		}
	}

	text = text.replace(/__bq__start__/gm, '').replace(/__bq__end__/gm, '');

	return text;
}

/**
 * @param {string} plain
 * @param {boolean} findEmailAndLinksInText = false
 * @returns {string}
 */
function plainToHtml(plain) {
	var findEmailAndLinksInText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	plain = plain.toString().replace(/\r/g, '');
	plain = plain.replace(/^>[> ]>+/gm, function (_ref2) {
		var match = _ref2[0];
		return match ? match.replace(/[ ]+/g, '') : match;
	});

	var bIn = false,
	    bDo = true,
	    bStart = true,
	    aNextText = [],
	    sLine = '',
	    iIndex = 0,
	    aText = plain.split('\n');

	do {
		bDo = false;
		aNextText = [];
		for (iIndex = 0; iIndex < aText.length; iIndex++) {
			sLine = aText[iIndex];
			bStart = '>' === sLine.substr(0, 1);
			if (bStart && !bIn) {
				bDo = true;
				bIn = true;
				aNextText.push('~~~blockquote~~~');
				aNextText.push(sLine.substr(1));
			} else if (!bStart && bIn) {
				if ('' !== sLine) {
					bIn = false;
					aNextText.push('~~~/blockquote~~~');
					aNextText.push(sLine);
				} else {
					aNextText.push(sLine);
				}
			} else if (bStart && bIn) {
				aNextText.push(sLine.substr(1));
			} else {
				aNextText.push(sLine);
			}
		}

		if (bIn) {
			bIn = false;
			aNextText.push('~~~/blockquote~~~');
		}

		aText = aNextText;
	} while (bDo);

	plain = aText.join('\n');

	plain = plain
	//			.replace(/~~~\/blockquote~~~\n~~~blockquote~~~/g, '\n')
	.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/~~~blockquote~~~[\s]*/g, '<blockquote>').replace(/[\s]*~~~\/blockquote~~~/g, '</blockquote>').replace(/\n/g, '<br />');

	return findEmailAndLinksInText ? findEmailAndLinks(plain) : plain;
}

__WEBPACK_IMPORTED_MODULE_1_window___default.a['rainloop_Utils_htmlToPlain'] = htmlToPlain; // eslint-disable-line dot-notation
__WEBPACK_IMPORTED_MODULE_1_window___default.a['rainloop_Utils_plainToHtml'] = plainToHtml; // eslint-disable-line dot-notation

/**
 * @param {Array} aSystem
 * @param {Array} aList
 * @param {Array=} aDisabled
 * @param {Array=} aHeaderLines
 * @param {?number=} iUnDeep
 * @param {Function=} fDisableCallback
 * @param {Function=} fVisibleCallback
 * @param {Function=} fRenameCallback
 * @param {boolean=} bSystem
 * @param {boolean=} bBuildUnvisible
 * @returns {Array}
 */
function folderListOptionsBuilder(aSystem, aList, aDisabled, aHeaderLines, iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible) {
	var
	/**
  * @type {?FolderModel}
  */
	oItem = null,
	    bSep = false,
	    iIndex = 0,
	    iLen = 0,
	    aResult = [];

	var sDeepPrefix = '\xA0\xA0\xA0';

	bBuildUnvisible = isUnd(bBuildUnvisible) ? false : !!bBuildUnvisible;
	bSystem = !isNormal(bSystem) ? 0 < aSystem.length : bSystem;
	iUnDeep = !isNormal(iUnDeep) ? 0 : iUnDeep;
	fDisableCallback = isNormal(fDisableCallback) ? fDisableCallback : null;
	fVisibleCallback = isNormal(fVisibleCallback) ? fVisibleCallback : null;
	fRenameCallback = isNormal(fRenameCallback) ? fRenameCallback : null;

	if (!isArray(aDisabled)) {
		aDisabled = [];
	}

	if (!isArray(aHeaderLines)) {
		aHeaderLines = [];
	}

	for (iIndex = 0, iLen = aHeaderLines.length; iIndex < iLen; iIndex++) {
		aResult.push({
			id: aHeaderLines[iIndex][0],
			name: aHeaderLines[iIndex][1],
			system: false,
			seporator: false,
			disabled: false
		});
	}

	bSep = true;
	for (iIndex = 0, iLen = aSystem.length; iIndex < iLen; iIndex++) {
		oItem = aSystem[iIndex];
		if (fVisibleCallback ? fVisibleCallback(oItem) : true) {
			if (bSep && 0 < aResult.length) {
				aResult.push({
					id: '---',
					name: '---',
					system: false,
					seporator: true,
					disabled: true
				});
			}

			bSep = false;
			aResult.push({
				id: oItem.fullNameRaw,
				name: fRenameCallback ? fRenameCallback(oItem) : oItem.name(),
				system: true,
				seporator: false,
				disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback(oItem) : false)
			});
		}
	}

	bSep = true;
	for (iIndex = 0, iLen = aList.length; iIndex < iLen; iIndex++) {
		oItem = aList[iIndex];
		//			if (oItem.subScribed() || !oItem.existen || bBuildUnvisible)
		if ((oItem.subScribed() || !oItem.existen || bBuildUnvisible) && (oItem.selectable || oItem.hasSubScribedSubfolders())) {
			if (fVisibleCallback ? fVisibleCallback(oItem) : true) {
				if (__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["FolderType"].User === oItem.type() || !bSystem || oItem.hasSubScribedSubfolders()) {
					if (bSep && 0 < aResult.length) {
						aResult.push({
							id: '---',
							name: '---',
							system: false,
							seporator: true,
							disabled: true
						});
					}

					bSep = false;
					aResult.push({
						id: oItem.fullNameRaw,
						name: new __WEBPACK_IMPORTED_MODULE_1_window___default.a.Array(oItem.deep + 1 - iUnDeep).join(sDeepPrefix) + (fRenameCallback ? fRenameCallback(oItem) : oItem.name()),
						system: false,
						seporator: false,
						disabled: !oItem.selectable || -1 < inArray(oItem.fullNameRaw, aDisabled) || (fDisableCallback ? fDisableCallback(oItem) : false)
					});
				}
			}
		}

		if (oItem.subScribed() && 0 < oItem.subFolders().length) {
			aResult = aResult.concat(folderListOptionsBuilder([], oItem.subFolders(), aDisabled, [], iUnDeep, fDisableCallback, fVisibleCallback, fRenameCallback, bSystem, bBuildUnvisible));
		}
	}

	return aResult;
}

/**
 * @param {object} element
 * @returns {void}
 */
function selectElement(element) {
	var sel = null,
	    range = null;

	if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection) {
		sel = __WEBPACK_IMPORTED_MODULE_1_window___default.a.getSelection();
		sel.removeAllRanges();
		range = __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.createRange();
		range.selectNodeContents(element);
		sel.addRange(range);
	} else if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.selection) {
		range = __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.body.createTextRange();
		range.moveToElementText(element);
		range.select();
	}
}

var detectDropdownVisibility = __WEBPACK_IMPORTED_MODULE_3_____default.a.debounce(function () {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["dropdownVisibility"])(!!__WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["data"].aBootstrapDropdowns, function (item) {
		return item.hasClass('open');
	}));
}, 50);

/**
 * @param {boolean=} delay = false
 */
function triggerAutocompleteInputChange() {
	var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


	var fFunc = function fFunc() {
		__WEBPACK_IMPORTED_MODULE_2_____default()('.checkAutocomplete').trigger('change');
	};

	if (delay) {
		__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(fFunc, 100);
	} else {
		fFunc();
	}
}

var configurationScriptTagCache = {};

/**
 * @param {string} configuration
 * @returns {object}
 */
function getConfigurationFromScriptTag(configuration) {
	if (!configurationScriptTagCache[configuration]) {
		configurationScriptTagCache[configuration] = __WEBPACK_IMPORTED_MODULE_2_____default()('script[type="application/json"][data-configuration="' + configuration + '"]');
	}

	try {
		return JSON.parse(configurationScriptTagCache[configuration].text());
	} catch (e) {} // eslint-disable-line no-empty

	return {};
}

/**
 * @param {mixed} mPropOrValue
 * @param {mixed} value
 */
function disposeOne(propOrValue, value) {
	var disposable = value || propOrValue;
	if (disposable && 'function' === typeof disposable.dispose) {
		disposable.dispose();
	}
}

/**
 * @param {Object} object
 */
function disposeObject(object) {
	if (object) {
		if (isArray(object.disposables)) {
			__WEBPACK_IMPORTED_MODULE_3_____default.a.each(object.disposables, disposeOne);
		}

		__WEBPACK_IMPORTED_MODULE_4_ko___default.a.utils.objectForEach(object, disposeOne);
	}
}

/**
 * @param {Object|Array} objectOrObjects
 * @returns {void}
 */
function delegateRunOnDestroy(objectOrObjects) {
	if (objectOrObjects) {
		if (isArray(objectOrObjects)) {
			__WEBPACK_IMPORTED_MODULE_3_____default.a.each(objectOrObjects, function (item) {
				delegateRunOnDestroy(item);
			});
		} else if (objectOrObjects && objectOrObjects.onDestroy) {
			objectOrObjects.onDestroy();
		}
	}
}

/**
 * @param {object} $styleTag
 * @param {string} css
 * @returns {boolean}
 */
function appendStyles($styleTag, css) {
	if ($styleTag && $styleTag[0]) {
		if ($styleTag[0].styleSheet && !isUnd($styleTag[0].styleSheet.cssText)) {
			$styleTag[0].styleSheet.cssText = css;
		} else {
			$styleTag.text(css);
		}

		return true;
	}

	return false;
}

var __themeTimer = 0,
    __themeAjax = null;

/**
 * @param {string} value
 * @param {function=} themeTrigger = noop
 * @returns {void}
 */
function changeTheme(value) {
	var themeTrigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

	var themeLink = __WEBPACK_IMPORTED_MODULE_2_____default()('#app-theme-link'),
	    clearTimer = function clearTimer() {
		__themeTimer = __WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(function () {
			return themeTrigger(__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].Idle);
		}, 1000);
		__themeAjax = null;
	};

	var themeStyle = __WEBPACK_IMPORTED_MODULE_2_____default()('#app-theme-style'),
	    url = themeLink.attr('href');

	if (!url) {
		url = themeStyle.attr('data-href');
	}

	if (url) {
		url = url.toString().replace(/\/-\/[^\/]+\/\-\//, '/-/' + value + '/-/');
		url = url.replace(/\/Css\/[^\/]+\/User\//, '/Css/0/User/');
		url = url.replace(/\/Hash\/[^\/]+\//, '/Hash/-/');

		if ('Json/' !== url.substring(url.length - 5, url.length)) {
			url += 'Json/';
		}

		__WEBPACK_IMPORTED_MODULE_1_window___default.a.clearTimeout(__themeTimer);

		themeTrigger(__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].Animate);

		if (__themeAjax && __themeAjax.abort) {
			__themeAjax.abort();
		}

		__themeAjax = __WEBPACK_IMPORTED_MODULE_2_____default.a.ajax({
			url: url,
			dataType: 'json'
		}).then(function (data) {

			if (data && isArray(data) && 2 === data.length) {
				if (themeLink && themeLink[0] && (!themeStyle || !themeStyle[0])) {
					themeStyle = __WEBPACK_IMPORTED_MODULE_2_____default()('<style id="app-theme-style"></style>');
					themeLink.after(themeStyle);
					themeLink.remove();
				}

				if (themeStyle && themeStyle[0]) {
					if (appendStyles(themeStyle, data[1])) {
						themeStyle.attr('data-href', url).attr('data-theme', data[0]);
					}
				}

				themeTrigger(__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["SaveSettingsStep"].TrueResult);
			}
		}).then(clearTimer, clearTimer);
	}
}

/**
 * @returns {function}
 */
function computedPagenatorHelper(koCurrentPage, koPageCount) {
	return function () {

		var currentPage = koCurrentPage(),
		    pageCount = koPageCount(),
		    result = [],
		    fAdd = function fAdd(index) {
			var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			var customName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';


			var data = {
				current: index === currentPage,
				name: '' === customName ? index.toString() : customName.toString(),
				custom: '' !== customName,
				title: '' === customName ? '' : index.toString(),
				value: index.toString()
			};

			if (push) {
				result.push(data);
			} else {
				result.unshift(data);
			}
		};

		var prev = 0,
		    next = 0,
		    limit = 2;

		if (1 < pageCount || 0 < pageCount && pageCount < currentPage) {
			if (pageCount < currentPage) {
				fAdd(pageCount);
				prev = pageCount;
				next = pageCount;
			} else {
				if (3 >= currentPage || pageCount - 2 <= currentPage) {
					limit += 2;
				}

				fAdd(currentPage);
				prev = currentPage;
				next = currentPage;
			}

			while (0 < limit) {

				prev -= 1;
				next += 1;

				if (0 < prev) {
					fAdd(prev, false);
					limit -= 1;
				}

				if (pageCount >= next) {
					fAdd(next, true);
					limit -= 1;
				} else if (0 >= prev) {
					break;
				}
			}

			if (3 === prev) {
				fAdd(2, false);
			} else if (3 < prev) {
				fAdd(Math.round((prev - 1) / 2), false, '...');
			}

			if (pageCount - 2 === next) {
				fAdd(pageCount - 1, true);
			} else if (pageCount - 2 > next) {
				fAdd(Math.round((pageCount + next) / 2), true, '...');
			}

			// first and last
			if (1 < prev) {
				fAdd(1, false);
			}

			if (pageCount > next) {
				fAdd(pageCount, true);
			}
		}

		return result;
	};
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function getFileExtension(fileName) {
	fileName = trim(fileName).toLowerCase();

	var result = fileName.split('.').pop();
	return result === fileName ? '' : result;
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function mimeContentType(fileName) {
	var ext = '',
	    result = 'application/octet-stream';

	fileName = trim(fileName).toLowerCase();

	if ('winmail.dat' === fileName) {
		return 'application/ms-tnef';
	}

	ext = getFileExtension(fileName);
	if (ext && 0 < ext.length && !isUnd(__WEBPACK_IMPORTED_MODULE_8_Common_Mime__["a" /* Mime */][ext])) {
		result = __WEBPACK_IMPORTED_MODULE_8_Common_Mime__["a" /* Mime */][ext];
	}

	return result;
}

/**
 * @param {string} url
 * @param {number} value
 * @param {Function} fCallback
 */
function resizeAndCrop(url, value, fCallback) {
	var img = new __WEBPACK_IMPORTED_MODULE_1_window___default.a.Image();
	img.onload = function () {

		var diff = [0, 0];

		var canvas = __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.createElement('canvas'),
		    ctx = canvas.getContext('2d');

		canvas.width = value;
		canvas.height = value;

		if (this.width > this.height) {
			diff = [this.width - this.height, 0];
		} else {
			diff = [0, this.height - this.width];
		}

		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, value, value);
		ctx.drawImage(this, diff[0] / 2, diff[1] / 2, this.width - diff[0], this.height - diff[1], 0, 0, value, value);

		fCallback(canvas.toDataURL('image/jpeg'));
	};

	img.src = url;
}

/**
 * @param {string} mailToUrl
 * @param {Function} PopupComposeVoreModel
 * @returns {boolean}
 */
function mailToHelper(mailToUrl, PopupComposeVoreModel) {
	if (mailToUrl && 'mailto:' === mailToUrl.toString().substr(0, 7).toLowerCase()) {
		var _ret = function () {
			if (!PopupComposeVoreModel) {
				return {
					v: true
				};
			}

			mailToUrl = mailToUrl.toString().substr(7);

			var to = [],
			    cc = null,
			    bcc = null,
			    params = {};

			var email = mailToUrl.replace(/\?.+$/, ''),
			    query = mailToUrl.replace(/^[^\?]*\?/, ''),
			    EmailModel = __webpack_require__(/*! Model/Email */ 38).default,
			    emailObj = new EmailModel(),
			    fParseEmailLine = function fParseEmailLine(line) {
				return line ? __WEBPACK_IMPORTED_MODULE_3_____default.a.compact(__WEBPACK_IMPORTED_MODULE_3_____default.a.map(decodeURIComponent(line).split(/[,]/), function (item) {
					emailObj.clear();
					emailObj.mailsoParse(item);
					return '' !== emailObj.email ? emailObj : null;
				})) : null;
			};

			to = fParseEmailLine(email);
			params = simpleQueryParser(query);

			if (!isUnd(params.cc)) {
				cc = fParseEmailLine(decodeURIComponent(params.cc));
			}

			if (!isUnd(params.bcc)) {
				bcc = fParseEmailLine(decodeURIComponent(params.bcc));
			}

			__webpack_require__(/*! Knoin/Knoin */ 9).showScreenPopup(PopupComposeVoreModel, [__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["ComposeType"].Empty, null, to, cc, bcc, isUnd(params.subject) ? null : pString(decodeURIComponent(params.subject)), isUnd(params.body) ? null : plainToHtml(pString(decodeURIComponent(params.body)))]);

			return {
				v: true
			};
		}();

		if ((typeof _ret === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_ret)) === "object") return _ret.v;
	}

	return false;
}

/**
 * @param {Function} fn
 * @returns {void}
 */
function domReady(fn) {
	__WEBPACK_IMPORTED_MODULE_2_____default()(function () {
		return fn();
	});
	//
	//	if ('loading' !== window.document.readyState)
	//	{
	//		fn();
	//	}
	//	else
	//	{
	//		window.document.addEventListener('DOMContentLoaded', fn);
	//	}
}

var windowResize = __WEBPACK_IMPORTED_MODULE_3_____default.a.debounce(function (timeout) {
	if (isUnd(timeout) || isNull(timeout)) {
		__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$win"].resize();
	} else {
		__WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(function () {
			__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$win"].resize();
		}, timeout);
	}
}, 50);

/**
 * @returns {void}
 */
function windowResizeCallback() {
	windowResize();
}

var substr = __WEBPACK_IMPORTED_MODULE_1_window___default.a.String.substr;
if ('b' !== 'ab'.substr(-1)) {
	substr = function substr(str, start, length) {
		start = 0 > start ? str.length + start : start;
		return str.substr(start, length);
	};

	__WEBPACK_IMPORTED_MODULE_1_window___default.a.String.substr = substr;
}

/***/ },
/* 2 */
/* unknown exports provided */
/* exports used: default */
/*!****************************!*\
  !*** ./dev/External/ko.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Opentip__ = __webpack_require__(/*! Opentip */ 113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pikaday__ = __webpack_require__(/*! pikaday */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pikaday___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pikaday__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);









var ko = __WEBPACK_IMPORTED_MODULE_0_window___default.a.ko,
    $win = __WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_0_window___default.a),
    fDisposalTooltipHelper = function fDisposalTooltipHelper(element) {
	ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
		if (element && element.__opentip) {
			element.__opentip.deactivate();
		}
	});
};

ko.bindingHandlers.updateWidth = {
	init: function init(element, fValueAccessor) {
		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    fInit = function fInit() {
			fValue($el.width());
			__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
				fValue($el.width());
			}, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Magics"].Time500ms);
		};

		$win.on('resize', fInit);
		fInit();

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			$win.off('resize', fInit);
		});
	}
};

ko.bindingHandlers.editor = {
	init: function init(element, fValueAccessor) {

		var editor = null;

		var fValue = fValueAccessor(),
		    HtmlEditor = __webpack_require__(/*! Common/HtmlEditor */ 76).default,
		    fUpdateEditorValue = function fUpdateEditorValue() {
			if (fValue && fValue.__editor) {
				fValue.__editor.setHtmlOrPlain(fValue());
			}
		},
		    fUpdateKoValue = function fUpdateKoValue() {
			if (fValue && fValue.__editor) {
				fValue(fValue.__editor.getDataWithHtmlMark());
			}
		},
		    fOnReady = function fOnReady() {
			fValue.__editor = editor;
			fUpdateEditorValue();
		};

		if (ko.isObservable(fValue) && HtmlEditor) {
			editor = new HtmlEditor(element, fUpdateKoValue, fOnReady, fUpdateKoValue);

			fValue.__fetchEditorValue = fUpdateKoValue;

			fValue.subscribe(fUpdateEditorValue);

			//			ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
			//			});
		}
	}
};

ko.bindingHandlers.json = {
	init: function init(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).text(__WEBPACK_IMPORTED_MODULE_0_window___default.a.JSON.stringify(ko.unwrap(fValueAccessor())));
	},
	update: function update(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).text(__WEBPACK_IMPORTED_MODULE_0_window___default.a.JSON.stringify(ko.unwrap(fValueAccessor())));
	}
};

ko.bindingHandlers.scrollerShadows = {
	init: function init(element) {

		var limit = 8,
		    $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    cont = $el.find('[data-scroller-shadows-content]')[0] || null,
		    fFunc = __WEBPACK_IMPORTED_MODULE_1_____default.a.throttle(function () {
			$el.toggleClass('scroller-shadow-top', limit < cont.scrollTop).toggleClass('scroller-shadow-bottom', cont.scrollTop + limit < cont.scrollHeight - cont.clientHeight);
		}, 100);

		if (cont) {
			__WEBPACK_IMPORTED_MODULE_2_____default()(cont).on('scroll resize', fFunc);
			$win.on('resize', fFunc);

			ko.utils.domNodeDisposal.addDisposeCallback(cont, function () {
				__WEBPACK_IMPORTED_MODULE_2_____default()(cont).off();
				$win.off('resize', fFunc);
			});
		}
	}
};

ko.bindingHandlers.pikaday = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext) {

		ko.bindingHandlers.textInput.init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext);

		if (__WEBPACK_IMPORTED_MODULE_4_pikaday___default.a) {
			element.__pikaday = new __WEBPACK_IMPORTED_MODULE_4_pikaday___default.a({
				field: element
			});
		}
	}
};

ko.bindingHandlers.visibleAnimated = {
	init: function init(element, fValueAccessor) {
		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);
		$el.addClass('rl-animated-inited');
		if (ko.unwrap(fValueAccessor())) {
			$el.show();
		} else {
			$el.hide();
		}
	},
	update: function update(element, fValueAccessor) {
		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);
		if (ko.unwrap(fValueAccessor())) {
			$el.addClass('rl-animated-hidden').show();
			__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
				$el.removeClass('rl-animated-hidden');
			}, 10);
		} else {
			$el.hide().removeClass('rl-animated-hidden');
		}
	}
};

ko.bindingHandlers.tooltip = {
	init: function init(element, fValueAccessor) {

		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    isMobile = 'on' === ($el.data('tooltip-mobile') || 'off'),
		    Globals = __webpack_require__(/*! Common/Globals */ 7);

		if (!Globals.bMobileDevice || isMobile) {
			(function () {
				var sValue = !ko.isObservable(fValue) && __WEBPACK_IMPORTED_MODULE_1_____default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue);

				element.__opentip = new __WEBPACK_IMPORTED_MODULE_3_Opentip__["a" /* default */](element, {
					'style': 'rainloopTip',
					'element': element,
					'tipJoint': $el.data('tooltip-join') || 'bottom'
				});

				Globals.dropdownVisibility.subscribe(function (v) {
					if (v) {
						element.__opentip.hide();
					}
				});

				if ('' === sValue) {
					element.__opentip.hide();
					element.__opentip.deactivate();
					element.__opentip.setContent('');
				} else {
					element.__opentip.activate();
				}

				if ('on' === ($el.data('tooltip-i18n') || 'on')) {
					(function () {
						var Translator = __webpack_require__(/*! Common/Translator */ 8);

						element.__opentip.setContent(Translator.i18n(sValue));

						Translator.trigger.subscribe(function () {
							element.__opentip.setContent(Translator.i18n(sValue));
						});

						Globals.dropdownVisibility.subscribe(function () {
							if (element && element.__opentip) {
								element.__opentip.setContent(Translator.i18n(sValue));
							}
						});
					})();
				} else {
					element.__opentip.setContent(sValue);
				}

				$win.on('rl.tooltips.diactivate', function () {
					element.__opentip.hide();
					element.__opentip.deactivate();
				});

				$win.on('rl.tooltips.activate', function () {
					element.__opentip.activate();
				});
			})();
		}
	},
	update: function update(element, fValueAccessor) {

		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    isMobile = 'on' === ($el.data('tooltip-mobile') || 'off'),
		    Globals = __webpack_require__(/*! Common/Globals */ 7);

		if ((!Globals.bMobileDevice || isMobile) && element.__opentip) {
			var sValue = !ko.isObservable(fValue) && __WEBPACK_IMPORTED_MODULE_1_____default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue);
			if (sValue) {
				element.__opentip.setContent('on' === ($el.data('tooltip-i18n') || 'on') ? __webpack_require__(/*! Common/Translator */ 8).i18n(sValue) : sValue);

				element.__opentip.activate();
			} else {
				element.__opentip.hide();
				element.__opentip.deactivate();
				element.__opentip.setContent('');
			}
		}
	}
};

ko.bindingHandlers.tooltipErrorTip = {
	init: function init(element) {

		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);

		element.__opentip = new __WEBPACK_IMPORTED_MODULE_3_Opentip__["a" /* default */](element, {
			style: 'rainloopErrorTip',
			hideOn: 'mouseout click',
			element: element,
			tipJoint: $el.data('tooltip-join') || 'top'
		});

		element.__opentip.deactivate();

		__WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_0_window___default.a.document).on('click', function () {
			if (element && element.__opentip) {
				element.__opentip.hide();
			}
		});

		fDisposalTooltipHelper(element);
	},
	update: function update(element, fValueAccessor) {

		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    value = !ko.isObservable(fValue) && __WEBPACK_IMPORTED_MODULE_1_____default.a.isFunction(fValue) ? fValue() : ko.unwrap(fValue),
		    openTips = element.__opentip;

		if (openTips) {
			if ('' === value) {
				openTips.hide();
				openTips.deactivate();
				openTips.setContent('');
			} else {
				__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
					if ($el.is(':visible')) {
						openTips.setContent(value);
						openTips.activate();
						openTips.show();
					} else {
						openTips.hide();
						openTips.deactivate();
						openTips.setContent('');
					}
				}, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Magics"].Time100ms);
			}
		}
	}
};

ko.bindingHandlers.registrateBootstrapDropdown = {
	init: function init(element) {
		var Globals = __webpack_require__(/*! Common/Globals */ 7);
		if (Globals && Globals.data.aBootstrapDropdowns) {
			Globals.data.aBootstrapDropdowns.push(__WEBPACK_IMPORTED_MODULE_2_____default()(element));

			__WEBPACK_IMPORTED_MODULE_2_____default()(element).click(function () {
				__webpack_require__(/*! Common/Utils */ 1).detectDropdownVisibility();
			});

			//			ko.utils.domNodeDisposal.addDisposeCallback(element, () => {
			//			});
		}
	}
};

ko.bindingHandlers.openDropdownTrigger = {
	update: function update(element, fValueAccessor) {
		if (ko.unwrap(fValueAccessor())) {
			var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);
			if (!$el.hasClass('open')) {
				$el.find('.dropdown-toggle').dropdown('toggle');
			}

			$el.find('.dropdown-toggle').focus();

			__webpack_require__(/*! Common/Utils */ 1).detectDropdownVisibility();
			fValueAccessor()(false);
		}
	}
};

ko.bindingHandlers.dropdownCloser = {
	init: function init(element) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).closest('.dropdown').on('click', '.e-item', function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).dropdown('toggle');
		});
	}
};

ko.bindingHandlers.popover = {
	init: function init(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).popover(ko.unwrap(fValueAccessor()));

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).popover('destroy');
		});
	}
};

ko.bindingHandlers.csstext = {};
ko.bindingHandlers.csstext.init = ko.bindingHandlers.csstext.update = function (element, fValueAccessor) {
	if (element && element.styleSheet && 'undefined' !== typeof element.styleSheet.cssText) {
		element.styleSheet.cssText = ko.unwrap(fValueAccessor());
	} else {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).text(ko.unwrap(fValueAccessor()));
	}
};

ko.bindingHandlers.resizecrop = {
	init: function init(element) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).addClass('resizecrop').resizecrop({
			'width': '100',
			'height': '100',
			'wrapperCSS': {
				'border-radius': '10px'
			}
		});
	},
	update: function update(element, fValueAccessor) {
		fValueAccessor()();
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).resizecrop({
			'width': '100',
			'height': '100'
		});
	}
};

ko.bindingHandlers.onKeyDown = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).on('keydown.koOnKeyDown', function (event) {
			if (event) {
				return fValueAccessor().call(viewModel, event);
			}

			return true;
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('keydown.koOnKeyDown');
		});
	}
};

ko.bindingHandlers.onEnter = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).on('keypress.koOnEnter', function (event) {
			if (event && 13 === __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(event.keyCode, 10)) {
				__WEBPACK_IMPORTED_MODULE_2_____default()(element).trigger('change');
				fValueAccessor().call(viewModel);
			}
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('keypress.koOnEnter');
		});
	}
};

ko.bindingHandlers.onSpace = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).on('keyup.koOnSpace', function (event) {
			if (event && 32 === __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(event.keyCode, 10)) {
				fValueAccessor().call(viewModel, event);
			}
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('keyup.koOnSpace');
		});
	}
};

ko.bindingHandlers.onTab = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).on('keydown.koOnTab', function (event) {
			if (event && 9 === __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(event.keyCode, 10)) {
				return fValueAccessor().call(viewModel, !!event.shiftKey);
			}
			return true;
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('keydown.koOnTab');
		});
	}
};

ko.bindingHandlers.onEsc = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).on('keyup.koOnEsc', function (event) {
			if (event && 27 === __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(event.keyCode, 10)) {
				__WEBPACK_IMPORTED_MODULE_2_____default()(element).trigger('change');
				fValueAccessor().call(viewModel);
			}
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('keyup.koOnEsc');
		});
	}
};

ko.bindingHandlers.clickOnTrue = {
	update: function update(element, fValueAccessor) {
		if (ko.unwrap(fValueAccessor())) {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).click();
		}
	}
};

ko.bindingHandlers.modal = {
	init: function init(element, fValueAccessor) {

		var Globals = __webpack_require__(/*! Common/Globals */ 7),
		    Utils = __webpack_require__(/*! Common/Utils */ 1);

		__WEBPACK_IMPORTED_MODULE_2_____default()(element).toggleClass('fade', !Globals.bMobileDevice).modal({
			'keyboard': false,
			'show': ko.unwrap(fValueAccessor())
		}).on('shown.koModal', Utils.windowResizeCallback).find('.close').on('click.koModal', function () {
			fValueAccessor()(false);
		});

		ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('shown.koModal').find('.close').off('click.koModal');
		});
	},
	update: function update(element, fValueAccessor) {

		var Globals = __webpack_require__(/*! Common/Globals */ 7);

		__WEBPACK_IMPORTED_MODULE_2_____default()(element).modal(ko.unwrap(fValueAccessor()) ? 'show' : 'hide');

		if (Globals.$html.hasClass('rl-anim')) {
			Globals.$html.addClass('rl-modal-animation');
			__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
				Globals.$html.removeClass('rl-modal-animation');
			}, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Magics"].Time500ms);
		}
	}
};

ko.bindingHandlers.moment = {
	init: function init(element, fValueAccessor) {
		__webpack_require__(/*! Common/Momentor */ 35).momentToNode(__WEBPACK_IMPORTED_MODULE_2_____default()(element).addClass('moment').data('moment-time', ko.unwrap(fValueAccessor())));
	},
	update: function update(element, fValueAccessor) {
		__webpack_require__(/*! Common/Momentor */ 35).momentToNode(__WEBPACK_IMPORTED_MODULE_2_____default()(element).data('moment-time', ko.unwrap(fValueAccessor())));
	}
};

ko.bindingHandlers.i18nInit = {
	init: function init(element) {
		__webpack_require__(/*! Common/Translator */ 8).i18nToNodes(element);
	}
};

ko.bindingHandlers.translatorInit = {
	init: function init(element) {
		__webpack_require__(/*! Common/Translator */ 8).i18nToNodes(element);
	}
};

ko.bindingHandlers.i18nUpdate = {
	update: function update(element, fValueAccessor) {
		ko.unwrap(fValueAccessor());
		__webpack_require__(/*! Common/Translator */ 8).i18nToNodes(element);
	}
};

ko.bindingHandlers.link = {
	update: function update(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).attr('href', ko.unwrap(fValueAccessor()));
	}
};

ko.bindingHandlers.title = {
	update: function update(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).attr('title', ko.unwrap(fValueAccessor()));
	}
};

ko.bindingHandlers.textF = {
	init: function init(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).text(ko.unwrap(fValueAccessor()));
	}
};

ko.bindingHandlers.initDom = {
	init: function init(element, fValueAccessor) {
		fValueAccessor()(element);
	}
};

ko.bindingHandlers.initFixedTrigger = {
	init: function init(element, fValueAccessor) {
		var values = ko.unwrap(fValueAccessor()),
		    $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    top = values[1] || 0;

		var $container = __WEBPACK_IMPORTED_MODULE_2_____default()(values[0] || null);
		$container = $container[0] ? $container : null;
		if ($container) {
			$win.resize(function () {
				var offset = $container ? $container.offset() : null;
				if (offset && offset.top) {
					$el.css('top', offset.top + top);
				}
			});
		}
	}
};

ko.bindingHandlers.initResizeTrigger = {
	init: function init(element, fValueAccessor) {
		var values = ko.unwrap(fValueAccessor());
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).css({
			'height': values[1],
			'min-height': values[1]
		});
	},
	update: function update(oElement, fValueAccessor) {

		var Utils = __webpack_require__(/*! Common/Utils */ 1),
		    Globals = __webpack_require__(/*! Common/Globals */ 7),
		    values = ko.unwrap(fValueAccessor());

		var value = Utils.pInt(values[1]),
		    size = 0,
		    offset = __WEBPACK_IMPORTED_MODULE_2_____default()(oElement).offset().top;

		if (0 < offset) {
			offset += Utils.pInt(values[2]);
			size = Globals.$win.height() - offset;

			if (value < size) {
				value = size;
			}

			__WEBPACK_IMPORTED_MODULE_2_____default()(oElement).css({
				'height': value,
				'min-height': value
			});
		}
	}
};

ko.bindingHandlers.appendDom = {
	update: function update(element, fValueAccessor) {
		__WEBPACK_IMPORTED_MODULE_2_____default()(element).hide().empty().append(ko.unwrap(fValueAccessor())).show();
	}
};

ko.bindingHandlers.draggable = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor) {

		var Globals = __webpack_require__(/*! Common/Globals */ 7),
		    Utils = __webpack_require__(/*! Common/Utils */ 1);

		if (!Globals.bMobileDevice) {
			(function () {
				var triggerZone = 100,
				    scrollSpeed = 3,
				    fAllValueFunc = fAllBindingsAccessor(),
				    droppableSelector = fAllValueFunc && fAllValueFunc.droppableSelector ? fAllValueFunc.droppableSelector : '',
				    conf = {
					distance: 20,
					handle: '.dragHandle',
					cursorAt: { top: 22, left: 3 },
					refreshPositions: true,
					scroll: true,
					drag: null,
					stop: null,
					helper: null
				};

				if (droppableSelector) {
					conf.drag = function (event) {

						__WEBPACK_IMPORTED_MODULE_2_____default()(droppableSelector).each(function () {
							var $this = __WEBPACK_IMPORTED_MODULE_2_____default()(this),
							    // eslint-disable-line no-invalid-this
							offset = $this.offset(),
							    bottomPos = offset.top + $this.height();

							__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearInterval($this.data('timerScroll'));
							$this.data('timerScroll', false);

							if (event.pageX >= offset.left && event.pageX <= offset.left + $this.width()) {
								if (event.pageY >= bottomPos - triggerZone && event.pageY <= bottomPos) {
									var moveUp = function moveUp() {
										$this.scrollTop($this.scrollTop() + scrollSpeed);
										Utils.windowResize();
									};

									$this.data('timerScroll', __WEBPACK_IMPORTED_MODULE_0_window___default.a.setInterval(moveUp, 10));
									moveUp();
								}

								if (event.pageY >= offset.top && event.pageY <= offset.top + triggerZone) {
									var moveDown = function moveDown() {
										$this.scrollTop($this.scrollTop() - scrollSpeed);
										Utils.windowResize();
									};

									$this.data('timerScroll', __WEBPACK_IMPORTED_MODULE_0_window___default.a.setInterval(moveDown, 10));
									moveDown();
								}
							}
						});
					};

					conf.stop = function () {
						__WEBPACK_IMPORTED_MODULE_2_____default()(droppableSelector).each(function () {
							var $this = __WEBPACK_IMPORTED_MODULE_2_____default()(this); // eslint-disable-line no-invalid-this
							__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearInterval($this.data('timerScroll'));
							$this.data('timerScroll', false);
						});
					};
				}

				conf.helper = function (event) {
					return fValueAccessor()(event && event.target ? ko.dataFor(event.target) : null);
				};

				__WEBPACK_IMPORTED_MODULE_2_____default()(element).draggable(conf).on('mousedown.koDraggable', function () {
					Utils.removeInFocus();
				});

				ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
					__WEBPACK_IMPORTED_MODULE_2_____default()(element).off('mousedown.koDraggable').draggable('destroy');
				});
			})();
		}
	}
};

ko.bindingHandlers.droppable = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor) {
		var Globals = __webpack_require__(/*! Common/Globals */ 7);
		if (!Globals.bMobileDevice) {
			(function () {
				var fValueFunc = fValueAccessor(),
				    fAllValueFunc = fAllBindingsAccessor(),
				    fOverCallback = fAllValueFunc && fAllValueFunc.droppableOver ? fAllValueFunc.droppableOver : null,
				    fOutCallback = fAllValueFunc && fAllValueFunc.droppableOut ? fAllValueFunc.droppableOut : null,
				    conf = {
					tolerance: 'pointer',
					hoverClass: 'droppableHover',
					drop: null,
					over: null,
					out: null
				};

				if (fValueFunc) {
					conf.drop = function (event, ui) {
						fValueFunc(event, ui);
					};

					if (fOverCallback) {
						conf.over = function (event, ui) {
							fOverCallback(event, ui);
						};
					}

					if (fOutCallback) {
						conf.out = function (event, ui) {
							fOutCallback(event, ui);
						};
					}

					__WEBPACK_IMPORTED_MODULE_2_____default()(element).droppable(conf);

					ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
						__WEBPACK_IMPORTED_MODULE_2_____default()(element).droppable('destroy');
					});
				}
			})();
		}
	}
};

ko.bindingHandlers.nano = {
	init: function init(element) {

		var Globals = __webpack_require__(/*! Common/Globals */ 7),
		    Settings = __webpack_require__(/*! Storage/Settings */ 10);

		if (!Globals.bDisableNanoScroll && !Settings.appSettingsGet('useNativeScrollbars')) {
			__WEBPACK_IMPORTED_MODULE_2_____default()(element).addClass('nano').nanoScroller({
				iOSNativeScrolling: false,
				preventPageScrolling: true
			});
		}
	}
};

ko.bindingHandlers.saveTrigger = {
	init: function init(element) {

		var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);

		$el.data('save-trigger-type', $el.is('input[type=text],input[type=email],input[type=password],select,textarea') ? 'input' : 'custom');

		if ('custom' === $el.data('save-trigger-type')) {
			$el.append('&nbsp;&nbsp;<i class="icon-spinner animated"></i><i class="icon-remove error"></i><i class="icon-ok success"></i>').addClass('settings-saved-trigger');
		} else {
			$el.addClass('settings-saved-trigger-input');
		}
	},
	update: function update(element, fValueAccessor) {
		var value = ko.unwrap(fValueAccessor()),
		    $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);

		if ('custom' === $el.data('save-trigger-type')) {
			switch (value.toString()) {
				case '1':
					$el.find('.animated,.error').hide().removeClass('visible').end().find('.success').show().addClass('visible');
					break;
				case '0':
					$el.find('.animated,.success').hide().removeClass('visible').end().find('.error').show().addClass('visible');
					break;
				case '-2':
					$el.find('.error,.success').hide().removeClass('visible').end().find('.animated').show().addClass('visible');
					break;
				default:
					$el.find('.animated').hide().end().find('.error,.success').removeClass('visible');
					break;
			}
		} else {
			switch (value.toString()) {
				case '1':
					$el.addClass('success').removeClass('error');
					break;
				case '0':
					$el.addClass('error').removeClass('success');
					break;
				case '-2':
					break;
				default:
					$el.removeClass('error success');
					break;
			}
		}
	}
};

ko.bindingHandlers.emailsTags = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor) {

		var Utils = __webpack_require__(/*! Common/Utils */ 1),
		    EmailModel = __webpack_require__(/*! Model/Email */ 38).default,
		    $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    fAllBindings = fAllBindingsAccessor(),
		    fAutoCompleteSource = fAllBindings.autoCompleteSource || null,
		    fFocusCallback = function fFocusCallback(value) {
			if (fValue && fValue.focused) {
				fValue.focused(!!value);
			}
		};

		$el.inputosaurus({
			parseOnBlur: true,
			allowDragAndDrop: true,
			focusCallback: fFocusCallback,
			inputDelimiters: [',', ';', '\n'],
			autoCompleteSource: fAutoCompleteSource,
			//			elementHook: (el, item) => {
			//				if (el && item)
			//				{
			//					el.addClass('pgp');
			//				}
			//			},
			parseHook: function parseHook(input) {
				return __WEBPACK_IMPORTED_MODULE_1_____default.a.map(input, function (inputValue) {
					var value = Utils.trim(inputValue);
					if ('' !== value) {
						var email = new EmailModel();
						email.mailsoParse(value);
						return [email.toLine(false), email];
					}
					return [value, null];
				});
			},
			'change': function change(event) {
				$el.data('EmailsTagsValue', event.target.value);
				fValue(event.target.value);
			}
		});

		if (fValue && fValue.focused && fValue.focused.subscribe) {
			fValue.focused.subscribe(function (value) {
				$el.inputosaurus(value ? 'focus' : 'blur');
			});
		}
	},
	update: function update(element, fValueAccessor) {

		var $oEl = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    fValue = fValueAccessor(),
		    value = ko.unwrap(fValue);

		if ($oEl.data('EmailsTagsValue') !== value) {
			$oEl.val(value);
			$oEl.data('EmailsTagsValue', value);
			$oEl.inputosaurus('refresh');
		}
	}
};

ko.bindingHandlers.command = {
	init: function init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext) {
		var jqElement = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    command = fValueAccessor();

		if (!command || !command.isCommand) {
			throw new Error('Value should be a command');
		}

		if (!command.enabled) {
			command.enabled = ko.observable(true);
		}

		if (!command.canExecute) {
			(function () {
				var __realCanExecute = command.__realCanExecute;
				if (__WEBPACK_IMPORTED_MODULE_1_____default.a.isFunction(__realCanExecute)) {
					command.canExecute = ko.computed(function () {
						return command.enabled() && __realCanExecute.call(viewModel, viewModel);
					});
				} else {
					command.canExecute = ko.computed(function () {
						return command.enabled() && !!__realCanExecute;
					});
				}
			})();
		}

		jqElement.addClass('command');
		ko.bindingHandlers[jqElement.is('form') ? 'submit' : 'click'].init(element, fValueAccessor, fAllBindingsAccessor, viewModel, bindingContext);
	},
	update: function update(element, fValueAccessor) {

		var jqElement = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
		    command = fValueAccessor();

		var result = command.enabled();

		jqElement.toggleClass('command-not-enabled', !result);

		if (result) {
			result = command.canExecute();
			jqElement.toggleClass('command-can-not-be-execute', !result);
		}

		jqElement.toggleClass('command-disabled disable disabled', !result).toggleClass('no-disabled', !!result);

		if (jqElement.is('input') || jqElement.is('button')) {
			jqElement.prop('disabled', !result);
		}
	}
};

// extenders

ko.extenders.trimmer = function (target) {
	var Utils = __webpack_require__(/*! Common/Utils */ 1),
	    result = ko.computed({
		read: target,
		write: function write(newValue) {
			target(Utils.trim(newValue.toString()));
		}
	});

	result(target());
	return result;
};

ko.extenders.posInterer = function (target, defaultVal) {
	var Utils = __webpack_require__(/*! Common/Utils */ 1),
	    result = ko.computed({
		read: target,
		write: function write(newValue) {
			var val = Utils.pInt(newValue.toString(), defaultVal);
			if (0 >= val) {
				val = defaultVal;
			}

			if (val === target() && '' + val !== '' + newValue) {
				target(val + 1);
			}

			target(val);
		}
	});

	result(target());
	return result;
};

ko.extenders.limitedList = function (target, limitedList) {
	var Utils = __webpack_require__(/*! Common/Utils */ 1),
	    result = ko.computed({
		read: target,
		write: function write(newValue) {

			var currentValue = ko.unwrap(target),
			    list = ko.unwrap(limitedList);

			if (Utils.isNonEmptyArray(list)) {
				if (-1 < Utils.inArray(newValue, list)) {
					target(newValue);
				} else if (-1 < Utils.inArray(currentValue, list)) {
					target(currentValue + ' ');
					target(currentValue);
				} else {
					target(list[0] + ' ');
					target(list[0]);
				}
			} else {
				target('');
			}
		}
	}).extend({ notify: 'always' });

	result(target());

	if (!result.valueHasMutated) {
		result.valueHasMutated = function () {
			target.valueHasMutated();
		};
	}

	return result;
};

ko.extenders.reversible = function (target) {

	var value = target();

	target.commit = function () {
		value = target();
	};

	target.reverse = function () {
		target(value);
	};

	target.commitedValue = function () {
		return value;
	};
	return target;
};

ko.extenders.toggleSubscribe = function (target, options) {
	target.subscribe(options[1], options[0], 'beforeChange');
	target.subscribe(options[2], options[0]);
	return target;
};

ko.extenders.toggleSubscribeProperty = function (target, options) {

	var prop = options[1];
	if (prop) {
		target.subscribe(function (prev) {
			if (prev && prev[prop]) {
				prev[prop](false);
			}
		}, options[0], 'beforeChange');

		target.subscribe(function (next) {
			if (next && next[prop]) {
				next[prop](true);
			}
		}, options[0]);
	}

	return target;
};

ko.extenders.falseTimeout = function (target, option) {
	target.iFalseTimeoutTimeout = 0;
	target.subscribe(function (value) {
		if (value) {
			__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearTimeout(target.iFalseTimeoutTimeout);
			target.iFalseTimeoutTimeout = __WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
				target(false);
				target.iFalseTimeoutTimeout = 0;
			}, __webpack_require__(/*! Common/Utils */ 1).pInt(option));
		}
	});

	return target;
};

ko.extenders.specialThrottle = function (target, option) {
	target.iSpecialThrottleTimeoutValue = __webpack_require__(/*! Common/Utils */ 1).pInt(option);
	if (0 < target.iSpecialThrottleTimeoutValue) {
		target.iSpecialThrottleTimeout = 0;
		target.valueForRead = ko.observable(!!target()).extend({ throttle: 10 });

		return ko.computed({
			read: target.valueForRead,
			write: function write(bValue) {

				if (bValue) {
					target.valueForRead(bValue);
				} else {
					if (target.valueForRead()) {
						__WEBPACK_IMPORTED_MODULE_0_window___default.a.clearTimeout(target.iSpecialThrottleTimeout);
						target.iSpecialThrottleTimeout = __WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {
							target.valueForRead(false);
							target.iSpecialThrottleTimeout = 0;
						}, target.iSpecialThrottleTimeoutValue);
					} else {
						target.valueForRead(bValue);
					}
				}
			}
		});
	}

	return target;
};

ko.extenders.idleTrigger = function (target) {
	target.trigger = ko.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
	return target;
};

// functions

ko.observable.fn.idleTrigger = function () {
	return this.extend({ 'idleTrigger': true });
};

ko.observable.fn.validateNone = function () {
	this.hasError = ko.observable(false);
	return this;
};

ko.observable.fn.validateEmail = function () {
	var _this = this;

	this.hasError = ko.observable(false);

	this.subscribe(function (value) {
		_this.hasError('' !== value && !/^[^@\s]+@[^@\s]+$/.test(value));
	});

	this.valueHasMutated();
	return this;
};

ko.observable.fn.validateSimpleEmail = function () {
	var _this2 = this;

	this.hasError = ko.observable(false);

	this.subscribe(function (value) {
		_this2.hasError('' !== value && !/^.+@.+$/.test(value));
	});

	this.valueHasMutated();
	return this;
};

ko.observable.fn.deleteAccessHelper = function () {
	this.extend({ falseTimeout: 3000 }).extend({ toggleSubscribeProperty: [this, 'deleteAccess'] });
	return this;
};

ko.observable.fn.validateFunc = function (fFunc) {
	var _this3 = this;

	this.hasFuncError = ko.observable(false);

	if (__WEBPACK_IMPORTED_MODULE_1_____default.a.isFunction(fFunc)) {
		this.subscribe(function (value) {
			_this3.hasFuncError(!fFunc(value));
		});

		this.valueHasMutated();
	}

	return this;
};

module.exports = ko;

/***/ },
/* 3 */
/* exports provided: FileType, StorageResultType, Focused, State, StateType, Capa, KeyState, FolderType, ServerFolderType, LoginSignMeTypeAsString, LoginSignMeType, ComposeType, UploadErrorCode, SetSystemFoldersNotification, ClientSideKeyName, EventKeyCode, MessageSetAction, MessageSelectAction, DesktopNotification, MessagePriority, EditorDefaultType, ServerSecure, SearchDateType, SaveSettingsStep, Layout, FilterConditionField, FilterConditionType, FiltersAction, FilterRulesType, SignedVerifyStatus, ContactPropertyType, Magics, Ports, Notification */
/* all exports used */
/*!*****************************!*\
  !*** ./dev/Common/Enums.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StorageResultType", function() { return StorageResultType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Focused", function() { return Focused; });
/* harmony export (binding) */ __webpack_require__.d(exports, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(exports, "StateType", function() { return StateType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Capa", function() { return Capa; });
/* harmony export (binding) */ __webpack_require__.d(exports, "KeyState", function() { return KeyState; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FolderType", function() { return FolderType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ServerFolderType", function() { return ServerFolderType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LoginSignMeTypeAsString", function() { return LoginSignMeTypeAsString; });
/* harmony export (binding) */ __webpack_require__.d(exports, "LoginSignMeType", function() { return LoginSignMeType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ComposeType", function() { return ComposeType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "UploadErrorCode", function() { return UploadErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SetSystemFoldersNotification", function() { return SetSystemFoldersNotification; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ClientSideKeyName", function() { return ClientSideKeyName; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EventKeyCode", function() { return EventKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MessageSetAction", function() { return MessageSetAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MessageSelectAction", function() { return MessageSelectAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "DesktopNotification", function() { return DesktopNotification; });
/* harmony export (binding) */ __webpack_require__.d(exports, "MessagePriority", function() { return MessagePriority; });
/* harmony export (binding) */ __webpack_require__.d(exports, "EditorDefaultType", function() { return EditorDefaultType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ServerSecure", function() { return ServerSecure; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SearchDateType", function() { return SearchDateType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SaveSettingsStep", function() { return SaveSettingsStep; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Layout", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FilterConditionField", function() { return FilterConditionField; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FilterConditionType", function() { return FilterConditionType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FiltersAction", function() { return FiltersAction; });
/* harmony export (binding) */ __webpack_require__.d(exports, "FilterRulesType", function() { return FilterRulesType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "SignedVerifyStatus", function() { return SignedVerifyStatus; });
/* harmony export (binding) */ __webpack_require__.d(exports, "ContactPropertyType", function() { return ContactPropertyType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Magics", function() { return Magics; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Ports", function() { return Ports; });
/* harmony export (binding) */ __webpack_require__.d(exports, "Notification", function() { return Notification; });

/* eslint quote-props: 0 */

/**
 * @enum {string}
 */
var FileType = {
	'Unknown': 'unknown',
	'Text': 'text',
	'Html': 'html',
	'Code': 'code',
	'Eml': 'eml',
	'WordText': 'word-text',
	'Pdf': 'pdf',
	'Image': 'image',
	'Audio': 'audio',
	'Video': 'video',
	'Sheet': 'sheet',
	'Presentation': 'presentation',
	'Certificate': 'certificate',
	'CertificateBin': 'certificate-bin',
	'Archive': 'archive'
};

/**
 * @enum {string}
 */
var StorageResultType = {
	'Success': 'success',
	'Abort': 'abort',
	'Error': 'error',
	'Unload': 'unload'
};

/**
 * @enum {string}
 */
var Focused = {
	'None': 'none',
	'MessageList': 'message-list',
	'MessageView': 'message-view',
	'FolderList': 'folder-list'
};

/**
 * @enum {number}
 */
var State = {
	'Empty': 10,
	'Login': 20,
	'Auth': 30
};

/**
 * @enum {number}
 */
var StateType = {
	'Webmail': 0,
	'Admin': 1
};

/**
 * @enum {string}
 */
var Capa = {
	'TwoFactor': 'TWO_FACTOR',
	'TwoFactorForce': 'TWO_FACTOR_FORCE',
	'OpenPGP': 'OPEN_PGP',
	'Prefetch': 'PREFETCH',
	'Gravatar': 'GRAVATAR',
	'Folders': 'FOLDERS',
	'Composer': 'COMPOSER',
	'Contacts': 'CONTACTS',
	'Reload': 'RELOAD',
	'Search': 'SEARCH',
	'SearchAdv': 'SEARCH_ADV',
	'MessageActions': 'MESSAGE_ACTIONS',
	'MessageListActions': 'MESSAGELIST_ACTIONS',
	'AttachmentsActions': 'ATTACHMENTS_ACTIONS',
	'DangerousActions': 'DANGEROUS_ACTIONS',
	'Settings': 'SETTINGS',
	'Help': 'HELP',
	'Themes': 'THEMES',
	'UserBackground': 'USER_BACKGROUND',
	'Sieve': 'SIEVE',
	'Filters': 'FILTERS',
	'AttachmentThumbnails': 'ATTACHMENT_THUMBNAILS',
	'Templates': 'TEMPLATES',
	'AutoLogout': 'AUTOLOGOUT',
	'AdditionalAccounts': 'ADDITIONAL_ACCOUNTS',
	'Identities': 'IDENTITIES'
};

/**
 * @enum {string}
 */
var KeyState = {
	'All': 'all',
	'None': 'none',
	'ContactList': 'contact-list',
	'MessageList': 'message-list',
	'FolderList': 'folder-list',
	'MessageView': 'message-view',
	'Compose': 'compose',
	'Settings': 'settings',
	'Menu': 'menu',
	'PopupComposeOpenPGP': 'compose-open-pgp',
	'PopupMessageOpenPGP': 'message-open-pgp',
	'PopupViewOpenPGP': 'view-open-pgp',
	'PopupKeyboardShortcutsHelp': 'popup-keyboard-shortcuts-help',
	'PopupAsk': 'popup-ask'
};

/**
 * @enum {number}
 */
var FolderType = {
	'Inbox': 10,
	'SentItems': 11,
	'Draft': 12,
	'Trash': 13,
	'Spam': 14,
	'Archive': 15,
	'NotSpam': 80,
	'User': 99
};

/**
 * @enum {number}
 */
var ServerFolderType = {
	'USER': 0,
	'INBOX': 1,
	'SENT': 2,
	'DRAFTS': 3,
	'JUNK': 4,
	'TRASH': 5,
	'IMPORTANT': 10,
	'FLAGGED': 11,
	'ALL': 12
};

/**
 * @enum {string}
 */
var LoginSignMeTypeAsString = {
	'DefaultOff': 'defaultoff',
	'DefaultOn': 'defaulton',
	'Unused': 'unused'
};

/**
 * @enum {number}
 */
var LoginSignMeType = {
	'DefaultOff': 0,
	'DefaultOn': 1,
	'Unused': 2
};

/**
 * @enum {string}
 */
var ComposeType = {
	'Empty': 'empty',
	'Reply': 'reply',
	'ReplyAll': 'replyall',
	'Forward': 'forward',
	'ForwardAsAttachment': 'forward-as-attachment',
	'Draft': 'draft',
	'EditAsNew': 'editasnew'
};

/**
 * @enum {number}
 */
var UploadErrorCode = {
	'Normal': 0,
	'FileIsTooBig': 1,
	'FilePartiallyUploaded': 2,
	'FileNoUploaded': 3,
	'MissingTempFolder': 4,
	'FileOnSaveingError': 5,
	'FileType': 98,
	'Unknown': 99
};

/**
 * @enum {number}
 */
var SetSystemFoldersNotification = {
	'None': 0,
	'Sent': 1,
	'Draft': 2,
	'Spam': 3,
	'Trash': 4,
	'Archive': 5
};

/**
 * @enum {number}
 */
var ClientSideKeyName = {
	'FoldersLashHash': 0,
	'MessagesInboxLastHash': 1,
	'MailBoxListSize': 2,
	'ExpandedFolders': 3,
	'FolderListSize': 4,
	'MessageListSize': 5,
	'LastReplyAction': 6,
	'LastSignMe': 7,
	'ComposeLastIdentityID': 8,
	'MessageHeaderFullInfo': 9
};

/**
 * @enum {number}
 */
var EventKeyCode = {
	'Backspace': 8,
	'Tab': 9,
	'Enter': 13,
	'Esc': 27,
	'PageUp': 33,
	'PageDown': 34,
	'Left': 37,
	'Right': 39,
	'Up': 38,
	'Down': 40,
	'End': 35,
	'Home': 36,
	'Space': 32,
	'Insert': 45,
	'Delete': 46,
	'A': 65,
	'S': 83
};

/**
 * @enum {number}
 */
var MessageSetAction = {
	'SetSeen': 0,
	'UnsetSeen': 1,
	'SetFlag': 2,
	'UnsetFlag': 3
};

/**
 * @enum {number}
 */
var MessageSelectAction = {
	'All': 0,
	'None': 1,
	'Invert': 2,
	'Unseen': 3,
	'Seen': 4,
	'Flagged': 5,
	'Unflagged': 6
};

/**
 * @enum {number}
 */
var DesktopNotification = {
	'Allowed': 0,
	'NotAllowed': 1,
	'Denied': 2,
	'NotSupported': 9
};

/**
 * @enum {number}
 */
var MessagePriority = {
	'Low': 5,
	'Normal': 3,
	'High': 1
};

/**
 * @enum {string}
 */
var EditorDefaultType = {
	'Html': 'Html',
	'Plain': 'Plain',
	'HtmlForced': 'HtmlForced',
	'PlainForced': 'PlainForced'
};

/**
 * @enum {number}
 */
var ServerSecure = {
	'None': 0,
	'SSL': 1,
	'TLS': 2
};

/**
 * @enum {number}
 */
var SearchDateType = {
	'All': -1,
	'Days3': 3,
	'Days7': 7,
	'Month': 30
};

/**
 * @enum {number}
 */
var SaveSettingsStep = {
	'Animate': -2,
	'Idle': -1,
	'TrueResult': 1,
	'FalseResult': 0
};

/**
 * @enum {number}
 */
var Layout = {
	'NoPreview': 0,
	'SidePreview': 1,
	'BottomPreview': 2
};

/**
 * @enum {string}
 */
var FilterConditionField = {
	'From': 'From',
	'Recipient': 'Recipient',
	'Subject': 'Subject',
	'Header': 'Header',
	'Size': 'Size'
};

/**
 * @enum {string}
 */
var FilterConditionType = {
	'Contains': 'Contains',
	'NotContains': 'NotContains',
	'EqualTo': 'EqualTo',
	'NotEqualTo': 'NotEqualTo',
	'Regex': 'Regex',
	'Over': 'Over',
	'Under': 'Under'
};

/**
 * @enum {string}
 */
var FiltersAction = {
	'None': 'None',
	'MoveTo': 'MoveTo',
	'Discard': 'Discard',
	'Vacation': 'Vacation',
	'Reject': 'Reject',
	'Forward': 'Forward'
};

/**
 * @enum {string}
 */
var FilterRulesType = {
	'All': 'All',
	'Any': 'Any'
};

/**
 * @enum {number}
 */
var SignedVerifyStatus = {
	'UnknownPublicKeys': -4,
	'UnknownPrivateKey': -3,
	'Unverified': -2,
	'Error': -1,
	'None': 0,
	'Success': 1
};

/**
 * @enum {number}
 */
var ContactPropertyType = {

	'Unknown': 0,

	'FullName': 10,

	'FirstName': 15,
	'LastName': 16,
	'MiddleName': 16,
	'Nick': 18,

	'NamePrefix': 20,
	'NameSuffix': 21,

	'Email': 30,
	'Phone': 31,
	'Web': 32,

	'Birthday': 40,

	'Facebook': 90,
	'Skype': 91,
	'GitHub': 92,

	'Note': 110,

	'Custom': 250
};

/**
 * @enum {number}
 */
var Magics = {
	'EventWhichMouseMiddle': 3,
	'ifvisibleIdle10s': 10,

	'BitLength2048': 2048,
	'BitLength1024': 1024,

	'Size350px': 350,
	'Size50px': 50,
	'Size20px': 20,
	'Size1px': 1,

	'Time30mInMin': 30,

	'Time60m': 60000 * 60,
	'Time30m': 60000 * 30,
	'Time20m': 60000 * 20,
	'Time15m': 60000 * 15,
	'Time10m': 60000 * 10,
	'Time5m': 60000 * 5,
	'Time3m': 60000 * 3,
	'Time2m': 60000 * 2,
	'Time1m': 60000,
	'Time30s': 30000,
	'Time10s': 10000,
	'Time7s': 7000,
	'Time5s': 5000,
	'Time3s': 3000,
	'Time1s': 1000,
	'Time500ms': 500,
	'Time350ms': 350,
	'Time250ms': 250,
	'Time200ms': 200,
	'Time100ms': 100,
	'Time50ms': 50,
	'Time20ms': 20,
	'Time10ms': 10,
	'Time1ms': 1
};

/**
 * @enum {number}
 */
var Ports = {
	'Imap': 143,
	'ImapSsl': 993,
	'Smtp': 25,
	'SmtpSsl': 465,
	'SmtpStartTls': 587
};

/**
 * @enum {number}
 */
var Notification = {
	'InvalidToken': 101,
	'AuthError': 102,
	'AccessError': 103,
	'ConnectionError': 104,
	'CaptchaError': 105,
	'SocialFacebookLoginAccessDisable': 106,
	'SocialTwitterLoginAccessDisable': 107,
	'SocialGoogleLoginAccessDisable': 108,
	'DomainNotAllowed': 109,
	'AccountNotAllowed': 110,

	'AccountTwoFactorAuthRequired': 120,
	'AccountTwoFactorAuthError': 121,

	'CouldNotSaveNewPassword': 130,
	'CurrentPasswordIncorrect': 131,
	'NewPasswordShort': 132,
	'NewPasswordWeak': 133,
	'NewPasswordForbidden': 134,

	'ContactsSyncError': 140,

	'CantGetMessageList': 201,
	'CantGetMessage': 202,
	'CantDeleteMessage': 203,
	'CantMoveMessage': 204,
	'CantCopyMessage': 205,

	'CantSaveMessage': 301,
	'CantSendMessage': 302,
	'InvalidRecipients': 303,

	'CantSaveFilters': 351,
	'CantGetFilters': 352,
	'FiltersAreNotCorrect': 355,

	'CantCreateFolder': 400,
	'CantRenameFolder': 401,
	'CantDeleteFolder': 402,
	'CantSubscribeFolder': 403,
	'CantUnsubscribeFolder': 404,
	'CantDeleteNonEmptyFolder': 405,

	'CantSaveSettings': 501,
	'CantSavePluginSettings': 502,

	'DomainAlreadyExists': 601,

	'CantInstallPackage': 701,
	'CantDeletePackage': 702,
	'InvalidPluginPackage': 703,
	'UnsupportedPluginPackage': 704,

	'LicensingServerIsUnavailable': 710,
	'LicensingExpired': 711,
	'LicensingBanned': 712,

	'DemoSendMessageError': 750,
	'DemoAccountError': 751,

	'AccountAlreadyExists': 801,
	'AccountDoesNotExist': 802,

	'MailServerError': 901,
	'ClientViewError': 902,
	'InvalidInputArgument': 903,

	'AjaxFalse': 950,
	'AjaxAbort': 951,
	'AjaxParse': 952,
	'AjaxTimeout': 953,

	'UnknownNotification': 999,
	'UnknownError': 999
};

/***/ },
/* 4 */
/* unknown exports provided */
/* exports used: default */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 126);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 125);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ },
/* 5 */
/* unknown exports provided */
/* exports used: default */
/*!**************************************************************!*\
  !*** ./~/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 55);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ },
/* 6 */
/* unknown exports provided */
/* exports used: default */
/*!***************************!*\
  !*** external "window._" ***!
  \***************************/
/***/ function(module, exports) {

module.exports = window._;

/***/ },
/* 7 */
/* exports provided: $win, $doc, $html, $body, $div, startMicrotime, community, dropdownVisibility, useKeyboardShortcuts, sUserAgent, bIE, bChrome, bSafari, bMobileDevice, bDisableNanoScroll, bAnimationSupported, bXMLHttpRequestSupported, bIsHttps, htmlEditorDefaultConfig, htmlEditorLangsMap, bAllowPdfPreview, aViewModels, leftPanelDisabled, leftPanelType, leftPanelWidth, popupVisibilityNames, popupVisibility, keyScopeReal, keyScopeFake, keyScope, data */
/* all exports used */
/*!*******************************!*\
  !*** ./dev/Common/Globals.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_key__ = __webpack_require__(/*! key */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony export (binding) */ __webpack_require__.d(exports, "$win", function() { return $win; });
/* harmony export (binding) */ __webpack_require__.d(exports, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(exports, "$html", function() { return $html; });
/* harmony export (binding) */ __webpack_require__.d(exports, "$body", function() { return $body; });
/* harmony export (binding) */ __webpack_require__.d(exports, "$div", function() { return $div; });
/* harmony export (binding) */ __webpack_require__.d(exports, "startMicrotime", function() { return startMicrotime; });
/* harmony export (binding) */ __webpack_require__.d(exports, "community", function() { return community; });
/* harmony export (binding) */ __webpack_require__.d(exports, "dropdownVisibility", function() { return dropdownVisibility; });
/* harmony export (binding) */ __webpack_require__.d(exports, "useKeyboardShortcuts", function() { return useKeyboardShortcuts; });
/* harmony export (binding) */ __webpack_require__.d(exports, "sUserAgent", function() { return sUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bIE", function() { return bIE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bChrome", function() { return bChrome; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bSafari", function() { return bSafari; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bMobileDevice", function() { return bMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bDisableNanoScroll", function() { return bDisableNanoScroll; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bAnimationSupported", function() { return bAnimationSupported; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bXMLHttpRequestSupported", function() { return bXMLHttpRequestSupported; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bIsHttps", function() { return bIsHttps; });
/* harmony export (binding) */ __webpack_require__.d(exports, "htmlEditorDefaultConfig", function() { return htmlEditorDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(exports, "htmlEditorLangsMap", function() { return htmlEditorLangsMap; });
/* harmony export (binding) */ __webpack_require__.d(exports, "bAllowPdfPreview", function() { return bAllowPdfPreview; });
/* harmony export (binding) */ __webpack_require__.d(exports, "aViewModels", function() { return aViewModels; });
/* harmony export (binding) */ __webpack_require__.d(exports, "leftPanelDisabled", function() { return leftPanelDisabled; });
/* harmony export (binding) */ __webpack_require__.d(exports, "leftPanelType", function() { return leftPanelType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "leftPanelWidth", function() { return leftPanelWidth; });
/* harmony export (binding) */ __webpack_require__.d(exports, "popupVisibilityNames", function() { return popupVisibilityNames; });
/* harmony export (binding) */ __webpack_require__.d(exports, "popupVisibility", function() { return popupVisibility; });
/* harmony export (binding) */ __webpack_require__.d(exports, "keyScopeReal", function() { return keyScopeReal; });
/* harmony export (binding) */ __webpack_require__.d(exports, "keyScopeFake", function() { return keyScopeFake; });
/* harmony export (binding) */ __webpack_require__.d(exports, "keyScope", function() { return keyScope; });
/* harmony export (binding) */ __webpack_require__.d(exports, "data", function() { return data; });

/* global RL_COMMUNITY */








var $win = __WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_0_window___default.a);
$win.__sizes = [0, 0];



var $doc = __WEBPACK_IMPORTED_MODULE_2_____default()(__WEBPACK_IMPORTED_MODULE_0_window___default.a.document);

var $html = __WEBPACK_IMPORTED_MODULE_2_____default()('html');

var $body = __WEBPACK_IMPORTED_MODULE_2_____default()('body');

var $div = __WEBPACK_IMPORTED_MODULE_2_____default()('<div></div>');

var startMicrotime = new __WEBPACK_IMPORTED_MODULE_0_window___default.a.Date().getTime();

/**
 * @type {boolean}
 */
var community = true;

/**
 * @type {?}
 */
var dropdownVisibility = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false).extend({ rateLimit: 0 });

/**
 * @type {boolean}
 */
var useKeyboardShortcuts = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(true);

/**
 * @type {string}
 */
var sUserAgent = 'navigator' in __WEBPACK_IMPORTED_MODULE_0_window___default.a && 'userAgent' in __WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator && __WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator.userAgent.toLowerCase() || '';

/**
 * @type {boolean}
 */
var bIE = -1 < sUserAgent.indexOf('msie');

/**
 * @type {boolean}
 */
var bChrome = -1 < sUserAgent.indexOf('chrome');

/**
 * @type {boolean}
 */
var bSafari = !bChrome && -1 < sUserAgent.indexOf('safari');

/**
 * @type {boolean}
 */
var bMobileDevice = /android/i.test(sUserAgent) || /iphone/i.test(sUserAgent) || /ipod/i.test(sUserAgent) || /ipad/i.test(sUserAgent) || /blackberry/i.test(sUserAgent);

/**
 * @type {boolean}
 */
var bDisableNanoScroll = bMobileDevice;

/**
 * @type {boolean}
 */
var bAnimationSupported = !bMobileDevice && $html.hasClass('csstransitions') && $html.hasClass('cssanimations');

/**
 * @type {boolean}
 */
var bXMLHttpRequestSupported = !!__WEBPACK_IMPORTED_MODULE_0_window___default.a.XMLHttpRequest;

/**
 * @type {boolean}
 */
var bIsHttps = __WEBPACK_IMPORTED_MODULE_0_window___default.a.document && __WEBPACK_IMPORTED_MODULE_0_window___default.a.document.location ? 'https:' === __WEBPACK_IMPORTED_MODULE_0_window___default.a.document.location.protocol : false;

/**
 * @type {Object}
 */
var htmlEditorDefaultConfig = {
	'title': false,
	'stylesSet': false,
	'customConfig': '',
	'contentsCss': '',
	'toolbarGroups': [{ name: 'spec' }, { name: 'styles' }, { name: 'basicstyles', groups: ['basicstyles', 'cleanup', 'bidi'] }, { name: 'colors' }, bMobileDevice ? {} : { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'] }, { name: 'links' }, { name: 'insert' }, { name: 'document', groups: ['mode', 'document', 'doctools'] }, { name: 'others' }],

	'removePlugins': 'liststyle',
	'removeButtons': 'Format,Undo,Redo,Cut,Copy,Paste,Anchor,Strike,Subscript,Superscript,Image,SelectAll,Source',
	'removeDialogTabs': 'link:advanced;link:target;image:advanced;images:advanced',

	'extraPlugins': 'plain,signature',

	'allowedContent': true,
	'extraAllowedContent': true,

	'fillEmptyBlocks': false,
	'ignoreEmptyParagraph': true,
	'disableNativeSpellChecker': false,

	'font_defaultLabel': 'Arial',
	'fontSize_defaultLabel': '13',
	'fontSize_sizes': '10/10px;12/12px;13/13px;14/14px;16/16px;18/18px;20/20px;24/24px;28/28px;36/36px;48/48px'
};

/**
 * @type {Object}
 */
var htmlEditorLangsMap = {
	'ar_sa': 'ar-sa',
	'bg_bg': 'bg',
	'cs_CZ': 'cs',
	'de_de': 'de',
	'el_gr': 'el',
	'es_es': 'es',
	'et_ee': 'et',
	'fr_fr': 'fr',
	'hu_hu': 'hu',
	'is_is': 'is',
	'it_it': 'it',
	'ja_jp': 'ja',
	'ko_kr': 'ko',
	'lt_lt': 'lt',
	'lv_lv': 'lv',
	'fa_ir': 'fa',
	'nb_no': 'nb',
	'nl_nl': 'nl',
	'pl_pl': 'pl',
	'pt_br': 'pt-br',
	'pt_pt': 'pt',
	'ro_ro': 'ro',
	'ru_ru': 'ru',
	'sk_sk': 'sk',
	'sl_si': 'sl',
	'sv_se': 'sv',
	'tr_tr': 'tr',
	'uk_ua': 'uk',
	'zh_cn': 'zh-cn',
	'zh_tw': 'zh'
};

/**
 * @type {boolean}
 */
var bAllowPdfPreview = !bMobileDevice;

if (bAllowPdfPreview && __WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator && __WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator.mimeTypes) {
	bAllowPdfPreview = !!__WEBPACK_IMPORTED_MODULE_1_____default.a.find(__WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator.mimeTypes, function (type) {
		return type && 'application/pdf' === type.type;
	});

	if (!bAllowPdfPreview) {
		bAllowPdfPreview = 'undefined' !== typeof __WEBPACK_IMPORTED_MODULE_0_window___default.a.navigator.mimeTypes['application/pdf'];
	}
}



var aViewModels = {
	settings: [],
	'settings-removed': [],
	'settings-disabled': []
};

var leftPanelDisabled = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);
var leftPanelType = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
var leftPanelWidth = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(0);

// popups
var popupVisibilityNames = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observableArray([]);

var popupVisibility = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed(function () {
	return 0 < popupVisibilityNames().length;
});

popupVisibility.subscribe(function (bValue) {
	$html.toggleClass('rl-modal', bValue);
});

// keys
var keyScopeReal = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].All);
var keyScopeFake = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].All);

var keyScope = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed({
	read: function read() {
		return keyScopeFake();
	},
	write: function write(value) {

		if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].Menu !== value) {
			if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].Compose === value) {
				// disableKeyFilter
				__WEBPACK_IMPORTED_MODULE_3_key___default.a.filter = function () {
					return useKeyboardShortcuts();
				};
			} else {
				// restoreKeyFilter
				__WEBPACK_IMPORTED_MODULE_3_key___default.a.filter = function (event) {

					if (useKeyboardShortcuts()) {
						var el = event.target || event.srcElement,
						    tagName = el ? el.tagName.toUpperCase() : '';

						return !('INPUT' === tagName || 'SELECT' === tagName || 'TEXTAREA' === tagName || el && 'DIV' === tagName && ('editorHtmlArea' === el.className || 'true' === '' + el.contentEditable));
					}

					return false;
				};
			}

			keyScopeFake(value);
			if (dropdownVisibility()) {
				value = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].Menu;
			}
		}

		keyScopeReal(value);
	}
});

keyScopeReal.subscribe(function (value) {
	//	window.console.log('keyScope=' + sValue); // DEBUG
	__WEBPACK_IMPORTED_MODULE_3_key___default.a.setScope(value);
});

dropdownVisibility.subscribe(function (value) {
	if (value) {
		keyScope(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].Menu);
	} else if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].Menu === __WEBPACK_IMPORTED_MODULE_3_key___default.a.getScope()) {
		keyScope(keyScopeFake());
	}
});

/**
 * @type {*}
 */
var data = {
	__APP__: null,
	iAjaxErrorCount: 0,
	iTokenErrorCount: 0,
	aBootstrapDropdowns: [],
	iMessageBodyCacheCount: 0,
	bUnload: false
};

/***/ },
/* 8 */
/* exports provided: trigger, i18n, i18nToNodes, initNotificationLanguage, initOnStartOrLangChange, getNotification, getNotificationFromResponse, getUploadErrorDescByCode, reload */
/* all exports used */
/*!**********************************!*\
  !*** ./dev/Common/Translator.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Momentor__ = __webpack_require__(/*! Common/Momentor */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Promise__ = __webpack_require__(/*! Promise */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_Promise__);
/* harmony export (binding) */ __webpack_require__.d(exports, "trigger", function() { return trigger; });
/* harmony export (immutable) */ exports["i18n"] = i18n;
/* harmony export (immutable) */ exports["i18nToNodes"] = i18nToNodes;
/* harmony export (immutable) */ exports["initNotificationLanguage"] = initNotificationLanguage;
/* harmony export (immutable) */ exports["initOnStartOrLangChange"] = initOnStartOrLangChange;
/* harmony export (immutable) */ exports["getNotification"] = getNotification;
/* harmony export (immutable) */ exports["getNotificationFromResponse"] = getNotificationFromResponse;
/* harmony export (immutable) */ exports["getUploadErrorDescByCode"] = getUploadErrorDescByCode;
/* harmony export (immutable) */ exports["reload"] = reload;












var I18N_DATA = __WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopI18N || {};

var I18N_NOTIFICATION_DATA = {};
var I18N_NOTIFICATION_MAP = [[__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].InvalidToken, 'NOTIFICATIONS/INVALID_TOKEN'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AuthError, 'NOTIFICATIONS/AUTH_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccessError, 'NOTIFICATIONS/ACCESS_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].ConnectionError, 'NOTIFICATIONS/CONNECTION_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CaptchaError, 'NOTIFICATIONS/CAPTCHA_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].SocialFacebookLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_FACEBOOK_LOGIN_ACCESS_DISABLE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].SocialTwitterLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_TWITTER_LOGIN_ACCESS_DISABLE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].SocialGoogleLoginAccessDisable, 'NOTIFICATIONS/SOCIAL_GOOGLE_LOGIN_ACCESS_DISABLE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].DomainNotAllowed, 'NOTIFICATIONS/DOMAIN_NOT_ALLOWED'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccountNotAllowed, 'NOTIFICATIONS/ACCOUNT_NOT_ALLOWED'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccountTwoFactorAuthRequired, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_REQUIRED'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccountTwoFactorAuthError, 'NOTIFICATIONS/ACCOUNT_TWO_FACTOR_AUTH_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CouldNotSaveNewPassword, 'NOTIFICATIONS/COULD_NOT_SAVE_NEW_PASSWORD'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CurrentPasswordIncorrect, 'NOTIFICATIONS/CURRENT_PASSWORD_INCORRECT'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].NewPasswordShort, 'NOTIFICATIONS/NEW_PASSWORD_SHORT'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].NewPasswordWeak, 'NOTIFICATIONS/NEW_PASSWORD_WEAK'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].NewPasswordForbidden, 'NOTIFICATIONS/NEW_PASSWORD_FORBIDDENT'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].ContactsSyncError, 'NOTIFICATIONS/CONTACTS_SYNC_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantGetMessageList, 'NOTIFICATIONS/CANT_GET_MESSAGE_LIST'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantGetMessage, 'NOTIFICATIONS/CANT_GET_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantDeleteMessage, 'NOTIFICATIONS/CANT_DELETE_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantMoveMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantCopyMessage, 'NOTIFICATIONS/CANT_MOVE_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSaveMessage, 'NOTIFICATIONS/CANT_SAVE_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSendMessage, 'NOTIFICATIONS/CANT_SEND_MESSAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].InvalidRecipients, 'NOTIFICATIONS/INVALID_RECIPIENTS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSaveFilters, 'NOTIFICATIONS/CANT_SAVE_FILTERS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantGetFilters, 'NOTIFICATIONS/CANT_GET_FILTERS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].FiltersAreNotCorrect, 'NOTIFICATIONS/FILTERS_ARE_NOT_CORRECT'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantCreateFolder, 'NOTIFICATIONS/CANT_CREATE_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantRenameFolder, 'NOTIFICATIONS/CANT_RENAME_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantDeleteFolder, 'NOTIFICATIONS/CANT_DELETE_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantDeleteNonEmptyFolder, 'NOTIFICATIONS/CANT_DELETE_NON_EMPTY_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSubscribeFolder, 'NOTIFICATIONS/CANT_SUBSCRIBE_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantUnsubscribeFolder, 'NOTIFICATIONS/CANT_UNSUBSCRIBE_FOLDER'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSaveSettings, 'NOTIFICATIONS/CANT_SAVE_SETTINGS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantSavePluginSettings, 'NOTIFICATIONS/CANT_SAVE_PLUGIN_SETTINGS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].DomainAlreadyExists, 'NOTIFICATIONS/DOMAIN_ALREADY_EXISTS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantInstallPackage, 'NOTIFICATIONS/CANT_INSTALL_PACKAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantDeletePackage, 'NOTIFICATIONS/CANT_DELETE_PACKAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].InvalidPluginPackage, 'NOTIFICATIONS/INVALID_PLUGIN_PACKAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].UnsupportedPluginPackage, 'NOTIFICATIONS/UNSUPPORTED_PLUGIN_PACKAGE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].LicensingServerIsUnavailable, 'NOTIFICATIONS/LICENSING_SERVER_IS_UNAVAILABLE'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].LicensingExpired, 'NOTIFICATIONS/LICENSING_EXPIRED'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].LicensingBanned, 'NOTIFICATIONS/LICENSING_BANNED'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].DemoSendMessageError, 'NOTIFICATIONS/DEMO_SEND_MESSAGE_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].DemoAccountError, 'NOTIFICATIONS/DEMO_ACCOUNT_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccountAlreadyExists, 'NOTIFICATIONS/ACCOUNT_ALREADY_EXISTS'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].AccountDoesNotExist, 'NOTIFICATIONS/ACCOUNT_DOES_NOT_EXIST'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].MailServerError, 'NOTIFICATIONS/MAIL_SERVER_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].InvalidInputArgument, 'NOTIFICATIONS/INVALID_INPUT_ARGUMENT'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].UnknownNotification, 'NOTIFICATIONS/UNKNOWN_ERROR'], [__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].UnknownError, 'NOTIFICATIONS/UNKNOWN_ERROR']];

var trigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

/**
 * @param {string} key
 * @param {Object=} valueList
 * @param {string=} defaulValue
 * @returns {string}
 */
function i18n(key, valueList, defaulValue) {
	var valueName = '',
	    result = I18N_DATA[key];

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(result)) {
		result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(defaulValue) ? key : defaulValue;
	}

	if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(valueList) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isNull"])(valueList)) {
		for (valueName in valueList) {
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["has"])(valueList, valueName)) {
				result = result.replace('%' + valueName + '%', valueList[valueName]);
			}
		}
	}

	return result;
}

var i18nToNode = function i18nToNode(element) {

	var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element),
	    key = $el.data('i18n');

	if (key) {
		if ('[' === key.substr(0, 1)) {
			switch (key.substr(0, 6)) {
				case '[html]':
					$el.html(i18n(key.substr(6)));
					break;
				case '[place':
					$el.attr('placeholder', i18n(key.substr(13)));
					break;
				case '[title':
					$el.attr('title', i18n(key.substr(7)));
					break;
				// no default
			}
		} else {
			$el.text(i18n(key));
		}
	}
};

/**
 * @param {Object} elements
 * @param {boolean=} animate = false
 */
function i18nToNodes(elements) {
	var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	__WEBPACK_IMPORTED_MODULE_1_____default.a.defer(function () {

		__WEBPACK_IMPORTED_MODULE_2_____default()('[data-i18n]', elements).each(function (index, item) {
			i18nToNode(item);
		});

		if (animate && __WEBPACK_IMPORTED_MODULE_6_Common_Globals__["bAnimationSupported"]) {
			__WEBPACK_IMPORTED_MODULE_2_____default()('.i18n-animation[data-i18n]', elements).letterfx({
				'fx': 'fall fade',
				'backwards': false,
				'timing': 50,
				'fx_duration': '50ms',
				'letter_end': 'restore',
				'element_end': 'restore'
			});
		}
	});
}

var reloadData = function reloadData() {
	if (__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopI18N) {
		I18N_DATA = __WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopI18N || {};

		i18nToNodes(__WEBPACK_IMPORTED_MODULE_0_window___default.a.document, true);

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Momentor__["reload"])();
		trigger(!trigger());
	}

	__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopI18N = null;
};

/**
 * @returns {void}
 */
function initNotificationLanguage() {
	I18N_NOTIFICATION_MAP.forEach(function (item) {
		I18N_NOTIFICATION_DATA[item[0]] = i18n(item[1]);
	});
}

/**
 * @param {Function} startCallback
 * @param {Function=} langCallback = null
 */
function initOnStartOrLangChange(startCallback) {
	var langCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	if (startCallback) {
		startCallback();
	}

	if (langCallback) {
		trigger.subscribe(function () {
			if (startCallback) {
				startCallback();
			}
			if (langCallback) {
				langCallback();
			}
		});
	} else if (startCallback) {
		trigger.subscribe(startCallback);
	}
}

/**
 * @param {number} code
 * @param {*=} message = ''
 * @param {*=} defCode = null
 * @returns {string}
 */
function getNotification(code) {
	var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	var defCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	code = __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(code, 10) || 0;
	if (__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].ClientViewError === code && message) {
		return message;
	}

	defCode = defCode ? __WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(defCode, 10) || 0 : 0;
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(I18N_NOTIFICATION_DATA[code]) ? defCode && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(I18N_NOTIFICATION_DATA[defCode]) ? I18N_NOTIFICATION_DATA[defCode] : '' : I18N_NOTIFICATION_DATA[code];
}

/**
 * @param {object} response
 * @param {number} defCode = Notification.UnknownNotification
 * @returns {string}
 */
function getNotificationFromResponse(response) {
	var defCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].UnknownNotification;

	return response && response.ErrorCode ? getNotification(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["pInt"])(response.ErrorCode), response.ErrorMessage || '') : getNotification(defCode);
}

/**
 * @param {*} code
 * @returns {string}
 */
function getUploadErrorDescByCode(code) {
	var result = '';
	switch (__WEBPACK_IMPORTED_MODULE_0_window___default.a.parseInt(code, 10) || 0) {
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].FileIsTooBig:
			result = i18n('UPLOAD/ERROR_FILE_IS_TOO_BIG');
			break;
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].FilePartiallyUploaded:
			result = i18n('UPLOAD/ERROR_FILE_PARTIALLY_UPLOADED');
			break;
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].FileNoUploaded:
			result = i18n('UPLOAD/ERROR_NO_FILE_UPLOADED');
			break;
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].MissingTempFolder:
			result = i18n('UPLOAD/ERROR_MISSING_TEMP_FOLDER');
			break;
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].FileOnSaveingError:
			result = i18n('UPLOAD/ERROR_ON_SAVING_FILE');
			break;
		case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["UploadErrorCode"].FileType:
			result = i18n('UPLOAD/ERROR_FILE_TYPE');
			break;
		default:
			result = i18n('UPLOAD/ERROR_UNKNOWN');
			break;
	}

	return result;
}

/**
 * @param {boolean} admin
 * @param {string} language
 */
function reload(admin, language) {
	var start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["microtime"])();

	__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].addClass('rl-changing-language');

	return new __WEBPACK_IMPORTED_MODULE_9_Promise___default.a(function (resolve, reject) {
		__WEBPACK_IMPORTED_MODULE_2_____default.a.ajax({
			url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Links__["a" /* langLink */])(language, admin),
			dataType: 'script',
			cache: true
		}).then(function () {
			__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {

				reloadData();

				var isRtl = -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["inArray"])((language || '').toLowerCase(), ['ar', 'ar_sa', 'he', 'he_he', 'ur', 'ur_ir']);

				__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].removeClass('rl-changing-language').removeClass('rl-rtl rl-ltr')
				//					.attr('dir', isRtl ? 'rtl' : 'ltr')
				.addClass(isRtl ? 'rl-rtl' : 'rl-ltr');

				resolve();
			}, 500 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["microtime"])() - start ? 1 : 500);
		}, function () {
			__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].removeClass('rl-changing-language');
			__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopI18N = null;
			reject();
		});
	});
}

// init section
__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].addClass('rl-' + (__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].attr('dir') || 'ltr'));

/***/ },
/* 9 */
/* exports provided: ViewType, hideLoading, createCommand, addSettingsViewModel, removeSettingsViewModel, disableSettingsViewModel, routeOff, routeOn, screen, getScreenPopup, hideScreenPopup, vmRunHook, buildViewModel, showScreenPopup, warmUpScreenPopup, isPopupVisible, screenOnRoute, startScreens, setHash, commandDecorator, popup, viewDecorator, view, viewModel, popupDecorator, command */
/* all exports used */
/*!****************************!*\
  !*** ./dev/Knoin/Knoin.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hasher__ = __webpack_require__(/*! hasher */ 174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hasher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hasher__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crossroads__ = __webpack_require__(/*! crossroads */ 91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crossroads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crossroads__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "ViewType", function() { return ViewType; });
/* harmony export (immutable) */ exports["hideLoading"] = hideLoading;
/* harmony export (immutable) */ exports["createCommand"] = createCommand;
/* harmony export (immutable) */ exports["addSettingsViewModel"] = addSettingsViewModel;
/* harmony export (immutable) */ exports["removeSettingsViewModel"] = removeSettingsViewModel;
/* harmony export (immutable) */ exports["disableSettingsViewModel"] = disableSettingsViewModel;
/* harmony export (immutable) */ exports["routeOff"] = routeOff;
/* harmony export (immutable) */ exports["routeOn"] = routeOn;
/* harmony export (immutable) */ exports["screen"] = screen;
/* harmony export (immutable) */ exports["getScreenPopup"] = getScreenPopup;
/* harmony export (immutable) */ exports["hideScreenPopup"] = hideScreenPopup;
/* harmony export (immutable) */ exports["vmRunHook"] = vmRunHook;
/* harmony export (immutable) */ exports["buildViewModel"] = buildViewModel;
/* harmony export (immutable) */ exports["showScreenPopup"] = showScreenPopup;
/* harmony export (immutable) */ exports["warmUpScreenPopup"] = warmUpScreenPopup;
/* harmony export (immutable) */ exports["isPopupVisible"] = isPopupVisible;
/* harmony export (immutable) */ exports["screenOnRoute"] = screenOnRoute;
/* harmony export (immutable) */ exports["startScreens"] = startScreens;
/* harmony export (immutable) */ exports["setHash"] = setHash;
/* harmony export (binding) */ __webpack_require__.d(exports, "commandDecorator", function() { return commandDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "popup", function() { return popupDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "viewDecorator", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "view", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "viewModel", function() { return viewDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "popupDecorator", function() { return popupDecorator; });
/* harmony export (binding) */ __webpack_require__.d(exports, "command", function() { return commandDecorator; });












var currentScreen = null,
    defaultScreenName = '';

var SCREENS = {};

var ViewType = {
	Popup: 'Popups',
	Left: 'Left',
	Right: 'Right',
	Center: 'Center'
};

/**
 * @returns {void}
 */
function hideLoading() {
	__WEBPACK_IMPORTED_MODULE_1_____default()('#rl-content').addClass('rl-content-show');
	__WEBPACK_IMPORTED_MODULE_1_____default()('#rl-loading').hide().remove();
}

/**
 * @param {Function} fExecute
 * @param {(Function|boolean|null)=} fCanExecute = true
 * @returns {Function}
 */
function createCommand(fExecute) {
	var fCanExecute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["createCommandLegacy"])(null, fExecute, fCanExecute);
}

/**
 * @param {Function} SettingsViewModelClass
 * @param {string} template
 * @param {string} labelName
 * @param {string} route
 * @param {boolean=} isDefault = false
 * @returns {void}
 */
function addSettingsViewModel(SettingsViewModelClass, template, labelName, route) {
	var isDefault = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	SettingsViewModelClass.__rlSettingsData = {
		Label: labelName,
		Template: template,
		Route: route,
		IsDefault: !!isDefault
	};

	__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"].settings.push(SettingsViewModelClass);
}

/**
 * @param {Function} SettingsViewModelClass
 * @returns {void}
 */
function removeSettingsViewModel(SettingsViewModelClass) {
	__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-removed'].push(SettingsViewModelClass);
}

/**
 * @param {Function} SettingsViewModelClass
 * @returns {void}
 */
function disableSettingsViewModel(SettingsViewModelClass) {
	__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-disabled'].push(SettingsViewModelClass);
}

/**
 * @returns {void}
 */
function routeOff() {
	__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.active = false;
}

/**
 * @returns {void}
 */
function routeOn() {
	__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.active = true;
}

/**
 * @param {string} screenName
 * @returns {?Object}
 */
function screen(screenName) {
	return '' !== screenName && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isUnd"])(SCREENS[screenName]) ? SCREENS[screenName] : null;
}

/**
 * @param {Function} ViewModelClassToShow
 * @returns {Function|null}
 */
function getScreenPopup(PopuViewModelClass) {
	var result = null;
	if (PopuViewModelClass) {
		result = PopuViewModelClass;
		if (PopuViewModelClass.default) {
			result = PopuViewModelClass.default;
		}
	}

	return result;
}

/**
 * @param {Function} ViewModelClassToHide
 * @returns {void}
 */
function hideScreenPopup(ViewModelClassToHide) {
	var ModalView = getScreenPopup(ViewModelClassToHide);
	if (ModalView && ModalView.__vm && ModalView.__dom) {
		ModalView.__vm.modalVisibility(false);
	}
}

/**
 * @param {string} hookName
 * @param {Function} ViewModelClass
 * @param {mixed=} params = null
 */
function vmRunHook(hookName, ViewModelClass) {
	var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	__WEBPACK_IMPORTED_MODULE_0_____default.a.each(ViewModelClass.__names, function (name) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Plugins__["a" /* runHook */])(hookName, [name, ViewModelClass.__vm, params]);
	});
}

/**
 * @param {Function} ViewModelClass
 * @param {Object=} vmScreen
 * @returns {*}
 */
function buildViewModel(ViewModelClass, vmScreen) {
	if (ViewModelClass && !ViewModelClass.__builded) {
		(function () {
			var vmDom = null;
			var vm = new ViewModelClass(vmScreen),
			    position = ViewModelClass.__type || '',
			    vmPlace = position ? __WEBPACK_IMPORTED_MODULE_1_____default()('#rl-content #rl-' + position.toLowerCase()) : null;

			ViewModelClass.__builded = true;
			ViewModelClass.__vm = vm;

			vm.onShowTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
			vm.onHideTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);

			vm.viewModelName = ViewModelClass.__name;
			vm.viewModelNames = ViewModelClass.__names;
			vm.viewModelTemplateID = ViewModelClass.__templateID;
			vm.viewModelPosition = ViewModelClass.__type;

			if (vmPlace && 1 === vmPlace.length) {
				vmDom = __WEBPACK_IMPORTED_MODULE_1_____default()('<div></div>').addClass('rl-view-model').addClass('RL-' + vm.viewModelTemplateID).hide();
				vmDom.appendTo(vmPlace);

				vm.viewModelDom = vmDom;
				ViewModelClass.__dom = vmDom;

				if (ViewType.Popup === position) {
					vm.cancelCommand = vm.closeCommand = createCommand(function () {
						hideScreenPopup(ViewModelClass);
					});

					vm.modalVisibility.subscribe(function (value) {
						if (value) {
							vm.viewModelDom.show();
							vm.storeAndSetKeyScope();

							__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["popupVisibilityNames"].push(vm.viewModelName);
							vm.viewModelDom.css('z-index', 3000 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["popupVisibilityNames"])().length + 10);

							if (vm.onShowTrigger) {
								vm.onShowTrigger(!vm.onShowTrigger());
							}

							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vm, 'onShowWithDelay', [], 500);
						} else {
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vm, 'onHide');
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vm, 'onHideWithDelay', [], 500);

							if (vm.onHideTrigger) {
								vm.onHideTrigger(!vm.onHideTrigger());
							}

							vm.restoreKeyScope();

							vmRunHook('view-model-on-hide', ViewModelClass);

							__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["popupVisibilityNames"].remove(vm.viewModelName);
							vm.viewModelDom.css('z-index', 2000);

							__WEBPACK_IMPORTED_MODULE_0_____default.a.delay(function () {
								return vm.viewModelDom.hide();
							}, 300);
						}
					});
				}

				vmRunHook('view-model-pre-build', ViewModelClass, vmDom);

				__WEBPACK_IMPORTED_MODULE_2_ko___default.a.applyBindingAccessorsToNode(vmDom[0], {
					translatorInit: true,
					template: function template() {
						return { name: vm.viewModelTemplateID };
					}
				}, vm);

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vm, 'onBuild', [vmDom]);
				if (vm && ViewType.Popup === position) {
					vm.registerPopupKeyDown();
				}

				vmRunHook('view-model-post-build', ViewModelClass, vmDom);
			} else {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["log"])('Cannot find view model position: ' + position);
			}
		})();
	}

	return ViewModelClass ? ViewModelClass.__vm : null;
}

/**
 * @param {Function} ViewModelClassToShow
 * @param {Array=} params
 * @returns {void}
 */
function showScreenPopup(ViewModelClassToShow) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	var ModalView = getScreenPopup(ViewModelClassToShow);
	if (ModalView) {
		buildViewModel(ModalView);

		if (ModalView.__vm && ModalView.__dom) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ModalView.__vm, 'onBeforeShow', params || []);

			ModalView.__vm.modalVisibility(true);

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ModalView.__vm, 'onShow', params || []);

			vmRunHook('view-model-on-show', ModalView, params || []);
		}
	}
}

/**
 * @param {Function} ViewModelClassToShow
 * @returns {void}
 */
function warmUpScreenPopup(ViewModelClassToShow) {
	var ModalView = getScreenPopup(ViewModelClassToShow);
	if (ModalView) {
		buildViewModel(ModalView);

		if (ModalView.__vm && ModalView.__dom) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ModalView.__vm, 'onWarmUp');
		}
	}
}

/**
 * @param {Function} ViewModelClassToShow
 * @returns {boolean}
 */
function isPopupVisible(ViewModelClassToShow) {
	var ModalView = getScreenPopup(ViewModelClassToShow);
	return ModalView && ModalView.__vm ? ModalView.__vm.modalVisibility() : false;
}

/**
 * @param {string} screenName
 * @param {string} subPart
 * @returns {void}
 */
function screenOnRoute(screenName, subPart) {
	var vmScreen = null,
	    isSameScreen = false,
	    cross = null;

	if ('' === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["pString"])(screenName)) {
		screenName = defaultScreenName;
	}

	if ('' !== screenName) {
		vmScreen = screen(screenName);
		if (!vmScreen) {
			vmScreen = screen(defaultScreenName);
			if (vmScreen) {
				subPart = screenName + '/' + subPart;
				screenName = defaultScreenName;
			}
		}

		if (vmScreen && vmScreen.__started) {
			isSameScreen = currentScreen && vmScreen === currentScreen;

			if (!vmScreen.__builded) {
				vmScreen.__builded = true;

				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isNonEmptyArray"])(vmScreen.viewModels())) {
					__WEBPACK_IMPORTED_MODULE_0_____default.a.each(vmScreen.viewModels(), function (ViewModelClass) {
						buildViewModel(ViewModelClass, vmScreen);
					});
				}

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vmScreen, 'onBuild');
			}

			__WEBPACK_IMPORTED_MODULE_0_____default.a.defer(function () {
				// hide screen
				if (currentScreen && !isSameScreen) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(currentScreen, 'onHide');
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(currentScreen, 'onHideWithDelay', [], 500);

					if (currentScreen.onHideTrigger) {
						currentScreen.onHideTrigger(!currentScreen.onHideTrigger());
					}

					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isNonEmptyArray"])(currentScreen.viewModels())) {
						__WEBPACK_IMPORTED_MODULE_0_____default.a.each(currentScreen.viewModels(), function (ViewModelClass) {
							if (ViewModelClass.__vm && ViewModelClass.__dom && ViewType.Popup !== ViewModelClass.__vm.viewModelPosition) {
								ViewModelClass.__dom.hide();
								ViewModelClass.__vm.viewModelVisibility(false);

								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ViewModelClass.__vm, 'onHide');
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ViewModelClass.__vm, 'onHideWithDelay', [], 500);

								if (ViewModelClass.__vm.onHideTrigger) {
									ViewModelClass.__vm.onHideTrigger(!ViewModelClass.__vm.onHideTrigger());
								}
							}
						});
					}
				}
				// --

				currentScreen = vmScreen;

				// show screen
				if (currentScreen && !isSameScreen) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(currentScreen, 'onShow');
					if (currentScreen.onShowTrigger) {
						currentScreen.onShowTrigger(!currentScreen.onShowTrigger());
					}

					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Plugins__["a" /* runHook */])('screen-on-show', [currentScreen.screenName(), currentScreen]);

					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isNonEmptyArray"])(currentScreen.viewModels())) {
						__WEBPACK_IMPORTED_MODULE_0_____default.a.each(currentScreen.viewModels(), function (ViewModelClass) {

							if (ViewModelClass.__vm && ViewModelClass.__dom && ViewType.Popup !== ViewModelClass.__vm.viewModelPosition) {
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ViewModelClass.__vm, 'onBeforeShow');

								ViewModelClass.__dom.show();
								ViewModelClass.__vm.viewModelVisibility(true);

								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ViewModelClass.__vm, 'onShow');
								if (ViewModelClass.__vm.onShowTrigger) {
									ViewModelClass.__vm.onShowTrigger(!ViewModelClass.__vm.onShowTrigger());
								}

								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(ViewModelClass.__vm, 'onShowWithDelay', [], 200);
								vmRunHook('view-model-on-show', ViewModelClass);
							}
						});
					}
				}
				// --

				cross = vmScreen && vmScreen.__cross ? vmScreen.__cross() : null;
				if (cross) {
					cross.parse(subPart);
				}
			});
		}
	}
}

/**
 * @param {Array} screensClasses
 * @returns {void}
 */
function startScreens(screensClasses) {
	__WEBPACK_IMPORTED_MODULE_0_____default.a.each(screensClasses, function (CScreen) {
		if (CScreen) {
			var vmScreen = new CScreen(),
			    screenName = vmScreen ? vmScreen.screenName() : '';

			if (vmScreen && '' !== screenName) {
				if ('' === defaultScreenName) {
					defaultScreenName = screenName;
				}

				SCREENS[screenName] = vmScreen;
			}
		}
	});

	__WEBPACK_IMPORTED_MODULE_0_____default.a.each(SCREENS, function (vmScreen) {
		if (vmScreen && !vmScreen.__started && vmScreen.__start) {
			vmScreen.__started = true;
			vmScreen.__start();

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Plugins__["a" /* runHook */])('screen-pre-start', [vmScreen.screenName(), vmScreen]);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(vmScreen, 'onStart');
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Plugins__["a" /* runHook */])('screen-post-start', [vmScreen.screenName(), vmScreen]);
		}
	});

	var cross = __WEBPACK_IMPORTED_MODULE_4_crossroads___default.a.create();
	cross.addRoute(/^([a-zA-Z0-9\-]*)\/?(.*)$/, screenOnRoute);

	__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.initialized.add(cross.parse, cross);
	__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.add(cross.parse, cross);
	__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.init();

	__WEBPACK_IMPORTED_MODULE_0_____default.a.delay(function () {
		return __WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].removeClass('rl-started-trigger').addClass('rl-started');
	}, 100);
	__WEBPACK_IMPORTED_MODULE_0_____default.a.delay(function () {
		return __WEBPACK_IMPORTED_MODULE_6_Common_Globals__["$html"].addClass('rl-started-delay');
	}, 200);
}

/**
 * @param {string} sHash
 * @param {boolean=} silence = false
 * @param {boolean=} replace = false
 * @returns {void}
 */
function setHash(hash) {
	var silence = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	hash = '#' === hash.substr(0, 1) ? hash.substr(1) : hash;
	hash = '/' === hash.substr(0, 1) ? hash.substr(1) : hash;

	var cmd = replace ? 'replaceHash' : 'setHash';

	if (silence) {
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.active = false;
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a[cmd](hash);
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.active = true;
	} else {
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.changed.active = true;
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a[cmd](hash);
		__WEBPACK_IMPORTED_MODULE_3_hasher___default.a.setHash(hash);
	}
}

/**
 * @param {Object} params
 * @returns {Function}
 */
function viewDecorator(_ref) {
	var name = _ref.name;
	var type = _ref.type;
	var templateID = _ref.templateID;

	return function (target) {
		if (target) {
			if (name) {
				if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isArray"])(name)) {
					target.__names = name;
				} else {
					target.__names = [name];
				}

				target.__name = target.__names[0];
			}

			if (type) {
				target.__type = type;
			}

			if (templateID) {
				target.__templateID = templateID;
			}
		}
	};
}

/**
 * @param {Object} params
 * @returns {Function}
 */
function popupDecorator(_ref2) {
	var name = _ref2.name;
	var templateID = _ref2.templateID;

	return viewDecorator({ name: name, type: ViewType.Popup, templateID: templateID });
}

/**
 * @param {Function} canExecute
 * @returns {Function}
 */
function commandDecorator() {
	var canExecute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	return function (target, key, descriptor) {

		if (!key || !key.match(/Command$/)) {
			throw new Error('name "' + key + '" should end with Command suffix');
		}

		var value = descriptor.value || descriptor.initializer(),
		    normCanExecute = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isFunc"])(canExecute) ? canExecute : function () {
			return !!canExecute;
		};

		descriptor.value = function () {
			if (normCanExecute.call(this, this)) {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				value.apply(this, args);
			}

			return false;
		};

		descriptor.value.__realCanExecute = normCanExecute;
		descriptor.value.isCommand = true;

		return descriptor;
	};
}



/***/ },
/* 10 */
/* exports provided: settingsGet, settingsSet, appSettingsGet, capa */
/* all exports used */
/*!*********************************!*\
  !*** ./dev/Storage/Settings.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony export (immutable) */ exports["settingsGet"] = settingsGet;
/* harmony export (immutable) */ exports["settingsSet"] = settingsSet;
/* harmony export (immutable) */ exports["appSettingsGet"] = appSettingsGet;
/* harmony export (immutable) */ exports["capa"] = capa;




var SETTINGS = __WEBPACK_IMPORTED_MODULE_0_window___default.a.__rlah_data() || null;
SETTINGS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"])(SETTINGS) ? SETTINGS : {};

var APP_SETTINGS = SETTINGS.System || null;
APP_SETTINGS = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"])(APP_SETTINGS) ? APP_SETTINGS : {};

/**
 * @param {string} name
 * @returns {*}
 */
function settingsGet(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(SETTINGS[name]) ? null : SETTINGS[name];
}

/**
 * @param {string} name
 * @param {*} value
 */
function settingsSet(name, value) {
  SETTINGS[name] = value;
}

/**
 * @param {string} name
 * @returns {*}
 */
function appSettingsGet(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(APP_SETTINGS[name]) ? null : APP_SETTINGS[name];
}

/**
 * @param {string} name
 * @returns {boolean}
 */
function capa(name) {
  var values = settingsGet('Capa');
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"])(values) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"])(name) && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["inArray"])(name, values);
}

/***/ },
/* 11 */
/* unknown exports provided */
/* exports used: default */
/*!*************************!*\
  !*** external "window" ***!
  \*************************/
/***/ function(module, exports) {

module.exports = window;

/***/ },
/* 12 */
/* unknown exports provided */
/* exports used: default */
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/***/ function(module, exports) {

module.exports = window.jQuery;

/***/ },
/* 13 */
/* exports provided: AbstractViewNext, default */
/* exports used: AbstractViewNext */
/*!***************************************!*\
  !*** ./dev/Knoin/AbstractViewNext.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractViewNext; });
/* unused harmony export default */








var AbstractViewNext = function () {
	function AbstractViewNext() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractViewNext);

		this.bDisabeCloseOnEsc = false;
		this.sDefaultKeyScope = __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["KeyState"].None;
		this.sCurrentKeyScope = __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["KeyState"].None;
		this.viewModelVisibility = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.modalVisibility = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ rateLimit: 0 });
		this.viewModelName = '';
		this.viewModelNames = [];
		this.viewModelDom = null;
	}

	/**
  * @returns {void}
  */
	AbstractViewNext.prototype.storeAndSetKeyScope = function storeAndSetKeyScope() {
		this.sCurrentKeyScope = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["keyScope"])();
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["keyScope"])(this.sDefaultKeyScope);
	};

	/**
  * @returns {void}
  */


	AbstractViewNext.prototype.restoreKeyScope = function restoreKeyScope() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["keyScope"])(this.sCurrentKeyScope);
	};

	/**
  * @returns {void}
  */


	AbstractViewNext.prototype.registerPopupKeyDown = function registerPopupKeyDown() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_4_Common_Globals__["$win"].on('keydown', function (event) {
			if (event && _this.modalVisibility && _this.modalVisibility()) {
				if (!_this.bDisabeCloseOnEsc && __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["EventKeyCode"].Esc === event.keyCode) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["delegateRun"])(_this, 'cancelCommand');
					return false;
				} else if (__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["EventKeyCode"].Backspace === event.keyCode && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["inFocus"])()) {
					return false;
				}
			}

			return true;
		});
	};

	AbstractViewNext.prototype.cancelCommand = function cancelCommand() {}; // eslint-disable-line no-empty-function


	AbstractViewNext.prototype.closeCommand = function closeCommand() {}; // eslint-disable-line no-empty-function


	return AbstractViewNext;
}();



/***/ },
/* 14 */
/* exports provided: populateAuthSuffix, subQueryPrefix, root, rootAdmin, rootUser, attachmentRaw, attachmentDownload, attachmentPreview, attachmentThumbnailPreview, attachmentPreviewAsPlain, attachmentFramed, serverRequest, upload, uploadContacts, uploadBackground, append, change, ajax, messageViewLink, messageDownloadLink, avatarLink, publicLink, userBackground, phpInfo, langLink, exportContactsVcf, exportContactsCsv, socialGoogle, socialTwitter, socialFacebook, staticPrefix, emptyContactPic, sound, notificationMailIcon, openPgpJs, openPgpWorkerJs, openPgpWorkerPath, themePreviewLink, inbox, settings, about, admin, mailBox */
/* exports used: langLink, ajax, settings, phpInfo, rootAdmin, populateAuthSuffix, rootUser, root, avatarLink, sound, attachmentDownload, attachmentPreview, attachmentThumbnailPreview, attachmentFramed, attachmentPreviewAsPlain, messageViewLink, messageDownloadLink, subQueryPrefix, change, socialFacebook, socialGoogle, socialTwitter, mailBox, notificationMailIcon, emptyContactPic, exportContactsVcf, exportContactsCsv, uploadContacts, upload, append, userBackground, themePreviewLink, uploadBackground, inbox, openPgpWorkerJs, openPgpJs */
/*!*****************************!*\
  !*** ./dev/Common/Links.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (immutable) */ exports["f"] = populateAuthSuffix;
/* harmony export (immutable) */ exports["r"] = subQueryPrefix;
/* harmony export (immutable) */ exports["h"] = root;
/* harmony export (immutable) */ exports["e"] = rootAdmin;
/* harmony export (immutable) */ exports["g"] = rootUser;
/* unused harmony export attachmentRaw */
/* harmony export (immutable) */ exports["k"] = attachmentDownload;
/* harmony export (immutable) */ exports["l"] = attachmentPreview;
/* harmony export (immutable) */ exports["m"] = attachmentThumbnailPreview;
/* harmony export (immutable) */ exports["o"] = attachmentPreviewAsPlain;
/* harmony export (immutable) */ exports["n"] = attachmentFramed;
/* unused harmony export serverRequest */
/* harmony export (immutable) */ exports["C"] = upload;
/* harmony export (immutable) */ exports["B"] = uploadContacts;
/* harmony export (immutable) */ exports["G"] = uploadBackground;
/* harmony export (immutable) */ exports["D"] = append;
/* harmony export (immutable) */ exports["s"] = change;
/* harmony export (immutable) */ exports["b"] = ajax;
/* harmony export (immutable) */ exports["p"] = messageViewLink;
/* harmony export (immutable) */ exports["q"] = messageDownloadLink;
/* harmony export (immutable) */ exports["i"] = avatarLink;
/* unused harmony export publicLink */
/* harmony export (immutable) */ exports["E"] = userBackground;
/* harmony export (immutable) */ exports["d"] = phpInfo;
/* harmony export (immutable) */ exports["a"] = langLink;
/* harmony export (immutable) */ exports["z"] = exportContactsVcf;
/* harmony export (immutable) */ exports["A"] = exportContactsCsv;
/* harmony export (immutable) */ exports["u"] = socialGoogle;
/* harmony export (immutable) */ exports["v"] = socialTwitter;
/* harmony export (immutable) */ exports["t"] = socialFacebook;
/* unused harmony export staticPrefix */
/* harmony export (immutable) */ exports["y"] = emptyContactPic;
/* harmony export (immutable) */ exports["j"] = sound;
/* harmony export (immutable) */ exports["x"] = notificationMailIcon;
/* harmony export (immutable) */ exports["J"] = openPgpJs;
/* harmony export (immutable) */ exports["I"] = openPgpWorkerJs;
/* unused harmony export openPgpWorkerPath */
/* harmony export (immutable) */ exports["F"] = themePreviewLink;
/* harmony export (immutable) */ exports["H"] = inbox;
/* harmony export (immutable) */ exports["c"] = settings;
/* unused harmony export about */
/* unused harmony export admin */
/* harmony export (immutable) */ exports["w"] = mailBox;





var ROOT = './',
    HASH_PREFIX = '#/',
    SERVER_PREFIX = './?',
    SUB_QUERY_PREFIX = '&q[]=',
    VERSION = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('version'),
    IS_MOBILE = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('mobile'),
    WEB_PREFIX = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('webPath') || '',
    VERSION_PREFIX = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('webVersionPath') || 'rainloop/v/' + VERSION + '/',
    STATIC_PREFIX = VERSION_PREFIX + 'static/',
    ADMIN_HOST_USE = !!__WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('adminHostUse'),
    ADMIN_PATH = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["appSettingsGet"]('adminPath') || 'admin';

var AUTH_PREFIX = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["settingsGet"]('AuthAccountHash') || '0';

/**
 * @returns {void}
 */
function populateAuthSuffix() {
  AUTH_PREFIX = __WEBPACK_IMPORTED_MODULE_2_Storage_Settings__["settingsGet"]('AuthAccountHash') || '0';
}

/**
 * @returns {string}
 */
function subQueryPrefix() {
  return SUB_QUERY_PREFIX;
}

/**
 * @param {string=} startupUrl
 * @returns {string}
 */
function root() {
  var startupUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return HASH_PREFIX + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"])(startupUrl);
}

/**
 * @returns {string}
 */
function rootAdmin() {
  return ADMIN_HOST_USE ? ROOT : SERVER_PREFIX + ADMIN_PATH;
}

/**
 * @returns {string}
 */
function rootUser() {
  return IS_MOBILE ? SERVER_PREFIX + '/Mobile/' : ROOT;
}

/**
 * @param {string} type
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentRaw(type, download, customSpecSuffix) {
  customSpecSuffix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(customSpecSuffix) ? AUTH_PREFIX : customSpecSuffix;
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + customSpecSuffix + '/' + type + '/' + SUB_QUERY_PREFIX + '/' + download;
}

/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentDownload(download, customSpecSuffix) {
  return attachmentRaw('Download', download, customSpecSuffix);
}

/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentPreview(download, customSpecSuffix) {
  return attachmentRaw('View', download, customSpecSuffix);
}

/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentThumbnailPreview(download, customSpecSuffix) {
  return attachmentRaw('ViewThumbnail', download, customSpecSuffix);
}

/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentPreviewAsPlain(download, customSpecSuffix) {
  return attachmentRaw('ViewAsPlain', download, customSpecSuffix);
}

/**
 * @param {string} download
 * @param {string=} customSpecSuffix
 * @returns {string}
 */
function attachmentFramed(download, customSpecSuffix) {
  return attachmentRaw('FramedView', download, customSpecSuffix);
}

/**
 * @param {string} type
 * @returns {string}
 */
function serverRequest(type) {
  return SERVER_PREFIX + '/' + type + '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/';
}

/**
 * @returns {string}
 */
function upload() {
  return serverRequest('Upload');
}

/**
 * @returns {string}
 */
function uploadContacts() {
  return serverRequest('UploadContacts');
}

/**
 * @returns {string}
 */
function uploadBackground() {
  return serverRequest('UploadBackground');
}

/**
 * @returns {string}
 */
function append() {
  return serverRequest('Append');
}

/**
 * @param {string} email
 * @returns {string}
 */
function change(email) {
  return serverRequest('Change' + (IS_MOBILE ? 'Mobile' : '')) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeURIComponent"])(email) + '/';
}

/**
 * @param {string} add
 * @returns {string}
 */
function ajax(add) {
  return serverRequest('Ajax') + add;
}

/**
 * @param {string} requestHash
 * @returns {string}
 */
function messageViewLink(requestHash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ViewAsPlain/' + SUB_QUERY_PREFIX + '/' + requestHash;
}

/**
 * @param {string} requestHash
 * @returns {string}
 */
function messageDownloadLink(requestHash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/Download/' + SUB_QUERY_PREFIX + '/' + requestHash;
}

/**
 * @param {string} email
 * @returns {string}
 */
function avatarLink(email) {
  return SERVER_PREFIX + '/Raw/0/Avatar/' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeURIComponent"])(email) + '/';
}

/**
 * @param {string} hash
 * @returns {string}
 */
function publicLink(hash) {
  return SERVER_PREFIX + '/Raw/0/Public/' + hash + '/';
}

/**
 * @param {string} hash
 * @returns {string}
 */
function userBackground(hash) {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/UserBackground/' + SUB_QUERY_PREFIX + '/' + hash;
}

/**
 * @returns {string}
 */
function phpInfo() {
  return SERVER_PREFIX + '/Info';
}

/**
 * @param {string} lang
 * @param {boolean} isAdmin
 * @returns {string}
 */
function langLink(lang, isAdmin) {
  return SERVER_PREFIX + '/Lang/0/' + (isAdmin ? 'Admin' : 'App') + '/' + __WEBPACK_IMPORTED_MODULE_0_window___default.a.encodeURI(lang) + '/' + VERSION + '/';
}

/**
 * @returns {string}
 */
function exportContactsVcf() {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ContactsVcf/';
}

/**
 * @returns {string}
 */
function exportContactsCsv() {
  return SERVER_PREFIX + '/Raw/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/ContactsCsv/';
}

/**
 * @param {boolean} xauth = false
 * @returns {string}
 */
function socialGoogle() {
  var xauth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return SERVER_PREFIX + 'SocialGoogle' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '') + (xauth ? '&xauth=1' : '');
}

/**
 * @returns {string}
 */
function socialTwitter() {
  return SERVER_PREFIX + 'SocialTwitter' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '');
}

/**
 * @returns {string}
 */
function socialFacebook() {
  return SERVER_PREFIX + 'SocialFacebook' + ('' !== AUTH_PREFIX ? '/' + SUB_QUERY_PREFIX + '/' + AUTH_PREFIX + '/' : '');
}

/**
 * @param {string} path
 * @returns {string}
 */
function staticPrefix(path) {
  return STATIC_PREFIX + path;
}

/**
 * @returns {string}
 */
function emptyContactPic() {
  return staticPrefix('css/images/empty-contact.png');
}

/**
 * @param {string} fileName
 * @returns {string}
 */
function sound(fileName) {
  return staticPrefix('sounds/' + fileName);
}

/**
 * @returns {string}
 */
function notificationMailIcon() {
  return staticPrefix('css/images/icom-message-notification.png');
}

/**
 * @returns {string}
 */
function openPgpJs() {
  return staticPrefix('js/min/openpgp.min.js');
}

/**
 * @returns {string}
 */
function openPgpWorkerJs() {
  return staticPrefix('js/min/openpgp.worker.min.js');
}

/**
 * @returns {string}
 */
function openPgpWorkerPath() {
  return staticPrefix('js/min/');
}

/**
 * @param {string} theme
 * @returns {string}
 */
function themePreviewLink(theme) {
  var prefix = VERSION_PREFIX;
  if ('@custom' === theme.substr(-7)) {
    theme = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(theme.substring(0, theme.length - 7));
    prefix = WEB_PREFIX;
  }

  return prefix + 'themes/' + __WEBPACK_IMPORTED_MODULE_0_window___default.a.encodeURI(theme) + '/images/preview.png';
}

/**
 * @param {string} inboxFolderName = 'INBOX'
 * @returns {string}
 */
function inbox() {
  var inboxFolderName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'INBOX';

  return HASH_PREFIX + 'mailbox/' + inboxFolderName;
}

/**
 * @param {string=} screenName = ''
 * @returns {string}
 */
function settings() {
  var screenName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return HASH_PREFIX + 'settings' + (screenName ? '/' + screenName : '');
}

/**
 * @returns {string}
 */
function about() {
  return HASH_PREFIX + 'about';
}

/**
 * @param {string} screenName
 * @returns {string}
 */
function admin(screenName) {
  var result = HASH_PREFIX;
  switch (screenName) {
    case 'AdminDomains':
      result += 'domains';
      break;
    case 'AdminSecurity':
      result += 'security';
      break;
    case 'AdminLicensing':
      result += 'licensing';
      break;
    // no default
  }

  return result;
}

/**
 * @param {string} folder
 * @param {number=} page = 1
 * @param {string=} search = ''
 * @param {string=} threadUid = ''
 * @returns {string}
 */
function mailBox(folder) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var search = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var threadUid = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isNormal"])(page) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pInt"])(page) : 1;
  search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"])(search);

  var result = HASH_PREFIX + 'mailbox/';

  if ('' !== folder) {
    var resultThreadUid = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pInt"])(threadUid);
    result += __WEBPACK_IMPORTED_MODULE_0_window___default.a.encodeURI(folder) + (0 < resultThreadUid ? '~' + resultThreadUid : '');
  }

  if (1 < page) {
    result = result.replace(/[\/]+$/, '');
    result += '/p' + page;
  }

  if ('' !== search) {
    result = result.replace(/[\/]+$/, '');
    result += '/' + __WEBPACK_IMPORTED_MODULE_0_window___default.a.encodeURI(search);
  }

  return result;
}

/***/ },
/* 15 */
/* unknown exports provided */
/* exports used: default */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 130), __esModule: true };

/***/ },
/* 16 */,
/* 17 */
/* exports provided: AbstractComponent, componentExportHelper */
/* exports used: AbstractComponent, componentExportHelper */
/*!***********************************!*\
  !*** ./dev/Component/Abstract.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return componentExportHelper; });






var AbstractComponent = function () {
	function AbstractComponent() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractComponent);

		this.disposable = [];
	}

	AbstractComponent.prototype.dispose = function dispose() {
		this.disposable.forEach(function (funcToDispose) {
			if (funcToDispose && funcToDispose.dispose) {
				funcToDispose.dispose();
			}
		});
	};

	return AbstractComponent;
}();

/**
 * @param {*} ClassObject
 * @param {string} templateID = ''
 * @returns {Object}
 */


var componentExportHelper = function componentExportHelper(ClassObject) {
	var templateID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	return {
		template: templateID ? { element: templateID } : '<b></b>',
		viewModel: {
			createViewModel: function createViewModel(params, componentInfo) {

				params = params || {};
				params.element = null;

				if (componentInfo && componentInfo.element) {
					params.component = componentInfo;
					params.element = __WEBPACK_IMPORTED_MODULE_1_____default()(componentInfo.element);

					__webpack_require__(/*! Common/Translator */ 8).i18nToNodes(params.element);

					if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"])(params.inline) && __WEBPACK_IMPORTED_MODULE_2_ko___default.a.unwrap(params.inline)) {
						params.element.css('display', 'inline-block');
					}
				}

				return new ClassObject(params);
			}
		}
	};
};



/***/ },
/* 18 */,
/* 19 */
/* unknown exports provided */
/* exports used: default */
/*!*****************************!*\
  !*** external "window.key" ***!
  \*****************************/
/***/ function(module, exports) {

module.exports = window.key;

/***/ },
/* 20 */
/* exports provided: MESSAGES_PER_PAGE, MESSAGES_PER_PAGE_VALUES, CONTACTS_PER_PAGE, DEFAULT_AJAX_TIMEOUT, SEARCH_AJAX_TIMEOUT, SEND_MESSAGE_AJAX_TIMEOUT, SAVE_MESSAGE_AJAX_TIMEOUT, CONTACTS_SYNC_AJAX_TIMEOUT, UNUSED_OPTION_VALUE, CLIENT_SIDE_STORAGE_INDEX_NAME, IMAP_DEFAULT_PORT, IMAP_DEFAULT_SECURE_PORT, SMTP_DEFAULT_PORT, SMTP_DEFAULT_SECURE_PORT, SIEVE_DEFAULT_PORT, MESSAGE_BODY_CACHE_LIMIT, AJAX_ERROR_LIMIT, TOKEN_ERROR_LIMIT, RAINLOOP_TRIAL_KEY, DATA_IMAGE_USER_DOT_PIC, DATA_IMAGE_TRANSP_PIC */
/* exports used: TOKEN_ERROR_LIMIT, AJAX_ERROR_LIMIT, DEFAULT_AJAX_TIMEOUT, IMAP_DEFAULT_PORT, SIEVE_DEFAULT_PORT, SMTP_DEFAULT_PORT, MESSAGES_PER_PAGE, MESSAGES_PER_PAGE_VALUES, UNUSED_OPTION_VALUE, CLIENT_SIDE_STORAGE_INDEX_NAME, CONTACTS_SYNC_AJAX_TIMEOUT, SEARCH_AJAX_TIMEOUT, SAVE_MESSAGE_AJAX_TIMEOUT, SEND_MESSAGE_AJAX_TIMEOUT, MESSAGE_BODY_CACHE_LIMIT, CONTACTS_PER_PAGE, DATA_IMAGE_USER_DOT_PIC */
/*!******************************!*\
  !*** ./dev/Common/Consts.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return MESSAGES_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "h", function() { return MESSAGES_PER_PAGE_VALUES; });
/* harmony export (binding) */ __webpack_require__.d(exports, "p", function() { return CONTACTS_PER_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DEFAULT_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "l", function() { return SEARCH_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "n", function() { return SEND_MESSAGE_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "m", function() { return SAVE_MESSAGE_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "k", function() { return CONTACTS_SYNC_AJAX_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "i", function() { return UNUSED_OPTION_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(exports, "j", function() { return CLIENT_SIDE_STORAGE_INDEX_NAME; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return IMAP_DEFAULT_PORT; });
/* unused harmony export IMAP_DEFAULT_SECURE_PORT */
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return SMTP_DEFAULT_PORT; });
/* unused harmony export SMTP_DEFAULT_SECURE_PORT */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return SIEVE_DEFAULT_PORT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "o", function() { return MESSAGE_BODY_CACHE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AJAX_ERROR_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TOKEN_ERROR_LIMIT; });
/* unused harmony export RAINLOOP_TRIAL_KEY */
/* harmony export (binding) */ __webpack_require__.d(exports, "q", function() { return DATA_IMAGE_USER_DOT_PIC; });
/* unused harmony export DATA_IMAGE_TRANSP_PIC */

var MESSAGES_PER_PAGE = 20;

var MESSAGES_PER_PAGE_VALUES = [10, 20, 30, 50, 100];

var CONTACTS_PER_PAGE = 50;

var DEFAULT_AJAX_TIMEOUT = 30000;

var SEARCH_AJAX_TIMEOUT = 300000;

var SEND_MESSAGE_AJAX_TIMEOUT = 300000;

var SAVE_MESSAGE_AJAX_TIMEOUT = 200000;

var CONTACTS_SYNC_AJAX_TIMEOUT = 200000;

var UNUSED_OPTION_VALUE = '__UNUSE__';

var CLIENT_SIDE_STORAGE_INDEX_NAME = 'rlcsc';

var IMAP_DEFAULT_PORT = 143;

var IMAP_DEFAULT_SECURE_PORT = 993;

var SMTP_DEFAULT_PORT = 25;

var SMTP_DEFAULT_SECURE_PORT = 465;

var SIEVE_DEFAULT_PORT = 4190;

var MESSAGE_BODY_CACHE_LIMIT = 15;

var AJAX_ERROR_LIMIT = 7;

var TOKEN_ERROR_LIMIT = 10;

var RAINLOOP_TRIAL_KEY = 'RAINLOOP-TRIAL-KEY';

/* eslint max-len: 0 */
var DATA_IMAGE_USER_DOT_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAHHklEQVRoQ7VZW08bVxCeXRuwIbTGXIwNtBBaqjwgVUiR8lDlbza9qe1DpVZ9aNQ/0KpPeaJK07SpcuEeCEmUAObm21bfrL9lONjexSYrWfbunj37zXdmvpkz9oIgCKTD0Wg0xPd94TDP83Q0zvWa50vzklSrdanVanqf4/D84GBGr+F+Op3S8fqoJxLOdnZgTvsO/nYhenHA+UC7CWF1uXwkb9++ldPTUwVerVbVqFQqpR8YPjQ0JCMjI5LNDijoRgP3PQVu5+5Eor2XGLg7IV4GkIdHJ/LmzRs5ODiIwNbrdR0O0GCcq4Xz4eFhmZyclP7+tDQaIik/BG5XKQn4SwG3zJTLZXn9+rUclI8UHD5YVoDDN8bSzXhONwL48fFxGR4eilzFZT1uFRIB5yT8BqCdnR3Z3d0VP9Un6XRawYJpggVrZBv38ME4XKtUKnLt2jUplUoy1PR/l3U7T6sVSAQcgMAkj8PDQ9ne3pajoyMRL7zeKsYZWHgWYDGmv78/mmdwcFA+mJlSgziHDWrERrsjEXDXegTi1tZW+DLxI2bxIrqFNYTXyDyCFweMAHCwb8e4RnTNuOsqe3t7sra21pTD0Kct666E8XlcZyzw9/RUUXK5nK5oUinUQI6TQ3cynO/v78vq6qrKXCNwlTiJJpyNGc3nZHp6uqV2dwrQWOCtZBDAV1ZWwsQk7f0wiQn5kffbAu/0/KWBYzIC1+XukfGx0RGZmppKlC2tIV0Bh4aDcZW7HhkfH8urLLZL7T2pihvlkMNnz56FiadHxicL41IsFpN41bkxsYxbRdFo9jwB8KdPn14J8KnSpBQKhQs63nPmbCVRcBUAR2Lq1VVmpksyMTFxAXjcEsQybiegESionjx5osCZOeNe1O4+EhCAX7bQSgQcxRHTMgAgcz5+/Dis/hL4uHU3/B4YGNASGHIKxuEql0k+l05AeIAF1vPnz5VxFFmdDlaJrMtZITJeSsXCOTlMunKxjLtMYOKNjQ158eJFuAuKkUOb5sEwgff19SkJUBVkThZUbnXZrtCKBQ6gbnWIkjZpyne3ejAWoGnA7Icz6irvBLgbOMicCM6TkxPx/LAkbXfgWcsazuE2kFRsKD5Z+CiqDumKncpZvieWcS6dDVD8xiYCNflpJdwcdwJOf9airLmVQ7DPzMxIYWLsXGXoVqLt5k0M3K3JUVPDZdbWNzsCp48TPFdvdnZWUz32nDha7bJ63kgAJPzSdRks9/Kf9xMJAQ1gq2NpaUmy2Yz4zar4nQC3xb99AQwCcGzLAAwuhG8YiWvcOKts+r4GOe5nMhm5efOm9lUA3E3vSZJRrKvE0fnPv//Jy5cvo5cTHIPQbSjhOoqq69evS19f6lxDKK4+sVhigZPtKJqbrQeqxd5+WR4+fKgqgT0k2XX3nhiPgETWXFhYkFzuPZ2yVq1GTSOXpE47/VjgNnD4m4GG7/LhsTx69EiwD4Vr2MwIIxgbAH18fKx1yfz8vEogNvGtWnCuhLZa9UTAreVWFsHy/b/+Vrbdl7E5REMQD2jDoUbByty+/ZnU64GkU2HzyJLhktU1cLv8nARgkYS2d3ajAgwG8qU2oLmDZ92CMaOjo7K4uCiZgbDWaRWgnZhPxLhrMUCvr69riwKZk1LHF7XqrWAO9hJxH6ozNzcnCx/PqztZg9mf6SQMscCtm2C5ke4BGMlHWTUp36036AJajDVrFMzBrhhWslQsSrFYiOqVpMriNYIgqFRq2j3FAb/zffT6zuxFXxsNzs3NTXn16lW4gYiW96w1FyedF+83xG/2FNGCRpU4NjamMsn+OZ9xE5RXqdaDdPpib6RWCzuwKF9RxqI2AVNQBwQYJoK0wdBejnqtEikP3pfP51XjUTESl12FqJEKxsEorARYDD44ONTeID7YpsEnrRvQfWAI2e8WfDaTUSIwJ0iBCmFOtOUAHvVMPp/TPwvYFVYFIuP8l+DBgwdaa2Miqwa0GgYwfeMltovbDfh6c1vIgMYcliSsKv4IWFr6VDHxvldvBAH+1sA+cnl5WYOPmmr9ir+1l9I0Cgz0yjhXjfJJ0JROnmezWbl165ayr/5fqwcBNr7IfhjMqKcvESSM4eRcCasQ3bDNObmKPLdGUGpZsN24cUNLBm9zazu4d++e6qpNBFaTuUS26U5dpuR1CxyA7J9ddrMRqlz4pwLLYawymPd++/2PADt2ugcGwq9gCCdhQ96C6xWwa6j1ceuq+I0EhW0i8MAIVJfeL3d/DVD8EKi12P6/2S2jV/EccVB54O/ejz/9HGCpoBBMta5rXMXLu53D1XAwjhXwvvv+h4BAXVe4bOu3O3ChxF08LiZFG3fel199G9CH3fLyqv24NcB44MRhpdK788U3CpyKwsCw590xmfSpzsBt0Fqc3ud3vtZigxWcVZCklVpSiN0w3q5E/h9TGMIUuA3+EQAAAABJRU5ErkJggg==';

var DATA_IMAGE_TRANSP_PIC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=';

/***/ },
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_global.js ***!
  \**********************************************/
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 22 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-iobject.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 139)
  , defined = __webpack_require__(/*! ./_defined */ 59);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 23 */,
/* 24 */
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./dev/Remote/Admin/Ajax.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Remote_AbstractAjax__ = __webpack_require__(/*! Remote/AbstractAjax */ 115);






var RemoteAdminAjax = function (_AbstractAjaxRemote) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(RemoteAdminAjax, _AbstractAjaxRemote);

	function RemoteAdminAjax() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RemoteAdminAjax);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractAjaxRemote.call(this));

		_this.oRequests = {};
		return _this;
	}

	/**
  * @param {?Function} fCallback
  * @param {string} sLogin
  * @param {string} sPassword
  */


	RemoteAdminAjax.prototype.adminLogin = function adminLogin(fCallback, sLogin, sPassword) {
		this.defaultRequest(fCallback, 'AdminLogin', {
			'Login': sLogin,
			'Password': sPassword
		});
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.adminLogout = function adminLogout(fCallback) {
		this.defaultRequest(fCallback, 'AdminLogout');
	};

	/**
  * @param {?Function} fCallback
  * @param {?} oData
  */


	RemoteAdminAjax.prototype.saveAdminConfig = function saveAdminConfig(fCallback, oData) {
		this.defaultRequest(fCallback, 'AdminSettingsUpdate', oData);
	};

	/**
  * @param {string} key
  * @param {?Function} valueFn
  * @param {?Function} fn
  */


	RemoteAdminAjax.prototype.saveAdminConfigHelper = function saveAdminConfigHelper(key, valueFn, fn) {
		var _this2 = this;

		return function (value) {
			var data = {};
			data[key] = valueFn ? valueFn(value) : value;
			_this2.saveAdminConfig(fn || null, data);
		};
	};

	/**
  * @param {?Function} fCallback
  * @param {boolean=} bIncludeAliases = true
  */


	RemoteAdminAjax.prototype.domainList = function domainList(fCallback) {
		var bIncludeAliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		this.defaultRequest(fCallback, 'AdminDomainList', {
			'IncludeAliases': bIncludeAliases ? '1' : '0'
		});
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.pluginList = function pluginList(fCallback) {
		this.defaultRequest(fCallback, 'AdminPluginList');
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.packagesList = function packagesList(fCallback) {
		this.defaultRequest(fCallback, 'AdminPackagesList');
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.coreData = function coreData(fCallback) {
		this.defaultRequest(fCallback, 'AdminCoreData');
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.updateCoreData = function updateCoreData(fCallback) {
		this.defaultRequest(fCallback, 'AdminUpdateCoreData', {}, 90000);
	};

	/**
  * @param {?Function} fCallback
  * @param {Object} oPackage
  */


	RemoteAdminAjax.prototype.packageInstall = function packageInstall(fCallback, oPackage) {
		this.defaultRequest(fCallback, 'AdminPackageInstall', {
			'Id': oPackage.id,
			'Type': oPackage.type,
			'File': oPackage.file
		}, 60000);
	};

	/**
  * @param {?Function} fCallback
  * @param {Object} oPackage
  */


	RemoteAdminAjax.prototype.packageDelete = function packageDelete(fCallback, oPackage) {
		this.defaultRequest(fCallback, 'AdminPackageDelete', {
			'Id': oPackage.id
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sName
  */


	RemoteAdminAjax.prototype.domain = function domain(fCallback, sName) {
		this.defaultRequest(fCallback, 'AdminDomainLoad', {
			'Name': sName
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sName
  */


	RemoteAdminAjax.prototype.plugin = function plugin(fCallback, sName) {
		this.defaultRequest(fCallback, 'AdminPluginLoad', {
			'Name': sName
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sName
  */


	RemoteAdminAjax.prototype.domainDelete = function domainDelete(fCallback, sName) {
		this.defaultRequest(fCallback, 'AdminDomainDelete', {
			'Name': sName
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sName
  * @param {boolean} bDisabled
  */


	RemoteAdminAjax.prototype.domainDisable = function domainDisable(fCallback, sName, bDisabled) {
		return this.defaultRequest(fCallback, 'AdminDomainDisable', {
			Name: sName,
			Disabled: bDisabled ? '1' : '0'
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {Object} oConfig
  */


	RemoteAdminAjax.prototype.pluginSettingsUpdate = function pluginSettingsUpdate(fCallback, oConfig) {
		return this.defaultRequest(fCallback, 'AdminPluginSettingsUpdate', oConfig);
	};

	/**
  * @param {?Function} fCallback
  * @param {boolean} bForce
  */


	RemoteAdminAjax.prototype.licensing = function licensing(fCallback, bForce) {
		return this.defaultRequest(fCallback, 'AdminLicensing', {
			Force: bForce ? '1' : '0'
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sDomain
  * @param {string} sKey
  */


	RemoteAdminAjax.prototype.licensingActivate = function licensingActivate(fCallback, sDomain, sKey) {
		return this.defaultRequest(fCallback, 'AdminLicensingActivate', {
			Domain: sDomain,
			Key: sKey
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sName
  * @param {boolean} bDisabled
  */


	RemoteAdminAjax.prototype.pluginDisable = function pluginDisable(fCallback, sName, bDisabled) {
		return this.defaultRequest(fCallback, 'AdminPluginDisable', {
			Name: sName,
			Disabled: bDisabled ? '1' : '0'
		});
	};

	RemoteAdminAjax.prototype.createDomainAlias = function createDomainAlias(fCallback, sName, sAlias) {
		this.defaultRequest(fCallback, 'AdminDomainAliasSave', {
			Name: sName,
			Alias: sAlias
		});
	};

	RemoteAdminAjax.prototype.createOrUpdateDomain = function createOrUpdateDomain(fCallback, bCreate, sName, sIncHost, iIncPort, sIncSecure, bIncShortLogin, bUseSieve, sSieveAllowRaw, sSieveHost, iSievePort, sSieveSecure, sOutHost, iOutPort, sOutSecure, bOutShortLogin, bOutAuth, bOutPhpMail, sWhiteList) {
		this.defaultRequest(fCallback, 'AdminDomainSave', {
			'Create': bCreate ? '1' : '0',
			'Name': sName,

			'IncHost': sIncHost,
			'IncPort': iIncPort,
			'IncSecure': sIncSecure,
			'IncShortLogin': bIncShortLogin ? '1' : '0',

			'UseSieve': bUseSieve ? '1' : '0',
			'SieveAllowRaw': sSieveAllowRaw ? '1' : '0',
			'SieveHost': sSieveHost,
			'SievePort': iSievePort,
			'SieveSecure': sSieveSecure,

			'OutHost': sOutHost,
			'OutPort': iOutPort,
			'OutSecure': sOutSecure,
			'OutShortLogin': bOutShortLogin ? '1' : '0',
			'OutAuth': bOutAuth ? '1' : '0',
			'OutUsePhpMail': bOutPhpMail ? '1' : '0',

			'WhiteList': sWhiteList
		});
	};

	RemoteAdminAjax.prototype.testConnectionForDomain = function testConnectionForDomain(fCallback, sName, sIncHost, iIncPort, sIncSecure, bUseSieve, sSieveHost, iSievePort, sSieveSecure, sOutHost, iOutPort, sOutSecure, bOutAuth, bOutPhpMail) {
		this.defaultRequest(fCallback, 'AdminDomainTest', {
			'Name': sName,
			'IncHost': sIncHost,
			'IncPort': iIncPort,
			'IncSecure': sIncSecure,
			'UseSieve': bUseSieve ? '1' : '0',
			'SieveHost': sSieveHost,
			'SievePort': iSievePort,
			'SieveSecure': sSieveSecure,
			'OutHost': sOutHost,
			'OutPort': iOutPort,
			'OutSecure': sOutSecure,
			'OutAuth': bOutAuth ? '1' : '0',
			'OutUsePhpMail': bOutPhpMail ? '1' : '0'
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {?} oData
  */


	RemoteAdminAjax.prototype.testContacts = function testContacts(fCallback, oData) {
		this.defaultRequest(fCallback, 'AdminContactsTest', oData);
	};

	/**
  * @param {?Function} fCallback
  * @param {?} oData
  */


	RemoteAdminAjax.prototype.saveNewAdminPassword = function saveNewAdminPassword(fCallback, oData) {
		this.defaultRequest(fCallback, 'AdminPasswordUpdate', oData);
	};

	/**
  * @param {?Function} fCallback
  */


	RemoteAdminAjax.prototype.adminPing = function adminPing(fCallback) {
		this.defaultRequest(fCallback, 'AdminPing');
	};

	return RemoteAdminAjax;
}(__WEBPACK_IMPORTED_MODULE_3_Remote_AbstractAjax__["a" /* AbstractAjaxRemote */]);

/* harmony default export */ exports["a"] = new RemoteAdminAjax();

/***/ },
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_core.js ***!
  \********************************************/
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_has.js ***!
  \*******************************************/
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 27 */
/* exports provided: addHook, runHook, mainSettingsGet, remoteRequest, addSettingsViewModel, addSettingsViewModelForAdmin, runSettingsViewModelHooks, settingsGet */
/* exports used: runHook, addSettingsViewModel, addSettingsViewModelForAdmin, addHook, mainSettingsGet, settingsGet, remoteRequest, runSettingsViewModelHooks */
/*!*******************************!*\
  !*** ./dev/Common/Plugins.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (immutable) */ exports["d"] = addHook;
/* harmony export (immutable) */ exports["a"] = runHook;
/* harmony export (immutable) */ exports["e"] = mainSettingsGet;
/* harmony export (immutable) */ exports["g"] = remoteRequest;
/* harmony export (immutable) */ exports["b"] = addSettingsViewModel;
/* harmony export (immutable) */ exports["c"] = addSettingsViewModelForAdmin;
/* harmony export (immutable) */ exports["h"] = runSettingsViewModelHooks;
/* harmony export (immutable) */ exports["f"] = settingsGet;






var SIMPLE_HOOKS = {},
    USER_VIEW_MODELS_HOOKS = [],
    ADMIN_VIEW_MODELS_HOOKS = [];

/**
 * @param {string} name
 * @param {Function} callback
 */
function addHook(name, callback) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isFunc"])(callback)) {
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"])(SIMPLE_HOOKS[name])) {
			SIMPLE_HOOKS[name] = [];
		}

		SIMPLE_HOOKS[name].push(callback);
	}
}

/**
 * @param {string} name
 * @param {Array=} args = []
 */
function runHook(name) {
	var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isArray"])(SIMPLE_HOOKS[name])) {
		__WEBPACK_IMPORTED_MODULE_0_____default.a.each(SIMPLE_HOOKS[name], function (callback) {
			callback.apply(undefined, args);
		});
	}
}

/**
 * @param {string} name
 * @returns {?}
 */
function mainSettingsGet(name) {
	return __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"](name);
}

/**
 * @param {Function} callback
 * @param {string} action
 * @param {Object=} parameters
 * @param {?number=} timeout
 */
function remoteRequest(callback, action, parameters, timeout) {
	if (__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].__APP__) {
		__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].__APP__.remote().defaultRequest(callback, 'Plugin' + action, parameters, timeout);
	}
}

/**
 * @param {Function} SettingsViewModelClass
 * @param {string} labelName
 * @param {string} template
 * @param {string} route
 */
function addSettingsViewModel(SettingsViewModelClass, template, labelName, route) {
	USER_VIEW_MODELS_HOOKS.push([SettingsViewModelClass, template, labelName, route]);
}

/**
 * @param {Function} SettingsViewModelClass
 * @param {string} labelName
 * @param {string} template
 * @param {string} route
 */
function addSettingsViewModelForAdmin(SettingsViewModelClass, template, labelName, route) {
	ADMIN_VIEW_MODELS_HOOKS.push([SettingsViewModelClass, template, labelName, route]);
}

/**
 * @param {boolean} admin
 */
function runSettingsViewModelHooks(admin) {
	var Knoin = __webpack_require__(/*! Knoin/Knoin */ 9);
	__WEBPACK_IMPORTED_MODULE_0_____default.a.each(admin ? ADMIN_VIEW_MODELS_HOOKS : USER_VIEW_MODELS_HOOKS, function (view) {
		Knoin.addSettingsViewModel(view[0], view[1], view[2], view[3]);
	});
}

/**
 * @param {string} pluginSection
 * @param {string} name
 * @returns {?}
 */
function settingsGet(pluginSection, name) {
	var plugins = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('Plugins');
	plugins = plugins && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(plugins[pluginSection]) ? plugins[pluginSection] : null;
	return plugins ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(plugins[name]) ? null : plugins[name] : null;
}

/***/ },
/* 28 */,
/* 29 */
/* exports provided: sub, pub */
/* exports used: pub, sub */
/*!******************************!*\
  !*** ./dev/Common/Events.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 27);
/* harmony export (immutable) */ exports["b"] = sub;
/* harmony export (immutable) */ exports["a"] = pub;





var SUBS = {};

/**
 * @param {string|Object} name
 * @param {Function} func
 * @param {Object=} context
 */
function sub(name, func, context) {
	if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isObject"])(name)) {
		context = func || null;
		func = null;

		__WEBPACK_IMPORTED_MODULE_0_____default.a.each(name, function (subFunc, subName) {
			sub(subName, subFunc, context);
		});
	} else {
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(SUBS[name])) {
			SUBS[name] = [];
		}

		SUBS[name].push([func, context]);
	}
}

/**
 * @param {string} name
 * @param {Array=} args
 */
function pub(name, args) {
	__WEBPACK_IMPORTED_MODULE_2_Common_Plugins__["a" /* runHook */]('rl-pub', [name, args]);

	if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["isUnd"])(SUBS[name])) {
		__WEBPACK_IMPORTED_MODULE_0_____default.a.each(SUBS[name], function (items) {
			if (items[0]) {
				items[0].apply(items[1] || null, args || []);
			}
		});
	}
}

/***/ },
/* 30 */,
/* 31 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_descriptors.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 43)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 32 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_hide.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(/*! ./_object-dp */ 33)
  , createDesc = __webpack_require__(/*! ./_property-desc */ 51);
module.exports = __webpack_require__(/*! ./_descriptors */ 31) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 33 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_object-dp.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(/*! ./_an-object */ 41)
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 85)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 70)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 34 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_wks.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(/*! ./_shared */ 68)('wks')
  , uid        = __webpack_require__(/*! ./_uid */ 52)
  , Symbol     = __webpack_require__(/*! ./_global */ 21).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 35 */
/* exports provided: momentNow, momentNowUnix, searchSubtractFormatDateHelper, format, momentToNode, reload */
/* all exports used */
/*!********************************!*\
  !*** ./dev/Common/Momentor.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(/*! moment */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony export (immutable) */ exports["momentNow"] = momentNow;
/* harmony export (immutable) */ exports["momentNowUnix"] = momentNowUnix;
/* harmony export (immutable) */ exports["searchSubtractFormatDateHelper"] = searchSubtractFormatDateHelper;
/* harmony export (immutable) */ exports["format"] = format;
/* harmony export (immutable) */ exports["momentToNode"] = momentToNode;
/* harmony export (immutable) */ exports["reload"] = reload;







var _moment = null;
var _momentNow = 0;

var updateMomentNow = __WEBPACK_IMPORTED_MODULE_1_____default.a.debounce(function () {
	_moment = __WEBPACK_IMPORTED_MODULE_3_moment___default()();
}, 500, true);

var updateMomentNowUnix = __WEBPACK_IMPORTED_MODULE_1_____default.a.debounce(function () {
	_momentNow = __WEBPACK_IMPORTED_MODULE_3_moment___default()().unix();
}, 500, true);

/**
 * @returns {moment}
 */
function momentNow() {
	updateMomentNow();
	return _moment || __WEBPACK_IMPORTED_MODULE_3_moment___default()();
}

/**
 * @returns {number}
 */
function momentNowUnix() {
	updateMomentNowUnix();
	return _momentNow || 0;
}

/**
 * @param {number} date
 * @returns {string}
 */
function searchSubtractFormatDateHelper(date) {
	return momentNow().clone().subtract(date, 'days').format('YYYY.MM.DD');
}

/**
 * @param {Object} m
 * @returns {string}
 */
function formatCustomShortDate(m) {
	var now = momentNow();
	if (m && now) {
		switch (true) {
			case 4 >= now.diff(m, 'hours'):
				return m.fromNow();
			case now.format('L') === m.format('L'):
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Translator__["i18n"])('MESSAGE_LIST/TODAY_AT', {
					TIME: m.format('LT')
				});
			case now.clone().subtract(1, 'days').format('L') === m.format('L'):
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Translator__["i18n"])('MESSAGE_LIST/YESTERDAY_AT', {
					TIME: m.format('LT')
				});
			case now.year() === m.year():
				return m.format('D MMM.');
			// no default
		}
	}

	return m ? m.format('LL') : '';
}

/**
 * @param {number} timeStampInUTC
 * @param {string} formatStr
 * @returns {string}
 */
function format(timeStampInUTC, formatStr) {

	var m = null,
	    result = '';

	var now = momentNowUnix();

	timeStampInUTC = 0 < timeStampInUTC ? timeStampInUTC : 0 === timeStampInUTC ? now : 0;
	timeStampInUTC = now < timeStampInUTC ? now : timeStampInUTC;

	m = 0 < timeStampInUTC ? __WEBPACK_IMPORTED_MODULE_3_moment___default.a.unix(timeStampInUTC) : null;

	if (m && 1970 === m.year()) {
		m = null;
	}

	if (m) {
		switch (formatStr) {
			case 'FROMNOW':
				result = m.fromNow();
				break;
			case 'SHORT':
				result = formatCustomShortDate(m);
				break;
			case 'FULL':
				result = m.format('LLL');
				break;
			default:
				result = m.format(formatStr);
				break;
		}
	}

	return result;
}

/**
 * @param {Object} element
 * @returns {void}
 */
function momentToNode(element) {
	var key = '',
	    time = 0;
	var $el = __WEBPACK_IMPORTED_MODULE_2_____default()(element);

	time = $el.data('moment-time');
	if (time) {
		key = $el.data('moment-format');
		if (key) {
			$el.text(format(time, key));
		}

		key = $el.data('moment-format-title');
		if (key) {
			$el.attr('title', format(time, key));
		}
	}
}

/**
 * @returns {void}
 */
function reload() {
	__WEBPACK_IMPORTED_MODULE_1_____default.a.defer(function () {
		__WEBPACK_IMPORTED_MODULE_2_____default()('.moment', __WEBPACK_IMPORTED_MODULE_0_window___default.a.document).each(function (index, item) {
			momentToNode(item);
		});
	});
}

/***/ },
/* 36 */,
/* 37 */,
/* 38 */
/* exports provided: EmailModel, default */
/* all exports used */
/*!****************************!*\
  !*** ./dev/Model/Email.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "EmailModel", function() { return EmailModel; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return EmailModel; });




var EmailModel = function () {

	/**
  * @param {string=} email = ''
  * @param {string=} name = ''
  * @param {string=} dkimStatus = 'none'
  * @param {string=} dkimValue = ''
  */
	function EmailModel() {
		var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
		var dkimStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'none';
		var dkimValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, EmailModel);

		this.email = '';
		this.name = '';
		this.dkimStatus = '';
		this.dkimValue = '';

		this.email = email;
		this.name = name;
		this.dkimStatus = dkimStatus;
		this.dkimValue = dkimValue;

		this.clearDuplicateName();
	}

	/**
  * @static
  * @param {AjaxJsonEmail} json
  * @returns {?EmailModel}
  */


	EmailModel.newInstanceFromJson = function newInstanceFromJson(json) {
		var email = new EmailModel();
		return email.initByJson(json) ? email : null;
	};

	/**
  * @static
  * @param {string} line
  * @param {string=} delimiter = ';'
  * @returns {Array}
  */


	EmailModel.splitHelper = function splitHelper(line) {
		var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';

		line = line.replace(/[\r\n]+/g, '; ').replace(/[\s]+/g, ' ');

		var index = 0,
		    len = 0,
		    at = false,
		    char = '',
		    result = '';

		for (len = line.length; index < len; index++) {
			char = line.charAt(index);
			switch (char) {
				case '@':
					at = true;
					break;
				case ' ':
					if (at) {
						at = false;
						result += delimiter;
					}
					break;
				// no default
			}

			result += char;
		}

		return result.split(delimiter);
	};

	/**
  * @returns {void}
  */


	EmailModel.prototype.clear = function clear() {
		this.email = '';
		this.name = '';

		this.dkimStatus = 'none';
		this.dkimValue = '';
	};

	/**
  * @returns {boolean}
  */


	EmailModel.prototype.validate = function validate() {
		return '' !== this.name || '' !== this.email;
	};

	/**
  * @param {boolean} withoutName = false
  * @returns {string}
  */


	EmailModel.prototype.hash = function hash() {
		var withoutName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		return '#' + (withoutName ? '' : this.name) + '#' + this.email + '#';
	};

	/**
  * @returns {void}
  */


	EmailModel.prototype.clearDuplicateName = function clearDuplicateName() {
		if (this.name === this.email) {
			this.name = '';
		}
	};

	/**
  * @param {string} query
  * @returns {boolean}
  */


	EmailModel.prototype.search = function search(query) {
		return -1 < (this.name + ' ' + this.email).toLowerCase().indexOf(query.toLowerCase());
	};

	/**
  * @param {string} str
  */


	EmailModel.prototype.parse = function parse(str) {
		this.clear();

		str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(str);

		var regex = /(?:"([^"]+)")? ?[<]?(.*?@[^>,]+)>?,? ?/g,
		    match = regex.exec(str);

		if (match) {
			this.name = match[1] || '';
			this.email = match[2] || '';

			this.clearDuplicateName();
		} else if (/^[^@]+@[^@]+$/.test(str)) {
			this.name = '';
			this.email = str;
		}
	};

	/**
  * @param {AjaxJsonEmail} oJsonEmail
  * @returns {boolean}
  */


	EmailModel.prototype.initByJson = function initByJson(json) {
		var result = false;
		if (json && 'Object/Email' === json['@Object']) {
			this.name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(json.Name);
			this.email = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(json.Email);
			this.dkimStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(json.DkimStatus || '');
			this.dkimValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])(json.DkimValue || '');

			result = '' !== this.email;
			this.clearDuplicateName();
		}

		return result;
	};

	/**
  * @param {boolean} friendlyView
  * @param {boolean=} wrapWithLink = false
  * @param {boolean=} useEncodeHtml = false
  * @returns {string}
  */


	EmailModel.prototype.toLine = function toLine(friendlyView) {
		var wrapWithLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var useEncodeHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

		var result = '';
		if ('' !== this.email) {
			if (friendlyView && '' !== this.name) {
				result = wrapWithLink ? '<a href="mailto:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])('"' + this.name + '" <' + this.email + '>') + '" target="_blank" tabindex="-1">' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(this.name) + '</a>' : useEncodeHtml ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(this.name) : this.name;
			} else {
				result = this.email;
				if ('' !== this.name) {
					if (wrapWithLink) {
						result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])('"' + this.name + '" <') + '<a href="mailto:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])('"' + this.name + '" <' + this.email + '>') + '" target="_blank" tabindex="-1">' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(result) + '</a>' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])('>');
					} else {
						result = '"' + this.name + '" <' + result + '>';
						if (useEncodeHtml) {
							result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(result);
						}
					}
				} else if (wrapWithLink) {
					result = '<a href="mailto:' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(this.email) + '" target="_blank" tabindex="-1">' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["encodeHtml"])(this.email) + '</a>';
				}
			}
		}

		return result;
	};

	/**
  * @param {string} $sEmailAddress
  * @returns {boolean}
  */


	EmailModel.prototype.mailsoParse = function mailsoParse($sEmailAddress) {
		$sEmailAddress = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])($sEmailAddress);
		if ('' === $sEmailAddress) {
			return false;
		}

		var substr = function substr(str, start, len) {
			str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"])(str);
			var end = str.length;

			if (0 > start) {
				start += end;
			}

			end = 'undefined' === typeof len ? end : 0 > len ? len + end : len + start;

			return start >= str.length || 0 > start || start > end ? false : str.slice(start, end);
		},
		    substrReplace = function substrReplace(str, replace, start, length) {
			str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["pString"])(str);
			if (0 > start) {
				start += str.length;
			}

			length = 'undefined' !== typeof length ? length : str.length;
			if (0 > length) {
				length = length + str.length - start;
			}
			return str.slice(0, start) + replace.substr(0, length) + replace.slice(length) + str.slice(start + length);
		};

		var $sName = '',
		    $sEmail = '',
		    $sComment = '',
		    $bInName = false,
		    $bInAddress = false,
		    $bInComment = false,
		    $aRegs = null,
		    $iStartIndex = 0,
		    $iEndIndex = 0,
		    $iCurrentIndex = 0;

		while ($iCurrentIndex < $sEmailAddress.length) {
			switch ($sEmailAddress.substr($iCurrentIndex, 1)) {
				case '"':
					if (!$bInName && !$bInAddress && !$bInComment) {
						$bInName = true;
						$iStartIndex = $iCurrentIndex;
					} else if (!$bInAddress && !$bInComment) {
						$iEndIndex = $iCurrentIndex;
						$sName = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
						$sEmailAddress = substrReplace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
						$iEndIndex = 0;
						$iCurrentIndex = 0;
						$iStartIndex = 0;
						$bInName = false;
					}
					break;
				case '<':
					if (!$bInName && !$bInAddress && !$bInComment) {
						if (0 < $iCurrentIndex && 0 === $sName.length) {
							$sName = substr($sEmailAddress, 0, $iCurrentIndex);
						}

						$bInAddress = true;
						$iStartIndex = $iCurrentIndex;
					}
					break;
				case '>':
					if ($bInAddress) {
						$iEndIndex = $iCurrentIndex;
						$sEmail = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
						$sEmailAddress = substrReplace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
						$iEndIndex = 0;
						$iCurrentIndex = 0;
						$iStartIndex = 0;
						$bInAddress = false;
					}
					break;
				case '(':
					if (!$bInName && !$bInAddress && !$bInComment) {
						$bInComment = true;
						$iStartIndex = $iCurrentIndex;
					}
					break;
				case ')':
					if ($bInComment) {
						$iEndIndex = $iCurrentIndex;
						$sComment = substr($sEmailAddress, $iStartIndex + 1, $iEndIndex - $iStartIndex - 1);
						$sEmailAddress = substrReplace($sEmailAddress, '', $iStartIndex, $iEndIndex - $iStartIndex + 1);
						$iEndIndex = 0;
						$iCurrentIndex = 0;
						$iStartIndex = 0;
						$bInComment = false;
					}
					break;
				case '\\':
					$iCurrentIndex += 1;
					break;
				// no default
			}

			$iCurrentIndex += 1;
		}

		if (0 === $sEmail.length) {
			$aRegs = $sEmailAddress.match(/[^@\s]+@\S+/i);
			if ($aRegs && $aRegs[0]) {
				$sEmail = $aRegs[0];
			} else {
				$sName = $sEmailAddress;
			}
		}

		if (0 < $sEmail.length && 0 === $sName.length && 0 === $sComment.length) {
			$sName = $sEmailAddress.replace($sEmail, '');
		}

		$sEmail = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])($sEmail).replace(/^[<]+/, '').replace(/[>]+$/, '');
		$sName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])($sName).replace(/^["']+/, '').replace(/["']+$/, '');
		$sComment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["trim"])($sComment).replace(/^[(]+/, '').replace(/[)]+$/, '');

		// Remove backslash
		$sName = $sName.replace(/\\\\(.)/g, '$1');
		$sComment = $sComment.replace(/\\\\(.)/g, '$1');

		this.name = $sName;
		this.email = $sEmail;

		this.clearDuplicateName();
		return true;
	};

	return EmailModel;
}();



/***/ },
/* 39 */,
/* 40 */,
/* 41 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_an-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 44);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 42 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_export.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(/*! ./_global */ 21)
  , core      = __webpack_require__(/*! ./_core */ 25)
  , ctx       = __webpack_require__(/*! ./_ctx */ 83)
  , hide      = __webpack_require__(/*! ./_hide */ 32)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 43 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/_fails.js ***!
  \*********************************************/
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 44 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_is-object.js ***!
  \*************************************************/
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 45 */
/* exports provided: getApp */
/* exports used: getApp */
/*!**********************************!*\
  !*** ./dev/Helper/Apps/Admin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = getApp;

/**
 * @returns {AppAdmin}
 */
function getApp() {
  return __webpack_require__(/*! App/Admin */ 176).default;
}

/***/ },
/* 46 */,
/* 47 */
/* unknown exports provided */
/* exports used: default */
/*!*********************************!*\
  !*** external "window.Promise" ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = window.Promise;

/***/ },
/* 48 */
/* exports provided: AbstractInput, default */
/* exports used: AbstractInput */
/*!****************************************!*\
  !*** ./dev/Component/AbstractInput.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractInput; });
/* unused harmony export default */









var AbstractInput = function (_AbstractComponent) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AbstractInput, _AbstractComponent);

	/**
  * @param {Object} params
  */
	function AbstractInput(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractInput);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractComponent.call(this));

		_this.value = params.value || '';
		_this.size = params.size || 0;
		_this.label = params.label || '';
		_this.preLabel = params.preLabel || '';
		_this.enable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.enable) ? true : params.enable;
		_this.trigger = params.trigger && params.trigger.subscribe ? params.trigger : null;
		_this.placeholder = params.placeholder || '';

		_this.labeled = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.label);
		_this.preLabeled = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.preLabel);
		_this.triggered = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.trigger) && !!_this.trigger;

		_this.classForTrigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');

		_this.className = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
			var size = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.unwrap(_this.size),
			    suffixValue = _this.trigger ? ' ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])('settings-saved-trigger-input ' + _this.classForTrigger()) : '';
			return (0 < size ? 'span' + size : '') + suffixValue;
		});

		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.width) && params.element) {
			params.element.find('input,select,textarea').css('width', params.width);
		}

		_this.disposable.push(_this.className);

		if (_this.trigger) {
			_this.setTriggerState(_this.trigger());

			_this.disposable.push(_this.trigger.subscribe(_this.setTriggerState, _this));
		}
		return _this;
	}

	AbstractInput.prototype.setTriggerState = function setTriggerState(value) {
		switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["pInt"])(value)) {
			case __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].TrueResult:
				this.classForTrigger('success');
				break;
			case __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].FalseResult:
				this.classForTrigger('error');
				break;
			default:
				this.classForTrigger('');
				break;
		}
	};

	return AbstractInput;
}(__WEBPACK_IMPORTED_MODULE_6_Component_Abstract__["a" /* AbstractComponent */]);



/***/ },
/* 49 */,
/* 50 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(/*! ./_object-keys-internal */ 89)
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 51 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_property-desc.js ***!
  \*****************************************************/
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 52 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_uid.js ***!
  \*******************************************/
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 53 */
/* exports provided: default */
/* exports used: default */
/*!********************************!*\
  !*** ./dev/Stores/Language.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);






var LanguageStore = function () {
	function LanguageStore() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LanguageStore);

		this.languages = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
		this.languagesAdmin = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);

		this.language = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('').extend({ limitedList: this.languages }).extend({ reversible: true });

		this.languageAdmin = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('').extend({ limitedList: this.languagesAdmin }).extend({ reversible: true });

		this.userLanguage = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
		this.userLanguageAdmin = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
	}

	LanguageStore.prototype.populate = function populate() {
		var aLanguages = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["appSettingsGet"]('languages'),
		    aLanguagesAdmin = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["appSettingsGet"]('languagesAdmin');

		this.languages(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isArray"])(aLanguages) ? aLanguages : []);
		this.languagesAdmin(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isArray"])(aLanguagesAdmin) ? aLanguagesAdmin : []);

		this.language(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('Language'));
		this.languageAdmin(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('LanguageAdmin'));

		this.userLanguage(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('UserLanguage'));
		this.userLanguageAdmin(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('UserLanguageAdmin'));
	};

	return LanguageStore;
}();

/* harmony default export */ exports["a"] = new LanguageStore();

/***/ },
/* 54 */
/* exports provided: default */
/* exports used: default */
/*!******************************!*\
  !*** ./dev/Stores/Social.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);







var SocialStore = function () {
	function SocialStore() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SocialStore);

		this.google = {};
		this.twitter = {};
		this.facebook = {};
		this.dropbox = {};

		// Google
		this.google.enabled = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);

		this.google.clientID = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.google.clientSecret = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.google.apiKey = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');

		this.google.loading = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.google.userName = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');

		this.google.loggined = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return '' !== _this.google.userName();
		});

		this.google.capa = {};
		this.google.capa.auth = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.google.capa.authFast = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.google.capa.drive = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.google.capa.preview = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);

		this.google.require = {};
		this.google.require.clientSettings = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return _this.google.enabled() && (_this.google.capa.auth() || _this.google.capa.drive());
		});

		this.google.require.apiKeySettings = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return _this.google.enabled() && _this.google.capa.drive();
		});

		// Facebook
		this.facebook.enabled = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.facebook.appID = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.facebook.appSecret = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.facebook.loading = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.facebook.userName = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.facebook.supported = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);

		this.facebook.loggined = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return '' !== _this.facebook.userName();
		});

		// Twitter
		this.twitter.enabled = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.twitter.consumerKey = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.twitter.consumerSecret = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
		this.twitter.loading = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.twitter.userName = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');

		this.twitter.loggined = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return '' !== _this.twitter.userName();
		});

		// Dropbox
		this.dropbox.enabled = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
		this.dropbox.apiKey = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable('');
	}

	SocialStore.prototype.populate = function populate() {
		this.google.enabled(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowGoogleSocial'));
		this.google.clientID(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('GoogleClientID'));
		this.google.clientSecret(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('GoogleClientSecret'));
		this.google.apiKey(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('GoogleApiKey'));

		this.google.capa.auth(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowGoogleSocialAuth'));
		this.google.capa.authFast(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowGoogleSocialAuthFast'));
		this.google.capa.drive(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowGoogleSocialDrive'));
		this.google.capa.preview(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowGoogleSocialPreview'));

		this.facebook.enabled(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowFacebookSocial'));
		this.facebook.appID(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('FacebookAppID'));
		this.facebook.appSecret(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('FacebookAppSecret'));
		this.facebook.supported(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('SupportedFacebookSocial'));

		this.twitter.enabled = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowTwitterSocial'));
		this.twitter.consumerKey = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('TwitterConsumerKey'));
		this.twitter.consumerSecret = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('TwitterConsumerSecret'));

		this.dropbox.enabled(!!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AllowDropboxSocial'));
		this.dropbox.apiKey(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('DropboxApiKey'));
	};

	SocialStore.prototype.appendDropbox = function appendDropbox() {
		if (!__WEBPACK_IMPORTED_MODULE_1_window___default.a.Dropbox && this.dropbox.enabled() && this.dropbox.apiKey()) {
			if (!__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.getElementById('dropboxjs')) {
				var script = __WEBPACK_IMPORTED_MODULE_1_window___default.a.document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://www.dropbox.com/static/api/2/dropins.js';
				__WEBPACK_IMPORTED_MODULE_3_____default()(script).attr('id', 'dropboxjs').attr('data-app-key', this.dropbox.apiKey());

				__WEBPACK_IMPORTED_MODULE_1_window___default.a.document.body.appendChild(script);
			}
		}
	};

	return SocialStore;
}();

/* harmony default export */ exports["a"] = new SocialStore();

/***/ },
/* 55 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/babel-runtime/helpers/typeof.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 128);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 127);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 56 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./dev/Component/Checkbox.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_AbstracCheckbox__ = __webpack_require__(/*! Component/AbstracCheckbox */ 78);







var CheckboxComponent = function (_AbstracCheckbox) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(CheckboxComponent, _AbstracCheckbox);

  function CheckboxComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CheckboxComponent);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstracCheckbox.apply(this, arguments));
  }

  return CheckboxComponent;
}(__WEBPACK_IMPORTED_MODULE_4_Component_AbstracCheckbox__["a" /* AbstracCheckbox */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["b" /* componentExportHelper */])(CheckboxComponent, 'CheckboxComponent');

/***/ },
/* 57 */
/* exports provided: default */
/* exports used: default */
/*!*********************************!*\
  !*** ./dev/Stores/Admin/App.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_AbstractApp__ = __webpack_require__(/*! Stores/AbstractApp */ 117);








var AppAdminStore = function (_AbstractAppStore) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AppAdminStore, _AbstractAppStore);

	function AppAdminStore() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AppAdminStore);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractAppStore.call(this));

		_this.determineUserLanguage = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		_this.determineUserDomain = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

		_this.weakPassword = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		_this.useLocalProxyForExternalImages = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		return _this;
	}

	AppAdminStore.prototype.populate = function populate() {
		_AbstractAppStore.prototype.populate.call(this);

		this.determineUserLanguage(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"])('DetermineUserLanguage'));
		this.determineUserDomain(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"])('DetermineUserDomain'));

		this.weakPassword(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"])('WeakPassword'));
		this.useLocalProxyForExternalImages(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"])('UseLocalProxyForExternalImages'));
	};

	return AppAdminStore;
}(__WEBPACK_IMPORTED_MODULE_5_Stores_AbstractApp__["a" /* AbstractAppStore */]);

/* harmony default export */ exports["a"] = new AppAdminStore();

/***/ },
/* 58 */
/* exports provided: default */
/* exports used: default */
/*!*****************************!*\
  !*** ./dev/Stores/Theme.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);






var ThemeStore = function () {
	function ThemeStore() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ThemeStore);

		this.themes = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
		this.themeBackgroundName = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
		this.themeBackgroundHash = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');

		this.theme = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('').extend({ limitedList: this.themes });
	}

	ThemeStore.prototype.populate = function populate() {
		var themes = __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["appSettingsGet"]('themes');

		this.themes(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Utils__["isArray"])(themes) ? themes : []);
		this.theme(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('Theme'));
		this.themeBackgroundName(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('UserBackgroundName'));
		this.themeBackgroundHash(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('UserBackgroundHash'));
	};

	return ThemeStore;
}();

/* harmony default export */ exports["a"] = new ThemeStore();

/***/ },
/* 59 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_defined.js ***!
  \***********************************************/
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 60 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************/
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 61 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iterators.js ***!
  \*************************************************/
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 62 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_library.js ***!
  \***********************************************/
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 63 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/_object-create.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(/*! ./_an-object */ 41)
  , dPs         = __webpack_require__(/*! ./_object-dps */ 145)
  , enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60)
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 67)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 84)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 138).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 64 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopd.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(/*! ./_object-pie */ 65)
  , createDesc     = __webpack_require__(/*! ./_property-desc */ 51)
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 22)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 70)
  , has            = __webpack_require__(/*! ./_has */ 26)
  , IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 85)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 31) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 65 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-pie.js ***!
  \**************************************************/
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 66 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 33).f
  , has = __webpack_require__(/*! ./_has */ 26)
  , TAG = __webpack_require__(/*! ./_wks */ 34)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 67 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_shared-key.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 68)('keys')
  , uid    = __webpack_require__(/*! ./_uid */ 52);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 68 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/_shared.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 21)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 69 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_to-integer.js ***!
  \**************************************************/
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 70 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/_to-primitive.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 44);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 71 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_wks-define.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(/*! ./_global */ 21)
  , core           = __webpack_require__(/*! ./_core */ 25)
  , LIBRARY        = __webpack_require__(/*! ./_library */ 62)
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 72)
  , defineProperty = __webpack_require__(/*! ./_object-dp */ 33).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 72 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_wks-ext.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 34);

/***/ },
/* 73 */
/* exports provided: AbstractScreen, default */
/* exports used: AbstractScreen */
/*!*************************************!*\
  !*** ./dev/Knoin/AbstractScreen.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crossroads__ = __webpack_require__(/*! crossroads */ 91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crossroads___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crossroads__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractScreen; });
/* unused harmony export default */






var AbstractScreen = function () {
	function AbstractScreen(screenName) {
		var viewModels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractScreen);

		this.oCross = null;

		this.sScreenName = screenName;
		this.aViewModels = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isArray"])(viewModels) ? viewModels : [];
	}

	/**
  * @returns {Array}
  */


	AbstractScreen.prototype.viewModels = function viewModels() {
		return this.aViewModels;
	};

	/**
  * @returns {string}
  */


	AbstractScreen.prototype.screenName = function screenName() {
		return this.sScreenName;
	};

	/**
  * @returns {?Array)}
  */


	AbstractScreen.prototype.routes = function routes() {
		return null;
	};

	/**
  * @returns {?Object}
  */


	AbstractScreen.prototype.__cross = function __cross() {
		return this.oCross;
	};

	/**
  * @returns {void}
  */


	AbstractScreen.prototype.__start = function __start() {
		var route = null,
		    fMatcher = null;
		var routes = this.routes();

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isNonEmptyArray"])(routes)) {
			fMatcher = __WEBPACK_IMPORTED_MODULE_1_____default.a.bind(this.onRoute || __WEBPACK_IMPORTED_MODULE_3_Common_Utils__["noop"], this);
			route = __WEBPACK_IMPORTED_MODULE_2_crossroads___default.a.create();

			__WEBPACK_IMPORTED_MODULE_1_____default.a.each(routes, function (item) {
				if (item && route) {
					route.addRoute(item[0], fMatcher).rules = item[1];
				}
			});

			this.oCross = route;
		}
	};

	return AbstractScreen;
}();



/***/ },
/* 74 */
/* exports provided: AskPopupView, default */
/* all exports used */
/*!*******************************!*\
  !*** ./dev/View/Popup/Ask.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_key__ = __webpack_require__(/*! key */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "AskPopupView", function() { return AskPopupView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return AskPopupView; });




var _dec, _class;











var AskPopupView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["popup"])({
	name: 'View/Popup/Ask',
	templateID: 'PopupsAsk'
}), _dec(_class = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AskPopupView, _AbstractViewNext);

	function AskPopupView() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AskPopupView);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.askDesc = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		_this.yesButton = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		_this.noButton = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');

		_this.yesFocus = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		_this.noFocus = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

		_this.fYesAction = null;
		_this.fNoAction = null;

		_this.bFocusYesOnShow = true;
		_this.bDisabeCloseOnEsc = true;
		_this.sDefaultKeyScope = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].PopupAsk;
		return _this;
	}

	AskPopupView.prototype.clearPopup = function clearPopup() {
		this.askDesc('');
		this.yesButton(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Translator__["i18n"])('POPUPS_ASK/BUTTON_YES'));
		this.noButton(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Translator__["i18n"])('POPUPS_ASK/BUTTON_NO'));

		this.yesFocus(false);
		this.noFocus(false);

		this.fYesAction = null;
		this.fNoAction = null;
	};

	AskPopupView.prototype.yesClick = function yesClick() {
		this.cancelCommand();

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isFunc"])(this.fYesAction)) {
			this.fYesAction.call(null);
		}
	};

	AskPopupView.prototype.noClick = function noClick() {
		this.cancelCommand();

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isFunc"])(this.fNoAction)) {
			this.fNoAction.call(null);
		}
	};

	/**
  * @param {string} sAskDesc
  * @param {Function=} fYesFunc
  * @param {Function=} fNoFunc
  * @param {string=} sYesButton
  * @param {string=} sNoButton
  * @param {boolean=} bFocusYesOnShow = true
  * @returns {void}
  */


	AskPopupView.prototype.onShow = function onShow(askDesc) {
		var fYesFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var fNoFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var yesButton = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
		var noButton = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
		var isFocusYesOnShow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;


		this.clearPopup();

		this.fYesAction = fYesFunc || null;
		this.fNoAction = fNoFunc || null;

		this.askDesc(askDesc || '');

		if (yesButton) {
			this.yesButton(yesButton);
		}

		if (noButton) {
			this.noButton(noButton);
		}

		this.bFocusYesOnShow = !!isFocusYesOnShow;
	};

	AskPopupView.prototype.onShowWithDelay = function onShowWithDelay() {
		if (this.bFocusYesOnShow) {
			this.yesFocus(true);
		}
	};

	AskPopupView.prototype.onBuild = function onBuild() {
		var _this2 = this;

		__WEBPACK_IMPORTED_MODULE_4_key___default()('tab, shift+tab, right, left', __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].PopupAsk, function () {
			if (_this2.yesFocus()) {
				_this2.noFocus(true);
			} else {
				_this2.yesFocus(true);
			}
			return false;
		});

		__WEBPACK_IMPORTED_MODULE_4_key___default()('esc', __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["KeyState"].PopupAsk, function () {
			_this2.noClick();
			return false;
		});
	};

	return AskPopupView;
}(__WEBPACK_IMPORTED_MODULE_9_Knoin_AbstractViewNext__["a" /* AbstractViewNext */])) || _class);




/***/ },
/* 75 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** external "window.moment" ***!
  \********************************/
/***/ function(module, exports) {

module.exports = window.moment;

/***/ },
/* 76 */
/* exports provided: HtmlEditor, default */
/* all exports used */
/*!**********************************!*\
  !*** ./dev/Common/HtmlEditor.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (binding) */ __webpack_require__.d(exports, "HtmlEditor", function() { return HtmlEditor; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return HtmlEditor; });









var HtmlEditor = function () {

	/**
  * @param {Object} element
  * @param {Function=} onBlur
  * @param {Function=} onReady
  * @param {Function=} onModeChange
  */
	function HtmlEditor(element) {
		var onBlur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var onReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
		var onModeChange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, HtmlEditor);

		this.blurTimer = 0;
		this.__resizable = false;
		this.__inited = false;
		this.onBlur = null;
		this.onReady = null;
		this.onModeChange = null;

		this.onBlur = onBlur;
		this.onReady = onReady;
		this.onModeChange = onModeChange;

		this.element = element;
		this.$element = __WEBPACK_IMPORTED_MODULE_3_____default()(element);

		this.resize = __WEBPACK_IMPORTED_MODULE_2_____default.a.throttle(__WEBPACK_IMPORTED_MODULE_2_____default.a.bind(this.resizeEditor, this), 100);

		this.init();
	}

	HtmlEditor.prototype.runOnBlur = function runOnBlur() {
		if (this.onBlur) {
			this.onBlur();
		}
	};

	HtmlEditor.prototype.blurTrigger = function blurTrigger() {
		var _this = this;

		if (this.onBlur) {
			__WEBPACK_IMPORTED_MODULE_1_window___default.a.clearTimeout(this.blurTimer);
			this.blurTimer = __WEBPACK_IMPORTED_MODULE_1_window___default.a.setTimeout(function () {
				_this.runOnBlur();
			}, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Magics"].Time200ms);
		}
	};

	HtmlEditor.prototype.focusTrigger = function focusTrigger() {
		if (this.onBlur) {
			__WEBPACK_IMPORTED_MODULE_1_window___default.a.clearTimeout(this.blurTimer);
		}
	};

	/**
  * @returns {boolean}
  */


	HtmlEditor.prototype.isHtml = function isHtml() {
		return this.editor ? 'wysiwyg' === this.editor.mode : false;
	};

	/**
  * @returns {void}
  */


	HtmlEditor.prototype.clearCachedSignature = function clearCachedSignature() {
		if (this.editor) {
			this.editor.execCommand('insertSignature', {
				clearCache: true
			});
		}
	};

	/**
  * @param {string} signature
  * @param {bool} html
  * @param {bool} insertBefore
  * @returns {void}
  */


	HtmlEditor.prototype.setSignature = function setSignature(signature, html, insertBefore) {
		if (this.editor) {
			this.editor.execCommand('insertSignature', {
				isHtml: html,
				insertBefore: insertBefore,
				signature: signature
			});
		}
	};

	/**
  * @returns {boolean}
  */


	HtmlEditor.prototype.checkDirty = function checkDirty() {
		return this.editor ? this.editor.checkDirty() : false;
	};

	HtmlEditor.prototype.resetDirty = function resetDirty() {
		if (this.editor) {
			this.editor.resetDirty();
		}
	};

	/**
  * @param {boolean=} wrapIsHtml = false
  * @returns {string}
  */


	HtmlEditor.prototype.getData = function getData() {
		var wrapIsHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


		var result = '';
		if (this.editor) {
			try {
				if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
					result = this.editor.__plain.getRawData();
				} else {
					result = wrapIsHtml ? '<div data-html-editor-font-wrapper="true" style="font-family: arial, sans-serif; font-size: 13px;">' + this.editor.getData() + '</div>' : this.editor.getData();
				}
			} catch (e) {} // eslint-disable-line no-empty
		}

		return result;
	};

	/**
  * @param {boolean=} wrapIsHtml = false
  * @returns {string}
  */


	HtmlEditor.prototype.getDataWithHtmlMark = function getDataWithHtmlMark() {
		var wrapIsHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		return (this.isHtml() ? ':HTML:' : '') + this.getData(wrapIsHtml);
	};

	HtmlEditor.prototype.modeToggle = function modeToggle(plain, resize) {
		if (this.editor) {
			try {
				if (plain) {
					if ('plain' === this.editor.mode) {
						this.editor.setMode('wysiwyg');
					}
				} else if ('wysiwyg' === this.editor.mode) {
					this.editor.setMode('plain');
				}
			} catch (e) {} // eslint-disable-line no-empty

			if (resize) {
				this.resize();
			}
		}
	};

	HtmlEditor.prototype.setHtmlOrPlain = function setHtmlOrPlain(text, focus) {
		if (':HTML:' === text.substr(0, 6)) {
			this.setHtml(text.substr(6), focus);
		} else {
			this.setPlain(text, focus);
		}
	};

	HtmlEditor.prototype.setHtml = function setHtml(html, focus) {
		if (this.editor && this.__inited) {
			this.clearCachedSignature();

			this.modeToggle(true);

			html = html.replace(/<p[^>]*><\/p>/ig, '');

			try {
				this.editor.setData(html);
			} catch (e) {} // eslint-disable-line no-empty

			if (focus) {
				this.focus();
			}
		}
	};

	HtmlEditor.prototype.replaceHtml = function replaceHtml(find, _replaceHtml) {
		if (this.editor && this.__inited && 'wysiwyg' === this.editor.mode) {
			try {
				this.editor.setData(this.editor.getData().replace(find, _replaceHtml));
			} catch (e) {} // eslint-disable-line no-empty
		}
	};

	HtmlEditor.prototype.setPlain = function setPlain(plain, focus) {
		if (this.editor && this.__inited) {
			this.clearCachedSignature();

			this.modeToggle(false);
			if ('plain' === this.editor.mode && this.editor.plugins.plain && this.editor.__plain) {
				this.editor.__plain.setRawData(plain);
			} else {
				try {
					this.editor.setData(plain);
				} catch (e) {} // eslint-disable-line no-empty
			}

			if (focus) {
				this.focus();
			}
		}
	};

	HtmlEditor.prototype.init = function init() {
		var _this2 = this;

		if (this.element && !this.editor) {
			var initFunc = function initFunc() {

				var config = __WEBPACK_IMPORTED_MODULE_4_Common_Globals__["htmlEditorDefaultConfig"],
				    language = __WEBPACK_IMPORTED_MODULE_6_Storage_Settings__["settingsGet"]('Language'),
				    allowSource = !!__WEBPACK_IMPORTED_MODULE_6_Storage_Settings__["appSettingsGet"]('allowHtmlEditorSourceButton'),
				    biti = !!__WEBPACK_IMPORTED_MODULE_6_Storage_Settings__["appSettingsGet"]('allowHtmlEditorBitiButtons');

				if ((allowSource || !biti) && !config.toolbarGroups.__cfgInited) {
					config.toolbarGroups.__cfgInited = true;

					if (allowSource) {
						config.removeButtons = config.removeButtons.replace(',Source', '');
					}

					if (!biti) {
						config.removePlugins += (config.removePlugins ? ',' : '') + 'bidi';
					}
				}

				config.enterMode = __WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR.ENTER_BR;
				config.shiftEnterMode = __WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR.ENTER_P;

				config.language = __WEBPACK_IMPORTED_MODULE_4_Common_Globals__["htmlEditorLangsMap"][(language || 'en').toLowerCase()] || 'en';
				if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR.env) {
					__WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR.env.isCompatible = true;
				}

				_this2.editor = __WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR.appendTo(_this2.element, config);

				_this2.editor.on('key', function (event) {
					if (event && event.data && __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["EventKeyCode"].Tab === event.data.keyCode) {
						return false;
					}

					return true;
				});

				_this2.editor.on('blur', function () {
					_this2.blurTrigger();
				});

				_this2.editor.on('mode', function () {
					_this2.blurTrigger();
					if (_this2.onModeChange) {
						_this2.onModeChange('plain' !== _this2.editor.mode);
					}
				});

				_this2.editor.on('focus', function () {
					_this2.focusTrigger();
				});

				if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.FileReader) {
					_this2.editor.on('drop', function (event) {
						if (0 < event.data.dataTransfer.getFilesCount()) {
							var file = event.data.dataTransfer.getFile(0);
							if (file && __WEBPACK_IMPORTED_MODULE_1_window___default.a.FileReader && event.data.dataTransfer.id && file.type && file.type.match(/^image/i)) {
								(function () {
									var id = event.data.dataTransfer.id,
									    imageId = '[img=' + id + ']',
									    reader = new __WEBPACK_IMPORTED_MODULE_1_window___default.a.FileReader();

									reader.onloadend = function () {
										if (reader.result) {
											_this2.replaceHtml(imageId, '<img src="' + reader.result + '" />');
										}
									};

									reader.readAsDataURL(file);

									event.data.dataTransfer.setData('text/html', imageId);
								})();
							}
						}
					});
				}

				_this2.editor.on('instanceReady', function () {

					if (_this2.editor.removeMenuItem) {
						_this2.editor.removeMenuItem('cut');
						_this2.editor.removeMenuItem('copy');
						_this2.editor.removeMenuItem('paste');
					}

					_this2.__resizable = true;
					_this2.__inited = true;

					_this2.resize();

					if (_this2.onReady) {
						_this2.onReady();
					}
				});
			};

			if (__WEBPACK_IMPORTED_MODULE_1_window___default.a.CKEDITOR) {
				initFunc();
			} else {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.__initEditor = initFunc;
			}
		}
	};

	HtmlEditor.prototype.focus = function focus() {
		if (this.editor) {
			try {
				this.editor.focus();
			} catch (e) {} // eslint-disable-line no-empty
		}
	};

	HtmlEditor.prototype.hasFocus = function hasFocus() {
		if (this.editor) {
			try {
				return !!this.editor.focusManager.hasFocus;
			} catch (e) {} // eslint-disable-line no-empty
		}

		return false;
	};

	HtmlEditor.prototype.blur = function blur() {
		if (this.editor) {
			try {
				this.editor.focusManager.blur(true);
			} catch (e) {} // eslint-disable-line no-empty
		}
	};

	HtmlEditor.prototype.resizeEditor = function resizeEditor() {
		if (this.editor && this.__resizable) {
			try {
				this.editor.resize(this.$element.width(), this.$element.innerHeight());
			} catch (e) {} // eslint-disable-line no-empty
		}
	};

	HtmlEditor.prototype.setReadOnly = function setReadOnly(value) {
		if (this.editor) {
			try {
				this.editor.setReadOnly(!!value);
			} catch (e) {} // eslint-disable-line no-empty
		}
	};

	HtmlEditor.prototype.clear = function clear(focus) {
		this.setHtml('', focus);
	};

	return HtmlEditor;
}();



/***/ },
/* 77 */
/* exports provided: jassl */
/* exports used: jassl */
/*!*****************************!*\
  !*** ./dev/Common/Jassl.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Promise__ = __webpack_require__(/*! Promise */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Promise__);
/* harmony export (immutable) */ exports["a"] = jassl;




// let rainloopCaches = window.caches && window.caches.open ? window.caches : null;

/**
 * @param {src} src
 * @param {boolean} async = false
 * @returns {Promise}
 */
function jassl(src) {
	var async = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


	if (!__WEBPACK_IMPORTED_MODULE_1_Promise___default.a || !__WEBPACK_IMPORTED_MODULE_1_Promise___default.a.all) {
		throw new Error('Promises are not available your environment.');
	}

	if (!src) {
		throw new Error('src should not be empty.');
	}

	return new __WEBPACK_IMPORTED_MODULE_1_Promise___default.a(function (resolve, reject) {

		var element = __WEBPACK_IMPORTED_MODULE_0_window___default.a.document.createElement('script');

		element.onload = function () {
			resolve(src);
		};

		element.onerror = function () {
			reject(new Error(src));
		};

		element.async = true === async;
		element.src = src;

		__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.body.appendChild(element);
	}) /* .then((s) => {
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
    })*/;
}

/***/ },
/* 78 */
/* exports provided: AbstracCheckbox, default */
/* exports used: AbstracCheckbox */
/*!******************************************!*\
  !*** ./dev/Component/AbstracCheckbox.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstracCheckbox; });
/* unused harmony export default */








var AbstracCheckbox = function (_AbstractComponent) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AbstracCheckbox, _AbstractComponent);

	/**
  * @param {Object} params = {}
  */
	function AbstracCheckbox() {
		var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstracCheckbox);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractComponent.call(this));

		_this.value = params.value;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.value) || !_this.value.subscribe) {
			_this.value = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.value) ? false : !!_this.value);
		}

		_this.enable = params.enable;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.enable) || !_this.enable.subscribe) {
			_this.enable = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.enable) ? true : !!_this.enable);
		}

		_this.disable = params.disable;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.disable) || !_this.disable.subscribe) {
			_this.disable = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(_this.disable) ? false : !!_this.disable);
		}

		_this.label = params.label || '';
		_this.inline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.inline) ? false : params.inline;

		_this.readOnly = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.readOnly) ? false : !!params.readOnly;
		_this.inverted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.inverted) ? false : !!params.inverted;

		_this.labeled = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["isUnd"])(params.label);
		_this.labelAnimated = !!params.labelAnimated;
		return _this;
	}

	AbstracCheckbox.prototype.click = function click() {
		if (!this.readOnly && this.enable() && !this.disable()) {
			this.value(!this.value());
		}
	};

	return AbstracCheckbox;
}(__WEBPACK_IMPORTED_MODULE_5_Component_Abstract__["a" /* AbstractComponent */]);



/***/ },
/* 79 */,
/* 80 */,
/* 81 */
/* exports provided: LanguagesPopupView, default */
/* all exports used */
/*!*************************************!*\
  !*** ./dev/View/Popup/Languages.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "LanguagesPopupView", function() { return LanguagesPopupView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return LanguagesPopupView; });




var _dec, _class;






// import {view, ViewType} from 'Knoin/Knoin';



var LanguagesPopupView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Knoin_Knoin__["popup"])({
	name: 'View/Popup/Languages',
	templateID: 'PopupsLanguages'
}), _dec(_class = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(LanguagesPopupView, _AbstractViewNext);

	function LanguagesPopupView() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LanguagesPopupView);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.fLang = null;
		_this.userLanguage = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');

		_this.langs = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observableArray([]);

		_this.languages = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed(function () {
			var userLanguage = _this.userLanguage();
			return __WEBPACK_IMPORTED_MODULE_3_____default.a.map(_this.langs(), function (language) {
				return {
					key: language,
					user: language === userLanguage,
					selected: __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false),
					fullName: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["convertLangName"])(language)
				};
			});
		});

		_this.langs.subscribe(function () {
			_this.setLanguageSelection();
		});
		return _this;
	}

	LanguagesPopupView.prototype.languageTooltipName = function languageTooltipName(language) {
		var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["convertLangName"])(language, true);
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["convertLangName"])(language, false) === result ? '' : result;
	};

	LanguagesPopupView.prototype.setLanguageSelection = function setLanguageSelection() {
		var currentLang = this.fLang ? __WEBPACK_IMPORTED_MODULE_4_ko___default.a.unwrap(this.fLang) : '';
		__WEBPACK_IMPORTED_MODULE_3_____default.a.each(this.languages(), function (item) {
			item.selected(item.key === currentLang);
		});
	};

	LanguagesPopupView.prototype.onBeforeShow = function onBeforeShow() {
		this.fLang = null;
		this.userLanguage('');

		this.langs([]);
	};

	LanguagesPopupView.prototype.onShow = function onShow(fLanguage, langs, userLanguage) {
		this.fLang = fLanguage;
		this.userLanguage(userLanguage || '');

		this.langs(langs);
	};

	LanguagesPopupView.prototype.changeLanguage = function changeLanguage(lang) {
		if (this.fLang) {
			this.fLang(lang);
		}

		this.cancelCommand();
	};

	return LanguagesPopupView;
}(__WEBPACK_IMPORTED_MODULE_7_Knoin_AbstractViewNext__["a" /* AbstractViewNext */])) || _class);




/***/ },
/* 82 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_cof.js ***!
  \*******************************************/
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 83 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/core-js/library/modules/_ctx.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 134);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 84 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_dom-create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 44)
  , document = __webpack_require__(/*! ./_global */ 21).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 85 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 31) && !__webpack_require__(/*! ./_fails */ 43)(function(){
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 84)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 86 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-define.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var LIBRARY        = __webpack_require__(/*! ./_library */ 62)
  , $export        = __webpack_require__(/*! ./_export */ 42)
  , redefine       = __webpack_require__(/*! ./_redefine */ 90)
  , hide           = __webpack_require__(/*! ./_hide */ 32)
  , has            = __webpack_require__(/*! ./_has */ 26)
  , Iterators      = __webpack_require__(/*! ./_iterators */ 61)
  , $iterCreate    = __webpack_require__(/*! ./_iter-create */ 141)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 66)
  , getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 147)
  , ITERATOR       = __webpack_require__(/*! ./_wks */ 34)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 87 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopn.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(/*! ./_object-keys-internal */ 89)
  , hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 60).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 88 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_object-gops.js ***!
  \***************************************************/
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 89 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(/*! ./_has */ 26)
  , toIObject    = __webpack_require__(/*! ./_to-iobject */ 22)
  , arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 136)(false)
  , IE_PROTO     = __webpack_require__(/*! ./_shared-key */ 67)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 90 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_redefine.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 32);

/***/ },
/* 91 */
/* unknown exports provided */
/* exports used: default */
/*!************************************!*\
  !*** external "window.crossroads" ***!
  \************************************/
/***/ function(module, exports) {

module.exports = window.crossroads;

/***/ },
/* 92 */
/* unknown exports provided */
/* exports used: default */
/*!************************************!*\
  !*** external "window.progressJs" ***!
  \************************************/
/***/ function(module, exports) {

module.exports = window.progressJs;

/***/ },
/* 93 */
/* exports provided: default */
/* exports used: default */
/*!**************************!*\
  !*** ./dev/bootstrap.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Model_Email__ = __webpack_require__(/*! Model/Email */ 38);
/* @flow */








/* harmony default export */ exports["a"] = function (App) {

	__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].__APP__ = App;

	__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["$win"].on('keydown', __WEBPACK_IMPORTED_MODULE_1_Common_Utils__["killCtrlACtrlS"]).on('unload', function () {
		__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["data"].bUnload = true;
	});

	__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["$html"].addClass(__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["bMobileDevice"] ? 'mobile' : 'no-mobile').on('click.dropdown.data-api', __WEBPACK_IMPORTED_MODULE_1_Common_Utils__["detectDropdownVisibility"]);

	var rl = __WEBPACK_IMPORTED_MODULE_0_window___default.a.rl || {};

	rl.i18n = __WEBPACK_IMPORTED_MODULE_5_Common_Translator__["i18n"];
	rl.createCommand = __WEBPACK_IMPORTED_MODULE_1_Common_Utils__["createCommandLegacy"];

	rl.addSettingsViewModel = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["b" /* addSettingsViewModel */];
	rl.addSettingsViewModelForAdmin = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["c" /* addSettingsViewModelForAdmin */];

	rl.addHook = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["d" /* addHook */];
	rl.settingsGet = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["e" /* mainSettingsGet */];
	rl.pluginSettingsGet = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["f" /* settingsGet */];
	rl.pluginRemoteRequest = __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["g" /* remoteRequest */];

	rl.EmailModel = __WEBPACK_IMPORTED_MODULE_6_Model_Email__["EmailModel"];
	rl.Enums = __WEBPACK_IMPORTED_MODULE_3_Common_Enums__;

	__WEBPACK_IMPORTED_MODULE_0_window___default.a.rl = rl;

	__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT = function (fErrorCallback) {

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_Common_Utils__["domReady"])(function () {

			__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {

				if (__WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES && __WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES[0]) {
					__WEBPACK_IMPORTED_MODULE_0_window___default.a.document.getElementById('rl-templates').innerHTML = __WEBPACK_IMPORTED_MODULE_0_window___default.a.rainloopTEMPLATES[0];

					__WEBPACK_IMPORTED_MODULE_0_window___default.a.setTimeout(function () {

						__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["$html"].removeClass('no-js rl-booted-trigger').addClass('rl-booted');

						App.bootstart();
					}, __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["Magics"].Time10ms);
				} else {
					fErrorCallback();
				}

				__WEBPACK_IMPORTED_MODULE_0_window___default.a.__APP_BOOT = null;
			}, __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["Magics"].Time10ms);
		});
	};
};

/***/ },
/* 94 */,
/* 95 */
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Capa.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);






var CapaAdminStore = function () {
	function CapaAdminStore() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CapaAdminStore);

		this.additionalAccounts = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.identities = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.gravatar = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.attachmentThumbnails = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.sieve = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.filters = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.themes = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
		this.userBackground = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.openPGP = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.twoFactorAuth = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.twoFactorAuthForce = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.templates = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	}

	CapaAdminStore.prototype.populate = function populate() {
		this.additionalAccounts(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].AdditionalAccounts));
		this.identities(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Identities));
		this.gravatar(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Gravatar));
		this.attachmentThumbnails(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].AttachmentThumbnails));
		this.sieve(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Sieve));
		this.filters(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Filters));
		this.themes(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Themes));
		this.userBackground(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].UserBackground));
		this.openPGP(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].OpenPGP));
		this.twoFactorAuth(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].TwoFactor));
		this.twoFactorAuthForce(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].TwoFactorForce));
		this.templates(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["capa"](__WEBPACK_IMPORTED_MODULE_2_Common_Enums__["Capa"].Templates));
	};

	return CapaAdminStore;
}();

/* harmony default export */ exports["a"] = new CapaAdminStore();

/***/ },
/* 96 */
/* exports provided: default */
/* exports used: default */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Domain.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);




var DomainAdminStore = function DomainAdminStore() {
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DomainAdminStore);

	this.domains = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
	this.domains.loading = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ 'throttle': 100 });
	this.domainsWithoutAliases = this.domains.filter(function (item) {
		return item && !item.alias;
	});
};

/* harmony default export */ exports["a"] = new DomainAdminStore();

/***/ },
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/* exports provided: AbstractApp, default */
/* exports used: AbstractApp */
/*!*****************************!*\
  !*** ./dev/App/Abstract.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_key__ = __webpack_require__(/*! key */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ssm__ = __webpack_require__(/*! ssm */ 175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ssm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ssm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Common_Cmd__ = __webpack_require__(/*! Common/Cmd */ 102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Common_Events__ = __webpack_require__(/*! Common/Events */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Stores_Language__ = __webpack_require__(/*! Stores/Language */ 53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Stores_Theme__ = __webpack_require__(/*! Stores/Theme */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_Stores_Social__ = __webpack_require__(/*! Stores/Social */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_Knoin_AbstractBoot__ = __webpack_require__(/*! Knoin/AbstractBoot */ 114);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractApp; });
/* unused harmony export default */





























var AbstractApp = function (_AbstractBoot) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AbstractApp, _AbstractBoot);

	/**
  * @param {RemoteStorage|AdminRemoteStorage} Remote
  */
	function AbstractApp(Remote) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractApp);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractBoot.call(this));

		_this.googlePreviewSupportedCache = null;
		_this.isLocalAutocomplete = true;
		_this.iframe = null;
		_this.lastErrorTime = 0;

		_this.iframe = __WEBPACK_IMPORTED_MODULE_4_____default()('<iframe class="internal-hiddden" />').appendTo('body');

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].on('error', function (event) {
			if (event && event.originalEvent && event.originalEvent.message && -1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["inArray"])(event.originalEvent.message, ['Script error.', 'Uncaught Error: Error calling method on NPObject.'])) {
				var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["timestamp"])();
				if (_this.lastErrorTime >= time) {
					return;
				}

				_this.lastErrorTime = time;

				Remote.jsError(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["noop"], event.originalEvent.message, event.originalEvent.filename, event.originalEvent.lineno, __WEBPACK_IMPORTED_MODULE_3_window___default.a.location && __WEBPACK_IMPORTED_MODULE_3_window___default.a.location.toString ? __WEBPACK_IMPORTED_MODULE_3_window___default.a.location.toString() : '', __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].attr('class'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["microtime"])() - __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["startMicrotime"]);
			}
		});

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].on('resize', function () {
			__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('window.resize');
		});

		__WEBPACK_IMPORTED_MODULE_15_Common_Events__["b" /* sub */]('window.resize', __WEBPACK_IMPORTED_MODULE_5_____default.a.throttle(function () {
			var iH = __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].height(),
			    iW = __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].height();

			if (__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].__sizes[0] !== iH || __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].__sizes[1] !== iW) {
				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].__sizes[0] = iH;
				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].__sizes[1] = iW;

				__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('window.resize.real');
			}
		}, __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time50ms));

		// DEBUG
		//		Events.sub({
		//			'window.resize': function() {
		//				window.console.log('window.resize');
		//			},
		//			'window.resize.real': function() {
		//				window.console.log('window.resize.real');
		//			}
		//		});

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$doc"].on('keydown', function (event) {
			if (event && event.ctrlKey) {
				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('rl-ctrl-key-pressed');
			}
		}).on('keyup', function (event) {
			if (event && !event.ctrlKey) {
				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].removeClass('rl-ctrl-key-pressed');
			}
		});

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$doc"].on('mousemove keypress click', __WEBPACK_IMPORTED_MODULE_5_____default.a.debounce(function () {
			__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('rl.auto-logout-refresh');
		}, __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time5s));

		__WEBPACK_IMPORTED_MODULE_7_key___default()('esc, enter', __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["KeyState"].All, function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["detectDropdownVisibility"])();
		});

		if (__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('allowCmdInterface')) {
			__WEBPACK_IMPORTED_MODULE_7_key___default()('ctrl+shift+`', __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["KeyState"].All, function () {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Common_Cmd__["a" /* toggle */])();
			});
		}
		return _this;
	}

	AbstractApp.prototype.remote = function remote() {
		return null;
	};

	AbstractApp.prototype.data = function data() {
		return null;
	};

	AbstractApp.prototype.getApplicationConfiguration = function getApplicationConfiguration(name, default_) {
		return this.applicationConfiguration[name] || default_;
	};

	/**
  * @param {string} link
  * @returns {boolean}
  */


	AbstractApp.prototype.download = function download(link) {

		if (__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["sUserAgent"] && (-1 < __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["sUserAgent"].indexOf('chrome') || -1 < __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["sUserAgent"].indexOf('chrome'))) {
			var oLink = __WEBPACK_IMPORTED_MODULE_3_window___default.a.document.createElement('a');
			oLink.href = link;

			if (__WEBPACK_IMPORTED_MODULE_3_window___default.a.document && __WEBPACK_IMPORTED_MODULE_3_window___default.a.document.createEvent) {
				var oE = __WEBPACK_IMPORTED_MODULE_3_window___default.a.document.createEvent.MouseEvents;
				if (oE && oE.initEvent && oLink.dispatchEvent) {
					oE.initEvent('click', true, true);
					oLink.dispatchEvent(oE);
					return true;
				}
			}
		}

		if (__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["bMobileDevice"]) {
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.open(link, '_self');
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.focus();
		} else {
			this.iframe.attr('src', link);
			//		window.document.location.href = link;
		}

		return true;
	};

	/**
  * @returns {boolean}
  */


	AbstractApp.prototype.googlePreviewSupported = function googlePreviewSupported() {
		if (null === this.googlePreviewSupportedCache) {
			this.googlePreviewSupportedCache = !!__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["settingsGet"]('AllowGoogleSocial') && !!__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["settingsGet"]('AllowGoogleSocialPreview');
		}

		return this.googlePreviewSupportedCache;
	};

	/**
  * @param {string} title
  */


	AbstractApp.prototype.setWindowTitle = function setWindowTitle(title) {
		title = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["isNormal"])(title) && 0 < title.length ? '' + title : '';
		if (__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["settingsGet"]('Title')) {
			title += (title ? ' - ' : '') + __WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["settingsGet"]('Title');
		}

		__WEBPACK_IMPORTED_MODULE_3_window___default.a.document.title = title + ' ...';
		__WEBPACK_IMPORTED_MODULE_3_window___default.a.document.title = title;
	};

	AbstractApp.prototype.redirectToAdminPanel = function redirectToAdminPanel() {
		__WEBPACK_IMPORTED_MODULE_5_____default.a.delay(function () {
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.location.href = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Common_Links__["e" /* rootAdmin */])();
		}, __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time100ms);
	};

	AbstractApp.prototype.clearClientSideToken = function clearClientSideToken() {
		if (__WEBPACK_IMPORTED_MODULE_3_window___default.a.__rlah_clear) {
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.__rlah_clear();
		}
	};

	/**
  * @param {string} token
  */


	AbstractApp.prototype.setClientSideToken = function setClientSideToken(token) {
		if (__WEBPACK_IMPORTED_MODULE_3_window___default.a.__rlah_set) {
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.__rlah_set(token);

			__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["settingsSet"]('AuthAccountHash', token);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Common_Links__["f" /* populateAuthSuffix */])();
		}
	};

	/**
  * @param {boolean=} admin = false
  * @param {boolean=} logout = false
  * @param {boolean=} close = false
  */


	AbstractApp.prototype.loginAndLogoutReload = function loginAndLogoutReload() {
		var admin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		var logout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		var close = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


		var inIframe = !!__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('inIframe');
		var customLogoutLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('customLogoutLink'));

		if (logout) {
			this.clearClientSideToken();
		}

		if (logout && close && __WEBPACK_IMPORTED_MODULE_3_window___default.a.close) {
			__WEBPACK_IMPORTED_MODULE_3_window___default.a.close();
		}

		customLogoutLink = customLogoutLink || (admin ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Common_Links__["e" /* rootAdmin */])() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Common_Links__["g" /* rootUser */])());

		if (logout && __WEBPACK_IMPORTED_MODULE_3_window___default.a.location.href !== customLogoutLink) {
			__WEBPACK_IMPORTED_MODULE_5_____default.a.delay(function () {

				if (inIframe && __WEBPACK_IMPORTED_MODULE_3_window___default.a.parent) {
					__WEBPACK_IMPORTED_MODULE_3_window___default.a.parent.location.href = customLogoutLink;
				} else {
					__WEBPACK_IMPORTED_MODULE_3_window___default.a.location.href = customLogoutLink;
				}

				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].trigger('rl.tooltips.diactivate');
			}, __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time100ms);
		} else {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20_Knoin_Knoin__["routeOff"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20_Knoin_Knoin__["setHash"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Common_Links__["h" /* root */])(), true);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20_Knoin_Knoin__["routeOff"])();

			__WEBPACK_IMPORTED_MODULE_5_____default.a.delay(function () {

				if (inIframe && __WEBPACK_IMPORTED_MODULE_3_window___default.a.parent) {
					__WEBPACK_IMPORTED_MODULE_3_window___default.a.parent.location.reload();
				} else {
					__WEBPACK_IMPORTED_MODULE_3_window___default.a.location.reload();
				}

				__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].trigger('rl.tooltips.diactivate');
			}, __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time100ms);
		}
	};

	AbstractApp.prototype.historyBack = function historyBack() {
		__WEBPACK_IMPORTED_MODULE_3_window___default.a.history.back();
	};

	AbstractApp.prototype.bootstart = function bootstart() {

		// log('Ps' + 'ss, hac' + 'kers! The' + 're\'s not' + 'hing inte' + 'resting :' + ')');

		__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('rl.bootstart');

		var mobile = __WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('mobile');

		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('SaveTrigger', __webpack_require__(/*! Component/SaveTrigger */ 109));
		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Input', __webpack_require__(/*! Component/Input */ 106));
		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Select', __webpack_require__(/*! Component/Select */ 111));
		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Radio', __webpack_require__(/*! Component/Radio */ 108));
		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('TextArea', __webpack_require__(/*! Component/TextArea */ 112));
		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Date', __webpack_require__(/*! Component/Date */ 105));

		__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('x-script', __webpack_require__(/*! Component/Script */ 110));
		//		ko.components.register('svg-icon', require('Component/SvgIcon'));

		if (__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('materialDesign') && __WEBPACK_IMPORTED_MODULE_9_Common_Globals__["bAnimationSupported"]) {
			__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Checkbox', __webpack_require__(/*! Component/MaterialDesign/Checkbox */ 107));
			__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 56));
		} else {
			//			ko.components.register('Checkbox', require('Component/Classic/Checkbox'));
			//			ko.components.register('CheckboxSimple', require('Component/Classic/Checkbox'));
			__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('Checkbox', __webpack_require__(/*! Component/Checkbox */ 56));
			__WEBPACK_IMPORTED_MODULE_6_ko___default.a.components.register('CheckboxSimple', __webpack_require__(/*! Component/Checkbox */ 56));
		}

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_Common_Translator__["initOnStartOrLangChange"])(__WEBPACK_IMPORTED_MODULE_13_Common_Translator__["initNotificationLanguage"]);

		__WEBPACK_IMPORTED_MODULE_5_____default.a.delay(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["windowResizeCallback"], __WEBPACK_IMPORTED_MODULE_11_Common_Enums__["Magics"].Time1s);

		__WEBPACK_IMPORTED_MODULE_15_Common_Events__["b" /* sub */]('ssm.mobile-enter', function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["leftPanelDisabled"])(true);
		});

		__WEBPACK_IMPORTED_MODULE_15_Common_Events__["b" /* sub */]('ssm.mobile-leave', function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["leftPanelDisabled"])(false);
		});

		if (__WEBPACK_IMPORTED_MODULE_16_Storage_Settings__["appSettingsGet"]('loginGlassStyle')) {
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('glass');
		}

		if (!mobile) {
			__WEBPACK_IMPORTED_MODULE_8_ssm___default.a.addState({
				id: 'mobile',
				query: '(max-width: 767px)',
				onEnter: function onEnter() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('ssm-state-mobile');
					__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('ssm.mobile-enter');
				},
				onLeave: function onLeave() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].removeClass('ssm-state-mobile');
					__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('ssm.mobile-leave');
				}
			});

			__WEBPACK_IMPORTED_MODULE_8_ssm___default.a.addState({
				id: 'tablet',
				query: '(min-width: 768px) and (max-width: 999px)',
				onEnter: function onEnter() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('ssm-state-tablet');
				},
				onLeave: function onLeave() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].removeClass('ssm-state-tablet');
				}
			});

			__WEBPACK_IMPORTED_MODULE_8_ssm___default.a.addState({
				id: 'desktop',
				query: '(min-width: 1000px) and (max-width: 1400px)',
				onEnter: function onEnter() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('ssm-state-desktop');
				},
				onLeave: function onLeave() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].removeClass('ssm-state-desktop');
				}
			});

			__WEBPACK_IMPORTED_MODULE_8_ssm___default.a.addState({
				id: 'desktop-large',
				query: '(min-width: 1401px)',
				onEnter: function onEnter() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('ssm-state-desktop-large');
				},
				onLeave: function onLeave() {
					__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].removeClass('ssm-state-desktop-large');
				}
			});
		} else {
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].addClass('ssm-state-mobile').addClass('rl-mobile');
			__WEBPACK_IMPORTED_MODULE_15_Common_Events__["a" /* pub */]('ssm.mobile-enter');
		}

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["leftPanelDisabled"].subscribe(function (bValue) {
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].toggleClass('rl-left-panel-disabled', bValue);
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].toggleClass('rl-left-panel-enabled', !bValue);
		});

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["leftPanelType"].subscribe(function (sValue) {
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].toggleClass('rl-left-panel-none', 'none' === sValue);
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$html"].toggleClass('rl-left-panel-short', 'short' === sValue);
		});

		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["leftPanelDisabled"].valueHasMutated();

		__WEBPACK_IMPORTED_MODULE_17_Stores_Language__["a" /* default */].populate();
		__WEBPACK_IMPORTED_MODULE_18_Stores_Theme__["a" /* default */].populate();
		__WEBPACK_IMPORTED_MODULE_19_Stores_Social__["a" /* default */].populate();
	};

	return AbstractApp;
}(__WEBPACK_IMPORTED_MODULE_21_Knoin_AbstractBoot__["a" /* AbstractBoot */]);



/***/ },
/* 101 */,
/* 102 */
/* exports provided: bind, toggle */
/* exports used: toggle */
/*!***************************!*\
  !*** ./dev/Common/Cmd.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__ = __webpack_require__(/*! Stores/Theme */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Stores_Language__ = __webpack_require__(/*! Stores/Language */ 53);
/* unused harmony export bind */
/* harmony export (immutable) */ exports["a"] = toggle;
















var cmdDom = null,
    contoller = null;

/**
 * @params {string} cmd
 * @returns {string}
 */
function cmdError(cmd) {
	return __webpack_require__(/*! Html/Cmds/Error.html */ 165).replace('{{ cmd }}', cmd);
}

/**
 * @returns {string}
 */
function cmdClear(dom) {
	dom.find('.rl-cmd-history-data').empty();
	return '';
}

/**
 * @returns {string}
 */
function cmdHelp(cmds) {
	return __webpack_require__(/*! Html/Cmds/Help.html */ 166).replace('{{ commands }}', cmds.join(' '));
}

/**
 * @returns {string}
 */
function cmdTheme(param, themes) {
	if (param && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["inArray"])(param, themes)) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["changeTheme"])(param);
		return '';
	}
	return __webpack_require__(/*! Html/Cmds/ThemeEmpty.html */ 169).replace('{{ themes }}', themes.join(', '));
}

/**
 * @returns {string}
 */
function cmdLang(param, isAdmin, langs) {
	if (param && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["inArray"])(param, langs)) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["reload"])(isAdmin, param);
		return '';
	}
	return __webpack_require__(/*! Html/Cmds/LangEmpty.html */ 167).replace('{{ langs }}', langs.join(', '));
}

/**
 * @returns {string}
 */
function cmdVersion() {
	return __webpack_require__(/*! Html/Cmds/Version.html */ 170).replace('{{ version }}', __WEBPACK_IMPORTED_MODULE_9_Storage_Settings__["appSettingsGet"]('version') + ' (' + __WEBPACK_IMPORTED_MODULE_9_Storage_Settings__["appSettingsGet"]('appVersionType') + ')');
}

var CmdContoller = function () {
	function CmdContoller(dom) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CmdContoller);

		this.dom = null;
		this.opened = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);
		this.cmd = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
		this.focused = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);
		this.themes = __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__["a" /* default */].themes;
		this.cmdHistory = [];
		this.cmdHistoryShift = 0;
		this.cmdHelper = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
		this.cmds = ['help', 'version', 'clear', 'theme', 'lang'];
		this.cmdsWithParameters = ['theme', 'lang'];
		this.isAdmin = false;

		this.dom = dom;
		this.isAdmin = !!__WEBPACK_IMPORTED_MODULE_9_Storage_Settings__["appSettingsGet"]('admin');
	}

	CmdContoller.prototype.runCmd = function runCmd(cmd, params, isTab) {

		var result = '',
		    values = null;

		this.cmdHelper('');

		if (isTab) {
			switch (cmd) {
				case 'lang':
					values = (this.isAdmin ? __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languagesAdmin() : __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languages()).filter(function (line) {
						return 0 === line.lastIndexOf(params, 0);
					});
					break;
				case 'theme':
					values = __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__["a" /* default */].themes().filter(function (line) {
						return 0 === line.lastIndexOf(params, 0);
					});
					break;
				default:
					break;
			}

			if (cmd && values) {
				if (1 === values.length && values[0]) {
					this.cmd(cmd + ' ' + values[0]);
				} else if (1 < values.length && values[0] && values[1]) {
					var sub = '',
					    index = 0;

					var list = values[0].split(''),
					    len = list.length;

					for (; index < len; index++) {
						if (values[1][index] === list[index]) {
							sub += list[index];
						} else {
							break;
						}
					}

					if (sub) {
						this.cmdHelper('[' + values.join(', ') + ']');
						this.cmd(cmd + ' ' + sub);
					}
				}
			}

			return '';
		}

		switch (cmd) {
			case 'hi':
				result = 'hello';
				break;
			case '?':
			case 'ls':
			case 'help':
				result = cmdHelp(this.cmds);
				break;
			case 'v':
			case 'version':
				result = cmdVersion();
				break;
			case 'clear':
				result = cmdClear(this.dom);
				break;
			case 'theme':
				result = cmdTheme(params, __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__["a" /* default */].themes());
				break;
			case 'lang':
				result = cmdLang(params, this.isAdmin, this.isAdmin ? __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languagesAdmin() : __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languages());
				break;
			default:
				result = cmdError(cmd);
				break;
		}

		return result;
	};

	CmdContoller.prototype.onCmd = function onCmd(isTab) {
		var _this = this;

		var cmdLine = this.cmd().replace(/[\s]+/, ' '),
		    cmdParts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["trim"])(cmdLine).replace().split(/[\s]+/),
		    cmd = cmdParts.shift();

		if ('' === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["trim"])(cmdLine)) {
			return false;
		}

		if (isTab) {
			if (-1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["inArray"])(cmd, this.cmds)) {
				var result = this.runCmd(cmd, cmdParts.join(' '), true);
				if (result) {
					this.cmd(result);
				}
			} else {
				var values = this.cmds.filter(function (line) {
					return line !== cmd && 0 === line.lastIndexOf(cmd, 0);
				});
				if (1 === values.length && values[0]) {
					this.cmd(values[0] + (-1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["inArray"])(values[0], this.cmdsWithParameters) ? ' ' : ''));
				}
			}
		} else {
			(function () {
				_this.cmdHistory.unshift(cmdLine);
				_this.cmdHistory = __WEBPACK_IMPORTED_MODULE_3_____default.a.uniq(_this.cmdHistory);
				_this.cmdHistoryShift = 0;

				var result = _this.runCmd(cmd, cmdParts.join(' '), false),
				    h = _this.dom.find('.rl-cmd-history-data');

				if (h && h[0]) {
					h.append(__WEBPACK_IMPORTED_MODULE_2_____default()('<div></div>').html(__webpack_require__(/*! Html/Cmds/Main.html */ 168).replace('{{ cmd }}', cmdLine)));
					if (result) {
						h.append(__WEBPACK_IMPORTED_MODULE_2_____default()('<div></div>').html(result));
					}

					__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(function () {
						_this.dom.find('.rl-cmd-history').scrollTop(h.height());
					}, 50);
				}
			})();
		}

		return true;
	};

	CmdContoller.prototype.onEsc = function onEsc() {
		this.opened(false);
		return false;
	};

	CmdContoller.prototype.onTab = function onTab() {
		this.onCmd(true);
		return false;
	};

	CmdContoller.prototype.onEnter = function onEnter() {
		this.onCmd(false);
		this.cmd('');
		return false;
	};

	CmdContoller.prototype.onKeyDown = function onKeyDown(event) {
		if (event && event.keyCode && !event.metaKey && !event.ctrlKey && !event.shiftKey && 0 < this.cmdHistory.length) {
			var code = __WEBPACK_IMPORTED_MODULE_1_window___default.a.parseInt(event.keyCode, 10);
			if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["EventKeyCode"].Up === code || __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["EventKeyCode"].Down === code) {
				if (this.cmdHistory[this.cmdHistoryShift]) {
					this.cmd(this.cmdHistory[this.cmdHistoryShift]);
					if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["EventKeyCode"].Up === code) {
						this.cmdHistoryShift += 1;
					} else if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["EventKeyCode"].Down === code) {
						this.cmdHistoryShift -= 1;
					}
				} else {
					this.cmdHistoryShift = 0;
				}

				return false;
			}
		}

		return true;
	};

	return CmdContoller;
}();

/**
 * @returns {void}
 */


function bind(dom) {
	if (!contoller) {
		contoller = new CmdContoller(dom);

		__WEBPACK_IMPORTED_MODULE_4_ko___default.a.applyBindingAccessorsToNode(dom[0], {
			translatorInit: true,
			template: function template() {
				return { name: 'Cmd' };
			}
		}, contoller);
	}
}

/**
 * @returns {void}
 */
function init() {
	if (null === cmdDom) {
		cmdDom = __WEBPACK_IMPORTED_MODULE_2_____default()('<div></div>');
		cmdDom.appendTo(__WEBPACK_IMPORTED_MODULE_5_Common_Globals__["$body"]);

		bind(cmdDom);
	}
}

/**
 * @returns {void}
 */
function toggle() {
	if (__WEBPACK_IMPORTED_MODULE_9_Storage_Settings__["appSettingsGet"]('allowCmdInterface')) {
		init();

		__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(function () {
			if (contoller) {
				contoller.opened(!contoller.opened());
				if (contoller.opened()) {
					__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(function () {
						if (contoller && contoller.focused) {
							contoller.focused(true);
						}
					}, __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Magics"].Time50ms);
				}
			}
		}, __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Magics"].Time50ms);
	}
}

/***/ },
/* 103 */
/* exports provided: Mime, default */
/* exports used: Mime */
/*!****************************!*\
  !*** ./dev/Common/Mime.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Mime; });
/* unused harmony export default */

/* eslint key-spacing: 0 */
/* eslint quote-props: 0 */

var Mime = {
	'eml': 'message/rfc822',
	'mime': 'message/rfc822',
	'txt': 'text/plain',
	'text': 'text/plain',
	'def': 'text/plain',
	'list': 'text/plain',
	'in': 'text/plain',
	'ini': 'text/plain',
	'log': 'text/plain',
	'sql': 'text/plain',
	'cfg': 'text/plain',
	'conf': 'text/plain',
	'asc': 'text/plain',
	'rtx': 'text/richtext',
	'vcard': 'text/vcard',
	'vcf': 'text/vcard',
	'htm': 'text/html',
	'html': 'text/html',
	'csv': 'text/csv',
	'ics': 'text/calendar',
	'ifb': 'text/calendar',
	'xml': 'text/xml',
	'json': 'application/json',
	'swf': 'application/x-shockwave-flash',
	'hlp': 'application/winhlp',
	'wgt': 'application/widget',
	'chm': 'application/vnd.ms-htmlhelp',
	'p10': 'application/pkcs10',
	'p7c': 'application/pkcs7-mime',
	'p7m': 'application/pkcs7-mime',
	'p7s': 'application/pkcs7-signature',
	'torrent': 'application/x-bittorrent',

	// scripts
	'js': 'application/javascript',
	'pl': 'text/perl',
	'css': 'text/css',
	'asp': 'text/asp',
	'php': 'application/x-httpd-php',
	'php3': 'application/x-httpd-php',
	'php4': 'application/x-httpd-php',
	'php5': 'application/x-httpd-php',
	'phtml': 'application/x-httpd-php',

	// images
	'png': 'image/png',
	'jpg': 'image/jpeg',
	'jpeg': 'image/jpeg',
	'jpe': 'image/jpeg',
	'jfif': 'image/jpeg',
	'gif': 'image/gif',
	'bmp': 'image/bmp',
	'cgm': 'image/cgm',
	'ief': 'image/ief',
	'ico': 'image/x-icon',
	'tif': 'image/tiff',
	'tiff': 'image/tiff',
	'svg': 'image/svg+xml',
	'svgz': 'image/svg+xml',
	'djv': 'image/vnd.djvu',
	'djvu': 'image/vnd.djvu',
	'webp': 'image/webp',

	// archives
	'zip': 'application/zip',
	'7z': 'application/x-7z-compressed',
	'rar': 'application/x-rar-compressed',
	'exe': 'application/x-msdownload',
	'dll': 'application/x-msdownload',
	'scr': 'application/x-msdownload',
	'com': 'application/x-msdownload',
	'bat': 'application/x-msdownload',
	'msi': 'application/x-msdownload',
	'cab': 'application/vnd.ms-cab-compressed',
	'gz': 'application/x-gzip',
	'tgz': 'application/x-gzip',
	'bz': 'application/x-bzip',
	'bz2': 'application/x-bzip2',
	'deb': 'application/x-debian-package',

	// fonts
	'psf': 'application/x-font-linux-psf',
	'otf': 'application/x-font-otf',
	'pcf': 'application/x-font-pcf',
	'snf': 'application/x-font-snf',
	'ttf': 'application/x-font-ttf',
	'ttc': 'application/x-font-ttf',

	// audio
	'mp3': 'audio/mpeg',
	'amr': 'audio/amr',
	'aac': 'audio/x-aac',
	'aif': 'audio/x-aiff',
	'aifc': 'audio/x-aiff',
	'aiff': 'audio/x-aiff',
	'wav': 'audio/x-wav',
	'wma': 'audio/x-ms-wma',
	'wax': 'audio/x-ms-wax',
	'midi': 'audio/midi',
	'mp4a': 'audio/mp4',
	'ogg': 'audio/ogg',
	'weba': 'audio/webm',
	'ra': 'audio/x-pn-realaudio',
	'ram': 'audio/x-pn-realaudio',
	'rmp': 'audio/x-pn-realaudio-plugin',
	'm3u': 'audio/x-mpegurl',

	// video
	'flv': 'video/x-flv',
	'qt': 'video/quicktime',
	'mov': 'video/quicktime',
	'wmv': 'video/windows-media',
	'avi': 'video/x-msvideo',
	'mpg': 'video/mpeg',
	'mpeg': 'video/mpeg',
	'mpe': 'video/mpeg',
	'm1v': 'video/mpeg',
	'm2v': 'video/mpeg',
	'3gp': 'video/3gpp',
	'3g2': 'video/3gpp2',
	'h261': 'video/h261',
	'h263': 'video/h263',
	'h264': 'video/h264',
	'jpgv': 'video/jpgv',
	'mp4': 'video/mp4',
	'mp4v': 'video/mp4',
	'mpg4': 'video/mp4',
	'ogv': 'video/ogg',
	'webm': 'video/webm',
	'm4v': 'video/x-m4v',
	'asf': 'video/x-ms-asf',
	'asx': 'video/x-ms-asf',
	'wm': 'video/x-ms-wm',
	'wmx': 'video/x-ms-wmx',
	'wvx': 'video/x-ms-wvx',
	'movie': 'video/x-sgi-movie',

	// adobe
	'pdf': 'application/pdf',
	'psd': 'image/vnd.adobe.photoshop',
	'ai': 'application/postscript',
	'eps': 'application/postscript',
	'ps': 'application/postscript',

	// ms office
	'doc': 'application/msword',
	'dot': 'application/msword',
	'rtf': 'application/rtf',
	'xls': 'application/vnd.ms-excel',
	'ppt': 'application/vnd.ms-powerpoint',
	'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
	'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',

	// open office
	'odt': 'application/vnd.oasis.opendocument.text',
	'ods': 'application/vnd.oasis.opendocument.spreadsheet'
};



/***/ },
/* 104 */
/* exports provided: AbstracRadio, default */
/* exports used: AbstracRadio */
/*!***************************************!*\
  !*** ./dev/Component/AbstracRadio.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstracRadio; });
/* unused harmony export default */









var AbstracRadio = function (_AbstractComponent) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AbstracRadio, _AbstractComponent);

	/**
  * @param {Object} params
  */
	function AbstracRadio(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstracRadio);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractComponent.call(this));

		_this.values = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observableArray([]);

		_this.value = params.value;
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(_this.value) || !_this.value.subscribe) {
			_this.value = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
		}

		_this.inline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(params.inline) ? false : params.inline;
		_this.readOnly = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["isUnd"])(params.readOnly) ? false : !!params.readOnly;

		if (params.values) {
			_this.values(__WEBPACK_IMPORTED_MODULE_3_____default.a.map(params.values, function (label, value) {
				return { label: label, value: value };
			}));
		}

		_this.click = __WEBPACK_IMPORTED_MODULE_3_____default.a.bind(_this.click, _this);
		return _this;
	}

	AbstracRadio.prototype.click = function click(value) {
		if (!this.readOnly && value) {
			this.value(value.value);
		}
	};

	return AbstracRadio;
}(__WEBPACK_IMPORTED_MODULE_6_Component_Abstract__["a" /* AbstractComponent */]);



/***/ },
/* 105 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./dev/Component/Date.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 48);







var DateComponent = function (_AbstractInput) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(DateComponent, _AbstractInput);

  function DateComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DateComponent);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractInput.apply(this, arguments));
  }

  return DateComponent;
}(__WEBPACK_IMPORTED_MODULE_4_Component_AbstractInput__["a" /* AbstractInput */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["b" /* componentExportHelper */])(DateComponent, 'DateComponent');

/***/ },
/* 106 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./dev/Component/Input.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 48);







var InputComponent = function (_AbstractInput) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(InputComponent, _AbstractInput);

  function InputComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, InputComponent);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractInput.apply(this, arguments));
  }

  return InputComponent;
}(__WEBPACK_IMPORTED_MODULE_4_Component_AbstractInput__["a" /* AbstractInput */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["b" /* componentExportHelper */])(InputComponent, 'InputComponent');

/***/ },
/* 107 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./dev/Component/MaterialDesign/Checkbox.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Component_AbstracCheckbox__ = __webpack_require__(/*! Component/AbstracCheckbox */ 78);









var CheckboxMaterialDesignComponent = function (_AbstracCheckbox) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(CheckboxMaterialDesignComponent, _AbstracCheckbox);

	/**
  * @param {Object} params
  */
	function CheckboxMaterialDesignComponent(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CheckboxMaterialDesignComponent);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstracCheckbox.call(this, params));

		_this.animationBox = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false).extend({ falseTimeout: 200 });
		_this.animationCheckmark = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false).extend({ falseTimeout: 200 });

		_this.animationBoxSetTrue = __WEBPACK_IMPORTED_MODULE_3_____default.a.bind(_this.animationBoxSetTrue, _this);
		_this.animationCheckmarkSetTrue = __WEBPACK_IMPORTED_MODULE_3_____default.a.bind(_this.animationCheckmarkSetTrue, _this);

		_this.disposable.push(_this.value.subscribe(function (value) {
			_this.triggerAnimation(value);
		}, _this));
		return _this;
	}

	CheckboxMaterialDesignComponent.prototype.animationBoxSetTrue = function animationBoxSetTrue() {
		this.animationBox(true);
	};

	CheckboxMaterialDesignComponent.prototype.animationCheckmarkSetTrue = function animationCheckmarkSetTrue() {
		this.animationCheckmark(true);
	};

	CheckboxMaterialDesignComponent.prototype.triggerAnimation = function triggerAnimation(box) {
		if (box) {
			this.animationBoxSetTrue();
			__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(this.animationCheckmarkSetTrue, 200);
		} else {
			this.animationCheckmarkSetTrue();
			__WEBPACK_IMPORTED_MODULE_3_____default.a.delay(this.animationBoxSetTrue, 200);
		}
	};

	return CheckboxMaterialDesignComponent;
}(__WEBPACK_IMPORTED_MODULE_6_Component_AbstracCheckbox__["a" /* AbstracCheckbox */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Component_Abstract__["b" /* componentExportHelper */])(CheckboxMaterialDesignComponent, 'CheckboxMaterialDesignComponent');

/***/ },
/* 108 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./dev/Component/Radio.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_AbstracRadio__ = __webpack_require__(/*! Component/AbstracRadio */ 104);







var RadioComponent = function (_AbstracRadio) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(RadioComponent, _AbstracRadio);

  function RadioComponent() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, RadioComponent);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstracRadio.apply(this, arguments));
  }

  return RadioComponent;
}(__WEBPACK_IMPORTED_MODULE_4_Component_AbstracRadio__["a" /* AbstracRadio */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Component_Abstract__["b" /* componentExportHelper */])(RadioComponent, 'RadioComponent');

/***/ },
/* 109 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./dev/Component/SaveTrigger.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);








var SaveTriggerComponent = function (_AbstractComponent) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SaveTriggerComponent, _AbstractComponent);

	/**
  * @param {Object} params
  */
	function SaveTriggerComponent(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SaveTriggerComponent);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractComponent.call(this));

		_this.element = params.element || null;
		_this.value = params.value && params.value.subscribe ? params.value : null;

		if (_this.element) {
			if (_this.value) {
				_this.element.css('display', 'inline-block');

				if (params.verticalAlign) {
					_this.element.css('vertical-align', params.verticalAlign);
				}

				_this.setState(_this.value());

				_this.disposable.push(_this.value.subscribe(_this.setState, _this));
			} else {
				_this.element.hide();
			}
		}
		return _this;
	}

	SaveTriggerComponent.prototype.setState = function setState(value) {

		switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"])(value)) {
			case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].TrueResult:
				this.element.find('.animated,.error').hide().removeClass('visible').end().find('.success').show().addClass('visible');
				break;
			case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].FalseResult:
				this.element.find('.animated,.success').hide().removeClass('visible').end().find('.error').show().addClass('visible');
				break;
			case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Animate:
				this.element.find('.error,.success').hide().removeClass('visible').end().find('.animated').show().addClass('visible');
				break;
			case __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle:
			default:
				this.element.find('.animated').hide().end().find('.error,.success').removeClass('visible');
				break;
		}
	};

	return SaveTriggerComponent;
}(__WEBPACK_IMPORTED_MODULE_5_Component_Abstract__["a" /* AbstractComponent */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Component_Abstract__["b" /* componentExportHelper */])(SaveTriggerComponent, 'SaveTriggerComponent');

/***/ },
/* 110 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./dev/Component/Script.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);







var ScriptComponent = function (_AbstractComponent) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(ScriptComponent, _AbstractComponent);

	/**
  * @param {Object} params
  */
	function ScriptComponent(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ScriptComponent);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractComponent.call(this));

		if (params.component && params.component.templateNodes && params.element && params.element[0] && params.element[0].outerHTML) {
			var script = params.element[0].outerHTML;
			script = !script ? '' : script.replace(/<x-script/i, '<script').replace(/<b><\/b><\/x-script>/i, '</script>');

			if (script) {
				params.element.text('');
				params.element.replaceWith(__WEBPACK_IMPORTED_MODULE_3_____default()(script).text(params.component.templateNodes[0] && params.component.templateNodes[0].nodeValue ? params.component.templateNodes[0].nodeValue : ''));
			} else {
				params.element.remove();
			}
		}
		return _this;
	}

	return ScriptComponent;
}(__WEBPACK_IMPORTED_MODULE_4_Component_Abstract__["a" /* AbstractComponent */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Component_Abstract__["b" /* componentExportHelper */])(ScriptComponent, 'ScriptComponent');

/***/ },
/* 111 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./dev/Component/Select.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 48);









var SelectComponent = function (_AbstractInput) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SelectComponent, _AbstractInput);

	/**
  * @param {Object} params
  */
	function SelectComponent(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SelectComponent);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractInput.call(this, params));

		_this.options = params.options || '';

		_this.optionsText = params.optionsText || null;
		_this.optionsValue = params.optionsValue || null;
		_this.optionsCaption = params.optionsCaption || null;

		if (_this.optionsCaption) {
			_this.optionsCaption = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Translator__["i18n"])(_this.optionsCaption);
		}

		_this.defautOptionsAfterRender = __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["defautOptionsAfterRender"];
		return _this;
	}

	return SelectComponent;
}(__WEBPACK_IMPORTED_MODULE_6_Component_AbstractInput__["a" /* AbstractInput */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Component_Abstract__["b" /* componentExportHelper */])(SelectComponent, 'SelectComponent');

/***/ },
/* 112 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./dev/Component/TextArea.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Component_Abstract__ = __webpack_require__(/*! Component/Abstract */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Component_AbstractInput__ = __webpack_require__(/*! Component/AbstractInput */ 48);








var DEFAULT_ROWS = 5;

var TextAreaComponent = function (_AbstractInput) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(TextAreaComponent, _AbstractInput);

	/**
  * @param {Object} params
  */
	function TextAreaComponent(params) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TextAreaComponent);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractInput.call(this, params));

		_this.rows = params.rows || DEFAULT_ROWS;
		_this.spellcheck = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["isUnd"])(params.spellcheck) ? false : !!params.spellcheck;
		return _this;
	}

	return TextAreaComponent;
}(__WEBPACK_IMPORTED_MODULE_5_Component_AbstractInput__["a" /* AbstractInput */]);

module.exports = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Component_Abstract__["b" /* componentExportHelper */])(TextAreaComponent, 'TextAreaComponent');

/***/ },
/* 113 */
/* exports provided: Opentip, default */
/* exports used: default */
/*!*********************************!*\
  !*** ./dev/External/Opentip.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_window__);
/* unused harmony export Opentip */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Opentip; });



var Opentip = __WEBPACK_IMPORTED_MODULE_0_window___default.a.Opentip || {};

Opentip.styles = Opentip.styles || {};

Opentip.styles.rainloop = {

	'extends': 'standard',

	'fixed': true,
	'target': true,

	'delay': 0.2,
	'hideDelay': 0,

	'hideEffect': 'fade',
	'hideEffectDuration': 0.2,

	'showEffect': 'fade',
	'showEffectDuration': 0.2,

	'showOn': 'mouseover click',
	'removeElementsOnHide': true,

	'background': '#fff',
	'shadow': false,

	'borderColor': '#999',
	'borderRadius': 2,
	'borderWidth': 1
};

Opentip.styles.rainloopTip = {
	'extends': 'rainloop',
	'delay': 0.4,
	'group': 'rainloopTips'
};

Opentip.styles.rainloopErrorTip = {
	'extends': 'rainloop',
	'className': 'rainloopErrorTip'
};



/***/ },
/* 114 */
/* exports provided: AbstractBoot, default */
/* exports used: AbstractBoot */
/*!***********************************!*\
  !*** ./dev/Knoin/AbstractBoot.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractBoot; });
/* unused harmony export default */


var AbstractBoot = function () {
	function AbstractBoot() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractBoot);
	}

	AbstractBoot.prototype.bootstart = function bootstart() {/* no-empty */};

	return AbstractBoot;
}();



/***/ },
/* 115 */
/* exports provided: AbstractAjaxRemote, default */
/* exports used: AbstractAjaxRemote */
/*!************************************!*\
  !*** ./dev/Remote/AbstractAjax.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Consts__ = __webpack_require__(/*! Common/Consts */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractAjaxRemote; });
/* unused harmony export default */















var AbstractAjaxRemote = function () {
	function AbstractAjaxRemote() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractAjaxRemote);

		this.oRequests = {};
	}

	/**
  * @param {?Function} fCallback
  * @param {string} sRequestAction
  * @param {string} sType
  * @param {?AjaxJsonDefaultResponse} oData
  * @param {boolean} bCached
  * @param {*=} oRequestParameters
  */


	AbstractAjaxRemote.prototype.defaultResponse = function defaultResponse(fCallback, sRequestAction, sType, oData, bCached, oRequestParameters) {
		var fCall = function fCall() {
			if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success !== sType && __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].bUnload) {
				sType = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Unload;
			}

			if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === sType && oData && !oData.Result) {
				if (oData && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["inArray"])(oData.ErrorCode, [__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].AuthError, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].AccessError, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].ConnectionError, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].DomainNotAllowed, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].AccountNotAllowed, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].MailServerError, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].UnknownNotification, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].UnknownError])) {
					__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iAjaxErrorCount += 1;
				}

				if (oData && __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Notification"].InvalidToken === oData.ErrorCode) {
					__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iTokenErrorCount += 1;
				}

				if (__WEBPACK_IMPORTED_MODULE_4_Common_Consts__["a" /* TOKEN_ERROR_LIMIT */] < __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iTokenErrorCount) {
					if (__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__ && __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.loginAndLogoutReload) {
						__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.loginAndLogoutReload(false, true);
					}
				}

				if (oData.ClearAuth || oData.Logout || __WEBPACK_IMPORTED_MODULE_4_Common_Consts__["b" /* AJAX_ERROR_LIMIT */] < __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iAjaxErrorCount) {
					if (__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__ && __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.clearClientSideToken) {
						__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.clearClientSideToken();

						if (!oData.ClearAuth && __WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.loginAndLogoutReload) {
							__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].__APP__.loginAndLogoutReload(false, true);
						}
					}
				}
			} else if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === sType && oData && oData.Result) {
				__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iAjaxErrorCount = 0;
				__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["data"].iTokenErrorCount = 0;
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Plugins__["a" /* runHook */])('ajax-default-response', [sRequestAction, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === sType ? oData : null, sType, bCached, oRequestParameters]);

			if (fCallback) {
				fCallback(sType, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === sType ? oData : null, bCached, sRequestAction, oRequestParameters);
			}
		};

		switch (sType) {
			case 'success':
				sType = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success;
				break;
			case 'abort':
				sType = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Abort;
				break;
			default:
				sType = __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Error;
				break;
		}

		if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Error === sType) {
			__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(fCall, 300);
		} else {
			fCall();
		}
	};

	/**
  * @param {?Function} fResultCallback
  * @param {Object} oParameters
  * @param {?number=} iTimeOut = 20000
  * @param {string=} sGetAdd = ''
  * @param {Array=} aAbortActions = []
  * @returns {jQuery.jqXHR}
  */


	AbstractAjaxRemote.prototype.ajaxRequest = function ajaxRequest(fResultCallback, params) {
		var iTimeOut = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20000;

		var _this = this;

		var sGetAdd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
		var abortActions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

		var isPost = '' === sGetAdd,
		    headers = {},
		    start = new __WEBPACK_IMPORTED_MODULE_1_window___default.a.Date().getTime();

		var action = '';

		params = params || {};
		action = params.Action || '';

		if (action && 0 < abortActions.length) {
			__WEBPACK_IMPORTED_MODULE_2_____default.a.each(abortActions, function (actionToAbort) {
				if (_this.oRequests[actionToAbort]) {
					_this.oRequests[actionToAbort].__aborted = true;
					if (_this.oRequests[actionToAbort].abort) {
						_this.oRequests[actionToAbort].abort();
					}
					_this.oRequests[actionToAbort] = null;
				}
			});
		}

		if (isPost) {
			params.XToken = __WEBPACK_IMPORTED_MODULE_10_Storage_Settings__["appSettingsGet"]('token');
		}

		var oDefAjax = __WEBPACK_IMPORTED_MODULE_3_____default.a.ajax({
			type: isPost ? 'POST' : 'GET',
			url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Links__["b" /* ajax */])(sGetAdd),
			async: true,
			dataType: 'json',
			data: isPost ? params : {},
			headers: headers,
			timeout: iTimeOut,
			global: true
		});

		oDefAjax.always(function (oData, sType) {

			var cached = false;
			if (oData && oData.Time) {
				cached = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"])(oData.Time) > new __WEBPACK_IMPORTED_MODULE_1_window___default.a.Date().getTime() - start;
			}

			if (action && _this.oRequests[action]) {
				if (_this.oRequests[action].__aborted) {
					sType = 'abort';
				}

				_this.oRequests[action] = null;
			}

			_this.defaultResponse(fResultCallback, action, sType, oData, cached, params);
		});

		if (action && 0 < abortActions.length && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["inArray"])(action, abortActions)) {
			if (this.oRequests[action]) {
				this.oRequests[action].__aborted = true;
				if (this.oRequests[action].abort) {
					this.oRequests[action].abort();
				}
				this.oRequests[action] = null;
			}

			this.oRequests[action] = oDefAjax;
		}

		return oDefAjax;
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sAction
  * @param {Object=} oParameters
  * @param {?number=} iTimeout
  * @param {string=} sGetAdd = ''
  * @param {Array=} aAbortActions = []
  */


	AbstractAjaxRemote.prototype.defaultRequest = function defaultRequest(fCallback, sAction, oParameters, iTimeout, sGetAdd, aAbortActions) {
		oParameters = oParameters || {};
		oParameters.Action = sAction;

		sGetAdd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pString"])(sGetAdd);

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Plugins__["a" /* runHook */])('ajax-default-request', [sAction, oParameters, sGetAdd]);

		return this.ajaxRequest(fCallback, oParameters, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["isUnd"])(iTimeout) ? __WEBPACK_IMPORTED_MODULE_4_Common_Consts__["c" /* DEFAULT_AJAX_TIMEOUT */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["pInt"])(iTimeout), sGetAdd, aAbortActions);
	};

	/**
  * @param {?Function} fCallback
  */


	AbstractAjaxRemote.prototype.noop = function noop(fCallback) {
		this.defaultRequest(fCallback, 'Noop');
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sMessage
  * @param {string} sFileName
  * @param {number} iLineNo
  * @param {string} sLocation
  * @param {string} sHtmlCapa
  * @param {number} iTime
  */


	AbstractAjaxRemote.prototype.jsError = function jsError(fCallback, sMessage, sFileName, iLineNo, sLocation, sHtmlCapa, iTime) {
		this.defaultRequest(fCallback, 'JsError', {
			'Message': sMessage,
			'FileName': sFileName,
			'LineNo': iLineNo,
			'Location': sLocation,
			'HtmlCapa': sHtmlCapa,
			'TimeOnPage': iTime
		});
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sType
  * @param {Array=} mData = null
  * @param {boolean=} bIsError = false
  */


	AbstractAjaxRemote.prototype.jsInfo = function jsInfo(fCallback, sType, mData) {
		var bIsError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		this.defaultRequest(fCallback, 'JsInfo', {
			'Type': sType,
			'Data': mData,
			'IsError': bIsError ? '1' : '0'
		});
	};

	/**
  * @param {?Function} fCallback
  */


	AbstractAjaxRemote.prototype.getPublicKey = function getPublicKey(fCallback) {
		this.defaultRequest(fCallback, 'GetPublicKey');
	};

	/**
  * @param {?Function} fCallback
  * @param {string} sVersion
  */


	AbstractAjaxRemote.prototype.jsVersion = function jsVersion(fCallback, sVersion) {
		this.defaultRequest(fCallback, 'Version', {
			'Version': sVersion
		});
	};

	return AbstractAjaxRemote;
}();



/***/ },
/* 116 */
/* exports provided: AbstractSettingsScreen, default */
/* exports used: AbstractSettingsScreen */
/*!****************************************!*\
  !*** ./dev/Screen/AbstractSettings.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Knoin_AbstractScreen__ = __webpack_require__(/*! Knoin/AbstractScreen */ 73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractSettingsScreen; });
/* unused harmony export default */















var AbstractSettingsScreen = function (_AbstractScreen) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AbstractSettingsScreen, _AbstractScreen);

	/**
  * @param {Array} viewModels
  */
	function AbstractSettingsScreen(viewModels) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractSettingsScreen);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractScreen.call(this, 'settings', viewModels));

		_this.menu = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observableArray([]);

		_this.oCurrentSubScreen = null;
		_this.oViewModelPlace = null;

		_this.setupSettings();
		return _this;
	}

	/**
  * @param {Function=} fCallback
  */


	AbstractSettingsScreen.prototype.setupSettings = function setupSettings() {
		var fCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (fCallback) {
			fCallback();
		}
	};

	AbstractSettingsScreen.prototype.onRoute = function onRoute(subName) {
		var _this2 = this;

		var settingsScreen = null,
		    RoutedSettingsViewModel = null,
		    viewModelPlace = null,
		    viewModelDom = null;

		RoutedSettingsViewModel = __WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"].settings, function (SettingsViewModel) {
			return SettingsViewModel && SettingsViewModel.__rlSettingsData && subName === SettingsViewModel.__rlSettingsData.Route;
		});

		if (RoutedSettingsViewModel) {
			if (__WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-removed'], function (DisabledSettingsViewModel) {
				return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
			})) {
				RoutedSettingsViewModel = null;
			}

			if (RoutedSettingsViewModel && __WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-disabled'], function (DisabledSettingsViewModel) {
				return DisabledSettingsViewModel && DisabledSettingsViewModel === RoutedSettingsViewModel;
			})) {
				RoutedSettingsViewModel = null;
			}
		}

		if (RoutedSettingsViewModel) {
			if (RoutedSettingsViewModel.__builded && RoutedSettingsViewModel.__vm) {
				settingsScreen = RoutedSettingsViewModel.__vm;
			} else {
				viewModelPlace = this.oViewModelPlace;
				if (viewModelPlace && 1 === viewModelPlace.length) {
					(function () {
						settingsScreen = new RoutedSettingsViewModel();

						viewModelDom = __WEBPACK_IMPORTED_MODULE_4_____default()('<div></div>').addClass('rl-settings-view-model').hide();
						viewModelDom.appendTo(viewModelPlace);

						settingsScreen.viewModelDom = viewModelDom;

						settingsScreen.__rlSettingsData = RoutedSettingsViewModel.__rlSettingsData;

						RoutedSettingsViewModel.__dom = viewModelDom;
						RoutedSettingsViewModel.__builded = true;
						RoutedSettingsViewModel.__vm = settingsScreen;

						var tmpl = { name: RoutedSettingsViewModel.__rlSettingsData.Template };
						__WEBPACK_IMPORTED_MODULE_5_ko___default.a.applyBindingAccessorsToNode(viewModelDom[0], {
							translatorInit: true,
							template: function template() {
								return tmpl;
							}
						}, settingsScreen);

						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(settingsScreen, 'onBuild', [viewModelDom]);
					})();
				} else {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["log"])('Cannot find sub settings view model position: SettingsSubScreen');
				}
			}

			if (settingsScreen) {
				__WEBPACK_IMPORTED_MODULE_3_____default.a.defer(function () {
					// hide
					if (_this2.oCurrentSubScreen) {
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(_this2.oCurrentSubScreen, 'onHide');
						_this2.oCurrentSubScreen.viewModelDom.hide();
					}
					// --

					_this2.oCurrentSubScreen = settingsScreen;

					// show
					if (_this2.oCurrentSubScreen) {
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(_this2.oCurrentSubScreen, 'onBeforeShow');
						_this2.oCurrentSubScreen.viewModelDom.show();
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(_this2.oCurrentSubScreen, 'onShow');
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(_this2.oCurrentSubScreen, 'onShowWithDelay', [], 200);

						__WEBPACK_IMPORTED_MODULE_3_____default.a.each(_this2.menu(), function (item) {
							item.selected(settingsScreen && settingsScreen.__rlSettingsData && item.route === settingsScreen.__rlSettingsData.Route);
						});

						__WEBPACK_IMPORTED_MODULE_4_____default()('#rl-content .b-settings .b-content .content').scrollTop(0);
					}
					// --

					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["windowResize"])();
				});
			}
		} else {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Knoin_Knoin__["setHash"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Links__["c" /* settings */])(), false, true);
		}
	};

	AbstractSettingsScreen.prototype.onHide = function onHide() {
		if (this.oCurrentSubScreen && this.oCurrentSubScreen.viewModelDom) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["delegateRun"])(this.oCurrentSubScreen, 'onHide');
			this.oCurrentSubScreen.viewModelDom.hide();
		}
	};

	AbstractSettingsScreen.prototype.onBuild = function onBuild() {
		var _this3 = this;

		__WEBPACK_IMPORTED_MODULE_3_____default.a.each(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"].settings, function (SettingsViewModel) {
			if (SettingsViewModel && SettingsViewModel.__rlSettingsData && !__WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-removed'], function (RemoveSettingsViewModel) {
				return RemoveSettingsViewModel && RemoveSettingsViewModel === SettingsViewModel;
			})) {
				_this3.menu.push({
					route: SettingsViewModel.__rlSettingsData.Route,
					label: SettingsViewModel.__rlSettingsData.Label,
					selected: __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false),
					disabled: !!__WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"]['settings-disabled'], function (DisabledSettingsViewModel) {
						return DisabledSettingsViewModel && DisabledSettingsViewModel === SettingsViewModel;
					})
				});
			}
		});

		this.oViewModelPlace = __WEBPACK_IMPORTED_MODULE_4_____default()('#rl-content #rl-settings-subscreen');
	};

	AbstractSettingsScreen.prototype.routes = function routes() {
		var DefaultViewModel = __WEBPACK_IMPORTED_MODULE_3_____default.a.find(__WEBPACK_IMPORTED_MODULE_6_Common_Globals__["aViewModels"].settings, function (SettingsViewModel) {
			return SettingsViewModel && SettingsViewModel.__rlSettingsData && SettingsViewModel.__rlSettingsData.IsDefault;
		}),
		    defaultRoute = DefaultViewModel && DefaultViewModel.__rlSettingsData ? DefaultViewModel.__rlSettingsData.Route : 'general',
		    rules = {
			subname: /^(.*)$/,
			normalize_: function normalize_(rquest, vals) {
				vals.subname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["isUnd"])(vals.subname) ? defaultRoute : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Utils__["pString"])(vals.subname);
				return [vals.subname];
			}
		};

		return [['{subname}/', rules], ['{subname}', rules], ['', rules]];
	};

	return AbstractSettingsScreen;
}(__WEBPACK_IMPORTED_MODULE_10_Knoin_AbstractScreen__["a" /* AbstractScreen */]);



/***/ },
/* 117 */
/* exports provided: AbstractAppStore, default */
/* exports used: AbstractAppStore */
/*!***********************************!*\
  !*** ./dev/Stores/AbstractApp.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AbstractAppStore; });
/* unused harmony export default */






var AbstractAppStore = function () {
	function AbstractAppStore() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AbstractAppStore);

		this.allowLanguagesOnSettings = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
		this.allowLanguagesOnLogin = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);

		this.interfaceAnimation = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);

		this.interfaceAnimation.subscribe(function (value) {
			var anim = __WEBPACK_IMPORTED_MODULE_2_Common_Globals__["bMobileDevice"] || !value;
			__WEBPACK_IMPORTED_MODULE_2_Common_Globals__["$html"].toggleClass('rl-anim', !anim).toggleClass('no-rl-anim', anim);
		});

		this.interfaceAnimation.valueHasMutated();

		this.prem = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
		this.community = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	}

	AbstractAppStore.prototype.populate = function populate() {
		this.allowLanguagesOnLogin(!!__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('AllowLanguagesOnLogin'));
		this.allowLanguagesOnSettings(!!__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('AllowLanguagesOnSettings'));

		this.interfaceAnimation(!!__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('InterfaceAnimation'));

		this.prem(!!__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('PremType'));
		this.community(!!__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"]('Community'));
	};

	return AbstractAppStore;
}();



/***/ },
/* 118 */
/* exports provided: default */
/* exports used: default */
/*!*************************************!*\
  !*** ./dev/Stores/Admin/Package.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);




var PackageAdminStore = function PackageAdminStore() {
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PackageAdminStore);

	this.packages = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
	this.packages.loading = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ throttle: 100 });

	this.packagesReal = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	this.packagesMainUpdatable = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
};

/* harmony default export */ exports["a"] = new PackageAdminStore();

/***/ },
/* 119 */
/* exports provided: default */
/* exports used: default */
/*!************************************!*\
  !*** ./dev/Stores/Admin/Plugin.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);




var PluginAdminStore = function PluginAdminStore() {
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PluginAdminStore);

	this.plugins = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observableArray([]);
	this.plugins.loading = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ throttle: 100 });
	this.plugins.error = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
};

/* harmony default export */ exports["a"] = new PluginAdminStore();

/***/ },
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 129), __esModule: true };

/***/ },
/* 126 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 131), __esModule: true };

/***/ },
/* 127 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************!*\
  !*** ./~/babel-runtime/core-js/symbol.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 132), __esModule: true };

/***/ },
/* 128 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./~/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 133), __esModule: true };

/***/ },
/* 129 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 155);
var $Object = __webpack_require__(/*! ../../modules/_core */ 25).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ },
/* 130 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 156);
var $Object = __webpack_require__(/*! ../../modules/_core */ 25).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ },
/* 131 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 157);
module.exports = __webpack_require__(/*! ../../modules/_core */ 25).Object.setPrototypeOf;

/***/ },
/* 132 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/symbol/index.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 160);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 158);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 161);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 162);
module.exports = __webpack_require__(/*! ../../modules/_core */ 25).Symbol;

/***/ },
/* 133 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 159);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 163);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 72).f('iterator');

/***/ },
/* 134 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_a-function.js ***!
  \**************************************************/
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 135 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************/
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 136 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/_array-includes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22)
  , toLength  = __webpack_require__(/*! ./_to-length */ 152)
  , toIndex   = __webpack_require__(/*! ./_to-index */ 151);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 137 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_enum-keys.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 50)
  , gOPS    = __webpack_require__(/*! ./_object-gops */ 88)
  , pIE     = __webpack_require__(/*! ./_object-pie */ 65);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 138 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_html.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_global */ 21).document && document.documentElement;

/***/ },
/* 139 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_iobject.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 82);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 140 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_is-array.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 82);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 141 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/_iter-create.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var create         = __webpack_require__(/*! ./_object-create */ 63)
  , descriptor     = __webpack_require__(/*! ./_property-desc */ 51)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 66)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 32)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 34)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 142 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_iter-step.js ***!
  \*************************************************/
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 143 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/_keyof.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(/*! ./_object-keys */ 50)
  , toIObject = __webpack_require__(/*! ./_to-iobject */ 22);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 144 */
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/_meta.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(/*! ./_uid */ 52)('meta')
  , isObject = __webpack_require__(/*! ./_is-object */ 44)
  , has      = __webpack_require__(/*! ./_has */ 26)
  , setDesc  = __webpack_require__(/*! ./_object-dp */ 33).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 43)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 145 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-dps.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(/*! ./_object-dp */ 33)
  , anObject = __webpack_require__(/*! ./_an-object */ 41)
  , getKeys  = __webpack_require__(/*! ./_object-keys */ 50);

module.exports = __webpack_require__(/*! ./_descriptors */ 31) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 146 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 22)
  , gOPN      = __webpack_require__(/*! ./_object-gopn */ 87).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 147 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-gpo.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(/*! ./_has */ 26)
  , toObject    = __webpack_require__(/*! ./_to-object */ 153)
  , IE_PROTO    = __webpack_require__(/*! ./_shared-key */ 67)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 148 */
/* unknown exports provided */
/* all exports used */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/_object-sap.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ 42)
  , core    = __webpack_require__(/*! ./_core */ 25)
  , fails   = __webpack_require__(/*! ./_fails */ 43);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 149 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_set-proto.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 44)
  , anObject = __webpack_require__(/*! ./_an-object */ 41);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(/*! ./_ctx */ 83)(Function.call, __webpack_require__(/*! ./_object-gopd */ 64).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ },
/* 150 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_string-at.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 69)
  , defined   = __webpack_require__(/*! ./_defined */ 59);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 151 */
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/_to-index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 69)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 152 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-length.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 69)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 153 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/_to-object.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 59);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 154 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 135)
  , step             = __webpack_require__(/*! ./_iter-step */ 142)
  , Iterators        = __webpack_require__(/*! ./_iterators */ 61)
  , toIObject        = __webpack_require__(/*! ./_to-iobject */ 22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 86)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 155 */
/* unknown exports provided */
/* all exports used */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.create.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 42)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(/*! ./_object-create */ 63)});

/***/ },
/* 156 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(/*! ./_to-iobject */ 22)
  , $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ 64).f;

__webpack_require__(/*! ./_object-sap */ 148)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ },
/* 157 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 42);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 149).set});

/***/ },
/* 158 */
/* unknown exports provided */
/* all exports used */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ function(module, exports) {



/***/ },
/* 159 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
var $at  = __webpack_require__(/*! ./_string-at */ 150)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 86)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 160 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/es6.symbol.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';
// ECMAScript 6 symbols shim
var global         = __webpack_require__(/*! ./_global */ 21)
  , has            = __webpack_require__(/*! ./_has */ 26)
  , DESCRIPTORS    = __webpack_require__(/*! ./_descriptors */ 31)
  , $export        = __webpack_require__(/*! ./_export */ 42)
  , redefine       = __webpack_require__(/*! ./_redefine */ 90)
  , META           = __webpack_require__(/*! ./_meta */ 144).KEY
  , $fails         = __webpack_require__(/*! ./_fails */ 43)
  , shared         = __webpack_require__(/*! ./_shared */ 68)
  , setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 66)
  , uid            = __webpack_require__(/*! ./_uid */ 52)
  , wks            = __webpack_require__(/*! ./_wks */ 34)
  , wksExt         = __webpack_require__(/*! ./_wks-ext */ 72)
  , wksDefine      = __webpack_require__(/*! ./_wks-define */ 71)
  , keyOf          = __webpack_require__(/*! ./_keyof */ 143)
  , enumKeys       = __webpack_require__(/*! ./_enum-keys */ 137)
  , isArray        = __webpack_require__(/*! ./_is-array */ 140)
  , anObject       = __webpack_require__(/*! ./_an-object */ 41)
  , toIObject      = __webpack_require__(/*! ./_to-iobject */ 22)
  , toPrimitive    = __webpack_require__(/*! ./_to-primitive */ 70)
  , createDesc     = __webpack_require__(/*! ./_property-desc */ 51)
  , _create        = __webpack_require__(/*! ./_object-create */ 63)
  , gOPNExt        = __webpack_require__(/*! ./_object-gopn-ext */ 146)
  , $GOPD          = __webpack_require__(/*! ./_object-gopd */ 64)
  , $DP            = __webpack_require__(/*! ./_object-dp */ 33)
  , $keys          = __webpack_require__(/*! ./_object-keys */ 50)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 87).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 65).f  = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 88).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(/*! ./_library */ 62)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 32)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 161 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./~/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 71)('asyncIterator');

/***/ },
/* 162 */
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 71)('observable');

/***/ },
/* 163 */
/* unknown exports provided */
/* all exports used */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 154);
var global        = __webpack_require__(/*! ./_global */ 21)
  , hide          = __webpack_require__(/*! ./_hide */ 32)
  , Iterators     = __webpack_require__(/*! ./_iterators */ 61)
  , TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 34)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 164 */
/* unknown exports provided */
/* exports used: default */
/*!******************************!*\
  !*** ./~/pikaday/pikaday.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory)
{
    'use strict';

    var moment;
    if (true) {
        // CommonJS module
        // Load moment.js as an optional dependency
        try { moment = __webpack_require__(/*! moment */ 75); } catch (e) {}
        module.exports = factory(moment);
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(function (req)
        {
            // Load moment.js as an optional dependency
            var id = 'moment';
            try { moment = req(id); } catch (e) {}
            return factory(moment);
        });
    } else {
        root.Pikaday = factory(root.moment);
    }
}(this, function (moment)
{
    'use strict';

    /**
     * feature detection and helper functions
     */
    var hasMoment = typeof moment === 'function',

    hasEventListeners = !!window.addEventListener,

    document = window.document,

    sto = window.setTimeout,

    addEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },

    removeEvent = function(el, e, callback, capture)
    {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },

    fireEvent = function(el, eventName, data)
    {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },

    trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    },

    hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },

    addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    },

    removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },

    isArray = function(obj)
    {
        return (/Array/).test(Object.prototype.toString.call(obj));
    },

    isDate = function(obj)
    {
        return (/Date/).test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
    },

    isWeekend = function(date)
    {
        var day = date.getDay();
        return day === 0 || day === 6;
    },

    isLeapYear = function(year)
    {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },

    getDaysInMonth = function(year, month)
    {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },

    setToStartOfDay = function(date)
    {
        if (isDate(date)) date.setHours(0,0,0,0);
    },

    compareDates = function(a,b)
    {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },

    extend = function(to, from, overwrite)
    {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                }
                else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },

    adjustCalendar = function(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month)/12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month)/12);
            calendar.month -= 12;
        }
        return calendar;
    },

    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // internationalization
        i18n: {
            previousMonth : 'Previous Month',
            nextMonth     : 'Next Month',
            months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
            weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        },

        // Theme Classname
        theme: null,

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function(opts, day, abbr)
    {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },

    renderDay = function(opts)
    {
        if (opts.isEmpty) {
            return '<td class="is-empty"></td>';
        }
        var arr = [];
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '">' +
                 '<button class="pika-button pika-day" type="button" ' +
                    'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' +
                        opts.day +
                 '</button>' +
               '</td>';
    },

    renderWeek = function (d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil((((new Date(y, m, d) - onejan) / 86400000) + onejan.getDay()+1)/7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },

    renderRow = function(days, isRTL)
    {
        return '<tr>' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },

    renderBody = function(rows)
    {
        return '<tbody>' + rows.join('') + '</tbody>';
    },

    renderHead = function(opts)
    {
        var i, arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</thead>';
    },

    renderTitle = function(instance, c, year, month, refYear)
    {
        var i, j, arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div class="pika-title">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' +
                (i === month ? ' selected': '') +
                ((isMinYear && i < opts.minMonth) || (isMaxYear && i > opts.maxMonth) ? 'disabled' : '') + '>' +
                opts.i18n.months[i] + '</option>');
        }
        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected': '') + '>' + (i) + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === (instance._o.numberOfMonths - 1) ) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },

    renderTable = function(opts, data)
    {
        return '<table cellpadding="0" cellspacing="0" class="pika-table">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function(options)
    {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function(e)
        {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function() {
                            self.hide();
                            if (opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            setToStartOfDay(value);
            this._o.minDate = value;
            this._o.minYear  = value.getFullYear();
            this._o.minMonth = value.getMonth();
            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            setToStartOfDay(value);
            this._o.maxDate = value;
            this._o.maxYear = value.getFullYear();
            this._o.maxMonth = value.getMonth();
            this.draw();
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '';

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year) + this.render(this.calendars[c].year, this.calendars[c].month) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                var self = this;
                sto(function() {
                    self._o.onDraw.call(self);
                }, 0);
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    isEmpty = i < before || i >= (days + before),
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day)),
                    dayConfig = {
                        day: 1 + (i - before),
                        month: month,
                        year: year,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange
                    };

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this._v) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));


/***/ },
/* 165 */
/* unknown exports provided */
/* all exports used */
/*!**********************************!*\
  !*** ./dev/Html/Cmds/Error.html ***!
  \**********************************/
/***/ function(module, exports) {

module.exports = "<span class=\"rl-cmd-clr-error\">Command not found:</span> {{ cmd }}"

/***/ },
/* 166 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./dev/Html/Cmds/Help.html ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = " <span class=\"rl-cmd-clr-info\">commands:</span> {{ commands }}"

/***/ },
/* 167 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./dev/Html/Cmds/LangEmpty.html ***!
  \**************************************/
/***/ function(module, exports) {

module.exports = "lang <span class=\"rl-cmd-clr-info\">[{{ langs }}]</span>"

/***/ },
/* 168 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./dev/Html/Cmds/Main.html ***!
  \*********************************/
/***/ function(module, exports) {

module.exports = "<span class=\"rl-cmd-clr-success\">&gt;</span> {{ cmd }}"

/***/ },
/* 169 */
/* unknown exports provided */
/* all exports used */
/*!***************************************!*\
  !*** ./dev/Html/Cmds/ThemeEmpty.html ***!
  \***************************************/
/***/ function(module, exports) {

module.exports = "theme <span class=\"rl-cmd-clr-info\">[{{ themes }}]</span>"

/***/ },
/* 170 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./dev/Html/Cmds/Version.html ***!
  \************************************/
/***/ function(module, exports) {

module.exports = " <span class=\"rl-cmd-clr-info\">version:</span> {{ version }}"

/***/ },
/* 171 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./dev/Html/PreviewMessage.html ***!
  \**************************************/
/***/ function(module, exports) {

module.exports = "<html>\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"viewport\" content=\"user-scalable=no\" />\n\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\t<meta name=\"robots\" content=\"noindex, nofollow, noodp\" />\n\t<title>{{title}}</title>\n\t<style>\nhtml, body {\n\tbackground-color: #fff;\n\tfont-size: 13px;\n\tfont-family: arial, sans-serif;\n\tmargin: 0;\n\tpadding: 0;\n}\n\na {color: blue; text-decoration: underline}\na:visited {color: #609}\na:active {color: red}\nblockquote {border-left: 2px solid black; margin: 0; padding: 0px 10px}\n\npre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\tbackground: #fff;\n\tborder: none;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: break-all;\n}\n\n.body-wrp {\n\tpadding: 10px;\n}\n\n.body-wrp.html pre {\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain {\n\tpadding: 15px;\n\twhite-space: pre-wrap;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n}\n\n.body-wrp.plain pre {\n\tmargin: 0px;\n\tpadding: 0px;\n\tbackground: #fff;\n\tborder: none;\n\tfont-family: Monaco, Menlo, Consolas, 'Courier New', monospace;\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n\tword-break: normal;\n}\n\n.body-wrp.plain blockquote {\n\tborder-left: 2px solid blue;\n\tcolor: blue;\n}\n\n.body-wrp.plain blockquote blockquote {\n\tborder-left: 2px solid green;\n\tcolor: green;\n}\n\n.body-wrp.plain blockquote blockquote blockquote {\n\tborder-left: 2px solid red;\n\tcolor: red;\n}\n\n.rl-previre-subject {\n\tfont-size: 16px;\n\tfont-weight: bold;\n\tpadding: 15px;\n\tborder-bottom: 1px solid #ccc;\n}\n\n.rl-previre-creds-from, .rl-previre-creds-to {\n\tfont-size: 12px;\n\tpadding: 10px 15px;\n}\n\n.rl-previre-creds-from {\n\tpadding-bottom: 0;\n}\n\n.rl-previre-creds-to {\n\tborder-bottom: 1px solid #ccc;\n}\n\n.rl-previre-date {\n\tfloat: right;\n\tfont-size: 12px;\n\tpadding: 10px 15px;\n}\n\t</style>\n</head>\n<body>\n\t<div>\n\t\t<div class=\"rl-previre-subject\">{{subject}}</div>\n\t</div>\n\t<div>\n\t\t<div class=\"rl-previre-date\">{{date}}</div>\n\t\t<div class=\"rl-previre-creds-from\">{{fromCreds}}</div>\n\t\t<div class=\"rl-previre-creds-to\">{{toLabel}}: {{toCreds}}</div>\n\t</div>\n\t<div class=\"body-wrp {{bodyClass}}\">{{html}}</div>\n</body>\n</html>"

/***/ },
/* 172 */,
/* 173 */
/* unknown exports provided */
/* exports used: default */
/*!************************************!*\
  !*** external "window.Autolinker" ***!
  \************************************/
/***/ function(module, exports) {

module.exports = window.Autolinker;

/***/ },
/* 174 */
/* unknown exports provided */
/* exports used: default */
/*!********************************!*\
  !*** external "window.hasher" ***!
  \********************************/
/***/ function(module, exports) {

module.exports = window.hasher;

/***/ },
/* 175 */
/* unknown exports provided */
/* exports used: default */
/*!*****************************!*\
  !*** external "window.ssm" ***!
  \*****************************/
/***/ function(module, exports) {

module.exports = window.ssm;

/***/ },
/* 176 */
/* exports provided: default */
/* all exports used */
/*!**************************!*\
  !*** ./dev/App/Admin.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_progressJs__ = __webpack_require__(/*! progressJs */ 92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_progressJs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_progressJs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__ = __webpack_require__(/*! Stores/Admin/Capa */ 95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Stores_Admin_Domain__ = __webpack_require__(/*! Stores/Admin/Domain */ 96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Stores_Admin_Plugin__ = __webpack_require__(/*! Stores/Admin/Plugin */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__ = __webpack_require__(/*! Stores/Admin/License */ 241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__ = __webpack_require__(/*! Stores/Admin/Package */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__ = __webpack_require__(/*! Stores/Admin/Core */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_Screen_Admin_Settings__ = __webpack_require__(/*! Screen/Admin/Settings */ 216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_Screen_Admin_Login__ = __webpack_require__(/*! Screen/Admin/Login */ 215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_App_Abstract__ = __webpack_require__(/*! App/Abstract */ 100);































var AdminApp = function (_AbstractApp) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(AdminApp, _AbstractApp);

	function AdminApp() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AdminApp);

		return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractApp.call(this, __WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */]));
	}

	AdminApp.prototype.remote = function remote() {
		return __WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */];
	};

	AdminApp.prototype.reloadDomainList = function reloadDomainList() {
		__WEBPACK_IMPORTED_MODULE_14_Stores_Admin_Domain__["a" /* default */].domains.loading(true);
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].domainList(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_14_Stores_Admin_Domain__["a" /* default */].domains.loading(false);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
				__WEBPACK_IMPORTED_MODULE_14_Stores_Admin_Domain__["a" /* default */].domains(__WEBPACK_IMPORTED_MODULE_4_____default.a.map(data.Result, function (_ref, name) {
					var enabled = _ref[0];
					var alias = _ref[1];
					return {
						name: name,
						disabled: __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(!enabled),
						alias: alias,
						deleteAccess: __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false)
					};
				}));
			}
		});
	};

	AdminApp.prototype.reloadPluginList = function reloadPluginList() {
		__WEBPACK_IMPORTED_MODULE_15_Stores_Admin_Plugin__["a" /* default */].plugins.loading(true);
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].pluginList(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_15_Stores_Admin_Plugin__["a" /* default */].plugins.loading(false);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
				__WEBPACK_IMPORTED_MODULE_15_Stores_Admin_Plugin__["a" /* default */].plugins(__WEBPACK_IMPORTED_MODULE_4_____default.a.map(data.Result, function (item) {
					return {
						name: item.Name,
						disabled: __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(!item.Enabled),
						configured: __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(!!item.Configured)
					};
				}));
			}
		});
	};

	AdminApp.prototype.reloadPackagesList = function reloadPackagesList() {
		__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packages.loading(true);
		__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packagesReal(true);
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].packagesList(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packages.loading(false);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
				(function () {
					__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packagesReal(!!data.Result.Real);
					__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packagesMainUpdatable(!!data.Result.MainUpdatable);

					var list = [];
					var loading = {};

					__WEBPACK_IMPORTED_MODULE_4_____default.a.each(__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packages(), function (item) {
						if (item && item.loading()) {
							loading[item.file] = item;
						}
					});

					if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["isArray"])(data.Result.List)) {
						list = __WEBPACK_IMPORTED_MODULE_4_____default.a.compact(__WEBPACK_IMPORTED_MODULE_4_____default.a.map(data.Result.List, function (item) {
							if (item) {
								item.loading = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["isUnd"])(loading[item.file]));
								return 'core' === item.type && !item.canBeInstalled ? null : item;
							}
							return null;
						}));
					}

					__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packages(list);
				})();
			} else {
				__WEBPACK_IMPORTED_MODULE_17_Stores_Admin_Package__["a" /* default */].packagesReal(false);
			}
		});
	};

	AdminApp.prototype.updateCoreData = function updateCoreData() {
		__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreUpdating(true);
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].updateCoreData(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreUpdating(false);
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersion('');
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteVersion('');
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteRelease('');
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersionCompare(-2);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreReal(true);
				__WEBPACK_IMPORTED_MODULE_3_window___default.a.location.reload();
			} else {
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreReal(false);
			}
		});
	};

	AdminApp.prototype.reloadCoreData = function reloadCoreData() {
		__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreChecking(true);
		__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreReal(true);
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].coreData(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreChecking(false);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreReal(!!data.Result.Real);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreChannel(data.Result.Channel || 'stable');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreType(data.Result.Type || 'stable');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreUpdatable(!!data.Result.Updatable);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreAccess(!!data.Result.Access);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreWarning(!!data.Result.Warning);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersion(data.Result.Version || '');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteVersion(data.Result.RemoteVersion || '');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteRelease(data.Result.RemoteRelease || '');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersionCompare(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["pInt"])(data.Result.VersionCompare));
			} else {
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreReal(false);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreChannel('stable');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreType('stable');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreWarning(false);
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersion('');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteVersion('');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreRemoteRelease('');
				__WEBPACK_IMPORTED_MODULE_18_Stores_Admin_Core__["a" /* default */].coreVersionCompare(-2);
			}
		});
	};

	/**
  * @param {boolean=} force = false
  */


	AdminApp.prototype.reloadLicensing = function reloadLicensing() {
		var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensingProcess(true);
		__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseError('');
		__WEBPACK_IMPORTED_MODULE_19_Remote_Admin_Ajax__["a" /* default */].licensing(function (result, data) {
			__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensingProcess(false);
			if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Success === result && data && data.Result && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["isNormal"])(data.Result.Expired)) {
				__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseValid(true);
				__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseExpired(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["pInt"])(data.Result.Expired));
				__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseError('');
				__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensing(true);
				__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__["a" /* default */].prem(true);
			} else {
				if (data && data.ErrorCode && -1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["inArray"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["pInt"])(data.ErrorCode), [__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["Notification"].LicensingServerIsUnavailable, __WEBPACK_IMPORTED_MODULE_9_Common_Enums__["Notification"].LicensingExpired])) {
					__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["getNotification"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Utils__["pInt"])(data.ErrorCode)));
					__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensing(true);
				} else {
					if (__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["StorageResultType"].Abort === result) {
						__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licenseError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["getNotification"])(__WEBPACK_IMPORTED_MODULE_9_Common_Enums__["Notification"].LicensingServerIsUnavailable));
						__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensing(true);
					} else {
						__WEBPACK_IMPORTED_MODULE_16_Stores_Admin_License__["a" /* default */].licensing(false);
					}
				}
			}
		}, force);
	};

	AdminApp.prototype.bootend = function bootend() {
		var bootendCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (__WEBPACK_IMPORTED_MODULE_6_progressJs___default.a) {
			__WEBPACK_IMPORTED_MODULE_6_progressJs___default.a.end();
		}

		if (bootendCallback) {
			bootendCallback();
		}
	};

	AdminApp.prototype.bootstart = function bootstart() {

		_AbstractApp.prototype.bootstart.call(this);

		__WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__["a" /* default */].populate();
		__WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].populate();

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["hideLoading"])();

		if (!__WEBPACK_IMPORTED_MODULE_11_Storage_Settings__["appSettingsGet"]('allowAdminPanel')) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["routeOff"])();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["setHash"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Common_Links__["h" /* root */])(), true);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["routeOff"])();

			__WEBPACK_IMPORTED_MODULE_4_____default.a.defer(function () {
				__WEBPACK_IMPORTED_MODULE_3_window___default.a.location.href = '/';
			});
		} else {
			if (__WEBPACK_IMPORTED_MODULE_11_Storage_Settings__["settingsGet"]('Auth')) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["startScreens"])([__WEBPACK_IMPORTED_MODULE_20_Screen_Admin_Settings__["a" /* SettingsAdminScreen */]]);
			} else {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22_Knoin_Knoin__["startScreens"])([__WEBPACK_IMPORTED_MODULE_21_Screen_Admin_Login__["a" /* LoginAdminScreen */]]);
			}
		}

		this.bootend();
	};

	return AdminApp;
}(__WEBPACK_IMPORTED_MODULE_23_App_Abstract__["a" /* AbstractApp */]);

/* harmony default export */ exports["default"] = new AdminApp();

/***/ },
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/* exports provided: default */
/* exports used: default */
/*!**********************************!*\
  !*** ./dev/Stores/Admin/Core.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);




var CoreAdminStore = function CoreAdminStore() {
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CoreAdminStore);

	this.coreReal = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	this.coreChannel = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('stable');
	this.coreType = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('stable');
	this.coreUpdatable = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	this.coreAccess = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(true);
	this.coreWarning = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	this.coreChecking = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ throttle: 100 });
	this.coreUpdating = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false).extend({ throttle: 100 });
	this.coreVersion = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
	this.coreRemoteVersion = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
	this.coreRemoteRelease = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');
	this.coreVersionCompare = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(-2);
};

/* harmony default export */ exports["a"] = new CoreAdminStore();

/***/ },
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */
/* exports provided: DomainPopupView, default */
/* all exports used */
/*!**********************************!*\
  !*** ./dev/View/Popup/Domain.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Consts__ = __webpack_require__(/*! Common/Consts */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_Capa__ = __webpack_require__(/*! Stores/Admin/Capa */ 95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "DomainPopupView", function() { return DomainPopupView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return DomainPopupView; });





var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}



















var DomainPopupView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["popup"])({
	name: 'View/Popup/Domain',
	templateID: 'PopupsDomain'
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["command"])(function (self) {
	return self.canBeSaved();
}), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["command"])(function (self) {
	return self.canBeTested();
}), _dec4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["command"])(), _dec5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["command"])(), _dec6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_Knoin_Knoin__["command"])(), _dec(_class = (_class2 = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DomainPopupView, _AbstractViewNext);

	function DomainPopupView() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DomainPopupView);

		var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.edit = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.saving = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.savingError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.page = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('main');
		_this.sieveSettings = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);

		_this.testing = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.testingDone = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.testingImapError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.testingSieveError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.testingSmtpError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.testingImapErrorDesc = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.testingSieveErrorDesc = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.testingSmtpErrorDesc = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.testingImapError.subscribe(function (value) {
			if (!value) {
				_this.testingImapErrorDesc('');
			}
		});

		_this.testingSieveError.subscribe(function (value) {
			if (!value) {
				_this.testingSieveErrorDesc('');
			}
		});

		_this.testingSmtpError.subscribe(function (value) {
			if (!value) {
				_this.testingSmtpErrorDesc('');
			}
		});

		_this.imapServerFocus = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.sieveServerFocus = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.smtpServerFocus = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);

		_this.name = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.name.focused = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);

		_this.imapServer = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.imapPort = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["d" /* IMAP_DEFAULT_PORT */]);
		_this.imapSecure = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);
		_this.imapShortLogin = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.useSieve = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.sieveAllowRaw = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.sieveServer = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.sievePort = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["e" /* SIEVE_DEFAULT_PORT */]);
		_this.sieveSecure = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);
		_this.smtpServer = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.smtpPort = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["f" /* SMTP_DEFAULT_PORT */]);
		_this.smtpSecure = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);
		_this.smtpShortLogin = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.smtpAuth = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(true);
		_this.smtpPhpMail = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.whiteList = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.aliasName = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.enableSmartPorts = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);

		_this.allowSieve = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_Capa__["a" /* default */].filters() && __WEBPACK_IMPORTED_MODULE_11_Stores_Admin_Capa__["a" /* default */].sieve();
		});

		_this.headerText = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {

			var name = _this.name(),
			    aliasName = _this.aliasName();

			var result = '';

			if (_this.edit()) {
				result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('POPUPS_DOMAIN/TITLE_EDIT_DOMAIN', { 'NAME': name });
				if (aliasName) {
					result += ' ← ' + aliasName;
				}
			} else {
				result = '' === name ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('POPUPS_DOMAIN/TITLE_ADD_DOMAIN') : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('POPUPS_DOMAIN/TITLE_ADD_DOMAIN_WITH_NAME', { 'NAME': name });
			}

			return result;
		});

		_this.domainDesc = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			var name = _this.name();
			return !_this.edit() && name ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('POPUPS_DOMAIN/NEW_DOMAIN_DESC', { 'NAME': '*@' + name }) : '';
		});

		_this.domainIsComputed = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {

			var usePhpMail = _this.smtpPhpMail(),
			    allowSieve = _this.allowSieve(),
			    useSieve = _this.useSieve();

			return '' !== _this.name() && '' !== _this.imapServer() && '' !== _this.imapPort() && (allowSieve && useSieve ? '' !== _this.sieveServer() && '' !== _this.sievePort() : true) && ('' !== _this.smtpServer() && '' !== _this.smtpPort() || usePhpMail);
		});

		_this.canBeTested = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return !_this.testing() && _this.domainIsComputed();
		});
		_this.canBeSaved = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return !_this.saving() && _this.domainIsComputed();
		});

		_this.page.subscribe(function () {
			_this.sieveSettings(false);
		});

		// smart form improvements
		_this.imapServerFocus.subscribe(function (value) {
			if (value && '' !== _this.name() && '' === _this.imapServer()) {
				_this.imapServer(_this.name().replace(/[.]?[*][.]?/g, ''));
			}
		});

		_this.sieveServerFocus.subscribe(function (value) {
			if (value && '' !== _this.imapServer() && '' === _this.sieveServer()) {
				_this.sieveServer(_this.imapServer());
			}
		});

		_this.smtpServerFocus.subscribe(function (value) {
			if (value && '' !== _this.imapServer() && '' === _this.smtpServer()) {
				_this.smtpServer(_this.imapServer().replace(/imap/ig, 'smtp'));
			}
		});

		_this.imapSecure.subscribe(function (value) {
			if (_this.enableSmartPorts()) {
				var port = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(_this.imapPort());
				switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(value)) {
					case '0':
						if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].ImapSsl === port) {
							_this.imapPort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].Imap));
						}
						break;
					case '1':
						if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].Imap === port) {
							_this.imapPort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].ImapSsl));
						}
						break;
					// no default
				}
			}
		});

		_this.smtpSecure.subscribe(function (value) {
			if (_this.enableSmartPorts()) {
				var port = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(_this.smtpPort());
				switch (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(value)) {
					case '0':
						if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpSsl === port || __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpStartTls === port) {
							_this.smtpPort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].Smtp));
						}
						break;
					case '1':
						if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].Smtp === port || __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpStartTls === port) {
							_this.smtpPort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpSsl));
						}
						break;
					case '2':
						if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].Smtp === port || __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpSsl === port) {
							_this.smtpPort(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pString"])(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Ports"].SmtpStartTls));
						}
						break;
					// no default
				}
			}
		});
		return _this;
	}

	DomainPopupView.prototype.createOrAddCommand = function createOrAddCommand() {
		this.saving(true);
		__WEBPACK_IMPORTED_MODULE_12_Remote_Admin_Ajax__["a" /* default */].createOrUpdateDomain(__WEBPACK_IMPORTED_MODULE_4_____default.a.bind(this.onDomainCreateOrSaveResponse, this), !this.edit(), this.name(), this.imapServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.imapPort()), this.imapSecure(), this.imapShortLogin(), this.useSieve(), this.sieveAllowRaw(), this.sieveServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.sievePort()), this.sieveSecure(), this.smtpServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.smtpPort()), this.smtpSecure(), this.smtpShortLogin(), this.smtpAuth(), this.smtpPhpMail(), this.whiteList());
	};

	DomainPopupView.prototype.testConnectionCommand = function testConnectionCommand() {

		this.page('main');

		this.testingDone(false);
		this.testingImapError(false);
		this.testingSieveError(false);
		this.testingSmtpError(false);
		this.testing(true);

		__WEBPACK_IMPORTED_MODULE_12_Remote_Admin_Ajax__["a" /* default */].testConnectionForDomain(__WEBPACK_IMPORTED_MODULE_4_____default.a.bind(this.onTestConnectionResponse, this), this.name(), this.imapServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.imapPort()), this.imapSecure(), this.useSieve(), this.sieveServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.sievePort()), this.sieveSecure(), this.smtpServer(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(this.smtpPort()), this.smtpSecure(), this.smtpAuth(), this.smtpPhpMail());
	};

	DomainPopupView.prototype.whiteListCommand = function whiteListCommand() {
		this.page('white-list');
	};

	DomainPopupView.prototype.backCommand = function backCommand() {
		this.page('main');
	};

	DomainPopupView.prototype.sieveCommand = function sieveCommand() {
		this.sieveSettings(!this.sieveSettings());
		this.clearTesting();
	};

	DomainPopupView.prototype.onTestConnectionResponse = function onTestConnectionResponse(sResult, oData) {
		this.testing(false);
		if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["StorageResultType"].Success === sResult && oData.Result) {
			var bImap = false,
			    bSieve = false;

			this.testingDone(true);
			this.testingImapError(true !== oData.Result.Imap);
			this.testingSieveError(true !== oData.Result.Sieve);
			this.testingSmtpError(true !== oData.Result.Smtp);

			if (this.testingImapError() && oData.Result.Imap) {
				bImap = true;
				this.testingImapErrorDesc('');
				this.testingImapErrorDesc(oData.Result.Imap);
			}

			if (this.testingSieveError() && oData.Result.Sieve) {
				bSieve = true;
				this.testingSieveErrorDesc('');
				this.testingSieveErrorDesc(oData.Result.Sieve);
			}

			if (this.testingSmtpError() && oData.Result.Smtp) {
				this.testingSmtpErrorDesc('');
				this.testingSmtpErrorDesc(oData.Result.Smtp);
			}

			if (this.sieveSettings()) {
				if (!bSieve && bImap) {
					this.sieveSettings(false);
				}
			} else if (bSieve && !bImap) {
				this.sieveSettings(true);
			}
		} else {
			this.testingImapError(true);
			this.testingSieveError(true);
			this.testingSmtpError(true);
			this.sieveSettings(false);
		}
	};

	DomainPopupView.prototype.onDomainCreateOrSaveResponse = function onDomainCreateOrSaveResponse(sResult, oData) {
		this.saving(false);
		if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["StorageResultType"].Success === sResult && oData) {
			if (oData.Result) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_Helper_Apps_Admin__["a" /* getApp */])().reloadDomainList();
				this.closeCommand();
			} else if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Notification"].DomainAlreadyExists === oData.ErrorCode) {
				this.savingError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('ERRORS/DOMAIN_ALREADY_EXISTS'));
			}
		} else {
			this.savingError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Common_Translator__["i18n"])('ERRORS/UNKNOWN_ERROR'));
		}
	};

	DomainPopupView.prototype.clearTesting = function clearTesting() {
		this.testing(false);
		this.testingDone(false);
		this.testingImapError(false);
		this.testingSieveError(false);
		this.testingSmtpError(false);
	};

	DomainPopupView.prototype.onHide = function onHide() {
		this.page('main');
		this.sieveSettings(false);
	};

	DomainPopupView.prototype.onShow = function onShow(oDomain) {
		this.saving(false);

		this.page('main');
		this.sieveSettings(false);

		this.clearTesting();

		this.clearForm();
		if (oDomain) {
			this.enableSmartPorts(false);

			this.edit(true);

			this.name(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.Name));
			this.imapServer(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.IncHost));
			this.imapPort('' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(oDomain.IncPort));
			this.imapSecure(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.IncSecure));
			this.imapShortLogin(!!oDomain.IncShortLogin);
			this.useSieve(!!oDomain.UseSieve);
			this.sieveAllowRaw(!!oDomain.SieveAllowRaw);
			this.sieveServer(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.SieveHost));
			this.sievePort('' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(oDomain.SievePort));
			this.sieveSecure(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.SieveSecure));
			this.smtpServer(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.OutHost));
			this.smtpPort('' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["pInt"])(oDomain.OutPort));
			this.smtpSecure(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.OutSecure));
			this.smtpShortLogin(!!oDomain.OutShortLogin);
			this.smtpAuth(!!oDomain.OutAuth);
			this.smtpPhpMail(!!oDomain.OutUsePhpMail);
			this.whiteList(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.WhiteList));
			this.aliasName(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Utils__["trim"])(oDomain.AliasName));

			this.enableSmartPorts(true);
		}
	};

	DomainPopupView.prototype.onShowWithDelay = function onShowWithDelay() {
		if ('' === this.name() && !__WEBPACK_IMPORTED_MODULE_8_Common_Globals__["bMobileDevice"]) {
			this.name.focused(true);
		}
	};

	DomainPopupView.prototype.clearForm = function clearForm() {
		this.edit(false);

		this.page('main');
		this.sieveSettings(false);

		this.enableSmartPorts(false);

		this.savingError('');

		this.name('');
		this.name.focused(false);

		this.imapServer('');
		this.imapPort('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["d" /* IMAP_DEFAULT_PORT */]);
		this.imapSecure(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);
		this.imapShortLogin(false);

		this.useSieve(false);
		this.sieveAllowRaw(false);
		this.sieveServer('');
		this.sievePort('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["e" /* SIEVE_DEFAULT_PORT */]);
		this.sieveSecure(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);

		this.smtpServer('');
		this.smtpPort('' + __WEBPACK_IMPORTED_MODULE_7_Common_Consts__["f" /* SMTP_DEFAULT_PORT */]);
		this.smtpSecure(__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["ServerSecure"].None);
		this.smtpShortLogin(false);
		this.smtpAuth(true);
		this.smtpPhpMail(false);

		this.whiteList('');
		this.aliasName('');
		this.enableSmartPorts(true);
	};

	return DomainPopupView;
}(__WEBPACK_IMPORTED_MODULE_15_Knoin_AbstractViewNext__["a" /* AbstractViewNext */]), (_applyDecoratedDescriptor(_class2.prototype, 'createOrAddCommand', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'createOrAddCommand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'testConnectionCommand', [_dec3], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'testConnectionCommand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'whiteListCommand', [_dec4], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'whiteListCommand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'backCommand', [_dec5], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'backCommand'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'sieveCommand', [_dec6], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'sieveCommand'), _class2.prototype)), _class2)) || _class);




/***/ },
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
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
/* 215 */
/* exports provided: LoginAdminScreen, default */
/* exports used: LoginAdminScreen */
/*!***********************************!*\
  !*** ./dev/Screen/Admin/Login.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Knoin_AbstractScreen__ = __webpack_require__(/*! Knoin/AbstractScreen */ 73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_View_Admin_Login__ = __webpack_require__(/*! View/Admin/Login */ 242);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginAdminScreen; });
/* unused harmony export default */










var LoginAdminScreen = function (_AbstractScreen) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(LoginAdminScreen, _AbstractScreen);

	function LoginAdminScreen() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LoginAdminScreen);

		return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractScreen.call(this, 'login', [__WEBPACK_IMPORTED_MODULE_5_View_Admin_Login__["a" /* LoginAdminView */]]));
	}

	LoginAdminScreen.prototype.onShow = function onShow() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Helper_Apps_Admin__["a" /* getApp */])().setWindowTitle('');
	};

	return LoginAdminScreen;
}(__WEBPACK_IMPORTED_MODULE_3_Knoin_AbstractScreen__["a" /* AbstractScreen */]);



/***/ },
/* 216 */
/* exports provided: SettingsAdminScreen, default */
/* exports used: SettingsAdminScreen */
/*!**************************************!*\
  !*** ./dev/Screen/Admin/Settings.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Plugins__ = __webpack_require__(/*! Common/Plugins */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Screen_AbstractSettings__ = __webpack_require__(/*! Screen/AbstractSettings */ 116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Settings_Admin_General__ = __webpack_require__(/*! Settings/Admin/General */ 224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Settings_Admin_Login__ = __webpack_require__(/*! Settings/Admin/Login */ 225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Settings_Admin_Contacts__ = __webpack_require__(/*! Settings/Admin/Contacts */ 222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Settings_Admin_Domains__ = __webpack_require__(/*! Settings/Admin/Domains */ 223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Settings_Admin_Security__ = __webpack_require__(/*! Settings/Admin/Security */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Settings_Admin_Social__ = __webpack_require__(/*! Settings/Admin/Social */ 229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Settings_Admin_Plugins__ = __webpack_require__(/*! Settings/Admin/Plugins */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Settings_Admin_Packages__ = __webpack_require__(/*! Settings/Admin/Packages */ 226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Settings_Admin_About__ = __webpack_require__(/*! Settings/Admin/About */ 220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_View_Admin_Settings_Menu__ = __webpack_require__(/*! View/Admin/Settings/Menu */ 243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_View_Admin_Settings_Pane__ = __webpack_require__(/*! View/Admin/Settings/Pane */ 244);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsAdminScreen; });
/* unused harmony export default */




/* global RL_COMMUNITY */





















var SettingsAdminScreen = function (_AbstractSettingsScre) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(SettingsAdminScreen, _AbstractSettingsScre);

	function SettingsAdminScreen() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SettingsAdminScreen);

		return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractSettingsScre.call(this, [__WEBPACK_IMPORTED_MODULE_16_View_Admin_Settings_Menu__["a" /* MenuSettingsAdminView */], __WEBPACK_IMPORTED_MODULE_17_View_Admin_Settings_Pane__["a" /* PaneSettingsAdminView */]]));
	}

	/**
  * @param {Function=} fCallback = null
  */


	SettingsAdminScreen.prototype.setupSettings = function setupSettings() {
		var fCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_6_Settings_Admin_General__["a" /* GeneralAdminSettings */], 'AdminSettingsGeneral', 'TABS_LABELS/LABEL_GENERAL_NAME', 'general', true);

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_7_Settings_Admin_Login__["a" /* LoginAdminSettings */], 'AdminSettingsLogin', 'TABS_LABELS/LABEL_LOGIN_NAME', 'login');

		if (true) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__webpack_require__(/*! Settings/Admin/Branding */ 221).default, 'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
		} else {
			addSettingsViewModel(require('Settings/Admin/Prem/Branding').default, 'AdminSettingsBranding', 'TABS_LABELS/LABEL_BRANDING_NAME', 'branding');
		}

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_8_Settings_Admin_Contacts__["a" /* ContactsAdminSettings */], 'AdminSettingsContacts', 'TABS_LABELS/LABEL_CONTACTS_NAME', 'contacts');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_9_Settings_Admin_Domains__["a" /* DomainsAdminSettings */], 'AdminSettingsDomains', 'TABS_LABELS/LABEL_DOMAINS_NAME', 'domains');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_10_Settings_Admin_Security__["a" /* SecurityAdminSettings */], 'AdminSettingsSecurity', 'TABS_LABELS/LABEL_SECURITY_NAME', 'security');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_11_Settings_Admin_Social__["a" /* SocialAdminSettings */], 'AdminSettingsSocial', 'TABS_LABELS/LABEL_INTEGRATION_NAME', 'integrations');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_12_Settings_Admin_Plugins__["a" /* PluginsAdminSettings */], 'AdminSettingsPlugins', 'TABS_LABELS/LABEL_PLUGINS_NAME', 'plugins');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_13_Settings_Admin_Packages__["a" /* PackagesAdminSettings */], 'AdminSettingsPackages', 'TABS_LABELS/LABEL_PACKAGES_NAME', 'packages');

		if (false) {
			addSettingsViewModel(require('Settings/Admin/Prem/Licensing').default, 'AdminSettingsLicensing', 'TABS_LABELS/LABEL_LICENSING_NAME', 'licensing');
		}

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Knoin_Knoin__["addSettingsViewModel"])(__WEBPACK_IMPORTED_MODULE_14_Settings_Admin_About__["a" /* AboutAdminSettings */], 'AdminSettingsAbout', 'TABS_LABELS/LABEL_ABOUT_NAME', 'about');

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Plugins__["h" /* runSettingsViewModelHooks */])(true);

		if (fCallback) {
			fCallback();
		}
	};

	SettingsAdminScreen.prototype.onShow = function onShow() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_Helper_Apps_Admin__["a" /* getApp */])().setWindowTitle('');
	};

	return SettingsAdminScreen;
}(__WEBPACK_IMPORTED_MODULE_5_Screen_AbstractSettings__["a" /* AbstractSettingsScreen */]);



/***/ },
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */
/* exports provided: AboutAdminSettings, default */
/* exports used: AboutAdminSettings */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/About.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__ = __webpack_require__(/*! Stores/Admin/Core */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutAdminSettings; });
/* unused harmony export default */


/* global RL_COMMUNITY */











var AboutAdminSettings = function () {
	function AboutAdminSettings() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, AboutAdminSettings);

		this.version = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["appSettingsGet"])('version'));
		this.access = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Storage_Settings__["settingsGet"])('CoreAccess'));
		this.errorDesc = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');

		this.coreReal = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreReal;
		this.coreChannel = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreChannel;
		this.coreType = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreType;
		this.coreUpdatable = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreUpdatable;
		this.coreAccess = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreAccess;
		this.coreChecking = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreChecking;
		this.coreUpdating = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreUpdating;
		this.coreWarning = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreWarning;
		this.coreVersion = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreVersion;
		this.coreRemoteVersion = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreRemoteVersion;
		this.coreRemoteRelease = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreRemoteRelease;
		this.coreVersionCompare = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Core__["a" /* default */].coreVersionCompare;

		this.community = true || __WEBPACK_IMPORTED_MODULE_4_Stores_Admin_App__["a" /* default */].community();

		this.coreRemoteVersionHtmlDesc = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Translator__["trigger"])();
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_Common_Translator__["i18n"])('TAB_ABOUT/HTML_NEW_VERSION', { 'VERSION': _this.coreRemoteVersion() });
		});

		this.statusType = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.computed(function () {
			var type = '';
			var versionToCompare = _this.coreVersionCompare(),
			    isChecking = _this.coreChecking(),
			    isUpdating = _this.coreUpdating(),
			    isReal = _this.coreReal();

			if (isChecking) {
				type = 'checking';
			} else if (isUpdating) {
				type = 'updating';
			} else if (isReal && 0 === versionToCompare) {
				type = 'up-to-date';
			} else if (isReal && -1 === versionToCompare) {
				type = 'available';
			} else if (!isReal) {
				type = 'error';
				_this.errorDesc('Cannot access the repository at the moment.');
			}

			return type;
		});
	}

	AboutAdminSettings.prototype.onBuild = function onBuild() {
		if (this.access() && !this.community) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Helper_Apps_Admin__["a" /* getApp */])().reloadCoreData();
		}
	};

	AboutAdminSettings.prototype.updateCoreData = function updateCoreData() {
		if (!this.coreUpdating() && !this.community) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Helper_Apps_Admin__["a" /* getApp */])().updateCoreData();
		}
	};

	return AboutAdminSettings;
}();



/***/ },
/* 221 */
/* exports provided: BrandingAdminSettings, default */
/* all exports used */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Branding.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony export (binding) */ __webpack_require__.d(exports, "BrandingAdminSettings", function() { return BrandingAdminSettings; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return BrandingAdminSettings; });


/* global RL_COMMUNITY */













var BrandingAdminSettings = function () {
	function BrandingAdminSettings() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, BrandingAdminSettings);

		this.capa = __WEBPACK_IMPORTED_MODULE_7_Stores_Admin_App__["a" /* default */].prem;

		this.title = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('Title')).idleTrigger();
		this.loadingDesc = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoadingDescription')).idleTrigger();
		this.faviconUrl = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('FaviconUrl')).idleTrigger();
		this.loginLogo = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoginLogo') || '').idleTrigger();
		this.loginBackground = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoginBackground') || '').idleTrigger();
		this.userLogo = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('UserLogo') || '').idleTrigger();
		this.userLogoMessage = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('UserLogoMessage') || '').idleTrigger();
		this.userIframeMessage = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('UserIframeMessage') || '').idleTrigger();
		this.userLogoTitle = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('UserLogoTitle') || '').idleTrigger();
		this.loginDescription = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoginDescription')).idleTrigger();
		this.loginCss = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoginCss')).idleTrigger();
		this.userCss = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('UserCss')).idleTrigger();
		this.welcomePageUrl = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('WelcomePageUrl')).idleTrigger();
		this.welcomePageDisplay = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('WelcomePageDisplay')).idleTrigger();
		this.welcomePageDisplay.options = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["trigger"])();
			return [{ optValue: 'none', optText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_NONE') }, { optValue: 'once', optText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ONCE') }, { optValue: 'always', optText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["i18n"])('TAB_BRANDING/OPTION_WELCOME_PAGE_DISPLAY_ALWAYS') }];
		});

		this.loginPowered = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Storage_Settings__["settingsGet"])('LoginPowered'));
		this.community = true || __WEBPACK_IMPORTED_MODULE_7_Stores_Admin_App__["a" /* default */].community();
	}

	BrandingAdminSettings.prototype.onBuild = function onBuild() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
			var f1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.title.trigger, _this),
			    f2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.loadingDesc.trigger, _this),
			    f3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.faviconUrl.trigger, _this);

			_this.title.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f1, {
					'Title': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this.loadingDesc.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f2, {
					'LoadingDescription': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this.faviconUrl.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f3, {
					'FaviconUrl': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});
		}, __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["Magics"].Time50ms);
	};

	return BrandingAdminSettings;
}();



/***/ },
/* 222 */
/* exports provided: ContactsAdminSettings, default */
/* exports used: ContactsAdminSettings */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Contacts.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactsAdminSettings; });
/* unused harmony export default */



var _dec, _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}












var ContactsAdminSettings = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Knoin_Knoin__["command"])(function (self) {
	return '' !== self.pdoDsn() && '' !== self.pdoUser();
}), (_class = function () {
	function ContactsAdminSettings() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ContactsAdminSettings);

		this.defautOptionsAfterRender = __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["defautOptionsAfterRender"];
		this.enableContacts = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsEnable'));
		this.contactsSharing = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsSharing'));
		this.contactsSync = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsSync'));

		var supportedTypes = [],
		    types = ['sqlite', 'mysql', 'pgsql'],
		    getTypeName = function getTypeName(name) {
			switch (name) {
				case 'sqlite':
					name = 'SQLite';
					break;
				case 'mysql':
					name = 'MySQL';
					break;
				case 'pgsql':
					name = 'PostgreSQL';
					break;
				// no default
			}

			return name;
		};

		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('SQLiteIsSupported')) {
			supportedTypes.push('sqlite');
		}
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('MySqlIsSupported')) {
			supportedTypes.push('mysql');
		}
		if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('PostgreSqlIsSupported')) {
			supportedTypes.push('pgsql');
		}

		this.contactsSupported = 0 < supportedTypes.length;

		this.contactsTypes = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observableArray([]);
		this.contactsTypesOptions = this.contactsTypes.map(function (value) {
			var disabled = -1 === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["inArray"])(value, supportedTypes);
			return {
				'id': value,
				'name': getTypeName(value) + (disabled ? ' (' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Translator__["i18n"])('HINTS/NOT_SUPPORTED') + ')' : ''),
				'disabled': disabled
			};
		});

		this.contactsTypes(types);
		this.contactsType = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');

		this.mainContactsType = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed({
			read: this.contactsType,
			write: function write(value) {
				if (value !== _this.contactsType()) {
					if (-1 < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["inArray"])(value, supportedTypes)) {
						_this.contactsType(value);
					} else if (0 < supportedTypes.length) {
						_this.contactsType('');
					}
				} else {
					_this.contactsType.valueHasMutated();
				}
			}
		}).extend({ notify: 'always' });

		this.contactsType.subscribe(function () {
			_this.testContactsSuccess(false);
			_this.testContactsError(false);
			_this.testContactsErrorMessage('');
		});

		this.pdoDsn = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsPdoDsn'));
		this.pdoUser = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsPdoUser'));
		this.pdoPassword = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsPdoPassword'));

		this.pdoDsnTrigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
		this.pdoUserTrigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
		this.pdoPasswordTrigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);
		this.contactsTypeTrigger = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["SaveSettingsStep"].Idle);

		this.testing = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.testContactsSuccess = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.testContactsError = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.testContactsErrorMessage = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');

		this.contactsType(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsPdoType'));

		this.onTestContactsResponse = __WEBPACK_IMPORTED_MODULE_2_____default.a.bind(this.onTestContactsResponse, this);
	}

	ContactsAdminSettings.prototype.testContactsCommand = function testContactsCommand() {
		this.testContactsSuccess(false);
		this.testContactsError(false);
		this.testContactsErrorMessage('');
		this.testing(true);

		__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].testContacts(this.onTestContactsResponse, {
			'ContactsPdoType': this.contactsType(),
			'ContactsPdoDsn': this.pdoDsn(),
			'ContactsPdoUser': this.pdoUser(),
			'ContactsPdoPassword': this.pdoPassword()
		});
	};

	ContactsAdminSettings.prototype.onTestContactsResponse = function onTestContactsResponse(result, data) {
		this.testContactsSuccess(false);
		this.testContactsError(false);
		this.testContactsErrorMessage('');

		if (__WEBPACK_IMPORTED_MODULE_5_Common_Enums__["StorageResultType"].Success === result && data && data.Result && data.Result.Result) {
			this.testContactsSuccess(true);
		} else {
			this.testContactsError(true);
			if (data && data.Result) {
				this.testContactsErrorMessage(data.Result.Message || '');
			} else {
				this.testContactsErrorMessage('');
			}
		}

		this.testing(false);
	};

	ContactsAdminSettings.prototype.onShow = function onShow() {
		this.testContactsSuccess(false);
		this.testContactsError(false);
		this.testContactsErrorMessage('');
	};

	ContactsAdminSettings.prototype.onBuild = function onBuild() {
		var _this2 = this;

		__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(function () {
			var f1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.pdoDsnTrigger, _this2),
			    f3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.pdoUserTrigger, _this2),
			    f4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.pdoPasswordTrigger, _this2),
			    f5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.contactsTypeTrigger, _this2);

			_this2.enableContacts.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'ContactsEnable': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.contactsSharing.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'ContactsSharing': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.contactsSync.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'ContactsSync': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.contactsType.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f5, {
					'ContactsPdoType': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this2.pdoDsn.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f1, {
					'ContactsPdoDsn': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this2.pdoUser.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f3, {
					'ContactsPdoUser': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this2.pdoPassword.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_8_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f4, {
					'ContactsPdoPassword': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
				});
			});

			_this2.contactsType(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('ContactsPdoType'));
		}, __WEBPACK_IMPORTED_MODULE_5_Common_Enums__["Magics"].Time50ms);
	};

	return ContactsAdminSettings;
}(), (_applyDecoratedDescriptor(_class.prototype, 'testContactsCommand', [_dec], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'testContactsCommand'), _class.prototype)), _class));




/***/ },
/* 223 */
/* exports provided: DomainsAdminSettings, default */
/* exports used: DomainsAdminSettings */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Domains.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Domain__ = __webpack_require__(/*! Stores/Admin/Domain */ 96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DomainsAdminSettings; });
/* unused harmony export default */













var DomainsAdminSettings = function () {
	function DomainsAdminSettings() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, DomainsAdminSettings);

		this.domains = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_Domain__["a" /* default */].domains;

		this.visibility = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return _this.domains.loading() ? 'visible' : 'hidden';
		});

		this.domainForDeletion = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(null).deleteAccessHelper();

		this.onDomainListChangeRequest = __WEBPACK_IMPORTED_MODULE_1_____default.a.bind(this.onDomainListChangeRequest, this);
		this.onDomainLoadRequest = __WEBPACK_IMPORTED_MODULE_1_____default.a.bind(this.onDomainLoadRequest, this);
	}

	DomainsAdminSettings.prototype.createDomain = function createDomain() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Domain */ 186));
	};

	DomainsAdminSettings.prototype.createDomainAlias = function createDomainAlias() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/DomainAlias */ 248));
	};

	DomainsAdminSettings.prototype.deleteDomain = function deleteDomain(domain) {
		this.domains.remove(domain);
		__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].domainDelete(this.onDomainListChangeRequest, domain.name);
	};

	DomainsAdminSettings.prototype.disableDomain = function disableDomain(domain) {
		domain.disabled(!domain.disabled());
		__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].domainDisable(this.onDomainListChangeRequest, domain.name, domain.disabled());
	};

	DomainsAdminSettings.prototype.onBuild = function onBuild(oDom) {
		var self = this;
		oDom.on('click', '.b-admin-domains-list-table .e-item .e-action', function () {
			// eslint-disable-line prefer-arrow-callback
			var domainItem = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.dataFor(this); // eslint-disable-line no-invalid-this
			if (domainItem) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].domain(self.onDomainLoadRequest, domainItem.name);
			}
		});

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Helper_Apps_Admin__["a" /* getApp */])().reloadDomainList();
	};

	DomainsAdminSettings.prototype.onDomainLoadRequest = function onDomainLoadRequest(sResult, oData) {
		if (__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["StorageResultType"].Success === sResult && oData && oData.Result) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Domain */ 186), [oData.Result]);
		}
	};

	DomainsAdminSettings.prototype.onDomainListChangeRequest = function onDomainListChangeRequest() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Helper_Apps_Admin__["a" /* getApp */])().reloadDomainList();
	};

	return DomainsAdminSettings;
}();



/***/ },
/* 224 */
/* exports provided: GeneralAdminSettings, default */
/* exports used: GeneralAdminSettings */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/General.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__ = __webpack_require__(/*! Stores/Theme */ 58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Stores_Language__ = __webpack_require__(/*! Stores/Language */ 53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__ = __webpack_require__(/*! Stores/Admin/Capa */ 95);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GeneralAdminSettings; });
/* unused harmony export default */





















var GeneralAdminSettings = function () {
	function GeneralAdminSettings() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, GeneralAdminSettings);

		this.language = __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].language;
		this.languages = __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languages;
		this.languageAdmin = __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languageAdmin;
		this.languagesAdmin = __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].languagesAdmin;

		this.theme = __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__["a" /* default */].theme;
		this.themes = __WEBPACK_IMPORTED_MODULE_10_Stores_Theme__["a" /* default */].themes;

		this.capaThemes = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].themes;
		this.capaUserBackground = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].userBackground;
		this.capaGravatar = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].gravatar;
		this.capaAdditionalAccounts = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].additionalAccounts;
		this.capaIdentities = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].identities;
		this.capaAttachmentThumbnails = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].attachmentThumbnails;
		this.capaTemplates = __WEBPACK_IMPORTED_MODULE_13_Stores_Admin_Capa__["a" /* default */].templates;

		this.allowLanguagesOnSettings = __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__["a" /* default */].allowLanguagesOnSettings;
		this.weakPassword = __WEBPACK_IMPORTED_MODULE_12_Stores_Admin_App__["a" /* default */].weakPassword;

		this.mainAttachmentLimit = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('AttachmentLimit')) / (__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Magics"].BitLength1024 * __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Magics"].BitLength1024)).extend({ posInterer: 25 });

		this.uploadData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('PhpUploadSizes');
		this.uploadDataDesc = this.uploadData && (this.uploadData.upload_max_filesize || this.uploadData.post_max_size) ? [this.uploadData.upload_max_filesize ? 'upload_max_filesize = ' + this.uploadData.upload_max_filesize + '; ' : '', this.uploadData.post_max_size ? 'post_max_size = ' + this.uploadData.post_max_size : ''].join('') : '';

		this.themesOptions = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return __WEBPACK_IMPORTED_MODULE_1_____default.a.map(_this.themes(), function (theme) {
				return { optValue: theme, optText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["convertThemeName"])(theme) };
			});
		});

		this.languageFullName = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["convertLangName"])(_this.language());
		});
		this.languageAdminFullName = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["convertLangName"])(_this.languageAdmin());
		});

		this.attachmentLimitTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle);
		this.languageTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle);
		this.languageAdminTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle).extend({ throttle: __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Magics"].Time100ms });
		this.themeTrigger = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle);
	}

	GeneralAdminSettings.prototype.onBuild = function onBuild() {
		var _this2 = this;

		__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
			var f1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.attachmentLimitTrigger, _this2),
			    f2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.languageTrigger, _this2),
			    f3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this2.themeTrigger, _this2),
			    fReloadLanguageHelper = function fReloadLanguageHelper(saveSettingsStep) {
				return function () {
					_this2.languageAdminTrigger(saveSettingsStep);
					__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
						return _this2.languageAdminTrigger(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Idle);
					}, __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Magics"].Time1s);
				};
			};

			_this2.mainAttachmentLimit.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f1, {
					'AttachmentLimit': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["pInt"])(value)
				});
			});

			_this2.language.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f2, {
					'Language': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["trim"])(value)
				});
			});

			_this2.languageAdmin.subscribe(function (value) {
				_this2.languageAdminTrigger(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].Animate);
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["reload"])(true, value).then(fReloadLanguageHelper(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].TrueResult), fReloadLanguageHelper(__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["SaveSettingsStep"].FalseResult)).then(function () {
					__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
						'LanguageAdmin': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["trim"])(value)
					});
				});
			});

			_this2.theme.subscribe(function (value) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["changeTheme"])(value, _this2.themeTrigger);
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f3, {
					'Theme': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["trim"])(value)
				});
			});

			_this2.capaAdditionalAccounts.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaAdditionalAccounts': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaIdentities.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaIdentities': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaTemplates.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaTemplates': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaGravatar.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaGravatar': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaAttachmentThumbnails.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaAttachmentThumbnails': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaThemes.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaThemes': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.capaUserBackground.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'CapaUserBackground': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this2.allowLanguagesOnSettings.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_9_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'AllowLanguagesOnSettings': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});
		}, __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Magics"].Time50ms);
	};

	GeneralAdminSettings.prototype.selectLanguage = function selectLanguage() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Languages */ 81), [this.language, this.languages(), __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].userLanguage()]);
	};

	GeneralAdminSettings.prototype.selectLanguageAdmin = function selectLanguageAdmin() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Languages */ 81), [this.languageAdmin, this.languagesAdmin(), __WEBPACK_IMPORTED_MODULE_11_Stores_Language__["a" /* default */].userLanguageAdmin()]);
	};

	/**
  * @returns {string}
  */


	GeneralAdminSettings.prototype.phpInfoLink = function phpInfoLink() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Links__["d" /* phpInfo */])();
	};

	return GeneralAdminSettings;
}();



/***/ },
/* 225 */
/* exports provided: LoginAdminSettings, default */
/* exports used: LoginAdminSettings */
/*!*************************************!*\
  !*** ./dev/Settings/Admin/Login.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginAdminSettings; });
/* unused harmony export default */












var LoginAdminSettings = function () {
	function LoginAdminSettings() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LoginAdminSettings);

		this.determineUserLanguage = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_App__["a" /* default */].determineUserLanguage;
		this.determineUserDomain = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_App__["a" /* default */].determineUserDomain;

		this.defaultDomain = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"])('LoginDefaultDomain')).idleTrigger();
		this.allowLanguagesOnLogin = __WEBPACK_IMPORTED_MODULE_5_Stores_Admin_App__["a" /* default */].allowLanguagesOnLogin;

		this.dummy = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(false);
	}

	LoginAdminSettings.prototype.onBuild = function onBuild() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
			var f1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.defaultDomain.trigger, _this);

			_this.determineUserLanguage.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'DetermineUserLanguage': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this.determineUserDomain.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'DetermineUserDomain': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this.allowLanguagesOnLogin.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
					'AllowLanguagesOnLogin': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["boolToAjax"])(value)
				});
			});

			_this.defaultDomain.subscribe(function (value) {
				__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f1, {
					'LoginDefaultDomain': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_Common_Utils__["trim"])(value)
				});
			});
		}, 50);
	};

	return LoginAdminSettings;
}();



/***/ },
/* 226 */
/* exports provided: PackagesAdminSettings, default */
/* exports used: PackagesAdminSettings */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Packages.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window__ = __webpack_require__(/*! window */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Package__ = __webpack_require__(/*! Stores/Admin/Package */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PackagesAdminSettings; });
/* unused harmony export default */














var PackagesAdminSettings = function () {
	function PackagesAdminSettings() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PackagesAdminSettings);

		this.packagesError = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');

		this.packages = __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Package__["a" /* default */].packages;
		this.packagesReal = __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Package__["a" /* default */].packagesReal;
		this.packagesMainUpdatable = __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Package__["a" /* default */].packagesMainUpdatable;

		this.packagesCurrent = this.packages.filter(function (item) {
			return item && '' !== item.installed && !item.compare;
		});
		this.packagesAvailableForUpdate = this.packages.filter(function (item) {
			return item && '' !== item.installed && !!item.compare;
		});
		this.packagesAvailableForInstallation = this.packages.filter(function (item) {
			return item && '' === item.installed;
		});

		this.visibility = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
			return __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Package__["a" /* default */].packages.loading() ? 'visible' : 'hidden';
		});
	}

	PackagesAdminSettings.prototype.onShow = function onShow() {
		this.packagesError('');
	};

	PackagesAdminSettings.prototype.onBuild = function onBuild() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Helper_Apps_Admin__["a" /* getApp */])().reloadPackagesList();
	};

	PackagesAdminSettings.prototype.requestHelper = function requestHelper(packageToRequest, install) {
		var _this = this;

		return function (result, data) {

			if (__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success !== result || !data || !data.Result) {
				if (data && data.ErrorCode) {
					_this.packagesError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["getNotification"])(data.ErrorCode));
				} else {
					_this.packagesError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Translator__["getNotification"])(install ? __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantInstallPackage : __WEBPACK_IMPORTED_MODULE_4_Common_Enums__["Notification"].CantDeletePackage));
				}
			}

			__WEBPACK_IMPORTED_MODULE_2_____default.a.each(_this.packages(), function (item) {
				if (item && packageToRequest && item.loading && item.loading() && packageToRequest.file === item.file) {
					packageToRequest.loading(false);
					item.loading(false);
				}
			});

			if (__WEBPACK_IMPORTED_MODULE_4_Common_Enums__["StorageResultType"].Success === result && data && data.Result && data.Result.Reload) {
				__WEBPACK_IMPORTED_MODULE_1_window___default.a.location.reload();
			} else {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Helper_Apps_Admin__["a" /* getApp */])().reloadPackagesList();
			}
		};
	};

	PackagesAdminSettings.prototype.deletePackage = function deletePackage(packageToDelete) {
		if (packageToDelete) {
			packageToDelete.loading(true);
			__WEBPACK_IMPORTED_MODULE_7_Remote_Admin_Ajax__["a" /* default */].packageDelete(this.requestHelper(packageToDelete, false), packageToDelete);
		}
	};

	PackagesAdminSettings.prototype.installPackage = function installPackage(packageToInstall) {
		if (packageToInstall) {
			packageToInstall.loading(true);
			__WEBPACK_IMPORTED_MODULE_7_Remote_Admin_Ajax__["a" /* default */].packageInstall(this.requestHelper(packageToInstall, true), packageToInstall);
		}
	};

	return PackagesAdminSettings;
}();



/***/ },
/* 227 */
/* exports provided: PluginsAdminSettings, default */
/* exports used: PluginsAdminSettings */
/*!***************************************!*\
  !*** ./dev/Settings/Admin/Plugins.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__ = __webpack_require__(/*! Stores/Admin/Plugin */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PluginsAdminSettings; });
/* unused harmony export default */


/* global RL_COMMUNITY */


















var PluginsAdminSettings = function () {
	function PluginsAdminSettings() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PluginsAdminSettings);

		this.enabledPlugins = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Storage_Settings__["settingsGet"])('EnabledPlugins'));

		this.plugins = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins;
		this.pluginsError = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins.error;

		this.community = true || __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__["a" /* default */].community();

		this.visibility = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.computed(function () {
			return __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins.loading() ? 'visible' : 'hidden';
		});

		this.onPluginLoadRequest = __WEBPACK_IMPORTED_MODULE_1_____default.a.bind(this.onPluginLoadRequest, this);
		this.onPluginDisableRequest = __WEBPACK_IMPORTED_MODULE_1_____default.a.bind(this.onPluginDisableRequest, this);
	}

	PluginsAdminSettings.prototype.disablePlugin = function disablePlugin(plugin) {
		plugin.disabled(!plugin.disabled());
		__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].pluginDisable(this.onPluginDisableRequest, plugin.name, plugin.disabled());
	};

	PluginsAdminSettings.prototype.configurePlugin = function configurePlugin(plugin) {
		__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].plugin(this.onPluginLoadRequest, plugin.name);
	};

	PluginsAdminSettings.prototype.onBuild = function onBuild(oDom) {

		var self = this;

		oDom.on('click', '.e-item .configure-plugin-action', function () {
			// eslint-disable-line prefer-arrow-callback
			var plugin = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.dataFor(this); // eslint-disable-line no-invalid-this
			if (plugin) {
				self.configurePlugin(plugin);
			}
		}).on('click', '.e-item .disabled-plugin', function () {
			// eslint-disable-line prefer-arrow-callback
			var plugin = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.dataFor(this); // eslint-disable-line no-invalid-this
			if (plugin) {
				self.disablePlugin(plugin);
			}
		});

		this.enabledPlugins.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'EnabledPlugins': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Utils__["boolToAjax"])(value)
			});
		});
	};

	PluginsAdminSettings.prototype.onShow = function onShow() {
		__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins.error('');
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Helper_Apps_Admin__["a" /* getApp */])().reloadPluginList();
	};

	PluginsAdminSettings.prototype.onPluginLoadRequest = function onPluginLoadRequest(result, data) {
		if (__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Knoin_Knoin__["showScreenPopup"])(__webpack_require__(/*! View/Popup/Plugin */ 252), [data.Result]);
		}
	};

	PluginsAdminSettings.prototype.onPluginDisableRequest = function onPluginDisableRequest(result, data) {
		if (__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["StorageResultType"].Success === result && data) {
			if (!data.Result && data.ErrorCode) {
				if (__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["Notification"].UnsupportedPluginPackage === data.ErrorCode && data.ErrorMessage && '' !== data.ErrorMessage) {
					__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins.error(data.ErrorMessage);
				} else {
					__WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Plugin__["a" /* default */].plugins.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Translator__["getNotification"])(data.ErrorCode));
				}
			}
		}

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Helper_Apps_Admin__["a" /* getApp */])().reloadPluginList();
	};

	return PluginsAdminSettings;
}();



/***/ },
/* 228 */
/* exports provided: SecurityAdminSettings, default */
/* exports used: SecurityAdminSettings */
/*!****************************************!*\
  !*** ./dev/Settings/Admin/Security.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Common_Links__ = __webpack_require__(/*! Common/Links */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__ = __webpack_require__(/*! Stores/Admin/App */ 57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Capa__ = __webpack_require__(/*! Stores/Admin/Capa */ 95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SecurityAdminSettings; });
/* unused harmony export default */



var _dec, _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

















var SecurityAdminSettings = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__["command"])(function (self) {
	return '' !== __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(self.adminLogin()) && '' !== self.adminPassword();
}), (_class = function () {
	function SecurityAdminSettings() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SecurityAdminSettings);

		this.useLocalProxyForExternalImages = __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__["a" /* default */].useLocalProxyForExternalImages;

		this.weakPassword = __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_App__["a" /* default */].weakPassword;

		this.capaOpenPGP = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Capa__["a" /* default */].openPGP;

		this.capaTwoFactorAuth = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Capa__["a" /* default */].twoFactorAuth;
		this.capaTwoFactorAuthForce = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Capa__["a" /* default */].twoFactorAuthForce;

		this.capaTwoFactorAuth.subscribe(function (value) {
			if (!value) {
				_this.capaTwoFactorAuthForce(false);
			}
		});

		this.verifySslCertificate = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('VerifySslCertificate'));
		this.allowSelfSigned = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(!!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('AllowSelfSigned'));

		this.verifySslCertificate.subscribe(function (value) {
			if (!value) {
				_this.allowSelfSigned(true);
			}
		});

		this.isTwoFactorDropperShown = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.twoFactorDropperUser = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		this.twoFactorDropperUser.focused = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

		this.adminLogin = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_Storage_Settings__["settingsGet"])('AdminLogin'));
		this.adminLoginError = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.adminPassword = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		this.adminPasswordNew = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		this.adminPasswordNew2 = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable('');
		this.adminPasswordNewError = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

		this.adminPasswordUpdateError = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);
		this.adminPasswordUpdateSuccess = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(false);

		this.adminPassword.subscribe(function () {
			_this.adminPasswordUpdateError(false);
			_this.adminPasswordUpdateSuccess(false);
		});

		this.adminLogin.subscribe(function () {
			_this.adminLoginError(false);
		});

		this.adminPasswordNew.subscribe(function () {
			_this.adminPasswordUpdateError(false);
			_this.adminPasswordUpdateSuccess(false);
			_this.adminPasswordNewError(false);
		});

		this.adminPasswordNew2.subscribe(function () {
			_this.adminPasswordUpdateError(false);
			_this.adminPasswordUpdateSuccess(false);
			_this.adminPasswordNewError(false);
		});

		this.onNewAdminPasswordResponse = __WEBPACK_IMPORTED_MODULE_2_____default.a.bind(this.onNewAdminPasswordResponse, this);
	}

	SecurityAdminSettings.prototype.saveNewAdminPasswordCommand = function saveNewAdminPasswordCommand() {

		if ('' === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(this.adminLogin())) {
			this.adminLoginError(true);
			return false;
		}

		if (this.adminPasswordNew() !== this.adminPasswordNew2()) {
			this.adminPasswordNewError(true);
			return false;
		}

		this.adminPasswordUpdateError(false);
		this.adminPasswordUpdateSuccess(false);

		__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveNewAdminPassword(this.onNewAdminPasswordResponse, {
			'Login': this.adminLogin(),
			'Password': this.adminPassword(),
			'NewPassword': this.adminPasswordNew()
		});

		return true;
	};

	SecurityAdminSettings.prototype.showTwoFactorDropper = function showTwoFactorDropper() {
		var _this2 = this;

		this.twoFactorDropperUser('');
		this.isTwoFactorDropperShown(true);

		__WEBPACK_IMPORTED_MODULE_2_____default.a.delay(function () {
			_this2.twoFactorDropperUser.focused(true);
		}, __WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Magics"].Time50ms);
	};

	SecurityAdminSettings.prototype.onNewAdminPasswordResponse = function onNewAdminPasswordResponse(result, data) {
		if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
			this.adminPassword('');
			this.adminPasswordNew('');
			this.adminPasswordNew2('');

			this.adminPasswordUpdateSuccess(true);

			this.weakPassword(!!data.Result.Weak);
		} else {
			this.adminPasswordUpdateError(true);
		}
	};

	SecurityAdminSettings.prototype.onBuild = function onBuild() {
		this.capaOpenPGP.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'CapaOpenPGP': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});

		this.capaTwoFactorAuth.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'CapaTwoFactorAuth': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});

		this.capaTwoFactorAuthForce.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'CapaTwoFactorAuthForce': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});

		this.useLocalProxyForExternalImages.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'UseLocalProxyForExternalImages': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});

		this.verifySslCertificate.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'VerifySslCertificate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});

		this.allowSelfSigned.subscribe(function (value) {
			__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
				'AllowSelfSigned': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
			});
		});
	};

	SecurityAdminSettings.prototype.onHide = function onHide() {
		this.adminPassword('');
		this.adminPasswordNew('');
		this.adminPasswordNew2('');

		this.isTwoFactorDropperShown(false);
		this.twoFactorDropperUser('');
		this.twoFactorDropperUser.focused(false);
	};

	/**
  * @returns {string}
  */


	SecurityAdminSettings.prototype.phpInfoLink = function phpInfoLink() {
		return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_Common_Links__["d" /* phpInfo */])();
	};

	return SecurityAdminSettings;
}(), (_applyDecoratedDescriptor(_class.prototype, 'saveNewAdminPasswordCommand', [_dec], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'saveNewAdminPasswordCommand'), _class.prototype)), _class));




/***/ },
/* 229 */
/* exports provided: SocialAdminSettings, default */
/* exports used: SocialAdminSettings */
/*!**************************************!*\
  !*** ./dev/Settings/Admin/Social.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Stores_Social__ = __webpack_require__(/*! Stores/Social */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SocialAdminSettings; });
/* unused harmony export default */












var SocialAdminSettings = function () {
	function SocialAdminSettings() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, SocialAdminSettings);

		this.googleEnable = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.enabled;
		this.googleEnableAuth = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.capa.auth;
		this.googleEnableAuthFast = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.capa.authFast;
		this.googleEnableDrive = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.capa.drive;
		this.googleEnablePreview = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.capa.preview;

		this.googleEnableRequireClientSettings = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.require.clientSettings;
		this.googleEnableRequireApiKey = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.require.apiKeySettings;

		this.googleClientID = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.clientID;
		this.googleClientSecret = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.clientSecret;
		this.googleApiKey = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].google.apiKey;

		this.googleTrigger1 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);
		this.googleTrigger2 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);
		this.googleTrigger3 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);

		this.facebookSupported = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].facebook.supported;
		this.facebookEnable = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].facebook.enabled;
		this.facebookAppID = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].facebook.appID;
		this.facebookAppSecret = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].facebook.appSecret;

		this.facebookTrigger1 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);
		this.facebookTrigger2 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);

		this.twitterEnable = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].twitter.enabled;
		this.twitterConsumerKey = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].twitter.consumerKey;
		this.twitterConsumerSecret = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].twitter.consumerSecret;

		this.twitterTrigger1 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);
		this.twitterTrigger2 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);

		this.dropboxEnable = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].dropbox.enabled;
		this.dropboxApiKey = __WEBPACK_IMPORTED_MODULE_5_Stores_Social__["a" /* default */].dropbox.apiKey;

		this.dropboxTrigger1 = __WEBPACK_IMPORTED_MODULE_2_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_3_Common_Enums__["SaveSettingsStep"].Idle);
	}

	SocialAdminSettings.prototype.onBuild = function onBuild() {
		var _this = this;

		__WEBPACK_IMPORTED_MODULE_1_____default.a.delay(function () {
			var f1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.facebookTrigger1, _this),
			    f2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.facebookTrigger2, _this),
			    f3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.twitterTrigger1, _this),
			    f4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.twitterTrigger2, _this),
			    f5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger1, _this),
			    f6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger2, _this),
			    f7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.googleTrigger3, _this),
			    f8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["settingsSaveHelperSimpleFunction"])(_this.dropboxTrigger1, _this);

			_this.facebookEnable.subscribe(function (value) {
				if (_this.facebookSupported()) {
					__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(null, {
						'FacebookEnable': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"])(value)
					});
				}
			});

			_this.facebookAppID.subscribe(function (value) {
				if (_this.facebookSupported()) {
					__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f1, {
						'FacebookAppID': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
					});
				}
			});

			_this.facebookAppSecret.subscribe(function (value) {
				if (_this.facebookSupported()) {
					__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfig(f2, {
						'FacebookAppSecret': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"])(value)
					});
				}
			});

			_this.twitterEnable.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('TwitterEnable', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.twitterConsumerKey.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('TwitterConsumerKey', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f3));
			_this.twitterConsumerSecret.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('TwitterConsumerSecret', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f4));

			_this.googleEnable.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleEnable', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.googleEnableAuth.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleEnableAuth', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.googleEnableDrive.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleEnableDrive', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.googleEnablePreview.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleEnablePreview', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.googleClientID.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleClientID', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f5));
			_this.googleClientSecret.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleClientSecret', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f6));
			_this.googleApiKey.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('GoogleApiKey', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f7));

			_this.dropboxEnable.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('DropboxEnable', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["boolToAjax"]));
			_this.dropboxApiKey.subscribe(__WEBPACK_IMPORTED_MODULE_6_Remote_Admin_Ajax__["a" /* default */].saveAdminConfigHelper('DropboxApiKey', __WEBPACK_IMPORTED_MODULE_4_Common_Utils__["trim"], f8));
		}, __WEBPACK_IMPORTED_MODULE_3_Common_Enums__["Magics"].Time50ms);
	};

	return SocialAdminSettings;
}();



/***/ },
/* 230 */,
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
/* 241 */
/* exports provided: default */
/* exports used: default */
/*!*************************************!*\
  !*** ./dev/Stores/Admin/License.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ko__);




var LicenseAdminStore = function LicenseAdminStore() {
	__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, LicenseAdminStore);

	this.licensing = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	this.licensingProcess = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	this.licenseValid = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
	this.licenseExpired = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(0);
	this.licenseError = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable('');

	this.licenseTrigger = __WEBPACK_IMPORTED_MODULE_1_ko___default.a.observable(false);
};

/* harmony default export */ exports["a"] = new LicenseAdminStore();

/***/ },
/* 242 */
/* exports provided: LoginAdminView, default */
/* exports used: LoginAdminView */
/*!*********************************!*\
  !*** ./dev/View/Admin/Login.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginAdminView; });
/* unused harmony export default */





var _dec, _dec2, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}



















var LoginAdminView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_Knoin_Knoin__["view"])({
	name: 'View/Admin/Login',
	type: __WEBPACK_IMPORTED_MODULE_13_Knoin_Knoin__["ViewType"].Center,
	templateID: 'AdminLogin'
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_Knoin_Knoin__["command"])(function (self) {
	return !self.submitRequest();
}), _dec(_class = (_class2 = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(LoginAdminView, _AbstractViewNext);

	function LoginAdminView() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, LoginAdminView);

		var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.loginPowered = !!__WEBPACK_IMPORTED_MODULE_10_Storage_Settings__["settingsGet"]('LoginPowered');

		_this.mobile = !!__WEBPACK_IMPORTED_MODULE_10_Storage_Settings__["appSettingsGet"]('mobile');
		_this.mobileDevice = !!__WEBPACK_IMPORTED_MODULE_10_Storage_Settings__["appSettingsGet"]('mobileDevice');

		_this.hideSubmitButton = !!__WEBPACK_IMPORTED_MODULE_10_Storage_Settings__["appSettingsGet"]('hideSubmitButton');

		_this.login = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
		_this.password = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');

		_this.loginError = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);
		_this.passwordError = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);

		_this.loginErrorAnimation = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false).extend({ 'falseTimeout': 500 });
		_this.passwordErrorAnimation = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false).extend({ 'falseTimeout': 500 });

		_this.loginFocus = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);

		_this.formHidden = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);

		_this.formError = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.computed(function () {
			return _this.loginErrorAnimation() || _this.passwordErrorAnimation();
		});

		_this.login.subscribe(function () {
			return _this.loginError(false);
		});

		_this.password.subscribe(function () {
			return _this.passwordError(false);
		});

		_this.loginError.subscribe(function (v) {
			return _this.loginErrorAnimation(!!v);
		});

		_this.passwordError.subscribe(function (v) {
			_this.passwordErrorAnimation(!!v);
		});

		_this.submitRequest = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable(false);
		_this.submitError = __WEBPACK_IMPORTED_MODULE_4_ko___default.a.observable('');
		return _this;
	}

	LoginAdminView.prototype.submitCommand = function submitCommand() {
		var _this2 = this;

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["triggerAutocompleteInputChange"])();

		this.loginError(false);
		this.passwordError(false);

		this.loginError('' === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["trim"])(this.login()));
		this.passwordError('' === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["trim"])(this.password()));

		if (this.loginError() || this.passwordError()) {
			return false;
		}

		this.submitRequest(true);
		__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].trigger('rl.tooltips.diactivate');

		__WEBPACK_IMPORTED_MODULE_11_Remote_Admin_Ajax__["a" /* default */].adminLogin(function (sResult, oData) {

			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].trigger('rl.tooltips.diactivate');
			__WEBPACK_IMPORTED_MODULE_9_Common_Globals__["$win"].trigger('rl.tooltips.activate');

			if (__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["StorageResultType"].Success === sResult && oData && 'AdminLogin' === oData.Action) {
				if (oData.Result) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Helper_Apps_Admin__["a" /* getApp */])().loginAndLogoutReload(true);
				} else if (oData.ErrorCode) {
					_this2.submitRequest(false);
					_this2.submitError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["getNotification"])(oData.ErrorCode));
				}
			} else {
				_this2.submitRequest(false);
				_this2.submitError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["getNotification"])(__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["Notification"].UnknownError));
			}
		}, this.login(), this.password());

		return true;
	};

	LoginAdminView.prototype.onShow = function onShow() {
		var _this3 = this;

		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_Knoin_Knoin__["routeOff"])();

		__WEBPACK_IMPORTED_MODULE_5_____default.a.delay(function () {
			_this3.loginFocus(true);
		}, __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["Magics"].Time100ms);
	};

	LoginAdminView.prototype.onHide = function onHide() {
		this.loginFocus(false);
	};

	LoginAdminView.prototype.onBuild = function onBuild() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_Common_Utils__["triggerAutocompleteInputChange"])(true);
	};

	LoginAdminView.prototype.submitForm = function submitForm() {
		this.submitCommand();
	};

	return LoginAdminView;
}(__WEBPACK_IMPORTED_MODULE_14_Knoin_AbstractViewNext__["a" /* AbstractViewNext */]), (_applyDecoratedDescriptor(_class2.prototype, 'submitCommand', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'submitCommand'), _class2.prototype)), _class2)) || _class);




/***/ },
/* 243 */
/* exports provided: MenuSettingsAdminView, default */
/* exports used: MenuSettingsAdminView */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Menu.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! $ */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_key__ = __webpack_require__(/*! key */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuSettingsAdminView; });
/* unused harmony export default */




var _dec, _class;











var MenuSettingsAdminView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["view"])({
	name: 'View/Admin/Settings/Menu',
	type: __WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["ViewType"].Left,
	templateID: 'AdminMenu'
}), _dec(_class = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(MenuSettingsAdminView, _AbstractViewNext);

	/**
  * @param {?} screen
  */
	function MenuSettingsAdminView(screen) {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, MenuSettingsAdminView);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.leftPanelDisabled = __WEBPACK_IMPORTED_MODULE_6_Common_Globals__["leftPanelDisabled"];

		_this.menu = screen.menu;
		return _this;
	}

	MenuSettingsAdminView.prototype.link = function link(route) {
		return '#/' + route;
	};

	MenuSettingsAdminView.prototype.onBuild = function onBuild(dom) {

		__WEBPACK_IMPORTED_MODULE_5_key___default()('up, down', __WEBPACK_IMPORTED_MODULE_3_____default.a.throttle(function (event, handler) {

			var up = handler && 'up' === handler.shortcut,
			    $items = __WEBPACK_IMPORTED_MODULE_4_____default()('.b-admin-menu .e-item', dom);

			if (event && $items.length) {
				var index = $items.index($items.filter('.selected'));
				if (up && 0 < index) {
					index -= 1;
				} else if (!up && index < $items.length - 1) {
					index += 1;
				}

				var sH = $items.eq(index).attr('href');
				if (sH) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Knoin_Knoin__["setHash"])(sH, false, true);
				}
			}
		}, __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["Magics"].Time200ms));
	};

	return MenuSettingsAdminView;
}(__WEBPACK_IMPORTED_MODULE_9_Knoin_AbstractViewNext__["a" /* AbstractViewNext */])) || _class);




/***/ },
/* 244 */
/* exports provided: PaneSettingsAdminView, default */
/* exports used: PaneSettingsAdminView */
/*!*****************************************!*\
  !*** ./dev/View/Admin/Settings/Pane.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Storage_Settings__ = __webpack_require__(/*! Storage/Settings */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Domain__ = __webpack_require__(/*! Stores/Admin/Domain */ 96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Stores_Admin_Plugin__ = __webpack_require__(/*! Stores/Admin/Plugin */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_Package__ = __webpack_require__(/*! Stores/Admin/Package */ 118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaneSettingsAdminView; });
/* unused harmony export default */




var _dec, _class;

/* global RL_COMMUNITY */
















var PaneSettingsAdminView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_Knoin_Knoin__["view"])({
	name: 'View/Admin/Settings/Pane',
	type: __WEBPACK_IMPORTED_MODULE_10_Knoin_Knoin__["ViewType"].Right,
	templateID: 'AdminPane'
}), _dec(_class = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(PaneSettingsAdminView, _AbstractViewNext);

	function PaneSettingsAdminView() {
		__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, PaneSettingsAdminView);

		var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.adminDomain = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('AdminDomain'));
		_this.version = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.observable(__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["appSettingsGet"]('version'));

		_this.capa = !!__WEBPACK_IMPORTED_MODULE_4_Storage_Settings__["settingsGet"]('PremType');
		_this.community = true;

		_this.adminManLoading = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
			return '000' !== [__WEBPACK_IMPORTED_MODULE_6_Stores_Admin_Domain__["a" /* default */].domains.loading() ? '1' : '0', __WEBPACK_IMPORTED_MODULE_7_Stores_Admin_Plugin__["a" /* default */].plugins.loading() ? '1' : '0', __WEBPACK_IMPORTED_MODULE_8_Stores_Admin_Package__["a" /* default */].packages.loading() ? '1' : '0'].join('');
		});

		_this.adminManLoadingVisibility = __WEBPACK_IMPORTED_MODULE_3_ko___default.a.computed(function () {
			return _this.adminManLoading() ? 'visible' : 'hidden';
		}).extend({ rateLimit: 300 });
		return _this;
	}

	PaneSettingsAdminView.prototype.logoutClick = function logoutClick() {
		__WEBPACK_IMPORTED_MODULE_5_Remote_Admin_Ajax__["a" /* default */].adminLogout(function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Helper_Apps_Admin__["a" /* getApp */])().loginAndLogoutReload(true, true);
		});
	};

	return PaneSettingsAdminView;
}(__WEBPACK_IMPORTED_MODULE_11_Knoin_AbstractViewNext__["a" /* AbstractViewNext */])) || _class);




/***/ },
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/* exports provided: DomainAliasPopupView, default */
/* all exports used */
/*!***************************************!*\
  !*** ./dev/View/Popup/DomainAlias.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Globals__ = __webpack_require__(/*! Common/Globals */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__ = __webpack_require__(/*! Stores/Admin/Domain */ 96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Helper_Apps_Admin__ = __webpack_require__(/*! Helper/Apps/Admin */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "DomainAliasPopupView", function() { return DomainAliasPopupView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return DomainAliasPopupView; });





var _dec, _dec2, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

















var DomainAliasPopupView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Knoin_Knoin__["popup"])({
	name: 'View/Popup/DomainAlias',
	templateID: 'PopupsDomainAlias'
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_Knoin_Knoin__["command"])(function (self) {
	return self.canBeSaved();
}), _dec(_class = (_class2 = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(DomainAliasPopupView, _AbstractViewNext);

	function DomainAliasPopupView() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, DomainAliasPopupView);

		var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.saving = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);
		_this.savingError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.name = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.name.focused = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(false);

		_this.alias = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.domains = __WEBPACK_IMPORTED_MODULE_9_Stores_Admin_Domain__["a" /* default */].domainsWithoutAliases;

		_this.domainsOptions = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return __WEBPACK_IMPORTED_MODULE_4_____default.a.map(_this.domains(), function (item) {
				return { optValue: item.name, optText: item.name };
			});
		});

		_this.canBeSaved = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return !_this.saving() && '' !== _this.name() && '' !== _this.alias();
		});

		_this.onDomainAliasCreateOrSaveResponse = __WEBPACK_IMPORTED_MODULE_4_____default.a.bind(_this.onDomainAliasCreateOrSaveResponse, _this);
		return _this;
	}

	DomainAliasPopupView.prototype.createCommand = function createCommand() {
		this.saving(true);
		__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].createDomainAlias(this.onDomainAliasCreateOrSaveResponse, this.name(), this.alias());
	};

	DomainAliasPopupView.prototype.onDomainAliasCreateOrSaveResponse = function onDomainAliasCreateOrSaveResponse(result, data) {
		this.saving(false);
		if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["StorageResultType"].Success === result && data) {
			if (data.Result) {
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Helper_Apps_Admin__["a" /* getApp */])().reloadDomainList();
				this.closeCommand();
			} else if (__WEBPACK_IMPORTED_MODULE_6_Common_Enums__["Notification"].DomainAlreadyExists === data.ErrorCode) {
				this.savingError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["i18n"])('ERRORS/DOMAIN_ALREADY_EXISTS'));
			}
		} else {
			this.savingError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Translator__["i18n"])('ERRORS/UNKNOWN_ERROR'));
		}
	};

	DomainAliasPopupView.prototype.onShow = function onShow() {
		this.clearForm();
	};

	DomainAliasPopupView.prototype.onShowWithDelay = function onShowWithDelay() {
		if ('' === this.name() && !__WEBPACK_IMPORTED_MODULE_7_Common_Globals__["bMobileDevice"]) {
			this.name.focused(true);
		}
	};

	DomainAliasPopupView.prototype.clearForm = function clearForm() {
		this.saving(false);
		this.savingError('');

		this.name('');
		this.name.focused(false);

		this.alias('');
	};

	return DomainAliasPopupView;
}(__WEBPACK_IMPORTED_MODULE_13_Knoin_AbstractViewNext__["a" /* AbstractViewNext */]), (_applyDecoratedDescriptor(_class2.prototype, 'createCommand', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'createCommand'), _class2.prototype)), _class2)) || _class);




/***/ },
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */
/* exports provided: PluginPopupView, default */
/* all exports used */
/*!**********************************!*\
  !*** ./dev/View/Popup/Plugin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(/*! _ */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4____);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko__ = __webpack_require__(/*! ko */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ko___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ko__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_key__ = __webpack_require__(/*! key */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_key___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_key__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Common_Enums__ = __webpack_require__(/*! Common/Enums */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Common_Utils__ = __webpack_require__(/*! Common/Utils */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Common_Translator__ = __webpack_require__(/*! Common/Translator */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__ = __webpack_require__(/*! Remote/Admin/Ajax */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__ = __webpack_require__(/*! Knoin/Knoin */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Knoin_AbstractViewNext__ = __webpack_require__(/*! Knoin/AbstractViewNext */ 13);
/* harmony export (binding) */ __webpack_require__.d(exports, "PluginPopupView", function() { return PluginPopupView; });
/* harmony export (binding) */ __webpack_require__.d(exports, "default", function() { return PluginPopupView; });





var _dec, _dec2, _class, _desc, _value, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}














var PluginPopupView = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__["popup"])({
	name: 'View/Popup/Plugin',
	templateID: 'PopupsPlugin'
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__["command"])(function (self) {
	return self.hasConfiguration();
}), _dec(_class = (_class2 = function (_AbstractViewNext) {
	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(PluginPopupView, _AbstractViewNext);

	function PluginPopupView() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PluginPopupView);

		var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _AbstractViewNext.call(this));

		_this.onPluginSettingsUpdateResponse = __WEBPACK_IMPORTED_MODULE_4_____default.a.bind(_this.onPluginSettingsUpdateResponse, _this);

		_this.saveError = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.name = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');
		_this.readme = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable('');

		_this.configures = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observableArray([]);

		_this.hasReadme = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return '' !== _this.readme();
		});
		_this.hasConfiguration = __WEBPACK_IMPORTED_MODULE_5_ko___default.a.computed(function () {
			return 0 < _this.configures().length;
		});

		_this.readmePopoverConf = {
			'placement': 'right',
			'trigger': 'hover',
			'title': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Translator__["i18n"])('POPUPS_PLUGIN/TOOLTIP_ABOUT_TITLE'),
			'container': 'body',
			'html': true,
			'content': function content() {
				return '<pre>' + _this.readme() + '</pre>';
			}
		};

		_this.bDisabeCloseOnEsc = true;
		_this.sDefaultKeyScope = __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["KeyState"].All;

		_this.tryToClosePopup = __WEBPACK_IMPORTED_MODULE_4_____default.a.debounce(__WEBPACK_IMPORTED_MODULE_4_____default.a.bind(_this.tryToClosePopup, _this), __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["Magics"].Time200ms);
		return _this;
	}

	PluginPopupView.prototype.saveCommand = function saveCommand() {

		var list = {};
		list.Name = this.name();

		__WEBPACK_IMPORTED_MODULE_4_____default.a.each(this.configures(), function (oItem) {
			var value = oItem.value();
			if (false === value || true === value) {
				value = value ? '1' : '0';
			}
			list['_' + oItem.Name] = value;
		});

		this.saveError('');
		__WEBPACK_IMPORTED_MODULE_10_Remote_Admin_Ajax__["a" /* default */].pluginSettingsUpdate(this.onPluginSettingsUpdateResponse, list);
	};

	PluginPopupView.prototype.onPluginSettingsUpdateResponse = function onPluginSettingsUpdateResponse(result, data) {
		if (__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["StorageResultType"].Success === result && data && data.Result) {
			this.cancelCommand();
		} else {
			this.saveError('');
			if (data && data.ErrorCode) {
				this.saveError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Translator__["getNotification"])(data.ErrorCode));
			} else {
				this.saveError(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Translator__["getNotification"])(__WEBPACK_IMPORTED_MODULE_7_Common_Enums__["Notification"].CantSavePluginSettings));
			}
		}
	};

	PluginPopupView.prototype.onShow = function onShow(oPlugin) {
		this.name();
		this.readme();
		this.configures([]);

		if (oPlugin) {
			this.name(oPlugin.Name);
			this.readme(oPlugin.Readme);

			var config = oPlugin.Config;
			if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Utils__["isNonEmptyArray"])(config)) {
				this.configures(__WEBPACK_IMPORTED_MODULE_4_____default.a.map(config, function (item) {
					return {
						'value': __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(item[0]),
						'placeholder': __WEBPACK_IMPORTED_MODULE_5_ko___default.a.observable(item[6]),
						'Name': item[1],
						'Type': item[2],
						'Label': item[3],
						'Default': item[4],
						'Desc': item[5]
					};
				}));
			}
		}
	};

	PluginPopupView.prototype.tryToClosePopup = function tryToClosePopup() {
		var _this2 = this;

		var PopupsAskViewModel = __webpack_require__(/*! View/Popup/Ask */ 74);
		if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__["isPopupVisible"])(PopupsAskViewModel)) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_Knoin_Knoin__["showScreenPopup"])(PopupsAskViewModel, [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_Common_Translator__["i18n"])('POPUPS_ASK/DESC_WANT_CLOSE_THIS_WINDOW'), function () {
				if (_this2.modalVisibility()) {
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_Common_Utils__["delegateRun"])(_this2, 'cancelCommand');
				}
			}]);
		}
	};

	PluginPopupView.prototype.onBuild = function onBuild() {
		var _this3 = this;

		__WEBPACK_IMPORTED_MODULE_6_key___default()('esc', __WEBPACK_IMPORTED_MODULE_7_Common_Enums__["KeyState"].All, function () {
			if (_this3.modalVisibility()) {
				_this3.tryToClosePopup();
			}

			return false;
		});
	};

	return PluginPopupView;
}(__WEBPACK_IMPORTED_MODULE_12_Knoin_AbstractViewNext__["a" /* AbstractViewNext */]), (_applyDecoratedDescriptor(_class2.prototype, 'saveCommand', [_dec2], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class2.prototype, 'saveCommand'), _class2.prototype)), _class2)) || _class);




/***/ },
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
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./dev/admin.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(/*! bootstrap */ 93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_App_Admin__ = __webpack_require__(/*! App/Admin */ 176);
/* @flow */



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_bootstrap__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_App_Admin__["default"]);

/***/ }
/******/ ]);
