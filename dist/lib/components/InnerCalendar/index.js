"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _const = require("../../utils/const");
var _functions = require("../../utils/functions");
require("./style.css");
var _context = require("../../utils/context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const InnerCalendar = _ref => {
  let {
    choosenYear,
    choosenMonth
  } = _ref;
  const {
    dateOutput,
    setDateOutput
  } = (0, _react.useContext)(_context.DateContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "calendarRow"
  }, _const.weekDays.map((day, dayIndex) => /*#__PURE__*/_react.default.createElement("div", {
    key: dayIndex
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "day"
  }, day), (0, _functions.displayMonth)(choosenYear.toString(), choosenMonth.toString()).map((date, index) => date.getDay() === dayIndex ? /*#__PURE__*/_react.default.createElement("div", {
    className: date.getDate() === _const.today.getDate() && _const.today.getMonth() === choosenMonth ? "today" : date.getMonth() !== choosenMonth ? "otherMonthDay" : date.getDate() === new Date(dateOutput).getDate() ? "selectedDay" : "notSelectedDay",
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "date",
    onClick: () => setDateOutput(date.toLocaleDateString("en"))
  }, date.getDate())) : null))));
};
var _default = InnerCalendar;
exports.default = _default;