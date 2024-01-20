"use client"

import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]'>
        <p className='text-white text-lg text-center'>🤝 I’m looking for help with: coding
          🌱 I’m currently learning : Typescript , Nextjs
          💬 Ask me about:
          Troubleshooting
          Web Development
          UI/UX Data Entry / Data Analysis |
          Virtual Assistance
          SEO Analysis
          Quick Books
        </p>
      </div>
    </div>
  )
}

export default Page