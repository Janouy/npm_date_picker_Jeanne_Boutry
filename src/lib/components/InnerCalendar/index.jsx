import React from "react";
import { weekDays, today } from "../../utils/const";
import { displayMonth } from "../../utils/functions";
import "./style.css";

const InnerCalendar = ({ choosenYear, choosenMonth, selectedDate, setSelectedDate, setIsCalendarOpen }) => {
	const setFormatDate = (date) => {
		let dateLength = date.toLocaleDateString("en").length;
		if (dateLength === 9) {
			setSelectedDate("0" + date.toLocaleDateString("en"));
		} else {
			setSelectedDate(date.toLocaleDateString("en"));
		}
	};
	return (
		<div className="calendarRow">
			{weekDays.map((day, dayIndex) => (
				<div key={dayIndex}>
					<div className="day">{day}</div>
					{displayMonth(choosenYear.toString(), choosenMonth.toString()).map((date, index) =>
						date.getDay() === dayIndex ? (
							<div
								className={
									date.getDate() === today.getDate() && today.getMonth() === choosenMonth
										? "today"
										: date.getMonth() !== choosenMonth
										? "otherMonthDay"
										: date.getDate() === new Date(selectedDate).getDate()
										? "selectedDay"
										: "notSelectedDay"
								}
								key={index}
							>
								<div
									className="date"
									onClick={() => {
										setFormatDate(date);
										// setIsCalendarOpen(false);
									}}
								>
									{date.getDate()}
								</div>
							</div>
						) : null,
					)}
				</div>
			))}
		</div>
	);
};

export default InnerCalendar;
