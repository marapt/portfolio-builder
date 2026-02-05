import React from 'react';
import { Brain, Target, Languages, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { services } from '../data/mock';

const iconMap = {
  Brain: Brain,
  Target: Target,
  Languages: Languages,
  GraduationCap: GraduationCap
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            My Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From localization strategy to AI-driven solutions, I help organizations design scalable programs that reach audiences worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                    <IconComponent
                      size={28}
                      className="text-indigo-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
