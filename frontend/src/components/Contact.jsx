import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Calendar, Send, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';
import { personalInfo } from '../data/mock';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'https://portfolio-backend.onrender.com'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_INTERNAL_API_KEY || 'mp-pf-sec-4a9d72'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', category: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to send');
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed to send. Please try again or email me directly.");
      console.error('Contact Error:', error);
    }
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
      label: t('stats.languages'),
      value: personalInfo.location,
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedin
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block animate-pulse">
            {t('contact.label')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mt-2 mb-6 tracking-tighter">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed italic">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods & Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight">
                {t('contact.info_title')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  const content = (
                    <Card className="bg-white border-0 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group rounded-2xl h-full">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-all duration-500">
                          <IconComponent className="text-indigo-600 group-hover:text-white transition-colors duration-500" size={20} />
                        </div>
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{method.label}</div>
                        <div className="text-gray-900 font-bold text-sm truncate w-full">{method.value}</div>
                      </CardContent>
                    </Card>
                  );

                  return method.href ? (
                    <a
                      key={index}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block group"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Booking Section */}
            <div className="p-8 bg-gradient-to-br from-primary to-secondary rounded-[2.5rem] text-primary-foreground shadow-2xl shadow-primary/20 transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-4">
                   <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                      <Calendar size={20} />
                   </div>
                   <h4 className="font-black text-xs uppercase tracking-[0.2em]">{t('contact.booking_title')}</h4>
                </div>
                <p className="text-primary-foreground/80 text-sm font-medium leading-relaxed italic mb-8">
                  "{t('contact.booking_desc')}"
                </p>
                <Button asChild className="w-full bg-white text-primary hover:bg-black hover:text-white rounded-[1.5rem] py-7 font-black uppercase tracking-widest text-xs transition-all duration-500">
                   <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3y8ucTjg3h5EAxXZrtgdb9TOpurbNFBPBAcn-B56lwTnIJi12_UeEcYSP-2tNew3WoUuYhMCEg?gv=true" target="_blank" rel="noopener noreferrer">
                      Schedule strategies session <ArrowRight size={16} className="ml-2" />
                   </a>
                </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] -z-10 blur-2xl opacity-50"></div>
            <Card className="border-0 shadow-2xl rounded-[3rem] bg-white/80 backdrop-blur-xl ring-1 ring-black/[0.03]">
              <CardContent className="p-10 lg:p-12">
                <h3 className="text-2xl font-black text-foreground mb-10 tracking-tight flex items-center gap-3">
                   <MessageSquare className="text-primary" size={24} /> {t('contact.submit')}
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-20 flex flex-col items-center">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-foreground mb-2">
                       {t('contact.success_title')}
                    </h4>
                    <p className="text-muted-foreground font-medium">
                       {t('contact.success_desc')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                           {t('contact.name')}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Mara Martins"
                          required
                          className="bg-gray-50/50 border-0 focus:ring-2 focus:ring-primary rounded-2xl p-6 text-sm font-bold text-foreground h-14"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                           {t('contact.email')}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="marapt@gmail.com"
                          required
                          className="bg-gray-50/50 border-0 focus:ring-2 focus:ring-primary rounded-2xl p-6 text-sm font-bold text-foreground h-14"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="category" className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                         Interest Area
                      </Label>
                      <Select 
                        onValueChange={(value) => setFormData({...formData, category: value})}
                        required
                      >
                        <SelectTrigger className="bg-gray-50/50 border-0 focus:ring-2 focus:ring-primary rounded-2xl p-6 text-sm font-bold text-foreground h-14">
                          <SelectValue placeholder="Select a service category" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-gray-100 shadow-xl">
                          <SelectItem value="Localization Strategy">{t('contact.categories.strategy')}</SelectItem>
                          <SelectItem value="AI Implementation">{t('contact.categories.ai')}</SelectItem>
                          <SelectItem value="Program Management">{t('contact.categories.pm')}</SelectItem>
                          <SelectItem value="Other">{t('contact.categories.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">
                         {t('contact.message')}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="..."
                        rows={5}
                        required
                        className="bg-gray-50/50 border-0 focus:ring-2 focus:ring-primary rounded-[2rem] p-6 text-sm font-bold text-foreground resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-secondary text-white py-8 rounded-[1.5rem] font-black uppercase tracking-widest text-xs transition-all duration-500 hover:shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-primary/20"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {t('contact.submit')}
                          <div className="p-1 px-1.5 bg-white/10 rounded-lg">
                             <Send size={14} />
                          </div>
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
