export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900 pt-8 pb-10 text-center text-sm text-zinc-400">
      <div className="mx-auto flex w-[70%] flex-wrap justify-between gap-10 md:w-[60%]">
        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Resources</p>
          <ul>
            <li className="mt-4 flex">
              <a className="text-left">About</a>
            </li>
            <li className="mt-4 flex">
              <a>Privacy Policy</a>
            </li>
            <li className="mt-4 flex">
              <a>Terms Of Use</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Open Source</p>
          <ul>
            <li className="mt-4 flex">
              <a className="text-left">Github</a>
            </li>
            <li className="mt-4 flex">
              <a>Bug Report</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-[1rem] font-medium text-white">Contact</p>
          <ul>
            <li className="mt-4 flex">
              <a
                className="text-left"
                href="
                            {{ route('discord') }}
                        "
              >
                Discord
              </a>
            </li>
            <li className="mt-4 flex">
              <a
                href="
                            {{ route('discord') }}
                        "
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10">
        Copyright &copy; 2022 Incline Team. All Rights Reserved
      </p>
    </footer>
  );
};
