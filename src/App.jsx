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

      <section className="min-h-[520px] bg-[url('/hero_background.jpg')] bg-cover bg-center py-20">
        <div className="mx-auto max-w-5xl space-y-3 px-6 pt-6">
          <h2 className="text-6xl font-semibold">Hero</h2>
          <p className="text-sm">Hero content placeholder.</p>
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
