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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/helpers */ \"./src/helpers.js\");\n/* harmony import */ var _public_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/logo.jpg */ \"./public/logo.jpg\");\n/* harmony import */ var _public_logo_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_logo_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar url = \"data:image/jpeg;base64,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\";\n\nvar makeImgElement = function makeImgElement(imgSrc) {\n  var img = document.createElement(\"img\");\n  img.alt = \"test webpack loaders\";\n  img.src = imgSrc;\n  var body = document.querySelector(\"body\");\n  body.appendChild(img);\n};\n\nmakeImgElement(_public_logo_jpg__WEBPACK_IMPORTED_MODULE_1___default.a); // makeImgElement(url);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./style.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./style.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"h3 {\\n  background: #200404;\\n  color: #ddd; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\r\\n  background: #ddd;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  text-align: center;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./public/logo.jpg":
/*!*************************!*\
  !*** ./public/logo.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8ca70950ae55e45175230a047d617757.jpg\";\n\n//# sourceURL=webpack:///./public/logo.jpg?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: helloWorld, makeImgElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"helloWorld\", function() { return helloWorld; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeImgElement\", function() { return makeImgElement; });\nvar helloWorld = function helloWorld(msg) {\n  console.log(msg + 1);\n};\nvar makeImgElement = function makeImgElement(imgSrc) {\n  var img = document.createElement(\"img\");\n  img.alt = \"test webpack loaders\";\n  img.src = imgSrc;\n  var body = document.querySelector(\"body\");\n  body.appendChild(img);\n};\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ./node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ./node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });