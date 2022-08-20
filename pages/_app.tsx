import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout/index";
import "@/styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>EasyBank</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
