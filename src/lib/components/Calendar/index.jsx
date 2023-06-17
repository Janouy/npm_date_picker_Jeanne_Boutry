import React, { useState, useEffect } from "react";
import "./style.css";
import Arrow from "../../assets/arrow.svg";
import House from "../../assets/house.svg";
import Months from "../Months";
import Years from "../Years";
import InnerCalendar from "../InnerCalendar";
import { scrollToElement } from "../../utils/functions";

const Calendar = ({
	isCalendarOpen,
	setIsCalendarOpen,
	handleSelectedDate,
	language,
	dateFormat,
	inputDateElement,
}) => {
	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const [choosenYear, setChoosenYear] = useState("");
	const [choosenMonth, setChoosenMonth] = useState("");
	const [monthOptionIsOpen, setMonthOptionIsOpen] = useState(false);
	const [yearOptionIsOpen, setYearOptionIsOpen] = useState(false);

	const displayToday = () => {
		setChoosenMonth(currentMonth);
		setChoosenYear(currentYear);
	};
	useEffect(() => {
		displayToday();
	}, []);

	useEffect(() => {
		if (yearOptionIsOpen) {
			scrollToElement(".selectedYearOption-react-date-picker-janouy");
		} else if (monthOptionIsOpen) {
			scrollToElement(".selectedMonthOption-react-date-picker-janouy");
		}
	}, [monthOptionIsOpen, yearOptionIsOpen]);

	const setMonth = (monthNumber) => {
		setChoosenMonth(monthNumber);
		setMonthOptionIsOpen(false);
	};

	const setYear = (year) => {
		setChoosenYear(Number(year));
		setYearOptionIsOpen(false);
	};
	const goNextMonth = () => {
		if (choosenMonth < 11) {
			setChoosenMonth(choosenMonth + 1);
		} else if (choosenMonth === 11 && choosenYear < 2050) {
			setChoosenYear(choosenYear + 1);
			setChoosenMonth(0);
		}
	};
	const goPrevMonth = () => {
		if (choosenMonth > 0) {
			setChoosenMonth(choosenMonth - 1);
		} else if (choosenMonth === 0 && choosenYear > 1950) {
			setChoosenYear(choosenYear - 1);
			setChoosenMonth(11);
		}
	};
	const closeLists = () => {
		if (yearOptionIsOpen || monthOptionIsOpen) {
			setMonthOptionIsOpen(false);
			setYearOptionIsOpen(false);
		}
	};
	const changeMonth = (event) => {
		if (event.target.className !== "option-react-date-picker-janouy") {
			if (Math.sign(event.deltaY) === 1) {
				goNextMonth();
			} else if (Math.sign(event.deltaY) === -1) {
				goPrevMonth();
			}
		}
	};

	return (
		<>
			<div
				className={
					isCalendarOpen ? "calendar-react-date-picker-janouy" : "closedCalendar-react-date-picker-janouy"
				}
				onClick={closeLists}
				onWheel={(event) => changeMonth(event)}
			>
				<div className="selectWrapper-react-date-picker-janouy">
					<img className="leftArrow-react-date-picker-janouy" src={Arrow} alt="arrow" onClick={goPrevMonth} />
					<img className="house-react-date-picker-janouy" src={House} alt="arrow" onClick={displayToday} />
					<div className="labelsWrapper-react-date-picker-janouy">
						<Months
							choosenMonth={choosenMonth}
							monthOptionIsOpen={monthOptionIsOpen}
							setMonth={setMonth}
							setMonthOptionIsOpen={setMonthOptionIsOpen}
							language={language}
						/>
						<Years
							choosenYear={choosenYear}
							setYearOptionIsOpen={setYearOptionIsOpen}
							yearOptionIsOpen={yearOptionIsOpen}
							setYear={setYear}
						/>
					</div>
					<img
						className="rightArrow-react-date-picker-janouy"
						src={Arrow}
						alt="arrow"
						onClick={goNextMonth}
					/>
				</div>
				<InnerCalendar
					choosenYear={choosenYear}
					choosenMonth={choosenMonth}
					setSelectedDate={handleSelectedDate}
					setIsCalendarOpen={setIsCalendarOpen}
					dateFormat={dateFormat}
					language={language}
					inputDateElement={inputDateElement}
				/>
			</div>
		</>
	);
};
export default Calendar;
