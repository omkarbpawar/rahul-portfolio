// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import DynamicContent from './components/DynamicContent';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
const App: React.FC = () => {
  const [domain, setDomain] = useState<'developer' | 'devops' | 'data-engineering'>('developer');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <Header setDomain={setDomain} />
      <main className="flex-grow">
        <DynamicContent domain={domain} />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
