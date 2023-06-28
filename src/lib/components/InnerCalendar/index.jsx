import React, { useState } from "react";
import { today } from "../../utils/const";
import { displayCurrentMonth, formatDate } from "../../utils/functions";
import "./style.css";

const InnerCalendar = ({ choosenYear, choosenMonth, setSelectedDate, setIsCalendarOpen, dateFormat, weekDays }) => {
	const [timeStamp, setTimeStamp] = useState();
	return (
		<>
			<div className="calendarRow-react-date-picker-janouy">
				{weekDays.map((day, dayIndex) => (
					<div key={dayIndex}>
						<div className="day-react-date-picker-janouy">{day}</div>
						{displayCurrentMonth(choosenYear.toString(), choosenMonth.toString()).map((date, index) =>
							date.getDay() === dayIndex ? (
								<div
									className={
										date.getDate() === today.getDate() &&
										date.getMonth() === today.getMonth() &&
										choosenMonth === today.getMonth()
											? "today-react-date-picker-janouy"
											: date.getMonth() !== choosenMonth
											? "otherMonthDay-react-date-picker-janouy"
											: date.getDate() === new Date(timeStamp).getDate()
											? "selectedDay-react-date-picker-janouy"
											: "notSelectedDay-react-date-picker-janouy"
									}
									key={index}
								>
									<div
										className="date-react-date-picker-janouy"
										onClick={
											date.getMonth() === choosenMonth
												? () => {
														setSelectedDate(formatDate(date, dateFormat));
														setTimeStamp(date);
														setIsCalendarOpen(false);
												  }
												: null
										}
									>
										{date.getDate()}
									</div>
								</div>
							) : null,
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default InnerCalendar;
