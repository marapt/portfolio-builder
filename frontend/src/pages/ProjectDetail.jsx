import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Globe, CheckCircle, Github, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectDetails } from '../data/projectsData';
import { useTranslation } from 'react-i18next';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];
  
  const rawProject = projectDetails[projectId];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!rawProject) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/#portfolio">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <ArrowLeft size={18} className="mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Merge localized data
  const localizedData = rawProject.locales?.[lang] || {};
  const project = { ...rawProject, ...localizedData };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#fafafa] relative overflow-hidden">
        {/* Abstract Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] opacity-40 -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            to="/#portfolio" 
            className="group inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 hover:text-indigo-600 mb-12 transition-all"
          >
            <ArrowLeft size={14} className="mr-3 transform group-hover:-translate-x-1 transition-transform" />
            {t('nav.portfolio')}
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <Badge key={index} className="bg-white text-indigo-600 border border-indigo-100 shadow-sm py-1.5 px-4 rounded-full font-black text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-[1.05]">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium italic">
                {project.description}
              </p>
              
              {/* Project Meta Info Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                  <Calendar size={18} className="mb-3 text-indigo-500" />
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-sm font-bold text-gray-900">{project.duration}</div>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                  <Users size={18} className="mb-3 text-indigo-500" />
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Team</div>
                  <div className="text-sm font-bold text-gray-900">{project.teamSize}</div>
                </div>
                <div className="bg-white p-5 rounded-3xl border border-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                  <Globe size={18} className="mb-3 text-indigo-500" />
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Scope</div>
                  <div className="text-sm font-bold text-gray-900">{project.scope}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-indigo-600 hover:bg-black text-white px-10 py-7 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 flex items-center gap-2 transform hover:-translate-y-1">
                      View Live Project
                      <ExternalLink size={14} />
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-7 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 transform hover:-translate-y-1">
                      <Github size={14} className="mr-2" />
                      Repository
                    </Button>
                  </a>
                )}
              </div>
            </div>
            
            <div className="relative animate-in fade-in zoom-in duration-1000">
              <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] blur-xl -z-10"></div>
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full rounded-[3rem] shadow-2xl border-8 border-white ring-1 ring-black/5"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                 <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                    Strategic context
                 </span>
                 <h2 className="text-4xl font-black text-gray-900 tracking-tighter">
                   Project Overview
                 </h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-indigo-100 pl-8">
                   {project.overview}
                </p>
              </div>
           </div>
        </div>
      </section>
      
      {/* Challenges & Solutions Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col">
              <div className="flex items-center gap-3 mb-10">
                 <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <span className="text-red-500 font-black text-sm">!</span>
                 </div>
                 <h3 className="text-2xl font-black text-gray-900 tracking-tight">The Challenges</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 group">
                     <div className="text-[10px] font-black text-gray-300 mt-1 uppercase tracking-widest">{String(index + 1).padStart(2, '0')}</div>
                     <p className="text-gray-600 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div className="bg-indigo-600 p-12 rounded-[3.5rem] shadow-2xl shadow-indigo-100 flex flex-col text-white">
               <div className="flex items-center gap-3 mb-10">
                 <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <CheckCircle size={18} className="text-white" />
                 </div>
                 <h3 className="text-2xl font-black tracking-tight">Strategy & Solutions</h3>
              </div>
              <div className="space-y-6 flex-grow">
                {project.solutions.map((solution, index) => (
                   <div key={index} className="flex gap-4 group">
                      <div className="w-2 h-2 rounded-full bg-white/40 mt-2 flex-shrink-0 group-hover:bg-white transition-colors" />
                      <p className="text-indigo-50 font-medium leading-relaxed group-hover:text-white transition-colors">{solution}</p>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Results Stats */}
      <section className="py-24 bg-white font-black overflow-hidden relative">
         <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] -z-10 text-[20rem] tracking-tighter uppercase whitespace-nowrap select-none">
            Impact Report
         </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <div key={index} className="text-center p-10 bg-[#fafafa] rounded-[2.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-5xl lg:text-6xl font-black text-indigo-600 mb-3 tracking-tighter animate-in fade-in zoom-in duration-1000 delay-150">
                    {result.value}
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                    {result.label}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Dynamic Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Project Highlights</h2>
               <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
               </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-[2.5rem] shadow-xl bg-white p-3">
                  <div className="relative overflow-hidden rounded-[2rem] h-80">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="p-4 pt-6">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Technologies & Tools Badge Cloud */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full mb-8">
             <Sparkles size={14} className="text-indigo-600" />
             <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Technology stack</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-12 tracking-tighter">Infrastructure & Tools Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                className="text-xs font-black px-6 py-3 border-0 bg-[#fafafa] text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-2xl shadow-sm cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[4rem] p-12 lg:p-24 text-center relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10 group-hover:bg-indigo-600/30 transition-colors duration-1000"></div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">
            Interested in a similar<br /><span className="text-indigo-400 font-medium italic">localization strategy?</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium mb-12 max-w-xl mx-auto leading-relaxed">
            Let's discuss how I can help your organization expand effortlessly across global markets.
          </p>
          <Link to="/#contact">
            <Button className="bg-white text-gray-900 hover:bg-indigo-400 hover:text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-[0.25em] text-xs transition-all duration-500 shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2 active:scale-95">
              Launch Conversation
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
