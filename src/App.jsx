import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import translations from './content/i18n';

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
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-4 py-3 sm:h-16 sm:flex-nowrap sm:gap-6 sm:px-6 sm:py-0">
        <span className="flex-shrink-0 text-lg font-semibold tracking-wide">
          Radiant<sup>2</sup>
        </span>
        <nav
          className="order-3 flex w-full flex-wrap items-center gap-2 text-sm font-normal text-slate-700 sm:order-none sm:ml-auto sm:w-auto sm:flex-nowrap sm:gap-4"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-2 py-1 text-xs transition hover:text-slate-900 sm:py-1.5 sm:text-sm ${
                index === 0 ? 'pl-0 sm:pl-2' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <span className="hidden h-5 w-[1.5px] bg-slate-500 sm:block" aria-hidden="true" />
        <div
          className="order-2 ml-auto flex items-center gap-1 text-xs font-semibold text-slate-700 sm:order-none sm:ml-0"
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
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }

    if (window.navigator.language?.toLowerCase().startsWith('pl')) {
      return 'pl';
    }

    return 'en';
  });
  const content = translations[language] ?? translations.en;

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
