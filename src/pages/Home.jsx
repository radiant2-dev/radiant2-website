import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

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

function ProblemSection({ content }) {
  return (
    <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl space-y-10 px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.problem.title}</h2>
        <ul className="space-y-4 text-slate-600">
          {content.problem.painPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 leading-relaxed">
              <span className="mt-1.5 flex-shrink-0 text-xs text-slate-300">-</span>
              <span className="text-base">{point}</span>
            </li>
          ))}
        </ul>
        <p className="border-t border-slate-200 pt-8 text-base font-medium text-slate-900">
          {content.problem.transition}
        </p>
      </div>
    </section>
  );
}

function ServicesSection({ content }) {
  return (
    <section id="services" className="border-t border-neutral-700 bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="grid gap-16 sm:grid-cols-3">
          {content.services.items.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="leading-relaxed text-neutral-300">{service.description}</p>
              <Link
                to="/contact"
                className="inline-block text-sm font-medium text-white underline decoration-[0.5px] underline-offset-4 hover:text-neutral-300"
              >
                {service.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PositioningSection({ content }) {
  return (
    <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.positioning.title}</h2>
          <p className="text-base leading-relaxed text-slate-600">{content.positioning.body}</p>
        </div>
        <div className="grid gap-12 border-t border-slate-200 pt-12 sm:grid-cols-3">
          {content.positioning.stats.map((stat, index) => (
            <div key={index} className="space-y-2 text-center">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl">{stat.number}</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">{stat.label}</p>
              <p className="pt-1 text-xs leading-relaxed text-slate-500">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection({ content }) {
  return (
    <section className="border-t border-neutral-700 bg-neutral-900 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">{content.proof.title}</h2>
        <div className="grid gap-12 sm:grid-cols-2">
          {content.proof.events.map((event, index) => (
            <div key={index} className="space-y-6">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-800">
                <img
                  src={event.image}
                  alt={`${event.event} - ${event.talkTitle}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {event.event}
                </p>
                <p className="text-sm text-neutral-300">{event.venue}</p>
                <p className="text-base font-medium text-white">{event.talkTitle}</p>
                {event.videoUrl && (
                  <a
                    href={event.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block pt-2 text-sm font-medium text-white underline decoration-[0.5px] underline-offset-4 hover:text-neutral-300"
                  >
                    {event.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ content }) {
  return (
    <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl space-y-16 px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">{content.process.title}</h2>

        {/* Desktop: Horizontal with connecting line */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-0 right-0 top-[30px] mx-auto h-[2px] w-[calc(100%-120px)] bg-slate-200"
              style={{ marginLeft: '60px', marginRight: '60px' }}
            ></div>

            <div className="relative grid grid-cols-4 gap-8">
              {content.process.steps.map((step, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex flex-col items-start">
                    <div className="flex h-[60px] w-[60px] items-center justify-center bg-white text-3xl font-bold text-slate-900">
                      0{step.number}
                    </div>
                  </div>
                  <div className="space-y-3 text-left">
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-12">
          {content.process.steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-[50px] w-[50px] items-center justify-center border-2 border-neutral-900 text-2xl font-bold text-slate-900">
                  0{step.number}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="sm:hidden space-y-8">
          {content.process.steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline line */}
              {index < content.process.steps.length - 1 && (
                <div className="absolute left-[24px] top-[50px] h-[calc(100%+2rem)] w-[2px] bg-slate-200"></div>
              )}

              <div className="relative flex-shrink-0">
                <div className="flex h-[50px] w-[50px] items-center justify-center border-2 border-neutral-900 bg-white text-2xl font-bold text-slate-900">
                  0{step.number}
                </div>
              </div>
              <div className="space-y-3 pb-4">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function ServiceStatement({ content }) {
  return (
    <section className="border-t border-neutral-700 bg-neutral-900 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-base leading-relaxed text-neutral-300">{content.serviceStatement.text}</p>
      </div>
    </section>
  );
}

function ContactSection({ content }) {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl space-y-16 px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.contact.title}</h2>
          <p className="text-base text-slate-600">{content.contact.subtitle}</p>
        </div>

        {/* Primary CTA - Contact Page Button */}
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="inline-block bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            {content.contact.primaryCta}
          </Link>
        </div>

        <p className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          {content.contact.email}
        </p>
      </div>
    </section>
  );
}

export default function Home({ content, language }) {
  useEffect(() => {
    document.title = 'Radiant2 - AI Workshops, Custom Projects & On-Premise Solutions';
  }, []);

  return (
    <>
      <HeroSection content={content} language={language} />
      <main>
        <ProblemSection content={content} />
        <ServicesSection content={content} />
        <PositioningSection content={content} />
        <ProofSection content={content} />
        <ProcessSection content={content} />
        <ServiceStatement content={content} />
        <ContactSection content={content} />
      </main>
    </>
  );
}
