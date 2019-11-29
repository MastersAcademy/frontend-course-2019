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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bundle.js":
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-validate */ \"./src/form-validate.js\");\n\n\n\n// ALL FORM QUERY SELECTOR\nconst form = document.querySelector('.form');\nconst inputFirstName = document.querySelector('#first-name');\nconst inputLastName = document.querySelector('#last-name');\nconst inputEmail = document.querySelector('#email');\nconst inputPhone = document.querySelector('#phone');\nconst inputAge = document.querySelector('#age');\n\n// INPUTS FUNCTION VALIDATION\nconst nameValidation = (text, min, max) => {\n    const isName = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].maxLength(text, max);\n    return isName;\n};\nconst emailValidation = (text, min) => {\n    const isEmail = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].email(text) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min);\n    return isEmail;\n};\nconst phoneValidation = (text, min) => {\n    const isPhone = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].phone(text) && _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].minLength(text, min);\n    return isPhone;\n};\nconst ageValidation = (text, min, max) => {\n    const isAgeValidation = _form_validate__WEBPACK_IMPORTED_MODULE_1__[\"isValid\"].numberRange(text, min, max);\n    return isAgeValidation;\n};\n\n// ERROR FIELDS\nconst formLabel = document.querySelectorAll('.form__label');\nconst status = document.querySelector('.status');\n\nconst errorField = (isFieldValid, fieldName) => {\n    if (!isFieldValid) {\n        fieldName.closest('label').classList.add('error');\n    }\n};\n\n// SEND & CHECK FORM\nform.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    const firstNameValue = nameValidation(inputFirstName.value, 1, 25);\n    const lastNameValue = nameValidation(inputLastName.value, 1, 25);\n    const emailValue = emailValidation(inputEmail.value, 1);\n    const phoneValue = phoneValidation(inputPhone.value, 1);\n    const ageValue = ageValidation(inputAge.value, 16, 80);\n\n    status.setAttribute('hidden', true);\n    [].forEach.call(formLabel, (labelItem) => {\n        labelItem.classList.remove('error');\n    });\n\n    if (firstNameValue && lastNameValue && emailValue && phoneValue && ageValue) {\n        status.removeAttribute('hidden');\n    } else {\n        errorField(firstNameValue, inputFirstName);\n        errorField(lastNameValue, inputLastName);\n        errorField(emailValue, inputEmail);\n        errorField(phoneValue, inputPhone);\n        errorField(ageValue, inputAge);\n    }\n});\n\n\n//# sourceURL=webpack:///./src/bundle.js?");

/***/ }),

/***/ "./src/form-validate.js":
/*!******************************!*\
  !*** ./src/form-validate.js ***!
  \******************************/
/*! exports provided: isValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValid\", function() { return isValid; });\nconst isValid = {\n    minLength(text, length) {\n        return text.length >= length;\n    },\n    maxLength(text, length) {\n        return text.length <= length;\n    },\n    pattern(text, pattern) {\n        return text.match(pattern);\n    },\n    email(text) {\n        return this.pattern(text, /^\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}\\b$/i);\n    },\n    phone(text) {\n        return this.pattern(text, /^\\+{1}\\d{1,2}\\({1}\\d{3}\\){1}\\d{3}([-]{1}\\d{2}){2}/);\n    },\n    numberRange(text, min, max) {\n        if (this.pattern(text, /^([0-9])+$/)) {\n            return text >= min && text <= max;\n        }\n        return false;\n    },\n};\n\n\n//# sourceURL=webpack:///./src/form-validate.js?");

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.sass?");

/***/ })

/******/ });