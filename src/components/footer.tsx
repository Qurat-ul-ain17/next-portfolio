import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-orange-400 h-20 w-screen py-6 text-black'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-lg font-semibold'>My Website</h2>
                        <p className='text-sm'> &copy; 2024 Website. All rights reseved</p>
                </div>
                <div>
                    <ul className='flex space-x-4'>
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
