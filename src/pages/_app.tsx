import "@/styles/globals.css";
import Layout from "@/components/layout";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

export default MyApp
