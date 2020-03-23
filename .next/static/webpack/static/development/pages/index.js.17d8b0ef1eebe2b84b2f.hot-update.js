webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_withCommas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/withCommas */ "./utils/withCommas.js");

var _jsxFileName = "C:\\Users\\chris\\Desktop\\Coding\\01 - COURSES\\corona-stats\\components\\Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  h2 {\n    font-size: 2.1rem;\n    margin: 2rem;\n    text-transform: uppercase;\n  }\n  h3 {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n    font-weight: 600;\n  }\n  span {\n    font-size: 2rem;\n    font-family: 'Montserrat';\n    color: #aaa;\n    letter-spacing: -1px;\n  }\n  small {\n    display: block;\n    margin-bottom: 3rem;\n    margin-top: -1rem;\n  }\n  .statBlock {\n    font-family: 'Roboto Condensed';\n    margin: 1rem auto;\n    padding: 2rem 3rem;\n    background: white;\n    max-width: 400px;\n    border-radius: 0.5rem;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




function Stats(_ref) {
  var url = _ref.url,
      selected = _ref.selected;
  var stats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])(url);
  if (!stats) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 22
    }
  }, "Loading...");
  console.log(stats);
  var date;

  if (stats.lastUpdate) {
    date = new Date(stats.lastUpdate);
  }

  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, selected, " STATS"), __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Last Updated: ", date && date.toLocaleDateString(), ' ', date && date.toLocaleTimeString()), __jsx("div", {
    className: "statBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Confirmed Cases:"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, stats.confirmed ? Object(_utils_withCommas__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(stats.confirmed.value) : 'N/A')), __jsx("div", {
    className: "statBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Deaths:"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, stats.deaths ? Object(_utils_withCommas__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(stats.deaths.value) : 'N/A')), __jsx("div", {
    className: "statBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Recovered:"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, stats.recovered ? Object(_utils_withCommas__WEBPACK_IMPORTED_MODULE_4__["numberWithCommas"])(stats.recovered.value) : 'N/A')));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.17d8b0ef1eebe2b84b2f.hot-update.js.map