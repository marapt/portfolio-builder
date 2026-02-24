import React from 'react';

const Companies = () => {
  const employers = [
    { name: 'Middlebury Institute', category: 'education' },
    { name: 'Block', category: 'employer' },
    { name: 'LinkedIn', category: 'employer' },
    { name: 'Microsoft', category: 'employer' },
    { name: 'Infoblox', category: 'employer' },
    { name: 'Apple', category: 'employer' },
  ];

  const agencies = [
    { name: 'Hogarth Worldwide', category: 'agency' },
    { name: 'Sony UK', category: 'agency' },
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

        {/* Direct Employers */}
        <div className="mb-10">
          <p className="text-center text-sm text-indigo-600 font-medium uppercase tracking-wider mb-6">
            Companies & Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {employers.map((company, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl text-gray-400 hover:text-indigo-600 transition-all duration-300 cursor-default font-semibold"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* UK Experience */}
        <div>
          <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wider mb-6">
            International Experience (UK)
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {agencies.map((company, index) => (
              <div
                key={index}
                className="text-lg md:text-xl text-gray-300 hover:text-gray-600 transition-all duration-300 cursor-default font-medium"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
