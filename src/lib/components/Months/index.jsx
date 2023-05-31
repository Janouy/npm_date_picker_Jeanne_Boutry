import React, { useEffect, useState } from "react";
import { weekDays_options } from "../../utils/const";
import Arrow from "../../assets/arrow.svg";
import "./style.css";

const Months = ({ choosenMonth, monthOptionIsOpen, setMonth, setMonthOptionIsOpen, language }) => {
	let months = weekDays_options.i18n[language].months;
	const [currentMonth, setCUrrentMonth] = useState();
	useEffect(() => {
		setCUrrentMonth(months.find((month, index) => index === choosenMonth));
	}, [choosenMonth, language]);

	return (
		<div className="selectMonth">
			<div className="selectMonthTitle" onClick={(e) => setMonthOptionIsOpen(!monthOptionIsOpen)}>
				{currentMonth}
				<img className="selectArrow" src={Arrow} alt="arrow" />
			</div>
			<div className={monthOptionIsOpen ? "selectOptions" : "selectOptionClosed"}>
				{months.map((month, index) =>
					index === choosenMonth ? (
						<div key={index} className="selectedMonthOption">
							{month}
						</div>
					) : (
						<div className="option" key={index} onClick={(e) => setMonth(index)}>
							{month}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Months;
