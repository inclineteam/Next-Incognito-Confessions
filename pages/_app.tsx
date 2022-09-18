import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { HeadComponent } from "../components/headComponent";

const App = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session}>
    <HeadComponent title="Incognito" />
    <Component {...pageProps} />
  </SessionProvider>
);

export default App;
