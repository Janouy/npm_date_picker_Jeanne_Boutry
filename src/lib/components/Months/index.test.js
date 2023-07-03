import Months from "./";
import { render, screen, fireEvent } from "@testing-library/react";

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

describe("Years", () => {
	it("Should render without crash", async () => {
		render(<Months traducedMonths={months} language={"en"} />);
	});
	it("Should display choosenMonth prop", async () => {
		const { rerender } = render(<Months traducedMonths={months} choosenMonth={3} language={"en"} />);
		const selectedMonth = screen.getByTestId("selectedMonth");
		expect(selectedMonth.textContent).toBe(months[3]);
		rerender(<Months traducedMonths={months} choosenMonth={9} language={"en"} />);
		expect(selectedMonth.textContent).toBe(months[9]);
	});

	it("Should display the list of year months", async () => {
		render(<Months traducedMonths={months} language={"en"} />);
		const monthsList = screen.getByTestId("openMonthsListContent");
		for (let monthIt = 0; monthIt <= 11; monthIt++) {
			expect(monthsList.innerHTML).toContain(months[monthIt]);
		}
	});

	describe("On click on a month in the list", () => {
		it("Should close the list and log the choosen month", async () => {
			const mockSetChoosenMonth = jest.fn();
			const mockSetMonthOptionIsOpen = jest.fn();
			render(
				<Months
					traducedMonths={months}
					language={"en"}
					setMonthOptionIsOpen={mockSetMonthOptionIsOpen}
					setChoosenMonth={mockSetChoosenMonth}
				/>,
			);
			screen.getAllByTestId("oneMonth").forEach((month, index) => {
				fireEvent.click(month);
				expect(mockSetChoosenMonth).toBeCalledWith(index);
			});
			expect(mockSetMonthOptionIsOpen).toBeCalledWith(false);
		});
	});
});
