import React, { useState, useEffect } from "react";
import "./style.css";
import Arrow from "../assets/arrow.svg";
import House from "../assets/house.svg";
import Months from "../components/Months";
import Years from "../components/Years";
import InnerCalendar from "../components/InnerCalendar";
import { scrollToElement } from "../utils/functions";

const Calendar = () => {
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
			scrollToElement(".selectedYearOption");
		} else if (monthOptionIsOpen) {
			scrollToElement(".selectedMonthOption");
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
		} else if (choosenMonth === 11) {
			setChoosenYear(choosenYear + 1);
			setChoosenMonth(0);
		}
	};
	const goPrevMonth = () => {
		if (choosenMonth > 0) {
			setChoosenMonth(choosenMonth - 1);
		} else if (choosenMonth === 0) {
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
	return (
		<>
			<div className="calendar" onClick={closeLists}>
				<div className="selectWrapper">
					<img className="leftArrow" src={Arrow} alt="arrow" onClick={goPrevMonth} />
					<img className="house" src={House} alt="arrow" onClick={displayToday} />
					<div className="labelsWrapper">
						<Months
							choosenMonth={choosenMonth}
							monthOptionIsOpen={monthOptionIsOpen}
							setMonth={setMonth}
							setMonthOptionIsOpen={setMonthOptionIsOpen}
						/>
						<Years
							choosenYear={choosenYear}
							setYearOptionIsOpen={setYearOptionIsOpen}
							yearOptionIsOpen={yearOptionIsOpen}
							setYear={setYear}
						/>
					</div>
					<img className="rightArrow" src={Arrow} alt="arrow" onClick={goNextMonth} />
				</div>
				<InnerCalendar choosenYear={choosenYear} choosenMonth={choosenMonth} />
			</div>
		</>
	);
};
export default Calendar;
