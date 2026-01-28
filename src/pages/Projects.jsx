import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  useEffect(() => {
    document.title = 'Custom AI Projects | Radiant2';
  }, []);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[520px] items-center bg-[url('/hero_background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-4xl space-y-6 px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">Custom AI built for your business</h1>
          <p className="text-lg text-slate-900">
            End-to-end AI development. From proof of concept to production-ready systems.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700"
            >
              Discuss your project
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">What we build</h2>
          <div className="grid gap-12 sm:grid-cols-3">
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">AI Agents</h3>
              <p className="text-slate-600">
                Autonomous systems that take actions, use tools, and make decisions
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">RAG Systems</h3>
              <p className="text-slate-600">
                Connect LLMs to your knowledge base for accurate, grounded answers
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Document Processing</h3>
              <p className="text-slate-600">
                Extract, classify, and summarize data from PDFs, emails, and scans
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Custom Workflows</h3>
              <p className="text-slate-600">
                Automate complex multi-step processes with AI decision points
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">API Integrations</h3>
              <p className="text-slate-600">
                Connect AI to your existing tools, databases, and infrastructure
              </p>
            </div>
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-semibold text-slate-900">Fine-tuned Models</h3>
              <p className="text-slate-600">
                Train models on your data for domain-specific performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we work</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Discovery</h3>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-600">
                  We start by understanding your business problem, data landscape, and technical
                  constraints. No sales pitch—just an honest assessment of whether AI is the right
                  solution and what approach makes sense.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Proof of Concept</h3>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-600">
                  We build a working prototype in 2-4 weeks. You see real results with your data
                  before committing to full development. If it doesn't work, you know early.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Production Build</h3>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-600">
                  We turn the prototype into a robust system. Error handling, monitoring, testing,
                  security, and integration with your existing stack. Code you can maintain.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Deployment & Handoff</h3>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-slate-600">
                  We deploy to your infrastructure (cloud or on-prem), document everything, and
                  train your team. You own the code and know how to operate it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE PROJECTS SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">Example projects</h2>
          <div className="space-y-8">
            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Contract Analysis Agent</h3>
              <p className="text-sm text-slate-600">
                Legal tech company: Extract key terms, flag risky clauses, generate summaries from
                100-page contracts. Reduced review time from 2 hours to 10 minutes.
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Customer Support Automation</h3>
              <p className="text-sm text-slate-600">
                SaaS company: AI agent handles tier-1 support tickets, searches docs, suggests
                solutions, escalates when needed. 60% ticket deflection rate.
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Medical Report Processing</h3>
              <p className="text-sm text-slate-600">
                Healthcare provider: Extract structured data from unstructured clinical notes and
                lab reports. HIPAA-compliant, on-premise deployment.
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900">Research Assistant</h3>
              <p className="text-sm text-slate-600">
                Consulting firm: RAG system over 10 years of internal reports and market research.
                Teams find relevant insights in seconds instead of days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET SECTION */}
      <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-12 px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">What you get</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Production-ready code</h3>
              <p className="text-sm text-slate-600">
                Clean, documented, tested. Built to be maintained by your team.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Full ownership</h3>
              <p className="text-sm text-slate-600">
                You own all code, models, and IP. No vendor lock-in.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Technical documentation</h3>
              <p className="text-sm text-slate-600">
                Architecture diagrams, API docs, deployment guides, troubleshooting playbooks.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Knowledge transfer</h3>
              <p className="text-sm text-slate-600">
                We train your team on how the system works and how to extend it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl space-y-8 px-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2>
            <p className="text-base text-slate-600">
              Tell us what you're trying to build. We'll give you an honest take on feasibility,
              approach, and timeline.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-700 sm:px-12 sm:py-5 sm:text-lg"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
