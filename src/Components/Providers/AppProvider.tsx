import React from "react";

const theme = {
  palette: {
    mode: "dark",
  },
};

export const ThemeContext = React.createContext({
  palette: {
    mode: "light"
  }
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};


// Here sometime we need to test Provider or Wrapper component like redux Provider, mui ThemeProvider etc in our application. 