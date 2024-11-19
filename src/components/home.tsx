import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main className='bg-orange-300 min-h-screen w-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>WELCOME TO MY PORTFOLIO</h1><br/>
          <p className='text-base sm:text-lg md:text-xl mb-6 px-4 sm:px-8 md:px-16'>I'm A FRONTEND WEB DEVELOPER. I HAVE MADE THIS WEBSITE USING NEXT-JS and Tailwnd CSS</p>
          <Link href='/about'
          className='bg-orange-500 hover:bg-orange-600 font-bold py-2 px-6 rounded-full text-white'
          >Learn More</Link>
        </div>
      <div className='mb-6 flex justify-center'>
        <Image src={'/images/images (3).jpeg'}
        alt="Profile Picture"
        width={300}
        height={300}
        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-orange-600 shadow-2xl"
        />
      </div>
    </main>
  )
}

export default Home;
