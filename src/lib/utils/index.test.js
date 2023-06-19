import { formatDate, isValidDate, displayCurrentMonth } from "./functions";
let year;
let month;

describe("The formatDate function", () => {
	beforeEach(() => {
		year = Math.floor(Math.random() * (2050 - 1950 + 1) + 1950);
		month = Math.floor(Math.random() * (11 - 0 + 1) + 0);
		console.log(year, month);
	});
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

describe("The isValidDate function", () => {
	it("Should return true if the argument is a date", () => {
		const date = new Date(2023, 5, 18);
		expect(isValidDate(date)).toEqual(true);
	});
	it("Should return false if the argument isn't a date", () => {
		const date = "wrongdate";
		expect(isValidDate(date)).toEqual(false);
	});
});

describe("The displayCurrentMonth function", () => {
	it("Should return an array of min 35 length", () => {
		expect(displayCurrentMonth(year, month).length).toBeGreaterThanOrEqual(35);
	});
	it("Should return an array of max 42 length", () => {
		expect(displayCurrentMonth(year, month).length).toBeLessThanOrEqual(42);
	});
});
