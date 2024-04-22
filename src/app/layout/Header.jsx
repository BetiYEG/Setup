import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch } from 'react-icons/bs'

// eslint-disable-next-line no-empty-pattern
function Header({ }) {
  return (
    <header className='header bg-white shadow-md py-4 px-6 flex justify-between items-center'>
      <div className='flex items-center'>
        <div className='text-gray-600 mr-2 font-bold'>Xceltech Solutions PLC</div>
      </div>
      <div className='header-left flex items-center bg-gray-100 rounded-md px-3 py-2 flex-1 md:flex-initial'>
        <BsSearch className='icon text-gray-600 mr-2' />
        <input type="text" placeholder="Search" className="bg-transparent focus:outline-none text-gray-600 w-full md:w-auto" />
      </div>
      <div className='header-right flex items-center space-x-4'>
        <BsFillBellFill className='icon text-gray-600' />
        <BsFillEnvelopeFill className='icon text-gray-600' />
        <BsPersonCircle className='icon text-gray-600' />
      </div>
    </header>
  )
}

export default Header