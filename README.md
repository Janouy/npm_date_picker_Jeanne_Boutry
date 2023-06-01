# React simple date picker

## Description

react-test-janouy is a simple React component that allows you to add a calendar date picker to your React application.

## Table of contents

-   [Main features](#main-features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Customizable properties](#customizable-properties)

## Main features

-   ☀️ Select days, ranges or whatever
-   🌎 Localizable into many [language](#supported-languages)
-   📄 Easy to integrate

## Installation

To install React Easy Modale in your project, you can use NPM:

```
npm i react-test-janouy

```

![NodeJS](https://img.shields.io/badge/node.js-v16.19.1-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-v18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# Sleep Well : the smart alarm-clock app

Sleep Well aims at developing a smart alarm clock for iPhones that monitors your breathing rhythm while you sleep to determine your sleep cycles.

## Technologies

-   JS
-   CSS
-   React

## Contribute to the project

Sleep Well is an open source project. Feel free to fork the source and contribute with your own features.

## Authors

Our code squad : Francis & Stéphane

## Licensing

This project was built under the Creative Commons licence.

## Usage

To use Calendar in your React project, you need to import it into your component and use it as a regular React component. Here's an example:

```

import Calendar from "react-test-janouy/dist/pages/Calendar";
import { useState } from "react";

function MyComponent() {
    const language = "en";
	const dateFormat = "mm.dd.yyyy";
    const [date, setDate] = useState();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

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
            isCalendarOpen={isCalendarOpen}
            setIsCalendarOpen={setIsCalendarOpen}
            selectedDate={date}
            handleSelectedDate={(date) => setDate(date)}
            language={language}
            dateFormat={dateFormat}
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

-   `language` (string): Determinates the calendar's language. (ex: 'en'). Click [[Here](#supported-languages) to see supported languages.

-   `dateFormat` (string): Determinates the date's format. (ex: 'mm/dd/yyyy').

## Supported languages:

-   ar - Arabic
-   az - Azerbaijanian (Azeri)
-   bg - Bulgarian
-   bs - Bosanski
-   ca - Català
-   ch - Simplified Chinese
-   cs - Čeština
-   da - Dansk
-   de - German
-   el - Ελληνικά
-   en - English
-   en-GB - English (British)
-   es - Spanish
-   et - "Eesti"
-   eu - Euskara
-   fa - Persian
-   fi - Finnish (Suomi)
-   fr - French
-   gl - Galego
-   he - Hebrew (עברית)
-   hr - Hrvatski
-   hu - Hungarian
-   id - Indonesian
-   it - Italian
-   ja - Japanese
-   ko - Korean (한국어)
-   kr - Korean
-   lt - Lithuanian (lietuvių)
-   lv - Latvian (Latviešu)
-   mk - Macedonian (Македонски)
-   mn - Mongolian (Монгол)
-   nl - Dutch
-   no - Norwegian
-   pl - Polish
-   pt - Portuguese
-   pt-BR - Português(Brasil)
-   ro - Romanian
-   ru - Russian
-   se - Swedish
-   sk - Slovenčina
-   sl - Slovenščina
-   sq - Albanian (Shqip)
-   sr - Serbian Cyrillic (Српски)
-   sr-YU - Serbian (Srpski)
-   sv - Svenska
-   th - Thai
-   tr - Turkish
-   uk - Ukrainian
-   vi - Vietnamese
-   zh - Simplified Chinese (简体中文)
-   zh-TW - Traditional Chinese (繁體中文)
