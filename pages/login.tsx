import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

function Login() {
const [login, setLogin] = useState(false) 


  return (
    <div className="relative text-black flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
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
      <img src="https://rb.gy/ulxxee" className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
      width={150}
      height={150}
      />

      <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold text-white">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className="input"/>
            </label>
            <label className="inline-block w-full">
             <input type="password" placeholder="Password" className="input"/>

            </label>
            <button className="w-full rounded bg-[#e50914] py-3 font-semibold transition ease-in-out hover:-translate-1 hover:scale-105 duration-200">Sign In</button>
            <div className="flex space-x-4 justify-start">
              <h1 className="text-white">
              New to Netflix?
              </h1>
              <button type="submit" className="text-black hover:underline bg-[#e50914] rounded px-2 transition ease-in-out hover:-translate-1 hover:scale-105 duration-200">Sign up now</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Login