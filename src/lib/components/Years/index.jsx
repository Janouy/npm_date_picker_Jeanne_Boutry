import React, { useEffect, useState } from "react";
import { years } from "../../utils/const";
import Arrow from "../../assets/arrow.svg";
import "./style.css";

const Years = ({ choosenYear, setYearOptionIsOpen, yearOptionIsOpen, setYear }) => {
	const [currentYear, setCurrentYear] = useState();
	useEffect(() => {
		setCurrentYear(years.find((year) => year === choosenYear));
	}, [choosenYear]);
	return (
		<div className="selectYear-react-date-picker-janouy">
			<div
				className="selectYearTitle-react-date-picker-janouy"
				onClick={(e) => setYearOptionIsOpen(!yearOptionIsOpen)}
			>
				{currentYear}
				<img className="selectArrow-react-date-picker-janouy" src={Arrow} alt="arrow" />
			</div>
			<div
				className={
					yearOptionIsOpen
						? "selectOptions-react-date-picker-janouy"
						: "selectOptionClosed-react-date-picker-janouy"
				}
			>
				{years.map((year, index) =>
					year === choosenYear ? (
						<div key={index} className="selectedYearOption-react-date-picker-janouy">
							{year}
						</div>
					) : (
						<div
							className="option-react-date-picker-janouy"
							key={index}
							onClick={(e) => setYear(e.target.innerHTML)}
						>
							{year}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Years;
