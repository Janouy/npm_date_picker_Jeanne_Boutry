import App from "./App";
import { render } from "@testing-library/react";

const mockComponentDatePicker = jest.fn();
jest.mock("../src/lib/components/DatePicker", () => (props) => {
	mockComponentDatePicker(props);
	return <mock-liste role="component-calendar wrapper" />;
});

describe("Component App", () => {
	it("Should render the DatePicker component", () => {
		render(<App />);
		expect(mockComponentDatePicker).toHaveBeenCalledTimes(1);
	});
});
