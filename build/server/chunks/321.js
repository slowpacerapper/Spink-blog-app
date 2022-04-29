"use strict";
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ChildComponent_Child)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(986);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/ChildComponent/Child.styled.jsx


const MyImage = styled_default()((image_default()))({
    objectFit: "cover",
    opacity: 0.7,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
        transform: "rotate(5deg) scale(1.2)"
    }
});

// EXTERNAL MODULE: ./components/MainContentComponent/MainContentComponent.styled.jsx
var MainContentComponent_styled = __webpack_require__(159);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/ChildComponent/Child.jsx








const Child = ({ title , createdAt , image , id  })=>{
    const matches = (0,material_.useMediaQuery)("(max-width:500px)");
    const router = (0,router_.useRouter)();
    const handleRoute = ()=>{
        router.push("/Articles/" + id);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        elevation: 8,
        sx: matches ? {
            flexFlow: "column",
            bgcolor: "transparent",
            marginBottom: "2rem"
        } : {
            display: "flex",
            bgcolor: "transparent",
            // padding: " 0 2rem",
            marginBottom: "2rem",
            height: "100px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                onClick: handleRoute,
                sx: matches ? {
                    width: "100%",
                    overflow: "hidden",
                    padding: 0
                } : {
                    width: "40%",
                    overflow: "hidden",
                    padding: 0,
                    alignItems: "start"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    sx: {
                        padding: 0,
                        minHeight: "100%"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(MyImage, {
                        src: image,
                        priority: true
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(system_.Box, {
                sx: {
                    display: "flex",
                    flexDirection: "column"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                    sx: {
                        flex: "1 0 auto"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_styled/* MyText */.uH, {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MainContentComponent_styled/* MyTextSmall */.GW, {
                            children: createdAt
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ChildComponent_Child = (Child);


/***/ }),

/***/ 351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ categoriesDb)
});

;// CONCATENATED MODULE: ./public/gospel.jpeg
/* harmony default export */ const gospel = ({"src":"/_next/static/media/gospel.b718c529.jpeg","height":1080,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKAV/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIEEgADBSEi/9oACAEBAAE/AOApoaqyR3BXbyIYDE+XKd6//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACof/aAAgBAgEBPwCoaz//xAAXEQADAQAAAAAAAAAAAAAAAAAAAbEC/9oACAEDAQE/ANOKH//Z"});
;// CONCATENATED MODULE: ./public/gospel2.jpeg
/* harmony default export */ const gospel2 = ({"src":"/_next/static/media/gospel2.f4b2e6ef.jpeg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAlgF//8QAGhAAAgMBAQAAAAAAAAAAAAAAAQMCBBIABf/aAAgBAQABPwBnoGu2D406gZoQ1FeSe//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwBDb//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhEx/9oACAEDAQE/AFJ5Z//Z"});
;// CONCATENATED MODULE: ./public/gospel3.jpeg
/* harmony default export */ const gospel3 = ({"src":"/_next/static/media/gospel3.2252e3f5.jpeg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAJ4Ej//EAB0QAAIBBAMAAAAAAAAAAAAAAAEDAgAREiITMnH/2gAIAQEAAT8Am4NatMEqXxWSSIjbI9vda//EABkRAAIDAQAAAAAAAAAAAAAAAAEDAAIRBP/aAAgBAgEBPwDpc1Tcpc1GCf/EABwRAAEDBQAAAAAAAAAAAAAAAAEAAkEDBBETMf/aAAgBAwEBPwC8qvZqwRx0Ayv/2Q=="});
;// CONCATENATED MODULE: ./public/gospel4.jpeg
/* harmony default export */ const gospel4 = ({"src":"/_next/static/media/gospel4.20365bf6.jpeg","height":376,"width":720,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAABQb/2gAMAwEAAhADEAAAAJCMf//EABsQAAIDAAMAAAAAAAAAAAAAAAECAxESACJh/9oACAEBAAE/AJqVE6qdSBbI81z/xAAXEQEAAwAAAAAAAAAAAAAAAAACAAFS/9oACAECAQE/AC3q5//EABkRAAIDAQAAAAAAAAAAAAAAAAECACEiMv/aAAgBAwEBPwB1XFDkT//Z"});
;// CONCATENATED MODULE: ./public/gospel5.png
/* harmony default export */ const gospel5 = ({"src":"/_next/static/media/gospel5.fd59e613.png","height":658,"width":1275,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AMseJMwABM0AEL8AALsAAM0AAssAA8sZIAC9LjLIeXrVc3TBd3jCdXbXgIHKfX7RSUwAnyotqnBxwm5vz3V20HV2vXh5qXBxtT5AAKsXHZ8AALgSGsIHFcUKFqkABIgAAKAKEpvYJeDHm+TiAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/entertainment.webp
/* harmony default export */ const entertainment = ({"src":"/_next/static/media/entertainment.30c30d6e.webp","height":586,"width":960,"blurDataURL":"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAUAAkA4JaACdEfqgbTuz2gA+WMAt9/TU02awAzD9uqE+uSDNP3QFL82zKl070/b+MDy05/U1dJEC16/PnbAZ8AAAA=="});
;// CONCATENATED MODULE: ./public/movies.webp
/* harmony default export */ const movies = ({"src":"/_next/static/media/movies.0ad75045.webp","height":600,"width":1200,"blurDataURL":"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAQAAkA4JZQCdAD0gbJgAP7Kov7rz0ipmyu4Bq6AAa1eJkpH/Rf2mL+YoAAA"});
;// CONCATENATED MODULE: ./public/music.webp
/* harmony default export */ const music = ({"src":"/_next/static/media/music.8828c8b6.webp","height":677,"width":1200,"blurDataURL":"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoIAAUAAkA4JQBOgB6PVVZAAPWbfu7++MHcvt/dP9X0jjUVABX5Fn5vzf4SnboeT/RvaHBA2X/Rd4ElatHAAA=="});
;// CONCATENATED MODULE: ./public/sports.jpeg
/* harmony default export */ const sports = ({"src":"/_next/static/media/sports.23c5aece.jpeg","height":432,"width":768,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAIgFL//EABwQAAEEAwEAAAAAAAAAAAAAAAIBAxESABQiUf/aAAgBAQABPwBq5uH1A7CiqR4F8//EABcRAAMBAAAAAAAAAAAAAAAAAAACQXH/2gAIAQIBAT8Ai4f/xAAZEQABBQAAAAAAAAAAAAAAAAABAAISgbH/2gAIAQMBAT8AIEnVi//Z"});
;// CONCATENATED MODULE: ./public/comedy.jpeg
/* harmony default export */ const comedy = ({"src":"/_next/static/media/comedy.067bef8d.jpeg","height":720,"width":1280,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAhAk//8QAHRAAAQIHAAAAAAAAAAAAAAAAAgADAQYSFGJyc//aAAgBAQABPwCMxMmwLlidffHVf//EABoRAAICAwAAAAAAAAAAAAAAAAECABESIcH/2gAIAQIBAT8AVVOVgaPJ/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACEXH/2gAIAQMBAT8AbOvWf//Z"});
;// CONCATENATED MODULE: ./public/phone.webp
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.24cda8bc.webp","height":800,"width":1200,"blurDataURL":"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAUAAkA4JYgCdAD0Ma4oAAD+29Y6hq8hQekeh2oRH575ZYNr3JLPgYFDdgM8O4Tz0yfudRdL9/HqyHa9nzWmK798FcAA"});
;// CONCATENATED MODULE: ./public/laptop.webp
/* harmony default export */ const laptop = ({"src":"/_next/static/media/laptop.2058956e.webp","height":900,"width":1600,"blurDataURL":"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAUAAkA4JZwCdAD5jAnnwAD+9WFoVlT7lekjC39Alu18xUash8U6qWSXpI/p58WrsxBZpINTr+ahH0AAAA=="});
;// CONCATENATED MODULE: ./public/earbud.jpeg
/* harmony default export */ const earbud = ({"src":"/_next/static/media/earbud.eb32ba7e.jpeg","height":1080,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAkB//xAAYEAEBAQEBAAAAAAAAAAAAAAABAgMAYf/aAAgBAQABPwCJyz10IykuySqQpQfe/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPwCYj//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AI//2Q=="});
;// CONCATENATED MODULE: ./public/applewatch.webp
/* harmony default export */ const applewatch = ({"src":"/_next/static/media/applewatch.c3acbf9e.webp","height":600,"width":1200,"blurDataURL":"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAQAAkA4JaACdADdDBAgAP5WBj+fTOPrITeCKC+AXqmwq0yRmUfQHj9xs/ep/3NnwNAA"});
;// CONCATENATED MODULE: ./public/politics.jpeg
/* harmony default export */ const politics = ({"src":"/_next/static/media/politics.d8c2660a.jpeg","height":1152,"width":2048,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKYX/8QAHRAAAQMFAQAAAAAAAAAAAAAAAgEEBQADEiJTwv/aAAgBAQABPwA5Rw1lBYZFcRSHc16l5r//xAAWEQEBAQAAAAAAAAAAAAAAAAABADH/2gAIAQIBAT8AwL//xAAYEQACAwAAAAAAAAAAAAAAAAAAAgERIv/aAAgBAwEBPwBtNNn/2Q=="});
;// CONCATENATED MODULE: ./public/canada.jpeg
/* harmony default export */ const canada = ({"src":"/_next/static/media/canada.902a531f.jpeg","height":628,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIAWf//EABoQAQABBQAAAAAAAAAAAAAAAAECAAMREiH/2gAIAQEAAT8AuTUjF6aLhr//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAiED/9oACAEDAQE/ANI0P//Z"});
;// CONCATENATED MODULE: ./public/nigeria.jpeg
/* harmony default export */ const nigeria = ({"src":"/_next/static/media/nigeria.314a4ac9.jpeg","height":325,"width":650,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAqDs//8QAHhAAAgEDBQAAAAAAAAAAAAAAAQQDAAIREyEiQVH/2gAIAQEAAT8AWSgYlbXvB04hxGfNu6//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRgf/aAAgBAgEBPwCKVaf/xAAXEQADAQAAAAAAAAAAAAAAAAAAARGh/9oACAEDAQE/AK8P/9k="});
;// CONCATENATED MODULE: ./public/india.png
/* harmony default export */ const india = ({"src":"/_next/static/media/india.5be10d15.png","height":576,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ANycU+y8fdifba6BXad7VqJnPY1cNwAACwCUaT/bsILHnHHEqXu9l26qhFlqTTFRLiAArpJir5d0nZN3w6mFtpRuw6eBwKp/pYFQALF3O6SCToNgMqCEXsKifa5/RraKTa5xLABXEwBTJgBKLwA9DQBwPBx7PQsqAABrFQCFGDSKcEtyJAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/america.jpeg
/* harmony default export */ const america = ({"src":"/_next/static/media/america.ea111bf5.jpeg","height":619,"width":1100,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAkhK//8QAGhABAAIDAQAAAAAAAAAAAAAAAgEDAAQRcf/aAAgBAQABPwA76Q17FUZfIPfc/8QAGBEBAAMBAAAAAAAAAAAAAAAAAgASIUH/2gAIAQIBAT8AANTnJ//EABoRAAEFAQAAAAAAAAAAAAAAAAIAAQMREgT/2gAIAQMBAT8A5ACV5djqiarX/9k="});
;// CONCATENATED MODULE: ./public/automobile.webp
/* harmony default export */ const automobile = ({"src":"/_next/static/media/automobile.a964f736.webp","height":900,"width":1200,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAYAAkA4JaQAAxZecmt5mAD9478mqETOhwEyCFtLhCAAmLE5Y3tHBzrzAlQKAAA="});
;// CONCATENATED MODULE: ./public/auto2.jpeg
/* harmony default export */ const auto2 = ({"src":"/_next/static/media/auto2.b60e7c6c.jpeg","height":667,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKkSX//EABsQAAIBBQAAAAAAAAAAAAAAAAIDAQAEERMi/9oACAEBAAE/AFqN16SCZEDrguRxX//EABcRAQADAAAAAAAAAAAAAAAAAAEAMXH/2gAIAQIBAT8AC9n/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k="});
;// CONCATENATED MODULE: ./public/auto3.webp
/* harmony default export */ const auto3 = ({"src":"/_next/static/media/auto3.0b1ed369.webp","height":460,"width":816,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JQBOgB5vdwsAAP58SJFph/P1hnGoAy6VrfzV5v35SggSIgBbGuxWWAA="});
;// CONCATENATED MODULE: ./public/auto4.jpeg
/* harmony default export */ const auto4 = ({"src":"/_next/static/media/auto4.8e1c5b34.jpeg","height":1157,"width":2056,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJAT/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQQCAxEAMf/aAAgBAQABPwAOvN1ClhuycBPM8Gjv/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAAyH/2gAIAQIBAT8ArZiumf/EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwCUf//Z"});
;// CONCATENATED MODULE: ./utils/categoriesDB.js























const date = Date.now();
const currentDate = new Date(date);
let idVal = 0;
const categoriesDb = [
    {
        id: ++idVal,
        author: "Spink",
        type: "main",
        category: "Gospel",
        image: gospel,
        title: "Winning The War in Your Mind",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`
    },
    {
        id: ++idVal,
        author: "Spink",
        type: "main",
        category: "Entertainment",
        image: entertainment,
        title: "Tbhe World of Entertainment",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`
    },
    {
        id: ++idVal,
        author: "Spink",
        type: "main",
        category: "Gadgets",
        image: phone,
        title: "Mobile Accessories",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`
    },
    {
        id: ++idVal,
        author: "Spink",
        type: "main",
        category: "Politics",
        image: politics,
        title: "The World Politics",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`
    },
    {
        id: ++idVal,
        author: "Spink",
        type: "main",
        category: "Automobiles",
        image: automobile,
        title: "The World of Automobiles",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
    cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
    quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
    dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
    adipisci nemo quia quibusdam perferendis.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
    at cumque. Quaerat debitis quo exercitationem dolores illum cumque
    quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
    quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Automobiles",
        image: auto3,
        title: "The World of Automobiles",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Automobiles",
        image: auto2,
        title: "Car Assembling Plants",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Automobiles",
        image: auto3,
        title: "Power Bikes",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Automobiles",
        image: auto4,
        title: "Modern Customized Train",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gospel",
        image: gospel2,
        title: "The Replacement Principle",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gospel",
        image: gospel3,
        title: "Why I Can't Change",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gospel",
        label: "new",
        image: gospel4,
        title: "Learn to Love in Four Steps",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gospel",
        image: gospel5,
        title: "Love One Another",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Politics",
        image: nigeria,
        title: "The Nigerian Politics",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Politics",
        image: canada,
        title: "The Canadian Politics",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Politics",
        image: america,
        title: "The American Politics",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Politics",
        image: india,
        title: "The Indian Politics",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gadgets",
        image: earbud,
        title: "The Climax III Earbud",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gadgets",
        image: applewatch,
        title: "The Apple Wrist Watch",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Gadgets",
        image: phone,
        title: "The New Android Phones",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Gadgets",
        image: laptop,
        title: "The Famous CoreXX Laptop",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Entertainment",
        image: movies,
        title: "The World of Movies",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Entertainment",
        image: music,
        title: "The World of Music",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        category: "Entertainment",
        image: sports,
        title: "The World of Sports",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    },
    {
        id: ++idVal * 2,
        author: "Spink",
        type: "children",
        label: "new",
        category: "Entertainment",
        image: comedy,
        title: "The World of Comedy",
        createdAt: currentDate.toDateString(),
        story: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Vero eum at cumque. Quaerat debitis quo exercitationem dolores illum 
            cumquequod officia molestiae cupiditate minima tenetur, adipisci nemo 
            quia quibusdam perferendis. Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Vero eum at cumque. Quaerat debitis quo exercitationem 
            dolores illum cumque quod officia molestiae cupiditate minima tenetur, 
            adipisci nemo quia quibusdam perferendis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum
            at cumque. Quaerat debitis quo exercitationem dolores illum cumque
            quod officia molestiae cupiditate minima tenetur, adipisci nemo quia
            quibusdam perferendis.`
    }, 
];


/***/ })

};
;