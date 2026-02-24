import React from 'react';

const Companies = () => {
  const employers = [
    { 
      name: 'Middlebury Institute', 
      logo: 'https://www.middlebury.edu/institute/sites/default/files/styles/300x300/public/2019-08/MIIS_0.jpg'
    },
    { 
      name: 'Block', 
      logo: 'https://images.squarespace-cdn.com/content/v1/5e96d05353f71c7c5d9fb0c6/1612810400871-IOEFWRGWJZ99TE72QWGM/block-logo.png'
    },
    { 
      name: 'LinkedIn', 
      logo: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
    },
    { 
      name: 'Infoblox', 
      logo: 'https://www.infoblox.com/wp-content/uploads/infoblox-logo-solid-darkblue.png'
    },
    { 
      name: 'Apple', 
      logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg'
    },
  ];

  const ukExperience = [
    { 
      name: 'Hogarth Worldwide', 
      logo: 'https://www.hogarthww.com/wp-content/themes/developer/dist/images/hogarth_logo.svg'
    },
    { 
      name: 'Sony', 
      logo: 'https://www.sony.com/favicon.ico'
    },
  ];

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
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-16">
            {employers.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-14 px-2 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                title={company.name}
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 md:h-10 max-w-[120px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xl md:text-2xl font-semibold text-gray-500 hover:text-indigo-600">${company.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* UK Experience */}
        <div>
          <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wider mb-8">
            International Experience (UK)
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {ukExperience.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 px-2 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                title={company.name}
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-6 md:h-8 max-w-[100px] object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-lg md:text-xl font-medium text-gray-400 hover:text-gray-700">${company.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
