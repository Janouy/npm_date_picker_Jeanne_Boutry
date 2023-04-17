import React, { useContext } from "react";
import Calendar from "./lib/pages/Calendar";
import "./App.css";
import { DateContext } from "./lib/utils/context";

function App() {
	const { dateOutput } = useContext(DateContext);
	return (
		<div className="App">
			<Calendar />
			<div>{dateOutput}</div>
		</div>
	);
}

export default App;
