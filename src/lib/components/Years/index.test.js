import Years from "./";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Years", () => {
	it("Should render without crash", async () => {
		render(<Years choosenYear={"2023"} />);
	});
	it("Should display choosenYear prop", async () => {
		const { rerender } = render(<Years choosenYear={"2023"} />);
		const selectedYear = screen.getByTestId("selectedYear");
		expect(selectedYear.textContent).toBe("2023");
		rerender(<Years choosenYear={"1998"} />);
		expect(selectedYear.textContent).toBe("1998");
	});

	it("Should display a list of years between 1950 and 2050", async () => {
		render(<Years choosenYear={"2023"} yearOptionIsOpen={true} />);
		const yearsList = screen.getByTestId("openYearsListContent");
		for (let date = 1950; date <= 2050; date++) {
			expect(yearsList.innerHTML).toContain(date.toString());
		}
	});
	describe("On click on a year in the list", () => {
		it("Should close the list and log the choosen year", async () => {
			const mockSetChoosenYear = jest.fn();
			const mockSetYearOptionIsOpen = jest.fn();
			render(
				<Years
					choosenYear={"2023"}
					language={"en"}
					setYearOptionIsOpen={mockSetYearOptionIsOpen}
					setChoosenYear={mockSetChoosenYear}
				/>,
			);
			screen.getAllByTestId("oneYear").forEach((year) => {
				fireEvent.click(year);
				expect(mockSetChoosenYear).toBeCalledWith(Number(year.textContent));
			});
			expect(mockSetYearOptionIsOpen).toBeCalledWith(false);
		});
	});
});
