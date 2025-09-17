import React from 'react';
import { Calendar, Tag, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, mockNews } from '../data/mockData';

const NewsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return language === 'pt' 
      ? date.toLocaleDateString('pt-BR', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
  };

  return (
    <section id="news" className="py-16 bg-[#CACAFC]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="display-medium text-[#004534] mb-4">
            {t.newsTitle}
          </h2>
          <p className="body-large text-[#0C6951] max-w-2xl mx-auto">
            {t.newsSubtitle}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockNews.map((news, index) => (
            <article 
              key={news.id} 
              className={`network-card group cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* LinkedIn-style header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#004534] rounded-lg flex items-center justify-center">
                  <span className="text-[#D3FF62] font-bold text-lg">CE</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#004534]">Carvalho Energia Renovável</h4>
                  <p className="text-sm text-[#807979]">Energia Solar • Sustentabilidade</p>
                </div>
              </div>

              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-3">
                <Tag size={16} className="text-[#0C6951]" />
                <span className="text-sm font-medium text-[#0C6951] bg-[#EDEDFE] px-2 py-1 rounded-full">
                  {news.category[language]}
                </span>
              </div>

              {/* News Content */}
              <h3 className={`network-card-title mb-3 group-hover:text-[#0C6951] transition-colors ${
                index === 0 ? 'text-2xl' : 'text-lg'
              }`}>
                {news.title[language]}
              </h3>
              
              <p className={`network-card-content mb-4 ${
                index === 0 ? 'text-lg leading-relaxed' : ''
              }`}>
                {news.summary[language]}
              </p>

              {/* Date and Read More */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#807979]">
                  <Calendar size={16} />
                  <span className="text-sm">{formatDate(news.date)}</span>
                </div>
                
                <button className="text-[#004534] hover:text-[#0C6951] font-medium text-sm flex items-center gap-1 transition-colors">
                  <span>Ler mais</span>
                  <ExternalLink size={14} />
                </button>
              </div>

              {/* LinkedIn-style engagement */}
              <div className="border-t border-[#CACAFC] mt-4 pt-4 flex items-center justify-between text-sm text-[#807979]">
                <div className="flex items-center gap-4">
                  <button className="hover:text-[#004534] transition-colors">
                    👍 {12 + index * 5} curtidas
                  </button>
                  <button className="hover:text-[#004534] transition-colors">
                    💬 {3 + index} comentários
                  </button>
                </div>
                <button className="hover:text-[#004534] transition-colors">
                  📤 Compartilhar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary border-[#004534] text-[#004534] hover:bg-[#004534] hover:text-white">
            <span className="button-text">Ver Todas as Notícias</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;