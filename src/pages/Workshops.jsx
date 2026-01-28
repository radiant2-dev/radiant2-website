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
          <h1 className="text-4xl font-semibold sm:text-5xl">AI training that actually sticks</h1>
          <p className="text-lg text-slate-900">
            Hands-on workshops for technical and non-technical teams
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Who it's for</h2>
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Technical Teams</h3>
              <p className="text-slate-600">Build with LLMs, agents, RAG systems</p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Executives</h3>
              <p className="text-slate-600">Evaluate AI opportunities and risks</p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Mixed Teams</h3>
              <p className="text-slate-600">Cross-functional AI adoption</p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">HR / L&D</h3>
              <p className="text-slate-600">Upskilling programs at scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP MODULES SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Choose your modules</h2>
            <p className="text-base text-slate-600">
              We build your workshop from proven modules. Pick what matters. Skip what doesn't.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Module 1 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Foundations</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• AI landscape: what's real vs. hype</li>
                <li>• LLMs, agents, embeddings explained</li>
                <li>• Prompt engineering fundamentals</li>
              </ul>
              <p className="text-xs font-medium text-slate-500">Best for: All levels</p>
            </div>

            {/* Module 2 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Prompt Engineering</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Advanced prompting techniques</li>
                <li>• Chain-of-thought, few-shot learning</li>
                <li>• AI workflows</li>
                <li>• Hands-on with real use cases</li>
              </ul>
              <p className="text-xs font-medium text-slate-500">Best for: All levels</p>
            </div>

            {/* Module 3 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Building Agents</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Agent architectures</li>
                <li>• Tools and function calling</li>
                <li>• Building your first agent</li>
              </ul>
              <p className="text-xs font-medium text-slate-500">Best for: Developers</p>
            </div>

            {/* Module 4 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">RAG Systems</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Retrieval-augmented generation</li>
                <li>• Vector databases and embeddings</li>
                <li>• Building a knowledge base</li>
              </ul>
              <p className="text-xs font-medium text-slate-500">Best for: Developers, data teams</p>
            </div>

            {/* Module 5 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">AI in Your Workflow</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Identifying automation opportunities</li>
                <li>• API integrations</li>
                <li>• Your use cases, workshopped live</li>
              </ul>
              <p className="text-xs font-medium text-slate-500">Best for: Teams with specific goals</p>
            </div>

            {/* Module 6 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Custom Module</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Something specific?</li>
                <li>• We'll design it together.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Formats</h2>
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Half-day</h3>
              <p className="text-sm font-medium text-slate-500">4 hours</p>
              <p className="text-sm leading-relaxed text-slate-600">
                2-3 modules. First exposure or focused skill-building.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Full-day</h3>
              <p className="text-sm font-medium text-slate-500">8 hours</p>
              <p className="text-sm leading-relaxed text-slate-600">
                Deep training with hands-on work.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-900">Multi-day</h3>
              <p className="text-sm font-medium text-slate-500">Custom</p>
              <p className="text-sm leading-relaxed text-slate-600">
                Full curriculum. Organization-wide programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why us</h2>
          <div className="grid gap-12 border-t border-slate-200 pt-12 sm:grid-cols-3">
            <div className="space-y-2 text-center">
              <p className="text-2xl font-bold text-slate-900 sm:text-3xl">500+</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">people trained</p>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-xl font-bold text-slate-900">Practitioners</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">teaching, not theorists</p>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-xl font-bold text-slate-900">Real things</p>
              <p className="text-xs uppercase tracking-wider text-slate-500">not toy examples</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm italic text-slate-400">[Client testimonials coming soon]</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Ready to train your team?</h2>
            <p className="text-base text-slate-600">
              Book a call to discuss your training needs. We'll design the right program for you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            Book a call
          </Link>
        </div>
      </section>
    </main>
  );
}
