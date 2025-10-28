import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />

        <section className="relative py-20 bg-gradient-to-b from-black to-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold">Why Emijes?</h3>
              <p className="mt-4 text-white/80 max-w-2xl">
                Smarter shopping with an AI copilot. Get curated suggestions, instant comparisons, and
                confidence at checkout — all wrapped in a fast, elegant experience.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Personalized', desc: 'Recommendations tailored to your taste and budget.' },
                  { title: 'Transparent', desc: 'Clear comparisons and reviews synthesized by AI.' },
                  { title: 'Seamless', desc: 'From browsing to checkout, everything just flows.' },
                ].map((f) => (
                  <div key={f.title} className="rounded-xl border border-white/10 bg-black/40 p-5">
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Emijes Commerce. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
}

export default App;
