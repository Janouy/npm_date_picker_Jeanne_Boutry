import React, { useState } from "react";
import CalendarWrapper from "./lib/components/CalendarWrapper";
import { weekDays_options } from "../src/lib/utils/const";
import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [date, setDate] = useState("");
	const inputStyle = { width: 100, height: 14, fontSize: 12 };
	const calendarWrapperStyle = { position: "absolute", top: 25 };
	let defaultDateFormat = "MM.dd.yyyy";
	let defaultLanguage = "en";
	let traducedMonths = weekDays_options.i18n[defaultLanguage].months;
	let weekDays = weekDays_options.i18n[defaultLanguage].dayOfWeekShort;

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
				traducedMonths={traducedMonths}
				weekDays={weekDays}
			/>
		</div>
	);
}

export default App;
