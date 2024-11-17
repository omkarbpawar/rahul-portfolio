// src/components/Header.tsx
import React from 'react';

interface HeaderProps {
  setDomain: React.Dispatch<React.SetStateAction<'developer' | 'devops' | 'data-engineering'>>;
}

const Header: React.FC<HeaderProps> = ({ setDomain }) => {
  return (
    <header className="relative bg-black text-white min-h-[50vh] flex items-center justify-center px-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQF0YWhaUJP6VQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1707851788246?e=1737590400&v=beta&t=Os-NixAe2FpILEqpXmv-yfhVjCBkT9MJ0U4Nh4F4HtQ" 
            alt="Rahul Kumar Sahoo"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="md:w-2/3 text-center md:text-left md:pl-10">
          <h1 className="text-6xl font-bold">Rahul Kumar Sahoo</h1>
          <p className="text-xl italic text-gray-400 mt-4">Big Data problem solver, lifelong learner, and software engineer on a mission to scale horizons.</p>

          <div className="mt-6 flex flex-col items-center md:items-start">
            <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
