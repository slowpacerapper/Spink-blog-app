"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/herobg.3ce45577.jpeg","height":750,"width":1125,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAogL/AP/EABsQAAEEAwAAAAAAAAAAAAAAAAEAAhESAyEx/9oACAEBAAE/AL0wPdAOp4v/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k="});

/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home_Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./components/Navbar/index.jsx + 1 modules
var Navbar = __webpack_require__(326);
// EXTERNAL MODULE: ./components/Footer/Footer.jsx
var Footer = __webpack_require__(505);
// EXTERNAL MODULE: ./components/Hero/Hero.styled.jsx
var Hero_styled = __webpack_require__(225);
// EXTERNAL MODULE: ./public/herobg.jpeg
var herobg = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Hero/Hero.jsx







const Hero = ()=>{
    const matches = (0,material_.useMediaQuery)("(max-width:600px)");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Hero_styled/* GridComponent */.M, {
        container: true,
        id: "hero",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: herobg/* default */.Z,
                layout: "fill",
                objectFit: "cover",
                style: {
                    opacity: "0.4"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                direction: "column",
                sx: {
                    zIndex: "10",
                    color: "white",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h2",
                        sx: !matches ? {
                            fontFamily: "Space Grotesk",
                            fontWeight: "600",
                            marginBottom: "2rem"
                        } : {
                            fontSize: "48px",
                            fontWeight: 600,
                            margin: "2rem 0",
                            fontFamily: "Space Grotesk"
                        },
                        children: "Spink Blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h6",
                        component: "p",
                        sx: {
                            fontFamily: "Space Grotesk",
                            fontWeight: "400",
                            fontSize: "16px",
                            width: "60%",
                            minWidth: "300px",
                            margin: "1rem auto"
                        },
                        children: "Spink Blog is a web space that intends to keep you well informed with information about its featured categories."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ButtonGroup, {
                        sx: {
                            width: "max-content",
                            margin: "0 auto"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                href: "/About",
                                variant: "contained",
                                sx: {
                                    width: "8rem",
                                    margin: "1rem auto",
                                    bgcolor: "#0A1A29",
                                    fontFamily: "Space Grotesk"
                                },
                                children: "Learn More"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                href: "/Login",
                                variant: "outlined",
                                sx: {
                                    width: "8rem",
                                    margin: "1rem auto",
                                    bgcolor: "white",
                                    color: "#0A1A29",
                                    fontFamily: "Space Grotesk",
                                    borderColor: "#0A1A29",
                                    "&:hover": {
                                        color: "white",
                                        borderColor: "white"
                                    }
                                },
                                children: "Login"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h6",
                        component: "p",
                        sx: {
                            fontFamily: "Space Grotesk",
                            fontWeight: "400",
                            fontSize: "16px",
                            width: "60%",
                            minWidth: "300px",
                            margin: "1rem auto",
                            marginTop: "2rem"
                        },
                        children: "Subscribe to get updates on new information"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        style: {
                            display: "flex",
                            flexFlow: "column",
                            gap: "1rem",
                            justifyContent: "center",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Hero_styled/* MyTextField */.d, {
                                type: "email",
                                required: true,
                                InputProps: !matches ? {
                                    startAdornment: /*#__PURE__*/ jsx_runtime_.jsx(material_.InputAdornment, {
                                        position: "start",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            type: "submit",
                                            variant: "contained",
                                            sx: {
                                                width: "max-content",
                                                fontFamily: "Space Grotesk",
                                                position: "absolute",
                                                right: "1rem",
                                                bgcolor: "#0A1A29"
                                            },
                                            children: "Subscribe"
                                        })
                                    })
                                } : null,
                                sx: {
                                    borderColor: "white",
                                    width: "60%",
                                    height: "3.5rem"
                                },
                                id: "outlined-size-small",
                                label: "Subscribe",
                                variant: "outlined"
                            }),
                            matches ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                type: "submit",
                                variant: "contained",
                                sx: {
                                    width: "max-content",
                                    fontFamily: "Space Grotesk",
                                    bgcolor: "#0A1A29"
                                },
                                children: "Subscribe"
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Hero_Hero = (Hero);

// EXTERNAL MODULE: ./components/HeaderLogo/HeaderLogo.jsx
var HeaderLogo = __webpack_require__(82);
;// CONCATENATED MODULE: ./components/BodySection/Body.styled.jsx
const customStyleTwo = {
    fontSize: "28px",
    fontFamily: "Space Grotesk",
    fontWeight: "500",
    color: "white",
    margin: "1rem 0"
};
const customStyleThree = {
    fontSize: "28px",
    transform: "translateY(1rem)",
    fontFamily: "Space Grotesk",
    fontWeight: "500",
    color: "white",
    margin: "1rem 0",
    marginBottom: "2rem",
    padding: "0"
};

// EXTERNAL MODULE: ./components/MainContentComponent/MainContentComponent.styled.jsx
var MainContentComponent_styled = __webpack_require__(159);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/MainContentComponent/MainContentComponent.jsx







const theme = (0,material_.createTheme)({
    palette: {
        background: {
            paper: "transparent"
        }
    }
});
const MainContentComponent = ({ title , createdAt , image , category , id  })=>{
    const router = (0,router_.useRouter)();
    const handleRoute = ()=>{
        router.push("/Articles/" + id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        sx: {
            marginTop: "2rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                sx: customStyleTwo,
                children: category && category
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
                    elevation: 8,
                    sx: MainContentComponent_styled/* cardStyle */.M6,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                            sx: MainContentComponent_styled/* customStyle */.YO,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_styled/* MyImage */.Vh, {
                                    src: image,
                                    priority: true
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                    onClick: handleRoute,
                                    variant: "contained",
                                    size: "small",
                                    sx: MainContentComponent_styled/* buttonStyles */.$Y,
                                    children: "Explore"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_styled/* MyText */.uH, {
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_styled/* MyTextSmall */.GW, {
                                    children: createdAt
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const MainContentComponent_MainContentComponent = (MainContentComponent);

// EXTERNAL MODULE: ./utils/categoriesDB.js + 25 modules
var categoriesDB = __webpack_require__(624);
// EXTERNAL MODULE: ./components/ChildComponent/Child.jsx + 1 modules
var Child = __webpack_require__(745);
;// CONCATENATED MODULE: ./components/BodySection/Body.jsx







const Body = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
        container: true,
        item: true,
        xs: 12,
        spacing: 5,
        sx: {
            padding: "2rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                item: true,
                md: 8,
                children: categoriesDB/* categoriesDb.filter */.w.filter((categ)=>categ.type === "main"
                ).map((category)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_MainContentComponent, {
                        id: category.id,
                        title: category.title,
                        createdAt: category.createdAt,
                        image: category.image,
                        category: category.category
                    }, category.id);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                item: true,
                md: 4,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        variant: "h6",
                        sx: customStyleThree,
                        children: "New Posts"
                    }),
                    categoriesDB/* categoriesDb.filter */.w.filter((children)=>children.type === "children"
                    ).map((article)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Child/* default */.Z, {
                            id: article.id,
                            title: article.title,
                            createdAt: article.createdAt,
                            image: article.image
                        }, article.id);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BodySection_Body = (Body);

;// CONCATENATED MODULE: ./components/index.js






;// CONCATENATED MODULE: ./pages/Home/Home.jsx





const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Hero_Hero, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(BodySection_Body, {})
            ]
        })
    });
};
/* harmony default export */ const Home_Home = (Home);


/***/ })

};
;