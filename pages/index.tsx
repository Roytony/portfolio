import React, {Suspense} from 'react'
import type {NextPage} from 'next'

import {gql, GraphQLClient} from 'graphql-request'

import Footer from '../components/Footer'
import Seo from '../components/Seo'

const Project = React.lazy(() => import('../components/Projects'))
const Model = React.lazy(() => import('../components/Robot'))

const Home: NextPage<{ data: any }> = ({data}) => {
    return (
        <div className=" min-h-screen w-full bg-[#111] bg-gradient-to-tr from-[#111] to-[#0c0909]  text-white">
            <Seo/>
            <main className="relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center px-4 py-4">
                <div className="h-[300px]   w-[300px]  md:h-[600px] md:w-[600px]">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Model/>
                    </Suspense>
                </div>

                <h1 className="text-center text-5xl font-bold">
                    Hi! this is{' '}
                    <span
                        className="rotate-90 bg-gradient-to-br from-orange-600  to-gray-200 bg-clip-text  text-transparent">
            Arindam Roy
          </span>{' '}
                </h1>
                <p className="py-4 text-center text-sm md:text-base">
                    I'm a Full Stack Enginner specialization in React + Next.js +
                    TypeScript + Aws + Firebase with 2+ years if experience bulding,
                    <br/>
                    interactive web application . I'm dedicated to delivering great user
                    experiences by working closely <br/> with designers , and writing
                    good quality coe to maintain a good developer experiences
                </p>
                <div className="grid grid-cols-3 gap-8  pt-6">
                    <a
                        href="https://github.com/arindam324/"
                        className="group"
                        target={'_blank'}
                    >
                        <div
                            className="grid  place-items-center rounded-lg border px-4 py-2 transition duration-100 ease-out group-hover:bg-white group-hover:font-bold group-hover:text-black md:px-8 lg:cursor-pointer">
                            <p>Github</p>
                        </div>
                    </a>

                    <a
                        href="https://twitter.com/Arindam20103910"
                        className="group"
                        target={'_blank'}
                    >
                        <div
                            className="grid  place-items-center rounded-lg border px-4 py-2 transition duration-100 ease-out group-hover:bg-white group-hover:font-bold group-hover:text-black md:px-8 lg:cursor-pointer">
                            <p>Twitter</p>
                        </div>
                    </a>

                    <a
                        href="https://blog-rosy-six.vercel.app/"
                        className="group"
                        target={'_blank'}
                    >
                        <div
                            className="grid  place-items-center rounded-lg border px-4 py-2 transition duration-100 ease-out group-hover:bg-white group-hover:font-bold group-hover:text-black md:px-8 lg:cursor-pointer">
                            <p>Blog</p>
                        </div>
                    </a>
                </div>
            </main>
            <Suspense fallback={<div>Loading....</div>}>
                <Project data={data.projects}/>
            </Suspense>
            <Footer/>
        </div>
    )
}

export default Home

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
