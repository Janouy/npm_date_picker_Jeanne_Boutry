import React, { useEffect, useRef } from "react";
import Calendar from "../Calendar";
import "./style.css";
import { calendarChildren } from "../../utils/const";
import { formatDate } from "../../utils/functions";

const CalendarWrapper = ({
	isCalendarOpen,
	setIsCalendarOpen,
	handleSelectedDate,
	language,
	dateFormat,
	selectedDate,
	inputStyle,
	calendarWrapperStyle,
}) => {
	const inputDateElement = useRef();
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

	const checkManualInputOnBlur = (elt, format, inputDateElement) => {
		let innerInput = elt.target.value;
		if (!Date.parse(innerInput)) {
			inputDateElement.current.defaultValue = selectedDate;
			elt.target.value = formatDate(Date.now(), format);
			handleSelectedDate(formatDate(Date.now(), format));
		} else {
			elt.target.value = formatDate(new Date(innerInput), format);
			handleSelectedDate(formatDate(new Date(innerInput), format));
		}
	};
	const handleChange = (event) => {
		handleSelectedDate(event.target.value);
	};
	return (
		<div className="calendarWrapper-react-date-picker-janouy" style={calendarWrapperStyle}>
			<input
				className="dateInput-react-date-picker-janouy"
				value={selectedDate}
				style={inputStyle}
				onChange={handleChange}
				onClick={() => setIsCalendarOpen(true)}
				onBlur={(elt) => checkManualInputOnBlur(elt, dateFormat, inputDateElement)}
				ref={inputDateElement}
			></input>
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				handleSelectedDate={handleSelectedDate}
				language={language}
				dateFormat={dateFormat}
				inputDateElement={inputDateElement}
			/>
		</div>
	);
};

export default CalendarWrapper;
