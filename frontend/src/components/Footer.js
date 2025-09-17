import React from 'react';
import { TreePine, MapPin, Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/mockData';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MapPin,
      text: {
        pt: "São Paulo, SP - Brasil",
        en: "São Paulo, SP - Brazil"
      }
    },
    {
      icon: Phone,
      text: {
        pt: "+55 (11) 9999-9999",
        en: "+55 (11) 9999-9999"
      }
    },
    {
      icon: Mail,
      text: {
        pt: "contato@carvalhoenergia.com.br",
        en: "contact@carvalhoenergia.com.br"
      }
    }
  ];

  const quickLinks = [
    { name: { pt: "Início", en: "Home" }, href: "#home" },
    { name: { pt: "Projetos", en: "Projects" }, href: "#projects" },
    { name: { pt: "Serviços", en: "Services" }, href: "#services" },
    { name: { pt: "Notícias", en: "News" }, href: "#news" },
    { name: { pt: "Sobre Nós", en: "About" }, href: "#about" }
  ];

  const services = [
    { name: { pt: "Obras Civis", en: "Civil Works" } },
    { name: { pt: "Cravação de Perfis", en: "Profile Piling" } },
    { name: { pt: "Montagem de Estruturas", en: "Structure Assembly" } },
    { name: { pt: "Instalação Elétrica", en: "Electrical Installation" } },
    { name: { pt: "Logística", en: "Logistics" } },
    { name: { pt: "O&M", en: "O&M" } }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-[#004534] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="text-[#D3FF62]" size={32} />
              <span className="text-xl font-bold">Carvalho Energia</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {language === 'pt'
                ? 'Especialistas em energia solar, construindo um futuro sustentável através de usinas fotovoltaicas de grande escala.'
                : 'Solar energy specialists, building a sustainable future through large-scale photovoltaic plants.'
              }
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-[#0C6951] p-2 rounded-lg hover:bg-[#D3FF62] hover:text-[#004534] transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D3FF62]">
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#D3FF62] transition-colors"
                  >
                    {link.name[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D3FF62]">
              {language === 'pt' ? 'Serviços' : 'Services'}
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service.name[language]}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#D3FF62]">
              {language === 'pt' ? 'Contato' : 'Contact'}
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className="text-[#D3FF62] flex-shrink-0" size={20} />
                    <span className="text-white/80 text-sm">
                      {contact.text[language]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#0C6951] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Carvalho Energia Renovável. {t.rights}
            </p>
            
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-[#D3FF62] transition-colors">
                {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-[#D3FF62] transition-colors">
                {language === 'pt' ? 'Termos de Uso' : 'Terms of Use'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;