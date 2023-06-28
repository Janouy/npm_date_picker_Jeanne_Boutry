import { formatDate, isValidDate, displayCurrentMonth, selectedMonthDatesArray } from "./functions";
import { maxCalendarDays, minCalendarDays } from "./const";

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

describe("The 'formatDate' function", () => {
	it("Should return a formated date", () => {
		const date = new Date(2023, 5, 18);
		const dateFormat = "MM/dd/yyyy";
		expect(formatDate(date, dateFormat)).toEqual("06/18/2023");
	});
	it("Shouldn't return a date if there is no date", () => {
		const dateFormat = "MM/dd/yyyy";
		expect(formatDate("", dateFormat)).toBeUndefined();
	});
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
