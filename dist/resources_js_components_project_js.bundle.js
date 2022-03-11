"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_project_js"],{

/***/ "./resources/js/components/get.js":
/*!****************************************!*\
  !*** ./resources/js/components/get.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar GetProject = function GetProject(data, link) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isLoaded = _useState4[0],\n      setIsLoaded = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      items = _useState6[0],\n      setItems = _useState6[1];\n\n  var result;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetch(link, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    }).then(function (response) {\n      return response.json();\n    }).then(function (data) {\n      setIsLoaded(true);\n      setItems(data);\n    }, function (error) {\n      setIsLoaded(true);\n      setError(error);\n    });\n  }, []);\n\n  if (error) {\n    result = react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"error: \", error.message);\n  }\n\n  if (!isLoaded) {\n    result = react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading...\");\n  }\n\n  if (!error && isLoaded) {\n    result = items;\n  }\n\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetProject);\n\n//# sourceURL=webpack:///./resources/js/components/get.js?");

/***/ }),

/***/ "./resources/js/components/project.js":
/*!********************************************!*\
  !*** ./resources/js/components/project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get */ \"./resources/js/components/get.js\");\n\n\n\n\nvar ProjectView = function ProjectView() {\n  var urlParams = new URLSearchParams(window.location.search);\n  var id = urlParams.get('id');\n  var data = {\n    single: true,\n    id: id,\n    table: 'project',\n    column: ['title', 'content', 'link', 'link2', 'image', 'showBtn', 'created']\n  };\n  var dataSkillImages = {\n    single: false,\n    id: id,\n    table: 'project_images',\n    table2: {\n      'table': '[<]project_skills',\n      'id': 'project_skills_id'\n    },\n    column: ['project_skills.name', 'project_skills.link'],\n    getId: 'project_id',\n    order: {\n      'column': 'id',\n      'direction': 'ASC'\n    }\n  };\n  var dataWorkFlow = {\n    single: false,\n    id: id,\n    table: 'project_workflow',\n    column: ['name', 'content', 'img'],\n    getId: 'project_id'\n  };\n  var getData = (0,_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, './skills.php');\n  var getSkillImagesData = (0,_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataSkillImages, './skills.php');\n  var getWorkFlowData = (0,_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataWorkFlow, './skills.php');\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"container view\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewNav, {\n    props: getData.title\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewHeader, {\n    props: getData.title\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewHistory, {\n    props: getData.content\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewBtn, {\n    props: getData\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewSkills, {\n    props: getSkillImagesData\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewFrontImage, {\n    props: getData\n  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectViewWorkFlow, {\n    props: getWorkFlowData\n  }));\n};\n\nvar ProjectViewNav = function ProjectViewNav(data) {\n  var title;\n\n  if (data.props !== undefined) {\n    title = data.props;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"container row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/index.php#project\"\n  }, \"Hem\"), \">\", react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, title));\n};\n\nfunction ProjectViewHeader(data) {\n  var title;\n\n  if (data.props !== undefined) {\n    title = data.props;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, title);\n}\n\nfunction ProjectViewHistory(data) {\n  var content;\n\n  if (data.props !== undefined) {\n    content = data.props;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    \"aria-labelledby\": \"background-title\",\n    className: \"container row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", {\n    id: \"background-title\"\n  }, \"Bakgrundshistoria\"), react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, content)));\n}\n\nfunction ProjectViewBtn(data) {\n  var link;\n  var link2;\n\n  if (data.props.link !== undefined || data.props.link2 !== undefined) {\n    link = react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      rel: \"noreferrer noopener\",\n      target: \"_blank\",\n      href: data.props.link,\n      className: \"boxBtn\"\n    }, \"Live Demo\");\n    link2 = react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      rel: \"noreferrer noopener\",\n      target: \"_blank\",\n      href: data.props.link2,\n      className: \"boxBtn\"\n    }, \"GitHub\");\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"container row\"\n  }, link, link2);\n}\n\nfunction ProjectViewSkills(data) {\n  var newArr = [];\n\n  if (data.props.length !== 0 && data.props instanceof Array) {\n    data.props.map(function (obj) {\n      newArr.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: obj.link,\n        title: obj.name,\n        key: obj.name\n      }));\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"toolImg\"\n  }, newArr);\n}\n\nfunction ProjectViewFrontImage(data) {\n  var title;\n  var image;\n\n  if (data.props.title !== undefined || data.props.image !== undefined) {\n    title = data.props.title;\n    image = data.props.image;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"container row\"\n  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: image,\n    title: title,\n    alt: title\n  })));\n}\n\nfunction ProjectViewWorkFlow(data) {\n  var newArr = [];\n\n  if (data.props.length !== 0 && data.props instanceof Array) {\n    data.props.map(function (obj) {\n      newArr.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", {\n        key: obj.name\n      }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, obj.content), react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figure\", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: obj.img,\n        alt: obj.name\n      }), react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"figcaption\", null, obj.name))));\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"section\", {\n    className: \"workFlow\"\n  }, newArr);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectView);\n\n//# sourceURL=webpack:///./resources/js/components/project.js?");

/***/ })

}]);