import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [error, setError] = useState<string>('')

  const formSubmit = (data: any) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <section>
      <h2 className="text-center text-3xl font-semibold  ">Get In Touch</h2>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className={' mx-auto w-[90%] space-y-4 py-4 lg:w-[60%]'}
      >
        <div className={'flex flex-col space-y-2'}>
          <label className={'text-gray-500'} htmlFor="name">
            Enter Your name
          </label>
          <input
            className={'input'}
            {...register('name', {
              required: true,
              validate: {},
            })}
            type={'text'}
            placeholder="Jhon doe"
          />
        </div>
        <div className={'flex flex-col space-y-2'}>
          <label className={'text-gray-500'} htmlFor="Email Address">
            Enter Email Address
          </label>
          <input
            type={'email'}
            className={'input'}
            {...register('email', { required: true })}
            placeholder="abc@gmail.com"
          />
        </div>
        <div className={'flex flex-col space-y-2'}>
          <label className={'text-gray-500'}>Message</label>
          <textarea
            required
            placeholder={'enter your Message'}
            {...register('message', {
              required: true,
            })}
            className={'input'}
          />
        </div>
        <div className={'flex items-center justify-center'}>
          <input
            className={
              'cursor-pointer rounded-md bg-black px-10 py-2 text-white shadow-md '
            }
            type={'submit'}
            value={'submit'}
          />
        </div>
      </form>
    </section>
  )
}

export default ContactMe