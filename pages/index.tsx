import { Suspense, lazy } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '../components/Hero'
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
