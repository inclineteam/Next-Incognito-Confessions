import type { NextPage } from 'next'
import { AuthLayout } from '../components/auth-layout'
import { getProviders } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { AppProviders } from 'next-auth/providers'
import { signIn } from "next-auth/react"
import { ProviderButton } from '../components/forms/providerButton'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';


interface LoginProps {
    providers: AppProviders
}

const Login : NextPage<LoginProps> = ({ providers }) => {
    const [email, setEmail] = useState('')

    const sendLoginVerification = (e:any) => {
        e.preventDefault()
        // Notice, we are also redirecting users to the protected route instead of the homepage after signing in. 
        signIn('email', { callbackUrl: '/home', email})
    }

    return (
        <>
            <AuthLayout title='Log In'>
                <form className='flex flex-col items-center justify-center px-8 pt-5' onSubmit={sendLoginVerification}>
                    <div className="group mt-2 mb-5 flex w-full items-center space-x-4 rounded bg-zinc-700/50 px-4 py-2 duration-150">
                        <i className="ai-envelope text-white/50 group-focus-within:text-white/80"></i>
                        <input
                        type='email'
                        value={email}
                        required
                        className='flex-1 bg-transparent p-0 text-white/80 outline-none'
                        onChange={e => setEmail(e.target.value)}
                        />

                    </div>
                    <button type="submit"
                        className="w-[50%] rounded border-t border-indigo-500 bg-indigo-600 py-3 px-4 font-medium text-white duration-150">
                        Continue
                    </button>
                </form>
                <div className="px-8 pb-8">
                    <div className="relative my-10 border-t border-zinc-700">
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 p-2 text-sm text-zinc-500">OR</span>
                    </div>
                    <div className="space-y-4">
                        {Object.values(providers).map((provider) => {
                            if(provider.id != 'email'){
                                return (
                                    <ProviderButton key={provider.name} provider={provider.id}>
                                        <i className={`ai-${provider.id}-fill justify-self-end text-lg ${provider.id}`}></i>
                                        <span>Continue with {provider.name}</span>
                                    </ProviderButton>
                                )
                            }
                        })}
                    </div>
                </div>
            </AuthLayout>
        </>
    )
}

export default Login

export async function getServerSideProps(context:any) {
    const providers = await getProviders()
    
    return {
        props: {
            providers
        }
    }

}