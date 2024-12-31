// import "@/styles/globals.css";
/*
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
  */

import Layout from "@/components/layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

export default MyApp
