import React, { useEffect, useState } from "react";
import Arrow from "../../assets/arrow.svg";
import "./style.css";

const Months = ({ choosenMonth, monthOptionIsOpen, setMonth, setMonthOptionIsOpen, language, traducedMonths }) => {
	const [currentMonth, setCUrrentMonth] = useState();
	useEffect(() => {
		setCUrrentMonth(traducedMonths.find((month, index) => index === choosenMonth));
	}, [choosenMonth, language, traducedMonths]);

	return (
		<div className="selectMonth-react-date-picker-janouy">
			<div
				className="selectMonthTitle-react-date-picker-janouy"
				data-testid="selectedMonth"
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
				data-testid="openMonthsListContent"
			>
				{traducedMonths.map((month, index) =>
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
