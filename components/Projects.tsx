import { useState } from 'react'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll'
import { motion } from 'framer-motion'

const Projects = () => {
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
      <h2 className="py-4 text-3xl font-semibold">Projects</h2>
      <div className="grid w-full grid-cols-1 gap-5   lg:grid-cols-3">
        <Project img={'/previe.png'} title="Instagram-clone" />
        <Project img="/preview.png" title="Education Dashboard" />
        <Project img="/preview2.png" title={'Finance Dashboard'} />
        {showAll && (
          <>
            <Project img={'/previe.png'} title="Instagram-clone" />
            <Project img="/preview.png" title="Education Dashboard" />
            <Project img="/preview2.png" title={'Finance Dashboard'} />
            <Project img={'/previe.png'} title="Instagram-clone" />
            <Project img="/preview.png" title="Education Dashboard" />
            <Project img="/preview2.png" title={'Finance Dashboard'} />
          </>
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          // ref={buttonRef}
          onClick={ShowAllProjects}
          className="mx-auto my-4 rounded-md bg-[#FFC107] px-8 py-2 text-white  "
        >
          Show All Projects
        </button>
      </div>
    </div>
  )
}

interface ProjectProps {
  img: string
  title: string
}

const Project = ({ img, title }: ProjectProps) => (
  <motion.article
    animate={{
      y: [-30, 0],
      scale: [1.1, 1],
    }}
    className="w-full bg-white"
  >
    <Image src={img} width={500} height={300} />
    <div className="p-4">
      <h2 className="py-2 text-xl font-bold">{title}</h2>
      <p className="text-sm font-medium text-gray-800">
        A full Stack Instagram clone made with Next.js and tailwindcss and
        Firebase as the backend
      </p>
    </div>
  </motion.article>
)

export default Projects
