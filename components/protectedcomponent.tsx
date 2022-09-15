import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Footer } from './Footer'
import { HeadComponent } from './headComponent'
import { Navbar } from './navbar'

interface LayoutProps {
    children : React.ReactNode
}

export const ProtectedComponent = ({ children } : LayoutProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if(status === 'loading') {
        return <div>Loading...</div>
    }

    if(!session){
        router.back();
    }

    return (
        <div>
            {children}
        </div>
    )
}
