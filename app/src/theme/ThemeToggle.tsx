import { Button } from '@/components/ui/button'
import { useTheme} from 'next-themes'
import { Moon, SunMedium} from 'lucide-react'
import React from 'react'

export const ThemeToggle = () => {
    const  {setTheme, theme} = useTheme()
  return (
    <Button
    variant="ghost"
    size="sm"
    onClick={()=>{
        setTheme(theme=="light"?"dark":"light")
    }}>ThemeToggle</Button>
  )
}
