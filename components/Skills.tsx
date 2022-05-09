import Image from 'next/image'

const Skills = () => {
  return (
    <div className="py-5">
      <h2 className="py-4 text-3xl font-semibold">Skills</h2>
      <div className="flex flex-wrap space-x-6">
        <ImageComponent src="https://cdn.svgporn.com/logos/javascript.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/typescript-icon.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/nextjs-icon.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/firebase.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/aws.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/nestjs.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/prisma.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/sanity.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/strapi-icon.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/mongodb.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/threejs.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/material-ui.svg" />

        <ImageComponent src="https://cdn.svgporn.com/logos/jest.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/cypress.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/aws-amplify.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/mysql.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/postgresql.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/storybook-icon.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/contentful.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/hasura.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/stripe.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/git.svg" />
        <ImageComponent src="https://cdn.svgporn.com/logos/algolia.svg" />
      </div>
    </div>
  )
}

const ImageComponent = ({ src }: { src: string }) => (
  <div className="cursor-pointer transition duration-100 ease-out hover:scale-125">
    <Image objectFit="contain" src={src} width={60} height={60} />
  </div>
)

export default Skills
