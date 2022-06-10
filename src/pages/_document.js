import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="author" content="1337" />
        <meta property="og:site_name" content="1337 Labs Clusters" />
        <meta property="og:title" content="1337 New Labs Clusters Map" />
        <meta
          property="og:description"
          content="A map for the new Labs Clusters in 1337 Khouribga"
        />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
