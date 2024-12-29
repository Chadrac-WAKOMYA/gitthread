import React from 'react';
import { ThemeProviderProps } from 'next-themes';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
      ThemeProvider
    </div>
  );
};
 