import React, { useState } from "react";
import { displayCurrentMonth, handleDateAppearance } from "../../utils/functions";
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
}) => {
	const [selectedDatetimeStamp, setSelectedDateTimeStamp] = useState();
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
									className={handleDateAppearance(
										date,
										choosenMonth,
										selectedDatetimeStamp,
										choosenYear,
									)}
									key={index}
								>
									<div
										className="date-react-date-picker-janouy"
										data-testid={date}
										onClick={
											date.getMonth() === choosenMonth
												? () => {
														setSelectedDate(format(date, selectedDateFormat));
														setSelectedDateTimeStamp(date);
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
