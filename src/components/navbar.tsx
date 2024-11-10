import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Navbar() {
  return (
    <div >
        <div className='bg-orange-500 h-16 w-screen p-3 gap-10 lg:gap-16 font-semibold text-2xl hidden md:flex justify-between items-center'>
        <Image src={require("../../public/images/logo.jpg")}
        alt='logo'
        height={50}
        width={50}/>
        <ul className='gap-10 p-4 lg:gap-16 hidden md:flex'>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/projects'}>My Projects</Link>
          <Link href={'/skills'}>My Skills</Link>
          <Link href={'/contact'}>Contact Me</Link>
      </ul>
      </div>
      </div>
  )
}

export default Navbar
