"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
var _arrow = _interopRequireDefault(require("../assets/arrow.svg"));
var _house = _interopRequireDefault(require("../assets/house.svg"));
var _Months = _interopRequireDefault(require("../components/Months"));
var _Years = _interopRequireDefault(require("../components/Years"));
var _InnerCalendar = _interopRequireDefault(require("../components/InnerCalendar"));
var _functions = require("../utils/functions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Calendar = _ref => {
  let {
    isCalendarOpen,
    setIsCalendarOpen,
    handleSelectedDate,
    language,
    dateFormat
  } = _ref;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const [choosenYear, setChoosenYear] = (0, _react.useState)("");
  const [choosenMonth, setChoosenMonth] = (0, _react.useState)("");
  const [monthOptionIsOpen, setMonthOptionIsOpen] = (0, _react.useState)(false);
  const [yearOptionIsOpen, setYearOptionIsOpen] = (0, _react.useState)(false);
  const displayToday = () => {
    setChoosenMonth(currentMonth);
    setChoosenYear(currentYear);
  };
  (0, _react.useEffect)(() => {
    displayToday();
  }, []);
  (0, _react.useEffect)(() => {
    if (yearOptionIsOpen) {
      (0, _functions.scrollToElement)(".selectedYearOption");
    } else if (monthOptionIsOpen) {
      (0, _functions.scrollToElement)(".selectedMonthOption");
    }
  }, [monthOptionIsOpen, yearOptionIsOpen]);
  const setMonth = monthNumber => {
    setChoosenMonth(monthNumber);
    setMonthOptionIsOpen(false);
  };
  const setYear = year => {
    setChoosenYear(Number(year));
    setYearOptionIsOpen(false);
  };
  const goNextMonth = () => {
    if (choosenMonth < 11) {
      setChoosenMonth(choosenMonth + 1);
    } else if (choosenMonth === 11) {
      setChoosenYear(choosenYear + 1);
      setChoosenMonth(0);
    }
  };
  const goPrevMonth = () => {
    if (choosenMonth > 0) {
      setChoosenMonth(choosenMonth - 1);
    } else if (choosenMonth === 0) {
      setChoosenYear(choosenYear - 1);
      setChoosenMonth(11);
    }
  };
  const closeLists = () => {
    if (yearOptionIsOpen || monthOptionIsOpen) {
      setMonthOptionIsOpen(false);
      setYearOptionIsOpen(false);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: isCalendarOpen ? "calendar" : "closedCalendar",
    onClick: closeLists
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "selectWrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "leftArrow",
    src: _arrow.default,
    alt: "arrow",
    onClick: goPrevMonth
  }), /*#__PURE__*/_react.default.createElement("img", {
    className: "house",
    src: _house.default,
    alt: "arrow",
    onClick: displayToday
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "labelsWrapper"
  }, /*#__PURE__*/_react.default.createElement(_Months.default, {
    choosenMonth: choosenMonth,
    monthOptionIsOpen: monthOptionIsOpen,
    setMonth: setMonth,
    setMonthOptionIsOpen: setMonthOptionIsOpen,
    language: language
  }), /*#__PURE__*/_react.default.createElement(_Years.default, {
    choosenYear: choosenYear,
    setYearOptionIsOpen: setYearOptionIsOpen,
    yearOptionIsOpen: yearOptionIsOpen,
    setYear: setYear
  })), /*#__PURE__*/_react.default.createElement("img", {
    className: "rightArrow",
    src: _arrow.default,
    alt: "arrow",
    onClick: goNextMonth
  })), /*#__PURE__*/_react.default.createElement(_InnerCalendar.default, {
    choosenYear: choosenYear,
    choosenMonth: choosenMonth,
    setSelectedDate: handleSelectedDate,
    setIsCalendarOpen: setIsCalendarOpen,
    dateFormat: dateFormat,
    language: language
  })));
};
var _default = Calendar;
exports.default = _default;