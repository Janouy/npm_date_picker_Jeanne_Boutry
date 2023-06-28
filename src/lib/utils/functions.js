import { shortMonths, longMonths, daysPerWeek, maxCalendarDays, timeInADay } from "./const";
import { format } from "date-fns";

export const scrollToElement = (element, parentElement) => {
	const el = document.querySelector(element);
	const parentEl = document.querySelector(parentElement);
	if (el && parentEl) {
		const childPosition = el.offsetTop;
		parentEl.scrollTo({
			top: childPosition,
			behavior: "instant",
		});
	}
};

export const selectedMonthDatesArray = (year, month) => {
	let datesArray = [];
	//store the maxCalendarDays(42) days according to the users's choosen month and year in the calendar
	for (let dayIt = 1; dayIt <= maxCalendarDays; dayIt++) {
		datesArray.push(new Date(year, month, dayIt));
	}
	return datesArray;
};

//display the days of the current month in the calendar according to the choosen year and month
export const displayCurrentMonth = (year, month) => {
	let datesToDisplay = [];
	const datesArray = selectedMonthDatesArray(year, month);
	// determinate the first week day of the month
	const firstWeekDayOfMonth = datesArray[0].getDay();
	//add end previous month last days to complete the begining of the calendar
	for (let j = 0; j < firstWeekDayOfMonth; j++) {
		datesArray.unshift(new Date(datesArray[0] - timeInADay));
	}
	// correctly display the month's day according to severals conditions
	if (
		(firstWeekDayOfMonth >= 5 && longMonths.includes(month)) ||
		(firstWeekDayOfMonth === 6 && shortMonths.includes(month))
	) {
		datesToDisplay = datesArray.slice(0, datesArray.length - firstWeekDayOfMonth);
	} else if (firstWeekDayOfMonth < 5) {
		datesToDisplay = datesArray.slice(0, datesArray.length - (firstWeekDayOfMonth + daysPerWeek));
	} else if (firstWeekDayOfMonth === 5 && shortMonths.includes(month)) {
		datesToDisplay = datesArray.slice(0, datesArray.length - (firstWeekDayOfMonth + daysPerWeek));
	}

	return datesToDisplay;
};
//format the date according the informed format
export const formatDate = (date, dateFormat) => {
	if (date) return format(date, dateFormat);
};
//check if is a date
export const isValidDate = (d) => {
	return d instanceof Date && !isNaN(d);
};
