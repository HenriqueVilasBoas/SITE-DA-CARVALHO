import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, mockProjects } from '../data/mockData';

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % mockProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + mockProjects.length) % mockProjects.length);
  };

  const currentProjectData = mockProjects[currentProject];

  return (
    <section id="projects" className="py-16 bg-[#FAFAFF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="display-medium text-[#004534] mb-4">
            {t.projectsTitle}
          </h2>
          <p className="body-large text-[#0C6951] max-w-2xl mx-auto">
            {t.projectsSubtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] shadow-lg">
            <img
              src={currentProjectData.image}
              alt={currentProjectData.title[language]}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
            
            {/* Overlay with project info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-[#D3FF62] mb-2">
                    <MapPin size={20} />
                    <span className="text-lg font-medium">
                      {currentProjectData.location[language]}
                    </span>
                  </div>
                  
                  <h3 className="heading-2 text-white mb-3">
                    {currentProjectData.title[language]}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[#D3FF62] mb-4">
                    <Zap size={20} />
                    <span className="text-xl font-semibold">
                      {currentProjectData.capacity}
                    </span>
                  </div>
                  
                  <p className="body-medium text-white/90 mb-6">
                    {currentProjectData.achievements[language]}
                  </p>
                  
                  <Link
                    to={`/project/${currentProjectData.id}`}
                    className="btn-primary bg-[#D3FF62] text-[#004534] hover:bg-white hover:shadow-lg inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="button-text">{t.viewProject}</span>
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#004534] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#004534] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mockProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-[#004534] scale-125'
                    : 'bg-[#CACAFC] hover:bg-[#004534]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {mockProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className={`network-card group transition-all duration-300 ${
                index === currentProject ? 'ring-2 ring-[#004534] scale-105' : ''
              }`}
            >
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h4 className="network-card-title text-lg">
                {project.title[language]}
              </h4>
              <p className="network-card-content text-sm">
                {project.location[language]} • {project.capacity}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;