/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/electroharmonix.regular.otf */ "./src/fonts/electroharmonix.regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Japanese";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: rgb(209, 209, 209);
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
}

* {
    box-sizing: border-box;
}

.logo .brand-name,
span.brand-name {
    font-family: "Japanese";

    font-size: 35px;

    padding: 0 10px;
    border-radius: 10px;

    background-color: black;
    color: white;
}

.logo .brand-name:hover {
    background-color: rgb(218, 36, 36);
}

.image-container {
    width: 200px;
    height: 200px;

    overflow: hidden;
    border-radius: 15px;
}

.image-container img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.dashboard {
    padding: 15px 3%;

    border-radius: 10px;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;

    background-color: black;
}

.dashboard .tabs {
    margin: 0;

    display: flex;
    gap: 15px;

    align-items: center;
    font-size: 17px;
    color: white;
}

.tabs li.about-us {
    margin-left: auto;
}

.dashboard .tabs li {
    list-style: none;
}


#content {
    display: grid;
    gap: 60px;
    padding: 3%;
}

.card {
    padding: 3%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
    background-color: white;
}

.card.home,
.card.about-us {
    padding: 0;

    overflow: hidden;

    display: grid;
    grid-template-columns: auto 1fr;
}

.card.home .image-container,
.card.about-us .image-container {
    width: 600px;
    height: 490px;
    border-radius: 0;
}

.card.home .copy,
.card.about-us .copy {
    padding-left: 7%;
    padding-right: 20%;

    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    align-content: center;

    gap: 15px;
}

.card.home .heading,
.card.about-us .heading,
.card.contact-us .heading {
    font-size: 40px;
    font-weight: 600;
}

.card.home .description,
.card.about-us .description, 
.card.contact-us .description {
    font-size: 22px;
}

.card.home.hero-section {
    grid-template-columns: 1fr;
    grid-template-rows: 700px 200px;
}

.card.home.hero-section .copy {
    padding: 0;
    display: grid;
    justify-items: center;
}

.card.home.hero-section .image-container {
    width: 100%;
    height: 100%;
}


.card button {
    padding: 6px 13px;

    background-color: rgb(232, 49, 49);

    font-size: 20px;
    color: white;

    border: 1px solid rgb(232, 49, 49);
    border-radius: 7px;
}

.card button:hover {
    background-color: rgb(218, 36, 36);
    border-color: rgb(218, 36, 36);
}


.gallery-container,
.selection {
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    grid-auto-rows: 250px;
    gap: 50px;
    justify-content: center;
}

.card.gallery-item,
.card.menu-item {
    width: 100%;
    height: 100%;

    padding: 10px;

    border-radius: 15px;
}

.card.gallery-item:hover,
.card.menu-item:hover {
    transform: scale(1.1);
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card.gallery-item .image-container {
    width: 100%;
    height: 100%;
}

#content .menu {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 25px;
}

.category {
    display: grid;

    grid-auto-flow: column;
    justify-content: center;

    gap: 10px;

    background-color: white;
    padding: 10px 0;
    border-radius: 10px;
}

.category button {
    padding: 4px 10px;

    background-color: rgb(232, 49, 49);

    font-size: 16px;
    color: white;

    border: 1px solid rgb(232, 49, 49);
    border-radius: 15px;
}

.selection {
    background-color: white;    
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;
}

.category button:hover {
    background-color: rgb(218, 36, 36);
    border-color: rgb(218, 36, 36);
}

.card.menu-item {
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card.menu-item .image-container {
    width: 100%;
    height: 100%;
}

.card.menu-item .copy {
    display: flex;
    justify-content: space-between;

    font-weight: 600;
}

.card.menu-item .heading {
    text-transform: capitalize;
}

.card.menu-item .description::before {
    content: "\$";
}

.contact-us-section .heading {
    font-weight: 600;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,uBAAuB;IACvB,4CAA+C;AACnD;;AAEA;IACI,mDAAmD;IACnD,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,uBAAuB;;IAEvB,eAAe;;IAEf,eAAe;IACf,mBAAmB;;IAEnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;;IAEhB,mBAAmB;;IAEnB,aAAa;IACb,+BAA+B;IAC/B,sBAAsB;;IAEtB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;;IAET,aAAa;IACb,SAAS;;IAET,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,2CAA2C;IAC3C,uBAAuB;AAC3B;;AAEA;;IAEI,UAAU;;IAEV,gBAAgB;;IAEhB,aAAa;IACb,+BAA+B;AACnC;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;;IAEI,gBAAgB;IAChB,kBAAkB;;IAElB,aAAa;IACb,0BAA0B;IAC1B,oBAAoB;IACpB,qBAAqB;;IAErB,SAAS;AACb;;AAEA;;;IAGI,eAAe;IACf,gBAAgB;AACpB;;AAEA;;;IAGI,eAAe;AACnB;;AAEA;IACI,0BAA0B;IAC1B,+BAA+B;AACnC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,iBAAiB;;IAEjB,kCAAkC;;IAElC,eAAe;IACf,YAAY;;IAEZ,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kCAAkC;IAClC,8BAA8B;AAClC;;;AAGA;;IAEI,aAAa;IACb,8CAA8C;IAC9C,qBAAqB;IACrB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;;IAEI,WAAW;IACX,YAAY;;IAEZ,aAAa;;IAEb,mBAAmB;AACvB;;AAEA;;IAEI,qBAAqB;IACrB,8DAA8D;AAClE;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,aAAa;;IAEb,sBAAsB;IACtB,uBAAuB;;IAEvB,SAAS;;IAET,uBAAuB;IACvB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,kCAAkC;;IAElC,eAAe;IACf,YAAY;;IAEZ,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,2CAA2C;AAC/C;;AAEA;IACI,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;;IAE9B,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,900;1,100;1,300;1,500&display=swap');\n\n@font-face {\n    font-family: \"Japanese\";\n    src: url(\"./fonts/electroharmonix.regular.otf\");\n}\n\nbody {\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\n    background-color: rgb(209, 209, 209);\n    height: 100vh;\n    display: grid;\n    grid-template-rows: auto 1fr;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.logo .brand-name,\nspan.brand-name {\n    font-family: \"Japanese\";\n\n    font-size: 35px;\n\n    padding: 0 10px;\n    border-radius: 10px;\n\n    background-color: black;\n    color: white;\n}\n\n.logo .brand-name:hover {\n    background-color: rgb(218, 36, 36);\n}\n\n.image-container {\n    width: 200px;\n    height: 200px;\n\n    overflow: hidden;\n    border-radius: 15px;\n}\n\n.image-container img {\n    width: 100%;\n    height: 100%;\n\n    object-fit: cover;\n}\n\n.dashboard {\n    padding: 15px 3%;\n\n    border-radius: 10px;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-auto-flow: column;\n\n    background-color: black;\n}\n\n.dashboard .tabs {\n    margin: 0;\n\n    display: flex;\n    gap: 15px;\n\n    align-items: center;\n    font-size: 17px;\n    color: white;\n}\n\n.tabs li.about-us {\n    margin-left: auto;\n}\n\n.dashboard .tabs li {\n    list-style: none;\n}\n\n\n#content {\n    display: grid;\n    gap: 60px;\n    padding: 3%;\n}\n\n.card {\n    padding: 3%;\n    border-radius: 10px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;\n    background-color: white;\n}\n\n.card.home,\n.card.about-us {\n    padding: 0;\n\n    overflow: hidden;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n.card.home .image-container,\n.card.about-us .image-container {\n    width: 600px;\n    height: 490px;\n    border-radius: 0;\n}\n\n.card.home .copy,\n.card.about-us .copy {\n    padding-left: 7%;\n    padding-right: 20%;\n\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: start;\n    align-content: center;\n\n    gap: 15px;\n}\n\n.card.home .heading,\n.card.about-us .heading,\n.card.contact-us .heading {\n    font-size: 40px;\n    font-weight: 600;\n}\n\n.card.home .description,\n.card.about-us .description, \n.card.contact-us .description {\n    font-size: 22px;\n}\n\n.card.home.hero-section {\n    grid-template-columns: 1fr;\n    grid-template-rows: 700px 200px;\n}\n\n.card.home.hero-section .copy {\n    padding: 0;\n    display: grid;\n    justify-items: center;\n}\n\n.card.home.hero-section .image-container {\n    width: 100%;\n    height: 100%;\n}\n\n\n.card button {\n    padding: 6px 13px;\n\n    background-color: rgb(232, 49, 49);\n\n    font-size: 20px;\n    color: white;\n\n    border: 1px solid rgb(232, 49, 49);\n    border-radius: 7px;\n}\n\n.card button:hover {\n    background-color: rgb(218, 36, 36);\n    border-color: rgb(218, 36, 36);\n}\n\n\n.gallery-container,\n.selection {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 250px);\n    grid-auto-rows: 250px;\n    gap: 50px;\n    justify-content: center;\n}\n\n.card.gallery-item,\n.card.menu-item {\n    width: 100%;\n    height: 100%;\n\n    padding: 10px;\n\n    border-radius: 15px;\n}\n\n.card.gallery-item:hover,\n.card.menu-item:hover {\n    transform: scale(1.1);\n    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n\n.card.gallery-item .image-container {\n    width: 100%;\n    height: 100%;\n}\n\n#content .menu {\n    display: grid;\n    grid-template-rows: auto 1fr;\n    gap: 25px;\n}\n\n.category {\n    display: grid;\n\n    grid-auto-flow: column;\n    justify-content: center;\n\n    gap: 10px;\n\n    background-color: white;\n    padding: 10px 0;\n    border-radius: 10px;\n}\n\n.category button {\n    padding: 4px 10px;\n\n    background-color: rgb(232, 49, 49);\n\n    font-size: 16px;\n    color: white;\n\n    border: 1px solid rgb(232, 49, 49);\n    border-radius: 15px;\n}\n\n.selection {\n    background-color: white;    \n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 5px;\n}\n\n.category button:hover {\n    background-color: rgb(218, 36, 36);\n    border-color: rgb(218, 36, 36);\n}\n\n.card.menu-item {\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.card.menu-item .image-container {\n    width: 100%;\n    height: 100%;\n}\n\n.card.menu-item .copy {\n    display: flex;\n    justify-content: space-between;\n\n    font-weight: 600;\n}\n\n.card.menu-item .heading {\n    text-transform: capitalize;\n}\n\n.card.menu-item .description::before {\n    content: \"$\";\n}\n\n.contact-us-section .heading {\n    font-weight: 600;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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

"use strict";


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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/images/about/crafting-culinary-magic.png":
/*!******************************************************!*\
  !*** ./src/images/about/crafting-culinary-magic.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about/crafting-culinary-magic.png");

/***/ }),

/***/ "./src/images/about/journey-of-delight.png":
/*!*************************************************!*\
  !*** ./src/images/about/journey-of-delight.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about/journey-of-delight.png");

/***/ }),

/***/ "./src/images/about/meet-the-team.png":
/*!********************************************!*\
  !*** ./src/images/about/meet-the-team.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about/meet-the-team.png");

/***/ }),

/***/ "./src/images/about/our-story.png":
/*!****************************************!*\
  !*** ./src/images/about/our-story.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about/our-story.png");

/***/ }),

/***/ "./src/images/about/values-and-future.png":
/*!************************************************!*\
  !*** ./src/images/about/values-and-future.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/about/values-and-future.png");

/***/ }),

/***/ "./src/images/gallery/dining_00.jpeg":
/*!*******************************************!*\
  !*** ./src/images/gallery/dining_00.jpeg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/dining_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/dining_01.jpeg":
/*!*******************************************!*\
  !*** ./src/images/gallery/dining_01.jpeg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/dining_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/dining_02.jpeg":
/*!*******************************************!*\
  !*** ./src/images/gallery/dining_02.jpeg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/dining_02.jpeg");

/***/ }),

/***/ "./src/images/gallery/dining_03.jpeg":
/*!*******************************************!*\
  !*** ./src/images/gallery/dining_03.jpeg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/dining_03.jpeg");

/***/ }),

/***/ "./src/images/gallery/exterior_00.jpeg":
/*!*********************************************!*\
  !*** ./src/images/gallery/exterior_00.jpeg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/exterior_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/exterior_01.jpeg":
/*!*********************************************!*\
  !*** ./src/images/gallery/exterior_01.jpeg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/exterior_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/interior_00.jpeg":
/*!*********************************************!*\
  !*** ./src/images/gallery/interior_00.jpeg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/interior_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/interior_01.jpeg":
/*!*********************************************!*\
  !*** ./src/images/gallery/interior_01.jpeg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/interior_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/kitchen.jpeg":
/*!*****************************************!*\
  !*** ./src/images/gallery/kitchen.jpeg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/kitchen.jpeg");

/***/ }),

/***/ "./src/images/gallery/kitchen_01.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/kitchen_01.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/kitchen_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/kitchen_02.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/kitchen_02.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/kitchen_02.jpeg");

/***/ }),

/***/ "./src/images/gallery/kitchen_03.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/kitchen_03.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/kitchen_03.jpeg");

/***/ }),

/***/ "./src/images/gallery/salad_00.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/salad_00.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/salad_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/sashimi_00.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/sashimi_00.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sashimi_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/sashimi_01.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/sashimi_01.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sashimi_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/service_00.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/service_00.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/service_00.jpeg");

/***/ }),

/***/ "./src/images/gallery/service_01.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/service_01.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/service_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/sushi_00.jpg":
/*!*****************************************!*\
  !*** ./src/images/gallery/sushi_00.jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_00.jpg");

/***/ }),

/***/ "./src/images/gallery/sushi_01.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/sushi_01.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_01.jpeg");

/***/ }),

/***/ "./src/images/gallery/sushi_02.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/sushi_02.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_02.jpeg");

/***/ }),

/***/ "./src/images/gallery/sushi_03.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/sushi_03.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_03.jpeg");

/***/ }),

/***/ "./src/images/gallery/sushi_04.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/sushi_04.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_04.jpeg");

/***/ }),

/***/ "./src/images/gallery/sushi_05.jpeg":
/*!******************************************!*\
  !*** ./src/images/gallery/sushi_05.jpeg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/sushi_05.jpeg");

/***/ }),

/***/ "./src/images/gallery/tempura_00.jpeg":
/*!********************************************!*\
  !*** ./src/images/gallery/tempura_00.jpeg ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/gallery/tempura_00.jpeg");

/***/ }),

/***/ "./src/images/home/dining-0.png":
/*!**************************************!*\
  !*** ./src/images/home/dining-0.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/dining-0.png");

/***/ }),

/***/ "./src/images/home/hero-0.png":
/*!************************************!*\
  !*** ./src/images/home/hero-0.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/hero-0.png");

/***/ }),

/***/ "./src/images/home/kitchen-0.png":
/*!***************************************!*\
  !*** ./src/images/home/kitchen-0.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/kitchen-0.png");

/***/ }),

/***/ "./src/images/home/ramen-0.png":
/*!*************************************!*\
  !*** ./src/images/home/ramen-0.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/ramen-0.png");

/***/ }),

/***/ "./src/images/home/sushi-0.png":
/*!*************************************!*\
  !*** ./src/images/home/sushi-0.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/sushi-0.png");

/***/ }),

