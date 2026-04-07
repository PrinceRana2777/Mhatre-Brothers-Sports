import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Zap, Award, Users } from 'lucide-react';
import { featuredProducts, categories, reviews } from '../constants/data';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-playing-cricket-in-a-stadium-32865-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-4 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-bold tracking-widest text-primary uppercase"
            >
              Naigaon's Premier Sports Hub
            </motion.span>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              YOUR ULTIMATE <br />
              <span className="text-primary">SPORTS DESTINATION</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70 sm:text-xl">
              Equipping champions with premium gear, custom apparel, and top-tier accessories. From local grounds to professional arenas, we've got you covered.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Link
                to="/products"
                className="group flex w-full items-center justify-center space-x-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-background transition-all hover:scale-105 sm:w-auto"
              >
                <span>SHOP NOW</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="w-full rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">EXPLORE CATEGORIES</h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl bg-surface"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="mb-2 text-4xl">{category.icon}</span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary">
                    {category.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center justify-between sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">FEATURED GEAR</h2>
              <p className="mt-2 text-white/60">Handpicked premium equipment for top performance.</p>
            </div>
            <Link to="/products" className="mt-6 flex items-center space-x-2 font-bold text-primary hover:underline sm:mt-0">
              <span>VIEW ALL PRODUCTS</span>
              <ChevronRight size={20} />
            </Link>
          </div>

          <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="min-w-[280px] flex-shrink-0 rounded-2xl bg-background p-4 shadow-xl"
              >
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-surface">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  <div className="absolute top-3 right-3 rounded-full bg-primary px-2 py-1 text-[10px] font-bold text-background">
                    NEW
                  </div>
                </div>
                <h3 className="mb-1 text-lg font-bold">{product.name}</h3>
                <p className="mb-4 text-sm text-white/40 uppercase tracking-widest">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  <div className="flex items-center space-x-1 text-secondary">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-bold">{product.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl uppercase">
                WHY CHOOSE <span className="text-primary">MHATRE BROTHERS?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Shield, title: 'Quality Assurance', desc: 'We only stock authentic, high-performance sports equipment from trusted brands.' },
                  { icon: Zap, title: 'Affordable Pricing', desc: 'Get professional-grade gear at prices that won\'t break the bank.' },
                  { icon: Award, title: 'Custom Solutions', desc: 'From personalized jerseys to bespoke trophies, we bring your vision to life.' },
                  { icon: Users, title: 'Expert Guidance', desc: 'Our staff consists of sports enthusiasts who help you find the perfect fit.' },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl bg-surface p-4"
            >
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800"
                alt="Sports Action"
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 rounded-2xl bg-primary p-8 text-background shadow-2xl">
                <span className="block text-5xl font-black">10+</span>
                <span className="text-sm font-bold uppercase tracking-widest">Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl uppercase">WHAT OUR <span className="text-primary">CHAMPIONS</span> SAY</h2>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-lg font-bold">4.6/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-3xl bg-background p-8 text-left shadow-xl"
              >
                <div className="mb-6 flex items-center space-x-4">
                  <img src={review.avatar} alt={review.name} className="h-14 w-14 rounded-full border-2 border-primary" />
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
                <p className="italic text-white/70">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1920" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase">READY TO <span className="text-primary">LEVEL UP?</span></h2>
          <p className="mb-12 text-xl text-white/80">Visit our store in Naigaon East or contact us for custom orders and team kits.</p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link to="/products" className="w-full rounded-full bg-primary px-10 py-5 text-xl font-bold text-background transition-transform hover:scale-105 sm:w-auto">
              SHOP NOW
            </Link>
            <Link to="/contact" className="w-full rounded-full border-2 border-white px-10 py-5 text-xl font-bold transition-all hover:bg-white hover:text-background sm:w-auto">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
