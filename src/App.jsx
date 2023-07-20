import React, { useState } from "react";
import DatePicker from "./lib/components/DatePicker";

import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState("");
	const ariaLabelName = "dateInput";
	const inputStyle = { width: 100, height: 14, fontSize: 12 };
	const datePickerStyle = { position: "absolute", top: 25 };
	let defaultSelectedDateFormat = "MM.dd.yyyy";
	let defaultLanguage = "en";
	const minAgeRequired = null;

	return (
		<div className="App-react-date-picker-janouy">
			<DatePicker
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				language={defaultLanguage}
				selectedDateFormat={defaultSelectedDateFormat}
				inputStyle={inputStyle}
				datePickerStyle={datePickerStyle}
				ariaLabelName={ariaLabelName}
				minAgeRequired={minAgeRequired}
			/>
		</div>
	);
}

export default App;
