import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import Link from 'next/link';

export const ConfessionsHeader = () => {

    // handleSignIn();
    const Router = useRouter();
    return (
        <header className="sticky top-0 z-50 flex items-center border-b border-zinc-800 bg-zinc-900/80 py-3 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="flex justify-center w-[5rem]">
                        <a href="/">
                            <i className="ai-glasses text-4xl text-zinc-300"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="items-center hidden sm:flex  burger:hidden space-x-14">
                <nav className="flex items-center space-x-10">
                    <Link href="/home" className="flex items-end space-x-3 rounded-lg text-sm font-medium">
                        <div>
                            <i className="ai-home text-indigo-400 text-base"></i>
                            <span className="ml-2">Home</span>
                        </div>
                        
                    </Link>
                    <Link href="/confessions" className="flex items-end space-x-3 rounded-lg text-sm font-medium">
                        <div>
                            <i className="ai-home text-indigo-400 text-base"></i>
                            <span className="ml-2">Confessions</span>
                        </div>
                        
                    </Link>
                </nav>
            </div>
        </header>
    )
}
