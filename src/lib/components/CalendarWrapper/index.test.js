import CalendarWrapper from "./";
import { render, screen, fireEvent } from "@testing-library/react";

let weekDaysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

const mockComposantCalendar = jest.fn();
jest.mock("../Calendar/index", () => (props) => {
	mockComposantCalendar(props);
	return <mock-liste role="component-calendar" />;
});

describe("CalendarWrapper", () => {
	it("Should render without crash", async () => {
		render(<CalendarWrapper weekDays={weekDaysList} traducedMonths={months} />);
	});
	it("Should render the calendar component", async () => {
		render(<CalendarWrapper weekDays={weekDaysList} traducedMonths={months} />);
		expect(mockComposantCalendar).toHaveBeenCalledTimes(1);
		expect(mockComposantCalendar.mock.calls[0][0].weekDays).toBe(weekDaysList);
	});
	describe("The selected date si '06.06.2023'", () => {
		it("Should display the date in the input value", async () => {
			render(
				<CalendarWrapper
					weekDays={weekDaysList}
					traducedMonths={months}
					selectedDate={"06.06.2023"}
					dateFormat={"MM.dd.yyyy"}
				/>,
			);
			expect(screen.getByTestId("input").value).toBe("06.06.2023");
		});
	});

	describe("The Calendar component", () => {
		describe("On user's pointer down in the input", () => {
			it("Should pass the isCalendarOpen props to true", async () => {
				const mockSetIsCalendarOpen = jest.fn();
				render(
					<CalendarWrapper
						weekDays={weekDaysList}
						traducedMonths={months}
						setIsCalendarOpen={mockSetIsCalendarOpen}
					/>,
				);
				fireEvent.pointerDown(screen.getByTestId("input"));
				expect(mockSetIsCalendarOpen).toBeCalledWith(true);
			});
		});
		describe("The calendar is open and user clicks outside the calendar", () => {
			it("Should pass the isCalendarOpen props to false", async () => {
				const mockSetIsCalendarOpen = jest.fn();
				render(
					<CalendarWrapper
						weekDays={weekDaysList}
						traducedMonths={months}
						setIsCalendarOpen={mockSetIsCalendarOpen}
					/>,
				);
				fireEvent.click(document.body);
				expect(mockSetIsCalendarOpen).toBeCalledWith(false);
			});
		});
	});
});
