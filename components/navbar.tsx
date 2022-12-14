import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "http://localhost:3000/" });
  };

  if (status === "loading") {
    return <div className="h-[100px]">Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-[1400px] ">
      <div
        x-data="{ mobileNavDropdown: false }"
        className="responsive-padding relative mx-auto w-full max-w-6xl py-8"
      >
        <div className="flex items-center justify-between text-zinc-200">
          <a
            href="/"
            className="flex select-none items-center space-x-2 text-xl"
          >
            <span className="rounded-full bg-zinc-800 px-2 py-1">
              <i className="ai-glasses"></i>
            </span>
            <span className="font-quicksand font-bold">Incognito</span>
          </a>

          <nav className="hidden space-x-12 font-medium sm:block">
            <Link href="/confessions"><a className="hover:text-slate-300">Confessions</a></Link>
            <Link href="/about"><a className="hover:text-slate-300">About</a></Link>

              {!session ? (
                <Link href="/login">
                  <a className="rounded bg-zinc-800 py-3 px-5 font-medium text-[#FFFBD7] hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-100">
                    Sign In
                  </a>
                </Link>
              ) : ( 
                <button
                  onClick={handleLogout}
                  className="rounded bg-zinc-800 py-3 px-5 font-medium text-[#FFFBD7]"
               >
                  Logout
                </button>
              )}
          </nav>

          <button className="block sm:hidden">
            <i className="ai-three-line-horizontal text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};