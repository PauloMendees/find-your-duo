import React, { ReactNode, useState, createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "../theme/colors";

interface IThemeContext {
  handleTheme: () => void;
  themeIsDark: boolean;
}

type ThemeProviderType = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as IThemeContext);

export function Theme({ children }: ThemeProviderType) {
  const [themeIsDark, setThemeIsDark] = useState<boolean>(false);

  function handleTheme() {
    setThemeIsDark(!themeIsDark);
  }

  return (
    <ThemeContext.Provider value={{
        themeIsDark,
        handleTheme
    }}>
      <ThemeProvider theme={themeIsDark ? colors.dark : colors.light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext)