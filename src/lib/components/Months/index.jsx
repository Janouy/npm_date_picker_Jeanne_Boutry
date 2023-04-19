import React, { useEffect, useState } from "react";
import { months } from "../../utils/const";
import Arrow from "../../assets/arrow.svg";
import "./style.css";

const Months = ({ choosenMonth, monthOptionIsOpen, setMonth, setMonthOptionIsOpen }) => {
	const [currentMonth, setCUrrentMonth] = useState();
	useEffect(() => {
		setCUrrentMonth(months.find((month) => month.monthNumber === choosenMonth));
	}, [choosenMonth]);

	return (
		<div className="selectMonth">
			<div className="selectMonthTitle" onClick={(e) => setMonthOptionIsOpen(!monthOptionIsOpen)}>
				{currentMonth?.month}
				<img className="selectArrow" src={Arrow} alt="arrow" />
			</div>
			<div className={monthOptionIsOpen ? "selectOptions" : "selectOptionClosed"}>
				{months.map((month, index) =>
					month.monthNumber === choosenMonth ? (
						<div key={index} className="selectedMonthOption">
							{month.month}
						</div>
					) : (
						<div className="option" key={index} onClick={(e) => setMonth(index)}>
							{month.month}
						</div>
					),
				)}
			</div>
		</div>
	);
};

export default Months;
