import type {NextPage} from 'next'
import Head from 'next/head'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'
import {gql, GraphQLClient} from "graphql-request";

// @ts-ignore
const Home: NextPage = ({Projects}) => {
    console.log(Projects)
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

export async function getStaticProps() {
    const graphCms = new GraphQLClient("https://api-ap-south-1.graphcms.com/v2/cl3whaa4egnvk01xi03ir29it/master")
    const Projects = await graphCms.request(
        gql`
            {
                 projects {
                    id
                    title
                    description
                  }
            }
        `
    )
    return {
        props: {
            Projects
        }
    }
}