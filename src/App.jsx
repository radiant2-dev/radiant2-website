import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from 'typewriter-effect';
import { carouselResponsive } from "./tailwindBreakpoints";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-900">
      <div className="bg-white">
        <header
          className={`sticky top-0 z-50 border-b border-slate-200 transition ${
            isScrolled
              ? "bg-white/80 backdrop-blur-2xl"
              : "bg-white"
          }`}
        >
          <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
            <span className="text-lg font-semibold tracking-wide">
              Radial Vision
            </span>
            <a
              href="#contact"
              className="ml-auto px-4 py-1.5 text-sm font-normal text-slate-700 hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </header>

        <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
          <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
            <h2 className="text-5xl font-semibold sm:text-6xl">
              Radial Vision
            </h2>
            <h3
              className="text-3xl font-mono"
              style={{ textShadow: "0 0 64px rgba(255, 255, 255, 0.6)" }}
            >
              Supercharge your company<br />
              with AI {" "}
              <span className="inline-block align-baseline">
                <Typewriter
                  options={{
                    strings: ["for bussiness automation", "for industrial processes", "workshops"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
          </div>
        </section>

        <main className="mx-auto max-w-5xl space-y-12 px-6 py-12">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Our offer</h2>
            <p className="text-sm text-slate-600 font-semibold">We provide AI consulting for bussiness and industrial applications.
            </p>
            <div className="grid gap-12 pt-2 text-sm text-slate-700 sm:grid-cols-3">
              <div className="space-y-2 border-l-[3px] border-black pl-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  AI solutions
                </h3>
                <p className="text-sm text-slate-600">Intagrate AI into your bussines – process documents and analyze data with intelligent systems. Deploy secure AI-solutions using cloud providers or with secure on-premise setup.</p>
                <p>
                </p>
              </div>
              <div className="space-y-2 border-l-[3px] border-black pl-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Machine learning RnD
                </h3>
                <p className="text-sm text-slate-600">Your company needs ML-based solutions beyond general-purpose AI systems? We apply our RnD knowledge to develop intelligent solutions to any kind of bussiness.</p>
              </div>
              <div className="space-y-2 border-l-[3px] border-black pl-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  AI training &amp; workshops
                </h3>
                <p className="text-sm text-slate-600">We provide workshops on cutting edge AI technologies. With us you can learn how to harness the newest AI systems hands-on beyond basic prompting.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">Our Team</h2>
            <h3 className="pt-2 text-lg font-semibold text-slate-900">
              Meet our founders
            </h3>
            <div className="grid gap-16 pt-2 text-sm text-slate-700 sm:grid-cols-2">
              <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
                <h3 className="text-lg font-semibold text-slate-900">
                  Wojciech Ptasiński
                </h3>
                <h2 className="font-semibold text-slate-600">
                  Co-founder
                </h2>
                <p className="text-sm text-slate-600">
                  {"AI R&D Lead with 7\+ years across financial and industrial sectors, delivering cutting-edge innovations - highlighted by AI solutions for Europe's #1 bank. He architects production-grade AI systems, agentic apps, and integrations driving business automation. A Google Cloud Summit Warsaw speaker, he leads specialized AI workshops for enterprises."}
                </p>
              </div>
              <div className="space-y-2 border-l-[3px] border-black pl-4 max-w-96">
                <h3 className="text-lg font-semibold text-slate-900">
                  Maciej Ziaja
                </h3>
                <h2 className="font-semibold text-slate-600">
                  Co-founder
                </h2>
                <p className="text-sm text-slate-600">
                  {"AI R&D specialist with 5\+ years of experience in RnD development and academic resaerch in frontier domains such as aerospace. Maciej has built AI-based vision system onboard satellite mission Inuition-1. He's been active in publishing research papers and scientific conferences and is about to finish his PhD in AI for satellite systems."}
                </p>
              </div>
            </div>
            <h3 className="pt-2 text-lg font-semibold text-slate-900">
              We have worked with
            </h3>
            <Carousel
              responsive={carouselResponsive}
              autoPlay={true}
              arrows={false}
              centerMode={true}
              infinite={true}
            >
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-auto max-w-[160px] object-contain"
                  src="/esa_logo.png"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-auto max-w-[160px] object-contain"
                  src="/vodeno_logo.png"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-auto max-w-[160px] object-contain"
                  src="/csa_logo.png"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-auto max-w-[160px] object-contain"
                  src="/unicredit_logo.png"
                ></img>
              </div>
              <div className="flex items-center justify-center">
                <img
                  className="h-16 w-auto max-w-[160px] object-contain"
                  src="/kplabs_logo.png"
                ></img>
              </div>
            </Carousel>
          </section>

        </main>
      </div>

      <footer
        id="contact"
        className="border-t border-slate-900 bg-black text-slate-100"
      >
        <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300">Contact information placeholder.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
