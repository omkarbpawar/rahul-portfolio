// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import DynamicContent from './components/DynamicContent';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [domain, setDomain] = useState<'developer' | 'devops' | 'data-engineering'>('developer');

  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      techStack: ['React', 'TailwindCSS', 'TypeScript'],
      link: 'https://github.com/your-repo/portfolio',
    },
    {
      name: 'Chat App',
      description: 'Real-time chat application with WebSocket integration.',
      techStack: ['Node.js', 'Socket.IO', 'React'],
      link: 'https://github.com/your-repo/chat-app',
    },
    {
      name: 'Data Pipeline',
      description: 'An ETL pipeline for processing and analyzing large datasets.',
      techStack: ['Apache Airflow', 'Python', 'BigQuery'],
      link: 'https://github.com/your-repo/data-pipeline',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Header setDomain={setDomain} />
      <main className="flex-grow">
        <DynamicContent domain={domain} />
        <FeaturedProjects projects={projects} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
