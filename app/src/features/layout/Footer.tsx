import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import { Ghost, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className="py-é flex justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent">
        <Link href="/" className={clsx(
            buttonVariants({
                variant : "ghost"
            })
        )}>
            <Home size={16} />
        </Link>

    </div>
  )
}
