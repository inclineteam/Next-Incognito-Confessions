export const Hero = () => {
    return (
        <div className="responsive-padding mx-auto flex max-w-6xl flex-col pt-20 pb-56 md:items-center md:pt-20">
            <div>
                <h1
                    className="text-3xl font-semibold tracking-tight text-zinc-300 sm:text-5xl md:text-center md:text-6xl lg:text-7xl">
                    Confess <span className="bg-shark-lighter inline-block rounded-lg px-2 py-1 text-[#FFFBD7] shadow-xl md:px-4 md:py-3">
                        without
                    </span> them
                    <span
                        className="bg-shark-lighter relative my-2 inline-block rounded-lg px-2 py-1 text-[#FFFBD7] shadow-xl md:my-4 md:px-4 md:py-3">
                        knowing

                        <span
                            className="absolute top-full left-1/2 mt-3 ml-8 hidden w-[100%] -translate-x-1/2 text-sm font-normal tracking-normal text-zinc-400 lg:flex items-center space-x-3">
                            <i className="ai-check"></i>
                            <span>Confessions are anonymous</span>
                        </span>
                    </span> who you are.
                </h1>
            </div>

            <p className="mt-5 mb-10 text-base text-zinc-400 lg:my-14 lg:text-xl">
                A confession board for those who want to vent out their feelings
            </p>

            <div className="flex flex-wrap items-center mt-[3rem] sm:mt-[8rem] space-x-4 md:space-x-8">
                <a >
                    <button
                        className="rounded-md border-t border-indigo-500 bg-indigo-600 px-6 py-4 text-sm font-medium text-white lg:text-base">
                        Write a confession
                    </button>
                </a>
                <a className="py-4 pl-2 text-sm font-medium text-white lg:text-base">How does it work?</a>
            </div>
        </div>
    )
}
