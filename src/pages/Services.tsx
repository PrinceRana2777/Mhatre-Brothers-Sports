import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shirt, Trophy, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'tshirts',
    title: 'Custom T-Shirt Printing',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?auto=format&fit=crop&q=80&w=800',
    description: 'Get high-quality custom printed jerseys and t-shirts for your team, school, or event. We use premium fabrics and long-lasting printing techniques.',
    features: [
      'Sublimation & Screen Printing',
      'Premium Moisture-Wicking Fabric',
      'Custom Name & Number Printing',
      'Bulk Order Discounts',
      'Fast Turnaround Time',
    ],
    pricing: 'Starting from ₹450 per piece',
  },
  {
    id: 'trophies',
    title: 'Trophy & Medal Customization',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800',
    description: 'Celebrate your victories with our wide range of trophies, medals, and awards. We offer custom engraving and personalized designs for all sports.',
    features: [
      'Laser Engraving Services',
      'Gold, Silver & Bronze Medals',
      'Acrylic & Crystal Trophies',
      'Custom Logo Integration',
      'Event-Specific Designs',
    ],
    pricing: 'Starting from ₹150 per piece',
  },
  {
    id: 'kits',
    title: 'Team Kit Setup',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800',
    description: 'Complete equipment and apparel setup for sports teams and clubs. We provide everything from balls and bats to training gear and uniforms.',
    features: [
      'Full Team Uniform Sets',
      'Professional Training Equipment',
      'Branded Kit Bags',
      'Sponsorship Logo Printing',
      'Special Club Packages',
    ],
    pricing: 'Custom Quotes Available',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const currentService = services.find((s) => s.id === activeTab)!;

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl uppercase">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Beyond products, we offer specialized services to support your sports journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex space-x-2 rounded-2xl bg-surface p-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  'flex items-center space-x-2 rounded-xl px-6 py-3 text-sm font-bold transition-all',
                  activeTab === service.id ? 'bg-primary text-background shadow-lg' : 'text-white hover:bg-white/5'
                )}
              >
                <service.icon size={20} />
                <span className="hidden sm:inline">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          >
            {/* Image Side */}
            <div className="relative aspect-video overflow-hidden rounded-3xl lg:aspect-square">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-background">
                  {currentService.pricing}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight text-white uppercase">
                {currentService.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/70">
                {currentService.description}
              </p>
              <div className="mb-10 space-y-4">
                {currentService.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-medium text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="group flex items-center space-x-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-background transition-all hover:bg-primary">
                <span>INQUIRE NOW</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Process Section */}
        <div className="mt-32">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight uppercase">HOW IT <span className="text-primary">WORKS</span></h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your requirements and design ideas with our experts.' },
              { step: '02', title: 'Design', desc: 'We create a digital mockup for your approval before production.' },
              { step: '03', title: 'Production', desc: 'High-quality manufacturing using premium materials.' },
              { step: '04', title: 'Delivery', desc: 'Fast and secure delivery to your doorstep or local pickup.' },
            ].map((item, i) => (
              <div key={i} className="relative rounded-3xl bg-surface p-8">
                <span className="mb-4 block text-4xl font-black text-primary/20">{item.step}</span>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-4 hidden h-0.5 w-8 bg-primary/20 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
