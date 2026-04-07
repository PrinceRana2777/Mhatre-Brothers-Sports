import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { galleryImages } from '../constants/data';
import { cn } from '../lib/utils';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Store', 'Products', 'Custom Work'];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl uppercase">
            OUR <span className="text-primary">GALLERY</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            A visual journey through our store, products, and custom creations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex justify-center space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-bold transition-all',
                filter === cat ? 'bg-primary text-background' : 'bg-surface text-white hover:bg-white/10'
              )}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  'masonry-item group relative cursor-pointer overflow-hidden rounded-2xl bg-surface',
                  image.size === 'tall' ? 'tall' : 'short'
                )}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.category}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="text-primary" size={32} />
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-primary/80 px-3 py-1 text-[10px] font-bold text-background backdrop-blur-sm">
                    {image.category.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-white hover:text-primary"
                onClick={() => setSelectedImage(null)}
              >
                <X size={48} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Full Preview"
                className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
