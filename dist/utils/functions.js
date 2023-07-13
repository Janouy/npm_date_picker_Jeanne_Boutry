"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedMonthDatesArray = exports.scrollToElement = exports.isValidDate = exports.isDateIsToday = exports.handleDateAppearance = exports.displayCurrentMonth = void 0;
var _const = require("./const");
//scroll to the choosen month or choosen year when list is open
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
const isDateIsToday = (date, choosenMonth, choosenYear) => {
  if (date.getDate() === _const.today.getDate() && date.getMonth() === _const.today.getMonth() && choosenMonth === _const.today.getMonth() && choosenYear === _const.today.getFullYear()) {
    return true;
  }
};

//set the apparence of the date's case in the calendar
exports.isDateIsToday = isDateIsToday;
const handleDateAppearance = (date, choosenMonth, selectedDatetimeStamp, choosenYear) => {
  if (!selectedDatetimeStamp) {
    if (isDateIsToday(date, choosenMonth, choosenYear)) {
      return "today-react-date-picker-janouy";
    } else if (date.getMonth() !== choosenMonth) {
      return "otherMonthDay-react-date-picker-janouy";
    } else {
      return "notSelectedDay-react-date-picker-janouy";
    }
  } else if (selectedDatetimeStamp) {
    let timeStampDate = new Date(selectedDatetimeStamp).getDate();
    let localTimeStamp = new Date(selectedDatetimeStamp).toLocaleDateString();
    let localDate = date.toLocaleDateString();
    const lastDayOfLongMonths = 31;
    const lastDayOfShortMonths = 30;
    const lastFebruaryLeapYearDay = 29;
    const february = 1;
    if (localTimeStamp !== localDate && isDateIsToday(date, choosenMonth, choosenYear)) {
      return "today-react-date-picker-janouy";
    } else if (localTimeStamp === localDate && isDateIsToday(date, choosenMonth, choosenYear)) {
      return "selectedDay-react-date-picker-janouy";
    } else if (date.getMonth() !== choosenMonth) {
      return "otherMonthDay-react-date-picker-janouy";
      //si jour selectionné est différent de 29, 30 ou 31
    } else if (date.getDate() === new Date(selectedDatetimeStamp).getDate() && _const.possibleLastDayOfMonth.indexOf(timeStampDate) === -1) {
      return "selectedDay-react-date-picker-janouy";
    } else if (timeStampDate === lastDayOfLongMonths) {
      if (choosenMonth !== 1 && _const.longMonths.includes(choosenMonth.toString()) && date.getDate() === timeStampDate || date.getDate() === timeStampDate - 2 && choosenMonth === february && _const.leapYears.includes(choosenYear) || date.getDate() === timeStampDate - 3 && choosenMonth === february && _const.leapYears.indexOf(choosenYear) === -1 || date.getDate() === timeStampDate - 1 && _const.shortMonths.includes(choosenMonth.toString())) {
        return "selectedDay-react-date-picker-janouy";
      } else {
        return "notSelectedDay-react-date-picker-janouy";
      }
    } else if (timeStampDate === lastDayOfShortMonths) {
      if (date.getDate() === timeStampDate && choosenMonth !== february || date.getDate() === timeStampDate - 1 && choosenMonth === february && _const.leapYears.includes(choosenYear) || date.getDate() === timeStampDate - 2 && choosenMonth === february && _const.leapYears.indexOf(choosenYear) === -1) {
        return "selectedDay-react-date-picker-janouy";
      } else {
        return "notSelectedDay-react-date-picker-janouy";
      }
    } else if (timeStampDate === lastFebruaryLeapYearDay) {
      if (date.getDate() === timeStampDate - 1 && choosenMonth === february && _const.leapYears.indexOf(choosenYear) === -1 || date.getDate() === timeStampDate) {
        return "selectedDay-react-date-picker-janouy";
      } else {
        return "notSelectedDay-react-date-picker-janouy";
      }
    } else {
      return "notSelectedDay-react-date-picker-janouy";
    }
  }
};
exports.handleDateAppearance = handleDateAppearance;