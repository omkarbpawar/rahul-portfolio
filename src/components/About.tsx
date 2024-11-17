// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="p-6 bg-gray-50 shadow-md rounded mb-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">About Me</h2>
      <p className="mt-4 text-gray-700">
        I am Rahul Kumar Sahoo, a problem solver at heart with expertise in DevOps, data
        engineering, and programming. I am passionate about building efficient solutions and
        ensuring client satisfaction.
      </p>
      <p className="mt-4 text-gray-700">
        When I am not working, I spend my time exploring new technologies and upgrading my
        skillset. Learning and growing is what keeps me motivated.
      </p>
    </section>
  );
};

export default About;
