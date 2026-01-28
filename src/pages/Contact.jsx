import { useEffect, useRef } from 'react';

export default function Contact({ content, calendlyLoaded }) {
  const calendlyRef = useRef(null);

  useEffect(() => {
    document.title = 'Contact Us | Radiant2';
  }, []);

  useEffect(() => {
    if (calendlyLoaded && calendlyRef.current && window.Calendly) {
      // Initialize the inline widget
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/radiant2-dev/30min',
        parentElement: calendlyRef.current,
      });
    }
  }, [calendlyLoaded]);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-4xl space-y-6 px-6 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">{content.contact.title}</h1>
          <p className="text-lg text-slate-900">{content.contact.subtitle}</p>
        </div>
      </section>

      {/* CALENDLY + FORM SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: Calendly Inline Widget */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {content.contact.primaryCta}
              </h2>
              {calendlyLoaded ? (
                <div ref={calendlyRef} style={{ minWidth: '320px', height: '700px' }}></div>
              ) : (
                <div
                  className="flex items-center justify-center bg-slate-50"
                  style={{ minWidth: '320px', height: '700px' }}
                >
                  <p className="text-sm text-slate-400">Loading calendar...</p>
                </div>
              )}
            </div>

            {/* Right: Contact Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                {content.contact.formHeading}
              </h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-500">
                    {content.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-500">
                    {content.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-slate-500">
                    {content.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-500">
                    {content.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="mt-2 block w-full border-b border-slate-300 bg-transparent px-0 py-2 text-sm focus:border-slate-900 focus:outline-none focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-slate-900"
                >
                  {content.contact.form.submit}
                </button>
              </form>

              <p className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
                {content.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
