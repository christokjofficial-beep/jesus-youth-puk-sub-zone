import React, { createContext, useContext } from 'react';
import { ThemeMode, DepthMode } from '../types/theme';

interface ThemeContextType {
  theme: ThemeMode;
  depth: DepthMode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  depth: 'space'
});

export const ThemeProvider: React.FC<{
  theme: ThemeMode;
  depth: DepthMode;
  children: React.ReactNode;
}> = ({ theme, depth, children }) => {
  return (
    <ThemeContext.Provider value={{ theme, depth }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
