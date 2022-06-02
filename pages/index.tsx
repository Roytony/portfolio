import type {NextPage} from 'next'
import Head from 'next/head'

import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Skills from '../components/Skills'

const Home: NextPage = () => {

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
