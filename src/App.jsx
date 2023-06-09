import React, { useState } from "react";
import CalendarInput from "./lib/components/CalendarInput";
import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [date, setDate] = useState();
	const inputStyle = { width: 100, height: 14, fontSize: 12 };
	const calendarWrapperStyle = { position: "absolute", top: 25 };
	let defaultDateFormat = "mm/dd/yyyy";
	let defaultLanguage = "en";

	return (
		<div className="App">
			<CalendarInput
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				selectedDate={date}
				handleSelectedDate={setDate}
				language={defaultLanguage}
				dateFormat={defaultDateFormat}
				inputStyle={inputStyle}
				calendarWrapperStyle={calendarWrapperStyle}
			/>
		</div>
	);
}

export default App;
