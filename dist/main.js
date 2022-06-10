/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg2.jpg */ "./src/images/section_bg2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg4.jpg */ "./src/images/section_bg4.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg1.jpg */ "./src/images/section_bg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg5.jpg */ "./src/images/section_bg5.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/section_bg.jpg */ "./src/images/section_bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.hide {\n  display: none;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background: rgba(250, 250, 250, 0.6);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\n@media (min-width: 901px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\nnav ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav ul {\n    flex-direction: row;\n  }\n}\n@media (min-width: 901px) {\n  nav ul {\n    flex-direction: row;\n    gap: 100px;\n  }\n}\nnav ul li {\n  list-style: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\nnav ul li:hover {\n  color: rgb(255, 94, 0);\n  cursor: pointer;\n}\n\ni.fa-bars, i.fa-times {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n\ni.fa-times {\n  font-size: 1.8rem;\n  color: rgb(255, 94, 0);\n  z-index: 99;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-times {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  overflow: scroll;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-position: right;\n  }\n}\n@media (min-width: 901px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n}\n@media (min-width: 901px) {\n  section#home-page {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\nsection#home-page h1 {\n  position: absolute;\n  top: 20%;\n  font-size: 2.8rem;\n  color: rgb(255, 94, 0);\n  font-family: \"Vollkorn\", serif;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page h1 {\n    font-size: 4rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page h1 {\n    font-size: 6rem;\n  }\n}\nsection#home-page p#welcome {\n  position: absolute;\n  top: 30%;\n  font-size: 1.2rem;\n  font-style: italic;\n  width: 90%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page p#welcome {\n    font-size: 1.6rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page p#welcome {\n    font-size: 2rem;\n    width: 45%;\n    top: 35%;\n  }\n}\n\nsection#menu-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 100px 0;\n}\nsection#menu-section h2 {\n  font-size: 2.2rem;\n  font-family: \"Vollkorn\", serif;\n  font-weight: normal;\n}\nsection#menu-section #selection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 50px;\n}\nsection#menu-section #selection select {\n  background-color: white;\n  border: thin solid rgb(255, 94, 0);\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 3.5em 0.5em 1em;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%), linear-gradient(to right, rgb(255, 94, 0), rgb(255, 94, 0));\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n}\nsection#menu-section #selection select:focus {\n  background-image: linear-gradient(45deg, white 50%, transparent 50%), linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(to right, gray, gray);\n  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n  border-color: grey;\n  outline: 0;\n}\nsection#menu-section #menu-items {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 25px;\n  margin-top: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 901px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    position: absolute;\n    right: 1%;\n    top: 25%;\n  }\n}\nsection#menu-section #menu-items .meals {\n  width: 280px;\n  height: 280px;\n  position: relative;\n  border-radius: 20px;\n}\nsection#menu-section #menu-items .meals .blur-div {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals .meal-name {\n  visibility: hidden;\n  font-size: 1.8rem;\n}\nsection#menu-section #menu-items .meals .rating {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals:hover .meal-name {\n  visibility: visible;\n  position: absolute;\n  z-index: 99;\n  top: 10%;\n  width: 100%;\n  padding: 0 3px;\n  text-align: center;\n}\nsection#menu-section #menu-items .meals:hover .rating {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row-reverse;\n  visibility: visible;\n  width: 100%;\n  margin: 0 auto 1em;\n  font-size: 35px;\n  overflow: hidden;\n  float: right;\n  position: absolute;\n  top: 50%;\n  z-index: 99;\n}\nsection#menu-section #menu-items .meals:hover .rating a[href*=intent] {\n  display: inline-block;\n  margin-top: 0.4em;\n}\nsection#menu-section #menu-items .meals:hover .rating a {\n  float: right;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: color 0.4s;\n  -moz-transition: color 0.4s;\n  -o-transition: color 0.4s;\n  transition: color 0.4s;\n}\nsection#menu-section #menu-items .meals:hover .rating a:hover,\nsection#menu-section #menu-items .meals:hover .rating a:focus,\nsection#menu-section #menu-items .meals:hover .rating a:hover ~ a,\nsection#menu-section #menu-items .meals:hover .rating a:focus ~ a {\n  color: rgb(253, 236, 0);\n  cursor: pointer;\n}\nsection#menu-section #menu-items .meals:hover .blur-div {\n  visibility: visible;\n  position: absolute;\n  top: 0;\n  background: rgba(175, 168, 157, 0.8);\n  height: 100%;\n  width: 100%;\n  border-radius: 20px;\n}\n\nsection#contact-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n}\nsection#contact-page h2 {\n  font-family: \"Vollkorn\", serif;\n  font-size: 2.2rem;\n  font-weight: normal;\n}\n@media (min-width: 901px) {\n  section#contact-page h2 {\n    font-size: 3rem;\n    margin-bottom: 20px;\n  }\n}\nsection#contact-page ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nsection#contact-page li {\n  list-style: none;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\n@media (min-width: 901px) {\n  section#contact-page li {\n    font-size: 1.5rem;\n  }\n}\nsection#contact-page li span {\n  color: rgb(255, 94, 0);\n  font-weight: 700;\n  text-decoration: underline;\n}\nsection#contact-page div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\nsection#contact-page input {\n  padding: 10px;\n  border-radius: 20px;\n  border: none;\n  outline: thin solid rgb(255, 94, 0);\n  margin: 30px 0;\n  width: 70%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page input {\n    width: 50%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page input {\n    width: 20%;\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button {\n  border: none;\n  background: rgb(255, 94, 0);\n  padding: 10px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 700;\n}\n@media (min-width: 901px) {\n  section#contact-page button {\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button:hover {\n  cursor: pointer;\n  background: rgb(230, 184, 146);\n  outline: none;\n}\nsection#contact-page footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-top: thin solid rgb(133, 132, 132);\n  width: 100%;\n  padding-top: 15px;\n}\nsection#contact-page #slogan h2 {\n  color: rgb(255, 94, 0);\n  font-size: 2.6rem;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan h2 {\n    font-size: 3.5rem;\n  }\n}\nsection#contact-page #slogan p {\n  font-style: italic;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan p {\n    font-size: 1.5rem;\n    margin-bottom: 100px;\n  }\n}\nsection#contact-page ul#social-icons {\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50%;\n  padding-top: 20px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page ul#social-icons {\n    width: 30%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page ul#social-icons {\n    width: 20%;\n  }\n}\nsection#contact-page ul#social-icons li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: thin solid rgb(255, 94, 0);\n  width: 40px;\n  height: 40px;\n}\nsection#contact-page ul#social-icons li i {\n  color: rgb(255, 94, 0);\n}\nsection#contact-page ul#social-icons li i:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn&display=swap');\n\n$base_color1: rgb(255, 94, 0);\n$font1: 'Open Sans', sans-serif;\n$font2: 'Vollkorn', serif;\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $font1;\n}\n\n@mixin center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin media-md {\n  @media (min-width: 600px) and (max-width: 900px) {\n    @content;\n  }\n}\n\n@mixin media-lg {\n  @media (min-width: 901px) {\n    @content;\n  }\n}\n\n@mixin section-bg {\n  background: url('../images/section_bg2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n\n  @include media-md {\n    background: url('../images/section_bg4.jpg');\n    background-size: cover;\n    background-position: right;\n  }\n}\n","@import 'base';\n\n.hide {\n  display: none;\n}\n\nnav {\n  @include center;\n\n  position: absolute;\n  background: rgba(250, 250, 250, 0.6);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n\n  @include media-md {\n    visibility: visible;\n    height: 50px;\n  }\n\n  @include media-lg {\n    visibility: visible;\n    height: 50px;\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n    gap: 50px;\n\n    @include media-md {\n      flex-direction: row;\n    }\n\n    @include media-lg {\n      flex-direction: row;\n      gap: 100px;\n    }\n\n    li {\n      list-style: none;\n      font-size: 1.4rem;\n      font-weight: 600;\n\n      &:hover {\n        color: $base_color1;\n        cursor: pointer;\n      }\n    }\n  }\n}\n\ni.fa-bars {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\ni.fa-times {\n  @extend .fa-bars;\n\n  font-size: 1.8rem;\n  color: $base_color1;\n  z-index: 99;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n\n  @include section-bg;\n\n  overflow: scroll;\n\n  @include media-lg {\n    background: url('../images/section_bg1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url('../images/section_bg5.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n\n  @include media-lg {\n    background: url('../images/section_bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  h1 {\n    position: absolute;\n    top: 20%;\n    font-size: 2.8rem;\n    color: $base_color1;\n    font-family: $font2;\n\n    @include media-md {\n      font-size: 4rem;\n    }\n\n    @include media-lg {\n      font-size: 6rem;\n    }\n  }\n\n  p#welcome {\n    position: absolute;\n    top: 30%;\n    font-size: 1.2rem;\n    font-style: italic;\n    width: 90%;\n\n    @include media-md {\n      font-size: 1.6rem;\n    }\n\n    @include media-lg {\n      font-size: 2rem;\n      width: 45%;\n      top: 35%;\n    }\n  }\n}\n\nsection#menu-section {\n  @include center;\n\n  flex-direction: column;\n  padding: 100px 0;\n\n  h2 {\n    font-size: 2.2rem;\n    font-family: $font2;\n    font-weight: normal;\n  }\n\n  #selection {\n    @include center;\n\n    flex-direction: column;\n    margin-top: 50px;\n\n    select {\n      background-color: white;\n      border: thin solid $base_color1;\n      border-radius: 4px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      background-image:\n        linear-gradient(45deg, transparent 50%, #fff 50%),\n        linear-gradient(135deg, #fff 50%, transparent 50%),\n        linear-gradient(to right, $base_color1, $base_color1);\n      background-position:\n        calc(100% - 20px) calc(1em + 2px),\n        calc(100% - 15px) calc(1em + 2px),\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image:\n        linear-gradient(45deg, white 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, white 50%),\n        linear-gradient(to right, gray, gray);\n      background-position:\n        calc(100% - 15px) 1em,\n        calc(100% - 20px) 1em,\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n      border-color: grey;\n      outline: 0;\n    }\n  }\n\n  #menu-items {\n    @include center;\n\n    flex-direction: column;\n    gap: 25px;\n    margin-top: 50px;\n\n    @include media-md {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @include media-lg {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      position: absolute;\n      right: 1%;\n      top: 25%;\n    }\n\n    .meals {\n      width: 280px;\n      height: 280px;\n      position: relative;\n      border-radius: 20px;\n\n      .blur-div {\n        visibility: hidden;\n      }\n\n      .meal-name {\n        visibility: hidden;\n        font-size: 1.8rem;\n      }\n\n      .rating {\n        visibility: hidden;\n      }\n\n      &:hover {\n        .meal-name {\n          visibility: visible;\n          position: absolute;\n          z-index: 99;\n          top: 10%;\n          width: 100%;\n          padding: 0 3px;\n          text-align: center;\n        }\n\n        .rating {\n          @include center;\n\n          flex-direction: row-reverse;\n          visibility: visible;\n          width: 100%;\n          margin: 0 auto 1em;\n          font-size: 35px;\n          overflow: hidden;\n          float: right;\n          position: absolute;\n          top: 50%;\n          z-index: 99;\n\n          a[href*=\"intent\"] {\n            display: inline-block;\n            margin-top: 0.4em;\n          }\n\n          a {\n            float: right;\n            color: #fff;\n            text-decoration: none;\n            -webkit-transition: color 0.4s;\n            -moz-transition: color 0.4s;\n            -o-transition: color 0.4s;\n            transition: color 0.4s;\n          }\n\n          a:hover,\n          a:focus,\n          a:hover ~ a,\n          a:focus ~ a {\n            color: rgb(253, 236, 0);\n            cursor: pointer;\n          }\n        }\n\n        .blur-div {\n          visibility: visible;\n          position: absolute;\n          top: 0;\n          background: rgba(175, 168, 157, 0.8);\n          height: 100%;\n          width: 100%;\n          border-radius: 20px;\n        }\n      }\n    }\n  }\n}\n\nsection#contact-page {\n  @include center;\n\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n\n  h2 {\n    font-family: $font2;\n    font-size: 2.2rem;\n    font-weight: normal;\n\n    @include media-lg {\n      font-size: 3rem;\n      margin-bottom: 20px;\n    }\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n  }\n\n  li {\n    list-style: none;\n    margin-bottom: 20px;\n    font-size: 1.2rem;\n\n    @include media-lg {\n      font-size: 1.5rem;\n    }\n\n    span {\n      color: $base_color1;\n      font-weight: 700;\n      text-decoration: underline;\n    }\n  }\n\n  div {\n    @include center;\n\n    flex-direction: column;\n    width: 100%;\n  }\n\n  input {\n    padding: 10px;\n    border-radius: 20px;\n    border: none;\n    outline: thin solid $base_color1;\n    margin: 30px 0;\n    width: 70%;\n\n    @include media-md {\n      width: 50%;\n    }\n\n    @include media-lg {\n      width: 20%;\n      font-size: 1.2rem;\n    }\n  }\n\n  button {\n    border: none;\n    background: $base_color1;\n    padding: 10px;\n    border-radius: 5px;\n    color: #fff;\n    font-weight: 700;\n\n    @include media-lg {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background: rgb(230, 184, 146);\n      outline: none;\n    }\n  }\n\n  footer {\n    @include center;\n\n    flex-direction: column;\n    border-top: thin solid rgb(133, 132, 132);\n    width: 100%;\n    padding-top: 15px;\n  }\n\n  #slogan {\n    h2 {\n      color: $base_color1;\n      font-size: 2.6rem;\n\n      @include media-lg {\n        font-size: 3.5rem;\n      }\n    }\n\n    p {\n      font-style: italic;\n\n      @include media-lg {\n        font-size: 1.5rem;\n        margin-bottom: 100px;\n      }\n    }\n  }\n\n  ul#social-icons {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 50%;\n    padding-top: 20px;\n\n    @include media-md {\n      width: 30%;\n    }\n\n    @include media-lg {\n      width: 20%;\n    }\n\n    li {\n      @include center;\n\n      border-radius: 50%;\n      border: thin solid $base_color1;\n      width: 40px;\n      height: 40px;\n\n      i {\n        color: $base_color1;\n\n        &:hover {\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContactPage = () => {
  const contactPage = document.createElement('section');
  contactPage.setAttribute('id', 'contact-page');
  contactPage.innerHTML = `<div id="slogan"><h2>Fresh Cuisine</h2>
  <p>Fresh food. Fresh ideas.</p></div>
  <div id="opening-hours">
    <h2>Open Hours</h2>
    <ul>
      <li>Mon-Fri: 9 AM - 6 PM</li>
      <li>Saturday: 9 AM - 4 PM</li>
      <li>Sunday: 9 AM - 2 PM</li>
    </ul>
  </div>
  <div id="contact-us">
    <h2>Contact Us</h2>
    <ul>
      <li>123 Sample street, New York, 10014</li>
      <li>Email: <span>sample@example.com</span></li>
      <li>Telephone: <span>+1(500)123-456</span></li>
    </ul>
  </div>
  <div id="subscribe">
    <h2>Subscribe</h2>
    <h2>Newsletter</h2>
    <input type="email" placeholder="Email">
    <button id="submit">Subscribe</button>
  </div>
  <footer>
    <p>2022 <i class="fa fa-copyright"></i> Fresh Cuisine | Powered by Fresh Life</p>
    <ul id="social-icons">
      <li><i class="fa fa-facebook"></i></li>
      <li><i class="fa fa-twitter"></i></li>
      <li><i class="fa fa-linkedin"></i></li>
      <li><i class="fa fa-instagram"></i></li>
    </ul>
  </footer>
  `;
  document.getElementById('content').appendChild(contactPage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);


