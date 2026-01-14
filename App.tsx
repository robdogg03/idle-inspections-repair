import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <div className="min-h-screen bg-idle-bg font-sans selection:bg-idle-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;