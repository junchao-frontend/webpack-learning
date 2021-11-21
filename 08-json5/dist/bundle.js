/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hello = () => {
    console.log('hello11 wjc123');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hello);

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/***/ ((module) => {

module.exports = [["to","from","heading"],["asdas","d21312","dasdasd"],["asdas"]]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/***/ ((module) => {

module.exports = {"note":{"to":["George"],"from":["John"],"heading":["Reminder"],"body":["Don't forget the meeting!"]}}

/***/ }),

/***/ "./assets/test.txt":
/*!*************************!*\
  !*** ./assets/test.txt ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = "hello wjc";

/***/ }),

/***/ "./assets/data.json5":
/*!***************************!*\
  !*** ./assets/data.json5 ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"json5 wjc","owner":{"name":"wjc","sex":"nan"}}');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello */ "./src/hello.js");
/* harmony import */ var _assets_test_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/test.txt */ "./assets/test.txt");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/data.csv */ "./assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/data.xml */ "./assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_data_json5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/data.json5 */ "./assets/data.json5");

// import imgsrc from '../assets/sun.png'






(0,_hello__WEBPACK_IMPORTED_MODULE_0__["default"])()
// console.log(imgsrc);
// 运行webpack npx webpack
// npx webpack --help
// npx webpack --entry ./src/index.js --mode development  指定入口文件

// const img = document.createElement('img')
// img.src = imgsrc
// document.body.appendChild(img)

// document.body.classList.add('box')
const block = document.createElement('div')
block.style.cssText = 'width:200px;height:200px;background:skyblue'
block.classList.add('block-bg')
block.textContent = _assets_test_txt__WEBPACK_IMPORTED_MODULE_1__
document.body.appendChild(block)
console.log((_assets_data_csv__WEBPACK_IMPORTED_MODULE_4___default()));
console.log((_assets_data_xml__WEBPACK_IMPORTED_MODULE_5___default()));
console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_6__.title);
console.log(_assets_data_json5__WEBPACK_IMPORTED_MODULE_6__.owner);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7QUNIZjs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSxrQkFBa0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0ExQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQzVCO0FBQzJDO0FBQ3ZCO0FBQ0M7QUFDZ0I7QUFDQTtBQUNHO0FBQ3hDLGtEQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0Esb0JBQW9CLDZDQUFVO0FBQzlCO0FBQ0EsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkscURBQVc7QUFDdkIsWUFBWSxxREFBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hlbGxvLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9kYXRhLmNzdiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzNhMzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmxlc3M/MzM3YiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWxsbyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdoZWxsbzExIHdqYzEyMycpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhlbGxvIiwibW9kdWxlLmV4cG9ydHMgPSBbW1widG9cIixcImZyb21cIixcImhlYWRpbmdcIl0sW1wiYXNkYXNcIixcImQyMTMxMlwiLFwiZGFzZGFzZFwiXSxbXCJhc2Rhc1wiXV0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm5vdGVcIjp7XCJ0b1wiOltcIkdlb3JnZVwiXSxcImZyb21cIjpbXCJKb2huXCJdLFwiaGVhZGluZ1wiOltcIlJlbWluZGVyXCJdLFwiYm9keVwiOltcIkRvbid0IGZvcmdldCB0aGUgbWVldGluZyFcIl19fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaGVsbG8gZnJvbSBcIi4vaGVsbG9cIjtcclxuLy8gaW1wb3J0IGltZ3NyYyBmcm9tICcuLi9hc3NldHMvc3VuLnBuZydcclxuaW1wb3J0IGV4YW1wbGVUeHQgZnJvbSAnLi4vYXNzZXRzL3Rlc3QudHh0J1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUubGVzcydcclxuaW1wb3J0IERhdGEgZnJvbSAnLi4vYXNzZXRzL2RhdGEuY3N2J1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9hc3NldHMvZGF0YS54bWwnXHJcbmltcG9ydCBKc29uNSBmcm9tICcuLi9hc3NldHMvZGF0YS5qc29uNSdcclxuaGVsbG8oKVxyXG4vLyBjb25zb2xlLmxvZyhpbWdzcmMpO1xyXG4vLyDov5DooYx3ZWJwYWNrIG5weCB3ZWJwYWNrXHJcbi8vIG5weCB3ZWJwYWNrIC0taGVscFxyXG4vLyBucHggd2VicGFjayAtLWVudHJ5IC4vc3JjL2luZGV4LmpzIC0tbW9kZSBkZXZlbG9wbWVudCAg5oyH5a6a5YWl5Y+j5paH5Lu2XHJcblxyXG4vLyBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4vLyBpbWcuc3JjID0gaW1nc3JjXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKVxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib3gnKVxyXG5jb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmJsb2NrLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4O2JhY2tncm91bmQ6c2t5Ymx1ZSdcclxuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKVxyXG5ibG9jay50ZXh0Q29udGVudCA9IGV4YW1wbGVUeHRcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChibG9jaylcclxuY29uc29sZS5sb2coRGF0YSk7XHJcbmNvbnNvbGUubG9nKE5vdGUpO1xyXG5jb25zb2xlLmxvZyhKc29uNS50aXRsZSk7XHJcbmNvbnNvbGUubG9nKEpzb241Lm93bmVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=