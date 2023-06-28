import Calendar from "./";
import { render, screen, fireEvent } from "@testing-library/react";

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const currentMonth = new Date().getMonth();
describe("Calendar", () => {
	it("Should render without crash", async () => {
		render(<Calendar weekDays={weekDays} traducedMonths={months} />);
	});
	describe("The isCalendarOpen props is true", () => {
		it("Should open the calendar", async () => {
			render(<Calendar weekDays={weekDays} traducedMonths={months} isCalendarOpen={true} />);
			const calendar = screen.getByTestId("calendar");
			expect(calendar.classList).toContain("calendar-react-date-picker-janouy");
		});
	});
	describe("The isCalendarOpen props is false", () => {
		it("Should close the calendar", async () => {
			render(<Calendar weekDays={weekDays} traducedMonths={months} isCalendarOpen={false} />);
			const calendar = screen.getByTestId("calendar");
			expect(calendar.classList).toContain("closedCalendar-react-date-picker-janouy");
		});
	});
	describe(`User clicks on the left arrow and the selected month is ${currentMonth}`, () => {
		it(`Should show ${currentMonth - 1}`, async () => {
			render(<Calendar weekDays={weekDays} traducedMonths={months} isCalendarOpen={true} />);
			fireEvent.click(screen.getByTestId("leftArrow"));
			expect(screen.getByTestId("selectedMonth").textContent).toBe(months[currentMonth - 1]);
		});
	});
	describe(`User clicks on the right arrow and the selected month is ${currentMonth}`, () => {
		it(`Should show ${currentMonth + 1}`, async () => {
			render(<Calendar weekDays={weekDays} traducedMonths={months} isCalendarOpen={true} />);
			fireEvent.click(screen.getByTestId("rightArrow"));
			expect(screen.getByTestId("selectedMonth").textContent).toBe(months[currentMonth + 1]);
		});
	});
	describe(`User clicks on the house logo`, () => {
		it(`Should put the selected month to  ${currentMonth}`, async () => {
			render(<Calendar weekDays={weekDays} traducedMonths={months} isCalendarOpen={true} />);
			fireEvent.click(screen.getByTestId("house"));
			expect(screen.getByTestId("selectedMonth").textContent).toBe(months[currentMonth]);
		});
	});
});
