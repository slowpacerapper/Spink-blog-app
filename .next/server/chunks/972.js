"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VS": () => (/* binding */ MyArticleTitle),
/* harmony export */   "YX": () => (/* binding */ MyArticleImage),
/* harmony export */   "dJ": () => (/* binding */ LikeButton),
/* harmony export */   "ed": () => (/* binding */ MyCommentDate),
/* harmony export */   "no": () => (/* binding */ MyCommentText),
/* harmony export */   "xq": () => (/* binding */ MyArticleText)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const MyArticleTitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Space Grotesk",
    fontSize: "28px",
    fontWeight: "500",
    color: "#888888",
    margin: "2rem auto",
    textAlign: "center",
    position: "relative",
    width: "max-content",
    height: "max-content",
    "&:after": {
        content: '""',
        position: "absolute",
        height: "3px",
        width: "6rem",
        backgroundColor: "#999999",
        bottom: "0",
        left: "0%"
    }
});
const MyArticleText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Space Grotesk",
    lineHeight: "32px",
    fontSize: "14px",
    fontWeight: "400",
    color: "#777777"
});
const MyCommentText = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Space Grotesk",
    lineHeight: "32px",
    fontSize: "18px",
    fontWeight: "400",
    color: "#777777"
});
const MyCommentDate = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Space Grotesk",
    lineHeight: "32px",
    fontSize: "10px",
    fontWeight: "400",
    color: "#777777"
});
const LikeButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)({
    height: "max-content",
    marginTop: "1rem",
    marginRight: "0.5rem",
    width: "max-content",
    padding: "0.025rem 0.125rem",
    fontFamily: "Space Grotesk",
    fontSize: "10px"
});
const MyArticleImage = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))({});


/***/ })

};
;