/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHomePage = () => {
  const homePage = document.createElement('section');
  homePage.setAttribute('id', 'home-page');
  homePage.innerHTML = `<h1>Fresh Cuisine</h1>
  <p id="welcome">Discover our delicious menu made with fresh ingredients from our local Farmer's Market.</p>
  `;
  document.getElementById('content').appendChild(homePage);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);


/***/ }),

/***/ "./src/modules/menuSection.js":
/*!************************************!*\
  !*** ./src/modules/menuSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuSection": () => (/* binding */ createMenuSection),
/* harmony export */   "getMenu": () => (/* binding */ getMenu)
/* harmony export */ });
let category;

const getMenu = (category) => {
  fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals.length > 8) {
        data.meals = data.meals.splice(0, 8);
      }

      const menuItemsContainer = document.getElementById('menu-items');

      data.meals.forEach((item) => {
        const meal = document.createElement('div');
        meal.classList.add('meals');
        meal.innerHTML = `<h2 class="meal-name">${item.strMeal}</h2>
          <div class="rating">
          <a href="#5" title="Give 5 stars">★</a>
          <a href="#4" title="Give 4 stars">★</a>
          <a href="#3" title="Give 3 stars">★</a>
          <a href="#2" title="Give 2 stars">★</a>
          <a href="#1" title="Give 1 star">★</a>
          </div>
          <div class="blur-div"></div>
        `;
        meal.style.background = `url(${item.strMealThumb})`;
        meal.style.backgroundPosition = 'center';
        meal.style.backgroundSize = 'cover';
        menuItemsContainer.appendChild(meal);
      });
    })
    .catch();
};

