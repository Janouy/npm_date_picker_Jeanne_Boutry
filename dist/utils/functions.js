"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToElement = exports.isValidDate = exports.formatDate = exports.displayCurrentMonth = void 0;
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

//display the days of the current month in the calendar according to the choosen year and month
exports.scrollToElement = scrollToElement;
const displayCurrentMonth = (year, month) => {
  let datesArray = [];
  let datesToDisplay = [];
  //store the maxCalendarDays(42) days according to the users's choosen month and year in the calendar
  for (let dayIt = 1; dayIt <= _const.maxCalendarDays; dayIt++) {
    datesArray.push(new Date(year, month, dayIt));
  }
  // determinate the first week day of the month
  const firstWeekDayOfMonth = datesArray[0].getDay();
  //add end previous month last days to complete the begining of the calendar
  for (let j = 0; j < firstWeekDayOfMonth; j++) {
    datesArray.unshift(new Date(datesArray[0] - _const.timeInADay));
  }
  // correctly display the month's day according to severals conditions
  if (firstWeekDayOfMonth >= 5 && _const.longMonths.includes(month) || firstWeekDayOfMonth === 6 && _const.shortMonths.includes(month)) {
    datesToDisplay = datesArray.slice(0, datesArray.length - firstWeekDayOfMonth);
  } else if (firstWeekDayOfMonth < 5) {
    datesToDisplay = datesArray.slice(0, datesArray.length - (firstWeekDayOfMonth + _const.daysPerWeek));
  } else if (firstWeekDayOfMonth === 5 && _const.shortMonths.includes(month)) {
    datesToDisplay = datesArray.slice(0, datesArray.length - (firstWeekDayOfMonth + _const.daysPerWeek));
  }
  return datesToDisplay;
};
//format the date according the informed format
exports.displayCurrentMonth = displayCurrentMonth;
const formatDate = (date, format) => {
  if (date) return (0, _dateformat.default)(date, format);
};
//check if is a date
exports.formatDate = formatDate;
const isValidDate = d => {
  return d instanceof Date && !isNaN(d);
};
exports.isValidDate = isValidDate;