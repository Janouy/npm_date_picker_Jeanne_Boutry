"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.years = exports.weekDays = exports.today = exports.shortMonths = exports.months = exports.maxCalendarDays = exports.longMonths = exports.daysPerWeek = void 0;
const daysPerWeek = 7;
exports.daysPerWeek = daysPerWeek;
const maxCalendarDays = 42;
exports.maxCalendarDays = maxCalendarDays;
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
exports.weekDays = weekDays;
const shortMonths = ["1", "3", "5", "8", "10"];
exports.shortMonths = shortMonths;
const longMonths = ["0", "2", "4", "6", "7", "9", "11"];
exports.longMonths = longMonths;
let months = [];
exports.months = months;
let years = [];
exports.years = years;
const today = new Date();
exports.today = today;