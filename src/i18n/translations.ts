export type Lang = 'en' | 'pt';

export const translations = {
  en: {
    langSwitchTo: 'PT',
    nav: { back: 'Back to home' },
    links: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      courses: 'Courses',
      contact: 'Contact',
    },
    home: {
      greeting: 'Welcome.',
      role: 'Full Stack Developer',
      intro1:
        "My name is Matheus Alexandre, a full stack developer based in Brazil. For the past 2 years I've built modern, high-performance applications with C#, .NET, SQL Server, React and Blazor.",
      intro2:
        "I'm passionate about clean architecture, performant systems and well-crafted, intuitive user experiences.",
      projectsTitle: 'Projects',
      exploreTitle: 'Explore',
      stackTitle: 'Stack',
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      heading: 'Full Stack Developer',
      body1:
        'I build modern, performant applications end to end — from SQL Server data modeling and .NET back-ends to React and Blazor front-ends.',
      body2:
        'I care about clean architecture, maintainable code and shipping software that actually solves problems.',
    },
    experience: {
      title: 'Experience',
      role: 'Full Stack Developer',
      company: 'Titaniumfix',
      period: '2022 — Present',
      location: 'On-site',
      summary:
        'I work as a full stack developer focused on internal systems, DevExpress reporting and SQL Server database optimization.',
      responsibilitiesTitle: 'Key responsibilities',
      responsibilities: [
        'Building web applications with C# .NET and DevExpress',
        'Systems analysis',
        'Performance optimization on SQL Server',
        'Developing advanced reports with DevExpress',
      ],
      stackTitle: 'Main technologies',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of things I have built.',
      statusDone: 'Completed',
      code: 'Code',
      dima: {
        name: 'Dima — Personal Finance',
        category: 'Finance',
        desc: 'Full stack personal finance app: categories, income & expense tracking, dashboard with charts and a premium plan with Stripe payments.',
      },
      vieira: {
        name: 'Vieira Solutions',
        category: 'Web',
        desc: 'Institutional site & landing page for a digital agency, with a contact form that stores leads, fires automatic notification and auto-reply e-mails, and redirects to WhatsApp.',
      },
    },
    courses: {
      title: 'Courses & Certificates',
      subtitle: 'Always learning and keeping up with new technologies.',
      viewCertificate: 'View certificate',
      items: {
        1: {
          title: 'Blazor WebAssembly Fundamentals',
          desc: 'Building rich, interactive Single Page Applications with C# and WebAssembly.',
        },
        2: {
          title: 'Blazor Server Fundamentals',
          desc: 'Component lifecycle and real-time communication via SignalR in Blazor Server.',
        },
        3: {
          title: 'ASP.NET 6 Fundamentals',
          desc: 'Core concepts in ASP.NET 6 for modern APIs and microservice-based applications.',
        },
        4: {
          title: 'An Overview of ASP.NET Razor Pages',
          desc: 'The page-based paradigm with C# and HTML using ASP.NET Razor Pages.',
        },
        5: {
          title: 'Entity Framework Fundamentals',
          desc: 'Object-relational mapping with Entity Framework Core for efficient data access.',
        },
        6: {
          title: 'Data Access with .NET, C#, Dapper and SQL Server',
          desc: 'Performance-focused data access techniques using Dapper together with SQL Server.',
        },
      },
    },
    contact: {
      title: "Let's talk",
      subtitle: "I'm always open to new opportunities and interesting challenges.",
      infoHeading: 'Get in touch',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Brazil — Remote',
      availabilityLabel: 'Availability',
      availabilityValue: 'Mon–Fri, 9am–6pm',
      socialHeading: 'Social',
      formHeading: 'Send a message',
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or idea...',
      submit: 'Send message',
      sending: 'Sending...',
      toastTitle: 'Redirecting...',
      toastDesc: 'Opening WhatsApp to send your message.',
      messageIntro: 'Hi! My name is',
      messageBody: 'Message',
    },
    footer: { rights: 'All rights reserved.' },
  },

  pt: {
    langSwitchTo: 'EN',
    nav: { back: 'Voltar ao início' },
    links: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      courses: 'Cursos',
      contact: 'Contato',
    },
    home: {
      greeting: 'Olá.',
      role: 'Desenvolvedor Full Stack',
      intro1:
        'Meu nome é Matheus Alexandre, desenvolvedor full stack baseado no Brasil. Há 2 anos construo aplicações modernas e performáticas com C#, .NET, SQL Server, React e Blazor.',
      intro2:
        'Sou apaixonado por arquitetura limpa, sistemas performáticos e experiências de usuário bem construídas e intuitivas.',
      projectsTitle: 'Projetos',
      exploreTitle: 'Explore',
      stackTitle: 'Stack',
      scroll: 'Role',
    },
    about: {
      title: 'Sobre',
      heading: 'Desenvolvedor Full Stack',
      body1:
        'Construo aplicações modernas e performáticas de ponta a ponta — da modelagem de dados em SQL Server e back-ends em .NET aos front-ends em React e Blazor.',
      body2:
        'Me importo com arquitetura limpa, código de fácil manutenção e entregar software que realmente resolve problemas.',
    },
    experience: {
      title: 'Experiência',
      role: 'Desenvolvedor Full Stack',
      company: 'Titaniumfix',
      period: '2022 — Atual',
      location: 'Presencial',
      summary:
        'Atuo como desenvolvedor full stack, com foco em desenvolvimento de sistema interno, relatórios com DevExpress e otimização de banco de dados em SQL Server.',
      responsibilitiesTitle: 'Principais responsabilidades',
      responsibilities: [
        'Desenvolvimento de aplicações web com C# .NET e DevExpress',
        'Análise de sistema',
        'Otimização de performance em SQL Server',
        'Desenvolvimento de relatórios com DevExpress',
      ],
      stackTitle: 'Principais tecnologias',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Uma seleção do que construí.',
      statusDone: 'Concluído',
      code: 'Código',
      dima: {
        name: 'Dima — Controle Financeiro',
        category: 'Finanças',
        desc: 'Aplicação full stack de gestão financeira pessoal: categorias, lançamentos de receitas e despesas, dashboard com gráficos e plano premium com pagamentos via Stripe.',
      },
      vieira: {
        name: 'Vieira Solutions',
        category: 'Web',
        desc: 'Site institucional e landing page para uma agência digital, com formulário que registra leads, dispara e-mails automáticos de notificação e auto-resposta, e redireciona para o WhatsApp.',
      },
    },
    courses: {
      title: 'Cursos & Certificados',
      subtitle: 'Sempre em busca de novos conhecimentos e atualizações tecnológicas.',
      viewCertificate: 'Ver certificado',
      items: {
        1: {
          title: 'Fundamentos do Blazor Web Assembly',
          desc: 'Criação de Single Page Applications ricas e interativas utilizando C# e WebAssembly.',
        },
        2: {
          title: 'Fundamentos do Blazor Server',
          desc: 'Ciclo de vida dos componentes e comunicação em tempo real via SignalR no Blazor Server.',
        },
        3: {
          title: 'Fundamentos do ASP.NET 6',
          desc: 'Conceitos essenciais no ASP.NET 6 para APIs modernas e aplicações baseadas em microserviços.',
        },
        4: {
          title: 'Uma visão geral sobre o ASP.NET Razor Pages',
          desc: 'O paradigma baseado em páginas usando C# e HTML com ASP.NET Razor Pages.',
        },
        5: {
          title: 'Fundamentos do Entity Framework',
          desc: 'Mapeamento objeto-relacional com Entity Framework Core para acesso eficiente a dados.',
        },
        6: {
          title: 'Acesso a dados com .NET, C#, Dapper e SQL Server',
          desc: 'Técnicas com foco em performance para acesso a dados usando Dapper junto ao SQL Server.',
        },
      },
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Estou sempre aberto a novas oportunidades e desafios interessantes.',
      infoHeading: 'Entre em contato',
      emailLabel: 'Email',
      locationLabel: 'Localização',
      locationValue: 'Brasil — Remoto',
      availabilityLabel: 'Disponibilidade',
      availabilityValue: 'Seg–Sex, 9h–18h',
      socialHeading: 'Redes',
      formHeading: 'Envie uma mensagem',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome completo',
      emailPlaceholder: 'voce@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou ideia...',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      toastTitle: 'Redirecionando...',
      toastDesc: 'Abrindo o WhatsApp para enviar sua mensagem.',
      messageIntro: 'Olá! Meu nome é',
      messageBody: 'Mensagem',
    },
    footer: { rights: 'Todos os direitos reservados.' },
  },
} as const;

export type Translation = (typeof translations)['en'];
