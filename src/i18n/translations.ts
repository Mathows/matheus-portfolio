export type Lang = 'en' | 'pt';

// Professional experience counted from 2022, so the intro never goes stale
const yearsOfExperience = new Date().getFullYear() - 2022;

export const translations = {
  en: {
    langSwitchTo: 'PT',
    cvDownload: 'Download CV',
    copyEmail: 'Copy email',
    emailCopied: 'Email copied',
    nav: { back: 'Back to home' },
    links: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      courses: 'Education',
      contact: 'Contact',
    },
    home: {
      greeting: 'Welcome.',
      role: 'Full Stack .NET Developer',
      intro1:
        `My name is Matheus Alexandre, a full stack developer based in Brazil. For the past ${yearsOfExperience} years I've built modern, high-performance applications with C#, .NET, SQL Server, React and Blazor.`,
      intro2:
        "I'm passionate about clean architecture, performant systems and well-crafted, intuitive user experiences.",
      projectsTitle: 'Projects',
      exploreTitle: 'Explore',
      stackTitle: 'Core stack',
      otherStackTitle: 'Also work with',
      scroll: 'Scroll',
    },
    about: {
      title: 'About',
      heading: 'Full Stack .NET Developer',
      body1:
        'I started in 2022 maintaining legacy systems and found out I enjoy exactly the hard part: tracking down the root cause of a bug, understanding a business rule in depth and turning a slow routine into an instant one.',
      body2:
        "I feel at home in the .NET ecosystem — C#, ASP.NET, Entity Framework and NHibernate — and in relational databases, especially SQL Server: data modeling, stored procedures, query tuning and diagnosing concurrency issues. Today I bring that foundation to modern projects with .NET and Blazor.",
    },
    experience: {
      title: 'Experience',
      role: 'Full Stack Developer',
      company: 'Titaniumfix',
      period: '2022 — Present',
      location: 'On-site',
      summary:
        "I develop and maintain the company's internal systems: an ERP covering the full commercial cycle (orders, inventory, finance and billing) and an integrated fiscal and financial platform for e-invoicing (NF-e), bank slips and receivables.",
      stats: [
        { value: '80×', label: 'performance gain' },
        { value: '1.1 s', label: 'down from ~87 s' },
        { value: `${yearsOfExperience}+`, label: 'years on production systems' },
      ],
      highlightsTitle: 'Key achievements',
      highlights: [
        {
          title: '80× performance gain',
          desc: 'Rewrote a cursor-based critical routine as set-based MERGE … OUTPUT, replacing hundreds of row-by-row statements with 2 batch operations: from ~87 s to 1.1 s, with near-constant time regardless of volume.',
        },
        {
          title: 'Silent data corruption uncovered',
          desc: 'Traced duplicate records to users retrying operations that had timed out but actually succeeded, and prevented them with sp_getapplock plus a UI lock.',
        },
        {
          title: 'Bank slip listing rebuilt',
          desc: 'A screen that froze on large data volumes now pages and sorts in the database through a typed stored procedure, with full feature parity.',
        },
        {
          title: 'Legacy integration migrated',
          desc: 'Moved bank slip issuance from a legacy COM component to a modern REST API.',
        },
        {
          title: 'Intermittent production bug solved',
          desc: 'Found that a stale NHibernate session object was overwriting changes made by a stored procedure; validated the fix against 7 test scenarios before release.',
        },
        {
          title: 'Regulatory changes delivered',
          desc: 'Alphanumeric CNPJ (IN RFB 2.229/2024) across two systems, UDI-DI traceability, and analysis of the Tax Reform rules for NF-e returns (NT 2025.002).',
        },
        {
          title: 'Better error diagnostics',
          desc: 'Made the data layer preserve the original exception and stack trace, which exposed the root cause of an unrelated issue the same day.',
        },
      ],
      approachTitle: 'How I work',
      approach: [
        'Measure before fixing: read the code, procedures and triggers, and only run read-only queries in production.',
        'Small, reversible changes, with tests and rollback notes.',
        'Translate technical problems into clear, step-by-step guidance for users.',
      ],
      stackTitle: 'Stack at Titaniumfix',
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of things I have built.',
      statusDone: 'Completed',
      code: 'Code',
      access: 'Visit',
      highlightsLabel: 'Highlights',
      dima: {
        name: 'Dima — Personal Finance',
        category: 'Finance',
        desc: 'A full stack personal finance app to track income and expenses, visualize spending and unlock premium features.',
        highlights: [
          'Income & expense tracking organized by custom categories',
          'Interactive dashboard with monthly charts (income vs. expenses, by category)',
          'Premium plan with real Stripe payment integration',
          'Full stack: Blazor WebAssembly SPA + .NET 8 API + EF Core + SQL Server',
        ],
      },
      vieira: {
        name: 'Vieira Solutions',
        category: 'Web',
        desc: 'Institutional site & landing page for a digital agency, live in production.',
        highlights: [
          'Contact form that stores leads in the database',
          'Automated notification and auto-reply e-mails (MailKit)',
          'Direct WhatsApp redirect for fast lead contact',
          'Full stack: Blazor WebAssembly + .NET 10 API + EF Core + SQL Server',
        ],
      },
    },
    courses: {
      title: 'Education & Certificates',
      subtitle: 'Always learning and keeping up with new technologies.',
      viewCertificate: 'View certificate',
      viewDiploma: 'View diploma',
      educationTitle: 'Education',
      degree: {
        title: 'Technologist Degree in Systems Analysis and Development',
        school: 'Universidade Paulista (UNIP)',
        year: '2024',
        note: 'Undergraduate degree',
      },
      certificatesTitle: 'Certificates',
      items: {
        1: {
          title: 'Blazor WebAssembly Fundamentals',
          desc: 'Building rich, interactive Single Page Applications with C# and WebAssembly.',
        },
        2: {
          title: '.NET Developer Fundamentals',
          desc: 'The .NET platform from the ground up: runtime, SDK, CLI and project structure.',
        },
        3: {
          title: 'ASP.NET 6 Fundamentals',
          desc: 'Core concepts in ASP.NET 6 for modern APIs and microservice-based applications.',
        },
        4: {
          title: 'C# Fundamentals',
          desc: 'Core C# language features: types, control flow and object-oriented programming.',
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
      countryLabel: 'Country',
      countrySearch: 'Search country...',
      phoneLabel: 'Phone',
      phonePlaceholder: 'Number',
      emailPlaceholder: 'you@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or idea...',
      submit: 'Send message',
      sending: 'Sending...',
      toastTitle: 'Message sent!',
      toastDesc: "Thanks for reaching out — I'll get back to you soon.",
      toastErrorTitle: 'Something went wrong',
      toastErrorDesc: 'Could not send your message. Please try again or email me directly.',
    },
    footer: { rights: 'All rights reserved.' },
  },

  pt: {
    langSwitchTo: 'EN',
    cvDownload: 'Baixar currículo',
    copyEmail: 'Copiar e-mail',
    emailCopied: 'E-mail copiado',
    nav: { back: 'Voltar ao início' },
    links: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      courses: 'Formação',
      contact: 'Contato',
    },
    home: {
      greeting: 'Olá.',
      role: 'Desenvolvedor Full Stack .NET',
      intro1:
        `Meu nome é Matheus Alexandre, desenvolvedor full stack baseado no Brasil. Há ${yearsOfExperience} anos construo aplicações modernas e performáticas com C#, .NET, SQL Server, React e Blazor.`,
      intro2:
        'Sou apaixonado por arquitetura limpa, sistemas performáticos e experiências de usuário bem construídas e intuitivas.',
      projectsTitle: 'Projetos',
      exploreTitle: 'Explore',
      stackTitle: 'Stack principal',
      otherStackTitle: 'Também trabalho com',
      scroll: 'Role',
    },
    about: {
      title: 'Sobre',
      heading: 'Desenvolvedor Full Stack .NET',
      body1:
        'Comecei em 2022 mantendo sistemas legados e descobri que gosto justamente da parte difícil: investigar a causa de um bug, entender a fundo uma regra de negócio e transformar uma rotina lenta em instantânea.',
      body2:
        'Me sinto em casa no ecossistema .NET — C#, ASP.NET, Entity Framework e NHibernate — e em bancos de dados relacionais, especialmente SQL Server: modelagem, stored procedures, otimização de consultas e diagnóstico de problemas de concorrência. Hoje levo essa base para projetos modernos com .NET e Blazor.',
    },
    experience: {
      title: 'Experiência',
      role: 'Desenvolvedor Full Stack',
      company: 'Titaniumfix',
      period: '2022 — Atual',
      location: 'Presencial',
      summary:
        'Desenvolvo e mantenho os sistemas internos da empresa: um ERP que cobre todo o ciclo comercial (pedidos, estoque, financeiro e faturamento) e uma plataforma fiscal e financeira integrada para emissão de NF-e, boletos e contas a receber.',
      stats: [
        { value: '80×', label: 'ganho de performance' },
        { value: '1,1 s', label: 'antes ~87 s' },
        { value: `${yearsOfExperience}+`, label: 'anos em sistemas de produção' },
      ],
      highlightsTitle: 'Principais entregas',
      highlights: [
        {
          title: 'Ganho de 80× em performance',
          desc: 'Reescrevi uma rotina crítica baseada em cursor usando MERGE … OUTPUT, trocando centenas de comandos linha a linha por 2 operações em lote: de ~87 s para 1,1 s, com tempo quase constante independente do volume.',
        },
        {
          title: 'Inconsistência silenciosa de dados',
          desc: 'Rastreei registros duplicados até usuários repetindo operações que davam timeout mas já tinham sido concluídas, e bloqueei com sp_getapplock e trava na interface.',
        },
        {
          title: 'Listagem de boletos reconstruída',
          desc: 'Uma tela que travava com grandes volumes de dados passou a paginar e ordenar no banco, via stored procedure com parâmetros tipados, mantendo todas as funções.',
        },
        {
          title: 'Migração de integração legada',
          desc: 'Migrei a emissão de boletos de um componente COM legado para uma API REST moderna.',
        },
        {
          title: 'Bug intermitente em produção',
          desc: 'Descobri que um objeto desatualizado na sessão do NHibernate sobrescrevia alterações feitas por uma procedure; validei a correção com 7 cenários de teste antes de publicar.',
        },
        {
          title: 'Mudanças regulatórias',
          desc: 'CNPJ alfanumérico (IN RFB 2.229/2024) em dois sistemas, rastreabilidade UDI-DI e análise das regras da Reforma Tributária para NF-e de devolução (NT 2025.002).',
        },
        {
          title: 'Diagnóstico de erros',
          desc: 'Fiz a camada de dados preservar a exceção original e o stack trace, o que revelou no mesmo dia a causa de um problema não relacionado.',
        },
      ],
      approachTitle: 'Como trabalho',
      approach: [
        'Medir antes de corrigir: leio o código, as procedures e os triggers, e só faço consultas de leitura em produção.',
        'Mudanças pequenas e reversíveis, com testes e documentação para rollback.',
        'Traduzo problemas técnicos em orientação clara, passo a passo, para os usuários.',
      ],
      stackTitle: 'Stack na Titaniumfix',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Uma seleção do que construí.',
      statusDone: 'Concluído',
      code: 'Código',
      access: 'Acessar',
      highlightsLabel: 'Destaques',
      dima: {
        name: 'Dima — Controle Financeiro',
        category: 'Finanças',
        desc: 'Aplicação full stack de gestão financeira pessoal para controlar receitas e despesas, visualizar gastos e desbloquear recursos premium.',
        highlights: [
          'Controle de receitas e despesas organizado por categorias personalizadas',
          'Dashboard interativo com gráficos mensais (receitas x despesas, por categoria)',
          'Plano premium com integração real de pagamentos via Stripe',
          'Full stack: SPA em Blazor WebAssembly + API .NET 8 + EF Core + SQL Server',
        ],
      },
      vieira: {
        name: 'Vieira Solutions',
        category: 'Web',
        desc: 'Site institucional e landing page para uma agência digital, no ar em produção.',
        highlights: [
          'Formulário de contato que registra os leads no banco de dados',
          'E-mails automáticos de notificação e auto-resposta (MailKit)',
          'Redirecionamento direto para o WhatsApp para contato rápido',
          'Full stack: Blazor WebAssembly + API .NET 10 + EF Core + SQL Server',
        ],
      },
    },
    courses: {
      title: 'Formação & Certificados',
      subtitle: 'Sempre em busca de novos conhecimentos e atualizações tecnológicas.',
      viewCertificate: 'Ver certificado',
      viewDiploma: 'Ver diploma',
      educationTitle: 'Formação',
      degree: {
        title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        school: 'Universidade Paulista (UNIP)',
        year: '2024',
        note: 'Graduação tecnológica',
      },
      certificatesTitle: 'Certificados',
      items: {
        1: {
          title: 'Fundamentos do Blazor Web Assembly',
          desc: 'Criação de Single Page Applications ricas e interativas utilizando C# e WebAssembly.',
        },
        2: {
          title: '.NET Developer Fundamentals',
          desc: 'A plataforma .NET desde a base: runtime, SDK, CLI e estrutura de projetos.',
        },
        3: {
          title: 'Fundamentos do ASP.NET 6',
          desc: 'Conceitos essenciais no ASP.NET 6 para APIs modernas e aplicações baseadas em microserviços.',
        },
        4: {
          title: 'Fundamentos do C#',
          desc: 'Recursos essenciais da linguagem C#: tipos, controle de fluxo e programação orientada a objetos.',
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
      countryLabel: 'País',
      countrySearch: 'Buscar país...',
      phoneLabel: 'Celular',
      phonePlaceholder: 'Número',
      emailPlaceholder: 'voce@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou ideia...',
      submit: 'Enviar mensagem',
      sending: 'Enviando...',
      toastTitle: 'Mensagem enviada!',
      toastDesc: 'Obrigado pelo contato — retorno em breve.',
      toastErrorTitle: 'Algo deu errado',
      toastErrorDesc: 'Não foi possível enviar sua mensagem. Tente novamente ou me envie um e-mail.',
    },
    footer: { rights: 'Todos os direitos reservados.' },
  },
} as const;

export type Translation = (typeof translations)['en'];
