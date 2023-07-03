"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _const = require("../../utils/const");
var _arrow = _interopRequireDefault(require("../../assets/arrow.svg"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Years = _ref => {
  let {
    choosenYear,
    setYearOptionIsOpen,
    yearOptionIsOpen,
    setChoosenYear
  } = _ref;
  const setYear = year => {
    setChoosenYear(Number(year));
    setYearOptionIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selectYear-react-date-picker-janouy"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectYearTitle-react-date-picker-janouy",
    "data-testid": "selectedYear",
    onClick: e => setYearOptionIsOpen(!yearOptionIsOpen)
  }, choosenYear, /*#__PURE__*/_react.default.createElement("img", {
    className: "selectArrow-react-date-picker-janouy",
    src: _arrow.default,
    alt: "arrow"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: yearOptionIsOpen ? "selectYearsOptions-react-date-picker-janouy" : "selectOptionClosed-react-date-picker-janouy",
    "data-testid": "openYearsListContent"
  }, _const.years.map((year, index) => year === choosenYear ? /*#__PURE__*/_react.default.createElement("div", {
    key: index,
    className: "selectedYearOption-react-date-picker-janouy"
  }, year) : /*#__PURE__*/_react.default.createElement("div", {
    className: "option-react-date-picker-janouy",
    "data-testid": "oneYear",
    key: index,
    onClick: e => setYear(e.target.innerHTML)
  }, year))));
};
var _default = Years;
exports.default = _default;