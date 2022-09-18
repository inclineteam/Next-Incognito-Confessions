import { NextPage } from "next";
import { ConfessionsHeader } from "../components/confessions/confessions-header";
import { Layout } from "../components/layout";
import { ProtectedComponent } from "../components/protectedcomponent";

const Confessions: NextPage = () => {
  return (
    <Layout>
      <ProtectedComponent>
        <div className="h-auto min-h-screen bg-zinc-900">
          <ConfessionsHeader />

          <main>
            <h1 className="mt-10 text-center text-3xl text-zinc-300">
              Still not done
            </h1>
          </main>
        </div>
      </ProtectedComponent>
    </Layout>
  );
};

export default Confessions;