const createMenuSection = () => {
  const menuSection = document.createElement('section');
  menuSection.setAttribute('id', 'menu-section');
  menuSection.innerHTML = `<h2>Menu</h2>
  <div id="selection">
  <select>
    <option value="vegan">Vegan</option>
    <option value="starter">Starter</option>
    <option value="side">Side</option>
    <option value="pasta">Pasta</option>
    <option value="seafood">Seafood</option>
    <option value="chicken">Chicken</option>
    <option value="breakfast">Breakfast</option>
    <option value="vegetarian">Vegetarian</option>
    <option value="dessert">Dessert</option>
  </select>
  <div id="menu-items"></div>
</div>
  `;
  document.getElementById('content').appendChild(menuSection);
  const menuItemsContainer = document.getElementById('menu-items');

  const selection = document.querySelector('select');
  selection.addEventListener('change', (e) => {
    switch (e.target.value) {
      case 'vegan':
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
      case 'pasta':
        menuItemsContainer.innerHTML = '';
        category = 'Pasta';
        getMenu(category);
        break;
      case 'seafood':
        menuItemsContainer.innerHTML = '';
        category = 'Seafood';
        getMenu(category);
        break;
      case 'chicken':
        menuItemsContainer.innerHTML = '';
        category = 'Chicken';
        getMenu(category);
        break;
      case 'breakfast':
        menuItemsContainer.innerHTML = '';
        category = 'Breakfast';
        getMenu(category);
        break;
      case 'starter':
        menuItemsContainer.innerHTML = '';
        category = 'Starter';
        getMenu(category);
        break;
      case 'side':
        menuItemsContainer.innerHTML = '';
        category = 'Side';
        getMenu(category);
        break;
      case 'vegetarian':
        menuItemsContainer.innerHTML = '';
        category = 'Vegetarian';
        getMenu(category);
        break;
      case 'dessert':
        menuItemsContainer.innerHTML = '';
        category = 'Dessert';
        getMenu(category);
        break;
      default:
        menuItemsContainer.innerHTML = '';
        category = 'Vegan';
        getMenu(category);
        break;
    }
  });
};




