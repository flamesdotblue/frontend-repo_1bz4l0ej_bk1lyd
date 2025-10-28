import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-emerald-500/20 ring-1 ring-emerald-400/40 grid place-items-center">
            <span className="text-emerald-400 font-bold">E</span>
          </div>
          <span className="text-white font-semibold tracking-wide">Emijes Commerce</span>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search products, brands, and more"
              className="w-full bg-white/5 text-white placeholder:text-white/50 rounded-md pl-10 pr-4 py-2 outline-none border border-white/10 focus:border-emerald-400/60 transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-white/80 hover:text-white transition">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-1 -right-2 bg-emerald-500 text-black text-xs font-semibold px-1.5 py-0.5 rounded">2</span>
          </button>
          <button className="text-white/80 hover:text-white transition">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
