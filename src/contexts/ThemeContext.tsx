import { createContext, useState, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

interface StateSwitchTheme {
  stateTheme: boolean;
  toggleTheme: () => void;
}

const DEFAULT_VALUES: StateSwitchTheme = {
  stateTheme: false,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(DEFAULT_VALUES);

const ThemeProvider = ({ children }: Props) => {
  const [stateTheme, setStateTheme] = useState(false);

  const toggleTheme = () => {
    setStateTheme(!stateTheme);
  };

  return (
    <ThemeContext.Provider value={{ stateTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
