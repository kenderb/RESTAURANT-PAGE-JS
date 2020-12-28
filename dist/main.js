/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"1ae1dcee9e49cbcbcd7f79414cad0c99.png\");\n\n//# sourceURL=webpack://restaurant-page-js/./src/images/logo.png?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _logo_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo-image */ \"./src/logo-image.js\");\n\n\nconst homePage = () => {\n  const container = document.getElementById('container');\n\n  const header = document.createElement('header');\n  header.classList.add('head');\n  header.classList.add('content');\n\n  const logoDiv = document.createElement('div');\n  logoDiv.classList.add('item');\n\n  const navBar = document.createElement('nav');\n  navBar.classList.add('item');\n\n\n  const infoDivPhone = document.createElement('div');\n  infoDivPhone.classList.add('item');\n  infoDivPhone.classList.add('info');\n  infoDivPhone.id = 'phone';\n\n  const phoneIcon = document.createElement('img');\n  phoneIcon.id = 'phoneIcon';\n  phoneIcon.src = '/dist/assets/images/phone.png';\n\n  const infoDivPhoneText = document.createTextNode('01800-857865');\n  infoDivPhone.appendChild(phoneIcon);\n  infoDivPhone.appendChild(infoDivPhoneText);\n\n\n  const menuSpan = document.createElement('span');\n  menuSpan.classList.add('menu');\n  menuSpan.classList.add('hover');\n  menuSpan.id = 'menu';\n\n  const historySpan = document.createElement('span');\n  historySpan.classList.add('menu');\n  historySpan.id = 'history';\n\n  const galerySpan = document.createElement('span');\n  galerySpan.classList.add('menu');\n  galerySpan.id = 'galery';\n\n  const contactSpan = document.createElement('span');\n  contactSpan.classList.add('menu');\n  contactSpan.id = 'contact';\n\n\n  const menuSpanText = document.createTextNode('Menu');\n  menuSpan.appendChild(menuSpanText);\n\n  const historySpanText = document.createTextNode('Our history');\n  historySpan.appendChild(historySpanText);\n\n  const galerySpanText = document.createTextNode('Galery');\n  galerySpan.appendChild(galerySpanText);\n\n  const contactSpanText = document.createTextNode('Contact');\n  contactSpan.appendChild(contactSpanText);\n\n  const sectionContent = document.createElement('section');\n  sectionContent.classList.add('content');\n  sectionContent.classList.add('contentInfo');\n  sectionContent.id = 'section1';\n\n\n  const h1 = document.createElement('h1');\n  const textH1 = document.createTextNode('You are especial for us.');\n  h1.appendChild(textH1);\n\n\n  const TextPVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                  quis nostrud exercitation ullamco laboris nisi ut aliquip \n                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                  cillum dolore eu fugiat nulla pariatur. \n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                  mollit anim id est laborum.\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \n                  quis nostrud exercitation ullamco laboris nisi ut aliquip \n                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \n                  cillum dolore eu fugiat nulla pariatur. \n                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt \n                  mollit anim id est laborum.`;\n\n  const pSection = document.createElement('p');\n  const pText = document.createTextNode(TextPVar);\n  pSection.appendChild(pText);\n\n\n  const divMore = document.createElement('div');\n  const spanBotton = document.createElement('span');\n  spanBotton.classList.add('info');\n  const textBotton = document.createTextNode('Read more');\n  spanBotton.appendChild(textBotton);\n  divMore.appendChild(spanBotton);\n\n  header.appendChild(logoDiv);\n  header.appendChild(navBar);\n  header.appendChild(infoDivPhone);\n\n\n  logoDiv.appendChild((0,_logo_image__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n  navBar.appendChild(menuSpan);\n  navBar.appendChild(historySpan);\n  navBar.appendChild(galerySpan);\n  navBar.appendChild(contactSpan);\n\n  sectionContent.appendChild(h1);\n  sectionContent.appendChild(pSection);\n  sectionContent.appendChild(divMore);\n\n  container.appendChild(header);\n  container.appendChild(sectionContent);\n\n\n  function outPut() {\n    return container;\n  }\n  return {\n    outPut,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://restaurant-page-js/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant-page-js/./src/index.js?");

/***/ }),

/***/ "./src/logo-image.js":
/*!***************************!*\
  !*** ./src/logo-image.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n\n\nfunction logoImage() {\n  const logoImg = document.createElement('img');\n  logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  logoImg.alt = 'logo';\n  logoImg.id = 'logo';\n  logoImg.onclick = () => {\n    window.location.reload();\n  };\n  return logoImg;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logoImage);\n\n//# sourceURL=webpack://restaurant-page-js/./src/logo-image.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;