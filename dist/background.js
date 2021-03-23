/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ (() => {

eval("chrome.runtime.onInstalled.addListener(function () {\n  chrome.storage.sync.set({\n    pluginEnabled: true\n  });\n  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {\n    chrome.declarativeContent.onPageChanged.addRules([{\n      conditions: [new chrome.declarativeContent.PageStateMatcher({\n        pageUrl: {\n          hostEquals: 'www.instagram.com'\n        }\n      })],\n      actions: [new chrome.declarativeContent.ShowPageAction()]\n    }]);\n  });\n});\n\n//# sourceURL=webpack://full_insta/./src/background.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/background.js"]();
/******/ 	
/******/ })()
;