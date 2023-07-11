import DatePicker from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { format } from "date-fns";

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

describe("DatePicker", () => {
	it("Should render without crash", async () => {
		render(<DatePicker weekDays={weekDaysList} traducedMonths={months} />);
	});
	it("Should render the calendar component", async () => {
		render(<DatePicker weekDays={weekDaysList} traducedMonths={months} />);
		expect(mockComposantCalendar).toHaveBeenCalledTimes(1);
		expect(mockComposantCalendar.mock.calls[0][0].weekDays).toBe(weekDaysList);
	});
	describe("The selected date si '06.06.2023'", () => {
		it("Should display the date in the input value", async () => {
			render(
				<DatePicker
					weekDays={weekDaysList}
					traducedMonths={months}
					selectedDate={"06.06.2023"}
					selectedDateFormat={"MM.dd.yyyy"}
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
					<DatePicker
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
					<DatePicker
						weekDays={weekDaysList}
						traducedMonths={months}
						setIsCalendarOpen={mockSetIsCalendarOpen}
					/>,
				);
				fireEvent.click(document.body);
				expect(mockSetIsCalendarOpen).toBeCalledWith(false);
			});
		});
		describe("User change the calendar input", () => {
			it("Should display the changes in the input", async () => {
				const mockSetSelectedDate = jest.fn();
				const setup = () => {
					const utils = render(
						<DatePicker
							weekDays={weekDaysList}
							traducedMonths={months}
							setSelectedDate={mockSetSelectedDate}
						/>,
					);
					const input = screen.getByTestId("input");
					return {
						input,
						...utils,
					};
				};
				const { input } = setup();
				fireEvent.change(input, { target: { value: "06.30.2023" } });
				expect(input.value).toBe("06.30.2023");
				expect(mockSetSelectedDate).toBeCalledWith("06.30.2023");
			});
		});
		describe("The input pass to 'onBlur' and the input value is empty", () => {
			it("Should do nothing", async () => {
				const mockSetSelectedDate = jest.fn();
				render(
					<DatePicker
						weekDays={weekDaysList}
						traducedMonths={months}
						setSelectedDate={mockSetSelectedDate}
					/>,
				);
				const input = screen.getByTestId("input");
				expect(input.value).toBe("");
				fireEvent.blur(input);
			});
		});
		describe("The input pass to 'onBlur' and the input value is a valid date but in the wrong format", () => {
			it("Should correct the date format", async () => {
				const mockSetSelectedDate = jest.fn();
				const date = new Date("2023", "7", "2");
				const wrongFormatDate = format(date, "MM/dd/yyyy");
				render(
					<DatePicker
						weekDays={weekDaysList}
						traducedMonths={months}
						setSelectedDate={mockSetSelectedDate}
						selectedDate={wrongFormatDate}
						selectedDateFormat={"MM.dd.yyyy"}
					/>,
				);
				const input = screen.getByTestId("input");
				input.value = wrongFormatDate;
				fireEvent.blur(input);
				expect(mockSetSelectedDate).toBeCalledWith(format(date, "MM.dd.yyyy"));
			});
		});
		describe("The input pass to 'onBlur' and the input value is not a valid date", () => {
			it("Should log the today's date", async () => {
				const mockSetSelectedDate = jest.fn();
				const today = new Date();
				const wrongDate = "wrongDate";
				render(
					<DatePicker
						weekDays={weekDaysList}
						traducedMonths={months}
						setSelectedDate={mockSetSelectedDate}
						selectedDate={wrongDate}
						selectedDateFormat={"MM.dd.yyyy"}
					/>,
				);
				const input = screen.getByTestId("input");
				input.value = wrongDate;
				fireEvent.blur(input);
				expect(mockSetSelectedDate).toBeCalledWith(format(today, "MM.dd.yyyy"));
			});
		});
	});
});
