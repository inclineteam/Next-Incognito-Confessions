import React from 'react'
import { Footer } from './Footer'
import { HeadComponent } from './headComponent'
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
    children : React.ReactNode
}

export const Layout = ({ children } : LayoutProps) => {
    return (
        <div className='h-auto min-h-screen bg-zinc-900'>
            <HeadComponent title='Incognito' />
            {children}
            <Footer />
        </div>
    )
}
