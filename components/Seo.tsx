import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Seo: React.FC = () => {
  return (
    <Head>
      <NextSeo
        openGraph={{
          type: 'website',
          title: "Arindams Roy's portfolio",
          images: [
            {
              url: 'https://media.graphassets.com/6kEkv6SRPiWcnvjNBXMW',
              width: 800,
              height: 600,
              alt: 'Website Preivew',
              type: 'image/png',
            },
          ],
          description: 'This is a simple website to showcase my Projects ',
        }}
        twitter={{
          handle: '@Arindam20103910',
          site: '@https://portfolio-chi-eight-57.vercel.app/',
          cardType: 'summary_large_image',
        }}
      />
      <title>Arindam's Portfolio</title>
      <meta
        name="description"
        content="This is showcase of all the projects that i've made ."
      ></meta>
    </Head>
  )
}

export default Seo
