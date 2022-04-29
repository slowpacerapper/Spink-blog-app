"use strict";
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Y": () => (/* binding */ buttonStyles),
/* harmony export */   "GW": () => (/* binding */ MyTextSmall),
/* harmony export */   "M6": () => (/* binding */ cardStyle),
/* harmony export */   "Vh": () => (/* binding */ MyImage),
/* harmony export */   "YO": () => (/* binding */ customStyle),
/* harmony export */   "uH": () => (/* binding */ MyText)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const MyImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_0___default()))({
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
    opacity: 0.7,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
        transform: "rotate(5deg) scale(1.2)"
    }
});
const MyText = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography)({
    fontFamily: "Space Grotesk",
    fontSize: "18px",
    fontWeight: "500",
    color: "#888888"
});
const MyTextSmall = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography)({
    fontFamily: "Space Grotesk",
    fontSize: "14px",
    fontWeight: "400",
    color: "#777777"
});
const customStyle = {
    backgroundColor: "#0A1A29",
    padding: 0,
    maxHeight: "300px",
    maxWidth: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px"
};
const cardStyle = {
    width: 1,
    backgroundColor: "transparent",
    padding: "1rem",
    maxHeight: "500px",
    position: "relative"
};
const buttonStyles = {
    position: "absolute",
    bgcolor: "white",
    color: "#0A1A29",
    bottom: "1rem",
    right: "1rem",
    position: "absolute",
    "&:hover": {
        color: "white"
    }
};


/***/ })

};
;