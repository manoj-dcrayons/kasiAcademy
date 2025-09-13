import React from 'react';
import { Award, Users, Star, TrendingUp } from 'lucide-react';
import mam from '../assets/images/mam.jpg'

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="h-8 w-8" />, number: "50+", label: "Events" },
    { icon: <Star className="h-8 w-8" />, number: "4.9", label: "Client Rating" },
    { icon: <TrendingUp className="h-8 w-8" />, number: "8+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Elevating Beauty
              <span className="gradient-text"> Standards</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm Kasi , a passionate makeup artist with over 8 years of experience creating 
              stunning beauty transformations. My journey began with a love for enhancing natural beauty 
              and has evolved into a career working with brides, models, and fashion brands worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines technical expertise with artistic vision, ensuring each client feels 
              confident and beautiful. From intimate bridal moments to high-fashion editorial shoots, 
              I bring the same level of dedication and artistry to every project.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                View My Work
              </button>
              <button className="btn-secondary">
                Read My Story
              </button>
            </div> */}
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
              <span className="font-display text-2xl font-bold gradient-text">
              Kasi Academy
            </span>
                <div className="bg-white rounded-2xl px-2 py-6 md:p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                    <div className="text-gray-600">Transformations</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">8+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
                <img
                  src={mam}
                  alt="Makeup training session"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;