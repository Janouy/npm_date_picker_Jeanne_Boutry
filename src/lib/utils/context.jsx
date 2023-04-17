import React, { createContext, useState } from "react";

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
	const [dateOutput, setDateOutput] = useState();

	return <DateContext.Provider value={{ dateOutput, setDateOutput }}>{children}</DateContext.Provider>;
};
