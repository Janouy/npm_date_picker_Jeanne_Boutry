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
		<div className="selectYear">
			<div className="selectYearTitle" onClick={(e) => setYearOptionIsOpen(!yearOptionIsOpen)}>
				{currentYear}
				<img className="selectArrow" src={Arrow} alt="arrow" />
			</div>
			<div className={yearOptionIsOpen ? "selectOptions" : "selectOptionClosed"}>
				{years.map((year, index) =>
					year === choosenYear ? (
						<div key={index} className="selectedYearOption">
							{year}
						</div>
					) : (
						<div className="option" key={index} onClick={(e) => setYear(e.target.innerHTML)}>
							{year}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Years;
