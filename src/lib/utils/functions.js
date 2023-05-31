import { years, shortMonths, longMonths, daysPerWeek, maxCalendarDays } from "./const";
import dateFormat from "dateformat";

export const scrollToElement = (element) => {
	const el = document.querySelector(element);
	if (el) {
		el.scrollIntoView({ behavior: "instant" });
	}
};
for (let yearIt = 1950; yearIt <= 2050; yearIt++) {
	years.push(yearIt);
}

export const displayMonth = (year, month) => {
	let datesArray = [];
	let datesToDisplay = [];
	for (let dayIt = 1; dayIt <= maxCalendarDays; dayIt++) {
		datesArray.push(new Date(year, month, dayIt));
	}
	const firstDayOfMonth = datesArray[0].getDay();
	for (let j = 0; j < firstDayOfMonth; j++) {
		datesArray.unshift(new Date(datesArray[0] - 60 * 60 * 23 * 1000));
	}

	if (
		(firstDayOfMonth >= 5 && longMonths.includes(month)) ||
		(firstDayOfMonth === 6 && shortMonths.includes(month))
	) {
		datesToDisplay = datesArray.slice(0, datesArray.length - firstDayOfMonth);
	} else if (firstDayOfMonth < 5) {
		datesToDisplay = datesArray.slice(0, datesArray.length - (firstDayOfMonth + daysPerWeek));
	} else if (firstDayOfMonth === 5 && shortMonths.includes(month)) {
		datesToDisplay = datesArray.slice(0, datesArray.length - (firstDayOfMonth + daysPerWeek));
	}

	return datesToDisplay;
};

export const formatDate = (date, format) => {
	if (date) return dateFormat(date, format);
};
