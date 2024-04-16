import React from 'react'
import Header from './Header'
import {
  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={`
        ${openSidebarToggle ? "sidebar-responsive" : ""}
        bg-white text-gray-800 h-screen overflow-y-auto p-4 transition-all duration-300
      `}
          
    >
      <Header />

      <div className='flex justify-between items-center mb-4'>
        <div className='flex items-center'>
        </div>
        <span className='cursor-pointer' onClick={OpenSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
      </div>

      <ul className='space-y-2'>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsGrid1X2Fill className='text-lg mr-2' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsFillArchiveFill className='text-lg mr-2' /> Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsFillGrid3X3GapFill className='text-lg mr-2' /> Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsPeopleFill className='text-lg mr-2' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsListCheck className='text-lg mr-2' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsMenuButtonWideFill className='text-lg mr-2' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="" className='flex items-center hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md transition-colors'>
            <BsFillGearFill className='text-lg mr-2' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar