const translations = {
  en: {
    labels: {
      language: 'Language',
    },
    nav: {
      services: 'Services',
      team: 'Team',
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
      subtitle: "Not sure where to begin? Most of our clients weren't either. Let's talk.",
      primaryCta: 'Book a free 30-min call',
      calendlyUrl: 'https://calendly.com/radiant2-dev/30min',
      formHeading: 'Prefer to write?',
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
            linkedin: '#',
          },
        },
      ],
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
      team: 'Zespół',
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
      title: 'Brzmi znajomo?',
      painPoints: [
        'Twój zespół wypróbował ChatGPT... i co dalej?',
        'Wiesz, że AI jest ważne, ale nie wiesz od czego zacząć',
        'Rozmawiałeś z konsultantami, którzy mówią tylko buzzwordami',
        'Martwisz się o prywatność danych przy chmurowych narzędziach AI',
        'Potrzebujesz ekspertyzy AI, ale nie możesz uzasadnić pełnoetatowego zatrudnienia',
      ],
      transition: 'Słyszymy to co tydzień od CTO i liderów innowacji. Tak możemy pomóc.',
    },
    services: {
      title: 'Nasze usługi',
      items: [
        {
          title: 'Warsztaty i szkolenia AI',
          description:
            'Praktyczne szkolenia dla zespołów technicznych i nietechnicznych. Od pierwszego prompta do umiejętności produkcyjnych.',
          link: 'Dowiedz się więcej →',
        },
        {
          title: 'Automatyzacje i agenty AI',
          description:
            'Niestandardowe systemy AI, które działają. Agenty, workflow, integracje budowane dla Twojego biznesu.',
          link: 'Dowiedz się więcej →',
        },
        {
          title: 'Infrastruktura AI on-premise',
          description:
            'Lokalne LLM-y, systemy RAG, prywatna infrastruktura. Twoje dane nigdy nie opuszczają serwerów.',
          link: 'Dowiedz się więcej →',
        },
      ],
    },
    positioning: {
      title: 'Mamy to już za sobą.',
      body: 'Szkoliliśmy zespoły, budowaliśmy produkcyjne systemy AI i wdrażaliśmy prywatną infrastrukturę - w branżach, gdzie porażka nie wchodzi w grę.',
      stats: [
        {
          number: '500+',
          label: 'przeszkolonych osób',
          subtext: 'Od kadry zarządzającej po deweloperów',
        },
        {
          number: 'Produkcyjne AI',
          label: 'w regulowanych branżach',
          subtext: 'Bankowość, aerospace, przemysł',
        },
        {
          number: 'Systemy on-prem',
          label: 'wdrożone',
          subtext: 'Dla organizacji dbających o dane',
        },
      ],
    },
    proof: {
      title: 'Widziani na dużych scenach',
      events: [
        {
          image: '/gcsummit.png',
          event: 'GOOGLE CLOUD SUMMIT WARSAW 2024',
          venue: 'Stadion Narodowy',
          talkTitle: 'AI-Powered Smart Contracts in Next-Gen Banking',
          cta: 'Zobacz wydarzenie →',
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
      title: 'Jak to działa',
      steps: [
        {
          number: '1',
          title: 'Bezpłatna konsultacja',
          description: '30 minut. Ty mówisz, my słuchamy. Bez prezentacji, bez presji.',
        },
        {
          number: '2',
          title: 'Jasna propozycja',
          description: 'Zakres, timeline, cena. Bez niespodzianek. Wiesz dokładnie co dostajesz.',
        },
        {
          number: '3',
          title: 'Dostarczamy',
          description:
            "Warsztaty, systemy, infrastruktura - z regularnymi update'ami i działającymi wynikami.",
        },
        {
          number: '4',
          title: 'Ty się rozwijasz',
          description:
            'Budujemy kompetencje, nie zależność. Nasz cel: nie potrzebujesz nas na zawsze.',
        },
      ],
    },
    contact: {
      title: 'Gotowy żeby zacząć?',
      subtitle:
        'Nie wiesz od czego zacząć? Większość naszych klientów też nie wiedziała. Porozmawiajmy.',
      primaryCta: 'Umów bezpłatną rozmowę (30 min)',
      calendlyUrl: 'https://calendly.com/radiant2-dev/30min',
      formHeading: 'Wolisz napisać?',
      form: {
        name: 'Imię i nazwisko',
        email: 'Email',
        company: 'Firma',
        message: 'W czym możemy pomóc?',
        submit: 'Wyślij wiadomość',
      },
      email: 'Lub bezpośrednio na email: radiant2.dev@gmail.com',
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
    team: {
      title: 'Kim jesteśmy',
      closing:
        'Założyliśmy Radiant2, bo widzieliśmy zbyt wiele firm spalonych przez AI hype. Bierzemy tylko projekty, które możemy zrealizować.',
      founders: [
        {
          name: 'Wojciech Ptasiński',
          role: 'Współzałożyciel',
          bio: 'R&D Manager z 7+ latami wdrażania AI w bankowości i systemach satelitarnych. Prelegent Google Cloud Summit. Publikujący badacz w dziedzinie AI i automatyki przemysłowej.',
          links: {
            linkedin: 'https://www.linkedin.com/in/wojciechptasinski/',
            website: 'https://wptasinski.com',
          },
        },
        {
          name: 'Maciej Ziaja',
          role: 'Współzałożyciel',
          bio: 'Doktorant z zakresu AI dla systemów satelitarnych. Zbudował systemy wizji AI dla misji satelitarnej Intuition-1. Publikujący badacz w dziedzinie aerospace i computer vision.',
          links: {
            linkedin: '#',
          },
        },
      ],
    },
    footer: {
      email: 'radiant2.dev@gmail.com',
      copyright: '© 2025 Radiant2',
    },
  },
};

export default translations;
