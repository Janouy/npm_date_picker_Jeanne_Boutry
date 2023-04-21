import React, { useState } from "react";
import Calendar from "./lib/pages/Calendar";
import "./App.css";

function App() {
	const [isCalendarOpen, setIsCalendarOpen] = useState(true);
	const [dateOutput, setDateOutput] = useState();
	const [calendarLang, setCalendarLang] = useState("en");
	return (
		<div className="App">
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				dateOutput={dateOutput}
				setDateOutput={setDateOutput}
				calendarLang={calendarLang}
				setCalendarLang={setCalendarLang}
			/>
		</div>
	);
}

export default App;
