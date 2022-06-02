import { CheckIcon } from '@heroicons/react/outline'
import { Table } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import useAuth from '../hooks/useAuth'


function Plans() {
  const { logout } = useAuth()
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button onClick={logout} className="font-md text-lg hover:underline">
          Sign Out
        </button>
      </header>
      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
        <h1 className="font-md mb-3 text-3xl">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" />
            Recommendations Just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" />
            Change or cancel your plan any time.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">

            <div className="relative mx-1.5 flex h-20 w-[calc(100%/3)] cursor-default items-center justify-center rounded-sm bg-[#e50914] font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#e50914] content-[''] md:h-32 lg:mx-8">Standard</div>

            <div className="relative mx-1.5 flex h-20 w-[calc(100%/3)] cursor-default items-center justify-center rounded-sm bg-[#e50914] font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#e50914] content-[''] md:h-32 lg:mx-8">Standard</div>

            <div className="relative mx-1.5 flex h-20 w-[calc(100%/3)] cursor-default items-center justify-center rounded-sm bg-[#e50914] font-semibold shadow after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:border-8 after:border-b-0 after:border-transparent after:border-t-[#e50914] content-[''] md:h-32 lg:mx-8">Standard</div>

          </div>
          <Table />
          <button>Subscribe</button>
        </div>
      </main>
    </div>
  )
}

export default Plans
