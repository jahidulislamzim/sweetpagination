"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../Components/SweetPagination.css");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SweetPagination = function SweetPagination(_ref) {
  var _ref$dataPerPage = _ref.dataPerPage,
    dataPerPage = _ref$dataPerPage === void 0 ? 10 : _ref$dataPerPage,
    _ref$getData = _ref.getData,
    getData = _ref$getData === void 0 ? [] : _ref$getData,
    currentPageData = _ref.currentPageData,
    _ref$navigation = _ref.navigation,
    navigation = _ref$navigation === void 0 ? true : _ref$navigation,
    getStyle = _ref.getStyle;
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var totalPages = Math.ceil(getData.length / dataPerPage);

  // Style handling
  var style = getStyle && getStyle !== 'style-custom' ? getStyle : 'sweetPagination';
  var customStyle = getStyle === 'style-custom' ? 'style-custom' : '';

  // Get current data
  var indexOfLastPost = currentPage * dataPerPage;
  var indexOfFirstPost = indexOfLastPost - dataPerPage;
  var currentData = getData.slice(indexOfFirstPost, indexOfLastPost);
  (0, _react.useEffect)(function () {
    currentPageData(currentData);
  }, [currentPage, getData, dataPerPage]);

  // Function to generate pagination numbers with ellipsis
  var getPaginationRange = function getPaginationRange() {
    var delta = 2;
    var range = [];
    for (var i = Math.max(1, currentPage - delta); i <= Math.min(totalPages, currentPage + delta); i++) {
      range.push(i);
    }
    if (range[0] !== 1) range.unshift('...');
    if (range[range.length - 1] !== totalPages) range.push('...');
    return range;
  };
  var handlePageChange = function handlePageChange(num) {
    if (num === '...') return;
    setCurrentPage(num);
  };
  if (totalPages <= 1) return null; // No pagination needed

  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "".concat(style)
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "paginationUL"
  }, navigation && /*#__PURE__*/_react["default"].createElement("li", {
    className: "pageItem"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "pageButton commonButtonStyle leftNavigation",
    onClick: function onClick() {
      return currentPage > 1 && setCurrentPage(currentPage - 1);
    },
    disabled: currentPage === 1
  }, "<")), getPaginationRange().map(function (num, idx) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: idx,
      className: "pageItem"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handlePageChange(num);
      },
      className: currentPage === num ? 'pageButton activeButton commonButtonStyle' : "pageButton commonButtonStyle ".concat(customStyle),
      disabled: num === '...'
    }, num));
  }), navigation && /*#__PURE__*/_react["default"].createElement("li", {
    className: "pageItem"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "pageButton commonButtonStyle rightNavigation",
    onClick: function onClick() {
      return currentPage < totalPages && setCurrentPage(currentPage + 1);
    },
    disabled: currentPage === totalPages
  }, ">"))));
};
var _default = exports["default"] = SweetPagination;
