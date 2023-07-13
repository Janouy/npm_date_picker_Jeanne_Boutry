import { isValidDate, displayCurrentMonth, selectedMonthDatesArray, handleDateAppearance } from "./functions";
import { maxCalendarDays, minCalendarDays, today } from "./const";

let year;
let month;
let datesArray;
let currentMonthDaysArray;
let indexOfLastDayOfMonth;
beforeAll(() => {
	year = Math.floor(Math.random() * (2050 - 1950 + 1) + 1950).toString();
	month = Math.floor(Math.random() * (11 - 0 + 1) + 0).toString();
	datesArray = selectedMonthDatesArray(year, month);
	currentMonthDaysArray = displayCurrentMonth(year, month);
});

describe("The 'isValidDate' function", () => {
	it("Should return true if the argument is a date", () => {
		const date = new Date(2023, 5, 18);
		expect(isValidDate(date)).toEqual(true);
	});
	it("Should return false if the argument isn't a date", () => {
		const date = "wrongdate";
		expect(isValidDate(date)).toEqual(false);
	});
});

describe("The 'selectedMonthDatesArray' function", () => {
	it(`Should return an array with a length of ${maxCalendarDays}`, () => {
		expect(datesArray.length).toEqual(maxCalendarDays);
	});
	it("Should return dates whose year matches the given year", () => {
		expect(datesArray[15].getFullYear().toString()).toEqual(year);
	});
	it("Should return dates whose month matches the given month", () => {
		expect(datesArray[15].getMonth().toString()).toEqual(month);
	});
});

