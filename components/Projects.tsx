import React, {useState} from 'react'
import Image from 'next/image'
import {animateScroll as scroll} from 'react-scroll'
import {motion} from 'framer-motion'


interface ProjectProps {
    id: string
    description: string
    image: {
        url: string
    }
    title: string
    githubLink: string
    websiteLink: string
}


const Projects: React.FC<{ data: ProjectProps[] }> = ({data}) => {
    const [showAll, setShowAll] = useState<boolean>(false)

    const ShowAllProjects = () => {
        setShowAll(!showAll)
        if (!showAll) {
            scroll.scrollTo(1000)
        } else {
            scroll.scrollTo(150)
        }
    }

    return (
        <div className="w-full py-5">
            <h2 className="py-4 text-center text-3xl font-semibold">Projects</h2>
            <div className="grid w-full grid-cols-1 gap-5   lg:grid-cols-3">
                {data.map(item => (
                    <Project key={item.id} websiteLink={item.websiteLink} description={item.description}
                             img={item.image.url}
                             title={item.title}/>))}
                {/*{showAll && (*/}
                {/*  <>*/}
                {/*    <Project img={'/previe.png'} title="Instagram-clone" />*/}
                {/*    <Project img="/preview.png" title="Education Dashboard" />*/}
                {/*    <Project img="/preview2.png" title={'Finance Dashboard'} />*/}
                {/*    <Project img={'/previe.png'} title="Instagram-clone" />*/}
                {/*    <Project img="/preview.png" title="Education Dashboard" />*/}
                {/*    <Project img="/preview2.png" title={'Finance Dashboard'} />*/}
                {/*  </>*/}
                {/*)}*/}
            </div>
            {/* TODO: i will do this later  */}
            {/*<div className="flex items-center justify-center">*/}
            {/*  <button*/}
            {/*    // ref={buttonRef}*/}
            {/*    onClick={ShowAllProjects}*/}
            {/*    className="mx-auto my-4 rounded-md bg-[#FFC107] px-8 py-2 text-white  "*/}
            {/*  >*/}
            {/*    Show All Projects*/}
            {/*  </button>*/}
            {/*</div>*/}
        </div>
    )
}

interface ProJectComprops {
    img: string
    title: string
    description: string
    websiteLink: string
}


const Project = ({img, title, description, websiteLink}: ProJectComprops) => (

    <motion.article
        animate={{
            y: [-30, 0],
            scale: [1.1, 1],
        }}
        className="w-full bg-white cursor-pointer hover:shadow-xl hover:shadow-orange-300  shadow-lg rounded-lg"
    >
        <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <Image src={img} width={500} height={300}/>
            <div className="p-4">

                <h2 className="py-2 text-2xl font-bold">{title}</h2>

                <p className="text-sm font-medium text-gray-800">
                    {description}
                </p>
            </div>
        </a>
    </motion.article>

)

export default Projects
