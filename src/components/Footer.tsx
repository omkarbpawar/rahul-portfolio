// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Rahul Kumar Sahoo. All rights reserved.</p>
      <p>
        <a
          href="https://www.linkedin.com/in/rahulkumar-sahoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        {' | '}
        <a
          href="https://github.com/LilMonk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
