// src/components/Navbar.tsx
import React from 'react';
import Logo from "../Assets/logo.png";


const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      <div className="logo">
      <img src={Logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <ul className="flex space-x-6 text-lg">
      <li><a href="#about" className="hover:text-gray-600">About</a></li>
      <li><a href="#services" className="hover:text-gray-600">Services</a></li>
      <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
      <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;