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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.hide {\n  display: none;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background: rgba(250, 250, 250, 0.9);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\n@media (min-width: 901px) {\n  nav {\n    visibility: visible;\n    height: 50px;\n  }\n}\nnav ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  nav ul {\n    flex-direction: row;\n  }\n}\n@media (min-width: 901px) {\n  nav ul {\n    flex-direction: row;\n    gap: 100px;\n  }\n}\nnav ul li {\n  list-style: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\nnav ul li:hover {\n  color: rgb(253, 102, 2);\n  cursor: pointer;\n}\n\ni.fa-bars, i.fa-times {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-bars, i.fa-times {\n    display: none;\n  }\n}\n\ni.fa-times {\n  font-size: 1.8rem;\n  color: rgb(253, 102, 2);\n  z-index: 99;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  i.fa-times {\n    display: none;\n  }\n}\n@media (min-width: 901px) {\n  i.fa-times {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  overflow: scroll;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-position: right;\n  }\n}\n@media (min-width: 901px) {\n  #content {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n}\n@media (min-width: 901px) {\n  section#home-page {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n}\nsection#home-page h1 {\n  position: absolute;\n  top: 20%;\n  font-size: 2.8rem;\n  color: #f47830;\n  text-shadow: 5px 0 5px #fff;\n  font-family: \"Vollkorn\", serif;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page h1 {\n    font-size: 4rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page h1 {\n    font-size: 6rem;\n  }\n}\nsection#home-page p#welcome {\n  position: absolute;\n  top: 30%;\n  font-size: 1.2rem;\n  font-style: italic;\n  width: 90%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#home-page p#welcome {\n    font-size: 1.6rem;\n  }\n}\n@media (min-width: 901px) {\n  section#home-page p#welcome {\n    font-size: 2rem;\n    width: 45%;\n    top: 35%;\n  }\n}\n\nsection#menu-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 100px 0;\n}\nsection#menu-section h2 {\n  font-size: 2.2rem;\n  font-family: \"Vollkorn\", serif;\n  font-weight: normal;\n}\nsection#menu-section #selection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 50px;\n}\nsection#menu-section #selection select {\n  background-color: white;\n  border: thin solid rgb(253, 102, 2);\n  border-radius: 4px;\n  display: inline-block;\n  font: inherit;\n  line-height: 1.5em;\n  padding: 0.5em 3.5em 0.5em 1em;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%), linear-gradient(to right, rgb(253, 102, 2), rgb(253, 102, 2));\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n}\nsection#menu-section #selection select:focus {\n  background-image: linear-gradient(45deg, white 50%, transparent 50%), linear-gradient(135deg, transparent 50%, white 50%), linear-gradient(to right, gray, gray);\n  background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, 100% 0;\n  background-size: 5px 5px, 5px 5px, 2.5em 2.5em;\n  background-repeat: no-repeat;\n  border-color: grey;\n  outline: 0;\n}\nsection#menu-section #menu-items {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 25px;\n  margin-top: 50px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 901px) {\n  section#menu-section #menu-items {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    position: absolute;\n    right: 1%;\n    top: 25%;\n  }\n}\nsection#menu-section #menu-items .meals {\n  width: 280px;\n  height: 280px;\n  position: relative;\n  border-radius: 20px;\n}\nsection#menu-section #menu-items .meals .blur-div {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals .meal-name {\n  visibility: hidden;\n  font-size: 1.8rem;\n}\nsection#menu-section #menu-items .meals .rating {\n  visibility: hidden;\n}\nsection#menu-section #menu-items .meals:hover .meal-name {\n  visibility: visible;\n  position: absolute;\n  z-index: 99;\n  top: 10%;\n  width: 100%;\n  padding: 0 3px;\n  text-align: center;\n}\nsection#menu-section #menu-items .meals:hover .rating {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row-reverse;\n  visibility: visible;\n  width: 100%;\n  margin: 0 auto 1em;\n  font-size: 35px;\n  overflow: hidden;\n  float: right;\n  position: absolute;\n  top: 50%;\n  z-index: 99;\n}\nsection#menu-section #menu-items .meals:hover .rating a[href*=intent] {\n  display: inline-block;\n  margin-top: 0.4em;\n}\nsection#menu-section #menu-items .meals:hover .rating a {\n  float: right;\n  color: #fff;\n  text-decoration: none;\n  -webkit-transition: color 0.4s;\n  -moz-transition: color 0.4s;\n  -o-transition: color 0.4s;\n  transition: color 0.4s;\n}\nsection#menu-section #menu-items .meals:hover .rating a:hover,\nsection#menu-section #menu-items .meals:hover .rating a:focus,\nsection#menu-section #menu-items .meals:hover .rating a:hover ~ a,\nsection#menu-section #menu-items .meals:hover .rating a:focus ~ a {\n  color: rgb(253, 236, 0);\n  cursor: pointer;\n}\nsection#menu-section #menu-items .meals:hover .blur-div {\n  visibility: visible;\n  position: absolute;\n  top: 0;\n  background: rgba(175, 168, 157, 0.8);\n  height: 100%;\n  width: 100%;\n  border-radius: 20px;\n}\n\nsection#contact-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n}\nsection#contact-page h2 {\n  font-family: \"Vollkorn\", serif;\n  font-size: 2.2rem;\n  font-weight: normal;\n}\n@media (min-width: 901px) {\n  section#contact-page h2 {\n    font-size: 3rem;\n    margin-bottom: 20px;\n  }\n}\nsection#contact-page ul {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nsection#contact-page li {\n  list-style: none;\n  margin-bottom: 20px;\n  font-size: 1.2rem;\n}\n@media (min-width: 901px) {\n  section#contact-page li {\n    font-size: 1.5rem;\n  }\n}\nsection#contact-page li span {\n  color: rgb(253, 102, 2);\n  font-weight: 700;\n  text-decoration: underline;\n}\nsection#contact-page div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\nsection#contact-page input {\n  padding: 10px;\n  border-radius: 20px;\n  border: none;\n  outline: thin solid rgb(253, 102, 2);\n  margin: 30px 0;\n  width: 70%;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page input {\n    width: 50%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page input {\n    width: 20%;\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button {\n  border: none;\n  background: rgb(253, 102, 2);\n  padding: 10px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 700;\n}\n@media (min-width: 901px) {\n  section#contact-page button {\n    font-size: 1.2rem;\n  }\n}\nsection#contact-page button:hover {\n  cursor: pointer;\n  background: rgb(230, 184, 146);\n  outline: none;\n}\nsection#contact-page footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-top: thin solid rgb(133, 132, 132);\n  width: 100%;\n  padding-top: 15px;\n}\nsection#contact-page #slogan h2 {\n  color: rgb(253, 102, 2);\n  font-size: 2.6rem;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan h2 {\n    font-size: 3.5rem;\n  }\n}\nsection#contact-page #slogan p {\n  font-style: italic;\n}\n@media (min-width: 901px) {\n  section#contact-page #slogan p {\n    font-size: 1.5rem;\n    margin-bottom: 100px;\n  }\n}\nsection#contact-page ul#social-icons {\n  flex-direction: row;\n  justify-content: space-between;\n  width: 50%;\n  padding-top: 20px;\n}\n@media (min-width: 600px) and (max-width: 900px) {\n  section#contact-page ul#social-icons {\n    width: 30%;\n  }\n}\n@media (min-width: 901px) {\n  section#contact-page ul#social-icons {\n    width: 20%;\n  }\n}\nsection#contact-page ul#social-icons li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: thin solid rgb(253, 102, 2);\n  width: 40px;\n  height: 40px;\n}\nsection#contact-page ul#social-icons li i {\n  color: rgb(253, 102, 2);\n}\nsection#contact-page ul#social-icons li i:hover {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn&display=swap');\n\n$base_color1: rgb(253, 102, 2);\n$font1: 'Open Sans', sans-serif;\n$font2: 'Vollkorn', serif;\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $font1;\n}\n\n@mixin center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin media-md {\n  @media (min-width: 600px) and (max-width: 900px) {\n    @content;\n  }\n}\n\n@mixin media-lg {\n  @media (min-width: 901px) {\n    @content;\n  }\n}\n\n@mixin section-bg {\n  background: url('../images/section_bg2.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n\n  @include media-md {\n    background: url('../images/section_bg4.jpg');\n    background-size: cover;\n    background-position: right;\n  }\n}\n","@import 'base';\n\n.hide {\n  display: none;\n}\n\nnav {\n  @include center;\n\n  position: absolute;\n  background: rgba(250, 250, 250, 0.9);\n  backdrop-filter: blur(5px);\n  width: 100%;\n  height: 100vh;\n  padding: 20px;\n  z-index: 99;\n  visibility: hidden;\n\n  @include media-md {\n    visibility: visible;\n    height: 50px;\n  }\n\n  @include media-lg {\n    visibility: visible;\n    height: 50px;\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n    gap: 50px;\n\n    @include media-md {\n      flex-direction: row;\n    }\n\n    @include media-lg {\n      flex-direction: row;\n      gap: 100px;\n    }\n\n    li {\n      list-style: none;\n      font-size: 1.4rem;\n      font-weight: 600;\n\n      &:hover {\n        color: $base_color1;\n        cursor: pointer;\n      }\n    }\n  }\n}\n\ni.fa-bars {\n  position: absolute;\n  top: 3%;\n  right: 6%;\n  font-size: 2rem;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\ni.fa-times {\n  @extend .fa-bars;\n\n  font-size: 1.8rem;\n  color: $base_color1;\n  z-index: 99;\n\n  @include media-md {\n    display: none;\n  }\n\n  @include media-lg {\n    display: none;\n  }\n}\n\n#content {\n  height: 100vh;\n\n  @include section-bg;\n\n  overflow: scroll;\n\n  @include media-lg {\n    background: url('../images/section_bg1.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: bottom;\n  }\n}\n\nsection#home-page {\n  background: url('../images/section_bg5.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: left;\n  height: 100%;\n  padding: 25px;\n\n  @include media-lg {\n    background: url('../images/section_bg.jpg');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  h1 {\n    position: absolute;\n    top: 20%;\n    font-size: 2.8rem;\n    color: #f47830;\n    text-shadow: 5px 0 5px #fff;\n    font-family: $font2;\n\n    @include media-md {\n      font-size: 4rem;\n    }\n\n    @include media-lg {\n      font-size: 6rem;\n    }\n  }\n\n  p#welcome {\n    position: absolute;\n    top: 30%;\n    font-size: 1.2rem;\n    font-style: italic;\n    width: 90%;\n\n    @include media-md {\n      font-size: 1.6rem;\n    }\n\n    @include media-lg {\n      font-size: 2rem;\n      width: 45%;\n      top: 35%;\n    }\n  }\n}\n\nsection#menu-section {\n  @include center;\n\n  flex-direction: column;\n  padding: 100px 0;\n\n  h2 {\n    font-size: 2.2rem;\n    font-family: $font2;\n    font-weight: normal;\n  }\n\n  #selection {\n    @include center;\n\n    flex-direction: column;\n    margin-top: 50px;\n\n    select {\n      background-color: white;\n      border: thin solid $base_color1;\n      border-radius: 4px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      background-image:\n        linear-gradient(45deg, transparent 50%, #fff 50%),\n        linear-gradient(135deg, #fff 50%, transparent 50%),\n        linear-gradient(to right, $base_color1, $base_color1);\n      background-position:\n        calc(100% - 20px) calc(1em + 2px),\n        calc(100% - 15px) calc(1em + 2px),\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image:\n        linear-gradient(45deg, white 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, white 50%),\n        linear-gradient(to right, gray, gray);\n      background-position:\n        calc(100% - 15px) 1em,\n        calc(100% - 20px) 1em,\n        100% 0;\n      background-size:\n        5px 5px,\n        5px 5px,\n        2.5em 2.5em;\n      background-repeat: no-repeat;\n      border-color: grey;\n      outline: 0;\n    }\n  }\n\n  #menu-items {\n    @include center;\n\n    flex-direction: column;\n    gap: 25px;\n    margin-top: 50px;\n\n    @include media-md {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    @include media-lg {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      position: absolute;\n      right: 1%;\n      top: 25%;\n    }\n\n    .meals {\n      width: 280px;\n      height: 280px;\n      position: relative;\n      border-radius: 20px;\n\n      .blur-div {\n        visibility: hidden;\n      }\n\n      .meal-name {\n        visibility: hidden;\n        font-size: 1.8rem;\n      }\n\n      .rating {\n        visibility: hidden;\n      }\n\n      &:hover {\n        .meal-name {\n          visibility: visible;\n          position: absolute;\n          z-index: 99;\n          top: 10%;\n          width: 100%;\n          padding: 0 3px;\n          text-align: center;\n        }\n\n        .rating {\n          @include center;\n\n          flex-direction: row-reverse;\n          visibility: visible;\n          width: 100%;\n          margin: 0 auto 1em;\n          font-size: 35px;\n          overflow: hidden;\n          float: right;\n          position: absolute;\n          top: 50%;\n          z-index: 99;\n\n          a[href*=\"intent\"] {\n            display: inline-block;\n            margin-top: 0.4em;\n          }\n\n          a {\n            float: right;\n            color: #fff;\n            text-decoration: none;\n            -webkit-transition: color 0.4s;\n            -moz-transition: color 0.4s;\n            -o-transition: color 0.4s;\n            transition: color 0.4s;\n          }\n\n          a:hover,\n          a:focus,\n          a:hover ~ a,\n          a:focus ~ a {\n            color: rgb(253, 236, 0);\n            cursor: pointer;\n          }\n        }\n\n        .blur-div {\n          visibility: visible;\n          position: absolute;\n          top: 0;\n          background: rgba(175, 168, 157, 0.8);\n          height: 100%;\n          width: 100%;\n          border-radius: 20px;\n        }\n      }\n    }\n  }\n}\n\nsection#contact-page {\n  @include center;\n\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 80px;\n  padding: 100px 0 50px 0;\n\n  h2 {\n    font-family: $font2;\n    font-size: 2.2rem;\n    font-weight: normal;\n\n    @include media-lg {\n      font-size: 3rem;\n      margin-bottom: 20px;\n    }\n  }\n\n  ul {\n    @include center;\n\n    flex-direction: column;\n  }\n\n  li {\n    list-style: none;\n    margin-bottom: 20px;\n    font-size: 1.2rem;\n\n    @include media-lg {\n      font-size: 1.5rem;\n    }\n\n    span {\n      color: $base_color1;\n      font-weight: 700;\n      text-decoration: underline;\n    }\n  }\n\n  div {\n    @include center;\n\n    flex-direction: column;\n    width: 100%;\n  }\n\n  input {\n    padding: 10px;\n    border-radius: 20px;\n    border: none;\n    outline: thin solid $base_color1;\n    margin: 30px 0;\n    width: 70%;\n\n    @include media-md {\n      width: 50%;\n    }\n\n    @include media-lg {\n      width: 20%;\n      font-size: 1.2rem;\n    }\n  }\n\n  button {\n    border: none;\n    background: $base_color1;\n    padding: 10px;\n    border-radius: 5px;\n    color: #fff;\n    font-weight: 700;\n\n    @include media-lg {\n      font-size: 1.2rem;\n    }\n\n    &:hover {\n      cursor: pointer;\n      background: rgb(230, 184, 146);\n      outline: none;\n    }\n  }\n\n  footer {\n    @include center;\n\n    flex-direction: column;\n    border-top: thin solid rgb(133, 132, 132);\n    width: 100%;\n    padding-top: 15px;\n  }\n\n  #slogan {\n    h2 {\n      color: $base_color1;\n      font-size: 2.6rem;\n\n      @include media-lg {\n        font-size: 3.5rem;\n      }\n    }\n\n    p {\n      font-style: italic;\n\n      @include media-lg {\n        font-size: 1.5rem;\n        margin-bottom: 100px;\n      }\n    }\n  }\n\n  ul#social-icons {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 50%;\n    padding-top: 20px;\n\n    @include media-md {\n      width: 30%;\n    }\n\n    @include media-lg {\n      width: 20%;\n    }\n\n    li {\n      @include center;\n\n      border-radius: 50%;\n      border: thin solid $base_color1;\n      width: 40px;\n      height: 40px;\n\n      i {\n        color: $base_color1;\n\n        &:hover {\n          cursor: pointer;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssUUFBUSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksWUFBWSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcs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RztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzcz9lNWQ4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9tZW51U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9uYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VjdGlvbl9iZzQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3NlY3Rpb25fYmcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWN0aW9uX2JnNS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VjdGlvbl9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9Vm9sbGtvcm4mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgei1pbmRleDogOTk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBuYXYge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgbmF2IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBuYXYgdWwge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTAwcHg7XFxuICB9XFxufVxcbm5hdiB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmkuZmEtYmFycywgaS5mYS10aW1lcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMlO1xcbiAgcmlnaHQ6IDYlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgaS5mYS1iYXJzLCBpLmZhLXRpbWVzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBpLmZhLWJhcnMsIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5pLmZhLXRpbWVzIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIGkuZmEtdGltZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAjY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gICNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2hvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMjVweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB9XFxufVxcbnNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjAlO1xcbiAgZm9udC1zaXplOiAyLjhyZW07XFxuICBjb2xvcjogI2Y0NzgzMDtcXG4gIHRleHQtc2hhZG93OiA1cHggMCA1cHggI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVm9sbGtvcm5cXFwiLCBzZXJpZjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jaG9tZS1wYWdlIGgxIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2hvbWUtcGFnZSBwI3dlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA0NSU7XFxuICAgIHRvcDogMzUlO1xcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDA7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJWb2xsa29yblxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI3NlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNzZWxlY3Rpb24gc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHJnYigyNTMsIDEwMiwgMik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCAjZmZmIDUwJSksIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTMsIDEwMiwgMiksIHJnYigyNTMsIDEwMiwgMikpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIDEwMCUgMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMi41ZW0gMi41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjc2VsZWN0aW9uIHNlbGVjdDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHdoaXRlIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyYXksIGdyYXkpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTVweCkgMWVtLCBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sIDEwMCUgMDtcXG4gIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMi41ZW0gMi41ZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyLWNvbG9yOiBncmV5O1xcbiAgb3V0bGluZTogMDtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMSU7XFxuICAgIHRvcDogMjUlO1xcbiAgfVxcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHMge1xcbiAgd2lkdGg6IDI4MHB4O1xcbiAgaGVpZ2h0OiAyODBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFscyAuYmx1ci1kaXYge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHMgLm1lYWwtbmFtZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzIC5yYXRpbmcge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLm1lYWwtbmFtZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDEwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAzcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0byAxZW07XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcgYVtocmVmKj1pbnRlbnRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xcbn1cXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxufVxcbnNlY3Rpb24jbWVudS1zZWN0aW9uICNtZW51LWl0ZW1zIC5tZWFsczpob3ZlciAucmF0aW5nIGE6aG92ZXIsXFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5yYXRpbmcgYTpmb2N1cyxcXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhOmhvdmVyIH4gYSxcXG5zZWN0aW9uI21lbnUtc2VjdGlvbiAjbWVudS1pdGVtcyAubWVhbHM6aG92ZXIgLnJhdGluZyBhOmZvY3VzIH4gYSB7XFxuICBjb2xvcjogcmdiKDI1MywgMjM2LCAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuc2VjdGlvbiNtZW51LXNlY3Rpb24gI21lbnUtaXRlbXMgLm1lYWxzOmhvdmVyIC5ibHVyLWRpdiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE2OCwgMTU3LCAwLjgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogODBweDtcXG4gIHBhZGRpbmc6IDEwMHB4IDAgNTBweCAwO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIlZvbGxrb3JuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAxcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIGxpIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGxpIHNwYW4ge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBpbnB1dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IHRoaW4gc29saWQgcmdiKDI1MywgMTAyLCAyKTtcXG4gIG1hcmdpbjogMzBweCAwO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIGlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSBpbnB1dCB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTAyLCAyKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAxODQsIDE0Nik7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSBmb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHJnYigxMzMsIDEzMiwgMTMyKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlICNzbG9nYW4gaDIge1xcbiAgY29sb3I6IHJnYigyNTMsIDEwMiwgMik7XFxuICBmb250LXNpemU6IDIuNnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICBzZWN0aW9uI2NvbnRhY3QtcGFnZSAjc2xvZ2FuIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxufVxcbnNlY3Rpb24jY29udGFjdC1wYWdlICNzbG9nYW4gcCB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgI3Nsb2dhbiBwIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgfVxcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIHNlY3Rpb24jY29udGFjdC1wYWdlIHVsI3NvY2lhbC1pY29ucyB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xcbiAgc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gIH1cXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IHRoaW4gc29saWQgcmdiKDI1MywgMTAyLCAyKTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB1bCNzb2NpYWwtaWNvbnMgbGkgaSB7XFxuICBjb2xvcjogcmdiKDI1MywgMTAyLCAyKTtcXG59XFxuc2VjdGlvbiNjb250YWN0LXBhZ2UgdWwjc29jaWFsLWljb25zIGxpIGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0pGOztBRE9BO0VBQ0Usb0NBWk07QUNRUjs7QUFUQTtFQUNFLGFBQUE7QUFZRjs7QUFUQTtFRGFFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDWkEsa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBYUY7QURKRTtFQ25CRjtJQWFJLG1CQUFBO0lBQ0EsWUFBQTtFQWNGO0FBQ0Y7QURKRTtFQ3pCRjtJQWtCSSxtQkFBQTtJQUNBLFlBQUE7RUFlRjtBQUNGO0FBYkU7RURUQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQ1VFLHNCQUFBO0VBQ0EsU0FBQTtBQWdCSjtBRHZCRTtFQ0dBO0lBT0ksbUJBQUE7RUFpQko7QUFDRjtBRHRCRTtFQ0hBO0lBV0ksbUJBQUE7SUFDQSxVQUFBO0VBa0JKO0FBQ0Y7QUFoQkk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFrQk47QUFoQk07RUFDRSx1QkQvQ007RUNnRE4sZUFBQTtBQWtCUjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBZUY7QURsREU7RUMrQkY7SUFPSSxhQUFBO0VBZ0JGO0FBQ0Y7QURqREU7RUN5QkY7SUFXSSxhQUFBO0VBaUJGO0FBQ0Y7O0FBZEE7RUFHRSxpQkFBQTtFQUNBLHVCRHpFWTtFQzBFWixXQUFBO0FBZUY7QURsRUU7RUM4Q0Y7SUFRSSxhQUFBO0VBZ0JGO0FBQ0Y7QURqRUU7RUN3Q0Y7SUFZSSxhQUFBO0VBaUJGO0FBQ0Y7O0FBZEE7RUFDRSxhQUFBO0VEbkRBLG1EQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VDb0RBLGdCQUFB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QUE7SUFDQSxvQkFBQTtFQUFOO0FBQ0Y7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFGSjtBRDFaRTtFQ3daQTtJQU9JLFVBQUE7RUFESjtBQUNGO0FEelpFO0VDa1pBO0lBV0ksVUFBQTtFQUFKO0FBQ0Y7QUFFSTtFRDVhRixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzZhSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDTjtBQUNNO0VBQ0UsdUJEdGNNO0FDdWNkO0FBQ1E7RUFDRSxlQUFBO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmZhbWlseT1Wb2xsa29ybiZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmFzZV9jb2xvcjE6IHJnYigyNTMsIDEwMiwgMik7XFxuJGZvbnQxOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4kZm9udDI6ICdWb2xsa29ybicsIHNlcmlmO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDE7XFxufVxcblxcbkBtaXhpbiBjZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIG1lZGlhLW1kIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbWVkaWEtbGcge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc2VjdGlvbi1iZyB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnMi5qcGcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc2VjdGlvbl9iZzQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ2Jhc2UnO1xcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbm5hdiB7XFxuICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuOSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB6LWluZGV4OiA5OTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBnYXA6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogJGJhc2VfY29sb3IxO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5pLmZhLWJhcnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzJTtcXG4gIHJpZ2h0OiA2JTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuaS5mYS10aW1lcyB7XFxuICBAZXh0ZW5kIC5mYS1iYXJzO1xcblxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogJGJhc2VfY29sb3IxO1xcbiAgei1pbmRleDogOTk7XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuXFxuICBAaW5jbHVkZSBzZWN0aW9uLWJnO1xcblxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG4gIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc2VjdGlvbl9iZzEuanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIH1cXG59XFxuXFxuc2VjdGlvbiNob21lLXBhZ2Uge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvc2VjdGlvbl9iZzUuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyNXB4O1xcblxcbiAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9zZWN0aW9uX2JnLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXG4gICAgY29sb3I6ICNmNDc4MzA7XFxuICAgIHRleHQtc2hhZG93OiA1cHggMCA1cHggI2ZmZjtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250MjtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbWQge1xcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBwI3dlbGNvbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB3aWR0aDogOTAlO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICB3aWR0aDogNDUlO1xcbiAgICAgIHRvcDogMzUlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbnNlY3Rpb24jbWVudS1zZWN0aW9uIHtcXG4gIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMDBweCAwO1xcblxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICRmb250MjtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIH1cXG5cXG4gICNzZWxlY3Rpb24ge1xcbiAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYm9yZGVyOiB0aGluIHNvbGlkICRiYXNlX2NvbG9yMTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDMuNWVtIDAuNWVtIDFlbTtcXG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsICNmZmYgNTAlKSxcXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmYgNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkYmFzZV9jb2xvcjEsICRiYXNlX2NvbG9yMSk7XFxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcXG4gICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcXG4gICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSxcXG4gICAgICAgIDEwMCUgMDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6XFxuICAgICAgICA1cHggNXB4LFxcbiAgICAgICAgNXB4IDVweCxcXG4gICAgICAgIDIuNWVtIDIuNWVtO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0OmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB3aGl0ZSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIHdoaXRlIDUwJSksXFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGdyYXksIGdyYXkpO1xcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XFxuICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sXFxuICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXFxuICAgICAgICAxMDAlIDA7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOlxcbiAgICAgICAgNXB4IDVweCxcXG4gICAgICAgIDVweCA1cHgsXFxuICAgICAgICAyLjVlbSAyLjVlbTtcXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAjbWVudS1pdGVtcyB7XFxuICAgIEBpbmNsdWRlIGNlbnRlcjtcXG5cXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1tZCB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAxJTtcXG4gICAgICB0b3A6IDI1JTtcXG4gICAgfVxcblxcbiAgICAubWVhbHMge1xcbiAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICBoZWlnaHQ6IDI4MHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbiAgICAgIC5ibHVyLWRpdiB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgfVxcblxcbiAgICAgIC5tZWFsLW5hbWUge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgfVxcblxcbiAgICAgIC5yYXRpbmcge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIC5tZWFsLW5hbWUge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDk5O1xcbiAgICAgICAgICB0b3A6IDEwJTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDAgM3B4O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucmF0aW5nIHtcXG4gICAgICAgICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byAxZW07XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogNTAlO1xcbiAgICAgICAgICB6LWluZGV4OiA5OTtcXG5cXG4gICAgICAgICAgYVtocmVmKj1cXFwiaW50ZW50XFxcIl0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjRlbTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBhIHtcXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuNHM7XFxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC40cztcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGE6aG92ZXIsXFxuICAgICAgICAgIGE6Zm9jdXMsXFxuICAgICAgICAgIGE6aG92ZXIgfiBhLFxcbiAgICAgICAgICBhOmZvY3VzIH4gYSB7XFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTMsIDIzNiwgMCk7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYmx1ci1kaXYge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNzUsIDE2OCwgMTU3LCAwLjgpO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5zZWN0aW9uI2NvbnRhY3QtcGFnZSB7XFxuICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiA4MHB4O1xcbiAgcGFkZGluZzogMTAwcHggMCA1MHB4IDA7XFxuXFxuICBoMiB7XFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcblxcbiAgICBAaW5jbHVkZSBtZWRpYS1sZyB7XFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgIGNvbG9yOiAkYmFzZV9jb2xvcjE7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZGl2IHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiB0aGluIHNvbGlkICRiYXNlX2NvbG9yMTtcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxuICAgIHdpZHRoOiA3MCU7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICB3aWR0aDogMjAlO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICRiYXNlX2NvbG9yMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG5cXG4gICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB9XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAxODQsIDE0Nik7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgQGluY2x1ZGUgY2VudGVyO1xcblxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHJnYigxMzMsIDEzMiwgMTMyKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgfVxcblxcbiAgI3Nsb2dhbiB7XFxuICAgIGgyIHtcXG4gICAgICBjb2xvcjogJGJhc2VfY29sb3IxO1xcbiAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcblxcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuXFxuICAgICAgQGluY2x1ZGUgbWVkaWEtbGcge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIHVsI3NvY2lhbC1pY29ucyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLW1kIHtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1lZGlhLWxnIHtcXG4gICAgICB3aWR0aDogMjAlO1xcbiAgICB9XFxuXFxuICAgIGxpIHtcXG4gICAgICBAaW5jbHVkZSBjZW50ZXI7XFxuXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgIGJvcmRlcjogdGhpbiBzb2xpZCAkYmFzZV9jb2xvcjE7XFxuICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgICAgIGkge1xcbiAgICAgICAgY29sb3I6ICRiYXNlX2NvbG9yMTtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb250YWN0UGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtcGFnZScpO1xuICBjb250YWN0UGFnZS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cInNsb2dhblwiPjxoMj5GcmVzaCBDdWlzaW5lPC9oMj5cbiAgPHA+RnJlc2ggZm9vZC4gRnJlc2ggaWRlYXMuPC9wPjwvZGl2PlxuICA8ZGl2IGlkPVwib3BlbmluZy1ob3Vyc1wiPlxuICAgIDxoMj5PcGVuIEhvdXJzPC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGk+TW9uLUZyaTogOSBBTSAtIDYgUE08L2xpPlxuICAgICAgPGxpPlNhdHVyZGF5OiA5IEFNIC0gNCBQTTwvbGk+XG4gICAgICA8bGk+U3VuZGF5OiA5IEFNIC0gMiBQTTwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCJjb250YWN0LXVzXCI+XG4gICAgPGgyPkNvbnRhY3QgVXM8L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaT4xMjMgU2FtcGxlIHN0cmVldCwgTmV3IFlvcmssIDEwMDE0PC9saT5cbiAgICAgIDxsaT5FbWFpbDogPHNwYW4+c2FtcGxlQGV4YW1wbGUuY29tPC9zcGFuPjwvbGk+XG4gICAgICA8bGk+VGVsZXBob25lOiA8c3Bhbj4rMSg1MDApMTIzLTQ1Njwvc3Bhbj48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwic3Vic2NyaWJlXCI+XG4gICAgPGgyPlN1YnNjcmliZTwvaDI+XG4gICAgPGgyPk5ld3NsZXR0ZXI8L2gyPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XG4gICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiPlN1YnNjcmliZTwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGZvb3Rlcj5cbiAgICA8cD4yMDIyIDxpIGNsYXNzPVwiZmEgZmEtY29weXJpZ2h0XCI+PC9pPiBGcmVzaCBDdWlzaW5lIHwgUG93ZXJlZCBieSBGcmVzaCBMaWZlPC9wPlxuICAgIDx1bCBpZD1cInNvY2lhbC1pY29uc1wiPlxuICAgICAgPGxpPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9saT5cbiAgICAgIDxsaT48aSBjbGFzcz1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9saT5cbiAgICAgIDxsaT48aSBjbGFzcz1cImZhIGZhLWxpbmtlZGluXCI+PC9pPjwvbGk+XG4gICAgICA8bGk+PGkgY2xhc3M9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2k+PC9saT5cbiAgICA8L3VsPlxuICA8L2Zvb3Rlcj5cbiAgYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjb250YWN0UGFnZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTtcbiIsImNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgaG9tZVBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXBhZ2UnKTtcbiAgaG9tZVBhZ2UuaW5uZXJIVE1MID0gYDxoMT5GcmVzaCBDdWlzaW5lPC9oMT5cbiAgPHAgaWQ9XCJ3ZWxjb21lXCI+RGlzY292ZXIgb3VyIGRlbGljaW91cyBtZW51IG1hZGUgd2l0aCBmcmVzaCBpbmdyZWRpZW50cyBmcm9tIG91ciBsb2NhbCBGYXJtZXIncyBNYXJrZXQuPC9wPlxuICBgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWVQYWdlO1xuIiwibGV0IGNhdGVnb3J5O1xuXG5jb25zdCBnZXRNZW51ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGZldGNoKGBodHRwczovL3RoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9JHtjYXRlZ29yeX1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLm1lYWxzLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgZGF0YS5tZWFscyA9IGRhdGEubWVhbHMuc3BsaWNlKDAsIDgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZW51SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1pdGVtcycpO1xuXG4gICAgICBkYXRhLm1lYWxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWVhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZWFsLmNsYXNzTGlzdC5hZGQoJ21lYWxzJyk7XG4gICAgICAgIG1lYWwuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cIm1lYWwtbmFtZVwiPiR7aXRlbS5zdHJNZWFsfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjNVwiIHRpdGxlPVwiR2l2ZSA1IHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjNFwiIHRpdGxlPVwiR2l2ZSA0IHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjM1wiIHRpdGxlPVwiR2l2ZSAzIHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjMlwiIHRpdGxlPVwiR2l2ZSAyIHN0YXJzXCI+4piFPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjMVwiIHRpdGxlPVwiR2l2ZSAxIHN0YXJcIj7imIU8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsdXItZGl2XCI+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIG1lYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpdGVtLnN0ck1lYWxUaHVtYn0pYDtcbiAgICAgICAgbWVhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbWVhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKCk7XG59O1xuXG5jb25zdCBjcmVhdGVNZW51U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG1lbnVTZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1zZWN0aW9uJyk7XG4gIG1lbnVTZWN0aW9uLmlubmVySFRNTCA9IGA8aDI+TWVudTwvaDI+XG4gIDxkaXYgaWQ9XCJzZWxlY3Rpb25cIj5cbiAgPHNlbGVjdD5cbiAgICA8b3B0aW9uIHZhbHVlPVwidmVnYW5cIj5WZWdhbjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzdGFydGVyXCI+U3RhcnRlcjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzaWRlXCI+U2lkZTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJwYXN0YVwiPlBhc3RhPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInNlYWZvb2RcIj5TZWFmb29kPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImNoaWNrZW5cIj5DaGlja2VuPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImJyZWFrZmFzdFwiPkJyZWFrZmFzdDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJ2ZWdldGFyaWFuXCI+VmVnZXRhcmlhbjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJkZXNzZXJ0XCI+RGVzc2VydDwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPGRpdiBpZD1cIm1lbnUtaXRlbXNcIj48L2Rpdj5cbjwvZGl2PlxuICBgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKTtcbiAgY29uc3QgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtaXRlbXMnKTtcblxuICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgc2VsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgY2FzZSAndmVnYW4nOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1ZlZ2FuJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFzdGEnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1Bhc3RhJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhZm9vZCc6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnU2VhZm9vZCc7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NoaWNrZW4nOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0NoaWNrZW4nO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdicmVha2Zhc3QnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0JyZWFrZmFzdCc7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0YXJ0ZXInOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1N0YXJ0ZXInO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaWRlJzpcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjYXRlZ29yeSA9ICdTaWRlJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndmVnZXRhcmlhbic6XG4gICAgICAgIG1lbnVJdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2F0ZWdvcnkgPSAnVmVnZXRhcmlhbic7XG4gICAgICAgIGdldE1lbnUoY2F0ZWdvcnkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Rlc3NlcnQnOlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ0Rlc3NlcnQnO1xuICAgICAgICBnZXRNZW51KGNhdGVnb3J5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZW51SXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNhdGVnb3J5ID0gJ1ZlZ2FuJztcbiAgICAgICAgZ2V0TWVudShjYXRlZ29yeSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNZW51U2VjdGlvbiwgZ2V0TWVudSB9O1xuIiwiY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgbmF2LmlubmVySFRNTCA9IGA8dWw+XG4gIDxsaSBpZD1cImhvbWVcIj5Ib21lPC9saT5cbiAgPGxpIGlkPVwibWVudVwiPk1lbnU8L2xpPlxuICA8bGkgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvbGk+XG48L3VsPmA7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUobmF2LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuICBjb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBtb2JpbGVNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmFzIGZhLWJhcnMnKTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUobW9iaWxlTWVudSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XG5cbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZXhpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhcyBmYS10aW1lcycpO1xuICBleGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZXhpdEJ0biwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSk7XG5cbiAgZXhpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9KTtcblxuICBtb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5hdi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGV4aXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdkJhcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vbW9kdWxlcy9ob21lcGFnZS5qcyc7XG5pbXBvcnQgY3JlYXRlTmF2QmFyIGZyb20gJy4vbW9kdWxlcy9uYXZCYXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlTWVudVNlY3Rpb24sIGdldE1lbnUgfSBmcm9tICcuL21vZHVsZXMvbWVudVNlY3Rpb24uanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gJy4vbW9kdWxlcy9jb250YWN0LmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNyZWF0ZU5hdkJhcigpO1xuICBjcmVhdGVIb21lUGFnZSgpO1xuXG4gIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtcGFnZScpO1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbiAgY29uc3QgZXhpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpO1xuICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWJhcnMnKTtcblxuICBjb25zdCBuYXZMaXN0ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyldO1xuICBuYXZMaXN0LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIG5hdkJhci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXBhZ2UnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LXBhZ2UnKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1zZWN0aW9uJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1zZWN0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwKSB7XG4gICAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgY3JlYXRlTWVudVNlY3Rpb24oKTtcbiAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBnZXRNZW51KCdWZWdhbicpO1xuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wYWdlJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdC1wYWdlJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwKSB7XG4gICAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgZXhpdEJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1zZWN0aW9uJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1zZWN0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwKSB7XG4gICAgICAgICAgbmF2QmFyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9