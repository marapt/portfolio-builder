import React from 'react';

const Companies = () => {
  const employers = [
    { name: 'Block', category: 'employer' },
    { name: 'Microsoft', category: 'employer' },
    { name: 'LinkedIn', category: 'employer' },
    { name: 'Apple', category: 'employer' },
    { name: 'Infoblox', category: 'employer' },
  ];

  const agencies = [
    { name: 'Acclaro', category: 'agency' },
    { name: 'Venga', category: 'agency' },
    { name: 'HogarthWW', category: 'agency' },
  ];

  const education = [
    { name: 'Middlebury Institute', category: 'education' },
    { name: 'Polytechnic of Leiria', category: 'education' },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Where I've Made an Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over the years, I've had the privilege to work with industry-leading companies across tech, localization, and global markets.
          </p>
        </div>

        {/* Direct Employers */}
        <div className="mb-10">
          <p className="text-center text-sm text-indigo-600 font-medium uppercase tracking-wider mb-6">
            Companies I've Worked For
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {employers.map((company, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl text-gray-400 hover:text-indigo-600 transition-all duration-300 cursor-default font-semibold"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* Agencies */}
        <div className="mb-10">
          <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wider mb-6">
            Localization Agencies & Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {agencies.map((company, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl text-gray-300 hover:text-gray-600 transition-all duration-300 cursor-default font-medium"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-wider mb-6">
            Education
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {education.map((school, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl text-gray-300 hover:text-gray-600 transition-all duration-300 cursor-default font-medium"
              >
                {school.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
