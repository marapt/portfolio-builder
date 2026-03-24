import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
