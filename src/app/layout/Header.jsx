import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header bg-white shadow-md py-4 px-6 flex justify-between items-center'>
      <div className='menu-icon'>
        <BsJustify className='icon text-gray-600 cursor-pointer' onClick={OpenSidebar} />
      </div>
      <div className='header-left flex items-center bg-gray-100 rounded-md px-3 py-2'>
        <BsSearch className='icon text-gray-600 mr-2' />
        <input type="text" placeholder="Search" className="bg-transparent focus:outline-none text-gray-600" />
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