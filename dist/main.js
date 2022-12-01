/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root,\\r\\n:root.dark {\\r\\n    --bgColor: #333;\\r\\n    --fontColor: #eee;\\r\\n    --drawZoneColor: #555;\\r\\n    --btnBgColor: #eee;\\r\\n    --btnFontColor: #000;\\r\\n    --btnFocusColor: #888;\\r\\n    --bgFooter: #444;\\r\\n}\\r\\n:root.light {\\r\\n    --bgColor: #ddd;\\r\\n    --fontColor: #333;\\r\\n    --drawZoneColor: #fff;\\r\\n    --btnBgColor: #fff;\\r\\n    --btnFontColor: #333;\\r\\n    --btnFocusColor: #bbb;\\r\\n    --bgFooter: #fff;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    color: var(--fontColor);\\r\\n    min-width: 700px;\\r\\n    transition: background-color 0.5s, color 0.5s;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: var(--bgColor);\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n#root {\\r\\n    margin: 20px;\\r\\n    position: relative;\\r\\n    width: 70%;\\r\\n    min-width: 500px;\\r\\n    height: 500px;\\r\\n    min-height: 500px;\\r\\n    border: 1px solid var(--fontColor);\\r\\n    background-color: var(--drawZoneColor);\\r\\n}\\r\\n\\r\\n.commands,\\r\\n.utils,\\r\\n.debug {\\r\\n    display: flex;\\r\\n    width: 50%;\\r\\n    justify-content: space-evenly;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    width: 130px;\\r\\n    height: 50px;\\r\\n    margin: 10px;\\r\\n    border: none;\\r\\n    border-radius: 5px;\\r\\n    font-size: 1rem;\\r\\n    font-weight: bold;\\r\\n    background-color: var(--btnBgColor);\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n    border: 2px solid var(--btnFontColor);\\r\\n}\\r\\n\\r\\nbutton:active {\\r\\n    background: var(--btnFocusColor);\\r\\n}\\r\\n\\r\\n.darkThemeCheckbox:checked {\\r\\n    --bgColor: #red;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    margin-top: 50px;\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n    background-color: var(--bgFooter);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test_tech_xgil/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test_tech_xgil/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test_tech_xgil/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/features/App.js":
/*!********************************!*\
  !*** ./src/js/features/App.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Rectangle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle.js */ \"./src/js/features/Rectangle.js\");\n\r\n\r\n/**\r\n * @class\r\n * The application that creates the drawing zone and handle Rectangle Drawing\r\n */\r\nclass App {\r\n    constructor() {\r\n        this.divId = 0;\r\n        this.isFirstClick = true;\r\n        this.currentRectangle = undefined;\r\n        this.rectangles = [];\r\n        this.rectanglesDivToRemove = [];\r\n        this.rectanglesDiv = [];\r\n        this.timeout = undefined;\r\n        this.minimalAreaDifference = undefined;\r\n        this.root = document.getElementById(\"root\");\r\n        this.resetButton = document.querySelector(\".reset\");\r\n        this.paintButton = document.querySelector(\".paint\");\r\n        this.logInfosButton = document.querySelector(\".logInfos\");\r\n        this.debugCheckbox = document.querySelector(\".debugCheckbox\");\r\n        this.darkThemeCheckbox = document.querySelector(\".darkThemeCheckbox\");\r\n        this.utils = document.querySelector(\".utils\");\r\n        this.utils.style.display = \"none\";\r\n        this.#addListeners();\r\n        this.#handleWindowResize();\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Adds the event listeners.\r\n     */\r\n    #addListeners() {\r\n        [\"mousedown\", \"mousemove\"].forEach((event) =>\r\n            this.root.addEventListener(event, (e) => this.#handleRootClick(e))\r\n        );\r\n        window.addEventListener(\"resize\", () => {\r\n            this.#handleWindowResize();\r\n        });\r\n        this.resetButton.addEventListener(\"click\", () => {\r\n            this.#handleReset();\r\n        });\r\n        this.paintButton.addEventListener(\"click\", () => {\r\n            this.#handlePaint();\r\n        });\r\n        this.logInfosButton.addEventListener(\"click\", () => {\r\n            this.#handleLogInfos();\r\n        });\r\n        this.debugCheckbox.addEventListener(\"change\", () => {\r\n            this.debugCheckbox.checked\r\n                ? (this.utils.style.display = \"flex\")\r\n                : (this.utils.style.display = \"none\");\r\n        });\r\n        this.darkThemeCheckbox.addEventListener(\"change\", () => {\r\n            this.darkThemeCheckbox.checked\r\n                ? (document.documentElement.className = \"dark\")\r\n                : (document.documentElement.className = \"light\");\r\n        });\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Handles window resizing.\r\n     */\r\n    #handleWindowResize() {\r\n        this.offset = [\r\n            this.root.getBoundingClientRect().left,\r\n            this.root.getBoundingClientRect().top,\r\n        ];\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * @param {event} e The event object.\r\n     * Handles drawing zone events. Creates a rectangle on first click,\r\n     * then updates it on mouse move and draws it on second click.\r\n     */\r\n    #handleRootClick(e) {\r\n        if (e.type === \"mousedown\") {\r\n            if (this.isFirstClick) {\r\n                this.currentRectangle = new _Rectangle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n                    e.clientX,\r\n                    e.clientY,\r\n                    this.divId,\r\n                    this\r\n                );\r\n                this.isFirstClick = !this.isFirstClick;\r\n            } else {\r\n                this.currentRectangle.displayRectangle(e.clientX, e.clientY);\r\n                if (this.currentRectangle.area > 0) {\r\n                    this.rectangles.push(this.currentRectangle);\r\n                    this.divId++;\r\n                }\r\n                this.currentRectangle.div.addEventListener(\"dblclick\", (e) =>\r\n                    this.currentRectangle.handleDoubleClick(e)\r\n                );\r\n                this.isFirstClick = !this.isFirstClick;\r\n            }\r\n        }\r\n        if (e.type === \"mousemove\" && !this.isFirstClick) {\r\n            this.currentRectangle.displayRectangle(e.clientX, e.clientY);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Reset the application variables, empty the drawing zone.\r\n     */\r\n    #handleReset() {\r\n        this.rectanglesDiv = document.querySelectorAll(\".subdiv\");\r\n        this.rectanglesDiv.forEach((element) => element.remove());\r\n        this.rectangles = [];\r\n        this.currentRectangle = null;\r\n        this.divId = 0;\r\n        this.isFirstClick = true;\r\n        this.minimalAreaDifference = {\r\n            refRect: null,\r\n            targetRect: null,\r\n            value: Number.MAX_VALUE,\r\n        };\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Set same random color to 2 rectangles that have the less area difference.\r\n     * Works only if at least 2 rectangles are drawn.\r\n     */\r\n    #handlePaint() {\r\n        if (this.rectangles.length >= 2) {\r\n            this.minimalAreaDifference = {\r\n                firstRect: null,\r\n                secondRect: null,\r\n                value: Number.MAX_VALUE,\r\n            };\r\n            this.rectangles.sort((rect1, rect2) =>\r\n                rect1.area < rect2.area ? -1 : rect1.area > rect2.area ? 1 : 0\r\n            );\r\n            for (let i = 0; i < this.rectangles.length - 1; i++) {\r\n                if (\r\n                    this.rectangles[i + 1].area - this.rectangles[i].area <\r\n                    this.minimalAreaDifference.value\r\n                ) {\r\n                    this.minimalAreaDifference.value =\r\n                        this.rectangles[i + 1].area - this.rectangles[i].area;\r\n                    this.minimalAreaDifference.firstRect = this.rectangles[i];\r\n                    this.minimalAreaDifference.secondRect =\r\n                        this.rectangles[i + 1];\r\n                }\r\n            }\r\n            this.minimalAreaDifference.firstRect.setRandomColor();\r\n            this.minimalAreaDifference.secondRect.div.style.backgroundColor =\r\n                this.minimalAreaDifference.firstRect.div.style.backgroundColor;\r\n        }\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Log to the console informations about the current important variables.\r\n     */\r\n    #handleLogInfos() {\r\n        console.log(\"------ START LOG ------\");\r\n        console.log(\"allRect : \", this.rectangles);\r\n        console.log(\"workingRect : \", this.currentRectangle);\r\n        console.log(\"isFirstClick : \", this.isFirstClick);\r\n        console.log(\"offset : \", this.offset);\r\n        console.log(\"------ ENG LOG ------\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://test_tech_xgil/./src/js/features/App.js?");

