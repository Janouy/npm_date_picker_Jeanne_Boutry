import React, { useEffect } from "react";
import Calendar from "../Calendar";
import "./style.css";
import { calendarChildren } from "../../utils/const";

const CalendarInput = ({
	isCalendarOpen,
	setIsCalendarOpen,
	handleSelectedDate,
	language,
	dateFormat,
	selectedDate,
	inputStyle,
	calendarWrapperStyle,
}) => {
	const handleUserKeyPress = (elt) => {
		if (!calendarChildren.includes(elt.target.className)) {
			setIsCalendarOpen(false);
		}
	};
	useEffect(() => {
		window.addEventListener("click", handleUserKeyPress);

		return () => {
			window.removeEventListener("click", handleUserKeyPress);
		};
	});
	return (
		<div className="calendarWrapper" style={calendarWrapperStyle}>
			<input
				className="dateInput"
				defaultValue={selectedDate}
				style={inputStyle}
				onClick={() => setIsCalendarOpen(true)}
			></input>
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				handleSelectedDate={handleSelectedDate}
				language={language}
				dateFormat={dateFormat}
			/>
		</div>
	);
};

export default CalendarInput;
