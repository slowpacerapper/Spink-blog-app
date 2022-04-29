"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainContentComponent_MainContentComponent_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







const MyButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)({
    color: "#888888",
    padding: 0,
    fontFamily: "Space Grotesk",
    fontSize: "14px",
    fontWeight: "400",
    justifyContent: "start",
    textTransform: "capitalize",
    transition: "all 0.3s ease",
    "&:hover": {
        color: "white"
    }
});
const MyButtonGroup = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ButtonGroup)({
    border: "none",
    padding: 0
});
const MyGrid = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid)({
    // borderRight: "0.2px solid #999999",
    margin: "0.5rem",
    "&:nth-of-type(4)": {
        border: "none"
    }
});
const MyGridTwo = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid)({
    borderTop: "0.5px solid #999999",
    paddingTop: "1.5rem",
    margin: "1rem"
});
const MyTypo = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({
    fontFamily: "Space Grotesk",
    fontSize: "18px",
    fontWeight: "400",
    color: "#888888"
});
const Footer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const routeHandler = (destination)=>{
        router.push(destination);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        item: true,
        justifyContent: "center",
        direction: "row",
        xs: 12,
        sx: {
            bgcolor: "#0c1e30",
            marginTop: "2rem",
            padding: "1rem 1.5rem",
            paddingBottom: 0
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyGrid, {
                sm: 2.7,
                container: true,
                direction: "column",
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTypo, {
                        children: "SPINK"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Portfolio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Support"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Feedback"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "http://github.com/slowpacerapper",
                        children: "Github"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyGrid, {
                sm: 2.7,
                container: true,
                direction: "column",
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTypo, {
                        children: "COMPANY"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Projects"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Forum"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "#",
                        children: "Open Source"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyGrid, {
                sm: 3,
                container: true,
                direction: "column",
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTypo, {
                        children: "SOCIAL"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "https://web.facebook.com/Marthrixe92/",
                        children: "Facebook"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/",
                        children: "Linkedin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        href: "https://twitter.com/BakareAyodeji14",
                        children: "Twitter"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyGrid, {
                sm: 1,
                container: true,
                direction: "column",
                alignItems: "flex-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyTypo, {
                        children: "Navigation"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        onClick: ()=>routeHandler("/About")
                        ,
                        children: "About"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        onClick: ()=>routeHandler("/Contact")
                        ,
                        children: "Contact"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                        onClick: ()=>routeHandler("/Login")
                        ,
                        children: "Login"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyGridTwo, {
                container: true,
                justifyContent: "space-between",
                alignItems: "center",
                direction: "row",
                xs: 12,
                gap: 3,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainContentComponent_MainContentComponent_styled__WEBPACK_IMPORTED_MODULE_3__/* .MyTextSmall */ .GW, {
                        sx: {
                            lineHeight: "24px"
                        },
                        children: "\xa9 Copyright 2022 Spink All Rights Reserved"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MyButtonGroup, {
                            variant: "none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                                    href: "http://github.com/slowpacerapper",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsGithub, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                                    href: "https://web.facebook.com/Marthrixe92/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFacebook, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                                    href: "https://www.linkedin.com/in/ayodeji-bakare-08a3851b7/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsLinkedin, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyButton, {
                                    href: "https://twitter.com/BakareAyodeji14",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsTwitter, {})
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 82:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const HeaderLogo = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleRouting = (destination)=>{
        router.push(destination);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: ()=>handleRouting("/")
        ,
        sx: {
            zIndex: "100",
            position: "fixed",
            fontFamily: "Space Grotesk",
            right: "30px",
            top: "38.5px",
            transform: "translateY(-50%)",
            fontWeight: "500",
            fontSize: "16px",
            bgcolor: "#0A1A29"
        },
        variant: "contained",
        children: "Spink"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLogo);


/***/ }),

/***/ 326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(986);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.styled.jsx

const MyNavbar = (0,system_.styled)("div")({
    backgroundColor: "#0A1A29",
    zIndex: "100",
    position: "fixed",
    padding: "1.5rem 1.25rem",
    clipPath: "Circle(20px at 45px 38.5px)",
    width: 300 + "px",
    minHeight: 100 + "vh",
    boxShadow: "1px 2px 6px rgba(0,0,0,0.2)",
    transition: "all 0.4s ease-in-out"
});
const NavMenu = (0,system_.styled)("span")({
    height: "2px",
    backgroundColor: "white",
    width: "1rem",
    transition: "all 0.4s ease-in-out"
});
const ListText = (0,system_.styled)("p")({
    fontSize: "14px",
    fontWeight: "300"
});
const ListItems = {
    marginBottom: "1rem",
    "&:hover": {
        borderRadius: "8px",
        border: "0.5px solid #f5f5f5"
    }
};

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/Navbar/index.jsx







const Navbar = ()=>{
    const { 0: animate , 1: setAnimate  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const handleRouting = (destination)=>{
        router.push(destination);
        setAnimate(!animate);
    };
    const animateHandler = ()=>{
        setAnimate(!animate);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyNavbar, {
        sx: animate && {
            clipPath: "Circle(200% at 15% 5%)"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                onClick: animateHandler,
                component: "button",
                bgcolor: "transparent",
                border: "none",
                flexDirection: "column",
                gap: 0.5,
                sx: {
                    marginLeft: ".6rem",
                    cursor: "pointer",
                    padding: "0.5rem",
                    width: "max-content"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {
                        sx: !animate ? {
                            width: "0.5rem"
                        } : {
                            transform: "rotate(45deg) translate(2.5px,2px)",
                            width: "0.5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {
                        sx: animate && {
                            transform: "rotate(-45deg) translateY(0px)",
                            width: "1rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavMenu, {
                        sx: !animate ? {
                            width: "0.5rem",
                            alignSelf: "flex-end"
                        } : {
                            transform: "rotate(45deg) translate(-2.5px, -2px)",
                            width: "0.5rem",
                            alignSelf: "flex-end"
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.List, {
                sx: {
                    width: "100%",
                    color: "white",
                    paddingTop: "3rem"
                },
                component: "nav",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                        onClick: ()=>handleRouting("/")
                        ,
                        component: "a",
                        sx: ListItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                    style: {
                                        color: "white",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListText, {
                                children: "Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                        component: "a",
                        onClick: ()=>handleRouting("/Login")
                        ,
                        sx: ListItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineLogin, {
                                    style: {
                                        color: "white",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListText, {
                                children: "Login"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                        onClick: ()=>handleRouting("/SignUp")
                        ,
                        component: "a",
                        sx: ListItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineUserAdd, {
                                    style: {
                                        color: "white",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListText, {
                                children: "SignUp"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                        onClick: ()=>handleRouting("/About")
                        ,
                        component: "a",
                        sx: ListItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineInfoCircle, {
                                    style: {
                                        color: "white",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListText, {
                                children: "About"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                        onClick: ()=>handleRouting("/Contact")
                        ,
                        component: "a",
                        sx: ListItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdOutlineContactPage, {
                                    style: {
                                        color: "white",
                                        fontSize: "18px"
                                    }
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(ListText, {
                                children: "Contact"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                variant: "outlined",
                onClick: ()=>handleRouting("/")
                ,
                sx: {
                    color: "white",
                    fontFamily: "Space Grotesk",
                    position: "absolute",
                    left: "2.5rem",
                    bottom: "1rem"
                },
                children: "Spink-Blog"
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ })

};
;