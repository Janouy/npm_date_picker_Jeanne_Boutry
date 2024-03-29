import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Arrow from "../../assets/arrow.svg";
import House from "../../assets/house.svg";
import Months from "../Months";
import Years from "../Years";
import InnerCalendar from "../InnerCalendar";
import { scrollToElement } from "../../utils/functions";
import { isBrowser } from "react-device-detect";

const Calendar = ({
	isCalendarOpen,
	setIsCalendarOpen,
	setSelectedDate,
	language,
	selectedDateFormat,
	traducedMonths,
	weekDays,
	minAgeRequired,
}) => {
	const currentMonth = new Date().getMonth();
	const currentYear = new Date().getFullYear();
	const [choosenYear, setChoosenYear] = useState("");
	const [choosenMonth, setChoosenMonth] = useState("");
	const [monthOptionIsOpen, setMonthOptionIsOpen] = useState(false);
	const [yearOptionIsOpen, setYearOptionIsOpen] = useState(false);
	const calendarElement = useRef();
	//get the infos to display the today's month when calendar is opened
	const displayToday = () => {
		setChoosenMonth(currentMonth);
		setChoosenYear(currentYear);
	};
	useEffect(() => {
		displayToday();
	}, []);
	useEffect(() => {
		if (yearOptionIsOpen) {
			scrollToElement(
				".selectedYearOption-react-date-picker-janouy",
				".selectYearsOptions-react-date-picker-janouy",
				true,
			);
		} else if (monthOptionIsOpen) {
			scrollToElement(
				".selectedMonthOption-react-date-picker-janouy",
				".selectMonthsOptions-react-date-picker-janouy",
				true,
			);
		}
	}, [monthOptionIsOpen, yearOptionIsOpen]);
	useEffect(() => {
		if (!isCalendarOpen) {
			setMonthOptionIsOpen(false);
			setYearOptionIsOpen(false);
		}
	}, [isCalendarOpen]);

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
	//prevent page scoll when calendar is open
	useEffect(() => {
		let calendarEl = calendarElement.current;
		if (isCalendarOpen && isBrowser) {
			calendarEl.addEventListener("mouseover", () => {
				document.body.classList.add("noScroll");
			});
			calendarEl.addEventListener("mouseout", () => {
				document.body.classList.remove("noScroll");
			});
		}
	}, [isCalendarOpen]);

	return (
		<>
			<div
				className={
					isCalendarOpen ? "calendar-react-date-picker-janouy" : "closedCalendar-react-date-picker-janouy"
				}
				onClick={closeLists}
				onWheel={(event) => changeMonth(event)}
				ref={calendarElement}
				data-testid="calendar"
			>
				<div className="selectWrapper-react-date-picker-janouy">
					<img
						className="leftArrow-react-date-picker-janouy"
						src={Arrow}
						alt="left arrow"
						onClick={goPrevMonth}
						data-testid="leftArrow"
					/>
					<img
						className="house-react-date-picker-janouy"
						src={House}
						alt="house"
						onClick={displayToday}
						data-testid="house"
					/>
					<div className="labelsWrapper-react-date-picker-janouy">
						<Months
							choosenMonth={choosenMonth}
							monthOptionIsOpen={monthOptionIsOpen}
							setChoosenMonth={setChoosenMonth}
							setMonthOptionIsOpen={setMonthOptionIsOpen}
							language={language}
							traducedMonths={traducedMonths}
						/>
						<Years
							choosenYear={choosenYear}
							setYearOptionIsOpen={setYearOptionIsOpen}
							yearOptionIsOpen={yearOptionIsOpen}
							setChoosenYear={setChoosenYear}
						/>
					</div>
					<img
						className="rightArrow-react-date-picker-janouy"
						src={Arrow}
						alt="right arrow"
						onClick={goNextMonth}
						data-testid="rightArrow"
					/>
				</div>
				<InnerCalendar
					choosenYear={choosenYear}
					choosenMonth={choosenMonth}
					setSelectedDate={setSelectedDate}
					setIsCalendarOpen={setIsCalendarOpen}
					selectedDateFormat={selectedDateFormat}
					weekDays={weekDays}
					language={language}
					minAgeRequired={minAgeRequired}
				/>
			</div>
		</>
	);
};
export default Calendar;
