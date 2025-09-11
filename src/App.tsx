import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Courses from './components/Courses';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Portfolio />
      <Courses/>
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;