import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch } from 'react-icons/bs';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout logic here, such as clearing user session or redirecting to the login page
    // Example: 
    // clearUserSession();
    // redirectToLoginPage();
    console.log('Logged out');
    
    // Redirect to the login page
    navigate('/login');
  };

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
        <div className='relative'>
          <BsPersonCircle className='icon text-gray-600 cursor-pointer' onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className='absolute top-10 right-0 bg-black border border-gray-300 rounded-md p-2'>
              <div className='mb-2'>John Doe</div>
              <button className='text-gray-600 hover:text-red-500' onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