/***/ "./src/images/home/tempura-0.png":
/*!***************************************!*\
  !*** ./src/images/home/tempura-0.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/home/tempura-0.png");

/***/ }),

/***/ "./src/images/menu/classics/onigiri_15.jpeg":
/*!**************************************************!*\
  !*** ./src/images/menu/classics/onigiri_15.jpeg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/classics/onigiri_15.jpeg");

/***/ }),

/***/ "./src/images/menu/classics/tempura_76.png":
/*!*************************************************!*\
  !*** ./src/images/menu/classics/tempura_76.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/classics/tempura_76.png");

/***/ }),

/***/ "./src/images/menu/classics/yakisoba_89.png":
/*!**************************************************!*\
  !*** ./src/images/menu/classics/yakisoba_89.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/classics/yakisoba_89.png");

/***/ }),

/***/ "./src/images/menu/desserts/dango_35.png":
/*!***********************************************!*\
  !*** ./src/images/menu/desserts/dango_35.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/desserts/dango_35.png");

/***/ }),

/***/ "./src/images/menu/desserts/dorayaki_65.png":
/*!**************************************************!*\
  !*** ./src/images/menu/desserts/dorayaki_65.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/desserts/dorayaki_65.png");

/***/ }),

/***/ "./src/images/menu/desserts/matcha cookies_45.png":
/*!********************************************************!*\
  !*** ./src/images/menu/desserts/matcha cookies_45.png ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/desserts/matcha cookies_45.png");

/***/ }),

/***/ "./src/images/menu/desserts/mochi ice cream_24.png":
/*!*********************************************************!*\
  !*** ./src/images/menu/desserts/mochi ice cream_24.png ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/desserts/mochi ice cream_24.png");

/***/ }),

/***/ "./src/images/menu/desserts/squash pie_55.png":
/*!****************************************************!*\
  !*** ./src/images/menu/desserts/squash pie_55.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/desserts/squash pie_55.png");

/***/ }),

/***/ "./src/images/menu/drinks/fruit juice_20.jpeg":
/*!****************************************************!*\
  !*** ./src/images/menu/drinks/fruit juice_20.jpeg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/drinks/fruit juice_20.jpeg");

/***/ }),

/***/ "./src/images/menu/drinks/lemon iced tea_10.png":
/*!******************************************************!*\
  !*** ./src/images/menu/drinks/lemon iced tea_10.png ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/drinks/lemon iced tea_10.png");

/***/ }),

/***/ "./src/images/menu/drinks/matcha latte_15.png":
/*!****************************************************!*\
  !*** ./src/images/menu/drinks/matcha latte_15.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/drinks/matcha latte_15.png");

/***/ }),

/***/ "./src/images/menu/ramen/beef ramen_65.png":
/*!*************************************************!*\
  !*** ./src/images/menu/ramen/beef ramen_65.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/ramen/beef ramen_65.png");

/***/ }),

/***/ "./src/images/menu/ramen/chicken ramen_59.png":
/*!****************************************************!*\
  !*** ./src/images/menu/ramen/chicken ramen_59.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/ramen/chicken ramen_59.png");

/***/ }),

/***/ "./src/images/menu/ramen/shoyu ramen_40.jpeg":
/*!***************************************************!*\
  !*** ./src/images/menu/ramen/shoyu ramen_40.jpeg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/ramen/shoyu ramen_40.jpeg");

/***/ }),

/***/ "./src/images/menu/ramen/spicy miso ramen_90.png":
/*!*******************************************************!*\
  !*** ./src/images/menu/ramen/spicy miso ramen_90.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/ramen/spicy miso ramen_90.png");

/***/ }),

/***/ "./src/images/menu/ramen/tonkotsu ramen_65.png":
/*!*****************************************************!*\
  !*** ./src/images/menu/ramen/tonkotsu ramen_65.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/ramen/tonkotsu ramen_65.png");

/***/ }),

/***/ "./src/images/menu/rolls/classic roll_50.png":
/*!***************************************************!*\
  !*** ./src/images/menu/rolls/classic roll_50.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/classic roll_50.png");

/***/ }),

/***/ "./src/images/menu/rolls/crab roll_96.png":
/*!************************************************!*\
  !*** ./src/images/menu/rolls/crab roll_96.png ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/crab roll_96.png");

/***/ }),

/***/ "./src/images/menu/rolls/cucumber roll_47.png":
/*!****************************************************!*\
  !*** ./src/images/menu/rolls/cucumber roll_47.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/cucumber roll_47.png");

/***/ }),

/***/ "./src/images/menu/rolls/omakase rolls deluxe_170.png":
/*!************************************************************!*\
  !*** ./src/images/menu/rolls/omakase rolls deluxe_170.png ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/omakase rolls deluxe_170.png");

/***/ }),

/***/ "./src/images/menu/rolls/philadephia roll_43.png":
/*!*******************************************************!*\
  !*** ./src/images/menu/rolls/philadephia roll_43.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/philadephia roll_43.png");

/***/ }),

/***/ "./src/images/menu/rolls/red caviar roll_300.png":
/*!*******************************************************!*\
  !*** ./src/images/menu/rolls/red caviar roll_300.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/red caviar roll_300.png");

/***/ }),

/***/ "./src/images/menu/rolls/shrimp roll_30.png":
/*!**************************************************!*\
  !*** ./src/images/menu/rolls/shrimp roll_30.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/rolls/shrimp roll_30.png");

/***/ }),

/***/ "./src/images/menu/salad/crab salad_90.png":
/*!*************************************************!*\
  !*** ./src/images/menu/salad/crab salad_90.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/salad/crab salad_90.png");

/***/ }),

/***/ "./src/images/menu/salad/cucumber salad_58.png":
/*!*****************************************************!*\
  !*** ./src/images/menu/salad/cucumber salad_58.png ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/salad/cucumber salad_58.png");

/***/ }),

/***/ "./src/images/menu/salad/salmon salad_49.png":
/*!***************************************************!*\
  !*** ./src/images/menu/salad/salmon salad_49.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/salad/salmon salad_49.png");

/***/ }),

/***/ "./src/images/menu/salad/seaweed salad_47.png":
/*!****************************************************!*\
  !*** ./src/images/menu/salad/seaweed salad_47.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/salad/seaweed salad_47.png");

/***/ }),

/***/ "./src/images/menu/salad/tuna salad_96.png":
/*!*************************************************!*\
  !*** ./src/images/menu/salad/tuna salad_96.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/salad/tuna salad_96.png");

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi/octopus_98.png":
/*!**********************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/octopus_98.png ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/sushi-and-sashimi/octopus_98.png");

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi/omakase sashimi deluxe_200.png":
/*!**************************************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/omakase sashimi deluxe_200.png ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/sushi-and-sashimi/omakase sashimi deluxe_200.png");

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi/salmon sashimi_57.png":
/*!*****************************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/salmon sashimi_57.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/sushi-and-sashimi/salmon sashimi_57.png");

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi/shrimp sashimi_59.png":
/*!*****************************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/shrimp sashimi_59.png ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/sushi-and-sashimi/shrimp sashimi_59.png");

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi/tuna sashimi_50.png":
/*!***************************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/tuna sashimi_50.png ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/menu/sushi-and-sashimi/tuna sashimi_50.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

"use strict";


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

"use strict";


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

"use strict";


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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

"use strict";


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

/***/ "./src/createCard.js":
/*!***************************!*\
  !*** ./src/createCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });

class Card {

    // Card contents
    constructor(cardClass, imagePath, heading, description , buttonCaption) {
        this.class = cardClass;
        this.imagePath = imagePath;
        this.heading = heading;
        this.description = description;
        this.buttonCaption = buttonCaption;
    }

    // Create card method based on card contents.
    create() {

        // Create main container.
        const card = document.createElement("div");

        // Add optional card class if user provided.
        if (this.class !== null) {
            card.className = `card ${this.class}`;
        }

        // Create card image inside 'card'
        if (this.imagePath !== null) {
            const imageContainer = document.createElement("div");
            imageContainer.classList.add("image-container");
            card.appendChild(imageContainer);

            const image = new Image();
            image.src = this.imagePath;
            imageContainer.appendChild(image);
        }
        
        // Create card-copy section inside 'card'.
        const copy = document.createElement("div");
        copy.classList.add("copy");
        card.appendChild(copy);

        // Create the heading inside 'card-copy'.
        if (this.heading !== null) {
            const heading = document.createElement("div");
            heading.classList.add("heading");
            heading.innerHTML = `${this.heading}`;
            copy.appendChild(heading);
        }

        // Create the subheading inside 'copy'.
        if (this.description !== null) {
            const description = document.createElement("div");
            description.classList.add("description");
            description.innerHTML = `${this.description}`;
            copy.appendChild(description);
        }

        // Create call to action button inside copy section.
        if (this.buttonCaption !== null){
            const button = document.createElement("button");
            button.classList.add("call-to-action");
            button.textContent = `${this.buttonCaption}`;
            copy.appendChild(button);
        }

        // Return card.
        return card;
    }
}


/***/ }),

/***/ "./src/deleteCurrentContent.js":
/*!*************************************!*\
  !*** ./src/deleteCurrentContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteCurrentContent: () => (/* binding */ deleteCurrentContent)
/* harmony export */ });
// Delete currently loaded  content inside 'parent' div.
function deleteCurrentContent(parent) {
   
    // Delete all content's children.
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

/***/ }),

/***/ "./src/handleImages.js":
/*!*****************************!*\
  !*** ./src/handleImages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   images: () => (/* binding */ images)
/* harmony export */ });
/**
 * Contains information (filename, dish name, dish price) about different images from various directories.
 * 
 * Each key in this object corresponds to a specific directory, and the value associated with each key
 * is an array of objects containing information about the images in that directory.
 * 
 * The structure of the "images" object is as follows:
 * ```
 * {
 *    classics: [
 *      { path: "./images/classics/pizza_15.jpg", dishName: "pizza", dishPrice: "Unavailable" },
 *      { path: "./images/classics/burger_12.jpg", dishName: "burger", dishPrice: 12.56 },
 *    ], // And so on...
 * }
 * ```
 */
const images = {
    // Fetch image details for the "classics" directory.
    classics: 
        __webpack_require__("./src/images/menu/classics sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/classics', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "desserts" directory.
    desserts: 
        __webpack_require__("./src/images/menu/desserts sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/desserts', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "drinks" directory.
    drinks: 
        __webpack_require__("./src/images/menu/drinks sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/drinks', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "ramen" directory.
    ramen: 
        __webpack_require__("./src/images/menu/ramen sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/ramen', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "rolls" directory.
    rolls: 
        __webpack_require__("./src/images/menu/rolls sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/rolls', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "sushi-and-sashimi" directory.
    sushiAndSashimi: 
        __webpack_require__("./src/images/menu/sushi-and-sashimi sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/sushi-and-sashimi', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "salad" directory.
    salad: 
        __webpack_require__("./src/images/menu/salad sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/menu/salad', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "gallery" directory.
    gallery: 
        __webpack_require__("./src/images/gallery sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/gallery', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "home" directory.
    home: 
        __webpack_require__("./src/images/home sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/home', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "about" directory.
    about: 
        __webpack_require__("./src/images/about sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/about', contextPath))
        .map(extractImageDetails),

    // Fetch image details for the "contact" directory.
    contact: 
        __webpack_require__("./src/images/contact sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$").keys()
        .map(contextPath => appendContextPathToMainPath('./images/contact', contextPath))
        .map(extractImageDetails),
};


/**
 * Appends a file name to a given path.
 * 
 * @param {string} mainPath - The base path.
 * @param {string} contextPath - The file name to be appended.
 * @returns {string} The concatenated path with the file name.
 * 
 * @example
 * const mainPath = './images/classics';
 * const contextPath = 'image.jpg';
 * const fullPath = appendFileNameToPath(mainPath, contextPath);
 * console.log(fullPath); // Output: './images/classics/image.jpg'
 */
function appendContextPathToMainPath(mainPath, contextPath) {
    return mainPath + contextPath.slice(1); // Remove dot from context path before combining with mainPath.
}


/**
 * Extracts dish name, dish price, and path from the image path.
 * 
 * @param {string} path - The full path of the image file.
 * @returns {Object} An object containing the extracted information: { path, dishName, dishPrice }.
 */
function extractImageDetails(path) {

    // Extract image file name from 'path'.
    const fileName = path.split("/").pop();

    // Extract image name from the 'path'.
    const noExtensionFileName = fileName.split('.')[0];

    // Split image name into an array containing name and price.
    const splittedImageName = noExtensionFileName.split('_');
    
    // Store dish price and name in individual variables.
    const dishName = splittedImageName[0];
    let dishPrice;

    // If price was not properly formatted in the image name, set it to "Unavailable".
    if ( splittedImageName.length === 1 || (`${parseFloat(splittedImageName[1])}`).length !== splittedImageName[1].length) {
        dishPrice = "Unavailable";
    }
    // If price was properly formatted convert price from string to float.
    else {
        dishPrice = parseFloat(splittedImageName[1]);
    }

    // Return an object containing the extracted information.
    return { path, dishName, dishPrice };
}

/***/ }),

/***/ "./src/images/about sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!******************************************************************!*\
  !*** ./src/images/about/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./crafting-culinary-magic.png": "./src/images/about/crafting-culinary-magic.png",
	"./journey-of-delight.png": "./src/images/about/journey-of-delight.png",
	"./meet-the-team.png": "./src/images/about/meet-the-team.png",
	"./our-story.png": "./src/images/about/our-story.png",
	"./values-and-future.png": "./src/images/about/values-and-future.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/about sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/contact sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!********************************************************************!*\
  !*** ./src/images/contact/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \********************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src/images/contact sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/images/gallery sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!********************************************************************!*\
  !*** ./src/images/gallery/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dining_00.jpeg": "./src/images/gallery/dining_00.jpeg",
	"./dining_01.jpeg": "./src/images/gallery/dining_01.jpeg",
	"./dining_02.jpeg": "./src/images/gallery/dining_02.jpeg",
	"./dining_03.jpeg": "./src/images/gallery/dining_03.jpeg",
	"./exterior_00.jpeg": "./src/images/gallery/exterior_00.jpeg",
	"./exterior_01.jpeg": "./src/images/gallery/exterior_01.jpeg",
	"./interior_00.jpeg": "./src/images/gallery/interior_00.jpeg",
	"./interior_01.jpeg": "./src/images/gallery/interior_01.jpeg",
	"./kitchen.jpeg": "./src/images/gallery/kitchen.jpeg",
	"./kitchen_01.jpeg": "./src/images/gallery/kitchen_01.jpeg",
	"./kitchen_02.jpeg": "./src/images/gallery/kitchen_02.jpeg",
	"./kitchen_03.jpeg": "./src/images/gallery/kitchen_03.jpeg",
	"./salad_00.jpeg": "./src/images/gallery/salad_00.jpeg",
	"./sashimi_00.jpeg": "./src/images/gallery/sashimi_00.jpeg",
	"./sashimi_01.jpeg": "./src/images/gallery/sashimi_01.jpeg",
	"./service_00.jpeg": "./src/images/gallery/service_00.jpeg",
	"./service_01.jpeg": "./src/images/gallery/service_01.jpeg",
	"./sushi_00.jpg": "./src/images/gallery/sushi_00.jpg",
	"./sushi_01.jpeg": "./src/images/gallery/sushi_01.jpeg",
	"./sushi_02.jpeg": "./src/images/gallery/sushi_02.jpeg",
	"./sushi_03.jpeg": "./src/images/gallery/sushi_03.jpeg",
	"./sushi_04.jpeg": "./src/images/gallery/sushi_04.jpeg",
	"./sushi_05.jpeg": "./src/images/gallery/sushi_05.jpeg",
	"./tempura_00.jpeg": "./src/images/gallery/tempura_00.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/gallery sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/home sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!*****************************************************************!*\
  !*** ./src/images/home/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dining-0.png": "./src/images/home/dining-0.png",
	"./hero-0.png": "./src/images/home/hero-0.png",
	"./kitchen-0.png": "./src/images/home/kitchen-0.png",
	"./ramen-0.png": "./src/images/home/ramen-0.png",
	"./sushi-0.png": "./src/images/home/sushi-0.png",
	"./tempura-0.png": "./src/images/home/tempura-0.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/home sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/classics sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!**************************************************************************!*\
  !*** ./src/images/menu/classics/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./onigiri_15.jpeg": "./src/images/menu/classics/onigiri_15.jpeg",
	"./tempura_76.png": "./src/images/menu/classics/tempura_76.png",
	"./yakisoba_89.png": "./src/images/menu/classics/yakisoba_89.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/classics sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/desserts sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!**************************************************************************!*\
  !*** ./src/images/menu/desserts/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dango_35.png": "./src/images/menu/desserts/dango_35.png",
	"./dorayaki_65.png": "./src/images/menu/desserts/dorayaki_65.png",
	"./matcha cookies_45.png": "./src/images/menu/desserts/matcha cookies_45.png",
	"./mochi ice cream_24.png": "./src/images/menu/desserts/mochi ice cream_24.png",
	"./squash pie_55.png": "./src/images/menu/desserts/squash pie_55.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/desserts sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/drinks sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!************************************************************************!*\
  !*** ./src/images/menu/drinks/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./fruit juice_20.jpeg": "./src/images/menu/drinks/fruit juice_20.jpeg",
	"./lemon iced tea_10.png": "./src/images/menu/drinks/lemon iced tea_10.png",
	"./matcha latte_15.png": "./src/images/menu/drinks/matcha latte_15.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/drinks sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/ramen sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!***********************************************************************!*\
  !*** ./src/images/menu/ramen/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./beef ramen_65.png": "./src/images/menu/ramen/beef ramen_65.png",
	"./chicken ramen_59.png": "./src/images/menu/ramen/chicken ramen_59.png",
	"./shoyu ramen_40.jpeg": "./src/images/menu/ramen/shoyu ramen_40.jpeg",
	"./spicy miso ramen_90.png": "./src/images/menu/ramen/spicy miso ramen_90.png",
	"./tonkotsu ramen_65.png": "./src/images/menu/ramen/tonkotsu ramen_65.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/ramen sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/rolls sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!***********************************************************************!*\
  !*** ./src/images/menu/rolls/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./classic roll_50.png": "./src/images/menu/rolls/classic roll_50.png",
	"./crab roll_96.png": "./src/images/menu/rolls/crab roll_96.png",
	"./cucumber roll_47.png": "./src/images/menu/rolls/cucumber roll_47.png",
	"./omakase rolls deluxe_170.png": "./src/images/menu/rolls/omakase rolls deluxe_170.png",
	"./philadephia roll_43.png": "./src/images/menu/rolls/philadephia roll_43.png",
	"./red caviar roll_300.png": "./src/images/menu/rolls/red caviar roll_300.png",
	"./shrimp roll_30.png": "./src/images/menu/rolls/shrimp roll_30.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/rolls sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/salad sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!***********************************************************************!*\
  !*** ./src/images/menu/salad/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./crab salad_90.png": "./src/images/menu/salad/crab salad_90.png",
	"./cucumber salad_58.png": "./src/images/menu/salad/cucumber salad_58.png",
	"./salmon salad_49.png": "./src/images/menu/salad/salmon salad_49.png",
	"./seaweed salad_47.png": "./src/images/menu/salad/seaweed salad_47.png",
	"./tuna salad_96.png": "./src/images/menu/salad/tuna salad_96.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/salad sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/images/menu/sushi-and-sashimi sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$":
/*!***********************************************************************************!*\
  !*** ./src/images/menu/sushi-and-sashimi/ sync \.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$ ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./octopus_98.png": "./src/images/menu/sushi-and-sashimi/octopus_98.png",
	"./omakase sashimi deluxe_200.png": "./src/images/menu/sushi-and-sashimi/omakase sashimi deluxe_200.png",
	"./salmon sashimi_57.png": "./src/images/menu/sushi-and-sashimi/salmon sashimi_57.png",
	"./shrimp sashimi_59.png": "./src/images/menu/sushi-and-sashimi/shrimp sashimi_59.png",
	"./tuna sashimi_50.png": "./src/images/menu/sushi-and-sashimi/tuna sashimi_50.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/menu/sushi-and-sashimi sync recursive \\.(jpg%7Cpng%7Csvg%7Cjpeg%7Cgif)$";

/***/ }),

/***/ "./src/renderAboutUs.js":
/*!******************************!*\
  !*** ./src/renderAboutUs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAboutUs: () => (/* binding */ renderAboutUs)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard.js */ "./src/createCard.js");




function renderAboutUs() {
    
    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(content);

    // Array to store all cards.
    let cards = [];

    // Create "Our Story" section.
    let ourStory = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "about-us",
        "./images/about/our-story.png",
        "Our Story",
        `Welcome to Jaizzer, an authentic Japanese culinary haven. Discover our journey from humble
         beginnings to becoming a revered destination for Japanese cuisine enthusiasts. Our commitment 
         to preserving tradition while embracing innovation defines our narrative.`,
        null
    );
    cards.push(ourStory);

    // Create "Crafting Culinary Magic" section.
    let culinaryMagic = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "about-us",
        "./images/about/crafting-culinary-magic.png",
        "Crafting Culinary Magic",
        `Immerse yourself in the realm of Japanese flavors and techniques that grace our menu. Each 
         dish at Jaizzer is an artistic masterpiece, reflecting our dedication to excellence and a 
         harmonious blend of tastes.`,
        "Explore Our Menu"
    );
    cards.push(culinaryMagic);

    // Create "Meet the Team" section.
    let meetTheTeam = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "about-us",
        "./images/about/meet-the-team.png",
        "Meet the Team",
        `Behind every remarkable dish at Jaizzer stands our team of passionate chefs. From our sushi 
         maestros to the creators of our comforting ramen, get to know the artisans who transform fresh 
         ingredients into culinary wonders.`,
        null
    );
    cards.push(meetTheTeam);

    // Create "Soulful Values, Sustainable Future" section.
    let valuesAndFuture = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "about-us",
        "./images/about/values-and-future.png",
        "Soulful Values, Sustainable Future",
        `At Jaizzer, we believe that every plate tells a story. Our commitment to authenticity and 
         sustainability is reflected in every aspect of our operation. Join us in embracing a mindful 
         dining experience that respects both tradition and nature.`,
        null
    );
    cards.push(valuesAndFuture);

    // Create "Journey of Delight" section.
    let journeyOfDelight = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "about-us",
        "./images/about/journey-of-delight.png",
        "Journey of Delight",
        `Over the years, Jaizzer has carved a path of culinary excellence. From accolades to cherished 
         moments, join us in celebrating the milestones that have shaped our identity and the memories 
         shared by our valued patrons.`,
        null
    );
    cards.push(journeyOfDelight);

    // Append all cards to the content div.
    cards.forEach((card) => {
        content.appendChild(card.create());
    });
}


/***/ }),

/***/ "./src/renderContactUs.js":
/*!********************************!*\
  !*** ./src/renderContactUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContactUs: () => (/* binding */ renderContactUs)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard.js */ "./src/createCard.js");



function renderContactUs() {

    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(content);

    // Create a single card to combine all sections.
    let combinedCard = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "contact-us",
        null,
        "Contact Us",
        `
        <p>
            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello,
            our team is ready to assist you. Reach out to us through the contact details below.
        </p>
        <p>
            Email: info@jaizzer.com <br><br> 
            Phone: +1 (123) 456-7890 <br><br> 
            Address: 123 Sushi Street, Tokyo, Japan
        </p>
        `,
        null
    );

    // Append the combined card to the content div.
    content.appendChild(combinedCard.create());
}


/***/ }),

/***/ "./src/renderGallery.js":
/*!******************************!*\
  !*** ./src/renderGallery.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGallery: () => (/* binding */ renderGallery)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _handleImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleImages.js */ "./src/handleImages.js");
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCard.js */ "./src/createCard.js");




/**
 * Render gallery images.
 */
function renderGallery() {

    // Delete current contents of "selection" container.
    const content = document.querySelector("#content");
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(content);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery-container")
    content.appendChild(gallery)
    
    // Create and append the cards containing dishes corresponding to "type".
    _handleImages_js__WEBPACK_IMPORTED_MODULE_1__.images["gallery"].forEach(element => {
        let dish = new _createCard_js__WEBPACK_IMPORTED_MODULE_2__.Card("gallery-item", element.path, null, null, null);
        gallery.appendChild(dish.create());
    });
}



/***/ }),

/***/ "./src/renderHome.js":
/*!***************************!*\
  !*** ./src/renderHome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCard.js */ "./src/createCard.js");



// Render Home Contents.
function renderHome() {

    // Get content div.
    const content = document.querySelector("#content");

    // Delete previous content.
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(content);

    // Array to store all cards.
    let cards = []

    // Create hero section.
    let heroSection = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home hero-section",
        "./images/home/hero-0.png",
        "Welcome to <span class='brand-name'>Jaizzer</span>",
        "Experience the essence of Japan at Jaizzer, where we serve authentic Japanese cuisine crafted with love and passion.",
        "Explore Our Menu"
    );
    cards.push(heroSection);

    // Create food teaser section (tease some of the best dishes). 
    let sushiTeaser = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home food-teaser",
        "./images/home/sushi-0.png",
        "Exquisite Sushi Delights",
        "Indulge in the freshest and most delectable sushi dishes prepared by our skilled sushi chefs.",
        "See Our Sushi Selection"
    );
    cards.push(sushiTeaser);

    // Create kitchen section (show how food is well prepared). 
    let kitchenSection = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home kitchen-section",
        "./images/home/kitchen-0.png",
        "Masterfully Prepared",
        "Our kitchen is where culinary artistry comes to life. Our expert chefs bring out the best flavors in each dish.",
        "Meet Our Chefs"
    );
    cards.push(kitchenSection);

    // Create food teaser section (tease some of the best dishes). 
    let ramenTeaser = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home food-teaser",
        "./images/home/ramen-0.png",
        "Hearty Ramen Selection",
        "Savor the rich flavors and comforting warmth of our authentic Japanese ramen bowls.",
        "Discover Our Ramen"
    );
    cards.push(ramenTeaser);

    // Create dining section (show how great the ambiance or feel of the actual place). 
    let diningSection = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home dining-section",
        "./images/home/dining-0.png",
        "A Cozy Dining Experience",
        "Immerse yourself in a cozy and inviting ambiance as you enjoy your culinary journey at Jaizzer.",
        "Reserve a Table"
    );
    cards.push(diningSection);

    // Create food teaser section (tease some of the best dishes). 
    let tempuraTeaser = new _createCard_js__WEBPACK_IMPORTED_MODULE_1__.Card(
        "home food-teaser",
        "./images/home/tempura-0.png",
        "Tempura Delicacies",
        "Treat yourself to the delightful crispiness of our traditional Japanese tempura dishes.",
        "Explore Our Tempura Selection"
    );
    cards.push(tempuraTeaser);

    // Append all cards to the content div.
    cards.forEach((card) => {
        content.appendChild(card.create());
    });
}

/***/ }),

/***/ "./src/renderMenu.js":
/*!***************************!*\
  !*** ./src/renderMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _showSelection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showSelection.js */ "./src/showSelection.js");




function renderMenu() {

    // Access content.
    const content = document.querySelector("#content");
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(content);

    // Create menu container.
    const menu = document.createElement("div");
    menu.classList.add("menu");
    content.appendChild(menu);

    // Create food category buttons container.
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("category");
    menu.appendChild(buttonContainer);

    // Create item selection container.
    const itemSelection = document.createElement('div');
    itemSelection.classList.add("selection");
    menu.appendChild(itemSelection);

    // Render dish category buttons that shows corresponding selections when clicked.
    const foodCategories = ["classics", "desserts", "drinks", "ramen", "rolls", "sushiAndSashimi", "salad"];
    foodCategories.forEach(foodCategory => {

        // Create button.
        let button = document.createElement("button");
        // Add special case for 'sushiAndSashimi'.
        button.textContent = (foodCategory === "sushiAndSashimi") ? "sushi and sashimi" : `${foodCategory}`;

        // Load correesponding dishes base on type/category when clicked.
        button.addEventListener("click", () => (0,_showSelection_js__WEBPACK_IMPORTED_MODULE_1__.showSelection)(`${foodCategory}`));

        // Append button to the container.
        buttonContainer.appendChild(button);
    })

    // Render classic caregory page as default.
    ;(0,_showSelection_js__WEBPACK_IMPORTED_MODULE_1__.showSelection)("classics");
}

/***/ }),

/***/ "./src/showSelection.js":
/*!******************************!*\
  !*** ./src/showSelection.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showSelection: () => (/* binding */ showSelection)
/* harmony export */ });
/* harmony import */ var _deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCurrentContent.js */ "./src/deleteCurrentContent.js");
/* harmony import */ var _handleImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleImages.js */ "./src/handleImages.js");
/* harmony import */ var _createCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCard.js */ "./src/createCard.js");




/**
 * Loads new cards containing dishes of the specified food "type" inside "selection" div.
 * 
 * Example: showSelection("ramen") will replace currently loaded dishes with ramen dishes in "selection" div.
 * 
 * @param {("classics"|"desserts"|"drinks"|"ramen"|"rolls"|"sushiAndSashimi"|"salad")} type - The type of food to be rendered. Must be one of the specified strings.
 */
function showSelection(type) {

    // Delete current contents of "selection" container.
    const selection = document.querySelector(".selection");
    (0,_deleteCurrentContent_js__WEBPACK_IMPORTED_MODULE_0__.deleteCurrentContent)(selection);
    
    // Create and append the cards containing dishes corresponding to "type".
    _handleImages_js__WEBPACK_IMPORTED_MODULE_1__.images[`${type}`].forEach(element => {
        let dish = new _createCard_js__WEBPACK_IMPORTED_MODULE_2__.Card("menu-item", element.path, element.dishName, element.dishPrice, null);
        selection.appendChild(dish.create());
    });
}



/***/ }),

/***/ "./src/fonts/electroharmonix.regular.otf":
/*!***********************************************!*\
  !*** ./src/fonts/electroharmonix.regular.otf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6de63f6921228372c25b.otf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderAboutUs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderAboutUs.js */ "./src/renderAboutUs.js");
