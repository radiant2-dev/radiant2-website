import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function Header({ content, language, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { href: '#offer', label: content.nav.offer },
    { href: '#team', label: content.nav.team },
    { href: '#contact', label: content.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition ${
        isScrolled ? 'bg-white/80 backdrop-blur-2xl' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-6">
        <span className="text-lg font-semibold tracking-wide">
          Radiant<sup>2</sup>
        </span>
        <nav
          className="ml-auto flex items-center gap-4 text-sm font-normal text-slate-700"
          aria-label="Primary"
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 py-1.5 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="h-5 w-[1.5px] bg-slate-500" aria-hidden="true" />
        <div
          className="flex items-center gap-1 text-xs font-semibold text-slate-700"
          role="group"
          aria-label={content.labels.language}
        >
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            className={`rounded-full px-3 py-1 transition ${
              language === 'en'
                ? 'text-slate-900 underline decoration-[1.5px] decoration-slate-700 underline-offset-4'
                : 'text-slate-500 hover:text-slate-900'
            }`}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('pl')}
            className={`rounded-full px-3 py-1 transition ${
              language === 'pl'
                ? 'text-slate-900 underline decoration-[1.5px] decoration-slate-700 underline-offset-4'
                : 'text-slate-500 hover:text-slate-900'
            }`}
            aria-pressed={language === 'pl'}
          >
            PL
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection({ content, language }) {
  return (
    <section
      id="home"
      className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20"
    >
      <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
        <h2 className="text-5xl font-semibold sm:text-6xl">
          Radiant<sup>2</sup>
        </h2>
        <h3
          className="text-3xl font-mono"
          style={{ textShadow: '0 0 64px rgba(255, 255, 255, 0.6)' }}
        >
          {content.hero.title}{' '}
          <Typewriter
            key={language}
            options={{
              strings: content.hero.typewriter,
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </section>
  );
}

function OfferSection({ content }) {
  return (
    <section id="offer" className="space-y-3">
      <h2 className="text-3xl font-semibold">{content.offer.title}</h2>
      <p className="text-sm text-slate-600 font-semibold">{content.offer.subtitle}</p>
      <div className="grid gap-12 pt-2 text-sm text-slate-700 sm:grid-cols-3">
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">{content.offer.items[0].title}</h3>
          <p className="text-sm text-slate-600">{content.offer.items[0].description}</p>
          <p></p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">{content.offer.items[1].title}</h3>
          <p className="text-sm text-slate-600">{content.offer.items[1].description}</p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">{content.offer.items[2].title}</h3>
          <p className="text-sm text-slate-600">{content.offer.items[2].description}</p>
        </div>
      </div>

      <h3 id="training" className="pt-6 text-2xl font-semibold text-slate-900">
        {content.offer.training.title}
      </h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-slate-900 group-hover:underline">
                {content.offer.training.items[0].title}
              </span>
              <span className="text-xs font-normal text-slate-600">
                {content.offer.training.items[0].subtitle}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <span className="font-semibold">{content.offer.training.who}</span>
            <p className="text-slate-700">{content.offer.training.items[0].who}</p>

            <span className="font-semibold">{content.offer.training.learn}</span>
            <ul className="text-slate-700 list-disc pl-5 space-y-2">
              {content.offer.training.items[0].learn.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-slate-900 group-hover:underline">
                {content.offer.training.items[1].title}
              </span>
              <span className="text-xs font-normal text-slate-600">
                {content.offer.training.items[1].subtitle}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <span className="font-semibold">{content.offer.training.who}</span>
            <p className="text-slate-700">{content.offer.training.items[1].who}</p>

            <span className="font-semibold">{content.offer.training.learn}</span>
            <ul className="text-slate-700 list-disc pl-5 space-y-2">
              {content.offer.training.items[1].learn.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function TeamSection({ content }) {
  return (
    <section id="team" className="space-y-3">
      <h2 className="text-3xl font-semibold">{content.team.title}</h2>
      <p className="text-sm text-slate-600  max-w-192">{content.team.subtitle}</p>
      <h3 className="pt-2 text-xl font-semibold text-slate-900">{content.team.founders}</h3>
      <div className="grid gap-16 pt-2 text-sm text-slate-700 sm:grid-cols-2">
        <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
          <h3 className="text-lg font-semibold text-slate-900">Wojciech Ptasiński</h3>
          <h2 className="font-semibold text-slate-600">{content.team.roles.coFounder}</h2>
          <p className="text-sm text-slate-600">{content.team.founderBios[0]}</p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
          <h3 className="text-lg font-semibold text-slate-900">Maciej Ziaja</h3>
          <h2 className="font-semibold text-slate-600">{content.team.roles.coFounder}</h2>
          <p className="text-sm text-slate-600">{content.team.founderBios[1]}</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ content }) {
  return (
    <footer id="contact" className="border-t border-slate-900 bg-black text-slate-100">
      <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm">
        <h2 className="text-xl font-semibold">{content.footer.title}</h2>
        <p className="text-sm text-slate-300 max-w-128">
          {content.footer.text}{' '}
          <a href="https://www.linkedin.com/in/wojciechptasinski/" className="underline">
            LinkedIn
          </a>{' '}
          {content.footer.textAfterLink}
        </p>
      </div>
    </footer>
  );
}

function App() {
  const translations = {
    en: {
      labels: {
        language: 'Language',
      },
      nav: {
        offer: 'Offer',
        team: 'Team',
        contact: 'Contact',
      },
      hero: {
        title: 'Supercharge your company with AI',
        typewriter: ['for bussiness automation', 'for industrial processes', 'workshops'],
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
        title: 'Our Team',
        subtitle:
          'We are AI specialists with experience in business, industrial applications, and research. We work in places where AI meets real-world challenges to make measurable impact.',
        founders: 'Meet our founders',
        roles: {
          coFounder: 'Co-founder',
        },
        founderBios: [
          "AI RnD Lead with 7+ years across financial and industrial sectors, delivering cutting-edge innovations - highlighted by AI solutions for Europe's #1 bank. He architects production-grade AI systems, agentic apps, and integrations driving business automation. A Google Cloud Summit Warsaw speaker, he leads specialized AI workshops for enterprises.",
          "AI specialist with 5+ years of experience in RnD development and academic resaerch in frontier domains such as aerospace. Maciej has built AI-based vision system onboard satellite mission Intuition-1. He's been active in publishing research papers and scientific conferences and is about to finish his PhD in AI for satellite systems.",
        ],
      },
      footer: {
        title: 'Contact',
        text: 'Reach out to us at',
        textAfterLink:
          'to discuss how Radiant\u00b2 can help your business leverage AI for automation and innovation.',
      },
    },
    pl: {
      labels: {
        language: 'Język',
      },
      nav: {
        offer: 'Oferta',
        team: 'Zespół',
        contact: 'Kontakt',
      },
      hero: {
        title: 'Przyspiesz rozwój firmy dzięki AI',
        typewriter: ['w automatyzacji biznesu', 'w procesach przemysłowych', 'poprzez warsztaty'],
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
        title: 'Nasz zespół',
        subtitle:
          'Jesteśmy specjalistami AI z doświadczeniem w biznesie, zastosowaniach przemysłowych i badaniach. Pracujemy tam, gdzie AI spotyka realne wyzwania, aby dostarczać mierzalny wpływ.',
        founders: 'Poznaj naszych założycieli',
        roles: {
          coFounder: 'Współzałożyciel',
        },
        founderBios: [
          'AI RnD Lead z ponad 7-letnim doświadczeniem w sektorach finansowym i przemysłowym, dostarczający cutting-edge innowacje – wyróżnione wdrożeniami AI dla #1 banku w Europie. Projektuje production-grade systemy AI, agentic apps oraz integracje napędzające automatyzację biznesu. Prelegent Google Cloud Summit Warsaw, prowadzi wyspecjalizowane warsztaty AI dla przedsiębiorstw.',
          'Specjalista AI z 5+ latami doświadczenia w RnD i badaniach akademickich w frontier domains, m.in. aerospace. Maciej zbudował AI-based vision system na potrzeby misji satelitarnej Intuition-1. Aktywnie publikuje prace naukowe i uczestniczy w konferencjach, a także kończy PhD z AI dla systemów satelitarnych.',
        ],
      },
      footer: {
        title: 'Kontakt',
        text: 'Skontaktuj się z nami przez',
        textAfterLink:
          'i porozmawiajmy o tym, jak Radiant\u00b2 może pomóc Twojemu biznesowi wykorzystać AI do automatyzacji i innowacji.',
      },
    },
  };

  const [language, setLanguage] = useState('en');
  const content = translations[language] ?? translations.en;

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
      return;
    }

    if (window.navigator.language?.toLowerCase().startsWith('pl')) {
      setLanguage('pl');
    }
  }, []);

  const handleLanguageChange = nextLanguage => {
    setLanguage(nextLanguage);
    window.localStorage.setItem('language', nextLanguage);
  };

  return (
    <div className="min-h-screen bg-black text-slate-900">
      <div className="bg-white">
        <Header content={content} language={language} onLanguageChange={handleLanguageChange} />
        <HeroSection content={content} language={language} />
        <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
          <OfferSection content={content} />
          <TeamSection content={content} />
        </main>
      </div>

      <Footer content={content} />
    </div>
  );
}

export default App;
