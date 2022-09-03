import { AppProps } from 'next/app'
import React from 'react'
import { Footer } from './Footer'
import { HeadComponent } from './headComponent'
import { Navbar } from './navbar'

interface LayoutProps {
    children : React.ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
    return (
        <div className='h-auto min-h-screen bg-zinc-900'>
            <HeadComponent title='Incognito' />
            <div className="mx-auto max-w-[1400px]">
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    )
}
