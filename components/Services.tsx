import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const Services = () => {
  const [shown, setShown] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const showForm = () => {
    setShown(!shown)
  }

  const sendEmail = async () => {
    await axios
      .post('https://l674j9rggb.execute-api.ap-south-1.amazonaws.com/dev', {
        name: name,
        email: email,
        message: message,
      })
      .then((data) => {
        console.log(data)
        setName('')
        setEmail('')
        setMessage('')
        setShown(!shown)
        toast.success(' email received successfully ')
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="py-4 text-3xl font-semibold ">Services</h2>
      <Toaster position="top-right" />
      {shown && (
        <motion.div
          id="formemail"
          animate={{
            scale: [0.8, 1],
          }}
          className="absolute z-10 my-4  flex w-full max-w-[400px] flex-col space-y-2 rounded-lg border bg-slate-600 p-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2 h-6 w-6 cursor-pointer "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setShown(false)}
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <input
            className="rounded-md px-4 py-2 focus:outline-none"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <input
            className="rounded-md px-4 py-2 focus:outline-none"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <textarea
            className="rounded-md px-4 py-2 focus:outline-none"
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={sendEmail}
            className="bg-red-600 px-8 py-2 text-white "
            type="submit"
          >
            Submit
          </button>
        </motion.div>
      )}
      <div className="relative grid gap-5 lg:grid-cols-3">
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
        <button
          onClick={showForm}
          className="my-4 rounded-md bg-[#FFC107] px-8 py-2 text-white"
        >
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
  <article className="mx-auto w-[90%] space-y-4 rounded-lg bg-gray-200 p-4">
    <h2 className="text-xl">{logo}</h2>
    <p className="text-2xl font-semibold">{title} </p>
    <p className="text-lg">{description}</p>
  </article>
)

export default Services
