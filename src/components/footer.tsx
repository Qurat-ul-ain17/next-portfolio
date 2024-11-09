import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-orange-400 h-30 md:h-20 w-screen py-6 text-black'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-lg font-semibold'>My Website</h2>
                        <p className='text-sm'> &copy; 2024 Website. All rights reseved</p>
                </div>
                <div>
                    <ul className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
                        <li><a href="#" className='hover:underline'>Privacy Policy</a></li>
                        <li><a href="#" className='hover:underline'>Terms of Services</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer
