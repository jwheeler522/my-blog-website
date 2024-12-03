"use strict";
exports.id = "component---src-pages-sxs-js";
exports.ids = ["component---src-pages-sxs-js"];
exports.modules = {

/***/ "./src/pages/Sxs.js?export=default":
/*!*****************************************!*\
  !*** ./src/pages/Sxs.js?export=default ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Sxs = ({
  data
}) => {
  // Fetch maverickDetails and rzrDetails from the prop passed down
  const {
    maverickDetails,
    rzrDetails
  } = data.mdx.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Maverick X3 Turbo RR Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, maverickDetails.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Suspension: ", maverickDetails.specs.suspension), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Engine: ", maverickDetails.specs.engine), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Weight: ", maverickDetails.specs.weight)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Polaris RZR Pro R Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, rzrDetails.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Suspension: ", rzrDetails.specs.suspension), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Engine: ", rzrDetails.specs.engine), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Weight: ", rzrDetails.specs.weight)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sxs);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-sxs-js.js.map