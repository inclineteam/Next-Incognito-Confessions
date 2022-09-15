import React from 'react'
import { signIn, SignInResponse } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

interface ProviderButtonProps {
    provider: string
    children: React.ReactNode
}

export const ProviderButton = ({ provider, children } : ProviderButtonProps ) => {
    const handleSignIn = () => {
        signIn(provider, { callbackUrl: "/home", redirect: false })
    }

    // handleSignIn();
    return (
        <div className='flex w-full grid-cols-[0.9fr_1.1fr] items-center justify-center space-x-4 rounded border border-zinc-700/50 hover:bg-zinc-700/30 text-zinc-300 bg-transparent py-3 font-medium'>
            <button className='flex justify-center gap-2 items-center' type="submit" onClick={handleSignIn}>
                {children}
            </button>
        </div>

    )
}
