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
              
              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                      View Live Project
                      <ExternalLink size={18} />
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                      <Github size={18} />
                      View on GitHub
                    </Button>
                  </a>
                )}
              </div>
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
                  <div className="bg-white p-3">
                    <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* LinkedIn Posts Section */}
      {project.linkedInPosts && project.linkedInPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Updates</h2>
            <p className="text-gray-600 mb-8">Follow my journey and insights on LinkedIn</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.linkedInPosts.map((post, index) => (
                <a 
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-3 text-indigo-600 text-sm font-medium flex items-center gap-1">
                        View on LinkedIn
                        <ExternalLink size={14} />
                      </div>
                    </CardContent>
                  </Card>
                </a>
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
