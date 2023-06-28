import App from "./App";
import { render } from "@testing-library/react";

const mockComponentCalendarWrapper = jest.fn();
jest.mock("../src/lib/components/CalendarWrapper", () => (props) => {
	mockComponentCalendarWrapper(props);
	return <mock-liste role="component-calendar wrapper" />;
});

describe("Component App", () => {
	it("Should render the calendarWrapper component", () => {
		render(<App />);
		expect(mockComponentCalendarWrapper).toHaveBeenCalledTimes(1);
	});
});
