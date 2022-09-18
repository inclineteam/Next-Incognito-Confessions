import type { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth";
import { Hero } from "../components/landing/hero";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";
import { authOptions } from "./api/auth/[...nextauth]";

const Landing: NextPage = () => {
  return (
    <Layout>
      <div className="h-auto min-h-screen bg-zinc-900">
        <div className="mx-auto max-w-[1400px]">
          <div className="bg-img relative bg-no-repeat [background-position:-20rem_-5rem] sm:bg-[top_right]">
            <div className="absolute top-0 bottom-0 right-0 hidden w-20 bg-gradient-to-r from-zinc-900/0 via-zinc-900/20 to-zinc-900 lg:block"></div>
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-900/0">
              <div className="mx-auto max-w-[1400px]">
                <Navbar />
              </div>
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // NOTE: unstable_getServerSession is an experimental feature. It may be removed, or changed
  const session = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
