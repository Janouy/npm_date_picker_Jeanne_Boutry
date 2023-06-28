import InnerCalendar from "./";
import { render } from "@testing-library/react";

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

describe("Years", () => {
	it("Should render without crash", async () => {
		render(<InnerCalendar weekDays={weekDays} choosenYear={2023} choosenMonth={5} />);
	});
});
