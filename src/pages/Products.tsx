import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Star, ShoppingCart, Eye } from 'lucide-react';
import { featuredProducts, categories } from '../constants/data';
import { cn } from '../lib/utils';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = featuredProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl uppercase">
            OUR <span className="text-primary">COLLECTION</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Browse through our extensive range of professional sports equipment and gear.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
          {/* Category Filters */}
          <div className="flex w-full flex-wrap items-center justify-center gap-3 lg:w-auto lg:justify-start">
            <button
              onClick={() => setSelectedCategory('all')}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-bold transition-all',
                selectedCategory === 'all' ? 'bg-primary text-background' : 'bg-surface text-white hover:bg-white/10'
              )}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-bold transition-all',
                  selectedCategory === cat.id ? 'bg-primary text-background' : 'bg-surface text-white hover:bg-white/10'
                )}
              >
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-white/40" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-surface py-3 pr-6 pl-12 text-sm font-medium text-white outline-none ring-primary/20 transition-all focus:ring-2"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-3xl bg-surface p-4 shadow-xl transition-all hover:bg-surface-hover"
              >
                {/* Product Image */}
                <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-background">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background transition-transform hover:scale-110 active:scale-95">
                      <ShoppingCart size={20} />
                    </button>
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-background transition-transform hover:scale-110 active:scale-95">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-grow flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1 text-secondary">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="mb-4 text-lg font-bold leading-tight text-white group-hover:text-primary">
                    {product.name}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-black text-white">₹{product.price}</span>
                    <button className="rounded-full bg-white/5 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-primary hover:text-background">
                      QUICK VIEW
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 text-white/20">
              <Filter size={48} />
            </div>
            <h3 className="text-2xl font-bold">No products found</h3>
            <p className="mt-2 text-white/40">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-8 rounded-full bg-primary px-8 py-3 font-bold text-background"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
