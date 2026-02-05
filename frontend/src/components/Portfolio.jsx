import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in localization, AI, and global program management.
          </p>
        </div>

        {/* Featured Project - PolyglotAI */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.id} className="mb-12">
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-indigo-50 to-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-600/10"></div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                    Featured Project
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-indigo-200 text-indigo-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium w-fit flex items-center gap-2">
                        View Live Project
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                </CardContent>
              </div>
            </Card>
          </div>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Interested in working together?</p>
          <a href="#contact">
            <Button variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium flex items-center gap-2 mx-auto">
              Let's Discuss Your Project
              <ArrowRight size={16} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
