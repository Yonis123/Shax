import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the mobile menu open/close
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scrolls to the section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className='flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#00df9a] '>Shax</h1>

      {/* Desktop Menu: visible on large screens and above */}
      <ul className='hidden lg:flex'>
        <li
          className='p-6 hover:text-[#78c45c] cursor-pointer'
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className='p-6 hover:text-[#78c45c] cursor-pointer'
          onClick={() => scrollToSection('instructions')}
        >
          Instructions
        </li>
        <li
          className='p-6 hover:text-[#78c45c] cursor-pointer'
          onClick={() => scrollToSection('play-now')}
        >
          Play Now
        </li>
      </ul>

      {/* Hamburger Icon: visible on small and medium screens */}
      <div className='lg:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Menu: visible when 'isMenuOpen' is true */}
      <ul
        className={`fixed top-0 right-0 w-[60%] h-full bg-white text-black flex flex-col items-center justify-center transform ${
    isMenuOpen ? 'translate-x-0 border-l-4 border-gradient-to-b from-[#78c45c] to-[#00df9a]' : 'translate-x-full'
  } transition-transform duration-300 ease-in-out${

          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Exit Button */}
        <div className='absolute top-4 right-4' onClick={toggleMenu}>
          <FaTimes size={20} className="cursor-pointer hover:text-[#78c45c]" />
        </div>

        <li
          className='py-6 text-2xl cursor-pointer hover:text-[#78c45c]'
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className='py-6 text-2xl cursor-pointer hover:text-[#78c45c]'
          onClick={() => scrollToSection('instructions')}
        >
          Instructions
        </li>
        <li
          className='py-6 text-2xl cursor-pointer hover:text-[#78c45c]'
          onClick={() => scrollToSection('play-now')}
        >
          Play Now
        </li>
      </ul>
    </div>
  );
};

export default Navbar;