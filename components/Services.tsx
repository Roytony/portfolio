const Services = () => {
  return (
    <div className="py-5 ">
      <h2 className="py-4 text-3xl font-semibold">Services</h2>
      <div className="grid grid-cols-3 gap-5">
        <ServiceCard
          logo={'💻'}
          title="Landing Pages + Blog"
          description={
            'I make fast and SEO friendly landing pages amd blogs that you can easily edit yourself '
          }
        />
        <ServiceCard
          logo={'🛠️'}
          title="Full Stack Developement"
          description={
            'I design , develop and deploy prototypes/MVP focusing on the most important features for your users , so you can luanch ASAP'
          }
        />
        <ServiceCard
          logo="🧑"
          title="fronend Development"
          description={
            'I make  Beautiful looking website with cool animations and all the features you need'
          }
        />
      </div>
      <div className="flex items-center justify-center">
        <button className="my-4 rounded-md bg-[#FFC107] px-8 py-2 text-white">
          Inquire by email
        </button>
      </div>
    </div>
  )
}

interface ServiceProps {
  logo: string
  title: string
  description: string
}

const ServiceCard = ({ logo, title, description }: ServiceProps) => (
  <article className="space-y-4 rounded-lg bg-gray-200 p-4">
    <h2 className="text-xl">{logo}</h2>
    <p className="text-2xl font-semibold">{title} </p>
    <p className="text-lg">{description}</p>
  </article>
)

export default Services
