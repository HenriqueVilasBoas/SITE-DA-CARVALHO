import React from 'react';
import { ArrowRight, TreePine } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mockData';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAFFEE] pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#004534] p-6 rounded-full shadow-lg">
              <TreePine className="text-[#D3FF62]" size={48} />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="display-large text-[#004534] mb-6">
            {t.heroTitle}
          </h1>
          
          {/* Subtitle */}
          <p className="body-large text-[#0C6951] max-w-3xl mx-auto mb-8">
            {t.heroSubtitle}
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToProjects}
              className="btn-cta bg-[#004534] hover:bg-[#0C6951] text-white inline-flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
            >
              <span className="button-text">{t.heroButton}</span>
              <ArrowRight size={20} />
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004534] mb-2">500+</div>
              <div className="text-[#0C6951]">MW Instalados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004534] mb-2">50+</div>
              <div className="text-[#0C6951]">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#004534] mb-2">15+</div>
              <div className="text-[#0C6951]">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;