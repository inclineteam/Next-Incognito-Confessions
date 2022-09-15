import { signOut, useSession } from "next-auth/react"
import Link from "next/link";

export const Navbar = () => {
    const { data: session, status} = useSession();

    const handleLogout = async () => {
        await signOut({callbackUrl: 'http://localhost:3000/'});
    }

    if(status === 'loading') {
        return <div>Loading...</div>
    }


    return (
        <div className="mx-auto max-w-[1400px] ">
            <div x-data="{ mobileNavDropdown: false }" className="responsive-padding relative mx-auto w-full max-w-6xl py-8">
                <div className="flex items-center justify-between text-zinc-200">

                    <a href="/" className="flex select-none items-center space-x-2 text-xl">
                        <span className="rounded-full bg-zinc-800 px-2 py-1">
                            <i className="ai-glasses"></i>
                        </span>
                        <span className="font-quicksand font-bold">Incognito</span>
                    </a>

                    <nav className="hidden space-x-12 font-medium sm:block">
                        <ul className="inline-flex">
                            <li className="space-x-5">
                                <Link href="/">Confessions</Link>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                        <a>
                            {!session 
                                ? 
                            <Link href='/login'>
                                <a className="rounded bg-zinc-800 py-3 px-5 font-medium text-[#FFFBD7]">Sign In</a>
                            </Link>
                                : 
                            <button onClick={handleLogout} className="rounded bg-zinc-800 py-3 px-5 font-medium text-[#FFFBD7]">
                                Logout
                            </button>
                            }
                        </a>
                    </nav>

                    <button className="block sm:hidden">
                        <i className="ai-three-line-horizontal text-2xl"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}
