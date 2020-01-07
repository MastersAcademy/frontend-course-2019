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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ \"./src/validate.ts\");\n\nconsole.log(\"trololo\");\nconst nameForm = document.getElementById('first-name');\nconst lastForm = document.querySelector('#last-name');\nconst mailForm = document.querySelector('#mail');\nconst phoneForm = document.querySelector('#phone');\nconst ageForm = document.querySelector('#age');\nconst submitForm = document.querySelector('#submit-form');\n// eslint-disable-next-line no-useless-escape\nconst patternMail = /^([a-z0-9_\\.-])+@[a-z0-9-]+\\.([a-z]{2,4}\\.)?[a-z]{2,4}$/i;\nconst patternPhone = /^\\+380\\d{3}\\d{2}\\d{2}\\d{2}$/;\nfunction error(element) {\n    element.classList.add('error-border');\n}\nfunction delError(element) {\n    element.classList.remove('error-border');\n}\nfunction checker() {\n    let nameChek;\n    if (_validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].minLength(nameForm.value, 2) && _validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].maxLength(nameForm.value, 20)) {\n        nameChek = true;\n        delError(nameForm);\n    }\n    else {\n        error(nameForm);\n    }\n    let lastChek;\n    if (_validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].minLength(lastForm.value, 2) && _validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].maxLength(lastForm.value, 20)) {\n        lastChek = true;\n        delError(lastForm);\n    }\n    else {\n        error(lastForm);\n    }\n    let emailCheck;\n    if (_validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].pattern(mailForm.value, patternMail)) {\n        emailCheck = true;\n        delError(mailForm);\n    }\n    else {\n        error(mailForm);\n    }\n    let phoneCheck;\n    if (_validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].pattern(phoneForm.value, patternPhone)) {\n        delError(phoneForm);\n    }\n    else {\n        error(phoneForm);\n    }\n    let ageCheck;\n    if (ageForm.value) {\n        if (_validate__WEBPACK_IMPORTED_MODULE_0__[\"isValid\"].numberRange(+ageForm.value, 18, 120)) {\n            delError(ageForm);\n            ageCheck = true;\n        }\n        else {\n            error(ageForm);\n        }\n    }\n    else {\n        ageCheck = true;\n    }\n    if (nameChek && lastChek && emailCheck && phoneCheck && ageCheck) {\n        console.log('valid');\n        const validResult = document.getElementById('success');\n        validResult.innerHTML = 'Validation successful!';\n    }\n    else {\n        console.log('invalid');\n    }\n}\nsubmitForm.addEventListener('click', (e) => {\n    e.preventDefault();\n    checker();\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/validate.ts":
/*!*************************!*\
  !*** ./src/validate.ts ***!
  \*************************/
/*! exports provided: isValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValid\", function() { return isValid; });\nconst isValid = {\n    minLength(text, length) {\n        return text.length >= length;\n    },\n    maxLength(text, length) {\n        return text.length <= length;\n    },\n    pattern(text, pattern) {\n        return pattern.test(text);\n    },\n    email(text) {\n        return text;\n    },\n    phone(text) {\n        return text;\n    },\n    numberRange(text, min, max) {\n        return text >= min && text <= max;\n    },\n};\n\n\n//# sourceURL=webpack:///./src/validate.ts?");

/***/ })

/******/ });