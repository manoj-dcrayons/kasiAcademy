import React, { useState } from 'react';
import { Award, Star, BookOpen, Users, Clock, Target } from 'lucide-react';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Bridal Artistry",
      level: "Expert",
      description: "Specializing in timeless bridal looks that photograph beautifully and last all day",
      percentage: 95
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Editorial & Fashion",
      level: "Advanced",
      description: "Creating bold, artistic looks for fashion shoots and editorial work",
      percentage: 90
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Color Theory",
      level: "Expert",
      description: "Deep understanding of color matching and skin tone analysis",
      percentage: 98
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Special Effects",
      level: "Intermediate",
      description: "Creative makeup techniques for artistic and theatrical applications",
      percentage: 75
    }
  ];
  
  const achievements = [
    {
      year: "2023",
      title: "Beauty Industry Excellence Award",
      organization: "Professional Beauty Association",
      description: "Recognized for outstanding contribution to bridal makeup artistry"
    },
    {
      year: "2022",
      title: "Featured Artist - Vogue Beauty",
      organization: "Vogue Magazine",
      description: "Editorial work featured in major fashion publication"
    },
    {
      year: "2021",
      title: "Master Makeup Artist Certification",
      organization: "International Beauty Institute",
      description: "Advanced certification in professional makeup artistry"
    },
    {
      year: "2020",
      title: "Bridal Specialist of the Year",
      organization: "Wedding Industry Awards",
      description: "Top recognition for excellence in bridal makeup services"
    }
  ];
  
  const experience = [
    {
      role: "Lead Makeup Artist",
      company: "Luxury Bridal Studio",
      period: "2020 - Present",
      description: "Creating bespoke bridal looks for high-end weddings and special events"
    },
    {
      role: "Editorial Makeup Artist",
      company: "Fashion Week Productions",
      period: "2019 - Present",
      description: "Working with top photographers and models for fashion shoots and runway shows"
    },
    {
      role: "Beauty Educator",
      company: "Kasi Academy",
      period: "2018 - Present",
      description: "Training the next generation of professional makeup artists"
    }
  ];

  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional
            <span className="gradient-text"> Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 8 years of experience in the beauty industry, I bring expertise across 
            multiple disciplines of makeup artistry and beauty education.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'skills', label: 'Skills & Specialties' },
            { id: 'achievements', label: 'Awards & Recognition' },
            { id: 'experience', label: 'Professional Experience' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-rose-500 border border-gray-200 hover:border-rose-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900">
                      {skill.title}
                    </h3>
                    <span className="text-rose-500 font-semibold">{skill.level}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{skill.description}</p>
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-bold text-rose-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-rose-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'achievements' && (
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-rose-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-rose-500 font-semibold">{achievement.organization}</p>
                  </div>
                  <div className="text-3xl font-bold gradient-text mt-4 md:mt-0">
                    {achievement.year}
                  </div>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-rose-500 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mt-4 md:mt-0">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Expertise;