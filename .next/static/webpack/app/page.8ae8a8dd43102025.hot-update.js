"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-client)/./utils/index.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constant */ \"(app-client)/./constant/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ \"(app-client)/./components/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    // *** server side rendering ***\n    // export default async function Home({ searchParams }: HomeProps) {\n    //   const allCars = await fetchCars({\n    //     manufacturer: searchParams.manufacturer || \"\",\n    //     year: searchParams.year || 2022,\n    //     fuel: searchParams.fuel || \"\",\n    //     limit: searchParams.limit || 10,\n    //     model: searchParams.model || \"\",\n    //   });\n    const [allCars, setAllCars] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    // search states\n    const [manufacturer, setManufacturer] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [model, setModel] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    //filter states \n    const [fuel, setFuel] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [year, setYear] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2022);\n    // limmit\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(10);\n    // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;\n    const getCars = async ()=>{\n        setLoading(true);\n        try {\n            const result = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fetchCars)({\n                manufacturer: manufacturer.toLowerCase() || \"\",\n                model: model.toLowerCase() || \"\",\n                fuel: fuel.toLowerCase() || \"\",\n                year: year || \"2022\",\n                limit: limit || 10\n            });\n            setAllCars(result);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        getCars();\n    }, [\n        manufacturer,\n        model,\n        fuel,\n        year,\n        limit\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Hero, {}, void 0, false, {\n                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-12 padding-x padding-y max-width\",\n                id: \"discover\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home__text-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-4xl font-extrabold\",\n                                children: \"Car Catalogue\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Explore out cars you might like\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home__filters\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.SearchBar, {\n                                setManufacturer: setManufacturer,\n                                setModel: setModel\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"home__filter-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomFilter, {\n                                        title: \"fuel\",\n                                        options: _constant__WEBPACK_IMPORTED_MODULE_2__.fuels,\n                                        setFuel: setFuel\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomFilter, {\n                                        title: \"year\",\n                                        options: _constant__WEBPACK_IMPORTED_MODULE_2__.yearsOfProduction,\n                                        setYear: setYear\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    allCars.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"home__cars-wrapper\",\n                                children: allCars === null || allCars === void 0 ? void 0 : allCars.map((car)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CarCard, {\n                                        car: car\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-16 w-full flex-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                                    src: \"./loader.svg\",\n                                    width: 50,\n                                    height: 50,\n                                    alt: \"loading\",\n                                    className: \"object-container\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.ShowMore, {\n                                pageNumber: limit / 10,\n                                isNext: limit > allCars.length,\n                                setLimit: setLimit\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this) : !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"home__error-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-black text-xl font-bold\",\n                                children: \"Oops, no results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: allCars === null || allCars === void 0 ? void 0 : allCars.message\n                            }, void 0, false, {\n                                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dongtuna/Documents/NextJs/testNext/showroomCar-ver-client/app/page.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qwF09tZ50XDl5DprICMG8+N2Eo4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNvQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNrQjtnQ0FBR2xCLFdBQVU7MENBQStCOzs7Ozs7MENBQzdDLDhEQUFDSTswQ0FBR3pCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekI7R0E3R3lCekM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGZldGNoQ2FycyB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgeyBmdWVscywgeWVhcnNPZlByb2R1Y3Rpb24gfSBmcm9tIFwiQC9jb25zdGFudFwiO1xuaW1wb3J0IHsgQ2FyQ2FyZCwgU2VhcmNoQmFyLCBDdXN0b21GaWx0ZXIsIEhlcm8sU2hvd01vcmUgfSBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgLHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgIGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vICoqKiBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgKioqXG4gIC8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEhvbWUoeyBzZWFyY2hQYXJhbXMgfTogSG9tZVByb3BzKSB7XG4gIC8vICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGZldGNoQ2Fycyh7XG4gIC8vICAgICBtYW51ZmFjdHVyZXI6IHNlYXJjaFBhcmFtcy5tYW51ZmFjdHVyZXIgfHwgXCJcIixcbiAgLy8gICAgIHllYXI6IHNlYXJjaFBhcmFtcy55ZWFyIHx8IDIwMjIsXG4gIC8vICAgICBmdWVsOiBzZWFyY2hQYXJhbXMuZnVlbCB8fCBcIlwiLFxuICAvLyAgICAgbGltaXQ6IHNlYXJjaFBhcmFtcy5saW1pdCB8fCAxMCxcbiAgLy8gICAgIG1vZGVsOiBzZWFyY2hQYXJhbXMubW9kZWwgfHwgXCJcIixcbiAgLy8gICB9KTtcblxuICBjb25zdCBbYWxsQ2Fycywgc2V0QWxsQ2Fyc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBzZWFyY2ggc3RhdGVzXG5cbiAgY29uc3QgW21hbnVmYWN0dXJlciwgc2V0TWFudWZhY3R1cmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbW9kZWwsIHNldE1vZGVsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vZmlsdGVyIHN0YXRlcyBcbiAgY29uc3QgW2Z1ZWwsIHNldEZ1ZWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKDIwMjIpO1xuXG4gIC8vIGxpbW1pdFxuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKDEwKTtcblxuXG4gIC8vIGNvbnN0IGlzRGF0YUVtcHR5ID0gIUFycmF5LmlzQXJyYXkoYWxsQ2FycykgfHwgYWxsQ2Fycy5sZW5ndGggPCAxIHx8ICFhbGxDYXJzO1xuXG4gIGNvbnN0IGdldENhcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2hDYXJzKHtcbiAgICAgICAgbWFudWZhY3R1cmVyOm1hbnVmYWN0dXJlci50b0xvd2VyQ2FzZSgpIHx8IFwiXCIsXG4gICAgICAgIG1vZGVsOiBtb2RlbC50b0xvd2VyQ2FzZSgpIHx8IFwiXCIsXG4gICAgICAgIGZ1ZWw6IGZ1ZWwudG9Mb3dlckNhc2UoKSB8fCBcIlwiLFxuICAgICAgICB5ZWFyOiB5ZWFyIHx8IFwiMjAyMlwiLFxuICAgICAgICBsaW1pdDogbGltaXQgfHwgMTBcbiAgICAgIH0pXG5cbiAgICAgIHNldEFsbENhcnMocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1maW5hbGx5e1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZ2V0Q2FycygpO1xuICB9LFttYW51ZmFjdHVyZXIsIG1vZGVsLCBmdWVsLCB5ZWFyLGxpbWl0XSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuJz5cbiAgICAgIDxIZXJvIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMiBwYWRkaW5nLXggcGFkZGluZy15IG1heC13aWR0aCcgaWQ9J2Rpc2NvdmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWVfX3RleHQtY29udGFpbmVyJz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCc+Q2FyIENhdGFsb2d1ZTwvaDE+XG4gICAgICAgICAgPHA+RXhwbG9yZSBvdXQgY2FycyB5b3UgbWlnaHQgbGlrZTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWVfX2ZpbHRlcnMnPlxuICAgICAgICAgIDxTZWFyY2hCYXIgc2V0TWFudWZhY3R1cmVyPXtzZXRNYW51ZmFjdHVyZXJ9IHNldE1vZGVsPXtzZXRNb2RlbH0gLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob21lX19maWx0ZXItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxDdXN0b21GaWx0ZXIgdGl0bGU9J2Z1ZWwnIG9wdGlvbnM9e2Z1ZWxzfSBzZXRGdWVsPXtzZXRGdWVsfSAvPlxuICAgICAgICAgICAgPEN1c3RvbUZpbHRlciB0aXRsZT0neWVhcicgb3B0aW9ucz17eWVhcnNPZlByb2R1Y3Rpb259IHNldFllYXI9e3NldFllYXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthbGxDYXJzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZV9fY2Fycy13cmFwcGVyJz5cbiAgICAgICAgICAgICAge2FsbENhcnM/Lm1hcCgoY2FyKSA9PiAoXG4gICAgICAgICAgICAgICAgPENhckNhcmQgY2FyPXtjYXJ9IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiB3LWZ1bGwgZmxleC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz0nLi9sb2FkZXIuc3ZnJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgIGFsdD0nbG9hZGluZydcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxTaG93TW9yZVxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI9e2xpbWl0LzEwfVxuICAgICAgICAgICAgICAgIGlzTmV4dCA9IHtsaW1pdCA+IGFsbENhcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgIHNldExpbWl0PXtzZXRMaW1pdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAhbG9hZGluZyAmJiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZV9fZXJyb3ItY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtYmxhY2sgdGV4dC14bCBmb250LWJvbGQnPk9vcHMsIG5vIHJlc3VsdHM8L2gyPlxuICAgICAgICAgICAgPHA+e2FsbENhcnM/Lm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiZmV0Y2hDYXJzIiwiZnVlbHMiLCJ5ZWFyc09mUHJvZHVjdGlvbiIsIkNhckNhcmQiLCJTZWFyY2hCYXIiLCJDdXN0b21GaWx0ZXIiLCJIZXJvIiwiU2hvd01vcmUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJhbGxDYXJzIiwic2V0QWxsQ2FycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibWFudWZhY3R1cmVyIiwic2V0TWFudWZhY3R1cmVyIiwibW9kZWwiLCJzZXRNb2RlbCIsImZ1ZWwiLCJzZXRGdWVsIiwieWVhciIsInNldFllYXIiLCJsaW1pdCIsInNldExpbWl0IiwiZ2V0Q2FycyIsInJlc3VsdCIsInRvTG93ZXJDYXNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwiaDEiLCJwIiwidGl0bGUiLCJvcHRpb25zIiwibGVuZ3RoIiwic2VjdGlvbiIsIm1hcCIsImNhciIsIkltYWdlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwYWdlTnVtYmVyIiwiaXNOZXh0IiwiaDIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});