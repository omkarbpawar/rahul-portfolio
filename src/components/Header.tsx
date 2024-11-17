// src/components/Header.tsx
import React from 'react';


interface HeaderProps {
  setDomain: React.Dispatch<React.SetStateAction<'developer' | 'devops' | 'data-engineering'>>;
}

const Header: React.FC<HeaderProps> = ({ setDomain }) => {
  return (
    <header className="relative bg-black text-white min-h-[50vh]">
      

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-10">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold">Rahul Kumar Sahoo</h1>
          <p className="text-xl italic text-gray-400 mt-4">Problem Solver | Lifelong Learner</p>

          <div className="mt-6">
            <button
              onClick={() => console.log('Hire Me button clicked!')}
              className="border border-white py-2 px-6 text-white hover:bg-white hover:text-black transition-all font-semibold rounded"
            >
              Hire Me
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="D:\Work\Rahul_portfolio\rahul-portfolio\src\Assets/rahul.jpg" 
            alt="Rahul Kumar Sahoo"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
          />
        </div>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-6">
        <a href="#" className="block w-8 h-8 bg-gray-800 hover:bg-white rounded-full"></a>
        <a href="#" className="block w-8 h-8 bg-gray-800 hover:bg-white rounded-full"></a>
        <a href="#" className="block w-8 h-8 bg-gray-800 hover:bg-white rounded-full"></a>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-6">
        <button
          onClick={() => setDomain('developer')}
          className="bg-transparent border border-white text-white py-1 px-4 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Developer
        </button>
        <button
          onClick={() => setDomain('devops')}
          className="bg-transparent border border-white text-white py-1 px-4 rounded-full hover:bg-white hover:text-black transition-all"
        >
          DevOps
        </button>
        <button
          onClick={() => setDomain('data-engineering')}
          className="bg-transparent border border-white text-white py-1 px-4 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Data Engineering
        </button>
      </div>
    </header>
  );
};

export default Header;
