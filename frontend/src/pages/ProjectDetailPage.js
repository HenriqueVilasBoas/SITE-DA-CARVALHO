import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Zap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockProjects, translations } from '../data/mockData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  const project = mockProjects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#FAFFEE]">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#004534] hover:text-[#0C6951] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Voltar aos Projetos</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src={project.image} 
                alt={project.title[language]}
                className="w-full h-[400px] object-cover rounded-[32px] shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-[#004534] mb-4">
                  {project.title[language]}
                </h1>
                <div className="flex items-center gap-2 text-[#0C6951] mb-6">
                  <MapPin size={20} />
                  <span className="text-lg">{project.location[language]}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#FAFAFF] p-6 rounded-[24px] border border-[#CACAFC]">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="text-[#D3FF62]" size={24} />
                    <span className="font-semibold text-[#004534]">Capacidade</span>
                  </div>
                  <p className="text-2xl font-bold text-[#0C6951]">{project.capacity}</p>
                </div>
                
                <div className="bg-[#FAFAFF] p-6 rounded-[24px] border border-[#CACAFC]">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="text-[#D3FF62]" size={24} />
                    <span className="font-semibold text-[#004534]">Status</span>
                  </div>
                  <p className="text-xl font-bold text-[#0C6951]">Concluído</p>
                </div>
              </div>
              
              <div className="bg-[#EDEDFE] p-6 rounded-[24px]">
                <h3 className="font-semibold text-[#004534] mb-3">Principais Conquistas</h3>
                <p className="text-[#0C6951] leading-relaxed">
                  {project.achievements[language]}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#004534] mb-3">Sobre o Projeto</h3>
                <p className="text-[#0C6951] leading-relaxed text-lg">
                  {project.description[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;