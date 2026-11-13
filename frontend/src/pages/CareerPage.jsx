import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FlaskConical } from 'lucide-react';
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

      <main id="career-main" className="flex-1 pt-28 pb-20 space-y-6">
        {/* Prototype Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-dashed border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-xs text-cyan-100">
            <div className="flex items-center gap-2.5">
              <FlaskConical size={16} className="text-cyan-300 shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-bold uppercase tracking-wider text-cyan-200">
                  Prototype Preview
                </strong>{' '}
                · Placeholder Data · Branch:{' '}
                <code className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-100">
                  feature/portfolio-mvp
                </code>{' '}
                (Live homepage unchanged)
              </span>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-semibold text-cyan-200 hover:text-white underline underline-offset-4 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Live Homepage
            </Link>
          </div>
        </div>

        <CareerTimeline />
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
