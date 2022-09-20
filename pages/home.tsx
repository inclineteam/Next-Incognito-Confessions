import type { GetServerSideProps, NextPage } from "next";
import { ProtectedComponent } from "../components/protectedcomponent";
import { ConfessionsHeader } from "../components/confessions/confessions-header";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { Session } from "next-auth";
import { Layout } from "../components/layout";
import {
  PencilIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  PlusIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import ConfessionCard from "../components/home/confession-card";
import getHandler from "../prisma/handler";
import { create } from "domain";

const Home: NextPage<{ session: Session, user: any }> = ({ session, user }) => {
  const userData = JSON.parse(user)
  return (
    <Layout>
      <ProtectedComponent>
        <div className="h-auto min-h-screen bg-zinc-900">
          <ConfessionsHeader />

          <main className="mx-auto max-w-6xl pt-10 pb-40">
            <div className="mb-10 flex items-center space-x-4 border-b border-zinc-800 py-4">
              <button className="flex items-center space-x-3 rounded-md bg-sky-500/10 px-4 py-2.5 text-sm  font-medium text-sky-400">
                <PlusIcon className="h-4 w-4" />
                <p>Write confession</p>
              </button>
              <p className="text-zinc-400">You've made {userData.confessions.length} confessions</p>
            </div>

            <div>
              {userData.confessions.length > 0 ? (
                <div>
                  <p className="mb-8 text-lg font-medium text-zinc-500">
                    Your confessions
                  </p>
                  <div className="grid grid-cols-3 gap-10">
                    
                    {userData.confessions.map((confession: any) => (
                      <ConfessionCard confession={confession} />
                    ))}

                  </div>
                </div>
              ) : ( 
                <div> 
                  <h1 className="text-zinc-400 text-2xl text-center mt-10">
                    You haven't wrote a confession yet
                  </h1>

                  <button className="block mt-8 mx-auto border border-zinc-800 px-4 py-2.5 rounded-md text-sky-500 font-medium">
                    Write one
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </ProtectedComponent>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // NOTE: unstable_getServerSession is an experimental feature. It may be removed, or changed
  const session = await unstable_getServerSession(
    ctx.req,
    ctx.res,
    authOptions
  );

  const { getUser, createConfession } = getHandler();
  const user = await getUser(session?.user?.email!);

  // await createConfession("hello", "lorem ipsumm", user?.id!);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      user: JSON.stringify(user),
    },
  };
};
