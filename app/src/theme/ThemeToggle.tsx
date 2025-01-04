import { useTheme, UseThemeProps } from 'next-themes'
import React from 'react'

export const ThemeToggle = () => {
    const  {setTheme, theme} = useTheme()
  return (
    <div>ThemeToggle</div>
  )
}
