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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bundle.ts":
/*!***********************!*\
  !*** ./src/bundle.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validate */ \"./src/form-validate.ts\");\n\r\n\r\n// ALL FORM QUERY SELECTOR\r\nconst form = document.querySelector('.form');\r\nconst inputFirstName = document.querySelector('#first-name');\r\nconst inputLastName = document.querySelector('#last-name');\r\nconst inputEmail = document.querySelector('#email');\r\nconst inputPhone = document.querySelector('#phone');\r\nconst inputAge = document.querySelector('#age');\r\n// INPUTS FUNCTION VALIDATION\r\nfunction nameValidation(text, min, max) {\r\n    const isName = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].maxLength(text, max);\r\n    return isName;\r\n}\r\nfunction emailValidation(text, min) {\r\n    const isEmail = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].email(text) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min);\r\n    return isEmail;\r\n}\r\nfunction phoneValidation(text, min) {\r\n    const isPhone = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].phone(text) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min);\r\n    return isPhone;\r\n}\r\nfunction ageValidation(text, min, max) {\r\n    const isAgeValidation = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].numberRange(text, min, max);\r\n    return isAgeValidation;\r\n}\r\n// ERROR FIELDS\r\nconst formLabels = document.querySelectorAll('.form__label');\r\nconst status = document.querySelector('.form__status');\r\nfunction renderErrorField(isFieldValid, fieldName) {\r\n    if (!isFieldValid) {\r\n        fieldName.closest('label').classList.add('form__label_error');\r\n    }\r\n}\r\n// SEND & CHECK FORM\r\nform.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    const firstNameValue = nameValidation(inputFirstName.value, 1, 25);\r\n    const lastNameValue = nameValidation(inputLastName.value, 1, 25);\r\n    const emailValue = emailValidation(inputEmail.value, 1);\r\n    const phoneValue = phoneValidation(inputPhone.value, 1);\r\n    const ageValue = ageValidation(inputAge.value, 16, 80);\r\n    status.setAttribute('hidden', 'true');\r\n    formLabels.forEach((labelItem) => {\r\n        labelItem.classList.remove('form__label_error');\r\n    });\r\n    if (firstNameValue && lastNameValue && emailValue && phoneValue && ageValue) {\r\n        status.removeAttribute('hidden');\r\n    }\r\n    else {\r\n        renderErrorField(firstNameValue, inputFirstName);\r\n        renderErrorField(lastNameValue, inputLastName);\r\n        renderErrorField(emailValue, inputEmail);\r\n        renderErrorField(phoneValue, inputPhone);\r\n        renderErrorField(ageValue, inputAge);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/bundle.ts?");

/***/ }),

/***/ "./src/form-validate.ts":
/*!******************************!*\
  !*** ./src/form-validate.ts ***!
  \******************************/
/*! exports provided: isValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValid\", function() { return isValid; });\nconst isValid = {\r\n    minLength(text, length) {\r\n        return text.length >= length;\r\n    },\r\n    maxLength(text, length) {\r\n        return text.length <= length;\r\n    },\r\n    pattern(text, pattern) {\r\n        return text.match(pattern);\r\n    },\r\n    email(text) {\r\n        return this.pattern(text, /^\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b$/i);\r\n    },\r\n    phone(text) {\r\n        return this.pattern(text, /^\\+{1}\\d{1,2}\\({1}\\d{3}\\){1}\\d{3}([-]{1}\\d{2}){2}/);\r\n    },\r\n    numberRange(text, min, max) {\r\n        if (this.pattern(text, /^([0-9])+$/)) {\r\n            return +text >= min && +text <= max;\r\n        }\r\n        return false;\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/form-validate.ts?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });