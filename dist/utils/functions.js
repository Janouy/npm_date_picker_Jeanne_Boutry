"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToElement = exports.formatDate = exports.displayMonth = void 0;
var _const = require("./const");
var _dateformat = _interopRequireDefault(require("dateformat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const scrollToElement = element => {
  const el = document.querySelector(element);
  if (el) {
    el.scrollIntoView({
      behavior: "instant"
    });
  }
};
exports.scrollToElement = scrollToElement;
for (let yearIt = 1950; yearIt <= 2050; yearIt++) {
  _const.years.push(yearIt);
}
const displayMonth = (year, month) => {
  let datesArray = [];
  let datesToDisplay = [];
  for (let dayIt = 1; dayIt <= _const.maxCalendarDays; dayIt++) {
    datesArray.push(new Date(year, month, dayIt));
  }
  const firstDayOfMonth = datesArray[0].getDay();
  for (let j = 0; j < firstDayOfMonth; j++) {
    datesArray.unshift(new Date(datesArray[0] - 60 * 60 * 23 * 1000));
  }
  if (firstDayOfMonth >= 5 && _const.longMonths.includes(month) || firstDayOfMonth === 6 && _const.shortMonths.includes(month)) {
    datesToDisplay = datesArray.slice(0, datesArray.length - firstDayOfMonth);
  } else if (firstDayOfMonth < 5) {
    datesToDisplay = datesArray.slice(0, datesArray.length - (firstDayOfMonth + _const.daysPerWeek));
  } else if (firstDayOfMonth === 5 && _const.shortMonths.includes(month)) {
    datesToDisplay = datesArray.slice(0, datesArray.length - (firstDayOfMonth + _const.daysPerWeek));
  }
  return datesToDisplay;
};
exports.displayMonth = displayMonth;
const formatDate = (date, format) => {
  if (date) return (0, _dateformat.default)(date, format);
};
exports.formatDate = formatDate;