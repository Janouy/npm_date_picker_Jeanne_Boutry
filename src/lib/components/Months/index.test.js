import Months from "./";
import { render, screen } from "@testing-library/react";

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
});
