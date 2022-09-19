import React, { ComponentClass } from "react";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";

export const ConfessionsHeader = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between py-4">
      <header className="flex items-center space-x-5 rounded-full border border-zinc-800 bg-zinc-900/60 py-2 px-3 shadow-md backdrop-blur-md">
        <Link href="/">
          <a>
            <i className="ai-glasses text-4xl text-zinc-300"></i>
          </a>
        </Link>

        <nav className="flex items-center space-x-3">
          <NavLink to="/home" Icon={HomeIcon} />
          <NavLink to="/confessions" Icon={EnvelopeIcon} />
        </nav>
      </header>

      <button
        className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 font-medium text-zinc-300 backdrop-blur-md"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  );
};

const NavLink = ({
  to,
  Icon,
}: {
  to: string;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}) => {
  const { pathname } = useRouter();

  return (
    <Link href={to}>
      <a
        className={`${
          to === pathname
            ? "bg-zinc-800 text-slate-100"
            : "text-zinc-200 hover:bg-zinc-800/50 hover:text-zinc-100"
        } group flex items-center space-x-3 rounded-full px-4 py-2.5`}
      >
        <Icon className="h-5 w-5" />
        {/* <i className="ai-envelope text-slate-500 group-hover:text-sky-500 text-base"></i> */}
        <span className="ml-2 text-sm font-medium capitalize">
          {to.replace("/", "")}
        </span>
      </a>
    </Link>
  );
};

//     <header className="sticky top-0 z-50 flex items-center border-b border-zinc-800 bg-zinc-900/80 py-3 backdrop-blur-md">
//   <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
//     <div className="flex items-center space-x-6">
//       <div className="flex justify-center w-[5rem]">
//         <a href="/">
//           <i className="ai-glasses text-4xl text-zinc-300"></i>
//         </a>
//       </div>
//     </div>
//     <div className="items-center hidden sm:flex  burger:hidden space-x-14">
//       <nav className="flex items-center space-x-10">
//         <Link href="/home">
//           <a className="flex items-end text-zinc-200 hover:text-zinc-400 space-x-3 rounded-lg">
//             <i className="ai-home text-indigo-400 text-base"></i>
//             <span className="ml-2 text-sm font-medium">Home</span>
//           </a>
//         </Link>
//         <Link href="/confessions">
//           <a className="flex items-end text-zinc-200 hover:text-zinc-400 space-x-3 rounded-lg">
//             <i className="ai-envelope text-indigo-400 text-base"></i>
//             <span className="ml-2 text-sm font-medium">Confessions</span>
//           </a>
//         </Link>

//         <Menu>
//           <div className="relative">
//             <Menu.Button className="flex items-center text-slate-200">
//               <span className="block mr-2 text-lg">
//                 <i className="ai-person"></i>
//               </span>
//               <i className="ai-chevron-down text-slate-400"></i>
//             </Menu.Button>

//             <Menu.Items className="shadow mt-4 rounded-md text-slate-200 p-2.5 absolute bg-zinc-900 border border-zinc-800 left-1/2 -translate-x-1/2">
//               <div className="h-0 w-0 border-x-[9px] border-b-[9px] border-zinc-800 absolute bottom-full left-1/2 -translate-x-1/2 border-x-transparent"></div>
//               <div className="h-0 w-0 border-x-8 border-b-8 border-zinc-900 absolute bottom-full left-1/2 -translate-x-1/2 border-x-transparent"></div>
//               <Menu.Item>
//                 <button className="w-full min-w-max text-left rounded-md pr-6 pl-3 py-2 hover:bg-zinc-800 text-sm font-medium">
//                   Verify email
//                 </button>
//               </Menu.Item>
//               <Menu.Item>
//                 <button className="w-full min-w-max text-left rounded-md pr-6 pl-3 py-2 hover:bg-rose-500/10 hover:text-rose-300 text-sm font-medium">
//                   Log out
//                 </button>
//               </Menu.Item>
//             </Menu.Items>
//           </div>
//         </Menu>
//       </nav>
//     </div>
//   </div>
// </header>
