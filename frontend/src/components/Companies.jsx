import React from 'react';

const companyNames = [
  { name: 'HP', style: 'font-bold' },
  { name: 'Square', style: 'font-semibold' },
  { name: 'LinkedIn', style: 'font-semibold' },
  { name: 'Infoblox', style: 'font-medium' },
  { name: 'Apple', style: 'font-semibold' },
  { name: 'Welocalize', style: 'font-medium' },
  { name: 'VMware', style: 'font-semibold' }
];

const Companies = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over the years, I've partnered with industry leaders across tech, retail, and innovation to deliver global strategies that scale.
          </p>
        </div>

        {/* Logo Grid - Text Based */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {companyNames.map((company, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl text-gray-400 hover:text-gray-700 transition-all duration-300 cursor-default"
            >
              <span className={company.style}>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
