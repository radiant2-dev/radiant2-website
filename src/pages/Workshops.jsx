import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Workshops({ content }) {
  useEffect(() => {
    document.title = 'AI Workshops & Training | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center bg-[url('/hero_background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">{content.workshops.hero.title}</h1>
          <p className="text-lg text-slate-900">{content.workshops.hero.subtitle}</p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              {content.workshops.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.workshops.whoItsFor.title}
          </h2>
          <div className="grid gap-12 sm:grid-cols-2">
            {content.workshops.whoItsFor.items.map((item, index) => (
              <div key={index} className="space-y-3 border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP MODULES SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {content.workshops.modules.title}
            </h2>
            <p className="text-base text-slate-600">{content.workshops.modules.subtitle}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.workshops.modules.items.map((module, index) => (
              <div key={index} className="space-y-4 border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {module.content.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                {module.tag && <p className="text-xs font-medium text-slate-500">{module.tag}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.workshops.formats.title}</h2>
          <div className="grid gap-12 sm:grid-cols-3">
            {content.workshops.formats.items.map((format, index) => {
              // Icon rendering logic based on format index
              const renderIcon = () => {
                if (index === 0) {
                  // Half-day icon: single rectangle with mixed borders
                  return (
                    <div className="flex justify-center mb-5">
                      <div
                        className="w-10 h-10"
                        style={{
                          borderTop: '2px dashed currentColor',
                          borderRight: '2px dashed currentColor',
                          borderBottom: '2px solid currentColor',
                          borderLeft: '2px solid currentColor',
                        }}
                      ></div>
                    </div>
                  );
                } else if (index === 1) {
                  // Full-day icon: single rectangle with all solid borders
                  return (
                    <div className="flex justify-center mb-5">
                      <div className="w-10 h-10 border-2 border-solid border-current"></div>
                    </div>
                  );
                } else if (index === 2) {
                  // Multi-day icon: three rectangles
                  return (
                    <div className="flex justify-center mb-5">
                      <div className="flex gap-2">
                        <div className="w-10 h-10 border-2 border-solid border-current"></div>
                        <div className="w-10 h-10 border-2 border-dashed border-current"></div>
                        <div className="w-10 h-10 border-2 border-dashed border-current"></div>
                      </div>
                    </div>
                  );
                }
                return null;
              };

              return (
                <div key={index} className="space-y-3">
                  {renderIcon()}
                  <h3 className="text-xl font-semibold text-slate-900">{format.title}</h3>
                  <p className="text-sm font-medium text-slate-500">{format.duration}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{format.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.workshops.whyUs.title}</h2>
          <div className="grid gap-12 border-t border-slate-200 pt-12 sm:grid-cols-3">
            {content.workshops.whyUs.stats.map((stat, index) => (
              <div key={index} className="space-y-2 text-center">
                <p className="text-xl font-bold text-slate-900">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">{content.workshops.cta.title}</h2>
            <p className="text-base text-slate-600">{content.workshops.cta.subtitle}</p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            {content.workshops.cta.button}
          </Link>
          <p className="pt-4 text-sm text-slate-500">{content.workshops.cta.footer}</p>
        </div>
      </section>
    </main>
  );
}
