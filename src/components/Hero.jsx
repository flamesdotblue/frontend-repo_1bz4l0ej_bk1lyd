import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Elevate Your Style with Emijes
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            A modern ecommerce experience powered by AI. Discover curated products, personalized picks, and seamless shopping — all in a sleek, dark interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition shadow-lg shadow-emerald-500/20">
              Shop New Arrivals
            </button>
            <button className="px-5 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10 transition">
              Explore Best Sellers
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            'Free returns',
            'Secure checkout',
            '24/7 support',
            'AI-guided shopping',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-white/80 text-sm">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
