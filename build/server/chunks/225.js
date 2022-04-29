"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ GridComponent),
/* harmony export */   "d": () => (/* binding */ MyTextField)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const GridComponent = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()("div")({
    position: "relative",
    padding: "3rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    minHeight: "70vh",
    marginBottom: "3rem",
    display: "flex",
    backgroundColor: "#0A1A29"
});
const MyTextField = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField)({
    "& label.Mui-focused": {
        color: "white"
    },
    label: {
        fontFamily: "Space Grotesk",
        color: "white"
    },
    "& .MuiInput-underline:after": {
        color: "white"
    },
    "& .MuiOutlinedInput-root": {
        color: "white",
        fontFamily: "Space Grotesk",
        "& fieldset": {
            borderColor: "white",
            color: "white"
        },
        "&:hover fieldset": {
            borderColor: "white",
            color: "white"
        },
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    }
});


/***/ })

};
;