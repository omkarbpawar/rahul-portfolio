// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 bg-black text-white py-4 px-10 flex justify-between items-center shadow-md z-50">
      <div className="text-xl font-bold">Logo</div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
        <button className="border border-white py-2 px-6 rounded hover:bg-white hover:text-black transition-all">
          Download Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
