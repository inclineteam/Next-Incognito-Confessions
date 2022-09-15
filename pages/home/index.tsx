import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { Hero } from '../../components/landing/hero'
import { Layout } from '../../components/layout'
import { Navbar } from '../../components/navbar'
import { ProtectedComponent } from '../../components/protectedcomponent'
import { signOut } from "next-auth/react"
import { ConfessionsHeader } from '../../components/confessions/confessions-header'

const Home: NextPage = () => {

    return (
        <ProtectedComponent>
            <div>
                <ConfessionsHeader />
            </div>
        </ProtectedComponent>
    )
}

export default Home
