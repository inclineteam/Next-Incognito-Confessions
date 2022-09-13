import type { NextPage } from 'next'
import { AuthLayout } from '../components/auth-layout'
import { getCsrfToken, getProviders } from 'next-auth/react'
import React from 'react'
import { useRouter } from 'next/router'


const VerifyRequest : NextPage = () => {

    const router = useRouter()
    const params = router.query

    return (
        <AuthLayout title='Error'>
            <div className='p-8 flex justify-center h-[10rem]'>
                { (params.error === 'AccessDenied') ? <p className='text-white p-5'>Access Denied</p> : (params.error === "Verification") ? <p className='text-white p-5'>The sign in link is no longer valid</p> : <p>Something went wrong</p> }
                
            </div>
        </AuthLayout>
    )
}

export default VerifyRequest