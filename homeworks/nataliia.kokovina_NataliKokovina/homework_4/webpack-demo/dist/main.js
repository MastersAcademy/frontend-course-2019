/* eslint-disable */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return e.classList.add("invalid")}function o(e){return e.classList.add("submitForm")}function u(e){e.classList.contains("invalid")&&e.classList.remove("invalid")}function a(e){e.classList.contains("submitForm")&&e.classList.remove("submitForm")}n.r(t);const l=/^[a-zA-Zа-яА-Я ]/,s=/^[a-zA-Z0-9.!#$%&*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,c=/^\+[0-9]{2}\([0-9]{3}\)[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,i=/^[0-9]{1,3}$/;function m(e,t,n){return l.test(e.value)&&e.value.length>=t&&e.value.length<=n}function f(e,t,n){return console.log(e.value),0===e.value.length||i.test(e.value)&&Number(e.value)>=t&&Number(e.value)<=n}document.querySelector(".form_button").addEventListener("click",(function(e){e.preventDefault();const t={},n={firstName:document.querySelector("#firstName"),lastName:document.querySelector("#lastName"),email:document.querySelector("#email"),phone:document.querySelector("#phone"),age:document.querySelector("#age")};(function(e){return m(e.firstName,2,20)?u(e.firstName):r(e.firstName),m(e.lastName,2,20)?u(e.lastName):r(e.lastName),s.test(e.email.value)?u(e.email):r(e.email),c.test(e.phone.value)?u(e.phone):r(e.phone),f(e.age,18,120)?u(e.age):r(e.age),m(e.firstName,2,20)&&m(e.lastName,2,20)&&s.test(e.email.value)&&c.test(e.phone.value)&&f(e.age,18,120)?(a(document.querySelector(".invalidFormMessages")),o(document.querySelector(".successfullFormMessages")),!0):(a(document.querySelector(".successfullFormMessages")),o(document.querySelector(".invalidFormMessages")),!1)})(n)&&(Object.keys(n).forEach(e=>{t[e]=n[e].value}),console.log(t),document.querySelector(".form").reset())}))}]);