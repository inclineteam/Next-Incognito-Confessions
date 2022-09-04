import type { NextPage } from 'next'
import { AuthLayout } from '../components/auth-layout'
import { Layout } from '../components/layout'
import { Navbar } from '../components/navbar'


const About: NextPage = () => {
    return (
        <Layout>
            <div className="h-auto min-h-screen bg-zinc-900">
                
                <div className="mx-auto max-w-[1400px]">
                    <Navbar />
                </div>
                <div className="mx-auto max-w-[1400px]">
                    <section className='responsive-padding relative mx-auto w-full max-w-4xl py-8 text-white'>
                        <h1 className="font-medium text-4xl text-start py-6">About Us</h1>
                        <p className="text-3xl text-justify font-extralight">
                            Our mission is to provide a platform for
                            people to vent out there feelings in incognito mode!
                            <br/> <br/>
                            Share your weirdest and darkest secrets anonymously,
                            and receive feedbacks from other users.
                        </p>
                            <br/><br/>
                        <p className="text-3xl text-start font-extralight">
                            Incognito Confessions was originally a Laravel test and starter built by
                            Incline Start-up Agency for future team project.
                            Testing Git and framework functions.
                            <br /><br />
                            However, we decided to migrate it in Next.js, Prisma, and TypeScript for learning purposes.
                            <br/> <br/>
                            In addition, anyone is open to use this template for
                            personal and commercial use.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default About
