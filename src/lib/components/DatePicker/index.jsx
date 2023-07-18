import React, { useEffect } from "react";
import Calendar from "../Calendar";
import "./style.css";
import { calendarChildren } from "../../utils/const";
import { isValidDate } from "../../utils/functions";
import { format } from "date-fns";

const DatePicker = ({
	isCalendarOpen,
	setIsCalendarOpen,
	setSelectedDate,
	language,
	selectedDateFormat,
	selectedDate,
	inputStyle,
	DatePickerStyle,
	traducedMonths,
	weekDays,
	ariaLabelName,
	majority,
}) => {
	//close the calendar if user clicks outside it
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
	const checkManualInputOnBlur = (elt, selectedDateFormat) => {
		let innerInput = elt.target.value;
		//if input's value is empty or is a valid date, do nothing
		if (isValidDate(innerInput) || innerInput === "") {
			return;
			// if it is not a date, display the today's date
		} else if (!Date.parse(innerInput)) {
			elt.target.value = selectedDate;
			elt.target.value = format(Date.now(), selectedDateFormat);
			setSelectedDate(format(Date.now(), selectedDateFormat));
			// if it s a valid date but not in the choosen format
		} else {
			elt.target.value = format(new Date(innerInput), selectedDateFormat);
			setSelectedDate(format(new Date(innerInput), selectedDateFormat));
		}
	};
	const handleChangeSelectedDate = (event) => {
		setSelectedDate(event.target.value);
	};
	return (
		<div className="datePicker-react-date-picker-janouy" style={DatePickerStyle}>
			<input
				className="dateInput-react-date-picker-janouy"
				value={selectedDate}
				style={inputStyle}
				name={ariaLabelName}
				aria-label={ariaLabelName}
				onChange={handleChangeSelectedDate}
				onPointerDown={() => setIsCalendarOpen(!isCalendarOpen)}
				onBlur={(elt) => checkManualInputOnBlur(elt, selectedDateFormat)}
				data-testid="input"
				autoComplete="no"
				required
			></input>
			<Calendar
				isCalendarOpen={isCalendarOpen}
				setIsCalendarOpen={setIsCalendarOpen}
				setSelectedDate={setSelectedDate}
				language={language}
				selectedDateFormat={selectedDateFormat}
				traducedMonths={traducedMonths}
				weekDays={weekDays}
				majority={majority}
			/>
		</div>
	);
};

export default DatePicker;
