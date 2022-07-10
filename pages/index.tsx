import { Suspense, lazy } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Hero from '../components/Hero'
// import Projects from '../components/Projects'
import Services from '../components/Services'
import { gql, GraphQLClient } from 'graphql-request'
import ContactMe from '../components/ContactMe'

const Projects = lazy(() => import('../components/Projects'))

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

const Home: NextPage<{ data: any }> = ({ data }) => {
  return (
    <div className="flex min-h-screen w-full flex-col  bg-slate-50 ">
      <Head>
        <title>Arindam's Portfolio</title>
        <link rel="icon" href="/pic3.ico" />
      </Head>
      <NextSeo
        title="Arindam's Roy Portfolio"
        description="Arindam Roy is a software engineer and a full-stack developer. He is a self-taught developer and has a passion for learning new technologies and building cool stuff."
        canonical="https://www.canonical.ie/"
        twitter={{
          handle: '@Arindam20103910',
          site: 'portfolio-chi-eight-57.vercel.app',
          cardType: 'summary_large_image',
        }}
        openGraph={{
          url: 'https://portfolio-chi-eight-57.vercel.app/',
          title: "Arindam's Portfolio",
          description: 'This is a simple portfolio of Arindam Roy ',
          images: [
            {
              url: '/pic3.png',
              width: 800,
              height: 600,
              alt: 'Arindam Roy',
              type: 'image/jpeg',
            },
            {
              url: 'https://media.graphassets.com/UdEP7CwOSN6zRrpIxgLe',
              width: 900,
              height: 800,
              alt: 'Sass Landing Page',
              type: 'image/jpeg',
            },
          ],
          site_name: "Arindam's portfolio",
        }}
      />

      <main className="mx-auto w-full max-w-[1280px] py-6">
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
