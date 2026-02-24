import React from 'react';

const Companies = () => {
  const employers = [
    { 
      name: 'Middlebury Institute', 
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/MIIS_logo.svg/1200px-MIIS_logo.svg.png'
    },
    { 
      name: 'Block', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Block%2C_Inc._logo.svg/512px-Block%2C_Inc._logo.svg.png'
    },
    { 
      name: 'LinkedIn', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png'
    },
    { 
      name: 'Infoblox', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Infoblox_logo.svg/512px-Infoblox_logo.svg.png'
    },
    { 
      name: 'Apple', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png'
    },
  ];

  const ukExperience = [
    { 
      name: 'Hogarth Worldwide', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hogarth_Worldwide_logo.svg/512px-Hogarth_Worldwide_logo.svg.png'
    },
    { 
      name: 'Sony', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/512px-Sony_logo.svg.png'
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
                className="flex items-center justify-center h-12 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 md:h-10 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xl md:text-2xl font-semibold text-gray-400">${company.name}</span>`;
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
                className="flex items-center justify-center h-10 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-6 md:h-8 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-lg md:text-xl font-medium text-gray-300">${company.name}</span>`;
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
