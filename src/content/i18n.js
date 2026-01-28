const translations = {
  en: {
    labels: {
      language: 'Language',
    },
    nav: {
      services: 'Services',
      workshops: 'Workshops',
      projects: 'Projects',
      onPremise: 'On-Premise',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Supercharge your company with AI',
      typewriter: ['for bussiness automation', 'for industrial processes', 'workshops'],
    },
    serviceStatement: {
      text: 'We deliver AI workshops, custom automations, and on-premise infrastructure.',
      cta: 'Book a free strategy call',
    },
    problem: {
      title: 'Sound familiar?',
      painPoints: [
        'Your team tried ChatGPT... now what?',
        "You know AI matters, but don't know where to start",
        "You've talked to consultants who speak only in buzzwords",
        "You're worried about data privacy with cloud AI tools",
        "You need AI expertise but can't justify a full-time hire",
      ],
      transition: "We hear this every week from CTOs and innovation leads. Here's how we help.",
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'AI Workshops & Training',
          description:
            'Hands-on training for technical and non-technical teams. From first prompt to production-ready skills.',
          link: 'Learn more →',
        },
        {
          title: 'AI Automations & Agents',
          description:
            'Custom AI systems that work. Agents, workflows, integrations built for your business.',
          link: 'Learn more →',
        },
        {
          title: 'On-Premise AI Setup',
          description:
            'Local LLMs, RAG systems, private infrastructure. Your data never leaves your servers.',
          link: 'Learn more →',
        },
      ],
    },
    positioning: {
      title: "We've done this before.",
      body: "We've trained teams, built production AI systems, and deployed private infrastructure - in industries where failure isn't an option.",
      stats: [
        {
          number: '500+',
          label: 'people trained',
          subtext: 'From executives to developers',
        },
        {
          number: 'Production AI',
          label: 'in regulated industries',
          subtext: 'Banking, aerospace, industrial',
        },
        {
          number: 'On-prem',
          label: 'systems deployed',
          subtext: 'For data-sensitive organizations',
        },
      ],
    },
    proof: {
      title: 'Seen on big stages',
      events: [
        {
          image: '/gcsummit.png',
          event: 'GOOGLE CLOUD SUMMIT WARSAW 2024',
          venue: 'National Stadium',
          talkTitle: 'AI-Powered Smart Contracts in Next-Gen Banking',
          cta: 'See the event →',
          videoUrl: 'https://youtu.be/HZf2PursXBY?si=BHiau_31EFYc_KIE',
        },
        {
          image: '/maciek-konfa.png',
          event: 'SRIN – EUROPEAN SPACE AGENCY CENTRE FOR EARTH OBSERVATION',
          venue: 'Frascati (Rome), Italy',
          talkTitle: 'Super-resolution satellite AI vision systems',
        },
      ],
    },
    process: {
      title: 'How it works',
      steps: [
        {
          number: '1',
          title: 'Free Strategy Call',
          description: '30 minutes. You talk, we listen. No pitch deck, no pressure.',
        },
        {
          number: '2',
          title: 'Clear Proposal',
          description:
            "Scope, timeline, price. No surprises. You know exactly what you're getting.",
        },
        {
          number: '3',
          title: 'We Deliver',
          description:
            'Workshops, systems, infrastructure - with regular updates and working results.',
        },
        {
          number: '4',
          title: 'You Grow',
          description: "We build capability, not dependency. Our goal: you don't need us forever.",
        },
      ],
    },
    contact: {
      title: 'Ready to start?',
      subtitle: "Not sure where to begin? Most of our clients weren't either.",
      typewriterPrefix: "Let's talk about",
      typewriter: [
        'workshops',
        'on-premise AI',
        'your project',
        'AI agents',
        'automation',
        'custom solutions',
        'AI strategy',
      ],
      primaryCta: 'Book a free 30-min call',
      calendlyUrl: 'https://calendly.com/radiant2-dev/30min',
      formHeading: 'Contact us',
      form: {
        name: 'Name',
        email: 'Email',
        company: 'Company',
        message: 'What do you need help with?',
        submit: 'Send message',
      },
      email: 'Or email directly: radiant2.dev@gmail.com',
    },
    offer: {
      title: 'Our offer',
      subtitle: 'We provide AI consulting for business and industrial applications.',
      items: [
        {
          title: 'AI solutions',
          description:
            'Integrate AI into your business – process documents and analyze data with intelligent systems. Deploy secure AI-solutions using cloud providers or with secure on-premise setup.',
        },
        {
          title: 'Machine learning RnD',
          description:
            'Your company needs ML-based solutions beyond general-purpose AI systems? We apply our RnD knowledge to develop intelligent systems for the most complex business domains.',
        },
        {
          title: 'AI training & workshops',
          description:
            'We provide workshops on cutting edge AI technologies. With us you can learn how to harness the newest AI systems hands-on beyond basic prompting.',
        },
      ],
      training: {
        title: 'Training and workshops',
        who: 'Who is this for?',
        learn: "What you'll learn:",
        items: [
          {
            title: 'AI fundamentals – introduction',
            subtitle:
              'A basic introduction to AI for everyone. Understand what AI can and cannot do, learn practical applications, and work with real tools.',
            who: 'Anyone who wants to understand AI • Teams new to AI • Mixed technical backgrounds',
            learn: [
              'What AI, machine learning, and LLMs are (in plain language)',
              'Understanding the capabilities and limitations of AI',
              'Practical AI tools you can start using today',
              'Basics of prompt engineering',
              'Identifying AI opportunities in your processes',
              'Ethics, bias, and responsible use of AI',
              'Hands-on exercises with popular AI tools',
            ],
          },
          {
            title: 'Secure AI on-premise setup for your company',
            subtitle: 'Hands-on training for infrastructure and ops teams.',
            who: 'Software devlopers • DevOps • IT Administrators',
            learn: [
              'Understand the landscape of open-source LLM models',
              'Learn how to set up LLM on-premise with Ollama',
              'Connect chat UI to your self-hosted LLM',
              'Use self-hosted AI in agentic mode',
              'Build workflows and automation with local AI-powered building blocks',
            ],
          },
        ],
      },
    },
    about: {
      hero: {
        title: 'About Radiant²',
        subtitle: 'Building AI solutions that work',
      },
      story: {
        title: 'Our Story',
      },
      cta: {
        title: "Let's work together",
        subtitle: 'Ready to discuss your AI project?',
        button: 'Get in touch',
      },
    },
    team: {
      title: 'Who we are',
      closing:
        'We started Radiant2 because we saw too many companies burned by AI hype. We only take projects we can deliver.',
      founders: [
        {
          name: 'Wojciech Ptasiński',
          role: 'Co-founder',
          bio: 'R&D Manager with 7+ years shipping AI in banking and satellite systems. Google Cloud Summit speaker. Published researcher in AI and industrial automation.',
          links: {
            linkedin: 'https://www.linkedin.com/in/wojciechptasinski/',
            website: 'https://wptasinski.com',
          },
        },
        {
          name: 'Maciej Ziaja',
          role: 'Co-founder',
          bio: 'PhD candidate in AI for satellite systems. Built AI-based vision systems for the Intuition-1 satellite mission. Published researcher in aerospace and computer vision.',
          links: {
            linkedin: 'https://www.linkedin.com/in/maciej-ziaja-86a422184/',
          },
        },
      ],
    },
    projects: {
      hero: {
        title: 'Custom AI built for your business',
        subtitle: 'End-to-end AI development',
        typewriter: [
          'that scales',
          'that works in production',
          'built for your industry',
          'from POC to deployment',
        ],
        cta: 'Discuss your project',
      },
      whatWeBuild: {
        title: 'What we build',
        items: [
          { title: 'AI Agents', description: 'autonomous task handling' },
          { title: 'Document Processing', description: 'data extraction, analysis, summaries' },
          { title: 'Knowledge Bases', description: 'chatbots trained on your data' },
          { title: 'Process Automation', description: 'LLM-powered workflows' },
          { title: 'Integrations', description: 'connecting your tools with AI' },
          { title: 'Something else?', description: "Let's talk" },
        ],
      },
      howWeWork: {
        title: 'How we work',
        steps: [
          {
            title: 'Discovery',
            description: 'We define the real problem. You get a concrete proposal.',
          },
          {
            title: 'Build',
            description: 'Iterative development. Weekly demos. No surprises.',
          },
          {
            title: 'Deployment',
            description: 'On your infrastructure. Tested. It works.',
          },
          {
            title: 'Handoff',
            description: 'Documentation. Training. Everything is yours.',
          },
        ],
      },
      whatWeDont: {
        title: "What we don't do",
        items: [
          "Demos that don't scale",
          'Slides without implementation',
          "Black boxes you can't maintain",
          "Projects where AI doesn't make sense",
        ],
      },
      industries: {
        text: 'We have deployed AI in banking, aerospace, and manufacturing - where there is no room for error.',
      },
      cta: {
        title: 'Have a project in mind?',
        button: 'Book a call',
        footer: 'Or email: radiant2.dev@gmail.com',
      },
    },
    workshops: {
      hero: {
        title: 'AI training that actually sticks',
        subtitle: 'Hands-on workshops for',
        typewriter: ['developers', 'executives', 'accountants', 'lawyers', 'everyone'],
        cta: 'Book a call',
      },
      whoItsFor: {
        title: "Who it's for",
        items: [
          { title: 'Technical Teams', description: 'Build with LLMs, agents, RAG systems' },
          { title: 'Executives', description: 'Evaluate AI opportunities and risks' },
          { title: 'Mixed Teams', description: 'Cross-functional AI adoption' },
          { title: 'HR / L&D', description: 'Upskilling programs at scale' },
        ],
      },
      modules: {
        title: 'Choose your modules',
        subtitle:
          "We build your workshop from proven modules. Pick what matters. Skip what doesn't.",
        items: [
          {
            title: 'Foundations',
            content: [
              "AI landscape: what's real vs. hype",
              'LLMs, agents, embeddings explained',
              'Prompt engineering fundamentals',
            ],
            tag: 'Best for: All levels',
          },
          {
            title: 'Prompt Engineering',
            content: [
              'Advanced prompting techniques',
              'Chain-of-thought, few-shot learning',
              'AI workflows',
              'Hands-on with real use cases',
            ],
            tag: 'Best for: All levels',
          },
          {
            title: 'Building Agents',
            content: [
              'Agent architectures',
              'Tools and function calling',
              'Building your first agent',
            ],
            tag: 'Best for: Developers',
          },
          {
            title: 'RAG Systems',
            content: [
              'Retrieval-augmented generation',
              'Vector databases and embeddings',
              'Building a knowledge base',
            ],
            tag: 'Best for: Developers, data teams',
          },
          {
            title: 'AI in Your Workflow',
            content: [
              'Identifying automation opportunities',
              'API integrations',
              'Your use cases, workshopped live',
            ],
            tag: 'Best for: Teams with specific goals',
          },
          {
            title: 'Custom Module',
            content: ['Something specific?', "We'll design it together."],
            tag: null,
          },
        ],
      },
      formats: {
        title: 'Formats',
        items: [
          {
            title: 'Half-day',
            duration: '4 hours',
            description: '2-3 modules. First exposure or focused skill-building.',
          },
          {
            title: 'Full-day',
            duration: '8 hours',
            description: 'Deep training with hands-on work.',
          },
          {
            title: 'Multi-day',
            duration: 'Custom',
            description: 'Full curriculum. Organization-wide programs.',
          },
        ],
      },
      whyUs: {
        title: 'Why us',
        body: 'We deliver training that works. Real expertise, real examples, real results.',
        stats: [
          {
            number: '500+',
            label: 'people trained',
            subtext: 'From executives to developers',
          },
          {
            number: 'Practitioners',
            label: 'not theorists',
            subtext: 'Teaching what we build in production',
          },
          {
            number: 'Real projects',
            label: 'not toy examples',
            subtext: 'Training based on actual use cases',
          },
        ],
      },
      cta: {
        title: 'Ready to train your team?',
        subtitle:
          "Book a call to discuss your training needs. We'll design the right program for you.",
        button: 'Book a call',
      },
    },
    onPrem: {
      hero: {
        title: 'AI on your infrastructure',
        subtitle: 'Private AI systems',
        typewriter: [
          'for sensitive data',
          'with full control',
          'behind your firewall',
          'air-gapped deployments',
        ],
        cta: 'Discuss your setup',
      },
    },
    footer: {
      email: 'radiant2.dev@gmail.com',
      copyright: '© 2025 Radiant2',
    },
  },
  pl: {
    labels: {
      language: 'Język',
    },
    nav: {
      services: 'Usługi',
      workshops: 'Warsztaty',
      projects: 'Projekty',
      onPremise: 'Lokalne AI',
      about: 'O nas',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Przyspiesz rozwój firmy dzięki AI',
      typewriter: ['w automatyzacji biznesu', 'w procesach przemysłowych', 'poprzez warsztaty'],
    },
    serviceStatement: {
      text: 'Dostarczamy warsztaty AI, automatyzacje na zamówienie oraz infrastrukturę on-premise.',
      cta: 'Umów bezpłatną konsultację',
    },
    problem: {
      title: 'Znasz to?',
      painPoints: [
        'Twój zespół przetestował ChatGPT... i co teraz?',
        'Wiesz, że AI ma znaczenie, ale nie wiesz, od czego zacząć',
        'Rozmawiałeś z konsultantami, którzy rzucają tylko "buzzwordami"',
        'Obawiasz się o bezpieczeństwo danych w chmurowych narzędziach AI',
        'Potrzebujesz kompetencji AI, ale etat się nie spina',
      ],
      transition: 'Słyszymy to co tydzień od różnych firm. Oto, jak pomagamy.',
    },
    services: {
      title: 'Usługi',
      items: [
        {
          title: 'Warsztaty i szkolenia AI',
          description:
            'Praktyczne szkolenia dla zespołów technicznych i biznesowych. Od pierwszego prompta do gotowości produkcyjnej.',
          link: 'Więcej',
        },
        {
          title: 'Automatyzacje i agenci AI',
          description:
            'Dedykowane systemy AI, które działają. Agenci, automatyzacje, integracje szyte pod Twój biznes.',
          link: 'Więcej',
        },
        {
          title: 'AI na Twojej infrastrukturze',
          description:
            'Lokalne modele, systemy RAG, prywatna infrastruktura. Twoje dane nie wychodzą z Twoich serwerów.',
          link: 'Więcej',
        },
      ],
    },
    positioning: {
      title: 'Mamy to przećwiczone.',
      body: 'Szkoliliśmy zespoły, budowaliśmy produkcyjne systemy AI i wdrażaliśmy prywatną infrastrukturę — w branżach, gdzie nie ma miejsca na błędy.',
      stats: [
        {
          number: '500+',
          label: 'PRZESZKOLONYCH',
          subtext: 'Od zarządu po programistów',
        },
        {
          number: 'AI produkcyjne',
          label: 'W REGULOWANYCH BRANŻACH',
          subtext: 'Bankowość, aerospace, przemysł',
        },
        {
          number: 'Wdrożone',
          label: 'SYSTEMY LOKALNE',
          subtext: 'Dla firm z wrażliwymi danymi',
        },
      ],
    },
    proof: {
      title: 'Występowaliśmy na dużych scenach',
      events: [
        {
          image: '/gcsummit.png',
          event: 'GOOGLE CLOUD SUMMIT WARSAW 2024',
          venue: 'Stadion Narodowy',
          talkTitle: 'AI-Powered Smart Contracts in Next-Gen Banking',
          cta: 'Zobacz, jak było na wydarzenie',
          videoUrl: 'https://youtu.be/HZf2PursXBY?si=BHiau_31EFYc_KIE',
        },
        {
          image: '/maciek-konfa.png',
          event: 'SRIN – EUROPEAN SPACE AGENCY CENTRE FOR EARTH OBSERVATION',
          venue: 'Frascati (Rzym), Włochy',
          talkTitle: 'Systemy wizji AI super-rozdzielczości satelitarnej',
        },
      ],
    },
    process: {
      title: 'Jak działamy',
      steps: [
        {
          number: '1',
          title: 'Bezpłatna rozmowa',
          description: '30 minut. Ty mówisz, my słuchamy. Bez pitchowania, bez presji.',
        },
        {
          number: '2',
          title: 'Konkretna oferta',
          description: 'Zakres, terminy, cena. Bez niespodzianek. Wiesz dokładnie, co dostajesz.',
        },
        {
          number: '3',
          title: 'Realizujemy',
          description:
            'Warsztaty, systemy, infrastruktura — z regularnymi aktualizacjami i działającymi wynikami.',
        },
        {
          number: '4',
          title: 'Rozwijasz się',
          description: 'Budujemy Twoje kompetencje, nie zależność.',
        },
      ],
    },
    contact: {
      title: 'Gotowy do startu?',
      subtitle: 'Nie wiesz, od czego zacząć? Większość naszych klientów też nie wiedziała.',
      typewriterPrefix: 'Porozmawiajmy o',
      typewriter: [
        'warsztatach',
        'AI on-premise',
        'Twoim projekcie',
        'agentach AI',
        'automatyzacji',
        'rozwiązaniach na zamówienie',
        'strategii AI',
      ],
      primaryCta: 'Umów pierwszą rozmowę (30 min)',
      calendlyUrl: 'https://calendly.com/radiant2-dev/30min',
      formHeading: 'Skontaktuj się z nami',
      form: {
        name: 'Imię',
        email: 'Email',
        company: 'Firma',
        message: 'Czego potrzebujesz?',
        submit: 'Wyślij',
      },
      email: 'Lub mailowo: radiant2.dev@gmail.com',
    },
    offer: {
      title: 'Nasza oferta',
      subtitle: 'Dostarczamy doradztwo AI dla biznesu i zastosowań przemysłowych.',
      items: [
        {
          title: 'Rozwiązania AI',
          description:
            'Integrujemy AI z Twoim biznesem – przetwarzamy dokumenty i analizujemy dane z inteligentnymi systemami. Wdrażamy bezpieczne rozwiązania AI w chmurze lub w bezpiecznym on-premise setup.',
        },
        {
          title: 'Machine Learning RnD',
          description:
            'Potrzebujesz rozwiązań ML wykraczających poza uniwersalne systemy AI? Wykorzystujemy nasze know-how RnD, aby tworzyć inteligentne systemy dla najbardziej złożonych domen biznesowych.',
        },
        {
          title: 'Szkolenia i warsztaty AI',
          description:
            'Prowadzimy warsztaty z cutting edge technologii AI. Z nami nauczysz się praktycznie wykorzystywać najnowsze systemy AI, wykraczając poza podstawowe promptowanie.',
        },
      ],
      training: {
        title: 'Szkolenia i warsztaty',
        who: 'Dla kogo?',
        learn: 'Czego się nauczysz:',
        items: [
          {
            title: 'Podstawy AI – wprowadzenie',
            subtitle:
              'Podstawowe wprowadzenie do AI dla każdego. Zrozumiesz, co AI potrafi, a czego nie, poznasz praktyczne zastosowania i będziesz pracować na realnych narzędziach.',
            who: 'Każdy, kto chce zrozumieć AI • Zespoły nowe w AI • Różne profile techniczne',
            learn: [
              'Czym są AI, machine learning i LLM-y (prostym językiem)',
              'Zrozumienie możliwości i ograniczeń AI',
              'Praktyczne narzędzia AI, z których możesz korzystać od razu',
              'Podstawy prompt engineering',
              'Identyfikowanie miejsc, gdzie AI może pomóc w Twoich procesach',
              'Etyka, bias i odpowiedzialne użycie AI',
              'Ćwiczenia hands-on z popularnymi narzędziami AI',
            ],
          },
          {
            title: 'Bezpieczny on-premise setup AI dla Twojej firmy',
            subtitle: 'Szkolenie praktyczne dla zespołów infrastruktury i ops.',
            who: 'Software developers • DevOps • IT Administrators',
            learn: [
              'Poznasz krajobraz open-source modeli LLM',
              'Dowiesz się, jak uruchomić LLM on-premise z Ollama',
              'Połączysz interfejs czatu z własnym LLM',
              'Wykorzystasz self-hosted AI w trybie agentic',
              'Zbudujesz workflowy i automatyzacje z lokalnych komponentów AI',
            ],
          },
        ],
      },
    },
    about: {
      hero: {
        title: 'O Radiant²',
        subtitle: 'Budujemy rozwiązania AI, które działają',
      },
      story: {
        title: 'Nasza historia',
      },
      cta: {
        title: 'Współpracujmy razem',
        subtitle: 'Gotowy, by omówić swój projekt AI?',
        button: 'Skontaktuj się',
      },
    },
    team: {
      title: 'Zespół',
      closing:
        'Założyliśmy Radiant2, bo widzieliśmy zbyt wiele firm, które przepaliły budżet na AI bez efektów. Bierzemy tylko projekty, które jesteśmy w stanie dowieźć.',
      founders: [
        {
          name: 'Wojciech Ptasiński',
          role: 'Współzałożyciel',
          bio: 'R&D Manager z ponad 7-letnim doświadczeniem w AI dla bankowości i systemów satelitarnych. Prelegent Google Cloud Summit. Autor publikacji naukowych z AI i automatyki przemysłowej.',
          links: {
            linkedin: 'https://www.linkedin.com/in/wojciechptasinski/',
            website: 'https://wptasinski.com',
          },
        },
        {
          name: 'Maciej Ziaja',
          role: 'Współzałożyciel',
          bio: 'Doktorant — AI dla systemów satelitarnych. Twórca systemów wizyjnych AI dla misji Intuition-1. Autor publikacji z zakresu kosmonautyki i widzenia komputerowego.',
          links: {
            linkedin: 'https://www.linkedin.com/in/maciej-ziaja-86a422184/',
          },
        },
      ],
    },
    projects: {
      hero: {
        title: 'AI szyte pod Twój biznes',
        subtitle: 'Kompleksowe rozwiązania AI',
        typewriter: [
          'które skalują się',
          'gotowe na produkcję',
          'szyte pod Twoją branżę',
          'od POC do wdrożenia',
        ],
        cta: 'Porozmawiajmy',
      },
      whatWeBuild: {
        title: 'Co budujemy',
        items: [
          { title: 'Agenci AI', description: 'autonomiczna obsługa zadań' },
          {
            title: 'Przetwarzanie dokumentów',
            description: 'wyciąganie danych, analiza, streszczenia',
          },
          { title: 'Bazy wiedzy', description: 'chatboty trenowane na Twoich danych' },
          { title: 'Automatyzacja procesów', description: 'procesy wspierane przez LLM' },
          { title: 'Integracje', description: 'łączymy Twoje narzędzia z AI' },
          { title: 'Coś innego?', description: 'Porozmawiajmy' },
        ],
      },
      howWeWork: {
        title: 'Jak pracujemy',
        steps: [
          {
            title: 'Rozpoznanie',
            description: 'Definiujemy prawdziwy problem. Dostajesz konkretną ofertę.',
          },
          {
            title: 'Budowa',
            description: 'Iteracyjny rozwój. Co tydzień demo. Bez niespodzianek.',
          },
          {
            title: 'Wdrożenie',
            description: 'Na Twojej infrastrukturze. Przetestowane. Działa.',
          },
          {
            title: 'Przekazanie',
            description: 'Dokumentacja. Szkolenie. Wszystko Twoje.',
          },
        ],
      },
      whatWeDont: {
        title: 'Czego nie robimy',
        items: [
          'Dema, które nie skalują',
          'Slajdów bez wdrożenia',
          'Czarnych skrzynek, których nie utrzymasz',
          'Projektów, gdzie AI nie ma sensu',
        ],
      },
      industries: {
        text: 'Wdrażaliśmy AI w bankowości, aerospace i przemyśle — tam, gdzie nie ma miejsca na błędy.',
      },
      cta: {
        title: 'Masz pomysł na projekt?',
        button: 'Umów rozmowę',
        footer: 'Lub mailowo: radiant2.dev@gmail.com',
      },
    },
    workshops: {
      hero: {
        title: 'Warsztaty AI, które naprawdę zostają',
        subtitle: 'Praktyczne szkolenia dla',
        typewriter: ['programistów', 'zarządu', 'księgowych', 'prawników', 'każdego'],
        cta: 'Umów rozmowę',
      },
      whoItsFor: {
        title: 'Dla kogo',
        items: [
          {
            title: 'Zespoły techniczne',
            description: 'Naucz się budować z LLM-ami, agentami i RAG',
          },
          { title: 'Zarząd i menadżerowie', description: 'Oceń szanse i ryzyka związane z AI' },
          { title: 'Zespoły mieszane', description: 'Wdrożenie AI w całej organizacji' },
          { title: 'HR / Rozwój', description: 'Programy rozwoju kompetencji' },
        ],
      },
      modules: {
        title: 'Wybierz moduły',
        subtitle:
          'Składamy warsztat ze sprawdzonych modułów. Wybierasz, co istotne. Resztę pomijamy.',
        items: [
          {
            title: 'Podstawy',
            content: [
              'Rynek AI: co działa, a co to hype',
              'LLM-y, agenci, embeddingi — prosto wyjaśnione',
              'Podstawy prompt engineeringu',
            ],
            tag: 'Dla: Każdego poziomu',
          },
          {
            title: 'Prompt Engineering',
            content: [
              'Zaawansowane techniki promptowania',
              'Chain-of-thought, few-shot learning',
              'Przepływy pracy z AI',
              'Praktyka na prawdziwych przypadkach',
            ],
            tag: 'Dla: Każdego poziomu',
          },
          {
            title: 'Budowanie agentów',
            content: [
              'Architektury agentów',
              'Narzędzia i function calling',
              'Budowa pierwszego agenta',
            ],
            tag: 'Dla: Programistów',
          },
          {
            title: 'Systemy RAG',
            content: [
              'Retrieval-Augmented Generation',
              'Bazy wektorowe i embeddingi',
              'Budowa bazy wiedzy',
            ],
            tag: 'Dla: Programistów, zespołów data',
          },
          {
            title: 'AI w Twojej pracy',
            content: [
              'Gdzie warto automatyzować',
              'Integracje przez API',
              'Twoje przypadki — rozwiązane na żywo',
            ],
            tag: 'Dla: Zespołów z konkretnymi celami',
          },
          {
            title: 'Moduł na zamówienie',
            content: ['Masz specyficzną potrzebę?', 'Zaprojektujemy razem.'],
            tag: null,
          },
        ],
      },
      formats: {
        title: 'Formaty',
        items: [
          {
            title: 'Pół dnia',
            duration: '4 godz.',
            description: '2–3 moduły. Na start lub do konkretnego tematu.',
          },
          {
            title: 'Cały dzień',
            duration: '8 godz.',
            description: 'Dogłębne szkolenie z praktyką.',
          },
          {
            title: 'Kilkudniowe',
            duration: 'Ustalamy indywidualnie',
            description: 'Pełny program. Szkolenia dla całej firmy.',
          },
        ],
      },
      whyUs: {
        title: 'Dlaczego my',
        body: 'Prowadzimy szkolenia, które działają. Prawdziwa wiedza, prawdziwe przykłady, prawdziwe rezultaty.',
        stats: [
          {
            number: '500+',
            label: 'przeszkolonych',
            subtext: 'Od zarządu po programistów',
          },
          {
            number: 'Praktycy',
            label: 'nie teoretycy',
            subtext: 'Uczymy tego, co budujemy w produkcji',
          },
          {
            number: 'Prawdziwe projekty',
            label: 'nie demo',
            subtext: 'Szkolenia oparte na realnych przypadkach',
          },
        ],
      },
      cta: {
        title: 'Zaprojektujmy Twój warsztat',
        subtitle: 'Opowiedz o zespole. Dobierzemy moduły i format.',
        button: 'Umów rozmowę',
        footer: 'Lub mailowo: hello@radiant2.dev',
      },
    },
    onPrem: {
      hero: {
        title: 'AI na Twojej infrastrukturze',
        subtitle: 'Prywatne systemy AI',
        typewriter: [
          'dla wrażliwych danych',
          'z pełną kontrolą',
          'za twoim firewallem',
          'systemy izolowane',
        ],
        cta: 'Porozmawiajmy o setupie',
      },
    },
    footer: {
      email: 'radiant2.dev@gmail.com',
      copyright: '© 2025 Radiant2',
    },
  },
};

export default translations;
