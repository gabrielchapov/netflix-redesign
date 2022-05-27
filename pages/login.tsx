import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
  email: string
  password: string
}

function Login() {
  const [login, setLogin] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black text-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...(register('email'), { required: true })}
            />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...(register('password'), { required: true })}
            />
          </label>
          <button className="hover:-translate-1 w-full rounded bg-[#e50914] py-3 font-semibold transition duration-200 ease-in-out hover:scale-105">
            Sign In
          </button>
          <div className="flex justify-start space-x-4">
            <h1 className="text-white">New to Netflix?</h1>
            <button
              type="submit"
              className="hover:-translate-1 rounded bg-[#e50914] px-2 text-black transition duration-200 ease-in-out hover:scale-105 hover:underline"
            >
              Sign up now
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
