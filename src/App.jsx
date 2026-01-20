import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = [
    { href: "#offer", label: "Offer" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition ${
        isScrolled ? "bg-white/80 backdrop-blur-2xl" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-6">
        <span className="text-lg font-semibold tracking-wide">
          Radiant<sup>2</sup>
        </span>
        <nav
          className="ml-auto flex items-center gap-4 text-sm font-normal text-slate-700"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2 py-1.5 transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
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
          style={{ textShadow: "0 0 64px rgba(255, 255, 255, 0.6)" }}
        >
          Supercharge your company with AI{" "}
          <Typewriter
            options={{
              strings: [
                "for bussiness automation",
                "for industrial processes",
                "workshops",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="offer" className="space-y-3">
      <h2 className="text-3xl font-semibold">Our offer</h2>
      <p className="text-sm text-slate-600 font-semibold">
        We provide AI consulting for business and industrial applications.
      </p>
      <div className="grid gap-12 pt-2 text-sm text-slate-700 sm:grid-cols-3">
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">AI solutions</h3>
          <p className="text-sm text-slate-600">
            Integrate AI into your business – process documents and analyze data
            with intelligent systems. Deploy secure AI-solutions using cloud
            providers or with secure on-premise setup.
          </p>
          <p></p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">
            Machine learning RnD
          </h3>
          <p className="text-sm text-slate-600">
            Your company needs ML-based solutions beyond general-purpose AI
            systems? We apply our RnD knowledge to develop intelligent systems
            for the most complex business domains.
          </p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4">
          <h3 className="text-lg font-semibold text-slate-900">
            AI training &amp; workshops
          </h3>
          <p className="text-sm text-slate-600">
            We provide workshops on cutting edge AI technologies. With us you
            can learn how to harness the newest AI systems hands-on beyond basic
            prompting.
          </p>
        </div>
      </div>

      <h3
        id="training"
        className="pt-6 text-2xl font-semibold text-slate-900"
      >
        Training and workshops
      </h3>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-slate-900 group-hover:underline">
                AI fundamentals – introduction
              </span>
              <span className="text-xs font-normal text-slate-600">
                A basic introduction to AI for everyone. Understand what AI can
                and cannot do, learn practical applications, and work with real
                tools.
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <span className="font-semibold">Who is this for?</span>
            <p className="text-slate-700">
              Anyone who wants to understand AI • Teams new to AI • Mixed
              technical backgrounds
            </p>

            <span className="font-semibold">What you'll learn:</span>
            <ul className="text-slate-700 list-disc pl-5 space-y-1">
              <li>What AI, machine learning, and LLMs are (in plain language)</li>
              <li>Understanding the capabilities and limitations of AI</li>
              <li>Practical AI tools you can start using today</li>
              <li>Basics of prompt engineering</li>
              <li>Identifying AI opportunities in your processes</li>
              <li>Ethics, bias, and responsible use of AI</li>
              <li>Hands-on exercises with popular AI tools</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold text-slate-900 group-hover:underline">
                Secure AI on-premise setup for your company
              </span>
              <span className="text-xs font-normal text-slate-600">
                Hands-on training for infrastructure and ops teams.
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <span className="font-semibold">Who is this for?</span>
            <p className="text-slate-700">
              Software devlopers • DevOps • IT Administrators
            </p>

            <span className="font-semibold">What you'll learn:</span>
            <ul className="text-slate-700 list-disc pl-5 space-y-1">
              <li>Understand the landscape of open-source LLM models</li>
              <li>Learn how to set up LLM on-premise with Ollama</li>
              <li>Connect chat UI to your self-hosted LLM</li>
              <li>Use self-hosted AI in agentic mode</li>
              <li>
                Build workflows and automation with local AI-powered building
                blocks
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="space-y-3">
      <h2 className="text-3xl font-semibold">Our Team</h2>
      <p className="text-sm text-slate-600  max-w-192">
        We are AI specialists with experience in business, industrial
        applications, and research. We work in places where AI meets real-world
        challenges to make measurable impact.
      </p>
      <h3 className="pt-2 text-xl font-semibold text-slate-900">
        Meet our founders
      </h3>
      <div className="grid gap-16 pt-2 text-sm text-slate-700 sm:grid-cols-2">
        <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
          <h3 className="text-lg font-semibold text-slate-900">
            Wojciech Ptasiński
          </h3>
          <h2 className="font-semibold text-slate-600">Co-founder</h2>
          <p className="text-sm text-slate-600">
            AI RnD Lead with 7+ years across financial and industrial sectors,
            delivering cutting-edge innovations - highlighted by AI solutions
            for Europe's #1 bank. He architects production-grade AI systems,
            agentic apps, and integrations driving business automation. A Google
            Cloud Summit Warsaw speaker, he leads specialized AI workshops for
            enterprises.
          </p>
        </div>
        <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
          <h3 className="text-lg font-semibold text-slate-900">Maciej Ziaja</h3>
          <h2 className="font-semibold text-slate-600">Co-founder</h2>
          <p className="text-sm text-slate-600">
            AI specialist with 5+ years of experience in RnD development and
            academic resaerch in frontier domains such as aerospace. Maciej has
            built AI-based vision system onboard satellite mission Inuition-1.
            He's been active in publishing research papers and scientific
            conferences and is about to finish his PhD in AI for satellite
            systems.
          </p>
        </div>
      </div>
      <h3 className="pt-2 text-lg font-semibold text-slate-900">
        Our experience
      </h3>
      <p className="text-sm text-slate-600 max-w-192">
        In their individual professional careers, our team members have
        previously worked with:
      </p>
      <LogosCarousel />
    </section>
  );
}

function LogosCarousel() {
  const logos = [
    { src: "/esa_logo.png", alt: "European Space Agency" },
    { src: "/csa_logo.png", alt: "Canadian Space Agency" },
    { src: "/kplabs_logo.png", alt: "KP Labs" },
    { src: "/unicredit_logo.png", alt: "UniCredit" },
    { src: "/vodeno_logo.png", alt: "Vodeno" },
  ];

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className="mt-4"
      plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
    >
      <CarouselContent className="items-center">
        {logos.map((logo) => (
          <CarouselItem
            key={logo.src}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
          >
            <div className="flex h-16 items-center justify-center rounded-md bg-white">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-900 bg-black text-slate-100"
    >
      <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-sm text-slate-300 max-w-128">
          Reach out to us at{" "}
          <a
            href="https://www.linkedin.com/in/wojciechptasinski/"
            className="underline"
          >
            LinkedIn
          </a>{" "}
          to discuss how Radiant<sup>2</sup> can help your business leverage AI
          for automation and innovation.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-900">
      <div className="bg-white">
        <Header />
        <HeroSection />
        <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
          <OfferSection />
          <TeamSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
