import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Languages, 
  Code, 
  Users,
  MapPin,
  Calendar,
  CheckCircle,
  Brain,
  Linkedin,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { resumeData } from '../data/resumeData';
import { personalInfo } from '../data/mock';

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-6">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-indigo-600 font-medium mt-1">
                  {personalInfo.title}
                </p>
                <div className="flex items-center gap-4 mt-2 text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  <Mail size={18} className="mr-2" />
                  Contact
                </Button>
              </a>
              <a href="https://linkedin.com/in/maramartinspt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Summary */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Card className="border-0 shadow-sm bg-gray-50">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users size={20} className="text-indigo-600" />
                Professional Summary
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {resumeData.summary}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Experience */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Briefcase size={20} className="text-indigo-600" />
                  </div>
                  Work Experience
                </h2>
                
                <div className="space-y-6">
                  {resumeData.experience.map((job, index) => (
                    <Card key={job.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                              <span className="text-lg font-bold text-indigo-600">
                                {job.company.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
                              <p className="text-indigo-600 font-medium">{job.company}</p>
                              <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {job.period}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  {job.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs border-gray-200">
                            {job.type}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <GraduationCap size={20} className="text-indigo-600" />
                  </div>
                  Education
                </h2>
                
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <Card key={index} className="border border-gray-100 shadow-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                            <p className="text-indigo-600 font-medium">{edu.institution}</p>
                            <p className="text-sm text-gray-500 mt-1">{edu.location}</p>
                            <p className="text-sm text-gray-600 mt-2">{edu.details}</p>
                          </div>
                          <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                            {edu.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Skills, Languages, Certifications */}
            <div className="space-y-8">
              
              {/* Skills */}
              <Card className="border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Code size={18} className="text-indigo-600" />
                    Skills
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Localization</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.localization.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-indigo-50 text-indigo-700 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.technology.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">AI & Machine Learning</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.ai.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-purple-50 text-purple-700 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Management</h4>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.management.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-green-50 text-green-700 text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Languages */}
              <Card className="border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Languages size={18} className="text-indigo-600" />
                    Languages
                  </h2>
                  
                  <div className="space-y-3">
                    {resumeData.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{lang.flag}</span>
                          <span className="font-medium text-gray-900">{lang.language}</span>
                        </div>
                        <Badge variant="outline" className="text-xs border-gray-200">
                          {lang.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Certifications */}
              {resumeData.certifications && resumeData.certifications.length > 0 && (
                <Card className="border border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award size={18} className="text-indigo-600" />
                      Certifications
                    </h2>
                    
                    <div className="space-y-4">
                      {resumeData.certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-indigo-200 pl-4">
                          <h4 className="font-medium text-gray-900 text-sm">{cert.name}</h4>
                          <p className="text-xs text-gray-500">{cert.issuer}</p>
                          <p className="text-xs text-indigo-600">{cert.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Awards */}
              {resumeData.awards && resumeData.awards.length > 0 && (
                <Card className="border border-gray-100 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Award size={18} className="text-yellow-500" />
                      Awards
                    </h2>
                    
                    <div className="space-y-4">
                      {resumeData.awards.map((award, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Award size={14} className="text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{award.title}</h4>
                            <p className="text-xs text-gray-500">{award.organization}, {award.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-indigo-100 mb-6">
            I'm open to Localization Program/Project Manager, AI/Localization Ops, or AI Business/Executive opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-medium">
                Get in Touch
              </Button>
            </Link>
            <a href="https://linkedin.com/in/maramartinspt" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium">
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resume;
