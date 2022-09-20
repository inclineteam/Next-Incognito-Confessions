import { GetServerSideProps, NextPage } from "next";
import { ConfessionsHeader } from "../components/confessions/confessions-header";
import ConfessionCard from "../components/home/confession-card";
import { Layout } from "../components/layout";
import { ProtectedComponent } from "../components/protectedcomponent";
import getHandler from "../prisma/handler";

const Confessions: NextPage<{confessions : any}> = ({  confessions }) => {

  const confessionData = JSON.parse(confessions);

  return (
    <Layout>
      <ProtectedComponent>
        <div className="h-auto min-h-screen bg-zinc-900">
          <ConfessionsHeader />

          <main>
            {confessionData.map((confession: any) => (
                      <ConfessionCard confession={confession} />
            ))}
          </main>
        </div>
      </ProtectedComponent>
    </Layout>
  );
};

export default Confessions;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { getConfessions } = getHandler();
  const confessions = await getConfessions();
  
  return {
    props: {
      confessions: JSON.stringify(confessions),
    },
  };
}
