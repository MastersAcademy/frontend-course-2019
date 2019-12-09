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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(void 0)([\"./validator\"], function (exports_1, context_1) {\n    \"use strict\";\n    var validator_1, callback;\n    var __moduleName = context_1 && context_1.id;\n    return {\n        setters: [\n            function (validator_1_1) {\n                validator_1 = validator_1_1;\n            }\n        ],\n        execute: function () {\n            callback = function (event) {\n                event.preventDefault();\n                var firstName = event.target.querySelector('#first-name');\n                var lastName = event.target.querySelector('#last-name');\n                var email = event.target.querySelector('#email');\n                var phone = event.target.querySelector('#phone');\n                var age = event.target.querySelector('#age');\n                var allFields = [firstName, lastName, email, phone, age];\n                allFields.forEach(function (dom) { return dom.classList.remove('error'); });\n                console.log(allFields);\n                if (!firstName.value\n                    || !validator_1.isValid.minLength({ text: firstName.value, length: 2 })\n                    || !validator_1.isValid.maxLength({ text: firstName.value, length: 20 }))\n                    firstName.classList.add('error');\n                if (!lastName.value\n                    || !validator_1.isValid.minLength({ text: lastName.value, length: 2 })\n                    || !validator_1.isValid.maxLength({ text: lastName.value, length: 20 }))\n                    lastName.classList.add('error');\n                if (!email.value || !validator_1.isValid.email({ text: email.value }))\n                    email.classList.add('error');\n                if (!phone.value || !validator_1.isValid.phone({ text: phone.value }))\n                    phone.classList.add('error');\n                if ((age.value || age.value === '0')\n                    && !validator_1.isValid.numberRange({ text: age.value, min: 18, max: 120 }))\n                    age.classList.add('error');\n                var result = event.target.querySelector('#result');\n                if (allFields.map(function (dom) { return dom.classList.contains('error'); }).includes(true)) {\n                    console.log('errors');\n                    result.classList.add('no-display');\n                }\n                else {\n                    console.log('no-error');\n                    result.classList.remove('no-display');\n                }\n                return true;\n            };\n            document.querySelector('[data-validate-form]').addEventListener('submit', callback);\n        }\n    };\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ });