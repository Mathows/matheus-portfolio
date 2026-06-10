export const translations = {
  pt: {
    nav: {
      home: 'Home',
      sobre: 'Sobre',
      experiencia: 'Experiência',
      projetos: 'Projetos',
      cursos: 'Cursos',
      contato: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Full Stack',
      cta: 'Ver Portfólio',
      scrollDown: 'Role para baixo',
    },
    about: {
      role: 'Desenvolvedor Full Stack',
      bioStart: 'Sou desenvolvedor full stack há 2 anos, especializado no ecossistema Microsoft: ',
      bioStack: 'C#, .NET, .NET MAUI, SQL Server, Blazor e Azure',
      bioEnd: '. Crio aplicações modernas e performáticas.',
    },
    experience: {
      titlePrefix: 'Minha ',
      titleHighlight: 'Experiência',
      company: 'Titaniumfix',
      role: 'Desenvolvedor Full Stack',
      period: '2022 - Atual',
      location: 'Presencial',
      description:
        'Atuo como desenvolvedor full stack, com foco em desenvolvimento de sistema interno, relatórios com DevExpress e otimização de banco de dados em SQL Server.',
      responsibilitiesTitle: 'Principais Responsabilidades:',
      responsibilities: [
        'Desenvolvimento de aplicações web usando C# .NET e DevExpress',
        'Análise de sistema',
        'Otimização de performance em SQL Server',
        'Desenvolvimento de relatórios com DevExpress',
      ],
      achievementsTitle: 'Principais Conquistas',
      achievements: [
        {
          title: 'Desenvolvimento Full Stack',
          description:
            'Criação de aplicações completas usando C# .NET no backend e ASPX/DevExpress no frontend',
        },
        {
          title: 'Otimização de Banco de Dados',
          description: 'Otimização de queries SQL Server e estruturação de bases de dados eficientes',
        },
        {
          title: 'Relatórios Avançados',
          description: 'Desenvolvimento de relatórios complexos utilizando SQL Server para análise de dados',
        },
        {
          title: 'Integração de Sistemas',
          description: 'Integração de sistemas legados com novas tecnologias e APIs externas',
        },
      ],
      techsTitle: 'Principais Tecnologias',
    },
    projects: {
      titlePrefix: 'Meus ',
      titleHighlight: 'Projetos',
      subtitle: 'Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias',
      featuredHeading: 'Destaques',
      allHeading: 'Todos os projetos',
      featuredBadge: 'DESTAQUE',
      buttonCode: 'Código',
      buttonAccess: 'Acesse',
      ctaTitle: 'Interessado em colaborar?',
      ctaSubtitle:
        'Estou sempre aberto a novos desafios e oportunidades de colaboração. Vamos conversar sobre seu próximo projeto!',
      ctaButton: 'Entrar em Contato',
      status: {
        completed: 'Concluído',
        inProgress: 'Em desenvolvimento',
      },
      list: {
        dima: {
          title: 'Dima — Controle Financeiro',
          description:
            'Aplicação full stack de gestão financeira pessoal: cadastro de categorias, lançamentos com recorrência mensal, dashboard com gráficos e plano Premium integrado com Stripe. Deploy automático no Azure (App Service + Static Web Apps + SQL Free).',
          category: 'Full Stack',
        },
        dimaMobile: {
          title: 'Dima Mobile (Android)',
          description:
            'App mobile do Dima em .NET MAUI Blazor Hybrid, reaproveitando 100% do Core compartilhado com a Web. Autenticação JWT com tokens em SecureStorage (Android Keystore), CRUD completo de lançamentos com recorrência e dashboard com gráficos. APK Android disponível na release do GitHub.',
          category: 'Mobile',
        },
        vieira: {
          title: 'Vieira Solutions',
          description:
            'Site institucional e landing page para agência digital, com formulário de contato que persiste leads no banco, dispara e-mails automáticos (notificação interna + auto-resposta via MailKit) e redireciona o cliente para o WhatsApp com mensagem pré-formatada.',
          category: 'Web',
        },
      },
    },
    courses: {
      titlePrefix: 'Cursos & ',
      titleHighlight: 'Certificados',
      subtitle: 'Sempre em busca de novos conhecimentos e atualizações tecnológicas',
      seeButton: 'Ver Certificado',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        'Full Stack': 'Full Stack',
        Database: 'Banco de Dados',
      },
      status: {
        completed: 'Concluído',
      },
      goalsTitle: 'Próximos Objetivos de Aprendizado',
      goalsSubtitle:
        'Sempre em evolução, planejo expandir meus conhecimentos em novas tecnologias e certificações',
      goals: [
        { title: 'Cloud Computing', description: 'Azure e AWS para soluções em nuvem' },
        { title: 'Microservices', description: 'Arquitetura distribuída e containers' },
        { title: 'Machine Learning', description: 'IA aplicada ao desenvolvimento' },
      ],
      list: {
        blazorWasm: {
          title: 'Fundamentos do Blazor Web Assembly',
          description:
            'Curso completo sobre criação de Single Page Applications ricas e interativas utilizando C# e WebAssembly.',
        },
        blazorServer: {
          title: 'Fundamentos do Blazor Server',
          description:
            'Aprendizado focado no ciclo de vida dos componentes e na comunicação em tempo real via SignalR no Blazor Server.',
        },
        aspnet6: {
          title: 'Fundamentos do ASP.NET 6',
          description:
            'Conceitos essenciais no ASP.NET 6 para o desenvolvimento de APIs modernas e aplicações baseadas em microserviços.',
        },
        razorPages: {
          title: 'Uma visão geral sobre o ASP.NET Razor Pages',
          description:
            'Introdução ao paradigma baseado em páginas usando C# e HTML com ASP.NET Razor Pages, focando em produtividade.',
        },
        ef: {
          title: 'Fundamentos do Entity Framework',
          description:
            'Mapeamento objeto-relacional com Entity Framework Core para otimizar o acesso e a manipulação de banco de dados.',
        },
        dapper: {
          title: 'Acesso à dados com .NET, C#, Dapper e SQL Server',
          description:
            'Técnicas com foco em performance para acesso a dados usando as vantagens do Dapper em conjunto com o SQL Server.',
        },
      },
    },
    contact: {
      titlePrefix: 'Vamos ',
      titleHighlight: 'Conversar?',
      subtitle: 'Estou sempre aberto a novas oportunidades e desafios interessantes',
      infoTitle: 'Entre em Contato',
      infoText:
        'Seja para discutir um projeto, uma oportunidade de trabalho ou apenas trocar ideias sobre tecnologia, adoraria conversar com você!',
      emailLabel: 'Email',
      locationLabel: 'Localização',
      locationValue: 'Brasil - Remoto',
      availabilityLabel: 'Disponibilidade',
      availabilityValue: 'Seg - Sex, 9h às 18h',
      socialTitle: 'Redes Sociais',
      formTitle: 'Envie uma Mensagem',
      formName: 'Nome',
      formNamePlaceholder: 'Seu nome completo',
      formEmail: 'Email',
      formEmailPlaceholder: 'seu@email.com',
      formPhone: 'Telefone',
      formPhonePlaceholder: '(11) 99999-9999',
      formMessage: 'Mensagem',
      formMessagePlaceholder: 'Conte-me sobre seu projeto ou ideia...',
      submitButton: 'Enviar Mensagem',
      submitting: 'Enviando...',
      toastTitle: 'Redirecionando...',
      toastDescription: 'Abrindo o WhatsApp para enviar sua mensagem.',
      toastInvalidPhoneTitle: 'Telefone inválido',
      toastInvalidPhoneDescription: 'Verifique o DDD e se digitou todos os números (10 ou 11 dígitos).',
      whatsappGreeting: 'Olá! Meu nome é',
      whatsappPhone: 'Telefone:',
      whatsappMessage: 'Mensagem:',
      footer: '© 2025 Matheus Alexandre. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      sobre: 'About',
      experiencia: 'Experience',
      projetos: 'Projects',
      cursos: 'Courses',
      contato: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      cta: 'See Portfolio',
      scrollDown: 'Scroll down',
    },
    about: {
      role: 'Full Stack Developer',
      bioStart: "I've been a full stack developer for 2 years, specialized in the Microsoft ecosystem: ",
      bioStack: 'C#, .NET, .NET MAUI, SQL Server, Blazor and Azure',
      bioEnd: '. I build modern, performant applications.',
    },
    experience: {
      titlePrefix: 'My ',
      titleHighlight: 'Experience',
      company: 'Titaniumfix',
      role: 'Full Stack Developer',
      period: '2022 - Present',
      location: 'On-site',
      description:
        'I work as a full stack developer, focused on internal system development, DevExpress reports and SQL Server database optimization.',
      responsibilitiesTitle: 'Main Responsibilities:',
      responsibilities: [
        'Web application development using C# .NET and DevExpress',
        'System analysis',
        'SQL Server performance optimization',
        'DevExpress report development',
      ],
      achievementsTitle: 'Key Achievements',
      achievements: [
        {
          title: 'Full Stack Development',
          description:
            'Building complete applications using C# .NET on the backend and ASPX/DevExpress on the frontend',
        },
        {
          title: 'Database Optimization',
          description: 'SQL Server query optimization and efficient database structuring',
        },
        {
          title: 'Advanced Reporting',
          description: 'Building complex SQL Server reports for data analysis',
        },
        {
          title: 'System Integration',
          description: 'Integrating legacy systems with modern technologies and external APIs',
        },
      ],
      techsTitle: 'Core Technologies',
    },
    projects: {
      titlePrefix: 'My ',
      titleHighlight: 'Projects',
      subtitle: 'Some of the projects I built using modern technologies',
      featuredHeading: 'Featured',
      allHeading: 'All projects',
      featuredBadge: 'FEATURED',
      buttonCode: 'Code',
      buttonAccess: 'Live',
      ctaTitle: 'Interested in collaborating?',
      ctaSubtitle:
        "I'm always open to new challenges and collaboration opportunities. Let's talk about your next project!",
      ctaButton: 'Get in Touch',
      status: {
        completed: 'Completed',
        inProgress: 'In development',
      },
      list: {
        dima: {
          title: 'Dima — Personal Finance',
          description:
            'Full stack personal finance app: categories, monthly recurring transactions, dashboard with charts and a Premium plan integrated with Stripe. Auto-deployed on Azure (App Service + Static Web Apps + SQL Free).',
          category: 'Full Stack',
        },
        dimaMobile: {
          title: 'Dima Mobile (Android)',
          description:
            "Mobile companion to Dima built with .NET MAUI Blazor Hybrid, reusing 100% of the Core shared with the Web app. JWT auth with tokens stored in SecureStorage (Android Keystore), full transaction CRUD with recurrence, and a charts dashboard. Android APK available in the GitHub release.",
          category: 'Mobile',
        },
        vieira: {
          title: 'Vieira Solutions',
          description:
            'Institutional site and landing page for a digital agency, with a contact form that persists leads in the database, sends automatic emails (internal notification + auto-reply via MailKit) and redirects the visitor to WhatsApp with a pre-filled message.',
          category: 'Web',
        },
      },
    },
    courses: {
      titlePrefix: 'Courses & ',
      titleHighlight: 'Certifications',
      subtitle: 'Always looking for new knowledge and tech updates',
      seeButton: 'View Certificate',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        'Full Stack': 'Full Stack',
        Database: 'Database',
      },
      status: {
        completed: 'Completed',
      },
      goalsTitle: 'Next Learning Goals',
      goalsSubtitle:
        "I'm always evolving — planning to expand my knowledge into new technologies and certifications",
      goals: [
        { title: 'Cloud Computing', description: 'Azure and AWS for cloud-native solutions' },
        { title: 'Microservices', description: 'Distributed architecture and containers' },
        { title: 'Machine Learning', description: 'Applied AI in software development' },
      ],
      list: {
        blazorWasm: {
          title: 'Blazor WebAssembly Fundamentals',
          description:
            'Comprehensive course on building rich, interactive Single Page Applications with C# and WebAssembly.',
        },
        blazorServer: {
          title: 'Blazor Server Fundamentals',
          description: 'Component lifecycle and real-time communication via SignalR in Blazor Server.',
        },
        aspnet6: {
          title: 'ASP.NET 6 Fundamentals',
          description:
            'Core concepts in ASP.NET 6 for building modern APIs and microservices-based applications.',
        },
        razorPages: {
          title: 'ASP.NET Razor Pages Overview',
          description:
            'Introduction to the page-based paradigm using C# and HTML with ASP.NET Razor Pages, focused on productivity.',
        },
        ef: {
          title: 'Entity Framework Fundamentals',
          description: 'ORM with Entity Framework Core to optimize database access and manipulation.',
        },
        dapper: {
          title: 'Data Access with .NET, C#, Dapper and SQL Server',
          description: 'Performance-focused techniques for data access leveraging Dapper with SQL Server.',
        },
      },
    },
    contact: {
      titlePrefix: "Let's ",
      titleHighlight: 'Talk?',
      subtitle: "I'm always open to new opportunities and interesting challenges",
      infoTitle: 'Get in Touch',
      infoText:
        "Whether it's to discuss a project, a job opportunity or just to chat about tech — I'd love to talk with you!",
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Brazil - Remote',
      availabilityLabel: 'Availability',
      availabilityValue: 'Mon - Fri, 9am to 6pm',
      socialTitle: 'Social',
      formTitle: 'Send a Message',
      formName: 'Name',
      formNamePlaceholder: 'Your full name',
      formEmail: 'Email',
      formEmailPlaceholder: 'you@email.com',
      formPhone: 'Phone (Brazil)',
      formPhonePlaceholder: '(11) 99999-9999',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me about your project or idea...',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      toastTitle: 'Redirecting...',
      toastDescription: 'Opening WhatsApp to send your message.',
      toastInvalidPhoneTitle: 'Invalid phone',
      toastInvalidPhoneDescription: 'Check the area code (DDD) and make sure you entered all digits (10 or 11).',
      whatsappGreeting: 'Hi! My name is',
      whatsappPhone: 'Phone:',
      whatsappMessage: 'Message:',
      footer: '© 2025 Matheus Alexandre. All rights reserved.',
    },
  },
} as const;

export type Language = keyof typeof translations;
