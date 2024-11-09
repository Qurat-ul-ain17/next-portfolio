import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <main className='bg-orange-300 h-screen w-screen flex justify-center items-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-4'>WELCOME TO MY PORTFOLIO</h1><br/>
          <p className='text-lg mb-8'>I'm A FRONTEND WEB DEVELOPER. I HAVE MADE THIS WEBSITE USING NEXT-JS and Tailwnd CSS</p>
          <Link href='/about'
          className='bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 rounded-full'
          >Learn More</Link>
        </div>
      <div className='mb-6'>
        <img src='/images/images (3).jpeg'
        alt="Profile Picture"
        width={300}
        height={300}
        className="w-96 h-96 mx-auto rounded-full object-cover border-4 border-orange-600 shadow-2xl"
        />
      </div>
    </main>
  )
}

export default Home;
