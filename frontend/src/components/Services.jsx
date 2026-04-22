import React from 'react';
import { Brain, Target, Languages, GraduationCap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useTranslation } from 'react-i18next';

const iconMap = {
  Brain: Brain,
  Target: Target,
  Languages: Languages,
  GraduationCap: GraduationCap
};

const Services = () => {
  const { t } = useTranslation();

  const servicesList = [
    { id: 1, key: 'ai', icon: 'Brain' },
    { id: 2, key: 'pm', icon: 'Target' },
    { id: 3, key: 'translation', icon: 'Languages' },
    { id: 4, key: 'training', icon: 'GraduationCap' }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
            {t('services.label')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mt-2 mb-6 tracking-tighter">
            {t('services.title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="bg-[#fafafa] border-0 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group cursor-pointer rounded-[2rem] hover:-translate-y-2 active:scale-95"
              >
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:bg-indigo-600 transition-all duration-500 transform group-hover:rotate-6">
                    <IconComponent
                      size={28}
                      className="text-indigo-600 group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    {t(`services.${service.key}.desc`)}
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
