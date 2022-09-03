import React from 'react'
import { Footer } from './Footer'
import { HeadComponent } from './headComponent'
import { Layout } from './layout'
import { Navbar } from './navbar'

interface LayoutProps {
    title: string
    children : React.ReactNode
}

export const AuthLayout = ({ title, children } : LayoutProps) => {
    return (
        <Layout>
            <div className='h-auto min-h-screen bg-zinc-900 pt-28 pb-40'>
                <div className="mx-auto w-[96%] max-w-xl rounded-lg bg-zinc-800">

                    <a href="/"
                    className="absolute top-5 left-10 flex w-max items-center space-x-2 text-xl text-zinc-400 hover:text-zinc-200">
                        <span className="bg-shark-lighter rounded-full px-2 py-1">
                            <i className="ai-glasses"></i>
                        </span>
                        <span className="font-semibold">Incognito</span>
                    </a>

                    <header className="px-8 pt-6 text-2xl font-semibold text-zinc-300">
                        <p>{ title }</p>
                    </header>

                    {children}

                </div>
            </div>
        </Layout>
    )
}
