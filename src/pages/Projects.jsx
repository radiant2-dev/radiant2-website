import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Projects({ content }) {
  useEffect(() => {
    document.title = 'Custom AI Projects | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center bg-[url('/hero_background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">{content.projects.hero.title}</h1>
          <p className="text-lg text-slate-900">{content.projects.hero.subtitle}</p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              {content.projects.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.projects.whatWeBuild.title}
          </h2>
          <div className="grid gap-12 sm:grid-cols-3">
            {content.projects.whatWeBuild.items.map((item, index) => (
              <div key={index} className="space-y-3 border-t border-slate-200 pt-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.projects.howWeWork.title}</h2>

          <div className="space-y-12">
            {content.projects.howWeWork.steps.map((step, index) => (
              <div key={index} className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {content.projects.whatWeDont.title}
          </h2>
          <ul className="space-y-4 text-lg text-slate-600">
            {content.projects.whatWeDont.items.map((item, index) => (
              <li key={index} className={index === 3 ? 'font-bold' : ''}>
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg text-slate-600">{content.projects.industries.text}</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.projects.cta.title}</h2>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            {content.projects.cta.button}
          </Link>
          <p className="pt-4 text-sm text-slate-500">{content.projects.cta.footer}</p>
        </div>
      </section>
    </main>
  );
}
