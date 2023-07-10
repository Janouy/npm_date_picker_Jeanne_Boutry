import React, { useState } from "react";
import { today } from "../../utils/const";
import { displayCurrentMonth } from "../../utils/functions";
import { format } from "date-fns";
import { weekDays_options } from "../../utils/const";
import "./style.css";

const InnerCalendar = ({
	choosenYear,
	choosenMonth,
	setSelectedDate,
	setIsCalendarOpen,
	selectedDateFormat,
	language,
	selectedDate,
}) => {
	const [timeStamp, setTimeStamp] = useState();
	let weekDays = weekDays_options.i18n[language].dayOfWeekShort;

	return (
		<>
			<div className="calendarRow-react-date-picker-janouy">
				{weekDays.map((weekDay, weekDayIndex) => (
					<div key={weekDayIndex}>
						<div className="weekDay-react-date-picker-janouy">{weekDay}</div>
						{displayCurrentMonth(choosenYear.toString(), choosenMonth.toString()).map((date, index) =>
							date.getDay() === weekDayIndex ? (
								<div
									className={
										(date.getDate() === today.getDate() &&
											date.getMonth() === today.getMonth() &&
											choosenMonth === today.getMonth() &&
											date.getFullYear() === today.getFullYear() &&
											!selectedDate) ||
										(date.getDate() === timeStamp?.getDate() &&
											date.getMonth() === timeStamp?.getMonth() &&
											choosenMonth === timeStamp?.getMonth() &&
											date.getFullYear() === timeStamp?.getFullYear()) ||
										date.getDate() === new Date(timeStamp).getDate()
											? "selectedDay-react-date-picker-janouy"
											: date.getDate() === today.getDate() &&
											  date.getMonth() === today.getMonth() &&
											  choosenMonth === today.getMonth() &&
											  date.getFullYear() === today.getFullYear() &&
											  selectedDate
											? "today-react-date-picker-janouy"
											: date.getMonth() !== choosenMonth
											? "otherMonthDay-react-date-picker-janouy"
											: "notSelectedDay-react-date-picker-janouy"
									}
									key={index}
								>
									<div
										className="date-react-date-picker-janouy"
										data-testid={date}
										onClick={
											date.getMonth() === choosenMonth
												? () => {
														setSelectedDate(format(date, selectedDateFormat));
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
