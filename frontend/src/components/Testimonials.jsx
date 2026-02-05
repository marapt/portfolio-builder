import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What People Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Endorsements from colleagues and partners who've experienced my leadership, collaboration, and passion for driving impact.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8 lg:p-12">
              <Quote className="text-indigo-200 w-12 h-12 mb-6" />
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-indigo-600 text-sm">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full border-gray-200 hover:border-indigo-600 hover:text-indigo-600"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-indigo-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Desktop) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`border cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? 'border-indigo-600 shadow-md'
                  : 'border-gray-100 hover:border-indigo-200'
              }`}
            >
              <CardContent className="p-4">
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                  "{testimonial.quote.substring(0, 100)}..."
                </p>
                <div className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.company}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
