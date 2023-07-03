"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedMonthDatesArray = exports.scrollToElement = exports.isValidDate = exports.displayCurrentMonth = void 0;
var _const = require("./const");
const scrollToElement = (element, parentElement) => {
  const el = document.querySelector(element);
  const parentEl = document.querySelector(parentElement);
  if (el && parentEl) {
    const childPosition = el.offsetTop;
    parentEl.scrollTo({
      top: childPosition,
      behavior: "instant"
    });
  }
};
exports.scrollToElement = scrollToElement;
const selectedMonthDatesArray = (year, month) => {
  let datesArray = [];
  //store the maxCalendarDays(42) days according to the users's choosen month and year in the calendar
  for (let dayIt = 1; dayIt <= _const.maxCalendarDays; dayIt++) {
    datesArray.push(new Date(year, month, dayIt));
  }
  return datesArray;
};

//display the days of the current month in the calendar according to the choosen year and month
exports.selectedMonthDatesArray = selectedMonthDatesArray;
const displayCurrentMonth = (year, month) => {
  let datesToDisplay = [];
  const datesArray = selectedMonthDatesArray(year, month);
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

//check if is a date
exports.displayCurrentMonth = displayCurrentMonth;
const isValidDate = d => {
  return d instanceof Date && !isNaN(d);
};
exports.isValidDate = isValidDate;