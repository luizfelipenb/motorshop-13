import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme } from "./light";
import { ThemeContextData } from "./theme-provider-types";

export const ThemeContext = React.createContext({} as ThemeContextData);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledThemeProvider theme={lightTheme}>
      <ThemeContext.Provider value={{ theme: lightTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
