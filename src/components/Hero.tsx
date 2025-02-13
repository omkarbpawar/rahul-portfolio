import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-[#FBF9F4] flex items-center justify-center px-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            We get our kicks
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-[#92B4EC] mt-2">
            simplifying complex tech challenges.
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-md">
            From cloud infrastructure to full-stack development, automation to data-driven insights—if it’s a <span className='font-semibold'>tech challenge</span>, we thrive on solving it. We help businesses scale, optimize, and innovate through smart solutions tailored to their needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img 
            src="/Assets/business-illustration.png" 
            alt="Tech Collaboration" 
            className="w-[90%] max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