/***/ }),

/***/ "./src/js/features/Rectangle.js":
/*!**************************************!*\
  !*** ./src/js/features/Rectangle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rectangle)\n/* harmony export */ });\n/**\r\n * @Class\r\n * The rectangle created on click\r\n */\r\nclass Rectangle {\r\n    /**\r\n     * @param {number} left The left position of the rectangle.\r\n     * @param {number} top The top position of the rectangle.\r\n     * @param {number} id The incremental id of the rectangle.\r\n     * @param {Appliction} app The application where the rectangle is drawn.\r\n     */\r\n    constructor(left, top, id, app) {\r\n        this.app = app;\r\n        this.top = top - this.app.offset[1];\r\n        this.left = left - this.app.offset[0];\r\n        this.div = document.createElement(\"div\");\r\n        this.div.setAttribute(\"class\", `subdiv subdiv-${id}`);\r\n        this.div.style.position = \"absolute\";\r\n        this.div.style.top = `${top}px`;\r\n        this.div.style.left = `${left}px`;\r\n        this.newAllRect = [];\r\n        this.app.root.appendChild(this.div);\r\n        this.area = 0;\r\n        this.setRandomColor();\r\n        this.rotate360 = [\r\n            { transform: \"rotate(0)\" },\r\n            { transform: \"rotate(360deg)\" },\r\n        ];\r\n    }\r\n\r\n    /**\r\n     * @method\r\n     * Set random color to the current rectangle.\r\n     */\r\n    setRandomColor() {\r\n        let color = \"\";\r\n        while (color.length < 7) {\r\n            color += Math.random().toString(16);\r\n        }\r\n        this.div.style.backgroundColor = \"#\" + color.slice(-6);\r\n    }\r\n\r\n    /**\r\n     * @method\r\n     * Displays the rectangle in the drawing area depending on the right and bottom positions.\r\n     * @param {number} right The right position.\r\n     * @param {number} bottom The bottom position.\r\n     */\r\n    displayRectangle(right, bottom) {\r\n        right -= this.app.offset[0];\r\n        bottom -= this.app.offset[1];\r\n        right > this.left\r\n            ? (this.div.style.left = `${this.left}px`)\r\n            : (this.div.style.left = `${right}px`);\r\n        bottom > this.top\r\n            ? (this.div.style.top = `${this.top}px`)\r\n            : (this.div.style.top = `${bottom}px`);\r\n        this.div.style.width = `${Math.abs(right - this.left)}px`;\r\n        this.div.style.height = `${Math.abs(bottom - this.top)}px`;\r\n        this.area = this.div.clientWidth * this.div.clientHeight;\r\n    }\r\n\r\n    /**\r\n     * @private_method\r\n     * Handles multiple rectangles removal.\r\n     * Kills the current timeout if a rectangle is in the deletion queue.\r\n     * Then sets the same timeout.\r\n     * @param {function} func The callback function.\r\n     * @param {number} timing The timeout in milliseconds.\r\n     */\r\n    #handleRectanglesRemoval(func, timing) {\r\n        window.clearTimeout(this.app.timeout);\r\n        this.app.timeout = window.setTimeout(func, timing);\r\n    }\r\n    /**\r\n     * @method\r\n     * On double click, animates the rectangle and removes it from the drawing zone.\r\n     * If an other remove event is triggered, wait for the last animation to finish before queue deletion.\r\n     * @param {event} e The event object.\r\n     */\r\n    handleDoubleClick(e) {\r\n        e.stopPropagation();\r\n        e.target.animate(this.rotate360, { duration: 900 });\r\n        this.app.rectanglesDivToRemove.push(e.target);\r\n        this.#handleRectanglesRemoval(() => {\r\n            this.app.rectangles = this.app.rectangles.filter((rect) => {\r\n                return !this.app.rectanglesDivToRemove.includes(rect.div);\r\n            });\r\n            this.app.rectanglesDivToRemove.forEach((rect) => {\r\n                rect.remove();\r\n            });\r\n        }, 1000);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://test_tech_xgil/./src/js/features/Rectangle.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/App.js */ \"./src/js/features/App.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    new _features_App_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n});\r\n\n\n//# sourceURL=webpack://test_tech_xgil/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;