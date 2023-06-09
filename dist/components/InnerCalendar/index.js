"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _const = require("../../utils/const");
var _functions = require("../../utils/functions");
var _dateFns = require("date-fns");
require("./style.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const InnerCalendar = _ref => {
  let {
    choosenYear,
    choosenMonth,
    setSelectedDate,
    setIsCalendarOpen,
    selectedDateFormat,
    language,
    selectedDate
  } = _ref;
  const [timeStamp, setTimeStamp] = (0, _react.useState)();
  let weekDays = _const.weekDays_options.i18n[language].dayOfWeekShort;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "calendarRow-react-date-picker-janouy"
  }, weekDays.map((weekDay, weekDayIndex) => /*#__PURE__*/_react.default.createElement("div", {
    key: weekDayIndex
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "weekDay-react-date-picker-janouy"
  }, weekDay), (0, _functions.displayCurrentMonth)(choosenYear.toString(), choosenMonth.toString()).map((date, index) => date.getDay() === weekDayIndex ? /*#__PURE__*/_react.default.createElement("div", {
    className: date.getDate() === _const.today.getDate() && date.getMonth() === _const.today.getMonth() && choosenMonth === _const.today.getMonth() && date.getFullYear() === _const.today.getFullYear() && !selectedDate || date.getDate() === timeStamp?.getDate() && date.getMonth() === timeStamp?.getMonth() && choosenMonth === timeStamp?.getMonth() && date.getFullYear() === timeStamp?.getFullYear() || date.getDate() === new Date(timeStamp).getDate() ? "selectedDay-react-date-picker-janouy" : date.getDate() === _const.today.getDate() && date.getMonth() === _const.today.getMonth() && choosenMonth === _const.today.getMonth() && date.getFullYear() === _const.today.getFullYear() && selectedDate ? "today-react-date-picker-janouy" : date.getMonth() !== choosenMonth ? "otherMonthDay-react-date-picker-janouy" : "notSelectedDay-react-date-picker-janouy",
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "date-react-date-picker-janouy",
    "data-testid": date,
    onClick: date.getMonth() === choosenMonth ? () => {
      setSelectedDate((0, _dateFns.format)(date, selectedDateFormat));
      setTimeStamp(date);
      setIsCalendarOpen(false);
    } : null
  }, date.getDate())) : null)))));
};
var _default = InnerCalendar;
exports.default = _default;