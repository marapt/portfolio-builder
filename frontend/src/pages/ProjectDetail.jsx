import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Users, Globe, CheckCircle, Github } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectDetails } from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            to="/#portfolio" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 mb-8">
                {project.duration && (
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2 text-indigo-600" />
                    {project.duration}
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center text-gray-500">
                    <Users size={18} className="mr-2 text-indigo-600" />
                    {project.teamSize}
                  </div>
                )}
                {project.scope && (
                  <div className="flex items-center text-gray-500">
                    <Globe size={18} className="mr-2 text-indigo-600" />
                    {project.scope}
                  </div>
                )}
              </div>
              
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                    View Live Project
                    <ExternalLink size={18} />
                  </Button>
                </a>
              )}
            </div>
            
            <div className="relative">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed">{project.overview}</p>
          </div>
        </div>
      </section>
      
      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-600">{challenge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Solutions</h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <Card key={index} className="border-0 shadow-sm">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={18} className="text-green-600" />
                      </div>
                      <p className="text-gray-600">{solution}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{result.value}</div>
                  <div className="text-gray-600">{result.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-md">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Technologies Used */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-base px-4 py-2 border-indigo-200 text-indigo-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in a similar project?
          </h2>
          <p className="text-indigo-100 mb-8">
            Let's discuss how I can help with your localization needs.
          </p>
          <Link to="/#contact">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
