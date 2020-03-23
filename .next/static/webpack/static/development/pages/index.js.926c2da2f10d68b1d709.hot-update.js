webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CountrySelector */ "./components/CountrySelector.js");

var _jsxFileName = "C:\\Users\\chris\\Desktop\\Coding\\01 - COURSES\\corona-stats\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 100vh;\n  background: var(--lightColor);\n  color: var(--darkColor);\n  margin: 0;\n  main {\n    padding: 2rem;\n    text-align: center;\n  }\n  header,\n  footer {\n    background: white;\n    padding: 1rem;\n    text-align: center;\n  }\n  h1 {\n    color: var(--mainColor);\n    font-size: 1.9rem;\n    border: 4px solid var(--mainColor);\n    display: inline-block;\n    padding: 1rem;\n    text-align: left;\n  }\n  footer {\n    position: fixed;\n    background: var(--mainColor);\n    color: white;\n    width: 100vw;\n    bottom: 0;\n    padding: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function Layout(_ref) {
  var setUrl = _ref.setUrl,
      setSelectedCountry = _ref.setSelectedCountry,
      children = _ref.children;
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "COVID-19 Stats")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, children), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_components_CountrySelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUrl: setUrl,
    setSelectedCountry: setSelectedCountry,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  })));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.926c2da2f10d68b1d709.hot-update.js.map