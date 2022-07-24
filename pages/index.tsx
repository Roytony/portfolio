import type { NextPage } from 'next'
import { Suspense, lazy } from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Hero from '../components/Hero'
import Services from '../components/Services'
import { gql, GraphQLClient } from 'graphql-request'
import ContactMe from '../components/ContactMe'

const Projects = lazy(() => import('../components/Projects'))

type Projects = {
  id: string
  title: string
  description: string
  image: {
    url: string
  }
  githubLink: string
  websiteLink: string
}

export async function getStaticProps() {
  const graphCms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl3whaa4egnvk01xi03ir29it/master'
  )
  const data = await graphCms.request(
    gql`
      {
        projects {
          id
          title
          description
          image {
            url
          }
          githubLink
          websiteLink
        }
      }
    `
  )

  return {
    props: {
      data,
    },
  }
}

const Home: NextPage<{ data: { projects: Projects[] } }> = ({ data }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50  ">
      <NextSeo
        openGraph={{
          type: 'website',
          title: "Arindams Roy's portfolio",
          description: 'This is a simple website to showcase my Projects ',
          images: [
            {
              url: '/preview.png',
              width: 900,
              height: 800,
              alt: 'website Preview',
              type: 'image/png',
            },
            {
              url: 'https://media.graphassets.com/p8JGCzdQuqMkuaK23D30',
            },
            {
              url: 'https://media.graphassets.com/38W6DEnPRWaWs9wm8gbP',
            },
          ],
        }}
        twitter={{
          handle: '@Arindam20103910',
          site: '@https://portfolio-chi-eight-57.vercel.app/',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <title>Arindam's Portfolio</title>
        <link rel="icon" href="/pic3.ico" />
      </Head>
      <main className="mx-auto w-full max-w-[1280px] py-6 ">
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects data={data.projects} />
        </Suspense>
        <Services />
        <ContactMe />
      </main>
    </div>
  )
}

export default Home
