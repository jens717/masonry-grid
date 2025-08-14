"use client";

import Link from 'next/link'


const page = () => {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpeg')] 
    bg-top bg-cover overflow-auto">
      <header className="fixed top-0 w-full z-10 flex
      justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <Link href="#" 
        className="rounded-3xl bg-white text-stone-700 
        px-3 py-2 hover:bg-opacity-90">
          Get in touch
        </Link>
      </header>
    </div>
  )
}

export default page
