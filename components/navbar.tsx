export const Navbar = () => {
    return (
        <div>
            <div x-data="{ mobileNavDropdown: false }" className="responsive-padding relative mx-auto w-full max-w-6xl py-8">
                <div className="flex items-center justify-between text-zinc-200">

                    <a href="/" className="flex select-none items-center space-x-2 text-xl">
                        <span className="rounded-full bg-zinc-800 px-2 py-1">
                            <i className="ai-glasses"></i>
                        </span>
                        <span className="font-[Quicksand]">Incognito</span>
                    </a>

                    <nav className="hidden space-x-12 font-medium sm:block">
                        <a>Confessions</a>
                        <a>About</a>
                        <a>
                            <button className="rounded bg-zinc-800 py-3 px-5 font-medium text-[#FFFBD7]">
                                Sign in
                            </button>
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
