import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareerTimeline from '../components/CareerTimeline';

const CareerPage = () => {
  useEffect(() => {
    document.title = 'Career Timeline | Mara Martins';
  }, []);

  return (
    <div className="min-h-screen stellar-bg text-white flex flex-col">
      <Header />

      <main id="career-main" className="flex-1 pt-24 pb-20 space-y-6">
        <CareerTimeline />
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
