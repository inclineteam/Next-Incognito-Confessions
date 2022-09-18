import type { NextPage } from "next";
import { Hero } from "../components/landing/hero";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

const FourOhFour: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen min-h-screen bg-shark">
        <a
          href="/"
          className="absolute top-5 left-10 flex w-max items-center space-x-2 text-xl text-white/50 hover:text-white/80"
        >
          <span className="rounded-full bg-shark-lighter px-2 py-1">
            <i className="ai-glasses"></i>
          </span>
          <span className="font-semibold">Incognito</span>
        </a>

        <div className="flex h-full items-center justify-center text-center">
          <div>
            <p className="text-9xl font-bold text-white/70">404</p>
            <p className="mt-6 mb-20 text-2xl text-white/50">
              Uh.. you lost?
              <br />
              <span className="text-[1rem] opacity-40">Bebe Gurl ?</span>
            </p>

            <a
              href="/home"
              className="mx-auto flex w-max items-center space-x-3 rounded-lg bg-shark-lighter px-4 py-3 font-medium text-white/70"
            >
              <i className="ai-arrow-left"></i>
              <span>Back to home</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFour;
