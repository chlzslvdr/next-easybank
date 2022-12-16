import { FC } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import isEmpty from 'lodash/isEmpty';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: FC<SEOProps> = ({ title }) => {
  const SEOTitle = isEmpty(title) ? 'EasyBank' : `${title} | EasyBank`;

  return (
    <>
      <Head>
        <title>{SEOTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="og:image"
          content="https://velaris.sirv.com/easybank/logo.svg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title={SEOTitle}
        openGraph={{
          title: `${SEOTitle}`,
          images: [{ url: 'https://velaris.sirv.com/easybank/logo.svg' }],
          siteName: 'EasyBank',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
};

export default SEO;
