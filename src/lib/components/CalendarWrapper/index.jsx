import React, { useEffect } from "react";
import Calendar from "../Calendar";
import "./style.css";
import { calendarChildren } from "../../utils/const";
import { formatDate, isValidDate } from "../../utils/functions";

const CalendarWrapper = ({
	isCalendarOpen,
	setIsCalendarOpen,
	handleSelectedDate,
	language,
	dateFormat,
	selectedDate,
	inputStyle,
	calendarWrapperStyle,
	traducedMonths,
	weekDays,
}) => {
	//close the calendar if user clicks outside
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

	//check and correct the input if user tape a wrong date in it
	const checkManualInputOnBlur = (elt, format) => {
		let innerInput = elt.target.value;
		//if input's value is empty or is a valid date, do nothing
		if (isValidDate(innerInput) || innerInput === "") {
			return;
			// if it is not a date, display the today's date
		} else if (!Date.parse(innerInput)) {
			elt.target.value = selectedDate;
			elt.target.value = formatDate(Date.now(), format);
			handleSelectedDate(formatDate(Date.now(), format));
			// if it s a date but not in the choosen format
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
				onPointerDown={() => setIsCalendarOpen(!isCalendarOpen)}
				onBlur={(elt) => checkManualInputOnBlur(elt, dateFormat)}
				data-testid="input"
			></input>
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				handleSelectedDate={handleSelectedDate}
				language={language}
				dateFormat={dateFormat}
				traducedMonths={traducedMonths}
				weekDays={weekDays}
			/>
		</div>
	);
};

export default CalendarWrapper;
