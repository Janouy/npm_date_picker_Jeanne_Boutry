import React, { useState } from "react";
import CalendarWrapper from "./lib/components/CalendarWrapper";

import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [date, setDate] = useState("");
	const ariaLabelName = "dateInput";
	const inputStyle = { width: 100, height: 14, fontSize: 12 };
	const calendarWrapperStyle = { position: "absolute", top: 25 };
	let defaultDateFormat = "MM.dd.yyyy";
	let defaultLanguage = "en";

	return (
		<div className="App-react-date-picker-janouy">
			<CalendarWrapper
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				selectedDate={date}
				handleSelectedDate={setDate}
				language={defaultLanguage}
				dateFormat={defaultDateFormat}
				inputStyle={inputStyle}
				calendarWrapperStyle={calendarWrapperStyle}
				ariaLabelName={ariaLabelName}
			/>
		</div>
	);
}

export default App;
