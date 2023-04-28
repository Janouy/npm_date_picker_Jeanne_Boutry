# React simple date picker

## Description

react-test-janouy is a simple React component that allows you to add a calendar date picker to your React application.

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

To install React Easy Modale in your project, you can use NPM:

```
npm i react-test-janouy

```

## Usage

To use Calendar in your React project, you need to import it into your component and use it as a regular React component. Here's an example:

```

import Calendar from "react-test-janouy/dist/pages/Calendar";
import { useState } from "react";

function MyComponent() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [birthDateInput, setBirthDateInput] = useState();
	const [date, setDate] = useState();
    const [calendarLang, setCalendarLang] = useState("fr");

    const showCalendar = () => {
        setIsCalendarOpen(true);
    };

    const hideModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div onMouseLeave={() => setIsCalendarOpen(false)}>
        <div onClick={() => showCalendar()}>Date :</div>
        <Calendar
            isCalendarOpen={isBirthCalendarOpen}
            setIsCalendarOpen={setIsCalendarOpen}
            dateOutput={date}
            setDateOutput={setDate}
        />
	</div>
  );
}

```

## Customizable properties

The following properties can be used to customize the EasyModale component:

-   `isCalendarOpen` (boolean): Determines whether the calendar is currently open or not.

-   `setIsCalendarOpen` (function): A function that determines if the calendar must be closed or opened with an event.

-   `selectedDate` (string): A string that represents the date on which the user clicked.

-   `handleSelectedDate` (function): A function that determines the date on which the user clicked.
