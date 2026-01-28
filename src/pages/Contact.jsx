import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function Contact({ content, language }) {
  useEffect(() => {
    document.title = 'Contact Us | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
          <h2 className="text-5xl font-semibold sm:text-6xl">{content.contact.title}</h2>
          <p
            className="text-3xl font-mono"
            style={{ textShadow: '0 0 64px rgba(255, 255, 255, 0.6)' }}
          >
            {content.contact.subtitle}
          </p>
          <h3
            className="text-3xl font-mono"
            style={{ textShadow: '0 0 64px rgba(255, 255, 255, 0.6)' }}
          >
            {content.contact.typewriterPrefix}{' '}
            <Typewriter
              key={language}
              options={{
                strings: content.contact.typewriter,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <div className="border border-slate-200 p-8 sm:p-12">
            <h2 className="text-2xl font-semibold text-slate-900 text-center mb-8">
              {content.contact.formHeading}
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-500 text-center"
                >
                  {content.contact.form.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm text-center focus:border-neutral-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-500 text-center"
                >
                  {content.contact.form.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm text-center focus:border-neutral-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-medium text-slate-500 text-center"
                >
                  {content.contact.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm text-center focus:border-neutral-900 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-500 text-center"
                >
                  {content.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  required
                  rows="6"
                  className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm text-center focus:border-neutral-900 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-neutral-900"
              >
                {content.contact.form.submit}
              </button>
            </form>

            <p className="border-t border-slate-200 pt-8 mt-8 text-center text-sm text-slate-500">
              {content.contact.email}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
