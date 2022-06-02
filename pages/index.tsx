import type {NextPage} from 'next'
import Head from 'next/head'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'
import {gql, GraphQLClient} from "graphql-request";


export async function getStaticProps() {
    const graphCms = new GraphQLClient("https://api-ap-south-1.graphcms.com/v2/cl3whaa4egnvk01xi03ir29it/master")
    const data = await graphCms.request(
        gql`
        query {
          projects{
            id
            title
            description
            image{
              url
            }
          }
        }
        `
    )

    return {
        props: {
            data
        }
    }
}

// @ts-ignore
const Home: NextPage = ({data}) => {
    console.log(data)
    return (
        <div className="flex min-h-screen w-full flex-col  bg-slate-50 ">
            <Head>
                <title>Arindam's Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="mx-auto w-full max-w-[1280px] py-6">
                <Hero/>
                <Projects/>
                <Services/>
                <Skills/>
            </main>
        </div>
    )
}


export default Home