/* harmony import */ var _renderContactUs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderContactUs.js */ "./src/renderContactUs.js");
/* harmony import */ var _renderGallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGallery.js */ "./src/renderGallery.js");
/* harmony import */ var _renderHome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderHome.js */ "./src/renderHome.js");
/* harmony import */ var _renderMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderMenu.js */ "./src/renderMenu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








// Load home by defualt.
window.addEventListener("load", _renderHome_js__WEBPACK_IMPORTED_MODULE_3__.renderHome);

// Make Logo clickable.
const logo = document.querySelector(".logo");
logo.addEventListener("click", _renderHome_js__WEBPACK_IMPORTED_MODULE_3__.renderHome);

// Make home page link access home-page content when clicked.
const home = document.querySelector(".home");
home.addEventListener("click", _renderHome_js__WEBPACK_IMPORTED_MODULE_3__.renderHome);

const menu = document.querySelector(".menu");
menu.addEventListener("click", _renderMenu_js__WEBPACK_IMPORTED_MODULE_4__.renderMenu)

const aboutUs = document.querySelector(".about-us");
aboutUs.addEventListener("click", _renderAboutUs_js__WEBPACK_IMPORTED_MODULE_0__.renderAboutUs)

const contact = document.querySelector(".contact");
contact.addEventListener("click", _renderContactUs_js__WEBPACK_IMPORTED_MODULE_1__.renderContactUs)

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", _renderGallery_js__WEBPACK_IMPORTED_MODULE_2__.renderGallery)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3hLLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sYUFBYSxZQUFZLFVBQVUsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxNQUFNLE9BQU8sVUFBVSxZ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QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUSxrREFBa0QsMkJBQTJCO0FBQ2xHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxpQ0FBaUM7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOzs7Ozs7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJpRTtBQUMxQjs7O0FBR2hDO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FB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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUQ7QUFDSTtBQUNKO0FBQ047QUFDQTtBQUN4Qjs7O0FBR3JCO0FBQ0EsZ0NBQWdDLHNEQUFVOztBQUUxQztBQUNBO0FBQ0EsK0JBQStCLHNEQUFVOztBQUV6QztBQUNBO0FBQ0EsK0JBQStCLHNEQUFVOztBQUV6QztBQUNBLCtCQUErQixzREFBVTs7QUFFekM7QUFDQSxrQ0FBa0MsNERBQWE7O0FBRS9DO0FBQ0Esa0NBQWtDLGdFQUFlOztBQUVqRDtBQUNBLGtDQUFrQyw0REFBYSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2Fib3V0L2NyYWZ0aW5nLWN1bGluYXJ5LW1hZ2ljLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9hYm91dC9qb3VybmV5LW9mLWRlbGlnaHQucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2Fib3V0L21lZXQtdGhlLXRlYW0ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2Fib3V0L291ci1zdG9yeS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvYWJvdXQvdmFsdWVzLWFuZC1mdXR1cmUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAwLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS9kaW5pbmdfMDEuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L2RpbmluZ18wMi5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAzLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS9leHRlcmlvcl8wMC5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvZXh0ZXJpb3JfMDEuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L2ludGVyaW9yXzAwLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS9pbnRlcmlvcl8wMS5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbi5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbl8wMS5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbl8wMi5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbl8wMy5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc2FsYWRfMDAuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3Nhc2hpbWlfMDAuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3Nhc2hpbWlfMDEuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3NlcnZpY2VfMDAuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3NlcnZpY2VfMDEuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3N1c2hpXzAwLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3N1c2hpXzAxLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS9zdXNoaV8wMi5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDMuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9nYWxsZXJ5L3N1c2hpXzA0LmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS9zdXNoaV8wNS5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2dhbGxlcnkvdGVtcHVyYV8wMC5qcGVnIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2hvbWUvZGluaW5nLTAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2hvbWUvaGVyby0wLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9ob21lL2tpdGNoZW4tMC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvaG9tZS9yYW1lbi0wLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9ob21lL3N1c2hpLTAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2hvbWUvdGVtcHVyYS0wLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L2NsYXNzaWNzL29uaWdpcmlfMTUuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L2NsYXNzaWNzL3RlbXB1cmFfNzYucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvY2xhc3NpY3MveWFraXNvYmFfODkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvZGFuZ29fMzUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvZG9yYXlha2lfNjUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvbWF0Y2hhIGNvb2tpZXNfNDUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvbW9jaGkgaWNlIGNyZWFtXzI0LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L2Rlc3NlcnRzL3NxdWFzaCBwaWVfNTUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZHJpbmtzL2ZydWl0IGp1aWNlXzIwLmpwZWciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9kcmlua3MvbGVtb24gaWNlZCB0ZWFfMTAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZHJpbmtzL21hdGNoYSBsYXR0ZV8xNS5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9yYW1lbi9iZWVmIHJhbWVuXzY1LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3JhbWVuL2NoaWNrZW4gcmFtZW5fNTkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvcmFtZW4vc2hveXUgcmFtZW5fNDAuanBlZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3JhbWVuL3NwaWN5IG1pc28gcmFtZW5fOTAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvcmFtZW4vdG9ua290c3UgcmFtZW5fNjUucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMvY2xhc3NpYyByb2xsXzUwLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL2NyYWIgcm9sbF85Ni5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9yb2xscy9jdWN1bWJlciByb2xsXzQ3LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL29tYWthc2Ugcm9sbHMgZGVsdXhlXzE3MC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9yb2xscy9waGlsYWRlcGhpYSByb2xsXzQzLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL3JlZCBjYXZpYXIgcm9sbF8zMDAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMvc2hyaW1wIHJvbGxfMzAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQvY3JhYiBzYWxhZF85MC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9zYWxhZC9jdWN1bWJlciBzYWxhZF81OC5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9zYWxhZC9zYWxtb24gc2FsYWRfNDkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQvc2Vhd2VlZCBzYWxhZF80Ny5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9zYWxhZC90dW5hIHNhbGFkXzk2LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3N1c2hpLWFuZC1zYXNoaW1pL29jdG9wdXNfOTgucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvb21ha2FzZSBzYXNoaW1pIGRlbHV4ZV8yMDAucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvc2FsbW9uIHNhc2hpbWlfNTcucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvc2hyaW1wIHNhc2hpbWlfNTkucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvdHVuYSBzYXNoaW1pXzUwLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jcmVhdGVDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZGVsZXRlQ3VycmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oYW5kbGVJbWFnZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvYWJvdXQvIHN5bmMgXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9jb250YWN0LyBzeW5jIFxcLihqcGclN0NwbmclN0NzdmclN0NqcGVnJTdDZ2lmKSQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvZ2FsbGVyeS8gc3luYyBcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL2hvbWUvIHN5bmMgXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L2NsYXNzaWNzLyBzeW5jIFxcLihqcGclN0NwbmclN0NzdmclN0NqcGVnJTdDZ2lmKSQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9kZXNzZXJ0cy8gc3luYyBcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvZHJpbmtzLyBzeW5jIFxcLihqcGclN0NwbmclN0NzdmclN0NqcGVnJTdDZ2lmKSQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9yYW1lbi8gc3luYyBcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMvIHN5bmMgXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ltYWdlcy9tZW51L3NhbGFkLyBzeW5jIFxcLihqcGclN0NwbmclN0NzdmclN0NqcGVnJTdDZ2lmKSQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS8gc3luYyBcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVuZGVyQWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3JlbmRlckNvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3JlbmRlckdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9yZW5kZXJIb21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVuZGVyTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Nob3dTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2VsZWN0cm9oYXJtb25peC5yZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJKYXBhbmVzZVwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA5LCAyMDkpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xufVxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubG9nbyAuYnJhbmQtbmFtZSxcbnNwYW4uYnJhbmQtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiSmFwYW5lc2VcIjtcblxuICAgIGZvbnQtc2l6ZTogMzVweDtcblxuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nbyAuYnJhbmQtbmFtZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMzYsIDM2KTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmRhc2hib2FyZCB7XG4gICAgcGFkZGluZzogMTVweCAzJTtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGFzaGJvYXJkIC50YWJzIHtcbiAgICBtYXJnaW46IDA7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhYnMgbGkuYWJvdXQtdXMge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZGFzaGJvYXJkIC50YWJzIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogNjBweDtcbiAgICBwYWRkaW5nOiAzJTtcbn1cblxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggM3B4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQuaG9tZSxcbi5jYXJkLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbn1cblxuLmNhcmQuaG9tZSAuaW1hZ2UtY29udGFpbmVyLFxuLmNhcmQuYWJvdXQtdXMgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogNDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLmNhcmQuaG9tZSAuY29weSxcbi5jYXJkLmFib3V0LXVzIC5jb3B5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuXG4gICAgZ2FwOiAxNXB4O1xufVxuXG4uY2FyZC5ob21lIC5oZWFkaW5nLFxuLmNhcmQuYWJvdXQtdXMgLmhlYWRpbmcsXG4uY2FyZC5jb250YWN0LXVzIC5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQuaG9tZSAuZGVzY3JpcHRpb24sXG4uY2FyZC5hYm91dC11cyAuZGVzY3JpcHRpb24sIFxuLmNhcmQuY29udGFjdC11cyAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmNhcmQuaG9tZS5oZXJvLXNlY3Rpb24ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzAwcHggMjAwcHg7XG59XG5cbi5jYXJkLmhvbWUuaGVyby1zZWN0aW9uIC5jb3B5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC5ob21lLmhlcm8tc2VjdGlvbiAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmNhcmQgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA2cHggMTNweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDQ5LCA0OSk7XG5cbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiwgNDksIDQ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5jYXJkIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMzYsIDM2KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTgsIDM2LCAzNik7XG59XG5cblxuLmdhbGxlcnktY29udGFpbmVyLFxuLnNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMjUwcHgpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcbiAgICBnYXA6IDUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLmdhbGxlcnktaXRlbSxcbi5jYXJkLm1lbnUtaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5jYXJkLmdhbGxlcnktaXRlbTpob3Zlcixcbi5jYXJkLm1lbnUtaXRlbTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuXG4uY2FyZC5nYWxsZXJ5LWl0ZW0gLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jY29udGVudCAubWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGdhcDogMjVweDtcbn1cblxuLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGdhcDogMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2F0ZWdvcnkgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDQ5LCA0OSk7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMiwgNDksIDQ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA1cHg7XG59XG5cbi5jYXRlZ29yeSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDM2LCAzNik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAzNiwgMzYpO1xufVxuXG4uY2FyZC5tZW51LWl0ZW0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uY2FyZC5tZW51LWl0ZW0gLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC5tZW51LWl0ZW0gLmNvcHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNhcmQubWVudS1pdGVtIC5oZWFkaW5nIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhcmQubWVudS1pdGVtIC5kZXNjcmlwdGlvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlxcJFwiO1xufVxuXG4uY29udGFjdC11cy1zZWN0aW9uIC5oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLHVCQUF1Qjs7SUFFdkIsZUFBZTs7SUFFZixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTs7SUFFWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7O0lBRWhCLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixzQkFBc0I7O0lBRXRCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7O0lBRVQsYUFBYTtJQUNiLFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFVBQVU7O0lBRVYsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLHFCQUFxQjs7SUFFckIsU0FBUztBQUNiOztBQUVBOzs7SUFHSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBOzs7SUFHSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksaUJBQWlCOztJQUVqQixrQ0FBa0M7O0lBRWxDLGVBQWU7SUFDZixZQUFZOztJQUVaLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsOENBQThDO0lBQzlDLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZOztJQUVaLGFBQWE7O0lBRWIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQiw4REFBOEQ7QUFDbEU7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixzQkFBc0I7SUFDdEIsdUJBQXVCOztJQUV2QixTQUFTOztJQUVULHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCOztJQUVqQixrQ0FBa0M7O0lBRWxDLGVBQWU7SUFDZixZQUFZOztJQUVaLGtDQUFrQztJQUNsQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7SUFFOUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIkphcGFuZXNlXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4vZm9udHMvZWxlY3Ryb2hhcm1vbml4LnJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwOSwgMjA5KTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5sb2dvIC5icmFuZC1uYW1lLFxcbnNwYW4uYnJhbmQtbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSmFwYW5lc2VcXFwiO1xcblxcbiAgICBmb250LXNpemU6IDM1cHg7XFxuXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxvZ28gLmJyYW5kLW5hbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAzNiwgMzYpO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gICAgcGFkZGluZzogMTVweCAzJTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5kYXNoYm9hcmQgLnRhYnMge1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50YWJzIGxpLmFib3V0LXVzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5kYXNoYm9hcmQgLnRhYnMgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogNjBweDtcXG4gICAgcGFkZGluZzogMyU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcGFkZGluZzogMyU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FyZC5ob21lLFxcbi5jYXJkLmFib3V0LXVzIHtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuLmNhcmQuaG9tZSAuaW1hZ2UtY29udGFpbmVyLFxcbi5jYXJkLmFib3V0LXVzIC5pbWFnZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcblxcbi5jYXJkLmhvbWUgLmNvcHksXFxuLmNhcmQuYWJvdXQtdXMgLmNvcHkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDclO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcblxcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5jYXJkLmhvbWUgLmhlYWRpbmcsXFxuLmNhcmQuYWJvdXQtdXMgLmhlYWRpbmcsXFxuLmNhcmQuY29udGFjdC11cyAuaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNhcmQuaG9tZSAuZGVzY3JpcHRpb24sXFxuLmNhcmQuYWJvdXQtdXMgLmRlc2NyaXB0aW9uLCBcXG4uY2FyZC5jb250YWN0LXVzIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmNhcmQuaG9tZS5oZXJvLXNlY3Rpb24ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MDBweCAyMDBweDtcXG59XFxuXFxuLmNhcmQuaG9tZS5oZXJvLXNlY3Rpb24gLmNvcHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLmhvbWUuaGVyby1zZWN0aW9uIC5pbWFnZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4uY2FyZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA2cHggMTNweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMiwgNDksIDQ5KTtcXG5cXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzIsIDQ5LCA0OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMzYsIDM2KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAzNiwgMzYpO1xcbn1cXG5cXG5cXG4uZ2FsbGVyeS1jb250YWluZXIsXFxuLnNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNTBweCk7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmQuZ2FsbGVyeS1pdGVtLFxcbi5jYXJkLm1lbnUtaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbi5jYXJkLmdhbGxlcnktaXRlbTpob3ZlcixcXG4uY2FyZC5tZW51LWl0ZW06aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xcbn1cXG5cXG4uY2FyZC5nYWxsZXJ5LWl0ZW0gLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IC5tZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzIsIDQ5LCA0OSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMyLCA0OSwgNDkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggNXB4O1xcbn1cXG5cXG4uY2F0ZWdvcnkgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMzYsIDM2KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAzNiwgMzYpO1xcbn1cXG5cXG4uY2FyZC5tZW51LWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5jYXJkLm1lbnUtaXRlbSAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmNhcmQubWVudS1pdGVtIC5jb3B5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY2FyZC5tZW51LWl0ZW0gLmhlYWRpbmcge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLmNhcmQubWVudS1pdGVtIC5kZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiRcXFwiO1xcbn1cXG5cXG4uY29udGFjdC11cy1zZWN0aW9uIC5oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hYm91dC9jcmFmdGluZy1jdWxpbmFyeS1tYWdpYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Fib3V0L2pvdXJuZXktb2YtZGVsaWdodC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2Fib3V0L21lZXQtdGhlLXRlYW0ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hYm91dC9vdXItc3RvcnkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hYm91dC92YWx1ZXMtYW5kLWZ1dHVyZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAwLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAxLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAyLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvZGluaW5nXzAzLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvZXh0ZXJpb3JfMDAuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9leHRlcmlvcl8wMS5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nYWxsZXJ5L2ludGVyaW9yXzAwLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvaW50ZXJpb3JfMDEuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9raXRjaGVuLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbl8wMS5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nYWxsZXJ5L2tpdGNoZW5fMDIuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9raXRjaGVuXzAzLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvc2FsYWRfMDAuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9zYXNoaW1pXzAwLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvc2FzaGltaV8wMS5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nYWxsZXJ5L3NlcnZpY2VfMDAuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9zZXJ2aWNlXzAxLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nYWxsZXJ5L3N1c2hpXzAxLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDIuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS9zdXNoaV8wMy5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9nYWxsZXJ5L3N1c2hpXzA0LmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDUuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZ2FsbGVyeS90ZW1wdXJhXzAwLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2hvbWUvZGluaW5nLTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9ob21lL2hlcm8tMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2hvbWUva2l0Y2hlbi0wLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS9yYW1lbi0wLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS9zdXNoaS0wLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvaG9tZS90ZW1wdXJhLTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L2NsYXNzaWNzL29uaWdpcmlfMTUuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9jbGFzc2ljcy90ZW1wdXJhXzc2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9jbGFzc2ljcy95YWtpc29iYV84OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvZGVzc2VydHMvZGFuZ29fMzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L2Rlc3NlcnRzL2RvcmF5YWtpXzY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9kZXNzZXJ0cy9tYXRjaGEgY29va2llc180NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvZGVzc2VydHMvbW9jaGkgaWNlIGNyZWFtXzI0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9kZXNzZXJ0cy9zcXVhc2ggcGllXzU1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9kcmlua3MvZnJ1aXQganVpY2VfMjAuanBlZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9kcmlua3MvbGVtb24gaWNlZCB0ZWFfMTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L2RyaW5rcy9tYXRjaGEgbGF0dGVfMTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JhbWVuL2JlZWYgcmFtZW5fNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JhbWVuL2NoaWNrZW4gcmFtZW5fNTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JhbWVuL3Nob3l1IHJhbWVuXzQwLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvcmFtZW4vc3BpY3kgbWlzbyByYW1lbl85MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvcmFtZW4vdG9ua290c3UgcmFtZW5fNjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JvbGxzL2NsYXNzaWMgcm9sbF81MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvcm9sbHMvY3JhYiByb2xsXzk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9yb2xscy9jdWN1bWJlciByb2xsXzQ3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9yb2xscy9vbWFrYXNlIHJvbGxzIGRlbHV4ZV8xNzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JvbGxzL3BoaWxhZGVwaGlhIHJvbGxfNDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JvbGxzL3JlZCBjYXZpYXIgcm9sbF8zMDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3JvbGxzL3NocmltcCByb2xsXzMwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zYWxhZC9jcmFiIHNhbGFkXzkwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zYWxhZC9jdWN1bWJlciBzYWxhZF81OC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvc2FsYWQvc2FsbW9uIHNhbGFkXzQ5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zYWxhZC9zZWF3ZWVkIHNhbGFkXzQ3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zYWxhZC90dW5hIHNhbGFkXzk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS9vY3RvcHVzXzk4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS9vbWFrYXNlIHNhc2hpbWkgZGVsdXhlXzIwMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvc2FsbW9uIHNhc2hpbWlfNTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9tZW51L3N1c2hpLWFuZC1zYXNoaW1pL3NocmltcCBzYXNoaW1pXzU5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS90dW5hIHNhc2hpbWlfNTAucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBjbGFzcyBDYXJkIHtcblxuICAgIC8vIENhcmQgY29udGVudHNcbiAgICBjb25zdHJ1Y3RvcihjYXJkQ2xhc3MsIGltYWdlUGF0aCwgaGVhZGluZywgZGVzY3JpcHRpb24gLCBidXR0b25DYXB0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xhc3MgPSBjYXJkQ2xhc3M7XG4gICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gaW1hZ2VQYXRoO1xuICAgICAgICB0aGlzLmhlYWRpbmcgPSBoZWFkaW5nO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYnV0dG9uQ2FwdGlvbiA9IGJ1dHRvbkNhcHRpb247XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGNhcmQgbWV0aG9kIGJhc2VkIG9uIGNhcmQgY29udGVudHMuXG4gICAgY3JlYXRlKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lci5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gQWRkIG9wdGlvbmFsIGNhcmQgY2xhc3MgaWYgdXNlciBwcm92aWRlZC5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NOYW1lID0gYGNhcmQgJHt0aGlzLmNsYXNzfWA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgY2FyZCBpbWFnZSBpbnNpZGUgJ2NhcmQnXG4gICAgICAgIGlmICh0aGlzLmltYWdlUGF0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5pbWFnZVBhdGg7XG4gICAgICAgICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBjYXJkLWNvcHkgc2VjdGlvbiBpbnNpZGUgJ2NhcmQnLlxuICAgICAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjb3B5KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGhlYWRpbmcgaW5zaWRlICdjYXJkLWNvcHknLlxuICAgICAgICBpZiAodGhpcy5oZWFkaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IGAke3RoaXMuaGVhZGluZ31gO1xuICAgICAgICAgICAgY29weS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc3ViaGVhZGluZyBpbnNpZGUgJ2NvcHknLlxuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYCR7dGhpcy5kZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgY29weS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgY2FsbCB0byBhY3Rpb24gYnV0dG9uIGluc2lkZSBjb3B5IHNlY3Rpb24uXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbkNhcHRpb24gIT09IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FsbC10by1hY3Rpb25cIik7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHt0aGlzLmJ1dHRvbkNhcHRpb259YDtcbiAgICAgICAgICAgIGNvcHkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBjYXJkLlxuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICB9XG59XG4iLCIvLyBEZWxldGUgY3VycmVudGx5IGxvYWRlZCAgY29udGVudCBpbnNpZGUgJ3BhcmVudCcgZGl2LlxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUN1cnJlbnRDb250ZW50KHBhcmVudCkge1xuICAgXG4gICAgLy8gRGVsZXRlIGFsbCBjb250ZW50J3MgY2hpbGRyZW4uXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbn0iLCIvKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIChmaWxlbmFtZSwgZGlzaCBuYW1lLCBkaXNoIHByaWNlKSBhYm91dCBkaWZmZXJlbnQgaW1hZ2VzIGZyb20gdmFyaW91cyBkaXJlY3Rvcmllcy5cbiAqIFxuICogRWFjaCBrZXkgaW4gdGhpcyBvYmplY3QgY29ycmVzcG9uZHMgdG8gYSBzcGVjaWZpYyBkaXJlY3RvcnksIGFuZCB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGVhY2gga2V5XG4gKiBpcyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGltYWdlcyBpbiB0aGF0IGRpcmVjdG9yeS5cbiAqIFxuICogVGhlIHN0cnVjdHVyZSBvZiB0aGUgXCJpbWFnZXNcIiBvYmplY3QgaXMgYXMgZm9sbG93czpcbiAqIGBgYFxuICoge1xuICogICAgY2xhc3NpY3M6IFtcbiAqICAgICAgeyBwYXRoOiBcIi4vaW1hZ2VzL2NsYXNzaWNzL3BpenphXzE1LmpwZ1wiLCBkaXNoTmFtZTogXCJwaXp6YVwiLCBkaXNoUHJpY2U6IFwiVW5hdmFpbGFibGVcIiB9LFxuICogICAgICB7IHBhdGg6IFwiLi9pbWFnZXMvY2xhc3NpY3MvYnVyZ2VyXzEyLmpwZ1wiLCBkaXNoTmFtZTogXCJidXJnZXJcIiwgZGlzaFByaWNlOiAxMi41NiB9LFxuICogICAgXSwgLy8gQW5kIHNvIG9uLi4uXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGltYWdlcyA9IHtcbiAgICAvLyBGZXRjaCBpbWFnZSBkZXRhaWxzIGZvciB0aGUgXCJjbGFzc2ljc1wiIGRpcmVjdG9yeS5cbiAgICBjbGFzc2ljczogXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvbWVudS9jbGFzc2ljcycsIHRydWUsIC9cXC4oanBnfHBuZ3xzdmd8anBlZ3xnaWYpJC8pLmtleXMoKVxuICAgICAgICAubWFwKGNvbnRleHRQYXRoID0+IGFwcGVuZENvbnRleHRQYXRoVG9NYWluUGF0aCgnLi9pbWFnZXMvbWVudS9jbGFzc2ljcycsIGNvbnRleHRQYXRoKSlcbiAgICAgICAgLm1hcChleHRyYWN0SW1hZ2VEZXRhaWxzKSxcblxuICAgIC8vIEZldGNoIGltYWdlIGRldGFpbHMgZm9yIHRoZSBcImRlc3NlcnRzXCIgZGlyZWN0b3J5LlxuICAgIGRlc3NlcnRzOiBcbiAgICAgICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9tZW51L2Rlc3NlcnRzJywgdHJ1ZSwgL1xcLihqcGd8cG5nfHN2Z3xqcGVnfGdpZikkLykua2V5cygpXG4gICAgICAgIC5tYXAoY29udGV4dFBhdGggPT4gYXBwZW5kQ29udGV4dFBhdGhUb01haW5QYXRoKCcuL2ltYWdlcy9tZW51L2Rlc3NlcnRzJywgY29udGV4dFBhdGgpKVxuICAgICAgICAubWFwKGV4dHJhY3RJbWFnZURldGFpbHMpLFxuXG4gICAgLy8gRmV0Y2ggaW1hZ2UgZGV0YWlscyBmb3IgdGhlIFwiZHJpbmtzXCIgZGlyZWN0b3J5LlxuICAgIGRyaW5rczogXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvbWVudS9kcmlua3MnLCB0cnVlLCAvXFwuKGpwZ3xwbmd8c3ZnfGpwZWd8Z2lmKSQvKS5rZXlzKClcbiAgICAgICAgLm1hcChjb250ZXh0UGF0aCA9PiBhcHBlbmRDb250ZXh0UGF0aFRvTWFpblBhdGgoJy4vaW1hZ2VzL21lbnUvZHJpbmtzJywgY29udGV4dFBhdGgpKVxuICAgICAgICAubWFwKGV4dHJhY3RJbWFnZURldGFpbHMpLFxuXG4gICAgLy8gRmV0Y2ggaW1hZ2UgZGV0YWlscyBmb3IgdGhlIFwicmFtZW5cIiBkaXJlY3RvcnkuXG4gICAgcmFtZW46IFxuICAgICAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL21lbnUvcmFtZW4nLCB0cnVlLCAvXFwuKGpwZ3xwbmd8c3ZnfGpwZWd8Z2lmKSQvKS5rZXlzKClcbiAgICAgICAgLm1hcChjb250ZXh0UGF0aCA9PiBhcHBlbmRDb250ZXh0UGF0aFRvTWFpblBhdGgoJy4vaW1hZ2VzL21lbnUvcmFtZW4nLCBjb250ZXh0UGF0aCkpXG4gICAgICAgIC5tYXAoZXh0cmFjdEltYWdlRGV0YWlscyksXG5cbiAgICAvLyBGZXRjaCBpbWFnZSBkZXRhaWxzIGZvciB0aGUgXCJyb2xsc1wiIGRpcmVjdG9yeS5cbiAgICByb2xsczogXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvbWVudS9yb2xscycsIHRydWUsIC9cXC4oanBnfHBuZ3xzdmd8anBlZ3xnaWYpJC8pLmtleXMoKVxuICAgICAgICAubWFwKGNvbnRleHRQYXRoID0+IGFwcGVuZENvbnRleHRQYXRoVG9NYWluUGF0aCgnLi9pbWFnZXMvbWVudS9yb2xscycsIGNvbnRleHRQYXRoKSlcbiAgICAgICAgLm1hcChleHRyYWN0SW1hZ2VEZXRhaWxzKSxcblxuICAgIC8vIEZldGNoIGltYWdlIGRldGFpbHMgZm9yIHRoZSBcInN1c2hpLWFuZC1zYXNoaW1pXCIgZGlyZWN0b3J5LlxuICAgIHN1c2hpQW5kU2FzaGltaTogXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaScsIHRydWUsIC9cXC4oanBnfHBuZ3xzdmd8anBlZ3xnaWYpJC8pLmtleXMoKVxuICAgICAgICAubWFwKGNvbnRleHRQYXRoID0+IGFwcGVuZENvbnRleHRQYXRoVG9NYWluUGF0aCgnLi9pbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaScsIGNvbnRleHRQYXRoKSlcbiAgICAgICAgLm1hcChleHRyYWN0SW1hZ2VEZXRhaWxzKSxcblxuICAgIC8vIEZldGNoIGltYWdlIGRldGFpbHMgZm9yIHRoZSBcInNhbGFkXCIgZGlyZWN0b3J5LlxuICAgIHNhbGFkOiBcbiAgICAgICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9tZW51L3NhbGFkJywgdHJ1ZSwgL1xcLihqcGd8cG5nfHN2Z3xqcGVnfGdpZikkLykua2V5cygpXG4gICAgICAgIC5tYXAoY29udGV4dFBhdGggPT4gYXBwZW5kQ29udGV4dFBhdGhUb01haW5QYXRoKCcuL2ltYWdlcy9tZW51L3NhbGFkJywgY29udGV4dFBhdGgpKVxuICAgICAgICAubWFwKGV4dHJhY3RJbWFnZURldGFpbHMpLFxuXG4gICAgLy8gRmV0Y2ggaW1hZ2UgZGV0YWlscyBmb3IgdGhlIFwiZ2FsbGVyeVwiIGRpcmVjdG9yeS5cbiAgICBnYWxsZXJ5OiBcbiAgICAgICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9nYWxsZXJ5JywgdHJ1ZSwgL1xcLihqcGd8cG5nfHN2Z3xqcGVnfGdpZikkLykua2V5cygpXG4gICAgICAgIC5tYXAoY29udGV4dFBhdGggPT4gYXBwZW5kQ29udGV4dFBhdGhUb01haW5QYXRoKCcuL2ltYWdlcy9nYWxsZXJ5JywgY29udGV4dFBhdGgpKVxuICAgICAgICAubWFwKGV4dHJhY3RJbWFnZURldGFpbHMpLFxuXG4gICAgLy8gRmV0Y2ggaW1hZ2UgZGV0YWlscyBmb3IgdGhlIFwiaG9tZVwiIGRpcmVjdG9yeS5cbiAgICBob21lOiBcbiAgICAgICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9ob21lJywgdHJ1ZSwgL1xcLihqcGd8cG5nfHN2Z3xqcGVnfGdpZikkLykua2V5cygpXG4gICAgICAgIC5tYXAoY29udGV4dFBhdGggPT4gYXBwZW5kQ29udGV4dFBhdGhUb01haW5QYXRoKCcuL2ltYWdlcy9ob21lJywgY29udGV4dFBhdGgpKVxuICAgICAgICAubWFwKGV4dHJhY3RJbWFnZURldGFpbHMpLFxuXG4gICAgLy8gRmV0Y2ggaW1hZ2UgZGV0YWlscyBmb3IgdGhlIFwiYWJvdXRcIiBkaXJlY3RvcnkuXG4gICAgYWJvdXQ6IFxuICAgICAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2Fib3V0JywgdHJ1ZSwgL1xcLihqcGd8cG5nfHN2Z3xqcGVnfGdpZikkLykua2V5cygpXG4gICAgICAgIC5tYXAoY29udGV4dFBhdGggPT4gYXBwZW5kQ29udGV4dFBhdGhUb01haW5QYXRoKCcuL2ltYWdlcy9hYm91dCcsIGNvbnRleHRQYXRoKSlcbiAgICAgICAgLm1hcChleHRyYWN0SW1hZ2VEZXRhaWxzKSxcblxuICAgIC8vIEZldGNoIGltYWdlIGRldGFpbHMgZm9yIHRoZSBcImNvbnRhY3RcIiBkaXJlY3RvcnkuXG4gICAgY29udGFjdDogXG4gICAgICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvY29udGFjdCcsIHRydWUsIC9cXC4oanBnfHBuZ3xzdmd8anBlZ3xnaWYpJC8pLmtleXMoKVxuICAgICAgICAubWFwKGNvbnRleHRQYXRoID0+IGFwcGVuZENvbnRleHRQYXRoVG9NYWluUGF0aCgnLi9pbWFnZXMvY29udGFjdCcsIGNvbnRleHRQYXRoKSlcbiAgICAgICAgLm1hcChleHRyYWN0SW1hZ2VEZXRhaWxzKSxcbn07XG5cblxuLyoqXG4gKiBBcHBlbmRzIGEgZmlsZSBuYW1lIHRvIGEgZ2l2ZW4gcGF0aC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG1haW5QYXRoIC0gVGhlIGJhc2UgcGF0aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZXh0UGF0aCAtIFRoZSBmaWxlIG5hbWUgdG8gYmUgYXBwZW5kZWQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29uY2F0ZW5hdGVkIHBhdGggd2l0aCB0aGUgZmlsZSBuYW1lLlxuICogXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbWFpblBhdGggPSAnLi9pbWFnZXMvY2xhc3NpY3MnO1xuICogY29uc3QgY29udGV4dFBhdGggPSAnaW1hZ2UuanBnJztcbiAqIGNvbnN0IGZ1bGxQYXRoID0gYXBwZW5kRmlsZU5hbWVUb1BhdGgobWFpblBhdGgsIGNvbnRleHRQYXRoKTtcbiAqIGNvbnNvbGUubG9nKGZ1bGxQYXRoKTsgLy8gT3V0cHV0OiAnLi9pbWFnZXMvY2xhc3NpY3MvaW1hZ2UuanBnJ1xuICovXG5mdW5jdGlvbiBhcHBlbmRDb250ZXh0UGF0aFRvTWFpblBhdGgobWFpblBhdGgsIGNvbnRleHRQYXRoKSB7XG4gICAgcmV0dXJuIG1haW5QYXRoICsgY29udGV4dFBhdGguc2xpY2UoMSk7IC8vIFJlbW92ZSBkb3QgZnJvbSBjb250ZXh0IHBhdGggYmVmb3JlIGNvbWJpbmluZyB3aXRoIG1haW5QYXRoLlxufVxuXG5cbi8qKlxuICogRXh0cmFjdHMgZGlzaCBuYW1lLCBkaXNoIHByaWNlLCBhbmQgcGF0aCBmcm9tIHRoZSBpbWFnZSBwYXRoLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIFRoZSBmdWxsIHBhdGggb2YgdGhlIGltYWdlIGZpbGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZXh0cmFjdGVkIGluZm9ybWF0aW9uOiB7IHBhdGgsIGRpc2hOYW1lLCBkaXNoUHJpY2UgfS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEltYWdlRGV0YWlscyhwYXRoKSB7XG5cbiAgICAvLyBFeHRyYWN0IGltYWdlIGZpbGUgbmFtZSBmcm9tICdwYXRoJy5cbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguc3BsaXQoXCIvXCIpLnBvcCgpO1xuXG4gICAgLy8gRXh0cmFjdCBpbWFnZSBuYW1lIGZyb20gdGhlICdwYXRoJy5cbiAgICBjb25zdCBub0V4dGVuc2lvbkZpbGVOYW1lID0gZmlsZU5hbWUuc3BsaXQoJy4nKVswXTtcblxuICAgIC8vIFNwbGl0IGltYWdlIG5hbWUgaW50byBhbiBhcnJheSBjb250YWluaW5nIG5hbWUgYW5kIHByaWNlLlxuICAgIGNvbnN0IHNwbGl0dGVkSW1hZ2VOYW1lID0gbm9FeHRlbnNpb25GaWxlTmFtZS5zcGxpdCgnXycpO1xuICAgIFxuICAgIC8vIFN0b3JlIGRpc2ggcHJpY2UgYW5kIG5hbWUgaW4gaW5kaXZpZHVhbCB2YXJpYWJsZXMuXG4gICAgY29uc3QgZGlzaE5hbWUgPSBzcGxpdHRlZEltYWdlTmFtZVswXTtcbiAgICBsZXQgZGlzaFByaWNlO1xuXG4gICAgLy8gSWYgcHJpY2Ugd2FzIG5vdCBwcm9wZXJseSBmb3JtYXR0ZWQgaW4gdGhlIGltYWdlIG5hbWUsIHNldCBpdCB0byBcIlVuYXZhaWxhYmxlXCIuXG4gICAgaWYgKCBzcGxpdHRlZEltYWdlTmFtZS5sZW5ndGggPT09IDEgfHwgKGAke3BhcnNlRmxvYXQoc3BsaXR0ZWRJbWFnZU5hbWVbMV0pfWApLmxlbmd0aCAhPT0gc3BsaXR0ZWRJbWFnZU5hbWVbMV0ubGVuZ3RoKSB7XG4gICAgICAgIGRpc2hQcmljZSA9IFwiVW5hdmFpbGFibGVcIjtcbiAgICB9XG4gICAgLy8gSWYgcHJpY2Ugd2FzIHByb3Blcmx5IGZvcm1hdHRlZCBjb252ZXJ0IHByaWNlIGZyb20gc3RyaW5nIHRvIGZsb2F0LlxuICAgIGVsc2Uge1xuICAgICAgICBkaXNoUHJpY2UgPSBwYXJzZUZsb2F0KHNwbGl0dGVkSW1hZ2VOYW1lWzFdKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAgICByZXR1cm4geyBwYXRoLCBkaXNoTmFtZSwgZGlzaFByaWNlIH07XG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2NyYWZ0aW5nLWN1bGluYXJ5LW1hZ2ljLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hYm91dC9jcmFmdGluZy1jdWxpbmFyeS1tYWdpYy5wbmdcIixcblx0XCIuL2pvdXJuZXktb2YtZGVsaWdodC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYWJvdXQvam91cm5leS1vZi1kZWxpZ2h0LnBuZ1wiLFxuXHRcIi4vbWVldC10aGUtdGVhbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYWJvdXQvbWVldC10aGUtdGVhbS5wbmdcIixcblx0XCIuL291ci1zdG9yeS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYWJvdXQvb3VyLXN0b3J5LnBuZ1wiLFxuXHRcIi4vdmFsdWVzLWFuZC1mdXR1cmUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2Fib3V0L3ZhbHVlcy1hbmQtZnV0dXJlLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvYWJvdXQgc3luYyByZWN1cnNpdmUgXFxcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9jb250YWN0IHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsInZhciBtYXAgPSB7XG5cdFwiLi9kaW5pbmdfMDAuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2RpbmluZ18wMC5qcGVnXCIsXG5cdFwiLi9kaW5pbmdfMDEuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2RpbmluZ18wMS5qcGVnXCIsXG5cdFwiLi9kaW5pbmdfMDIuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2RpbmluZ18wMi5qcGVnXCIsXG5cdFwiLi9kaW5pbmdfMDMuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2RpbmluZ18wMy5qcGVnXCIsXG5cdFwiLi9leHRlcmlvcl8wMC5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvZXh0ZXJpb3JfMDAuanBlZ1wiLFxuXHRcIi4vZXh0ZXJpb3JfMDEuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2V4dGVyaW9yXzAxLmpwZWdcIixcblx0XCIuL2ludGVyaW9yXzAwLmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9pbnRlcmlvcl8wMC5qcGVnXCIsXG5cdFwiLi9pbnRlcmlvcl8wMS5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvaW50ZXJpb3JfMDEuanBlZ1wiLFxuXHRcIi4va2l0Y2hlbi5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbi5qcGVnXCIsXG5cdFwiLi9raXRjaGVuXzAxLmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9raXRjaGVuXzAxLmpwZWdcIixcblx0XCIuL2tpdGNoZW5fMDIuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L2tpdGNoZW5fMDIuanBlZ1wiLFxuXHRcIi4va2l0Y2hlbl8wMy5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkva2l0Y2hlbl8wMy5qcGVnXCIsXG5cdFwiLi9zYWxhZF8wMC5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc2FsYWRfMDAuanBlZ1wiLFxuXHRcIi4vc2FzaGltaV8wMC5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc2FzaGltaV8wMC5qcGVnXCIsXG5cdFwiLi9zYXNoaW1pXzAxLmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9zYXNoaW1pXzAxLmpwZWdcIixcblx0XCIuL3NlcnZpY2VfMDAuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L3NlcnZpY2VfMDAuanBlZ1wiLFxuXHRcIi4vc2VydmljZV8wMS5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc2VydmljZV8wMS5qcGVnXCIsXG5cdFwiLi9zdXNoaV8wMC5qcGdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9zdXNoaV8wMC5qcGdcIixcblx0XCIuL3N1c2hpXzAxLmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9zdXNoaV8wMS5qcGVnXCIsXG5cdFwiLi9zdXNoaV8wMi5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDIuanBlZ1wiLFxuXHRcIi4vc3VzaGlfMDMuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5L3N1c2hpXzAzLmpwZWdcIixcblx0XCIuL3N1c2hpXzA0LmpwZWdcIjogXCIuL3NyYy9pbWFnZXMvZ2FsbGVyeS9zdXNoaV8wNC5qcGVnXCIsXG5cdFwiLi9zdXNoaV8wNS5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvc3VzaGlfMDUuanBlZ1wiLFxuXHRcIi4vdGVtcHVyYV8wMC5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL2dhbGxlcnkvdGVtcHVyYV8wMC5qcGVnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9nYWxsZXJ5IHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kaW5pbmctMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvaG9tZS9kaW5pbmctMC5wbmdcIixcblx0XCIuL2hlcm8tMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvaG9tZS9oZXJvLTAucG5nXCIsXG5cdFwiLi9raXRjaGVuLTAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2hvbWUva2l0Y2hlbi0wLnBuZ1wiLFxuXHRcIi4vcmFtZW4tMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvaG9tZS9yYW1lbi0wLnBuZ1wiLFxuXHRcIi4vc3VzaGktMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvaG9tZS9zdXNoaS0wLnBuZ1wiLFxuXHRcIi4vdGVtcHVyYS0wLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9ob21lL3RlbXB1cmEtMC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2hvbWUgc3luYyByZWN1cnNpdmUgXFxcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL29uaWdpcmlfMTUuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2NsYXNzaWNzL29uaWdpcmlfMTUuanBlZ1wiLFxuXHRcIi4vdGVtcHVyYV83Ni5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9jbGFzc2ljcy90ZW1wdXJhXzc2LnBuZ1wiLFxuXHRcIi4veWFraXNvYmFfODkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvY2xhc3NpY3MveWFraXNvYmFfODkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51L2NsYXNzaWNzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9kYW5nb18zNS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9kZXNzZXJ0cy9kYW5nb18zNS5wbmdcIixcblx0XCIuL2RvcmF5YWtpXzY1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2Rlc3NlcnRzL2RvcmF5YWtpXzY1LnBuZ1wiLFxuXHRcIi4vbWF0Y2hhIGNvb2tpZXNfNDUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvbWF0Y2hhIGNvb2tpZXNfNDUucG5nXCIsXG5cdFwiLi9tb2NoaSBpY2UgY3JlYW1fMjQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvZGVzc2VydHMvbW9jaGkgaWNlIGNyZWFtXzI0LnBuZ1wiLFxuXHRcIi4vc3F1YXNoIHBpZV81NS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9kZXNzZXJ0cy9zcXVhc2ggcGllXzU1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvbWVudS9kZXNzZXJ0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihqcGclN0NwbmclN0NzdmclN0NqcGVnJTdDZ2lmKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZnJ1aXQganVpY2VfMjAuanBlZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L2RyaW5rcy9mcnVpdCBqdWljZV8yMC5qcGVnXCIsXG5cdFwiLi9sZW1vbiBpY2VkIHRlYV8xMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9kcmlua3MvbGVtb24gaWNlZCB0ZWFfMTAucG5nXCIsXG5cdFwiLi9tYXRjaGEgbGF0dGVfMTUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvZHJpbmtzL21hdGNoYSBsYXR0ZV8xNS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL21lbnUvZHJpbmtzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iZWVmIHJhbWVuXzY1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JhbWVuL2JlZWYgcmFtZW5fNjUucG5nXCIsXG5cdFwiLi9jaGlja2VuIHJhbWVuXzU5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JhbWVuL2NoaWNrZW4gcmFtZW5fNTkucG5nXCIsXG5cdFwiLi9zaG95dSByYW1lbl80MC5qcGVnXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvcmFtZW4vc2hveXUgcmFtZW5fNDAuanBlZ1wiLFxuXHRcIi4vc3BpY3kgbWlzbyByYW1lbl85MC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9yYW1lbi9zcGljeSBtaXNvIHJhbWVuXzkwLnBuZ1wiLFxuXHRcIi4vdG9ua290c3UgcmFtZW5fNjUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvcmFtZW4vdG9ua290c3UgcmFtZW5fNjUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51L3JhbWVuIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGFzc2ljIHJvbGxfNTAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMvY2xhc3NpYyByb2xsXzUwLnBuZ1wiLFxuXHRcIi4vY3JhYiByb2xsXzk2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL2NyYWIgcm9sbF85Ni5wbmdcIixcblx0XCIuL2N1Y3VtYmVyIHJvbGxfNDcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMvY3VjdW1iZXIgcm9sbF80Ny5wbmdcIixcblx0XCIuL29tYWthc2Ugcm9sbHMgZGVsdXhlXzE3MC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9yb2xscy9vbWFrYXNlIHJvbGxzIGRlbHV4ZV8xNzAucG5nXCIsXG5cdFwiLi9waGlsYWRlcGhpYSByb2xsXzQzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL3BoaWxhZGVwaGlhIHJvbGxfNDMucG5nXCIsXG5cdFwiLi9yZWQgY2F2aWFyIHJvbGxfMzAwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3JvbGxzL3JlZCBjYXZpYXIgcm9sbF8zMDAucG5nXCIsXG5cdFwiLi9zaHJpbXAgcm9sbF8zMC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9yb2xscy9zaHJpbXAgcm9sbF8zMC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL21lbnUvcm9sbHMgc3luYyByZWN1cnNpdmUgXFxcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2NyYWIgc2FsYWRfOTAucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQvY3JhYiBzYWxhZF85MC5wbmdcIixcblx0XCIuL2N1Y3VtYmVyIHNhbGFkXzU4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3NhbGFkL2N1Y3VtYmVyIHNhbGFkXzU4LnBuZ1wiLFxuXHRcIi4vc2FsbW9uIHNhbGFkXzQ5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3NhbGFkL3NhbG1vbiBzYWxhZF80OS5wbmdcIixcblx0XCIuL3NlYXdlZWQgc2FsYWRfNDcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQvc2Vhd2VlZCBzYWxhZF80Ny5wbmdcIixcblx0XCIuL3R1bmEgc2FsYWRfOTYucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQvdHVuYSBzYWxhZF85Ni5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL21lbnUvc2FsYWQgc3luYyByZWN1cnNpdmUgXFxcXC4oanBnJTdDcG5nJTdDc3ZnJTdDanBlZyU3Q2dpZikkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL29jdG9wdXNfOTgucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvb2N0b3B1c185OC5wbmdcIixcblx0XCIuL29tYWthc2Ugc2FzaGltaSBkZWx1eGVfMjAwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9tZW51L3N1c2hpLWFuZC1zYXNoaW1pL29tYWthc2Ugc2FzaGltaSBkZWx1eGVfMjAwLnBuZ1wiLFxuXHRcIi4vc2FsbW9uIHNhc2hpbWlfNTcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL21lbnUvc3VzaGktYW5kLXNhc2hpbWkvc2FsbW9uIHNhc2hpbWlfNTcucG5nXCIsXG5cdFwiLi9zaHJpbXAgc2FzaGltaV81OS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS9zaHJpbXAgc2FzaGltaV81OS5wbmdcIixcblx0XCIuL3R1bmEgc2FzaGltaV81MC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvbWVudS9zdXNoaS1hbmQtc2FzaGltaS90dW5hIHNhc2hpbWlfNTAucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9tZW51L3N1c2hpLWFuZC1zYXNoaW1pIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGpwZyU3Q3BuZyU3Q3N2ZyU3Q2pwZWclN0NnaWYpJFwiOyIsImltcG9ydCB7IGRlbGV0ZUN1cnJlbnRDb250ZW50IH0gZnJvbSBcIi4vZGVsZXRlQ3VycmVudENvbnRlbnQuanNcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkLmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFib3V0VXMoKSB7XG4gICAgXG4gICAgLy8gR2V0IGNvbnRlbnQgZGl2LlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICAvLyBEZWxldGUgcHJldmlvdXMgY29udGVudC5cbiAgICBkZWxldGVDdXJyZW50Q29udGVudChjb250ZW50KTtcblxuICAgIC8vIEFycmF5IHRvIHN0b3JlIGFsbCBjYXJkcy5cbiAgICBsZXQgY2FyZHMgPSBbXTtcblxuICAgIC8vIENyZWF0ZSBcIk91ciBTdG9yeVwiIHNlY3Rpb24uXG4gICAgbGV0IG91clN0b3J5ID0gbmV3IENhcmQoXG4gICAgICAgIFwiYWJvdXQtdXNcIixcbiAgICAgICAgXCIuL2ltYWdlcy9hYm91dC9vdXItc3RvcnkucG5nXCIsXG4gICAgICAgIFwiT3VyIFN0b3J5XCIsXG4gICAgICAgIGBXZWxjb21lIHRvIEphaXp6ZXIsIGFuIGF1dGhlbnRpYyBKYXBhbmVzZSBjdWxpbmFyeSBoYXZlbi4gRGlzY292ZXIgb3VyIGpvdXJuZXkgZnJvbSBodW1ibGVcbiAgICAgICAgIGJlZ2lubmluZ3MgdG8gYmVjb21pbmcgYSByZXZlcmVkIGRlc3RpbmF0aW9uIGZvciBKYXBhbmVzZSBjdWlzaW5lIGVudGh1c2lhc3RzLiBPdXIgY29tbWl0bWVudCBcbiAgICAgICAgIHRvIHByZXNlcnZpbmcgdHJhZGl0aW9uIHdoaWxlIGVtYnJhY2luZyBpbm5vdmF0aW9uIGRlZmluZXMgb3VyIG5hcnJhdGl2ZS5gLFxuICAgICAgICBudWxsXG4gICAgKTtcbiAgICBjYXJkcy5wdXNoKG91clN0b3J5KTtcblxuICAgIC8vIENyZWF0ZSBcIkNyYWZ0aW5nIEN1bGluYXJ5IE1hZ2ljXCIgc2VjdGlvbi5cbiAgICBsZXQgY3VsaW5hcnlNYWdpYyA9IG5ldyBDYXJkKFxuICAgICAgICBcImFib3V0LXVzXCIsXG4gICAgICAgIFwiLi9pbWFnZXMvYWJvdXQvY3JhZnRpbmctY3VsaW5hcnktbWFnaWMucG5nXCIsXG4gICAgICAgIFwiQ3JhZnRpbmcgQ3VsaW5hcnkgTWFnaWNcIixcbiAgICAgICAgYEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIHJlYWxtIG9mIEphcGFuZXNlIGZsYXZvcnMgYW5kIHRlY2huaXF1ZXMgdGhhdCBncmFjZSBvdXIgbWVudS4gRWFjaCBcbiAgICAgICAgIGRpc2ggYXQgSmFpenplciBpcyBhbiBhcnRpc3RpYyBtYXN0ZXJwaWVjZSwgcmVmbGVjdGluZyBvdXIgZGVkaWNhdGlvbiB0byBleGNlbGxlbmNlIGFuZCBhIFxuICAgICAgICAgaGFybW9uaW91cyBibGVuZCBvZiB0YXN0ZXMuYCxcbiAgICAgICAgXCJFeHBsb3JlIE91ciBNZW51XCJcbiAgICApO1xuICAgIGNhcmRzLnB1c2goY3VsaW5hcnlNYWdpYyk7XG5cbiAgICAvLyBDcmVhdGUgXCJNZWV0IHRoZSBUZWFtXCIgc2VjdGlvbi5cbiAgICBsZXQgbWVldFRoZVRlYW0gPSBuZXcgQ2FyZChcbiAgICAgICAgXCJhYm91dC11c1wiLFxuICAgICAgICBcIi4vaW1hZ2VzL2Fib3V0L21lZXQtdGhlLXRlYW0ucG5nXCIsXG4gICAgICAgIFwiTWVldCB0aGUgVGVhbVwiLFxuICAgICAgICBgQmVoaW5kIGV2ZXJ5IHJlbWFya2FibGUgZGlzaCBhdCBKYWl6emVyIHN0YW5kcyBvdXIgdGVhbSBvZiBwYXNzaW9uYXRlIGNoZWZzLiBGcm9tIG91ciBzdXNoaSBcbiAgICAgICAgIG1hZXN0cm9zIHRvIHRoZSBjcmVhdG9ycyBvZiBvdXIgY29tZm9ydGluZyByYW1lbiwgZ2V0IHRvIGtub3cgdGhlIGFydGlzYW5zIHdobyB0cmFuc2Zvcm0gZnJlc2ggXG4gICAgICAgICBpbmdyZWRpZW50cyBpbnRvIGN1bGluYXJ5IHdvbmRlcnMuYCxcbiAgICAgICAgbnVsbFxuICAgICk7XG4gICAgY2FyZHMucHVzaChtZWV0VGhlVGVhbSk7XG5cbiAgICAvLyBDcmVhdGUgXCJTb3VsZnVsIFZhbHVlcywgU3VzdGFpbmFibGUgRnV0dXJlXCIgc2VjdGlvbi5cbiAgICBsZXQgdmFsdWVzQW5kRnV0dXJlID0gbmV3IENhcmQoXG4gICAgICAgIFwiYWJvdXQtdXNcIixcbiAgICAgICAgXCIuL2ltYWdlcy9hYm91dC92YWx1ZXMtYW5kLWZ1dHVyZS5wbmdcIixcbiAgICAgICAgXCJTb3VsZnVsIFZhbHVlcywgU3VzdGFpbmFibGUgRnV0dXJlXCIsXG4gICAgICAgIGBBdCBKYWl6emVyLCB3ZSBiZWxpZXZlIHRoYXQgZXZlcnkgcGxhdGUgdGVsbHMgYSBzdG9yeS4gT3VyIGNvbW1pdG1lbnQgdG8gYXV0aGVudGljaXR5IGFuZCBcbiAgICAgICAgIHN1c3RhaW5hYmlsaXR5IGlzIHJlZmxlY3RlZCBpbiBldmVyeSBhc3BlY3Qgb2Ygb3VyIG9wZXJhdGlvbi4gSm9pbiB1cyBpbiBlbWJyYWNpbmcgYSBtaW5kZnVsIFxuICAgICAgICAgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCByZXNwZWN0cyBib3RoIHRyYWRpdGlvbiBhbmQgbmF0dXJlLmAsXG4gICAgICAgIG51bGxcbiAgICApO1xuICAgIGNhcmRzLnB1c2godmFsdWVzQW5kRnV0dXJlKTtcblxuICAgIC8vIENyZWF0ZSBcIkpvdXJuZXkgb2YgRGVsaWdodFwiIHNlY3Rpb24uXG4gICAgbGV0IGpvdXJuZXlPZkRlbGlnaHQgPSBuZXcgQ2FyZChcbiAgICAgICAgXCJhYm91dC11c1wiLFxuICAgICAgICBcIi4vaW1hZ2VzL2Fib3V0L2pvdXJuZXktb2YtZGVsaWdodC5wbmdcIixcbiAgICAgICAgXCJKb3VybmV5IG9mIERlbGlnaHRcIixcbiAgICAgICAgYE92ZXIgdGhlIHllYXJzLCBKYWl6emVyIGhhcyBjYXJ2ZWQgYSBwYXRoIG9mIGN1bGluYXJ5IGV4Y2VsbGVuY2UuIEZyb20gYWNjb2xhZGVzIHRvIGNoZXJpc2hlZCBcbiAgICAgICAgIG1vbWVudHMsIGpvaW4gdXMgaW4gY2VsZWJyYXRpbmcgdGhlIG1pbGVzdG9uZXMgdGhhdCBoYXZlIHNoYXBlZCBvdXIgaWRlbnRpdHkgYW5kIHRoZSBtZW1vcmllcyBcbiAgICAgICAgIHNoYXJlZCBieSBvdXIgdmFsdWVkIHBhdHJvbnMuYCxcbiAgICAgICAgbnVsbFxuICAgICk7XG4gICAgY2FyZHMucHVzaChqb3VybmV5T2ZEZWxpZ2h0KTtcblxuICAgIC8vIEFwcGVuZCBhbGwgY2FyZHMgdG8gdGhlIGNvbnRlbnQgZGl2LlxuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjYXJkLmNyZWF0ZSgpKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZUN1cnJlbnRDb250ZW50IH0gZnJvbSBcIi4vZGVsZXRlQ3VycmVudENvbnRlbnQuanNcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWN0VXMoKSB7XG5cbiAgICAvLyBHZXQgY29udGVudCBkaXYuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAgIC8vIERlbGV0ZSBwcmV2aW91cyBjb250ZW50LlxuICAgIGRlbGV0ZUN1cnJlbnRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgLy8gQ3JlYXRlIGEgc2luZ2xlIGNhcmQgdG8gY29tYmluZSBhbGwgc2VjdGlvbnMuXG4gICAgbGV0IGNvbWJpbmVkQ2FyZCA9IG5ldyBDYXJkKFxuICAgICAgICBcImNvbnRhY3QtdXNcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCJDb250YWN0IFVzXCIsXG4gICAgICAgIGBcbiAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSdkIGxvdmUgdG8gaGVhciBmcm9tIHlvdS4gV2hldGhlciB5b3UgaGF2ZSBhIHF1ZXN0aW9uLCBmZWVkYmFjaywgb3IganVzdCB3YW50IHRvIHNheSBoZWxsbyxcbiAgICAgICAgICAgIG91ciB0ZWFtIGlzIHJlYWR5IHRvIGFzc2lzdCB5b3UuIFJlYWNoIG91dCB0byB1cyB0aHJvdWdoIHRoZSBjb250YWN0IGRldGFpbHMgYmVsb3cuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBFbWFpbDogaW5mb0BqYWl6emVyLmNvbSA8YnI+PGJyPiBcbiAgICAgICAgICAgIFBob25lOiArMSAoMTIzKSA0NTYtNzg5MCA8YnI+PGJyPiBcbiAgICAgICAgICAgIEFkZHJlc3M6IDEyMyBTdXNoaSBTdHJlZXQsIFRva3lvLCBKYXBhblxuICAgICAgICA8L3A+XG4gICAgICAgIGAsXG4gICAgICAgIG51bGxcbiAgICApO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBjb21iaW5lZCBjYXJkIHRvIHRoZSBjb250ZW50IGRpdi5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbWJpbmVkQ2FyZC5jcmVhdGUoKSk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVDdXJyZW50Q29udGVudCB9IGZyb20gXCIuL2RlbGV0ZUN1cnJlbnRDb250ZW50LmpzXCI7XG5pbXBvcnQgeyBpbWFnZXMgfSBmcm9tIFwiLi9oYW5kbGVJbWFnZXMuanNcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkLmpzXCI7XG5cbi8qKlxuICogUmVuZGVyIGdhbGxlcnkgaW1hZ2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FsbGVyeSgpIHtcblxuICAgIC8vIERlbGV0ZSBjdXJyZW50IGNvbnRlbnRzIG9mIFwic2VsZWN0aW9uXCIgY29udGFpbmVyLlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgZGVsZXRlQ3VycmVudENvbnRlbnQoY29udGVudCk7XG5cbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5LWNvbnRhaW5lclwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FsbGVyeSlcbiAgICBcbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgY2FyZHMgY29udGFpbmluZyBkaXNoZXMgY29ycmVzcG9uZGluZyB0byBcInR5cGVcIi5cbiAgICBpbWFnZXNbXCJnYWxsZXJ5XCJdLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCBkaXNoID0gbmV3IENhcmQoXCJnYWxsZXJ5LWl0ZW1cIiwgZWxlbWVudC5wYXRoLCBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChkaXNoLmNyZWF0ZSgpKTtcbiAgICB9KTtcbn1cblxuIiwiaW1wb3J0IHsgZGVsZXRlQ3VycmVudENvbnRlbnQgfSBmcm9tIFwiLi9kZWxldGVDdXJyZW50Q29udGVudC5qc1wiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuL2NyZWF0ZUNhcmQuanNcIjtcblxuLy8gUmVuZGVyIEhvbWUgQ29udGVudHMuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcblxuICAgIC8vIEdldCBjb250ZW50IGRpdi5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gICAgLy8gRGVsZXRlIHByZXZpb3VzIGNvbnRlbnQuXG4gICAgZGVsZXRlQ3VycmVudENvbnRlbnQoY29udGVudCk7XG5cbiAgICAvLyBBcnJheSB0byBzdG9yZSBhbGwgY2FyZHMuXG4gICAgbGV0IGNhcmRzID0gW11cblxuICAgIC8vIENyZWF0ZSBoZXJvIHNlY3Rpb24uXG4gICAgbGV0IGhlcm9TZWN0aW9uID0gbmV3IENhcmQoXG4gICAgICAgIFwiaG9tZSBoZXJvLXNlY3Rpb25cIixcbiAgICAgICAgXCIuL2ltYWdlcy9ob21lL2hlcm8tMC5wbmdcIixcbiAgICAgICAgXCJXZWxjb21lIHRvIDxzcGFuIGNsYXNzPSdicmFuZC1uYW1lJz5KYWl6emVyPC9zcGFuPlwiLFxuICAgICAgICBcIkV4cGVyaWVuY2UgdGhlIGVzc2VuY2Ugb2YgSmFwYW4gYXQgSmFpenplciwgd2hlcmUgd2Ugc2VydmUgYXV0aGVudGljIEphcGFuZXNlIGN1aXNpbmUgY3JhZnRlZCB3aXRoIGxvdmUgYW5kIHBhc3Npb24uXCIsXG4gICAgICAgIFwiRXhwbG9yZSBPdXIgTWVudVwiXG4gICAgKTtcbiAgICBjYXJkcy5wdXNoKGhlcm9TZWN0aW9uKTtcblxuICAgIC8vIENyZWF0ZSBmb29kIHRlYXNlciBzZWN0aW9uICh0ZWFzZSBzb21lIG9mIHRoZSBiZXN0IGRpc2hlcykuIFxuICAgIGxldCBzdXNoaVRlYXNlciA9IG5ldyBDYXJkKFxuICAgICAgICBcImhvbWUgZm9vZC10ZWFzZXJcIixcbiAgICAgICAgXCIuL2ltYWdlcy9ob21lL3N1c2hpLTAucG5nXCIsXG4gICAgICAgIFwiRXhxdWlzaXRlIFN1c2hpIERlbGlnaHRzXCIsXG4gICAgICAgIFwiSW5kdWxnZSBpbiB0aGUgZnJlc2hlc3QgYW5kIG1vc3QgZGVsZWN0YWJsZSBzdXNoaSBkaXNoZXMgcHJlcGFyZWQgYnkgb3VyIHNraWxsZWQgc3VzaGkgY2hlZnMuXCIsXG4gICAgICAgIFwiU2VlIE91ciBTdXNoaSBTZWxlY3Rpb25cIlxuICAgICk7XG4gICAgY2FyZHMucHVzaChzdXNoaVRlYXNlcik7XG5cbiAgICAvLyBDcmVhdGUga2l0Y2hlbiBzZWN0aW9uIChzaG93IGhvdyBmb29kIGlzIHdlbGwgcHJlcGFyZWQpLiBcbiAgICBsZXQga2l0Y2hlblNlY3Rpb24gPSBuZXcgQ2FyZChcbiAgICAgICAgXCJob21lIGtpdGNoZW4tc2VjdGlvblwiLFxuICAgICAgICBcIi4vaW1hZ2VzL2hvbWUva2l0Y2hlbi0wLnBuZ1wiLFxuICAgICAgICBcIk1hc3RlcmZ1bGx5IFByZXBhcmVkXCIsXG4gICAgICAgIFwiT3VyIGtpdGNoZW4gaXMgd2hlcmUgY3VsaW5hcnkgYXJ0aXN0cnkgY29tZXMgdG8gbGlmZS4gT3VyIGV4cGVydCBjaGVmcyBicmluZyBvdXQgdGhlIGJlc3QgZmxhdm9ycyBpbiBlYWNoIGRpc2guXCIsXG4gICAgICAgIFwiTWVldCBPdXIgQ2hlZnNcIlxuICAgICk7XG4gICAgY2FyZHMucHVzaChraXRjaGVuU2VjdGlvbik7XG5cbiAgICAvLyBDcmVhdGUgZm9vZCB0ZWFzZXIgc2VjdGlvbiAodGVhc2Ugc29tZSBvZiB0aGUgYmVzdCBkaXNoZXMpLiBcbiAgICBsZXQgcmFtZW5UZWFzZXIgPSBuZXcgQ2FyZChcbiAgICAgICAgXCJob21lIGZvb2QtdGVhc2VyXCIsXG4gICAgICAgIFwiLi9pbWFnZXMvaG9tZS9yYW1lbi0wLnBuZ1wiLFxuICAgICAgICBcIkhlYXJ0eSBSYW1lbiBTZWxlY3Rpb25cIixcbiAgICAgICAgXCJTYXZvciB0aGUgcmljaCBmbGF2b3JzIGFuZCBjb21mb3J0aW5nIHdhcm10aCBvZiBvdXIgYXV0aGVudGljIEphcGFuZXNlIHJhbWVuIGJvd2xzLlwiLFxuICAgICAgICBcIkRpc2NvdmVyIE91ciBSYW1lblwiXG4gICAgKTtcbiAgICBjYXJkcy5wdXNoKHJhbWVuVGVhc2VyKTtcblxuICAgIC8vIENyZWF0ZSBkaW5pbmcgc2VjdGlvbiAoc2hvdyBob3cgZ3JlYXQgdGhlIGFtYmlhbmNlIG9yIGZlZWwgb2YgdGhlIGFjdHVhbCBwbGFjZSkuIFxuICAgIGxldCBkaW5pbmdTZWN0aW9uID0gbmV3IENhcmQoXG4gICAgICAgIFwiaG9tZSBkaW5pbmctc2VjdGlvblwiLFxuICAgICAgICBcIi4vaW1hZ2VzL2hvbWUvZGluaW5nLTAucG5nXCIsXG4gICAgICAgIFwiQSBDb3p5IERpbmluZyBFeHBlcmllbmNlXCIsXG4gICAgICAgIFwiSW1tZXJzZSB5b3Vyc2VsZiBpbiBhIGNvenkgYW5kIGludml0aW5nIGFtYmlhbmNlIGFzIHlvdSBlbmpveSB5b3VyIGN1bGluYXJ5IGpvdXJuZXkgYXQgSmFpenplci5cIixcbiAgICAgICAgXCJSZXNlcnZlIGEgVGFibGVcIlxuICAgICk7XG4gICAgY2FyZHMucHVzaChkaW5pbmdTZWN0aW9uKTtcblxuICAgIC8vIENyZWF0ZSBmb29kIHRlYXNlciBzZWN0aW9uICh0ZWFzZSBzb21lIG9mIHRoZSBiZXN0IGRpc2hlcykuIFxuICAgIGxldCB0ZW1wdXJhVGVhc2VyID0gbmV3IENhcmQoXG4gICAgICAgIFwiaG9tZSBmb29kLXRlYXNlclwiLFxuICAgICAgICBcIi4vaW1hZ2VzL2hvbWUvdGVtcHVyYS0wLnBuZ1wiLFxuICAgICAgICBcIlRlbXB1cmEgRGVsaWNhY2llc1wiLFxuICAgICAgICBcIlRyZWF0IHlvdXJzZWxmIHRvIHRoZSBkZWxpZ2h0ZnVsIGNyaXNwaW5lc3Mgb2Ygb3VyIHRyYWRpdGlvbmFsIEphcGFuZXNlIHRlbXB1cmEgZGlzaGVzLlwiLFxuICAgICAgICBcIkV4cGxvcmUgT3VyIFRlbXB1cmEgU2VsZWN0aW9uXCJcbiAgICApO1xuICAgIGNhcmRzLnB1c2godGVtcHVyYVRlYXNlcik7XG5cbiAgICAvLyBBcHBlbmQgYWxsIGNhcmRzIHRvIHRoZSBjb250ZW50IGRpdi5cbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZC5jcmVhdGUoKSk7XG4gICAgfSk7XG59IiwiaW1wb3J0IHsgZGVsZXRlQ3VycmVudENvbnRlbnQgfSBmcm9tIFwiLi9kZWxldGVDdXJyZW50Q29udGVudC5qc1wiO1xuaW1wb3J0IHsgc2hvd1NlbGVjdGlvbiB9IGZyb20gXCIuL3Nob3dTZWxlY3Rpb24uanNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcblxuICAgIC8vIEFjY2VzcyBjb250ZW50LlxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgZGVsZXRlQ3VycmVudENvbnRlbnQoY29udGVudCk7XG5cbiAgICAvLyBDcmVhdGUgbWVudSBjb250YWluZXIuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgLy8gQ3JlYXRlIGZvb2QgY2F0ZWdvcnkgYnV0dG9ucyBjb250YWluZXIuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcblxuICAgIC8vIENyZWF0ZSBpdGVtIHNlbGVjdGlvbiBjb250YWluZXIuXG4gICAgY29uc3QgaXRlbVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1TZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvblwiKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGl0ZW1TZWxlY3Rpb24pO1xuXG4gICAgLy8gUmVuZGVyIGRpc2ggY2F0ZWdvcnkgYnV0dG9ucyB0aGF0IHNob3dzIGNvcnJlc3BvbmRpbmcgc2VsZWN0aW9ucyB3aGVuIGNsaWNrZWQuXG4gICAgY29uc3QgZm9vZENhdGVnb3JpZXMgPSBbXCJjbGFzc2ljc1wiLCBcImRlc3NlcnRzXCIsIFwiZHJpbmtzXCIsIFwicmFtZW5cIiwgXCJyb2xsc1wiLCBcInN1c2hpQW5kU2FzaGltaVwiLCBcInNhbGFkXCJdO1xuICAgIGZvb2RDYXRlZ29yaWVzLmZvckVhY2goZm9vZENhdGVnb3J5ID0+IHtcblxuICAgICAgICAvLyBDcmVhdGUgYnV0dG9uLlxuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgLy8gQWRkIHNwZWNpYWwgY2FzZSBmb3IgJ3N1c2hpQW5kU2FzaGltaScuXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IChmb29kQ2F0ZWdvcnkgPT09IFwic3VzaGlBbmRTYXNoaW1pXCIpID8gXCJzdXNoaSBhbmQgc2FzaGltaVwiIDogYCR7Zm9vZENhdGVnb3J5fWA7XG5cbiAgICAgICAgLy8gTG9hZCBjb3JyZWVzcG9uZGluZyBkaXNoZXMgYmFzZSBvbiB0eXBlL2NhdGVnb3J5IHdoZW4gY2xpY2tlZC5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93U2VsZWN0aW9uKGAke2Zvb2RDYXRlZ29yeX1gKSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIGJ1dHRvbiB0byB0aGUgY29udGFpbmVyLlxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KVxuXG4gICAgLy8gUmVuZGVyIGNsYXNzaWMgY2FyZWdvcnkgcGFnZSBhcyBkZWZhdWx0LlxuICAgIHNob3dTZWxlY3Rpb24oXCJjbGFzc2ljc1wiKTtcbn0iLCJpbXBvcnQgeyBkZWxldGVDdXJyZW50Q29udGVudCB9IGZyb20gXCIuL2RlbGV0ZUN1cnJlbnRDb250ZW50LmpzXCI7XG5pbXBvcnQgeyBpbWFnZXMgfSBmcm9tIFwiLi9oYW5kbGVJbWFnZXMuanNcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi9jcmVhdGVDYXJkLmpzXCI7XG5cbi8qKlxuICogTG9hZHMgbmV3IGNhcmRzIGNvbnRhaW5pbmcgZGlzaGVzIG9mIHRoZSBzcGVjaWZpZWQgZm9vZCBcInR5cGVcIiBpbnNpZGUgXCJzZWxlY3Rpb25cIiBkaXYuXG4gKiBcbiAqIEV4YW1wbGU6IHNob3dTZWxlY3Rpb24oXCJyYW1lblwiKSB3aWxsIHJlcGxhY2UgY3VycmVudGx5IGxvYWRlZCBkaXNoZXMgd2l0aCByYW1lbiBkaXNoZXMgaW4gXCJzZWxlY3Rpb25cIiBkaXYuXG4gKiBcbiAqIEBwYXJhbSB7KFwiY2xhc3NpY3NcInxcImRlc3NlcnRzXCJ8XCJkcmlua3NcInxcInJhbWVuXCJ8XCJyb2xsc1wifFwic3VzaGlBbmRTYXNoaW1pXCJ8XCJzYWxhZFwiKX0gdHlwZSAtIFRoZSB0eXBlIG9mIGZvb2QgdG8gYmUgcmVuZGVyZWQuIE11c3QgYmUgb25lIG9mIHRoZSBzcGVjaWZpZWQgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dTZWxlY3Rpb24odHlwZSkge1xuXG4gICAgLy8gRGVsZXRlIGN1cnJlbnQgY29udGVudHMgb2YgXCJzZWxlY3Rpb25cIiBjb250YWluZXIuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3Rpb25cIik7XG4gICAgZGVsZXRlQ3VycmVudENvbnRlbnQoc2VsZWN0aW9uKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgY2FyZHMgY29udGFpbmluZyBkaXNoZXMgY29ycmVzcG9uZGluZyB0byBcInR5cGVcIi5cbiAgICBpbWFnZXNbYCR7dHlwZX1gXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgZGlzaCA9IG5ldyBDYXJkKFwibWVudS1pdGVtXCIsIGVsZW1lbnQucGF0aCwgZWxlbWVudC5kaXNoTmFtZSwgZWxlbWVudC5kaXNoUHJpY2UsIG51bGwpO1xuICAgICAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQoZGlzaC5jcmVhdGUoKSk7XG4gICAgfSk7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyQWJvdXRVcyB9IGZyb20gJy4vcmVuZGVyQWJvdXRVcy5qcyc7XG5pbXBvcnQgeyByZW5kZXJDb250YWN0VXMgfSBmcm9tICcuL3JlbmRlckNvbnRhY3RVcy5qcyc7XG5pbXBvcnQgeyByZW5kZXJHYWxsZXJ5IH0gZnJvbSAnLi9yZW5kZXJHYWxsZXJ5LmpzJztcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL3JlbmRlckhvbWUuanMnO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gJy4vcmVuZGVyTWVudS5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG4vLyBMb2FkIGhvbWUgYnkgZGVmdWFsdC5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCByZW5kZXJIb21lKTtcblxuLy8gTWFrZSBMb2dvIGNsaWNrYWJsZS5cbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ29cIik7XG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJIb21lKTtcblxuLy8gTWFrZSBob21lIHBhZ2UgbGluayBhY2Nlc3MgaG9tZS1wYWdlIGNvbnRlbnQgd2hlbiBjbGlja2VkLlxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlckhvbWUpO1xuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTWVudSlcblxuY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtdXNcIik7XG5hYm91dFVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJBYm91dFVzKVxuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyQ29udGFjdFVzKVxuXG5jb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5XCIpO1xuZ2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyR2FsbGVyeSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=