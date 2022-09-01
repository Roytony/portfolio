import React from 'react'
import Image from 'next/image'

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

const Project: React.FC<{ data: ProjectProps[] }> = ({ data }) => {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-4">
      <h1 className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-3xl font-bold  text-transparent">
        Here is all my projects
      </h1>

      <div className="mx-auto flex w-full max-w-3xl flex-col  items-center">
        {data.map((item, i) => (
          <article
            className={`w-full max-w-[400px] cursor-pointer  py-3 transition duration-100 ease-out hover:scale-110  ${
              i % 2 ? 'self-start' : 'self-end'
            } `}
            key={item.id}
          >
            <a href={item.websiteLink} target={'_blank'}>
              <Image
                src={item.image.url}
                width={500}
                height={300}
                className="roudned-md"
              />
            </a>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project
