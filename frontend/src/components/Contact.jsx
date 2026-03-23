import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Calendar, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_3me9sqg',
      'template_64i4un8',
      e.target, 
      'tWVzxU_-s7boVuyDp'
    )
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }, (error) => {
        setIsLoading(false);
        alert("Failed to send. Please try again or email me directly.");
        console.error('EmailJS Error:', error);
      });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin
    },
    {
      icon: Calendar,
      label: 'Schedule',
      value: 'Book a Meeting',
      href: 'https://calendar.app.google/yNKAaQQDHUaVqj6V7'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to take your localization strategy to the next level? I'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const content = (
                  <Card className="border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-indigo-600" size={22} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{method.label}</div>
                        <div className="text-gray-900 font-medium">{method.value}</div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return method.href ? (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Booking Note */}
            <div className="mt-8 p-6 bg-indigo-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Booking Note</h4>
              <p className="text-gray-600 text-sm">
                When booking, please include your agenda or topic so we can make the most of our time together.
              </p>
            </div>

            {/* Embedded Google Calendar */}
            <div className="mt-8 border border-gray-100 rounded-xl overflow-hidden shadow-sm bg-white">
              <iframe 
                src="https://calendar.app.google/yNKAaQQDHUaVqj6V7" 
                style={{ border: 0, width: '100%', height: '600px' }} 
                frameBorder="0"
                title="Schedule an interview with Mara"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Send a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 mb-2 block">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="border-gray-200 focus:border-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700 mb-2 block">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="border-gray-200 focus:border-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-700 mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        required
                        className="border-gray-200 focus:border-indigo-600 focus:ring-indigo-600 resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;