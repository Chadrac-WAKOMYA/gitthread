import { Button } from '@/components/ui/button'
import React from 'react'
import { ThemeToggle } from '../../theme/ThemeToggle'

export const Header = async() => {
  return (
    <header className='boder-b border-b-accent'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
            <h2 className='texte-2xl font-bold mr-auto '>GitThread</h2>
            <ThemeToggle/>
        </div>
    </header>
  )
}
