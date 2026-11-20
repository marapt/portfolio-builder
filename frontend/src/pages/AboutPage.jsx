import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Mara Martins | Program Leadership & Personal Narrative';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen stellar-bg text-white flex flex-col">
      <Header />

      <main id="about-main" className="flex-1 pt-24 pb-28 space-y-6">
        <AboutMe />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
