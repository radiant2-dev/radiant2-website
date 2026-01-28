import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About({ content }) {
  const founderPhotos = {
    'Wojciech Ptasiński': '/wojtek.png',
    'Maciej Ziaja': '/maciek.png',
  };

  useEffect(() => {
    document.title = 'About Us | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
          <h2 className="text-5xl font-semibold sm:text-6xl">About Radiant²</h2>
          <h3
            className="text-3xl font-mono"
            style={{ textShadow: '0 0 64px rgba(255, 255, 255, 0.6)' }}
          >
            Building AI solutions that work
          </h3>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-12 px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold sm:text-4xl">Our Story</h2>
            <blockquote className="border-l-2 border-slate-300 pl-6 text-lg italic leading-relaxed text-slate-700">
              "{content.team.closing}"
            </blockquote>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="border-t border-neutral-700 bg-neutral-900 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-16 px-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{content.team.title}</h2>
          <div className="grid gap-16 sm:grid-cols-2">
            {content.team.founders.map((founder, index) => (
              <div key={index} className="space-y-6">
                <div className="aspect-square w-full max-w-[240px] overflow-hidden bg-neutral-800">
                  {founderPhotos[founder.name] ? (
                    <img
                      src={founderPhotos[founder.name]}
                      alt={`${founder.name} - ${founder.role}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-neutral-500">
                      [Photo]
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{founder.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-300">{founder.bio}</p>
                  <div className="flex gap-4 pt-2">
                    {founder.links.linkedin && founder.links.linkedin !== '#' && (
                      <a
                        href={founder.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-white underline decoration-[0.5px] underline-offset-4 hover:text-neutral-300"
                      >
                        LinkedIn
                      </a>
                    )}
                    {founder.links.website && (
                      <a
                        href={founder.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-white underline decoration-[0.5px] underline-offset-4 hover:text-neutral-300"
                      >
                        {founder.links.website.replace('https://', '')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Let's work together</h2>
            <p className="text-base text-slate-600">Ready to discuss your AI project?</p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