describe("The 'displayCurrentMonth' function", () => {
	it(`Should return an array with a min length of ${minCalendarDays}`, () => {
		expect(currentMonthDaysArray.length).toBeGreaterThanOrEqual(35);
	});
	it(`Should return an array with a max length of ${maxCalendarDays}`, () => {
		expect(currentMonthDaysArray.length).toBeLessThanOrEqual(42);
	});
	describe("If the 1rst day of given month is not a sunday and the month is not the first month of the year", () => {
		it("Should return an array starting with the last days of the previous month going up to the 1st day of the given month", () => {
			month = "5";
			year = "2023";
			currentMonthDaysArray = displayCurrentMonth(year, month);
			for (let i = 0; i < 4; i++) {
				expect(currentMonthDaysArray[i].getMonth()).toEqual(Number(month) - 1);
			}
		});
	});
	describe("If the 1rst day of given month is not a sunday and the month is the first month of the year", () => {
		it("Should return an array starting with the last days of the last month of the previous year  going up to the 1st day of the given month", () => {
			month = "0";
			year = "2022";
			currentMonthDaysArray = displayCurrentMonth(year, month);
			for (let i = 0; i < 4; i++) {
				expect(currentMonthDaysArray[i].getMonth()).toEqual(11);
				expect(currentMonthDaysArray[i].getFullYear()).toEqual(Number(year) - 1);
			}
		});
	});
	describe("If the last day is not a saturday and the month is not the last month of the year", () => {
		it("Should return an array with at the end, the first days of the next month up to Saturday", () => {
			month = "5";
			year = "2023";
			indexOfLastDayOfMonth = 33;
			currentMonthDaysArray = displayCurrentMonth(year, month);
			for (let i = currentMonthDaysArray.length - 1; i > indexOfLastDayOfMonth; i--) {
				expect(currentMonthDaysArray[i].getMonth()).toEqual(Number(month) + 1);
			}
		});
	});
	describe("If the last day is not a saturday and the month is the last month of the year", () => {
		it("Should return an array with at the end, the first days of the next year first month up to Saturday", () => {
			month = "11";
			year = "2023";
			indexOfLastDayOfMonth = 35;
			currentMonthDaysArray = displayCurrentMonth(year, month);
			for (let i = currentMonthDaysArray.length - 1; i > indexOfLastDayOfMonth; i--) {
				expect(currentMonthDaysArray[i].getMonth()).toEqual(0);
				expect(currentMonthDaysArray[i].getFullYear()).toEqual(Number(year) + 1);
			}
		});
	});
});
describe("The handleDateAppearance function", () => {
	describe("There is no selectedDate", () => {
		it("Should return a string", () => {
			month = 6;
			year = 2023;
			let newDate = new Date(2023, 6, 13);
			let selectedDate;
			let className = handleDateAppearance(newDate, month, selectedDate, year);
			expect(typeof className).toBe("string");
		});
		describe("The date is today", () => {
			it("Should return 'today-react-date-picker-janouy' className", () => {
				month = today.getMonth();
				year = today.getFullYear();
				let selectedDate;
				let className = handleDateAppearance(today, month, selectedDate, year);
				expect(className).toBe("today-react-date-picker-janouy");
			});
		});
		describe("The date isn't today", () => {
			it("Should return 'otherMonthDay-react-date-picker-janouy' className", () => {
				month = today.getMonth();
				year = today.getFullYear();
				let aDate = new Date(2050, 7, 25);
				let selectedDate;
				let className = handleDateAppearance(aDate, month, selectedDate, year);
				expect(className).toBe("otherMonthDay-react-date-picker-janouy");
			});
		});
	});
	describe("There is a selectedDate", () => {
		it("Should return a string", () => {
			month = 6;
			year = 2023;
			let newDate = new Date(2023, 6, 13);
			let selectedDate = new Date(2023, 8, 16);
			let className = handleDateAppearance(newDate, month, selectedDate, year);
			expect(typeof className).toBe("string");
		});
		describe("The selectedDate day is today", () => {
			it("Should return 'selectedDay-react-date-picker-janouy' className", () => {
				month = today.getMonth();
				year = today.getFullYear();
				let newDate = today;
				let selectedDate = today;
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("selectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is '31' and the date day is 30 of a short month", () => {
			it("Should return 'selectedDay-react-date-picker-janouy' className", () => {
				month = 5;
				year = 2023;
				let newDate = new Date(2023, 5, 30);
				let selectedDate = new Date(2023, 6, 31);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("selectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is '31' and the date day is the last february day of a leap year", () => {
			it("Should return 'selectedDay-react-date-picker-janouy' className", () => {
				month = 1;
				year = 2024;
				let newDate = new Date(2024, 1, 29);
				let selectedDate = new Date(2023, 6, 31);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("selectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is '31' and the date day is not the laast day of the month", () => {
			it("Should return 'notSelectedDay-react-date-picker-janouy' className", () => {
				month = 5;
				year = 2024;
				let newDate = new Date(2024, 5, 15);
				let selectedDate = new Date(2023, 6, 31);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("notSelectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is '30' and the date day is not the laast day of the month", () => {
			it("Should return 'notSelectedDay-react-date-picker-janouy' className", () => {
				month = 5;
				year = 2024;
				let newDate = new Date(2024, 5, 15);
				let selectedDate = new Date(2023, 6, 30);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("notSelectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is '30' and the date day is the last february day of a leap year", () => {
			it("Should return 'selectedDay-react-date-picker-janouy' className", () => {
				month = 1;
				year = 2024;
				let newDate = new Date(2024, 1, 29);
				let selectedDate = new Date(2023, 6, 30);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("selectedDay-react-date-picker-janouy");
			});
		});
		describe("The selectedDate day is the last day of a leap year february and the date day is the last long month's day", () => {
			it("Should return 'selectedDay-react-date-picker-janouy' className", () => {
				month = 8;
				year = 2024;
				let newDate = new Date(2023, 8, 29);
				let selectedDate = new Date(2024, 1, 29);
				let className = handleDateAppearance(newDate, month, selectedDate, year);
				expect(className).toBe("selectedDay-react-date-picker-janouy");
			});
		});
	});
});
