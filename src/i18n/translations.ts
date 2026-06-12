export type Lang = 'en' | 'pt';

export const translations = {
  en: {
    langSwitchTo: 'PT',
    nav: { back: 'Back to home' },
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
    },
    projects: {
      dima: {
        name: 'Dima — Personal Finance',
        desc: 'Full stack personal finance app: categories, income & expense tracking, dashboard with charts and a premium plan with Stripe payments.',
      },
      vieira: {
        name: 'Vieira Solutions',
        desc: 'Institutional site & landing page for a digital agency, with a contact form that stores leads, fires automatic notification and auto-reply e-mails, and redirects to WhatsApp.',
      },
    },
    links: { experience: 'Experience', courses: 'Courses & Certificates' },
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
    footer: { rights: 'All rights reserved.' },
  },

  pt: {
    langSwitchTo: 'EN',
    nav: { back: 'Voltar ao início' },
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
    },
    projects: {
      dima: {
        name: 'Dima — Controle Financeiro',
        desc: 'Aplicação full stack de gestão financeira pessoal: categorias, lançamentos de receitas e despesas, dashboard com gráficos e plano premium com pagamentos via Stripe.',
      },
      vieira: {
        name: 'Vieira Solutions',
        desc: 'Site institucional e landing page para uma agência digital, com formulário que registra leads, dispara e-mails automáticos de notificação e auto-resposta, e redireciona para o WhatsApp.',
      },
    },
    links: { experience: 'Experiência', courses: 'Cursos & Certificados' },
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
    footer: { rights: 'Todos os direitos reservados.' },
  },
} as const;

export type Translation = (typeof translations)['en'];
