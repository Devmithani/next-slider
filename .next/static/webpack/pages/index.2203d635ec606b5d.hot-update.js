"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Righteous_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\index.tsx\",\"import\":\"Righteous\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\index.tsx\\\",\\\"import\\\":\\\"Righteous\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Righteous_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Righteous_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BackgroundImage */ \"./components/BackgroundImage.tsx\");\n/* harmony import */ var _components_Slides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Slides */ \"./components/Slides.tsx\");\n/* harmony import */ var _components_SlideInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/SlideInfo */ \"./components/SlideInfo.tsx\");\n/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Controls */ \"./components/Controls.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(sliderData.slice(1));\n    const [transitionData, setTransitionData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(sliderData[0]);\n    const [currentSlideData, setCurrentSlideData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        data: initData,\n        index: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"\\n       \".concat((next_font_google_target_css_path_pages_index_tsx_import_Righteous_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().className), \"\\n        relative min-h-screen select-none overflow-hidden text-white antialiased\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgroundImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    transitionData: transitionData,\n                    currentSlideData: currentSlideData\n                }, void 0, false, {\n                    fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"  absolute z-20  h-full w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex h-full w-full grid-cols-10 flex-col md:grid\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SlideInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        transitionData: transitionData,\n                                        currentSlideData: currentSlideData\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Slides__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            data: data\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Controls__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            currentSlideData: currentSlideData,\n                                            data: data,\n                                            transitionData: transitionData,\n                                            initData: initData,\n                                            handleData: setData,\n                                            handleTransitionData: setTransitionData,\n                                            handleCurrentSlideData: setCurrentSlideData,\n                                            sliderData: sliderData\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\projects-for-git-profiles\\\\mithani\\\\nextjs-animated-slider\\\\pages\\\\index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Jpb/yfVpOq0BEzroC97xBWAMYX8=\");\n_c = Home;\nconst sliderData = [\n    {\n        img: \"https://png.pngtree.com/background/20230428/original/pngtree-wide-road-in-foggy-nature-picture-image_2498736.jpg\",\n        location: \"Switzrerland Apls\",\n        description: \"The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire\",\n        title: \"SAINT ANT\\xd6NEN\"\n    },\n    {\n        img: \"https://hips.hearstapps.com/hmg-prod/images/sunrise-quotes-21-1586892331.jpg?crop=1.00xw:0.892xh;0,0&resize=1200:*\",\n        title: \"The Grand Canyon\",\n        description: \"The earth's geological history opens before your eyes in a mile-deep chasm\",\n        location: \"Arizona\"\n    },\n    {\n        img: \"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/362ab4d7-6228-4d21-a4f5-215c1c6ce6b7/dg1xza9-89a59a81-a9e4-45b5-8a6f-bee951fe75c9.png/v1/fill/w_900,h_510,q_80,strp/the_most_beautiful_nature_beauty_by_aiartshop_dg1xza9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM2MmFiNGQ3LTYyMjgtNGQyMS1hNGY1LTIxNWMxYzZjZTZiN1wvZGcxeHphOS04OWE1OWE4MS1hOWU0LTQ1YjUtOGE2Zi1iZWU5NTFmZTc1YzkucG5nIiwiaGVpZ2h0IjoiPD01MTAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzM2MmFiNGQ3LTYyMjgtNGQyMS1hNGY1LTIxNWMxYzZjZTZiN1wvYWlhcnRzaG9wLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.5T7sUEUyHyplW0nTPaIsHQT8AfYvSxwCzwQALQru0NI\",\n        title: \"Masai Mara\",\n        description: \"Wild animals in their natural environment, luxury safari lodges\",\n        location: \"Kenya\"\n    },\n    {\n        img: \"/5.png\",\n        title: \"Angkor Wat\",\n        description: \"A stunning ancient jungle city with hundreds of intricately constructed temples\",\n        location: \"Cambodia\"\n    },\n    {\n        img: \"/7.png\",\n        title: \"Bali\",\n        description: \"Tropical beaches, volcano hikes, ancient temples, and friendly people\",\n        location: \"Indonesia\"\n    }\n];\nconst initData = sliderData[0];\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU01BO0FBUjBDO0FBQ3RCO0FBQ2U7QUFDa0I7QUFDbEI7QUFDTTtBQUNGO0FBa0I5QixTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjUyxDQUFTQyxXQUFXQyxNQUFNO0lBQ2hFLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2IscURBQWNTLENBQ3hEQyxVQUFVLENBQUMsRUFBRTtJQUVmLE1BQU0sQ0FBQ0ksa0JBQWtCQyxvQkFBb0IsR0FDM0NmLHFEQUFjUyxDQUFtQjtRQUMvQkYsTUFBTVM7UUFDTkMsT0FBTztJQUNUO0lBRUYscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsWUFDUSxPQUFoQnJCLDJLQUFlcUIsRUFBQztrQkFHbkIsNEVBQUNwQiwwREFBZUE7OzhCQUNkLDhEQUFDRyxtRUFBZUE7b0JBQ2RVLGdCQUFnQkE7b0JBQ2hCRSxrQkFBa0JBOzs7Ozs7OEJBRXBCLDhEQUFDTTtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNsQiwwREFBTUE7Ozs7O3NDQUNQLDhEQUFDbUI7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBSUQsV0FBVTs4Q0FDYiw0RUFBQ2YsNkRBQVNBO3dDQUNSUSxnQkFBZ0JBO3dDQUNoQkUsa0JBQWtCQTs7Ozs7Ozs7Ozs7OENBR3RCLDhEQUFDTTtvQ0FBSUQsV0FBVTs7c0RBQ2IsOERBQUNoQiwwREFBTUE7NENBQUNJLE1BQU1BOzs7Ozs7c0RBQ2QsOERBQUNGLDREQUFRQTs0Q0FDUFMsa0JBQWtCQTs0Q0FDbEJQLE1BQU1BOzRDQUNOSyxnQkFBZ0JBOzRDQUNoQkksVUFBVUE7NENBQ1ZLLFlBQVliOzRDQUNaYyxzQkFBc0JUOzRDQUN0QlUsd0JBQXdCUjs0Q0FDeEJMLFlBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QjtHQWpEd0JKO0tBQUFBO0FBbUR4QixNQUFNSSxhQUFhO0lBQ2pCO1FBQ0VjLEtBQUs7UUFDTEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE9BQU87SUFDVDtJQUNBO1FBQ0VILEtBQUs7UUFDTEcsT0FBTztRQUNQRCxhQUNFO1FBQ0ZELFVBQVU7SUFDWjtJQUNBO1FBQ0VELEtBQUs7UUFDTEcsT0FBTztRQUNQRCxhQUNFO1FBQ0ZELFVBQVU7SUFDWjtJQUNBO1FBQ0VELEtBQUs7UUFDTEcsT0FBTztRQUNQRCxhQUNFO1FBQ0ZELFVBQVU7SUFDWjtJQUNBO1FBQ0VELEtBQUs7UUFDTEcsT0FBTztRQUNQRCxhQUNFO1FBQ0ZELFVBQVU7SUFDWjtDQUNEO0FBRUQsTUFBTVQsV0FBV04sVUFBVSxDQUFDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmlnaHRlb3VzIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgQmFja2dyb3VuZEltYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvQmFja2dyb3VuZEltYWdlXCI7XG5pbXBvcnQgU2xpZGVzIGZyb20gXCJAL2NvbXBvbmVudHMvU2xpZGVzXCI7XG5pbXBvcnQgU2xpZGVJbmZvIGZyb20gXCJAL2NvbXBvbmVudHMvU2xpZGVJbmZvXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIkAvY29tcG9uZW50cy9Db250cm9sc1wiO1xuXG5jb25zdCBpbnRlciA9IFJpZ2h0ZW91cyh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjQwMFwiXSxcbn0pO1xuZXhwb3J0IHR5cGUgRGF0YSA9IHtcbiAgaW1nOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDdXJyZW50U2xpZGVEYXRhID0ge1xuICBkYXRhOiBEYXRhO1xuICBpbmRleDogbnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gUmVhY3QudXNlU3RhdGU8RGF0YVtdPihzbGlkZXJEYXRhLnNsaWNlKDEpKTtcbiAgY29uc3QgW3RyYW5zaXRpb25EYXRhLCBzZXRUcmFuc2l0aW9uRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRhPihcbiAgICBzbGlkZXJEYXRhWzBdXG4gICk7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGVEYXRhLCBzZXRDdXJyZW50U2xpZGVEYXRhXSA9XG4gICAgUmVhY3QudXNlU3RhdGU8Q3VycmVudFNsaWRlRGF0YT4oe1xuICAgICAgZGF0YTogaW5pdERhdGEsXG4gICAgICBpbmRleDogMCxcbiAgICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAke2ludGVyLmNsYXNzTmFtZX1cbiAgICAgICAgcmVsYXRpdmUgbWluLWgtc2NyZWVuIHNlbGVjdC1ub25lIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXdoaXRlIGFudGlhbGlhc2VkYH1cbiAgICA+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8QmFja2dyb3VuZEltYWdlXG4gICAgICAgICAgdHJhbnNpdGlvbkRhdGE9e3RyYW5zaXRpb25EYXRhfVxuICAgICAgICAgIGN1cnJlbnRTbGlkZURhdGE9e2N1cnJlbnRTbGlkZURhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBhYnNvbHV0ZSB6LTIwICBoLWZ1bGwgdy1mdWxsXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggaC1mdWxsIHctZnVsbCBncmlkLWNvbHMtMTAgZmxleC1jb2wgbWQ6Z3JpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sLXNwYW4tNCBtYi0zIGZsZXggaC1mdWxsIGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBweC01IG1kOm1iLTAgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6cHgtMTBcIj5cbiAgICAgICAgICAgICAgPFNsaWRlSW5mb1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EYXRhPXt0cmFuc2l0aW9uRGF0YX1cbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGVEYXRhPXtjdXJyZW50U2xpZGVEYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wtc3Bhbi02IGZsZXggaC1mdWxsIGZsZXgtMSBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtNCBtZDpqdXN0aWZ5LWNlbnRlciBtZDpwLTEwXCI+XG4gICAgICAgICAgICAgIDxTbGlkZXMgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgPENvbnRyb2xzXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlRGF0YT17Y3VycmVudFNsaWRlRGF0YX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EYXRhPXt0cmFuc2l0aW9uRGF0YX1cbiAgICAgICAgICAgICAgICBpbml0RGF0YT17aW5pdERhdGF9XG4gICAgICAgICAgICAgICAgaGFuZGxlRGF0YT17c2V0RGF0YX1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRGF0YT17c2V0VHJhbnNpdGlvbkRhdGF9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ3VycmVudFNsaWRlRGF0YT17c2V0Q3VycmVudFNsaWRlRGF0YX1cbiAgICAgICAgICAgICAgICBzbGlkZXJEYXRhPXtzbGlkZXJEYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9tYWluPlxuICApO1xufVxuXG5jb25zdCBzbGlkZXJEYXRhID0gW1xuICB7XG4gICAgaW1nOiBcImh0dHBzOi8vcG5nLnBuZ3RyZWUuY29tL2JhY2tncm91bmQvMjAyMzA0Mjgvb3JpZ2luYWwvcG5ndHJlZS13aWRlLXJvYWQtaW4tZm9nZ3ktbmF0dXJlLXBpY3R1cmUtaW1hZ2VfMjQ5ODczNi5qcGdcIixcbiAgICBsb2NhdGlvbjogXCJTd2l0enJlcmxhbmQgQXBsc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgam91cm5leSB0byBNYWNodSBQaWNjaHUgdHlwaWNhbGx5IHN0YXJ0cyBpbiB0aGUgbW91bnRhaW4gY2l0eSBvZiBDdXNjbywgd2hpY2ggd2FzIHRoZSBjYXBpdGFsIGNpdHkgb2YgdGhlIEluY2EgRW1waXJlXCIsXG4gICAgdGl0bGU6IFwiU0FJTlQgQU5Uw5ZORU5cIixcbiAgfSxcbiAge1xuICAgIGltZzogXCJodHRwczovL2hpcHMuaGVhcnN0YXBwcy5jb20vaG1nLXByb2QvaW1hZ2VzL3N1bnJpc2UtcXVvdGVzLTIxLTE1ODY4OTIzMzEuanBnP2Nyb3A9MS4wMHh3OjAuODkyeGg7MCwwJnJlc2l6ZT0xMjAwOipcIixcbiAgICB0aXRsZTogXCJUaGUgR3JhbmQgQ2FueW9uXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoZSBlYXJ0aCdzIGdlb2xvZ2ljYWwgaGlzdG9yeSBvcGVucyBiZWZvcmUgeW91ciBleWVzIGluIGEgbWlsZS1kZWVwIGNoYXNtXCIsXG4gICAgbG9jYXRpb246IFwiQXJpem9uYVwiLFxuICB9LFxuICB7XG4gICAgaW1nOiBcImh0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi8zNjJhYjRkNy02MjI4LTRkMjEtYTRmNS0yMTVjMWM2Y2U2YjcvZGcxeHphOS04OWE1OWE4MS1hOWU0LTQ1YjUtOGE2Zi1iZWU5NTFmZTc1YzkucG5nL3YxL2ZpbGwvd185MDAsaF81MTAscV84MCxzdHJwL3RoZV9tb3N0X2JlYXV0aWZ1bF9uYXR1cmVfYmVhdXR5X2J5X2FpYXJ0c2hvcF9kZzF4emE5LWZ1bGx2aWV3LmpwZz90b2tlbj1leUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUoxY200NllYQndPamRsTUdReE9EZzVPREl5TmpRek56TmhOV1l3WkRReE5XVmhNR1F5Tm1Vd0lpd2lhWE56SWpvaWRYSnVPbUZ3Y0RvM1pUQmtNVGc0T1RneU1qWTBNemN6WVRWbU1HUTBNVFZsWVRCa01qWmxNQ0lzSW05aWFpSTZXMXQ3SW5CaGRHZ2lPaUpjTDJaY0x6TTJNbUZpTkdRM0xUWXlNamd0TkdReU1TMWhOR1kxTFRJeE5XTXhZelpqWlRaaU4xd3ZaR2N4ZUhwaE9TMDRPV0UxT1dFNE1TMWhPV1UwTFRRMVlqVXRPR0UyWmkxaVpXVTVOVEZtWlRjMVl6a3VjRzVuSWl3aWFHVnBaMmgwSWpvaVBEMDFNVEFpTENKM2FXUjBhQ0k2SWp3OU9UQXdJbjFkWFN3aVlYVmtJanBiSW5WeWJqcHpaWEoyYVdObE9tbHRZV2RsTG5kaGRHVnliV0Z5YXlKZExDSjNiV3NpT25zaWNHRjBhQ0k2SWx3dmQyMWNMek0yTW1GaU5HUTNMVFl5TWpndE5HUXlNUzFoTkdZMUxUSXhOV014WXpaalpUWmlOMXd2WVdsaGNuUnphRzl3TFRRdWNHNW5JaXdpYjNCaFkybDBlU0k2T1RVc0luQnliM0J2Y25ScGIyNXpJam93TGpRMUxDSm5jbUYyYVhSNUlqb2lZMlZ1ZEdWeUluMTkuNVQ3c1VFVXlIeXBsVzBuVFBhSXNIUVQ4QWZZdlN4d0N6d1FBTFFydTBOSVwiLFxuICAgIHRpdGxlOiBcIk1hc2FpIE1hcmFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2lsZCBhbmltYWxzIGluIHRoZWlyIG5hdHVyYWwgZW52aXJvbm1lbnQsIGx1eHVyeSBzYWZhcmkgbG9kZ2VzXCIsXG4gICAgbG9jYXRpb246IFwiS2VueWFcIixcbiAgfSxcbiAge1xuICAgIGltZzogXCIvNS5wbmdcIixcbiAgICB0aXRsZTogXCJBbmdrb3IgV2F0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgc3R1bm5pbmcgYW5jaWVudCBqdW5nbGUgY2l0eSB3aXRoIGh1bmRyZWRzIG9mIGludHJpY2F0ZWx5IGNvbnN0cnVjdGVkIHRlbXBsZXNcIixcbiAgICBsb2NhdGlvbjogXCJDYW1ib2RpYVwiLFxuICB9LFxuICB7XG4gICAgaW1nOiBcIi83LnBuZ1wiLFxuICAgIHRpdGxlOiBcIkJhbGlcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVHJvcGljYWwgYmVhY2hlcywgdm9sY2FubyBoaWtlcywgYW5jaWVudCB0ZW1wbGVzLCBhbmQgZnJpZW5kbHkgcGVvcGxlXCIsXG4gICAgbG9jYXRpb246IFwiSW5kb25lc2lhXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBpbml0RGF0YSA9IHNsaWRlckRhdGFbMF07XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJSZWFjdCIsIkhlYWRlciIsIkJhY2tncm91bmRJbWFnZSIsIlNsaWRlcyIsIlNsaWRlSW5mbyIsIkNvbnRyb2xzIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJzbGlkZXJEYXRhIiwic2xpY2UiLCJ0cmFuc2l0aW9uRGF0YSIsInNldFRyYW5zaXRpb25EYXRhIiwiY3VycmVudFNsaWRlRGF0YSIsInNldEN1cnJlbnRTbGlkZURhdGEiLCJpbml0RGF0YSIsImluZGV4IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImhhbmRsZURhdGEiLCJoYW5kbGVUcmFuc2l0aW9uRGF0YSIsImhhbmRsZUN1cnJlbnRTbGlkZURhdGEiLCJpbWciLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});