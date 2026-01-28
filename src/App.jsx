import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import translations from './content/i18n';
import Home from './pages/Home';
import Workshops from './pages/Workshops';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import OnPrem from './pages/OnPrem';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Header({ content, language, onLanguageChange }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/workshops', label: 'Workshops' },
    { to: '/projects', label: 'Projects' },
    { to: '/on-prem', label: 'On-Prem' },
    { to: '/about', label: content.nav.about },
    { to: '/contact', label: content.nav.contact },
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
        <Link to="/" className="flex-shrink-0 text-lg font-semibold tracking-wide">
          Radiant<sup>2</sup>
        </Link>
        <nav
          className="order-3 flex w-full flex-wrap items-center gap-2 text-sm font-normal text-slate-700 sm:order-none sm:ml-auto sm:w-auto sm:flex-nowrap sm:gap-4"
          aria-label="Primary"
        >
          {navLinks.map((link, index) => {
            const isActive = !link.hash && location.pathname === link.to;
            return link.hash ? (
              <a
                key={link.to}
                href={link.to}
                className={`px-2 py-1 text-xs transition hover:text-slate-900 sm:py-1.5 sm:text-sm ${
                  index === 0 ? 'pl-0 sm:pl-2' : ''
                }`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-2 py-1 text-xs transition hover:text-slate-900 sm:py-1.5 sm:text-sm ${
                  index === 0 ? 'pl-0 sm:pl-2' : ''
                } ${
                  isActive
                    ? 'underline decoration-[0.5px] decoration-slate-700 underline-offset-4'
                    : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
                ? 'text-slate-900 underline decoration-[0.5px] decoration-slate-700 underline-offset-4'
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
                ? 'text-slate-900 underline decoration-[0.5px] decoration-slate-700 underline-offset-4'
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

function Footer({ content }) {
  return (
    <footer className="border-t border-neutral-700 bg-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-sm">
          <a
            href={`mailto:${content.footer.email}`}
            className="text-white underline decoration-[0.5px] underline-offset-4 hover:text-neutral-300"
          >
            {content.footer.email}
          </a>
        </p>
        <p className="pt-4 text-xs text-neutral-400">{content.footer.copyright}</p>
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
    <div className="min-h-screen bg-white text-slate-900">
      <ScrollToTop />
      <Header content={content} language={language} onLanguageChange={handleLanguageChange} />

      <Routes>
        <Route path="/workshops" element={<Workshops content={content} language={language} />} />
        <Route path="/projects" element={<Projects content={content} language={language} />} />
        <Route path="/on-prem" element={<OnPrem content={content} language={language} />} />
        <Route path="/about" element={<About content={content} language={language} />} />
        <Route path="/contact" element={<Contact content={content} language={language} />} />
        <Route path="/" element={<Home content={content} language={language} />} />
      </Routes>

      <Footer content={content} />
    </div>
  );
}

export default App;
