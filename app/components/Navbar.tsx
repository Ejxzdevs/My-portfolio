import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <header className="bg-customBg p-4 flex justify-between w-screen z-10 fixed ">
      <div className="flex items-cente sm:pl-8 lg:pl-16">
        <Link href="#home">
          <span className="text-3xl font-bold tracking-wider font-logo">Ejhay</span>
        </Link>
      </div>
      <nav className="relative">
        {/* Hamburger icon for small screens */}
        <div className="block px-7 sm:hidden lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <span className="text-2xl text-white">☰</span>
            ) : (
              <span className="text-2xl text-white ">☰</span>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`
            ${isOpen ? 'block' : 'hidden'}
            
        
            bg-customBg
            shadow-md  absolute right-0 p-6 w-screen z-50 
            lg:flex lg:p-0 
            lg:justify-end 
            lg:shadow-none 
            lg:pr-20 
            lg:gap-5
            lg:bg-inherit
            lg:w-4/5
            sm:flex
            sm:p-0 
            sm:justify-end 
            sm:shadow-none 
            sm:pr-20 
            sm:gap-5
            sm:bg-inherit
            sm:w-4/5
           
         
            
            
            `}
        >
          <Link href="#about" className={`block px-2 py-1 text-white font-medium `}>
            About
          </Link>
          <Link href="#skills" className={`block px-2 py-1 text-white font-medium`}>
            Services
          </Link>
          <Link href="#projects" className={`block px-2 py-1 text-white font-medium`}>
            Projects
          </Link>
          <Link href="#contact" className={`block px-2 py-1 text-white font-medium`}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

