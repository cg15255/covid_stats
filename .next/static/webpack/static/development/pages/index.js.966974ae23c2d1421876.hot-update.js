webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CountrySelector.js":
/*!***************************************!*\
  !*** ./components/CountrySelector.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\chris\\Desktop\\Coding\\01 - COURSES\\corona-stats\\components\\CountrySelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  select {\n    max-width: 100%;\n    padding: 2rem;\n    font-family: 'Montserrat';\n    font-size: 1.8rem;\n    outline: none;\n    border: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



function CountrySelector(_ref) {
  var _this = this;

  var setUrl = _ref.setUrl,
      setSelectedCountry = _ref.setSelectedCountry;
  var countries = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries');
  if (!countries) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 26
    }
  }, "Loading...");
  console.log(countries);

  function handleChange(e) {
    if (e.target.value === 'all') {
      setUrl('https://covid19.mathdro.id/api/');
      setSelectedCountry('WORLDWIDE');
    } else {
      setUrl("https://covid19.mathdro.id/api/countries/".concat(e.target.value));
      var selected = countries.countries.find(function (country) {
        return country.iso2 === e.target.value;
      });
      setSelectedCountry(selected.name);
    }
  }

  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("select", {
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("option", {
    value: "all",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Worldwide"), countries.countries.map(function (country) {
    return __jsx("option", {
      value: country.iso2,
      key: country.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, country.name);
  })));
}
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.966974ae23c2d1421876.hot-update.js.map