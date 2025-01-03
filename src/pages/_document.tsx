import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "@/lib/constants";

export default function Document() {
  return (
    <Html lang={siteMeta.siteLang}>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
