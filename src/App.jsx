import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from 'typewriter-effect';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6">
          <span className="text-lg font-semibold tracking-wide">
            Radial Vision
          </span>
        </div>
      </header>

      <section className="relative min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-5xl space-y-3 px-6 pt-6">
          <h2 className="text-6xl font-semibold">
            Radial Vision
          </h2>
          <h3
            className="text-4xl font-mono"
            style={{ textShadow: "0 0 24px rgba(255, 255, 255, 0.45)" }}
          >
          Supercharge you bussiness<br/>
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
          <h2 className="text-2xl font-semibold">Our Offer</h2>
          <p className="text-sm text-slate-600">Offer details placeholder.</p>
          <div className="grid gap-4 pt-2 text-sm text-slate-700 sm:grid-cols-3">
            <div className="space-y-2 border-l-[3px] border-black pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                AI solutions
              </h3>
              <p className="text-sm text-slate-600">Description placeholder.</p>
            </div>
            <div className="space-y-2 border-l-[3px] border-black pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Machine learning RnD
              </h3>
              <p className="text-sm text-slate-600">Description placeholder.</p>
            </div>
            <div className="space-y-2 border-l-[3px] border-black pl-4">
              <h3 className="text-lg font-semibold text-slate-900">
                AI training &amp; workshops
              </h3>
              <p className="text-sm text-slate-600">Description placeholder.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <p className="text-sm text-slate-600">Team profiles placeholder.</p>
          <h3 className="pt-2 text-lg font-semibold text-slate-900">
            We have worked with
          </h3>
          <Carousel
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3,
              }
            }
            }
            autoPlay={true}
            arrows={false}
            centerMode={true}
            infinite={true}
          >
            <div className="flex items-center justify-center">
              <img
                className="h-16 w-auto max-w-[160px] object-contain"
                src="public/credit_agrocole_log.png"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-16 w-auto max-w-[160px] object-contain"
                src="public/esa_logo.png"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-16 w-auto max-w-[160px] object-contain"
                src="public/credit_agrocole_log.png"
              ></img>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-16 w-auto max-w-[160px] object-contain"
                src="public/esa_logo.png"
              ></img>
            </div>
          </Carousel>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-600">Contact information placeholder.</p>
        </section>
      </main>

      <footer className="border-t border-slate-900 bg-black text-slate-100">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-6 text-sm">
          Footer
        </div>
      </footer>
    </div>
  )
}

export default App
