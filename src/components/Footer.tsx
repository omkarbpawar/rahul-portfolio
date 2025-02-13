// src/components/Footer.tsx
import React from 'react';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className="bg-gray-800 text-white py-8 text-center px-6 md:px-10 w-full" aria-label="Footer">
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
