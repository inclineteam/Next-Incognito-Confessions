import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 pt-8 pb-10 text-center text-sm text-zinc-400">
      <div className="mx-auto flex w-[70%] flex-wrap justify-between gap-10 md:w-[60%]">
        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Resources</p>
          <ul>
            <li className="mt-4 flex">
              <Link href="/about"><a className="text-left hover:text-slate-200">About</a></Link>
            </li>
            <li className="mt-4 flex">
            <Link href="/privacy"><a className="text-left hover:text-slate-200">Privacy Policy</a></Link>
            </li>
            <li className="mt-4 flex">
            <Link href="/terms"><a className="text-left hover:text-slate-200">Terms Of Use</a></Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Open Source</p>
          <ul>
            <li className="mt-4 flex">
            <Link href="https://github.com/inclineteam/Next-Incognito-Confessions"><a className="text-left hover:text-slate-200" target="_blank">Github</a></Link>
            </li>
            <li className="mt-4 flex">
            <Link href="https://github.com/inclineteam/Next-Incognito-Confessions/issues/new"><a className="text-left hover:text-slate-200" target="_blank">Bug Report</a></Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Contact</p>
          <ul>
            <li className="mt-4 flex">
            <Link href="/discord"><a className="text-left hover:text-slate-200" target="_blank">Discord</a></Link>
            </li>
            <li className="mt-4 flex">
            <Link href="https://www.facebook.com/incognitoconfessions/"><a className="text-left hover:text-slate-200" target="_blank">Facebook</a></Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10">
        <Link href="https://github.com/inclineteam"><a className="hover:underline underline-offset-8" target="_blank">Copyright &copy; 2022 Incline Team. All Rights Reserved</a></Link>
      </p>
    </footer>
  );
};
