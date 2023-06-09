"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
