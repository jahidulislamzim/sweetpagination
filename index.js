"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Components/SweetPagination.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SweetPagination = function SweetPagination(_ref) {
  var dataPerPage = _ref.dataPerPage,
      getData = _ref.getData,
      currentPageData = _ref.currentPageData,
      navigation = _ref.navigation,
      getStyle = _ref.getStyle;
  var pageNumbers = [];
  var showPagination = [];

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      dataPerPageState = _useState4[0],
      setDataPerPageState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      navigationState = _useState6[0],
      setNavigationState = _useState6[1];

  var _useState7 = (0, _react.useState)([1, 2, 3, 4, 5]),
      _useState8 = _slicedToArray(_useState7, 2),
      showPaginationState = _useState8[0],
      setShowPaginationState = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      style = _useState10[0],
      setStyle = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      styleCustom = _useState12[0],
      setStyleCustom = _useState12[1];

  var _useState13 = (0, _react.useState)([1, 2, 3, 4, 5]),
      _useState14 = _slicedToArray(_useState13, 2),
      newPageData = _useState14[0],
      setNewPageData = _useState14[1];

  for (var i = 1; i <= Math.ceil(getData.length / dataPerPageState); i++) {
    pageNumbers.push(i);
  }

  (0, _react.useEffect)(function () {
    for (var _i2 = 1; _i2 <= 5; _i2++) {
      showPagination.push(_i2);
    }
  }, []); // update item on button chick

  (0, _react.useEffect)(function () {
    // update right to left
    if (currentPage === showPaginationState.at(-1)) {
      if (showPaginationState.at(-1) === pageNumbers.at(-2)) {
        showPaginationState.shift();
        setShowPaginationState([].concat(_toConsumableArray(showPaginationState), [currentPage + 1]));
      } else if (showPaginationState.at(-1) <= pageNumbers.at(-3)) {
        showPaginationState.shift();
        showPaginationState.shift();
        setShowPaginationState([].concat(_toConsumableArray(showPaginationState), [currentPage + 1, currentPage + 2]));
      }
    } else if (currentPage === showPaginationState.at(-2)) {
      if (showPaginationState.at(-2) === pageNumbers.at(-2)) {
        setShowPaginationState(_toConsumableArray(showPaginationState));
      } else if (showPaginationState.at(-1) <= pageNumbers.at(-1)) {
        showPaginationState.shift();
        setShowPaginationState([].concat(_toConsumableArray(showPaginationState), [currentPage + 2]));
      }
    } //  update left to right 


    if (pageNumbers.at(1) <= showPaginationState.at(0)) {
      if (pageNumbers.at(1) === currentPage) {
        showPaginationState.unshift(currentPage - 1);
        showPaginationState.pop();
      } else if (showPaginationState.at(0) === currentPage) {
        showPaginationState.unshift(currentPage - 2, currentPage - 1);
        showPaginationState.pop();
        showPaginationState.pop();
      } else if (currentPage === showPaginationState.at(1)) {
        showPaginationState.unshift(currentPage - 2);
        showPaginationState.pop();
      }
    }
  }, [currentPage]); //  initialize page data

  (0, _react.useEffect)(function () {
    if (!dataPerPage) {
      setDataPerPageState(10);
    } else {
      setDataPerPageState(dataPerPage);
    }
  }, [dataPerPage, getData]); // Navigation State Update

  (0, _react.useEffect)(function () {
    setNavigationState(navigation);
  }, [navigation]); // Get current Data

  var indexOfLastPost = currentPage * dataPerPageState;
  var indexOfFirstPost = indexOfLastPost - dataPerPageState;
  var NewCurrentPageData = getData.slice(indexOfFirstPost, indexOfLastPost);
  (0, _react.useEffect)(function () {
    currentPageData(NewCurrentPageData);

    if (pageNumbers.length > 10) {
      setNewPageData(NewCurrentPageData);
    }
  }, [currentPage, dataPerPageState, getData]);
  (0, _react.useEffect)(function () {
    if (newPageData.length === 0) {
      showPaginationState.pop();
      setCurrentPage(showPaginationState.at(-1));
    }
  }, [newPageData.length === 0]);

  var handleCurrentPage = function handleCurrentPage(pageNumber) {
    setCurrentPage(pageNumber);
  };

  var handleDirectFirstPage = function handleDirectFirstPage() {
    setShowPaginationState([1, 2, 3, 4, 5]);
  };

  var handleDirectLastPage = function handleDirectLastPage() {
    setShowPaginationState([pageNumbers.at(-5), pageNumbers.at(-4), pageNumbers.at(-3), pageNumbers.at(-2), pageNumbers.at(-1)]);
  }; // button style section 


  (0, _react.useEffect)(function () {
    if (!getStyle) {
      setStyle('sweetPagination');
      setStyleCustom('');
    } else if (getStyle && getStyle !== 'style-custom') {
      setStyle(getStyle);
      setStyleCustom('');
    } else if (getStyle === 'style-custom') {
      setStyleCustom('style-custom');
    }
  }, [getStyle]); // Main button function 

  if (pageNumbers.length > 10) {
    return /*#__PURE__*/_react["default"].createElement("nav", {
      className: "sweetPagination ".concat(style)
    }, /*#__PURE__*/_react["default"].createElement("ul", {
      className: "paginationUL"
    }, navigationState && (currentPage === 1 ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "pageButton commonButtonStyle leftNavigation"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "navigationIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, " ", /*#__PURE__*/_react["default"].createElement("path", {
      d: "M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
    })))) : /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleCurrentPage(currentPage - 1);
      },
      className: "pageButton commonButtonStyle leftNavigation"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "navigationIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, " ", /*#__PURE__*/_react["default"].createElement("path", {
      d: "M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
    }))))), showPaginationState.at(0) > pageNumbers.at(0) && /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        handleCurrentPage(pageNumbers.at(0));
        handleDirectFirstPage();
      },
      className: currentPage === pageNumbers.at(0) ? "pageButton activeButton" : "pageButton commonButtonStyle"
    }, pageNumbers.at(0))), /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "pageButton commonButtonStyle"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "dottedIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    }))))), showPaginationState.map(function (number) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: number,
        className: "pageItem"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          return handleCurrentPage(number);
        },
        className: currentPage === number ? "pageButton activeButton commonButtonStyle" : "pageButton commonButtonStyle ".concat(styleCustom)
      }, number));
    }), showPaginationState.at(-1) < pageNumbers.at(-1) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "pageButton commonButtonStyle"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "dottedIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
    })))), /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        handleCurrentPage(pageNumbers.at(-1));
        handleDirectLastPage();
      },
      className: currentPage === pageNumbers.at(-1) ? "pageButton activeButton" : "pageButton commonButtonStyle ".concat(styleCustom)
    }, pageNumbers.at(-1)))), navigationState && (currentPage === pageNumbers.at(-1) ? /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "pageButton commonButtonStyle rightNavigation"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "navigationIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
    })))) : /*#__PURE__*/_react["default"].createElement("li", {
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleCurrentPage(currentPage + 1);
      },
      className: "pageButton commonButtonStyle rightNavigation"
    }, /*#__PURE__*/_react["default"].createElement("svg", {
      className: "navigationIcon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 512"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      d: "M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
    })))))));
  }

  ;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "sweetPagination ".concat(style)
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "paginationUL"
  }, pageNumbers.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: number,
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handleCurrentPage(number);
      },
      className: currentPage === number ? "pageButton activeButton commonButtonStyle" : "pageButton commonButtonStyle ".concat(styleCustom)
    }, number));
  })));
};

var _default = SweetPagination;
exports["default"] = _default;
