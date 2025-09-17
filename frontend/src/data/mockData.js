export const translations = {
  pt: {
    // Navigation
    home: "Início",
    projects: "Projetos em Destaque",
    services: "Serviços",
    news: "Notícias",
    about: "Sobre Nós",
    contact: "Contato",
    
    // Hero Section
    heroTitle: "Energia Solar Para Um Futuro Sustentável",
    heroSubtitle: "Especialistas na construção de usinas fotovoltaicas de grande escala, combinando inovação, sustentabilidade e excelência técnica.",
    heroButton: "Conheça Nossos Projetos",
    
    // Featured Projects
    projectsTitle: "Projetos em Destaque",
    projectsSubtitle: "Conheça algumas das maiores usinas fotovoltaicas que construímos pelo Brasil",
    viewProject: "Ver Detalhes do Projeto",
    
    // Services
    servicesTitle: "Nossos Serviços",
    servicesSubtitle: "Soluções completas para projetos de energia solar de grande escala",
    
    // News
    newsTitle: "Últimas Notícias",
    newsSubtitle: "Acompanhe as novidades do setor e nossos projetos",
    
    // About
    aboutTitle: "Sobre a Carvalho Energia Renovável",
    aboutSubtitle: "Pioneiros em energia solar no Brasil",
    
    // Footer
    followUs: "Siga-nos",
    rights: "Todos os direitos reservados."
  },
  en: {
    // Navigation
    home: "Home",
    projects: "Featured Projects",
    services: "Services",
    news: "News",
    about: "About Us",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Solar Energy For A Sustainable Future",
    heroSubtitle: "Specialists in large-scale photovoltaic power plant construction, combining innovation, sustainability and technical excellence.",
    heroButton: "Explore Our Projects",
    
    // Featured Projects
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Discover some of the largest photovoltaic plants we've built across Brazil",
    viewProject: "View Project Details",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Complete solutions for large-scale solar energy projects",
    
    // News
    newsTitle: "Latest News",
    newsSubtitle: "Stay updated with industry news and our projects",
    
    // About
    aboutTitle: "About Carvalho Renewable Energy",
    aboutSubtitle: "Solar energy pioneers in Brazil",
    
    // Footer
    followUs: "Follow Us",
    rights: "All rights reserved."
  }
};

export const mockProjects = [
  {
    id: 1,
    title: {
      pt: "Usina Solar Horizonte Verde",
      en: "Horizonte Verde Solar Plant"
    },
    location: {
      pt: "Minas Gerais, Brasil",
      en: "Minas Gerais, Brazil"
    },
    capacity: "150 MW",
    achievements: {
      pt: "24.000 estacas cravadas, 185.000 módulos instalados, 2.090 estruturas montadas",
      en: "24,000 piles driven, 185,000 modules installed, 2,090 structures assembled"
    },
    description: {
      pt: "Uma das maiores usinas fotovoltaicas de Minas Gerais, capaz de gerar energia limpa para mais de 100.000 residências.",
      en: "One of the largest photovoltaic plants in Minas Gerais, capable of generating clean energy for over 100,000 homes."
    },
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 2,
    title: {
      pt: "Complexo Solar Cerrado Dourado",
      en: "Cerrado Dourado Solar Complex"
    },
    location: {
      pt: "Goiás, Brasil",
      en: "Goiás, Brazil"
    },
    capacity: "200 MW",
    achievements: {
      pt: "32.000 estacas instaladas, 250.000 painéis montados, 2.800 trackers solares",
      en: "32,000 stakes installed, 250,000 panels mounted, 2,800 solar trackers"
    },
    description: {
      pt: "Maior complexo solar do Centro-Oeste brasileiro, utilizando tecnologia de trackers para máxima eficiência energética.",
      en: "Largest solar complex in Brazil's Center-West region, using tracker technology for maximum energy efficiency."
    },
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  },
  {
    id: 3,
    title: {
      pt: "Parque Fotovoltaico Vale do Sol",
      en: "Vale do Sol Photovoltaic Park"
    },
    location: {
      pt: "Bahia, Brasil",
      en: "Bahia, Brazil"
    },
    capacity: "180 MW",
    achievements: {
      pt: "28.500 fundações, 220.000 módulos solares, 2.400 estruturas de rastreamento",
      en: "28,500 foundations, 220,000 solar modules, 2,400 tracking structures"
    },
    description: {
      pt: "Projeto inovador no sertão baiano, aproveitando a alta incidência solar da região para gerar energia renovável.",
      en: "Innovative project in Bahia's countryside, leveraging the region's high solar incidence to generate renewable energy."
    },
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  }
];