/***/ }),

/***/ "./src/modules/navBar.js":
/*!*******************************!*\
  !*** ./src/modules/navBar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNavBar = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `<ul>
  <li id="home">Home</li>
  <li id="menu">Menu</li>
  <li id="contact">Contact</li>
</ul>`;

  document.body.insertBefore(nav, document.getElementById('content'));

  const mobileMenu = document.createElement('i');
  mobileMenu.setAttribute('class', 'fas fa-bars');
  document.body.insertBefore(mobileMenu, document.getElementById('content'));

  const exitBtn = document.createElement('i');
  exitBtn.setAttribute('class', 'fas fa-times');
  exitBtn.classList.add('hide');
  document.body.insertBefore(exitBtn, document.getElementById('content'));

  exitBtn.addEventListener('click', () => {
    nav.style.visibility = 'hidden';
    mobileMenu.classList.remove('hide');
    exitBtn.classList.add('hide');
  });

  mobileMenu.addEventListener('click', () => {
    nav.style.visibility = 'visible';
    mobileMenu.classList.add('hide');
    exitBtn.classList.remove('hide');
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavBar);


/***/ }),

/***/ "./src/images/section_bg.jpg":
/*!***********************************!*\
  !*** ./src/images/section_bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f97eb559331b0e1cbf82.jpg";

/***/ }),

