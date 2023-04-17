import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DateProvider } from "./lib/utils/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DateProvider>
			<App />
		</DateProvider>
	</React.StrictMode>,
);
