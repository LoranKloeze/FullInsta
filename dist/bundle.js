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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _Log = _interopRequireDefault(__webpack_require__(/*! ./pack/utils/Log */ \"./src/pack/utils/Log.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _Log.default)('Starting FullInsta');\nvar targetNode = document.getElementsByTagName('body')[0];\nvar config = {\n  attributes: true,\n  childList: true,\n  subtree: true\n};\nvar theStyle = \"\\n  .fullinsta-link {\\n      background-color: #5391CD;\\n      position: absolute;\\n      padding: 5px;\\n      border-bottom-right-radius: 6px;\\n      transition: background-color 200ms;\\n      cursor: pointer;\\n      z-index: 99999;\\n  }\\n  .fullinsta-link:hover {\\n    background-color: #88b1d8;\\n  }\\n\";\nvar styleNode = document.createElement('style');\nstyleNode.innerText = theStyle;\ntargetNode.appendChild(styleNode);\nsetInterval(function () {\n  var articles = document.getElementsByTagName('article');\n\n  for (var i = 0; i < articles.length; i++) {\n    var article = articles[i];\n\n    if (article.getAttribute('role') === 'presentation') {\n      var buttons = article.getElementsByClassName('fullinsta-link');\n\n      if (buttons.length === 0) {\n        var link = '';\n        var images = article.getElementsByTagName('img');\n\n        for (var x = 0; x < images.length; x++) {\n          if (images[x].srcset) {\n            console.log(images[x]);\n            var srcSets = images[x].srcset.split(',');\n            var srcSet = srcSets[srcSets.length - 1];\n            link = srcSet.split(' ')[0];\n\n            if (link !== undefined && link !== '') {\n              var a = document.createElement('a');\n              a.innerText = 'Full';\n              a.setAttribute('target', '_blank');\n              a.setAttribute('href', link);\n              a.className = 'fullinsta-link';\n              images[x].parentNode.appendChild(a);\n            }\n          }\n        }\n      }\n    }\n  }\n}, 500);\n\n//# sourceURL=webpack://full_insta/./src/index.js?");

/***/ }),

/***/ "./src/pack/utils/Log.js":
/*!*******************************!*\
  !*** ./src/pack/utils/Log.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = _default;\n\nfunction _default(msg) {\n  if (true) console.log(msg);\n}\n\n//# sourceURL=webpack://full_insta/./src/pack/utils/Log.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;