/***/ "./src/images/section_bg1.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "243e5e699993471ccd4e.jpg";

/***/ }),

/***/ "./src/images/section_bg2.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a02a06032d0dfbfd651.jpg";

/***/ }),

/***/ "./src/images/section_bg4.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg4.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9e1207d3edd40031322.jpg";

/***/ }),

/***/ "./src/images/section_bg5.jpg":
/*!************************************!*\
  !*** ./src/images/section_bg5.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c959af9af29e19142bb9.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _modules_navBar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/navBar.js */ "./src/modules/navBar.js");
/* harmony import */ var _modules_menuSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menuSection.js */ "./src/modules/menuSection.js");
/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/contact.js */ "./src/modules/contact.js");






window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_navBar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const homePage = document.getElementById('home-page');
  const navBar = document.querySelector('nav');
  const exitBtn = document.querySelector('.fa-times');
  const hamburgerMenu = document.querySelector('.fa-bars');

  const navList = [...document.querySelectorAll('li')];
  navList.forEach((item) => item.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'home':
        homePage.classList.remove('hide');
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        } else if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      case 'menu':
        (0,_modules_menuSection_js__WEBPACK_IMPORTED_MODULE_3__.createMenuSection)();
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        (0,_modules_menuSection_js__WEBPACK_IMPORTED_MODULE_3__.getMenu)('Vegan');
        homePage.classList.add('hide');
        if (document.getElementById('contact-page')) {
          document.getElementById('contact-page').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      case 'contact':
        (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
        navBar.style.visibility = 'hidden';
        exitBtn.classList.add('hide');
        hamburgerMenu.classList.remove('hide');
        homePage.classList.add('hide');
        if (document.getElementById('menu-section')) {
          document.getElementById('menu-section').remove();
        }
        if (window.innerWidth > 600) {
          navBar.style.visibility = 'visible';
        }
        break;
      default:
        break;
    }
  }));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtB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ZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL21lbnVTZWN0aW9uLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL25hdkJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3NlY3Rpb25fYmcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnNC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VjdGlvbl9iZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3NlY3Rpb25fYmc1LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmZhbWlseT1Wb2xsa29ybiZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIG5hdiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBuYXYge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgbmF2IHVsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMDBweDtcXG4gIH1cXG59XFxubmF2IHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbm5hdiB1bCBsaTpob3ZlciB7XFxuICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pLmZhLWJhcnMsIGkuZmEtdGltZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzJTtcXG4gIHJpZ2h0OiA2JTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGkuZmEtYmFycywgaS5mYS10aW1lcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgaS5mYS1iYXJzLCBpLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuaS5mYS10aW1lcyB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCA5NCwgMCk7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2hvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxufVxcbnNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWb2xsa29yblxcXCIsIHNlcmlmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgc2VjdGlvbiNob21lLXBhZ2UgaDEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNob21lLXBhZ2UgaDEge1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jaG9tZS1wYWdlIHAjd2VsY29tZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIHAjd2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIHAjd2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgdG9wOiAzNSU7XFxuICB9XFxufVxcblxcbnNlY3Rpb24jbWVudS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTAwcHggMDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBmb250LWZhbWlseTogXFxcIlZvbGxrb3JuXFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjc2VsZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI3NlbGVjdGlvbiBzZWxlY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHRoaW4gc29saWQgcmdiKDI1NSwgOTQsIDApO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIHBhZGRpbmc6IDAuNWVtIDMuNWVtIDAuNWVtIDFlbTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgI2ZmZiA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCA5NCwgMCksIHJnYigyNTUsIDk0LCAwKSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgMTAwJSAwO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAyLjVlbSAyLjVlbTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNzZWxlY3Rpb24gc2VsZWN0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgd2hpdGUgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIHdoaXRlIDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSwgMTAwJSAwO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAyLjVlbSAyLjVlbTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjVweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBzZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxJTtcXG4gICAgdG9wOiAyNSU7XFxuICB9XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFscyB7XFxuICB3aWR0aDogMjgwcHg7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzIC5ibHVyLWRpdiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFscyAubWVhbC1uYW1lIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHMgLnJhdGluZyB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAubWVhbC1uYW1lIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogMTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvIDFlbTtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogcmlnaHQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhW2hyZWYqPWludGVudF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMC40ZW07XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIGEge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcgYTpob3ZlcixcXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhOmZvY3VzLFxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIGE6aG92ZXIgfiBhLFxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIGE6Zm9jdXMgfiBhIHtcXG4gIGNvbG9yOiByZ2IoMjUzLCAyMzYsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLmJsdXItZGl2IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTY4LCAxNTcsIDAuOCk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogMTAwcHggMCA1MHB4IDA7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVm9sbGtvcm5cXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgbGkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgbGkgc3BhbiB7XFxuICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgaW5wdXQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiB0aGluIHNvbGlkIHJnYigyNTUsIDk0LCAwKTtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIGlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgOTQsIDApO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzAsIDE4NCwgMTQ2KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci10b3A6IHRoaW4gc29saWQgcmdiKDEzMywgMTMyLCAxMzIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgI3Nsb2dhbiBoMiB7XFxuICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgI3Nsb2dhbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSAjc2xvZ2FuIHAge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlICNzbG9nYW4gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIHVsI3NvY2lhbC1pY29ucyB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHVsI3NvY2lhbC1pY29ucyBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYigyNTUsIDk0LCAwKTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMgbGkgaSB7XFxuICBjb2xvcjogcmdiKDI1NSwgOTQsIDApO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMgbGkgaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwi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Q0EsaUJBQUE7QUFGSjtBRHpaRTtFQ3VaQTtJQU9JLFVBQUE7RUFESjtBQUNGO0FEeFpFO0VDaVpBO0lBV0ksVUFBQTtFQUFKO0FBQ0Y7QUFFSTtFRDNhRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzRhSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNNO0VBQ0Usc0JEcmNNO0FDc2NkO0FBQ1E7RUFDRSxlQUFBO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmZhbWlseT1Wb2xsa29ybiZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmFzZV9jb2xvcjE6IHJnYigyNTUsIDk0LCAwKTtcXG4kZm9udDE6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiRmb250MjogJ1ZvbGxrb3JuJywgc2VyaWY7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICRmb250MTtcXG59XFxuXFxuQG1peGluIGNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gbWVkaWEtbWQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtZWRpYS1sZyB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBzZWN0aW9uLWJnIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3NlY3Rpb25fYmcyLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnNC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnYmFzZSc7XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxubmF2IHtcXG4gIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC42KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDUwcHg7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgIGdhcDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAkYmFzZV9jb2xvcjE7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmkuZmEtYmFycyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMlO1xcbiAgcmlnaHQ6IDYlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5pLmZhLXRpbWVzIHtcXG4gIEBleHRlbmQgLmZhLWJhcnM7XFxuXFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiAkYmFzZV9jb2xvcjE7XFxuICB6LWluZGV4OiA5OTtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gIEBpbmNsdWRlIHNlY3Rpb24tYmc7XFxuXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnMS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2hvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnNS5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3NlY3Rpb25fYmcuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBjb2xvcjogJGJhc2VfY29sb3IxO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQyO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBmb250LXNpemU6IDZyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIHAjd2VsY29tZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHdpZHRoOiA5MCU7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgdG9wOiAzNSU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuc2VjdGlvbiNtZW51LXNlY3Rpb24ge1xcbiAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJGZvbnQyO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgfVxcblxcbiAgI3NlbGVjdGlvbiB7XFxuICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG5cXG4gICAgc2VsZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXI6IHRoaW4gc29saWQgJGJhc2VfY29sb3IxO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgZm9udDogaW5oZXJpdDtcXG4gICAgICBsaW5lLWhlaWdodDogMS41ZW07XFxuICAgICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xcbiAgICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgI2ZmZiA1MCUpLFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZiA1MCUsIHRyYW5zcGFyZW50IDUwJSksXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRiYXNlX2NvbG9yMSwgJGJhc2VfY29sb3IxKTtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxcbiAgICAgICAgY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxcbiAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxcbiAgICAgICAgMTAwJSAwO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpcXG4gICAgICAgIDVweCA1cHgsXFxuICAgICAgICA1cHggNXB4LFxcbiAgICAgICAgMi41ZW0gMi41ZW07XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgfVxcblxcbiAgICBzZWxlY3Q6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKSxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgZ3JheSwgZ3JheSk7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcXG4gICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIDFlbSxcXG4gICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSxcXG4gICAgICAgIDEwMCUgMDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6XFxuICAgICAgICA1cHggNXB4LFxcbiAgICAgICAgNXB4IDVweCxcXG4gICAgICAgIDIuNWVtIDIuNWVtO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNtZW51LWl0ZW1zIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDElO1xcbiAgICAgIHRvcDogMjUlO1xcbiAgICB9XFxuXFxuICAgIC5tZWFscyB7XFxuICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICAgIGhlaWdodDogMjgwcHg7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuXFxuICAgICAgLmJsdXItZGl2IHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICB9XFxuXFxuICAgICAgLm1lYWwtbmFtZSB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgLnJhdGluZyB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgfVxcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgLm1lYWwtbmFtZSB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogOTk7XFxuICAgICAgICAgIHRvcDogMTAlO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMCAzcHg7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5yYXRpbmcge1xcbiAgICAgICAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDFlbTtcXG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiA1MCU7XFxuICAgICAgICAgIHotaW5kZXg6IDk5O1xcblxcbiAgICAgICAgICBhW2hyZWYqPVxcXCJpbnRlbnRcXFwiXSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGEge1xcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgYTpob3ZlcixcXG4gICAgICAgICAgYTpmb2N1cyxcXG4gICAgICAgICAgYTpob3ZlciB+IGEsXFxuICAgICAgICAgIGE6Zm9jdXMgfiBhIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1MywgMjM2LCAwKTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ibHVyLWRpdiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3NSwgMTY4LCAxNTcsIDAuOCk7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHtcXG4gIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDgwcHg7XFxuICBwYWRkaW5nOiAxMDBweCAwIDUwcHggMDtcXG5cXG4gIGgyIHtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250MjtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgdWwge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgY29sb3I6ICRiYXNlX2NvbG9yMTtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxuXFxuICBkaXYge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgaW5wdXQge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IHRoaW4gc29saWQgJGJhc2VfY29sb3IxO1xcbiAgICBtYXJnaW46IDMwcHggMDtcXG4gICAgd2lkdGg6IDcwJTtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogJGJhc2VfY29sb3IxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIH1cXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyMzAsIDE4NCwgMTQ2KTtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJvcmRlci10b3A6IHRoaW4gc29saWQgcmdiKDEzMywgMTMyLCAxMzIpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICB9XFxuXFxuICAjc2xvZ2FuIHtcXG4gICAgaDIge1xcbiAgICAgIGNvbG9yOiAkYmFzZV9jb2xvcjE7XFxuICAgICAgZm9udC1zaXplOiAyLjZyZW07XFxuXFxuICAgICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXG4gICAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgdWwjc29jaWFsLWljb25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIHdpZHRoOiAzMCU7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIHdpZHRoOiAyMCU7XFxuICAgIH1cXG5cXG4gICAgbGkge1xcbiAgICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYm9yZGVyOiB0aGluIHNvbGlkICRiYXNlX2NvbG9yMTtcXG4gICAgICB3aWR0aDogNDBweDtcXG4gICAgICBoZWlnaHQ6IDQwcHg7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBjb2xvcjogJGJhc2VfY29sb3IxO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gIGNvbnRhY3RQYWdlLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwic2xvZ2FuXCI+PGgyPkZyZXNoIEN1aXNpbmU8L2gyPlxuICA8cD5GcmVzaCBmb29kLiBGcmVzaCBpZGVhcy48L3A+PC9kaXY+XG4gIDxkaXYgaWQ9XCJvcGVuaW5nLWhvdXJzXCI+XG4gICAgPGgyPk9wZW4gSG91cnM8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT5Nb24tRnJpOiA5IEFNIC0gNiBQTTwvbGk+XG4gICAgICA8bGk+U2F0dXJkYXk6IDkgQU0gLSA0IFBNPC9saT5cbiAgICAgIDxsaT5TdW5kYXk6IDkgQU0gLSAyIFBNPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cImNvbnRhY3QtdXNcIj5cbiAgICA8aDI+Q29udGFjdCBVczwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpPjEyMyBTYW1wbGUgc3RyZWV0LCBOZXcgWW9yaywgMTAwMTQ8L2xpPlxuICAgICAgPGxpPkVtYWlsOiA8c3Bhbj5zYW1wbGVAZXhhbXBsZS5jb208L3NwYW4+PC9saT5cbiAgICAgIDxsaT5UZWxlcGhvbmU6IDxzcGFuPisxKDUwMCkxMjMtNDU2PC9zcGFuPjwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJzdWJzY3JpYmVcIj5cbiAgICA8aDI+U3Vic2NyaWJlPC9oMj5cbiAgICA8aDI+TmV3c2xldHRlcjwvaDI+XG4gICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5cbiAgICA8YnV0dG9uIGlkPVwic3VibWl0XCI+U3Vic2NyaWJlPC9idXR0b24+XG4gIDwvZGl2PlxuICA8Zm9vdGVyPlxuICAgIDxwPjIwMjIgPGkgY2xhc3M9XCJmYSBmYS1jb3B5cmlnaHRcIj48L2k+IEZyZXNoIEN1aXNpbmUgfCBQb3dlcmVkIGJ5IEZyZXNoIExpZmU8L3A+XG4gICAgPHVsIGlkPVwic29jaWFsLWljb25zXCI+XG4gICAgICA8bGk+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2xpPlxuICAgICAgPGxpPjxpIGNsYXNzPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2xpPlxuICAgICAgPGxpPjxpIGNsYXNzPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9saT5cbiAgICAgIDxsaT48aSBjbGFzcz1cImZhIGZhLWluc3RhZ3JhbVwiPjwvaT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZm9vdGVyPlxuICBgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RQYWdlO1xuIiwiY29uc3QgY3JlYXRlSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtcGFnZScpO1xuICBob21lUGFnZS5pbm5lckhUTUwgPSBgPGgxPkZyZXNoIEN1aXNpbmU8L2gxPlxuICA8cCBpZD1cIndlbGNvbWVcIj5EaXNjb3ZlciBvdXIgZGVsaWNpb3VzIG1lbnUgbWFkZSB3aXRoIGZyZXNoIGluZ3JlZGllbnRzIGZyb20gb3VyIGxvY2FsIEZhcm1lcidzIE1hcmtldC48L3A+XG4gIGA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZVBhZ2U7XG4iLCJsZXQgY2F0ZWdvcnk7XG5cbmNvbnN0IGdldE1lbnUgPSAoY2F0ZWdvcnkpID0+IHtcbiAgZmV0Y2goYGh0dHBzOi8vdGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz0ke2NhdGVnb3J5fWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEubWVhbHMubGVuZ3RoID4gOCkge1xuICAgICAgICBkYXRhLm1lYWxzID0gZGF0YS5tZWFscy5zcGxpY2UoMCwgOCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lbnVJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWl0ZW1zJyk7XG5cbiAgICAgIGRhdGEubWVhbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lYWwuY2xhc3NMaXN0LmFkZCgnbWVhbHMnKTtcbiAgICAgICAgbWVhbC5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwibWVhbC1uYW1lXCI+JHtpdGVtLnN0ck1lYWx9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiM1XCIgdGl0bGU9XCJHaXZlIDUgc3RhcnNcIj7imIU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiM0XCIgdGl0bGU9XCJHaXZlIDQgc3RhcnNcIj7imIU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiMzXCIgdGl0bGU9XCJHaXZlIDMgc3RhcnNcIj7imIU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiMyXCIgdGl0bGU9XCJHaXZlIDIgc3RhcnNcIj7imIU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiMxXCIgdGl0bGU9XCJHaXZlIDEgc3RhclwiPuKYhTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmx1ci1kaXZcIj48L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgbWVhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2l0ZW0uc3RyTWVhbFRodW1ifSlgO1xuICAgICAgICBtZWFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtZWFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lYWwpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXNlY3Rpb24nKTtcbiAgbWVudVNlY3Rpb24uaW5uZXJIVE1MID0gYDxoMj5NZW51PC9oMj5cbiAgPGRpdiBpZD1cInNlbGVjdGlvblwiPlxuICA8c2VsZWN0PlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2ZWdhblwiPlZlZ2FuPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInN0YXJ0ZXJcIj5TdGFydGVyPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInBhc3RhXCI+UGFzdGE8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwic2VhZm9vZFwiPlNlYWZvb2Q8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiY2hpY2tlblwiPkNoaWNrZW48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiYnJlYWtmYXN0XCI+QnJlYWtmYXN0PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZlZ2V0YXJpYW5cIj5WZWdldGFyaWFuPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImRlc3NlcnRcIj5EZXNzZXJ0PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICA8ZGl2IGlkPVwibWVudS1pdGVtc1wiPjwvZGl2PlxuPC9kaXY+XG4gIGA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xuICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1pdGVtcycpO1xuXG4gIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICBzZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBjYXNlICd2ZWdhbic6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnVmVnYW4nO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYXN0YSc6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnUGFzdGEnO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWFmb29kJzpcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjYXRlZ29yeSA9ICdTZWFmb29kJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hpY2tlbic6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnQ2hpY2tlbic7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JyZWFrZmFzdCc6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnQnJlYWtmYXN0JztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnU3RhcnRlcic7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NpZGUnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1NpZGUnO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2ZWdldGFyaWFuJzpcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjYXRlZ29yeSA9ICdWZWdldGFyaWFuJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVzc2VydCc6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnRGVzc2VydCc7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnVmVnYW4nO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnVTZWN0aW9uLCBnZXRNZW51IH07XG4iLCJjb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBuYXYuaW5uZXJIVE1MID0gYDx1bD5cbiAgPGxpIGlkPVwiaG9tZVwiPkhvbWU8L2xpPlxuICA8bGkgaWQ9XCJtZW51XCI+TWVudTwvbGk+XG4gIDxsaSBpZD1cImNvbnRhY3RcIj5Db250YWN0PC9saT5cbjwvdWw+YDtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuYXYsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIG1vYmlsZU1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmYXMgZmEtYmFycycpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShtb2JpbGVNZW51LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBleGl0QnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLXRpbWVzJyk7XG4gIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShleGl0QnRuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuICBleGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH0pO1xuXG4gIG1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgZXhpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2QmFyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlSG9tZVBhZ2UgZnJvbSAnLi9tb2R1bGVzL2hvbWVwYWdlLmpzJztcbmltcG9ydCBjcmVhdGVOYXZCYXIgZnJvbSAnLi9tb2R1bGVzL25hdkJhci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiwgZ2V0TWVudSB9IGZyb20gJy4vbW9kdWxlcy9tZW51U2VjdGlvbi5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9tb2R1bGVzL2NvbnRhY3QuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY3JlYXRlTmF2QmFyKCk7XG4gIGNyZWF0ZUhvbWVQYWdlKCk7XG5cbiAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1wYWdlJyk7XG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuICBjb25zdCBleGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXRpbWVzJyk7XG4gIGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYmFycycpO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKV07XG4gIG5hdkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcGFnZScpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtcGFnZScpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXNlY3Rpb24nKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXNlY3Rpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcbiAgICAgICAgICBuYXZCYXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICBjcmVhdGVNZW51U2VjdGlvbigpO1xuICAgICAgICBuYXZCYXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGdldE1lbnUoJ1ZlZ2FuJyk7XG4gICAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXBhZ2UnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXBhZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcbiAgICAgICAgICBuYXZCYXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbnRhY3QnOlxuICAgICAgICBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgICAgICBuYXZCYXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXNlY3Rpb24nKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXNlY3Rpb24nKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcbiAgICAgICAgICBuYXZCYXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=