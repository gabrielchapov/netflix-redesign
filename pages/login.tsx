import { async } from '@firebase/util'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

interface Inputs {
  email: string
  password: string
}

function Login() {

  const [login, setLogin] = useState(false)
const {signIn, signUp} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    if (login) {
       await signIn(email,password)
    } else {
      await signUp(email,password)
    }
  }

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
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 text-white md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full h-full">
            <input
              type="email"
              placeholder="Email"
              className="input p-2 md:p-4"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                This field is required
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input p-2 md:p-4"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Your password must contain between 4 and 60 characters
              </p>
            )}
          </label>
          <button
            onClick={() => setLogin(true)}
            className="hover:-translate-1 w-full rounded bg-[#e50914] py-3 font-semibold transition duration-200 ease-in-out hover:scale-105"
          >
            Sign In
          </button>
          <div className="flex justify-start space-x-4">
            <h1 className="text-white">New to Netflix?</h1>
            <button
              onClick={() => setLogin(false)}
              type="submit"
              className="hover:-translate-1 rounded bg-[#e50914] px-2 text-white text-black transition duration-200 ease-in-out hover:scale-105 hover:underline"
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
