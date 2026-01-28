import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, TrendingDown, Zap, Settings, ServerOff, Unlock } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function OnPrem({ content, language }) {
  useEffect(() => {
    document.title = 'On-Premise AI Solutions | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
          <h2 className="text-5xl font-semibold sm:text-6xl">{content.onPrem.hero.title}</h2>
          <h3
            className="text-3xl font-mono"
            style={{ textShadow: '0 0 64px rgba(255, 255, 255, 0.6)' }}
          >
            {content.onPrem.hero.subtitle}{' '}
            <Typewriter
              key={language}
              options={{
                strings: content.onPrem.hero.typewriter,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-700"
            >
              {content.onPrem.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ON-PREMISE SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Why on-premise AI?</h2>
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Data Privacy</h3>
              </div>
              <p className="text-slate-600">
                Sensitive data never leaves your infrastructure. Full GDPR compliance.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <TrendingDown className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Cost Control</h3>
              </div>
              <p className="text-slate-600">
                No per-token costs. Predictable infrastructure spend.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Low Latency</h3>
              </div>
              <p className="text-slate-600">
                Models run on your network. Millisecond response times.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <Settings className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Custom Models</h3>
              </div>
              <p className="text-slate-600">
                Fine-tune and deploy proprietary models for your domain.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <ServerOff className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Air-gapped</h3>
              </div>
              <p className="text-slate-600">
                Run AI in isolated environments with no internet access.
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <Unlock className="h-5 w-5 flex-shrink-0 text-slate-400" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-slate-900">Vendor Independence</h3>
              </div>
              <p className="text-slate-600">
                No lock-in to cloud providers. Full ownership of your stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="border-t border-neutral-700 bg-neutral-900 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Common use cases</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Healthcare & Finance</h3>
              <p className="text-sm text-neutral-300">
                Process sensitive patient or customer data without cloud exposure
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Government & Defense</h3>
              <p className="text-sm text-neutral-300">
                Air-gapped deployments for classified or restricted environments
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Manufacturing</h3>
              <p className="text-sm text-neutral-300">
                Real-time quality control and process optimization on factory floor
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Research Institutions</h3>
              <p className="text-sm text-neutral-300">
                Custom models on proprietary datasets with full IP protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">What we provide</h2>
            <p className="text-base text-slate-600">
              End-to-end setup, from hardware recommendations to production deployment.
            </p>
          </div>

          <div className="space-y-12">
            {/* Service 1 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Infrastructure Design</h3>
              </div>
              <div className="sm:col-span-2">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Hardware sizing for your workload (GPU, CPU, memory)</li>
                  <li>• Network architecture and security hardening</li>
                  <li>• Scalability planning for future growth</li>
                  <li>• Cost analysis vs. cloud alternatives</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Model Deployment</h3>
              </div>
              <div className="sm:col-span-2">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Deploy LLMs (Llama, Mistral, custom models)</li>
                  <li>• Optimize inference for your hardware</li>
                  <li>• Quantization and acceleration (vLLM, TensorRT)</li>
                  <li>• Multi-model orchestration</li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Integration & APIs</h3>
              </div>
              <div className="sm:col-span-2">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• RESTful APIs for application integration</li>
                  <li>• Authentication and rate limiting</li>
                  <li>• Connect to your databases and knowledge bases</li>
                  <li>• Monitoring and logging setup</li>
                </ul>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Training & Handoff</h3>
              </div>
              <div className="sm:col-span-2">
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Technical documentation for your team</li>
                  <li>• Operational training and best practices</li>
                  <li>• Troubleshooting playbooks</li>
                  <li>• Optional ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Ready to deploy?</h2>
            <p className="text-base text-slate-600">
              Let's discuss your infrastructure, compliance requirements, and performance needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-neutral-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
