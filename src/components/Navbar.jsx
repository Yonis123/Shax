import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Toggles the mobile menu open/close
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    return (
      <div className='flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4'>
        {/* Logo */}
        <h1 className='text-3xl font-bold text-[#00df9a] '>Shax</h1>
  
        {/* Desktop Menu: visible on large screens and above */}
        <ul className='hidden lg:flex'>
          {['Home', 'About', 'Instructions', 'Play Now'].map((item) => (
            <li key={item} className='p-6'>
              {item}
            </li>
          ))}
        </ul>
  
        {/* Hamburger Icon: visible on small and medium screens */}
        <div className='lg:hidden' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
  
        {/* Mobile Menu: visible when 'isMenuOpen' is true */}
        <ul
          className={`${
            isMenuOpen ? 'absolute' : 'hidden'
          } top-0 right-0 w-[60%] h-full bg-gray-900 text-white flex flex-col items-center justify-center`}
        >
          {['Home', 'About', 'Instructions', 'Play Now'].map((item) => (
            <li key={item} className='py-6 text-2xl'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Navbar;