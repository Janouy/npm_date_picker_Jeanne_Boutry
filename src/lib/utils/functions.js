import {
	shortMonths,
	longMonths,
	daysPerWeek,
	maxCalendarDays,
	timeInADay,
	today,
	possibleLastDayOfMonth,
	leapYears,
} from "./const";

//scroll to the choosen month or choosen year when list is open
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

//check if is a date
export const isValidDate = (d) => {
	return d instanceof Date && !isNaN(d);
};

export const isDateIsToday = (date, choosenMonth, choosenYear) => {
	if (
		date.getDate() === today.getDate() &&
		date.getMonth() === today.getMonth() &&
		choosenMonth === today.getMonth() &&
		choosenYear === today.getFullYear()
	) {
		return true;
	}
};

//set the apparence of the date's case in the calendar
export const handleDateAppearance = (date, choosenMonth, selectedDatetimeStamp, choosenYear, majority) => {
	const majorityYearBirth = today.getFullYear() - majority;
	const majorityBirthDate = new Date(majorityYearBirth, today.getMonth(), today.getDate());
	if (majority && date > majorityBirthDate) {
		return "otherMonthDay-react-date-picker-janouy";
	}
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
		} else if (
			date.getDate() === new Date(selectedDatetimeStamp).getDate() &&
			possibleLastDayOfMonth.indexOf(timeStampDate) === -1
		) {
			return "selectedDay-react-date-picker-janouy";
		} else if (timeStampDate === lastDayOfLongMonths) {
			if (
				(choosenMonth !== 1 &&
					longMonths.includes(choosenMonth.toString()) &&
					date.getDate() === timeStampDate) ||
				(date.getDate() === timeStampDate - 2 &&
					choosenMonth === february &&
					leapYears.includes(choosenYear)) ||
				(date.getDate() === timeStampDate - 3 &&
					choosenMonth === february &&
					leapYears.indexOf(choosenYear) === -1) ||
				(date.getDate() === timeStampDate - 1 && shortMonths.includes(choosenMonth.toString()))
			) {
				return "selectedDay-react-date-picker-janouy";
			} else {
				return "notSelectedDay-react-date-picker-janouy";
			}
		} else if (timeStampDate === lastDayOfShortMonths) {
			if (
				(date.getDate() === timeStampDate && choosenMonth !== february) ||
				(date.getDate() === timeStampDate - 1 &&
					choosenMonth === february &&
					leapYears.includes(choosenYear)) ||
				(date.getDate() === timeStampDate - 2 &&
					choosenMonth === february &&
					leapYears.indexOf(choosenYear) === -1)
			) {
				return "selectedDay-react-date-picker-janouy";
			} else {
				return "notSelectedDay-react-date-picker-janouy";
			}
		} else if (timeStampDate === lastFebruaryLeapYearDay) {
			if (
				(date.getDate() === timeStampDate - 1 &&
					choosenMonth === february &&
					leapYears.indexOf(choosenYear) === -1) ||
				date.getDate() === timeStampDate
			) {
				return "selectedDay-react-date-picker-janouy";
			} else {
				return "notSelectedDay-react-date-picker-janouy";
			}
		} else {
			return "notSelectedDay-react-date-picker-janouy";
		}
	}
};
