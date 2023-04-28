import React from "react";
import { weekDays, today } from "../../utils/const";
import { displayMonth } from "../../utils/functions";
import "./style.css";

const InnerCalendar = ({ choosenYear, choosenMonth, selectedDate, onClickedDate, setIsCalendarOpen }) => {
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
										onClickedDate(date.toLocaleDateString(navigator.language));
										setIsCalendarOpen(false);
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
