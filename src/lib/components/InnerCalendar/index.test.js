import InnerCalendar from "./";
import { render, screen, fireEvent } from "@testing-library/react";
import { format } from "date-fns";

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

describe("Years", () => {
	it("Should render without crash", async () => {
		render(<InnerCalendar weekDays={weekDays} choosenYear={2023} choosenMonth={5} language={"en"} />);
	});
	describe("On click on a date", () => {
		const mockSetSelectedDate = jest.fn();
		const mockSetIsCalendarOpen = jest.fn();
		it("Should log the selected date and close the calendar", async () => {
			render(
				<InnerCalendar
					weekDays={weekDays}
					choosenYear={2023}
					choosenMonth={5}
					language={"en"}
					selectedDateFormat={"MM.dd.yyyy"}
					setSelectedDate={mockSetSelectedDate}
					setIsCalendarOpen={mockSetIsCalendarOpen}
				/>,
			);
			const date = new Date("2023", "5", "14");
			const dateCase = screen.getByTestId(date);
			fireEvent.click(dateCase);
			expect(mockSetSelectedDate).toBeCalledWith(format(date, "MM.dd.yyyy"));

			expect(mockSetIsCalendarOpen).toBeCalledWith(false);
		});
	});
});
