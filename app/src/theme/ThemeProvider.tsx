"use client"

import React from 'react';
import { ThemeProviderProps, ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider{... props}>{children}</NextThemesProvider>
  );
};
 