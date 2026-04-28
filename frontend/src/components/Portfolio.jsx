import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects, projectDetails } from '../data/projectsData';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const getLocalizedProject = (project) => {
    const details = projectDetails[project.id];
    if (!details || !details.locales || !details.locales[lang]) return project;
    
    return {
      ...project,
      title: details.locales[lang].title || project.title,
      description: details.locales[lang].description || project.description
    };
  };

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
            {t('nav.portfolio')}
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mt-2 mb-6 tracking-tighter">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            A selection of projects showcasing my expertise in localization, AI, and global program management.
          </p>
        </div>

        {/* Featured Project - AI Poliglots */}
        {projects.filter(p => p.featured).map((p) => {
          const project = getLocalizedProject(p);
          return (
            <div key={project.id} className="mb-20">
              <Card className="overflow-hidden border-0 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(99,102,241,0.1)] transition-all duration-700 bg-gradient-to-br from-[#fafafa] to-white rounded-[3rem] group">
                <div className="grid lg:grid-cols-2 gap-0 items-center">
                  <Link 
                    to={`/project/${project.id}`}
                    className="relative h-[400px] lg:h-[600px] overflow-hidden m-4 rounded-[2rem]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </Link>
                  <CardContent className="p-10 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6">
                       <Star className="text-amber-400 fill-amber-400" size={16} />
                       <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                          Featured Case Study
                       </span>
                    </div>
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 hover:text-indigo-600 transition-colors tracking-tighter leading-tight">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium italic">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-wider bg-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-indigo-600 hover:bg-black text-white rounded-2xl py-7 px-8 font-black uppercase tracking-widest text-xs transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100">
                            View Live
                            <ExternalLink size={14} className="ml-2" />
                          </Button>
                        </a>
                      )}
                      <Link to={`/project/${project.id}`}>
                        <Button variant="ghost" className="text-gray-900 hover:text-indigo-600 font-black uppercase tracking-widest text-xs h-auto p-4 group/btn">
                          Read Case Study
                          <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => !p.featured).map((p) => {
            const project = getLocalizedProject(p);
            return (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block group"
              >
                <Card className="overflow-hidden border-0 bg-[#fafafa] hover:bg-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 h-full rounded-[2.5rem] p-4">
                  <div className="relative h-64 overflow-hidden rounded-[1.5rem] mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        View Study <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4 pt-0">
                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-medium leading-relaxed italic">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} className="text-[9px] font-black uppercase tracking-widest bg-gray-100 text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-8">{t('contact.description')}</p>
          <Link to="/#contact">
            <Button className="bg-indigo-600 hover:bg-black text-white px-12 py-8 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 transform hover:-translate-y-1 active:scale-95">
              {t('contact.submit')}
              <ArrowRight size={16} className="ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
