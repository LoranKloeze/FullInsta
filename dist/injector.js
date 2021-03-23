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

/***/ "./src/injector.js":
/*!*************************!*\
  !*** ./src/injector.js ***!
  \*************************/
/***/ (() => {

eval("var scr = document.createElement(\"script\");\nscr.id = 'whatsallapp-content-script';\nscr.type = 'text/javascript';\nscr.src = chrome.extension.getURL('/bundle.js');\n(document.head || document.body || document.documentElement).appendChild(scr); // chrome.storage.sync.get('pluginEnabled', function(data) {\n//     if (data.pluginEnabled) {\n//         const rootEl = document.createElement('div')\n//         rootEl.id = 'whatsallapp-root'\n//         rootEl.setAttribute('data-extension-id', chrome.runtime.id)\n//         document.body.appendChild(rootEl)\n//     } else {\n//     }\n// });\n\n//# sourceURL=webpack://full_insta/./src/injector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/injector.js"]();
/******/ 	
/******/ })()
;