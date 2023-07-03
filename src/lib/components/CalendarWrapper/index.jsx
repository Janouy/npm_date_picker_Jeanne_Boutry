import React, { useEffect } from "react";
import Calendar from "../Calendar";
import "./style.css";
import { calendarChildren } from "../../utils/const";
import { isValidDate } from "../../utils/functions";
import { format } from "date-fns";

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
	ariaLabelName,
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
	const checkManualInputOnBlur = (elt, dateFormat) => {
		let innerInput = elt.target.value;
		//if input's value is empty or is a valid date, do nothing
		if (isValidDate(innerInput) || innerInput === "") {
			return;
			// if it is not a date, display the today's date
		} else if (!Date.parse(innerInput)) {
			elt.target.value = selectedDate;
			elt.target.value = format(Date.now(), dateFormat);
			handleSelectedDate(format(Date.now(), dateFormat));
			// if it s a valid date but not in the choosen format
		} else {
			elt.target.value = format(new Date(innerInput), dateFormat);
			handleSelectedDate(format(new Date(innerInput), dateFormat));
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
				name={ariaLabelName}
				aria-label={ariaLabelName}
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
