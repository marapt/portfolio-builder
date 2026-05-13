import React from 'react';

// Company logos as simple styled text with brand colors
const CompanyLogo = ({ name, color = '#374151' }) => (
  <span 
    className="text-2xl md:text-3xl font-bold transition-colors duration-300"
    style={{ color }}
  >
    {name}
  </span>
);

const Companies = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Where I've Made an Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over 12+ years leading regional go-to-market execution, product launches, and operational programs across 45+ international markets.
          </p>
        </div>

        {/* Companies & Institutions */}
        <div className="mb-12">
          <p className="text-center text-sm text-indigo-600 font-medium uppercase tracking-wider mb-8">
            Companies & Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-14">
            {/* Middlebury Institute */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-[#003A63] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <span className="text-lg font-semibold text-[#003A63]">MIIS</span>
            </div>
            
            {/* Block */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-black text-gray-800">Block</span>
            </div>
            
            {/* LinkedIn */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold text-[#0A66C2]">Linked</span>
              <span className="text-2xl font-bold text-[#0A66C2] bg-[#0A66C2] text-white px-1 rounded">in</span>
            </div>
            
            {/* Microsoft */}
            <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <span className="text-xl font-semibold text-gray-700">Microsoft</span>
            </div>
            
            {/* Infoblox */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold text-[#004990]">Infoblox</span>
            </div>
            
            {/* Apple */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            {/* Hogarth Worldwide */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-bold text-gray-800">HOGARTH</span>
            </div>
            
            {/* Sony */}
            <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-2xl font-bold tracking-wider text-gray-800">SONY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