export const mockServices = [
  {
    id: 1,
    title: {
      pt: "Obras Civis",
      en: "Civil Works"
    },
    description: {
      pt: "Preparação de terreno, terraplanagem e infraestrutura civil para usinas solares.",
      en: "Site preparation, earthworks and civil infrastructure for solar plants."
    },
    icon: "Construction",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: {
      pt: "Cravação de Perfis Metálicos",
      en: "Metal Profile Piling"
    },
    description: {
      pt: "Instalação especializada de fundações metálicas para estruturas fotovoltaicas.",
      en: "Specialized installation of metal foundations for photovoltaic structures."
    },
    icon: "Hammer",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: {
      pt: "Montagem de Estruturas e Módulos",
      en: "Structure and Module Assembly"
    },
    description: {
      pt: "Montagem precisa de estruturas metálicas e instalação de painéis solares.",
      en: "Precise assembly of metal structures and installation of solar panels."
    },
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1497440138162-bcac79a9709d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: {
      pt: "Instalação Elétrica",
      en: "Electrical Installation"
    },
    description: {
      pt: "Sistemas elétricos completos, cabeamento e conexão à rede de transmissão.",
      en: "Complete electrical systems, cabling and connection to transmission grid."
    },
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: {
      pt: "Logística",
      en: "Logistics"
    },
    description: {
      pt: "Gestão completa de suprimentos e logística para grandes projetos solares.",
      en: "Complete supply chain and logistics management for large solar projects."
    },
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1566399835706-b3e73bcfb5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: {
      pt: "Operação e Manutenção (O&M)",
      en: "Operation & Maintenance (O&M)"
    },
    description: {
      pt: "Serviços especializados de manutenção e monitoramento de performance.",
      en: "Specialized maintenance services and performance monitoring."
    },
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const mockNews = [
  {
    id: 1,
    title: {
      pt: "Carvalho Energia conclui maior projeto do ano",
      en: "Carvalho Energy completes largest project of the year"
    },
    summary: {
      pt: "A usina solar de 200MW no Complexo Cerrado Dourado foi oficialmente conectada à rede, marcando um marco importante para a energia renovável no Brasil.",
      en: "The 200MW solar plant at Cerrado Dourado Complex was officially connected to the grid, marking an important milestone for renewable energy in Brazil."
    },
    date: "2024-01-15",
    category: {
      pt: "Projeto Concluído",
      en: "Project Completion"
    }
  },
  {
    id: 2,
    title: {
      pt: "Inovação em tecnologia de trackers solares",
      en: "Innovation in solar tracker technology"
    },
    summary: {
      pt: "Nossa equipe desenvolveu uma nova abordagem para instalação de trackers solares, aumentando a eficiência em 15% e reduzindo o tempo de montagem.",
      en: "Our team developed a new approach for solar tracker installation, increasing efficiency by 15% and reducing assembly time."
    },
    date: "2024-01-10",
    category: {
      pt: "Inovação",
      en: "Innovation"
    }
  },
  {
    id: 3,
    title: {
      pt: "Expansão para novos mercados em 2024",
      en: "Expansion to new markets in 2024"
    },
    summary: {
      pt: "Anunciamos planos de expansão para os estados do Nordeste, com foco em projetos de energia solar de grande escala.",
      en: "We announced expansion plans for Northeast states, focusing on large-scale solar energy projects."
    },
    date: "2024-01-05",
    category: {
      pt: "Expansão",
      en: "Expansion"
    }
  }
];