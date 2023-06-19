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
		<div className="selectMonth-react-date-picker-janouy">
			<div
				className="selectMonthTitle-react-date-picker-janouy"
				onClick={(e) => setMonthOptionIsOpen(!monthOptionIsOpen)}
			>
				{currentMonth}
				<img className="selectArrow-react-date-picker-janouy" src={Arrow} alt="arrow" />
			</div>
			<div
				className={
					monthOptionIsOpen
						? "selectMonthsOptions-react-date-picker-janouy"
						: "selectOptionClosed-react-date-picker-janouy"
				}
			>
				{months.map((month, index) =>
					index === choosenMonth ? (
						<div key={index} className="selectedMonthOption-react-date-picker-janouy">
							{month}
						</div>
					) : (
						<div className="option-react-date-picker-janouy" key={index} onClick={(e) => setMonth(index)}>
							{month}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Months;
