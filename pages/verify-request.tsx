import type { NextPage } from 'next'
import { AuthLayout } from '../components/auth-layout'
import { getCsrfToken, getProviders } from 'next-auth/react'
import React from 'react'


const VerifyRequest : NextPage = () => {
    return (
        <AuthLayout title='Check your email'>
            <div className='p-8 flex justify-center h-[10rem]'>
                <p className='text-white p-5'>Check your email for a link to sign in.</p>
            </div>
        </AuthLayout>
    )
}

export default VerifyRequest