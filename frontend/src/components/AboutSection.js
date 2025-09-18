import React from 'react';
import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mockData';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: Target,
      title: {
        pt: "Excelência Técnica",
        en: "Technical Excellence"
      },
      description: {
        pt: "Comprometidos com os mais altos padrões de qualidade e inovação em cada projeto.",
        en: "Committed to the highest standards of quality and innovation in every project."
      }
    },
    {
      icon: Heart,
      title: {
        pt: "Sustentabilidade e Segurança",
        en: "Sustainability and Security"
      },
      description: {
        pt: "Ao adotarmos práticas sustentáveis, como o uso consciente de recursos naturais, gestão adequada de resíduos e redução de emissões, criamos um ambiente mais saudável e seguro para todos. Empresas que investem em sustentabilidade não apenas protegem o planeta, mas também reduzem riscos ocupacionais, promovendo processos de trabalho mais seguros e eficientes. A interseção entre sustentabilidade e segurança do trabalho demonstra que cuidar do meio ambiente e das pessoas é uma estratégia integrada para um futuro mais responsável e protegido.",
        en: "We promote a cleaner future through renewable energy and sustainable practices."
      }
    },
    {
      icon: Users,
      title: {
        pt: "Parcerias Sólidas",
        en: "Solid Partnerships"
      },
      description: {
        pt: "Construímos relacionamentos duradouros baseados em confiança e resultados.",
        en: "We build lasting relationships based on trust and results."
      }
    }
  ];

  const stats = [
    {
      number: "500+",
      label: { pt: "MW Instalados", en: "MW Installed" },
      icon: Zap
    },
    {
      number: "50+",
      label: { pt: "Projetos Concluídos", en: "Completed Projects" },
      icon: Award
    },
    {
      number: "15+",
      label: { pt: "Anos de Experiência", en: "Years of Experience" },
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-16 bg-[#FAFAFF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="display-medium text-[#004534] mb-4">
            {t.aboutTitle}
          </h2>
          <p className="body-large text-[#0C6951] max-w-2xl mx-auto">
            {t.aboutSubtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="heading-2 text-[#004534] mb-6">
                {language === 'pt' ? 'Nossa História' : 'Our Story'}
              </h3>
              <div className="space-y-4 text-[#0C6951] leading-relaxed">
                <p>
                  {language === 'pt' 
                    ? 'Fundada com a visão de transformar o panorama energético brasileiro, a Carvalho Energia Renovável emergiu como uma das principais empresas especializadas na construção de usinas fotovoltaicas de grande escala.'
                    : 'Founded with the vision of transforming the Brazilian energy landscape, Carvalho Renewable Energy has emerged as one of the leading companies specialized in large-scale photovoltaic plant construction.'
                  }
                </p>
                <p>
                  {language === 'pt'
                    ? 'Com mais de 15 anos de experiência no setor, nossa equipe combina expertise técnica com paixão pela sustentabilidade, entregando projetos que não apenas geram energia limpa, mas também impulsionam o desenvolvimento econômico das regiões onde atuamos.'
                    : 'With over 15 years of experience in the sector, our team combines technical expertise with passion for sustainability, delivering projects that not only generate clean energy but also drive economic development in the regions where we operate.'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Solar installation team"
                className="w-full h-80 object-cover rounded-[32px] shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#004534]/20 to-transparent rounded-[32px]"></div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="network-card text-center">
              <div className="bg-[#004534] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="text-[#D3FF62]" size={32} />
              </div>
              <h4 className="network-card-title text-xl mb-4">
                {language === 'pt' ? 'Nossa Missão' : 'Our Mission'}
              </h4>
              <p className="network-card-content">
                {language === 'pt'
                  ? 'Acelerar a transição para energia limpa no Brasil através de soluções inovadoras e sustentáveis em energia fotovoltaica.'
                  : 'Accelerate the transition to clean energy in Brazil through innovative and sustainable photovoltaic energy solutions.'
                }
              </p>
            </div>
            
            <div className="network-card text-center">
              <div className="bg-[#004534] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="text-[#D3FF62]" size={32} />
              </div>
              <h4 className="network-card-title text-xl mb-4">
                {language === 'pt' ? 'Nossa Visão' : 'Our Vision'}
              </h4>
              <p className="network-card-content">
                {language === 'pt'
                  ? 'Ser reconhecida como a principal referência em construção de usinas fotovoltaicas na América Latina até 2030.'
                  : 'To be recognized as the leading reference in photovoltaic plant construction in Latin America by 2030.'
                }
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="heading-2 text-[#004534] text-center mb-8">
              {language === 'pt' ? 'Nossos Valores' : 'Our Values'}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="network-card text-center hover:shadow-xl">
                    <div className="bg-[#EDEDFE] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="text-[#004534]" size={32} />
                    </div>
                    <h4 className="network-card-title text-lg mb-3">
                      {value.title[language]}
                    </h4>
                    <p className="network-card-content">
                      {value.description[language]}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Statistics Banner */}
          <div className="bg-[#004534] rounded-[32px] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-white">
                    <IconComponent className="text-[#D3FF62] mx-auto mb-4" size={40} />
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                    <div className="text-lg text-white/80">{stat.label[language]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
