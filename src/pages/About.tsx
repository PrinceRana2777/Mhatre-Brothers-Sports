import { motion } from 'motion/react';
import { Award, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const milestones = [
  { year: '2014', title: 'The Beginning', desc: 'Mhatre Brothers Sports was founded with a small shop in Naigaon East.' },
  { year: '2017', title: 'Expansion', desc: 'Expanded our inventory to include professional gym gear and custom jersey printing.' },
  { year: '2020', title: 'Trusted Store', desc: 'Recognized as the most trusted sports store in the Vasai-Virar region.' },
  { year: '2024', title: 'Digital Era', desc: 'Serving thousands of athletes and local teams with premium gear and custom solutions.' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1 text-sm font-bold tracking-widest text-primary uppercase">
              Our Story
            </span>
            <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-7xl uppercase">
              BORN FROM <br />
              <span className="text-primary">PASSION FOR SPORTS</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Mhatre Brothers Sports (म्हात्रे ब्रदर्स क्रीडा) is more than just a store; it's a community hub for athletes in Naigaon. Founded by sports enthusiasts, we understand the dedication it takes to excel in the field.
            </p>
            <p className="mb-10 text-lg leading-relaxed text-white/70">
              Our mission is to provide high-quality, professional-grade sports equipment at accessible prices, ensuring that every aspiring champion has the tools they need to succeed.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Quality Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Affordable Price</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Friendly Staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-primary" size={24} />
                <span className="font-bold">Custom Solutions</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400"
                  alt="Cricket"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400"
                  alt="Football"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
                  alt="Gym"
                  className="rounded-2xl shadow-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=400"
                  alt="Jersey"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="absolute -z-10 -top-10 -right-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="bg-surface mt-32 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl uppercase">OUR <span className="text-primary">MILESTONES</span></h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-white/10 lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={cn(
                    'relative flex flex-col items-center lg:flex-row',
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_15px_rgba(57,255,20,0.5)] lg:block" />

                  <div className={cn(
                    'w-full rounded-3xl bg-background p-8 shadow-xl lg:w-[45%]',
                    index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                  )}>
                    <span className="mb-2 block text-3xl font-black text-primary">{milestone.year}</span>
                    <h3 className="mb-4 text-xl font-bold">{milestone.title}</h3>
                    <p className="text-white/60">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Users, label: 'Happy Customers', value: '5000+' },
              { icon: Award, label: 'Years Experience', value: '10+' },
              { icon: Shield, label: 'Premium Brands', value: '50+' },
              { icon: Zap, label: 'Team Kits Delivered', value: '200+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <stat.icon size={32} />
                </div>
                <span className="text-4xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
