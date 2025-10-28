import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nebula Headphones',
    price: 199,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1528412294453-619cb8787670?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjE2NTI5NjZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Quantum Smartwatch',
    price: 249,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1741062261267-939626580f9e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxRdWFudHVtJTIwU21hcnR3YXRjaHxlbnwwfDB8fHwxNzYxNjUyOTY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Aero Sneakers',
    price: 149,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Lumen Backpack',
    price: 129,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0"
    >
      {product.tag && (
        <span className="absolute top-3 left-3 z-10 text-xs px-2 py-1 rounded bg-emerald-500 text-black font-semibold">
          {product.tag}
        </span>
      )}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-medium">{product.name}</h3>
          <p className="text-emerald-400 font-semibold">${product.price}</p>
        </div>
        <div className="mt-2 flex items-center gap-1 text-amber-400">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm text-white/80">{product.rating}</span>
        </div>
        <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/10 transition">
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section className="relative bg-black py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Products</h2>
            <p className="text-white/70 mt-2">Curated picks just for you — powered by Emijes AI.</p>
          </div>
          <button className="hidden md:inline-flex px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition">
            View all
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
